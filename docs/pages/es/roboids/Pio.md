---
title: Piobot
---

# Piobot

## Declarar la instancia {#instance}

Si añades un bloque de Piobot(Pio) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
pio = Pio(0)
# si hay varias instancias
pio_1 = Pio(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Establecer la velocidad de la rueda {#set_wheel_speed}

Establece la velocidad de la rueda. El rango de la velocidad de rueda es -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Velocidad de la rueda | entero -100 ~ 100, 0: parada | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Mover una distancia {#move_distance}

Avanza la distancia indicada a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si la distancia es 0, el robot sigue avanzando a la velocidad de rueda actual.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Distancia que se recorre | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad de distancia | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Mover durante un tiempo {#move_time}

Avanza durante el tiempo indicado a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Pio" id="move_time" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Tiempo de movimiento (segundos) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Girar sobre el sitio {#turn_degree}

Establece la dirección y el ángulo con los que el robot gira sobre el sitio.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |
| data | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Cambiar la velocidad de la rueda {#change_speed}

Cambia la velocidad de rueda de Piobot.  
La nueva velocidad de rueda es la velocidad actual más la velocidad introducida.  
La velocidad de rueda que se fija se mantiene dentro del rango -100 ~ 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Modo turbo encendido / apagado {#turbo}

Enciende o apaga el modo turbo de Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Modo turbo ON / OFF | encendido(on=True), apagado(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Detener {#stop}

Detiene el movimiento de Piobot.  
La velocidad de las dos ruedas de Piobot se pone a 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.stop()
```

## ¿Rueda en movimiento? {#wheel_moving}

Devuelve true si la rueda está en movimiento y false si está parada.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Mover un paso en el tablero {#grid_move}

Avanza en el tablero de casilla en casilla, según lo establecido.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Dirección del movimiento | adelante(forward), atrás(backward), a la izquierda(left), a la derecha(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Girar una vez en el tablero {#grid_turn}

Piobot gira 90 grados en el tablero en la dirección indicada. Siempre se espera hasta que termine (internamente wait=True está fijo).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Establecer la velocidad del cuello {#set_neck_speed}

Establece la velocidad de giro del cuello. El rango de la velocidad del cuello es 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad de giro del cuello | entero 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Establecer el ángulo del cuello {#set_neck_angle}

Establece el ángulo en el que el cuello queda después de girar. El rango del ángulo del cuello es -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Ángulo del cuello (grados) | decimal -45 ~ 45 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## ¿Cuello en movimiento? {#neck_moving}

Devuelve true si el cuello está en movimiento y false si está parado.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Establecer el color del LED del ojo {#set_eye_color}

Establece el color del LED del ojo de Piobot.  
Puedes cambiar el color del LED del ojo izquierdo, del derecho o de los dos.  
Si eliges un color preestablecido, se pasa como **nombre de color** (texto en inglés). (El código no se genera con valores numéricos R, G, B, sino con el nombre del color.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Ojo afectado | izquierdo(left), derecho(right), ambos(both) | - |
| color | Opción de desplegable | Color preestablecido → nombre de color (inglés) | negro(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Establecer el color del LED del ojo con un bloque de la categoría Color {#set_eye_color_with_block}

Establece el color del LED del ojo de Piobot con los bloques de la categoría Color.  
Puedes cambiar el color del LED del ojo izquierdo, del derecho o de los dos.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Ojo afectado | izquierdo(left), derecho(right), ambos(both) | - |
| data | Entrada (color) | Matriz [R, G, B] | Bloque de la categoría Color o `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Cambiar el color del LED del ojo con valores RGB {#change_by_rgb}

Cambia el color del LED del ojo de Piobot con los valores R, G y B indicados.  
Puedes cambiar el color del ojo izquierdo, del derecho o de los dos.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Ojo afectado | izquierdo(left), derecho(right), ambos(both) | - |
| r | Entrada (campo) | Cambio de rojo | entero -255 ~ 255 | 0 |
| g | Entrada (campo) | Cambio de verde | entero -255 ~ 255 | 0 |
| b | Entrada (campo) | Cambio de azul | entero -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Establecer el patrón de ojos {#set_eye_pattern}

Establece el patrón de los ojos e indica el color de cada ojo cuando el patrón empieza.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| pattern | Opción de desplegable | Tipo de patrón | apagado(reset), parpadeo(blink), atenuación(dimming), arcoíris(rainbow) | - |
| left | Opción de desplegable | Color del ojo izquierdo | predeterminado(black), rojo(red), amarillo(yellow), verde(green), cian(cyan), azul(blue), magenta(magenta), blanco(white) | white |
| right | Opción de desplegable | Color del ojo derecho | (igual que left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Apagar el LED del ojo {#turn_off}

Borra el color del ojo.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Ojo afectado | izquierdo(left), derecho(right), ambos(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Fijar el zumbido {#sound_buzz}

Fija el zumbido de Piobot en la frecuencia indicada.  
El rango de las frecuencias que suenan es 27,5 Hz ~ 6553,5 Hz.  
Si introduces otro valor, no suena el zumbador.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Tocar una nota {#sound_note}

Piobot toca la nota indicada.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

Piobot reproduce un clip de sonido concreto.  
Si marcas esperar, se espera hasta que la reproducción termine.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Reproducir una melodía {#sound_melody}

Piobot reproduce una melodía concreta.  
Si marcas esperar, se espera hasta que la reproducción termine.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| melody | Opción de desplegable | Nombre de la melodía | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## ¿Reproduciendo sonido? {#sound_playing}

Devuelve true si se está reproduciendo sonido y false si no.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Velocidad de la rueda {#wheel_speed}

La velocidad de una rueda concreta

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/Pio" id="battery" />

### Parámetros

(ninguno)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Botón del teclado {#keypad}

Detecta el último botón del teclado que ha pulsado el usuario.

<BlockImage module="roboids/Pio" id="keypad" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| button | Opción de desplegable | Botón que se detecta | ejecutar(play), avanzar(forward), retroceder(backward), ir a la izquierda(left), ir a la derecha(right), acción(action), repetir(repeat), borrar(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
