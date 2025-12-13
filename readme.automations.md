# Airtable Automations Documentation

> Comprehensive documentation of all automations in the Home Events base and related systems.

## Overview

This documentation tracks all automations across the Airtable system, including their dependencies, field usage, and impact on base reorganization efforts. The primary use cases are:

- **Field Reorganization Safety**: Identify which automations will be affected by field changes
- **Dependency Mapping**: Understand automation chains and relationships
- **System Understanding**: Document complex workflows for future reference
- **Troubleshooting**: Quick reference for automation behavior and configurations

## Key Findings

### Sub Type Field Reorganization
Most automations are **safe for Sub Type field reorganization** because they either:
- Don't use the Sub Type field at all
- Only copy Sub Type values as passthrough (no filtering or conditional logic)

**Exception**: No automations currently have conditional logic based on specific Sub Type values.

### Critical Automation Dependencies
- **Google Calendar Sync Chain**: Update GCal? → Update GCal Event → Google Calendar
- **Parent-Child Relationships**: Maintained via Parent field + Sync Children from Parent script
- **Old Fields Being Phased Out**: Parent Record, Sub Record, Parent Record ID, Sub Record ID

---

## Automation Categories

### Events (23 automations)
Core event management, scheduling, and lifecycle tracking.

### Google Calendar Integration (3 automations)
Bidirectional sync between Airtable and Google Calendar.

### Words to Learn (4 automations)
Vocabulary learning system with scheduled selection and notifications.

### Recurrence Management (4 automations)
Handling annual and monthly recurring events.

### Media Hard Drives (3 automations)
Storage device tracking and maintenance alerts.

### Research (5 automations)
Content classification and organization.

### Timers (3 automations)
Countdown and reminder systems.

---

## High-Priority Automations

### 3 Hour Alert
**Status**: Active | **Complexity**: Medium

Alert automation that fires 3 hours before an event.

**Trigger**: When record enters view "3 Hour Alert"

**View Conditions**:
- Status is none of Completed, Cancelled, Pending
- Alerts Trigger is (find an option)
- Alerts is Pending
- End Time is not empty
- Research Type has none of Completed, Archived, Cancelled

**Actions**:
1. IF Research Type has none of TV Show AND Appt Type is none of Annual, Monthly
   - Send email to darrenchilton@gmail.com
   - Send Slack message to #0-0hours-until
   - Send SMS to 9173819771@vtext.com
2. OTHERWISE IF Research Type has none of TV Show
   - Send email to darrenchilton@gmail.com

**Fields Used**: Status, Alerts Trigger, Alerts, End Time, Research Type, Appt Type

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Anniversary Next Year
**Status**: Active | **Complexity**: Medium

Creates anniversary event for next year when Year Add checkbox is checked.

**Trigger**: When record is updated (Field: Year Add)

**View**: Anniversary/Month Field Update (field watching)

**Actions**:
1. IF Year Add is checked THEN:
   - Create record in Home Events (copy 18+ fields)
   - Update created record: set Parent to triggering record's Airtable record ID

**Fields Used**: Year Add, Name, Appt Type, Location, Description, Notes, Attachments, Start Time, End Time, All Day Event?, Participants, Status, Alerts Trigger, Add to Google, Title, Parent, Children (do not edit), Prev Parent (new)

**Dependencies**: Sync Children from Parent automation (script) maintains Children and Prev Parent fields

**Sub Type Impact**: ✅ Safe - Parent/child relationship maintained via Parent field; old Parent Record/Sub Record fields no longer used

**Notes**: 
- Updated 2025-12-12 to remove writes to old Parent/Sub fields
- Parent is set via update on created record to trigger sync

---

### Anniversary Next Month
**Status**: Active | **Complexity**: Medium

Creates anniversary event for next month when Month Add checkbox is checked.

**Trigger**: When record is updated (Field: Month Add)

**View**: Anniversary/Month Field Update (field watching)

**Actions**:
1. IF Month Add is checked THEN:
   - Create record (copy key fields; do not write old Parent/Sub link fields)
   - Update created record: set Parent to triggering record's Airtable record ID

**Fields Used**: Month Add, Name, Appt Type, Location, Description, Notes, Attachments, Start Time, End Time, All Day Event?, Participants, Status, Alerts Trigger, Add to Google, Title, Parent, Children (do not edit), Prev Parent (new)

**Dependencies**: Sync Children from Parent automation (script)

