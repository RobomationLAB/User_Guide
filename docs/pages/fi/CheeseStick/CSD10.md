---
title: CSD-10 Ympäristön valoanturi
---

# CSD-10 Ympäristön valoanturi

## Instanssin esittely {#instance}

Kun lisäät CSD-10 Ympäristön valoanturi(CSD10)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aloita portista {#set_input_port}

Määrittää, mihin porttiin CSD10 (ympäristön valoanturi) on liitetty.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Liitettävä portti | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Valoanturin arvo {#get_input}

Valitsemasi portin ympäristön valoanturin arvo

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Luettava portti | Sa, Sb, Sc | Viimeisimmän `set_port`-kutsun portti |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
