---
title: CSD-10 Sensore ALS
---

# CSD-10 Sensore ALS

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-10 Sensore ALS (CSD10) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la porta di ingresso {#set_input_port}

Imposta la porta a cui è collegato il CSD10 (sensore di luminosità).

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta a cui collegarlo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Valore del sensore di luminosità {#get_input}

Il valore del sensore di luminosità sulla porta scelta

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta da leggere | Sa, Sb, Sc | la porta dell'ultimo `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
