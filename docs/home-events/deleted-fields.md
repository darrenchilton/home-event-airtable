# Home Events deleted fields

**Table:** Home Events (`tblYQbyKJJErXkZro`)  
**Cleanup date:** 2026-09-17

This is the historical inventory of Home Events fields deliberately removed during the September 2026 recurrence and Parent/Children cleanup. These fields are **not part of the live schema**. The list is retained so future maintainers can distinguish an intentionally retired field from a missing or accidentally deleted field.

For live fields, use [field-dictionary.md](field-dictionary.md) and the generated schema documentation.

## Removed fields

| Deleted field | Field ID | Former role / reason retired |
| --- | --- | --- |
| `Sync lock` | `fld2FMXFfXZvWmusX` | Migration-era Parent/Children synchronization helper; no longer required by the current workflow. |
| `Old Parent (snapshot)` | `fldin8alI3iroD3vI` | Migration-era parent snapshot superseded by the current Parent/Prev Parent workflow. |
| `Sub Record (old)` | `fldwmdBIc82Eh1dY` | Legacy child/sub-record relationship field superseded by canonical Parent/Children. |
| `Parent Record (old)` | `fld2jSfJXCnQ6om4s` | Legacy parent relationship field superseded by canonical Parent. |
| `Parent Record ID` | `fldLyK91qdIxuLmEC` | Legacy text/ID helper for the old parent-record implementation. |
| `Sub Record ID` | `fld5mS7DzLg9jvYmD` | Legacy text/ID helper for the old sub-record implementation. |
| `New Event Pending` | `fldApLf40QGEM6959` | Legacy recurrence state used by the child-record recurrence implementation. |
| `Last New Event Created` | `fldHbxMe4qrYab58w` | Legacy recurrence bookkeeping for creation of a new recurring child record. |
| `New Date` | `fldxf6StXUNmtoFLA` | Legacy recurrence date helper superseded by Next Recurrence Date. |
| `Anniversary Next Month` | `fldswvVa4Zg9U3MH8` | Legacy monthly recurrence helper superseded by Recurrence + Next Recurrence Date. |
| `Anniversary Next Year` | `fldNXbcEesjOSbmi8` | Legacy annual recurrence helper superseded by Recurrence + Next Recurrence Date. |
| `Month Add` | `fldI8V1IgUJtVXEbs` | Legacy monthly date-advance helper superseded by the unified recurrence formula. |
| `Year Add` | `fld9RYGrASD8NGn0w` | Legacy annual date-advance helper superseded by the unified recurrence formula. |
| `Pre-Filled Annual` | `fld8j3keQoDLBSMg6` | Formula URL for the old Add Annual Event form; obsolete after Annual was removed from Appt Type and recurrence moved to the same-record model. |

## Select choices removed, not fields

The following were **Appt Type select choices**, not deleted fields:

- `Annual`
- `Monthly`

They were removed because **Appt Type** now represents operational event classification only. Annual and Monthly remain valid values under **Recurrence**.

## Current replacements

The retired recurrence helpers are replaced by:

- **Recurrence** — Monthly, Annual, or Custom Days.
- **Next Recurrence Date** — computes the next scheduled Start Time.
- **New Event in Days** — retained for Custom Days recurrence.
- **Advance Recurring Event** — advances the existing record and preserves its identity and Google Calendar event.

The retired Parent/Sub Record fields are replaced by the active Parent/Children model:

- **Parent**
- **Children (do not edit)**
- **Prev Parent (new)**
- Airtable-maintained inverse linked-record fields associated with those links.
