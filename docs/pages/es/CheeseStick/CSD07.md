---
title: CSD-07 Sensor de sonido
---

# CSD-07 Sensor de sonido

## Declarar la instancia {#instance}

Si añades un bloque de CSD-07 Sensor de sonido(CSD07) al área de trabajo, en el código Python se inserta automáticamente la declaración de instancia siguiente:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| index | Opción de desplegable | Número de instancia (empieza en 0) | entero ≥ 0 | 0 |


## Configurar el puerto de entrada {#set_input_port}

Configura el puerto al que está conectado CSD07 (sensor de sonido).

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto al que se conecta | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Valor del sensor de sonido {#get_input}

El valor del sensor de sonido del puerto elegido

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| unit | Opción de desplegable | Puerto que se lee | Sa, Sb, Sc | el puerto del último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
