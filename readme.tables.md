# Tables Documentation

> Schema definitions, relationships, and data architecture for the Home Events Airtable base

## Overview

This base contains **32 interconnected tables** managing personal events, learning systems, content organization, health tracking, financial records, and more. The primary table (Home Events) handles the majority of workflows with 40+ automations.

**Total Tables**: 32  
**Documented in Detail**: 5 primary operational tables (below)  
**Complete Schema**: All 32 tables detailed in `schema/fields-from-schema.md`  
**Last Updated**: December 13, 2025

---

## All Tables in Base (32)

### Core Operations (2)
- **Home Events** - Primary event/task management (119 fields, 40+ automations)
- **Schema Changes** - Tracks schema modifications (7 fields)

### Research & Content (4)
- **Research** - Research item tracking
- **Research Persons** - People in research
- **Research Subjects** - Research topics
- **Research Works** - Research materials

### Media & Entertainment (4)
- **Tracked Shows** - TV show tracking
- **TV Shows** - TV show database
- **Check Movies** - Movie watchlist
- **Directors** - Film directors database

### Documentation & Navigation (4)
- **Automations Documentation** - Automation tracking
- **Navigation Directory** - Navigation structure
- **Article Classifications** - Article categories
- **Article Tags** - Article tagging system

### Health & Wellness (2)
- **Health** - Health records
- **Health Care Providers** - Medical providers

### People (1)
- **People** - Contacts database

### Financial (1)
- **Schwab Checking** - Bank account tracking

### Home & Living (4)
- **Groceries** - Grocery lists
- **Home Storage** - Storage inventory
- **Albert Court Receipts** - Property receipts
- **Plymouth Tower Issues List** - Property issues

### Resources & Learning (2)
- **Resources** - General resources
- **Learning Experience** - Learning tracking

### Work & Jobs (2)
- **Job Listings** - Job opportunities
- **Job URLs To Search** - Job search tracking

### Special Purpose (3)
- **Holiday Gifts** - Gift planning
- **8A Issues Log** - Issue tracking
- **GCal** - Google Calendar integration

### Analysis & Technical (3)
- **Field Analysis Results** - Schema analysis
- **Category Analysis** - Category analysis
- **Home Events copy** - Backup/testing table

---

## Detailed Table Documentation

The following sections provide detailed documentation for the primary operational tables. For complete field details on all 32 tables, see `schema/fields-from-schema.md`.

---

## Home Events (Primary Table)

**Purpose**: Core event and task management with Google Calendar integration, recurring event support, and automated alerting.

**Fields**: 119  
**Automations**: 40+  
**Record Count**: 1000s (includes historical, active, and recurring events)

### Key Field Groups

#### Identity & Classification
- **Name** (Formula) - Concatenated identifier: `Title-Date-Autonumber`
- **Title** (Single line text) - User-entered event title
- **Appt Type** (Single select - 41 options) - Event category
  - Annual, Monthly (recurring types)
  - Words To Learn, From Research, Work Timer (special types)
  - DRS Appt, Cut Grass, Health, Financial, etc.
  - See [Fields Documentation](readme.fields.md) for complete list
- **Sub Type** (Multiple select - 160 options) - Secondary classification
  - ⚠️ Under reorganization - most automations safe for changes
- **Research Type** (Multiple select - 298 options) - Research categorization
  - TV Show, AI, Health, History, etc.
  - Links to Research table

#### Timing
- **Start Time** (Datetime) - Event start (timezone: America/New_York)
- **End Time** (Datetime) - Event end (timezone: America/New_York)
- **All Day Event?** (Checkbox) - Full day event flag
- **Days Until** (Formula) - Days until event starts
- **Hours Until** (Formula) - Hours until event starts
- **Effort (minutes)** (Formula) - Event duration in minutes
- **Date Check** (Formula) - Event timing validation
- **Current Time** (Formula) - Current timestamp formatted

#### Status & Workflow
- **Status** (Single select - 5 options)
  - Pending, Scheduled, Completed, Cancelled, Archived
- **Alerts** (Formula) - Generated alert text based on time until event
- **Alerts Trigger** (Checkbox) - Enable/disable alerts for event
- **Update GCal?** (Single select) - Flags record for Google Calendar sync
  - Yes, No

#### Google Calendar Integration
- **Add to Google** (Checkbox) - Include in GCal sync
- **G Cal Event ID** (Multiline text) - Google Calendar event identifier
- **G Cal Event URL** (Multiline text) - Direct link to GCal event
- **From GCal** (Checkbox) - Event imported from Google Calendar

#### Recurring Event Management
- **Year Add** (Checkbox) - Create next year's annual event
- **Month Add** (Checkbox) - Create next month's monthly event
- **Anniversary Next Year** (Formula) - Calculates next year's date
- **Anniversary Next Month** (Formula) - Calculates next month's date
- **New Event in Days** (Number) - Days before creating child event
- **New Date** (Formula) - Calculated future date for child event

