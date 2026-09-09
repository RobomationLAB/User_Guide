---
title: CSD-01 Interruttore tattile
---

# CSD-01 Interruttore tattile

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-01 Interruttore tattile (CSD01) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la porta di ingresso {#set_input_port}

Imposta la porta a cui è collegato il CSD01 (Tact Switch).

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta a cui collegarlo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Valore di ingresso del pulsante {#button_input}

Il valore di ingresso del pulsante sulla porta scelta  
Restituisce 0 se il pulsante è premuto e 1 se non lo è.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta da leggere | Sa, Sb, Sc | la porta dell'ultimo `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Il pulsante è premuto? {#button_pressed}

Se il pulsante dell'interruttore collegato alla porta scelta è premuto

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta da leggere | Sa, Sb, Sc | la porta dell'ultimo `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
