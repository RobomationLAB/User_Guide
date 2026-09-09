---
title: Detección de marcadores ArUco
---

# Detección de marcadores ArUco

## Declarar la instancia {#instance}

Si añades un bloque de Detección de marcadores ArUco(ArucoMarker) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
aruco_marker = ArucoMarker(0)
# si hay varias instancias
aruco_marker_1 = ArucoMarker(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección de marcadores ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Establecer el número máximo de marcadores {#max_count}

Determina cuántos marcadores se pueden reconocer como máximo. El rango del número de marcadores es 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Número máximo de marcadores | entero 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Detectar marcador una vez {#detect_once}

Busca los marcadores en la imagen actual y marca sus zonas exactamente una vez.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Iniciar / detener la detección de marcadores continua {#detect_continuous}

Sigue los marcadores en la imagen actual de forma continua y marca sus zonas en la pantalla.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección de marcadores se muestra en la imagen de la cámara o no.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Datos del marcador {#marker_data}

Devuelve la posición y el tamaño del marcador con el ID indicado.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | ID del marcador | entero ≥ 0 | - |
| unit | Opción de desplegable | Tipo de medida | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Distancia entre dos marcadores {#marker_to_marker}

Devuelve la distancia entre dos marcadores.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (bloque) | ID del primer marcador | entero ≥ 0 | - |
| unit2 | Entrada (bloque) | ID del segundo marcador | entero ≥ 0 | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # distancia
aruco_marker.get_distance(0, 2, 'horizontal')  # distancia horizontal
```

## ¿Marcador detectado? {#marker_detected}

Si se ha encontrado un marcador con el valor de ID indicado

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | ID del marcador | entero ≥ 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
