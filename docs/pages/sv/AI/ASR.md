---
title: Tal till text
---

# Tal till text

## Instansdeklaration {#instance}

När du lägger till ett Tal till text(ASR)-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:

```python
asr = ASR(0)
# När det finns flera instanser
asr_1 = ASR(1)
```

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| index | Rullgardinsalternativ | Instansnummer (börjar på 0) | Heltal 0 eller större | 0 |


## Ställa in språket {#lang}

Ställer in vilket språk taligenkänningen ska använda. Språket ställs in automatiskt även om du inte anger något.

<BlockImage module="AI/ASR" id="lang" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Språkkod för igenkänningen | Koder för de 21 språk som programmet stöder (t.ex. `'sv-SE'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('sv-SE')
```

## Starta / stoppa taligenkänningen {#listen}

Startar eller stoppar taligenkänningen.

<BlockImage module="AI/ASR" id="listen" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullgardinsalternativ | Åtgärd | starta(start), stoppa(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Taligenkänningens resultat {#result}

Taligenkänningens resultat

<BlockImage module="AI/ASR" id="result" />

### Parametrar

(ingen)

### Python
```python
asr = ASR(0)

asr.result()
```

## Känner den igen tal? {#state}

Returnerar **sant (True) / falskt (False)** beroende på om taligenkänningen är aktiv.

<BlockImage module="AI/ASR" id="state" />

### Parametrar

(ingen)

### Python
```python
asr = ASR(0)

asr.is_active()
```
