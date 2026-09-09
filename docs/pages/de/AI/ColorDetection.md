---
title: Farberkennung
---

# Farberkennung

## Instanz deklarieren {#instance}

Wenn du einen Farberkennung(ColorDetection)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
color_detection = ColorDetection(0)
# wenn es mehrere Instanzen gibt
color_detection_1 = ColorDetection(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Farberkennung fest.

<BlockImage module="AI/ColorDetection" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Zielfarbe registrieren {#register_color}

Fügt eine Farbe hinzu, die von der Farberkennung erkannt werden soll.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | schwarz(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Zielfarbe löschen {#delete_color}

Entfernt die angegebene Farbe aus den Farben, die von der Farberkennung erkannt werden sollen.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | schwarz(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | - |
| wait | Kontrollkästchen | Auf Abschluss warten | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Erkennungsbedingung für die Fläche setzen {#area_condition}

Legt die Mindestgröße der Fläche fest, die als Farbbereich erkannt wird. Nur Bereiche, deren Fläche über diesem Wert liegt, werden auf dem Bildschirm angezeigt.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| data | Eingabe (Block) | Wert der Flächenbedingung | Dezimalzahl ≥ 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Farbe einmal erkennen {#detect_once}

Findet unter den registrierten Farben die im aktuellen Bild vorhandenen und markiert deren Bereiche genau einmal.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parameter

(keine)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Kontinuierliche Farberkennung starten / stoppen {#detect_continuous}

Verfolgt unter den registrierten Farben die im aktuellen Bild vorhandenen fortlaufend und markiert deren Bereiche auf dem Bildschirm.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Farberkennung im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/ColorDetection" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Position der Farbfläche {#color_data}

Gibt Position und Größe der angegebenen Farbe zurück.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | schwarz(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | - |
| pos | Dropdown-Option | Art der Koordinate / Größe | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Bestimmte Farbe erkannt? {#color_detected}

Ob die gewählte Farbe gefunden wurde

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| color | Dropdown-Option | Name der Farbe | schwarz(black), rot(red), gelb(yellow), grün(green), cyan(cyan), blau(blue), magenta(magenta), weiß(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
