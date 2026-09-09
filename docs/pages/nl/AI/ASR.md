---
title: Spraak naar tekst
---

# Spraak naar tekst

## Instantie declareren {#instance}

Voeg je een Spraak naar tekst(ASR)-blok toe aan het werkgebied, dan wordt in de Python-code automatisch de volgende instantiedeclaratie ingevoegd:

```python
asr = ASR(0)
# als er meerdere instanties zijn
asr_1 = ASR(1)
```

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| index | Keuzelijstoptie | Instantienummer (begint bij 0) | geheel getal ≥ 0 | 0 |


## Taal instellen {#lang}

Stelt de taal van de spraakherkenning in. Ook als je geen taal instelt, wordt die automatisch gekozen.

<BlockImage module="AI/ASR" id="lang" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Taalcode voor de herkenning | Codes van de 21 talen die het programma ondersteunt (bijv. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## Spraakherkenning starten / stoppen {#listen}

Start of stopt de spraakherkenning.

<BlockImage module="AI/ASR" id="listen" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| unit | Keuzelijstoptie | Actie | starten(start), stoppen(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Resultaat van de spraakherkenning {#result}

Het resultaat van de spraakherkenning

<BlockImage module="AI/ASR" id="result" />

### Parameters

(geen)

### Python
```python
asr = ASR(0)

asr.result()
```

## Is de spraakherkenning actief? {#state}

Geeft als **waar(True) / onwaar(False)** terug of de spraakherkenning actief is.

<BlockImage module="AI/ASR" id="state" />

### Parameters

(geen)

### Python
```python
asr = ASR(0)

asr.is_active()
```
