const AIRTABLE_FIELDS = {
  THREADS: {
    SUBJECT: 'fld7fCgudnqy8ItlP',
    THREAD_ID: 'fldm41c4wOv5il1AQ',
    SOURCE: 'fldXTuMAPdNiRWkT9',
    STATUS: 'fldhDlYgEkLgc7JO3'
  },

  EMAILS: {
    SUBJECT: 'fldi20RM4VWS0PVyQ',
    MESSAGE_ID: 'fldlrg3Q3BbnosrpO',
    THREAD: 'fldEHajxPL8tevypg',
    RECEIVED: 'fldLGXwoPVSBvJNck',
    FROM_NAME: 'fldAXfwXZcgRryfAv',
    FROM_EMAIL: 'fldpIpCiR5ETMhO6L',
    TO: 'fldBYm81uN0Amm88o',
    CC: 'fld4ES1rKVQSJwuFP',
    BODY: 'fldUAOYy9eGjtssPo',
    EMAIL_URL: 'fld5MYGBBBhvo8ZI0',
    SOURCE: 'fldt1RrHINQfeb7V8',
    DIRECTION: 'fldXD2Q3Y930Ai9fl',
    HAS_ATTACHMENTS: 'fldjQXuPsgK1qmL6P',
    ATTACHMENTS: 'fldJXmEjAUCWIQmFz',
    STATUS: 'fldWEKVw3xanJIa4w'
  }
};


function testConnections() {
  const config = getConfig_();

  console.log('Configuration: OK');

  const labels =
    Gmail.Users.Labels.list('me').labels || [];

  if (
    !labels.some(
      label => label.name === config.saveLabel
    )
  ) {
    throw new Error(
      'Gmail Save label was not found.'
    );
  }

  if (
    !labels.some(
      label => label.name === config.filedLabel
    )
  ) {
    throw new Error(
      'Gmail Filed label was not found.'
    );
  }

  console.log('Gmail labels: OK');

  const result =
    airtableRequest_(
      'get',
      config.threadsTableId,
      '?maxRecords=1'
    );

  if (!result.records) {
    throw new Error(
      'Unexpected Airtable response.'
    );
  }

  console.log('Airtable: OK');
  console.log(
    'All connection tests passed.'
  );
}


