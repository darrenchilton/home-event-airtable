# Fields Reference (Auto-Generated)

> Generated from Airtable schema on 2025-12-15 09:36:55

This document contains the actual schema from your Airtable base. Use this as the source of truth for updating your fields documentation.

---

## Schema Changes

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

### Field Type Summary

- **createdTime**: 1 fields
  - Created
- **multipleCollaborators**: 1 fields
  - Collaborator
- **richText**: 1 fields
  - Description
- **singleLineText**: 2 fields
  - Event ID
  - Table ID
- **singleSelect**: 2 fields
  - Event Type
  - Entity

---

## Home Events

**Total Fields**: 123

### 14 Days Since Creation

- **Field ID**: `fldv3W1B2CdvXsJLy`
- **Type**: Formula
- **Description**: Calculates the date that is 14 days after the Created (At) timestamp.
- **Formula**: `DATEADD({fldphRwWJsdA4Gj5N}, 14, 'days')`
- **Result Type**: date

### AI Prompt

- **Field ID**: `fldNwjQmWBaiGP9uV`
- **Type**: Multilinetext

### Add to Google

- **Field ID**: `fldP9b4dWif5GMHK0`
- **Type**: Checkbox

### Address (from Health Care Provider)

- **Field ID**: `fldjCqCoNct9VKEhG`
- **Type**: Multiplelookupvalues

### Alert w Day

- **Field ID**: `fldivqp4aHtLbpwzZ`
- **Type**: Formula
- **Formula**: `CONCATENATE(DATETIME_FORMAT({fld43BW7fjYMrLjs9},"MM-DD"),DATETIME_FORMAT({fld43BW7fjYMrLjs9}," dd HH:mm"))`
- **Result Type**: singleLineText

### Alerts

- **Field ID**: `fldx0uOscfUudZDSb`
- **Type**: Formula
- **Description**: Generates alerts based on the number of days, hours, or seconds until an event.
- **Formula**: `IF({fldSeEHRacXpiMxPX} < 1, 'happening soon', IF({fldSeEHRacXpiMxPX} < 3, 'less than 3 hours until', IF({fld7bMiLrkWGdp6UF} = 120, '4 months out', IF({fld7bMiLrkWGdp6UF} = 90, '3 months out', IF({fld7bMiLrkWGdp6UF} = 60, '2 months out', IF({fld7bMiLrkWGdp6UF} = 30, '1 month out', IF({fld7bMiLrkWGdp6UF} = 14, '14 days out', IF({fld7bMiLrkWGdp6UF} = 7, '7 days out', IF({fld7bMiLrkWGdp6UF} = 3, '3 days out', IF({fld7bMiLrkWGdp6UF} = 0, 'less than a day away', IF({fld7bMiLrkWGdp6UF} < 0, 'past', '')))))))))))`
- **Result Type**: singleLineText

### Alerts Trigger

- **Field ID**: `fld1y2ciHPTi7SZXP`
- **Type**: Checkbox

### All Day Event?

- **Field ID**: `flduFHXlWBtXyeO1F`
- **Type**: Checkbox

### Anniversary Next Month

- **Field ID**: `fldswvVa4Zg9U3MH8`
- **Type**: Formula
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1,'month')`
- **Result Type**: date

### Anniversary Next Year

- **Field ID**: `fldNXbcEesjOSbmi8`
- **Type**: Formula
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1,'year')`
- **Result Type**: date

### Appt Type

- **Field ID**: `fldhK5IfHRAso54iK`
- **Type**: Single Select (41 options)
- **Options**:
  - Add to Plex (redBright)
  - AI (yellowDark1)
  - Annual (grayDark1)
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
  - Monthly (orangeBright)
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

### Attachment Image

- **Field ID**: `fldq6pTADH2KObHe3`
- **Type**: Formula
- **Formula**: `RIGHT(LEFT({fldZ202ma0JWEFr4h},
LEN({fldZ202ma0JWEFr4h}) - 1),
LEN(LEFT({fldZ202ma0JWEFr4h},
LEN({fldZ202ma0JWEFr4h}) - 1)) -
SEARCH("https://", {fldZ202ma0JWEFr4h}) + 1)`
- **Result Type**: singleLineText

### Attachments

- **Field ID**: `fldZ202ma0JWEFr4h`
- **Type**: Multipleattachments

### Autonumber

- **Field ID**: `fldCRJe4MuLCPAQzE`
- **Type**: Autonumber

### Base64 Encoded ID

- **Field ID**: `fld72qnWKbzgf6tgr`
- **Type**: Singlelinetext
- **Description**: Extracts the event ID from the G Cal Event URL field and encodes it in base64.

### ChatGPT URL

- **Field ID**: `flduDb5xQaWDn7u4q`
- **Type**: Url

### Check Delay

- **Field ID**: `fldzWaXbX1dSVduGa`
- **Type**: Formula
- **Description**: Indicates whether the 'Month Delay' field is checked and it has been at least 30 days since the last update of the record.
- **Formula**: `IF(AND({fldJs9Pv2kjecwrE4}, DATETIME_DIFF(TODAY(), {fldm3cM5bsYhCEnwa}, 'days') >= 30), "Yes", "No")`
- **Result Type**: singleLineText

### Children (do not edit)

- **Field ID**: `fld3mWx9OZSwB7lpo`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldMUszPkgBCcA3tY`

### Claude.AI URL

- **Field ID**: `fld9heV9t05quo0do`
- **Type**: Url

### Company

- **Field ID**: `fldiOg2onJlhEnbzn`
- **Type**: Singlelinetext

### Convert Created Date

- **Field ID**: `fldLHBbximT7aXALA`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fldphRwWJsdA4Gj5N},'YY-MM-DD')`
- **Result Type**: singleLineText

### Created (At)

- **Field ID**: `fldphRwWJsdA4Gj5N`
- **Type**: Createdtime

### Created Month/Year

- **Field ID**: `fldzJ4MxylfnXk4Xg`
- **Type**: Formula
- **Formula**: `CONCATENATE(DATETIME_FORMAT({fldphRwWJsdA4Gj5N},'MM'),"-",DATETIME_FORMAT({fldphRwWJsdA4Gj5N},"YYYY"))`
- **Result Type**: singleLineText

### Current Date

- **Field ID**: `fldYXNYlW874Diqnd`
- **Type**: Formula
- **Description**: Formats the current date and time to 'YYYY-MM-DD HH:MM'
- **Formula**: `DATETIME_FORMAT(SET_TIMEZONE(TODAY(), 'America/New_York'), 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

### Current Hour

- **Field ID**: `fldlesEaWEJzLC0Or`
- **Type**: Formula
- **Formula**: `HOUR(SET_TIMEZONE(NOW(), 'America/New_York'))`
- **Result Type**: number

### Current Time

- **Field ID**: `fldV4PeFyGVkiT7CV`
- **Type**: Formula
- **Description**: Formats the current date and time to 'YYYY-MM-DD HH:MM'
- **Formula**: `DATETIME_FORMAT(SET_TIMEZONE(NOW(), 'America/New_York'), 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

### Current Working

- **Field ID**: `fldU9Sqhf8MjkpagH`
- **Type**: Checkbox

### Date Check

- **Field ID**: `fldGNAHsM1RMVL9sb`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({flduWwxeEP5fKzSKZ},{fld43BW7fjYMrLjs9},'minutes')`
- **Result Type**: number

### Date for Alerts

- **Field ID**: `fldhASuxLYNsKjl2u`
- **Type**: Formula
- **Description**: Formats the Start Time to 'YYYY-MM-DD HH:mm' for 24-hour time display.
- **Formula**: `DATETIME_FORMAT({fld43BW7fjYMrLjs9}, 'YYYY-MM-DD HH:mm')`
- **Result Type**: singleLineText

### Days Until

- **Field ID**: `fld7bMiLrkWGdp6UF`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({fld43BW7fjYMrLjs9},NOW(),'days')`
- **Result Type**: number

### Description

- **Field ID**: `fldfmgCh93wZoHRDa`
- **Type**: Richtext

### Difference from Midnight

- **Field ID**: `fldW0ouQxMv8BKdH0`
- **Type**: Formula
- **Description**: Calculates the difference in hours and minutes between the Start Time and the Set To Midnight field, which sets the Start Time to midnight of the same day.
- **Formula**: `CONCATENATE(
  FLOOR(DATETIME_DIFF({fld43BW7fjYMrLjs9}, {fldjnOKpvnunZ5QNT}, 'hour')), "h ",
  MOD(DATETIME_DIFF({fld43BW7fjYMrLjs9}, {fldjnOKpvnunZ5QNT}, 'minute'), 60), "m"
)`
- **Result Type**: singleLineText

### Effort (minutes)

- **Field ID**: `fldp2AIWOJaKAUssj`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({flduWwxeEP5fKzSKZ},{fld43BW7fjYMrLjs9},'minutes')`
- **Result Type**: number

### Email Update

- **Field ID**: `fldgKKNPrGjbubzW0`
- **Type**: Checkbox

### End Date w/o Time

- **Field ID**: `fldR0axats585xqai`
- **Type**: Formula
- **Formula**: `{flduWwxeEP5fKzSKZ}`
- **Result Type**: date

### End Time

- **Field ID**: `flduWwxeEP5fKzSKZ`
- **Type**: Datetime
- **Date Format**: us
- **Time Format**: 24hour
- **Time Zone**: America/New_York

### Fam Reminders Form

- **Field ID**: `fldOPrwz2MCvZ6etn`
- **Type**: Formula
- **Formula**: `CONCATENATE(
    IF(
        "Prefilling [Family Reminders Form] view in [Home Events] table in base with id 'appSX4P3En4AWPyyG'",
        "https://airtable.com/appSX4P3En4AWPyyG/shrwfOcfiNfvqdgZb"
    ),
    CONCATENATE(
        "?prefill_" & ENCODE_URL_COMPONENT("Appt Type"),
        "=" & ENCODE_URL_COMPONENT("Family Reminder"),
        "&hide_" & ENCODE_URL_COMPONENT("Appt Type") & "=true"
    )
)`
- **Result Type**: singleLineText

### Force Def

- **Field ID**: `fldpfpXt35VMRlDXW`
- **Type**: Singlelinetext

### Force Into Random Report

- **Field ID**: `fldfJ7yB9s0y5XIQr`
- **Type**: Checkbox

### Force Update

- **Field ID**: `fldkWWR56ChmXVObt`
- **Type**: Singlelinetext

### From GCal

- **Field ID**: `fldfiN62aybnOIkV6`
- **Type**: Checkbox

### From field: Children (new)

- **Field ID**: `fldMUszPkgBCcA3tY`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fld3mWx9OZSwB7lpo`

### From field: Parent (Canonical)

- **Field ID**: `fldRtf2reDlEV8S9Z`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldI8JWRgKY1348Up`

### From field: Prev Parent (new)

- **Field ID**: `fldgLB853SSXRVKMB`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldh50e5tWI8mafsS`

### G Cal Event ID

- **Field ID**: `fldsZk16g4pZdswD7`
- **Type**: Multilinetext

### G Cal Event URL

- **Field ID**: `fldtIf7HsdUSygQZh`
- **Type**: Multilinetext

### GitHub URL

- **Field ID**: `fldAGodAZ0WZP2B97`
- **Type**: Url

### Google Gemini URL

- **Field ID**: `fld3TfaC4W2QZ17uv`
- **Type**: Url

### Health Care Provider

- **Field ID**: `fldMprscbmJCIG4Tb`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblo5E0sRYdBH1zh2`
- **Inverse Link Field**: `fldJsLrG6CjCd4Gvd`

### Hours Until

- **Field ID**: `fldSeEHRacXpiMxPX`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({fld43BW7fjYMrLjs9},NOW(),'hours')`
- **Result Type**: number

### Household Tasks

- **Field ID**: `fldP8vv95Ius53IZo`
- **Type**: Singlelinetext

### In Active Window

- **Field ID**: `fldAYWL9OPgMSNBpt`
- **Type**: Formula
- **Formula**: `AND(
     IS_AFTER({fldphRwWJsdA4Gj5N}, {fldqW1rqWMKf7gMpf}),
     IS_BEFORE({fldphRwWJsdA4Gj5N}, {fldUgVJyeOYp7yCrw})
   )`
- **Result Type**: number

### Interface Record Detail

- **Field ID**: `fldHCVP81XnyxIKcc`
- **Type**: Multilinetext

### Interface Record Detail URL

- **Field ID**: `fldeiZS6wFNMzlBAH`
- **Type**: Button
- **Description**: Outputs the URL from the Interface Record Detail field for use in a button.

### Job Title

- **Field ID**: `fldZ5E5L2ruPJ3tq2`
- **Type**: Singlelinetext

### Last Updated by

- **Field ID**: `fldsirGpyFSXKuWnj`
- **Type**: Lastmodifiedby

### Last day selected

- **Field ID**: `fldJDf881waFTMSek`
- **Type**: Date
- **Date Format**: local

### Learning Experience

- **Field ID**: `fldq2NWrWPiSzSFWT`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbla51qhgULIfKojc`
- **Inverse Link Field**: `fldnPWILY11zYGTDd`

### Link to Research

- **Field ID**: `fldikHMjvMh5Q5LLX`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblpdti2tAy2eINb2`
- **Inverse Link Field**: `fld2pb9yJYTUCAL8O`

### Location

- **Field ID**: `fldErwByVKwwrUfHI`
- **Type**: Singlelinetext

### Long Text

- **Field ID**: `fldstpV8FTtRIrssV`
- **Type**: Richtext

### Map (from Health Care Provider)

- **Field ID**: `fldbtH7j5WzGzNJq3`
- **Type**: Multiplelookupvalues

### Month Add

- **Field ID**: `fldI8V1IgUJtVXEbs`
- **Type**: Checkbox

### Month Delay

- **Field ID**: `fldJs9Pv2kjecwrE4`
- **Type**: Checkbox

### Move Car End Date (formula)

- **Field ID**: `fldWNDCQN0ODw4FxC`
- **Type**: Formula
- **Description**: Calculates the time 1.5 hours after the Start Time
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9}, 1.5, 'hour')`
- **Result Type**: dateTime

### NYS Jobs Daily Link

- **Field ID**: `fldiG9aIRg3rPq6fD`
- **Type**: Formula
- **Formula**: `CONCATENATE("https://statejobs.ny.gov/public/vacancyTable.cfm?searchResults=Yes&Keywords=&title=&JurisClassID=&AgID=&isnyhelp=Yes&minDate=",DATESTR(NOW()),"&maxDate=",DATESTR(NOW()) ,"&employmentType=&gradeCompareType=GT&grade=&SalMin=")`
- **Result Type**: singleLineText

### Name

- **Field ID**: `fldEVqyty5wYXRkLT`
- **Type**: Formula
- **Description**: Concatenates Title and formatted Start Time unless Appt Type is 'From Research'.
- **Formula**: `CONCATENATE({fldSBxahTfGgcUT4y},"-",{fldLHBbximT7aXALA},"-",{fldCRJe4MuLCPAQzE})`
- **Result Type**: singleLineText

### New Date

- **Field ID**: `fldxf6StXUNmtoFLA`
- **Type**: Formula
- **Formula**: `DATEADD({fld43BW7fjYMrLjs9},{fld6mlhWRE0pdltzC},'days')`
- **Result Type**: date

### New Event in Days

- **Field ID**: `fld6mlhWRE0pdltzC`
- **Type**: Number

### Notes

- **Field ID**: `fldP9VO6dJu8EBCTp`
- **Type**: Richtext

### Old Parent (snapshot)

- **Field ID**: `fldin8alI3iroD3vI`
- **Type**: Singlelinetext

### Parent

- **Field ID**: `fldI8JWRgKY1348Up`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldRtf2reDlEV8S9Z`

