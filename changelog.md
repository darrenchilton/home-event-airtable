# Changelog

> Version history, migrations, and major changes to the Home Events Airtable base

## Current Version: v2.1 (December 2025)

---

## [2.1.0] - December 2025

### In Progress

#### Parent-Child Field Migration
**Status**: 🔄 Ongoing  
**Target Completion**: January 2026

Migrating from legacy Parent Record/Sub Record system to canonical Parent field with script-maintained relationships.

**Completed**:
- ✅ Created "Sync Children from Parent" automation script
- ✅ Migrated Anniversary Next Year automation (Dec 12, 2025)
- ✅ Migrated Anniversary Next Month automation (Dec 12, 2025)
- ✅ Documented new pattern in automation docs

**Remaining Work**:
- ⏳ Migrate New Event in X Days automation
- ⏳ Migrate Cancel Event (recurring) automation (uses Sub Record ID)
- ⏳ Update ~8-10 other automations using old fields
- ⏳ Deprecate old fields (hide, then delete after 30 days)

**Technical Details**:
```
Old Pattern:
- Create record with Parent Record link
- Set Parent Record ID manually

New Pattern:
- Create record (no parent fields)
- Update created record with Parent = {Airtable record ID}
- Script automatically maintains Children and Prev Parent
```

**Breaking Changes**: None (both systems work concurrently during migration)

---

#### Sub Type Field Reorganization Analysis
**Status**: 📋 Planning  
**Completed**: December 1, 2025

Comprehensive audit of Sub Type field usage across all automations.

**Findings**:
- ✅ Most automations safe for Sub Type reorganization
- ✅ No automations use conditional logic based on Sub Type values
- ✅ Only passthrough copying in Anniversary/Monthly automations

**Action Items**:
- Safe to reorganize Sub Type options
- Update documentation after changes
- No automation modifications required

---

### Added

#### Documentation System
**Date**: December 13, 2025

Created comprehensive documentation structure:
- 📄 Main README.md - Overview and quick start
- 📄 readme.automations.md - Complete automation catalog
- 📄 readme.tables.md - Table schemas and relationships
- 📄 readme.views.md - View configurations
- 📄 readme.fields.md - Field definitions and formulas
- 📄 changelog.md - This file

**Motivation**: Needed to track field dependencies before reorganization work.

---

## [2.0.0] - November 2025

### Added

#### Sync Children from Parent Automation Script
**Date**: November 2025

Created automation script to maintain parent-child relationships automatically.

**Features**:
- Monitors Parent field changes
- Updates Children (do not edit) field on parent records
- Updates Prev Parent (new) field on child records
- Replaces manual bidirectional link maintenance

**Impact**: Enables cleaner automation patterns for recurring events

---

### Changed

#### Words to Learn Date Range
**Date**: November 2025

Modified Words to Learn (automation) view filters:
- Created (At) is after: 5/31/2025
- Created (At) is before: 6/30/2025

**Purpose**: Control which cohort of words is active for selection

**Maintenance**: Date range must be manually updated as cohorts rotate

---

## [1.9.0] - October 2025

### Changed

#### Family Reminder Enhancement
**Date**: October 2025

Updated Family Reminder automation to include solar data.

**Changes**:
- Added script to fetch solar generation data from external Airtable base
- Format solar data as HTML table in email
- Combine with family reminders in single daily email

**Technical**:
- Uses Airtable API to connect to external base
- Runs daily at 7:00 AM
- Conditional send (only if records exist in view)

---

## [1.8.0] - September 2025

### Added

#### Google Calendar Sync Chain
**Date**: September 2025

Implemented three-automation chain for efficient Google Calendar synchronization.

**Automations**:
1. **Update GCal?** - Field watcher (9 fields)
2. **Update GCal Event** - Performs actual sync
3. **Google Calendar** - External API integration

**Watched Fields**:
- Start Time, End Time, Description
- All Day Event?, Title, Location
- Participants, Attachments, Notes

**Benefits**:
- Reduced API calls (only sync when fields actually change)
- More reliable than single-automation approach
- Clear audit trail via Update GCal? flag

---

## [1.7.0] - August 2025

### Added

#### Words to Learn System
**Date**: August 2025

Launched vocabulary learning system with spaced repetition.

**Features**:
- Hourly automated word selection
- Smart deduplication (SelectionCount tracking)
- Recent selection avoidance (Last day selected)
- Force selection option
- Word blackout period support
- Month delay capability

