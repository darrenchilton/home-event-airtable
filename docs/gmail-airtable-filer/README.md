# Gmail → Airtable Filer

## Purpose

This workflow provides a lightweight InFiler-style filing system for Gmail. A user applies the Gmail label `Airtable / Save`; Google Apps Script imports the entire Gmail thread into Airtable and then moves the thread to `Airtable / Filed`.

The workflow is designed to be idempotent and retry-safe. Gmail message IDs and thread IDs are the canonical keys used to prevent duplicate Airtable records.

## Architecture

**Runtime:** Google Apps Script  
**Source:** Gmail  
**Destination:** Airtable Home base  
**Schedule:** Time-driven Apps Script trigger, every 5 minutes  
**Deployment:** No web deployment is required; the trigger runs the saved `Head` code.

### Gmail labels

- `Airtable / Save` — queue label applied manually to a Gmail message/thread.
- `Airtable / Filed` — applied only after all Airtable writes for the thread complete successfully.

### Airtable tables

#### Email Threads

One Airtable record per Gmail thread.

Primary responsibilities:

- store the normalized thread subject;
- store the Gmail thread ID;
- link to child Email records;
- provide first/latest message rollups;
- provide message count;
- provide links to Home Events, Resources, Health Care Providers, and Research;
- track filing status.

Key fields:

| Field | Purpose |
| --- | --- |
| Subject | Normalized thread subject; empty or bare reply subjects become `(No subject)` |
| Thread ID | Gmail thread ID; idempotency key |
| Source | Gmail / Outlook / Other |
| First Message | Rollup of earliest linked Email |
| Latest Message | Rollup of latest linked Email |
| Message Count | Count of linked Email records |
| Status | Filed / Needs Review / Closed |

#### Emails

One Airtable record per Gmail message.

Key fields:

| Field | Purpose |
| --- | --- |
| Subject | Individual Gmail message subject |
| Message ID | Gmail message ID; idempotency key |
| Thread | Link to Email Threads |
| Received | Gmail internal message timestamp |
| From Name / From Email | Parsed sender |
| To / CC | Original recipient headers |
| Body | Plain-text message body with common quoted-history removed |
| Email URL | Direct Gmail message URL |
| Source | Gmail / Outlook / Other |
| Direction | Received / Sent |
| Has Attachments | True when Gmail returns one or more attachments |
| Attachments | Files copied into Airtable |
| Status | Filed / Needs Review / Ignored |

## Processing flow

1. Apps Script finds one Gmail message carrying `Airtable / Save`.
2. It resolves that message's Gmail thread ID.
3. It retrieves the entire Gmail thread.
4. It looks for an existing Email Threads record by Gmail Thread ID.
5. If no thread record exists, it creates one with Status = `Needs Review`.
6. For every Gmail message in the thread:
   - look for an existing Emails record by Gmail Message ID;
   - create the Email record only if it does not already exist;
   - read the body with `GmailApp.getMessageById(...).getPlainBody()`;
   - read attachments with `getAttachments({includeInlineImages: true, includeAttachments: true})`;
   - upload attachments directly to the Airtable attachment field;
   - mark the Email record `Filed` only after attachment handling succeeds.
7. After every message succeeds, mark the parent Email Threads record `Filed`.
8. Finally, add `Airtable / Filed` and remove `Airtable / Save` in Gmail.

If any Airtable or attachment operation fails, Gmail remains in the Save queue so the next run can retry.

## Idempotency and retry behavior

The workflow uses two provider-native keys:

- Gmail Thread ID → Email Threads.Thread ID
- Gmail Message ID → Emails.Message ID

A retry never blindly recreates an existing Email or Email Threads record.

Attachment retry logic compares filenames already present on the Airtable Email record before uploading. This prevents the ordinary retry case from duplicating the same file.

### Known attachment limitation

Attachment deduplication is currently filename-based. If a single Gmail message contains two distinct attachments with the same filename, the second one may be skipped. A content hash or Gmail attachment identifier would be a stronger future key.

## Subject normalization

Thread subjects strip leading `Re:`, `Fw:`, or `Fwd:` prefixes.

