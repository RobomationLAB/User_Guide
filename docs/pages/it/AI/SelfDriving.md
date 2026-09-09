---
title: Guida autonoma con fotocamera
---

# Guida autonoma con fotocamera

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Guida autonoma con fotocamera (SelfDriving) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
self_driving = SelfDriving(0)
# se ci sono più istanze
self_driving_1 = SelfDriving(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per la guida autonoma con fotocamera.

<BlockImage module="AI/SelfDriving" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Impostare il colore della corsia {#set_lane_color}

Imposta il colore della corsia sinistra e di quella destra.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| left | Opzione di elenco | Colore della corsia sinistra | rosso(red), verde(green), blu(blue) | - |
| right | Opzione di elenco | Colore della corsia destra | rosso(red), verde(green), blu(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Rilevare una volta {#detect_once}

Cerca nell'immagine il colore o la corsia scelti e mostra la loro zona una volta sola.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Segue in continuo nell'immagine i colori o le corsie scelti e mostra le loro zone sullo schermo.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del rilevamento di colore e corsia sull'immagine della fotocamera.

<BlockImage module="AI/SelfDriving" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Dati della corsia {#lane_data}

Restituisce la posizione o la distanza della corsia indicata.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| lane | Opzione di elenco | Corsia | sinistra(left), destra(right) | - |
| unit | Opzione di elenco | Tipo di misura | x, distanza(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Dati del colore {#color_data}

Restituisce la posizione e le dimensioni del colore indicato.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | rosso(red), verde(green), blu(blue) | - |
| unit | Opzione di elenco | Tipo di coordinata / dimensione | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Distanza tra due colori {#color_to_color}

Restituisce la distanza tra due colori.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit1 | Opzione di elenco | Primo colore | rosso(red), verde(green), blu(blue) | - |
| unit2 | Opzione di elenco | Secondo colore | rosso(red), verde(green), blu(blue) | - |
| type | Opzione di elenco | Tipo di distanza | distanza(omesso o None), distanza orizzontale(horizontal), distanza verticale(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # distanza
self_driving.get_distance('green', 'blue', 'horizontal')  # distanza orizzontale
```

## Se la corsia è rilevata {#lane_detected}

Se una corsia determinata è stata trovata

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| lane | Opzione di elenco | Corsia | sinistra(left), destra(right), entrambe(both), qualunque(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Se il colore è rilevato {#color_detected}

Se la zona di un colore determinato è stata trovata

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | rosso(red), verde(green), blu(blue), qualunque(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
