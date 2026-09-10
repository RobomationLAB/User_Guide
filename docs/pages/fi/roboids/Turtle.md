---
title: Turtle
---

# Turtle

## Instanssin esittely {#instance}

Kun lisäät Turtle-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
turtle = Turtle(0)
# Kun instansseja on useita
turtle_1 = Turtle(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta pyörän nopeus {#set_wheel_speed}

Määrittää pyörän nopeuden. Nopeus on välillä -100 ja 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Pyörän nopeus | Kokonaisluku välillä -100 ja 100, 0: pysähdys | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Liiku matka {#move_distance}

Määrittää matkan, jonka robotti ajaa.  
Jos pyörän nopeutta ei ole asetettu, robotti ei liiku.  
Jos matka on 0, robotti jatkaa ajamista nykyisellä pyörän nopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajettava matka | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Matkan yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Liiku ajan {#move_time}

Ajaa määrittämäsi ajan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajoaika (sekuntia) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Käänny paikallaan {#turn_degree}

Määrittää, mihin suuntaan ja kuinka monta astetta robotti kääntyy paikallaan.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |
| data | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Muuta pyörän nopeutta {#change_speed}

Muuttaa Turtlen pyörän nopeutta.  
Uusi pyörän nopeus on nykyinen pyörän nopeus plus kirjoittamasi nopeus.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Pysäytä {#stop}

Pysäyttää Turtlen liikkeen.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Liikkuuko pyörä? {#wheel_moving}

Palauttaa true, jos pyörä liikkuu, ja false, jos se on pysähdyksissä.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Käänny pyörän ympäri {#pivot}

Määrittää kiertopisteen, suunnan ja kulman.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| base | Pudotusvalikon vaihtoehto | Pyörä, jonka ympäri kierretään | vasen pyörä(left_wheel), oikea pyörä(right_wheel) | - |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | eteenpäin(forward), taaksepäin(backward) | - |
| data | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Piirrä ympyrä {#pivot_circle}

Määrittää suunnan, säteen ja kulman, kun piirrät ympyrän kynällä.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasemmalle eteenpäin(left_forward), vasemmalle taaksepäin(left_backward), oikealle eteenpäin(right_forward), oikealle taaksepäin(right_backward) | - |
| degree | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| radius | Syöte (lohko) | Kierron säde | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Säteen yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Seuraa viivaa anturilla {#trace_line}

Seuraa tietyn väristä viivaa lattian värianturin avulla.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| line | Pudotusvalikon vaihtoehto | Seurattavan viivan väri | musta(black), punainen(red), vihreä(green), sininen(blue), kaikki värit(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Seuraa viivaa tiettyyn väriin asti {#trace_line_until_color}

Seuraa väriä A olevaa viivaa lattian värianturin avulla, kunnes se kohtaa värin B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| line | Pudotusvalikon vaihtoehto | Seurattavan viivan väri | musta(black), punainen(red), vihreä(green), sininen(blue), kaikki värit(any) | - |
| color | Pudotusvalikon vaihtoehto | Väri, johon pysähdytään | musta(black), punainen(red), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), kaikki värit(any) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Aja risteyksen läpi ja pysähdy seuraavaan {#intersection}

Turtle liikkuu risteyksessä määrittämääsi suuntaan ja jatkaa, kunnes se kohtaa seuraavan risteyksen.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Suunta risteyksessä | aja eteenpäin(forward), vasen(left), oikea(right), u-käännös(uturn) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Aseta viivanseurannan nopeus {#set_trace_speed}

Määrittää nopeuden, jolla robotti seuraa viivaa. Nopeus on välillä 1 ja 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Viivanseurannan nopeus | Kokonaisluku välillä 1 ja 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Aseta viivanseurannan vahvistus {#set_trace_gain}

Määrittää, kuinka paljon suunta muuttuu, kun robotti seuraa viivaa. Muutos on välillä 1 ja 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Suunnan muutos | Kokonaisluku välillä 1 ja 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Lopeta viivan seuraaminen {#stop_trace}

Lopettaa Turtlen viivanseurannan.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Aseta pään LED-valon väri {#set_led_color}

Määrittää Turtlen pään LED-valon värin.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi). (Koodiin tulee värin nimi, ei R-, G- ja B-lukuja.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Aseta pään LED-valo Väri-kategorian lohkolla {#set_led_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon tulosteen (`[R, G, B]`) ja määrittää pään LED-valon värin.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (väri) | Väri-kategorian lohko tai `[R, G, B]`-taulukko | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Muuta LED-valon väriä RGB-arvoilla {#change_by_rgb}

Lisää kirjoittamasi R-, G- ja B-muutokset pään LED-valon nykyiseen väriin ja asettaa uuden värin.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Sammuta pään LED-valo {#turn_off}

Poistaa pään LED-valon värin.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Aseta summerin taajuus {#sound_buzz}

Määrittää Turtlen summerin äänen valitsemallasi taajuudella.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku välillä 0 ja 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Soita nuotti {#sound_note}

Turtle soittaa valitsemasi nuotin.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

Turtle toistaa tietyn äänileikkeen.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa Turtlen äänen.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Soiko ääni? {#sound_playing}

Palauttaa true, jos ääni soi, ja false, jos ei soi.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Pyörän nopeus {#wheel_speed}

Tietyn pyörän nopeus

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Lattian värianturin arvo {#floor}

Lattian värianturin arvo

<BlockImage module="roboids/Turtle" id="floor" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Kortin värin nimi {#card_color}

Lattian värianturin lukeman kortin värin nimi

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Kortin värikuvio {#card_pattern}

Lattian värianturin lukeman kortin värikuvio

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Kiihtyvyyden arvo {#acceleration}

Painovoiman kiihtyvyys tietyllä akselilla

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Lämpötila {#temperature}

Lämpötila-anturin arvo

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/Turtle" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Koskettaako tiettyä väriä? {#color_read}

Mittaa Turtlen värianturilla, koskettaako robotti määrittämääsi väriä, ja palauttaa **toden (True) / epätoden (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Pudotusvalikon vaihtoehto | Värin nimi | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Onko kortin värikuvio ~ ? {#pattern_read}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, täsmääkö värianturin lukema kortin värikuvio.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| pattern | Pudotusvalikon vaihtoehto | Korttikuvion nimi | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Takapainikkeen tila {#button}

Onko selässä oleva painike painettuna tai onko sitä napsautettu

<BlockImage module="roboids/Turtle" id="button" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| event | Pudotusvalikon vaihtoehto | Painikkeen tilan laji | painettu(pressed), napsautettu(click), pitkä napsautus(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Onko tila muuttunut? {#state_change}

Onko robotin tila muuttunut

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tilan laji | Välillä 0 ja 5 (katso alla oleva taulukko) | - |

| unit | Ehto |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
