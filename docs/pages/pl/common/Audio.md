---
title: Dźwięk
---

# Dźwięk

Bloki dźwiękowe pozwalają odtwarzać różne efekty dźwiękowe i mowę.


## Odtwórz dźwięk {#play_sound}

Odtwarza wybrany dźwięk z ustawioną **głośnością**.  
Zaznaczenie pola wyboru **powtarzanie** sprawia, że wybrany dźwięk jest odtwarzany w kółko.

<BlockImage module="common/audio" id="play_sound" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| clip | Opcja listy rozwijanej | Nazwa klipu dźwiękowego | Nazwy klipów z biblioteki dźwięków | - |
| volume | Wejście (pole) | Głośność | Liczba całkowita od 0 do 100 | 100 |
| repeat | Pole wyboru | Czy odtwarzać w pętli | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Ustaw język i głos {#set_tts}

Ustawia **język** i **głos**, którymi odtwarzana jest **mowa (TTS)**.  
Wybierając różne języki i głosy, można uzyskać bardziej naturalne brzmienie.

<BlockImage module="common/audio" id="set_tts" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| lang | Opcja listy rozwijanej | Kod języka | Kody języków TTS dla 21 języków obsługiwanych przez program (np. `'pl-PL'`, `'en-US'`) | - |
| voice | Opcja listy rozwijanej | Nazwa głosu | Nazwa głosu TTS w systemie (np. `'Google polski'`) | - |

### Python
```python
Utils.set_tts('pl-PL', '')
```

## Wypowiedz {#speak}

Zamienia wpisany tekst na mowę i wypowiada go.

<BlockImage module="common/audio" id="speak" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| text | Wejście | Tekst do wypowiedzenia | Ciąg znaków | - |

### Python
```python
Utils.speak('Dzień dobry')
```
