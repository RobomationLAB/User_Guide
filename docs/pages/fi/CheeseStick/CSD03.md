---
title: CSD-03 Kiertopotentiometri
---

# CSD-03 Kiertopotentiometri

## Instanssin esittely {#instance}

Kun lisäät CSD-03 Kiertopotentiometri(CSD03)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aloita portista {#set_input_port}

Määrittää, mihin porttiin CSD03 (säätövastus) on liitetty.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Liitettävä portti | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Muunna tulo alueelle {#set_input_range}

Muuntaa valitsemasi portin tuloarvon määrittämällesi pienimmän ja suurimman arvon välille.  
Tuloarvo on välillä 0 ja 255.  
Arvot, joiksi se voidaan muuntaa, ovat välillä -100 ja 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kohdeportti | Sa, Sb, Sc | - |
| src_min | Syöte (kenttä) | Lähteen pienin arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_max | Syöte (kenttä) | Lähteen suurin arvo | Kokonaisluku välillä 0 ja 255 | - |
| dst_min | Syöte (kenttä) | Pienin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_max | Syöte (kenttä) | Suurin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Muunna tulo alueelle keskiarvon avulla {#set_input_range_median}

Muuntaa valitsemasi portin tuloarvon määrittämällesi pienimmän, keskimmäisen ja suurimman arvon välille.  
Tuloarvo on välillä 0 ja 255.  
Arvot, joiksi se voidaan muuntaa, ovat välillä -100 ja 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kohdeportti | Sa, Sb, Sc | - |
| src_min | Syöte (kenttä) | Lähteen pienin arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_median | Syöte (kenttä) | Lähteen keskimmäinen arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_max | Syöte (kenttä) | Lähteen suurin arvo | Kokonaisluku välillä 0 ja 255 | - |
| dst_min | Syöte (kenttä) | Pienin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_median | Syöte (kenttä) | Keskimmäinen arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_max | Syöte (kenttä) | Suurin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Tuloarvo {#get_input}

Valitsemasi portin kiertopotentiometrin tuloarvo  
Jos et ole itse asettanut tuloaluetta, tuloarvo on välillä 0 ja 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava portti | Sa, Sb, Sc | Viimeisimmän `set_port`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