### Parent Record (old)

- **Field ID**: `fld2jSfJXCnQ6om4s`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`

### Parent Record ID

- **Field ID**: `fldLyK91qdIxuLmEC`
- **Type**: Singlelinetext

### Participants

- **Field ID**: `fldv3PBQ3OI8QEkpQ`
- **Type**: Multiple Select (52 options)
- **Options**:
  - darrenchilton@gmail.com (cyanLight2)
  - slavicany@gmail.com (blueLight2)
  - systems@dogtrainingelite.com (blueLight2)
  - bobby.strumlauf@nbly.com (blueLight2)
  - garettholden@gmail.com (tealLight2)
  - npaur@esourcecoach.com (blueLight2)
  - pantherfan1606@yahoo.com  (greenDark1)
  - kathy@benetrends.com (blueLight2)
  - marinaanais340@gmail.com (greenLight2)
  -  (blueLight2)
  - development@dogtrainingelite.com (blueLight2)
  - kelley@dogtrainingelite.com (cyanLight2)
  - daniel.joseph.murphy@gmail.com (blueLight2)
  - eiacono@gmail.com (cyanLight2)
  - pjchui@gmail.com (tealLight2)
  - ddivina@everydayhealthgroup.com (blueLight2)
  - kaguilera@everydayhealthgroup.com (cyanLight2)
  - bprecine@ft.newyorklife.com (blueLight2)
  - mike@venturehub.ai (blueLight2)
  - james@artofeveryone.com (yellowLight2)
  - timothy.melita@its.ny.gov (blueLight2)
  - justine.frantzen@its.ny.gov (cyanLight2)
  - ben@benchristensen.net (blueLight2)
  - kakkilewis@gmail.com (orangeLight2)
  - danielle.brody2@gmail.com (blueLight2)
  - deadsandywinked@gmail.com (cyanLight2)
  - tkromelis@gmail.com (tealLight2)
  - becky.vinter@gmail.com (greenLight2)
  - psumarni@gmail.com (yellowLight2)
  - luke@stonexspade.com (orangeLight2)
  - jaimexo@gmail.com (redLight2)
  - 10amguerra@gmail.com (pinkLight2)
  - emilyjstjohn@gmail.com (purpleLight2)
  - amylysheehan@gmail.com (grayLight2)
  - azhao4@gmail.com (blueLight1)
  - katherine.lewis@berkeley.edu (blueLight2)
  - aaahudsonvalleytireservices@aaahv.com (blueLight2)
  - collabportals@gmail.com (blueLight2)
  - darrenchilton@outlook.com (blueLight2)
  - aashish.vemulapalli@wcb.ny.gov (blueLight2)
  - ooiadmin@wcb.ny.gov (cyanLight2)
  - richard.kaarstad@wcb.ny.gov (tealLight2)
  - support@anydb.com (blueLight2)
  - madhan@anydb.com (cyanLight2)
  - lheller@factorapp.com (blueLight2)
  - 4ajcsut6t5osphmkf35jn3vbvg@group.calendar.google.com (blueLight2)
  - diane keaton (grayBright)
  - marinan12@nycstudents.net (blueLight2)
  - noreply@treeage.solidarity.tech (cyanLight2)
  - farley13@gmail.com (blueLight2)
  - michele.chenette@dmv.ny.gov (blueLight2)
  - M.Hauber67@gmail.com  (blueDark1)

### Perplexity URL

- **Field ID**: `fldXfkVYeO2Y2R7vH`
- **Type**: Url

### Phone

- **Field ID**: `fldcfhiKj6vnMQJVe`
- **Type**: Phonenumber

### Phone (from Health Care Provider)

- **Field ID**: `fldVuWnIqMAes2a74`
- **Type**: Multiplelookupvalues

### Pre-Filled Annual

- **Field ID**: `fld8j3keQoDLBSMg6`
- **Type**: Formula
- **Formula**: `CONCATENATE(
    IF(
        "Prefilling [Add Annual Event] view in [Home Events] table in base with id 'appSX4P3En4AWPyyG'",
        "https://airtable.com/appSX4P3En4AWPyyG/shrpMIgh2hQkxWW1E"
    ),
    CONCATENATE(
        "?prefill_" & ENCODE_URL_COMPONENT("Appt Type"),
        "=" & ENCODE_URL_COMPONENT("Annual"),
        "&hide_" & ENCODE_URL_COMPONENT("Appt Type") & "=true"
    ),
    CONCATENATE(
        "&prefill_" & ENCODE_URL_COMPONENT("Status"),
        "=" & ENCODE_URL_COMPONENT("Scheduled")
    ),
    CONCATENATE(
        "&hide_" & ENCODE_URL_COMPONENT("All Day Event?") & "=true"
    ),
    CONCATENATE(
        "&hide_" & ENCODE_URL_COMPONENT("Alerts Trigger") & "=true"
    ),
    CONCATENATE(
        "&hide_" & ENCODE_URL_COMPONENT("Add to Google") & "=true"
    )
)`
- **Result Type**: singleLineText

### Prev Parent (new)

- **Field ID**: `fldh50e5tWI8mafsS`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldgLB853SSXRVKMB`

### Provider Name (from Health Care Provider)

- **Field ID**: `fldOLBLppzfLf5pV5`
- **Type**: Multiplelookupvalues

### Record ID

- **Field ID**: `fldfBFKjKiEireJ0b`
- **Type**: Formula
- **Formula**: `RECORD_ID()`
- **Result Type**: singleLineText

### Record_URL

- **Field ID**: `fldoQo5GpI9RzyXHd`
- **Type**: Formula
- **Description**: Generates a URL to the current record
- **Formula**: `"https://airtable.com/appSX4P3En4AWPyyG/tblYQbyKJJErXkZro/viwuQwJir4WERNrqE/" & RECORD_ID()`
- **Result Type**: singleLineText

### Research Type

- **Field ID**: `fldTOSyaubEtYdqwk`
- **Type**: Multiple Select (298 options)
- **Options**:
  - 8a (cyanLight1)
  - actors (cyanBright)
  - AI (grayDark1)
  - ai business (blueDark1)
  - ai capability (blueDark1)
  - ai coding (redBright)
  - ai psychosis (redLight2)
  - ai resistence (purpleLight2)
  - ai safety (grayDark1)
  - AI Tools (redBright)
  - ai training (purpleLight2)
  - Airtable (orangeLight1)
  - albany (blueLight2)
  - Albert Court (greenBright)
  - alcohol (orangeLight2)
  - aliens (yellowLight1)
  - American Dream (tealBright)
  - Anniversary (cyanBright)
  - Anthropology (grayDark1)
  - Anti-Corruption Protests (orangeBright)
  - anti-trump (pinkLight1)
  - apple (grayDark1)
  - appliance (grayLight2)
  - Architecture (purpleLight1)
  - Archive (tealLight2)
  - Art (cyanLight1)
  - Astronomy (purpleLight1)
  - audiobooks (blueLight1)
  - audit trails (grayLight1)
  - Authoritarianism (purpleBright)
  - automations (blueBright)
  - Automotive (orangeLight2)
  - Balkan Politics (purpleLight2)
  - beats (redBright)
  - Behavioral Economic (redLight1)
  - bikes (purpleLight1)
  - Biogrpahy (grayDark1)
  - Birthday (tealLight1)
  - Black Lotus (orangeBright)
  - Book Review/Literary Criticism (pinkDark1)
  - Bullshit (orangeLight2)
  - Business Ideas (redBright)
  - Business Read (cyanLight2)
  - calendar (tealLight2)
  - Cancel (redLight2)
  - capitulation (cyanLight2)
  - Career & Professional (pinkBright)
  - charlie (greenLight2)
  - Cholesterol (orangeLight1)
  - christianity (grayLight2)
  - christmas (pinkBright)
  - Cinema (cyanDark1)
  - classic (orangeDark1)
  - Climate (yellowLight1)
  - coding (blueDark1)
  - collective memory (grayBright)
  - commentators (pinkDark1)
  - communication (orangeLight2)
  - Computer History (greenDark1)
  - Concept (grayLight1)
  - Conservatism (blueBright)
  - consider (orangeDark1)
  - conspiracy (tealLight1)
  - Consulting (yellowLight2)
  - Cooking (purpleBright)
  - Course (redDark1)
  - covid (tealLight1)
  - Creativity (tealBright)
  - Crime (orangeBright)
  - Cross-Cultural Solidarity (grayLight2)
  - crypto crime (blueLight1)
  - ct scans (yellowBright)
  - cults (yellowBright)
  - culture (greenLight1)
  - Current (cyanLight2)
  - customer support (tealDark1)
  - data (blueLight2)
  - dc lungs (cyanDark1)
  - DC Vaccine (greenBright)
  - death (greenLight1)
  - Dementia (blueDark1)
  - Democratic Resistance (cyanBright)
  - Dental (greenBright)
  - deviance (greenDark1)
  - disputes (orangeBright)
  - Documentaries (yellowLight2)
  - dogs (pinkLight2)
  - Dreams (redDark1)
  - Economics (pinkLight1)
  - eddington (grayLight1)
  - emoticon (orangeDark1)
  - emotional intelligence (tealBright)
  - engineering (tealLight1)
  - enshittification (pinkLight1)
  - Entertainment (blueLight2)
  - Environment (purpleDark1)
  - epidemiology\ (greenDark1)
  - Equipment (pinkBright)
  - Exercise (tealLight1)
  - eyes (yellowLight2)
  - Family (greenLight2)
  - feature (orangeLight1)
  - firewood (purpleDark1)
  - forms (pinkBright)
  - Franchising (grayLight2)
  - front end (redLight1)
  - garage (orangeLight2)
  - Garden (grayBright)
  - gore vidal (grayBright)
  - Grateful Dead (grayBright)
  - Grief (cyanDark1)
  - Guides (redLight1)
  - Halloween (redDark1)
  - head (blueDark1)
  - headhunter (greenLight2)
  - Health (purpleLight2)
  - heating (tealBright)
  - History (greenBright)
  - holiday (yellowDark1)
  - home equipment (grayLight1)
  - Home Finance (tealLight1)
  - Home Furniture (yellowBright)
  - Home Maint (yellowLight1)
  - Home Misc (cyanDark1)
  - Home Programming (yellowDark1)
  - Home Tech (blueDark1)
  - Horror (yellowBright)
  - humor (redDark1)
  - ideology (orangeLight1)
  - IIJ (redLight2)
  - Immigration (pinkLight2)
  - Important Docs (greenLight2)
  - important phone (pinkDark1)
  - In Paprika (pinkDark1)
  - inflammation (redBright)
  - Inspiration (greenDark1)
  - instant pot (purpleDark1)
  - Insurance (redLight1)
  - Integration (blueBright)
  - Intellectuals (cyanLight2)
  - interesting (tealDark1)
  - internet (greenBright)
  - interviews (orangeDark1)
  - Investing (yellowDark1)
  - IPhone (tealBright)
  - JavaScript (orangeLight2)
  - Job Applied (pinkLight2)
  - Job Interview (pinkLight2)
  - Job Search (pinkLight1)
  - Journalism (purpleLight2)
  - Joyful Ops (greenLight1)
  - kierkegaard (tealDark1)
  - kimmel (redLight2)
  - Kindness (yellowDark1)
  - kitchen (greenBright)
  - kubrick (redLight2)
  - last will and testiment (tealLight2)
  - Law (greenLight1)
  - lawn (cyanBright)
  - Leadership (purpleDark1)
  - Learning (purpleBright)
  - Leisure (pinkLight1)
  - Leverage Research (blueBright)
  - linguistics (redDark1)
  - LinkedIn Post (pinkDark1)
  - linkletter (tealBright)
  - MAGA (yellowLight2)
  - MANC (purpleLight2)
  - manifesting (redLight1)
  - manuals (purpleLight1)
  - marina (yellowBright)
  - Marriage (orangeLight1)
  - Math (orangeBright)
  - Media Server (cyanBright)
  - Media Studies (yellowBright)
  - meditation (orangeLight1)
  - memories (cyanDark1)
  - mental training (cyanBright)
  - messaging (yellowLight1)
  - Music (grayBright)
  - neocon (cyanLight1)
  - Networking (tealLight1)
  - Non-Violent Civil Disobedience (cyanLight1)
  - north carolina (pinkLight1)
  - NYC (blueLight1)
  - online interaction (cyanLight1)
  - organizing (purpleBright)
  - Ozempic (greenLight2)
  - paint (cyanLight2)
  - penal (pinkLight2)
  - Personal History (greenBright)
  - pets (cyanDark1)
  - petzold (blueLight1)
  - Philosophy (greenLight1)
  - Physics (orangeDark1)
  - pivot tables (yellowLight2)
  - Plex (pinkBright)
  - plumbing (blueLight1)
  - plymouth tower (tealDark1)
  - polanski (grayBright)
  - political violence (purpleBright)
  - Politics (redBright)
  - Population (yellowLight1)
  - potential cars (purpleLight2)
  - Primary (cyanBright)
  - probability (blueBright)
  - Prompts (yellowLight1)
  - Psychology (pinkDark1)
  - Python Scripts (blueLight2)
  - racism (purpleDark1)
  - Radiology (yellowBright)
  - rates (blueLight1)
  - rational thought (grayLight2)
  - rationalist (tealLight2)
  - Reading (blueBright)
  - receipts (pinkLight2)
  - Recipes (blueLight2)
  - Regular Bills (pinkLight2)
  - RemindMe (grayLight1)
  - Repairs (orangeDark1)
  - Research (grayLight1)
  - Restaurants (purpleLight1)
  - resume updates (redLight2)
  - Retirment (tealLight2)
  - RIP (grayLight2)
  - Sapians (tealBright)
  - scams (orangeBright)
  - School (pinkBright)
  - Science (purpleLight1)
  - scripting (greenDark1)
  - Security (tealDark1)
  - self-help (pinkBright)
  - services (cyanDark1)
  - sms (purpleBright)
  - sn imac (grayLight1)
  - SN Job Search (grayLight2)
  - Social Media (grayDark1)
  - Social Science (blueDark1)
  - Softr (purpleLight1)
  - Soppliments (grayDark1)
  - Sports (greenLight2)
  - Statistics (orangeBright)
  - stephen king (blueBright)
  - Student Activism (tealDark1)
  - Subscriptions (tealDark1)
  - Substack Post (blueLight2)
  - Surgury (redLight1)
  - symptoms (yellowLight1)
  - syria (orangeLight1)
  - System Prompt (orangeDark1)
  - systemic failure (greenDark1)
  - Taxes (redLight2)
  - Technology (cyanLight2)
  - Technology Business Analysis (grayLight1)
  - Television (orangeLight2)
  - The Con (redBright)
  - Ticks (cyanLight2)
  - time (pinkDark1)
  - to visit (grayBright)
  - tom hardy (yellowLight2)
  - toyota (redLight1)
  - Transcripts (cyanLight1)
  - Travel (purpleDark1)
  - Trump Corruption (pinkLight1)
  - TV Show (blueLight1)
  - ues (yellowDark1)
  - Ukraine (yellowDark1)
  - UNC Basketball (purpleBright)
  - Unconscious (greenDark1)
  - Upstate (purpleDark1)
  - vaccine (greenLight1)
  - violence (yellowLight2)
  - VIP (greenLight2)
  - VIP Home (yellowDark1)
  - VIP Resources (tealLight2)
  - War (orangeDark1)
  - water (blueLight2)
  - winterize (tealLight2)
  - writers (redDark1)
  - Writing (cyanLight1)
  - yudkowsky (redDark1)
  - zerowater (purpleLight1)
  - Zizians (greenLight1)
  - cleaning (purpleBright)
  - evolution (tealLight2)
  - reference (redBright)
  - Dog Stuff (grayLight2)
  - SCORE (pinkLight1)
  - LinkedIn Events (purpleDark1)
  - deck (pinkBright)
  - ai commentary (orangeLight1)
  - Tips and Tricks (cyanLight2)
  - scaffold (tealBright)
  - Clothes (greenBright)
  - public speaking (greenLight2)
  - tolls (blueDark1)
  - trends (redDark1)
  - gifts (grayBright)

