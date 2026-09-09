---
title: Rilevamento del corpo
---

# Rilevamento del corpo

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento del corpo (BodyDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
body_detection = BodyDetection(0)
# se ci sono più istanze
body_detection_1 = BodyDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento del volto.

<BlockImage module="AI/BodyDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Caricare il modello {#load_model}

Carica il modello del corpo addestrato. Questa operazione è indispensabile per poter usare le funzioni del modulo «Rilevamento del corpo».

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Rilevare una volta {#detect_once}

Cerca il corpo presente nell'immagine attuale e lo mostra una volta sola.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo il corpo presente nell'immagine attuale e lo mostra sullo schermo.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento del corpo sull'immagine della fotocamera.

<BlockImage module="AI/BodyDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coordinate di una parte del corpo {#body_data}

Restituisce le coordinate di ogni parte del corpo.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Parte del corpo | naso(nose), bocca(mouth), occhio sinistro(left eye), occhio destro(right eye), orecchio sinistro(left ear), orecchio destro(right ear), spalla sinistra(left shoulder), spalla destra(right shoulder), gomito sinistro(left elbow), gomito destro(right elbow), polso sinistro(left wrist), polso destro(right wrist), mano sinistra(left hand), mano destra(right hand), anca sinistra(left hip), anca destra(right hip), ginocchio sinistro(left knee), ginocchio destro(right knee), caviglia sinistra(left ankle), caviglia destra(right ankle), piede sinistro(left foot), piede destro(right foot) | - |
| pos | Opzione di elenco | Coordinata | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```


## Distanza tra due parti {#body_distance}

Restituisce la distanza tra due parti del corpo.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Opzione di elenco | Prima parte del corpo | (vedi la tabella delle parti del corpo sopra) | - |
| unit2 | Opzione di elenco | Seconda parte del corpo | (vedi la tabella delle parti del corpo sopra) | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # distanza
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # distanza orizzontale
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # distanza verticale
```


## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello del corpo.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parametri

(nessuno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Se il corpo è rilevato {#detected}

Se il corpo è stato trovato

<BlockImage module="AI/BodyDetection" id="detected" />

### Parametri

(nessuno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
