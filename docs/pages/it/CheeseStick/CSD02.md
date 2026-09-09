---
title: CSD-02 LED RGB
---

# CSD-02 LED RGB

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-02 LED RGB (CSD02) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Avviare il LED RGB {#start}

Comincia a usare il LED RGB.  
Se non aggiungi questo blocco, il LED RGB non viene attivato.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Impostare il colore {#set_color}

Imposta il colore del LED del CSD02 sul colore indicato.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così. (il codice viene generato con il nome del colore, non con i valori numerici R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Impostare il colore con un blocco della categoria Colore {#set_color_with_block}

Riceve in ingresso un blocco della categoria Colore (per esempio un array `[R, G, B]`) e imposta il colore del LED del CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (colore) | Uscita di un blocco della categoria Colore o array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Modificare il colore di un valore RGB {#change_by_rgb}

Somma al colore attuale del LED le variazioni R, G, B inserite e imposta il nuovo colore.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Spegnere il LED {#turn_off}

Toglie il colore del LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
