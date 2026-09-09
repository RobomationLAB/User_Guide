---
title: Bucles
---

# Bucles

Hay dos tipos de control de bucle:  
las **condiciones** y los **bucles** (los que controlan cuántas veces se ejecuta el cuerpo según el valor de las variables)


## Repetir {#controls_repeat}

El bloque **repetir** más sencillo ejecuta el código del cuerpo el número de veces indicado. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Contar con {#controls_for}

El bloque **contar con** (que casi siempre se llama **for loop**) va aumentando una variable desde el primer valor hasta el tercero con el paso indicado (el segundo valor) y ejecuta el cuerpo una vez por cada valor.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Para cada elemento {#controls_forEach}

El bloque **para cada elemento** funciona de forma parecida, pero en lugar de una serie de números usa los valores de una lista en orden.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Repetir mientras / hasta {#controls_while}

El bloque **repetir mientras** repite el cuerpo mientras la condición sea verdadera.  
El bloque **repetir hasta** repite el cuerpo mientras la condición sea falsa y sale del bucle en el momento en que la condición pasa a ser verdadera.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Salir del bucle / siguiente iteración {#controls_flow_statements}

Con el bloque **salir** puedes **salir del bucle antes de tiempo**.  
**Siguiente iteración** (en casi todos los lenguajes de programación, **continue**) se salta el resto del código del cuerpo y empieza la iteración (pasada) siguiente.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