### Reset Start URL

- **Field ID**: `fldclm3lYUqt3EIdE`
- **Type**: Formula
- **Formula**: `"https://airtable.com/appSX4P3En4AWPyyG/tblYQbyKJJErXkZro/viwBnK7VZVkWtVFXD/" & RECORD_ID()`
- **Result Type**: singleLineText

### Seconds After

- **Field ID**: `fldMND4IXrFlkyRBw`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{flduWwxeEP5fKzSKZ},'seconds')`
- **Result Type**: number

### Seconds Until

- **Field ID**: `fld7QTNqXepMxm770`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({fld43BW7fjYMrLjs9},NOW(),'seconds')`
- **Result Type**: number

### SelectionCount

- **Field ID**: `fldO8BDphJS2aQwXK`
- **Type**: Number

### Send Definition

- **Field ID**: `fldrnQGnZfoJNbHm2`
- **Type**: Checkbox

### Set To Midnight

- **Field ID**: `fldjnOKpvnunZ5QNT`
- **Type**: Formula
- **Description**: Sets the Start Time to midnight of the same day.
- **Formula**: `DATEADD(
  DATETIME_PARSE(
    DATETIME_FORMAT({fld43BW7fjYMrLjs9}, 'YYYY-MM-DD') & 'T00:00:00',
    'YYYY-MM-DD\\THH:mm:ss'
  ),
  4,
  'hours'
)
`
- **Result Type**: dateTime

### Since Created (seconds)

- **Field ID**: `fldUVgfNqx0BizbbN`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fldphRwWJsdA4Gj5N},'seconds')`
- **Result Type**: number

### Since Updated (days)

- **Field ID**: `fldRq8w9aK25GpZNX`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fldm3cM5bsYhCEnwa},'days')`
- **Result Type**: number

### Since Updated (hours)

- **Field ID**: `fldZm0g0GYJfKQJY8`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fldm3cM5bsYhCEnwa},'hours')`
- **Result Type**: number

### Since Updated (seconds)

- **Field ID**: `fldbNjcl4Ig6Betmy`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fldm3cM5bsYhCEnwa},'seconds')`
- **Result Type**: number

### Specialty (from Health Care Provider)

- **Field ID**: `fldwD3OE5FEgiQ0DU`
- **Type**: Multiplelookupvalues

### Start Date w/o Time

- **Field ID**: `fldh71IpxmdfMUYCt`
- **Type**: Formula
- **Formula**: `{fld43BW7fjYMrLjs9}`
- **Result Type**: date

### Start Time

- **Field ID**: `fld43BW7fjYMrLjs9`
- **Type**: Datetime
- **Date Format**: us
- **Time Format**: 24hour
- **Time Zone**: America/New_York

### Start Timer

- **Field ID**: `fld8WWOGSScio3uwn`
- **Type**: Checkbox

### Start Updates Check

- **Field ID**: `fldjd5mGwQqj1Uyvj`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({fldm3cM5bsYhCEnwa},{fldphRwWJsdA4Gj5N},'minutes')`
- **Result Type**: number

### Status

- **Field ID**: `fldvXRj5JUVh7NG9S`
- **Type**: Single Select (5 options)
- **Options**:
  - Pending (blueLight2)
  - Scheduled (greenLight2)
  - Completed (orangeLight2)
  - Archived (cyanLight2)
  - Cancelled (tealLight2)

### Stop Timer

- **Field ID**: `fldGSQlo58pfrnUBD`
- **Type**: Checkbox

### Sub Record (old)

- **Field ID**: `fldwmdBIc82Eh1dYQ`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`

### Sub Record ID

- **Field ID**: `fld5mS7DzLg9jvYmD`
- **Type**: Singlelinetext

### Sub Type

- **Field ID**: `fldVp0MgHf11YNjud`
- **Type**: Multiple Select (160 options)
- **Options**:
  - 2024 Election (cyanLight2)
  - Academic debate (redLight1)
  - actors (yellowLight1)
  - agentic (redLight1)
  - AI Tools (orangeLight1)
  - Airtable Alternatives (cyanBright)
  - Airtable Learning (yellowDark1)
  - Airtable: Linking (orangeDark1)
  - Alignment (redDark1)
  - Alt Right (tealDark1)
  - anthony hopkins (blueDark1)
  - Anthropic (tealLight2)
  - api calls (purpleLight1)
  - Apps (purpleLight2)
  - Authors (blueDark1)
  - biking (grayBright)
  - Billy Wilder (cyanDark1)
  - Biography (redBright)
  - Blinds (blueLight2)
  - boxing (tealDark1)
  - British Sitcom (cyanLight1)
  - bugs (blueLight1)
  - builders (grayLight2)
  - Catskills (orangeLight2)
  - Charlie (purpleLight1)
  - ChatGPT (pinkBright)
  - cholesterol  (pinkLight1)
  - Cinema (yellowLight1)
  - Claude (yellowDark1)
  - Cleaning (yellowDark1)
  - cloudflare (blueLight1)
  - cms (cyanDark1)
  - Coding (grayDark1)
  - Complexity (redLight2)
  - Consciousness (cyanDark1)
  - context (orangeDark1)
  - Course (blueBright)
  - Creating Documents (pinkDark1)
  - Crime (tealBright)
  - crypto currency (cyanLight2)
  - Cultural critique (blueLight1)
  - Current (cyanLight2)
  - database (yellowLight2)
  - David Cronenberg (purpleBright)
  - david french (greenLight2)
  - DC (yellowBright)
  - Death (yellowLight1)
  - Democracy (grayLight1)
  - Dental (orangeLight2)
  - Email marketing (purpleLight1)
  - Entertainment (purpleLight1)
  - ESPN (orangeLight1)
  - Evil (cyanBright)
  - fascism (tealDark1)
  - Features (blueLight1)
  - Film directors (greenLight1)
  - Finance (purpleBright)
  - FIOS (grayLight2)
  - Fireplace (redDark1)
  - Fitbit (blueDark1)
  - Fitbit Versa 4 (blueLight1)
  - Freezer (cyanLight1)
  - french revoltuion (yellowBright)
  - gambling (orangeBright)
  - garden (pinkDark1)
  - garett holden (greenBright)
  - Gary Marcus (grayBright)
  - General LLM (tealDark1)
  - GitHub (orangeDark1)
  - Grading (redBright)
  - Guillermo del Toro (tealLight1)
  - hiking (purpleDark1)
  - Home Events (yellowBright)
  - Hudson Valley (yellowDark1)
  - HVAC (cyanBright)
  - IIJ (redLight2)
  - Inequality (greenBright)
  - Insurance (greenDark1)
  - Integration (yellowLight2)
  - invoice (redLight1)
  - jeff tweedy (blueDark1)
  - Joful Ops (yellowLight2)
  - John le Carré (grayBright)
  - kombucha (redLight2)
  - language (cyanLight1)
  - Limitations (purpleLight2)
  - linkedin (blueLight2)
  - Linking (greenDark1)
  - Little Booger (tealLight1)
  - lying (cyanLight2)
  - Mac (cyanLight1)
  - make (grayDark1)
  - MANC (greenDark1)
  - Media theory (orangeBright)
  - medicaid (tealBright)
  - Memory (yellowBright)
  - mental fog (tealBright)
  - Middle East (greenLight2)
  - music (redLight2)
  - Networking (pinkLight1)
  - Neurosymbolic AI (purpleDark1)
  - Nicolas Winding Refn (redBright)
  - NYC (purpleDark1)
  - Oil Change (tealLight2)
  - OpenAI (purpleLight2)
  - Org Structure (pinkLight1)
  - paul krugman (purpleBright)
  - people (grayDark1)
  - Performance (grayLight1)
  - Perplexity (purpleBright)
  - philip roth (pinkBright)
  - phish (blueLight2)
  - plastic (pinkDark1)
  - Plex Server (greenLight1)
  - Plymouth Tower (redLight1)
  - Portals (cyanDark1)
  - Primary Fields (blueLight2)
  - prompts (pinkLight2)
  - Quantum Mech (grayDark1)
  - Radovan (redBright)
  - refridgerator (tealLight1)
  - Reorganization (pinkLight2)
  - response (pinkLight2)
  - retirement (greenLight2)
  - Revolutionary War (cyanBright)
  - role (orangeLight2)
  - sam harris (pinkLight2)
  - scripting (orangeBright)
  - shoes (blueBright)
  - Slack Apps (pinkLight1)
  - SLM (redDark1)
  - small language models (tealBright)
  - SN (grayLight1)
  - snna (redDark1)
  - Social analysis (greenLight1)
  - Sofia Coppola (greenBright)
  - sora (blueLight2)
  - Spielberg (greenLight1)
  - strategy (pinkDark1)
  - system prompts (tealLight2)
  - Teacher (redBright)
  - Television (blueBright)
  - The Atlantic (greenDark1)
  - tim alberta (purpleLight2)
  - Tires (blueDark1)
  - trailer (yellowLight2)
  - transparency (orangeDark1)
  - trump (grayDark1)
  - tv (grayLight1)
  - Updates (grayLight2)
  - using ai (blueBright)
  - Variability (grayLight2)
  - violence (orangeLight1)
  - VPN (yellowLight1)
  - war (pinkBright)
  - water (orangeBright)
  - writing (orangeLight1)
  - Michel Houellebecq (pinkBright)
  - silicon valley (greenBright)
  - oliver sacks (orangeLight2)

### Sync lock

- **Field ID**: `fld2FMXFfXZvWmusX`
- **Type**: Checkbox

### Temp

- **Field ID**: `fldBFL7xdJbeuudo9`
- **Type**: Checkbox

### Temp Field

- **Field ID**: `fldrRL50aFifg7jak`
- **Type**: Singlelinetext

### Timer End Time

- **Field ID**: `fldsKNctQaphTq7hm`
- **Type**: Formula
- **Formula**: `NOW()`
- **Result Type**: dateTime

### Title

- **Field ID**: `fldSBxahTfGgcUT4y`
- **Type**: Singlelinetext

### Truncated Description

- **Field ID**: `fldcmN8NuF6B54Htq`
- **Type**: Formula
- **Description**: Truncates the Title field to a maximum of 1000 characters
- **Formula**: `MID({fldfmgCh93wZoHRDa}, 1, 2300)`
- **Result Type**: singleLineText

### Truncated Title

- **Field ID**: `fldi6GYSNiPVTJtQD`
- **Type**: Formula
- **Description**: Truncates the Title field to a maximum of 1000 characters
- **Formula**: `MID({fldSBxahTfGgcUT4y}, 1, 150)`
- **Result Type**: singleLineText

### Update GCal?

- **Field ID**: `fldo8qhsteJrj6Mvp`
- **Type**: Singlelinetext
- **Description**: Used to check if the record Google calendar fields were updated. If not the automation sets it to no so the update to google calendar does not run. 

### Updated

- **Field ID**: `fldm3cM5bsYhCEnwa`
- **Type**: Lastmodifiedtime

### Website (from Health Care Provider)

- **Field ID**: `fldLhoCXO4jkF0dMS`
- **Type**: Multiplelookupvalues

### Word Blackout

- **Field ID**: `flduWuBwHgfZSJlK4`
- **Type**: Formula
- **Description**: Determines if the current time is between 11pm and 5am, returning 'Yes' or 'No'.
- **Formula**: `IF(
  OR(
    HOUR(SET_TIMEZONE(NOW(), 'America/New_York')) >= 21,
    HOUR(SET_TIMEZONE(NOW(), 'America/New_York')) < 8
  ),
  "Yes",
  "No"
)
`
- **Result Type**: singleLineText

### Words Settings

