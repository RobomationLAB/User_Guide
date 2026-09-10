---
title: Piobot
---

# Piobot

## Instanssin esittely {#instance}

Kun lisäät Piobot(Pio)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
pio = Pio(0)
# Kun instansseja on useita
pio_1 = Pio(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta pyörän nopeus {#set_wheel_speed}

Asettaa pyörän nopeuden. Pyörän nopeus on välillä -100 ja 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Pyörän nopeus | Kokonaisluku välillä -100 ja 100, 0: pysähdys | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Liiku matka {#move_distance}

Ajaa määrittämäsi matkan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Jos matka on 0, robotti jatkaa ajamista nykyisellä pyörän nopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajettava matka | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Matkan yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Liiku ajan {#move_time}

Ajaa määrittämäsi ajan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajoaika (sekuntia) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Käänny paikallaan {#turn_degree}

Määrittää, mihin suuntaan ja kuinka monta astetta robotti kääntyy paikallaan.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |
| data | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Muuta pyörän nopeutta {#change_speed}

Muuttaa Piobotin pyörän nopeutta.  
Uusi pyörän nopeus on nykyinen pyörän nopeus plus kirjoittamasi nopeus.  
Uusi pyörän nopeus rajataan välille -100 ja 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Turbotila päälle / pois {#turbo}

Kytkee Piobotin turbotilan päälle tai pois.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Turbotila PÄÄLLÄ / POIS | päällä(on=True), pois(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Pysäytä {#stop}

Pysäyttää Piobotin liikkeen.  
Piobotin molempien pyörien nopeus nollataan.

<BlockImage module="roboids/Pio" id="stop" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Liikkuuko pyörä? {#wheel_moving}

Palauttaa true, jos pyörä liikkuu, ja false, jos se on pysähdyksissä.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Liiku yksi askel laudalla {#grid_move}

Liikkuu laudalla yhden askelen kerrallaan laudan ruudutuksen mukaan.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Liikkumissuunta | eteenpäin(forward), taaksepäin(backward), vasemmalle(left), oikealle(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Käänny laudalla {#grid_turn}

Piobot kääntyy laudalla 90 astetta antamaasi suuntaan. Se odottaa aina, kunnes kääntyminen on valmis (sisäisesti wait=True on kiinteä).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Aseta kaulan nopeus {#set_neck_speed}

Määrittää, kuinka nopeasti kaula kääntyy. Kaulan nopeus on välillä 1 ja 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Kaulan kääntymisnopeus | Kokonaisluku välillä 1 ja 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Aseta kaulan kulma {#set_neck_angle}

Määrittää kulman, johon kaula kääntyy. Kaulan kulma on välillä -45 ja 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Kaulan kulma (astetta) | Desimaaliluku välillä -45 ja 45 | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Liikkuuko kaula? {#neck_moving}

Palauttaa true, jos kaula liikkuu, ja false, jos se on pysähdyksissä.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Aseta silmän väri {#set_eye_color}

Määrittää Piobotin silmien LED-valojen värin.  
Voit muuttaa vasemman silmän, oikean silmän tai molempien värin.  
Kun valitset jonkin valmiista väreistä, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi). (Koodiin tulee värin nimi, ei R-, G- ja B-lukuja.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava silmä | vasen(left), oikea(right), molemmat(both) | - |
| color | Pudotusvalikon vaihtoehto | Valmis väri → muunnetaan värin nimeksi (englanniksi) | musta(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Aseta silmän väri Väri-kategorian lohkolla {#set_eye_color_with_block}

Määrittää Piobotin silmien LED-valojen värin Väri-kategorian lohkoilla.  
Voit muuttaa vasemman silmän, oikean silmän tai molempien värin.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava silmä | vasen(left), oikea(right), molemmat(both) | - |
| data | Syöte (väri) | [R, G, B]-taulukko | Väri-kategorian lohko tai `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Muuta silmän väriä RGB-arvoilla {#change_by_rgb}

Muuttaa Piobotin silmien LED-valojen väriä antamillasi R-, G- ja B-arvoilla.  
Voit asettaa vasemman silmän, oikean silmän tai molempien värin.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava silmä | vasen(left), oikea(right), molemmat(both) | - |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Aseta silmäkuvio {#set_eye_pattern}

Määrittää silmien kuvion ja sen, minkä värinen kumpikin silmä on, kun kuvio alkaa.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| pattern | Pudotusvalikon vaihtoehto | Kuvion laji | pois(reset), vilkutus(blink), himmennys(dimming), sateenkaari(rainbow) | - |
| left | Pudotusvalikon vaihtoehto | Vasemman silmän väri | oletus(black), punainen(red), keltainen(yellow), vihreä(green), syaani(cyan), sininen(blue), magenta(magenta), valkoinen(white) | white |
| right | Pudotusvalikon vaihtoehto | Oikean silmän väri | (sama kuin left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Sammuta silmä {#turn_off}

Poistaa silmän värin.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava silmä | vasen(left), oikea(right), molemmat(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Aseta summerin ääni {#sound_buzz}

Määrittää Piobotin summerin äänen valitsemallasi taajuudella.  
Taajuus voi olla välillä 27.5 Hz ja 6553.5 Hz.  
Jos kirjoitat arvon tämän alueen ulkopuolelta, summeri ei soi.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku välillä 27.5 ja 6553.5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Soita nuotti {#sound_note}

Piobot soittaa valitsemasi nuotin.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

Piobot toistaa tietyn äänileikkeen.  
Kun valitset odota, suoritus odottaa, kunnes toisto on valmis.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Toista melodia {#sound_melody}

Piobot toistaa tietyn melodian.  
Kun valitset odota, suoritus odottaa, kunnes toisto on valmis.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| melody | Pudotusvalikon vaihtoehto | Melodian nimi | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa Piobotin äänen.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Soiko ääni? {#sound_playing}

Palauttaa true, jos ääni soi, ja false, jos ei soi.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Pyörän nopeus {#wheel_speed}

Tietyn pyörän nopeus

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/Pio" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Näppäimistön painike {#keypad}

Tunnistaa, mitä näppäimistön painiketta käyttäjä painoi viimeksi.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| button | Pudotusvalikon vaihtoehto | Tunnistettava painike | toista(play), liiku eteenpäin(forward), liiku taaksepäin(backward), liiku vasemmalle(left), liiku oikealle(right), toiminto(action), toista uudelleen(repeat), tyhjennä(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
