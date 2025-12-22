# Airtable Base Schema

> Auto-generated schema documentation
> Generated: 2025-12-22 09:33:05

---

## Tables

- [Schema Changes](#schema-changes)
- [Home Events](#home-events)
- [Navigation Directory](#navigation-directory)
- [Research](#research)
- [GCal](#gcal)
- [Article Classifications](#article-classifications)
- [Article Tags](#article-tags)
- [Schwab Checking](#schwab-checking)
- [Groceries](#groceries)
- [Resources](#resources)
- [Health](#health)
- [People](#people)
- [Research Persons](#research-persons)
- [Research Subjects](#research-subjects)
- [Research Works](#research-works)
- [Home Storage](#home-storage)
- [Albert Court Receipts](#albert-court-receipts)
- [Holiday Gifts](#holiday-gifts)
- [Directors](#directors)
- [Health Care Providers](#health-care-providers)
- [Job Listings](#job-listings)
- [Job URLs To Search](#job-urls-to-search)
- [Plymouth Tower Issues List](#plymouth-tower-issues-list)
- [8A Issues Log](#8a-issues-log)
- [Check Movies](#check-movies)
- [Learning Experience](#learning-experience)
- [Tracked Shows](#tracked-shows)
- [TV Shows](#tv-shows)
- [Field Analysis Results](#field-analysis-results)
- [Category Analysis](#category-analysis)
- [Words Settings](#words-settings)

---

## Schema Changes

**Table ID**: `tblktGkxolXgbeszW`

**Primary Field**: Event ID

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Event ID | Singlelinetext |  |
| Event Type | Single Select (8 options) |  |
| Entity | Single Select (2 options) |  |
| Description | Richtext |  |
| Table ID | Singlelinetext |  |
| Collaborator | Multiplecollaborators |  |
| Created | Createdtime |  |

---

## Home Events

**Table ID**: `tblYQbyKJJErXkZro`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula | Concatenates Title and formatted Start Time unless Appt Type is 'From Research'. |
| Start Time | Datetime |  |
| End Time | Datetime |  |
| Days Until | Formula |  |
| Appt Type | Single Select (41 options) |  |
| Research Type | Multiple Select (299 options) |  |
| Sub Type | Multiple Select (161 options) |  |
| New Event in Days | Number |  |
| Since Updated (seconds) | Formula |  |
| Description | Richtext |  |
| Hours Until | Formula |  |
| Date for Alerts | Formula | Formats the Start Time to 'YYYY-MM-DD HH:mm' for 24-hour time display. |
| Alerts | Formula | Generates alerts based on the number of days, hours, or seconds until an event. |
| Alerts Trigger | Checkbox |  |
| All Day Event? | Checkbox |  |
| Title | Singlelinetext |  |
| Location | Singlelinetext |  |
| Phone | Phonenumber |  |
| Participants | Multiple Select (52 options) |  |
| Status | Single Select (5 options) |  |
| Add to Google | Checkbox |  |
| Created (At) | Createdtime |  |
| Since Created (seconds) | Formula |  |
| Updated | Lastmodifiedtime |  |
| Date Check | Formula |  |
| G Cal Event ID | Multilinetext |  |
| Health Care Provider | Link to Unknown |  |
| Provider Name (from Health Care Provider) | Multiplelookupvalues |  |
| Specialty (from Health Care Provider) | Multiplelookupvalues |  |
| Address (from Health Care Provider) | Multiplelookupvalues |  |
| Phone (from Health Care Provider) | Multiplelookupvalues |  |
| Map (from Health Care Provider) | Multiplelookupvalues |  |
| Website (from Health Care Provider) | Multiplelookupvalues |  |
| Attachments | Multipleattachments |  |
| Household Tasks | Singlelinetext |  |
| Notes | Richtext |  |
| Force Update | Singlelinetext |  |
| New Date | Formula |  |
| Anniversary Next Year | Formula |  |
| Anniversary Next Month | Formula |  |
| Year Add | Checkbox |  |
| Month Add | Checkbox |  |
| Seconds Until | Formula |  |
| Parent Record (old) | Link to Unknown |  |
| Parent Record ID | Singlelinetext |  |
| Sub Record (old) | Link to Unknown |  |
| Created Month/Year | Formula |  |
| Long Text | Richtext |  |
| Company | Singlelinetext |  |
| Job Title | Singlelinetext |  |
| NYS Jobs Daily Link | Formula |  |
| SelectionCount | Number |  |
| Start Updates Check | Formula |  |
| Pre-Filled Annual | Formula |  |
| Sub Record ID | Singlelinetext |  |
| Record ID | Formula |  |
| Since Updated (hours) | Formula |  |
| Alert w Day | Formula |  |
| Last Updated by | Lastmodifiedby |  |
| Link to Research | Link to Unknown |  |
| AI Prompt | Multilinetext |  |
| Start Date w/o Time | Formula |  |
| End Date w/o Time | Formula |  |
| Force Into Random Report | Checkbox |  |
| Current Date | Formula | Formats the current date and time to 'YYYY-MM-DD HH:MM' |
| Seconds After | Formula |  |
| Fam Reminders Form | Formula |  |
| Claude.AI URL | Url |  |
| pronunciation | Singlelinetext |  |
| Attachment Image | Formula |  |
| Set To Midnight | Formula | Sets the Start Time to midnight of the same day. |
| Record_URL | Formula | Generates a URL to the current record |
| G Cal Event URL | Multilinetext |  |
| Base64 Encoded ID | Singlelinetext | Extracts the event ID from the G Cal Event URL field and encodes it in base64. |
| Update GCal? | Singlelinetext | Used to check if the record Google calendar fields were updated. If not the automation sets it to no so the update to google calendar does not run.  |
| Email Update | Checkbox |  |
| Move Car End Date (formula) | Formula | Calculates the time 1.5 hours after the Start Time |
| Send Definition | Checkbox |  |
| Difference from Midnight | Formula | Calculates the difference in hours and minutes between the Start Time and the Set To Midnight field, which sets the Start Time to midnight of the same day. |
| Stop Timer | Checkbox |  |
| Timer End Time | Formula |  |
| Work Timer Type | Single Select (5 options) |  |
| Start Timer | Checkbox |  |
| Effort (minutes) | Formula |  |
| Force Def | Singlelinetext |  |
| Month Delay | Checkbox |  |
| Check Delay | Formula | Indicates whether the 'Month Delay' field is checked and it has been at least 30 days since the last update of the record. |
| Truncated Title | Formula | Truncates the Title field to a maximum of 1000 characters |
| Truncated Description | Formula | Truncates the Title field to a maximum of 1000 characters |
| Since Updated (days) | Formula |  |
| Learning Experience | Link to Unknown |  |
| Current Time | Formula | Formats the current date and time to 'YYYY-MM-DD HH:MM' |
| Word Blackout | Formula | Determines if the current time is between 11pm and 5am, returning 'Yes' or 'No'. |
| Current Hour | Formula |  |
| Google Gemini URL | Url |  |
| Autonumber | Autonumber |  |
| Convert Created Date | Formula |  |
| Last day selected | Date |  |
| Perplexity URL | Url |  |
| Years Since | Formula | Calculates the number of years since the year in parentheses in the Name field.  |
| 14 Days Since Creation | Formula | Calculates the date that is 14 days after the Created (At) timestamp. |
| Reset Start URL | Formula |  |
| Temp Field | Singlelinetext |  |
| mnemonic prompt | Formula |  |
| GitHub URL | Url |  |
| Interface Record Detail | Multilinetext |  |
| ChatGPT URL | Url |  |
| Current Working | Checkbox |  |
| Temp | Checkbox |  |
| From GCal | Checkbox |  |
| Interface Record Detail URL | Button | Outputs the URL from the Interface Record Detail field for use in a button. |
| Parent | Link to Unknown |  |
| From field: Parent (Canonical) | Link to Unknown |  |
| Children (do not edit) | Link to Unknown |  |
| From field: Children (new) | Link to Unknown |  |
| Sync lock | Checkbox |  |
| Old Parent (snapshot) | Singlelinetext |  |
| Prev Parent (new) | Link to Unknown |  |
| From field: Prev Parent (new) | Link to Unknown |  |
| Words Settings | Link to Unknown |  |
| Words Window End (from Words Settings) | Multiplelookupvalues |  |
| Words Window Start (from Words Settings) | Multiplelookupvalues |  |
| In Active Window | Formula |  |
| Airtable URL | Url |  |

---

## Navigation Directory

**Table ID**: `tblBjZVn4orH8yyY7`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| Sort Order | Number |  |
| Category | Single Select (12 options) |  |
| Link Name | Singlelinetext |  |
| Link Type | Single Select (5 options) |  |
| URL | Url |  |
| Description | Multilinetext |  |
| Active | Checkbox |  |
| Link Button | Button | Creates an HTML link that opens the URL in a new tab. |
| Temp | Formula |  |
| Interface Location | Single Select (3 options) |  |
| Last Modified | Lastmodifiedtime |  |

---

## Research

**Table ID**: `tblpdti2tAy2eINb2`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Created (AT) | Createdtime |  |
| Definition | Richtext |  |
| Area | Multiple Select (12 options) |  |
| Category | Single Select (23 options) |  |
| Link to Articles | Link to Unknown |  |
| SubCategory | Single Select (30 options) |  |
| People | Link to Unknown |  |
| Notes | Richtext |  |
| Attachments | Multipleattachments |  |
| Status | Single Select (3 options) |  |
| URLs | Multilinetext |  |
| Home Events copy | Singlelinetext |  |

---

## GCal

**Table ID**: `tblfp8SbGTSNPQR0r`

**Primary Field**: Title

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Title | Singlelinetext |  |
| Start | Datetime |  |
| End | Datetime |  |
| Open in Google Calendar | Button |  |
| All Day | Checkbox |  |
| Recurring Event | Checkbox |  |
| Creator | Email |  |
| Status | Single Select (1 options) |  |
| Location | Singlelinetext |  |
| Description | Multilinetext |  |
| Attendees | Singlelinetext |  |
| Created | Datetime |  |
| Updated | Datetime |  |
| Event Link | Url |  |
| Hangouts Link | Url |  |
| Event ID | Singlelinetext |  |

---

## Article Classifications

**Table ID**: `tblnJjjCvYBWNtih1`

**Primary Field**: Category

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Category | Multilinetext |  |
| Definition | Multilinetext |  |
| Articles | Singlelinetext |  |

---

## Article Tags

**Table ID**: `tblyfLKtQjmxzusRt`

**Primary Field**: Tag

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Tag | Multilinetext |  |
| Definition | Multilinetext |  |
| Articles | Singlelinetext |  |

---

## Schwab Checking

**Table ID**: `tblPCpCSlxpjnHuaZ`

**Primary Field**: Date

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Date | Date |  |
| Status | Single Select (2 options) |  |
| Type | Single Select (11 options) |  |
| Withdrawal | Currency |  |
| Deposit | Currency |  |
| Description | Singlelinetext |  |
| Beograd | Checkbox |  |
| Monthly Bill | Checkbox |  |
| Link to Groceries | Singlelinetext |  |
| RunningBalance | Multilinetext |  |
| Day | Formula |  |
| Month-Year | Formula |  |
| CheckNumber | Number |  |
| Description (Text) | Formula |  |
| Maintenance | Single Select (2 options) |  |
| Check It | Checkbox |  |
| Year | Formula |  |
| Note | Multilinetext |  |
| Created (AT) | Createdtime |  |
| Check on Charges | Checkbox |  |

---

## Groceries

**Table ID**: `tblpz73Lvp5YPWuQF`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| Location | Single Select (7 options) |  |
| Aisle | Single Select (17 options) |  |
| Brand | Single Select (41 options) |  |
| List | Single Select (99 options) |  |
| Total Units | Singlelinetext |  |
| Unit | Single Select (9 options) |  |
| Price | Currency |  |
| Price per Unit | Formula |  |
| Meat (Y/N) | Formula |  |
| Label | Multipleattachments |  |

---

## Resources

**Table ID**: `tblJyrUqobEmzIAkQ`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| Size | Number |  |
| Short Description | Richtext |  |
| Status | Multiple Select (11 options) |  |
| Desc | Richtext |  |
| Purchase Date | Date |  |
| Procedurs | Multilinetext |  |
| Notes | Multilinetext |  |
| Attachments | Multipleattachments |  |
| Location | Single Select (15 options) |  |
| Category | Multiple Select (22 options) |  |
| Age Yers | Formula |  |
| Power On (yrs) | Formula |  |
| Power On (hrs) | Number |  |
| Last Backup | Date |  |
| Days Since Last Backup | Formula |  |
| Warranty | Multilinetext |  |
| Created Date (AT) | Createdtime |  |
| Additional Information | Richtext |  |
| URL | Url |  |
| Size/Type | Single Select (11 options) |  |
| Age Days | Formula |  |
| Receive Date | Date |  |
| Cost | Currency |  |
| Cost Per Day | Formula |  |
| Cost Per Month | Formula |  |
| Connect To Water Reading | Link to Unknown |  |
| Serial | Singlelinetext |  |
| Model / Acct # | Singlelinetext |  |
| Service Date | Date |  |
| More Info (url) | Url |  |
| Phone | Phonenumber |  |
| Resource Name | Singlelinetext |  |
| Manual (attachment) | Multipleattachments |  |
| Millage | Number |  |
| Last Update | Lastmodifiedtime |  |
| Start Date | Date |  |
| End Date | Date |  |
| Days Until Date | Formula |  |
| Start Day of Week | Formula |  |
| End Day of Week | Formula |  |
| Aisle | Singlelinetext |  |
| List | Singlelinetext |  |
| Options | Singlelinetext |  |
| Price | Currency |  |
| P Date (Euro) | Formula |  |
| Moved to new Base | Checkbox |  |
| Backup Timer Start | Datetime |  |
| Timer Countdown | Formula |  |
| Learning Experience | Singlelinetext |  |
| Copy Temp | Formula |  |

---

## Health

**Table ID**: `tblh6CWpNdaZ6VlkD`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| Date | Date |  |
| Who? | Link to Unknown |  |
| What? | Singlelinetext |  |
| Where? | Singlelinetext |  |
| Preliminary Documents | Multipleattachments |  |
| Final Documents | Multipleattachments |  |
| Notes | Multilinetext |  |
| Type | Multiple Select (2 options) |  |
| URL | Url |  |
| Vaccine | Multiple Select (6 options) |  |
| Testing | Multiple Select (2 options) |  |
| People | Link to Unknown |  |
| Weight | Number |  |
| Years since event | Formula |  |

---

## People

**Table ID**: `tblAugVXKLWMk2t3L`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| DOB | Date |  |
| Health Transactions | Link to Unknown |  |
| Blood Type | Singlelinetext |  |
| Allergies | Single Select (1 options) |  |
| Insurance | Link to Unknown |  |
| Primary Care | Singlelinetext |  |
| Specialists | Singlelinetext |  |
| Patient Portals | Richtext |  |
| Notes | Multilinetext |  |
| Assignee | Singlecollaborator |  |
| Status | Single Select (3 options) |  |

---

## Research Persons

**Table ID**: `tbllaltSIUR5XDxFz`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| First Name | Singlelinetext |  |
| Last Name | Singlelinetext |  |
| Research Categories | Multiple Select (14 options) |  |
| Research | Link to Unknown |  |
| Wki Page | Url |  |
| Randoms | Richtext |  |
| Subjects | Link to Unknown |  |
| Attachments | Multipleattachments |  |
| Connected Persons | Link to Unknown |  |
| Research Works | Link to Unknown |  |
| Assignee | Singlecollaborator |  |
| Status | Single Select (3 options) |  |
| Notes | Multilinetext |  |

---

## Research Subjects

**Table ID**: `tbl1KOtXQ9Q55eAWY`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Notes | Multilinetext |  |
| Associated with | Link to Unknown |  |
| Assignee | Singlecollaborator |  |
| Status | Single Select (3 options) |  |
| Research Works | Singlelinetext |  |

---

## Research Works

**Table ID**: `tblcSN4f0DhsUoBhB`

**Primary Field**: Title

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Title | Singlelinetext |  |
| Creator | Link to Unknown |  |
| Notes | Multilinetext |  |
| Type | Single Select (7 options) |  |
| Year | Number |  |
| Assignee | Singlecollaborator |  |
| Status | Single Select (3 options) |  |

---

## Home Storage

**Table ID**: `tblBp5svY7D0NRH9B`

**Primary Field**: Items

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Items | Singlelinetext |  |
| Notes | Richtext |  |
| Main Location | Single Select (25 options) |  |
| Sub Location | Single Select (10 options) |  |
| Last Modified Date | Lastmodifiedtime |  |
| Last Modified By | Lastmodifiedby |  |
| Last Update | Singlelinetext |  |

---

## Albert Court Receipts

**Table ID**: `tblSNWU2Vwkm2sGaS`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| By Name | Singlelinetext |  |
| Date | Date |  |
| Amount | Currency |  |
| Notes | Multilinetext |  |
| Attachments | Multipleattachments |  |
| Status | Single Select (3 options) |  |

---

## Holiday Gifts

**Table ID**: `tblyXPy5xp9zFAEhz`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula |  |
| Person Name | Singlelinetext |  |
| Attachments | Multipleattachments |  |
| Amount | Currency |  |
| Status | Single Select (3 options) |  |
| Notes | Singlelinetext |  |
| Year | Number |  |
| Catgory | Single Select (3 options) |  |
| Desc | Singlelinetext |  |

---

## Directors

**Table ID**: `tbl3TKJ3EOf14uPTM`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Multilinetext |  |
| Notes | Multilinetext |  |
| Status | Single Select (4 options) |  |
| IMDB | Singlelinetext |  |
| Favorite Directors | Richtext |  |
| Influences (Non Cinema) | Richtext |  |
| Attachments | Multipleattachments |  |

---

## Health Care Providers

**Table ID**: `tblo5E0sRYdBH1zh2`

**Primary Field**: Provider Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Provider Name | Multilinetext |  |
| Appointments | Singlelinetext |  |
| Specialty | Multiple Select (9 options) |  |
| Hospital/Clinic | Singlelinetext |  |
| Address | Multilinetext |  |
| Phone | Phonenumber |  |
| Fax | Phonenumber |  |
| Map | Url |  |
| Website | Url |  |
| Hours | Multilinetext |  |
| Notes | Multilinetext |  |
| Patients | Singlelinetext |  |
| VIP Docs | Multipleattachments |  |
| Dashboard | Url |  |
| Home Events | Link to Unknown |  |
| DRS Only | Checkbox |  |
| Home Events copy | Singlelinetext |  |

---

## Job Listings

**Table ID**: `tbl64C2opqhCnNAMV`

**Primary Field**: JobID

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| JobID | Singlelinetext |  |
| Title | Singlelinetext |  |
| Location | Singlelinetext |  |
| Salary | Singlelinetext |  |
| PostingDate | Date |  |
| Deadline | Date |  |
| JobLink | Url |  |
| Status | Single Select (2 options) |  |
| Notes | Multilinetext |  |
| LastUpdated (AT) | Lastmodifiedtime |  |
| JobSearch | Singlelinetext |  |
| Created (AT) | Createdtime |  |
| Home Events | Singlelinetext |  |
| LastChecked | Datetime |  |
| Date Applied | Multiplelookupvalues |  |
| Numeric Salary | Formula | Converts the Salary field from text to a numeric value. |
| Days since deadline | Formula |  |
| Attachments | Multipleattachments |  |
| Field 19 | Singlelinetext |  |

---

## Job URLs To Search

**Table ID**: `tbl7dLOiUh7vR9Imc`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Status | Single Select (2 options) |  |
| Link | Url |  |
| Scripting Notes | Multilinetext |  |

---

## Plymouth Tower Issues List

**Table ID**: `tblvqremXMVUxnR3G`

**Primary Field**: Request Number ID

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Request Number ID | Formula |  |
| Status | Single Select (3 options) |  |
| Repair Request | Multilinetext |  |
| Home Category | Single Select (7 options) |  |
| Record No | Formula |  |
| Date | Date |  |
| 8A Issues Log | Link to Unknown |  |
| Request # | Singlelinetext |  |
| Attachments | Multipleattachments |  |
| Days since reported | Formula |  |

---

## 8A Issues Log

**Table ID**: `tblPkfFbDaoIlwcVT`

**Primary Field**: Date

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Date | Multilinetext |  |
| RequestID | Link to Unknown |  |
| ActionType | Multilinetext |  |
| Actor | Multilinetext |  |
| Comment | Multilinetext |  |
| Status | Single Select (4 options) |  |

---

## Check Movies

**Table ID**: `tblQEwZscRTlEsuwl`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Year (Number) | Number |  |
| Director | Singlelinetext |  |
| Synopsis | Multilinetext |  |
| Search Field | Multilinetext |  |
| Status | Single Select (3 options) |  |
| Notes | Multilinetext |  |
| Check | Checkbox |  |
| TMDB ID | Singlelinetext |  |

---

## Learning Experience

**Table ID**: `tbla51qhgULIfKojc`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Source Link | Url |  |
| Notes | Multilinetext |  |
| Attachments | Multipleattachments |  |
| Date of Learning | Date |  |
| Duration | Duration |  |
| Key Takeaways | Multilinetext |  |
| Related Event | Link to Unknown |  |
| Claude.AI | Url |  |
| Transcript Text | Richtext |  |
| Transcripts | Multipleattachments |  |
| Home Events copy | Singlelinetext |  |

---

## Tracked Shows

**Table ID**: `tblCpVRiut0I84J9H`

**Primary Field**: Show Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Show Name | Singlelinetext |  |
| Active | Checkbox |  |
| Notes | Multilinetext |  |

---

## TV Shows

**Table ID**: `tblP36OdchI54KZSC`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Multilinetext |  |
| TMDB Run Time | Number |  |
| TMDB Budget | Currency |  |
| TMDB Revenue | Currency |  |
| TMDB Genres | Singlelinetext |  |
| TMDB Director | Singlelinetext |  |
| TMDB Cast | Multilinetext |  |
| TMDB Rating | Number |  |
| TMDB Overview | Multilinetext |  |
| TMDB US_Providers | Singlelinetext |  |
| Updated by | Singlecollaborator |  |

---

## Field Analysis Results

**Table ID**: `tblCsFJ1oxKZDPSC9`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Singlelinetext |  |
| Category | Singlelinetext |  |
| Appt Type | Singlelinetext |  |
| Field Name | Singlelinetext |  |
| Usage Count | Number |  |
| Usage Percent | Number |  |
| Total Records | Number |  |
| Notes | Multilinetext |  |

---

## Category Analysis

**Table ID**: `tblw7EhOIRHjLhghG`

**Primary Field**: Analysis Type

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Analysis Type | Multilinetext |  |
| Category Name | Multilinetext |  |
| Record Count | Number |  |
| Uses Research Type | Number |  |
| Uses Sub Type | Number |  |
| Related Categories | Multilinetext |  |
| Notes | Multilinetext |  |

---

## Words Settings

**Table ID**: `tbljiyBCDInZQGSd5`

**Primary Field**: Name

### Fields

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Formula | Displays Words Window Start and End as mm/dd/yyyy - mm/dd/yyyy. |
| Words Window Start | Date |  |
| Words Window End | Date |  |
| Home Events | Link to Unknown |  |
| Record ID | Formula |  |
| Name Rollup (from Home Events) | Rollup |  |

---