function importOneSavedThread() {
  const config =
    getConfig_();

  const labels =
    Gmail.Users.Labels.list('me').labels || [];

  const saveLabel =
    labels.find(
      label =>
        label.name === config.saveLabel
    );

  const filedLabel =
    labels.find(
      label =>
        label.name === config.filedLabel
    );

  if (!saveLabel) {
    throw new Error(
      'Save label not found.'
    );
  }

  if (!filedLabel) {
    throw new Error(
      'Filed label not found.'
    );
  }

  const queued =
    Gmail.Users.Messages.list(
      'me',
      {
        labelIds: [
          saveLabel.id
        ],
        maxResults: 1,
        includeSpamTrash: false
      }
    );

  const queuedMessages =
    queued.messages || [];

  if (
    queuedMessages.length === 0
  ) {
    console.log(
      'No messages waiting in Airtable / Save.'
    );

    return;
  }

  const seedMessage =
    Gmail.Users.Messages.get(
      'me',
      queuedMessages[0].id,
      {
        format: 'metadata'
      }
    );

  const gmailThreadId =
    seedMessage.threadId;

  if (!gmailThreadId) {
    throw new Error(
      'Queued Gmail message has no thread ID.'
    );
  }

  const gmailThread =
    Gmail.Users.Threads.get(
      'me',
      gmailThreadId,
      {
        format: 'full'
      }
    );

  const messages =
    gmailThread.messages || [];

  if (
    messages.length === 0
  ) {
    throw new Error(
      'Selected Gmail thread contains no messages.'
    );
  }

  console.log(
    'Found one Gmail thread containing ' +
    messages.length +
    ' message(s).'
  );

  const firstMessage =
    messages[0];

  const threadSubject =
    normalizeThreadSubject_(
      getHeader_(
        firstMessage,
        'Subject'
      )
    );

  let airtableThread =
    findAirtableRecord_(
      config.threadsTableId,
      AIRTABLE_FIELDS.THREADS.THREAD_ID,
      gmailThreadId
    );

  if (!airtableThread) {
    airtableThread =
      createAirtableRecord_(
        config.threadsTableId,
        {
          [AIRTABLE_FIELDS.THREADS.SUBJECT]:
            threadSubject,

          [AIRTABLE_FIELDS.THREADS.THREAD_ID]:
            gmailThreadId,

          [AIRTABLE_FIELDS.THREADS.SOURCE]:
            'Gmail',

          [AIRTABLE_FIELDS.THREADS.STATUS]:
            'Needs Review'
        }
      );

    console.log(
      'Created Email Thread record.'
    );
  } else {
    console.log(
      'Email Thread already exists.'
    );
  }

  let created = 0;
  let skipped = 0;
  let attachmentsUploaded = 0;

  for (
    const message of messages
  ) {
    let airtableEmail =
      findAirtableRecord_(
        config.emailsTableId,
        AIRTABLE_FIELDS.EMAILS.MESSAGE_ID,
        message.id
      );

    const nativeMessage =
      GmailApp.getMessageById(
        message.id
      );

    if (!nativeMessage) {
      throw new Error(
        'Could not load Gmail message ' +
        message.id +
        '.'
      );
    }

    const nativeAttachments =
      nativeMessage.getAttachments({
        includeInlineImages: true,
        includeAttachments: true
      });

    if (!airtableEmail) {
      const from =
        parseMailbox_(
          getHeader_(
            message,
            'From'
          )
        );

      const to =
        getHeader_(
          message,
          'To'
        ) || '';

      const cc =
        getHeader_(
          message,
          'Cc'
        ) || '';

      const messageSubject =
        normalizeMessageSubject_(
          getHeader_(
            message,
            'Subject'
          )
        );

      const body =
        cleanQuotedHistory_(
          nativeMessage.getPlainBody() ||
          ''
        );

      const direction =
        (
          message.labelIds || []
        ).includes('SENT')
          ? 'Sent'
          : 'Received';

      const received =
        message.internalDate
          ? new Date(
              Number(
                message.internalDate
              )
            ).toISOString()
          : null;

      const fields = {
        [AIRTABLE_FIELDS.EMAILS.SUBJECT]:
          messageSubject,

        [AIRTABLE_FIELDS.EMAILS.MESSAGE_ID]:
          message.id,

        [AIRTABLE_FIELDS.EMAILS.THREAD]:
          [
            airtableThread.id
          ],

        [AIRTABLE_FIELDS.EMAILS.FROM_NAME]:
          from.name,

        [AIRTABLE_FIELDS.EMAILS.FROM_EMAIL]:
          from.email,

        [AIRTABLE_FIELDS.EMAILS.TO]:
          to,

        [AIRTABLE_FIELDS.EMAILS.CC]:
          cc,

        [AIRTABLE_FIELDS.EMAILS.BODY]:
          body,

        [AIRTABLE_FIELDS.EMAILS.EMAIL_URL]:
          'https://mail.google.com/mail/u/0/#all/' +
          message.id,

        [AIRTABLE_FIELDS.EMAILS.SOURCE]:
          'Gmail',

        [AIRTABLE_FIELDS.EMAILS.DIRECTION]:
          direction,

        [AIRTABLE_FIELDS.EMAILS.HAS_ATTACHMENTS]:
          nativeAttachments.length > 0,

        [AIRTABLE_FIELDS.EMAILS.STATUS]:
          'Needs Review'
      };

      if (received) {
        fields[
          AIRTABLE_FIELDS.EMAILS.RECEIVED
        ] = received;
      }

      airtableEmail =
        createAirtableRecord_(
          config.emailsTableId,
          fields
        );

      created++;
    } else {
      skipped++;
    }

    const uploaded =
      uploadAttachmentsForMessage_(
        airtableEmail.id,
        nativeAttachments
      );

    attachmentsUploaded +=
      uploaded;

    if (
      uploaded > 0
    ) {
      console.log(
        'Attachments uploaded for one message: ' +
        uploaded
      );
    }

    updateAirtableRecord_(
      config.emailsTableId,
      airtableEmail.id,
      {
        [AIRTABLE_FIELDS.EMAILS.STATUS]:
          'Filed'
      }
    );
  }

  updateAirtableRecord_(
    config.threadsTableId,
    airtableThread.id,
    {
      [AIRTABLE_FIELDS.THREADS.STATUS]:
        'Filed'
    }
  );

  console.log(
    'Messages created: ' +
    created
  );

  console.log(
    'Messages already present: ' +
    skipped
  );

  console.log(
    'Attachments uploaded: ' +
    attachmentsUploaded
  );

  Gmail.Users.Threads.modify(
    {
      addLabelIds: [
        filedLabel.id
      ],

      removeLabelIds: [
        saveLabel.id
      ]
    },
    'me',
    gmailThreadId
  );

  console.log(
    'Gmail labels updated: Save removed, Filed applied.'
  );
}