If the remaining thread subject is empty, Airtable stores:

```
(No subject)
```

Individual Email subjects preserve normal reply prefixes, but an empty subject or a bare prefix such as `Re:` is normalized to `(No subject)`.

## Message body handling

The implementation intentionally uses Apps Script's native Gmail service for message bodies rather than decoding Gmail API MIME/Base64 payloads.

This avoids the decoding failures encountered during initial testing.

Quoted history is trimmed conservatively for common Gmail reply and forwarded-message markers. The Gmail URL remains the canonical route back to the full original message.

## Attachments

Attachments are obtained through the native GmailApp message object rather than the Gmail Advanced Service attachment decoder.

Both ordinary attachments and inline images are included.

Files are uploaded to Airtable using the Airtable attachment upload endpoint. The script does not log Airtable credentials, Authorization headers, attachment data, or email bodies.

## Configuration

The Apps Script project uses Script Properties. Values must be configured in Apps Script and must not be committed to GitHub.

Required properties:

```
AIRTABLE_BASE_ID
AIRTABLE_THREADS_TABLE_ID
AIRTABLE_EMAILS_TABLE_ID
AIRTABLE_TOKEN
GMAIL_SAVE_LABEL
GMAIL_FILED_LABEL
```

Current label values:

```
GMAIL_SAVE_LABEL=Airtable / Save
GMAIL_FILED_LABEL=Airtable / Filed
```

The Airtable token must remain only in Script Properties.

## Apps Script services

The project uses:

- Gmail Advanced Service for label/thread/message metadata and label updates;
- native `GmailApp` for message bodies and attachments;
- `UrlFetchApp` for Airtable REST requests.

## Scheduled trigger

The production trigger is:

- Function: `importOneSavedThread`
- Event source: Time-driven
- Interval: Every 5 minutes
- Deployment: Head

No Apps Script deployment is required for the trigger.

The script currently processes one queued Gmail thread per run. This is deliberately conservative. Queue draining can be expanded later if needed.

## Tested behavior

### Existing long thread

A previously filed Gmail conversation containing 11 messages was reprocessed without creating duplicate Email records.

### PDF attachment retry

A message titled `Court Prep Draft for print` had already created its Airtable records during earlier failed tests. A later retry:

- reused the existing Email Threads record;
- reused the existing Emails record;
- uploaded the missing PDF attachment;
- marked the Email and parent thread Filed;
- removed `Airtable / Save`;
- added `Airtable / Filed`.

### No-subject thread

A Gmail thread with no original subject was imported as one Airtable thread named `(No subject)`.

The thread contained two Email records:

- the incoming message;
- a sent reply.

Both directions were classified correctly and both messages were linked to the same Airtable thread.

## Failure behavior

The workflow is intentionally ordered so that Gmail is not removed from the Save queue until Airtable work succeeds.

Important behavior:

- Airtable thread is initially `Needs Review`;
- a new Email record is initially `Needs Review`;
- attachment processing runs before the Email is marked Filed;
- the parent thread is marked Filed only after every message succeeds;
- Gmail labels are changed last.

This makes failed runs recoverable through the normal scheduled retry.

## Security

- Airtable PAT is stored only in Apps Script Script Properties.
- The token is never committed to this repository.
- Diagnostic logging is intentionally status-only.
- Do not add logging of request headers, Script Properties, Airtable tokens, Gmail message bodies, or attachment payloads.
- Do not replace status-only Airtable error handling with response-body logging unless the response is first confirmed safe.

## Source

The current Apps Script source is stored at:

[`apps-script/gmail-to-airtable-filer/Code.gs`](../../apps-script/gmail-to-airtable-filer/Code.gs)

## Future improvements

Potential improvements, not required for the current working version:

- stronger attachment deduplication than filename alone;
- queue draining of more than one thread per run;
- monitoring/alerting for repeated Apps Script failures;
- optional Outlook ingestion into the same Email Threads / Emails model;
- user-facing filing UI or classification assistance;
- automatic linking to Home Events or other Home-base records after the filing workflow is proven stable.
