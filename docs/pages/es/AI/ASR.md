---
title: Voz a texto
---

# Voz a texto

## Declarar la instancia {#instance}

Si añades un bloque de Voz a texto(ASR) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
asr = ASR(0)
# si hay varias instancias
asr_1 = ASR(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Establecer el idioma {#lang}

Establece el idioma del reconocimiento de voz. Aunque no establezcas ningún idioma, se elige uno automáticamente.

<BlockImage module="AI/ASR" id="lang" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Código de idioma del reconocimiento | Códigos de los 21 idiomas que admite el programa (p. ej. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## Iniciar / detener el reconocimiento de voz {#listen}

Inicia o detiene el reconocimiento de voz.

<BlockImage module="AI/ASR" id="listen" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | iniciar(start), detener(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Resultado del reconocimiento de voz {#result}

El resultado del reconocimiento de voz

<BlockImage module="AI/ASR" id="result" />

### Parámetros

(ninguno)

### Python
```python
asr = ASR(0)

asr.result()
```

## ¿Está activo el reconocimiento de voz? {#state}

Devuelve como **verdadero(True) / falso(False)** si el reconocimiento de voz está activo.

<BlockImage module="AI/ASR" id="state" />

### Parámetros

(ninguno)

### Python
```python
asr = ASR(0)

asr.is_active()
```
