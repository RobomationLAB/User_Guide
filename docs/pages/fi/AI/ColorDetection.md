---
title: Värintunnistus
---

# Värintunnistus

## Instanssin esittely {#instance}

Kun lisäät Värintunnistus(ColorDetection)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
color_detection = ColorDetection(0)
# Kun instansseja on useita
color_detection_1 = ColorDetection(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kamera {#device}

Määrittää, mitä kameraa käytetään värintunnistukseen.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kameralaitteen nimi | Järjestelmän kameran nimi | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Lisää väri kohdeväreihin {#register_color}

Lisää värin niihin kohdeväreihin, jotka värintunnistus tunnistaa.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | musta(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Poista väri kohdeväreistä {#delete_color}

Poistaa värin niistä kohdeväreistä, jotka värintunnistus tunnistaa.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | musta(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Aseta tunnistusehdoksi pinta-ala {#area_condition}

Määrittää, kuinka suuri väriala vähintään on, jotta se tunnistetaan. Vain vähintään tämän kokoiset alueet näkyvät näytöllä.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Pinta-alaehdon arvo | Desimaaliluku 0 tai suurempi | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Tunnista kerran {#detect_once}

Etsii kuvasta ne värit, jotka voidaan tunnistaa, ja merkitsee niiden alueet yhden kerran.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametrit

(ei mitään)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Käynnistä / pysäytä jatkuva tunnistus {#detect_continuous}

Seuraa kuvassa niitä värejä, jotka voidaan tunnistaa, jatkuvasti ja merkitsee niiden alueet näytölle.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Näytä tulos {#display}

Määrittää, näytetäänkö värintunnistuksen tulos kamerakuvassa vai ei.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Näyttö PÄÄLLÄ / POIS | näytä(on=True), piilota(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Värin tiedot {#color_data}

Palauttaa antamasi värin sijainnin ja koon.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | musta(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |
| pos | Pudotusvalikon vaihtoehto | Koordinaatin/koon laji | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Onko tietty väri tunnistettu? {#color_detected}

Onko valitsemasi väri löydetty

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | musta(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