#### Parent-Child Relationships
- **Parent** (Link to Home Events) - ✅ **CANONICAL** parent reference
- **Children (do not edit)** (Link to Home Events) - Auto-maintained by script
- **Prev Parent (new)** (Link to Home Events) - Previous parent tracking
- **From field: Parent (Canonical)** - Inverse relationship
- **From field: Children (new)** - Inverse relationship
- **From field: Prev Parent (new)** - Inverse relationship
- ~~**Parent Record (old)**~~ (Deprecated - being phased out)
- ~~**Sub Record (old)**~~ (Deprecated - being phased out)
- ~~**Parent Record ID**~~ (Deprecated)
- ~~**Sub Record ID**~~ (Deprecated)

#### Event Details
- **Location** (Single line text)
- **Description** (Rich text)
- **Notes** (Rich text)
- **Long Text** (Rich text) - Extended content
- **Attachments** (Multiple attachments)
- **Participants** (Multiple select - 51 options) - Event attendees
- **AI Prompt** (Multiline text)

#### Linked Tables
- **Health Care Provider** (Link to Health Care Providers)
- **Link to Research** (Link to Research)
- **Learning Experience** (Link to Learning Experience)

#### Metadata & Tracking
- **Created (At)** (Created time)
- **Last Updated by** (Last modified by)
- **Autonumber** (Autonumber) - Sequential ID
- **Record ID** (Formula) - Airtable record ID
- **Record_URL** (Formula) - Direct URL to record

#### Special Purpose
- **Stop Timer** (Checkbox)
- **Current Working** (Checkbox)
- **Email Update** (Checkbox)
- **Force Into Random Report** (Checkbox)
- **Month Delay** (Checkbox)
- **Last day selected** (Date) - For Words to Learn

#### URL Fields
- **ChatGPT URL** (URL)
- **Claude.AI URL** (URL)
- **Google Gemini URL** (URL)
- **GitHub URL** (URL)

### Relationships

**Self-referencing (Parent-Child)**:
- Parent events create child instances (recurring events)
- Maintained via Parent field + "Sync Children from Parent" automation script
- Script automatically updates Children and Prev Parent fields

**External Links**:
- **Health Care Provider** → Health Care Providers table
- **Link to Research** → Research table
- **Learning Experience** → Learning Experience table
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

## Schema Changes

**Purpose**: Tracks schema modifications (field updates, table changes, etc.)

**Fields**: 7  
**Record Count**: Historical log of all schema changes

### Key Fields
- **Collaborator** (Multiple collaborators) - Who made the change
- **Created** (Created time) - When change occurred
- **Description** (Rich text) - Change details
- **Entity** (Single select - 2 options)
  - field, table
- **Event ID** (Single line text) - Unique change identifier
- **Event Type** (Single select - 8 options)
  - field-updated, field-deleted, field-created, field-renamed
  - table-renamed, table-created, table-deleted, table-updated
- **Table ID** (Single line text) - Affected table identifier

### Purpose
Maintains audit trail of all structural changes to the base for:
- Change tracking
- Rollback reference
- Documentation updates
- Automation impact analysis

---

## Research

**Purpose**: Content classification, organization, and tracking for research materials.

**Record Count**: 100s of research items

### Key Fields
- **Name** (Single line text) - Research item title
- **Research Type** (Multiple select - 298 options)
  - TV Show, AI, Health, History, and 294+ other options
  - See [Fields Documentation](readme.fields.md) for complete list
- **Status** (Single select) - Research progress
- **Classification** (Single select) - Content classification
- **Content Type** (Single select) - Material type
- **Source** (Single line text) - Research source
- **Notes** (Long text) - Research notes
- **Attachments** (Attachments) - Supporting files

### Relationships
- Linked from Home Events table via Research Type field (multiple select)
- Used to categorize events (especially TV shows)
- Links to Research Persons, Research Subjects, Research Works

### Automations
5 automations handle classification, organization, and status updates.

**TV Show Integration**:
- Events with Research Type = "TV Show" get special handling
- Separate completion automation (Event Past (TV))
- Excluded from certain alert types (3 Hour Alert)

---

## Health Care Providers

**Purpose**: Medical provider database linked from health appointments

### Key Fields
- **Name** (Single line text) - Provider name
- **Address** (Single line text) - Office location
- **Map** (Lookup) - Map/location lookup
- Other provider details

### Relationships
- **Linked from**: Home Events (DRS Appt events)
- **Inverse field**: Links to appointments

### Usage
When creating health appointments (Appt Type = "DRS Appt"), link to provider for:
- Address lookup
- Contact information
- Appointment history

---

## Learning Experience

**Purpose**: Learning tracking and educational progress

### Relationships
- **Linked from**: Home Events table
- Tracks learning-related events and progress

---

## GCal

**Purpose**: Google Calendar integration and sync management

### Usage
Manages the bidirectional sync between Airtable and Google Calendar:
- Event creation in both directions
- Update propagation
- Conflict resolution

---

## Additional Tables (Summary)

For detailed field information on the following tables, see `schema/fields-from-schema.md`:

**Media & Entertainment**:
- **Tracked Shows** - TV show progress tracking
- **TV Shows** - TV show database
- **Check Movies** - Movie watchlist
- **Directors** - Film directors

