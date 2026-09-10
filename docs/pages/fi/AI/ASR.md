---
title: Puhe tekstiksi
---

# Puhe tekstiksi

## Instanssin esittely {#instance}

Kun lisäät Puhe tekstiksi(ASR)-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:

```python
asr = ASR(0)
# Kun instansseja on useita
asr_1 = ASR(1)
```

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| index | Pudotusvalikon vaihtoehto | Instanssin numero (alkaa nollasta) | Kokonaisluku 0 tai suurempi | 0 |


## Aseta kieli {#lang}

Määrittää puheentunnistuksen kielen. Kieli asetetaan automaattisesti, vaikka et määritä sitä.

<BlockImage module="AI/ASR" id="lang" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Tunnistuksen kielikoodi | Ohjelman tukemien 21 kielen koodit (esim. `'fi-FI'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('fi-FI')
```

## Käynnistä / pysäytä puheentunnistus {#listen}

Käynnistää tai pysäyttää puheentunnistuksen.

<BlockImage module="AI/ASR" id="listen" />

### Parametrit

| Nimi | Laji | Kuvaus | Alue / Tyyppi | Oletus |
| --- | --- | --- | --- | --- |
| unit | Pudotusvalikon vaihtoehto | Toiminto | käynnistä(start), pysäytä(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Puheentunnistuksen tulos {#result}

Puheentunnistuksen tulos

<BlockImage module="AI/ASR" id="result" />

### Parametrit

(ei mitään)

### Python
```python
asr = ASR(0)

asr.result()
```

## Tunnistetaanko puhetta? {#state}

Palauttaa **toden (True) / epätoden (False)** sen mukaan, onko puheentunnistus käynnissä.

<BlockImage module="AI/ASR" id="state" />

### Parametrit

(ei mitään)

### Python
```python
asr = ASR(0)

asr.is_active()
```
