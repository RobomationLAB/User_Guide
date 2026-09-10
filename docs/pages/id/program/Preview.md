---
title: Pratinjau
---

# Pratinjau

**Pratinjau** adalah area untuk melihat **keadaan koneksi robot** dan membantu pemrograman robot lewat kode, kamera, dan konsol.  
Di bawah ini dijelaskan fungsi yang dapat Anda pakai di tiap tab.

## Keadaan koneksi robot {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Di tab Koneksi Anda dapat melihat informasi robot yang sedang terhubung.   
Saat Anda mengeklik **Tampilkan Nilai Sensor Real-Time**, Anda dapat memantau nilai sensor robot secara waktu nyata lewat grafik atau angka.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Anda dapat memilih sensor yang ingin dilihat; jenis sensor yang didukung berbeda-beda pada tiap robot.  
Sesuai sensor yang Anda pilih, cara menampilkan grafik dan data otomatis berubah agar cocok dengan nilai sensor itu. 

2. Anda dapat memilih setiap berapa detik nilai sensor dibaca atau direkam.  
Sesuai selang yang Anda pilih, waktu terpanjang untuk merekam data dan menampilkannya di grafik akan berbeda. 
3. Saat Anda mengarahkan tetikus ke grafik sensor, Anda dapat sekalian melihat nilai sensor pada saat itu. 
4. Mulai/hentikan perekaman: merekam data sensor. 
5. Ekspor: menyimpan data sensor yang direkam (.csv) dan gambar grafiknya (.png) sebagai berkas.  
Fungsi ini hanya dapat dipakai setelah data direkam. 
6. Tangkap layar: langsung menyimpan gambar grafik saat ini (.png).  
Anda dapat merekam perubahan nilai sensor lalu menyimpan berkas data yang direkam beserta gambar grafiknya sebagai berkas.    

<br>

## Pratinjau Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Di Pratinjau Python Anda dapat melihat secara waktu nyata bagaimana penambahan atau penghapusan blok diubah menjadi kode **Python**.  
Sambil melihat bagaimana blok diubah menjadi kode, Anda dapat mempelajari sintaks pemrograman dengan lebih mudah. 

※ Pratinjau Python hanya tersedia di **penyunting pemrograman blok**.  
Di penyunting Python, pengguna menulis kodenya sendiri sehingga pratinjau tidak disediakan.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Di tab Kamera Anda dapat melihat tampilan kamera yang terhubung ke komputer secara waktu nyata.  

Fungsi ini hanya aktif **bila Anda sudah menambahkan modul ekstensi yang memakai kamera ke program**, dan sebuah modul kamera dibuat di tab Kamera.  

Pada tiap modul kamera Anda dapat melakukan hal berikut:
- Memilih salah satu kamera yang tersedia di komputer saat ini untuk menampilkan gambarnya.
- Memakai tombol **Nyala / Mati** untuk menampilkan atau menghentikan tampilan kamera.
- Mengubah **resolusi kamera**.

<br>

## Konsol {#console}

Di tab Konsol Anda dapat memantau secara waktu nyata pesan log (Log) dan grafik (Scope) yang dikeluarkan selama program berjalan.  
Tab ini dipakai untuk penelusuran galat, pemantauan nilai sensor, dan analisis berbasis grafik.  

### Log {#console-log}
Dengan blok **log tag**, Anda dapat menampilkan teks atau nilai angka beserta tag yang ditentukan ke area log konsol.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Grafik {#console-scope}

Dengan blok **grafik tag**, Anda dapat menyajikan nilai angka per tag sebagai **grafik waktu nyata**.  
Anda dapat mengatur nilai minimum, nilai maksimum, dan warna grafik untuk memantau perubahan nilai yang Anda inginkan secara visual. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
