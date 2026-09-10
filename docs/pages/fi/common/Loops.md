---
title: Silmukat
---

# Silmukat

Silmukoiden ohjaukseen on kahdenlaisia rakenteita:  
**ehtolauseet** ja **silmukkalauseet** (ne, jotka muuttujien arvojen perusteella ohjaavat, kuinka monta kertaa sisältö suoritetaan)


## Toista {#controls_repeat}

Yksinkertaisin **toista**-lohko suorittaa sisällön koodin niin monta kertaa kuin määrität. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Laske {#controls_for}

Lohko **laske** (jota useimmat kutsuvat **for-silmukaksi**) kasvattaa muuttujaa ensimmäisestä arvosta kolmanteen arvoon toisen arvon suuruisin askelin ja suorittaa sisällön kerran jokaisella arvolla.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Kullekin kohteelle {#controls_forEach}

Lohko **kullekin kohteelle** toimii samaan tapaan, mutta käyttää lukusarjan sijasta listan arvoja järjestyksessä.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Toista niin kauan kuin / kunnes {#controls_while}

Lohko **toista niin kauan kuin** toistaa sisältöä niin kauan kuin ehto on tosi.  
Lohko **toista kunnes** toistaa sisältöä niin kauan kuin ehto on epätosi, ja poistuu silmukasta sillä hetkellä, kun ehto muuttuu todeksi.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Keskeytä / jatka {#controls_flow_statements}

Lohkolla **keskeytä** voit **poistua silmukasta ennenaikaisesti**.  
**jatka** (**continue** useimmissa ohjelmointikielissä) ohittaa sisällön loput koodit ja aloittaa seuraavan kierroksen.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
