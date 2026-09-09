---
title: Detección de colores
---

# Detección de colores

## Declarar la instancia {#instance}

Si añades un bloque de Detección de colores(ColorDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
color_detection = ColorDetection(0)
# si hay varias instancias
color_detection_1 = ColorDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección de colores.

<BlockImage module="AI/ColorDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Añadir un color objetivo {#register_color}

Añade un color que la detección de colores debe reconocer.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | negro(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Eliminar un color objetivo {#delete_color}

Quita el color indicado de los colores que la detección de colores debe reconocer.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | negro(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Establecer la condición de detección por área {#area_condition}

Determina el tamaño mínimo del área que se reconoce como zona de color. Solo se muestran en la pantalla las zonas cuya área supera ese valor.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Valor de la condición de área | decimal ≥ 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Detectar color una vez {#detect_once}

De entre los colores añadidos, busca los que hay en la imagen actual y marca sus zonas exactamente una vez.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Iniciar / detener la detección de colores continua {#detect_continuous}

De entre los colores añadidos, sigue los que hay en la imagen actual de forma continua y marca sus zonas en la pantalla.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección de colores se muestra en la imagen de la cámara o no.

<BlockImage module="AI/ColorDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Posición de la zona de color {#color_data}

Devuelve la posición y el tamaño del color indicado.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | negro(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |
| pos | Opción de desplegable | Tipo de coordenada / tamaño | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## ¿Color concreto detectado? {#color_detected}

Si se ha encontrado el color elegido

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | negro(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
