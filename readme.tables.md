# Tables Documentation

> Schema definitions, relationships, and data architecture for the Home Events Airtable base

## Overview

This base contains multiple interconnected tables managing personal events, learning systems, and content organization. The primary table (Home Events) handles the majority of workflows with 40+ automations.

---

## Home Events (Primary Table)

**Purpose**: Core event and task management with Google Calendar integration, recurring event support, and automated alerting.

**Record Count**: 1000s (includes historical, active, and recurring events)

### Key Field Groups

#### Identity & Classification
- **Name** (Single line text) - Event title/description
- **Title** (Formula) - Computed display name
- **Appt Type** (Single select) - Event category
  - Annual, Monthly (recurring types)
  - Words To Learn, From Research, Work Timer (special types)
  - DRS Appt, Cut Grass (specific event types)
- **Sub Type** (Single select) - Secondary classification
  - ⚠️ Under reorganization - most automations safe for changes
- **Research Type** (Link to Research table)

#### Timing
- **Start Time** (Date/time)
- **End Time** (Date/time)
- **All Day Event?** (Checkbox)
- **Seconds After** (Formula) - Time since event ended
- **Date Check** (Formula) - Event timing validation
- **Since Updated** (Formula) - Time since last modification

#### Status & Workflow
- **Status** (Single select)
  - Scheduled, Pending, Completed, Cancelled, Archived
- **Alerts** (Single select)
  - Pending, Sent, None
- **Alerts Trigger** (Checkbox) - Enable/disable alerts for event
- **Update GCal?** (Single select) - Flags record for Google Calendar sync
  - Yes, No

#### Google Calendar Integration
- **Add to Google** (Checkbox) - Include in GCal sync
- **G Cal Event ID** (Single line text) - Google Calendar event identifier
- **Start Updates Check** (Formula) - Detects field changes for sync trigger

#### Recurring Event Management
- **Year Add** (Checkbox) - Create next year's annual event
- **Month Add** (Checkbox) - Create next month's monthly event
- **New Event in X Days** (Formula) - Days until child event should be created

#### Parent-Child Relationships
- **Parent** (Link to Home Events) - ✅ **CANONICAL** parent reference
- **Children (do not edit)** (Link to Home Events) - Auto-maintained by script
- **Prev Parent (new)** (Link to Home Events) - Previous parent tracking
- ~~**Parent Record**~~ (Deprecated - being phased out)
- ~~**Sub Record**~~ (Deprecated - being phased out)
- ~~**Parent Record ID**~~ (Deprecated)
- ~~**Sub Record ID**~~ (Deprecated)

#### Event Details
- **Location** (Single line text)
- **Description** (Long text)
- **Notes** (Long text)
- **Attachments** (Attachments)
- **Participants** (Long text)
- **Phone** (Phone number)

#### Metadata
- **Created (At)** (Created time)
- **Last Modified** (Last modified time)

### Relationships

**Self-referencing (Parent-Child)**:
- Parent events create child instances (recurring events)
- Maintained via Parent field + "Sync Children from Parent" automation script

**External Links**:
- **Research Type** → Research table
- Links to Google Calendar via G Cal Event ID

### Views (Automation Dependencies)

See [Views Documentation](readme.views.md) for complete list.

**Critical automation views**:
- "3 Hour Alert" - Alert triggering
- "Past (Not TV)" / "Past (TV)" - Event completion
- "Update GCal Event" - Calendar sync
- "Cancelled (recurring)" / "Cancelled (not recurring)" - Cancellation handling
- "Annual/Monthly" - Recurring event setup
- "New Event in X Days" - Child event creation

---

## Words to Learn

**Purpose**: Vocabulary learning system with spaced repetition and automated word selection.

### Key Fields
- **Name** (Single line text) - Word or phrase
- **Description** (Long text) - Definition
- **LongText** (Long text) - Extended notes
- **Status** (Single select) - Learning progress
- **Appt Type** (Single select) - Must be "Words To Learn"
- **Research Type** (Link to Research)
- **SelectionCount** (Number) - Times word has been selected
- **Last day selected** (Date) - Most recent selection
- **CurDate** (Date) - Current date tracking
- **Force** (Checkbox) - Force word to be selected
- **Word Blackout** (Single select) - Temporary exclusion
  - Yes, No
- **Month Delay** (Checkbox) - Delay selection
- **Created (At)** (Created time)

### Automations
- **Words To Learn** (Hourly) - Random selection with smart deduplication
- **Words to Learn (incoming)** - Auto-categorization of new words
- **Word Selected** - Notification sending
- **Word Month Delay** - Delay management

### Selection Logic
The hourly automation uses a custom script that:
1. Filters available words (not in blackout, delay cleared, created in specific months)
2. Prioritizes words with low SelectionCount
3. Avoids recently selected words (Last day selected > 0)
4. Sends Slack notifications with word details

