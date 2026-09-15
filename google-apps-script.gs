/**
 * Google Apps Script webhook for capturing landing-page leads into a Google Sheet.
 *
 * Target sheet:
 *   https://docs.google.com/spreadsheets/d/1If_DraysugxVQVhgNVKUcM1dmL3ru_xAafUn0ZP5Llo/edit
 *
 * The Next.js route (app/api/submit/route.ts) sends a GET request with these
 * query params: name, email, phone, budget, location, source.
 *
 * SETUP
 * 1. Open the target Google Sheet.
 * 2. Extensions -> Apps Script.
 * 3. Delete any boilerplate, paste this whole file, Save.
 * 4. Deploy -> New deployment -> type "Web app".
 *      - Execute as:  Me
 *      - Who has access:  Anyone
 * 5. Copy the "Web app URL" (ends in /exec).
 * 6. Add it to the project as the WEBHOOK_URL environment variable.
 */

// If your sheet tab is not the first one, set its name here.
var SHEET_NAME = ''

function doGet(e) {
  return handle(e)
}

function doPost(e) {
  return handle(e)
}

function handle(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0]

    // Add a header row once, if the sheet is empty.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Budget', 'Location', 'Source'])
    }

    var p = (e && e.parameter) ? e.parameter : {}

    sheet.appendRow([
      new Date(),
      p.name     || '',
      p.email    || '',
      p.phone    || '',
      p.budget   || '',
      p.location || '',
      p.source   || '',
    ])

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
