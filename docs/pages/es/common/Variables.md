---
title: Variables
---

# Variables

Usamos la palabra variable con el mismo significado que en matemáticas y en otros lenguajes de programación.  
Es decir, **un elemento con nombre que guarda un valor y puede cambiarlo**.  
  
Puedes crear variables de varias formas.  

- Algunos bloques, como [contar con](Loops#controls_for) y [para cada elemento](Loops#controls_forEach), usan una variable y determinan su valor.  
Esas variables se llaman tradicionalmente **variables de bucle (loop variables)**.  
- También las [funciones definidas por el usuario](Functions#procedures_defnoreturn) usan variables para definir parámetros o argumentos.
- Con el bloque **establecer variable** puedes crear una variable en cualquier momento; esa variable se declara como **variable global (global variable)**.  
- El entorno de programación con bloques de RobomationLAB no admite **variables locales (local variables)**.  

Si haces clic en el desplegable de un bloque de variable, aparecen las opciones siguientes.  

- Se muestran todos los nombres de las variables ya definidas en el programa.  
- **"Cambiar el nombre de la variable"**: cambia el nombre de esa variable en todo el programa. Si eliges esta opción, aparece una ventana en la que puedes escribir el nombre nuevo.  
- **"Eliminar la variable"**: elimina todos los bloques del programa que hacen referencia a esta variable. 


## Establecer variable {#variables_set}

El bloque **establecer** asigna un valor a una variable.  
Si esa variable aún no está declarada en el código, primero se declara una variable nueva y después se le asigna el valor.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Cambiar el valor {#math_change}

El bloque **añadir** suma un número al valor de una variable.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Obtener el valor {#variables_get}

El bloque siguiente da el valor guardado en una variable, pero no lo cambia.  
También puedes usar este bloque sin el bloque de establecer, pero eso no es una buena forma de programar.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
