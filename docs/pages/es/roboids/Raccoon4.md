---
title: RaccoonBot
---

# RaccoonBot

## Declarar la instancia {#instance}

Si añades un bloque de RaccoonBot al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
raccoon = RaccoonBot(0)
# si hay varias instancias
raccoon_1 = RaccoonBot(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Motor de la articulación encendido / apagado {#motor}

Determina si se suelta o se mantiene el control de cada motor de articulación.  
Si no configuras nada, el robot arranca con el control de los motores de todas las articulaciones encendido.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Número de la articulación | todas las articulaciones(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | -1 |
| on | Casilla | Control del motor ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# todas las articulaciones, control del motor apagado
raccoon.motor(-1, False)

# articulación 1, control del motor encendido
raccoon.motor(1, True)
```

## Establecer la velocidad de la articulación {#speed_joint}

Establece la velocidad de la articulación elegida.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| joint | Opción de desplegable | Número de la articulación | todas las articulaciones(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloque) | Velocidad de la articulación | entero -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Cambiar la velocidad de la articulación {#change_speed_joint}

Cambia la velocidad de la articulación elegida.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| joint | Opción de desplegable | Número de la articulación | todas las articulaciones(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Establecer las velocidades de las articulaciones de una vez {#speed_joints}

Establece de una vez la velocidad de las cuatro articulaciones.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (matriz) | Matriz con la velocidad de 4 articulaciones | `[joint1, joint2, joint3, joint4]`, cada uno -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# matriz literal [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# matriz de una variable
raccoon.set_speed_joints(*arr)
```

## Establecer la velocidad del control de ángulo de las articulaciones {#angle_speed}

Establece la velocidad con la que se controlan las articulaciones en el modo de control por ángulo.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad máxima del control de ángulo | entero 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Establecer el ángulo de la articulación {#angle_joint}

Establece el ángulo de la articulación elegida.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| joint | Opción de desplegable | Número de la articulación | todas las articulaciones(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloque) | Ángulo de la articulación (grados) | ver la tabla anterior (se limita automáticamente) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Cambiar el ángulo de la articulación {#change_angle_joint}

Cambia el ángulo de la articulación elegida.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| joint | Opción de desplegable | Número de la articulación | todas las articulaciones(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloque) | Diferencia de ángulo del cambio (grados) | ver la tabla anterior (se limita automáticamente) | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Establecer los ángulos de las articulaciones de una vez {#angle_joints}

Establece de una vez el ángulo de las cuatro articulaciones.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (matriz) | Matriz con el ángulo de 4 articulaciones o el nombre de una postura | matriz `[j1, j2, j3, j4]` | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# matriz explícita
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Inicializar el estado de las articulaciones {#default_angle_joints}

Pone el ángulo de las cuatro articulaciones en una postura predefinida (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Desplegable | Nombre de la postura | `'zero'` / `'park'` / `'home'` | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

Posturas preestablecidas:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# postura preestablecida
raccoon.set_angle_joints('home', wait=True)
```

## Guardar los ángulos de las articulaciones {#save_encoder}

Guarda los valores actuales del codificador en la variable que quieras.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| encoder | Variable | Nombre de la variable en la que se guarda | variable | - |
| data | Entrada (matriz) | Matriz inicial que se guarda | matriz de 4 elementos o matriz vacía | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Establecer una coordenada concreta {#set_coordinate}

Mueve el brazo robótico estableciendo una coordenada concreta.  
Los rangos de las coordenadas son:  
con respecto a la muñeca => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
con respecto a la pinza => el rango puede variar según el dispositivo conectado.  
La orientación de la pinza queda fija: horizontal o vertical respecto al suelo.  
Si introduces una coordenada a la que no se puede llegar, se omite la instrucción.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| origin | Opción de desplegable | Punto de referencia | muñeca(wrist), efector final(end_effector) | - |
| pos | Opción de desplegable | Eje | x, y, z | - |
| data | Entrada (bloque) | Valor de la coordenada | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Opción de desplegable | Unidad | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# poner la coordenada x en 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# la coordenada z con respecto a end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Cambiar una coordenada concreta {#change_coordinate}

Mueve el brazo robótico cambiando una coordenada concreta respecto a la posición actual.  
Los rangos de las coordenadas son:  
con respecto a la muñeca => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
con respecto a la pinza => el rango puede variar según el dispositivo conectado.  
La orientación de la pinza queda fija: horizontal o vertical respecto al suelo.  
Si introduces una coordenada a la que no se puede llegar, se omite la instrucción.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| origin | Opción de desplegable | Punto de referencia | muñeca(wrist), efector final(end_effector) | - |
| pos | Opción de desplegable | Eje | x, y, z | - |
| data | Entrada (bloque) | Diferencia de coordenada del cambio | decimal | - |
| unit | Opción de desplegable | Unidad | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Mover a una coordenada xyz {#set_coordinates}

Establece de una vez las coordenadas x, y y z en los valores indicados.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| origin | Opción de desplegable | Punto de referencia | muñeca(wrist), efector final(end_effector) | - |
| x | Entrada (bloque) | Coordenada x | decimal | - |
| y | Entrada (bloque) | Coordenada y | decimal | - |
| z | Entrada (bloque) | Coordenada z | decimal | - |
| unit | Opción de desplegable | Unidad | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Establecer el bloqueo del efector final {#lock}

Establece la orientación en la que se bloquea la pinza. Una vez que la opción está en horizontal o vertical, ya no puedes controlar la velocidad ni el ángulo de la articulación 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| mode | Opción de desplegable | Orientación del bloqueo | ninguno(none), horizontal(horizontal), vertical(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Recoger / dejar algo con el efector final {#end_effector}

Recoge un objeto con el efector final o lo deja.  
Según el valor del desplegable unit se llama a uno de los dos métodos.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Acción | recoger (cerrar)(pick), dejar (abrir)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Tipo de efector final {#end_effector_device}

El número de la pinza conectada  
(1, 3, 4: pinza de agarre, 2: pinza de vacío)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Estado del efector final {#end_effector_status}

El estado en el que la pinza sujeta un objeto  
(0: soltado, 1: sujetado)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Tocar una nota {#sound_note}

RaccoonBot toca la nota indicada.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

RaccoonBot reproduce un clip de sonido concreto.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Valor del codificador {#encoder}

El valor del codificador de la articulación elegida

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| joint | Opción de desplegable | Número de la articulación (o todas) | 1, 2, 3, 4, todas las articulaciones(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# todas las articulaciones
raccoon.encoder(-1)
```

## Coordenada del elemento elegido {#coordinate}

Devuelve la coordenada xyz actual del punto de referencia.  
Si omites `pos`, devuelve toda la matriz `[x, y, z]`; si lo indicas, solo el valor de ese eje.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| origin | Opción de desplegable | Punto de referencia | muñeca(wrist), efector final(end_effector) | wrist |
| pos | Opción de desplegable | Eje (o todo) | x, y, z, todo (si lo omites, devuelve toda la matriz) | None (todo) |

### Python
```python
raccoon = RaccoonBot(0)

# un eje concreto
raccoon.get_coordinates('wrist', 'x')

# todo (matriz de 3 elementos)
raccoon.get_coordinates('wrist')
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## ¿Está pulsado el botón? {#button}

Si el botón elegido está pulsado o si se ha producido un evento de clic

<BlockImage module="roboids/Raccoon4" id="button" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Nombre del botón | teach(teach), play(play), power(power), delete(delete), cualquier botón(any) | - |
| event | Opción de desplegable | Tipo de evento | pulsado(pressed), clic(click), clic largo(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Establecer la velocidad de la cinta transportadora {#conveyor_speed}

Establece la velocidad de la cinta transportadora. El rango de la velocidad es -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Velocidad de la cinta transportadora | entero -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Establecer la distancia de la cinta transportadora {#conveyor_distance}

Hace que la cinta transportadora se desplace una distancia concreta.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Distancia que se recorre | decimal ≥ 0 | - |
| unit | Opción de desplegable | Unidad de distancia | cm, mm, pulgada(inch) | cm |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Cambiar la velocidad de la cinta transportadora {#change_conveyor_speed}

Cambia la velocidad de la cinta transportadora.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada (bloque) | Diferencia de velocidad del cambio | entero -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Detener la cinta transportadora {#stop_conveyor}

Detiene la cinta transportadora.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## ¿Está funcionando la cinta transportadora? {#conveyor_running}

Si la cinta transportadora está funcionando

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parámetros

(ninguno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## ¿Está pulsado el botón de la cinta transportadora? {#conveyor_button}

Si el botón de la cinta transportadora está pulsado o si se ha producido un evento de clic

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| event | Opción de desplegable | Tipo de evento | pulsado(pressed), clic(click), clic largo(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
