---
title: HamsterS
---

# HamsterS

## Instanssin esittely {#instance}

Kun lisäät HamsterS-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
hamster_s = HamsterS(0)
# Kun instansseja on useita
hamster_s_1 = HamsterS(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta pyörän nopeus {#set_wheel_speed}

Määrittää pyörän nopeuden. Nopeus on välillä -100 ja 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Pyörän nopeus | Kokonaisluku välillä -100 ja 100, 0: pysähdys | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Liiku matka {#move_distance}

Ajaa määrittämäsi matkan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Jos matka on 0, robotti jatkaa ajamista nykyisellä pyörän nopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajettava matka | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Matkan yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Liiku ajan {#move_time}

Ajaa määrittämäsi ajan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajoaika (sekuntia) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Käänny paikallaan {#turn_degree}

Määrittää, mihin suuntaan ja kuinka monta astetta robotti kääntyy paikallaan.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |
| data | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Muuta pyörän nopeutta {#change_speed}

Muuttaa HamsterSin pyörän nopeutta.  
Uusi pyörän nopeus on nykyinen pyörän nopeus plus kirjoittamasi nopeus.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Pysäytä {#stop}

Pysäyttää HamsterSin liikkeen.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Liikkuuko pyörä? {#wheel_moving}

Palauttaa true, jos pyörä liikkuu, ja false, jos se on pysähdyksissä.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Liiku laudalla yksi askel eteenpäin {#grid_move}

Liikkuu laudalla yhden askelen kerrallaan laudan ruudutuksen mukaan.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Käänny laudalla {#grid_turn}

Kääntyy laudalla 90 astetta määrittämääsi suuntaan.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Kierrä pisteen ympäri {#pivot}

Määrittää kiertopisteen, suunnan ja kulman, kun käytät kynänpidintä.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| base | Pudotusvalikon vaihtoehto | Kiertopiste | vasen kynä(left_pen), oikea kynä(right_pen), vasen pyörä(left_wheel), oikea pyörä(right_wheel) | - |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | eteenpäin(forward), taaksepäin(backward) | - |
| degree | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Piirrä ympyrä pisteen ympäri {#pivot_circle}

Määrittää kiertopisteen, suunnan, säteen ja kulman, kun piirrät ympyrän kynänpitimellä.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| base | Pudotusvalikon vaihtoehto | Kiertopiste | vasen kynä(left_pen), oikea kynä(right_pen) | - |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasemmalle eteen(left_forward), vasemmalle taakse(left_backward), oikealle eteen(right_forward), oikealle taakse(right_backward) | - |
| degree | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| radius | Syöte (lohko) | Kierron säde | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Säteen yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Seuraa viivaa anturilla {#trace_mode}

HamsterS seuraa tietyn väristä viivaa lattia-anturin avulla.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| floor | Pudotusvalikon vaihtoehto | Viivaa seuraava lattia-anturi | vasen(left), oikea(right), keskimmäinen(center) | - |
| line | Pudotusvalikon vaihtoehto | Viivan väri | musta(black), valkoinen(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Seuraa viivaa seuraavaan risteykseen {#trace_until_grid}

HamsterS liikkuu risteyksessä määrittämääsi suuntaan ja jatkaa, kunnes se kohtaa seuraavan risteyksen.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Suunta risteyksessä | käänny vasemmalle(left), käänny oikealle(right), aja eteenpäin(forward), u-käännös(uturn) | - |
| line | Pudotusvalikon vaihtoehto | Viivan väri | musta(black), valkoinen(white) | black |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Aseta viivanseurannan nopeus {#set_trace_speed}

Määrittää nopeuden, jolla robotti seuraa viivaa. Nopeus on välillä 1 ja 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Viivanseurannan nopeus | Kokonaisluku välillä 1 ja 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Aseta viivanseurannan vahvistus {#set_trace_gain}

Määrittää, kuinka paljon suunta muuttuu, kun robotti seuraa viivaa. Muutos on välillä 1 ja 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Suunnan muutos | Kokonaisluku välillä 1 ja 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Lopeta viivan seuraaminen {#stop_trace}

Lopettaa HamsterSin viivanseurannan.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Aseta LED-valon väri {#set_led_color}

Määrittää HamsterSin LED-valon värin.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi). (Koodiin tulee värin nimi, ei R-, G- ja B-lukuja.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | - |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Aseta LED-valon väri Väri-kategorian lohkolla {#set_led_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon (`[R, G, B]`) ja määrittää LED-valon värin.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | - |
| data | Syöte (väri) | Väri-kategorian lohko tai `[R, G, B]`-taulukko | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Muuta LED-valon väriä RGB-arvoilla {#change_by_rgb}

Muuttaa HamsterSin LED-valon väriä antamillasi R-, G- ja B-arvoilla.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | - |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Sammuta LED-valo {#turn_off}

Poistaa LED-valon värin.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava LED-valo | vasen(left), oikea(right), molemmat(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Aseta summerin taajuus {#sound_buzz}

Määrittää HamsterSin summerin äänen valitsemallasi taajuudella.  
Taajuus voi olla välillä 122.1 Hz ja 4186.0 Hz.  
Jos kirjoitat arvon tämän alueen ulkopuolelta, summeri ei soi.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku välillä 122.1 ja 4186.0 (muuten 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Soita nuotti {#sound_note}

HamsterS soittaa valitsemasi nuotin.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

HamsterS toistaa tietyn äänileikkeen.  
Kun valitset odota, suoritus odottaa, kunnes toisto on valmis.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa HamsterSin äänen.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Soiko ääni? {#sound_playing}

Palauttaa true, jos ääni soi, ja false, jos ei soi.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Pyörän nopeus {#wheel_speed}

Tietyn pyörän nopeus

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Läheisyysanturin arvo {#proximity}

Tietyn läheisyysanturin arvo

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattavan anturin sijainti | vasen(left), oikea(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Lattia-anturin arvo {#floor}

Tietyn lattia-anturin arvo

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattavan anturin sijainti | vasen(left), oikea(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Kiihtyvyyden arvo {#acceleration}

Painovoiman kiihtyvyys tietyllä akselilla

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Kirkkaus {#light}

Kirkkausanturin arvo

<BlockImage module="roboids/HamsterS" id="light" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Lämpötila {#temperature}

Lämpötila-anturin arvo

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Onko tila muuttunut? {#state_change}

Onko robotin tila muuttunut

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tilan laji | Välillä 0 ja 7 (katso alla oleva taulukko) | - |

| unit | Merkitys | Python |
|------|------|--------|
| 0 | Kallistus eteen | `acceleration('x') > 5000` |
| 1 | Kallistus taakse | `acceleration('x') < -5000` |
| 2 | Kallistus vasemmalle | `acceleration('y') > 5000` |
| 3 | Kallistus oikealle | `acceleration('y') < -5000` |
| 4 | Käännetty ylösalaisin | `acceleration('z') > 0` |
| 5 | Ei käännetty | `acceleration('z') < -3000` |
| 6 | Este/käsi havaittu | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Naputus | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Aseta portin tulotila {#io_mode}

Määrittää I/O-portin tulotilan.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| option | Pudotusvalikon vaihtoehto | I/O-tila | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Aseta portin lähtö {#set_output}

Määrittää valitsemasi I/O-portin lähtöarvon.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| data | Syöte (lohko) | Lähtöarvo | Kokonaisluku välillä 0 ja 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Muuta portin lähtöä {#change_output}

Muuttaa valitsemasi I/O-portin lähtöarvoa.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b), molemmat(both) | - |
| data | Syöte (lohko) | Lähtöarvon muutos | Kokonaisluku | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Avaa / sulje tarttuja {#gripper}

Avaa tai sulkee HamsterSin tarttujan.  
Unitin arvon mukaan kutsutaan toista kahdesta metodista.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | avaa(open), sulje(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Aseta laukaisimen kulma {#shooter}

Ohjaa laukaisinta määrittämällä kulman. Kulma on välillä 0 ja 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Laukaisimen kulma | Kokonaisluku välillä 0 ja 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Portin tuloarvo {#input}

Palauttaa HamsterSin I/O-portin tuloarvon.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | I/O-portti | A(a), B(b) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
