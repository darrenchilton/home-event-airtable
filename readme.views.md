# Views Documentation

> View configurations, filters, and automation dependencies for the Home Events base

## Overview

Views are critical to automation triggering in Airtable. Most automations in this base use "When record enters view" triggers, making view filter accuracy essential for proper system operation.

**Total Views**: 50+ across all tables  
**Automation-Triggering Views**: 35+  
**Last Audit**: December 1, 2025

---

## Critical Automation Views

### Home Events Table

#### 3 Hour Alert
**Purpose**: Triggers 3-hour advance notification automation

**Filters**:
- Status is none of: Completed, Cancelled, Pending
- Alerts Trigger is: (find an option) [checked]
- Alerts is: Pending
- End Time is not empty
- Research Type has none of: Completed, Archived, Cancelled

**Used By**: 3 Hour Alert automation (High Priority)

**Notes**: Complex filter ensures only active, alert-enabled events trigger notifications

---

#### Anniversary/Month Field Update
**Purpose**: Watches for Year Add and Month Add checkbox changes

**Filters**:
- Field watching view (monitors specific field updates)

**Used By**:
- Anniversary Next Year automation
- Anniversary Next Month automation

**Critical**: This view must capture all records where Year Add or Month Add is checked

---

#### Cancelled (not recurring)
**Purpose**: Handles cancellation of one-time events

**Filters**:
- Status is: Cancelled
- Appt Type is none of: Annual, Monthly

**Used By**: Cancel Event (non recurring) automation

**Google Calendar**: Adds "** CANCELLED **" prefix to GCal event title

---

#### Cancelled (recurring)
**Purpose**: Handles cancellation of recurring events

**Filters**:
- Status is: Cancelled
- Appt Type is any of: Annual, Monthly

**Used By**: Cancel Event (recurring) automation (High Complexity)

**Special Logic**: Handles both parent and child event cancellations, manages Sub Record ID relationships

---

#### Check End Date
**Purpose**: Finds events missing end times

**Filters**:
- Status is none of: Completed, Cancelled
- Date Check > 0
- Since Updated > 0

**Used By**: Check End Date automation

**Action**: Automatically copies Start Time to End Time

---

#### Past (Not TV)
**Purpose**: Marks completed events and triggers recurring event creation

**Filters**:
- Status is none of: Completed, Cancelled, Archived
- Seconds After > 120 (2 minutes past event end)
- Research Type has none of: TV Show, Cancel
- Date Check > -1

**Used By**: Event Past (Not TV) automation (Medium Complexity)

**Actions**:
1. Status → Completed
2. Year Add checkbox (for Annual events)
3. Month Add checkbox (for Monthly events)
4. Email notification (for non-automated events)

---

#### Past (TV)
**Purpose**: Marks completed TV show events

**Filters**:
- Status is none of: Completed, Cancelled
- Seconds After > 120
- Research Type is exactly: TV Show

**Used By**: Event Past (TV) automation

**Simpler Logic**: TV shows get basic completion without recurring checks

---

#### Family Reminders
**Purpose**: Daily family reminder email aggregation

**Filters**:
- Status is none of: Completed, Cancelled
- Appt Type is: [Family-related types]
- Start Time is: Today (dynamic filter using Actual run time)

**Used By**: Family Reminder automation (Scheduled daily at 7:00 AM)

**Script**: Includes solar data fetched from external base

---

#### Annual/Monthly
**Purpose**: Standardizes recurring event settings

**Filters**:
- Appt Type is any of: Annual, Monthly
- Status is none of: Completed, Cancelled

**Used By**: New Annual/Monthly automation

**Actions**: Auto-sets Alerts Trigger, Add to Google, All Day Event?, and midnight times

---

#### New Event in X Days
**Purpose**: Creates child events for recurring events

**Filters**:
- Status is not: Cancelled
- New Event in X Days > 0 (formula determines when to create child)
- Since Updated > 0
- Sub Record is empty (prevents duplicate creation)

