# Google Sheets Integration Setup (Campaign-4)

Campaign-4 forms POST to `app/api/submit/route.ts`, which forwards each lead to a
Google Apps Script webhook. The Apps Script appends a row to your Google Sheet.

Target sheet:
https://docs.google.com/spreadsheets/d/1If_DraysugxVQVhgNVKUcM1dmL3ru_xAafUn0ZP5Llo/edit

## Setup (one time, ~5 minutes)

1. Open the Google Sheet linked above.
2. **Extensions → Apps Script**.
3. Delete the boilerplate, paste the entire contents of `google-apps-script.gs`
   (in this repo), then **Save**.
4. **Deploy → New deployment → Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Authorize when prompted, then copy the **Web app URL** (ends in `/exec`).
6. Add that URL to the project as the `WEBHOOK_URL` environment variable
   (Vercel Project Settings → Environment Variables, or the "Vars" panel in v0).

That's it. New submissions will append rows to the sheet.

## Data Flow

```
User submits Campaign-4 form (LeadFormC4 / BottomCtaC4)
        ↓
POST /api/submit  (app/api/submit/route.ts)
        ↓
GET  WEBHOOK_URL   (Apps Script /exec endpoint)
        ↓
Apps Script appends a row to the Google Sheet
```

## Columns Written

| Timestamp | Name | Email | Phone | Budget | Location | Source |
|-----------|------|-------|-------|--------|----------|--------|

`source` distinguishes where the lead came from (e.g. `lp4-hero`).

## Notes

- The route also attempts a Neon insert via `DATABASE_URL`. That is optional — if
  `DATABASE_URL` is not set, the DB insert is skipped and the Google Sheets webhook
  still runs. Both paths fail independently and silently, so one missing config
  never blocks the other.
- Phone numbers are sent with a leading space so Sheets stores them as text and
  does not turn a leading `+` into a formula error.

## Troubleshooting

- **No rows appearing?** Confirm `WEBHOOK_URL` is set and ends in `/exec`, and that
  the deployment's "Who has access" is **Anyone**.
- **403 / authorization errors?** Re-run the deployment and complete the Google
  authorization prompt.
- **Check logs:** the route logs `[submit] WEBHOOK_URL not set` when the variable is
  missing, and `[submit] Apps Script error: <status>` on a non-200 response.
