---
title: Audio
---

# Audio

Audio blocks let you play a variety of sound effects and speech.


## Play sound {#play_sound}

Plays the sound you choose at the specified **volume**.  
Enabling the **repeat** checkbox plays the selected sound over and over.

<BlockImage module="common/audio" id="play_sound" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | Clip names in the sound library | - |
| volume | Input (field) | Volume | Integer 0 to 100 | 100 |
| repeat | Checkbox | Whether to repeat | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Set language and voice {#set_tts}

Sets the **lang** and **voice** used to play **TTS**.  
You can choose from various languages and voices to produce more natural-sounding speech.

<BlockImage module="common/audio" id="set_tts" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| lang | Dropdown option | Language code | TTS language codes for the 21 languages the program supports (e.g. `'ko-KR'`, `'en-US'`) | - |
| voice | Dropdown option | Voice name | System TTS voice names (e.g. `'Google US English'`) | - |

### Python
```python
Utils.set_tts('en-US', '')
```

## Speak {#speak}

Converts the entered text into sound and speaks it.

<BlockImage module="common/audio" id="speak" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| text | Input | Text to speak | String | - |

### Python
```python
Utils.speak('Hello')
```
