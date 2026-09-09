---
title: Detección de manos
---

# Detección de manos

## Declarar la instancia {#instance}

Si añades un bloque de Detección de manos(HandDetection) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
hand_detection = HandDetection(0)
# si hay varias instancias
hand_detection_1 = HandDetection(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para la detección de manos.

<BlockImage module="AI/HandDetection" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Cargar el modelo de manos {#load_model}

Carga el modelo de manos entrenado. Este paso es imprescindible para usar las funciones del módulo «Detección de manos».

<BlockImage module="AI/HandDetection" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Establecer el objetivo {#max_hands}

Determina si la detección de manos se basa en una mano o en las dos.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Número de manos | una mano(one), las dos manos(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Detectar mano una vez {#detect_once}

Busca la mano en la imagen actual y la marca exactamente una vez.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Iniciar / detener la detección de manos continua {#detect_continuous}

Sigue la mano en la imagen actual de forma continua y la marca en la pantalla.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado de la detección de manos se muestra en la imagen de la cámara o no.

<BlockImage module="AI/HandDetection" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Posición de las partes de la mano {#hand_data}

Devuelve la posición de la palma o de la muñeca de la mano indicada.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| side | Opción de desplegable | Lado de la mano | izquierda(left), derecha(right) | - |
| unit | Opción de desplegable | Parte de la mano | palma(palm), muñeca(wrist) | - |
| pos | Opción de desplegable | Tipo de coordenada / tamaño | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Posición de las articulaciones de los dedos {#joint_data}

Devuelve las coordenadas de las articulaciones del dedo indicado.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| side | Opción de desplegable | Lado de la mano | izquierda(left), derecha(right) | - |
| unit | Opción de desplegable | Dedo | pulgar(thumb), índice(index), medio(middle), anular(ring), meñique(pinky) | - |
| joint | Opción de desplegable | Posición de la articulación | primera articulación(first), segunda articulación(second), tercera articulación(third), punta del dedo(last) | - |
| pos | Opción de desplegable | Coordenada | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Rectángulo de la mano {#hand_square}

Devuelve la posición y el tamaño del rectángulo que rodea la zona de la mano indicada.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| side | Opción de desplegable | Lado de la mano | izquierda(left), derecha(right) | - |
| unit | Opción de desplegable | Parte de la mano | mano(hand), palma(palm) | - |
| pos | Opción de desplegable | Dato del rectángulo | posición x mín.(min_x), posición x máx.(max_x), posición y mín.(min_y), posición y máx.(max_y), anchura(width), altura(height), área(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Distancia entre mano y mano {#hand_to_hand_distance}

Devuelve la distancia entre dos partes de las manos.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primera parte de la mano | Mano: `'side_unit'` (p. ej. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Entrada (texto) | Segunda parte de la mano | Mano: `'side_unit'` (p. ej. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mano ↔ mano / distancia
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Distancia entre mano y dedo {#hand_to_joint_distance}

Devuelve la distancia entre una parte de la mano y una articulación de un dedo.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primera parte | Mano: `'side_unit'` (p. ej. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Entrada (texto) | Segunda parte | Dedo: `'side_unit_joint'` (p. ej. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mano ↔ articulación del dedo / distancia horizontal
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Distancia entre dedo y dedo {#joint_to_joint_distance}

Devuelve la distancia entre dos articulaciones de los dedos.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primera parte | Dedo: `'side_unit_joint'` (p. ej. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Entrada (texto) | Segunda parte | Dedo: `'side_unit_joint'` (p. ej. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opción de desplegable | Tipo de distancia | distancia (omitido o None), distancia horizontal(horizontal), distancia vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# articulación del dedo ↔ articulación del dedo / distancia vertical
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Estado de carga del modelo de manos {#model_state}

Devuelve el estado de carga del modelo de manos.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## ¿Mano detectada? {#detected}

Si se ha encontrado una mano

<BlockImage module="AI/HandDetection" id="detected" />

### Parámetros

(ninguno)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
