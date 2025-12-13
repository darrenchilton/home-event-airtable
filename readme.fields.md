# Fields Documentation

> Comprehensive field definitions, formulas, types, and usage patterns across all tables

## Overview

This documentation catalogs all fields in the Home Events base, their purposes, formulas, and automation dependencies. Use this as a reference before making schema changes.

**Tables in Base**: 2 main tables (Home Events, Schema Changes)  
**Home Events Fields**: 119 fields  
**Formula Fields**: 40+ fields  
**Linked Record Fields**: 15+ fields  
**Last Updated**: December 13, 2025  
**Last Schema Extract**: December 13, 2025

---

## Field Categories

### Home Events Table Fields

The Home Events table is the primary table with **119 fields** organized into functional categories:

#### Core Identity

##### Name
- **Field ID**: `fldEVqyty5wYXRkLT`
- **Type**: Formula
- **Purpose**: Primary record identifier - concatenates Title, date, and autonumber
- **Formula**: `CONCATENATE({fldSBxahTfGgcUT4y},"-",{fldLHBbximT7aXALA},"-",{fldCRJe4MuLCPAQzE})`
- **Result Type**: singleLineText
- **Used By**: All automations, primary field for views
- **Example**: "Doctor Appointment-25-12-13-1234"

##### Title
- **Field ID**: `fldSBxahTfGgcUT4y`
- **Type**: Singlelinetext
- **Purpose**: User-entered event title
- **Used By**: Google Calendar sync, email notifications, Name formula
- **Notes**: This is the actual text users enter, which gets formatted into Name field

##### Appt Type
- **Field ID**: `fldhK5IfHRAso54iK`
- **Type**: Single Select (41 options)
- **Purpose**: Primary event categorization and routing
- **Options**:
  - Add to Plex (redBright)
  - AI (yellowDark1)
  - Annual (grayDark1) ← Recurring type
  - Automotive (yellowBright)
  - Consulting (pinkDark1)
  - Cut Grass (cyanBright)
  - DRS Appt (orangeDark1)
  - Entertainment (purpleDark1)
  - Equipment/Services (greenLight1)
  - Family Reminder (tealLight1)
  - Financial (tealDark1)
  - Friends (yellowLight1)
  - From Research (greenLight2)
  - Health (redLight1)
  - History (tealLight2)
  - Home Maintenance (yellowBright)
  - Home Technical Work (yellowLight2)
  - Home VIP Dates (orangeLight1)
  - Important Thoughts (cyanLight2)
  - Insurance (blueLight1)
  - Job Interview (greenDark1)
  - Job Search (greenDark1)
  - Knowledge (purpleLight2)
  - Misc (grayLight2)
  - Monthly (orangeBright) ← Recurring type
  - Move car (pinkLight1)
  - Payment Due (yellowBright)
  - Pers Dev (cyanLight1)
  - Potential Work (purpleLight1)
  - Receipts (orangeLight2)
  - School (pinkLight2)
  - Social Movements & Democracy (redDark1)
  - Subscription Due (yellowBright)
  - SuperProd (tealBright)
  - To ReType (blueLight2)
  - Travel (purpleDark1)
  - UBC (greenBright)
  - VIP Resources (grayBright)
  - Words To Learn (redLight2)
  - Work Timer (blueBright)
  - Writing (grayLight1)
- **Used By**: 
  - Event routing (Cancel Event, Event Past, New Annual/Monthly)
  - Recurring event logic (Annual, Monthly)
  - Alert filtering
  - View filters
- **Critical**: Changes affect multiple automation filter chains