**Integrations**:
- Slack notifications (#words-to-learn)
- Automatic categorization of "Word of the Day" entries

---

## [1.6.0] - July 2025

### Changed

#### Event Completion Logic Split
**Date**: July 2025

Split "Event Past" automation into two separate automations:

**Event Past (Not TV)**:
- Handles most event types
- Triggers recurring event creation (Year Add, Month Add)
- Sends email notifications

**Event Past (TV)**:
- Handles TV show events only
- Simpler logic (just mark completed)
- No email notifications

**Reason**: TV shows have different workflow requirements (no recurring, no alerts)

---

## [1.5.0] - June 2025

### Added

#### Media Hard Drives Tracking
**Date**: June 2025

Implemented storage device tracking and aging alert system.

**Features**:
- Age in Years formula field
- Aging Hard Drive automation (5+ years warning)
- Capacity and location tracking
- Maintenance reminder system

**Alert Thresholds**:
- 5-7 years: Warning email
- 7+ years: Critical email

---

## [1.4.0] - May 2025

### Changed

#### Recurring Event Improvements
**Date**: May 2025

Enhanced annual and monthly recurring event handling.

**Changes**:
- New Annual/Monthly automation auto-sets fields:
  - Alerts Trigger = checked
  - Add to Google = checked
  - All Day Event? = checked
  - Start/End Time = midnight
- New Event in X Days formula for child event creation
- Duplicate prevention via Sub Record check

---

## [1.3.0] - April 2025

### Added

#### Alert System Expansion
**Date**: April 2025

Added multiple alert types and timing options.

**Alert Types**:
- 3 Hour Alert
- Day Before Alert (implied)
- Custom Alerts (via Alerts Trigger)

**Features**:
- Alert status tracking (Pending → Sent)
- Email, Slack, and SMS notifications
- Conditional alert logic (excludes TV shows from some alerts)

---

## [1.2.0] - March 2025

### Added

#### Research Table Integration
**Date**: March 2025

Created Research table for content classification.

**Features**:
- Research Type linking from Home Events
- TV Show classification
- Content organization
- Status tracking (Completed, Archived, Cancelled)

---

## [1.1.0] - February 2025

### Added

#### Check End Date Automation
**Date**: February 2025

Automatic End Time population for events missing end times.

**Logic**:
- Triggers when Date Check > 0
- Copies Start Time to End Time
- Prevents errors in time calculations

---

## [1.0.0] - January 2025

### Initial Release

**Core Features**:
- Event management with Google Calendar sync
- Basic recurring events (Annual, Monthly)
- Status tracking (Scheduled, Completed, Cancelled)
- Alert system
- Email notifications

**Tables**:
- Home Events (primary)
- Basic supporting tables

---

## Migration Notes

### Upcoming Deprecations

#### Parent Record System (Q1 2026)
**Current**: Legacy fields still functional  
**Target**: Hide by January 31, 2026  
**Delete**: February 28, 2026 (after 30-day grace period)

**Affected Fields**:
- Parent Record
- Sub Record
- Parent Record ID
- Sub Record ID

**Replacement**: Parent field (canonical)

---

### Schema Evolution

**v1.x → v2.x**:
- Added Parent/Children/Prev Parent canonical system
- Introduced automation scripts (Sync Children from Parent)
- Expanded documentation significantly

**v2.0 → v2.1**:
- Migrating automations to canonical Parent field
- Enhanced documentation system
- Sub Type field analysis completed

---

## Breaking Changes Log

### December 2025
- None (migration maintains backward compatibility)

### November 2025
- **Sync Children from Parent script**: Auto-overwrites Children (do not edit) field
  - ⚠️ Manual edits to Children field will be reverted
  - Solution: Use Parent field on child records instead

### September 2025
- **Update GCal? automation**: Changed field watching approach
  - Old: Single automation with all logic
  - New: Chain of 3 automations
  - Migration: Automatic (no user action required)

---

## Rollback Procedures

### Parent Field Migration Rollback

If issues occur during Parent field migration:

1. **Identify affected records**:
   - Records with Parent but no Parent Record
   - Records with broken parent-child links

2. **Restore old pattern**:
   ```
   Update affected records:
   - Parent Record = {Parent}
   - Parent Record ID = {Parent record ID}
   ```

3. **Pause new automations**:
   - Pause Anniversary Next Year (new version)
   - Pause Anniversary Next Month (new version)
   - Re-enable old versions

4. **Verify**:
   - Test recurring event creation
   - Check parent-child links display correctly
   - Monitor automation run history

---

## Automation Version History

### Anniversary Next Year
- **v1.0** (Jan 2025): Original implementation with Parent Record
- **v2.0** (Dec 12, 2025): Migrated to Parent field + script

### Anniversary Next Month
- **v1.0** (Jan 2025): Original implementation with Parent Record
- **v2.0** (Dec 12, 2025): Migrated to Parent field + script

### Update GCal Chain
- **v1.0** (Jan 2025): Single automation
- **v2.0** (Sep 2025): Three-automation chain

### Words To Learn
- **v1.0** (Aug 2025): Basic hourly selection
- **v1.1** (Nov 2025): Added date range filtering

---

## Future Roadmap

### Planned (Q1 2026)
- Complete Parent field migration for all automations
- Deprecate old Parent Record fields
- Enhanced error handling in automation scripts
- Automation performance optimization

### Under Consideration
- API integration for external calendar systems (beyond Google)
- Mobile app for quick event creation
- Advanced analytics dashboard
- Machine learning for alert timing optimization

---

## Statistics

### Automation Count Over Time
- Jan 2025: 15 automations
- Jun 2025: 30 automations
- Dec 2025: 45+ automations

### Documentation Coverage
- Dec 2025: 100% automation documentation
- Dec 2025: 100% table/field documentation
- Dec 2025: 100% view documentation

---

## Versioning Scheme

**Format**: MAJOR.MINOR.PATCH

- **MAJOR**: Breaking changes, significant architecture updates
- **MINOR**: New features, non-breaking automation additions
- **PATCH**: Bug fixes, documentation updates, minor tweaks

**Current**: v2.1.0

---

## Contributing to Changelog

When making changes:

1. Add entry under "In Progress" or current version
2. Include date, description, and impact
3. Note breaking changes explicitly
4. Update version number if releasing
5. Move "In Progress" items to version section when complete

---

**Last Updated**: December 13, 2025  
**Maintained By**: darrenchilton@gmail.com
