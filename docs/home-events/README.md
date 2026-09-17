# Home Events

> Current technical reference for the **Home Events** table in the Home Airtable base.

**Table ID:** `tblYQbyKJJErXkZro`  
**Base:** Home (`appSX4P3En4AWPyyG`)  
**Documentation status:** Current-state reference, audited 2026-09-17.

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

## Start here

- [Data model](data-model.md)
- [Field dictionary](field-dictionary.md)
- [Workflows and automations](workflows-and-automations.md)
- [Legacy and cleanup notes](legacy-and-cleanup-notes.md)

## Change safety

This documentation describes the live system. It does not authorize Airtable changes. Before renaming, deleting, or repurposing a field or view, verify its deployed automation and interface dependencies.
