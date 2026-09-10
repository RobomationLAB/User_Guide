---
title: RaccoonBot
---

# RaccoonBot

## Instanssin esittely {#instance}

Kun lisäät RaccoonBot-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
raccoon = RaccoonBot(0)
# Kun instansseja on useita
raccoon_1 = RaccoonBot(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Nivelmoottorien ohjaus päälle / pois {#motor}

Määrittää, vapautetaanko vai säilytetäänkö kunkin nivelmoottorin ohjaus.  
Jos et määritä mitään, robotti käynnistyy niin, että kaikkien nivelten moottoriohjaus on päällä.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Nivelen numero | kaikki(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | Valintaruutu | Moottoriohjaus PÄÄLLÄ / POIS | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# kaikki nivelet, moottoriohjaus pois
raccoon.motor(-1, False)

# nivel 1, moottoriohjaus päälle
raccoon.motor(1, True)
```

## Aseta nivelen nopeus {#speed_joint}

Määrittää valitsemasi nivelen nopeuden.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| joint | Pudotusvalikon vaihtoehto | Nivelen numero | kaikki(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Syöte (lohko) | Nivelen nopeus | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Muuta nivelen nopeutta {#change_speed_joint}

Muuttaa valitsemasi nivelen nopeutta.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| joint | Pudotusvalikon vaihtoehto | Nivelen numero | kaikki(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Aseta nivelten nopeudet kerralla {#speed_joints}

Määrittää kaikkien neljän nivelen nopeuden kerralla.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (taulukko) | Taulukko, jossa on neljän nivelen nopeudet | `[joint1, joint2, joint3, joint4]`, kukin -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# suoraan kirjoitettu taulukko [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# taulukko muuttujasta
raccoon.set_speed_joints(*arr)
```

## Aseta nivelten kulmaohjauksen nopeus {#angle_speed}

Määrittää nopeuden, jolla niveliä ohjataan kulmaohjaustilassa.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Kulmaohjauksen suurin nopeus | Kokonaisluku välillä 0 ja 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Aseta nivelen kulma {#angle_joint}

Määrittää valitsemasi nivelen kulman.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| joint | Pudotusvalikon vaihtoehto | Nivelen numero | kaikki(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Syöte (lohko) | Nivelen kulma (astetta) | Katso yllä oleva taulukko (rajataan automaattisesti) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Muuta nivelen kulmaa {#change_angle_joint}

Muuttaa valitsemasi nivelen kulmaa.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| joint | Pudotusvalikon vaihtoehto | Nivelen numero | kaikki(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | Syöte (lohko) | Kulman muutos (astetta) | Katso yllä oleva taulukko (rajataan automaattisesti) | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Aseta nivelkulmat kerralla {#angle_joints}

Määrittää kaikkien neljän nivelen kulman kerralla.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (taulukko) | Taulukko, jossa on neljän nivelen kulmat, tai asennon nimi | Taulukko `[j1, j2, j3, j4]` | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# kirjoitettu taulukko
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Alusta nivelten tila {#default_angle_joints}

Asettaa neljän nivelen kulmat valmiiksi määriteltyyn asentoon (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Pudotusvalikko | Asennon nimi | `'zero'` / `'park'` / `'home'` | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

Valmiit asennot:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# valmis asento
raccoon.set_angle_joints('home', wait=True)
```

## Tallenna nivelkulmat {#save_encoder}

Tallentaa nykyiset enkooderiarvot valitsemaasi muuttujaan.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| encoder | Muuttuja | Muuttujan nimi, johon tallennetaan | Muuttuja | - |
| data | Syöte (taulukko) | Tallennettava alkutaulukko | Nelialkioinen tai tyhjä taulukko | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Aseta koordinaatti {#set_coordinate}

Siirtää robottivartta määrittämällä tietyn koordinaatin.  
Koordinaattien alueet ovat nämä.  
Ranteeseen nähden => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
Tarttujaan nähden => alue voi vaihdella sen mukaan, mikä laite on liitetty.  
Tarttujan suunta on kiinteästi joko vaakasuora tai pystysuora alustaan nähden.  
Jos kirjoitat koordinaatin, johon robotti ei voi siirtyä, komento ohitetaan.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| origin | Pudotusvalikon vaihtoehto | Lähtöpiste | ranne(wrist), tarttuja(end_effector) | - |
| pos | Pudotusvalikon vaihtoehto | Akseli | x, y, z | - |
| data | Syöte (lohko) | Koordinaatin arvo | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | Pudotusvalikon vaihtoehto | Yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# aseta x-koordinaatiksi 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# z-koordinaatti end_effectoriin nähden
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Muuta koordinaattia {#change_coordinate}

Siirtää robottivartta muuttamalla tiettyä koordinaattia nykyiseen asemaan nähden.  
Koordinaattien alueet ovat nämä.  
Ranteeseen nähden => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
Tarttujaan nähden => alue voi vaihdella sen mukaan, mikä laite on liitetty.  
Tarttujan suunta on kiinteästi joko vaakasuora tai pystysuora alustaan nähden.  
Jos kirjoitat koordinaatin, johon robotti ei voi siirtyä, komento ohitetaan.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| origin | Pudotusvalikon vaihtoehto | Lähtöpiste | ranne(wrist), tarttuja(end_effector) | - |
| pos | Pudotusvalikon vaihtoehto | Akseli | x, y, z | - |
| data | Syöte (lohko) | Koordinaatin muutos | Desimaaliluku | - |
| unit | Pudotusvalikon vaihtoehto | Yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Siirry xyz-koordinaatteihin {#set_coordinates}

Asettaa x-, y- ja z-koordinaatit antamiisi arvoihin kerralla.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| origin | Pudotusvalikon vaihtoehto | Lähtöpiste | ranne(wrist), tarttuja(end_effector) | - |
| x | Syöte (lohko) | x-koordinaatti | Desimaaliluku | - |
| y | Syöte (lohko) | y-koordinaatti | Desimaaliluku | - |
| z | Syöte (lohko) | z-koordinaatti | Desimaaliluku | - |
| unit | Pudotusvalikon vaihtoehto | Yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Aseta tarttujan lukitus {#lock}

Määrittää, mihin suuntaan tarttuja lukitaan. Kun asetuksena on vaaka- tai pystysuora, et voi enää ohjata nivelen 4 nopeutta tai kulmaa.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| mode | Pudotusvalikon vaihtoehto | Lukitussuunta | ei mitään(none), vaakasuora(horizontal), pystysuora(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Tartu / laske esine tarttujalla {#end_effector}

Tarttuu esineeseen tai laskee sen tarttujalla.  
Unit-pudotusvalikon arvon mukaan kutsutaan toista kahdesta metodista.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | tartu (sulje)(pick), laske (avaa)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Tarttujan laite {#end_effector_device}

Nyt liitettynä olevan tarttujan numero  
(1, 3, 4: pihtitarttuja, 2: alipainetarttuja)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Tarttujan tila {#end_effector_status}

Pitääkö tarttuja esinettä  
(0: laskettu, 1: tartuttu)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Soita nuotti {#sound_note}

RaccoonBot soittaa valitsemasi nuotin.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

RaccoonBot toistaa tietyn äänileikkeen.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa RaccoonBotin äänen.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Enkooderin arvo {#encoder}

Valitsemasi nivelen enkooderin arvo

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| joint | Pudotusvalikon vaihtoehto | Nivelen numero (tai kaikki nivelet) | 1, 2, 3, 4, kaikki(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# kaikki nivelet
raccoon.encoder(-1)
```

## Valitun kohteen koordinaatti {#coordinate}

Palauttaa lähtöpisteen nykyiset xyz-koordinaatit.  
Jos jätät `pos`-arvon pois, palautetaan koko taulukko `[x, y, z]`, ja jos annat sen, palautetaan vain kyseisen akselin arvo.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| origin | Pudotusvalikon vaihtoehto | Lähtöpiste | ranne(wrist), tarttuja(end_effector) | wrist |
| pos | Pudotusvalikon vaihtoehto | Akseli (tai kaikki) | x, y, z, kaikki (jos jätetään pois, palautetaan koko taulukko) | None (kaikki) |

### Python
```python
raccoon = RaccoonBot(0)

# tietty akseli
raccoon.get_coordinates('wrist', 'x')

# kaikki (kolmialkioinen taulukko)
raccoon.get_coordinates('wrist')
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Onko painike painettu? {#button}

Onko valitsemasi painike painettuna tai onko tapahtunut napsautus

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Painikkeen nimi | teach(teach), play(play), power(power), delete(delete), mikä tahansa(any) | - |
| event | Pudotusvalikon vaihtoehto | Tapahtuman laji | painettu(pressed), napsautettu(click), pitkä napsautus(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Aseta kuljettimen nopeus {#conveyor_speed}

Määrittää kuljetinhihnan nopeuden. Nopeus on välillä -100 ja 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Kuljettimen nopeus | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Siirrä kuljetinta matka {#conveyor_distance}

Siirtää kuljetinta määrittämäsi matkan.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Siirrettävä matka | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Matkan yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Muuta kuljettimen nopeutta {#change_conveyor_speed}

Muuttaa kuljetinhihnan nopeutta.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Pysäytä kuljetin {#stop_conveyor}

Pysäyttää kuljettimen.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Onko kuljetin käynnissä? {#conveyor_running}

Onko kuljetinhihna käynnissä

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametrit

(ei mitään)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Onko kuljettimen painike painettu? {#conveyor_button}

Onko kuljettimen painike painettuna tai onko tapahtunut napsautus

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| event | Pudotusvalikon vaihtoehto | Tapahtuman laji | painettu(pressed), napsautettu(click), pitkä napsautus(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