##### Sub Type
- **Field ID**: `fldVp0MgHf11YNjud`
- **Type**: Multiple Select (160 options)
- **Purpose**: Secondary classification for detailed categorization
- **Migration Status**: ⚠️ Under reorganization
- **Options**: 160 different options (2024 Election, Academic debate, actors, agentic, etc.)
- **Impact Assessment**: Most automations safe (don't filter on Sub Type)
- **Used By**: Display/organization only (few automation dependencies)
- **Note**: Can select multiple values unlike Appt Type

##### Research Type
- **Field ID**: `fldTOSyaubEtYdqwk`
- **Type**: Multiple Select (298 options)
- **Purpose**: Tags for research content categorization
- **Common Values**:
  - TV Show, Cancel, Archive, AI, Health, History, etc.
  - 298 total options available
- **Used By**:
  - Event Past (Not TV) vs Event Past (TV) split
  - 3 Hour Alert filtering
  - Words to Learn integration
  - Research organization

---

#### Timing & Scheduling

##### Start Time
- **Field ID**: `fld43BW7fjYMrLjs9`
- **Type**: Datetime
- **Date Format**: us
- **Time Format**: 24hour
- **Time Zone**: America/New_York
- **Purpose**: Event start date and time
- **Required**: Yes (for most events)
- **Used By**:
  - Google Calendar sync
  - Alert calculations
  - Event completion detection
  - Recurring event date computation
- **Watched By**: Update GCal? automation (triggers sync on change)

##### End Time
- **Field ID**: `flduWwxeEP5fKzSKZ`
- **Type**: Datetime
- **Date Format**: us
- **Time Format**: 24hour
- **Time Zone**: America/New_York
- **Purpose**: Event end date and time
- **Auto-Fill**: Check End Date automation copies from Start Time if empty
- **Used By**:
  - Google Calendar sync
  - Alert timing (3 Hour Alert uses End Time)
  - Event completion detection
  - Effort calculations
- **Watched By**: Update GCal? automation

##### All Day Event?
- **Field ID**: `flduFHXlWBtXyeO1F`
- **Type**: Checkbox
- **Purpose**: Flags events spanning full day(s)
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: Google Calendar sync formatting
- **Watched By**: Update GCal? automation

##### Date Check
- **Field ID**: `fldGNAHsM1RMVL9sb`
- **Type**: Formula
- **Purpose**: Validates event timing - calculates minutes between Start and End Time
- **Formula**: `DATETIME_DIFF({flduWwxeEP5fKzSKZ},{fld43BW7fjYMrLjs9},'minutes')`
- **Result Type**: number
- **Used By**:
  - Check End Date view filter
  - Event Past view filters
- **Returns**: Numeric value in minutes (positive = valid event duration)

##### Days Until
- **Field ID**: `fld7bMiLrkWGdp6UF`
- **Type**: Formula
- **Purpose**: Days until event starts
- **Formula**: `DATETIME_DIFF({fld43BW7fjYMrLjs9},NOW(),'days')`
- **Result Type**: number
- **Used By**: Alerts formula, view filters

##### Hours Until
- **Field ID**: `fldSeEHRacXpiMxPX`
- **Type**: Formula
- **Purpose**: Hours until event starts
- **Formula**: `DATETIME_DIFF({fld43BW7fjYMrLjs9},NOW(),'hours')`
- **Result Type**: number
- **Used By**: Alerts formula, 3 Hour Alert automation

##### Alerts
- **Field ID**: `fldx0uOscfUudZDSb`
- **Type**: Formula
- **Description**: Generates alert text based on time until event
- **Formula**: `IF({fldSeEHRacXpiMxPX} < 1, 'happening soon', IF({fldSeEHRacXpiMxPX} < 3, 'less than 3 hours until', IF({fld7bMiLrkWGdp6UF} = 120, '4 months out', IF({fld7bMiLrkWGdp6UF} = 90, '3 months out', IF({fld7bMiLrkWGdp6UF} = 60, '2 months out', IF({fld7bMiLrkWGdp6UF} = 30, '1 month out', IF({fld7bMiLrkWGdp6UF} = 14, '14 days out', IF({fld7bMiLrkWGdp6UF} = 7, '7 days out', IF({fld7bMiLrkWGdp6UF} = 3, '3 days out', IF({fld7bMiLrkWGdp6UF} = 0, 'less than a day away', IF({fld7bMiLrkWGdp6UF} < 0, 'past', '')))))))))))`
- **Result Type**: singleLineText
- **Returns**: "happening soon", "less than 3 hours until", "4 months out", etc.
- **Used By**: Alert notifications, alert views

##### Effort (minutes)
- **Field ID**: `fldp2AIWOJaKAUssj`
- **Type**: Formula
- **Purpose**: Calculates event duration in minutes
- **Formula**: `DATETIME_DIFF({flduWwxeEP5fKzSKZ},{fld43BW7fjYMrLjs9},'minutes')`
- **Result Type**: number

##### Current Time
- **Field ID**: `fldV4PeFyGVkiT7CV`
- **Type**: Formula
- **Description**: Formats current timestamp to 'YYYY-MM-DD HH:MM'
- **Formula**: `DATETIME_FORMAT(SET_TIMEZONE(NOW(), 'America/New_York'), 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

##### Current Date
- **Field ID**: `fldYXNYlW874Diqnd`
- **Type**: Formula
- **Description**: Formats current date to 'YYYY-MM-DD HH:MM'
- **Formula**: `DATETIME_FORMAT(SET_TIMEZONE(TODAY(), 'America/New_York'), 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

##### Current Hour
- **Field ID**: `fldlesEaWEJzLC0Or`
- **Type**: Formula
- **Purpose**: Gets current hour (0-23)
- **Formula**: `HOUR(SET_TIMEZONE(NOW(), 'America/New_York'))`
- **Result Type**: number

---

#### Status & Workflow

##### Status
- **Field ID**: `fldvXRj5JUVh7NG9S`
- **Type**: Single Select (5 options)
- **Purpose**: Event lifecycle state tracking
- **Options**:
  - Pending (blueLight2)
  - Scheduled (greenLight2)
  - Completed (orangeLight2)
  - Archived (cyanLight2)
  - Cancelled (tealLight2)
- **Used By**: Nearly all automations filter on Status
- **State Transitions**:
  - Scheduled → Completed (Event Past automations)
  - Scheduled → Cancelled (manual or Cancel Event automations)
  - Completed → Archived (manual)
- **Critical**: Most automations exclude Completed/Cancelled/Archived

##### Alerts Trigger
- **Field ID**: `fld1y2ciHPTi7SZXP`
- **Type**: Checkbox
- **Purpose**: Enable/disable alerts for specific event
- **Default**: Unchecked
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: All alert-related automations filter on this
- **Notes**: Master switch for alert system

---

#### Google Calendar Integration

##### Add to Google
- **Field ID**: `fldP9b4dWif5GMHK0`
- **Type**: Checkbox
- **Purpose**: Include event in Google Calendar sync
- **Default**: Unchecked
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: Add to GCal automation initial sync

##### G Cal Event ID
- **Field ID**: `fldsZk16g4pZdswD7`
- **Type**: Multilinetext
- **Purpose**: Stores Google Calendar event identifier
- **Set By**: Google Calendar create/update actions
- **Used By**:
  - Update GCal Event automation (requires non-empty)
  - Cancel Event automations (checks if GCal event exists)
- **Critical**: Empty = event not in Google Calendar

##### G Cal Event URL
- **Field ID**: `fldtIf7HsdUSygQZh`
- **Type**: Multilinetext
- **Purpose**: Full URL to Google Calendar event

##### From GCal
- **Field ID**: `fldfiN62aybnOIkV6`
- **Type**: Checkbox
- **Purpose**: Indicates event was created from Google Calendar import

---

#### Recurring Event Management

##### Year Add
- **Field ID**: `fld4pSKNQKVmcWJaS`
- **Type**: Checkbox
- **Purpose**: Trigger creation of next year's annual event
- **Used By**: Anniversary Next Year automation (trigger field)
- **Auto-Set By**: Event Past (Not TV) automation (when Appt Type = Annual)
- **Workflow**:
  1. Event Past marks Annual event complete
  2. Event Past checks Year Add checkbox
  3. Anniversary Next Year creates child event for next year
  4. Child event linked via Parent field

##### Month Add
- **Field ID**: `fldI8V1IgUJtVXEbs`
- **Type**: Checkbox
- **Purpose**: Trigger creation of next month's monthly event
- **Used By**: Anniversary Next Month automation (trigger field)
- **Auto-Set By**: Event Past (Not TV) automation (when Appt Type = Monthly)
- **Workflow**: Same as Year Add but for monthly recurrence

##### Anniversary Next Year
- **Field ID**: `fldNXbcEesjOSbmi8`
- **Type**: Formula
- **Purpose**: Calculates date one year from Start Time
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1,'year')`
- **Result Type**: date
- **Used By**: Anniversary Next Year automation copies to new event's Start Time

##### Anniversary Next Month
- **Field ID**: `fldswvVa4Zg9U3MH8`
- **Type**: Formula
- **Purpose**: Calculates date one month from Start Time
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1,'month')`
- **Result Type**: date
- **Used By**: Anniversary Next Month automation copies to new event's Start Time

##### New Event in Days
- **Field ID**: `fld6mlhWRE0pdltzC`
- **Type**: Number
- **Purpose**: Number of days before creating child event
- **Used By**: New Date formula, New Event in X Days automation

##### New Date
- **Field ID**: `fldxf6StXUNmtoFLA`
- **Type**: Formula
- **Purpose**: Calculates future date for child event
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9},{fld6mlhWRE0pdltzC},'days')`
- **Result Type**: date

---

#### Parent-Child Relationships

##### Parent (CANONICAL)
- **Field ID**: `fldI8JWRgKY1348Up`
- **Type**: Link to Unknown (Self-referencing to Home Events)
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldRtf2reDlEV8S9Z` (From field: Parent (Canonical))
- **Purpose**: ✅ **PRIMARY** parent-child relationship field
- **Direction**: Child → Parent
- **Set By**: 
  - Anniversary Next Year/Month automations (on child creation)
  - Manual linking
