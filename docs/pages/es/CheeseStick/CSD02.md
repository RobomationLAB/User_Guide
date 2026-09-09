---
title: CSD-02 LED RGB
---

# CSD-02 LED RGB

## Declarar la instancia {#instance}

Si añades un bloque de CSD-02 LED RGB(CSD02) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Iniciar el LED RGB {#start}

Empieza a usar el LED RGB.  
Sin este bloque, el LED RGB no se activa.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Fijar el color {#set_color}

Fija el color del LED de CSD02 en el color indicado.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés). (El código no se genera con valores numéricos R, G, B, sino con el nombre del color.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Fijar el color con un bloque de la categoría Color {#set_color_with_block}

Toma como entrada un bloque de la categoría Color (p. ej. una matriz `[R, G, B]`) y fija con él el color del LED de CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (color) | Salida de un bloque de la categoría Color o una matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Cambiar el color con valores RGB {#change_by_rgb}

Suma los cambios de R, G y B introducidos al color actual del LED y fija así un color nuevo.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Apagar el LED {#turn_off}

Borra el color del LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
