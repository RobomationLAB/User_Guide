---
title: PID-26 Sensor ambiental
---

# PID-26 Sensor ambiental

## Declarar a instância {#instance}

Se acrescentares um bloco de PID-26 Sensor ambiental(PID26) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Iniciar o sensor ambiental {#start}

Usa o sensor ambiental PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatura {#temperature}

Devolve o valor de temperatura medido com o sensor ambiental PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Humidade {#humidity}

Devolve o valor de humidade medido com o sensor ambiental PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Pressão {#pressure}

Devolve o valor de pressão medido com o sensor ambiental PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
