---
title: CSD-07 Äänianturi
---

# CSD-07 Äänianturi

## Instanssin esittely {#instance}

Kun lisäät CSD-07 Äänianturi(CSD07)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aloita portista {#set_input_port}

Määrittää, mihin porttiin CSD07 (äänianturi) on liitetty.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Liitettävä portti | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Äänianturin arvo {#get_input}

Valitsemasi portin äänianturin arvo

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava portti | Sa, Sb, Sc | Viimeisimmän `set_port`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
