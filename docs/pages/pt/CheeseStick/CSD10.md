---
title: CSD-10 Sensor ALS
---

# CSD-10 Sensor ALS

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-10 Sensor ALS(CSD10) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a porta de entrada {#set_input_port}

Define a porta a que está ligado o CSD10 (sensor de luz ambiente).

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta a que se liga | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Valor do sensor ALS {#get_input}

O valor do sensor de luz ambiente da porta escolhida

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta que é lida | Sa, Sb, Sc | a porta do último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
