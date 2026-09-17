# Home Events

> Current technical reference for the **Home Events** table in the Home Airtable base.

**Table ID:** `tblYQbyKJJErXkZro`  
**Base:** Home (`appSX4P3En4AWPyyG`)  
**Documentation status:** Current-state reference, audited and reconciled 2026-09-17.

## Purpose

Home Events is the Home base's operational event and task ledger. It holds scheduled appointments, reminders, household work, research-derived events, and specialized workflows. It combines event timing, classification, alerts, Google Calendar synchronization, and several independent linked-record workflows.

## Operating model

| Concept | Intended meaning |
| --- | --- |
| **Recurrence** | When and how an event repeats. |
| **Appt Type** | Operational event classification. |
| **Research Type** | Subject/category tags. |
| **Parent / Children** | Separate child-record relationship workflow; not the recurrence mechanism. |

Recurring records remain the same record: **Advance Recurring Event** moves the scheduled date forward using **Next Recurrence Date**. Child records are created only through the distinct Parent/Children flow.

## Documentation

- [Data model](data-model.md) — current relationships, identity, timing, and calendar model.
- [Field dictionary](field-dictionary.md) — current live Home Events fields and maintenance classifications.
- [Deleted fields](deleted-fields.md) — historical inventory of fields deliberately removed during the September 2026 cleanup.
- [Workflows and automations](workflows-and-automations.md) — current recurrence, alerts, Google Calendar, Parent/Children, and interface dependencies.
- [Legacy and cleanup notes](legacy-and-cleanup-notes.md) — completed migration context and remaining items that require evidence before future changes.

## Current-state rules

- Annual and Monthly are **Recurrence** values, not **Appt Type** values.
- **New Event in Days** remains live because Custom Days recurrence depends on it.
- Parent/Children is an active independent relationship workflow.
- The inverse linked-record fields associated with Parent, Children, and Prev Parent are structural parts of that relationship model and are preserved.
- Root-level `readme.*.md` files predate this migration and are historical references; use `docs/home-events/` for the current operating model.

## Change safety

This documentation describes the live system. It does not authorize Airtable changes. Before renaming, deleting, or repurposing a field or view, verify its deployed automation, interface, form, and view dependencies.