- **Field ID**: `fldmeu4WZ3sWUT5yc`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbljiyBCDInZQGSd5`
- **Inverse Link Field**: `fldVkBLYHuMjkTo2t`

### Words Window End (from Words Settings)

- **Field ID**: `fldUgVJyeOYp7yCrw`
- **Type**: Multiplelookupvalues

### Words Window Start (from Words Settings)

- **Field ID**: `fldqW1rqWMKf7gMpf`
- **Type**: Multiplelookupvalues

### Work Timer Type

- **Field ID**: `fldGZc5nQ9x7NOo8A`
- **Type**: Single Select (5 options)
- **Options**:
  - Debugging (yellowLight2)
  - Design (cyanLight2)
  - Development (tealLight2)
  - Maintenance (greenLight2)
  - Research (blueLight2)

### Year Add

- **Field ID**: `fld9RYGrASD8NGn0w`
- **Type**: Checkbox

### Years Since

- **Field ID**: `fldWV0hf9MPD5hDvx`
- **Type**: Formula
- **Description**: Calculates the number of years since the year in parentheses in the Name field. 
- **Formula**: `IF(
  REGEX_MATCH({fldEVqyty5wYXRkLT}, "^\\(\\d{4}\\)"),
  DATETIME_DIFF(
    TODAY(),
    DATETIME_PARSE(
      MID({fldEVqyty5wYXRkLT}, 2, 4),
      'YYYY'
    ),
    'years'
  ),
  BLANK()
)
`
- **Result Type**: number

### mnemonic prompt

- **Field ID**: `fldJY7qG1PIhz0CmF`
- **Type**: Formula
- **Formula**: `CONCATENATE("give me some humorous sentence variations on a mnemonic device for"," ",{fldSBxahTfGgcUT4y})`
- **Result Type**: singleLineText

### pronunciation

- **Field ID**: `fld96OBOX5LwVbnM8`
- **Type**: Singlelinetext

### Field Type Summary

- **autoNumber**: 1 fields
  - Autonumber
- **button**: 1 fields
  - Interface Record Detail URL
- **checkbox**: 15 fields
  - Alerts Trigger
  - All Day Event?
  - Add to Google
  - Year Add
  - Month Add
  - Force Into Random Report
  - Email Update
  - Send Definition
  - Stop Timer
  - Start Timer
  - Month Delay
  - Current Working
  - Temp
  - From GCal
  - Sync lock
- **createdTime**: 1 fields
  - Created (At)
- **date**: 1 fields
  - Last day selected
- **dateTime**: 2 fields
  - Start Time
  - End Time
- **formula**: 44 fields
  - Name
  - Days Until
  - Since Updated (seconds)
  - Hours Until
  - Date for Alerts
  - Alerts
  - Since Created (seconds)
  - Date Check
  - New Date
  - Anniversary Next Year
  - Anniversary Next Month
  - Seconds Until
  - Created Month/Year
  - NYS Jobs Daily Link
  - Start Updates Check
  - Pre-Filled Annual
  - Record ID
  - Since Updated (hours)
  - Alert w Day
  - Start Date w/o Time
  - End Date w/o Time
  - Current Date
  - Seconds After
  - Fam Reminders Form
  - Attachment Image
  - Set To Midnight
  - Record_URL
  - Move Car End Date (formula)
  - Difference from Midnight
  - Timer End Time
  - Effort (minutes)
  - Check Delay
  - Truncated Title
  - Truncated Description
  - Since Updated (days)
  - Current Time
  - Word Blackout
  - Current Hour
  - Convert Created Date
  - Years Since
  - 14 Days Since Creation
  - Reset Start URL
  - mnemonic prompt
  - In Active Window
- **lastModifiedBy**: 1 fields
  - Last Updated by
- **lastModifiedTime**: 1 fields
  - Updated
- **multilineText**: 4 fields
  - G Cal Event ID
  - AI Prompt
  - G Cal Event URL
  - Interface Record Detail
- **multipleAttachments**: 1 fields
  - Attachments
- **multipleLookupValues**: 8 fields
  - Provider Name (from Health Care Provider)
  - Specialty (from Health Care Provider)
  - Address (from Health Care Provider)
  - Phone (from Health Care Provider)
  - Map (from Health Care Provider)
  - Website (from Health Care Provider)
  - Words Window End (from Words Settings)
  - Words Window Start (from Words Settings)
- **multipleRecordLinks**: 12 fields
  - Health Care Provider
  - Parent Record (old)
  - Sub Record (old)
  - Link to Research
  - Learning Experience
  - Parent
  - From field: Parent (Canonical)
  - Children (do not edit)
  - From field: Children (new)
  - Prev Parent (new)
  - From field: Prev Parent (new)
  - Words Settings
- **multipleSelects**: 3 fields
  - Research Type
  - Sub Type
  - Participants
- **number**: 2 fields
  - New Event in Days
  - SelectionCount
- **phoneNumber**: 1 fields
  - Phone
- **richText**: 3 fields
  - Description
  - Notes
  - Long Text
- **singleLineText**: 14 fields
  - Title
  - Location
  - Household Tasks
  - Force Update
  - Parent Record ID
  - Company
  - Job Title
  - Sub Record ID
  - pronunciation
  - Base64 Encoded ID
  - Update GCal?
  - Force Def
  - Temp Field
  - Old Parent (snapshot)
- **singleSelect**: 3 fields
  - Appt Type
  - Status
  - Work Timer Type
- **url**: 5 fields
  - Claude.AI URL
  - Google Gemini URL
  - Perplexity URL
  - GitHub URL
  - ChatGPT URL

---

## Navigation Directory

**Total Fields**: 12

### Active

- **Field ID**: `fldiQ8vnacf6tNDhJ`
- **Type**: Checkbox

### Category

- **Field ID**: `fldtBGBCvrE4tBU3f`
- **Type**: Single Select (12 options)
- **Options**:
  - Top Links (redLight1)
  - VIP Resources (greenLight2)
  - Automotive (grayLight2)
  - AI Resources (purpleLight2)
  - Bills (pinkLight2)
  - Financial (redLight2)
  - Job Search (cyanLight2)
  - Entertainment (yellowDark1)
  - High School Tracking (yellowLight2)
  - Research (tealLight2)
  - Events (blueLight2)
  - Deprecate (orangeLight2)

### Description

- **Field ID**: `fldkCnTQt0C8fBvFq`
- **Type**: Multilinetext

### Interface Location

- **Field ID**: `fld6aykdFSbjxHae4`
- **Type**: Single Select (3 options)
- **Options**:
  - Left (blueLight2)
  - Right (cyanLight2)
  - Delete (tealLight2)

### Last Modified

- **Field ID**: `fldMG3CMkQtJIkurp`
- **Type**: Lastmodifiedtime

### Link Button

- **Field ID**: `fldJxI3bjtIKIEreQ`
- **Type**: Button
- **Description**: Creates an HTML link that opens the URL in a new tab.

### Link Name

- **Field ID**: `fldq5tddN3MeVZV4f`
- **Type**: Singlelinetext

### Link Type

- **Field ID**: `fldlarYVpTRuMd6qK`
- **Type**: Single Select (5 options)
- **Options**:
  - Base (cyanLight2)
  - Form (yellowLight2)
  - Interface (tealLight2)
  - Outside URL (greenLight2)
  - View (blueLight2)

### Name

- **Field ID**: `fldUJmhllRPEl0Oq5`
- **Type**: Formula
- **Formula**: `{fldq5tddN3MeVZV4f}`
- **Result Type**: singleLineText

### Sort Order

- **Field ID**: `fldgtTXGTFuddIUEm`
- **Type**: Number

### Temp

- **Field ID**: `fld4ybI9ruZStnrcR`
- **Type**: Formula
- **Formula**: `"<a href='" & {fld1QPLgq0zQUUl4a} & "' target='_blank'>" & {fldq5tddN3MeVZV4f} & "</a>"`
- **Result Type**: singleLineText

### URL

- **Field ID**: `fld1QPLgq0zQUUl4a`
- **Type**: Url

### Field Type Summary

- **button**: 1 fields
  - Link Button
- **checkbox**: 1 fields
  - Active
- **formula**: 2 fields
  - Name
  - Temp
- **lastModifiedTime**: 1 fields
  - Last Modified
- **multilineText**: 1 fields
  - Description
- **number**: 1 fields
  - Sort Order
- **singleLineText**: 1 fields
  - Link Name
- **singleSelect**: 3 fields
  - Category
  - Link Type
  - Interface Location
- **url**: 1 fields
  - URL

---

## Research

**Total Fields**: 13

### Area

- **Field ID**: `fldZXZ4DnxulB81eQ`
- **Type**: Multiple Select (12 options)
- **Options**:
  - Human Nature (blueLight2)
  - War (redLight2)
  - Math (orangeLight2)
  - Politics (greenLight2)
  - Alt Right (pinkLight2)
  - Psychiatry (yellowLight2)
  - Language (purpleLight2)
  - Philosophy (cyanLight2)
  - Religion (grayLight2)
  - Short Story (tealLight2)
  - Law (cyanLight2)
  - AI (purpleLight1)

### Attachments

- **Field ID**: `fldSnQzXBQez90TDx`
- **Type**: Multipleattachments

### Category

- **Field ID**: `fldTuGORHRnEocWYb`
- **Type**: Single Select (23 options)
- **Options**:
  - AI Applications (blueLight2)
  - AI Economics (blueLight2)
  - AI Ethics and Safety (orangeLight2)
  - AI Infrastructure (pinkLight2)
  - AI Models and Architectures (blueLight2)
  - Algorithms and Techniques (pinkLight2)
  - Cognitive Science in AI (cyanDark1)
  - Computer Vision (purpleLight2)
  - Data Generation and Augmentation (blueLight2)
  - Data Preprocessing (redLight2)
  - Distributed AI (blueLight2)
  - Evaluation Metrics (blueLight2)
  - Fundamental Concepts (blueLight2)
  - General Use AI Product (cyanBright)
  - Interdisciplinary AI (blueLight2)
  - Machine Learning Techniques (cyanLight2)
  - Model Deployment and Optimization (blueLight2)
  - Model Training Concepts (blueLight2)
  - Natural Language Processing (tealLight2)
  - Neural Networks and Deep Learning (greenLight2)
  - Reasoning and Problem-Solving (blueLight2)
  - Reinforcement Learning (blueLight2)
  - Search and Information Retrieval (redLight2)

### Created (AT)

- **Field ID**: `fldGWNUNX6fXbUBNL`
- **Type**: Createdtime

### Definition

- **Field ID**: `fldHUPVe5XZvEoW8e`
- **Type**: Richtext

### Home Events copy

- **Field ID**: `fldvBSJXcnVTcTIJa`
- **Type**: Singlelinetext

### Link to Articles

- **Field ID**: `fld2pb9yJYTUCAL8O`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldikHMjvMh5Q5LLX`

### Name

- **Field ID**: `fldnmHZc8oZhtaO6i`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldwJVyvnBgDciQCW`
- **Type**: Richtext

### People

- **Field ID**: `fldOQYcajZPrfXLo0`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbllaltSIUR5XDxFz`
- **Inverse Link Field**: `fldSkoDDJ3yXgyFG5`

### Status

- **Field ID**: `fldlewzBZaTcMZEFM`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### SubCategory

- **Field ID**: `fldxoL8GbLYc1ThPG`
- **Type**: Single Select (30 options)
- **Options**:
  - AI Ethics and Safety (orangeLight2)
  - AI Models and Architectures (blueLight2)
  - Algorithms and Techniques (pinkLight2)
  - Cognitive Science in AI (cyanDark1)
  - Computer Vision (purpleLight2)
  - Data Generation and Augmentation (blueLight2)
  - Data Preprocessing (redLight2)
  - Distributed AI (blueLight2)
  - Fundamental Concepts (blueLight2)
  - Interdisciplinary AI (blueLight2)
  - Machine Learning Techniques (cyanLight2)
  - Model Deployment and Optimization (blueLight2)
  - Natural Language Processing (tealLight2)
  - Neural Networks and Deep Learning (greenLight2)
  - Reasoning and Problem-Solving (blueLight2)
  - Reinforcement Learning (blueLight2)
  - Evaluation Metrics (blueLight2)
  - Model Training Concepts (blueLight2)
  - AI Applications (blueLight2)
  - General Use AI Product (cyanBright)
  - Conversational AI and information retrieval (cyanLight2)
  - AI-powered productivity assistant (tealLight2)
  - Conversational AI with strong reasoning capabilities (greenLight2)
  - AI-powered search engine (yellowLight2)
  - Advanced language translation (orangeLight2)
  - AI-assisted graphic design tool (redLight2)
  - AI character creation and interaction (pinkLight2)
  - AI writing assistant and paraphrasing tool (purpleLight2)
  - AI-powered grammar and style checker (grayLight2)
  - Conversational AI for various tasks (blueLight2)

### URLs

- **Field ID**: `fldw2MqNpGFtasS38`
- **Type**: Multilinetext

### Field Type Summary

- **createdTime**: 1 fields
  - Created (AT)
- **multilineText**: 1 fields
  - URLs
- **multipleAttachments**: 1 fields
  - Attachments
- **multipleRecordLinks**: 2 fields
  - Link to Articles
  - People
- **multipleSelects**: 1 fields
  - Area
- **richText**: 2 fields
  - Definition
  - Notes
- **singleLineText**: 2 fields
  - Name
  - Home Events copy
- **singleSelect**: 3 fields
  - Category
  - SubCategory
  - Status

---

## GCal

**Total Fields**: 16

### All Day

- **Field ID**: `fldQN11gbq61uIiQb`
- **Type**: Checkbox

### Attendees

- **Field ID**: `fldmfmw46YFMOLofU`
- **Type**: Singlelinetext

### Created

- **Field ID**: `fldcXHZycClGvhtpT`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### Creator

- **Field ID**: `fld8JZLIQ1WVQFOlI`
- **Type**: Email

### Description

- **Field ID**: `fldU6z2x02JF3hsdR`
- **Type**: Multilinetext

### End

- **Field ID**: `fldaIgD3zchObR602`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### Event ID

- **Field ID**: `fldEUeARD9c5yl0Og`
- **Type**: Singlelinetext

### Event Link

- **Field ID**: `fldjKIueSERG3tWKs`
- **Type**: Url

### Hangouts Link

- **Field ID**: `fldCQHa78RS9UHMPR`
- **Type**: Url

### Location

- **Field ID**: `fldHqHzHUteNDBvEY`
- **Type**: Singlelinetext

### Open in Google Calendar

- **Field ID**: `fldtigprGRt024viv`
- **Type**: Button

### Recurring Event

- **Field ID**: `fldgz167eApZIDXKv`
- **Type**: Checkbox

### Start

- **Field ID**: `fldJ4m5QD7rPxN8vb`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### Status

- **Field ID**: `fldC5qOifTPDv2JWw`
- **Type**: Single Select (1 options)
- **Options**:
  - confirmed (blueLight2)

### Title

- **Field ID**: `fldxt732w7wuxnFNu`
- **Type**: Singlelinetext

### Updated

- **Field ID**: `fld3yATCaoeaN6WKl`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### Field Type Summary

- **button**: 1 fields
  - Open in Google Calendar
- **checkbox**: 2 fields
  - All Day
  - Recurring Event
- **dateTime**: 4 fields
  - Start
  - End
  - Created
  - Updated
- **email**: 1 fields
  - Creator
- **multilineText**: 1 fields
  - Description
- **singleLineText**: 4 fields
  - Title
  - Location
  - Attendees
  - Event ID
- **singleSelect**: 1 fields
  - Status
- **url**: 2 fields
  - Event Link
  - Hangouts Link

---

## Article Classifications

**Total Fields**: 3

### Articles

- **Field ID**: `fldIV5SHKtyy5ixi8`
- **Type**: Singlelinetext

### Category

- **Field ID**: `fldEMmTq0Gbl84Njh`
- **Type**: Multilinetext

### Definition

- **Field ID**: `fldqTto0BCppkC1TV`
- **Type**: Multilinetext

### Field Type Summary

- **multilineText**: 2 fields
  - Category
  - Definition
- **singleLineText**: 1 fields
  - Articles

---

## Article Tags

**Total Fields**: 3

### Articles

- **Field ID**: `fldeNTWYzYo3sllTI`
- **Type**: Singlelinetext

### Definition

- **Field ID**: `fldfpJUlBMIFVfJnM`
- **Type**: Multilinetext

### Tag

- **Field ID**: `fldyBeBO47zsrPwyg`
- **Type**: Multilinetext

### Field Type Summary

- **multilineText**: 2 fields
  - Tag
  - Definition
- **singleLineText**: 1 fields
  - Articles

---

## Schwab Checking

**Total Fields**: 20

### Beograd

- **Field ID**: `fldMuoUS2dHaZAneM`
- **Type**: Checkbox

### Check It

- **Field ID**: `fldsMktUz1anI40Qz`
- **Type**: Checkbox

### Check on Charges

- **Field ID**: `fldQoA96v1k6Ca9bc`
- **Type**: Checkbox

### CheckNumber

- **Field ID**: `fldRud2udloN4ekka`
- **Type**: Number

### Created (AT)

- **Field ID**: `fldciXZjONMtlj1b7`
- **Type**: Createdtime

### Date

- **Field ID**: `fldeNWgiq1h7paRf2`
- **Type**: Date
- **Date Format**: local

### Day

- **Field ID**: `fldaYWoDPc02iG2Lk`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fldeNWgiq1h7paRf2},'ddd')`
- **Result Type**: singleLineText

### Deposit

- **Field ID**: `flddZUWIpWSVPrUvc`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Description

- **Field ID**: `fldg8InYuVspzHsUv`
- **Type**: Singlelinetext

### Description (Text)

- **Field ID**: `flda5onjSZbMVRSTS`
- **Type**: Formula
- **Formula**: `CONCATENATE({fldg8InYuVspzHsUv})`
- **Result Type**: singleLineText

### Link to Groceries

- **Field ID**: `fldpTsJxRPJNFtihb`
- **Type**: Singlelinetext

### Maintenance

- **Field ID**: `fldPCxi4CT1dkAqCx`
- **Type**: Single Select (2 options)
- **Options**:
  - Yes (blueLight2)
  - No (cyanLight2)

### Month-Year

- **Field ID**: `fldaZfXUzfkbOEFbj`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fldeNWgiq1h7paRf2},'MM-YYYY')`
- **Result Type**: singleLineText

### Monthly Bill

- **Field ID**: `fldWghW6ohBy1XIK3`
- **Type**: Checkbox

