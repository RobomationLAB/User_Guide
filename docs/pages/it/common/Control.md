---
title: Controllo
---

# Controllo

Nella programmazione con blocchi i **blocchi di controllo** servono a gestire il flusso del programma.  
Con questi blocchi puoi attendere un certo tempo, rilevare la pressione dei tasti, scrivere nel log e altro.


## Attendere {#wait_sec}

Attende per il tempo indicato (in secondi) e poi esegue l'istruzione successiva.

<BlockImage module="common/control" id="wait_sec" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| sec | Ingresso (campo) | Tempo di attesa — **numero letterale** (p. es. `Utils.wait(0.5)`) | decimale maggiore o uguale a 0 | - |
| sec | Ingresso (blocco) | Tempo di attesa — **variabile/espressione** (p. es. `Utils.wait(time)`) | decimale maggiore o uguale a 0 | - |

### Python
```python
# field sec = 2 → tale e quale (in secondi)
Utils.wait(2)

# con una variabile in ingresso
Utils.wait(myVar)
```

## Attendere un fotogramma {#wait_1msec}

Ferma l'esecuzione del programma per un fotogramma (circa 0,001 secondi).

<BlockImage module="common/control" id="wait_1msec" />

### Parametri

(nessuno — fisso a 0,001 secondi)

### Python
```python
Utils.wait(0.001)
```

<!--
## Attendere indefinitamente {#wait_forever}

Ferma l'esecuzione del programma e attende indefinitamente.

### Parametri

(nessuno)

### Python
```python
Utils.wait_forever()
```
-->

## Tasto premuto {#key_pressed}

Restituisce **vero (True) / falso (False)** a seconda che un tasto determinato sia premuto o no.

<BlockImage module="common/control" id="key_pressed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| key | Ingresso | Nome del tasto | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Scrivere nel log {#log}

Mostra in tempo reale il valore di una variabile o di una proprietà nella finestra **Console**.

<BlockImage module="common/control" id="log" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso | Il valore da mostrare | qualunque valore | - |
| tag | Ingresso | Tag del log | testo | - |
| unit | Ingresso | Indicazione dell'unità | testo | - |

### Python
```python
Utils.log(data, '', '')
```

## Mostrare un grafico {#scope}

Mostra la variazione di un valore come grafico in tempo reale nella finestra del **grafico**.  
Puoi impostare il colore, i valori minimo e massimo e l'intervallo del grafico.

<BlockImage module="common/control" id="scope" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| signal | Ingresso (blocco) | Valore del segnale del grafico | decimale | - |
| name | Ingresso | Nome del grafico | testo | - |
| min_val | Ingresso (campo) | Valore minimo del grafico | decimale | - |
| max_val | Ingresso (campo) | Valore massimo del grafico | decimale | - |
| color | Colore | Colore del grafico (hex) | testo hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
