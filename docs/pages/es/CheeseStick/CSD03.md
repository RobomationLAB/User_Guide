---
title: CSD-03 Potenciómetro giratorio
---

# CSD-03 Potenciómetro giratorio

## Declarar la instancia {#instance}

Si añades un bloque de CSD-03 Potenciómetro giratorio(CSD03) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar el puerto de entrada {#set_input_port}

Configura el puerto al que está conectado CSD03 (potenciómetro).

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto al que se conecta | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Ajustar el rango de entrada {#set_input_range}

Convierte el valor de entrada del puerto elegido al rango indicado de mínimo a máximo.  
El rango del valor de entrada es 0 ~ 255.  
El rango al que se puede convertir es -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de destino | Sa, Sb, Sc | - |
| src_min | Entrada (campo) | Mínimo del valor original | entero 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo del valor original | entero 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo después de la conversión | entero -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo después de la conversión | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Ajustar el rango de entrada con valor medio {#set_input_range_median}

Convierte el valor de entrada del puerto elegido al rango indicado de mínimo a máximo pasando por un valor medio.  
El rango del valor de entrada es 0 ~ 255.  
El rango al que se puede convertir es -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto de destino | Sa, Sb, Sc | - |
| src_min | Entrada (campo) | Mínimo del valor original | entero 0 ~ 255 | - |
| src_median | Entrada (campo) | Valor medio del valor original | entero 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo del valor original | entero 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo después de la conversión | entero -100 ~ 100 | - |
| dst_median | Entrada (campo) | Valor medio después de la conversión | entero -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo después de la conversión | entero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valor de entrada {#get_input}

El valor de entrada del potenciómetro giratorio del puerto elegido  
Si no has ajustado un rango de entrada propio, el rango del valor de entrada es 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto que se lee | Sa, Sb, Sc | el puerto del último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
