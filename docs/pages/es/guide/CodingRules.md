---
title: Reglas de programación
---

# Reglas de programación

Este documento describe las reglas de programación que hay que cumplir al programar robots en RobomationLAB.

> **Nota**: La programación con scripts funciona **solo con Python**; los bloques se convierten uno a uno en código Python que usa el paquete Python `robomation`.

> **Sobre el orden**: primero las reglas básicas comunes (1~2), después las reglas del código de bloques (3~5) y después las reglas del código de script Python (6~11). Son importantes tanto al generar código de bloques como código Python.

<br>

## 1. Limitación de la conversión uno a uno entre bloques y Python {#1}
El editor de bloques y el editor de Python se corresponden uno a uno y se convierten en tiempo real en ambas direcciones.

- Bloques → Python: los bloques siempre se convierten en código Python correcto.
- Python → bloques: la conversión solo funciona con **código que se pueda representar como bloques**.

Por tanto, si escribes en el editor de Python código como el siguiente, el cambio de Python al editor de bloques puede no producirse;  
en ese caso también se muestra el motivo del fallo.

1) Código con errores de sintaxis de Python
2) Código que usa funciones, métodos o sintaxis a los que no corresponde ningún bloque (es decir, que no están definidos en las reglas de conversión)

Para que el cambio al editor de bloques funcione siempre,  
debes escribir el código dentro de las clases, los métodos, las funciones y el alcance de sintaxis admitido que se definen en este documento y en los documentos de cada robot.

<br>

## 2. Reglas para presentar el código {#2}
Solo se pueden usar las clases, los métodos y las funciones que figuran en el **manual de la API de Python de robomation** y en el **documento de reglas de conversión entre bloques y Python**.  
Está estrictamente prohibido crear y usar métodos de control nuevos que no estén definidos en esos documentos.
Solo se permite si el usuario pide expresamente crear una función nueva.

Las variables auxiliares que no aparecen en los ejemplos de conversión de esos documentos (es decir, variables adicionales aparte de la variable de la instancia del robot) solo se pueden declarar si el usuario pide crear una variable.  
Además, los argumentos de un método se deben escribir obligatoriamente como valores literales.  

```python
# ejemplo correcto
hamster_s.set_wheel_speed('both', 100)

# ejemplo incorrecto: una función que no figura en el manual de la API
hamster_s.set_wheel('both', 100)

# ejemplo incorrecto: declarar una variable arbitraria
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Estructura básica del código de bloques {#3}
Cada vez que se presenta código de bloques, los bloques de función superiores función de inicio y función de bucle, que hacen de punto de entrada del programa, se incluyen siempre como estructura básica.  
Con esta regla, todo el código de bloques tendrá en adelante la estructura básica siguiente.

| Estructura de bloques (Block Composer) | Presentación (como texto) |
| --- | --- |
| función de inicio | función de inicio |
| (bloques internos) | (bloques internos) |
| función de bucle | función de bucle |
| (bloques internos) | (bloques internos) |

<br>

## 4. Formato del código de bloques (reglas de salto de línea y sangría) {#4}
- Los bloques superiores (función de inicio, función de bucle, etc.) se alinean a la izquierda.
- Cada bloque de instrucción se debe separar con un carácter de salto de línea, de modo que en cada línea se muestre un solo bloque.
- Los bloques subordinados que están dentro de un bloque con área de ejecución interna (si, repetir, definición de función, etc.) se sangran para que la jerarquía quede clara.

<br>

## 5. Reglas para los bloques internos y la representación de condiciones {#5}
El valor elegido en un desplegable o un valor de entrada corresponde a un argumento funcional del bloque y se inserta directamente entre corchetes ([]) en el lugar en el que ese valor aparece en el texto del bloque.  
Eso sirve para reproducir visualmente juntos el texto fijo del bloque y el valor que el usuario ha elegido o introducido.

Todo el código de bloques debe contener la denominación fija del bloque, los valores elegidos en los desplegables y los valores introducidos por el usuario, todos entre corchetes ([]),  
de modo que la forma real de los bloques en Block Composer se reproduzca como texto lo más fielmente posible.  

| Estructura de bloques (Block Composer) | Presentación (como texto) |
| --- | --- |
| si [condición] hacer [instrucción] si no [instrucción] | si [condición] hacer [instrucción] si no [instrucción] |
| RaccoonBot: fijar el modo de control en [velocidad] | RaccoonBot: fijar el modo de control en [velocidad] |
| RaccoonBot: establecer la velocidad de la articulación [1] en [100] | RaccoonBot: establecer la velocidad de la articulación [1] en [100] |

<br>

## 6. Estructura básica del código de script {#6}
Cada vez que se presenta código de script (Python), las funciones setup() y loop(), que hacen de punto de entrada del programa, se incluyen siempre como estructura básica.  
Además, `from robomation import *` va al principio del código para que estén disponibles las clases y utilidades necesarias para controlar el robot, y el robot que se va a usar se declara como instancia.  
Con esta regla, todo el código de script (Python) tendrá en adelante la estructura básica siguiente.

```python
# estructura básica del código Python
from robomation import *

# (si vas a usar un robot, declararlo como instancia, ejemplo)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Formato del código de script (reglas de salto de línea y sangría) {#7}
- Las funciones superiores (setup, loop, etc.) se alinean a la izquierda.
- La sangría después de un salto de línea se basa obligatoriamente en **un tabulador (`\t`)**. (igual que la sangría del editor)

<br>

## 8. Reglas para controlar el robot (instancia / métodos) {#8}
Para controlar un robot hay que cumplir las reglas siguientes.  

1) `from robomation import *` va al principio del código.
2) El robot que se va a usar se declara como instancia. Como nombre de variable se toma el nombre predeterminado de ese robot y el índice empieza en 0.
3) El robot se controla llamando a los métodos de la instancia declarada.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Si usas varios robots del mismo tipo, decláralos con índices ascendentes 0, 1, 2 … (p. ej. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Al fijar la velocidad de las ruedas, al avanzar y en casos parecidos, los métodos se encargan internamente de la inicialización necesaria (por ejemplo, de limpiar una orden de movimiento anterior), así que no tienes que escribir código de preparación propio.

<br>

## 9. Reglas para llamar a las funciones de utilidad {#9}
Las funciones de utilidad comunes —retardo, reproducir sonido, registrar, colores— se llaman a través de los métodos de la clase `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Encontrarás la lista detallada de funciones de utilidad en los documentos siguientes.
- [Color](../common/Color)
- [Audio](../common/Audio)
- [Control](../common/Control)

<br>

## 10. Regla de preferencia por los métodos propios del robot {#10}
Al controlar el hardware del robot (velocidad de las ruedas, LED, sonido, etc.)  
hay que dar preferencia a los métodos propios de la instancia del robot (p. ej. «HamsterS») frente a las funciones de utilidad comunes.

Si, por ejemplo, hay que emitir un sonido con el robot,  
hay que dar preferencia al método `sound_clip()` de la instancia «HamsterS» frente a la función de utilidad `Utils.play_sound()`.

```python
# el sonido sale del robot HamsterS. (recomendado)
hamster_s.sound_clip('beep')

# el sonido sale del PC / tableta / dispositivo móvil. (no recomendado)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Reglas para los imports {#11}
Al escribir código Python solo se importan los módulos necesarios para ejecutar el código.
- Para controlar el robot, `from robomation import *` va en principio al comienzo del código.
- En el código que usa `math.` se añade automáticamente `import math`, y en el que usa `random.`, `import random`.
- Los demás módulos que no se necesitan no se importan.
