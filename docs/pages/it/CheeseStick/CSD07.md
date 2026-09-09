---
title: CSD-07 Sensore acustico
---

# CSD-07 Sensore acustico

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-07 Sensore acustico (CSD07) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la porta di ingresso {#set_input_port}

Imposta la porta a cui è collegato il CSD07 (sensore acustico).

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta a cui collegarlo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Valore del sensore acustico {#get_input}

Il valore del sensore acustico sulla porta scelta

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta da leggere | Sa, Sb, Sc | la porta dell'ultimo `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
