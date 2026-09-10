---
title: CSD-09 Moottori
---

# CSD-09 Moottori

## Instanssin esittely {#instance}

Kun lisäät CSD-09 Moottori(CSD09)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Käynnistä servomoottori {#start_servo_motor}

Määrittää, mitä porttia servomoottori käyttää.  
Jos et määritä porttia, moottori ei toimi oikein.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Servomoottorin portti | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Aseta servomoottorin kulma {#set_servo_motor}

Määrittää valitsemasi portin servomoottorin kulman.  
Arvot, jotka voit valita, ovat välillä 0 ja 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Servomoottorin portti | Sa, Sb, Sc | Viimeisimmän `start_servo_motor`-kutsun portti |
| value | Syöte (kenttä) | Kääntymiskulma (astetta) | Kokonaisluku välillä 0 ja 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Muuta servomoottorin kulmaa {#change_servo_motor}

Muuttaa valitsemasi portin servomoottorin kulmaa.  
Arvot, jotka voit valita, ovat välillä -180 ja 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Servomoottorin portti | Sa, Sb, Sc | Viimeisimmän `start_servo_motor`-kutsun portti |
| value | Syöte (kenttä) | Kulman muutos | Kokonaisluku | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Sammuta servomoottori {#stop_servo_motor}

Katkaisee virran valitsemasi portin servomoottorista.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Servomoottorin portti | Sa, Sb, Sc | Viimeisimmän `start_servo_motor`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Käynnistä DC-moottori {#start_DC_motor}

Mahdollistaa DC-moottorin ohjaamisen valitsemasi portin kautta.
Tätä lohkoa on kutsuttava kerran ennen muiden DC-moottorin lohkojen käyttöä.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | DC-moottorin portti | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Aseta DC-moottorin nopeus {#set_DC_motor}

Määrittää DC-moottorin PWM-lähtöarvon.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | DC-moottorin portti | Mab, Mcd | Viimeisimmän `start_dc_motor`-kutsun portti |
| value | Syöte (kenttä) | PWM-lähtöarvo | Kokonaisluku välillä 0 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Muuta DC-moottorin nopeutta {#change_DC_motor}

Lisää kirjoittamasi muutoksen DC-moottorin nykyiseen PWM-lähtöarvoon ja asettaa uuden arvon.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | DC-moottorin portti | Mab, Mcd | Viimeisimmän `start_dc_motor`-kutsun portti |
| value | Syöte (kenttä) | PWM-muutos | Kokonaisluku | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Pysäytä DC-moottori {#stop_DC_motor}

Pysäyttää DC-moottorin lähdön.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | DC-moottorin portti | Mab, Mcd | Viimeisimmän `start_dc_motor`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Käynnistä askelmoottori {#start_step_motor}

Ottaa askelmoottorin käyttöön.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Aseta askelmoottorin tila {#set_step_motor_mode}

Määrittää, missä tilassa askelmoottoria ohjataan.  
Jos et määritä tilaa, käytetään oletuksena 'power'-tilaa.  
Huomio! Älä vaihda tilaa, kun askelmoottori pyörii.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Käyttötila | off(pois), normaali(wave_step), power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Aseta askelmoottorin nopeus {#set_step_motor_speed}

Määrittää askelmoottorin nopeuden.  
Arvot, jotka voit valita, ovat välillä -1000 ja 1000.  
Jos arvo on negatiivinen, moottori pyörii vastakkaiseen suuntaan.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| value | Syöte (kenttä) | Pyörimisnopeus (PPS) | Kokonaisluku 0 tai suurempi | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Pyöritä askelmoottoria {#rotate_step_motor}

Määrittää, kuinka monta pulssia askelmoottori pyörii.  
Arvot, jotka voit valita, ovat välillä 0 ja 65535.  
Jos et ole valinnut askelmoottorin nopeutta, se ei pyöri.  
Kun valitset odota, suoritus odottaa, kunnes pyöriminen on valmis.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| value | Syöte (kenttä) | Pyörittävien askelten määrä | Kokonaisluku | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Muuta askelmoottorin nopeutta {#change_step_motor_speed}

Muuttaa askelmoottorin nopeutta.  
Arvot, jotka voit valita, ovat välillä -2000 ja 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| value | Syöte (kenttä) | PPS-muutos | Kokonaisluku | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Pysäytä askelmoottori {#stop_step_motor}

Pysäyttää askelmoottorin tai katkaisee siitä virran.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Pysäytystapa | pysäytä(stop), katkaise virta(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Askelmäärä {#step_motor_steps}

Palauttaa, kuinka monta askelta askelmoottori on pyörinyt kaikkiaan.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
