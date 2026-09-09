---
title: NeoPixel
---

# NeoPixel

## Declarar la instancia {#instance}

Si añades un bloque de NeoPixel al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Iniciar {#start}

Usa NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Establecer el modo de LED {#mode}

Establece el modo de LED de NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Modo de los canales de color | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Establecer el color de un píxel {#set_one_color}

Establece el color de un solo píxel con el número indicado.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés). (El código no se genera con valores numéricos R, G, B, sino con el nombre del color.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número de píxel (empieza en 1) | entero ≥ 1 | - |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Establecer el color de un píxel con un bloque de la categoría Color {#set_one_color_with_block}

Toma como entrada un bloque de la categoría Color y establece con él el color de un píxel.  
La salida del bloque de color (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, que todos devuelven `[R, G, B]`) se desempaqueta con `*` (asterisco) y se pasa como argumentos r, g, b a `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número de píxel (empieza en 1) | entero ≥ 1 | - |
| data | Entrada (color) | Bloque de la categoría Color o una matriz `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Cambiar el color de un píxel con valores RGB {#change_one_by_rgb}

Suma los cambios a los valores RGB actuales del píxel indicado y establece así un color nuevo.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número de píxel (empieza en 1) | entero ≥ 1 | - |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Apagar un píxel {#turn_off_one}

Borra el color del LED n.  
El rango de los números de LED es 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número de píxel (empieza en 1) | entero ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Establecer el patrón de un rango {#set_range_pattern}

Establece el patrón de color de todos los LED del rango indicado.  
El rango de los números de LED es 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| pattern | Opción de desplegable | Nombre del patrón de color | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Establecer el color de un rango {#set_range_color}

Establece el mismo color para todo el rango de píxeles indicado.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés).

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Establecer el color de un rango con un bloque de la categoría Color {#set_range_color_with_block}

Toma como entrada un bloque de la categoría Color y establece con él el color de un rango de píxeles.  
La salida del bloque de color (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) se desempaqueta con `*` (asterisco) y se pasa como argumentos r, g, b a `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| data | Entrada (color) | Bloque de la categoría Color o una matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Cambiar el color de un rango con valores RGB {#change_range_by_rgb}

Suma los cambios RGB al color actual del rango de píxeles indicado y establece así un color nuevo.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Apagar los colores de un rango {#turn_off_range}

Borra los colores de todos los LED del rango indicado.  
El rango de los números de LED es 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Establecer el color de cada n LED de un rango {#set_range_increment_color}

Establece dentro del rango de píxeles indicado el color de cada `increment` LED.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés).  
(p. ej. encender solo los LED 1, 3, 5, …)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| increment | Entrada (campo) | Intervalo (número de LED) | entero ≥ 1 | - |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Establecer el color de cada n LED de un rango con un bloque de la categoría Color {#set_range_increment_color_with_block}

Toma como entrada un bloque de la categoría Color y establece con él, dentro del rango de píxeles indicado, el color de cada n LED.  
La salida del bloque de color (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) se desempaqueta con `*` (asterisco) y se pasa como argumentos r, g, b a `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| increment | Entrada (campo) | Intervalo (número de LED) | entero ≥ 1 | - |
| data | Entrada (color) | Bloque de la categoría Color o una matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Cambiar el color de cada n LED con valores RGB {#change_range_increment_by_rgb}

Suma los cambios RGB al color actual de cada n LED y establece así un color nuevo.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| increment | Entrada (campo) | Intervalo de los pasos (número de LED) | entero ≥ 1 | - |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Apagar el color de cada n LED {#turn_off_range_increment}

Borra los colores de todos los LED que corresponden al rango y al intervalo indicados.  
El rango de los números de LED es 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número del primer píxel (empieza en 1) | entero ≥ 1 | - |
| to_idx | Entrada (campo) | Número del último píxel (empieza en 1) | entero ≥ 1 | - |
| increment | Entrada (campo) | Intervalo de los pasos (número de LED) | entero ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Desplazar / rotar {#shift}

Desplaza o rota los LED en la dirección y el número de posiciones indicados.  
El rango de los valores que puedes elegir es 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de acción | desplazar(shift), rotar(rotate) | - |
| direction | Opción de desplegable | Dirección | izquierda(left), derecha(right) | - |
| pixel | Entrada (campo) | Número de píxeles que se desplazan | entero ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Fijar el brillo {#set_brightness}

Fija el brillo de NeoPixel.  
El rango de los valores que puedes elegir es 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Brillo | entero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Cambiar el brillo {#change_brightness}

Cambia el brillo de NeoPixel.  
El rango de los valores que puedes elegir es -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Cambio del brillo | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
