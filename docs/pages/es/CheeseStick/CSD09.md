---
title: CSD-09 Motor
---

# CSD-09 Motor

## Declarar la instancia {#instance}

Si añades un bloque de CSD-09 Motor(CSD09) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Iniciar el servomotor {#start_servo_motor}

Indica el puerto en el que se usa el servomotor.  
Sin indicar el puerto, el motor no funciona correctamente.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del servomotor | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Fijar el ángulo del servomotor {#set_servo_motor}

Fija el ángulo del servomotor del puerto indicado.  
El rango de los valores que puedes elegir es 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del servomotor | Sa, Sb, Sc | el puerto del último `start_servo_motor` |
| value | Entrada (campo) | Ángulo de giro (grados) | entero 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Cambiar el ángulo del servomotor {#change_servo_motor}

Cambia el ángulo del servomotor del puerto indicado.  
El rango de los valores que puedes elegir es -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del servomotor | Sa, Sb, Sc | el puerto del último `start_servo_motor` |
| value | Entrada (campo) | Diferencia de ángulo del cambio | entero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Detener el servomotor {#stop_servo_motor}

Apaga la alimentación del servomotor del puerto indicado.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del servomotor | Sa, Sb, Sc | el puerto del último `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Iniciar el motor de CC {#start_DC_motor}

Permite controlar el motor de CC a través del puerto indicado.
Este bloque debe llamarse una vez antes de usar otros bloques del motor de CC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del motor de CC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Fijar la velocidad del motor de CC {#set_DC_motor}

Fija el valor de salida PWM del motor de CC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del motor de CC | Mab, Mcd | el puerto del último `start_dc_motor` |
| value | Entrada (campo) | Valor de salida PWM | entero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Cambiar la velocidad del motor de CC {#change_DC_motor}

Suma el cambio introducido al valor de salida PWM actual del motor de CC y fija así un valor nuevo.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del motor de CC | Mab, Mcd | el puerto del último `start_dc_motor` |
| value | Entrada (campo) | Diferencia de PWM del cambio | entero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Detener el motor de CC {#stop_DC_motor}

Detiene la salida del motor de CC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto del motor de CC | Mab, Mcd | el puerto del último `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Iniciar el motor paso a paso {#start_step_motor}

Usa el motor paso a paso.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Fijar el modo del motor paso a paso {#set_step_motor_mode}

Fija el modo en el que se controla el motor paso a paso.  
Si no fijas un modo propio, está fijado de forma predeterminada el modo «Power».  
¡Atención! No cambies el modo mientras el motor paso a paso está girando.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Modo de funcionamiento | off (apagado), normal(wave_step), Power(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Fijar la velocidad del motor paso a paso {#set_step_motor_speed}

Fija la velocidad del motor paso a paso.  
El rango de los valores que puedes elegir es -1000 ~ 1000.  
Con un valor negativo, el motor gira en el sentido contrario.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Velocidad de giro (PPS) | entero ≥ 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Girar el motor paso a paso {#rotate_step_motor}

Fija el número de pulsos que gira el motor paso a paso.  
El rango de los valores que puedes elegir es 0 ~ 65535.  
Si no has elegido una velocidad para el motor paso a paso, no gira.  
Si marcas «esperar», se espera hasta que el giro termine.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Número de pasos | entero | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Cambiar la velocidad del motor paso a paso {#change_step_motor_speed}

Cambia la velocidad del motor paso a paso.  
El rango de los valores que puedes elegir es -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Diferencia de PPS del cambio | entero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Detener el motor paso a paso {#stop_step_motor}

Detiene el motor paso a paso o apaga su alimentación.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Forma de detener | detener(stop), apagar la alimentación(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Número de pasos {#step_motor_steps}

Devuelve el número total de pasos que el motor paso a paso ha girado hasta ahora.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
