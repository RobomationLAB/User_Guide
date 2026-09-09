---
title: Lyd
---

# Lyd

Med lydblokkene kan du spille av mange slags lydeffekter og tale.


## Spill av lyd {#play_sound}

Spiller av den lyden du velger, med det **volumet** du angir.  
Krysser du av for **gjenta**, spilles den valgte lyden om og om igjen.

<BlockImage module="common/audio" id="play_sound" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Nedtrekksalternativ | Navnet på lydklippet | Navn på klipp i lydbiblioteket | - |
| volume | Inndata (felt) | Volum | Heltall 0 til 100 | 100 |
| repeat | Avmerkingsboks | Om lyden skal gjentas | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Angi språk og stemme {#set_tts}

Angir **språket** og **stemmen** som **TTS** skal spilles av med.  
Du kan velge mellom mange språk og stemmer og få en mer naturlig tale.

<BlockImage module="common/audio" id="set_tts" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| lang | Nedtrekksalternativ | Språkkode | TTS-språkkodene for de 21 språkene programmet støtter (f.eks. `'nb-NO'`, `'en-US'`) | - |
| voice | Nedtrekksalternativ | Stemmens navn | Navnet på en TTS-stemme i systemet (f.eks. `'Google norsk'`) | - |

### Python
```python
Utils.set_tts('nb-NO', '')
```

## Si {#speak}

Gjør teksten du skriver inn, om til lyd og sier den.

<BlockImage module="common/audio" id="speak" />

### Parametere

| Navn | Slag | Beskrivelse | Område / Type | Standard |
| --- | --- | --- | --- | --- |
| text | Inndata | Teksten som skal sies | Streng | - |

### Python
```python
Utils.speak('Hei')
```
