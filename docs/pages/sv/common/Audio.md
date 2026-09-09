---
title: Ljud
---

# Ljud

Med ljudblocken kan du spela upp olika ljudeffekter och tal.


## Spela ljud {#play_sound}

Spelar upp det valda ljudet med den angivna **volymen**.  
Om du kryssar i rutan **upprepa** spelas det valda ljudet upp om och om igen.

<BlockImage module="common/audio" id="play_sound" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| clip | Rullgardinsalternativ | Namn på ljudklipp | Namn på klipp i ljudbiblioteket | - |
| volume | Inmatning (fält) | Volym | Heltal 0 till 100 | 100 |
| repeat | Kryssruta | Om ljudet ska upprepas | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Ställ in språk och röst {#set_tts}

Ställer in vilket **språk** och vilken **röst** som ska användas för **TTS**.  
Genom att välja bland olika språk och röster kan du få ett mer naturligt tal.

<BlockImage module="common/audio" id="set_tts" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| lang | Rullgardinsalternativ | Språkkod | TTS-språkkoder för de 21 språk som programmet stöder (t.ex. `'sv-SE'`, `'en-US'`) | - |
| voice | Rullgardinsalternativ | Röstnamn | Namn på systemets TTS-röster (t.ex. `'Google svenska'`) | - |

### Python
```python
Utils.set_tts('sv-SE', '')
```

## Säg {#speak}

Omvandlar den angivna texten till tal och läser upp den.

<BlockImage module="common/audio" id="speak" />

### Parametrar

| Namn | Sort | Beskrivning | Intervall / Typ | Standard |
| --- | --- | --- | --- | --- |
| text | Inmatning | Text som ska läsas upp | Sträng | - |

### Python
```python
Utils.speak('Hej')
```
