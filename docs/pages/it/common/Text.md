---
title: Testo
---

# Testo {#text}

Esempi di testo sono i seguenti:
- "thing #1"
- "March 12, 2010"
- "" (testo vuoto)

Un testo può contenere lettere maiuscole o minuscole, numeri, segni di punteggiatura, altri simboli e spazi tra le parole.  

<BlockImage module="common/text" id="text" />

## Creare testo {#text_join}

Il blocco **crea testo con** unisce (concatena) i valori di più testi e crea un nuovo testo.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Aggiungere testo {#text_append}

Il blocco **aggiungi il testo** aggiunge il testo indicato alla variabile scelta.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Lunghezza del testo {#text_length}

Il blocco **lunghezza di** conta le lettere, i numeri e gli altri caratteri di un testo e restituisce la lunghezza totale.  
Qui sotto la lunghezza di `abc` è 3, mentre la lunghezza di un testo vuoto è 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Verificare se un testo è vuoto {#text_isEmpty}

Il blocco **è vuoto** verifica se il testo indicato è vuoto (se la sua lunghezza è 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Cercare un testo {#text_indexOf}

Questi blocchi verificano se un testo determinato si trova dentro un altro testo e, se c'è, restituiscono la sua posizione.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Estrarre un singolo carattere {#text_charAt}

Prende da un testo il carattere che sta in una posizione determinata.  
Ci sono varie opzioni: il primo, l'ultimo, una posizione a caso, l'ennesimo e altre.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Estrarre una parte del testo {#text_getSubstring}

Con il blocco **prendi sotto-stringa** puoi estrarre il testo di un intervallo determinato.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Cambiare maiuscole e minuscole {#text_changeCase}

Questo blocco trasforma il testo in ingresso in uno dei formati seguenti:

- **in MAIUSCOLO**: trasforma tutte le lettere in maiuscolo
- **in minuscolo**: trasforma tutte le lettere in minuscolo
- **In Iniziali Maiuscole**: mette in maiuscolo solo la prima lettera di ogni parola e in minuscolo le altre

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # in MAIUSCOLO
TEXT.lower() # in minuscolo
TEXT.title() # In Iniziali Maiuscole
```

## Rimuovere gli spazi {#text_trim}

Il blocco seguente rimuove da un testo gli spazi nelle posizioni seguenti:
- da entrambi gli estremi
- da sinistra
- da destra

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # da entrambi gli estremi
TEXT.lstrip()   # da sinistra
TEXT.rstrip()   # da destra
```

## Contare quante volte un testo compare in un altro testo {#text_count}

Conta quante volte una sottostringa determinata compare nel testo indicato e restituisce il risultato.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Sostituire un testo dentro un testo {#text_replace}

Sostituisce in blocco una sottostringa determinata con un altro testo, dentro un testo.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Invertire un testo {#text_reverse}

Restituisce un nuovo testo con l'ordine dei caratteri invertito.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Scrivere un testo {#text_print}

Il blocco **scrivi** mostra il valore in ingresso in una finestra a comparsa.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Chiedere un valore all'utente {#text_prompt_ext}

Il blocco seguente crea una finestra a comparsa che chiede un valore all'utente; il valore inserito viene salvato in una variabile.  
Si può chiedere un testo o un numero.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