- **Maintained By**: Sync Children from Parent automation script
- **Usage**: ALL new automations should use this field
- **Notes**: Replaces deprecated Parent Record field

##### Children (do not edit)
- **Field ID**: `fld3mWx9OZSwB7lpo`
- **Type**: Link to Unknown (Self-referencing to Home Events)
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldMUszPkgBCcA3tY` (From field: Children (new))
- **Purpose**: Reverse link showing all child events
- **Direction**: Parent → Children
- **Maintained By**: Sync Children from Parent automation script (auto-updates)
- **Manual Editing**: ❌ DO NOT EDIT (script-managed)
- **Purpose**: Visual display of child events in parent record

##### Prev Parent (new)
- **Field ID**: `fldh50e5tWI8mafsS`
- **Type**: Link to Unknown (Self-referencing to Home Events)
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldgLB853SSXRVKMB` (From field: Prev Parent (new))
- **Purpose**: Tracks previous parent for relationship history
- **Maintained By**: Sync Children from Parent automation script
- **Use Case**: Audit trail for parent changes

##### Parent Record (old)
- **Field ID**: `fld2jSfJXCnQ6om4s`
- **Type**: Link to Unknown (Self-referencing to Home Events)
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Status**: ⚠️ DEPRECATED - Being phased out
- **Replacement**: Use **Parent** field instead
- **Migration**: Anniversary Next Year/Month updated (Dec 2025)
- **Remaining Uses**: ~10-15 automations still reference (to be migrated)

