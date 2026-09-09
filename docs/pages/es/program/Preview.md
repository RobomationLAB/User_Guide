---
title: Vista previa
---

# Vista previa

La **vista previa** es el área en la que compruebas el **estado de conexión de los robots** y que te ayuda al programar: con código, cámara, consola y más.  
A continuación se describen las funciones de cada pestaña.

## Conexiones {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

En la pestaña Conexiones ves la información de los robots conectados en ese momento.   
Si haces clic en **Mostrar valor del sensor en tiempo real**, puedes ver los valores de los sensores del robot como gráfico o como número en tiempo real.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Puedes elegir el sensor que quieres consultar; los tipos de sensor admitidos dependen del robot.  
Según el sensor elegido, el gráfico y la forma de mostrar los datos se adaptan automáticamente a los valores de ese sensor. 

2. Puedes elegir con qué intervalo en segundos se consultan o se registran los valores de los sensores.  
Según el intervalo elegido, cambia el tiempo máximo durante el que se pueden registrar datos y mostrarlos en el gráfico. 
3. Si pones el ratón sobre el gráfico del sensor, ves al mismo tiempo el valor del sensor en ese momento en tiempo real. 
4. Iniciar/detener el registro: registra los datos del sensor. 
5. Exportar: guarda como archivos los datos de sensor registrados (.csv) y la imagen del gráfico (.png).  
Esta función solo está disponible después de registrar datos. 
6. Captura: guarda en tiempo real la imagen actual del gráfico (.png).  
Así puedes registrar los cambios de los valores de los sensores y guardar como archivos el archivo de datos registrado y la imagen del gráfico.    

<br>

## Vista previa de Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

En la vista previa de Python ves en tiempo real cómo se traduce a código **Python** el hecho de añadir o quitar bloques.  
Como al mismo tiempo sigues cómo los bloques se convierten en código, aprendes la sintaxis con más facilidad. 

※ La vista previa de Python solo existe en el **editor de bloques**.  
En el editor de Python el usuario escribe el código él mismo, así que ahí no hay vista previa.

<br>

## Cámara {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

En la pestaña Cámara ves en tiempo real la imagen de la cámara conectada al PC.  

Esta función solo está activa **si has añadido al programa una extensión que usa la cámara**; en la pestaña Cámara se crea entonces un módulo de cámara.  

En cada módulo de cámara puedes:
- elegir una de las cámaras disponibles en el PC y mostrar su imagen.
- mostrar o detener la imagen de la cámara con el botón **Encendida / Apagada**.
- cambiar la **resolución de la cámara**.

<br>

## Consola {#console}

En la pestaña Consola ves en tiempo real los mensajes de registro (Log) y los gráficos (Scope) que se muestran mientras el programa se ejecuta.  
Esta pestaña sirve para depurar, seguir valores de sensores, hacer análisis con gráficos y cosas parecidas.  

### Registro {#console-log}
Con el bloque **registrar** puedes mostrar en el área de registro de la consola un texto o un valor numérico junto con una etiqueta indicada.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Gráfico {#console-scope}

Con el bloque **mostrar gráfico** puedes representar valores numéricos por etiqueta como **gráfico en tiempo real**.  
Con el mínimo, el máximo y el color del gráfico puedes seguir de forma clara los cambios de los valores que quieras. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
