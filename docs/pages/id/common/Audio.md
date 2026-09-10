---
title: Audio
---

# Audio

Dengan blok audio, Anda dapat memutar berbagai efek suara dan suara ucapan.


## Memutar suara {#play_sound}

Memutar suara yang diinginkan dengan **volume** yang ditentukan.  
Saat Anda mencentang kotak **ulangi**, suara yang dipilih diputar berulang terus-menerus.

<BlockImage module="common/audio" id="play_sound" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| clip | Pilihan daftar turun | Nama klip suara | Nama klip di pustaka suara | - |
| volume | Nilai masukan (bidang) | Volume | bilangan bulat 0 sampai 100 | 100 |
| repeat | Kotak centang | Diulang atau tidak | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Mengatur bahasa dan suara {#set_tts}

Mengatur **bahasa** dan **suara** yang dipakai untuk memutar **TTS**.  
Anda dapat memilih berbagai bahasa dan suara agar hasil ucapannya terdengar lebih alami.

<BlockImage module="common/audio" id="set_tts" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| lang | Pilihan daftar turun | Kode bahasa | Kode bahasa TTS dari 21 bahasa yang didukung program (contoh: `'id-ID'`, `'en-US'`) | - |
| voice | Pilihan daftar turun | Nama suara | Nama suara TTS sistem (contoh: `'Google Bahasa Indonesia'`) | - |

### Python
```python
Utils.set_tts('id-ID', '')
```

## Mengucapkan {#speak}

Mengubah teks yang dimasukkan menjadi suara lalu mengucapkannya.

<BlockImage module="common/audio" id="speak" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| text | Nilai masukan | Teks yang diucapkan | untai teks | - |

### Python
```python
Utils.speak('Halo')
```
