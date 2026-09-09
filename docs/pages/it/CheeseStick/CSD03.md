---
title: CSD-03 Potenziometro rotativo
---

# CSD-03 Potenziometro rotativo

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-03 Potenziometro rotativo (CSD03) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la porta di ingresso {#set_input_port}

Imposta la porta a cui è collegato il CSD03 (resistenza variabile).

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta a cui collegarlo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Impostare l'intervallo di ingresso {#set_input_range}

Converte il valore di ingresso della porta scelta nell'intervallo minimo~massimo indicato.  
L'intervallo del valore di ingresso è 0 ~ 255.  
L'intervallo dei valori in cui si può convertire è -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta interessata | Sa, Sb, Sc | - |
| src_min | Ingresso (campo) | Valore minimo di partenza | intero 0 ~ 255 | - |
| src_max | Ingresso (campo) | Valore massimo di partenza | intero 0 ~ 255 | - |
| dst_min | Ingresso (campo) | Valore minimo dopo la conversione | intero -100 ~ 100 | - |
| dst_max | Ingresso (campo) | Valore massimo dopo la conversione | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Impostare l'intervallo di ingresso con un valore intermedio {#set_input_range_median}

Converte il valore di ingresso della porta scelta nell'intervallo minimo~intermedio~massimo indicato.  
L'intervallo del valore di ingresso è 0 ~ 255.  
L'intervallo dei valori in cui si può convertire è -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta interessata | Sa, Sb, Sc | - |
| src_min | Ingresso (campo) | Valore minimo di partenza | intero 0 ~ 255 | - |
| src_median | Ingresso (campo) | Valore intermedio di partenza | intero 0 ~ 255 | - |
| src_max | Ingresso (campo) | Valore massimo di partenza | intero 0 ~ 255 | - |
| dst_min | Ingresso (campo) | Valore minimo dopo la conversione | intero -100 ~ 100 | - |
| dst_median | Ingresso (campo) | Valore intermedio dopo la conversione | intero -100 ~ 100 | - |
| dst_max | Ingresso (campo) | Valore massimo dopo la conversione | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valore di ingresso {#get_input}

Il valore di ingresso del potenziometro rotativo sulla porta scelta  
Se non hai impostato un intervallo di ingresso, l'intervallo del valore è 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta da leggere | Sa, Sb, Sc | la porta dell'ultimo `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
