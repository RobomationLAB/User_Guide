---
title: Lyd
---

# Lyd

Med lydblokkene kan du afspille forskellige lydeffekter og tale.


## Afspil lyd {#play_sound}

Afspiller den valgte lyd med den angivne **lydstyrke**.  
Hvis du sætter flueben i **gentag**, afspilles den valgte lyd igen og igen.

<BlockImage module="common/audio" id="play_sound" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullemenupunkt | Navn på lydklip | Navn på klip i lydbiblioteket | - |
| volume | Input (felt) | Lydstyrke | Heltal 0 til 100 | 100 |
| repeat | Afkrydsningsfelt | Om lyden skal gentages | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Indstil sprog og stemme {#set_tts}

Indstiller det **sprog** og den **stemme**, der skal bruges til **TTS**.  
Ved at vælge mellem forskellige sprog og stemmer kan du få en mere naturlig tale.

<BlockImage module="common/audio" id="set_tts" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| lang | Rullemenupunkt | Sprogkode | TTS-sprogkoder for de 21 sprog, som programmet understøtter (f.eks. `'da-DK'`, `'en-US'`) | - |
| voice | Rullemenupunkt | Stemmenavn | Navn på systemets TTS-stemmer (f.eks. `'Google dansk'`) | - |

### Python
```python
Utils.set_tts('da-DK', '')
```

## Sig {#speak}

Omdanner den angivne tekst til tale og læser den op.

<BlockImage module="common/audio" id="speak" />

### Parametre

| Navn | Slags | Beskrivelse | Interval / Type | Standard |
| --- | --- | --- | --- | --- |
| text | Input | Tekst der skal læses op | Streng | - |

### Python
```python
Utils.speak('Hej')
```
