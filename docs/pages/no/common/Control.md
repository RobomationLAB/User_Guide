---
title: Styring
---

# Styring

I blokkodingen er **styringsblokkene** de som styrer flyten i programmet.  
Med dem kan du vente en viss tid, sjekke tastetrykk, skrive ut i loggen og mer.


## Vent {#wait_sec}

Venter det antall sekunder du angir, og kjører deretter neste kommando.

<BlockImage module="common/control" id="wait_sec" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| sec | Inndata (felt) | Ventetid — **et tall skrevet direkte** (f.eks. `Utils.wait(0.5)`) | Desimaltall 0 eller større | - |
| sec | Inndata (blokk) | Ventetid — **variabel/uttrykk** (f.eks. `Utils.wait(time)`) | Desimaltall 0 eller større | - |

### Python
```python
# feltet sec = 2 → som det står (i sekunder)
Utils.wait(2)

# inndata fra en variabel
Utils.wait(myVar)
```

## Vent én bilderamme {#wait_1msec}

Stopper programmet i én bilderamme (omtrent 0,001 sekund).

<BlockImage module="common/control" id="wait_1msec" />

### Parametere

(ingen — fast 0,001 sekund)

### Python
```python
Utils.wait(0.001)
```

<!--
## Vent for alltid {#wait_forever}

Stopper programmet og venter i det uendelige.

### Parametere

(ingen)

### Python
```python
Utils.wait_forever()
```
-->

## Tastetrykk {#key_pressed}

Returnerer **sann (True) / usann (False)** ut fra om en bestemt tast holdes nede.

<BlockImage module="common/control" id="key_pressed" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| key | Inndata | Tastenavn | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Skriv til loggen {#log}

Skriver verdien til en bestemt variabel eller egenskap ut i **konsollvinduet** i sanntid.

<BlockImage module="common/control" id="log" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| data | Inndata | Verdien som skal skrives ut | Vilkårlig verdi | - |
| tag | Inndata | Loggetikett | Streng | - |
| unit | Inndata | Enhet som vises | Streng | - |

### Python
```python
Utils.log(data, '', '')
```

## Vis i grafen {#scope}

Viser hvordan en bestemt verdi endrer seg, som en graf i sanntid i **grafvinduet**.  
Du kan angi grafens farge, minste- og størsteverdi og område.

<BlockImage module="common/control" id="scope" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| signal | Inndata (blokk) | Signalverdien i grafen | Desimaltall | - |
| name | Inndata | Grafens navn | Streng | - |
| min_val | Inndata (felt) | Grafens minsteverdi | Desimaltall | - |
| max_val | Inndata (felt) | Grafens størsteverdi | Desimaltall | - |
| color | Farge | Grafens farge (hex) | Hex-streng | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
