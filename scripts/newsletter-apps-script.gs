// Paste this into Extensions > Apps Script on the newsletter Google Sheet,
// then deploy as a Web App (Execute as: Me, Who has access: Anyone).
// Copy the deployment URL into GOOGLE_SHEETS_WEBHOOK_URL in .env.local.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var email = (data.email || "").toString().trim();

  if (!email) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "Missing email" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([new Date(), email]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
