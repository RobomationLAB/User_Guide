---
title: Menú superior
---

# Menú superior

En el **menú superior** están reunidas las funciones que más se usan en el programa: conectar el adaptador y el robot, guardar y abrir archivos y más.  
A continuación se describen por orden las funciones de cada menú. 

## Logotipo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

El logotipo del programa.  
Si haces clic en el logotipo, la página se recarga. 

Si está activo el **editor de bloques**, el logotipo muestra el texto **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Si está activo el **editor de Python**, el logotipo muestra el texto **Script Composer**.  

<br>

## Buscar el adaptador {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Aquí puedes **buscar el adaptador que comunica con el robot y conectarlo al programa**.

Para controlar un robot en el programa, primero hay que conectar al programa el adaptador que comunica con el robot.  
Ese proceso se llama **emparejamiento**. 

Si pulsas el botón **Adaptador USB**, aparece la lista de adaptadores disponibles en el PC.  
Elige en la lista el adaptador que quieras y haz clic en **Conectar**: el adaptador se conecta al programa.  

### Comprobar el estado de conexión del adaptador {#dongle-status}

Un adaptador que se ha conectado una vez al programa se conecta automáticamente la próxima vez que uses el programa.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Si el adaptador está bien conectado al programa, el icono pasa a **azul claro**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Si en la pestaña del navegador hay un icono como el de la imagen siguiente, el adaptador está conectado.  

<br>

**⚠️ Atención**  

Si el adaptador ya está conectado a otro programa o a otra página, no se puede conectar a este programa.  
En ese caso, busca el programa al que está conectado el adaptador, desconéctalo allí, vuelve a esta página e inténtalo de nuevo.

<br>

## Seleccionar robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Aquí puedes **elegir el robot que vas a usar en el programa** y **registrar la información de ese robot junto con sus bloques o códigos de script propios**. 

Para controlar un robot en el programa, primero hay que añadir al programa la información y los bloques del robot que quieras.

<BlockImage module="program/Menu" id="robot-select" /><br>

Si pulsas el botón **Robot**, una ventana emergente muestra la lista de robots disponibles en el programa.  

Elige el robot que quieras y haz clic en **Añadir**: la información de ese robot y sus bloques o códigos de script propios se registran en el programa.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Al añadir un robot se crean los elementos siguientes. 


