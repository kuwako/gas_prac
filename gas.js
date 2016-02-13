function sendReport() {
  var sum = 0;
  var sheet = SpreadsheetApp.getActiveSheet();
  
  for (var i = 1; i <= sheet.getLastRow(); i++) {
    if (sheet.getRange(i, 2).getValue() >= 70) {
      sum++;
    }
  }
  
  MailApp.sendEmail("m.kuwako0702@gmail.com", "合格者数", "合格者は" + sum + "人です。");
  
}

function onEdit(e) {
  e.range.setComment("edited by: " + e.user.getEmail()); 
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [
    {name: "初期化", functionName: "initSheet"},
    {name: "判定", functionName: "getResults"}
   ];
  ss.addMenu("処理メニュー", menu);
}

function initSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ["taguchi", "fkoji", "dotinstall"];
  
  sheet.clear();
  for (var i = 1; i <= 20; i++) {
    sheet.getRange(i, 1).setValue(names[Math.floor(Math.random() * names.length)]); 
    sheet.getRange(i, 2).setValue(Math.floor(Math.random() * 101)); 
  }  
}

function getResults() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 1; i <= sheet.getLastRow(); i++) {
    if (sheet.getRange(i, 2).getValue() >= 70) {
      sheet.getRange(i, 3).setValue("OK").setBackground("green");
    } else {
      sheet.getRange(i, 3).setValue("NG").setBackground("red");
    }
  }  
 
}