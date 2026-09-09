---
title: Styrning
---

# Styrning

I blockprogrammering är **styrningsblocken** de som styr programmets flöde.  
Med dem kan du vänta en viss tid, känna av tangenttryckningar, skriva ut loggar med mera.


## Vänta {#wait_sec}

Väntar den angivna tiden (i sekunder) och kör sedan nästa kommando.

<BlockImage module="common/control" id="wait_sec" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| sec | Inmatning (fält) | Väntetid — **literalt tal** (t.ex. `Utils.wait(0.5)`) | Reellt tal 0 eller större | - |
| sec | Inmatning (block) | Väntetid — **variabel/uttryck** (t.ex. `Utils.wait(time)`) | Reellt tal 0 eller större | - |

### Python
```python
# fältet sec = 2 → används som det är (i sekunder)
Utils.wait(2)

# inmatning med variabel
Utils.wait(myVar)
```

## Vänta en bildruta {#wait_1msec}

Stoppar programmets körning under en bildruta (ungefär 0,001 sekund).

<BlockImage module="common/control" id="wait_1msec" />

### Parametrar

(ingen — fast 0,001 sekund)

### Python
```python
Utils.wait(0.001)
```

<!--
## Vänta för alltid {#wait_forever}

Stoppar programmets körning och väntar i all oändlighet.

### Parametrar

(ingen)

### Python
```python
Utils.wait_forever()
```
-->

## Tangenttryckning {#key_pressed}

Returnerar **sant (True) / falskt (False)** beroende på om en viss tangent är nedtryckt.

<BlockImage module="common/control" id="key_pressed" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| key | Inmatning | Tangentnamn | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Skriv till loggen {#log}

Skriver ut värdet på en viss variabel eller egenskap i realtid i fönstret **Konsol**.

<BlockImage module="common/control" id="log" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning | Värde som ska skrivas ut | Valfritt värde | - |
| tag | Inmatning | Loggtagg | Sträng | - |
| unit | Inmatning | Enhet som visas | Sträng | - |

### Python
```python
Utils.log(data, '', '')
```

## Visa i grafen {#scope}

Visar hur ett visst värde förändras som en graf i realtid i fönstret **Graf**.  
Du kan ställa in grafens färg, minsta och största värde samt intervall.

<BlockImage module="common/control" id="scope" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| signal | Inmatning (block) | Grafens signalvärde | Reellt tal | - |
| name | Inmatning | Grafens namn | Sträng | - |
| min_val | Inmatning (fält) | Grafens minsta värde | Reellt tal | - |
| max_val | Inmatning (fält) | Grafens största värde | Reellt tal | - |
| color | Färg | Grafens färg (hex) | Hex-sträng | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
