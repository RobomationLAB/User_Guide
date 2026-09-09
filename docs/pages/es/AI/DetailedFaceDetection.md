---
title: Detección facial detallada
---

# Detección facial detallada

## Declarar la instancia {#instance}

Si añades un bloque de Detección facial detallada(DetailedFaceDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
detailed_face_detection = DetailedFaceDetection(0)
# si hay varias instancias
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección facial detallada.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Cargar el modelo facial {#load_model}

Carga el modelo facial entrenado. Este paso es imprescindible para usar las funciones del módulo «Detección facial detallada».

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Detectar rostro una vez {#detect_once}

Busca el rostro en la imagen actual y lo marca exactamente una vez.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Iniciar / detener la detección facial continua {#detect_continuous}

Sigue el rostro en la imagen actual de forma continua y lo marca en la pantalla.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección facial se muestra en la imagen de la cámara o no.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coordenada de las partes del rostro {#face_data}

Devuelve la coordenada de cada parte del rostro.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Parte del rostro | cara(face), ojo izquierdo(left eye), ojo derecho(right eye), boca(mouth), nariz(nose), labio superior(upper lip), labio inferior(lower lip), comisura izquierda(left lip), comisura derecha(right lip), pupila izquierda(left pupil), pupila derecha(right pupil) | - |
| pos | Opción de desplegable | Coordenada | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Rectángulo de las partes del rostro {#face_square}

Devuelve la posición y el tamaño del rectángulo que rodea una parte del rostro.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Parte del rostro | cara(face), ojo izquierdo(left eye), ojo derecho(right eye), boca(mouth) | - |
| pos | Opción de desplegable | Dato del rectángulo | posición x mín.(min_x), posición x máx.(max_x), posición y mín.(min_y), posición y máx.(max_y), anchura(width), altura(height), área(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Distancia entre dos partes {#distance}

Devuelve la distancia entre dos partes del rostro.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Opción de desplegable | Primera parte | Nombre de una parte del rostro | - |
| unit2 | Opción de desplegable | Segunda parte | Nombre de una parte del rostro | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # distancia
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # distancia horizontal
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # distancia vertical
```

## Estado de carga del modelo facial {#model_state}

Devuelve el estado de carga del modelo facial.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## ¿Rostro detectado? {#detected}

Si se ha encontrado un rostro

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parámetros

(ninguno)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
