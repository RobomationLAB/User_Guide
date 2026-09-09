---
title: Beagle
---

# Beagle

## Declarar la instancia {#instance}

Si añades un bloque de Beagle al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
beagle = Beagle(0)
# si hay varias instancias
beagle_1 = Beagle(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Fijar la velocidad de la rueda {#set_wheel_speed}

Determina la velocidad de la rueda. El rango de la velocidad es -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Velocidad de la rueda | entero -100 ~ 100, 0: parada | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Mover una distancia {#move_distance}

Avanza la distancia indicada a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si la distancia es 0, el robot sigue avanzando a la velocidad de rueda actual.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Distancia que se recorre | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad de distancia | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Mover durante un tiempo {#move_time}

Avanza durante el tiempo indicado a la velocidad de rueda actual.  
Si no hay ninguna velocidad de rueda fijada, el robot avanza a la velocidad predeterminada.  
Si marcas esperar, se espera hasta que el movimiento termine.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Tiempo de movimiento (segundos) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Girar sobre el sitio {#turn_degree}

Establece la dirección y el ángulo con los que el robot gira sobre el sitio.  
Si marcas esperar, se espera hasta que el giro termine.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección de giro | izquierda(left), derecha(right) | - |
| data | Entrada (bloque) | Ángulo de giro (grados) | decimal ≥ 0 | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Cambiar la velocidad de la rueda {#change_speed}

Cambia la velocidad de rueda de Beagle.  
La nueva velocidad de rueda es la velocidad actual más la velocidad introducida.  
La velocidad de rueda que se fija se mantiene dentro del rango -100 ~ 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de rueda | izquierda(left), derecha(right), ambas(both) | - |
| speed | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Detener {#stop}

Detiene el movimiento de Beagle.  
La velocidad de las dos ruedas de Beagle se pone a 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## ¿Rueda en movimiento? {#wheel_moving}

Devuelve true si la rueda está en movimiento y false si está parada.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Fijar la frecuencia del zumbador {#sound_buzz}

Fija la frecuencia del zumbador de Beagle en el valor indicado.  
El rango de las frecuencias que suenan es 27,5 Hz ~ 6553,5 Hz.  
Si introduces otro valor, no suena el zumbador.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 0, 27,5 ~ 6553,5 (en otro caso 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Tocar una nota {#sound_note}

Beagle toca la nota indicada.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

Beagle reproduce un clip de sonido concreto.  
Si marcas esperar, se espera hasta que la reproducción termine.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## ¿Reproduciendo sonido? {#sound_playing}

Devuelve true si se está reproduciendo sonido y false si no.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Velocidad de la rueda {#wheel_speed}

La velocidad de una rueda concreta

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Valor del codificador {#encoder}

El valor del codificador de una rueda concreta

<BlockImage module="roboids/Beagle" id="encoder" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Rueda afectada | izquierda(left), derecha(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Valor del giroscopio {#gyroscope}

El valor del giroscopio en un eje concreto

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Valor del acelerómetro {#accelerometer}

El valor del acelerómetro en un eje concreto

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Valor del magnetómetro {#magnetometer}

El valor del magnetómetro en un eje concreto

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Valor del sensor de temperatura {#temperature}

El valor del sensor de temperatura

<BlockImage module="roboids/Beagle" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/Beagle" id="battery" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## ¿Ha cambiado el estado? {#state_change}

Si el estado del robot ha cambiado

<BlockImage module="roboids/Beagle" id="state_change" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de estado | 0 ~ 5 (ver la tabla siguiente) | - |

| unit | Condición |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Iniciar / detener el lidar {#lidar_power}

Activa o desactiva el sensor lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| on | Opción de desplegable | Lidar ON / OFF | iniciar(on=True), detener(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Distancia al objeto ~ según el lidar {#lidar_value}

El sensor lidar puede medir la distancia a los objetos en los 360 grados de alrededor.  
Desde la parte delantera de Beagle (el valor 0), el número va aumentando de 1 en 1 en sentido antihorario.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Entrada (campo) | Número del objeto (desde 0) | entero ≥ 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Distancia por dirección según el lidar {#lidar_directions}

Da la distancia medida por el sensor lidar hacia delante, hacia atrás, a los lados y en las direcciones diagonales.  
La salida es la media de los valores de distancia 45 grados a la izquierda y a la derecha de esa dirección.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| direction | Opción de desplegable | Dirección medida | delante(front), delante izq.(left front), izquierda(left), detrás izq.(left back), detrás(back), detrás der.(right back), derecha(right), delante der.(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## ¿Está listo el lidar? {#lidar_state}

Devuelve como **verdadero(True) / falso(False)** si el lidar está encendido.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parámetros

(ninguno)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
