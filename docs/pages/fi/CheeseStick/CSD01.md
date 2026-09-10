---
title: CSD-01 Painokytkin
---

# CSD-01 Painokytkin

## Instanssin esittely {#instance}

Kun lisäät CSD-01 Painokytkin(CSD01)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aloita portista {#set_input_port}

Määrittää, mihin porttiin CSD01 (Tact Switch) on liitetty.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Liitettävä portti | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Painikkeen tulo {#button_input}

Valitsemasi portin painikkeen tuloarvo  
Se palauttaa 0, kun painike on painettuna, ja muuten 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava portti | Sa, Sb, Sc | Viimeisimmän `set_port`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Onko painike painettu? {#button_pressed}

Onko valitsemaasi porttiin liitetty kytkinpainike painettuna

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava portti | Sa, Sb, Sc | Viimeisimmän `set_port`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
