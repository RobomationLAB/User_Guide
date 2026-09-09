---
title: Detección corporal
---

# Detección corporal

## Declarar la instancia {#instance}

Si añades un bloque de Detección corporal(BodyDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
body_detection = BodyDetection(0)
# si hay varias instancias
body_detection_1 = BodyDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección corporal.

<BlockImage module="AI/BodyDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Cargar el modelo corporal {#load_model}

Carga el modelo corporal entrenado. Este paso es imprescindible para usar las funciones del módulo «Detección corporal».

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Detectar cuerpo una vez {#detect_once}

Busca el cuerpo en la imagen actual y lo marca exactamente una vez.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Iniciar / detener la detección corporal continua {#detect_continuous}

Sigue el cuerpo en la imagen actual de forma continua y lo marca en la pantalla.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección corporal se muestra en la imagen de la cámara o no.

<BlockImage module="AI/BodyDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coordenada de las partes del cuerpo {#body_data}

Devuelve la coordenada de cada parte del cuerpo.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Parte del cuerpo | nariz(nose), boca(mouth), ojo izquierdo(left eye), ojo derecho(right eye), oreja izquierda(left ear), oreja derecha(right ear), hombro izquierdo(left shoulder), hombro derecho(right shoulder), codo izquierdo(left elbow), codo derecho(right elbow), muñeca izquierda(left wrist), muñeca derecha(right wrist), mano izquierda(left hand), mano derecha(right hand), cadera izquierda(left hip), cadera derecha(right hip), rodilla izquierda(left knee), rodilla derecha(right knee), tobillo izquierdo(left ankle), tobillo derecho(right ankle), pie izquierdo(left foot), pie derecho(right foot) | - |
| pos | Opción de desplegable | Coordenada | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Distancia entre dos partes {#body_distance}

Devuelve la distancia entre dos partes del cuerpo.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Opción de desplegable | Primera parte del cuerpo | (ver la tabla de partes del cuerpo anterior) | - |
| unit2 | Opción de desplegable | Segunda parte del cuerpo | (ver la tabla de partes del cuerpo anterior) | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # distancia
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # distancia horizontal
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # distancia vertical
```

## Estado de carga del modelo corporal {#model_state}

Devuelve el estado de carga del modelo corporal.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## ¿Cuerpo detectado? {#detected}

Si se ha encontrado un cuerpo

<BlockImage module="AI/BodyDetection" id="detected" />

### Parámetros

(ninguno)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
