---
title: Turtle
---

# Turtle

## Declarar la instancia {#instance}

Si añades un bloque de Turtle al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
turtle = Turtle(0)
# si hay varias instancias
turtle_1 = Turtle(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Fijar la velocidad de la rueda {#set_wheel_speed}

Determina la velocidad de la rueda. El rango de la velocidad es -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Velocidad de la rueda | entero -100 ~ 100, 0: parada | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Mover una distancia {#move_distance}

Establece la distancia que se recorre.  
Si no hay ninguna velocidad de rueda fijada, el robot no se mueve.  
Si la distancia es 0, el robot sigue avanzando a la velocidad de rueda actual.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Distancia que se recorre | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad de distancia | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Mover durante un tiempo {#move_time}

Avanza durante el tiempo indicado a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Tiempo de movimiento (segundos) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Girar sobre el sitio {#turn_degree}

Establece la dirección y el ángulo con los que el robot gira sobre el sitio.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |
| data | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Cambiar la velocidad de la rueda {#change_speed}

Cambia la velocidad de rueda de Turtle.  
La nueva velocidad de rueda es la velocidad actual más la velocidad introducida.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Detener {#stop}

Detiene el movimiento de Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## ¿Rueda en movimiento? {#wheel_moving}

Devuelve true si la rueda está en movimiento y false si está parada.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Pivotar alrededor de una rueda {#pivot}

Establece el punto de giro, la dirección y el ángulo.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| base | Opción de desplegable | Rueda como punto de giro | rueda izquierda(left_wheel), rueda derecha(right_wheel) | - |
| direction | Opción de desplegable | Dirección de giro | adelante(forward), atrás(backward) | - |
| data | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Dibujar un círculo {#pivot_circle}

Al dibujar un círculo con el lápiz, establece la dirección, el radio y el ángulo.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | adelante izq.(left_forward), atrás izq.(left_backward), adelante der.(right_forward), atrás der.(right_backward) | - |
| degree | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| radius | Entrada (bloque) | Radio del giro | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad del radio | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Seguir la línea con el sensor {#trace_line}

Sigue con el sensor de color de la parte inferior una línea de un color concreto.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| line | Opción de desplegable | Color de la línea que se sigue | negro(black), rojo(red), verde(green), azul(blue), cualquier color(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Seguir la línea hasta un color concreto {#trace_line_until_color}

Sigue con el sensor de color de la parte inferior la línea del color A hasta que el robot encuentra el color B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| line | Opción de desplegable | Color de la línea que se sigue | negro(black), rojo(red), verde(green), azul(blue), cualquier color(any) | - |
| color | Opción de desplegable | Color en el que se para | negro(black), rojo(red), verde(green), cian(cyan), azul(blue), magenta(magenta), cualquier color(any) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Girar en una intersección y parar en la siguiente {#intersection}

Turtle gira en la intersección en la dirección indicada y después sigue hasta encontrar la intersección siguiente.  
Si marcas esperar, se espera hasta que el movimiento termine.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección en la intersección | avanzar(forward), izquierda(left), derecha(right), dar la vuelta(uturn) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Fijar la velocidad de seguimiento de línea {#set_trace_speed}

Fija la velocidad de seguimiento de línea. El rango de la velocidad es 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad de seguimiento de línea | entero 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Fijar la ganancia de seguimiento de línea {#set_trace_gain}

Fija la corrección de dirección en el seguimiento de línea. El rango de la corrección es 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Corrección de dirección | entero 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Detener el seguimiento de línea {#stop_trace}

Termina la función de seguimiento de línea de Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Fijar el color del LED {#set_led_color}

Fija el color del LED de la cabeza de Turtle.  
Si eliges un color en la paleta de colores, se pasa como **nombre de color** (texto en inglés). (El código no se genera con valores numéricos R, G, B, sino con el nombre del color.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Color | Selección en la paleta de colores → nombre de color (inglés) | Nombre de color: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Fijar el color del LED con un bloque de la categoría Color {#set_led_color_with_block}

Toma como entrada la salida de un bloque de la categoría Color (`[R, G, B]`) y fija con ella el color del LED de la cabeza.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (color) | Bloque de la categoría Color o una matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Cambiar el color del LED con valores RGB {#change_by_rgb}

Suma los cambios de R, G y B introducidos al color actual del LED de la cabeza y fija así un color nuevo.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Apagar el LED {#turn_off}

Borra el color del LED de la cabeza.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Fijar el zumbido {#sound_buzz}

Fija el zumbido de Turtle en la frecuencia indicada.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Tocar una nota {#sound_note}

Turtle toca la nota indicada.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

Turtle reproduce un clip de sonido concreto.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## ¿Reproduciendo sonido? {#sound_playing}

Devuelve true si se está reproduciendo sonido y false si no.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Velocidad de la rueda {#wheel_speed}

La velocidad de una rueda concreta

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Valor del sensor de color del suelo {#floor}

El valor del sensor de color de la parte inferior

<BlockImage module="roboids/Turtle" id="floor" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Nombre del color de la tarjeta {#card_color}

El nombre del color de la tarjeta leído con el sensor de color de la parte inferior

<BlockImage module="roboids/Turtle" id="card_color" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Patrón de colores de la tarjeta {#card_pattern}

El patrón de los colores de la tarjeta leído con el sensor de color de la parte inferior

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Valor de la aceleración {#acceleration}

El valor de la aceleración de la gravedad en un eje concreto

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Valor del sensor de temperatura {#temperature}

El valor del sensor de temperatura

<BlockImage module="roboids/Turtle" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/Turtle" id="battery" />

### Parámetros

(ninguno)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## ¿Toca un color concreto? {#color_read}

Mide con el sensor de color de Turtle si el robot toca el color indicado y devuelve el resultado como **verdadero(True) / falso(False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Opción de desplegable | Nombre del color | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## ¿El patrón de colores de la tarjeta es ~ ? {#pattern_read}

Devuelve como **verdadero(True) / falso(False)** si el patrón de colores de la tarjeta reconocido por el sensor de color coincide.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| pattern | Opción de desplegable | Nombre del patrón de tarjeta | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Estado del botón trasero {#button}

Si el botón de la espalda está pulsado o se ha hecho clic en él

<BlockImage module="roboids/Turtle" id="button" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| event | Opción de desplegable | Tipo de estado del botón | pulsado(pressed), clic(click), clic largo(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## ¿Ha cambiado el estado? {#state_change}

Si el estado del robot ha cambiado

<BlockImage module="roboids/Turtle" id="state_change" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de estado | 0 ~ 5 (ver la tabla siguiente) | - |

| unit | Condición |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
