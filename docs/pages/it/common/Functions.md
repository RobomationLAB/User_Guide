---
title: Funzioni
---

# Funzioni

Una **funzione (Function)** è un **insieme di istruzioni (blocchi)** che svolge un compito determinato.  
Se definisci come funzione un'azione che usi ripetutamente, gestisci il codice in modo **più compatto ed efficiente**.

Le funzioni hanno le caratteristiche seguenti.  
- **Riutilizzabili**: le definisci una volta e le puoi chiamare tutte le volte che vuoi.  
- **Ingresso e uscita**: possono ricevere parametri (valori in ingresso), elaborarli e restituire il risultato (valore in uscita).  
- **Codice più leggibile**: ti permettono di organizzare il flusso del programma in modo logico.


## setup {#setup}

La **funzione setup** viene chiamata una volta sola, nel momento in cui il codice viene eseguito.  
Nella funzione setup si scrive soprattutto il codice che inizializza le variabili o i modi e le opzioni del robot.  
Se per esempio controlli un robot che si muove con le ruote, nella funzione setup puoi impostare la velocità iniziale delle ruote.  

<BlockImage module="common/functions" id="setup" />
  
Con la funzione `Utils.wait(...)` puoi scrivere, grazie all'esecuzione sequenziale, codice che si svolge ordinato nel tempo. Questa possibilità, insieme alla **funzione loop**, che si occupa dell'esecuzione in parallelo, rende possibile una programmazione dei robot molto potente.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

La **funzione loop** viene chiamata di nuovo ogni 10 ms mentre il programma è in esecuzione.  
Nella funzione loop si scrive soprattutto il codice che imposta ripetutamente il valore delle variabili o che rileva e gestisce eventi determinati del robot.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definire una funzione {#procedures_defnoreturn}

Con il blocco che definisce una funzione puoi creare una **nuova funzione**.  
Una funzione senza valore di ritorno svolge un'azione determinata ma **non restituisce un valore**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definire una funzione con valore di ritorno {#procedures_defreturn}

Una funzione con valore di ritorno svolge un compito determinato e poi **restituisce** il risultato, che può essere usato in un altro blocco.  

<BlockImage module="common/functions" id="procedures_defreturn" />

La funzione qui sotto **riceve i parametri x e y e restituisce il risultato di x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Chiamare una funzione {#procedures_callnoreturn}

Quando definisci una funzione viene creato automaticamente il **blocco della funzione definita dall'utente**.  
Con questo blocco puoi chiamare ed eseguire la **funzione che hai definito prima**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## se ... ritorna {#procedures_ifreturn}

È il blocco che, dentro una funzione, **restituisce subito un valore se una condizione determinata è soddisfatta** e termina la funzione.  
Questo blocco si può usare **solo dentro una funzione**; altrove è disattivato.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
