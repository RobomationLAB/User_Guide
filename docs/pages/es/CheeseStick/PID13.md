---
title: PID-13 Joystick y botón
---

# PID-13 Joystick y botón

## Declarar la instancia {#instance}

Si añades un bloque de PID-13 Joystick y botón(PID13) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Iniciar el joystick {#start}

Usa el joystick y los botones.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Valor del joystick {#joystick}

El valor x / y del joystick.  
El rango de cada valor es -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Entrada del botón {#button_input}

El estado de entrada del botón elegido  
Si el botón está pulsado, se devuelve 1; si no está pulsado, 0.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del botón | botón A(a), botón B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## ¿Botón pulsado? {#button_click}

Si se ha hecho clic en el botón elegido  
Este bloque devuelve verdadero solo en el momento en que se hace clic en el botón elegido; en los demás casos, falso.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del botón | botón A(a), botón B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
