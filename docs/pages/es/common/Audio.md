---
title: Audio
---

# Audio

Con los bloques de audio puedes reproducir todo tipo de efectos de sonido y voz.


## Reproducir sonido {#play_sound}

Reproduce el sonido que quieras con el **volumen** indicado.  
Si activas la casilla **repetir**, el sonido elegido se reproduce una y otra vez.

<BlockImage module="common/audio" id="play_sound" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | Nombre de un clip de la biblioteca de sonidos | - |
| volume | Entrada (campo) | Volumen | entero 0 ~ 100 | 100 |
| repeat | Casilla | Reproducir de forma repetida | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Establecer idioma y voz {#set_tts}

Establece el **idioma** y la **voz** con los que se reproduce el **TTS**.  
Eligiendo distintos idiomas y voces puedes conseguir una voz más natural.

<BlockImage module="common/audio" id="set_tts" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| lang | Opción de desplegable | Código de idioma | Códigos de idioma TTS de los 21 idiomas que admite el programa (p. ej. `'ko-KR'`, `'en-US'`) | - |
| voice | Opción de desplegable | Nombre de la voz | Nombre de una voz TTS del sistema (p. ej. `'Google español'`) | - |

### Python
```python
Utils.set_tts('es-ES', '')
```

## Decir {#speak}

Convierte el texto introducido en sonido y lo dice.

<BlockImage module="common/audio" id="speak" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| text | Entrada | El texto que se dice | texto | - |

### Python
```python
Utils.speak('Hola')
```
