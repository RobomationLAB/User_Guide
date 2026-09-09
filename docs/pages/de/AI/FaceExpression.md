---
title: Gesichtsausdruck
---

# Gesichtsausdruck

## Instanz deklarieren {#instance}

Wenn du einen Gesichtsausdruck(FaceExpression)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
face_expression = FaceExpression(0)
# wenn es mehrere Instanzen gibt
face_expression_1 = FaceExpression(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Kamera festlegen {#device}

Legt die Kamera für die Erkennung von Alter, Geschlecht und Gesichtsausdruck fest.

<BlockImage module="AI/FaceExpression" id="device" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Name des Kameragerätes | Kamerabezeichnung des Systems | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Modell für Gesichtsausdruck laden {#load_model}

Lädt die trainierten Modelle für Alter, Geschlecht und Gesichtsausdruck. Dieser Schritt ist zwingend nötig, um die Funktionen des Moduls „Gesichtsausdruck" zu verwenden.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| wait | Kontrollkästchen | Auf Abschluss des Ladens warten | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Gesichtsausdruck einmal erkennen {#detect_once}

Analysiert das Gesicht im aktuellen Bild und zeigt die geschätzten Werte für Alter, Geschlecht und Gesichtsausdruck genau einmal an.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Kontinuierliche Erkennung starten / stoppen {#detect_continuous}

Analysiert das Gesicht im aktuellen Bild fortlaufend und zeigt die geschätzten Werte für Alter, Geschlecht und Gesichtsausdruck auf dem Bildschirm an.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Ergebnis anzeigen {#display}

Legt fest, ob das Ergebnis der Erkennung von Alter, Geschlecht und Gesichtsausdruck im Kamerabild angezeigt wird oder nicht.

<BlockImage module="AI/FaceExpression" id="display" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| on | Dropdown-Option | Anzeige ON / OFF | anzeigen(on=True), ausblenden(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Alter {#age}

Alter

<BlockImage module="AI/FaceExpression" id="age" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Geschlecht {#gender}

Geschlecht

<BlockImage module="AI/FaceExpression" id="gender" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Gesichtsausdruck {#expression}

Gesichtsausdruck

<BlockImage module="AI/FaceExpression" id="expression" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Geschlecht erkannt? {#gender_detected}

Ob das Geschlecht erkannt wurde

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Geschlecht ist ~ ? {#gender_check}

Gibt zurück, ob das erkannte Geschlecht mit dem angegebenen Wert übereinstimmt, als **true(True) / false(False)**.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Geschlecht | männlich(male), weiblich(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Konfidenz für Geschlecht {#gender_confidence}

Die Wahrscheinlichkeit (Konfidenz) für das gewählte Geschlecht

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Geschlecht | männlich(male), weiblich(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Gesichtsausdruck erkannt? {#expression_detected}

Ob der Gesichtsausdruck erkannt wurde

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Gesichtsausdruck ist ~ ? {#expression_check}

Gibt zurück, ob der erkannte Gesichtsausdruck mit dem angegebenen Wert übereinstimmt, als **true(True) / false(False)**.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gesichtsausdruck | wütend(angry), angewidert(disgusted), ängstlich(fearful), glücklich(happy), neutral(neutral), traurig(sad), überrascht(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Konfidenz für Gesichtsausdruck {#expression_confidence}

Die Wahrscheinlichkeit (Konfidenz) für den gewählten Gesichtsausdruck

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Gesichtsausdruck | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Ladezustand des Modells {#model_state}

Gibt den Ladezustand der Modelle für Alter, Geschlecht und Gesichtsausdruck zurück.  
Ist es noch nicht geladen, wird 0 zurückgegeben, während des Ladens 1 und nach dem Laden 2.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parameter

(keine)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
