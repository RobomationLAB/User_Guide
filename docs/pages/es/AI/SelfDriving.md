---
title: Conducción autónoma con cámara
---

# Conducción autónoma con cámara

## Declarar la instancia {#instance}

Si añades un bloque de Conducción autónoma con cámara(SelfDriving) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
self_driving = SelfDriving(0)
# si hay varias instancias
self_driving_1 = SelfDriving(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la conducción autónoma con cámara.

<BlockImage module="AI/SelfDriving" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Fijar el color de los carriles {#set_lane_color}

Fija el color del carril izquierdo y del derecho.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| left | Opción de desplegable | Color del carril izquierdo | rojo(red), verde(green), azul(blue) | - |
| right | Opción de desplegable | Color del carril derecho | rojo(red), verde(green), azul(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Detectar una vez {#detect_once}

Busca los colores o carriles elegidos en la imagen y marca sus zonas exactamente una vez.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Iniciar / detener la detección continua {#detect_continuous}

Sigue los colores o carriles elegidos en la imagen de forma continua y marca sus zonas en la pantalla.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección de colores o carriles se muestra en la imagen de la cámara o no.

<BlockImage module="AI/SelfDriving" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Datos del carril {#lane_data}

Devuelve la posición o la distancia del carril indicado.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| lane | Opción de desplegable | Carril | izquierdo(left), derecho(right) | - |
| unit | Opción de desplegable | Tipo de medida | x, distancia(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Datos del color {#color_data}

Devuelve la posición y el tamaño del color indicado.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | rojo(red), verde(green), azul(blue) | - |
| unit | Opción de desplegable | Tipo de coordenada / tamaño | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Distancia entre dos zonas de color {#color_to_color}

Devuelve la distancia entre dos colores.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Opción de desplegable | Primer color | rojo(red), verde(green), azul(blue) | - |
| unit2 | Opción de desplegable | Segundo color | rojo(red), verde(green), azul(blue) | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # distancia
self_driving.get_distance('green', 'blue', 'horizontal')  # distancia horizontal
```

## ¿Carril detectado? {#lane_detected}

Si se ha encontrado un carril concreto

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| lane | Opción de desplegable | Carril | izquierdo(left), derecho(right), ambos(both), cualquiera(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## ¿Zona de color detectada? {#color_detected}

Si se ha encontrado una zona de color concreta

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | rojo(red), verde(green), azul(blue), cualquiera(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
