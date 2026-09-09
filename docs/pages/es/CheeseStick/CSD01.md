---
title: CSD-01 Interruptor táctil
---

# CSD-01 Interruptor táctil

## Declarar la instancia {#instance}

Si añades un bloque de CSD-01 Interruptor táctil(CSD01) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar el puerto de entrada {#set_input_port}

Configura el puerto al que está conectado CSD01 (Tact Switch).

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto al que se conecta | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Entrada del botón {#button_input}

El valor de entrada del botón del puerto elegido  
Si el botón está pulsado, devuelve 0; en caso contrario, 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto que se lee | Sa, Sb, Sc | el puerto del último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## ¿Botón pulsado? {#button_pressed}

Si el botón del interruptor conectado al puerto elegido está pulsado

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto que se lee | Sa, Sb, Sc | el puerto del último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
