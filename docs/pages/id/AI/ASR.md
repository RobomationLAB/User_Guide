---
title: Ucapan ke Teks
---

# Ucapan ke Teks

## Deklarasi instans {#instance}

Saat Anda menambahkan blok Ucapan ke Teks(ASR) ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:

```python
asr = ASR(0)
# Bila ada beberapa instans
asr_1 = ASR(1)
```

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| index | Pilihan daftar turun | Nomor instans (mulai dari 0) | bilangan bulat 0 atau lebih | 0 |


## Mengatur bahasa {#lang}

Mengatur bahasa pengenalan ucapan. Meskipun Anda tidak mengaturnya, bahasanya tetap diatur otomatis.

<BlockImage module="AI/ASR" id="lang" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Kode bahasa pengenalan | Kode dari 21 bahasa yang didukung program (contoh: `'id-ID'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('id-ID')
```

## Mulai / hentikan pengenalan ucapan {#listen}

Memulai atau menghentikan pengenalan ucapan.

<BlockImage module="AI/ASR" id="listen" />

### Parameter

| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |
| --- | --- | --- | --- | --- |
| unit | Pilihan daftar turun | Tindakan | mulai(start), hentikan(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Hasil pengenalan ucapan {#result}

Hasil pengenalan ucapan

<BlockImage module="AI/ASR" id="result" />

### Parameter

(tidak ada)

### Python
```python
asr = ASR(0)

asr.result()
```

## Sedang mengenali ucapan? {#state}

Mengembalikan **benar (True) / salah (False)** sesuai apakah pengenalan ucapan sedang aktif.

<BlockImage module="AI/ASR" id="state" />

### Parameter

(tidak ada)

### Python
```python
asr = ASR(0)

asr.is_active()
```
