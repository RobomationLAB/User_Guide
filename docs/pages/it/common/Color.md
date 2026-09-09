---
title: Colore
---

# Colore

I colori si usano in molti programmi grafici. 


## Colore base {#color_picker}

Il modo più semplice per ottenere un colore è usare la **tavolozza dei colori**.  
Se fai clic sul quadratino bianco con gli angoli arrotondati compare la tavolozza dei colori, in cui puoi scegliere il colore che vuoi.

<BlockImage module="common/color" id="color_picker" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Colore | Colore preimpostato | nero(black), rosso(red), giallo(yellow), verde(green),<br>ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |

### Python
```python
# esempio: quando si sceglie il colore preimpostato rosso
Utils.color('red')
```

## Colore cursore {#color_slider}

Con il blocco **colore cursore** puoi comporre un colore da te usando un cursore circolare e uno a barra.  
Se fai clic sul quadratino bianco con gli angoli arrotondati compaiono una ruota dei colori circolare, con cui regoli i valori di **rosso (R), verde (G) e blu (B)**, e un cursore a barra, con cui regoli la **luminosità**.

<BlockImage module="common/color" id="color_slider" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Colore | Ruota dei colori + cursore della luminosità | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# il colore scelto nella ruota dei colori → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Colore RGB {#color_rgb}

Il blocco **colore RGB** crea un array RGB indicando singolarmente i valori di rosso, verde e blu.

<BlockImage module="common/color" id="color_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| r | Ingresso (blocco) | Valore del rosso | intero 0 ~ 255 | - |
| g | Ingresso (blocco) | Valore del verde | intero 0 ~ 255 | - |
| b | Ingresso (blocco) | Valore del blu | intero 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Colore casuale {#color_random}

Il blocco **colore casuale** genera un colore RGB casuale ogni volta che viene chiamato.

<BlockImage module="common/color" id="color_random" />

### Parametri

(nessuno)

### Python
```python
Utils.random_color()
```
