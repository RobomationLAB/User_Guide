---
title: Anteprima
---

# Anteprima

L'**anteprima** è l'area che fa da supporto alla programmazione dei robot: qui vedi lo **stato della connessione dei robot** e hai anche il codice, la fotocamera, la console e altro.  
Qui sotto sono descritte le funzioni che puoi usare in ogni scheda.

## Stato della connessione dei robot {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Nella scheda dello stato della connessione dei robot puoi vedere le informazioni dei robot collegati in questo momento.   
Se fai clic su **Mostra il valore del sensore in tempo reale**, puoi vedere in tempo reale i valori dei sensori del robot, come grafico o come numero.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Puoi scegliere il sensore da consultare; i tipi di sensore supportati sono diversi da robot a robot.  
In base al sensore scelto, il grafico e il modo di mostrare i dati cambiano automaticamente per adattarsi ai valori di quel sensore. 

2. Puoi scegliere con quale intervallo, in secondi, i valori del sensore vengono consultati o registrati.  
In base all'intervallo scelto cambia il tempo massimo per cui i dati possono essere registrati e mostrati nel grafico. 
3. Se passi con il mouse sopra il grafico del sensore, puoi vedere nello stesso momento, in tempo reale, il valore del sensore in quell'istante. 
4. Avviare/arrestare la registrazione: registra i dati del sensore. 
5. Esporta: salva in file i dati di sensore registrati (.csv) e la schermata del grafico (.png).  
Questa funzione si può usare solo dopo che hai registrato dei dati. 
6. Cattura: salva in tempo reale la schermata del grafico attuale (.png).  
Puoi registrare la variazione dei valori del sensore e salvare in file i dati registrati e la schermata del grafico.    

<br>

## Anteprima Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Nell'anteprima Python puoi vedere in tempo reale come i blocchi vengono convertiti in codice **Python** quando li aggiungi o li rimuovi.  
Vedendo nello stesso momento come i blocchi vengono convertiti in codice, impari la sintassi della programmazione con più facilità. 

※ L'anteprima Python esiste solo nell'**editor di programmazione con blocchi**.  
Nell'editor di Python è l'utente stesso a scrivere il codice, quindi non c'è l'anteprima.

<br>

## Fotocamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Nella scheda della fotocamera puoi vedere in tempo reale l'immagine di una fotocamera collegata al PC.  

Questa funzione si attiva solo **se hai aggiunto al programma un modulo di estensione che usa la fotocamera**; in quel caso nella scheda della fotocamera viene creato un modulo fotocamera.  

In ogni modulo fotocamera puoi usare le funzioni seguenti.
- Puoi scegliere una delle fotocamere disponibili sul PC e mostrarne l'immagine.
- Con il pulsante **On / Off** puoi mostrare o fermare l'immagine della fotocamera.
- Puoi cambiare la **risoluzione della fotocamera**.

<br>

## Console {#console}

Nella scheda della console puoi vedere in tempo reale i messaggi di log (Log) che escono durante l'esecuzione del programma e i grafici dell'oscilloscopio (Scope).  
Questa scheda serve per fare il debug, monitorare i valori dei sensori, fare analisi in base ai grafici e altro.  

### Log {#console-log}
Con il blocco **log** puoi mostrare nell'area di log della console un testo o un valore numerico, insieme al tag che indichi.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Oscilloscopio {#console-scope}

Con il blocco **grafico** puoi rappresentare valori numerici, per tag, in un **grafico in tempo reale**.  
Impostando il valore minimo, il valore massimo e il colore del grafico, vedi visivamente la variazione del valore che ti interessa. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
