# Fields Documentation

> Comprehensive field definitions, formulas, types, and usage patterns across all tables

## Overview

This documentation catalogs all fields in the Home Events base, their purposes, formulas, and automation dependencies. Use this as a reference before making schema changes.

**Total Fields**: 100+ across all tables  
**Formula Fields**: 20+  
**Linked Fields**: 10+  
**Last Updated**: December 13, 2025

---

## Field Categories

### Home Events Table Fields

#### Core Identity

##### Name
- **Type**: Single line text
- **Purpose**: Primary event name/title
- **Required**: Yes
- **Used By**: All automations, most views
- **Example**: "Doctor Appointment", "Word of the Day: Ephemeral"

##### Title
- **Type**: Formula
- **Purpose**: Computed display name (may include formatting)
- **Formula**: *(varies based on event type)*
- **Used By**: Google Calendar sync, email notifications
- **Notes**: Often includes prefixes like "** CANCELLED **" for cancelled events

##### Appt Type
- **Type**: Single select
- **Purpose**: Primary event categorization
- **Options**:
  - Annual, Monthly (recurring events)
  - Words To Learn
  - From Research
  - Work Timer
  - DRS Appt
  - Cut Grass
  - *(+15 other types)*
- **Used By**: 
  - Event routing (Cancel Event, Event Past, New Annual/Monthly)
  - Recurring event logic
  - Alert filtering
- **Critical**: Changes affect multiple automation filter chains

