---
title: Logica
---

# Logica

I blocchi logici si usano di solito per controllare i **blocchi di condizione** e i blocchi [**Cicli**](Loops).

## Condizione (se ~ allora) {#controls_if}

Con il blocco di condizione puoi impostare una **condizione** e l'**azione** che viene eseguita quando è soddisfatta.

<BlockImage module="common/logic" id="controls_if" />

Per esempio, puoi scrivere il codice così.  
Se il valore della variabile **x** è maggiore di 100, la condizione è **vera** e viene mostrato il testo "È un numero grande.".  
Se il valore di **x** non è maggiore di 100, la condizione è **falsa** e viene mostrato "Non è un numero grande.".

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Operatori di confronto {#logic_compare}

Ci sono sei operatori di confronto.  
Ogni operatore riceve due valori in ingresso (di solito numeri) e restituisce vero o falso a seconda di come i due valori si confrontano tra loro.

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

## Operatori logici {#logic_operation}

Il blocco **e** restituisce vero solo quando entrambi i valori in ingresso sono veri.  
Il blocco **o** restituisce vero quando almeno uno dei due valori in ingresso è vero.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## non {#logic_negate}

Il blocco **non** trasforma un valore booleano in ingresso nel suo opposto.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Booleano {#logic_boolean}

Puoi ottenere un valore booleano con un unico blocco che ha un menu a tendina in cui scegli **vero** o **falso**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Operatore ternario {#logic_ternary}

Il blocco ternario funziona come un blocco di condizione semplice.  
Riceve tre valori in ingresso.  
Il primo è la condizione booleana da verificare, il secondo è il valore restituito quando la condizione è **vera**.  
Il terzo è il valore restituito quando la condizione è **falsa**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
