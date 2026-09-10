---
title: Teksti
---

# Teksti {#text}

Tässä muutamia esimerkkejä merkkijonoista:
- "thing #1"
- "March 12, 2010"
- "" (tyhjä teksti)

Teksti voi sisältää isoja ja pieniä kirjaimia, numeroita, välimerkkejä, muita merkkejä ja sanojen välisiä välilyöntejä.  

<BlockImage module="common/text" id="text" />

## Tekstin luominen {#text_join}

Lohko **luo teksti** yhdistää useiden tekstien arvot uudeksi tekstiksi.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Tekstin lisääminen {#text_append}

Lohko **lisää teksti** liittää annetun tekstin valitsemaasi muuttujaan.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Tekstin pituus {#text_length}

Lohko **:n pituus** laskee tekstin kirjaimet, numerot ja muut merkit ja palauttaa kokonaispituuden.  
Alla olevan `abc`:n pituus on 3, ja tyhjän tekstin pituus on 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Tyhjän tekstin tarkistus {#text_isEmpty}

Lohko **on tyhjä** tarkistaa, onko annettu teksti tyhjä (onko pituus 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Tekstin etsiminen {#text_indexOf}

Nämä lohkot tarkistavat, esiintyykö tietty teksti toisen tekstin sisällä, ja palauttavat sen sijainnin, jos esiintyy.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Yhden merkin hakeminen {#text_charAt}

Hakee yhden merkin tietystä kohdasta tekstiä.  
Voit valita useista vaihtoehdoista: ensimmäinen, viimeinen, satunnainen kohta, kirjain numero N ja muut.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Tekstin osan hakeminen {#text_getSubstring}

Lohkolla **hae osa** voit poimia tekstistä tietyn alueen.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Isojen ja pienten kirjainten muuttaminen {#text_changeCase}

Tämä lohko muuttaa antamasi tekstin johonkin näistä muodoista:

- **isot kirjaimet**: muuttaa kaikki kirjaimet isoiksi
- **pienet kirjaimet**: muuttaa kaikki kirjaimet pieniksi
- **Isot Alkukirjaimet**: muuttaa vain jokaisen sanan ensimmäisen kirjaimen isoksi ja loput pieniksi

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # isot kirjaimet
TEXT.lower() # pienet kirjaimet
TEXT.title() # isot alkukirjaimet
```

## Välilyöntien poistaminen {#text_trim}

Tämä lohko poistaa tekstistä välilyönnit näistä kohdista:
- kummaltakin puolelta
- vasemmalta puolelta
- oikealta puolelta

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # kummaltakin puolelta
TEXT.lstrip()   # vasemmalta puolelta
TEXT.rstrip()   # oikealta puolelta
```

## Tietyn tekstin määrän laskeminen tekstissä {#text_count}

Laskee, kuinka monta kertaa tietty osateksti esiintyy annetussa tekstissä, ja palauttaa määrän.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Tietyn tekstin korvaaminen tekstissä {#text_replace}

Korvaa tietyn osatekstin toisella tekstillä kaikkialla tekstissä.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Tekstin kääntäminen {#text_reverse}

Palauttaa uuden tekstin, jossa merkkien järjestys on käännetty.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Tekstin tulostaminen {#text_print}

Lohko **tulosta** näyttää antamasi arvon ponnahdusikkunassa.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Syötteen pyytäminen käyttäjältä {#text_prompt_ext}

Tämä lohko luo ponnahdusikkunan, joka pyytää käyttäjältä syötettä, ja kirjoitettu arvo tallennetaan muuttujaan.  
Käyttäjä voi kirjoittaa tekstiä tai lukuja.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
