---
title: Control
---

# Control

En la programación con bloques, los **bloques de control** determinan el flujo del programa.  
Pueden esperar un tiempo, detectar pulsaciones de teclas, registrar mensajes y más.


## Esperar {#wait_sec}

Espera el tiempo indicado (en segundos) y después ejecuta la instrucción siguiente.

<BlockImage module="common/control" id="wait_sec" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| sec | Entrada (campo) | Tiempo de espera — un **número literal** (p. ej. `Utils.wait(0.5)`) | decimal ≥ 0 | - |
| sec | Entrada (bloque) | Tiempo de espera — una **variable/expresión** (p. ej. `Utils.wait(time)`) | decimal ≥ 0 | - |

### Python
```python
# campo sec = 2 → sin cambios (en segundos)
Utils.wait(2)

# entrada mediante una variable
Utils.wait(myVar)
```

## Esperar un fotograma {#wait_1msec}

Detiene la ejecución del programa durante un fotograma (unos 0,001 segundos).

<BlockImage module="common/control" id="wait_1msec" />

### Parámetros

(ninguno — fijo en 0,001 segundos)

### Python
```python
Utils.wait(0.001)
```

<!--
## Esperar indefinidamente {#wait_forever}

Detiene la ejecución del programa y espera indefinidamente.

### Parámetros

(ninguno)

### Python
```python
Utils.wait_forever()
```
-->

## Tecla pulsada {#key_pressed}

Devuelve como **verdadero(True) / falso(False)** si una tecla concreta está pulsada.

<BlockImage module="common/control" id="key_pressed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| key | Entrada | Nombre de la tecla | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Registrar {#log}

Muestra en tiempo real el valor de una variable o propiedad concreta en la ventana **Consola**.

<BlockImage module="common/control" id="log" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| data | Entrada | El valor que se muestra | valor cualquiera | - |
| tag | Entrada | Etiqueta del registro | texto | - |
| unit | Entrada | Indicación de la unidad | texto | - |

### Python
```python
Utils.log(data, '', '')
```

## Mostrar gráfico {#scope}

Muestra la variación de un valor concreto como gráfico en tiempo real en la ventana de **gráfico**.  
Puedes establecer el color, los valores mínimo y máximo y el rango del gráfico.

<BlockImage module="common/control" id="scope" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| signal | Entrada (bloque) | Valor de la señal del gráfico | decimal | - |
| name | Entrada | Nombre del gráfico | texto | - |
| min_val | Entrada (campo) | Valor mínimo del gráfico | decimal | - |
| max_val | Entrada (campo) | Valor máximo del gráfico | decimal | - |
| color | Color | Color del gráfico (hex) | texto hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
