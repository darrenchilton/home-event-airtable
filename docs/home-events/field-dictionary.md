# Home Events field dictionary

**Live table:** Home Events (`tblYQbyKJJErXkZro`)  
**Audit date:** 2026-09-17

Status labels:
- **Active** — current core data or integration field.
- **Operational** — current helper, calculation, or specialized workflow support.
- **Legacy / unclear** — migration-era or insufficiently evidenced field; preserve pending dependency review.
- **Unclear** — purpose is not established from the schema alone.

The **Relationship / formula dependency** column uses live field IDs where that is the unambiguous source. See [data model](data-model.md) and [legacy notes](legacy-and-cleanup-notes.md) for interpretation.

| Field | Type | Meaning | Relationship / formula dependency | Status |
| --- | --- | --- | --- | --- |
| `Name` | `formula` | Primary display identifier; concatenates Title, created-date text, and Autonumber. | refs: fldSBxahTfGgcUT4y, fldLHBbximT7aXALA, fldCRJe4MuLCPAQzE | Unclear |
| `New Event in Days` | `number` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Appt Type` | `singleSelect` | Single operational event classification; not a recurrence field. | — | Active |
| `Created (At)` | `createdTime` | System audit metadata. | — | Unclear |
| `Status` | `singleSelect` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Start Time` | `dateTime` | Scheduled start in America/New_York. | — | Active |
| `End Time` | `dateTime` | Scheduled end in America/New_York. | — | Active |
| `Research Type` | `multipleSelects` | Multi-select subject/category tags; independent of operational classification. | — | Active |
| `Sub Type` | `multipleSelects` | Secondary multi-select detail tags. | — | Active |
| `Since Updated (seconds)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldm3cM5bsYhCEnwa | Operational |
| `Updated` | `lastModifiedTime` | System audit metadata. | — | Unclear |
| `Children (do not edit)` | `multipleRecordLinks` | System-maintained child self-link; do not edit directly. | Home Events (self) | Active |
| `Recurrence` | `singleSelect` | Repeat cadence: Monthly, Annual, or Custom Days; governs scheduling only. | — | Active |
| `Next Recurrence Date` | `formula` | Computed next scheduled date from Recurrence, Start Time, and New Event in Days. | refs: fldNQ6jOY5U92opnp, fld43BW7fjYMrLjs9, fld6mlhWRE0pdltzC | Active |
| `Title` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Notes` | `richText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Parent` | `multipleRecordLinks` | Canonical self-link to the parent event; supports the child-record workflow. | Home Events (self) | Active |
| `Set To Midnight` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Description` | `richText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Date for Alerts` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Active |
| `Alerts` | `formula` | Computed alert-window label based on time until Start Time. | refs: fld7bMiLrkWGdp6UF, fldSeEHRacXpiMxPX | Active |
| `Hours Until` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Days Until` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Alerts Trigger` | `checkbox` | Per-record enable switch for alert workflows. | — | Active |
| `All Day Event?` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Active |
| `Location` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Phone` | `phoneNumber` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Participants` | `multipleSelects` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Add to Google` | `checkbox` | Requests initial Google Calendar creation. | — | Active |
| `Since Created (seconds)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldphRwWJsdA4Gj5N | Operational |
| `Date Check` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: flduWwxeEP5fKzSKZ, fld43BW7fjYMrLjs9 | Operational |
| `G Cal Event ID` | `multilineText` | Stored external Calendar event identifier. | — | Active |
| `Health Care Provider` | `multipleRecordLinks` | Link to Health Care Providers; exposes provider details through lookup fields. | tblo5E0sRYdBH1zh2 | Active |
| `Provider Name (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Specialty (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Address (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Phone (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Map (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Website (from Health Care Provider)` | `multipleLookupValues` | Derived value from a linked record. | via fldMprscbmJCIG4Tb | Active |
| `Attachments` | `multipleAttachments` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Household Tasks` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Force Update` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Legacy / unclear |
| `Seconds Until` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Created Month/Year` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldphRwWJsdA4Gj5N | Operational |
| `Long Text` | `richText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Company` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Job Title` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `NYS Jobs Daily Link` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Unclear |
| `SelectionCount` | `number` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Start Updates Check` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldm3cM5bsYhCEnwa, fldphRwWJsdA4Gj5N | Unclear |
| `Record ID` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Unclear |
| `Since Updated (hours)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldm3cM5bsYhCEnwa | Operational |
| `Alert w Day` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Last Updated by` | `lastModifiedBy` | System audit metadata. | — | Unclear |
| `Link to Research` | `multipleRecordLinks` | Link to Research records. | tblpdti2tAy2eINb2 | Active |
| `AI Prompt` | `multilineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Start Date w/o Time` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `End Date w/o Time` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: flduWwxeEP5fKzSKZ | Operational |
| `Force Into Random Report` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Legacy / unclear |
| `Current Date` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Operational |
| `Seconds After` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: flduWwxeEP5fKzSKZ | Operational |
| `Fam Reminders Form` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Unclear |
| `Claude.AI URL` | `url` | Navigation or external-service helper. | — | Unclear |
| `pronunciation` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Operational |
| `Attachment Image` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldZ202ma0JWEFr4h | Unclear |
| `Record_URL` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Unclear |
| `G Cal Event URL` | `multilineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Active |
| `Base64 Encoded ID` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Operational |
| `Update GCal?` | `singleLineText` | Sync-control value used to decide whether an existing Calendar event is updated. | — | Active |
| `Email Update` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Unclear |
| `Move Car End Date (formula)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9 | Operational |
| `Send Definition` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Unclear |
| `Difference from Midnight` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fld43BW7fjYMrLjs9, fldjnOKpvnunZ5QNT | Operational |
| `Stop Timer` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Operational |
| `Timer End Time` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Active |
| `Work Timer Type` | `singleSelect` | User-entered or workflow-supporting value; live use should be checked before change. | — | Operational |
| `Start Timer` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Active |
| `Effort (minutes)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: flduWwxeEP5fKzSKZ, fld43BW7fjYMrLjs9 | Operational |
| `Force Def` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Legacy / unclear |
| `Month Delay` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Operational |
| `Check Delay` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldJs9Pv2kjecwrE4, fldm3cM5bsYhCEnwa | Operational |
| `Truncated Title` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldSBxahTfGgcUT4y | Operational |
| `Truncated Description` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldfmgCh93wZoHRDa | Operational |
| `Since Updated (days)` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldm3cM5bsYhCEnwa | Operational |
| `Learning Experience` | `multipleRecordLinks` | Link to Learning Experience records. | tbla51qhgULIfKojc | Active |
| `Current Time` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Operational |
| `Word Blackout` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Operational |
| `Current Hour` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Operational |
| `Google Gemini URL` | `url` | Navigation or external-service helper. | — | Active |
| `Autonumber` | `autoNumber` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Convert Created Date` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldphRwWJsdA4Gj5N | Legacy / unclear |
| `Last day selected` | `date` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `Perplexity URL` | `url` | Navigation or external-service helper. | — | Unclear |
| `Years Since` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldEVqyty5wYXRkLT | Operational |
| `14 Days Since Creation` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldphRwWJsdA4Gj5N | Operational |
| `Reset Start URL` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | — | Legacy / unclear |
| `Temp Field` | `singleLineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Legacy / unclear |
| `mnemonic prompt` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldSBxahTfGgcUT4y | Operational |
| `GitHub URL` | `url` | Navigation or external-service helper. | — | Unclear |
| `Interface Record Detail` | `multilineText` | User-entered or workflow-supporting value; live use should be checked before change. | — | Unclear |
| `ChatGPT URL` | `url` | Navigation or external-service helper. | — | Unclear |
| `Current Working` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Unclear |
| `Temp` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Legacy / unclear |
| `From GCal` | `checkbox` | Boolean workflow or user-control flag; confirm dependency before changing. | — | Active |
| `Interface Record Detail URL` | `button` | Navigation or external-service helper. | — | Unclear |
| `From field: Parent (Canonical)` | `multipleRecordLinks` | Inverse/self-link supporting the canonical Parent relationship. | Home Events (self) | Legacy / unclear |
| `From field: Children (new)` | `multipleRecordLinks` | Inverse/self-link for the newer Children relationship; coexistence requires review. | Home Events (self) | Legacy / unclear |
| `Prev Parent (new)` | `multipleRecordLinks` | Historical parent-state self-link retained for relationship tracking. | Home Events (self) | Legacy / unclear |
| `From field: Prev Parent (new)` | `multipleRecordLinks` | Inverse of Prev Parent (new). | Home Events (self) | Legacy / unclear |
| `Words Settings` | `multipleRecordLinks` | Link to Words Settings, supplying the active testing window. | tbljiyBCDInZQGSd5 | Active |
| `Words Window End (from Words Settings)` | `multipleLookupValues` | Derived value from a linked record. | via fldmeu4WZ3sWUT5yc | Active |
| `Words Window Start (from Words Settings)` | `multipleLookupValues` | Derived value from a linked record. | via fldmeu4WZ3sWUT5yc | Active |
| `In Active Window` | `formula` | Computed helper; formula and referenced fields are recorded below when material. | refs: fldphRwWJsdA4Gj5N, fldqW1rqWMKf7gMpf, fldUgVJyeOYp7yCrw | Operational |
| `Airtable URL` | `url` | Navigation or external-service helper. | — | Unclear |