##### Sub Type
- **Type**: Single select
- **Purpose**: Secondary classification
- **Migration Status**: ⚠️ Under reorganization
- **Options**: *(Various - being restructured)*
- **Impact Assessment**: Most automations safe (don't filter on Sub Type)
- **Used By**: Display/organization only (few automation dependencies)

##### Research Type
- **Type**: Link to Research table
- **Purpose**: Categorizes research-related events
- **Common Values**:
  - TV Show
  - Cancel
  - Completed
  - Archived
- **Used By**:
  - Event Past (Not TV) vs Event Past (TV) split
  - 3 Hour Alert filtering
  - Words to Learn integration

---

#### Timing & Scheduling

##### Start Time
- **Type**: Date/time
- **Purpose**: Event start date and time
- **Required**: Yes (for most events)
- **Used By**:
  - Google Calendar sync
  - Alert calculations
  - Event completion detection
  - Recurring event date computation
- **Watched By**: Update GCal? automation (triggers sync on change)

##### End Time
- **Type**: Date/time
- **Purpose**: Event end date and time
- **Auto-Fill**: Check End Date automation copies from Start Time if empty
- **Used By**:
  - Google Calendar sync
  - Alert timing (3 Hour Alert uses End Time)
  - Event completion detection
- **Watched By**: Update GCal? automation

##### All Day Event?
- **Type**: Checkbox
- **Purpose**: Flags events spanning full day(s)
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: Google Calendar sync formatting
- **Watched By**: Update GCal? automation

##### Seconds After
- **Type**: Formula
- **Purpose**: Calculates seconds elapsed since End Time
- **Formula**: `DATETIME_DIFF(NOW(), {End Time}, 'seconds')`
- **Used By**:
  - Event Past (Not TV): Triggers when > 120 seconds
  - Event Past (TV): Triggers when > 120 seconds
- **Notes**: 2-minute delay prevents premature completion

##### Date Check
- **Type**: Formula
- **Purpose**: Validates event timing and detects anomalies
- **Formula**: *(Complex date validation logic)*
- **Used By**:
  - Check End Date view filter
  - Event Past view filters
- **Returns**: Numeric value (>0, =0, <0 indicate different states)

##### Since Updated
- **Type**: Formula
- **Purpose**: Seconds since record last modified
- **Formula**: `DATETIME_DIFF(NOW(), {Last Modified}, 'seconds')`
- **Used By**:
  - Check End Date view (prevents immediate re-trigger)
  - New Event in X Days view (duplicate prevention)
- **Critical**: Prevents automation loops

##### Start Updates Check
- **Type**: Formula
- **Purpose**: Detects changes to sync-triggering fields
- **Formula**: *(Combines last modified timestamps of monitored fields)*
- **Used By**: Update GCal? automation trigger condition
- **Monitored Fields**: Start Time, End Time, Description, All Day Event?, Title, Location, Participants, Attachments, Notes

##### New Event in X Days
- **Type**: Formula
- **Purpose**: Calculates days until child event should be created
- **Formula**: *(Date arithmetic based on Appt Type)*
- **Used By**: New Event in X Days automation view filter
- **Returns**: Number of days (positive = create child event)

---

#### Status & Workflow

##### Status
- **Type**: Single select
- **Purpose**: Event lifecycle state
- **Options**:
  - Scheduled (default for new events)
  - Pending
  - Completed
  - Cancelled
  - Archived
- **Used By**: Nearly all automations filter on Status
- **State Transitions**:
  - Scheduled → Completed (Event Past automations)
  - Scheduled → Cancelled (manual or Cancel Event automations)
  - Completed → Archived (manual)
- **Critical**: Most automations exclude Completed/Cancelled/Archived

##### Alerts
- **Type**: Single select
- **Purpose**: Alert sending state
- **Options**:
  - Pending (alert needs to be sent)
  - Sent (alert delivered)
  - None (no alert configured)
- **Used By**:
  - 3 Hour Alert automation
  - Alerts to Send automation
- **Workflow**: Pending → Sent (after notification delivered)

##### Alerts Trigger
- **Type**: Checkbox
- **Purpose**: Enable/disable alerts for specific event
- **Default**: Unchecked
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: All alert-related automations filter on this
- **Notes**: Master switch for alert system

##### Update GCal?
- **Type**: Single select
- **Purpose**: Flags record for Google Calendar sync
- **Options**:
  - Yes (needs sync)
  - No (synced or no sync needed)
- **Set By**: Update GCal? automation (when monitored fields change)
- **Cleared By**: Update GCal Event automation (after sync completes)
- **Critical**: Part of 3-automation Google Calendar sync chain

---

#### Google Calendar Integration

##### Add to Google
- **Type**: Checkbox
- **Purpose**: Include event in Google Calendar sync
- **Default**: Unchecked
- **Auto-Set**: New Annual/Monthly automation sets to checked
- **Used By**: Add to GCal automation initial sync

##### G Cal Event ID
- **Type**: Single line text
- **Purpose**: Stores Google Calendar event identifier
- **Format**: Google Calendar event ID string
- **Set By**: Google Calendar create/update actions
- **Used By**:
  - Update GCal Event automation (requires non-empty)
  - Cancel Event automations (checks if GCal event exists)
- **Critical**: Empty = event not in Google Calendar

---

#### Recurring Event Management

##### Year Add
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
- **Type**: Checkbox
- **Purpose**: Trigger creation of next month's monthly event
- **Used By**: Anniversary Next Month automation (trigger field)
- **Auto-Set By**: Event Past (Not TV) automation (when Appt Type = Monthly)
- **Workflow**: Same as Year Add but for monthly recurrence

---

#### Parent-Child Relationships

##### Parent (CANONICAL)
- **Type**: Link to Home Events
- **Purpose**: ✅ **PRIMARY** parent-child relationship field
- **Direction**: Child → Parent
- **Set By**: 
  - Anniversary Next Year/Month automations (on child creation)
  - Manual linking
- **Maintained By**: Sync Children from Parent automation script
- **Usage**: ALL new automations should use this field
- **Notes**: Replaces deprecated Parent Record field

##### Children (do not edit)
- **Type**: Link to Home Events
- **Purpose**: Reverse link showing all child events
- **Direction**: Parent → Children
- **Maintained By**: Sync Children from Parent automation script (auto-updates)
- **Manual Editing**: ❌ DO NOT EDIT (script-managed)
- **Purpose**: Visual display of child events in parent record

##### Prev Parent (new)
- **Type**: Link to Home Events
- **Purpose**: Tracks previous parent for relationship history
- **Maintained By**: Sync Children from Parent automation script
- **Use Case**: Audit trail for parent changes

##### ~~Parent Record~~ (DEPRECATED)
- **Type**: Link to Home Events
- **Status**: ⚠️ Being phased out
- **Replacement**: Use **Parent** field instead
- **Migration**: Anniversary Next Year/Month updated (Dec 2025)
- **Remaining Uses**: ~10-15 automations still reference (to be migrated)

##### ~~Sub Record~~ (DEPRECATED)
- **Type**: Link to Home Events
- **Status**: ⚠️ Being phased out
- **Replacement**: Use **Parent** field instead
- **Used By**: New Event in X Days automation (duplicate prevention)
- **Migration Status**: To be updated

##### ~~Parent Record ID~~ (DEPRECATED)
- **Type**: Single line text
- **Status**: ⚠️ Being phased out
- **Replacement**: Use **Parent** field's record ID

##### ~~Sub Record ID~~ (DEPRECATED)
- **Type**: Single line text
- **Status**: ⚠️ Being phased out
- **Used By**: Cancel Event (recurring) automation
- **Migration Status**: To be updated

---

#### Event Details

##### Location
- **Type**: Single line text
- **Purpose**: Event location/address
- **Used By**: Google Calendar sync
- **Watched By**: Update GCal? automation
- **Example**: "Doctor's Office", "123 Main St, NYC", "Zoom"

##### Description
- **Type**: Long text
- **Purpose**: Detailed event information
- **Used By**: 
  - Google Calendar sync (appears in GCal event body)
  - Email notifications
  - Cancel Event automations (update with cancellation notice)
- **Watched By**: Update GCal? automation

##### Notes
- **Type**: Long text
- **Purpose**: Internal notes (not synced to Google Calendar)
- **Used By**: Internal reference only
- **Watched By**: Update GCal? automation

##### Attachments
- **Type**: Attachments
- **Purpose**: File attachments for event
- **Used By**: 
  - Anniversary Next Year/Month (copied to child events)
  - Email notifications (may include as links)
- **Watched By**: Update GCal? automation

##### Participants
- **Type**: Long text
- **Purpose**: Event attendees/participants
- **Used By**: Google Calendar sync
- **Watched By**: Update GCal? automation

##### Phone
- **Type**: Phone number
- **Purpose**: Contact phone for event
- **Used By**: New Event in X Days (copied to child)

---

#### Metadata

##### Created (At)
- **Type**: Created time
- **Purpose**: Record creation timestamp
- **Used By**: Words to Learn automation (date range filtering)
- **Automatic**: Set by Airtable on creation

##### Last Modified
- **Type**: Last modified time
- **Purpose**: Record update timestamp
- **Used By**: Since Updated formula calculation
- **Automatic**: Set by Airtable on any field change

---

### Words to Learn Table Fields

##### Name
- **Type**: Single line text
- **Purpose**: Word or phrase to learn
- **Auto-Detection**: If contains "Word of the Day:", Words to Learn (incoming) automation triggers

##### Description
- **Type**: Long text
- **Purpose**: Word definition
- **Used By**: Slack notification message

##### LongText
- **Type**: Long text
- **Purpose**: Extended notes, usage examples, etymology
- **Used By**: Slack notification (if present)

##### SelectionCount
- **Type**: Number
- **Purpose**: Tracks how many times word has been selected
- **Updated By**: Words To Learn automation script
- **Logic**: Low SelectionCount prioritized for selection
- **Default**: 0

##### Last day selected
- **Type**: Date
- **Purpose**: Most recent selection date
- **Updated By**: Words To Learn automation script
- **Logic**: If > 0 (recently selected), word is deprioritized

##### CurDate
- **Type**: Date
- **Purpose**: Current date tracking for selection logic
- **Updated By**: Words To Learn automation script

##### Force
- **Type**: Checkbox
- **Purpose**: Force word to be selected in next automation run
- **Used By**: Words To Learn automation (conditional logic)
- **Priority**: Overrides SelectionCount logic

##### Word Blackout
- **Type**: Single select
- **Options**: Yes, No
- **Purpose**: Temporarily exclude word from selection
- **Used By**: Words to Learn (automation) view filter

##### Month Delay
- **Type**: Checkbox
- **Purpose**: Delay word selection to later month
- **Used By**: Words to Learn (automation) view filter (must be blank)

---

### Media Hard Drives Table Fields

##### Age in Years
- **Type**: Formula
- **Formula**: `DATETIME_DIFF(NOW(), {Purchase Date}, 'years')`
- **Purpose**: Calculate drive age for aging alerts
- **Used By**: Aging Hard Drive view filter (≥ 5 years)

##### Serial Number
- **Type**: Single line text
- **Purpose**: Hardware serial number tracking

##### Capacity
- **Type**: Number
- **Purpose**: Storage capacity in GB or TB

##### Purchase Date
- **Type**: Date
- **Purpose**: Original purchase date
- **Used By**: Age in Years formula

---

### Research Table Fields

##### Research Type
- **Type**: Single select
- **Purpose**: Classification of research items
- **Common Values**: TV Show, Cancel, Completed, Archived
- **Linked From**: Home Events table

---

### Timers Table Fields

##### Duration
- **Type**: Number
- **Purpose**: Timer duration in minutes

##### End Time
- **Type**: Formula
- **Formula**: `DATEADD({Start Time}, {Duration}, 'minutes')`
- **Purpose**: Calculate when timer expires

---

## Field Migration Guide

### Migrating from Old to New Parent Fields

**Old Pattern** (Deprecated):
```
Create record in Home Events
- Parent Record: [link to triggering record]
- Parent Record ID: {Airtable record ID}
- Sub Record: (leave empty)
```

**New Pattern** (Current):
```
Create record in Home Events
- (do not write Parent field in create action)
- (do not write Parent Record, Sub Record, Parent Record ID, or Sub Record ID)

Update record (the created record)
- Parent: {Airtable record ID} (from triggering record)
```

**Why Update Separately?**
- Triggers "Sync Children from Parent" automation script
- Script maintains Children (do not edit) and Prev Parent (new) fields
- Prevents manual maintenance of bidirectional links

**Already Migrated**:
- ✅ Anniversary Next Year
- ✅ Anniversary Next Month

**Need Migration**:
- ⏳ New Event in X Days
- ⏳ ~10 other automations

---

## Formula Field Reference

### Common Formula Patterns

**Date Difference (Seconds)**:
```javascript
DATETIME_DIFF(NOW(), {Timestamp Field}, 'seconds')
```
**Examples**: Seconds After, Since Updated

**Date Difference (Years)**:
```javascript
DATETIME_DIFF(NOW(), {Purchase Date}, 'years')
```
**Example**: Age in Years

**Date Arithmetic**:
```javascript
DATEADD({Start Time}, {Duration}, 'minutes')
```
**Example**: Timer End Time

**Conditional Logic**:
```javascript
IF({Field} = "Value", "Result A", "Result B")
```

**Complex Validation**:
```javascript
IF(
  AND({Start Time}, {End Time}),
  IF({End Time} > {Start Time}, 1, -1),
  0
)
```
**Example Pattern**: Date Check field

---

## Field Naming Conventions

### Standard Patterns
- **Timestamps**: "{Action} (At)" - e.g., "Created (At)", "Last Modified"
- **Formulas**: Descriptive names - e.g., "Seconds After", "Date Check"
- **Links**: "{Table Name}" or "{Relationship}" - e.g., "Research Type", "Parent"
- **Flags**: "{Action}?" - e.g., "Update GCal?", "All Day Event?"
- **Do Not Edit**: "(do not edit)" suffix - e.g., "Children (do not edit)"
- **New/Deprecated**: "(new)" or "~~strikethrough~~" in docs

### Field Suffixes
- **(new)**: Recently added field (migration in progress)
- **(do not edit)**: Script-maintained, manual changes overwritten
- **(automation)**: Used by specific automation
- ~~Strikethrough~~: Deprecated, being phased out

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

- **Alerts** - 4 automations
- **G Cal Event ID** - 3 automations
- **Update GCal?** - 3 automations
- **Year Add** - 2 automations
- **Month Add** - 2 automations

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
- **Solution**: Use DATETIME_FORMAT with timezone parameter

---

## Statistics

- **Total Fields**: 100+
- **Formula Fields**: 20+
- **Link Fields**: 10+
- **Deprecated Fields**: 4 (Parent Record, Sub Record, Parent Record ID, Sub Record ID)
- **High-Impact Fields**: 6
- **Script-Managed Fields**: 2 (Children, Prev Parent)

**Last Updated**: December 13, 2025

---

## Related Documentation

- [Automations](readme.automations.md) - Field usage in automations
- [Tables](readme.tables.md) - Table schemas
- [Views](readme.views.md) - View filters using fields
- [Changelog](changelog.md) - Field migration history
