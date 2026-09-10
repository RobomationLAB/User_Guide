---
title: Penyunting
---

# Penyunting

**Penyunting** adalah area untuk menulis kode pengendali robot memakai **blok** atau **kode**.  
Di bawah ini diperkenalkan cara memprogram di lingkungan **pemrograman blok / pemrograman dengan kode (Python)** beserta hal-hal yang perlu diperhatikan.

## Penyunting pemrograman blok {#block-editor}

### Kategori blok {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Ini adalah area tempat blok-blok yang disediakan RobomationLAB dikelompokkan ke dalam **kategori**.  
Saat Anda mengeklik sebuah kategori, Anda dapat melihat **palet blok** kategori itu.  

Kategori blok yang disediakan sebagai bawaan adalah:  

- Logika
- Perulangan
- Matematika
- Teks
- Daftar
- Warna
- Audio
- Kontrol
- Variabel
- Fungsi
- Lainnya

Selain itu, saat Anda menambahkan [**Robot**](Menu#robot) atau [**Ekstensi**](Menu#extension) ke program, Anda juga dapat memakai palet blok khusus milik modul itu.  

<br>

**⚙️ Catatan**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategori blok yang sudah Anda tambahkan ke program tetapi tidak dipakai lagi dapat Anda keluarkan dari daftar kategori blok lewat **klik kanan → Hapus**.

<br>

### Palet blok {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Ini adalah area yang mengumpulkan seluruh blok tiap kategori.  
Blok di palet blok dapat Anda pindahkan ke area pemrograman dengan cara **seret dan lepas**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Catatan**  
Bila Anda ingin tahu cara memakai sebuah blok, Anda dapat membuka halaman bantuan yang menjelaskan cara pakai tiap blok lewat **klik kanan → Bantuan**.  

<br>

### Area pemrograman {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Ini adalah area untuk merangkai blok yang Anda ambil dari palet blok.  


Blok yang dirangkai diubah menjadi **kode Python** secara waktu nyata,  
dan saat Anda menjalankan kodenya, kode itu ditafsirkan untuk menggerakkan dan mengendalikan robot.  

<br>

### Struktur dasar blok {#block-structure}

Saat memprogram di penyunting pemrograman blok, Anda harus mematuhi struktur dasar berikut.

<BlockImage module="program/Editor" id="block-structure" /><br>

Penyunting pemrograman blok hanya menafsirkan dan menjalankan kode yang ada di dalam blok fungsi **fungsi setup** dan **fungsi loop**.  
Karena itu, Anda harus menulis kode dengan meletakkan blok di dalam blok fungsi **fungsi setup** dan **fungsi loop**.  

**fungsi setup**  
Di dalam blok fungsi setup, Anda mendefinisikan tindakan yang dikerjakan paling awal saat kode dijalankan.  
Dengan blok **tunggu**, Anda dapat membuat tindakan-tindakan itu dikerjakan menurut urutan waktu.  

**fungsi loop**  
Di dalam blok fungsi loop, Anda mendefinisikan tindakan yang dikerjakan berulang selama kode berjalan.  
Tindakan yang didefinisikan dikerjakan berulang setiap 10 ms sekali.  

**⚙️ Catatan**  
(Kecuali fungsi buatan sendiri yang Anda buat lewat **kategori Fungsi**)  
Blok yang berada di luar blok fungsi **fungsi setup** atau **fungsi loop** tidak berpengaruh apa pun saat kode dijalankan.  

<br>

### Cara memakai blok {#block-usage}

**Menambahkan blok**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Saat Anda **menyeret blok yang ingin ditambahkan dari palet blok** lalu **melepasnya di penyunting**, blok itu ditambahkan.   
<br>

**Menyalin/menempelkan blok**  

Ada dua cara menyalin dan menempelkan blok di penyunting.  

1. Pilih blok lalu tekan **Ctrl+C**, maka blok yang dipilih **disalin**.  
Tekan **Ctrl+V**, maka blok yang terakhir disalin **ditempelkan** ke penyunting.  

2. Pilih blok lalu tekan tombol **'Salin Ctrl+C'** di menu **Edit**, maka blok yang dipilih **disalin**.  
Tekan tombol **'Tempel Ctrl+V'** di menu **Edit**, maka blok yang terakhir disalin **ditempelkan** ke penyunting.

<br>

**Menghapus blok**  

Ada tiga cara menghapus blok di penyunting.

1. Pilih blok lalu tekan tombol **Backspace**, maka blok yang dipilih terhapus.<br>  

2. Saat Anda **menyeret blok yang ingin dihapus di penyunting** lalu **melepasnya di area kategori blok**, blok itu terhapus.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Saat Anda **menyeret blok yang ingin dihapus di penyunting** lalu **melepasnya di tempat sampah**, blok itu terhapus.  
Blok yang dihapus dapat Anda lihat lagi di **tempat sampah**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Memilih beberapa blok sekaligus**  

Ada dua cara memilih beberapa blok sekaligus di penyunting.

1. Sambil menahan tombol **Shift**, seret di area kerja atau klik blok satu per satu,  
maka Anda dapat memilih beberapa blok sekaligus.  

2. Klik **tombol centang** di kanan bawah area kerja untuk menyalakan atau mematikan mode 'pilih beberapa blok'.  
Bila tombolnya terisi warna, modenya sedang menyala.  
Bila tombolnya tidak terisi warna, modenya sedang mati.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Selama mode 'pilih beberapa blok' menyala, Anda hanya dapat melakukan pemilihan blok.   
Untuk memindahkan atau menyunting beberapa blok yang dipilih sekaligus, Anda harus mematikan modenya setelah selesai memilih.  

<br>

**Pilihan tambahan**

Selain itu, saat Anda **mengeklik kanan** sebuah blok,  
Anda dapat melihat berbagai pilihan tambahan seperti **menciutkan/membentangkan blok, mengaktifkan/menonaktifkan, dan bantuan**.  

<br>

## Penyunting Python {#python-editor}

### Palet kode {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Ini adalah area tempat **fungsi dasar** yang diperlukan untuk pemrograman robot dan **kode Python** khusus robot/modul ekstensi dikelompokkan ke dalam **kategori**.  


Kategori kode yang disediakan pada fungsi dasar (Kode) adalah:  

- Logika (logic)
- Perulangan (loops)
- Matematika (math)
- Teks (text)
- Daftar (lists)
- Warna (color)
- Audio (audio)
- Kontrol (control)

Kode pada fungsi dasar melakukan hal yang persis sama dengan blok dasar di penyunting pemrograman blok.  

<br>

**⚙️ Catatan**  
Cara memakai palet kode untuk memprogram di penyunting Python dapat Anda lihat di [**Cara memakai palet kode**](#python-codes-usage).

<br>

### Penyunting kode {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Ini adalah area untuk menulis kode pengendali robot.  


Bila Anda memilih penyunting **Python** di [**Pemilihan penyunting**](Menu#editor-settings), Anda dapat menulis kode Python.

<br>

### Struktur dasar kode {#python-structure}

Saat memprogram di penyunting kode, Anda harus mematuhi struktur dasar berikut.

```python
from robomation import *

# (bila ada robot yang dipakai, deklarasikan sebagai instans, contoh)
hamster_s = HamsterS(0)

# letakkan kode setup di sini, untuk dijalankan sekali:
def setup():
    pass

# letakkan kode kontrol di sini, untuk dijalankan berulang kali:
def loop():
    pass
```

Penyunting kode hanya menafsirkan dan menjalankan kode yang ada di dalam fungsi **setup** dan **loop**.  
Karena itu, Anda harus menulis kode di dalam fungsi **setup** dan **loop**.  
Selain itu, untuk mengendalikan robot, Anda harus meletakkan `from robomation import *` di bagian paling atas kode dan mendeklarasikan robot yang dipakai sebagai instans.

**setup**  

Di dalam fungsi setup, Anda mendefinisikan tindakan yang dikerjakan paling awal saat kode dijalankan.  
Dengan fungsi **Utils.wait**, Anda dapat membuat tindakan-tindakan itu dikerjakan menurut urutan waktu.  

**loop**  
Di dalam fungsi loop, Anda mendefinisikan tindakan yang dikerjakan berulang selama kode berjalan.  
Tindakan yang didefinisikan dikerjakan berulang setiap 10 ms sekali.  


<br>

### Cara memakai palet kode {#python-codes-usage}

Di bawah ini dijelaskan **cara memakai palet kode saat memprogram** beserta contoh sederhana.  

### Menemukan kode yang Anda cari {#python-codes-find}

Palet kode menyediakan berbagai fungsi dan kode yang diperlukan untuk pemrograman robot.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Saat Anda memeriksa menu di dalam kategori **Kode**, Anda melihat menu yang punya ikon <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Saat Anda mengeklik menu **Logika** sekali, ikonnya berubah menjadi <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> dan **submenu** di dalamnya terbentang.  
Menu yang punya submenu seperti itu disebut '**kategori**'.  

Bila sebuah menu seperti **ternari** di dalam kategori **Logika** tidak punya ikon <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, artinya di dalam menu itu **tidak ada submenu lagi**.  
Menu yang tidak punya submenu seperti itu disebut '**kode**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Saat Anda mengeklik lagi kategori yang submenunya sedang terbentang, ikonnya kembali menjadi <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> dan submenunya tersembunyi.  

Dengan menyusuri kategori seperti itu, Anda dapat menemukan kode yang Anda cari di palet kode.

<br>

### Menyisipkan kode ke penyunting {#python-codes-insert}

Cara menyisipkan kode ke penyunting adalah sebagai berikut.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Menu yang punya ikon <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> di sebelah kiri namanya berarti menu itu tidak punya **pilihan kode** yang dapat dipilih.  
Sebagian besar menu **kategori** yang punya submenu memang seperti itu.

Menu yang punya ikon <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> di sebelah kiri namanya berarti menu itu punya **pilihan kode** yang dapat dipilih.  
Sebagian besar menu **kode** yang tidak punya submenu memang seperti itu.

Saat Anda **mengeklik kanan** kode yang ingin disisipkan ke penyunting, Anda dapat melihat pilihan yang tersedia.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Saat Anda mengeklik kanan sebuah menu **kode**, Anda melihat pilihan yang sama berikut ini, tanpa membedakan fungsi dasar dan kode khusus robot/modul ekstensi.

- **Sisipkan Kode**: menyisipkan kode yang dipilih ke posisi kursor di penyunting.
- **Bantuan**: membuka halaman bantuan yang menjelaskan cara memakai kode itu.
- **Batal**: menutup menu pilihan.

Untuk kode khusus robot/modul ekstensi, saat Anda memilih **Sisipkan Kode**, kodenya disisipkan dalam bentuk pemanggilan metode instans robot itu.  
( contoh: kode `set_wheel_speed` milik Hamster S → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Catatan**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Kategori kode khusus robot / modul ekstensi yang sudah Anda tambahkan ke program tetapi tidak dipakai lagi  
dapat Anda keluarkan dari palet kode lewat **klik kanan → Hapus**.

<br>
