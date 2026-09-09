---
title: PID-26 Sensor ambiental
---

# PID-26 Sensor ambiental

## Declarar la instancia {#instance}

Si añades un bloque de PID-26 Sensor ambiental(PID26) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Iniciar el sensor ambiental {#start}

Usa el sensor ambiental PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatura {#temperature}

Devuelve el valor de temperatura medido con el sensor ambiental PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Humedad {#humidity}

Devuelve el valor de humedad medido con el sensor ambiental PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Presión {#pressure}

Devuelve el valor de presión medido con el sensor ambiental PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
