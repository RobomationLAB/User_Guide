---
title: Audio
---

# Audio

Met de audioblokken kun je allerlei geluidseffecten en spraak afspelen.


## Geluid afspelen {#play_sound}

Speelt het gewenste geluid af met het opgegeven **volume**.  
Zet je het vinkje **herhalen** aan, dan wordt het gekozen geluid steeds opnieuw afgespeeld.

<BlockImage module="common/audio" id="play_sound" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| clip | Keuzelijstoptie | Naam van de geluidsclip | Naam van een clip in de geluidsbibliotheek | - |
| volume | Invoer (veld) | Volume | geheel getal 0 ~ 100 | 100 |
| repeat | Aankruisvak | Herhaald afspelen | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Taal en stem instellen {#set_tts}

Stelt de **taal** en de **stem** in waarmee **TTS** wordt afgespeeld.  
Door verschillende talen en stemmen te kiezen kun je natuurlijker klinkende spraak laten weergeven.

<BlockImage module="common/audio" id="set_tts" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| lang | Keuzelijstoptie | Taalcode | TTS-taalcodes van de 21 talen die het programma ondersteunt (bijv. `'ko-KR'`, `'en-US'`) | - |
| voice | Keuzelijstoptie | Naam van de stem | Naam van een TTS-stem van het systeem (bijv. `'Google Nederlands'`) | - |

### Python
```python
Utils.set_tts('nl-NL', '')
```

## Spreek uit {#speak}

Zet de ingevoerde tekst om in geluid en spreekt die uit.

<BlockImage module="common/audio" id="speak" />

### Parameters

| Naam | Soort | Beschrijving | Bereik / Type | Standaardwaarde |
| --- | --- | --- | --- | --- |
| text | Invoer | De tekst die wordt uitgesproken | tekst | - |

### Python
```python
Utils.speak('Hallo')
```
