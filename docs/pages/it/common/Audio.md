---
title: Audio
---

# Audio

Con i blocchi audio puoi riprodurre effetti sonori e voci di ogni tipo.


## Riprodurre un suono {#play_sound}

Riproduce il suono che vuoi al **volume** indicato.  
Se attivi la casella **ripeti**, il suono scelto viene riprodotto in continuo.

<BlockImage module="common/audio" id="play_sound" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome della clip audio | nomi delle clip della libreria audio | - |
| volume | Ingresso (campo) | Volume | intero 0 ~ 100 | 100 |
| repeat | Casella di controllo | Se ripetere la riproduzione | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Impostare lingua e voce {#set_tts}

Imposta la **lingua** e la **voce** con cui viene riprodotto il **TTS**.  
Scegliendo tra le varie lingue e voci puoi ottenere una pronuncia più naturale.

<BlockImage module="common/audio" id="set_tts" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| lang | Opzione di elenco | Codice della lingua | codici di lingua TTS delle 21 lingue supportate dal programma (p. es. `'ko-KR'`, `'en-US'`) | - |
| voice | Opzione di elenco | Nome della voce | nomi delle voci TTS del sistema (p. es. `'Google italiano'`) | - |

### Python
```python
Utils.set_tts('it-IT', '')
```

## Pronunciare un testo {#speak}

Trasforma in suono il testo inserito e lo pronuncia.

<BlockImage module="common/audio" id="speak" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| text | Ingresso | Il testo da pronunciare | testo | - |

### Python
```python
Utils.speak('Ciao')
```
