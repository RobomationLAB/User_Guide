---
title: Lógica
---

# Lógica

Os blocos de lógica servem geralmente para controlar os blocos de **condição** e de [**Ciclos**](Loops).

## Condição (se ~ então) {#controls_if}

Com o bloco de condição podes definir uma **condição** e a **ação** que é executada quando ela se verifica.

<BlockImage module="common/logic" id="controls_if" />

Por exemplo, podes escrever o código assim.  
Se o valor da variável **x** for maior do que 100, a condição é **verdadeira** e é apresentado o texto "Número grande.".  
Se o valor de **x** não for maior do que 100, a condição é **falsa** e é apresentado "Não é um número grande.".

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Comparação {#logic_compare}

Existem seis operadores de comparação.  
Cada operador recebe dois valores de entrada (normalmente números) e devolve verdadeiro ou falso de acordo com a forma como esses valores se comparam.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Operação lógica {#logic_operation}

O bloco **e** só devolve verdadeiro quando os dois valores de entrada são verdadeiros.  
O bloco **ou** devolve verdadeiro se pelo menos um dos dois valores de entrada for verdadeiro.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## não {#logic_negate}

O bloco **não** transforma um valor booleano de entrada no seu contrário.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Valor booleano {#logic_boolean}

Com um único bloco que tem uma lista para **verdadeiro** ou **falso** podes obter um valor booleano.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Operador ternário {#logic_ternary}

O bloco ternário funciona como um bloco de condição simples.  
Recebe três valores de entrada.  
O primeiro é a condição booleana que é testada; o segundo é o valor devolvido se a condição for **verdadeira**.  
O terceiro é o valor devolvido se a condição for **falsa**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
