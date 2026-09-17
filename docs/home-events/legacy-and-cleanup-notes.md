# Home Events legacy and cleanup notes

This page records observations and risks. It does **not** approve or direct cleanup.

## Confirmed current decisions

- Annual and Monthly do not belong in **Appt Type**. They belong in **Recurrence**.
- Scheduled records were reclassified only where their operational classification was clear.
- Historical Annual/Monthly values could be removed when those select options were removed.
- No further classification rule should be inferred, and no cleanup should occur without explicit approval.

## Legacy documentation conflict

The repository's older root-level documentation predates the recurrence migration. It describes Annual/Monthly as Appt Type values and describes recurrence through child-event creation. Do not rely on those statements for operating behavior.

These files remain preserved as historical reference:
- `readme.fields.md`
- `readme.views.md`
- `readme.automations.md`

## Cleanup candidates requiring evidence

| Item | Why it is a risk | Required before any change |
| --- | --- | --- |
| Sub Record (old) and related older relationship concepts | Previously found in diagnostic dependencies and interface elements. | Full dependency audit of views, interfaces, and deployed automations. |
| Children relationship variants | `Children (do not edit)`, `From field: Children (new)`, and canonical Parent-related inverses coexist. | Confirm actual writers/readers and migration target. |
| Monthly/Annual interface page name | Uses terminology now reserved for Recurrence. | Inspect page filters and user purpose; rename only with approval. |
| Temp / Force / helper fields | Some may be live controls or automation intermediates. | Trace automations and interfaces by field ID, not by name. |
| Older Google Calendar helper fields | Calendar integration includes both current state fields and older helpers. | Confirm live automation references and record usage. |

## Known constraints

- Do not delete, rename, or reclassify fields based on documentation alone.
- Treat views named **(automation)** or **(Do not delete)** as production dependencies.
- Treat **OLD fields still getting written** as an active diagnostic until a read-only audit proves otherwise.
- Field status in the dictionary is a maintenance label, not permission to modify.