### Note

- **Field ID**: `fldN61Mm8jx7IxRYd`
- **Type**: Multilinetext

### RunningBalance

- **Field ID**: `fldMU7iB5xMpVsthx`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldru8MksWIg5OmEQ`
- **Type**: Single Select (2 options)
- **Options**:
  - Pending (blueLight2)
  - Posted (cyanLight2)

### Type

- **Field ID**: `fldlphI5cyVKfiFhM`
- **Type**: Single Select (11 options)
- **Options**:
  -  (blueLight2)
  - TRANSFER (cyanLight2)
  - VISA (tealLight2)
  - ACH (greenLight2)
  - ATM (yellowLight2)
  - DEPOSIT (orangeLight2)
  - INTADJUST (redLight2)
  - ATMREBATE (pinkLight2)
  - CHECK (purpleLight2)
  - CREDIT (grayLight2)
  - RETURNITEM (blueLight1)

### Withdrawal

- **Field ID**: `fldHagazB9gm7yHvs`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Year

- **Field ID**: `fldwTHXd6tQnFJjY7`
- **Type**: Formula
- **Formula**: `YEAR({fldeNWgiq1h7paRf2})`
- **Result Type**: number

### Field Type Summary

- **checkbox**: 4 fields
  - Beograd
  - Monthly Bill
  - Check It
  - Check on Charges
- **createdTime**: 1 fields
  - Created (AT)
- **currency**: 2 fields
  - Withdrawal
  - Deposit
- **date**: 1 fields
  - Date
- **formula**: 4 fields
  - Day
  - Month-Year
  - Description (Text)
  - Year
- **multilineText**: 2 fields
  - RunningBalance
  - Note
- **number**: 1 fields
  - CheckNumber
- **singleLineText**: 2 fields
  - Description
  - Link to Groceries
- **singleSelect**: 3 fields
  - Status
  - Type
  - Maintenance

---

## Groceries

**Total Fields**: 11

### Aisle

- **Field ID**: `fldX1PV9oaeidjUuZ`
- **Type**: Single Select (17 options)
- **Options**:
  - Aisle 4 (blueLight2)
  - Aisle 9 (cyanLight2)
  - Dairy (tealLight2)
  - Deli (greenLight2)
  - Produce (yellowLight2)
  - Aisle 1 (blueLight2)
  - Aisle 2 (cyanLight2)
  - Aisle 4 (tealLight2)
  - N/A (redLight2)
  - Aisle 10 (blueLight2)
  - Grocery (blueLight2)
  - Aisle 8 (blueLight2)
  - Aisle 7 (blueLight2)
  - Aisle 5 (blueLight2)
  - Aisle 6 (cyanLight2)
  - Meat (blueLight2)
  - Behind Meat Case (blueLight2)

### Brand

- **Field ID**: `fld0MsTSmpBNcX7LR`
- **Type**: Single Select (41 options)
- **Options**:
  - 81% Lean Ground Beef Family Pack (blueLight2)
  - 90% Lean Ground Beef Small Pack (cyanLight2)
  - Angus 91% Lean Ground Beef (tealLight2)
  - Barilla (blueLight2)
  - Bob's Red Mill (blueLight2)
  - Bob'S Red Mill Gluten Free Chocolate Chip Cookie Mix (blueLight2)
  - Cabot (tealLight2)
  - Cafe Olympia (greenLight2)
  - Cedar's (yellowLight2)
  - Crazy Richard's 100% Pure Peanut Powder (blueLight2)
  - Farmer's Table 96% Lean Ground Beef (greenLight2)
  - Farmer's Table Prime Rib Beef Patty (yellowLight2)
  - Fresh Express (blueLight2)
  - Garlic (cyanLight2)
  - Goya (tealLight2)
  - Ground Beef (blueLight2)
  - Hannaford (cyanLight2)
  - Hannaford Dry Roasted Peanuts (tealLight2)
  - Hannaford Ground Black Pepper (blueLight2)
  - Hannaford Yellow Onions (tealLight2)
  - Heidelberg (blueLight2)
  - Hurst's (cyanLight2)
  - Just Ice Tea (orangeLight1)
  - Kashi (blueLight2)
  - Langers (yellowBright)
  - Nature's Path Organic (cyanLight2)
  - Nature's Promise Organic (cyanLight2)
  - Organic Ginger (blueLight2)
  - Orville Redenbacher's Skinny Girl Butter Sea Salt Popcorn (greenLight2)
  - Pasture Raised (blueLight2)
  - Pete & Gerry's (blueLight2)
  - Pete and Gerry's (blueLight2)
  - Peter Pan (blueLight2)
  - Produce (blueBright)
  - Shady Brook Farms (blueLight2)
  - Shadybrook Farm (blueLight2)
  - Snyder's of Hanover Mini Pretzels (yellowLight2)
  - Snyder's of Hanover Pretzel Sticks (orangeLight2)
  - Teddie All Natural Smooth Peanut Butter (cyanLight2)
  - The Country Butcher (blueLight2)
  - Trader Joe's (tealBright)

### Label

- **Field ID**: `fldPIFwN6jQjORGOr`
- **Type**: Multipleattachments

### List

- **Field ID**: `fldVTSF6rfy39gfW2`
- **Type**: Single Select (99 options)
- **Options**:
  - 2 Lb. (tealLight2)
  - 4" Center Beef Bone Dog Chew (blueLight2)
  - 8 Oz. (blueLight2)
  - 15-Bean Soup Mix (pinkBright)
  - 16-Bean Soup Mix Dried With Ham (greenLight1)
  - 50/50 Salad Mix (greenLight2)
  - 80 LEAN GROUND BEEF (blueLight2)
  - 85 LEAN GROUND BEEF (cyanLight2)
  - 85% Lean Ground Turkey (blueLight2)
  - 90 LEAN GROUND BEEF (tealLight2)
  - All Natural Smooth Peanut Butter (cyanLight2)
  - Angus 91% Lean Ground Beef (tealLight2)
  - Avocado (redDark1)
  - BEEF GROUND SIRLOIN (greenLight2)
  - Berry Hibiscus Herbal Tea (orangeDark1)
  - Black Turtle Beans Dried (yellowLight1)
  - Bunched Dill (orangeLight2)
  - Caesar Supreme Salad Mix (blueLight2)
  - Cage Free Extra Large Brown Eggs (blueLight2)
  - Cannellini Beans (purpleLight2)
  - Cranberry Pomegranate Juice (pinkDark1)
  - Creamy Peanut Butter (blueLight2)
  - Crinkle Cut French Fries (blueLight2)
  - Crinkle Cut Fries (cyanLight2)
  - Cucumber & Garlic Tzatziki (yellowLight2)
  - Cucumbers (redLight2)
  - Dried Blackeyed Peas (orangeLight1)
  - Dried Green Split Peas (redLight1)
  - Dried Large Lima Beans (pinkLight1)
  - Dried Lentils (purpleLight1)
  - Dried Light Red Kidney Beans (grayLight1)
  - Dried Navy Beans (blueBright)
  - Dried Northern Beans (cyanBright)
  - Dried Pinto Beans (tealBright)
  - Dried Small Red Beans (greenBright)
  - Dried Small White Beans (yellowBright)
  - Dried Yelloweye Peas (orangeBright)
  - Dry Black Beans (cyanDark1)
  - Dry Lentil Beans (tealDark1)
  - Dry Navy Beans (greenDark1)
  - Dry Pinto Beans (yellowDark1)
  - Dry Roasted Peanuts (tealLight2)
  - Each (cyanLight2)
  - Essentially You w/Red Berries Cereal (tealLight2)
  - Fancy Greens (cyanLight2)
  - Farmer's Table 96% Lean Ground Beef (greenLight2)
  - Farmer's Table Prime Rib Beef Patty (yellowLight2)
  - Feta Cheese (greenLight2)
  - Flax Plus Multibran Flakes (cyanLight1)
  - Flax Seed Bread (blueLight2)
  - FP 80 LEAN GROUND BEEF (yellowLight2)
  - Garlic (pinkLight2)
  - Ginger (blueLight2)
  - Gluten Free Chocolate Chip Cookie Mix (blueLight2)
  - GoLean Crunch Honey Almond Flax Cereal (blueLight1)
  - Great Northern Beans Dried (redBright)
  - Greek Style Plain Yogurt (tealLight2)
  - Green Lentils (grayLight2)
  - Green Split HamPeas (purpleBright)
  - Green Split Peas (blueLight1)
  - Ground Beef Family Pack (blueLight2)
  - Ground Beef Small Pack (cyanLight2)
  - Ground Black Pepper (blueLight2)
  - Hannaford Yellow Onions (blueLight2)
  - Hard Rolls (cyanLight2)
  - Hearts of Romaine Salad Mix (tealLight2)
  - Heritage Flakes Cereal (tealLight1)
  - Honey Oat Granola (blueLight2)
  - Italian Bean Soup HamBeens (grayBright)
  - Peach Oolong Tea (purpleDark1)
  - Large Brown Eggs (blueLight2)
  - Lentils (cyanLight1)
  - Long Grain Brown Rice (blueLight2)
  - Medium Beef Rib Bone Dog Chew (cyanLight2)
  - Mini Pretzels (yellowLight2)
  - Multigrain Tasteeos Cereal (greenLight2)
  - Oat & Honey Low Fat Granola (yellowLight2)
  - Oat & Honey Protein Granola (orangeLight2)
  - Oat Bran Bread (tealLight2)
  - Oats & More w/Honey Cereal (pinkLight2)
  - Oats & More With Almonds Cereal (redLight2)
  - Old Country Style Muesli Cereal (cyanLight2)
  - Old Fashioned Oatmeal (greenLight1)
  - Old Fashioned Oats (purpleLight2)
  - ORGANIC LARGE BROWN EGGS (blueLight2)
  - Organic Large Brown Omega 3 Grade A Eggs (blueLight2)
  - Organic Persian Cucumbers (grayDark1)
  - Orzo Pasta (blueLight2)
  - PEANUT BUTTER CREAMY (blueLight2)
  - Pretzel Sticks (orangeLight2)
  - Quick Oats (grayLight2)
  - Red Lentils (tealLight1)
  - Restaurant Bite Size Tortillas (cyanLight2)
  - Skinny Girl Butter Sea Salt Popcorn (greenLight2)
  - Spring Mix (yellowLight2)
  - Steak Cut French Fries (tealLight2)
  - Straight Cut French Fries (greenLight2)
  - TURKEY GROUND FAMILY PACK 85 (blueLight2)
  - Whole Black Pepper (blueDark1)

### Location

- **Field ID**: `fldSvItF4pAwmxrqm`
- **Type**: Single Select (7 options)
- **Options**:
  - Cairo Hannaford (blueLight2)
  - Amazon (orangeDark1)
  - Trader Joe's Online (yellowBright)
  - Grocery (blueLight2)
  - UES Keyfood (blueLight2)
  - ShopRite (purpleLight2)
  - Catskill Walmart (pinkBright)

### Meat (Y/N)

- **Field ID**: `fldBWPgy6hElNsIVN`
- **Type**: Formula
- **Formula**: `IF(SEARCH("MEAT", UPPER({fldX1PV9oaeidjUuZ}))=0,"N","Y")`
- **Result Type**: singleLineText

### Name

- **Field ID**: `fldmdufg8kFmgQ4GK`
- **Type**: Formula
- **Formula**: `CONCATENATE({fld0MsTSmpBNcX7LR}, "-",{fldVTSF6rfy39gfW2})`
- **Result Type**: singleLineText

### Price

- **Field ID**: `fldVzwSlHF1o8K01W`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Price per Unit

- **Field ID**: `fldcaUPcSlMGR4s5h`
- **Type**: Formula
- **Formula**: `SWITCH({fldFVx12Esc05kcLb},"Each",{fldVzwSlHF1o8K01W},{fldVzwSlHF1o8K01W}/VALUE(SUBSTITUTE({fldFVx12Esc05kcLb}, '.', ',')))`
- **Result Type**: currency

### Total Units

- **Field ID**: `fldFVx12Esc05kcLb`
- **Type**: Singlelinetext

### Unit

- **Field ID**: `fldem5mOX54cvMoyJ`
- **Type**: Single Select (9 options)
- **Options**:
  - Oz. (blueLight2)
  - Ea. (blueLight2)
  - Each (pinkLight2)
  - Lb. (cyanBright)
  - Kit (blueLight2)
  - LB (blueLight2)
  - OZ (blueLight2)
  - DZ (blueLight2)
  - Ct. (blueLight2)

### Field Type Summary

- **currency**: 1 fields
  - Price
- **formula**: 3 fields
  - Name
  - Price per Unit
  - Meat (Y/N)
- **multipleAttachments**: 1 fields
  - Label
- **singleLineText**: 1 fields
  - Total Units
- **singleSelect**: 5 fields
  - Location
  - Aisle
  - Brand
  - List
  - Unit

---

## Resources

**Total Fields**: 51

### Additional Information

- **Field ID**: `fldhginRL5ZFYt9By`
- **Type**: Richtext

### Age Days

- **Field ID**: `fldwLxSIsyNmfjJ5i`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(), {fld2f5BNOoSZFIhKM}, 'days')`
- **Result Type**: number

### Age Yers

- **Field ID**: `flduHvvR8JVbgOTUA`
- **Type**: Formula
- **Formula**: `{fldwLxSIsyNmfjJ5i}/365`
- **Result Type**: number

### Aisle

- **Field ID**: `fldjQpijvVYTbI0gd`
- **Type**: Singlelinetext

### Attachments

- **Field ID**: `fldMX9UEJwXi7rkt1`
- **Type**: Multipleattachments

### Backup Timer Start

- **Field ID**: `fld6vlK2dZpu2vaCV`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### Category

- **Field ID**: `fldzGgRLHMe5scXJ8`
- **Type**: Multiple Select (22 options)
- **Options**:
  - System (blueLight2)
  - Manuals (blueLight2)
  - Hard Drive (cyanLight2)
  - Equipment (cyanLight2)
  - Files (purpleLight2)
  - Water Reading (pinkLight2)
  - HowTo (redLight2)
  - Work (grayLight2)
  - Fun Things (purpleLight2)
  - Services (yellowLight2)
  - Archive (purpleLight2)
  - Cooking (orangeLight2)
  - Health (orangeLight2)
  - Misc (blueLight2)
  - Toyota (purpleLight2)
  - Lawn (greenLight2)
  - Electric (purpleLight2)
  - Marina (blueLight2)
  - Septic Replacement (grayLight2)
  - Charlie (tealLight2)
  - Grocery (blueLight2)
  - Service Location (blueLight1)

### Connect To Water Reading

- **Field ID**: `fldttSESSH1sgwzYO`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblJyrUqobEmzIAkQ`

### Copy Temp

- **Field ID**: `fldy5ajee4qw3R2ZS`
- **Type**: Formula
- **Formula**: `CONCATENATE("Model:",{fldA7VWF5Og1pa22Z}," ","Serial:"," ",{fldEkN0HcGdpAP2SS})`
- **Result Type**: singleLineText

### Cost

- **Field ID**: `fld13wG2fKYPiR8aS`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Cost Per Day

- **Field ID**: `fld4byuAIkuGBztHN`
- **Type**: Formula
- **Formula**: `{fld13wG2fKYPiR8aS}/{fldwLxSIsyNmfjJ5i}`
- **Result Type**: number

### Cost Per Month

- **Field ID**: `fldRY5zlxAyoqAmuS`
- **Type**: Formula
- **Formula**: `(52*7)*{fld4byuAIkuGBztHN}/12`
- **Result Type**: currency

### Created Date (AT)

- **Field ID**: `fldZyybYbfaC7TZjY`
- **Type**: Createdtime

### Days Since Last Backup

- **Field ID**: `fldJZENNHtjt8AKxo`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(), {fldblzkONy3iIkEEF},'days')`
- **Result Type**: number

