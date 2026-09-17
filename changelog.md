# Changelog

> Version history, migrations, and major changes to the Home Events Airtable base

## Current Version: v2.2 (September 2026)

---

## [2.2.0] - September 17, 2026

### Changed

#### Recurrence migration: same-record advancement

Replaced the legacy child-record recurrence pattern with a unified **Recurrence** + **Next Recurrence Date** model.

**Completed**:
- ✅ Migrated 243 Scheduled records from legacy Annual/Monthly recurrence handling.
- ✅ Reclassified Scheduled Annual/Monthly records to operational **Appt Type** values where appropriate.
- ✅ Removed Annual and Monthly from **Appt Type**; recurrence now belongs only in **Recurrence**.
- ✅ Added and deployed **Advance Recurring Event**.
- ✅ Advanced recurring records in place: Start Time moves to Next Recurrence Date, End Time shifts by the same interval, and Status returns to Scheduled.
- ✅ Preserved the existing Google Calendar event through its retained G Cal Event ID; calendar sync updates the moved event.
- ✅ Retired legacy recurrence automations and views that created new recurring child records.
- ✅ Removed obsolete recurrence and Parent/Sub Record helper fields after dependency review.
- ✅ Kept Parent/Children as a separate active workflow for intentionally related records, not recurrence.
- ✅ Confirmed Parent, Children (do not edit), Prev Parent (new), and their Airtable-maintained inverse linked-record fields as the current Parent/Children structure.
- ✅ Repaired the Events → All Events calendar after removed Appt Type choices left a stale record-coloring condition.
- ✅ Reconciled current-state technical documentation under `docs/home-events/`.
- ✅ Added `docs/home-events/deleted-fields.md` as the historical inventory of fields deliberately removed during the cleanup.

**Verified behavior**:
- A recurring event remains one Airtable record across advances.
- Monthly, Annual, and Custom Days are calculated by **Next Recurrence Date**.
- **New Event in Days** remains live for Custom Days recurrence.
- Child records are created only by the separate Parent/Children workflow.
- Existing recurring Google Calendar events are moved through the retained G Cal Event ID rather than recreated.

**Current documentation rule**: `docs/home-events/` is the current operating reference. Older root-level `readme.*.md` files are retained as historical documentation and may describe superseded architecture.

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
- Most automations are safe from Sub Type changes.
- Existing documentation from this period is historical; current Home Events behavior is documented under `docs/home-events/`.