##### Sub Record (old)
- **Field ID**: `fldwmdBIc82Eh1dYQ`
- **Type**: Link to Unknown (Self-referencing to Home Events)
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Status**: ⚠️ DEPRECATED - Being phased out
- **Replacement**: Use **Parent** field instead
- **Used By**: New Event in X Days automation (duplicate prevention)
- **Migration Status**: To be updated

##### Parent Record ID
- **Field ID**: `fldLyK91qdIxuLmEC`
- **Type**: Singlelinetext
- **Status**: ⚠️ DEPRECATED - Being phased out
- **Replacement**: Use **Parent** field's record ID

##### Sub Record ID
- **Field ID**: `fld5mS7DzLg9jvYmD`
- **Type**: Singlelinetext
- **Status**: ⚠️ DEPRECATED - Being phased out
- **Used By**: Cancel Event (recurring) automation
- **Migration Status**: To be updated

---

#### Event Details

##### Description
- **Field ID**: `fldfmgCh93wZoHRDa`
- **Type**: Richtext
- **Purpose**: Detailed event information
- **Used By**: 
  - Google Calendar sync (appears in GCal event body)
  - Email notifications
  - Cancel Event automations (update with cancellation notice)
- **Watched By**: Update GCal? automation

##### Notes
- **Field ID**: `fldP9VO6dJu8EBCTp`
- **Type**: Richtext
- **Purpose**: Internal notes (not synced to Google Calendar)
- **Used By**: Internal reference only
- **Watched By**: Update GCal? automation

