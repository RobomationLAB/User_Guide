---
title: PID-13 Joystick e pulsante
---

# PID-13 Joystick e pulsante

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di PID-13 Joystick e pulsante (PID13) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Avviare il joystick {#start}

Usa il joystick e i pulsanti.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Valore del joystick {#joystick}

Il valore x / y del joystick.  
L'intervallo di ogni valore è -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Valore di ingresso del pulsante {#button_input}

Lo stato di ingresso del pulsante scelto  
Restituisce 1 se il pulsante è premuto e 0 se non lo è.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome del pulsante | pulsante A(a), pulsante B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Il pulsante è stato cliccato? {#button_click}

Se il pulsante scelto è stato cliccato  
Questo blocco restituisce vero solo nel momento in cui il pulsante scelto viene cliccato; negli altri casi restituisce falso.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome del pulsante | pulsante A(a), pulsante B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
