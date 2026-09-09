---
title: Cheese Stick
---

# Cheese Stick

## Declarar la instancia {#instance}

Si añades un bloque de Cheese Stick(CheeseStick) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
# si hay varias instancias
cheesestick_1 = CheeseStick(1)
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar el modo de entrada {#set_input_mode}

Configura el modo de entrada del puerto elegido.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Opción de desplegable | Modo de entrada | entrada makey(makey), entrada de botón(button), digital pull-up(digital_pullup), digital pull-down(digital_pulldown), analógica(analog), tensión analógica(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Convertir el rango de entrada {#set_input_range}

Convierte el valor de entrada del puerto elegido al rango indicado de mínimo a máximo.  
El rango del valor de entrada es 0 ~ 255.  
El rango al que se puede convertir es -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrada (campo) | Mínimo del valor original | entero 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo del valor original | entero 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo después de la conversión | entero -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo después de la conversión | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Convertir el rango de entrada con valor medio {#set_input_range_median}

Convierte el valor de entrada del puerto elegido al rango indicado de mínimo a máximo pasando por un valor medio.  
El rango del valor de entrada es 0 ~ 255.  
El rango al que se puede convertir es -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrada (campo) | Mínimo del valor original | entero 0 ~ 255 | - |
| src_median | Entrada (campo) | Valor medio del valor original | entero 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo del valor original | entero 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo después de la conversión | entero -100 ~ 100 | - |
| dst_median | Entrada (campo) | Valor medio después de la conversión | entero -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo después de la conversión | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valor de entrada {#get_input}

El valor de entrada del puerto elegido

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Configurar el modo de entrada de pulsos {#set_pulse_input_mode}

Configura el modo de entrada de pulsos del puerto elegido.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada de pulsos | Sc, Lc | - |
| option | Opción de desplegable | Modo pull | pulso (default), pulso (pull-up) (pull-up), pulso (pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Valor de entrada de pulsos {#get_pulse_input}

Si se ha detectado una entrada de pulsos en el puerto elegido

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de entrada de pulsos | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Fijar la salida digital {#set_digital_output}

Fija el valor de salida digital del puerto indicado.  
Los valores que puedes elegir son 0 o 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de salida digital | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Opción de desplegable | Valor de salida | 0 o 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Fijar la salida PWM {#set_pwm_output}

Fija el valor de salida PWM del puerto indicado.  
El rango de los valores que puedes elegir es 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de salida PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrada (campo) | Valor PWM | entero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Cambiar la salida PWM {#change_pwm_output}

Cambia el valor de salida PWM del puerto indicado.  
El rango de los valores que puedes elegir es -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de salida PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrada (campo) | Diferencia de PWM del cambio | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Fijar el zumbido {#sound_buzz}

Fija el zumbido de Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloque) | Frecuencia (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Tocar una nota {#sound_note}

Cheese Stick toca la nota indicada.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| note | Opción de desplegable | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opción de desplegable | Octava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Reproducir un sonido {#sound_clip}

Cheese Stick reproduce un clip de sonido concreto.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| clip | Opción de desplegable | Nombre del clip de sonido | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` y más | - |
| wait | Casilla | Esperar a que termine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Apagar el sonido {#sound_off}

Apaga el sonido de Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Valor de la aceleración {#acceleration}

El valor de la aceleración de la gravedad en un eje concreto

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Eje medido | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Valor del sensor de temperatura {#temperature}

El valor del sensor de temperatura

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Valor de la intensidad de la señal {#signal_strength}

La intensidad de la señal

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Voltaje de la batería {#battery}

El voltaje de la batería

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parámetros

(ninguno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## ¿Ha cambiado el estado? {#state_change}

Si el estado del robot ha cambiado

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Tipo de estado | 0 ~ 7 (ver la tabla siguiente) | - |

| unit | Condición |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (evento de golpecito) |
| 7 | `fall()` (evento de caída) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