function getConfig_() {
  const props =
    PropertiesService
      .getScriptProperties();

  const config = {
    baseId:
      props.getProperty(
        'AIRTABLE_BASE_ID'
      ),

    threadsTableId:
      props.getProperty(
        'AIRTABLE_THREADS_TABLE_ID'
      ),

    emailsTableId:
      props.getProperty(
        'AIRTABLE_EMAILS_TABLE_ID'
      ),

    token:
      props.getProperty(
        'AIRTABLE_TOKEN'
      ),

    saveLabel:
      props.getProperty(
        'GMAIL_SAVE_LABEL'
      ),

    filedLabel:
      props.getProperty(
        'GMAIL_FILED_LABEL'
      )
  };

  const missing =
    Object.entries(config)
      .filter(
        ([, value]) =>
          !value
      )
      .map(
        ([key]) =>
          key
      );

  if (
    missing.length
  ) {
    throw new Error(
      'Missing configuration values: ' +
      missing.join(', ')
    );
  }

  return config;
}


function airtableRequest_(
  method,
  tableId,
  suffix,
  payload
) {
  const config =
    getConfig_();

  const url =
    'https://api.airtable.com/v0/' +
    encodeURIComponent(
      config.baseId
    ) +
    '/' +
    encodeURIComponent(
      tableId
    ) +
    (
      suffix || ''
    );

  const options = {
    method: method,

    headers: {
      Authorization:
        'Bearer ' +
        config.token
    },

    muteHttpExceptions:
      true
  };

  if (
    payload !== undefined
  ) {
    options.contentType =
      'application/json';

    options.payload =
      JSON.stringify(
        payload
      );
  }

  const response =
    UrlFetchApp.fetch(
      url,
      options
    );

  const status =
    response.getResponseCode();

  if (
    status < 200 ||
    status >= 300
  ) {
    throw new Error(
      'Airtable request failed. HTTP status: ' +
      status
    );
  }

  return JSON.parse(
    response.getContentText()
  );
}


function findAirtableRecord_(
  tableId,
  fieldId,
  value
) {
  const escaped =
    String(value)
      .replace(
        /\\/g,
        '\\\\'
      )
      .replace(
        /"/g,
        '\\"'
      );

  const formula =
    '{' +
    fieldId +
    '}="' +
    escaped +
    '"';

  const suffix =
    '?maxRecords=1&filterByFormula=' +
    encodeURIComponent(
      formula
    );

  const result =
    airtableRequest_(
      'get',
      tableId,
      suffix
    );

  return (
    result.records &&
    result.records.length
  )
    ? result.records[0]
    : null;
}


function createAirtableRecord_(
  tableId,
  fields
) {
  const result =
    airtableRequest_(
      'post',
      tableId,
      '',
      {
        records: [
          {
            fields: fields
          }
        ]
      }
    );

  if (
    !result.records ||
    !result.records.length
  ) {
    throw new Error(
      'Airtable record creation returned no record.'
    );
  }

  return result.records[0];
}


function updateAirtableRecord_(
  tableId,
  recordId,
  fields
) {
  const result =
    airtableRequest_(
      'patch',
      tableId,
      '',
      {
        records: [
          {
            id: recordId,
            fields: fields
          }
        ]
      }
    );

  if (
    !result.records ||
    !result.records.length
  ) {
    throw new Error(
      'Airtable record update returned no record.'
    );
  }

  return result.records[0];
}


function getHeader_(
  message,
  name
) {
  const headers =
    (
      message.payload &&
      message.payload.headers
    )
      ? message.payload.headers
      : [];

  const found =
    headers.find(
      header =>
        header.name &&
        header.name.toLowerCase() ===
        name.toLowerCase()
    );

  return found
    ? found.value
    : '';
}


