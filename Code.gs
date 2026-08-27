// Google Apps Script - Counter HP
// File utama untuk menjalankan web app

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Aplikasi Counter HP')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Include file HTML lain (untuk CSS dan JS)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Fungsi untuk menyimpan data ke Google Sheets (opsional)
function saveTransactionToSheet(transaction) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      // Jika belum ada spreadsheet, buat baru
      ss = SpreadsheetApp.create('Data Counter HP');
    }
    
    var sheet = ss.getSheetByName('Transaksi');
    if (!sheet) {
      sheet = ss.insertSheet('Transaksi');
      sheet.appendRow(['ID', 'Tanggal', 'Tipe', 'Pelanggan', 'No HP', 'Total', 'Metode Pembayaran']);
    }
    
    sheet.appendRow([
      transaction.id,
      new Date(transaction.date),
      transaction.type,
      transaction.customerName,
      transaction.customerPhone,
      transaction.total,
      transaction.paymentMethod || '-'
    ]);
    
    return {success: true};
  } catch (error) {
    return {success: false, error: error.toString()};
  }
}

function saveServiceToSheet(service) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      ss = SpreadsheetApp.create('Data Counter HP');
    }
    
    var sheet = ss.getSheetByName('Servis');
    if (!sheet) {
      sheet = ss.insertSheet('Servis');
      sheet.appendRow(['ID', 'Tanggal', 'Pelanggan', 'No HP', 'Device', 'Jenis Servis', 'Biaya', 'DP', 'Status']);
    }
    
    sheet.appendRow([
      service.id,
      new Date(service.date),
      service.customerName,
      service.customerPhone,
      service.device,
      service.serviceType,
      service.price,
      service.deposit,
      service.status
    ]);
    
    return {success: true};
  } catch (error) {
    return {success: false, error: error.toString()};
  }
}

// Fungsi untuk mendapatkan data dari sheet (opsional - untuk sync data)
function getTransactionsFromSheet() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return [];
    
    var sheet = ss.getSheetByName('Transaksi');
    if (!sheet) return [];
    
    var data = sheet.getDataRange().getValues();
    data.shift(); // Remove header
    
    return data;
  } catch (error) {
    return [];
  }
}
