---
title: Rilevamento marker ArUco
---

# Rilevamento marker ArUco

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Rilevamento marker ArUco (ArucoMarker) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
aruco_marker = ArucoMarker(0)
# se ci sono più istanze
aruco_marker_1 = ArucoMarker(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il rilevamento dei marker ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Impostare il numero massimo di marker {#max_count}

Imposta il numero massimo di marker che si possono riconoscere. L'intervallo del numero di marker è 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Numero massimo di marker | intero 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Rilevare una volta {#detect_once}

Cerca i marker presenti nell'immagine attuale e mostra le loro zone una volta sola.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo i marker presenti nell'immagine attuale e mostra le loro zone sullo schermo.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento dei marker sull'immagine della fotocamera.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Dati del marker {#marker_data}

Restituisce la posizione e le dimensioni del marker con l'ID indicato.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | ID del marker | intero maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Tipo di misura | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Distanza tra marker {#marker_to_marker}

Restituisce la distanza tra due marker.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Ingresso (blocco) | ID del primo marker | intero maggiore o uguale a 0 | - |
| unit2 | Ingresso (blocco) | ID del secondo marker | intero maggiore o uguale a 0 | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # distanza
aruco_marker.get_distance(0, 2, 'horizontal')  # distanza orizzontale
```

## Se il marker è rilevato {#marker_detected}

Se il marker con un id determinato è stato trovato

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | ID del marker | intero maggiore o uguale a 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