function parseMailbox_(
  value
) {
  if (!value) {
    return {
      name: '',
      email: ''
    };
  }

  const emailMatch =
    value.match(
      /<?([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})>?/i
    );

  const email =
    emailMatch
      ? emailMatch[1]
      : '';

  const name =
    email
      ? value
          .replace(
            email,
            ''
          )
          .replace(
            /[<>"]/g,
            ''
          )
          .trim()
      : value.trim();

  return {
    name: name,
    email: email
  };
}


function normalizeThreadSubject_(
  subject
) {
  const value =
    String(
      subject || ''
    ).trim();

  if (!value) {
    return '(No subject)';
  }

  const normalized =
    value
      .replace(
        /^((re|fw|fwd):\s*)+/i,
        ''
      )
      .trim();

  return normalized ||
    '(No subject)';
}


function normalizeMessageSubject_(
  subject
) {
  const value =
    String(
      subject || ''
    ).trim();

  if (!value) {
    return '(No subject)';
  }

  if (
    /^((re|fw|fwd):\s*)+$/i.test(
      value
    )
  ) {
    return '(No subject)';
  }

  return value;
}


function cleanQuotedHistory_(
  body
) {
  if (!body) {
    return '';
  }

  const text =
    body
      .replace(
        /\r\n/g,
        '\n'
      )
      .trim();

  const patterns = [
    /\nOn .{0,500}?wrote:\s*\n/is,
    /\n-{5,}\s*Forwarded message\s*-{5,}/is
  ];

  let cut =
    text.length;

  for (
    const regex of patterns
  ) {
    const match =
      regex.exec(
        text
      );

    if (
      match &&
      match.index > 0
    ) {
      cut =
        Math.min(
          cut,
          match.index
        );
    }
  }

  const cleaned =
    text
      .slice(
        0,
        cut
      )
      .trim();

  return cleaned ||
    '(No new message text; quoted prior correspondence omitted.)';
}


function uploadAttachmentsForMessage_(
  airtableRecordId,
  attachments
) {
  if (
    !attachments ||
    attachments.length === 0
  ) {
    return 0;
  }

  const existingFilenames =
    getExistingAttachmentFilenames_(
      airtableRecordId
    );

  let uploaded = 0;

  for (
    const attachment of attachments
  ) {
    const filename =
      attachment.getName() ||
      'attachment';

    if (
      existingFilenames.has(
        filename
      )
    ) {
      continue;
    }

    uploadAttachmentToAirtable_(
      airtableRecordId,
      attachment
    );

    existingFilenames.add(
      filename
    );

    uploaded++;
  }

  return uploaded;
}


function getExistingAttachmentFilenames_(
  recordId
) {
  const config =
    getConfig_();

  const suffix =
    '/' +
    encodeURIComponent(
      recordId
    ) +
    '?returnFieldsByFieldId=true';

  const result =
    airtableRequest_(
      'get',
      config.emailsTableId,
      suffix
    );

  const attachments =
    (
      result.fields &&
      result.fields[
        AIRTABLE_FIELDS.EMAILS.ATTACHMENTS
      ]
    )
      ? result.fields[
          AIRTABLE_FIELDS.EMAILS.ATTACHMENTS
        ]
      : [];

  return new Set(
    attachments.map(
      item =>
        item.filename
    )
  );
}


function uploadAttachmentToAirtable_(
  recordId,
  blob
) {
  const config =
    getConfig_();

  const fileBytes =
    blob.getBytes();

  const base64 =
    Utilities.base64Encode(
      fileBytes
    );

  const url =
    'https://content.airtable.com/v0/' +
    encodeURIComponent(
      config.baseId
    ) +
    '/' +
    encodeURIComponent(
      recordId
    ) +
    '/' +
    encodeURIComponent(
      AIRTABLE_FIELDS.EMAILS.ATTACHMENTS
    ) +
    '/uploadAttachment';

  const payload = {
    contentType:
      blob.getContentType() ||
      'application/octet-stream',

    filename:
      blob.getName() ||
      'attachment',

    file:
      base64
  };

  const response =
    UrlFetchApp.fetch(
      url,
      {
        method:
          'post',

        headers: {
          Authorization:
            'Bearer ' +
            config.token
        },

        contentType:
          'application/json',

        payload:
          JSON.stringify(
            payload
          ),

        muteHttpExceptions:
          true
      }
    );

  const status =
    response.getResponseCode();

  if (
    status < 200 ||
    status >= 300
  ) {
    throw new Error(
      'Airtable attachment upload failed. HTTP status: ' +
      status
    );
  }

  return true;
}
