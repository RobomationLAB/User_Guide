---
title: Detección de objetos
---

# Detección de objetos

## Declarar la instancia {#instance}

Si añades un bloque de Detección de objetos(ObjectDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
object_detection = ObjectDetection(0)
# si hay varias instancias
object_detection_1 = ObjectDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección de objetos.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Cargar el modelo de objetos {#load_model}

Carga el modelo de objetos entrenado. Este paso es imprescindible para usar las funciones del módulo «Detección de objetos».

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Establecer el número máximo de objetos {#max_objects}

Determina cuántos objetos se pueden encontrar como máximo. El rango del número de objetos es 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Número máximo de objetos | entero 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Establecer el umbral de confianza {#confidence_threshold}

Establece la probabilidad (confianza) mínima para la detección de objetos. Solo se muestran en la pantalla los objetos con una probabilidad (confianza) por encima de ese valor. El rango de la probabilidad (confianza) es 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Umbral de confianza | decimal 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Detectar objeto una vez {#detect_once}

Busca los objetos en la imagen actual y los marca exactamente una vez.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Iniciar / detener la detección de objetos continua {#detect_continuous}

Sigue los objetos en la imagen actual de forma continua y los marca en la pantalla.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección de objetos se muestra en la imagen de la cámara o no.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Posición de los objetos {#object_data}

Devuelve la posición y el tamaño del objeto indicado.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del objeto | 80 clases de objeto (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'`, etc.) | - |
| pos | Opción de desplegable | Coordenada | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Rectángulo del objeto {#object_square}

Devuelve la posición y el tamaño del rectángulo que rodea la zona del objeto indicado.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del objeto | 80 clases de objeto | - |
| pos | Opción de desplegable | Dato del rectángulo | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Distancia entre dos objetos {#object_distance}

Devuelve la distancia entre dos clases de objeto.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Opción de desplegable | Nombre del primer objeto | 80 clases de objeto | - |
| unit2 | Opción de desplegable | Nombre del segundo objeto | 80 clases de objeto | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # distancia
object_detection.get_distance('person', 'car', 'horizontal')  # distancia horizontal
```

## Confianza del objeto {#object_confidence}

La probabilidad (confianza) de que el objeto elegido se haya reconocido correctamente

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del objeto | 80 clases de objeto | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Estado de carga del modelo de objetos {#model_state}

Devuelve el estado de carga del modelo de objetos.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## ¿Objeto detectado? {#detected}

Si se ha encontrado un objeto

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parámetros

(ninguno)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## ¿Objeto concreto detectado? {#object_detected}

Si se ha encontrado el objeto elegido

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del objeto | 80 clases de objeto | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
