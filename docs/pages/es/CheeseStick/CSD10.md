---
title: CSD-10 Sensor ALS
---

# CSD-10 Sensor ALS

## Declarar la instancia {#instance}

Si añades un bloque de CSD-10 Sensor ALS(CSD10) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar el puerto de entrada {#set_input_port}

Configura el puerto al que está conectado CSD10 (sensor de luz ambiental).

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto al que se conecta | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Valor del sensor ALS {#get_input}

El valor del sensor de luz ambiental del puerto elegido

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto que se lee | Sa, Sb, Sc | el puerto del último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
