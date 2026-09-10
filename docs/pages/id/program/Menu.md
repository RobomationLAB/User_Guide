---
title: Menu atas
---

# Menu atas

**Menu atas** mengumpulkan fungsi yang sering dipakai dalam program seperti menghubungkan dongle dengan robot serta menyimpan dan membuka berkas.  
Di bawah ini dijelaskan fungsi tiap menu secara berurutan. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Ini adalah logo program.  
Saat Anda mengeklik logo, halaman dimuat ulang. 

Saat **penyunting pemrograman blok** aktif, logo menampilkan tulisan **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Saat **penyunting Python** aktif, logo menampilkan tulisan **Script Composer**.  

<br>

## Dongle {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Anda dapat **mencari dongle yang berkomunikasi dengan robot lalu menghubungkannya ke program**.

Untuk mengendalikan robot di program, Anda harus lebih dulu menghubungkan dongle yang berkomunikasi dengan robot ke program.  
Proses ini disebut **penyandingan**. 

Saat Anda menekan tombol **Dongle**, daftar dongle yang tersedia di komputer saat ini ditampilkan.  
Pilih dongle yang diinginkan dari daftar lalu klik tombol **hubungkan**, maka dongle terhubung ke program.  

### Melihat keadaan koneksi dongle {#dongle-status}

Dongle yang pernah terhubung ke program akan terhubung otomatis pada pemakaian berikutnya.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Bila dongle terhubung ke program dengan benar, ikonnya berubah menjadi **biru muda**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Bila di tab peramban ada ikon seperti gambar berikut, Anda tahu bahwa dongle sedang terhubung.  

<br>

**⚠️ Perhatian**  

Bila dongle sudah terhubung ke program lain atau halaman lain, dongle tidak dapat terhubung ke program ini.  
Dalam hal itu, carilah program yang memegang dongle lalu putuskan koneksinya, kemudian kembali ke halaman ini dan coba hubungkan lagi.

<br>

## Robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Anda dapat **memilih robot yang akan dipakai di program** dan **mendaftarkan informasi serta blok/kode khusus robot itu**. 

Untuk mengendalikan robot di program, Anda harus lebih dulu menambahkan informasi dan blok robot yang dipakai ke program.

<BlockImage module="program/Menu" id="robot-select" /><br>

Saat Anda menekan tombol **Robot**, jendela sembul menampilkan daftar robot yang tersedia di program.  

Pilih robot yang diinginkan lalu klik tombol **Tambah**, maka informasi serta blok/kode khusus robot itu didaftarkan ke program.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Saat robot ditambahkan, hal berikut dibuat: 


