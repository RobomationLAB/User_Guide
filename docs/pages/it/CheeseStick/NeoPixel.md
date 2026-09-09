---
title: NeoPixel
---

# NeoPixel

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di NeoPixel all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Avviare {#start}

Usa il NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Impostare la modalità del colore {#mode}

Imposta la modalità dei LED del NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Modalità dei canali di colore | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Impostare il colore di un pixel {#set_one_color}

Imposta il colore di un solo pixel, quello del numero indicato.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così. (il codice viene generato con il nome del colore, non con i valori numerici R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| idx | Ingresso (campo) | Numero del pixel (parte da 1) | intero maggiore o uguale a 1 | - |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Impostare il colore di un pixel con un blocco della categoria Colore {#set_one_color_with_block}

Riceve in ingresso un blocco della categoria Colore e imposta il colore di un pixel.  
L'uscita del blocco di colore (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, che restituiscono tutti `[R, G, B]`) viene scompattata con `*` (asterisco) e passata come argomenti r, g, b di `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| idx | Ingresso (campo) | Numero del pixel (parte da 1) | intero maggiore o uguale a 1 | - |
| data | Ingresso (colore) | Blocco della categoria Colore o array `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Modificare il colore di un pixel di un valore RGB {#change_one_by_rgb}

Somma al valore RGB attuale del pixel indicato la variazione e imposta il nuovo colore.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| idx | Ingresso (campo) | Numero del pixel (parte da 1) | intero maggiore o uguale a 1 | - |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Spegnere un pixel {#turn_off_one}

Toglie il colore del LED numero n.  
L'intervallo dei numeri dei LED è 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| idx | Ingresso (campo) | Numero del pixel (parte da 1) | intero maggiore o uguale a 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Impostare il motivo di un intervallo {#set_range_pattern}

Imposta il motivo di colori di tutti i LED dell'intervallo indicato.  
L'intervallo dei numeri dei LED è 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| pattern | Opzione di elenco | Nome del motivo di colori | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Impostare il colore di un intervallo {#set_range_color}

Imposta lo stesso colore su tutto l'intervallo di pixel indicato.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Impostare il colore di un intervallo con un blocco della categoria Colore {#set_range_color_with_block}

Riceve in ingresso un blocco della categoria Colore e imposta il colore di un intervallo di pixel.  
L'uscita del blocco di colore (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) viene scompattata con `*` (asterisco) e passata come argomenti r, g, b di `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| data | Ingresso (colore) | Blocco della categoria Colore o array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Modificare il colore di un intervallo di un valore RGB {#change_range_by_rgb}

Somma al colore attuale dell'intervallo di pixel indicato la variazione RGB e imposta il nuovo colore.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Spegnere il colore di un intervallo {#turn_off_range}

Toglie il colore di tutti i LED dell'intervallo indicato.  
L'intervallo dei numeri dei LED è 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Impostare il colore di un intervallo ogni n pixel {#set_range_increment_color}

Imposta il colore ogni `increment` pixel dentro l'intervallo di pixel indicato.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così.  
(per esempio: accendere solo i pixel 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| increment | Ingresso (campo) | Passo (numero di pixel) | intero maggiore o uguale a 1 | - |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Impostare il colore di un intervallo ogni n pixel con un blocco della categoria Colore {#set_range_increment_color_with_block}

Riceve in ingresso un blocco della categoria Colore e imposta il colore ogni n pixel dentro l'intervallo di pixel indicato.  
L'uscita del blocco di colore (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) viene scompattata con `*` (asterisco) e passata come argomenti r, g, b di `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| increment | Ingresso (campo) | Passo (numero di pixel) | intero maggiore o uguale a 1 | - |
| data | Ingresso (colore) | Blocco della categoria Colore o array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Modificare di un valore RGB ogni n pixel {#change_range_increment_by_rgb}

Somma al colore attuale dei pixel presi ogni n la variazione RGB e imposta il nuovo colore.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| increment | Ingresso (campo) | Passo dell'incremento (numero di pixel) | intero maggiore o uguale a 1 | - |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Spegnere il colore di un intervallo ogni n pixel {#turn_off_range_increment}

Toglie il colore di tutti i LED che corrispondono all'intervallo e al passo indicati.  
L'intervallo dei numeri dei LED è 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| from_idx | Ingresso (campo) | Numero del pixel iniziale (parte da 1) | intero maggiore o uguale a 1 | - |
| to_idx | Ingresso (campo) | Numero del pixel finale (parte da 1) | intero maggiore o uguale a 1 | - |
| increment | Ingresso (campo) | Passo dell'incremento (numero di pixel) | intero maggiore o uguale a 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Spostare / ruotare {#shift}

Sposta o ruota i LED nella direzione e del numero di pixel indicati.  
L'intervallo dei valori che si possono scegliere è 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di azione | sposta(shift), ruota(rotate) | - |
| direction | Opzione di elenco | Direzione | sinistra(left), destra(right) | - |
| pixel | Ingresso (campo) | Numero di pixel da spostare | intero maggiore o uguale a 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Impostare la luminosità {#set_brightness}

Imposta la luminosità del NeoPixel.  
L'intervallo dei valori che si possono scegliere è 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| value | Ingresso (campo) | Luminosità | intero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Modificare la luminosità {#change_brightness}

Modifica la luminosità del NeoPixel.  
L'intervallo dei valori che si possono scegliere è -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| value | Ingresso (campo) | Variazione della luminosità | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