- **Block Composer**: en la [**paleta de bloques**](Editor#block-editor) de la izquierda se crean los **bloques** propios de ese robot 
- **Script Composer**: en la [**paleta de código**](Editor#python-editor) de la izquierda se crean los **códigos de script** propios de ese robot

Así puedes mover y controlar libremente hardware real del robot: sensores, motores, LED y más.  

<br>

**⚙️ Nota**

En RobomationLAB puedes conectar y usar tantos robots como quieras, sin límite de tipo ni de cantidad.  

Sin embargo, si quieres conectar y usar varios robots al mismo tiempo, tienen que estar conectados al programa tantos adaptadores como robots vayas a usar, y debes añadir al programa esa misma cantidad de robots.  

<br>

## Seleccionar extensión {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Las extensiones son módulos que ofrecen **funciones adicionales basadas en IA, como el reconocimiento de voz, el reconocimiento de imágenes y el análisis de imágenes**.  
Aquí puedes **elegir la extensión que vas a usar en el programa** y **registrar la información de esa extensión junto con sus bloques o códigos de script propios**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Si pulsas el botón **Extensión**, aparece una ventana emergente con la lista de extensiones disponibles en el programa.  
- Voz a texto
- Detección facial
- Detección facial detallada
- Expresión facial
- Detección de manos
- Detección corporal
- Detección de objetos
- Detección de colores
- Detección de marcadores ArUco
- Conducción autónoma con cámara

Si haces clic en el módulo que quieras, igual que en [**Seleccionar robot**](#robot), la información de esa extensión y sus bloques o códigos de script propios se registran en el programa. 

Si añades una extensión que usa la cámara, como **Detección facial** o **Detección de manos**,  
en la pestaña [**Vista previa – Cámara**](Preview#camera) se crea un módulo de cámara y puedes conectar y usar la cámara con el programa.  

Si ya no necesitas una extensión que has elegido, puedes quitarla de la lista con **clic derecho → Eliminar**.

<br>

## Sonido {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Aquí puedes elegir sonidos para usarlos al programar o añadir al programa sonidos propios de tu ordenador.

### Seleccionar un sonido {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Si pulsas el botón **Sonido**, aparece una ventana en la que puedes elegir entre los muchos sonidos que ofrece el programa.  
Están disponibles las funciones siguientes.  
- Buscar sonidos
- ▶ Escuchar el sonido
- Añadir el sonido a la lista de sonidos (panel izquierdo)

### Funciones adicionales {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Si haces clic abajo a la izquierda en el botón **Extensión** (marco rojo) o pones el ratón encima, aparecen tres opciones con funciones adicionales.  
Están disponibles las funciones siguientes.
- Añadir archivo local: añade un archivo de audio del ordenador del usuario 
- Grabar sonido: graba un sonido y lo añade
- Añadir sonido aleatorio: añade un sonido elegido al azar de toda la lista de sonidos

### Usar sonidos al programar {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Los sonidos que has añadido a la lista de sonidos (panel izquierdo) se pueden usar al programar.

- En la **programación con bloques**, eliges el sonido que quieras en el desplegable del bloque **reproducir sonido**.  

- En la **programación con scripts**, eliges el sonido que quieras en las subopciones de la función **«reproducir sonido»** de la categoría **Códigos – Audio**.  

Al ejecutar el código, el sonido elegido se reproduce por los altavoces del ordenador.

<br>

## Ejemplo {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Si en el programa hay un robot añadido, puedes cargar y probar ejemplos sencillos para cada robot.

### Seleccionar un ejemplo {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Si pulsas el botón Ejemplo, aparece la ventana **Seleccionar ejemplo** que se muestra arriba.   
Con las **categorías** y la **búsqueda** encuentras rápido el ejemplo que quieras. 

### Cargar un ejemplo {#example-load}
1. Haz clic en el menú **Ejemplo**, abre la ventana **Seleccionar ejemplo** y elige el ejemplo que quieras. 
2. La ventana se recarga y el ejemplo aparece en el área de programación.   
3. Después de cargarlo, puedes pulsar el **botón Ejecutar (▶)** sin más pasos y observar el comportamiento. 

<br>

## Editar {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Una función con la que puedes deshacer o repetir acciones.
- Copiar (Ctrl+C): copia el bloque o el código elegido.
- Pegar (Ctrl+V): pega el bloque o el código copiado en el área de trabajo.
- Deshacer (Ctrl+Z): deshace la última acción.
- Rehacer (Ctrl+Y): vuelve a ejecutar la acción deshecha. 

<br>

## Archivo {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Aquí gestionas archivos: crear código nuevo, guardar el código escrito como archivo y volver a abrirlo.

- Nuevo  
Reinicia el código que estás escribiendo y crea código nuevo.

- Guardar proyecto  
Guarda el archivo del proyecto en el que estás trabajando.  
El archivo se guarda en la carpeta «Descargas» del usuario y la extensión es «.block».

- Exportar código Python  
Extrae el código Python del proyecto en el que estás trabajando y lo guarda como archivo.  
El archivo se guarda en la carpeta «Descargas» del usuario y la extensión es «.py».  
El archivo guardado se puede abrir y ejecutar en un entorno Python externo como VSCode.

- Abrir proyecto  
Abre un archivo de proyecto o un archivo de código Python del ordenador del usuario.  
Se pueden abrir archivos con las extensiones «.block» y «.py».  
Un archivo «.block» se abre en el editor de bloques y un archivo «.py», en el editor de Python.  
Ten cuidado al abrir un archivo «.py»: si no se ajusta al formato de código de Block Composer o contiene errores de sintaxis, puede que no se abra correctamente.

<br>

## Ejecutar / detener el código {#run-stop}

### Ejecutar (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Interpreta el código de bloques o de script del editor activo y lo ejecuta.  

Según el código escrito, puedes controlar con él los robots conectados al programa.  
Mientras el código está en marcha, no puedes editar el código escrito.

### Detener (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Detiene la ejecución del código.


<br>

## Programación con IA {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Si pulsas en el menú superior el botón **Programación con IA**, a la derecha se abre el panel del chatbot de IA.  
Puedes hablar con el **chatbot de IA** integrado en RobomationLAB y programar junto con la IA.

Están disponibles las funciones siguientes.
- Puedes preguntar libremente sobre programación: cómo escribir y cambiar código, sobre la sintaxis, sobre los conceptos y más.
- **Si al ejecutar el código se produce un error**, puedes preguntar a la IA por el motivo y la solución y arreglar el problema rápido.
- El código que propone la IA se copia fácilmente con el botón que está a la derecha del bloque de código.
- La conversación se guarda, así que puedes continuarla; también puedes empezar una **conversación nueva**.
- Arrastrando el borde izquierdo del panel puedes ajustar su anchura.

<br>

## Copiar código {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Aquí puedes copiar al portapapeles el código del editor activo.  

### Block Composer (programación con bloques) {#copy-block}

Se copia el código Python que se muestra en la pestaña **[Vista previa de Python](Preview#python-preview)**.

### Script Composer (Python) {#copy-python}
El código del editor de Python se copia tal cual.  

El código copiado lo puedes pegar donde quieras con Ctrl+V.

<br>

## Configuración del editor {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Puedes elegir entre **Bloque** y **Python** el editor que quieras y programar en él.  

Aunque cambies de editor, el código escrito antes se conserva y puedes seguir programando en cualquier momento. 

**※ El editor de bloques y el editor de Python se corresponden uno a uno; al cambiar, el código escrito se convierte y continúa.**

### Editor de bloques {#editor-settings-block}
Si eliges Bloque, el logotipo pasa a **Block Composer**.  
Los bloques que montas en el editor de bloques se convierten en tiempo real en código Python; el resultado lo ves en la pestaña **Vista previa – Vista previa de Python**.  

### Editor de Python {#editor-settings-python}
Si eliges Python, el logotipo pasa a **Script Composer**.  
El código que escribes en el editor de Python se convierte en bloques al volver al **editor de bloques**.  

> Sin embargo, la conversión de Python a bloques solo funciona con código que se pueda representar como bloques.  
> Con sintaxis errónea o con código que no se puede convertir en bloques, el cambio al editor de bloques puede no producirse; en ese caso también se muestra el motivo del fallo.

<br>

## Ajustes {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Aquí haces los ajustes básicos del programa.

### Idioma {#settings-language}
Cambia el idioma (el país) que se muestra en el programa.  
Puedes elegir el que quieras entre 21 idiomas en total.

### Adaptador {#settings-dongle}
- Desconectar: desconecta todos los adaptadores conectados al programa.
- Conectar: vuelve a conectar el adaptador al programa.

### Restablecer {#settings-reset}
- Restablecer programa: se restablecen todos los datos registrados en el programa (información de los robots, bloques o códigos de script, ajustes, etc.).

<br>

## Soporte {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Aquí encuentras las guías y el material externo que necesitas para usar el programa.  

- Tutorial: ofrece un tutorial para quien usa el programa por primera vez.
- Ayuda: aquí ves directamente en el programa el uso y ejemplos de los bloques y de los códigos Python.
- Guía del usuario: abre la página wiki de la guía del usuario de RobomationLAB.  
Describe en detalle los elementos y el uso del programa y las funciones y la sintaxis de cada bloque o código de script.
- Laboratorio de Robomation: abre la página principal de RobomationLAB.
- Inicio: abre la web oficial de la empresa Robomation.
- YouTube: abre la página de YouTube de Robomation.
- Tienda en línea: abre la tienda en línea de Robomation.
- Acerca de: aquí ves la versión del programa y el historial de cambios, las condiciones de uso, la política de privacidad y más.
- Contáctanos: aquí puedes plantear dudas sobre el uso del programa o informar de errores.

<br>
