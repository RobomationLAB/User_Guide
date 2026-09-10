---
title: Ääni
---

# Ääni

Äänilohkoilla voit toistaa monenlaisia äänitehosteita ja puhetta.


## Toista ääni {#play_sound}

Toistaa valitsemasi äänen määrittämälläsi **voimakkuudella**.  
Kun valitset **toisto**-valintaruudun, valittu ääni toistuu yhä uudelleen.

<BlockImage module="common/audio" id="play_sound" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | Äänikirjaston leikkeen nimi | - |
| volume | Syöte (kenttä) | Voimakkuus | Kokonaisluku välillä 0 ja 100 | 100 |
| repeat | Valintaruutu | Toistetaanko ääni | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Aseta kieli ja ääni {#set_tts}

Määrittää **kielen** ja **äänen**, joilla **TTS** toistetaan.  
Voit valita monista kielistä ja äänistä ja saada luonnollisemman puheen.

<BlockImage module="common/audio" id="set_tts" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| lang | Pudotusvalikon vaihtoehto | Kielikoodi | Ohjelman tukemien 21 kielen TTS-kielikoodit (esim. `'fi-FI'`, `'en-US'`) | - |
| voice | Pudotusvalikon vaihtoehto | Äänen nimi | Järjestelmän TTS-äänen nimi (esim. `'Google suomi'`) | - |

### Python
```python
Utils.set_tts('fi-FI', '')
```

## Puhu {#speak}

Muuttaa kirjoittamasi tekstin ääneksi ja sanoo sen.

<BlockImage module="common/audio" id="speak" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| text | Syöte | Sanottava teksti | Merkkijono | - |

### Python
```python
Utils.speak('Hei')
```