**Used By**: New Event in X Days automation

**Critical Filter**: "Sub Record is empty" prevents infinite loops

---

#### Update GCal Event
**Purpose**: Syncs changed records to Google Calendar

**Filters**:
- Update GCal? is: Yes
- G Cal Event ID is not empty

**Used By**: Update GCal Event automation

**Triggered By**: Update GCal? automation (watches 9 fields for changes)

---

#### Alerts to Send
**Purpose**: Generic alert sending view

**Filters**:
- Alerts is: Pending
- Alerts Trigger is: checked
- [Additional timing filters]

**Used By**: Alerts to Send automation

---

#### All Records (Do not delete)
**Purpose**: Field watching for Google Calendar sync trigger

**Filters**: (None - shows all records)

**Used By**: Update GCal? automation

**Watches Fields**:
- Start Time
- End Time
- Description
- All Day Event?
- Title
- Location
- Participants
- Attachments
- Notes

**Critical**: Changing these fields sets Update GCal? = Yes

---

### Words to Learn Table

#### Words to Learn (automation)
**Purpose**: Hourly word selection queue

**Filters**:
- Status is not: Cancelled
- Appt Type is: Words To Learn
- Research Type has none of: Cancel
- Month Delay is: blank
- Word Blackout contains: No
- Created (At) is after: 5/31/2025
- Created (At) is before: 6/30/2025

**Used By**: Words To Learn automation (Hourly)

**Script**: Custom random selection with deduplication logic

**Notes**: Date range filter is manually updated to control which cohort of words is active

---

#### Words To Learning (incoming)
**Purpose**: Auto-categorizes new "Word of the Day" entries

**Filters**:
- Name contains: 'Word of the Day:'

**Used By**: Words to Learn (incoming) automation

**Action**: Sets Appt Type and Research Type, sends Slack notification

---

### Media Hard Drives Table

#### Aging Hard Drive View
**Purpose**: Identifies drives exceeding age thresholds

**Filters**:
- Age in Years ≥ 5
- Status is: Active

**Used By**: Aging Hard Drive automation

**Thresholds**:
- 5-7 years: Warning
- 7+ years: Critical

---

### Research Table

#### TV Show View
**Purpose**: Filters TV show-related research items

**Filters**:
- Research Type is: TV Show

**Integration**: Linked from Home Events via Research Type field

---

### Timers Table

#### Active Timers
**Purpose**: Monitors running timers

**Filters**:
- Status is: Active
- End Time is not in the past

**Used By**: Timer Alert automation

---

## View Naming Conventions

### Purpose-Based Names
- **Action Views**: "Update GCal Event", "Send Alert", "Create Child Event"
- **Status Views**: "Cancelled (recurring)", "Past (TV)", "Active Timers"
- **Filter Views**: "Annual/Monthly", "3 Hour Alert", "Words to Learn"

### Special Naming
- **(Do not delete)**: Critical system views (e.g., "All Records (Do not delete)")
- **(automation)**: Explicitly used by automation (e.g., "Words to Learn (automation)")
- **(incoming)**: Processing queue views (e.g., "Words To Learning (incoming)")

---

## View Modification Safety

### ✅ Safe to Modify
- Personal/manual filtering views (no automations)
- Display-only views
- Reporting/dashboard views

### ⚠️ Modify with Caution
- Views used for automation triggering
- Field-watching views (changes may break field monitoring)
- Views with complex filter chains

### 🛑 Never Modify Without Testing
- "All Records (Do not delete)"
- "Update GCal Event"
- "3 Hour Alert"
- "Past (Not TV)" / "Past (TV)"
- Any view explicitly mentioned in automation name

---

## Testing View Changes

### Before Modifying Automation-Dependent Views

1. **Document Current Filters**:
   - Screenshot or copy exact filter configuration
   - Note which automations depend on view

