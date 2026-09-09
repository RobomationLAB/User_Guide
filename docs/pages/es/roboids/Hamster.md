---
title: Hamster
---

# Hamster

## Declarar la instancia {#instance}

Si añades un bloque de Hamster al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
hamster = Hamster(0)
# si hay varias instancias
hamster_1 = Hamster(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |

## Fijar la velocidad de la rueda {#set_wheel_speed}

Determina la velocidad de la rueda. El rango de la velocidad es -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Velocidad de la rueda | entero -100 ~ 100, 0: parada | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Mover durante un tiempo {#move_time}

Avanza durante el tiempo indicado a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Tiempo de movimiento (segundos) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Cambiar la velocidad de la rueda {#change_speed}

Cambia la velocidad de rueda de Hamster.  
La nueva velocidad de rueda es la velocidad actual más la velocidad introducida.  
La velocidad de rueda que se fija se mantiene dentro del rango -100 ~ 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Detener {#stop}

Detiene el movimiento de Hamster.  
La velocidad de las dos ruedas de Hamster se pone a 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Avanzar un paso en el tablero {#grid_move}

Avanza en el tablero de casilla en casilla, según lo establecido.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parámetros

ninguno.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Girar una vez en el tablero {#grid_turn}

Gira 90 grados en el tablero en la dirección indicada.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Seguir la línea con el sensor {#trace_mode}

Hamster sigue con el sensor de suelo una línea de un color concreto.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| floor | Opción de desplegable | Sensor de suelo con el que se sigue | izquierda(left), derecha(right), centro(center) | - |
| line | Opción de desplegable | Color de la línea | negro(black), blanco(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Girar en una intersección y parar en la siguiente {#trace_until_grid}

Hamster gira en la intersección en la dirección indicada y después sigue hasta encontrar la intersección siguiente.  
Si marcas esperar, se espera hasta que el movimiento termine.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección en la intersección | izquierda(left), derecha(right), adelante(forward), dar la vuelta(uturn) | - |
| line | Opción de desplegable | Color de la línea | negro(black), blanco(white) | black |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Fijar la velocidad de seguimiento de línea {#set_trace_speed}

Fija la velocidad de seguimiento de línea. El rango de la velocidad es 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad de seguimiento de línea | entero 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Detener el seguimiento de línea {#stop_trace}

Termina la función de seguimiento de línea de Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Fijar el color del LED {#set_led_color}

Fija el color del LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | - |
| color | Opción de desplegable | Color | negro(black), azul(blue), verde(green), cian(cyan), rojo(red), magenta(magenta), amarillo(yellow), blanco(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Apagar el LED {#turn_off}

Borra el color del LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Fijar el zumbido {#sound_buzz}

Fija el zumbido de Hamster en la frecuencia indicada.  
El rango de las frecuencias que suenan es 1,0 Hz ~ 6553,5 Hz.  
Si introduces otro valor, no suena el zumbador.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Tocar una nota {#sound_note}

Hamster toca la nota indicada.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Velocidad de la rueda {#wheel_speed}

La velocidad de una rueda concreta

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Valor del sensor de proximidad {#proximity}

El valor de un sensor de proximidad concreto

<BlockImage module="roboids/Hamster" id="proximity" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Posición del sensor medido | izquierda(left), derecha(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Valor del sensor de suelo {#floor}

El valor de un sensor de suelo concreto

<BlockImage module="roboids/Hamster" id="floor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Posición del sensor medido | izquierda(left), derecha(right), centro(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Valor de la aceleración {#acceleration}

El valor de la aceleración de la gravedad en un eje concreto

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Valor del sensor de brillo {#light}

El valor del sensor de brillo

<BlockImage module="roboids/Hamster" id="light" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Valor del sensor de temperatura {#temperature}

El valor del sensor de temperatura

<BlockImage module="roboids/Hamster" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/Hamster" id="battery" />

### Parámetros

(ninguno)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## ¿Ha cambiado el estado? {#state_change}

Si el estado del robot ha cambiado

<BlockImage module="roboids/Hamster" id="state_change" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de estado | 0 ~ 6 (ver la tabla siguiente) | - |

| unit | Condición |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Configurar el modo de entrada del puerto de E/S {#io_mode}

Configura el modo de entrada del puerto IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| option | Opción de desplegable | Modo de E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Establecer la salida del puerto de E/S {#set_output}

Establece el valor de salida del puerto IO indicado.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| data | Entrada (bloque) | Valor de salida | entero 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Cambiar la salida del puerto de E/S {#change_output}

Cambia el valor de salida del puerto IO indicado.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| data | Entrada (bloque) | Diferencia del valor de salida | entero | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Abrir / cerrar la pinza {#gripper}

Abre o cierra la pinza de Hamster.  
Según el valor de unit se llama a uno de los dos métodos.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | cerrar(close), abrir(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Fijar el ángulo del lanzador {#shooter}

Controla el lanzador fijando su ángulo. El rango del ángulo es 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Ángulo del lanzador | entero 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Valor de entrada del puerto de E/S {#input}

Devuelve el valor de entrada del puerto de E/S de Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
