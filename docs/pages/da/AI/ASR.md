---
title: Tale til tekst
---

# Tale til tekst

## Instanserklæring {#instance}

Når du tilføjer en Tale til tekst(ASR)-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:

```python
asr = ASR(0)
# Når der er flere instanser
asr_1 = ASR(1)
```

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| index | Rullemenupunkt | Instansnummer (starter ved 0) | Heltal 0 eller større | 0 |


## Indstil sproget {#lang}

Indstiller, hvilket sprog talegenkendelsen skal bruge. Sproget indstilles automatisk, også hvis du ikke angiver noget.

<BlockImage module="AI/ASR" id="lang" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Sprogkode for genkendelsen | Koder for de 21 sprog, som programmet understøtter (f.eks. `'da-DK'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('da-DK')
```

## Start / stop talegenkendelsen {#listen}

Starter eller stopper talegenkendelsen.

<BlockImage module="AI/ASR" id="listen" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| unit | Rullemenupunkt | Handling | start(start), stop(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Talegenkendelsens resultat {#result}

Talegenkendelsens resultat

<BlockImage module="AI/ASR" id="result" />

### Parametre

(ingen)

### Python
```python
asr = ASR(0)

asr.result()
```

## Genkender den tale? {#state}

Returnerer **sand (True) / falsk (False)** alt efter, om talegenkendelsen er aktiv.

<BlockImage module="AI/ASR" id="state" />

### Parametre

(ingen)

### Python
```python
asr = ASR(0)

asr.is_active()
```