##### Location
- **Field ID**: `fldErwByVKwwrUfHI`
- **Type**: Singlelinetext
- **Purpose**: Event location/address
- **Used By**: Google Calendar sync
- **Watched By**: Update GCal? automation
- **Example**: "Doctor's Office", "123 Main St, NYC", "Zoom"

##### Attachments
- **Field ID**: `fldZ202ma0JWEFr4h`
- **Type**: Multipleattachments
- **Purpose**: File attachments for event
- **Used By**: 
  - Anniversary Next Year/Month (copied to child events)
  - Email notifications (may include as links)
- **Watched By**: Update GCal? automation

##### Attachment Image
- **Field ID**: `fldq6pTADH2KObHe3`
- **Type**: Formula
- **Purpose**: Extracts image URL from Attachments field
- **Formula**: `RIGHT(LEFT({fldZ202ma0JWEFr4h}, LEN({fldZ202ma0JWEFr4h}) - 1), LEN(LEFT({fldZ202ma0JWEFr4h}, LEN({fldZ202ma0JWEFr4h}) - 1)) - SEARCH("https://", {fldZ202ma0JWEFr4h}) + 1)`
- **Result Type**: singleLineText

##### Participants
- **Field ID**: `fldv3PBQ3OI8QEkpQ`
- **Type**: Multiple Select (51 options)
- **Purpose**: Event attendees/participants
- **Used By**: Google Calendar sync
- **Watched By**: Update GCal? automation
- **Options**: Email addresses of participants

##### Long Text
- **Field ID**: `fldstpV8FTtRIrssV`
- **Type**: Richtext
- **Purpose**: Extended text content

##### AI Prompt
- **Field ID**: `fldNwjQmWBaiGP9uV`
- **Type**: Multilinetext
- **Purpose**: Stores AI-related prompts or instructions

---

#### Metadata & Timestamps

##### Created (At)
- **Field ID**: `fldphRwWJsdA4Gj5N`
- **Type**: Createdtime
- **Purpose**: Record creation timestamp
- **Used By**: Words to Learn automation (date range filtering)
- **Automatic**: Set by Airtable on creation

##### Last Updated by
- **Field ID**: `fldsirGpyFSXKuWnj`
- **Type**: Lastmodifiedby
- **Purpose**: Tracks who last modified the record
- **Automatic**: Set by Airtable on modification

##### Created Month/Year
- **Field ID**: `fldzJ4MxylfnXk4Xg`
- **Type**: Formula
- **Purpose**: Formatted creation month/year
- **Formula**: `CONCATENATE(DATETIME_FORMAT({fldphRwWJsdA4Gj5N},'MM'),"-",DATETIME_FORMAT({fldphRwWJsdA4Gj5N},"YYYY"))`
- **Result Type**: singleLineText
- **Example**: "12-2025"

##### Convert Created Date
- **Field ID**: `fldLHBbximT7aXALA`
- **Type**: Formula
- **Purpose**: Formats creation date as YY-MM-DD
- **Formula**: `DATETIME_FORMAT({fldphRwWJsdA4Gj5N},'YY-MM-DD')`
- **Result Type**: singleLineText
- **Example**: "25-12-13"

##### 14 Days Since Creation
- **Field ID**: `fldv3W1B2CdvXsJLy`
- **Type**: Formula
- **Description**: Calculates date 14 days after creation
- **Formula**: `DATEADD({fldphRwWJsdA4Gj5N}, 14, 'days')`
- **Result Type**: date

##### Autonumber
- **Field ID**: `fldCRJe4MuLCPAQzE`
- **Type**: Autonumber
- **Purpose**: Unique sequential number for each record
- **Used By**: Name formula (creates unique identifiers)

##### Record ID
- **Field ID**: `fldfBFKjKiEireJ0b`
- **Type**: Formula
- **Purpose**: Returns Airtable record ID
- **Formula**: `RECORD_ID()`
- **Result Type**: singleLineText

