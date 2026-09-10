---
title: Hamster
---

# Hamster

## Instanssin esittely {#instance}

Kun lisäät Hamster-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
hamster = Hamster(0)
# Kun instansseja on useita
hamster_1 = Hamster(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta pyörän nopeus {#set_wheel_speed}

Määrittää pyörän nopeuden. Nopeus on välillä -100 ja 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Pyörän nopeus | Kokonaisluku välillä -100 ja 100, 0: pysähdys | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Liiku ajan {#move_time}

Ajaa määrittämäsi ajan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajoaika (sekuntia) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Muuta pyörän nopeutta {#change_speed}

Muuttaa Hamsterin pyörän nopeutta.  
Uusi pyörän nopeus on nykyinen pyörän nopeus plus kirjoittamasi nopeus.  
Uusi pyörän nopeus rajataan välille -100 ja 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Pysäytä {#stop}

Pysäyttää Hamsterin liikkeen.  
Hamsterin molempien pyörien nopeus nollataan.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Liiku laudalla yksi askel eteenpäin {#grid_move}

Liikkuu laudalla yhden askelen kerrallaan laudan ruudutuksen mukaan.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Käänny laudalla {#grid_turn}

Kääntyy laudalla 90 astetta määrittämääsi suuntaan.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Seuraa viivaa anturilla {#trace_mode}

Hamster seuraa tietyn väristä viivaa lattia-anturin avulla.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| floor | Pudotusvalikon vaihtoehto | Viivaa seuraava lattia-anturi | vasen(left), oikea(right), keskimmäinen(center) | - |
| line | Pudotusvalikon vaihtoehto | Viivan väri | musta(black), valkoinen(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Seuraa viivaa seuraavaan risteykseen {#trace_until_grid}

Hamster liikkuu risteyksessä määrittämääsi suuntaan ja jatkaa, kunnes se kohtaa seuraavan risteyksen.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Suunta risteyksessä | vasen(left), oikea(right), eteenpäin(forward), u-käännös(uturn) | - |
| line | Pudotusvalikon vaihtoehto | Viivan väri | musta(black), valkoinen(white) | black |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Aseta viivanseurannan nopeus {#set_trace_speed}

Määrittää nopeuden, jolla robotti seuraa viivaa. Nopeus on välillä 1 ja 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Viivanseurannan nopeus | Kokonaisluku välillä 1 ja 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Lopeta viivan seuraaminen {#stop_trace}

Lopettaa Hamsterin viivanseurannan.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Aseta LED-valon väri {#set_led_color}

Määrittää LED-valon värin.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | - |
| color | Pudotusvalikon vaihtoehto | Väri | musta(black), sininen(blue), vihreä(green), syaani(cyan), punainen(red), magenta(magenta), keltainen(yellow), valkoinen(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Sammuta LED-valo {#turn_off}

Poistaa LED-valon värin.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Aseta summerin taajuus {#sound_buzz}

Määrittää Hamsterin summerin äänen valitsemallasi taajuudella.  
Taajuus voi olla välillä 1.0 Hz ja 6553.5 Hz.  
Jos kirjoitat arvon tämän alueen ulkopuolelta, summeri ei soi.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku välillä 0 ja 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Soita nuotti {#sound_note}

Hamster soittaa valitsemasi nuotin.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Ääni pois {#sound_off}

Sammuttaa Hamsterin äänen.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Pyörän nopeus {#wheel_speed}

Tietyn pyörän nopeus

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Läheisyysanturin arvo {#proximity}

Tietyn läheisyysanturin arvo

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattavan anturin sijainti | vasen(left), oikea(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Lattia-anturin arvo {#floor}

Tietyn lattia-anturin arvo

<BlockImage module="roboids/Hamster" id="floor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattavan anturin sijainti | vasen(left), oikea(right), keskimmäinen(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Kiihtyvyyden arvo {#acceleration}

Painovoiman kiihtyvyys tietyllä akselilla

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Kirkkaus {#light}

Kirkkausanturin arvo

<BlockImage module="roboids/Hamster" id="light" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Lämpötila {#temperature}

Lämpötila-anturin arvo

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/Hamster" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Onko tila muuttunut? {#state_change}

Onko robotin tila muuttunut

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tilan laji | Välillä 0 ja 6 (katso alla oleva taulukko) | - |

| unit | Ehto |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Aseta portti tilaan {#io_mode}

Määrittää I/O-portin tulotilan.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| option | Pudotusvalikon vaihtoehto | I/O-tila | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Aseta portin lähtö {#set_output}

Määrittää valitsemasi I/O-portin lähtöarvon.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| data | Syöte (lohko) | Lähtöarvo | Kokonaisluku välillä 0 ja 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Muuta portin lähtöä {#change_output}

Muuttaa valitsemasi I/O-portin lähtöarvoa.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| data | Syöte (lohko) | Lähtöarvon muutos | Kokonaisluku | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Avaa / sulje tarttuja {#gripper}

Avaa tai sulkee Hamsterin tarttujan.  
Unitin arvon mukaan kutsutaan toista kahdesta metodista.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | sulje(close), avaa(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Aseta laukaisimen kulma {#shooter}

Ohjaa laukaisinta määrittämällä kulman. Kulma on välillä 0 ja 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Laukaisimen kulma | Kokonaisluku välillä 0 ja 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Portin tuloarvo {#input}

Palauttaa Hamsterin I/O-portin tuloarvon.

<BlockImage module="roboids/Hamster" id="input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
