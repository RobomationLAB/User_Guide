---
title: CSD-02 RGB-lysdiod
---

# CSD-02 RGB-lysdiod

## Instansdeklaration {#instance}

När du lägger till ett CSD-02 RGB-lysdiod(CSD02)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Starta RGB-lysdioden {#start}

Börjar använda RGB-lysdioden.  
Om du inte lägger till det här blocket aktiveras inte RGB-lysdioden.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Ställa in färgen {#set_color}

Ställer in lysdiodens färg på CSD02 till den angivna färgen.  
När du väljer en färg i färgpaletten omvandlas den till ett **färgnamn** (en engelsk sträng) i anropet. (Koden skapas med färgnamnet, inte med siffervärden för R, G och B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| color | Färg | Val i färgpaletten → omvandlas till ett färgnamn (engelska) | Färgnamn: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Ställa in färgen med ett block från Färg-kategorin {#set_color_with_block}

Tar emot ett block från Färg-kategorin (t.ex. fältet `[R, G, B]`) som inmatning och ställer in lysdiodens färg på CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| data | Inmatning (färg) | Utdata från ett block i Färg-kategorin eller fältet `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Ändra färgen med RGB {#change_by_rgb}

Lägger de angivna R-, G- och B-ändringarna till lysdiodens nuvarande färg och ställer in den nya färgen.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| r | Inmatning (fält) | Ändring av rött | Heltal -255 till 255 | 0 |
| g | Inmatning (fält) | Ändring av grönt | Heltal -255 till 255 | 0 |
| b | Inmatning (fält) | Ändring av blått | Heltal -255 till 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Släcka lysdioden {#turn_off}

Tar bort RGB-lysdiodens färg.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametrar

(ingen)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
