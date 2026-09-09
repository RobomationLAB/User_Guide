---
title: Rilevamento del volto
---

# Rilevamento del volto

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento del volto (FaceDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
face_detection = FaceDetection(0)
# se ci sono più istanze
face_detection_1 = FaceDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento del volto.

<BlockImage module="AI/FaceDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Caricare il modello {#load_model}

Carica il modello del volto addestrato. Questa operazione è indispensabile per poter usare le funzioni del modulo «Rilevamento del volto».

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Rilevare una volta {#detect_once}

Cerca il volto presente nell'immagine attuale e lo mostra una volta sola.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo il volto presente nell'immagine attuale e lo mostra sullo schermo.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento del volto sull'immagine della fotocamera.

<BlockImage module="AI/FaceDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Posizione di una parte del volto {#face_data}

Restituisce le coordinate della posizione del volto o di una sua parte.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Parte del volto | volto(face), occhio sinistro(left eye), occhio destro(right eye), orecchio sinistro(left ear), orecchio destro(right ear), naso(nose), bocca(mouth) | - |
| pos | Opzione di elenco | Tipo di coordinata | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Informazioni sul rettangolo del volto {#face_square}

Restituisce la posizione e le dimensioni del rettangolo dell'area del volto.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| pos | Opzione di elenco | Informazione sul rettangolo | posizione x min(min_x), posizione x max(max_x), posizione y min(min_y), posizione y max(max_y), larghezza(width), altezza(height), area(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Distanza tra due parti {#distance}

Restituisce la distanza tra due parti del volto.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Opzione di elenco | Prima parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Opzione di elenco | Seconda parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # distanza
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # distanza orizzontale
face_detection.get_distance('nose', 'mouth', 'vertical')  # distanza verticale
```

## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello del volto.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parametri

(nessuno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Se il volto è rilevato {#detected}

Se il volto è stato trovato

<BlockImage module="AI/FaceDetection" id="detected" />

### Parametri

(nessuno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
