---
title: Expresión facial
---

# Expresión facial

## Declarar la instancia {#instance}

Si añades un bloque de Expresión facial(FaceExpression) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
face_expression = FaceExpression(0)
# si hay varias instancias
face_expression_1 = FaceExpression(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar la cámara {#device}

Configura la cámara para el reconocimiento de edad, género y expresión facial.

<BlockImage module="AI/FaceExpression" id="device" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del dispositivo de cámara | Etiqueta de cámara del sistema | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Cargar el modelo de expresión facial {#load_model}

Carga los modelos entrenados de edad, género y expresión facial. Este paso es imprescindible para usar las funciones del módulo «Expresión facial».

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| wait | Casilla | Esperar a que termine la carga | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Detectar una vez {#detect_once}

Analiza el rostro en la imagen actual y muestra exactamente una vez los valores estimados de edad, género y expresión facial.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Iniciar / detener la detección continua {#detect_continuous}

Analiza el rostro en la imagen actual de forma continua y muestra en la pantalla los valores estimados de edad, género y expresión facial.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Mostrar el resultado {#display}

Determina si el resultado del reconocimiento de edad, género y expresión facial se muestra en la imagen de la cámara o no.

<BlockImage module="AI/FaceExpression" id="display" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Visualización ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Edad {#age}

La edad

<BlockImage module="AI/FaceExpression" id="age" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Género {#gender}

El género

<BlockImage module="AI/FaceExpression" id="gender" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Expresión facial {#expression}

La expresión facial

<BlockImage module="AI/FaceExpression" id="expression" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## ¿Género detectado? {#gender_detected}

Si se ha reconocido el género

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## ¿El género es ~ ? {#gender_check}

Devuelve como **verdadero(True) / falso(False)** si el género reconocido coincide con el valor indicado.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Género | masculino(male), femenino(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Confianza del género {#gender_confidence}

La probabilidad (confianza) del género elegido

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Género | masculino(male), femenino(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## ¿Expresión facial detectada? {#expression_detected}

Si se ha reconocido la expresión facial

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## ¿La expresión facial es ~ ? {#expression_check}

Devuelve como **verdadero(True) / falso(False)** si la expresión facial reconocida coincide con el valor indicado.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Expresión facial | enfadado(angry), asqueado(disgusted), asustado(fearful), feliz(happy), neutral(neutral), triste(sad), sorprendido(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Confianza de la expresión facial {#expression_confidence}

La probabilidad (confianza) de la expresión facial elegida

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Expresión facial | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Estado de carga del modelo {#model_state}

Devuelve el estado de carga de los modelos de edad, género y expresión facial.  
Si aún no está cargado, devuelve 0; durante la carga, 1; una vez cargado, 2.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parámetros

(ninguno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