### Days Until Date

- **Field ID**: `fldGN4fBFa5CJOPXF`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF({fldVTv6sxbnMoAnrI},NOW(),'days')`
- **Result Type**: number

### Desc

- **Field ID**: `fld8VxvVAkB3M2oPu`
- **Type**: Richtext

### End Date

- **Field ID**: `fldLjD3k197itUUrG`
- **Type**: Date
- **Date Format**: local

### End Day of Week

- **Field ID**: `fldMPRGntWWxZY65K`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fldLjD3k197itUUrG},'dddd')`
- **Result Type**: singleLineText

### Last Backup

- **Field ID**: `fldblzkONy3iIkEEF`
- **Type**: Date
- **Date Format**: local

### Last Update

- **Field ID**: `fldDrCjKcGYx8ZKKx`
- **Type**: Lastmodifiedtime

### Learning Experience

- **Field ID**: `fldFzkAYuLL5qHlQX`
- **Type**: Singlelinetext

### List

- **Field ID**: `fldhDo3wgRuG0zoYU`
- **Type**: Singlelinetext

### Location

- **Field ID**: `fldSi1FdJ6QK5Mpsy`
- **Type**: Single Select (15 options)
- **Options**:
  - ProBox 8 bay (blueLight2)
  - WalkIn Closet (yellowLight2)
  - ProBox 4 bay (cyanLight2)
  - Media Shelf in 8A (orangeLight2)
  - 8A (cyanLight2)
  - Internet/Cloud (greenLight2)
  - Mom's NC (orangeLight2)
  - 9 Albert Court (purpleLight2)
  - Decommissioned (purpleLight2)
  - General (tealLight2)
  - NYC (tealLight2)
  - Catskill (blueLight2)
  - Bronx NY (yellowLight2)
  - Stop Tracking (redLight2)
  - Cairo Hannaford (blueLight2)

### Manual (attachment)

- **Field ID**: `fldqeIr9SQb8uAryc`
- **Type**: Multipleattachments

### Millage

- **Field ID**: `fld4lsLGGikGkYTNF`
- **Type**: Number

### Model / Acct #

- **Field ID**: `fldA7VWF5Og1pa22Z`
- **Type**: Singlelinetext

### More Info (url)

- **Field ID**: `fldJ1KXtbYTYEzQx4`
- **Type**: Url

### Moved to new Base

- **Field ID**: `fldUMAMowqSgubUCK`
- **Type**: Checkbox

### Name

- **Field ID**: `fldOTItg2bpJo6qVt`
- **Type**: Formula
- **Formula**: `IF({fldzGgRLHMe5scXJ8} = "Hard Drive",CONCATENATE({fldPnKZ2IYt0mDEpq}),
CONCATENATE({fldYky9JmPsXETPag},"-",{fldXwQfYYM3dTQGVT},"-",{fldPnKZ2IYt0mDEpq})
)`
- **Result Type**: singleLineText

### Notes

- **Field ID**: `fldYVqxqg1Wrsof2T`
- **Type**: Multilinetext

### Options

- **Field ID**: `fldgxrYJbI0HtZWD1`
- **Type**: Singlelinetext

### P Date (Euro)

- **Field ID**: `fldYky9JmPsXETPag`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fld2f5BNOoSZFIhKM},'YYYY-MM-DD')`
- **Result Type**: singleLineText

### Phone

- **Field ID**: `fld5UjOuKvx81vLaQ`
- **Type**: Phonenumber

### Power On (hrs)

- **Field ID**: `fld8AfrkIkN3lp1KV`
- **Type**: Number

### Power On (yrs)

- **Field ID**: `fldDfxlMamgxd5wFu`
- **Type**: Formula
- **Formula**: `{fld8AfrkIkN3lp1KV}/365/24`
- **Result Type**: number

### Price

- **Field ID**: `fldYaSy8m68ezXY6r`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Procedurs

- **Field ID**: `fldD4mSY0WHkWHMZo`
- **Type**: Multilinetext

### Purchase Date

- **Field ID**: `fld2f5BNOoSZFIhKM`
- **Type**: Date
- **Date Format**: local

### Receive Date

- **Field ID**: `fld8GVZ86K4a8jRwH`
- **Type**: Date
- **Date Format**: local

### Resource Name

- **Field ID**: `fldQWfnxwzFtPyjrv`
- **Type**: Singlelinetext

### Serial

- **Field ID**: `fldEkN0HcGdpAP2SS`
- **Type**: Singlelinetext

### Service Date

- **Field ID**: `flddXyYQLANj15OTe`
- **Type**: Date
- **Date Format**: local

### Short Description

- **Field ID**: `fldPnKZ2IYt0mDEpq`
- **Type**: Richtext

### Size

- **Field ID**: `fldxRPq792AptHkgB`
- **Type**: Number

### Size/Type

- **Field ID**: `fldXwQfYYM3dTQGVT`
- **Type**: Single Select (11 options)
- **Options**:
  - TB (blueLight2)
  - Bay (grayLight2)
  - PPM (tealLight2)
  - Water Filter (pinkLight2)
  - Receipt (cyanLight2)
  - Opp Side Parking (greenLight2)
  - Pet (redLight1)
  - Services (purpleLight1)
  - Kitchen Appliance (cyanBright)
  - Equipment (tealDark1)
  - Car Parts (yellowLight2)

### Start Date

- **Field ID**: `fldVTv6sxbnMoAnrI`
- **Type**: Date
- **Date Format**: local

### Start Day of Week

- **Field ID**: `fldUD6VLZGEPfTCEm`
- **Type**: Formula
- **Formula**: `DATETIME_FORMAT({fldVTv6sxbnMoAnrI},'dddd')`
- **Result Type**: singleLineText

### Status

- **Field ID**: `fldJ78vcJyd6cZEFQ`
- **Type**: Multiple Select (11 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)
  - Regular Source (grayLight2)
  - Backup (redLight2)
  - DVR (tealLight2)
  - Current (cyanLight2)
  - Old Time Machine (orangeLight2)
  - Non-Media (grayLight2)
  - Errors (cyanLight2)
  - Out of Service (grayLight2)

### Timer Countdown

- **Field ID**: `fldbwIHvdhLVI1Jr1`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fld6vlK2dZpu2vaCV},'hours')`
- **Result Type**: number

### URL

- **Field ID**: `fldvJEjc1NXSF2Muo`
- **Type**: Url

### Warranty

- **Field ID**: `fldOLyuQUzBC1wS2j`
- **Type**: Multilinetext

### Field Type Summary

- **checkbox**: 1 fields
  - Moved to new Base
- **createdTime**: 1 fields
  - Created Date (AT)
- **currency**: 2 fields
  - Cost
  - Price
- **date**: 6 fields
  - Purchase Date
  - Last Backup
  - Receive Date
  - Service Date
  - Start Date
  - End Date
- **dateTime**: 1 fields
  - Backup Timer Start
- **formula**: 13 fields
  - Name
  - Age Yers
  - Power On (yrs)
  - Days Since Last Backup
  - Age Days
  - Cost Per Day
  - Cost Per Month
  - Days Until Date
  - Start Day of Week
  - End Day of Week
  - P Date (Euro)
  - Timer Countdown
  - Copy Temp
- **lastModifiedTime**: 1 fields
  - Last Update
- **multilineText**: 3 fields
  - Procedurs
  - Notes
  - Warranty
- **multipleAttachments**: 2 fields
  - Attachments
  - Manual (attachment)
- **multipleRecordLinks**: 1 fields
  - Connect To Water Reading
- **multipleSelects**: 2 fields
  - Status
  - Category
- **number**: 3 fields
  - Size
  - Power On (hrs)
  - Millage
- **phoneNumber**: 1 fields
  - Phone
- **richText**: 3 fields
  - Short Description
  - Desc
  - Additional Information
- **singleLineText**: 7 fields
  - Serial
  - Model / Acct #
  - Resource Name
  - Aisle
  - List
  - Options
  - Learning Experience
- **singleSelect**: 2 fields
  - Location
  - Size/Type
- **url**: 2 fields
  - URL
  - More Info (url)

---

## Health

**Total Fields**: 15

### Date

- **Field ID**: `fldolycwwwYhJVTBp`
- **Type**: Date
- **Date Format**: local

### Final Documents

- **Field ID**: `fldQpvzTKOJdOmfTd`
- **Type**: Multipleattachments

### Name

- **Field ID**: `fldvQ8KqkIPcHsRMf`
- **Type**: Formula
- **Formula**: `CONCATENATE(DATETIME_FORMAT({fldolycwwwYhJVTBp},'YYYY-MM'),"-",{fldythktdSwl9Seca},"-",{fldO3YGUmBWVYxo1J},"-",{fldwclr6eEZnWsVT3})`
- **Result Type**: singleLineText

### Notes

- **Field ID**: `fld15CrXuAQ4VpQuf`
- **Type**: Multilinetext

### People

- **Field ID**: `fldBY2Ymk6nujCHXj`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblAugVXKLWMk2t3L`
- **Inverse Link Field**: `fldWtvTv79h8k5hN4`

### Preliminary Documents

- **Field ID**: `fldkjbcO4NbqVEtdA`
- **Type**: Multipleattachments

### Testing

- **Field ID**: `fld5aqnBHRZturoiG`
- **Type**: Multiple Select (2 options)
- **Options**:
  - Lyme (blueLight2)
  - Anaplasma (cyanLight2)

### Type

- **Field ID**: `fldM4msb2qMr1zEuQ`
- **Type**: Multiple Select (2 options)
- **Options**:
  - Insurance (blueLight2)
  - Appointment (blueLight1)

### URL

- **Field ID**: `fldmvX6dz8fxpoaGk`
- **Type**: Url

### Vaccine

- **Field ID**: `fldc6RGMUclNRNGVD`
- **Type**: Multiple Select (6 options)
- **Options**:
  - Lyme (blueLight2)
  - Bordetella Vaccine (cyanLight2)
  - SNAP 4Dx Plus (Heartworm + Tick (tealLight2)
  - Covid-19 (greenLight2)
  - Tetanus (yellowLight2)
  - Lepto (greenDark1)

### Weight

- **Field ID**: `fldMgMKT2BXeIPR1j`
- **Type**: Number
- **Precision**: 1

### What?

- **Field ID**: `fldO3YGUmBWVYxo1J`
- **Type**: Singlelinetext

### Where?

- **Field ID**: `fldwclr6eEZnWsVT3`
- **Type**: Singlelinetext

### Who?

- **Field ID**: `fldythktdSwl9Seca`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblAugVXKLWMk2t3L`
- **Inverse Link Field**: `flduT9aKr3Br8YDiR`

### Years since event

- **Field ID**: `fld2MxkZyGy517Rhi`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fldolycwwwYhJVTBp},'years')`
- **Result Type**: number

### Field Type Summary

- **date**: 1 fields
  - Date
- **formula**: 2 fields
  - Name
  - Years since event
- **multilineText**: 1 fields
  - Notes
- **multipleAttachments**: 2 fields
  - Preliminary Documents
  - Final Documents
- **multipleRecordLinks**: 2 fields
  - Who?
  - People
- **multipleSelects**: 3 fields
  - Type
  - Vaccine
  - Testing
- **number**: 1 fields
  - Weight
- **singleLineText**: 2 fields
  - What?
  - Where?
- **url**: 1 fields
  - URL

---

## People

**Total Fields**: 12

### Allergies

- **Field ID**: `flde38RV6nJOYGI63`
- **Type**: Single Select (1 options)
- **Options**:
  - Penicillin  (blueLight2)

### Assignee

- **Field ID**: `fldiPhrfsbJeUn4d3`
- **Type**: Singlecollaborator

### Blood Type

- **Field ID**: `fldiand0NQB0IM6df`
- **Type**: Singlelinetext

### DOB

- **Field ID**: `fldsDSRWGiQyletER`
- **Type**: Date
- **Date Format**: local

### Health Transactions

- **Field ID**: `flduT9aKr3Br8YDiR`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblh6CWpNdaZ6VlkD`
- **Inverse Link Field**: `fldythktdSwl9Seca`

### Insurance

- **Field ID**: `fldWtvTv79h8k5hN4`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblh6CWpNdaZ6VlkD`
- **Inverse Link Field**: `fldBY2Ymk6nujCHXj`

### Name

- **Field ID**: `fld4jAuOLwSurCzuS`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldBXSNgK6T3mRPpQ`
- **Type**: Multilinetext

### Patient Portals

- **Field ID**: `fldNzKdVPTWCmYrhu`
- **Type**: Richtext

### Primary Care

- **Field ID**: `fldMm62McPA53t9Qh`
- **Type**: Singlelinetext

### Specialists

- **Field ID**: `fldnFa9mWSgakyzIb`
- **Type**: Singlelinetext

### Status

- **Field ID**: `fldGJR7T6hoq3DLJ2`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### Field Type Summary

- **date**: 1 fields
  - DOB
- **multilineText**: 1 fields
  - Notes
- **multipleRecordLinks**: 2 fields
  - Health Transactions
  - Insurance
- **richText**: 1 fields
  - Patient Portals
- **singleCollaborator**: 1 fields
  - Assignee
- **singleLineText**: 4 fields
  - Name
  - Blood Type
  - Primary Care
  - Specialists
- **singleSelect**: 2 fields
  - Allergies
  - Status

---

## Research Persons

**Total Fields**: 14

### Assignee

- **Field ID**: `fldlze5K1YLyxMmtm`
- **Type**: Singlecollaborator

### Attachments

- **Field ID**: `fldlm5D1xv2ARc45L`
- **Type**: Multipleattachments

### Connected Persons

- **Field ID**: `fldK9pO8tPGPfWtxm`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbllaltSIUR5XDxFz`

### First Name

- **Field ID**: `fldZVGyeYg9H61YDM`
- **Type**: Singlelinetext

### Last Name

- **Field ID**: `fld37QeQN7IP21fQe`
- **Type**: Singlelinetext

### Name

- **Field ID**: `fldS9i0bvFg5YTKGC`
- **Type**: Formula
- **Formula**: `CONCATENATE({fld37QeQN7IP21fQe},"-",{fldMeIiXyybnh5voQ})`
- **Result Type**: singleLineText

### Notes

- **Field ID**: `fldPBNf1J8EHXiU1Q`
- **Type**: Multilinetext

### Randoms

- **Field ID**: `fldJdtAdjG6e9hvrW`
- **Type**: Richtext

### Research

- **Field ID**: `fldSkoDDJ3yXgyFG5`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblpdti2tAy2eINb2`
- **Inverse Link Field**: `fldOQYcajZPrfXLo0`

### Research Categories

- **Field ID**: `fldMeIiXyybnh5voQ`
- **Type**: Multiple Select (14 options)
- **Options**:
  - Cognitive (blueLight2)
  - Language (cyanLight2)
  - Human Nature (tealLight2)
  - Psychiatry (yellowLight2)
  - Power (greenLight2)
  - Philosophy (redLight2)
  - Biology (pinkLight2)
  - Economics (purpleLight2)
  - Neo-Marxism (grayLight2)
  - Psychoanalysis (orangeLight2)
  - Ex (purpleLight2)
  - Existentialism (yellowLight2)
  - Art (cyanLight2)
  - Theater (orangeLight2)

