function setData() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadSheet.getActiveSheet();
  var range = sheet.getRange("A1");
  
  range.setValue(100);
}