---
title: Spracherkennung
---

# Spracherkennung

## Instanz deklarieren {#instance}

Wenn du einen Spracherkennung(ASR)-Block zum Arbeitsbereich hinzufügst, wird im Python-Code automatisch die folgende Instanzdeklaration eingefügt:

```python
asr = ASR(0)
# wenn es mehrere Instanzen gibt
asr_1 = ASR(1)
```

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| index | Dropdown-Option | Instanznummer (beginnt bei 0) | ganze Zahl ≥ 0 | 0 |


## Sprache setzen {#lang}

Legt die Sprache für die Spracherkennung fest. Auch ohne Einstellung wird sie automatisch gesetzt.

<BlockImage module="AI/ASR" id="lang" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Sprachcode für die Erkennung | Codes der 21 vom Programm unterstützten Sprachen (z. B. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## Spracherkennung starten / stoppen {#listen}

Startet oder stoppt die Spracherkennung.

<BlockImage module="AI/ASR" id="listen" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| unit | Dropdown-Option | Aktion | starten(start), stoppen(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Ergebnis {#result}

Das Ergebnis der Spracherkennung

<BlockImage module="AI/ASR" id="result" />

### Parameter

(keine)

### Python
```python
asr = ASR(0)

asr.result()
```

## Spracherkennung aktiv? {#state}

Gibt zurück, ob die Spracherkennung aktiv ist, als **true(True) / false(False)**.

<BlockImage module="AI/ASR" id="state" />

### Parameter

(keine)

### Python
```python
asr = ASR(0)

asr.is_active()
```
