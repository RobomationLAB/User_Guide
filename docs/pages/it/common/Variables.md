---
title: Variabili
---

# Variabili

Usiamo il termine variabile con lo stesso significato che ha in matematica e negli altri linguaggi di programmazione.  
Indica cioè un **elemento con un nome che conserva un valore e che si può modificare**.  
  
Le variabili si possono creare in diversi modi.  

- Alcuni blocchi, come [conta con](Loops#controls_for) e [per ogni elemento](Loops#controls_forEach), usano una variabile e ne definiscono il valore.  
Queste variabili si chiamano tradizionalmente **variabili di ciclo (loop variables)**.  
- Anche le [funzioni definite dall'utente](Functions#procedures_defnoreturn) usano variabili per definire i parametri o gli argomenti.
- L'utente può creare una variabile in qualunque momento con il blocco **imposta variabile**; le variabili create vengono dichiarate come **variabili globali (global variables)**.  
- L'ambiente di programmazione con blocchi del RobomationLAB non supporta le **variabili locali (local variables)**.  

Se fai clic sul menu a tendina di un blocco variabile compaiono le opzioni seguenti.  

- Vengono mostrati i nomi di tutte le variabili già definite nel programma.  
- **"Rinomina variabile"**: cambia il nome di quella variabile in tutto il programma. Se scegli questa opzione compare una finestra in cui puoi inserire il nuovo nome.  
- **"Elimina variabile"**: elimina tutti i blocchi del programma che fanno riferimento a questa variabile. 


## Impostare una variabile {#variables_set}

Il blocco **imposta** assegna un valore a una variabile.  
Se quella variabile non è dichiarata nel codice, la dichiara e poi le assegna il valore.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Cambiare il valore {#math_change}

Il blocco **cambia** somma un numero al valore della variabile.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Leggere il valore {#variables_get}

Il blocco seguente fornisce il valore conservato in una variabile, ma non lo modifica.  
Si può usare questo blocco anche senza il blocco che imposta la variabile, ma non è un buon modo di programmare.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
