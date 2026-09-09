---
title: Audio
---

# Audio

Mit den Audio-Blöcken kannst du verschiedene Klänge und Sprachausgaben abspielen.


## Ton abspielen {#play_sound}

Spielt den gewünschten Ton mit der angegebenen **Lautstärke** ab.  
Wenn du das Kästchen **Wiederholung** aktivierst, wird der gewählte Ton immer wieder abgespielt.

<BlockImage module="common/audio" id="play_sound" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| clip | Dropdown-Option | Name des Tonclips | Clipnamen aus der Tonbibliothek | - |
| volume | Eingabe (Feld) | Lautstärke | ganze Zahl 0 ~ 100 | 100 |
| repeat | Kontrollkästchen | Wiederholt abspielen | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Sprache und Stimme festlegen {#set_tts}

Legt die **Sprache** und die **Stimme** für die **TTS**-Ausgabe fest.  
Durch die Auswahl verschiedener Sprachen und Stimmen kann die Ausgabe natürlicher klingen.

<BlockImage module="common/audio" id="set_tts" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| lang | Dropdown-Option | Sprachcode | TTS-Sprachcodes der 21 vom Programm unterstützten Sprachen (z. B. `'ko-KR'`, `'en-US'`) | - |
| voice | Dropdown-Option | Name der Stimme | Name einer TTS-Stimme des Systems (z. B. `'Google Deutsch'`) | - |

### Python
```python
Utils.set_tts('de-DE', '')
```

## Sprechen {#speak}

Wandelt den eingegebenen Text in Sprache um und spricht ihn aus.

<BlockImage module="common/audio" id="speak" />

### Parameter

| Name | Art | Beschreibung | Bereich / Typ | Standardwert |
| --- | --- | --- | --- | --- |
| text | Eingabe | zu sprechender Text | Zeichenkette | - |

### Python
```python
Utils.speak('Hallo')
```