- **Block Composer**: **blok** khusus robot itu dibuat di [**palet blok**](Editor#block-editor) sebelah kiri 
- **Script Composer**: **kode** khusus robot itu dibuat di [**palet kode**](Editor#python-editor) sebelah kiri

Dengan begitu Anda dapat menggerakkan dan mengendalikan perangkat keras robot yang sebenarnya seperti sensor, motor, dan LED sesuka hati.  

<br>

**⚙️ Catatan**

Di RobomationLAB Anda dapat menghubungkan dan memakai robot sebanyak yang Anda mau, tanpa batasan jenis dan jumlah robot.  

Namun, bila Anda ingin menghubungkan dan memakai beberapa robot sekaligus, dongle sebanyak jumlah robot yang dipakai harus terhubung ke program, dan robot sebanyak itu juga harus ditambahkan ke program.  

<br>

## Ekstensi {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Modul ekstensi adalah modul yang menyediakan **fungsi tambahan berbasis AI seperti pengenalan ucapan, pengenalan citra, dan analisis gambar**.  
Anda dapat **memilih modul ekstensi yang akan dipakai di program** dan **mendaftarkan informasi serta blok/kode khusus modul itu**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Saat Anda menekan tombol **Ekstensi**, muncul layar dengan jendela sembul berisi daftar modul ekstensi yang tersedia di program.  
- Ucapan ke Teks
- Deteksi Wajah
- Deteksi Wajah Terperinci
- Ekspresi Wajah
- Deteksi Tangan
- Deteksi Tubuh
- Deteksi Objek
- Deteksi Warna
- Deteksi Penanda ArUco
- Kamera Kemudi Otomatis

Saat Anda mengeklik modul yang diinginkan, informasi serta blok/kode khusus modul ekstensi itu didaftarkan ke program, sama seperti pada [**Robot**](#robot). 

Saat Anda menambahkan modul ekstensi yang memakai kamera seperti **Deteksi Wajah, Deteksi Tangan** ke program,  
sebuah modul kamera dibuat di tab [**Pratinjau - Kamera**](Preview#camera) dan Anda dapat menghubungkan kamera ke program.  

Bila modul ekstensi yang dipilih tidak diperlukan lagi, Anda dapat mengeluarkannya dari daftar lewat **klik kanan → Hapus**.

<br>

## Suara {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Anda dapat memilih suara untuk dipakai saat memprogram atau menambahkan sendiri suara yang ada di komputer ke program.

### Memilih suara {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Saat Anda menekan tombol **Suara**, muncul layar untuk memilih berbagai suara yang disediakan program.  
Anda dapat memakai fungsi berikut:  
- Mencari suara
- ▶ Mendengarkan pratinjau suara
- Menambahkan suara ke daftar suara (panel sebelah kiri)

### Fungsi tambahan {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Saat Anda mengeklik atau mengarahkan tetikus ke tombol **tambahan** (kotak merah) di kiri bawah, muncul tiga pilihan fungsi tambahan.  
Anda dapat memakai fungsi berikut:
- Menambahkan berkas lokal: menambahkan berkas audio yang ada di komputer Anda 
- Merekam suara: menambahkan suara dengan merekam sendiri
- Menambahkan suara acak: menambahkan satu suara yang dipilih acak dari seluruh daftar suara

### Memakai suara saat memprogram {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Suara yang sudah ditambahkan ke daftar suara (panel sebelah kiri) dapat dipakai saat memprogram.

- Pada **pemrograman blok**, Anda dapat memilih suara yang diinginkan dari menu daftar turun blok **putar suara**.  

- Pada **pemrograman dengan kode**, Anda dapat memilih suara yang diinginkan dari pilihan di bawah fungsi **'putar suara'** pada kategori **Kode - Audio**.  

Saat kode dijalankan, suara yang Anda pilih diputar lewat pengeras suara komputer Anda.

<br>

## Contoh {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Bila program sudah memiliki robot, Anda dapat membuka contoh-contoh sederhana tiap robot untuk dicoba.

### Memilih contoh {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Saat Anda menekan tombol Contoh, muncul layar **Pilih Contoh** seperti di atas.   
Dengan fungsi **pembagian kategori** dan **pencarian**, Anda dapat cepat menemukan contoh yang diinginkan. 

### Membuka contoh {#example-load}
1. Klik menu **Contoh** untuk membuka layar **Pilih Contoh**, lalu pilih contoh yang Anda inginkan. 
2. Layar dimuat ulang dan contohnya muncul di area pemrograman.   
3. Setelah membuka contoh, Anda cukup menekan **tombol jalankan (▶)** untuk melihat hasilnya tanpa perlu melakukan apa pun lagi. 

<br>

## Edit {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Ini adalah fungsi untuk membatalkan atau mengulangi tindakan.
- Salin (Ctrl+C): menyalin blok atau kode yang Anda pilih.
- Tempel (Ctrl+V): menempelkan blok atau kode yang disalin ke area kerja.
- Urungkan (Ctrl+Z): membatalkan tindakan sebelumnya.
- Ulangi (Ctrl+Y): menjalankan lagi tindakan yang dibatalkan. 

<br>

## File {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Anda dapat membuat kode baru, menyimpan kode yang ditulis sebagai berkas dan membukanya kembali, yaitu mengelola berkas.

- Baru  
Mengosongkan kode yang sedang Anda tulis dan membuat kode baru.

- Simpan Proyek  
Menyimpan berkas proyek yang sedang Anda kerjakan.  
Berkasnya disimpan ke folder 'Unduhan' di komputer Anda dengan ekstensi '.block'.

- Ekspor Kode Python  
Mengambil kode Python dari proyek yang sedang Anda kerjakan lalu menyimpannya sebagai berkas.  
Berkasnya disimpan ke folder 'Unduhan' di komputer Anda dengan ekstensi '.py'.  
Berkas yang tersimpan dapat Anda buka dan jalankan di lingkungan pengembangan Python luar seperti VSCode.

- Buka Proyek  
Membuka berkas proyek atau berkas kode Python yang ada di komputer Anda.  
Ekstensi berkas yang dapat dibuka adalah '.block' dan '.py'.  
Berkas '.block' dibuka di penyunting pemrograman blok, sedangkan berkas '.py' dibuka di penyunting Python.  
Saat membuka berkas '.py', bila kodenya tidak sesuai format kode Block Composer atau memuat galat sintaks, berkasnya bisa gagal dibuka; mohon diperhatikan.

<br>

## Menjalankan / menghentikan kode {#run-stop}

### Jalankan (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Menafsirkan lalu menjalankan kode blok atau kode Python yang ditulis di penyunting yang sedang aktif.  

Sesuai kode yang Anda tulis, Anda dapat mengendalikan robot yang terhubung ke program.  
Selama kode berjalan, Anda tidak dapat mengubah kode yang sudah ditulis.

### Berhenti (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Menghentikan jalannya kode.


<br>

## Pemrograman AI {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Saat Anda menekan tombol **Pemrograman AI** di menu atas, panel obrolan AI terbuka di sebelah kanan layar.  
Anda dapat berbincang dengan **chatbot AI** yang tertanam di RobomationLAB dan memprogram bersama AI.

Anda dapat memakai fungsi berikut:
- Bertanya bebas tentang pemrograman seperti cara menulis dan mengubah kode, sintaks, dan konsep.
- **Bila terjadi galat saat kode berjalan**, Anda dapat menanyakan penyebab dan cara mengatasinya kepada AI agar masalahnya cepat selesai.
- Kode yang diberikan AI dapat Anda salin dengan mudah lewat tombol salin di sebelah kanan blok kode.
- Isi percakapan disimpan sehingga Anda dapat melanjutkannya, dan Anda juga dapat memulai **percakapan baru**.
- Anda dapat menyeret tepi kiri panel untuk mengatur lebarnya.

<br>

## Salin Kode {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Anda dapat menyalin ke papan klip kode yang ditulis di penyunting yang sedang aktif.  

### Block Composer (pemrograman blok) {#copy-block}

Kode Python yang ditampilkan di tab **[Pratinjau Python](Preview#python-preview)** yang disalin.

### Script Composer (Python) {#copy-python}
Kode yang ada di penyunting Python disalin apa adanya.  

Kode yang disalin dapat Anda tempelkan ke tempat yang diinginkan dengan Ctrl+V.

<br>

## Pemilihan penyunting {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Anda dapat memilih penyunting yang diinginkan antara **Blok** dan **Python** untuk memprogram.  

Meskipun Anda mengganti penyunting, kode yang ditulis sebelumnya tetap dipertahankan dan Anda dapat melanjutkan memprogram kapan saja. 

**※ Penyunting pemrograman blok dan penyunting Python berpadanan satu lawan satu; saat Anda berganti penyunting, kode yang ditulis dikonversi timbal balik dan tetap ada.**

### Penyunting pemrograman blok {#editor-settings-block}
Bila Anda memilih Blok, logonya berubah menjadi **Block Composer**.  
Blok yang Anda tulis di penyunting pemrograman blok diubah menjadi kode Python secara waktu nyata, dan hasil konversinya dapat Anda lihat di tab **Pratinjau - Pratinjau Python**.  

### Penyunting Python {#editor-settings-python}
Bila Anda memilih Python, logonya berubah menjadi **Script Composer**.  
Kode yang Anda tulis di penyunting Python akan diubah menjadi blok saat Anda kembali ke **penyunting pemrograman blok**.  

> Namun, konversi Python → blok hanya berlaku untuk kode yang dapat dinyatakan dengan blok.  
> Bila sintaksnya salah atau kodenya tidak dapat diubah menjadi blok, peralihan ke penyunting pemrograman blok bisa gagal, dan dalam hal itu alasan kegagalannya juga ditampilkan.

<br>

## Pengaturan {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Anda dapat melakukan pengaturan dasar program.

### Bahasa {#settings-language}
Mengubah bahasa (negara) yang ditampilkan di program.  
Anda dapat memilih bahasa yang ingin dipakai dari total 21 bahasa.

### Dongle {#settings-dongle}
- Putuskan: memutus koneksi semua dongle yang terhubung ke program.
- Hubungkan: menghubungkan lagi dongle ke program.

### Atur ulang {#settings-reset}
- Atur Ulang Program: semua data yang terdaftar di program (informasi robot, blok/kode, pengaturan, dan sebagainya) diatur ulang.

<br>

## Dukungan {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Anda dapat melihat panduan dan bahan luar yang diperlukan untuk memakai program.  

- Tutorial: menyediakan tutorial bagi orang yang baru pertama kali memakai program.
- Bantuan: Anda dapat langsung melihat cara pakai dan contoh blok serta kode Python di dalam program.
- Panduan Pengguna: menuju halaman Wiki panduan penggunaan RobomationLAB.  
Halaman itu menjelaskan secara terperinci bagian-bagian dan cara memakai program, serta fungsi dan sintaks tiap blok/kode.
- Lab Robomation: menuju halaman utama RobomationLAB.
- Beranda: menuju laman resmi perusahaan Robomation.
- YouTube: menuju laman YouTube Robomation.
- Pusat Perbelanjaan: menuju laman belanja Robomation.
- Tentang: Anda dapat melihat versi dan riwayat pembaruan program, syarat penggunaan, dan kebijakan privasi.
- Hubungi Kami: Anda dapat menanyakan hal yang ingin diketahui atau melaporkan galat saat memakai program.

<br>
