---
title: Tale til tekst
---

# Tale til tekst

## Instanserklæring {#instance}

Når du legger til en Tale til tekst(ASR)-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:

```python
asr = ASR(0)
# Når det finnes flere instanser
asr_1 = ASR(1)
```

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Nedtrekksalternativ | Instansnummer (starter på 0) | Heltall 0 eller større | 0 |


## Sett språk {#lang}

Angir språket talegjenkjenningen skal bruke. Språket settes automatisk selv om du ikke angir det.

<BlockImage module="AI/ASR" id="lang" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Språkkode for gjenkjenningen | Kodene for de 21 språkene programmet støtter (f.eks. `'nb-NO'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('nb-NO')
```

## Start / stopp talegjenkjenning {#listen}

Starter eller stopper talegjenkjenningen.

<BlockImage module="AI/ASR" id="listen" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Nedtrekksalternativ | Handling | start(start), stopp(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Resultatet av talegjenkjenningen {#result}

Resultatet av talegjenkjenningen

<BlockImage module="AI/ASR" id="result" />

### Parametere

(ingen)

### Python
```python
asr = ASR(0)

asr.result()
```

## Gjenkjenner den tale? {#state}

Returnerer **sann (True) / usann (False)** ut fra om talegjenkjenningen er aktiv.

<BlockImage module="AI/ASR" id="state" />

### Parametere

(ingen)

### Python
```python
asr = ASR(0)

asr.is_active()
```