**Sub Type Impact**: ✅ Safe - Mirrors Anniversary Next Year logic

---

### Cancel Event (non recurring)
**Status**: Active | **Complexity**: Medium

Handles cancellation of non-recurring events.

**Trigger**: When record enters view "Cancelled (not recurring)"

**View Conditions**:
- Status is Cancelled
- Appt Type is none of Annual, Monthly

**Actions**:
1. Send email to darrenchilton@gmail.com
2. IF G Cal Event ID is not empty THEN:
   - Google Calendar: Update event
   - Title = "** CANCELLED **" + Title
   - Update Description

**Fields Used**: Status, Appt Type, G Cal Event ID, Title, Description

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Cancel Event (recurring)
**Status**: Active | **Complexity**: High

Handles cancellation of recurring events (Annual/Monthly).

**Trigger**: When record enters view "Cancelled (recurring)"

**View Conditions**:
- Status is Cancelled
- Appt Type is any of Annual, Monthly

**Actions**:
1. Send email to darrenchilton@gmail.com
2. IF G Cal Event ID is not empty AND Sub Record ID is not empty THEN:
   - Google Calendar: Update event (add "** CANCELLED **" prefix)
   - Update record (Status to Cancelled)
3. OTHERWISE IF Sub Record ID is not empty AND G Cal Event ID is empty THEN:
   - Update record (Status to Cancelled)
4. OTHERWISE IF G Cal Event ID is not empty AND Sub Record ID is empty THEN:
   - Google Calendar: Update event

**Fields Used**: Status, Appt Type, G Cal Event ID, Sub Record ID, Title, Description

**Sub Type Impact**: ✅ Safe - Uses Sub Record ID but not Sub Type

---

### Check End Date
**Status**: Active | **Complexity**: Low

Ensures events have an end time by copying from start time.

**Trigger**: When record enters view "Check End Date"

**View Conditions**:
- Status is none of Completed, Cancelled
- Date Check > 0
- Since Updated > 0

**Actions**:
1. Update record (End Time = Start Time)

**Fields Used**: Status, Date Check, Since Updated, End Time, Start Time

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Event Past (Not TV)
**Status**: Active | **Complexity**: Medium

Marks past events as completed and handles recurring event updates.

**Trigger**: When record enters view "Past (Not TV)"

**View Conditions**:
- Status is none of Completed, Cancelled, Archived
- Seconds After > 120
- Research Type has none of TV Show, Cancel
- Date Check > -1

**Actions**:
1. Update record (Status to Completed)
2. IF Appt Type is Annual AND Year Add is blank THEN:
   - Update record (Year Add)
3. OTHERWISE IF Appt Type is Monthly AND Month Add is blank THEN:
   - Update record (Month Add)
4. OTHERWISE IF Appt Type is none of From Research, Work Timer THEN:
   - Send email to darrenchilton@gmail.com

**Fields Used**: Status, Seconds After, Research Type, Date Check, Appt Type, Year Add, Month Add

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Event Past (TV)
**Status**: Active | **Complexity**: Low

Marks past TV show events as completed.

**Trigger**: When record enters view "Past (TV)"

**View Conditions**:
- Status is none of Completed, Cancelled
- Seconds After > 120
- Research Type is exactly TV Show

**Actions**:
1. Update record (Status to Completed)

**Fields Used**: Status, Seconds After, Research Type

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Family Reminder
**Status**: Active | **Complexity**: High

Scheduled automation that sends daily family reminders with solar data.

**Trigger**: Scheduled time - Daily at 7:00 AM

**Actions**:
1. Run script (fetch solar data from external base)
2. Find records from Family Reminders view
3. IF Family Reminders view has records THEN:
   - Send email with family reminders + solar data table
4. ELSE skip

**Fields Used**: Status, Appt Type, Title, Start Time, Description

**Script**: Yes - fetches solar data from external base

**Sub Type Impact**: ✅ Safe - Does not filter on Sub Type field

**Notes**: 
- Uses Airtable's built-in 'Actual run time' dynamic field for current date
- Conditional prevents sending empty emails when no reminders exist

---

### New Annual/Monthly
**Status**: Active | **Complexity**: Low

Standardizes settings for annual/monthly recurring events.

**Trigger**: When record enters view "Annual/Monthly"

**View Conditions**:
- Appt Type is any of Annual, Monthly
- Status is none of Completed, Cancelled

