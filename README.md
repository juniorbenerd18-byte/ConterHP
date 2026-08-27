# 📱 Aplikasi Counter HP

Aplikasi web untuk manajemen counter HP yang mencakup penjualan produk dan layanan servis.

## 🎯 Fitur Utama

### 1. **Penjualan** 🛒
- Katalog produk dengan kategori:
  - Smartphone
  - Aksesoris (Charger, Kabel, Headset, Tempered Glass, Casing, Power Bank, dll)
  - Pulsa & Paket Data
- Keranjang belanja dengan kontrol quantity
- Sistem diskon
- Multiple metode pembayaran (Tunai, Transfer, QRIS, Debit)
- Perhitungan kembalian otomatis
- Cetak nota/struk
- Manajemen stok otomatis
- Data pelanggan (opsional)

### 2. **Servis** 🔧
- Form penerimaan servis dengan detail lengkap:
  - Ganti LCD
  - Ganti Baterai
  - Perbaikan Software
  - Flashing
  - Service Charging
  - Dan servis lainnya
- Tracking status servis:
  - Diterima
  - Dalam Proses
  - Menunggu Sparepart
  - Selesai
  - Diambil
- Sistem DP/Uang Muka
- Estimasi biaya dan waktu selesai
- Nomor nota unik untuk setiap servis
- Pencarian servis berdasarkan nama/HP/nota

### 3. **Riwayat Transaksi** 📋
- Daftar lengkap semua transaksi
- Filter berdasarkan:
  - Tanggal (dari - sampai)
  - Tipe transaksi (penjualan/servis)
  - Pencarian keyword
- Detail transaksi lengkap

### 4. **Laporan & Statistik** 📊
- Laporan periode: Hari Ini, Minggu Ini, Bulan Ini, Tahun Ini
- Statistik:
  - Total penjualan
  - Pendapatan servis
  - Jumlah transaksi
  - Servis aktif
- Produk terlaris
- Jenis servis terbanyak

## 🚀 Cara Menggunakan

### Instalasi
1. Download semua file (index.html, style.css, app.js)
2. Letakkan di satu folder
3. Buka file `index.html` di browser

**Tidak perlu instalasi server atau database!** Aplikasi ini menggunakan Local Storage browser untuk menyimpan data.

### Panduan Penggunaan

#### **Melakukan Penjualan:**
1. Klik tab "🛒 Penjualan"
2. Pilih kategori produk atau gunakan pencarian
3. Klik produk untuk menambahkan ke keranjang
4. Atur quantity dengan tombol +/-
5. Tambahkan diskon jika diperlukan (%)
6. Isi nama dan nomor HP pelanggan (opsional)
7. Klik "💳 Proses Pembayaran"
8. Pilih metode pembayaran
9. Masukkan uang yang diterima
10. Klik "✅ Konfirmasi Pembayaran"
11. Cetak nota jika diperlukan

#### **Menerima Servis:**
1. Klik tab "🔧 Servis"
2. Isi form penerimaan servis:
   - Nama pelanggan (wajib)
   - No. HP (wajib)
   - Merk & Tipe HP (wajib)
   - Pilih jenis servis
   - Deskripsikan keluhan
   - Estimasi biaya (akan muncul otomatis sesuai jenis servis)
   - DP/Uang Muka
   - Estimasi tanggal selesai
   - Status awal
3. Klik "💾 Simpan Servis"
4. Catat nomor nota untuk pelanggan

#### **Update Status Servis:**
1. Pada daftar servis aktif, klik "Update Status"
2. Pilih status baru (1-5)
3. Atau klik "Selesai" untuk menyelesaikan servis dan menandai sebagai lunas

#### **Melihat Riwayat:**
1. Klik tab "📋 Riwayat"
2. Gunakan filter tanggal dan tipe transaksi
3. Gunakan pencarian untuk menemukan transaksi tertentu

#### **Melihat Laporan:**
1. Klik tab "📊 Laporan"
2. Pilih periode laporan yang diinginkan
3. Lihat statistik penjualan, servis, dan produk terlaris

## 💾 Penyimpanan Data

Aplikasi ini menggunakan **Local Storage** browser untuk menyimpan:
- Data transaksi penjualan
- Data servis
- Riwayat semua transaksi

**⚠️ Catatan Penting:**
- Data tersimpan di browser lokal
- Jika browser cache dihapus, data akan hilang
- Untuk backup data, export data dari browser Developer Tools > Application > Local Storage
- Sebaiknya gunakan browser yang sama untuk konsistensi data

## 🎨 Tampilan Responsif

Aplikasi ini responsive dan dapat digunakan di:
- 💻 Desktop/Laptop
- 📱 Tablet
- 📱 Smartphone

## 🔧 Kustomisasi

### Mengubah Data Produk
Edit file `app.js` pada bagian array `products`:

```javascript
let products = [
    { 
        id: 1, 
        name: 'Nama Produk', 
        category: 'smartphone', // atau 'aksesoris', 'pulsa'
        price: 1000000, 
        stock: 10, 
        icon: '📱' 
    },
    // tambahkan produk lainnya...
];
```

### Mengubah Info Counter di Nota
Edit file `app.js` pada fungsi `showReceipt()`:

```javascript
<h2>COUNTER HP</h2>
<p>Jl. Contoh No. 123</p>
<p>Telp: 0812-3456-7890</p>
```

### Mengubah Estimasi Harga Servis
Edit file `app.js` pada fungsi `updateServicePrice()`:

```javascript
const prices = {
    'Ganti LCD': 500000,
    'Ganti Baterai': 200000,
    // ubah atau tambahkan harga servis...
};
```

## 🌟 Keunggulan

✅ **Mudah digunakan** - Interface yang intuitif dan user-friendly  
✅ **Tanpa instalasi rumit** - Langsung buka di browser  
✅ **Offline capable** - Tidak memerlukan koneksi internet  
✅ **Gratis** - Tidak ada biaya berlangganan  
✅ **Responsive** - Bisa digunakan di HP, tablet, atau komputer  
✅ **Lengkap** - Mencakup penjualan dan servis dalam satu aplikasi  
✅ **Auto calculation** - Perhitungan otomatis untuk semua transaksi  
✅ **Print ready** - Siap untuk mencetak nota  

## 📝 Catatan Tambahan

- Aplikasi ini cocok untuk counter HP skala kecil hingga menengah
- Untuk skala besar dengan multi-user, disarankan menggunakan sistem berbasis server
- Data stok produk akan berkurang otomatis setelah penjualan
- Nomor nota dibuat unik berdasarkan timestamp
- Semua nominal menggunakan format Rupiah (Rp)

## 🆘 Troubleshooting

**Data hilang setelah reload?**
- Pastikan tidak menggunakan mode Incognito/Private
- Cek apakah browser mengizinkan Local Storage
- Jangan clear browser cache/data

**Nota tidak bisa dicetak?**
- Pastikan printer terhubung
- Gunakan fungsi print browser (Ctrl+P)
- Cek print preview sebelum mencetak

**Tampilan tidak responsive?**
- Refresh halaman (F5)
- Pastikan menggunakan browser modern (Chrome, Firefox, Edge terbaru)
- Clear cache browser

## 📄 Lisensi

Aplikasi ini bersifat open source dan dapat dimodifikasi sesuai kebutuhan.

## 👨‍💻 Pengembang

Dibuat dengan ❤️ untuk memudahkan pengelolaan counter HP

---

**Selamat menggunakan! Semoga aplikasi ini membantu meningkatkan efisiensi bisnis counter HP Anda.** 🚀
