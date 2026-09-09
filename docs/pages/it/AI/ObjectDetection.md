---
title: Rilevamento degli oggetti
---

# Rilevamento degli oggetti

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento degli oggetti (ObjectDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
object_detection = ObjectDetection(0)
# se ci sono più istanze
object_detection_1 = ObjectDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento degli oggetti.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Caricare il modello {#load_model}

Carica il modello degli oggetti addestrato. Questa operazione è indispensabile per poter usare le funzioni del modulo «Rilevamento degli oggetti».

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```


## Impostare il numero massimo di oggetti {#max_objects}

Imposta il numero massimo di oggetti che si possono trovare. L'intervallo del numero di oggetti è 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Numero massimo di oggetti | intero 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```


## Impostare la soglia di confidenza {#confidence_threshold}

Imposta la probabilità (confidenza) minima per il rilevamento degli oggetti. Solo gli oggetti con probabilità (confidenza) pari o superiore vengono mostrati sullo schermo. L'intervallo della probabilità (confidenza) è 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Soglia di confidenza | decimale 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```


## Rilevare una volta {#detect_once}

Cerca gli oggetti presenti nell'immagine attuale e li mostra una volta sola.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```


## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo gli oggetti presenti nell'immagine attuale e li mostra sullo schermo.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```


## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento degli oggetti sull'immagine della fotocamera.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```


## Informazioni sulla posizione dell'oggetto {#object_data}

Restituisce la posizione e le dimensioni dell'oggetto indicato.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome dell'oggetto | 80 classi di oggetti (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` e altre) | - |
| pos | Opzione di elenco | Coordinata | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```


## Informazioni sul rettangolo dell'oggetto {#object_square}

Restituisce la posizione e le dimensioni del rettangolo dell'area dell'oggetto indicato.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome dell'oggetto | 80 classi di oggetti | - |
| pos | Opzione di elenco | Informazione sul rettangolo | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```


## Distanza tra due oggetti {#object_distance}

Restituisce la distanza tra due classi di oggetti.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Opzione di elenco | Nome del primo oggetto | 80 classi di oggetti | - |
| unit2 | Opzione di elenco | Nome del secondo oggetto | 80 classi di oggetti | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # distanza
object_detection.get_distance('person', 'car', 'horizontal')  # distanza orizzontale
```


## Confidenza dell'oggetto {#object_confidence}

La probabilità (confidenza) che l'oggetto scelto sia corretto

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome dell'oggetto | 80 classi di oggetti | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```


## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello degli oggetti.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parametri

(nessuno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```


## Se l'oggetto è rilevato {#detected}

Se un oggetto è stato trovato

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parametri

(nessuno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```


## È stato rilevato un oggetto determinato? {#object_detected}

Se l'oggetto scelto è stato trovato

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome dell'oggetto | 80 classi di oggetti | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