2. **Test with Sample Records**:
   - Create test record matching old filters
   - Verify automation triggers correctly
   - Modify view filters
   - Re-test with same record

3. **Monitor Automation Runs**:
   - Check Airtable automation history
   - Verify expected triggers occurred
   - Look for missing or duplicate runs

4. **Rollback Plan**:
   - Keep original filter documentation
   - Test rollback procedure
   - Monitor for 24-48 hours after change

---

## Common View Filter Patterns

### Status Exclusions
```
Status is none of: Completed, Cancelled, Archived
```
**Purpose**: Exclude finished events from active automation processing

### Time-Based Triggers
```
Seconds After > 120
```
**Purpose**: Wait 2 minutes past event end before marking complete (prevents premature triggers)

### Duplicate Prevention
```
Sub Record is empty
```
**Purpose**: Only create child event if not already created

### Type-Based Routing
```
Appt Type is any of: Annual, Monthly
Research Type has none of: TV Show, Cancel
```
**Purpose**: Route different event types to different automation chains

---

## Automation → View Dependencies Map

| Automation | Primary View | Secondary Views |
|------------|--------------|-----------------|
| 3 Hour Alert | 3 Hour Alert | - |
| Anniversary Next Year | Anniversary/Month Field Update | - |
| Anniversary Next Month | Anniversary/Month Field Update | - |
| Cancel Event (non recurring) | Cancelled (not recurring) | - |
| Cancel Event (recurring) | Cancelled (recurring) | - |
| Check End Date | Check End Date | - |
| Event Past (Not TV) | Past (Not TV) | - |
| Event Past (TV) | Past (TV) | - |
| Family Reminder | Family Reminders | - |
| New Annual/Monthly | Annual/Monthly | - |
| New Event in X Days | New Event in X Days | - |
| Update GCal? | All Records (Do not delete) | - |
| Update GCal Event | Update GCal Event | - |
| Words To Learn | Words to Learn (automation) | - |
| Words to Learn (incoming) | Words To Learning (incoming) | - |
| Aging Hard Drive | Aging Hard Drive View | - |

---

## View Performance Notes

### Large Dataset Views
- "All Records (Do not delete)": 1000s of records, field-watching only
- "Past (Not TV)": High traffic view, runs frequently

### Optimization Tips
- Use formula fields for complex date calculations (avoid view-level date math)
- Index frequently filtered fields (Status, Appt Type, Research Type)
- Limit linked record fields in views to improve loading time

---

## Troubleshooting View Issues

### Automation Not Triggering

**Problem**: Record meets filter criteria but automation doesn't run

**Solutions**:
1. Check if record truly entered view (might have already been in view)
2. Verify "When record enters view" trigger type (not "When view has records")
3. Test with new record creation vs. existing record update
4. Check automation is Active (not Paused)

### Records Stuck in View

**Problem**: Records remain in view after condition should be false

**Solutions**:
1. Force recalculation: Edit any field on record
2. Check for formula field caching issues
3. Verify Since Updated formula is working
4. Manually refresh view

### Duplicate Automation Runs

**Problem**: Same record triggers automation multiple times

**Solutions**:
1. Add duplicate prevention filter (e.g., "Sub Record is empty")
2. Use "Since Updated > 0" to prevent immediate re-trigger
3. Check for automation loops (A triggers B triggers A)

---

## Statistics

- **Total Views**: 50+
- **Automation-Dependent**: 35+
- **Field-Watching Views**: 2
- **Scheduled Automation Views**: 3
- **High-Traffic Views**: 10+

**Last Updated**: December 13, 2025

---

## Related Documentation

- [Automations](readme.automations.md) - Detailed automation configurations
- [Tables](readme.tables.md) - Table schemas and relationships
- [Fields](readme.fields.md) - Field formulas and calculations
- [Changelog](changelog.md) - View modification history