### Research Works

- **Field ID**: `fld2SuIObMlL2TeGy`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblcSN4f0DhsUoBhB`
- **Inverse Link Field**: `fldxUxePS1IsG1DE0`

### Status

- **Field ID**: `fldqLkrzWuh6X2Yh8`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### Subjects

- **Field ID**: `fldVPSxqnXzuHvxNU`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbl1KOtXQ9Q55eAWY`
- **Inverse Link Field**: `fldm75mfaVj9DSuzh`

### Wki Page

- **Field ID**: `fld7yRy7vH5t949uH`
- **Type**: Url

### Field Type Summary

- **formula**: 1 fields
  - Name
- **multilineText**: 1 fields
  - Notes
- **multipleAttachments**: 1 fields
  - Attachments
- **multipleRecordLinks**: 4 fields
  - Research
  - Subjects
  - Connected Persons
  - Research Works
- **multipleSelects**: 1 fields
  - Research Categories
- **richText**: 1 fields
  - Randoms
- **singleCollaborator**: 1 fields
  - Assignee
- **singleLineText**: 2 fields
  - First Name
  - Last Name
- **singleSelect**: 1 fields
  - Status
- **url**: 1 fields
  - Wki Page

---

## Research Subjects

**Total Fields**: 6

### Assignee

- **Field ID**: `fldVJv3Tuv0equTeH`
- **Type**: Singlecollaborator

### Associated with

- **Field ID**: `fldm75mfaVj9DSuzh`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbllaltSIUR5XDxFz`
- **Inverse Link Field**: `fldVPSxqnXzuHvxNU`

### Name

- **Field ID**: `fldgs3PZPqceoPgkY`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldlnmCRYhI6oA1AX`
- **Type**: Multilinetext

### Research Works

- **Field ID**: `fldziw3rD7xUhToI5`
- **Type**: Singlelinetext

### Status

- **Field ID**: `fldncBjJfWu60BV1p`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### Field Type Summary

- **multilineText**: 1 fields
  - Notes
- **multipleRecordLinks**: 1 fields
  - Associated with
- **singleCollaborator**: 1 fields
  - Assignee
- **singleLineText**: 2 fields
  - Name
  - Research Works
- **singleSelect**: 1 fields
  - Status

---

## Research Works

**Total Fields**: 7

### Assignee

- **Field ID**: `fldi3JhE5U65oEApk`
- **Type**: Singlecollaborator

### Creator

- **Field ID**: `fldxUxePS1IsG1DE0`
- **Type**: Link to Unknown
- **Linked Table ID**: `tbllaltSIUR5XDxFz`
- **Inverse Link Field**: `fld2SuIObMlL2TeGy`

### Notes

- **Field ID**: `fldPVo914VsZ4izzG`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldNRvQzbEjPmV278`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### Title

- **Field ID**: `fldYSSZSIuCVvCor4`
- **Type**: Singlelinetext

### Type

- **Field ID**: `fldF30Q5AJNQSanGb`
- **Type**: Single Select (7 options)
- **Options**:
  - Book (blueLight2)
  - Article (cyanLight2)
  - Film (tealLight2)
  - Television Program (greenLight2)
  - Radio Broadcast (yellowLight2)
  - Podcast (orangeLight2)
  - Interview (redLight2)

### Year

- **Field ID**: `fldZ5JbY5BeFeqW9d`
- **Type**: Number

### Field Type Summary

- **multilineText**: 1 fields
  - Notes
- **multipleRecordLinks**: 1 fields
  - Creator
- **number**: 1 fields
  - Year
- **singleCollaborator**: 1 fields
  - Assignee
- **singleLineText**: 1 fields
  - Title
- **singleSelect**: 2 fields
  - Type
  - Status

---

## Home Storage

**Total Fields**: 7

### Items

- **Field ID**: `fldX3HLFC5LjwRMKF`
- **Type**: Singlelinetext

### Last Modified By

- **Field ID**: `fldIbv108mBOt3vpQ`
- **Type**: Lastmodifiedby

### Last Modified Date

- **Field ID**: `fldfJzIYeB7BqGGlo`
- **Type**: Lastmodifiedtime

### Last Update

- **Field ID**: `fldCLWK6N8oPH3KXp`
- **Type**: Singlelinetext

### Main Location

- **Field ID**: `fld6PjuIGEWiKDETX`
- **Type**: Single Select (25 options)
- **Options**:
  - 8A Bldg Storage (blueLight2)
  - Red suitcase in storage (cyanLight2)
  - small blue suitcase, coat closet (tealLight2)
  - coat closet (greenLight2)
  - out for use (yellowLight2)
  - WIC Closet (orangeLight2)
  - Coat Closet (redLight2)
  - Walk in closet (pinkLight2)
  - Top shelf: 2x sn leather boots,  1. Pl tub is sn fur, 2 winter caps shawls, darren' fleese (purpleLight2)
  - Under Bed (grayLight2)
  - in WIC  (blueLight2)
  - wic (cyanLight2)
  - under bed? (tealLight2)
  - ? (greenLight2)
  - Out in car, under bed now (yellowLight2)
  - out (orangeLight2)
  - WIC (redLight2)
  - either WIC (helmet goggles, SN ski shoes, jacket pants, baklavas), or Blue suitcase BLDG STORAGE (daren's  pants jacket, marina's p[ants jacket, ski gloves) (pinkLight2)
  - big blue suitcase with DFW: bldg storage (purpleLight2)
  - burgundy suitcase: Zlata's clothes, shoes, SN summer cloths and shoes, MANC summer clothes and shoes, beach tent, Pappa C small blanket, small sheepskin (grayLight2)
  - cooler with some shoes and shawls, DC hats (in small blue suitcase in coat closet) (blueLight2)
  - SMALL BLUE SUITCASE: beach bag blue, snorkling, DC hats add bags) (cyanLight2)
  - TBD (pinkLight2)
  - 8A Apartment (yellowLight2)
  - To Give Away (redLight2)

### Notes

- **Field ID**: `fldbirGenczitPrnu`
- **Type**: Richtext

### Sub Location

- **Field ID**: `fldsW0rESXHD4d3oF`
- **Type**: Single Select (10 options)
- **Options**:
  - Green Suitcase (blueLight2)
  - Red Suitcase (cyanLight2)
  - TBD (blueLight2)
  - Coat Closet (purpleLight2)
  - WIC (purpleLight2)
  - Out (tealLight2)
  - To Give Away (blueLight2)
  - Under Bed (cyanLight2)
  - LR Radiator Storage (purpleLight2)
  - Kitchen (grayLight2)

### Field Type Summary

- **lastModifiedBy**: 1 fields
  - Last Modified By
- **lastModifiedTime**: 1 fields
  - Last Modified Date
- **richText**: 1 fields
  - Notes
- **singleLineText**: 2 fields
  - Items
  - Last Update
- **singleSelect**: 2 fields
  - Main Location
  - Sub Location

---

## Albert Court Receipts

**Total Fields**: 7

### Amount

- **Field ID**: `fldZtgp6VR79iwoze`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Attachments

- **Field ID**: `fld2lvhlOeFkbXQUr`
- **Type**: Multipleattachments

### By Name

- **Field ID**: `fldj8sJNbkDmZ4daV`
- **Type**: Singlelinetext

### Date

- **Field ID**: `fldpomBZ4vOE27AGs`
- **Type**: Date
- **Date Format**: local

### Name

- **Field ID**: `fldAdFI8M7EwehKCu`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldvfAJ4JviEZ1j1u`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldyVxZ1B21c9pGTg`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - In progress (yellowLight2)
  - Done (greenLight2)

### Field Type Summary

- **currency**: 1 fields
  - Amount
- **date**: 1 fields
  - Date
- **multilineText**: 1 fields
  - Notes
- **multipleAttachments**: 1 fields
  - Attachments
- **singleLineText**: 2 fields
  - Name
  - By Name
- **singleSelect**: 1 fields
  - Status

---

## Holiday Gifts

**Total Fields**: 9

### Amount

- **Field ID**: `fldc6fLWcjCC5n3Va`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### Attachments

- **Field ID**: `fldmWAmL8oeKD05TF`
- **Type**: Multipleattachments

### Catgory

- **Field ID**: `fldoSlixBqTPaUGAJ`
- **Type**: Single Select (3 options)
- **Options**:
  - Family (blueLight2)
  - Friends (cyanLight2)
  - Bldg Staff (tealLight2)

### Desc

- **Field ID**: `fld6DQu7cKBkCy8nC`
- **Type**: Singlelinetext

### Name

- **Field ID**: `fldRXLSeOsRj6D8Ks`
- **Type**: Formula
- **Formula**: `CONCATENATE({fldgaVmS9om65taWo})`
- **Result Type**: singleLineText

### Notes

- **Field ID**: `fld5U4rFAVAngQQlB`
- **Type**: Singlelinetext

### Person Name

- **Field ID**: `fldgaVmS9om65taWo`
- **Type**: Singlelinetext

### Status

- **Field ID**: `fldfZdDzbDzTwHKez`
- **Type**: Single Select (3 options)
- **Options**:
  - Todo (redLight2)
  - Delivered (greenLight2)
  - Card Made (tealLight2)

### Year

- **Field ID**: `fldwIEvZLeCa0KomO`
- **Type**: Number

### Field Type Summary

- **currency**: 1 fields
  - Amount
- **formula**: 1 fields
  - Name
- **multipleAttachments**: 1 fields
  - Attachments
- **number**: 1 fields
  - Year
- **singleLineText**: 3 fields
  - Person Name
  - Notes
  - Desc
- **singleSelect**: 2 fields
  - Status
  - Catgory

---

## Directors

**Total Fields**: 7

### Attachments

- **Field ID**: `fldg85UvC7kHLoSfZ`
- **Type**: Multipleattachments

### Favorite Directors

- **Field ID**: `fldqr8vwEAHH7HucS`
- **Type**: Richtext

### IMDB

- **Field ID**: `fldas36Gf2Yk0YZID`
- **Type**: Singlelinetext

### Influences (Non Cinema)

- **Field ID**: `fldMiwLInKzf970bb`
- **Type**: Richtext

### Name

- **Field ID**: `fldyNE1FrzCSlPeSa`
- **Type**: Multilinetext

### Notes

- **Field ID**: `fldKHXRTWPdq8YeYL`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldN4JP5RdV73jjlW`
- **Type**: Single Select (4 options)
- **Options**:
  - Top Favorite (blueLight2)
  - Research Needed (purpleLight2)
  - Influential Not My Fav (greenLight2)
  - Classic (orangeLight2)

### Field Type Summary

- **multilineText**: 2 fields
  - Name
  - Notes
- **multipleAttachments**: 1 fields
  - Attachments
- **richText**: 2 fields
  - Favorite Directors
  - Influences (Non Cinema)
- **singleLineText**: 1 fields
  - IMDB
- **singleSelect**: 1 fields
  - Status

---

## Health Care Providers

**Total Fields**: 17

### Address

- **Field ID**: `fldvCCRLRQnv2egBh`
- **Type**: Multilinetext

### Appointments

- **Field ID**: `fldr0gJTPnFOSeZdS`
- **Type**: Singlelinetext

### DRS Only

- **Field ID**: `fldCd9uxRPNdv6ucs`
- **Type**: Checkbox

### Dashboard

- **Field ID**: `fld6kWEizkqDqYTxW`
- **Type**: Url

### Fax

- **Field ID**: `fldpeIvhqJtuALcge`
- **Type**: Phonenumber

### Home Events

- **Field ID**: `fldJsLrG6CjCd4Gvd`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldMprscbmJCIG4Tb`

### Home Events copy

- **Field ID**: `fldcEs15z1lBNnD6z`
- **Type**: Singlelinetext

### Hospital/Clinic

- **Field ID**: `fldF2GDR77dmNNS7E`
- **Type**: Singlelinetext

### Hours

- **Field ID**: `fld9FANIX3ibtospV`
- **Type**: Multilinetext

### Map

- **Field ID**: `fld0NeE5Szee4bsc0`
- **Type**: Url

### Notes

- **Field ID**: `fldR07FNfEk3e4eTX`
- **Type**: Multilinetext

### Patients

- **Field ID**: `fldxsyLgpWXbI3Yoo`
- **Type**: Singlelinetext

### Phone

- **Field ID**: `fldh2qjrBuwzlRint`
- **Type**: Phonenumber

### Provider Name

- **Field ID**: `flduCTGEKE0ravFeX`
- **Type**: Multilinetext

### Specialty

- **Field ID**: `fldgznr6Fo9dWUfqc`
- **Type**: Multiple Select (9 options)
- **Options**:
  - Auto Repair (blueBright)
  - Dental (tealDark1)
  - Insurance (redLight1)
  - Oncology (tealLight2)
  - Primary Care (blueLight2)
  - Pulmonology (blueLight2)
  - Radiology (cyanLight2)
  - Spiritual (pinkLight2)
  - Thoracic (orangeDark1)

### VIP Docs

- **Field ID**: `fldy1sRvVfJI9JikZ`
- **Type**: Multipleattachments

### Website

- **Field ID**: `fldYIafah3np9aB9K`
- **Type**: Url

### Field Type Summary

- **checkbox**: 1 fields
  - DRS Only
- **multilineText**: 4 fields
  - Provider Name
  - Address
  - Hours
  - Notes
- **multipleAttachments**: 1 fields
  - VIP Docs
- **multipleRecordLinks**: 1 fields
  - Home Events
- **multipleSelects**: 1 fields
  - Specialty
- **phoneNumber**: 2 fields
  - Phone
  - Fax
- **singleLineText**: 4 fields
  - Appointments
  - Hospital/Clinic
  - Patients
  - Home Events copy
- **url**: 3 fields
  - Map
  - Website
  - Dashboard

---

## Job Listings

**Total Fields**: 19

### Attachments

- **Field ID**: `fldTNz7U7Yp9DbYsV`
- **Type**: Multipleattachments

### Created (AT)

- **Field ID**: `fld2phR5ftsQU3QTk`
- **Type**: Createdtime

### Date Applied

- **Field ID**: `fld42pwHLDUirAlif`
- **Type**: Multiplelookupvalues

### Days since deadline

- **Field ID**: `fldJJZntmJ2WgelyP`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(TODAY(),{fldy2a9E82twPn4fA},'days')`
- **Result Type**: number

### Deadline

- **Field ID**: `fldy2a9E82twPn4fA`
- **Type**: Date
- **Date Format**: local

### Field 19

- **Field ID**: `fld745hYfNivsrwXj`
- **Type**: Singlelinetext

### Home Events

- **Field ID**: `fldzrrd6ijoDBsiGR`
- **Type**: Singlelinetext

### JobID

- **Field ID**: `fldGAYZwUcbAe1C4R`
- **Type**: Singlelinetext

### JobLink

- **Field ID**: `fld7qBd3aq1GylNpV`
- **Type**: Url

### JobSearch

- **Field ID**: `fldx5WRTB8RbfcdfA`
- **Type**: Singlelinetext

### LastChecked

- **Field ID**: `fld3EUwdNrys2WExR`
- **Type**: Datetime
- **Date Format**: local
- **Time Format**: 12hour
- **Time Zone**: client

### LastUpdated (AT)

- **Field ID**: `fld0sz9ntwRmoezK6`
- **Type**: Lastmodifiedtime

### Location

