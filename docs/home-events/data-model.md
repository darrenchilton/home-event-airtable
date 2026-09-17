# Home Events data model

**Table:** Home Events (`tblYQbyKJJErXkZro`)  
**Base:** Home (`appSX4P3En4AWPyyG`)

## Core relationships

```mermaid
flowchart TD
  HE["Home Events"]
  HE -->|"Parent / Children"| HE
  HE -->|"Health Care Provider"| HCP["Health Care Providers"]
  HE -->|"Link to Research"| R["Research"]
  HE -->|"Learning Experience"| LE["Learning Experience"]
  HE -->|"Words Settings"| WS["Words Settings"]
```

## Relationship semantics

| Relationship | Direction and purpose | Current state |
| --- | --- | --- |
| Parent | Canonical self-link; one event may identify a parent event. | Active |
| From field: Parent (Canonical) | Airtable-maintained inverse linked-record field paired with Parent. | Active structural inverse; preserve |
| Children (do not edit) | Self-link maintained by **Sync Children from Parent**. | Active; do not edit manually |
| From field: Children (new) | Airtable-maintained inverse linked-record field paired with Children (do not edit). | Active structural inverse; preserve |
| Prev Parent (new) | Stores the previous Parent so **Sync Children from Parent** can remove a child from an old parent when the relationship changes. | Active automation state |
| From field: Prev Parent (new) | Airtable-maintained inverse linked-record field paired with Prev Parent (new). | Active structural inverse; preserve |
| Health Care Provider | Links an event to one provider and exposes name, specialty, contact, map, and website lookups. | Active |
| Link to Research | Links event records to Research. | Active |
| Learning Experience | Links events to Learning Experience records. | Active |
| Words Settings | Links event records to a testing-window record. | Active |

Parent/Children is independent of recurrence. **Create Child Record** intentionally creates related records; recurring events do not create child records.

## Identity and timing

- **Name** is the primary formula identifier; users enter **Title**.
- **Start Time** and **End Time** use America/New_York.
- **Status** controls the event lifecycle: Pending, Scheduled, Completed, Archived, Cancelled.
- **Recurrence** and **Next Recurrence Date** drive same-record advance. The current recurrence choices are Monthly, Annual, and Custom Days.
- **New Event in Days** is retained for the Custom Days recurrence calculation.
- Annual and Monthly are recurrence values, not Appt Type values.

## External calendar model

**Add to Google** initiates creation; the resulting external identifier is retained in **G Cal Event ID**. Changes to watched event fields can set **Update GCal?**, which routes the record through the calendar-update workflow. Recurrence preserves the Airtable record and G Cal Event ID, allowing the existing Google Calendar event to move with the recurring record.
