---
title: Espressione facciale
---

# Espressione facciale

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Espressione facciale (FaceExpression) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
face_expression = FaceExpression(0)
# se ci sono più istanze
face_expression_1 = FaceExpression(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Scegliere la fotocamera {#device}

Imposta la fotocamera per il riconoscimento di età, genere ed espressione.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome della fotocamera | etichette delle fotocamere del sistema | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Caricare il modello {#load_model}

Carica il modello addestrato di età, genere ed espressione. Questa operazione è indispensabile per poter usare le funzioni del modulo «Espressione facciale».

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| wait | Casella di controllo | Se aspettare la fine del caricamento | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Rilevare una volta {#detect_once}

Analizza il volto presente nell'immagine attuale e mostra una volta sola l'età, il genere e l'espressione previsti.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Avviare / arrestare il rilevamento continuo {#detect_continuous}

Analizza in continuo il volto presente nell'immagine attuale e mostra sullo schermo l'età, il genere e l'espressione previsti.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | avvia(start), arresta(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Mostrare il risultato del rilevamento {#display}

Decide se mostrare o no il risultato del riconoscimento di età, genere ed espressione sull'immagine della fotocamera.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Visualizzazione ON / OFF | mostra(on=True), nascondi(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Età {#age}

L'età

<BlockImage module="AI/FaceExpression" id="age" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```


## Genere {#gender}

Il genere

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```


## Espressione {#expression}

L'espressione

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```


## Se il genere è rilevato {#gender_detected}

Se il genere è stato riconosciuto

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```


## È un genere determinato? {#gender_check}

Restituisce **vero (True) / falso (False)** a seconda che il genere riconosciuto corrisponda o no al valore indicato.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Genere | maschio(male), femmina(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```


## Affidabilità del genere {#gender_confidence}

La probabilità (affidabilità) che sia il genere scelto

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Genere | maschio(male), femmina(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```


## Se l'espressione è rilevata {#expression_detected}

Se l'espressione è stata riconosciuta

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```


## È un'espressione determinata? {#expression_check}

Restituisce **vero (True) / falso (False)** a seconda che l'espressione riconosciuta corrisponda o no al valore indicato.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Espressione | arrabbiato(angry), disgustato(disgusted), spaventato(fearful), felice(happy), neutro(neutral), triste(sad), sorpreso(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```


## Affidabilità dell'espressione {#expression_confidence}

La probabilità (affidabilità) che sia l'espressione scelta

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Espressione | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```


## Stato del modello {#model_state}

Restituisce lo stato di caricamento del modello di età, genere ed espressione.  
Restituisce 0 se non è ancora stato caricato, 1 se il caricamento è in corso e 2 se il caricamento è finito.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametri

(nessuno)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