- **Field ID**: `fldjI0QeYtPfYK6Fx`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldEEFDProLycL296`
- **Type**: Multilinetext

### Numeric Salary

- **Field ID**: `flddSMQpMqg8KvqfJ`
- **Type**: Formula
- **Description**: Converts the Salary field from text to a numeric value.
- **Formula**: `VALUE({fldpySWgq22qfmX8q})`
- **Result Type**: number

### PostingDate

- **Field ID**: `fldUOvRObDHSsAknL`
- **Type**: Date
- **Date Format**: local

### Salary

- **Field ID**: `fldpySWgq22qfmX8q`
- **Type**: Singlelinetext

### Status

- **Field ID**: `fldoLFyro4UiEXGfp`
- **Type**: Single Select (2 options)
- **Options**:
  - Active (blueLight2)
  - Inactive (cyanLight2)

### Title

- **Field ID**: `fldiEFWfXumPGLndw`
- **Type**: Singlelinetext

### Field Type Summary

- **createdTime**: 1 fields
  - Created (AT)
- **date**: 2 fields
  - PostingDate
  - Deadline
- **dateTime**: 1 fields
  - LastChecked
- **formula**: 2 fields
  - Numeric Salary
  - Days since deadline
- **lastModifiedTime**: 1 fields
  - LastUpdated (AT)
- **multilineText**: 1 fields
  - Notes
- **multipleAttachments**: 1 fields
  - Attachments
- **multipleLookupValues**: 1 fields
  - Date Applied
- **singleLineText**: 7 fields
  - JobID
  - Title
  - Location
  - Salary
  - JobSearch
  - Home Events
  - Field 19
- **singleSelect**: 1 fields
  - Status
- **url**: 1 fields
  - JobLink

---

## Job URLs To Search

**Total Fields**: 4

### Link

- **Field ID**: `fldoEy4HNglgOJrYE`
- **Type**: Url

### Name

- **Field ID**: `fld3FHMpSD69R2nO0`
- **Type**: Singlelinetext

### Scripting Notes

- **Field ID**: `fldZXDEFZAWxRYzPF`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldIJmCOrOwCY35xG`
- **Type**: Single Select (2 options)
- **Options**:
  - Active (redLight2)
  - Inactive (blueLight2)

### Field Type Summary

- **multilineText**: 1 fields
  - Scripting Notes
- **singleLineText**: 1 fields
  - Name
- **singleSelect**: 1 fields
  - Status
- **url**: 1 fields
  - Link

---

## Plymouth Tower Issues List

**Total Fields**: 10

### 8A Issues Log

- **Field ID**: `fld4HIwe0oYeG4Oer`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblPkfFbDaoIlwcVT`
- **Inverse Link Field**: `fldS6CP4Re3xRPKqg`

### Attachments

- **Field ID**: `fldbyKK2IpXmRhS35`
- **Type**: Multipleattachments

### Date

- **Field ID**: `fld6JhIK5a4n53I7k`
- **Type**: Date
- **Date Format**: local

### Days since reported

- **Field ID**: `fldCSyl1bVZOrJwXW`
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(),{fld6JhIK5a4n53I7k},'days')`
- **Result Type**: number

### Home Category

- **Field ID**: `fldK86dajo2g8h0Wr`
- **Type**: Single Select (7 options)
- **Options**:
  - Bathroom (redBright)
  - Child Safety (greenLight1)
  - Gas Smell (orangeBright)
  - HVAC (orangeLight1)
  - Kitchen (greenBright)
  - Misc (purpleDark1)
  - Vermin (redLight1)

### Record No

- **Field ID**: `fldqVStf46zbS8wa9`
- **Type**: Formula
- **Formula**: `RECORD_ID()`
- **Result Type**: singleLineText

### Repair Request

- **Field ID**: `fldUSBgo3OCkdAsuU`
- **Type**: Multilinetext

### Request #

- **Field ID**: `fldLUYLRiR3yZIFw3`
- **Type**: Singlelinetext

### Request Number ID

- **Field ID**: `fldf6SFPZaX2QeIr6`
- **Type**: Formula
- **Formula**: `{fldLUYLRiR3yZIFw3}`
- **Result Type**: singleLineText

### Status

- **Field ID**: `fldqdTsLFIdif3za8`
- **Type**: Single Select (3 options)
- **Options**:
  - Open (blueLight2)
  - On Hold (cyanLight2)
  - Closed (tealLight2)

### Field Type Summary

- **date**: 1 fields
  - Date
- **formula**: 3 fields
  - Request Number ID
  - Record No
  - Days since reported
- **multilineText**: 1 fields
  - Repair Request
- **multipleAttachments**: 1 fields
  - Attachments
- **multipleRecordLinks**: 1 fields
  - 8A Issues Log
- **singleLineText**: 1 fields
  - Request #
- **singleSelect**: 2 fields
  - Status
  - Home Category

---

## 8A Issues Log

**Total Fields**: 6

### ActionType

- **Field ID**: `fldmvmxhuQw2JocND`
- **Type**: Multilinetext

### Actor

- **Field ID**: `fld8jKOyv3Kz4RjxK`
- **Type**: Multilinetext

### Comment

- **Field ID**: `flddvp4ZbG2UfSyXh`
- **Type**: Multilinetext

### Date

- **Field ID**: `fldkycfjujUKWcsWV`
- **Type**: Multilinetext

### RequestID

- **Field ID**: `fldS6CP4Re3xRPKqg`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblvqremXMVUxnR3G`
- **Inverse Link Field**: `fld4HIwe0oYeG4Oer`

### Status

- **Field ID**: `fldNbEc4a1OT9DILN`
- **Type**: Single Select (4 options)
- **Options**:
  - Open (blueLight2)
  - Closed (tealLight2)
  - Pending (blueLight2)
  - Posted (cyanLight2)

### Field Type Summary

- **multilineText**: 4 fields
  - Date
  - ActionType
  - Actor
  - Comment
- **multipleRecordLinks**: 1 fields
  - RequestID
- **singleSelect**: 1 fields
  - Status

---

## Check Movies

**Total Fields**: 9

### Check

- **Field ID**: `fld33HY8oJqXN7QU4`
- **Type**: Checkbox

### Director

- **Field ID**: `fldXC6Z5fseC1ckYp`
- **Type**: Singlelinetext

### Name

- **Field ID**: `fldqMjU0xj9KZKqXW`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldPeipGODmHWW8CY`
- **Type**: Multilinetext

### Search Field

- **Field ID**: `fldaSJ47glndlCK5V`
- **Type**: Multilinetext

### Status

- **Field ID**: `fldwAtLpxLSpnMooa`
- **Type**: Single Select (3 options)
- **Options**:
  - Waiting (blueLight2)
  - Checking (cyanLight2)
  - Remove (tealLight2)

### Synopsis

- **Field ID**: `fldtivp9ArdV93BXO`
- **Type**: Multilinetext

### TMDB ID

- **Field ID**: `fldlp0YUg2ohFVYDh`
- **Type**: Singlelinetext

### Year (Number)

- **Field ID**: `fldfwwpQALIXfaCdt`
- **Type**: Number

### Field Type Summary

- **checkbox**: 1 fields
  - Check
- **multilineText**: 3 fields
  - Synopsis
  - Search Field
  - Notes
- **number**: 1 fields
  - Year (Number)
- **singleLineText**: 3 fields
  - Name
  - Director
  - TMDB ID
- **singleSelect**: 1 fields
  - Status

---

## Learning Experience

**Total Fields**: 12

### Attachments

- **Field ID**: `fldjduhdaNi7b8Y3r`
- **Type**: Multipleattachments

### Claude.AI

- **Field ID**: `fldlMD9ZArkUxjqzo`
- **Type**: Url

### Date of Learning

- **Field ID**: `fldluoeaCmGsT33DB`
- **Type**: Date
- **Date Format**: local

### Duration

- **Field ID**: `fld3ljwSk99CzaoeB`
- **Type**: Duration

### Home Events copy

- **Field ID**: `fldQ1Diarq3yyZQez`
- **Type**: Singlelinetext

### Key Takeaways

- **Field ID**: `fldRa2byvDyF7xCQY`
- **Type**: Multilinetext

### Name

- **Field ID**: `fldVo1Wq7ShG6jnuS`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fld93SufmRnYv3yDn`
- **Type**: Multilinetext

### Related Event

- **Field ID**: `fldnPWILY11zYGTDd`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldq2NWrWPiSzSFWT`

### Source Link

- **Field ID**: `fldsLCTYS07InWUVl`
- **Type**: Url

### Transcript Text

- **Field ID**: `fldiRJix90q6oPg51`
- **Type**: Richtext

### Transcripts

- **Field ID**: `fldCsqAgRLzoZlqap`
- **Type**: Multipleattachments

### Field Type Summary

- **date**: 1 fields
  - Date of Learning
- **duration**: 1 fields
  - Duration
- **multilineText**: 2 fields
  - Notes
  - Key Takeaways
- **multipleAttachments**: 2 fields
  - Attachments
  - Transcripts
- **multipleRecordLinks**: 1 fields
  - Related Event
- **richText**: 1 fields
  - Transcript Text
- **singleLineText**: 2 fields
  - Name
  - Home Events copy
- **url**: 2 fields
  - Source Link
  - Claude.AI

---

## Tracked Shows

**Total Fields**: 3

### Active

- **Field ID**: `fldBXIsAn7iCmSMAR`
- **Type**: Checkbox

### Notes

- **Field ID**: `fldpclYdM8uhajiW5`
- **Type**: Multilinetext

### Show Name

- **Field ID**: `fldrLAWwKQOHMyOJH`
- **Type**: Singlelinetext

### Field Type Summary

- **checkbox**: 1 fields
  - Active
- **multilineText**: 1 fields
  - Notes
- **singleLineText**: 1 fields
  - Show Name

---

## TV Shows

**Total Fields**: 11

### Name

- **Field ID**: `fldjC429ydAaLV4aP`
- **Type**: Multilinetext

### TMDB Budget

- **Field ID**: `fldX0aKljIZkzL6pv`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### TMDB Cast

- **Field ID**: `fldUDTDC4JwSI5WR1`
- **Type**: Multilinetext

### TMDB Director

- **Field ID**: `fldgymw49SaWQcO0S`
- **Type**: Singlelinetext

### TMDB Genres

- **Field ID**: `fld87B5QDTswsvUuH`
- **Type**: Singlelinetext

### TMDB Overview

- **Field ID**: `fldHVz4bB6lH8MzOv`
- **Type**: Multilinetext

### TMDB Rating

- **Field ID**: `fldy4V7hxs9LCu9ho`
- **Type**: Number
- **Precision**: 1

### TMDB Revenue

- **Field ID**: `fld6YAWFbhNnKbdOY`
- **Type**: Currency
- **Precision**: 2
- **Symbol**: $

### TMDB Run Time

- **Field ID**: `fld8CBJ3oeZ5Bs2JE`
- **Type**: Number

### TMDB US_Providers

- **Field ID**: `fld0rGIr03TrBKgI6`
- **Type**: Singlelinetext

### Updated by

- **Field ID**: `fldV8bjuLAXZ7F1BY`
- **Type**: Singlecollaborator

### Field Type Summary

- **currency**: 2 fields
  - TMDB Budget
  - TMDB Revenue
- **multilineText**: 3 fields
  - Name
  - TMDB Cast
  - TMDB Overview
- **number**: 2 fields
  - TMDB Run Time
  - TMDB Rating
- **singleCollaborator**: 1 fields
  - Updated by
- **singleLineText**: 3 fields
  - TMDB Genres
  - TMDB Director
  - TMDB US_Providers

---

## Field Analysis Results

**Total Fields**: 8

### Appt Type

- **Field ID**: `fldfDACeHczP8vfyG`
- **Type**: Singlelinetext

### Category

- **Field ID**: `fldiTqQ91kjkIIGtH`
- **Type**: Singlelinetext

### Field Name

- **Field ID**: `fldnnoildEdz9gEZA`
- **Type**: Singlelinetext

### Name

- **Field ID**: `fldL56eJ4pSZKASiY`
- **Type**: Singlelinetext

### Notes

- **Field ID**: `fldICTMHvGIV0Slws`
- **Type**: Multilinetext

### Total Records

- **Field ID**: `fldzhkEWBlhNk34jb`
- **Type**: Number
- **Precision**: 1

### Usage Count

- **Field ID**: `fld8SDweSv2WJjlXa`
- **Type**: Number
- **Precision**: 1

### Usage Percent

- **Field ID**: `fldZkSS1ZREWq5DOe`
- **Type**: Number
- **Precision**: 1

### Field Type Summary

- **multilineText**: 1 fields
  - Notes
- **number**: 3 fields
  - Usage Count
  - Usage Percent
  - Total Records
- **singleLineText**: 4 fields
  - Name
  - Category
  - Appt Type
  - Field Name

---

## Category Analysis

**Total Fields**: 7

### Analysis Type

- **Field ID**: `fldSerHs3BuBryj6v`
- **Type**: Multilinetext

### Category Name

- **Field ID**: `fld0o1U4Q0qqaElaO`
- **Type**: Multilinetext

### Notes

- **Field ID**: `fldrl8sTF4dyIiaub`
- **Type**: Multilinetext

### Record Count

- **Field ID**: `fldSM740FcFvP3pAV`
- **Type**: Number

### Related Categories

- **Field ID**: `fldjPtIeCxatb3a6c`
- **Type**: Multilinetext

### Uses Research Type

- **Field ID**: `fldlzJscu8c52vaZB`
- **Type**: Number

### Uses Sub Type

- **Field ID**: `fldbOtD9iUG0oIcF0`
- **Type**: Number

### Field Type Summary

- **multilineText**: 4 fields
  - Analysis Type
  - Category Name
  - Related Categories
  - Notes
- **number**: 3 fields
  - Record Count
  - Uses Research Type
  - Uses Sub Type

---

## Words Settings

**Total Fields**: 6

### Home Events

- **Field ID**: `fldVkBLYHuMjkTo2t`
- **Type**: Link to Unknown
- **Linked Table ID**: `tblYQbyKJJErXkZro`
- **Inverse Link Field**: `fldmeu4WZ3sWUT5yc`

### Name

- **Field ID**: `fldg5rzpOZcP814KW`
- **Type**: Formula
- **Description**: Displays Words Window Start and End as mm/dd/yyyy - mm/dd/yyyy.
- **Formula**: `DATETIME_FORMAT({fldAhmGPOJV0XZXxV}, 'MM/DD/YYYY') & "-" & DATETIME_FORMAT({fldfiHohcK8DM9cZn}, 'MM/DD/YYYY')`
- **Result Type**: singleLineText

### Name Rollup (from Home Events)

- **Field ID**: `fld97HyY3HnnZSQD9`
- **Type**: Rollup
- **Rollup Field**: `fldEVqyty5wYXRkLT`
- **Function**: []

### Record ID

- **Field ID**: `fldscM0oHaHb53iYn`
- **Type**: Formula
- **Formula**: `RECORD_ID()`
- **Result Type**: singleLineText

### Words Window End

- **Field ID**: `fldfiHohcK8DM9cZn`
- **Type**: Date
- **Date Format**: local

### Words Window Start

- **Field ID**: `fldAhmGPOJV0XZXxV`
- **Type**: Date
- **Date Format**: local

### Field Type Summary

- **date**: 2 fields
  - Words Window Start
  - Words Window End
- **formula**: 2 fields
  - Name
  - Record ID
- **multipleRecordLinks**: 1 fields
  - Home Events
- **rollup**: 1 fields
  - Name Rollup (from Home Events)

---
