---
title: Funciones
---

# Funciones

Una **función** es un **conjunto de instrucciones (bloques)** que realiza una tarea concreta.  
Si defines como una sola función las acciones que usas una y otra vez, mantienes el código **compacto y eficiente**.

Las funciones tienen las características siguientes.  
- **Reutilizables**: si defines una función una vez, después puedes llamarla tantas veces como quieras.  
- **Entrada y salida**: una función puede tomar parámetros (valores de entrada), procesarlos y devolver el resultado (valor de salida).  
- **Mejor legibilidad del código**: puedes organizar el flujo del programa de forma lógica.


## setup {#setup}

La **función setup** se ejecuta exactamente una vez en el momento en que se ejecuta el código.  
En la función setup escribes sobre todo código que inicializa variables o que prepara los modos y las opciones del robot.  
Si controlas, por ejemplo, un robot que se mueve con ruedas, en la función setup puedes fijar la velocidad inicial de las ruedas.  

<BlockImage module="common/functions" id="setup" />
  
Con la función `Utils.wait(...)` puedes escribir código que, mediante la ejecución secuencial, transcurre ordenado en el tiempo. Así no solo es posible la ejecución secuencial sencilla, sino también, junto con la **función loop**, que se encarga de la ejecución en paralelo, una programación de robots muy potente.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

La **función loop** se llama de nuevo cada 10 ms mientras el programa se está ejecutando.  
En la función loop escribes sobre todo código que fija el valor de variables una y otra vez o que detecta y procesa determinados eventos del robot.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definir una función {#procedures_defnoreturn}

Con el bloque que define una función puedes crear una **función nueva**.  
Una función sin valor de retorno realiza una acción concreta, pero **no devuelve ningún valor**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definir una función con valor de retorno {#procedures_defreturn}

Una función con valor de retorno realiza una tarea concreta y después **devuelve el valor resultante**, para que otros bloques puedan usarlo.  

<BlockImage module="common/functions" id="procedures_defreturn" />

La función siguiente **toma los parámetros x e y y devuelve el resultado de x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Llamar a una función {#procedures_callnoreturn}

Al definir una función se crea automáticamente un **bloque para esa función definida por el usuario**.  
Con él puedes llamar y ejecutar la **función definida previamente**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Si ... devuelve {#procedures_ifreturn}

Un bloque que dentro de una función **devuelve un valor inmediatamente** y termina la función en cuanto se cumple una condición concreta.  
Este bloque solo se puede usar **dentro de una función**; en cualquier otro sitio está desactivado.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
