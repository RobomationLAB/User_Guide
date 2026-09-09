---
title: CSD-01 Interruptor tátil
---

# CSD-01 Interruptor tátil

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-01 Interruptor tátil(CSD01) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a porta de entrada {#set_input_port}

Define a porta a que está ligado o CSD01 (Tact Switch).

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta a que se liga | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Entrada do botão {#button_input}

O valor de entrada do botão da porta escolhida  
Se o botão estiver premido, devolve 0; caso contrário, 1.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta que é lida | Sa, Sb, Sc | a porta do último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## O botão está premido? {#button_pressed}

Se o botão do interruptor ligado à porta escolhida está premido

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta que é lida | Sa, Sb, Sc | a porta do último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
