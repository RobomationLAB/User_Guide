---
title: Beagle
---

# Beagle

## Instanssin esittely {#instance}

Kun lisäät Beagle-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
beagle = Beagle(0)
# Kun instansseja on useita
beagle_1 = Beagle(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta pyörän nopeus {#set_wheel_speed}

Määrittää pyörän nopeuden. Nopeus on välillä -100 ja 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Pyörän nopeus | Kokonaisluku välillä -100 ja 100, 0: pysähdys | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Liiku matka {#move_distance}

Ajaa määrittämäsi matkan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Jos matka on 0, robotti jatkaa ajamista nykyisellä pyörän nopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajettava matka | Desimaaliluku 0 tai suurempi | - |
| unit | Pudotusvalikon vaihtoehto | Matkan yksikkö | cm, mm, tuuma(inch) | cm |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Liiku ajan {#move_time}

Ajaa määrittämäsi ajan nykyisellä pyörän nopeudella.  
Jos pyörän nopeutta ei ole asetettu, robotti ajaa eteenpäin oletusnopeudella.  
Kun valitset odota, suoritus odottaa, kunnes liike on valmis.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (lohko) | Ajoaika (sekuntia) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Käänny paikallaan {#turn_degree}

Määrittää, mihin suuntaan ja kuinka monta astetta robotti kääntyy paikallaan.  
Kun valitset odota, suoritus odottaa, kunnes kääntyminen on valmis.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Kääntymissuunta | vasen(left), oikea(right) | - |
| data | Syöte (lohko) | Kääntymiskulma (astetta) | Desimaaliluku 0 tai suurempi | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Muuta pyörän nopeutta {#change_speed}

Muuttaa Beaglen pyörän nopeutta.  
Uusi pyörän nopeus on nykyinen pyörän nopeus plus kirjoittamasi nopeus.  
Uusi pyörän nopeus rajataan välille -100 ja 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Ohjattava pyörä | vasen(left), oikea(right), molemmat(both) | - |
| speed | Syöte (lohko) | Nopeuden muutos | Kokonaisluku välillä -200 ja 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Pysäytä {#stop}

Pysäyttää Beaglen liikkeen.  
Beaglen molempien pyörien nopeus nollataan.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Liikkuuko pyörä? {#wheel_moving}

Palauttaa true, jos pyörä liikkuu, ja false, jos se on pysähdyksissä.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Aseta summerin taajuus {#sound_buzz}

Määrittää Beaglen summerin äänen valitsemallasi taajuudella.  
Taajuus voi olla välillä 27.5 Hz ja 6553.5 Hz.  
Jos kirjoitat arvon tämän alueen ulkopuolelta, summeri ei soi.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku 0, välillä 27.5 ja 6553.5 (muuten 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Soita nuotti {#sound_note}

Beagle soittaa valitsemasi nuotin.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

Beagle toistaa tietyn äänileikkeen.  
Kun valitset odota, suoritus odottaa, kunnes toisto on valmis.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa Beaglen äänen.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Soiko ääni? {#sound_playing}

Palauttaa true, jos ääni soi, ja false, jos ei soi.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Pyörän nopeus {#wheel_speed}

Tietyn pyörän nopeus

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Enkooderin arvo {#encoder}

Tietyn pyörän enkooderin arvo

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava pyörä | vasen(left), oikea(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroskoopin arvo {#gyroscope}

Gyroskoopin arvo tietyllä akselilla

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Kiihtyvyysanturin arvo {#accelerometer}

Kiihtyvyysanturin arvo tietyllä akselilla

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometrin arvo {#magnetometer}

Magnetometrin arvo tietyllä akselilla

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Lämpötila {#temperature}

Lämpötila-anturin arvo

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/Beagle" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Onko tila muuttunut? {#state_change}

Onko robotin tila muuttunut

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tilan laji | Välillä 0 ja 5 (katso alla oleva taulukko) | - |

| unit | Ehto |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Käynnistä / pysäytä lidar {#lidar_power}

Kytkee lidar-anturin päälle tai pois.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| on | Pudotusvalikon vaihtoehto | Lidar PÄÄLLÄ / POIS | käynnistä(on=True), pysäytä(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Lidarin mittaama etäisyys kohteeseen nro ~ {#lidar_value}

Lidar-anturi mittaa etäisyyden ympäröiviin kohteisiin koko 360 asteen alalta.  
Beaglen edessä on arvo numero 0, ja numero kasvaa yhdellä vastapäivään.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Syöte (kenttä) | Kohteen numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidarin mittaama etäisyys suunnittain {#lidar_directions}

Näyttää etäisyydet, jotka lidar-anturi mittaa eteen, taakse, molemmille sivuille ja viistoon.  
Se antaa keskiarvon niistä etäisyysarvoista, jotka ovat 45 astetta kyseisen suunnan kummallakin puolella.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| direction | Pudotusvalikon vaihtoehto | Mitattava suunta | eteen(front), vasemmalle eteen(left front), vasemmalle(left), vasemmalle taakse(left back), taakse(back), oikealle taakse(right back), oikealle(right), oikealle eteen(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Onko lidar valmis? {#lidar_state}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, onko lidar kytketty päälle.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametrit

(ei mitään)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
