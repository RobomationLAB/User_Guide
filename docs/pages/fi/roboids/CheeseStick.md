---
title: Cheese Stick
---

# Cheese Stick

## Instanssin esittely {#instance}

Kun lisäät Cheese Stick(CheeseStick)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
# Kun instansseja on useita
cheesestick_1 = CheeseStick(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta portti tuloksi {#set_input_mode}

Määrittää valitsemasi portin tulotilan.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tuloportti | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Pudotusvalikon vaihtoehto | Tulotila | makey-tulo(makey), painiketulo(button), digitaalinen ylösveto(digital_pullup), digitaalinen alasveto(digital_pulldown), analoginen(analog), analoginen jännite(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Muunna tulo alueelle {#set_input_range}

Muuntaa valitsemasi portin tuloarvon määrittämällesi pienimmän ja suurimman arvon välille.  
Tuloarvo on välillä 0 ja 255.  
Arvot, joiksi se voidaan muuntaa, ovat välillä -100 ja 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tuloportti | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Syöte (kenttä) | Lähteen pienin arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_max | Syöte (kenttä) | Lähteen suurin arvo | Kokonaisluku välillä 0 ja 255 | - |
| dst_min | Syöte (kenttä) | Pienin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_max | Syöte (kenttä) | Suurin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Muunna tulo alueelle keskiarvon avulla {#set_input_range_median}

Muuntaa valitsemasi portin tuloarvon määrittämällesi pienimmän, keskimmäisen ja suurimman arvon välille.  
Tuloarvo on välillä 0 ja 255.  
Arvot, joiksi se voidaan muuntaa, ovat välillä -100 ja 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tuloportti | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Syöte (kenttä) | Lähteen pienin arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_median | Syöte (kenttä) | Lähteen keskimmäinen arvo | Kokonaisluku välillä 0 ja 255 | - |
| src_max | Syöte (kenttä) | Lähteen suurin arvo | Kokonaisluku välillä 0 ja 255 | - |
| dst_min | Syöte (kenttä) | Pienin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_median | Syöte (kenttä) | Keskimmäinen arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |
| dst_max | Syöte (kenttä) | Suurin arvo muunnoksen jälkeen | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Tuloarvo {#get_input}

Valitsemasi portin tuloarvo

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tuloportti | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Aseta portti pulssitilaan {#set_pulse_input_mode}

Määrittää valitsemasi portin pulssitulotilan.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Pulssituloportti | Sc, Lc | - |
| option | Pudotusvalikon vaihtoehto | Vetotila | pulssi (default), pulssi (pull-up), pulssi (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Pulssitulon arvo {#get_pulse_input}

Onko valitsemassasi portissa havaittu pulssi

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Pulssituloportti | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Aseta digitaalilähdön arvo {#set_digital_output}

Määrittää valitsemasi portin digitaalisen lähtöarvon.  
Voit valita 0 tai 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Digitaalinen lähtöportti | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Pudotusvalikon vaihtoehto | Lähtöarvo | 0 tai 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Aseta PWM-lähdön arvo {#set_pwm_output}

Määrittää valitsemasi portin PWM-lähtöarvon.  
Arvot, jotka voit valita, ovat välillä 0 ja 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | PWM-lähtöportti | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Syöte (kenttä) | PWM-arvo | Kokonaisluku välillä 0 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Muuta PWM-lähtöä {#change_pwm_output}

Muuttaa valitsemasi portin PWM-lähtöarvoa.  
Arvot, jotka voit valita, ovat välillä -100 ja 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | PWM-lähtöportti | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Syöte (kenttä) | PWM-muutos | Kokonaisluku välillä -100 ja 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Aseta summerin ääni {#sound_buzz}

Määrittää Cheese Stickin summerin äänen.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| hz | Syöte (lohko) | Taajuus (Hz) | Desimaaliluku välillä 0 ja 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Soita nuotti {#sound_note}

Cheese Stick soittaa valitsemasi nuotin.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| note | Pudotusvalikon vaihtoehto | Nuotti | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Pudotusvalikon vaihtoehto | Oktaavi | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Toista äänileike {#sound_clip}

Cheese Stick toistaa tietyn äänileikkeen.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| clip | Pudotusvalikon vaihtoehto | Äänileikkeen nimi | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` ja muut | - |
| wait | Valintaruutu | Odotetaanko, kunnes valmis | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Ääni pois {#sound_off}

Sammuttaa Cheese Stickin äänen.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Kiihtyvyyden arvo {#acceleration}

Painovoiman kiihtyvyys tietyllä akselilla

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Mitattava akseli | x-akseli(x), y-akseli(y), z-akseli(z) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Lämpötila {#temperature}

Lämpötila-anturin arvo

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signaalin voimakkuus {#signal_strength}

Signaalin voimakkuus

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Akku {#battery}

Akun jännite

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Onko tila muuttunut? {#state_change}

Onko robotin tila muuttunut

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tilan laji | Välillä 0 ja 7 (katso alla oleva taulukko) | - |

| unit | Ehto |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (naputustapahtuma) |
| 7 | `fall()` (putoamistapahtuma) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