**Actions**:
1. Update record:
   - Alerts Trigger = checked
   - Add to Google = checked
   - All Day Event? = checked
   - End Time = Set To Midnight
   - Start Time = Set To Midnight

**Fields Used**: Appt Type, Status, Alerts Trigger, Add to Google, All Day Event?, End Time, Start Time

**Sub Type Impact**: ✅ Safe - Uses Appt Type but not Sub Type

---

### New Event in X Days
**Status**: Active | **Complexity**: Medium

Creates child event records for recurring events.

**Trigger**: When record enters view "New Event in X Days"

**View Conditions**:
- Status is not Cancelled
- New Event in X Days > 0
- Since Updated > 0
- Sub Record is empty (prevents duplicates)

**Actions**:
1. Create record in Home Events (copy 16+ fields including Appt Type, Location, Description, Phone, Start Time/New Date, Participants, Status=Scheduled, Alerts Trigger, Add to Google, Title, End Time, All Day Event?, Notes, Attachments, Parent Record, Parent Record ID)
2. Update record (Sub Record to link to created record)

**Fields Used**: Status, New Event in X Days, Since Updated, Sub Record, [16+ fields for record creation]

**Sub Type Impact**: ⚠️ USES Sub Record field - Different from Sub Type

---

### Update GCal?
**Status**: Active | **Complexity**: Low

Watches 9 fields for changes and flags records for Google Calendar sync.

**Trigger**: When record is updated

**Fields Watched**: Start Time, End Time, Description, All Day Event?, Title, Location, Participants, Attachments, Notes

**View**: All Records (Do not delete)

**Actions**:
1. IF Start Updates Check ≠ 0 THEN:
   - Update record (Update GCal? = Yes)

**Fields Used**: [9 watched fields], Start Updates Check, Update GCal?

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

**Dependencies**: Triggers Update GCal Event automation

---

### Update GCal Event
**Status**: Active | **Complexity**: Medium

Updates Google Calendar events when Airtable records change.

**Trigger**: When record enters view "Update GCal Event"

**View Conditions**:
- Update GCal? is Yes
- G Cal Event ID is not empty

**Actions**:
1. Google Calendar: Update event
2. Update record (Update GCal? = No)

**Fields Used**: Update GCal?, G Cal Event ID, [event fields for sync]

**Dependencies**: Triggered by Update GCal? automation

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Words To Learn
**Status**: Active | **Complexity**: High

Hourly automation that randomly selects words from learning queue and sends notifications.

**Trigger**: Scheduled time - Every 1 hour

**View**: Words to Learn (automation)

**View Conditions**:
- Status is not Cancelled
- Appt Type is Words To Learn
- Research Type has none of Cancel
- Month Delay is blank
- Word Blackout contains No
- Created (At) is after 5/31/2025
- Created (At) is before 6/30/2025

**Actions**:
1. Run script (custom random selection logic)
2. Find records (by Record ID)
3. Find records (from Words to Learn automation view)
4. IF SelectionCount > 15 and Records length > 0 THEN:
   - Update record (SelectionCount, Last day selected/CurDate)
   - Send Slack message
5. OTHERWISE IF Force contains Yes and Records length > 0 THEN:
   - Update record + Slack message
6. OTHERWISE IF SelectionCount > 5 and Records length > 0 THEN:
   - Update record + Slack message
7. OTHERWISE IF SelectionCount ≤ 5 and Records length > 0 THEN:
   - Update record + Slack message

**Fields Used**: Status, Appt Type, Research Type, Month Delay, Word Blackout, Created (At), SelectionCount, Last day selected, CurDate, Force, Record ID

**Script**: Yes - Complex random selection with deduplication logic

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

### Words to Learn (incoming)
**Status**: Inactive | **Complexity**: Low

Automatically categorizes incoming Word of the Day items.

**Trigger**: When record enters view "Words To Learning (incoming)"

**View Conditions**:
- Name contains 'Word of the Day:'

**Actions**:
1. Update record:
   - Appt Type = "Words To Learn"
   - Research Type updated
2. Send Slack message to #words-to-learn channel

**Fields Used**: Appt Type, Research Type, Name

**Sub Type Impact**: ✅ Safe - Does not use Sub Type field

---

## Medium/Low Priority Automations

### Add to GCal
**Category**: Events  
**Status**: Active  
**Trigger**: Record enters view  
**Purpose**: Create Google Calendar event  
**Depends On**: Google Calendar integration  

