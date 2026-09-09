---
title: Autonomes Fahren mit Kamera
---

# Autonomes Fahren mit Kamera

## Instanz deklarieren {#instance}

Wenn du einen Autonomes Fahren mit Kamera(SelfDriving)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
self_driving = SelfDriving(0)
# wenn es mehrere Instanzen gibt
self_driving_1 = SelfDriving(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für das autonome Fahren mit Kamera fest.

<BlockImage module="AI/SelfDriving" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Spurfarbe festlegen {#set_lane_color}

Legt die Farbe der linken und der rechten Fahrspur fest.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| left | Dropdown-Option | Farbe der linken Fahrspur | rot(red), grün(green), blau(blue) | - |
| right | Dropdown-Option | Farbe der rechten Fahrspur | rot(red), grün(green), blau(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Einmal erkennen {#detect_once}

Findet die gewählten Farben bzw. Fahrspuren im Bild und markiert deren Bereiche genau einmal.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parameter

(keine)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Kontinuierliche Erkennung starten / stoppen {#detect_continuous}

Verfolgt die gewählten Farben bzw. Fahrspuren im Bild fortlaufend und markiert deren Bereiche auf dem Bildschirm.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Farb- bzw. Fahrspurerkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/SelfDriving" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Spurdaten {#lane_data}

Gibt die Position oder den Abstand der angegebenen Fahrspur zurück.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| lane | Dropdown-Option | Fahrspur | links(left), rechts(right) | - |
| unit | Dropdown-Option | Art des Messwerts | x, Abstand(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Farbdaten {#color_data}

Gibt Position und Größe der angegebenen Farbe zurück.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | rot(red), grün(green), blau(blue) | - |
| unit | Dropdown-Option | Art der Koordinate / Größe | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Abstand zwischen zwei Farbbereichen {#color_to_color}

Gibt den Abstand zwischen zwei Farben zurück.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown-Option | erste Farbe | rot(red), grün(green), blau(blue) | - |
| unit2 | Dropdown-Option | zweite Farbe | rot(red), grün(green), blau(blue) | - |
| type | Dropdown-Option | Art des Abstands | Abstand (weggelassen oder None), horizontaler Abstand(horizontal), vertikaler Abstand(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # Abstand
self_driving.get_distance('green', 'blue', 'horizontal')  # horizontaler Abstand
```

## Fahrspur erkannt? {#lane_detected}

Ob eine bestimmte Fahrspur gefunden wurde

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| lane | Dropdown-Option | Fahrspur | links(left), rechts(right), beide(both), beliebig(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Farbbereich erkannt? {#color_detected}

Ob ein bestimmter Farbbereich gefunden wurde

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | rot(red), grün(green), blau(blue), beliebig(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
