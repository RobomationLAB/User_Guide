---
title: Rilevamento dettagliato del volto
---

# Rilevamento dettagliato del volto

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento dettagliato del volto (DetailedFaceDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
detailed_face_detection = DetailedDetailedFaceDetection(0)
# se ci sono più istanze
detailed_face_detection_1 = DetailedDetailedFaceDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento del volto.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Caricare il modello {#load_model}

Carica il modello del viso addestrato. Questa operazione è indispensabile per poter usare le funzioni del modulo «Rilevamento dettagliato del volto».

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Rilevare una volta {#detect_once}

Cerca il viso presente nell'immagine attuale e lo mostra una volta sola.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo il volto presente nell'immagine attuale e lo mostra sullo schermo.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento del volto sull'immagine della fotocamera.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coordinate di una parte del volto {#face_data}

Restituisce le coordinate di ogni parte del volto.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Parte del volto | viso(face), occhio sinistro(left eye), occhio destro(right eye), bocca(mouth), naso(nose), labbro superiore(upper lip), labbro inferiore(lower lip), angolo sinistro della bocca(left lip), angolo destro della bocca(right lip), pupilla sinistra(left pupil), pupilla destra(right pupil) | - |
| pos | Opzione di elenco | Coordinata | x, y | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Informazioni sul rettangolo di una parte del volto {#face_square}

Restituisce la posizione e le dimensioni del rettangolo dell'area di ogni parte del volto.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Parte del volto | viso(face), occhio sinistro(left eye), occhio destro(right eye), bocca(mouth) | - |
| pos | Opzione di elenco | Informazione sul rettangolo | posizione x min(min_x), posizione x max(max_x), posizione y min(min_y), posizione y max(max_y), larghezza(width), altezza(height), area(area) | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Distanza tra due parti {#distance}

Restituisce la distanza tra due parti del volto.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Opzione di elenco | Prima parte | nome di una parte del volto | - |
| unit2 | Opzione di elenco | Seconda parte | nome di una parte del volto | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # distanza
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # distanza orizzontale
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # distanza verticale
```

## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello del volto.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parametri

(nessuno)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Se il volto è rilevato {#detected}

Se il volto è stato trovato

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parametri

(nessuno)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.detected()
```
