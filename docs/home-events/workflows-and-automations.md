# Home Events workflows and automations

**Scope:** deployed Home Events workflows observed in the live Home base on 2026-09-17. Automation names are live names; this is documentation, not an edit specification.

## Scheduled-event lifecycle

1. A record is created or scheduled with Title, Start Time, Status, Appt Type, and optional tags.
2. Time formulas calculate days/hours/seconds until and the **Alerts** label.
3. View-driven alert workflows deliver notifications when a record enters the applicable queue.
4. When the event is past, the relevant past-event workflow updates Status.
5. If Recurrence is present, **Advance Recurring Event** advances that same record to **Next Recurrence Date** and returns it to Scheduled.

## Recurrence

| Component | Live behavior |
| --- | --- |
| Recurrence | Holds cadence: Monthly, Annual, or Custom Days. |
| New Event in Days | Supplies the interval only for Custom Days recurrence. |
| Next Recurrence Date | Formula from Recurrence, Start Time, and New Event in Days. |
| Advance Recurring Event | Deployed; runs when a Completed recurring record enters **New Event in x Days (automation)**. It advances the same record rather than creating a child. |
| Cancellation | Distinct deployed flows exist for recurring and non-recurring cancellations. |
| Parent/Children | Separate workflow; it is not part of recurrence. |

Legacy recurrence automations that created new child records have been retired. Annual and Monthly are no longer Appt Type choices.

## Alerts

| Workflow | Trigger surface | Outcome |
| --- | --- | --- |
| Alerts to Send | **Alerts (Not RType=TV)** view | Runs custom logic and conditional notification actions. |
| 3 Hour Alert | **3 Hour Alert** view | Sends near-term notification logic. |
| Family Reminder | Weekly scheduled workflow | Finds records and conditionally sends reminder email. |
| Event Past (Not TV) / Event Past (TV) | Past-event views | Updates lifecycle state; non-TV path has additional conditional logic. |

**Alerts Trigger** is the per-record opt-in. The **Alerts** formula provides timing labels; changing either can change queue membership.

## Google Calendar

| Workflow | Trigger | Actions |
| --- | --- | --- |
| Add to GCal | Record enters **Add To GCal** | Create Google Calendar event, then update the Airtable record. |
| Update GCal? | Watched update in **All Records (Do not delete)** | Conditional update of calendar-sync state. |
| Update GCal Event | Record enters **Calendar Updates Check (Do not delete)** | Update the existing Google Calendar event, then update Airtable state. |
| New Gcal Event | Google Calendar event created | Finds and conditionally processes related records. |

Fields watched for updates include Description, Start Time, End Time, Title, Location, Participants, Attachments, Notes, and All Day Event?. Same-record recurrence retains **G Cal Event ID**, so the existing Google Calendar event is moved rather than replaced.

## Parent/Children

- **Parent** is the canonical parent self-link.
- **Sync Children from Parent** is deployed and runs when Parent is non-empty.
- **Children (do not edit)** is maintained by that workflow and should not be edited manually.
- **Prev Parent (new)** is automation state used to reconcile a changed parent relationship.
- Airtable-maintained inverse fields for Parent, Children, and Prev Parent are active structural fields and should be preserved.
- **Create Child Record** is deployed and accepts an input connection to intentionally create a related child record.
- This workflow is independent of recurring-event scheduling.

## Interfaces, forms, and views

Home Events is used in the **Events** and **Reports/Research** interfaces. Current pages include All Events, Event List, Home, Doctor Appts, Subscriptions, Current, Current (mobile), Equipment/Services, Remind Me, Programming, Consulting, and others.

Embedded forms include Event Form, Equipment Form, Current Record Form, Add Family Reminder, Add RemindMe, Add Word, and Add VIP Document. A standalone **Add Document** form also targets Home Events.

Automation-dependent views include:
- Add To GCal
- Calendar Updates Check (Do not delete)
- All Records (Do not delete)
- Alerts (Not RType=TV)
- 3 Hour Alert
- Past (Not TV), Past (TV)
- New Event in x Days (automation)
- Cancelled (recurring), Cancelled (not recurring)

The view **OLD fields still getting written** remains present as a legacy diagnostic name. It is not documented as a production dependency; inspect its current purpose before deciding whether to remove it.
