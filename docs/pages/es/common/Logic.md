---
title: Lógica
---

# Lógica

Los bloques de lógica se usan generalmente para controlar los bloques de **condición** y de [**Bucles**](Loops).

## Condición (si ~ entonces) {#controls_if}

Con el bloque de condición puedes establecer una **condición** y la **acción** que se ejecuta cuando se cumple.

<BlockImage module="common/logic" id="controls_if" />

Por ejemplo, puedes escribir el código así.  
Si el valor de la variable **x** es mayor que 100, la condición es **verdadera** y se muestra el texto "Es un número grande.".  
Si el valor de **x** no es mayor que 100, la condición es **falsa** y se muestra "No es un número grande.".

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Comparación {#logic_compare}

Hay seis operadores de comparación.  
Cada operador toma dos valores de entrada (normalmente números) y devuelve verdadero o falso según cómo se comparen entre sí.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Operación lógica {#logic_operation}

El bloque **y** devuelve verdadero solo cuando ambos valores de entrada son verdaderos.  
El bloque **o** devuelve verdadero si al menos uno de los dos valores de entrada es verdadero.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## no {#logic_negate}

El bloque **no** convierte un valor booleano de entrada en su contrario.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Valor booleano {#logic_boolean}

Con un solo bloque que tiene un desplegable para **verdadero** o **falso** puedes obtener un valor booleano.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Operador ternario {#logic_ternary}

El bloque ternario funciona como un bloque de condición sencillo.  
Toma tres valores de entrada.  
El primero es la condición booleana que se prueba, el segundo es el valor que se devuelve si la condición es **verdadera**.  
El tercero es el valor que se devuelve si la condición es **falsa**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
