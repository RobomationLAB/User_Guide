---
title: Besturing
---

# Besturing

Bij blokprogrammeren bepalen de **besturingsblokken** het verloop van het programma.  
Ze kunnen een bepaalde tijd wachten, toetsaanslagen opmerken, log uitvoeren en meer.


## Wachten {#wait_sec}

Wacht de opgegeven tijd (in seconden) en voert daarna de volgende opdracht uit.

<BlockImage module="common/control" id="wait_sec" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| sec | Invoer (veld) | Wachttijd — een **letterlijk getal** (bijv. `Utils.wait(0.5)`) | decimaal getal ≥ 0 | - |
| sec | Invoer (blok) | Wachttijd — een **variabele/uitdrukking** (bijv. `Utils.wait(time)`) | decimaal getal ≥ 0 | - |

### Python
```python
# veld sec = 2 → ongewijzigd (in seconden)
Utils.wait(2)

# invoer via een variabele
Utils.wait(myVar)
```

## Eén frame wachten {#wait_1msec}

Onderbreekt de uitvoering van het programma één frame (ongeveer 0,001 seconde).

<BlockImage module="common/control" id="wait_1msec" />

### Parameters

(geen — vast op 0,001 seconde)

### Python
```python
Utils.wait(0.001)
```

<!--
## Oneindig wachten {#wait_forever}

Stopt de uitvoering van het programma en wacht oneindig lang.

### Parameters

(geen)

### Python
```python
Utils.wait_forever()
```
-->

## Toets ingedrukt {#key_pressed}

Geeft als **waar(True) / onwaar(False)** terug of een bepaalde toets ingedrukt is.

<BlockImage module="common/control" id="key_pressed" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| key | Invoer | Naam van de toets | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Log uitvoeren {#log}

Toont de waarde van een bepaalde variabele of eigenschap in realtime in het venster **Console**.

<BlockImage module="common/control" id="log" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| data | Invoer | De waarde die wordt uitgevoerd | willekeurige waarde | - |
| tag | Invoer | Logtag | tekst | - |
| unit | Invoer | Weergave van de eenheid | tekst | - |

### Python
```python
Utils.log(data, '', '')
```

## Grafiek uitvoeren {#scope}

Toont de verandering van een bepaalde waarde als realtimegrafiek in het venster **grafiek**.  
Je kunt de kleur, de minimum-/maximumwaarde en het bereik van de grafiek instellen.

<BlockImage module="common/control" id="scope" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| signal | Invoer (blok) | Signaalwaarde van de grafiek | decimaal getal | - |
| name | Invoer | Naam van de grafiek | tekst | - |
| min_val | Invoer (veld) | Minimumwaarde van de grafiek | decimaal getal | - |
| max_val | Invoer (veld) | Maximumwaarde van de grafiek | decimaal getal | - |
| color | Kleur | Kleur van de grafiek (hex) | hex-tekst | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
