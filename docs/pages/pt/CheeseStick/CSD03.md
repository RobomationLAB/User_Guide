---
title: CSD-03 Potenciómetro rotativo
---

# CSD-03 Potenciómetro rotativo

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-03 Potenciómetro rotativo(CSD03) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a porta de entrada {#set_input_port}

Define a porta a que está ligado o CSD03 (potenciómetro).

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta a que se liga | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Definir o intervalo da entrada {#set_input_range}

Converte o valor de entrada da porta escolhida para o intervalo indicado de mínimo a máximo.  
O intervalo do valor de entrada é 0 ~ 255.  
O intervalo para o qual se pode converter é -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de destino | Sa, Sb, Sc | - |
| src_min | Entrada (campo) | Mínimo do valor original | inteiro 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo do valor original | inteiro 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo depois da conversão | inteiro -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo depois da conversão | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Definir o intervalo da entrada com valor médio {#set_input_range_median}

Converte o valor de entrada da porta escolhida para o intervalo indicado de mínimo a máximo, passando por um valor médio.  
O intervalo do valor de entrada é 0 ~ 255.  
O intervalo para o qual se pode converter é -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de destino | Sa, Sb, Sc | - |
| src_min | Entrada (campo) | Mínimo do valor original | inteiro 0 ~ 255 | - |
| src_median | Entrada (campo) | Valor médio do valor original | inteiro 0 ~ 255 | - |
| src_max | Entrada (campo) | Máximo do valor original | inteiro 0 ~ 255 | - |
| dst_min | Entrada (campo) | Mínimo depois da conversão | inteiro -100 ~ 100 | - |
| dst_median | Entrada (campo) | Valor médio depois da conversão | inteiro -100 ~ 100 | - |
| dst_max | Entrada (campo) | Máximo depois da conversão | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valor de entrada {#get_input}

O valor de entrada do potenciómetro rotativo da porta escolhida  
Se não definiste um intervalo de entrada próprio, o intervalo do valor de entrada é 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta que é lida | Sa, Sb, Sc | a porta do último `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
