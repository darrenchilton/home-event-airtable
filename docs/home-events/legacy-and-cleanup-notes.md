# Home Events legacy and cleanup notes

This page records current maintenance observations and historical context. It does **not** authorize future cleanup.

## Completed September 2026 cleanup

The recurrence and Parent/Children cleanup described in the older repository documentation has been completed.

- **Recurrence** is now the sole scheduling-cadence field: Monthly, Annual, or Custom Days.
- Annual and Monthly were removed from **Appt Type** after Scheduled records were reclassified to operational Appt Type values.
- Historical Annual/Monthly Appt Type values were cleared when those obsolete select choices were removed.
- Recurring events now advance the same Airtable record through **Advance Recurring Event** and **Next Recurrence Date**.
- The old child-record recurrence implementation and its dedicated helper fields, views, and automations were retired.
- Parent/Children remains an intentional, independent linked-record workflow.
- The Parent/Children fields that remain are current and should be preserved: **Parent**, **Children (do not edit)**, **Prev Parent (new)**, and their Airtable-maintained inverse linked-record fields.

See [deleted-fields.md](deleted-fields.md) for the explicit inventory of fields removed during this cleanup.

## Legacy documentation conflict

The repository's older root-level documentation predates the September 2026 migration. It can describe Annual/Monthly as Appt Type values, recurrence through child-event creation, and the Parent/Sub Record migration as unfinished. Those statements are historical and must not be used as the current operating model.

These files remain preserved as historical reference:
- `readme.fields.md`
- `readme.views.md`
- `readme.automations.md`

The current source for Home Events operating behavior is this `docs/home-events/` documentation set.

## Remaining items requiring evidence before change

| Item | Why it still requires caution | Required before any change |
| --- | --- | --- |
| Monthly/Annual interface page name | Uses terminology now reserved for Recurrence, but may still be useful as a recurrence-focused page. | Inspect page purpose and filters before renaming. |
| Temp / Force / helper fields | Some may be live controls or automation intermediates. | Trace deployed automations, views, forms, and interfaces by field ID. |
| Older Google Calendar helper fields | Calendar integration includes current state fields plus older-looking helpers. | Confirm live automation references and record usage. |
| `OLD fields still getting written` view | Name reflects the completed legacy-field migration and may now be obsolete. | Inspect its current fields/filter and confirm no remaining operational purpose before removal. |

## Known constraints

- Do not delete, rename, or reclassify fields based on documentation alone.
- Treat views named **(automation)** or **(Do not delete)** as production dependencies unless a live dependency audit proves otherwise.
- Field status in the dictionary is a maintenance label, not permission to modify.
