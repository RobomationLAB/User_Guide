---
title: Cicli
---

# Cicli

Ci sono due tipi di istruzioni per controllare la ripetizione:  
i **blocchi di condizione** e i **cicli** (quelli che, in base al valore delle variabili, controllano quante volte il corpo viene eseguito)


## Ripeti {#controls_repeat}

Il blocco **ripeti**, il più semplice, esegue il codice del corpo il numero di volte indicato. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## conta con {#controls_for}

Il blocco **conta con** (nella maggior parte dei casi si chiama **for loop**) aumenta una variabile dal primo valore fino al terzo valore, a passi pari all'incremento (il secondo valore), ed esegue il corpo una volta per ogni valore.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## per ogni elemento {#controls_forEach}

Il blocco **per ogni elemento** è simile, ma invece di una successione di numeri usa uno dopo l'altro i valori di una lista.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Ripeti mentre / finché {#controls_while}

Il blocco **ripeti mentre** ripete il corpo finché la condizione è vera.  
Il blocco **ripeti finché** ripete il corpo finché la condizione è falsa ed esce dal ciclo nel momento in cui la condizione diventa vera.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Interrompi il ciclo / prossima iterazione {#controls_flow_statements}

Con il blocco **interrompi** puoi **uscire dal ciclo prima del tempo**.  
**Prossima iterazione** (nella maggior parte dei linguaggi di programmazione, **continue**) salta il resto del codice del corpo e comincia l'iterazione (passata) successiva.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
