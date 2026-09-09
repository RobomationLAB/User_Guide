---
title: Guía de programación
---

# Guía de programación

Este documento describe RobomationLAB, la plataforma de enseñanza de programación de robots desarrollada por Robomation, que forma parte del «motor de ejecución y entorno de autoría integrado para el servicio de streaming de movimientos de robots».  

La descripción detallada sigue este orden:
- Las características principales de RobomationLAB
- La forma de programar robots en RobomationLAB
- El sistema de sintaxis básica de la programación de robots en RobomationLAB  

<br>

## Índice {#table-of-contents}
1. [RobomationLAB — plataforma de enseñanza de programación de robots](#platform)  
    1-1) [Programas para programar robots](#coding-programs)  
    1-2) [Conversión bidireccional en tiempo real entre bloques y Python](#block-python-conversion)  
    1-3) [Las características principales de los programas](#features)  
    1-4) [Control de robots en tiempo real](#control-method)  

2. [La forma de programar robots en RobomationLAB](#programming-method)  
    2-1) [Ejecución secuencial y ejecución en paralelo](#sequential-parallel)  
    2-2) [La función setup](#setup)  
    2-3) [La función loop](#loop)  

3. [El sistema de sintaxis básica de la programación de robots en RobomationLAB](#grammar-syntax)  
    3-1) [Importar el paquete robomation](#import-package)  
    3-2) [Crear una instancia de robot](#create-instance)  
    3-3) [Métodos para controlar el robot](#control-methods)  
    3-4) [Leer sensores y estados](#sensor)  
    3-5) [Detectar eventos](#event)  
    3-6) [Esperar a que una acción termine (wait)](#wait)  
    3-7) [Funciones de utilidad (Utils)](#utils)   

<br><br>

## RobomationLAB — plataforma de enseñanza de programación de robots {#platform}
RobomationLAB es una plataforma optimizada para la **enseñanza de software de robótica con IA**.  
Ofrece un entorno de autoría integrado basado en el navegador web Chrome para la enseñanza de programación de robots a alumnos de primaria y secundaria.  

RobomationLAB ofrece programas de enseñanza de programación de robots en distintas formas, como la **programación con bloques** y la **programación con scripts**.  
No solo se aprende la teoría de la programación, sino que con los productos de Robomation se mueven y controlan robots reales,  
lo que da la oportunidad de aprender programación y robótica al mismo tiempo.

<br>

### Programas para programar robots {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer es una herramienta con la que se controlan los propios robots de forma fácil y rápida mediante programación con bloques y se aprenden las bases del control de robots.**  

- Un entorno de autoría optimizado para la computación física

- Programar arrastrando y soltando bloques: fácil incluso para principiantes  
- Un entorno de aprendizaje sin errores de sintaxis, desde los conceptos básicos  
- Conversión automática a código de script Python  
- Para cada robot, una colección de bloques con funciones predefinidas y muchos ejemplos para probar
- Resultados visibles en tiempo real al ejecutar el código  
- Mejor capacidad de resolución de problemas y más creatividad al combinar bloques  
- Comentarios optimizados gracias al análisis del código de script basado en IA  

<br>

#### Script Composer {#script-composer}
**Script Composer es una herramienta con la que se controlan los propios robots de forma fácil y rápida mediante programación en Python y se aprenden la sintaxis de Python y las bases de la programación de robots.**  

- Un editor de Python

- Autocompletado e inserción de código por idioma
- Para cada robot, muchos códigos de ejemplo para probar
- Resultados visibles en tiempo real al ejecutar el código
- Comentarios optimizados gracias al análisis del código de script basado en IA

<br>

#### Las características principales de los programas {#features}
Los programas para programar robots de RobomationLAB tienen las características principales siguientes.  
1.	Funcionan en el navegador web Chrome, por lo que no dependen del sistema operativo
2.	Controlan el hardware del robot directamente con un adaptador USB mediante Web Serial
3.	Admiten el control simultáneo de varios robots, sin límite de tipo ni de cantidad
4.	Al guardar, el resultado se convierte en un archivo de texto JSON y se guarda

<br>

### Control de robots en tiempo real {#control-method}
Los programas para programar robots de RobomationLAB controlan los robots en tiempo real siguiendo estos pasos.  
1.	Con programación con bloques o con scripts
se escribe código que establece los valores de los objetos Effector y Command para controlar el robot
o que usa los valores Sensor y los eventos Event del robot.
2.	Se ejecuta el código.
3.	Mediante Web Serial se reciben del robot paquetes con datos de Sensor y Event
y se incorporan al objeto Device del robot.
4.	El código se interpreta en tiempo real;
en ese proceso se sobrescriben datos en los objetos Effector y Command o se leen valores de los objetos Sensor y Event.
5.	Con los datos del objeto Device se crea un paquete
y se envía al robot mediante Web Serial, de modo que se puede comprobar si el robot funciona de verdad.
6.	Mientras el código se ejecuta, los pasos 3 ~ 5 se repiten aproximadamente cada 10 ~ 20 ms.  

<br>

### Conversión bidireccional en tiempo real entre bloques y Python {#block-python-conversion}
RobomationLAB ofrece juntos un editor de programación con bloques y un editor de Python; los dos editores se sincronizan en tiempo real en ambas direcciones.

- Si añades, cambias o eliminas bloques en el editor de bloques, esos cambios se incorporan en tiempo real al código Python.
- A la inversa, los cambios que hagas en el código en el editor de Python se incorporan en tiempo real a los bloques.

Como los bloques y el código Python se corresponden uno a uno y se convierten en ambas direcciones,  
puedes pasar de forma natural de la programación con bloques a la programación con scripts: por ejemplo, construir rápidamente toda la estructura con bloques y después afinar los detalles en Python, o aprender la sintaxis de Python comparándola con los bloques.

> Sin embargo, la conversión de Python a bloques solo funciona con código que se pueda representar como bloques.  
> (Con sintaxis errónea o con código que no se puede convertir en bloques, el cambio puede no producirse.  
Encontrarás más información en el documento [Reglas de programación](CodingRules).)

<br>

<br><br>

## La forma de programar robots en RobomationLAB {#programming-method}

### Ejecución secuencial y ejecución en paralelo {#sequential-parallel}
Al programar robots se distingue entre la ejecución secuencial y la ejecución en paralelo.  
La ejecución secuencial significa que la acción siguiente no empieza hasta que la anterior ha terminado; es adecuada para comportamientos sencillos.  
Si, por ejemplo, quieres que el robot avance y después se pare y encienda un LED, tiene que ser posible la ejecución secuencial, para que el código de cada acción se coloque en ese orden y se ejecute una detrás de otra en el tiempo.  

La ejecución en paralelo significa que varias acciones se ejecutan al mismo tiempo; es necesaria para comportamientos más complejos y avanzados.  
Si, por ejemplo, quieres conseguir que un robot bípedo ande, tiene que ser posible programar con ejecución en paralelo, porque andar solo funciona si los pies y las piernas del robot se mueven al mismo tiempo.

Los programas para programar robots de RobomationLAB admiten las dos formas al mismo tiempo,  
a partir de una estructura de código setup / loop parecida al entorno de desarrollo de hardware de Arduino.

<BlockImage module="program/Editor" id="block-structure" />

Cuando abres Block Composer por primera vez, en el área de trabajo aparecen dos bloques de función vacíos:  
el bloque **función de inicio** representa la función `setup` y el bloque **función de bucle**, la función `loop`.  

Los bloques se convierten en tiempo real en código Python,  
y ese código tiene la estructura básica siguiente.  

```python
# estructura básica del código Python
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Para controlar un robot, pon `from robomation import *` al principio del código y declara el robot que vas a usar como instancia. (p. ej. `hamster_s = HamsterS(0)`)


<br>

### La función setup {#setup}
La función setup se ejecuta exactamente una vez en el momento en que se ejecuta el código.  
En la función setup se escribe sobre todo código que inicializa variables o que prepara los modos y las funciones del robot.  
Si controlas, por ejemplo, un robot que se mueve con ruedas, en la función setup puedes fijar la velocidad inicial de las ruedas.  

Si dentro de una función hace falta un retardo, con la función `Utils.wait(...)` puedes escribir código que transcurra ordenado en el tiempo, como si fuera sincrónico.  
`Utils.wait(...)` espera el tiempo indicado (en segundos) y después ejecuta el código siguiente, es decir, el código se despierta después de un tiempo o una acción determinados y continúa.  
Si aprovechas esta posibilidad, junto con la función loop, que se encarga de la ejecución en paralelo, no solo es posible la ejecución secuencial sencilla, sino también una programación de robots muy potente.

En el ejemplo siguiente, el robot HamsterS avanza un segundo y después retrocede un segundo.  
Si lo hicieras en la función loop, que se ejecuta en paralelo, el cálculo del tiempo y el código de control se mezclarían y el código quedaría muy complicado.  
Si en cambio usas en la función setup la función de retardo `Utils.wait`, puedes escribir código que transcurra ordenado en el tiempo, como si fuera sincrónico.  
( La función `Utils.wait` se describe más adelante con más detalle en [Funciones de utilidad (Utils)](#utils). )

Código de ejemplo (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # poner las dos velocidades de rueda en 50 y avanzar
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # esperar 1 segundo
    # poner las dos velocidades de rueda en -50 y retroceder
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # esperar 1 segundo
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( La sintaxis de las instancias de robot y de los métodos se describe más adelante con más detalle en [El sistema de sintaxis básica de la programación de robots en RobomationLAB](#grammar-syntax). )


<br>

### La función loop {#loop}
La función loop admite la ejecución en paralelo y se ejecuta de nuevo aproximadamente cada 10 ms mientras el código está en marcha.  
En la función loop se escribe sobre todo código que fija el valor de variables una y otra vez o que detecta y procesa determinados eventos del robot.  

En el ejemplo siguiente, la velocidad de rueda y el color del LED del robot HamsterS cambian con el tiempo.  
( Si dentro de una función cambias una variable declarada fuera de setup / loop, decláralas allí con la palabra clave `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # cada vez que se llama a la función loop, el valor de frame aumenta en 1

    # con el valor cambiado de frame, fijar las dos velocidades de rueda y los valores RGB de los dos LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( La sintaxis de las instancias de robot y de los métodos se describe más adelante con más detalle en [El sistema de sintaxis básica de la programación de robots en RobomationLAB](#grammar-syntax). )  

En el ejemplo siguiente, el LED se enciende en rojo cuando se da un golpecito al cuerpo del robot HamsterS (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # en el momento en que se produce un golpecito, se detecta el evento
    if hamster_s.tap():               # si se detecta el evento, True
        hamster_s.set_led_color('both', 'red')   # encender los dos LED en rojo
    else:
        hamster_s.turn_off('both')               # apagar los dos LED
```
( La sintaxis de la detección de eventos (`tap()`) y demás se describe más adelante con más detalle en [El sistema de sintaxis básica de la programación de robots en RobomationLAB](#grammar-syntax). )  

<br><br>

## El sistema de sintaxis básica de la programación de robots en RobomationLAB {#grammar-syntax}
Al escribir código en los programas para programar robots de RobomationLAB se aplica el sistema de sintaxis básica siguiente.  
El control del robot se hace a través del paquete Python `robomation`:  
se crea una instancia del robot y después se llama a los métodos de esa instancia.

### Importar el paquete robomation {#import-package}
Para poder usar las clases (robots) y las utilidades (`Utils`) que necesitas para controlar el robot, la línea siguiente va al principio del código.

```python
from robomation import *
```

<br>

### Crear una instancia de robot {#create-instance}
Declara el robot que vas a usar como instancia.  
El nombre de la clase indica el tipo de robot y el número entre paréntesis, el índice de la instancia (empieza en 0).

```python
hamster_s = HamsterS(0)   # un HamsterS
```

Los nombres de clase y los nombres de variable predeterminados de cada robot son:

| Robot | Nombre de clase | Nombre de variable predeterminado |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Si usas varios robots del mismo tipo, decláralos con índices ascendentes 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Métodos para controlar el robot {#control-methods}
Para controlar el robot se llama a los métodos de la instancia.  
Los métodos realizan las acciones del robot: fijar la velocidad de las ruedas, avanzar, LED, sonido y más.

```python
hamster_s.set_wheel_speed('both', 50)    # fijar las dos velocidades de rueda
hamster_s.move_distance(10, 'cm')        # avanzar 10 cm
hamster_s.set_led_color('both', 'red')   # los dos LED en rojo
```

Los métodos que ofrece cada robot y sus parámetros están en el documento de ese robot (p. ej. «HamsterS»).

<br>

### Leer sensores y estados {#sensor}
También para leer valores de sensores o estados del robot se llama a métodos; el método devuelve el valor.

```python
left = hamster_s.floor('left')        # leer el valor del sensor de suelo izquierdo
dist = hamster_s.proximity('right')   # leer el valor del sensor de proximidad derecho
```

<br>

### Detectar eventos {#event}
Los eventos que se producen por cambios de estado o del entorno se detectan porque  
el método de evento correspondiente devuelve True en el momento en que el evento se produce.

```python
if hamster_s.tap():        # en el momento en que se produce un golpecito, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Esperar a que una acción termine (wait) {#wait}
Los métodos que tardan en terminar —avanzar, girar, reproducir sonido— tienen un parámetro `wait`.
- `wait=True` (valor predeterminado): se espera hasta que la acción termina y después se ejecuta el código siguiente.
- `wait=False`: la acción se inicia y el código siguiente se ejecuta de inmediato.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # espera hasta que el movimiento termina
hamster_s.move_distance(10, 'cm', wait=False)   # inicia el movimiento y ejecuta enseguida el código siguiente
```

<br>

### Funciones de utilidad (Utils) {#utils}
Las funciones comunes que no dependen del tipo de robot —retardo, reproducir sonido, registrar, colores— se usan a través de los métodos de la clase `Utils`.

```python
Utils.wait(1)              # esperar 1 segundo
Utils.speak('Hola')        # reproducir texto como voz (TTS)
Utils.log(0, '', '')       # registrar en la consola
```

<br>
