---
title: Detección facial
---

# Detección facial

## Declarar la instancia {#instance}

Si añades un bloque de Detección facial(FaceDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
face_detection = FaceDetection(0)
# si hay varias instancias
face_detection_1 = FaceDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección facial.

<BlockImage module="AI/FaceDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Cargar el modelo facial {#load_model}

Carga el modelo facial entrenado. Este paso es imprescindible para usar las funciones del módulo «Detección facial».

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Detectar rostro una vez {#detect_once}

Busca el rostro en la imagen actual y lo marca exactamente una vez.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Iniciar / detener la detección facial continua {#detect_continuous}

Sigue el rostro en la imagen actual de forma continua y lo marca en la pantalla.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección facial se muestra en la imagen de la cámara o no.

<BlockImage module="AI/FaceDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Posición de las partes del rostro {#face_data}

Devuelve las coordenadas de posición del rostro o de una parte del rostro.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Parte del rostro | rostro(face), ojo izquierdo(left eye), ojo derecho(right eye), oreja izquierda(left ear), oreja derecha(right ear), nariz(nose), boca(mouth) | - |
| pos | Opción de desplegable | Tipo de coordenada | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Rectángulo del rostro {#face_square}

Devuelve la posición y el tamaño del rectángulo que rodea la zona del rostro.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| pos | Opción de desplegable | Dato del rectángulo | posición x mín.(min_x), posición x máx.(max_x), posición y mín.(min_y), posición y máx.(max_y), anchura(width), altura(height), área(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Distancia entre dos partes {#distance}

Devuelve la distancia entre dos partes del rostro.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Opción de desplegable | Primera parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Opción de desplegable | Segunda parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # distancia
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # distancia horizontal
face_detection.get_distance('nose', 'mouth', 'vertical')  # distancia vertical
```

## Estado de carga del modelo facial {#model_state}

Devuelve el estado de carga del modelo facial.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## ¿Rostro detectado? {#detected}

Si se ha encontrado un rostro

<BlockImage module="AI/FaceDetection" id="detected" />

### Parámetros

(ninguno)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
