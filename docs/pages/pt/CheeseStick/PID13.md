---
title: PID-13 Joystick e botão
---

# PID-13 Joystick e botão

## Declarar a instância {#instance}

Se acrescentares um bloco de PID-13 Joystick e botão(PID13) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Iniciar o joystick {#start}

Usa o joystick e os botões.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Valor do joystick {#joystick}

O valor x / y do joystick.  
O intervalo de cada valor é -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Entrada do botão {#button_input}

O estado de entrada do botão escolhido  
Se o botão estiver premido, é devolvido 1; se não estiver premido, 0.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do botão | botão A(a), botão B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## O botão está premido? {#button_click}

Se o botão escolhido foi clicado  
Este bloco só devolve verdadeiro no momento em que o botão escolhido é clicado; nos restantes casos, falso.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do botão | botão A(a), botão B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
