---
title: Styring
---

# Styring

I blokprogrammering er **styringsblokkene** dem, der styrer programmets forløb.  
Med dem kan du vente et stykke tid, registrere tastetryk, skrive logge ud med mere.


## Vent {#wait_sec}

Venter det angivne stykke tid (i sekunder) og kører derefter den næste kommando.

<BlockImage module="common/control" id="wait_sec" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| sec | Input (felt) | Ventetid — **literalt tal** (f.eks. `Utils.wait(0.5)`) | Reelt tal 0 eller større | - |
| sec | Input (blok) | Ventetid — **variabel/udtryk** (f.eks. `Utils.wait(time)`) | Reelt tal 0 eller større | - |

### Python
```python
# feltet sec = 2 → bruges som det er (i sekunder)
Utils.wait(2)

# input med variabel
Utils.wait(myVar)
```

## Vent én frame {#wait_1msec}

Standser programmets kørsel i én frame (cirka 0,001 sekund).

<BlockImage module="common/control" id="wait_1msec" />

### Parametre

(ingen — fast 0,001 sekund)

### Python
```python
Utils.wait(0.001)
```

<!--
## Vent for evigt {#wait_forever}

Standser programmets kørsel og venter i det uendelige.

### Parametre

(ingen)

### Python
```python
Utils.wait_forever()
```
-->

## Tastetryk {#key_pressed}

Returnerer **sand (True) / falsk (False)** alt efter, om en bestemt tast er trykket ned.

<BlockImage module="common/control" id="key_pressed" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| key | Input | Tastens navn | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Skriv til loggen {#log}

Skriver værdien af en bestemt variabel eller egenskab ud i realtid i vinduet **Konsol**.

<BlockImage module="common/control" id="log" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Input | Værdi der skal skrives ud | Vilkårlig værdi | - |
| tag | Input | Logtag | Streng | - |
| unit | Input | Enhed der vises | Streng | - |

### Python
```python
Utils.log(data, '', '')
```

## Vis i grafen {#scope}

Viser, hvordan en bestemt værdi ændrer sig, som en graf i realtid i vinduet **Graf**.  
Du kan indstille grafens farve, mindste og største værdi samt interval.

<BlockImage module="common/control" id="scope" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| signal | Input (blok) | Grafens signalværdi | Reelt tal | - |
| name | Input | Grafens navn | Streng | - |
| min_val | Input (felt) | Grafens mindste værdi | Reelt tal | - |
| max_val | Input (felt) | Grafens største værdi | Reelt tal | - |
| color | Farve | Grafens farve (hex) | Hex-streng | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