##### Record_URL
- **Field ID**: `fldoQo5GpI9RzyXHd`
- **Type**: Formula
- **Description**: Generates direct URL to this record
- **Formula**: `"https://airtable.com/appSX4P3En4AWPyyG/tblYQbyKJJErXkZro/viwuQwJir4WERNrqE/" & RECORD_ID()`
- **Result Type**: singleLineText

---

#### Linked Tables

##### Health Care Provider
- **Field ID**: `fldMprscbmJCIG4Tb`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblo5E0sRYdBH1zh2`
- **Inverse Link Field**: `fldJsLrG6CjCd4Gvd`
- **Purpose**: Links to healthcare provider records

##### Link to Research
- **Field ID**: `fldikHMjvMh5Q5LLX`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblpdti2tAy2eINb2`
- **Inverse Link Field**: `fld2pb9yJYTUCAL8O`
- **Purpose**: Links to Research table records

##### Learning Experience
- **Field ID**: `fldq2NWrWPiSzSFWT`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbla51qhgULIfKojc`
- **Inverse Link Field**: `fldnPWILY11zYGTDd`
- **Purpose**: Links to Learning Experience records

---

#### Words to Learn Fields

##### Last day selected
- **Field ID**: `fldJDf881waFTMSek`
- **Type**: Date
- **Date Format**: local
- **Purpose**: Most recent selection date for word learning
- **Updated By**: Words To Learn automation script
- **Logic**: If > 0 (recently selected), word is deprioritized

##### Month Delay
- **Field ID**: `fldJs9Pv2kjecwrE4`
- **Type**: Checkbox
- **Purpose**: Delay word selection to later month
- **Used By**: Words to Learn (automation) view filter (must be blank)

##### Check Delay
- **Field ID**: `fldzWaXbX1dSVduGa`
- **Type**: Formula
- **Description**: Indicates if Month Delay is checked and it's been 30+ days since update
- **Formula**: `IF(AND({fldJs9Pv2kjecwrE4}, DATETIME_DIFF(TODAY(), {fldm3cM5bsYhCEnwa}, 'days') >= 30), "Yes", "No")`
- **Result Type**: singleLineText

---

#### Special Purpose Fields

##### Stop Timer
- **Field ID**: `fldGSQlo58pfrnUBD`
- **Type**: Checkbox
- **Purpose**: Stops active timer

##### Current Working
- **Field ID**: `fldU9Sqhf8MjkpagH`
- **Type**: Checkbox
- **Purpose**: Indicates active work session

##### Email Update
- **Field ID**: `fldgKKNPrGjbubzW0`
- **Type**: Checkbox
- **Purpose**: Triggers email update

##### Force Into Random Report
- **Field ID**: `fldfJ7yB9s0y5XIQr`
- **Type**: Checkbox
- **Purpose**: Forces inclusion in random report generation

---

#### URL Fields

##### ChatGPT URL
- **Field ID**: `flduDb5xQaWDn7u4q`
- **Type**: Url

##### Claude.AI URL
- **Field ID**: `fld9heV9t05quo0do`
- **Type**: Url

##### Google Gemini URL
- **Field ID**: `fld3TfaC4W2QZ17uv`
- **Type**: Url

##### GitHub URL
- **Field ID**: `fldAGodAZ0WZP2B97`
- **Type**: Url

---

#### Additional Utility Fields

##### Company
- **Field ID**: `fldiOg2onJlhEnbzn`
- **Type**: Singlelinetext

##### Job Title
- **Field ID**: `fldZ5E5L2ruPJ3tq2`
- **Type**: Singlelinetext

##### Household Tasks
- **Field ID**: `fldP8vv95Ius53IZo`
- **Type**: Singlelinetext

##### Force Def
- **Field ID**: `fldpfpXt35VMRlDXW`
- **Type**: Singlelinetext

##### Force Update
- **Field ID**: `fldkWWR56ChmXVObt`
- **Type**: Singlelinetext

##### Old Parent (snapshot)
- **Field ID**: `fldin8alI3iroD3vI`
- **Type**: Singlelinetext
- **Purpose**: Historical snapshot of parent relationship

##### Base64 Encoded ID
- **Field ID**: `fld72qnWKbzgf6tgr`
- **Type**: Singlelinetext
- **Description**: Extracts event ID from G Cal Event URL and encodes in base64

---

#### Special Formulas

##### Move Car End Date (formula)
- **Field ID**: `fldWNDCQN0ODw4FxC`
- **Type**: Formula
- **Description**: Calculates time 1.5 hours after Start Time
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1.5, 'hour')`
- **Result Type**: dateTime