**Documentation**:
- **Automations Documentation** - Meta-documentation of automations
- **Navigation Directory** - Base navigation structure
- **Article Classifications** & **Article Tags** - Content organization

**Health**:
- **Health** - Health records and tracking

**People**:
- **People** - Contacts and relationships

**Financial**:
- **Schwab Checking** - Bank transactions

**Home & Living**:
- **Groceries** - Shopping lists
- **Home Storage** - Inventory management
- **Albert Court Receipts** - Property receipts
- **Plymouth Tower Issues List** - Property maintenance

**Resources**:
- **Resources** - General resources

**Work**:
- **Job Listings** - Job opportunities
- **Job URLs To Search** - Job search management

**Special**:
- **Holiday Gifts** - Gift planning
- **8A Issues Log** - Issue tracking

**Analysis**:
- **Field Analysis Results** - Schema analysis
- **Category Analysis** - Category statistics
- **Home Events copy** - Backup table

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
│  119 fields     │   │ (Parent-Child)
│  40+ automations│───┘
└────────┬────────┘
         │
         │ Links to Multiple Tables
         │
    ┌────┴─────┬──────────┬────────────┬──────────────┬────────────┐
    │          │          │            │              │            │
┌───▼────┐ ┌──▼──────┐ ┌─▼─────┐ ┌───▼──────────┐ ┌─▼──────────┐ │
│Research│ │ Health  │ │Learning│ │ GCal         │ │ People     │ │
│        │ │ Care    │ │ Exp.   │ │              │ │            │ │
│ 298    │ │Providers│ │        │ │              │ │            │ │
│ types  │ │         │ │        │ │              │ │            │ │
└────────┘ └─────────┘ └────────┘ └──────────────┘ └────────────┘ │
                                                                    │
┌──────────────────────────────────────────────────────────────────┘
│
│  Supporting Tables (26 additional)
│  
├─ Media: Tracked Shows, TV Shows, Check Movies, Directors
├─ Documentation: Automations, Navigation, Article Classifications/Tags
├─ Financial: Schwab Checking
├─ Home: Groceries, Home Storage, Albert Court, Plymouth Tower
├─ Work: Job Listings, Job URLs
├─ Special: Holiday Gifts, 8A Issues
├─ Research: Research Persons, Subjects, Works
└─ Analysis: Field Analysis, Category Analysis, Home Events copy
```

---

## Statistics

**Base Structure**:
- **Total Tables**: 32
- **Primary Operational Table**: Home Events (119 fields, 40+ automations)
- **Schema Tracking**: Schema Changes table (7 fields)
- **Supporting Tables**: 30 additional tables for various functions

**Home Events Table**:
- **Fields**: 119
- **Automations**: 40+
- **Record Count**: 1000s
- **Self-Referencing Links**: Parent-Child relationships
- **External Links**: 4+ tables (Research, Health Care Providers, Learning Experience, GCal)

**Relationships**:
- **Self-Referencing**: Home Events (Parent-Child for recurring events)
- **External Links**: Home Events links to 4+ other tables
- **Research Network**: Research connects to Research Persons, Subjects, Works

**Last Schema Extract**: December 13, 2025  
**Last Documentation Update**: December 13, 2025

---

## Best Practices

### Data Entry
- Always set Appt Type for proper automation routing
- Use Parent field (not old Parent Record fields) for relationships
- Enable "Add to Google" for calendar sync
- Set "Alerts Trigger" for time-based notifications
- Link to Health Care Provider for medical appointments

### Maintenance
- Archive completed events quarterly
- Review parent-child relationships for orphaned records
- Monitor Schema Changes table for unexpected modifications
- Keep research categorization consistent

### Schema Changes
- Never delete fields without checking automation dependencies
- Test view filters after field type changes
- Update documentation immediately
- Use field hiding instead of deletion when migrating
- Check Schema Changes table for audit trail

### Table Management
- Focus documentation efforts on heavily-used tables (Home Events)
- Use `schema/fields-from-schema.md` for complete schema reference
- Document specialized tables as usage increases
- Keep table relationships clear and well-documented

---

## Documentation Coverage

### Fully Documented
- ✅ **Home Events** (Primary table) - Complete documentation
- ✅ **Schema Changes** - Complete documentation
- ✅ **Research** - Detailed documentation
- ✅ **Health Care Providers** - Basic documentation
- ✅ **Learning Experience** - Basic documentation
- ✅ **GCal** - Basic documentation

### Schema Available
All 32 tables have complete field schemas in `schema/fields-from-schema.md`

### To Be Documented
Additional tables can be documented as needed based on:
- Usage frequency
- Automation complexity
- Team collaboration needs
- Complexity of relationships

---

## Related Documentation

- [Automations](readme.automations.md) - Automation field dependencies
- [Views](readme.views.md) - View configurations
- [Fields](readme.fields.md) - Detailed field definitions and formulas
- [Changelog](changelog.md) - Migration history
- [Schema Files](schema/) - Auto-generated complete schema for all 32 tables
