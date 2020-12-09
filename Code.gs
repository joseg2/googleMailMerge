function sendMergeMail() {
  
  // datbase column matching
  var first = 0;
  var last = 1;
  var email = 2;
  var phone = 3;

  var emailTemp = HtmlService.createTemplateFromFile("email");

  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Customers");
  var wsSettings = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Settings");

  var Subject = wsSettings.getRange("B1").getValue();
  var SenderName = wsSettings.getRange("B2").getValue();
  var NonHTMLMessage = wsSettings.getRange("B3").getValue();

  var data = ws.getRange("A2:E" + ws.getLastRow()).getValues();

  // Filter only rows where column 4 is ticked (true)
  data = data.filter(function(r){ return r[4] == true});

  data.forEach(function(row){
    // html template matching
    emailTemp.PHONE = row[phone];
    emailTemp.FIRSTNAME = row[first];
    emailTemp.LASTNAME = row[last];
    emailTemp.EMAIL = row[email];

    var htmlMessage = emailTemp.evaluate().getContent();
    GmailApp.sendEmail(
      row[email],
      Subject,
      NonHTMLMessage,
      {name: SenderName, htmlBody: htmlMessage}
      );
  });
}