### Aging Hard Drive
**Category**: Media Hard Drives  
**Status**: Active  
**Trigger**: Record enters view  
**Purpose**: Send aging alert emails  

### Alerts to Send
**Category**: Events  
**Status**: Active  
**Trigger**: Record enters view  
**Purpose**: Core alert system  
**Fields**: Alerts, Alerts Trigger  

### Cut Grass
**Category**: Events  
**Status**: Active  
**Trigger**: Record enters view  
**Fields**: Appt Type  

### DRS Appt
**Category**: Events  
**Status**: Active  
**Trigger**: Record enters view  
**Purpose**: Syncs to Health table  
**Fields**: Appt Type  

### End Date Missing
**Category**: Events  
**Status**: Active  
**Trigger**: Record enters view  
**Fields**: End Time  

---

## Automation Scripts

### Family Reminder Script
**Purpose**: Fetches solar data from external Airtable base

**Key Logic**:
- Connects to external base via API
- Retrieves solar generation data
- Formats data as table for email
- Combines with family reminders

### Words To Learn Script
**Purpose**: Random word selection with intelligent deduplication

**Key Logic**:
```javascript
// Randomly selects word from queue
// Tracks selection count to ensure variety
// Prevents recent repeats (Last day selected > 0)
// Updates SelectionCount and timestamps
// Returns word details + record URL for Slack
```

**Outputs**:
- Name, Description, LongText
- RecordID, RecordURL
- SelectionCount, Location, Force
- Title, Created, CurDate
- RecordCount
- imageUrl, slackMessage

### Sync Children from Parent Script
**Purpose**: Maintains parent-child relationships

**Key Logic**:
- Monitors Parent field changes
- Updates Children (do not edit) field on parent
- Updates Prev Parent (new) field on children
- Replaces old Parent Record/Sub Record system

---

## Field Migration Notes

### Old Fields (Being Phased Out)
- **Parent Record** → Use **Parent** instead
- **Sub Record** → Use **Parent** instead  
- **Parent Record ID** → Use **Parent** instead
- **Sub Record ID** → Use **Parent** instead

### New Canonical Fields
- **Parent**: Airtable record ID link field (canonical)
- **Children (do not edit)**: Auto-maintained by script
- **Prev Parent (new)**: Auto-maintained by script

### Migration Status (as of 2025-12-12)
- ✅ Anniversary Next Year: Updated to use Parent field only
- ✅ Anniversary Next Month: Updated to use Parent field only
- ⏳ Other automations: Still using old fields (to be migrated)

---

## Troubleshooting Guide

### Common Issues

**Automation not triggering**
- Check view filters - record must match ALL conditions
- Verify trigger field is being updated (not just viewed)
- Check automation status (Active vs Paused)

**Google Calendar sync failing**
- Verify G Cal Event ID is not empty
- Check Update GCal? flag is set correctly
- Ensure Google Calendar account is connected

**Duplicate events being created**
- Check that Sub Record/Parent is empty (prevents duplicates in New Event in X Days)
- Verify view filters prevent re-entry

**Missing email notifications**
- Check that email address is correct in automation
- Verify conditional logic is evaluating correctly
- Check Airtable automation run history

---

## Best Practices

### Documentation
- Always document automation changes in this README
- Update Last Updated and Documented By fields
- Note any dependencies or breaking changes

### Testing
- Use "Test step" button before enabling
- Test with sample records first
- Verify email/Slack notifications work

### Field Changes
- Check this documentation before renaming/deleting fields
- Search for field name in Actions Summary
- Update all affected automations before making field changes

### Performance
- Minimize automation chains (max 3-4 deep)
- Use view filters to reduce unnecessary runs
- Consider scheduled vs real-time triggers

---

## Statistics

- **Total Automations**: 45+
- **Active**: 40+
- **Inactive**: 2
- **With Scripts**: 3
- **High Complexity**: 8
- **Medium Complexity**: 15
- **Low Complexity**: 22+

**Last Full Audit**: December 1, 2025  
**Last Updated**: December 13, 2025

---

## Contributing

When documenting new automations:

1. Add entry to CSV file
2. Update this README with detailed section if High Priority
3. Note any field dependencies
4. Document Sub Type field impact
5. Update statistics

---

## Related Documentation

- [Field Documentation](../fields/README.md) *(if exists)*
- [View Documentation](../views/README.md) *(if exists)*
- [Table Relationships](../tables/README.md) *(if exists)*