##### Difference from Midnight
- **Field ID**: `fldW0ouQxMv8BKdH0`
- **Type**: Formula
- **Description**: Calculates difference between Start Time and midnight
- **Formula**: `CONCATENATE(FLOOR(DATETIME_DIFF({fld43BW7fjYMrLjs9}, {fldjnOKpvnunZ5QNT}, 'hour')), "h ", MOD(DATETIME_DIFF({fld43BW7fjYMrLjs9}, {fldjnOKpvnunZ5QNT}, 'minute'), 60), "m")`
- **Result Type**: singleLineText

##### Date for Alerts
- **Field ID**: `fldhASuxLYNsKjl2u`
- **Type**: Formula
- **Description**: Formats Start Time to 'YYYY-MM-DD HH:mm'
- **Formula**: `DATETIME_FORMAT({fld43BW7fjYMrLjs9}, 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

##### Alert w Day
- **Field ID**: `fldivqp4aHtLbpwzZ`
- **Type**: Formula
- **Purpose**: Concatenates month-day and day with time
- **Formula**: `CONCATENATE(DATETIME_FORMAT({fld43BW7fjYMrLjs9},"MM-DD"),DATETIME_FORMAT({fld43BW7fjYMrLjs9}," dd HH:mm"))`
- **Result Type**: singleLineText

##### End Date w/o Time
- **Field ID**: `fldR0axats585xqai`
- **Type**: Formula
- **Purpose**: Returns End Time as date only
- **Formula**: `{flduWwxeEP5fKzSKZ}`
- **Result Type**: date

##### NYS Jobs Daily Link
- **Field ID**: `fldiG9aIRg3rPq6fD`
- **Type**: Formula
- **Purpose**: Generates daily NYS jobs search URL
- **Formula**: `CONCATENATE("https://statejobs.ny.gov/public/vacancyTable.cfm?searchResults=Yes&Keywords=&title=&JurisClassID=&AgID=&isnyhelp=Yes&minDate=",DATESTR(NOW()),"&maxDate=",DATESTR(NOW()) ,"&employmentType=&gradeCompareType=GT&grade=&SalMin=")`
- **Result Type**: singleLineText

##### Fam Reminders Form
- **Field ID**: `fldOPrwz2MCvZ6etn`
- **Type**: Formula
- **Purpose**: Generates prefilled Airtable form URL for Family Reminders
- **Formula**: Complex CONCATENATE formula with URL encoding
- **Result Type**: singleLineText

##### Interface Record Detail URL
- **Field ID**: `fldeiZS6wFNMzlBAH`
- **Type**: Button
- **Description**: Button that outputs URL from Interface Record Detail field

---

## Schema Changes Table

**Total Fields**: 7

### Collaborator
- **Field ID**: `fldwEgY07KnmPQh0I`
- **Type**: Multiplecollaborators

### Created
- **Field ID**: `fldrW0iCsnboyzlGx`
- **Type**: Createdtime

### Description
- **Field ID**: `fldRmMNElkT6Q0O3A`
- **Type**: Richtext

### Entity
- **Field ID**: `fldXRzLEL58dfqJj7`
- **Type**: Single Select (2 options)
- **Options**:
  - field (blueLight1)
  - table (greenLight1)

### Event ID
- **Field ID**: `flda9HJGiSxQII3uB`
- **Type**: Singlelinetext

### Event Type
- **Field ID**: `fldmlDWLdPEsZRAsv`
- **Type**: Single Select (8 options)
- **Options**:
  - field-updated (yellowLight1)
  - field-deleted (grayDark1)
  - field-created (greenLight1)
  - field-renamed (blueLight1)
  - table-renamed (blueLight1)
  - table-created (greenLight1)
  - table-deleted (grayDark1)
  - table-updated (yellowLight1)

### Table ID
- **Field ID**: `fldMa7hL8yHrqmluN`
- **Type**: Singlelinetext

---

## Field Type Summary

Based on the actual schema extraction:

### Home Events Table (119 fields)

**By Type**:
- **Formula fields**: 40+ (dates, calculations, concatenations, URLs)
- **Singlelinetext**: 15+ fields
- **Checkbox**: 10+ fields
- **Link to Unknown** (relationships): 10+ fields
- **Richtext**: 4 fields (Description, Notes, Long Text, AI Prompt)
- **Datetime**: 2 fields (Start Time, End Time)
- **Date**: 1 field (Last day selected)
- **Multiple Select**: 3 fields (Participants, Research Type, Sub Type)
- **Single Select**: 2 fields (Appt Type, Status)
- **Number**: 1 field (New Event in Days)
- **Multilinetext**: 2+ fields
- **URL**: 4 fields (ChatGPT, Claude.AI, Google Gemini, GitHub)
- **Multipleattachments**: 1 field (Attachments)
- **Button**: 1 field (Interface Record Detail URL)
- **Autonumber**: 1 field
- **Createdtime**: 1 field
- **Lastmodifiedby**: 1 field

---

## Field Dependency Matrix

### High-Impact Fields
Changes to these fields affect 5+ automations:

- **Status** - 20+ automations
- **Appt Type** - 15+ automations
- **Start Time** - 10+ automations
- **End Time** - 10+ automations
- **Alerts Trigger** - 8+ automations
- **Research Type** - 6+ automations

### Medium-Impact Fields
Changes affect 2-4 automations:

- **G Cal Event ID** - 3 automations
- **Year Add** - 2 automations
- **Month Add** - 2 automations
- **Add to Google** - 2 automations

### Low-Impact Fields
Changes affect 0-1 automations:

- **Location** - 1 automation (GCal sync)
- **Description** - 1 automation (GCal sync)
- **Notes** - 1 automation (GCal sync)
- **Sub Type** - 0 automations (safe for reorganization)

---

## Best Practices

### Field Creation
- Use descriptive names (avoid abbreviations)
- Add "(do not edit)" suffix for script-managed fields
- Document formulas in this README
- Test formulas with edge cases (null values, past dates)

### Field Modification
- Check dependency matrix before renaming/deleting
- Search [Automations](readme.automations.md) for field name
- Update all affected automation Actions
- Test with sample records before production

### Field Deletion
- Never delete fields still used by active automations
- Hide deprecated fields instead of deleting immediately
- Wait 30+ days after migration before deletion
- Archive historical data if needed

### Formula Fields
- Keep formulas readable (use line breaks for complex logic)
- Add comments in formula editor
- Test with null/empty values
- Document in this README with examples

---

## Troubleshooting

### Formula Not Updating
- **Cause**: Dependent fields not triggering recalculation
- **Solution**: Edit any field on record to force refresh

### Link Field Empty
- **Cause**: Record deleted or permissions issue
- **Solution**: Check linked table, verify record exists

### Checkbox Not Triggering Automation
- **Cause**: Automation watches for "record updated" but checkbox already checked
- **Solution**: Uncheck then recheck, or use view-based trigger

### Date Field Timezone Issues
- **Cause**: Airtable stores UTC, displays in local timezone
- **Solution**: Use DATETIME_FORMAT with timezone parameter (America/New_York)

---

## Statistics

- **Home Events Fields**: 119
- **Schema Changes Fields**: 7
- **Total Fields**: 126 across base
- **Formula Fields**: 40+
- **Link Fields**: 10+
- **Deprecated Fields**: 4 (Parent Record, Sub Record, Parent Record ID, Sub Record ID)
- **High-Impact Fields**: 6
- **Script-Managed Fields**: 2 (Children (do not edit), Prev Parent (new))

**Last Schema Extract**: December 13, 2025 at 12:10:22  
**Last Documentation Update**: December 13, 2025  
**Source**: fields-from-schema.md (auto-generated from Airtable Metadata API)

---

## Related Documentation

- [Automations](readme.automations.md) - Field usage in automations
- [Tables](readme.tables.md) - Table schemas
- [Views](readme.views.md) - View filters using fields
- [Changelog](changelog.md) - Field migration history
- [Schema Files](schema/) - Auto-generated schema documentation