---

## Research

**Purpose**: Content classification, organization, and tracking for research materials.

### Key Fields
- **Name** (Single line text) - Research item title
- **Research Type** (Single select)
  - TV Show, Cancel, Completed, Archived
- **Status** (Single select)
- **Classification** (Single select)
- **Content Type** (Single select)
- **Source** (Single line text)
- **Notes** (Long text)
- **Attachments** (Attachments)

### Relationships
- Linked from Home Events table via Research Type field
- Used to categorize events (especially TV shows)

### Automations
5 automations handle classification, organization, and status updates.

**TV Show Integration**:
- Events with Research Type = "TV Show" get special handling
- Separate completion automation (Event Past (TV))
- Excluded from certain alert types (3 Hour Alert)

---

## Media Hard Drives

**Purpose**: Physical storage device tracking, maintenance alerts, and aging warnings.

### Key Fields
- **Name** (Single line text) - Drive name/identifier
- **Serial Number** (Single line text)
- **Capacity** (Number)
- **Purchase Date** (Date)
- **Age in Years** (Formula)
- **Status** (Single select)
  - Active, Retired, Failed
- **Location** (Single line text)
- **Contents** (Long text)
- **Last Checked** (Date)
- **Notes** (Long text)

### Automations
- **Aging Hard Drive** - Alerts when drives exceed age thresholds
- **Drive Check Reminder** - Periodic maintenance reminders
- **Failed Drive** - Notification when drive marked as failed

### Aging Thresholds
- Warning at 5+ years
- Critical at 7+ years
- Automatic email notifications to darrenchilton@gmail.com

---

## Timers

**Purpose**: Countdown and reminder systems for time-based tasks.

### Key Fields
- **Name** (Single line text) - Timer name
- **Duration** (Number) - Minutes
- **Start Time** (Date/time)
- **End Time** (Formula) - Calculated from Start + Duration
- **Status** (Single select)
  - Active, Paused, Completed
- **Alerts** (Checkbox)
- **Notes** (Long text)

### Automations
- **Timer Started** - Initialization
- **Timer Alert** - Notification when time expires
- **Timer Completed** - Cleanup and status update

### Integration
Timers can create events in Home Events table (Appt Type = "Work Timer")

---

## Field Migration Status

### Completed Migrations
✅ Anniversary Next Year - Uses Parent field  
✅ Anniversary Next Month - Uses Parent field

### In Progress
⏳ Other automations still reference old Parent Record/Sub Record fields  
⏳ Need to update ~10-15 automations to use canonical Parent field

### Migration Plan
1. Identify all automations using old fields (see [Automations](readme.automations.md))
2. Update automations one-by-one to use Parent field
3. Verify "Sync Children from Parent" script maintains relationships
4. Test thoroughly before deprecating old fields
5. Archive/hide old fields (don't delete immediately)

---

## Table Relationships Diagram

```
┌─────────────────┐
│  Home Events    │◄──┐
│  (Primary)      │   │ Self-referencing
│                 │   │ (Parent-Child)
│  • Events       │───┘
│  • Alerts       │
│  • Recurring    │
└────────┬────────┘
         │
         │ Links to
         │
    ┌────┴────────────────────┬──────────────┬──────────────┐
    │                         │              │              │
┌───▼────────┐    ┌──────────▼───┐  ┌───────▼──────┐  ┌───▼─────┐
│ Research   │    │ Words to     │  │ Media Hard   │  │ Timers  │
│            │    │ Learn        │  │ Drives       │  │         │
│ • TV Shows │    │              │  │              │  │         │
│ • Content  │    │ • Vocabulary │  │ • Storage    │  │ • Tasks │
└────────────┘    └──────────────┘  └──────────────┘  └─────────┘
```

---

## Statistics

- **Total Tables**: 5
- **Primary Table**: Home Events (40+ automations)
- **Total Automations**: 45+
- **Self-Referencing Links**: Home Events (Parent-Child)
- **External Links**: Research, Words to Learn

**Last Updated**: December 13, 2025

---

## Best Practices

### Data Entry
- Always set Appt Type for proper automation routing
- Use Parent field (not old Parent Record fields) for relationships
- Enable "Add to Google" for calendar sync
- Set "Alerts Trigger" for time-based notifications

### Maintenance
- Archive completed events quarterly
- Monitor aging hard drives monthly
- Review Words to Learn selection patterns
- Audit parent-child relationships for orphaned records

### Schema Changes
- Never delete fields without checking automation dependencies
- Test view filters after field type changes
- Update documentation immediately
- Use field hiding instead of deletion when migrating

---

## Related Documentation

- [Automations](readme.automations.md) - Automation field dependencies
- [Views](readme.views.md) - View configurations
- [Fields](readme.fields.md) - Field definitions and formulas
- [Changelog](changelog.md) - Migration history
