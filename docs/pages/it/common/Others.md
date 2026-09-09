---
title: Altro
---

# Altro

Nella programmazione con blocchi i **blocchi di altro** sono codice che non influisce sul funzionamento del robot.  
Con questi blocchi puoi inserire un commento o terminare l'esecuzione del codice.  

## Commento su una riga {#comment}

Con il blocco **commento su una riga** puoi aggiungere una **spiegazione** senza influire sull'esecuzione del codice.  
I commenti rendono il codice più leggibile e più facile da mantenere.

<BlockImage module="common/others" id="comment" />

### Python
```python
# testo del commento
```

## Commento su più righe {#long_comment}

Con il blocco **commento su più righe** puoi inserire in una volta un commento di più righe.  
A ogni riga viene aggiunto automaticamente il segno di commento e le righe vuote rimangono come sono.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
prima riga
seconda riga

quarta riga
"""
```

## Link {#link}

Con il blocco **link** puoi aggiungere, sotto forma di **commento**, il **link della pagina** che vuoi aprire.  
Se fai clic sul pulsante **apri**, vai alla pagina del link inserito.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Uscire {#exit}

Il blocco **esci** interrompe immediatamente l'esecuzione del codice nel programma.  
È utile quando vuoi aggiungere una chiusura forzata al verificarsi di una condizione determinata.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
