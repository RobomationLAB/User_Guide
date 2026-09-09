---
title: Editor
---

# Editor

El **editor** es el área en la que escribes con **bloques** o con **código de script** el código para controlar un robot.  
A continuación se explica cómo programar en el entorno de **programación con bloques o con script (Python)** y a qué hay que prestar atención.

## Editor de bloques {#block-editor}

### Categorías de bloques {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

El área en la que los bloques que ofrece RobomationLAB están clasificados por **categorías**.  
Si haces clic en una categoría, ves la **paleta de bloques** de esa categoría.  

Las categorías de bloques que hay de forma predeterminada son:  

- Lógica
- Bucles
- Matemáticas
- Texto
- Lista
- Color
- Audio
- Control
- Variables
- Funciones
- Otros

Si además añades al programa un [**robot**](Menu#robot) o una [**extensión**](Menu#extension), en el programa también está disponible su paleta de bloques propia.  

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Las categorías de bloques añadidos que ya no necesitas las puedes quitar de las categorías de bloques con **clic derecho → Eliminar**.

<br>

### Paleta de bloques {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

El área en la que están reunidos todos los bloques de una categoría.  
Los bloques de la paleta de bloques se pueden llevar al área de programación **arrastrando y soltando**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Nota**  
Si quieres consultar el uso de un bloque, con **clic derecho → Ayuda** encuentras para cada bloque una ayuda que explica su uso.  

<br>

### Área de programación {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

El área en la que montas los bloques que has traído de la paleta de bloques.  


Los bloques montados se convierten en tiempo real en **código Python**;  
si ejecutas el código, se interpreta y con él puedes mover y controlar el robot.  

<br>

### Estructura básica de los bloques {#block-structure}

Al programar en el editor de bloques hay que cumplir la estructura básica siguiente.

<BlockImage module="program/Editor" id="block-structure" /><br>

El editor de bloques interpreta el código que está dentro de los bloques de función **función de inicio** y **función de bucle** y lo ejecuta.  
Por tanto, debes escribir tu código poniendo bloques dentro de los bloques de función **función de inicio** y **función de bucle**.  

**función de inicio**  
En el bloque de función función de inicio defines las acciones que se ejecutan al principio al ejecutar el código.  
Con el bloque **esperar** puedes conseguir que las acciones transcurran ordenadas en el tiempo.  

**función de bucle**  
En el bloque de función función de bucle defines las acciones que se ejecutan una y otra vez mientras el código está en marcha.  
Las acciones definidas se ejecutan de nuevo aproximadamente cada 10 ms.  

**⚙️ Nota**  
(Aparte de las funciones propias que hayas creado con la **categoría Funciones**)  
Los bloques que están fuera de los bloques de función **función de inicio** o **función de bucle** no tienen ningún efecto al ejecutar el código.  

<br>

### Cómo usar los bloques {#block-usage}

**Añadir un bloque**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

El bloque que quieras añadir lo **arrastras desde la paleta de bloques** y lo **sueltas en el editor**: así se añade.   
<br>

**Copiar / pegar bloques**  

Hay dos formas de copiar y pegar bloques en el editor.  

1. Elige un bloque y pulsa **Ctrl+C**: el bloque elegido se **copia**.  
Si pulsas **Ctrl+V**, el último bloque copiado se **pega** en el editor.  

2. Elige un bloque y pulsa en el menú **Editar** el botón **«Copiar Ctrl+C»**: el bloque elegido se **copia**.  
Si pulsas en el menú **Editar** el botón **«Pegar Ctrl+V»**, el último bloque copiado se **pega** en el editor.

<br>

**Eliminar bloques**  

Hay tres formas de eliminar bloques en el editor.

1. Elige un bloque y pulsa **Backspace**: el bloque elegido se elimina.<br>  

2. El bloque que quieras eliminar lo **arrastras en el editor** y lo **sueltas en las categorías de bloques**: así se elimina.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. El bloque que quieras eliminar lo **arrastras en el editor** y lo **sueltas en la papelera**: así se elimina.  
Los bloques eliminados los puedes volver a ver en la **papelera**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Seleccionar varios bloques a la vez**  

Hay dos formas de seleccionar varios bloques a la vez en el editor.

1. Si mantienes pulsada la tecla **Shift** y arrastras por el área de trabajo o haces clic en los bloques uno a uno,  
puedes seleccionar varios bloques a la vez.  

2. Con el **botón de marca de verificación** de abajo a la derecha del área de trabajo activas o desactivas el modo «seleccionar varios bloques».  
Si el botón está relleno de color, el modo está activado.  
Si el botón no está relleno de color, el modo está desactivado.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Mientras el modo «seleccionar varios bloques» está activado, solo puedes seleccionar bloques.   
Si quieres mover o editar juntos los bloques elegidos, tienes que terminar la selección y desactivar el modo.  

<br>

**Opciones adicionales**

Si además haces **clic derecho** en un bloque,  
encuentras varias opciones adicionales, como **contraer/expandir el bloque, activarlo/desactivarlo y Ayuda**.  

<br>

## Editor de Python {#python-editor}

### Paleta de código {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

El área en la que las **funciones básicas** que necesitas para programar robots y los **códigos Python** de los robots y las extensiones están clasificados por **categorías**.  


Las categorías de código de las funciones básicas (Códigos) son:  

- Lógica (logic)
- Bucles (loops)
- Matemáticas (math)
- Texto (text)
- Lista (lists)
- Color (color)
- Audio (audio)
- Control (control)

Los códigos de las funciones básicas hacen lo mismo que los bloques básicos del editor de bloques.  

<br>

**⚙️ Nota**  
Cómo programar con la paleta de código en el editor de Python está en [**Cómo usar la paleta de código**](#python-codes-usage).

<br>

### Editor de código {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

El área en la que escribes el código para controlar un robot.  


Si en [**Configuración del editor**](Menu#editor-settings) eliges el editor **Python**, puedes escribir código Python.

<br>

### Estructura básica del código {#python-structure}

Al programar en el editor de código hay que cumplir la estructura básica siguiente.

```python
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

El editor de código interpreta el código que está dentro de las funciones **setup** y **loop** y lo ejecuta.  
Por tanto, debes escribir tu código dentro de las funciones **setup** y **loop**.  
Además, para controlar un robot, `from robomation import *` va al principio del código y el robot que vas a usar se debe declarar como instancia.

**setup**  

En la función setup defines las acciones que se ejecutan al principio al ejecutar el código.  
Con la función **Utils.wait** puedes conseguir que las acciones transcurran ordenadas en el tiempo.  

**loop**  
En la función loop defines las acciones que se ejecutan una y otra vez mientras el código está en marcha.  
Las acciones definidas se ejecutan de nuevo aproximadamente cada 10 ms.  


<br>

### Cómo usar la paleta de código {#python-codes-usage}

A continuación se explica con ejemplos sencillos **cómo usar la paleta de código al programar**.  

### Encontrar el código que quieras {#python-codes-find}

La paleta de código ofrece muchas funciones y códigos que necesitas para programar robots.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Si miras los elementos de la categoría **Códigos**, en algunos encuentras el icono <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Si haces clic una vez en el elemento **Lógica**, el icono pasa a <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> y los **subelementos** que contiene se despliegan.  
Un elemento con subelementos se llama «**categoría**».  

Si a un elemento le falta el icono <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, como a **ternario** en la categoría **Lógica**, significa que ahí **ya no hay más subelementos**.  
Un elemento sin subelementos se llama «**código**».  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Si vuelves a hacer clic en una categoría desplegada, el icono pasa otra vez a <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> y los subelementos se ocultan.  

Así puedes seguir las categorías y encontrar en la paleta de código el código que quieras.

<br>

### Insertar código en el editor {#python-codes-insert}

Así insertas código en el editor.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Si a la izquierda del nombre de un elemento está el icono <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline />, significa que para ese elemento no hay **opciones de código** que elegir.  
Eso ocurre normalmente con los elementos de **categoría** que tienen subelementos.

Si a la izquierda del nombre de un elemento está el icono <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline />, significa que para ese elemento hay **opciones de código** que elegir.  
Eso ocurre normalmente con los elementos de **código** sin subelementos.

Si haces **clic derecho** en el código que quieras insertar en el editor, ves las opciones disponibles.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Si haces clic derecho en un elemento de **código**, encuentras las mismas opciones, sin diferencia entre las funciones básicas y los códigos de los robots y las extensiones:

- **Insertar código**: inserta el código elegido en la posición del cursor en el editor.
- **Ayuda**: muestra la ayuda que explica el uso de ese código.
- **Cancelar**: cierra el menú de opciones.

En los códigos de los robots y las extensiones, con **Insertar código** se inserta una llamada a un método de la instancia de ese robot.  
( p. ej. `set_wheel_speed` de HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Las categorías de código de los robots o las extensiones añadidos que ya no necesitas  
las puedes quitar de la paleta de código con **clic derecho → Eliminar**.

<br>
