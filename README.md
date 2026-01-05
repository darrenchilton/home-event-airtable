# Home Events Airtable Base

> Personal event management system with Google Calendar sync, recurring event automation, learning tools, and intelligent alerting workflows

## Documentation Index

- **[Automations](readme.automations.md)** - Complete automation documentation with dependencies and field impact analysis
- **[Tables](readme.tables.md)** - Table schemas, purposes, and relationships
- **[Views](readme.views.md)** - View configurations and automation dependencies
- **[Fields](readme.fields.md)** - Field definitions, types, and usage patterns
- **[Changelog](changelog.md)** - Version history and migration tracking
- **[Schema Tools](tools/README.md)** - Automated schema extraction and documentation

## Repository Structure

```
home-event-airtable/
├── README.md                    # This file - overview and index
├── readme.automations.md        # Automation documentation
├── readme.tables.md             # Table schemas and relationships
├── readme.views.md              # View configurations
├── readme.fields.md             # Field definitions (updated from schema/)
├── changelog.md                 # Version history
│
├── tools/                       # Schema extraction tools
│   ├── airtable_schema_extractor.py
│   ├── extract_schema.sh        # Quick run: ./tools/extract_schema.sh
│   ├── requirements.txt
│   └── README.md                # Tool documentation
│
├── schema/                      # Generated schema (auto-updated)
│   ├── schema.json              # Raw JSON schema
│   ├── schema.md                # Human-readable schema
│   └── fields-from-schema.md    # Field reference (source of truth)
│
├── .github/workflows/
│   └── update-schema.yml        # Weekly schema auto-update
│
├── .gitignore
└── .env.example
```

## Quick Start

The Home Events base manages:
- **Event scheduling** with Google Calendar bidirectional sync
- **Recurring events** (annual/monthly) with automatic child event creation
- **Smart alerts** (3-hour, day-before, custom timing)
- **Vocabulary learning** with spaced repetition
- **Media hard drive** tracking and aging alerts
- **Research content** classification and organization
- **Custom timers** and countdown systems

## System Architecture

### Core Tables
- **Home Events** - Primary event/task table (40+ automations)
- **Words to Learn** - Vocabulary learning system (4 automations)
- **Research** - Content classification (5 automations)
- **Media Hard Drives** - Storage tracking (3 automations)
- **Timers** - Countdown systems (3 automations)

### Key Automation Chains
1. **Google Calendar Sync**: Field Update → Update GCal? → Update GCal Event → Google Calendar
2. **Recurring Events**: Anniversary/Monthly → New Event in X Days → Child Event Creation
3. **Event Lifecycle**: Event Created → Alerts Triggered → Event Completed → Recurring Check
4. **Learning System**: Scheduled Selection → Notification → Progress Tracking

### Parent-Child Relationships
- **Parent field**: Canonical Airtable record ID link
- **Children (do not edit)**: Auto-maintained by "Sync Children from Parent" script
- **Prev Parent (new)**: Auto-maintained for relationship tracking

**Creating Child Records:**
Interface buttons trigger automations that create child records with Parent field pre-populated. Users navigate to newly created children via the Children field on the parent record.

**Workflow:**
1. Click "Add Child record" button in parent record detail view
2. Automation creates child record with Parent field linked to current record
3. "Sync Children from Parent" script updates Children field on parent
4. Navigate to child record via Children field to add details

**Legacy fields being phased out:**
- Parent Record, Sub Record, Parent Record ID, Sub Record ID

## Current State

**Total Automations**: 45+  
**Active Automations**: 40+  
**Automation Scripts**: 3  
**Migration Status**: In progress (Parent/Sub Record → Parent field)

**Last Full Audit**: December 1, 2025  
**Last Updated**: January 4, 2026

## Recent Changes

See [Changelog](changelog.md) for detailed migration history.

### In Progress
- Migrating from old Parent Record/Sub Record system to canonical Parent field
- Sub Type field reorganization analysis (most automations safe)

### Completed (Dec 2025)
- ✅ Anniversary Next Year automation updated to use Parent field
- ✅ Anniversary Next Month automation updated to use Parent field
- ✅ Documented all automation field dependencies

## Maintenance

### Keeping Documentation in Sync

**Update schema from Airtable:**
```bash
# Run the schema extractor
./tools/extract_schema.sh

# Review the generated schema
cat schema/fields-from-schema.md

# Update readme.fields.md with any corrections
# Commit changes
git add schema/ readme.fields.md
git commit -m "Update schema and field documentation"
```

The schema extractor runs automatically via GitHub Actions every Monday at 9 AM UTC.

### Before Making Changes

**Before renaming/deleting fields:**
1. Check [Fields documentation](readme.fields.md) for usage
2. Search [Automations](readme.automations.md) for field name
3. Review automation Actions Summary
4. Update all affected automations before schema changes

**Before modifying views:**
1. Check [Views documentation](readme.views.md) for automation dependencies
2. Test view filters with sample records
3. Verify automation triggers still work

### Regular Audits
- Monthly: Review automation run history for errors
- Quarterly: Full automation dependency audit
- Annually: Archive completed/cancelled events

## Contributing

When documenting changes:
1. Update relevant documentation file
2. Add entry to [Changelog](changelog.md)
3. Note breaking changes and dependencies
4. Update "Last Updated" dates

## Support

**Troubleshooting**: See [Automations - Troubleshooting Guide](readme.automations.md#troubleshooting-guide)

**Common Issues:**
- Automation not triggering → Check view filters
- Missing notifications → Verify email/Slack configuration
- Duplicate events → Check Sub Record/Parent filters
- GCal sync failing → Verify G Cal Event ID and Update GCal? flag

---

**Base Owner**: darrenchilton@gmail.com  
**Primary Notifications**: #0-0hours-until (Slack), 9173819771@vtext.com (SMS)
