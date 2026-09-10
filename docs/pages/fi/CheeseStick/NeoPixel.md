---
title: NeoPixel
---

# NeoPixel

## Instanssin esittely {#instance}

Kun lisäät NeoPixel-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Käynnistä {#start}

Ottaa NeoPixelin käyttöön.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Aseta LED-tila {#mode}

Määrittää NeoPixelin LED-tilan.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Värikanavien tila | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Aseta yhden pikselin väri {#set_one_color}

Asettaa värin yhdelle pikselille, jonka numeron annat.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi). (Koodiin tulee värin nimi, ei R-, G- ja B-lukuja.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| idx | Syöte (kenttä) | Pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Aseta yhden pikselin väri Väri-kategorian lohkolla {#set_one_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon ja asettaa yhden pikselin värin.  
Värilohkon tuloste (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, jotka kaikki palauttavat `[R, G, B]`) puretaan `*`-merkillä (tähdellä) ja välitetään `set_one_color`-metodin r-, g- ja b-argumentteina.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| idx | Syöte (kenttä) | Pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| data | Syöte (väri) | Väri-kategorian lohko tai `[R, G, B]`-taulukko | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Muuta yhden pikselin väriä RGB-arvoilla {#change_one_by_rgb}

Lisää muutoksen yhden pikselin nykyiseen RGB-arvoon ja asettaa uuden värin.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| idx | Syöte (kenttä) | Pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Sammuta yksi pikseli {#turn_off_one}

Poistaa n:nnen LEDin värin.  
LEDien numerot ovat välillä 1 ja 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| idx | Syöte (kenttä) | Pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Aseta alueen kuvio {#set_range_pattern}

Määrittää värikuvion kaikille valitsemallasi alueella oleville LEDeille.  
LEDien numerot ovat välillä 1 ja 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| pattern | Pudotusvalikon vaihtoehto | Värikuvion nimi | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Aseta alueen väri {#set_range_color}

Asettaa saman värin koko valitsemallesi pikselialueelle.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi).

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Aseta alueen väri Väri-kategorian lohkolla {#set_range_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon ja asettaa pikselialueen värin.  
Värilohkon tuloste (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) puretaan `*`-merkillä (tähdellä) ja välitetään `set_range_color`-metodin r-, g- ja b-argumentteina.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| data | Syöte (väri) | Väri-kategorian lohko tai `[R, G, B]`-taulukko | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Muuta alueen väriä RGB-arvoilla {#change_range_by_rgb}

Lisää RGB-muutoksen pikselialueen nykyiseen väriin ja asettaa uuden värin.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Sammuta alueen värit {#turn_off_range}

Poistaa värin kaikilta valitsemallasi alueella olevilta LEDeiltä.  
LEDien numerot ovat välillä 1 ja 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Aseta joka n:nnen pikselin väri alueella {#set_range_increment_color}

Asettaa värin joka `increment`:nnelle pikselille valitsemallasi pikselialueella.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi).  
(Esimerkiksi vain pikselit 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| increment | Syöte (kenttä) | Väli (paikkojen määrä) | Kokonaisluku 1 tai suurempi | - |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Aseta joka n:nnen pikselin väri Väri-kategorian lohkolla {#set_range_increment_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon ja asettaa värin joka n:nnelle pikselille valitsemallasi pikselialueella.  
Värilohkon tuloste (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) puretaan `*`-merkillä (tähdellä) ja välitetään `set_range_increment_color`-metodin r-, g- ja b-argumentteina.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| increment | Syöte (kenttä) | Väli (paikkojen määrä) | Kokonaisluku 1 tai suurempi | - |
| data | Syöte (väri) | Väri-kategorian lohko tai `[R, G, B]`-taulukko | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Muuta joka n:nnettä pikseliä RGB-arvoilla {#change_range_increment_by_rgb}

Lisää RGB-muutoksen joka n:nnen pikselin nykyiseen väriin ja asettaa uuden värin.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| increment | Syöte (kenttä) | Väli (paikkojen määrä) | Kokonaisluku 1 tai suurempi | - |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Sammuta joka n:nnen pikselin väri {#turn_off_range_increment}

Poistaa värin kaikilta LEDeiltä, jotka ovat valitsemallasi alueella ja välillä.  
LEDien numerot ovat välillä 1 ja 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| from_idx | Syöte (kenttä) | Ensimmäisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| to_idx | Syöte (kenttä) | Viimeisen pikselin numero (alkaa ykkösestä) | Kokonaisluku 1 tai suurempi | - |
| increment | Syöte (kenttä) | Väli (paikkojen määrä) | Kokonaisluku 1 tai suurempi | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Siirrä / kierrä {#shift}

Siirtää tai kiertää LEDejä määrittämääsi suuntaan ja niin monta paikkaa kuin annat.  
Arvot, jotka voit valita, ovat välillä 1 ja 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminnon laji | siirrä(shift), kierrä(rotate) | - |
| direction | Pudotusvalikon vaihtoehto | Suunta | vasemmalle(left), oikealle(right) | - |
| pixel | Syöte (kenttä) | Siirrettävien pikselien määrä | Kokonaisluku 1 tai suurempi | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Aseta kirkkaus {#set_brightness}

Määrittää NeoPixelin kirkkauden.  
Arvot, jotka voit valita, ovat välillä 0 ja 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| value | Syöte (kenttä) | Kirkkaus | Kokonaisluku välillä 0 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Muuta kirkkautta {#change_brightness}

Muuttaa NeoPixelin kirkkautta.  
Arvot, jotka voit valita, ovat välillä -100 ja 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| value | Syöte (kenttä) | Kirkkauden muutos | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
