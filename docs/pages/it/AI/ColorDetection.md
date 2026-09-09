---
title: Rilevamento dei colori
---

# Rilevamento dei colori

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento dei colori (ColorDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
color_detection = ColorDetection(0)
# se ci sono più istanze
color_detection_1 = ColorDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento dei colori.

<BlockImage module="AI/ColorDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Registrare un colore {#register_color}

Aggiunge un colore da riconoscere con il rilevamento dei colori.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | nero(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Eliminare un colore {#delete_color}

Elimina quel colore dai colori da riconoscere con il rilevamento dei colori.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | nero(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Impostare la condizione di area {#area_condition}

Stabilisce l'area minima della zona di colore da riconoscere. Solo le zone con area pari o superiore vengono mostrate sullo schermo.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Valore della condizione di area | decimale maggiore o uguale a 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Rilevare una volta {#detect_once}

Tra i colori riconoscibili cerca quelli presenti nell'immagine attuale e mostra le loro zone una volta sola.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Tra i colori riconoscibili segue in continuo quelli presenti nell'immagine attuale e mostra le loro zone sullo schermo.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento dei colori sull'immagine della fotocamera.

<BlockImage module="AI/ColorDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Informazioni sul colore {#color_data}

Restituisce la posizione e le dimensioni del colore indicato.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | nero(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |
| pos | Opzione di elenco | Tipo di coordinata / dimensione | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Se un colore determinato è rilevato {#color_detected}

Se il colore scelto è stato trovato

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | nero(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
