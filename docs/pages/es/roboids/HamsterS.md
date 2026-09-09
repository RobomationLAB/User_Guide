---
title: HamsterS
---

# HamsterS

## Declarar la instancia {#instance}

Si añades un bloque de HamsterS al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
hamster_s = HamsterS(0)
# si hay varias instancias
hamster_s_1 = HamsterS(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Fijar la velocidad de la rueda {#set_wheel_speed}

Determina la velocidad de la rueda. El rango de la velocidad es -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Velocidad de la rueda | entero -100 ~ 100, 0: parada | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Mover una distancia {#move_distance}

Avanza la distancia indicada a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si la distancia es 0, el robot sigue avanzando a la velocidad de rueda actual.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Distancia que se recorre | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad de distancia | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Mover durante un tiempo {#move_time}

Avanza durante el tiempo indicado a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Tiempo de movimiento (segundos) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Girar sobre el sitio {#turn_degree}

Establece la dirección y el ángulo con los que el robot gira sobre el sitio.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |
| data | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Cambiar la velocidad de la rueda {#change_speed}

Cambia la velocidad de rueda de HamsterS.  
La nueva velocidad de rueda es la velocidad actual más la velocidad introducida.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Detener {#stop}

Detiene el movimiento de HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## ¿Rueda en movimiento? {#wheel_moving}

Devuelve true si la rueda está en movimiento y false si está parada.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Avanzar un paso en el tablero {#grid_move}

Avanza en el tablero de casilla en casilla, según lo establecido.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parámetros

ninguno.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Girar una vez en el tablero {#grid_turn}

Gira 90 grados en el tablero en la dirección indicada.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Pivotar alrededor del portalápiz {#pivot}

Al usar el portalápiz, establece el punto de giro, la dirección y el ángulo.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| base | Opción de desplegable | Punto de giro | lápiz izq.(left_pen), lápiz der.(right_pen), rueda izq.(left_wheel), rueda der.(right_wheel) | - |
| direction | Opción de desplegable | Dirección de giro | adelante(forward), atrás(backward) | - |
| degree | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Dibujar un círculo alrededor del portalápiz {#pivot_circle}

Al dibujar un círculo con el portalápiz, establece el punto de giro, la dirección, el radio y el ángulo.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| base | Opción de desplegable | Punto de giro | lápiz izq.(left_pen), lápiz der.(right_pen) | - |
| direction | Opción de desplegable | Dirección de giro | adelante izq.(left_forward), atrás izq.(left_backward), adelante der.(right_forward), atrás der.(right_backward) | - |
| degree | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| radius | Entrada (bloque) | Radio del giro | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad del radio | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Seguir la línea con el sensor {#trace_mode}

HamsterS sigue con el sensor de suelo una línea de un color concreto.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| floor | Opción de desplegable | Sensor de suelo con el que se sigue | izquierda(left), derecha(right), centro(center) | - |
| line | Opción de desplegable | Color de la línea | negro(black), blanco(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Girar en una intersección y parar en la siguiente {#trace_until_grid}

HamsterS gira en la intersección en la dirección indicada y después sigue hasta encontrar la intersección siguiente.  
Si marcas esperar, se espera hasta que el movimiento termine.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección en la intersección | girar a la izq.(left), girar a la der.(right), seguir recto(forward), dar la vuelta(uturn) | - |
| line | Opción de desplegable | Color de la línea | negro(black), blanco(white) | black |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Fijar la velocidad de seguimiento de línea {#set_trace_speed}

Fija la velocidad de seguimiento de línea. El rango de la velocidad es 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad de seguimiento de línea | entero 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Fijar la ganancia de seguimiento de línea {#set_trace_gain}

Fija la corrección de dirección en el seguimiento de línea. El rango de la corrección es 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Corrección de dirección | entero 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Detener el seguimiento de línea {#stop_trace}

Termina la función de seguimiento de línea de HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Fijar el color del LED {#set_led_color}

Fija el color del LED de HamsterS.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés). (El código no se genera con valores numéricos R, G, B, sino con el nombre del color.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | - |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Fijar el color del LED con un bloque de la categoría Color {#set_led_color_with_block}

Toma como entrada un bloque de la categoría Color (`[R, G, B]`) y fija con él el color del LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | - |
| data | Entrada (color) | Bloque de la categoría Color o una matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Cambiar el color del LED con valores RGB {#change_by_rgb}

Cambia el color del LED de HamsterS con los valores R, G y B indicados.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | - |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Apagar el LED {#turn_off}

Borra el color del LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | LED afectado | izquierdo(left), derecho(right), ambos(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Establecer la frecuencia del zumbador {#sound_buzz}

Establece la frecuencia del zumbador de HamsterS en el valor indicado.  
El rango de las frecuencias que suenan es 122,1 Hz ~ 4186,0 Hz.  
Si introduces otro valor, no suena el zumbador.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 122,1 ~ 4186,0 (en otro caso 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Tocar una nota {#sound_note}

HamsterS toca la nota indicada.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

HamsterS reproduce un clip de sonido concreto.  
Si marcas esperar, se espera hasta que la reproducción termine.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## ¿Reproduciendo sonido? {#sound_playing}

Devuelve true si se está reproduciendo sonido y false si no.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Velocidad de la rueda {#wheel_speed}

La velocidad de una rueda concreta

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Valor del sensor de proximidad {#proximity}

El valor de un sensor de proximidad concreto

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Posición del sensor medido | izquierda(left), derecha(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Valor del sensor de suelo {#floor}

El valor de un sensor de suelo concreto

<BlockImage module="roboids/HamsterS" id="floor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Posición del sensor medido | izquierda(left), derecha(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Valor de la aceleración {#acceleration}

El valor de la aceleración de la gravedad en un eje concreto

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Valor del sensor de brillo {#light}

El valor del sensor de brillo

<BlockImage module="roboids/HamsterS" id="light" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Valor del sensor de temperatura {#temperature}

El valor del sensor de temperatura

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/HamsterS" id="battery" />

### Parámetros

(ninguno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## ¿Ha cambiado el estado? {#state_change}

Si el estado del robot ha cambiado

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de estado | 0 ~ 7 (ver la tabla siguiente) | - |

| unit | Significado | Python |
|------|------|--------|
| 0 | inclinado hacia delante | `acceleration('x') > 5000` |
| 1 | inclinado hacia atrás | `acceleration('x') < -5000` |
| 2 | inclinado hacia la izquierda | `acceleration('y') > 5000` |
| 3 | inclinado hacia la derecha | `acceleration('y') < -5000` |
| 4 | boca abajo | `acceleration('z') > 0` |
| 5 | no boca abajo | `acceleration('z') < -3000` |
| 6 | obstáculo/mano detectados | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | golpecito | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Configurar el modo de entrada del puerto de E/S {#io_mode}

Configura el modo de entrada del puerto IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| option | Opción de desplegable | Modo de E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Establecer la salida del puerto de E/S {#set_output}

Establece el valor de salida del puerto IO indicado.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| data | Entrada (bloque) | Valor de salida | entero 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Cambiar la salida del puerto de E/S {#change_output}

Cambia el valor de salida del puerto IO indicado.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b, ambos(both) | - |
| data | Entrada (bloque) | Diferencia del valor de salida | entero | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Abrir / cerrar la pinza {#gripper}

Abre o cierra la pinza de HamsterS.  
Según el valor de unit se llama a uno de los dos métodos.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | abrir(open), cerrar(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Establecer el ángulo del lanzador {#shooter}

Controla el lanzador estableciendo su ángulo. El rango del ángulo es 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Ángulo del lanzador | entero 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Valor de entrada del puerto de E/S {#input}

Devuelve el valor de entrada del puerto de E/S de HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de E/S | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
