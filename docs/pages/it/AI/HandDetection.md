---
title: Rilevamento delle mani
---

# Rilevamento delle mani

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento delle mani (HandDetection) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
hand_detection = HandDetection(0)
# se ci sono più istanze
hand_detection_1 = HandDetection(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento del volto.

<BlockImage module="AI/HandDetection" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Caricare il modello {#load_model}

Carica il modello delle mani addestrato. Questa operazione è indispensabile per poter usare le funzioni del modulo «Rilevamento delle mani».

<BlockImage module="AI/HandDetection" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Impostare il numero massimo di mani {#max_hands}

Decide se, cercando le mani, il riferimento è una mano sola o entrambe le mani.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Numero di mani | una mano(one), due mani(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```


## Rilevare una volta {#detect_once}

Cerca la mano presente nell'immagine attuale e la mostra una volta sola.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo la mano presente nell'immagine attuale e la mostra sullo schermo.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento delle mani sull'immagine della fotocamera.

<BlockImage module="AI/HandDetection" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Coordinate di una parte della mano {#hand_data}

Restituisce le informazioni sulla posizione del palmo o del polso della mano indicata.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| side | Opzione di elenco | Lato della mano | sinistra(left), destra(right) | - |
| unit | Opzione di elenco | Parte della mano | palmo(palm), polso(wrist) | - |
| pos | Opzione di elenco | Tipo di coordinata / dimensione | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```


## Coordinate dell'articolazione di un dito {#joint_data}

Restituisce le coordinate dell'articolazione del dito indicato.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| side | Opzione di elenco | Lato della mano | sinistra(left), destra(right) | - |
| unit | Opzione di elenco | Dito | pollice(thumb), indice(index), medio(middle), anulare(ring), mignolo(pinky) | - |
| joint | Opzione di elenco | Posizione dell'articolazione | prima articolazione(first), seconda articolazione(second), terza articolazione(third), punta(last) | - |
| pos | Opzione di elenco | Coordinata | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```


## Informazioni sul rettangolo della mano {#hand_square}

Restituisce la posizione e le dimensioni del rettangolo dell'area della mano indicata.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| side | Opzione di elenco | Lato della mano | sinistra(left), destra(right) | - |
| unit | Opzione di elenco | Parte della mano | mano(hand), palmo(palm) | - |
| pos | Opzione di elenco | Informazione sul rettangolo | posizione x min(min_x), posizione x max(max_x), posizione y min(min_y), posizione y max(max_y), larghezza(width), altezza(height), area(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```


## Distanza tra mano e mano {#hand_to_hand_distance}

Restituisce la distanza tra due parti della mano.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Ingresso (testo) | Prima parte della mano | mano: `'side_unit'` (p. es. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Ingresso (testo) | Seconda parte della mano | mano: `'side_unit'` (p. es. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mano ↔ mano / distanza
hand_detection.get_distance('left_palm', 'right_palm')  
```


## Distanza tra mano e dito {#hand_to_joint_distance}

Restituisce la distanza tra una parte della mano e l'articolazione di un dito.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Ingresso (testo) | Prima parte | mano: `'side_unit'` (p. es. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Ingresso (testo) | Seconda parte | dito: `'side_unit_joint'` (p. es. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mano ↔ articolazione del dito / distanza orizzontale
hand_detection.get_distance('left_palm', 'right_index_first')
```


## Distanza tra dito e dito {#joint_to_joint_distance}

Restituisce la distanza tra le articolazioni di due dita.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Ingresso (testo) | Prima parte | dito: `'side_unit_joint'` (p. es. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Ingresso (testo) | Seconda parte | dito: `'side_unit_joint'` (p. es. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# articolazione del dito ↔ articolazione del dito / distanza verticale
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```
## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello della mano.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parametri

(nessuno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Se la mano è rilevata {#detected}

Se la mano è stata trovata

<BlockImage module="AI/HandDetection" id="detected" />

### Parametri

(nessuno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
