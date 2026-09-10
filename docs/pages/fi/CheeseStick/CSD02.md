---
title: CSD-02 RGB-LED
---

# CSD-02 RGB-LED

## Instanssin esittely {#instance}

Kun lisäät CSD-02 RGB-LED(CSD02)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Käynnistä RGB-LED {#start}

Ottaa RGB-LEDin käyttöön.  
Jos et lisää tätä lohkoa, RGB-LED ei aktivoidu.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Aseta väri {#set_color}

Asettaa CSD02:n LEDin värin valitsemaasi väriin.  
Kun valitset värin väripaletista, se muunnetaan kutsussa **värin nimeksi** (englanninkieliseksi merkkijonoksi). (Koodiin tulee värin nimi, ei R-, G- ja B-lukuja.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| color | Väri | Valitse väripaletista → muunnetaan värin nimeksi (englanniksi) | Värin nimi: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Aseta väri Väri-kategorian lohkolla {#set_color_with_block}

Ottaa syötteeksi Väri-kategorian lohkon (esimerkiksi `[R, G, B]`-taulukon) ja asettaa CSD02:n LEDin värin.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| data | Syöte (väri) | Väri-kategorian lohkon tuloste tai `[R, G, B]`-taulukko | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Muuta väriä RGB-arvoilla {#change_by_rgb}

Lisää kirjoittamasi R-, G- ja B-muutokset LEDin nykyiseen väriin ja asettaa uuden värin.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| r | Syöte (kenttä) | Punaisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| g | Syöte (kenttä) | Vihreän muutos | Kokonaisluku välillä -255 ja 255 | 0 |
| b | Syöte (kenttä) | Sinisen muutos | Kokonaisluku välillä -255 ja 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Sammuta LED {#turn_off}

Poistaa RGB-LEDin värin.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametrit

(ei mitään)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
