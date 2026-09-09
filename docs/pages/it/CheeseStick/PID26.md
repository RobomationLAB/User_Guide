---
title: PID-26 Sensore ambientale
---

# PID-26 Sensore ambientale

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di PID-26 Sensore ambientale (PID26) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Avviare il sensore ambientale {#start}

Usa il sensore ambientale PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperatura {#temperature}

Restituisce la temperatura misurata dal sensore ambientale PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Umidità {#humidity}

Restituisce l'umidità misurata dal sensore ambientale PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Pressione {#pressure}

Restituisce la pressione atmosferica misurata dal sensore ambientale PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
