---
title: Da voce a testo
---

# Da voce a testo

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Da voce a testo (ASR) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
asr = ASR(0)
# se ci sono più istanze
asr_1 = ASR(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la lingua {#lang}

Imposta la lingua del riconoscimento vocale. Anche se non la imposti, viene impostata automaticamente.

<BlockImage module="AI/ASR" id="lang" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Codice della lingua di riconoscimento | codici delle 21 lingue supportate dal programma (p. es. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('it-IT')
```

## Avviare / arrestare il riconoscimento vocale {#listen}

Avvia o arresta il riconoscimento vocale.

<BlockImage module="AI/ASR" id="listen" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Risultato del riconoscimento vocale {#result}

Il risultato del riconoscimento vocale

<BlockImage module="AI/ASR" id="result" />

### Parametri

(nessuno)

### Python
```python
asr = ASR(0)

asr.result()
```

## Il riconoscimento vocale è in corso? {#state}

Restituisce **vero (True) / falso (False)** a seconda che il riconoscimento vocale sia attivo o no.

<BlockImage module="AI/ASR" id="state" />

### Parametri

(nessuno)

### Python
```python
asr = ASR(0)

asr.is_active()
```
