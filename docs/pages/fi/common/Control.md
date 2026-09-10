---
title: Ohjaus
---

# Ohjaus

Lohkokoodauksessa **ohjauslohkot** ohjaavat ohjelman kulkua.  
Niillä voit odottaa tietyn ajan, tunnistaa näppäinpainalluksia, tulostaa lokiin ja muuta.


## Odota {#wait_sec}

Odottaa määrittämäsi sekuntimäärän ja suorittaa sitten seuraavan käskyn.

<BlockImage module="common/control" id="wait_sec" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| sec | Syöte (kenttä) | Odotusaika — **suoraan kirjoitettu luku** (esim. `Utils.wait(0.5)`) | Desimaaliluku 0 tai suurempi | - |
| sec | Syöte (lohko) | Odotusaika — **muuttuja/lauseke** (esim. `Utils.wait(time)`) | Desimaaliluku 0 tai suurempi | - |

### Python
```python
# kenttä sec = 2 → sellaisenaan (sekunteina)
Utils.wait(2)

# syöte muuttujasta
Utils.wait(myVar)
```

## Odota yksi ruutu {#wait_1msec}

Pysäyttää ohjelman yhden ruudun ajaksi (noin 0,001 sekuntia).

<BlockImage module="common/control" id="wait_1msec" />

### Parametrit

(ei mitään — kiinteä 0,001 sekuntia)

### Python
```python
Utils.wait(0.001)
```

<!--
## Odota ikuisesti {#wait_forever}

Pysäyttää ohjelman ja odottaa loputtomiin.

### Parametrit

(ei mitään)

### Python
```python
Utils.wait_forever()
```
-->

## Näppäinpainallus {#key_pressed}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, onko tietty näppäin painettuna.

<BlockImage module="common/control" id="key_pressed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| key | Syöte | Näppäimen nimi | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Tulosta lokiin {#log}

Tulostaa tietyn muuttujan tai ominaisuuden arvon reaaliajassa **konsoli**-ikkunaan.

<BlockImage module="common/control" id="log" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte | Tulostettava arvo | Mikä tahansa arvo | - |
| tag | Syöte | Lokitunniste | Merkkijono | - |
| unit | Syöte | Näytettävä yksikkö | Merkkijono | - |

### Python
```python
Utils.log(data, '', '')
```

## Näytä kuvaajassa {#scope}

Näyttää tietyn arvon muutokset reaaliaikaisena kuvaajana **kuvaaja**-ikkunassa.  
Voit määrittää kuvaajan värin, pienimmän ja suurimman arvon sekä alueen.

<BlockImage module="common/control" id="scope" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| signal | Syöte (lohko) | Kuvaajan signaaliarvo | Desimaaliluku | - |
| name | Syöte | Kuvaajan nimi | Merkkijono | - |
| min_val | Syöte (kenttä) | Kuvaajan pienin arvo | Desimaaliluku | - |
| max_val | Syöte (kenttä) | Kuvaajan suurin arvo | Desimaaliluku | - |
| color | Väri | Kuvaajan väri (hex) | Heksamerkkijono | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
