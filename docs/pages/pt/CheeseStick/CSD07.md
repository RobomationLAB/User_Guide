---
title: CSD-07 Sensor de som
---

# CSD-07 Sensor de som

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-07 Sensor de som(CSD07) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a porta de entrada {#set_input_port}

Define a porta a que está ligado o CSD07 (sensor de som).

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta a que se liga | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Valor do sensor de som {#get_input}

O valor do sensor de som da porta escolhida

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta que é lida | Sa, Sb, Sc | a porta do último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
