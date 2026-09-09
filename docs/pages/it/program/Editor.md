---
title: Editor
---

# Editor

L'**editor** è l'area in cui puoi scrivere, con i **blocchi** o con il **codice di script**, il codice per comandare il robot.  
Qui sotto sono presentati i modi di programmare negli ambienti di **programmazione con blocchi / programmazione con script (Python)** e i punti a cui devi fare attenzione.

## Editor di programmazione con blocchi {#block-editor}

### Categorie di blocchi {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

È l'area in cui i blocchi offerti da RobomationLAB sono organizzati per **categorie**.  
Se fai clic su una categoria, puoi vedere la **tavolozza dei blocchi** di quella categoria.  

Questi sono i tipi di categorie di blocchi offerti per predefinizione.  

- Logica
- Cicli
- Matematica
- Testo
- Lista
- Colore
- Audio
- Controllo
- Variabili
- Funzioni
- Altro

Oltre a queste, se aggiungi al programma un [**robot**](Menu#robot) o un [**modulo di estensione**](Menu#extension), hai nel programma la tavolozza dei blocchi propria di quel robot o modulo.  

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Le categorie di blocchi che hai aggiunto al programma e che non usi più si possono togliere dalle categorie di blocchi con **clic destro del mouse → Rimuovi**.

<br>

### Tavolozza dei blocchi {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

È l'area che raccoglie tutti i blocchi di ogni categoria.  
I blocchi che stanno nella tavolozza dei blocchi si possono portare nell'area di programmazione con il **Drag&Drop**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Nota**  
Se vuoi vedere come si usa un blocco, con **clic destro del mouse → Aiuto** puoi aprire, per ogni blocco, l'aiuto che descrive il modo di usarlo.  

<br>

### Area di programmazione {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

È l'area in cui puoi montare i blocchi che hai preso dalla tavolozza dei blocchi.  


I blocchi montati vengono convertiti in tempo reale in **codice Python** e, quando esegui il codice, quel codice viene interpretato e muove e comanda il robot.  

<br>

### Struttura di base dei blocchi {#block-structure}

Quando programmi nell'editor di programmazione con blocchi devi rispettare la struttura di base seguente.

<BlockImage module="program/Editor" id="block-structure" /><br>

L'editor di programmazione con blocchi interpreta ed esegue il codice che sta dentro i blocchi di funzione **funzione setup** e **funzione loop**.  
Per questo devi scrivere il codice mettendo i blocchi dentro i blocchi di funzione **funzione setup** e **funzione loop**.  

**funzione setup**  
Dentro il blocco di funzione funzione setup si definiscono le azioni da eseguire all'inizio, quando il codice viene eseguito.  
Con il blocco **attendi** puoi far sì che le azioni vengano eseguite ordinate nel tempo.  

**funzione loop**  
Dentro il blocco di funzione funzione loop si definiscono le azioni da eseguire ripetutamente mentre il codice è in esecuzione.  
Le azioni definite vengono eseguite di nuovo ogni 10 ms.  

**⚙️ Nota**  
(Tranne le funzioni personalizzate create con la **categoria Funzioni**)  
I blocchi che stanno fuori dai blocchi di funzione **funzione setup** o **funzione loop** non hanno nessun effetto quando il codice viene eseguito.  

<br>

### Come usare i blocchi {#block-usage}

**Aggiungere un blocco**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Il blocco che vuoi aggiungere lo **trascini dalla tavolozza dei blocchi** e lo **rilasci nell'editor**: così viene aggiunto.   
<br>

**Copiare / incollare i blocchi**  

Ci sono due modi per copiare e incollare i blocchi nell'editor.  

1. Scegli un blocco e premi **Ctrl+C**: il blocco scelto viene **copiato**.  
Se premi **Ctrl+V**, l'ultimo blocco copiato viene **incollato** nell'editor.  

2. Scegli un blocco e fai clic nel menu **Modifica** sul pulsante **«Copia Ctrl+C»**: il blocco scelto viene **copiato**.  
Se fai clic nel menu **Modifica** sul pulsante **«Incolla Ctrl+V»**, l'ultimo blocco copiato viene **incollato** nell'editor.

<br>

**Eliminare i blocchi**  

Ci sono tre modi per eliminare i blocchi nell'editor.

1. Scegli un blocco e premi **Backspace**: il blocco scelto viene eliminato.<br>  

2. Il blocco che vuoi eliminare lo **trascini nell'editor** e lo **rilasci sulle categorie di blocchi**: così viene eliminato.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Il blocco che vuoi eliminare lo **trascini nell'editor** e lo **rilasci nel cestino**: così viene eliminato.  
I blocchi eliminati si possono rivedere nel **cestino**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Selezionare più blocchi insieme**  

Ci sono due modi per selezionare più blocchi insieme nell'editor.

1. Se tieni premuto il tasto **Shift** e trascini nell'area di lavoro oppure fai clic sui blocchi uno a uno,  
puoi selezionare più blocchi insieme.  

2. Con il **pulsante di spunta** in basso a destra nell'area di lavoro attivi o disattivi la modalità «seleziona più blocchi».  
Se il pulsante è riempito di colore, la modalità è attiva.  
Se il pulsante non è riempito di colore, la modalità è disattivata.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Mentre la modalità «seleziona più blocchi» è attiva, puoi solo selezionare i blocchi.   
Se vuoi spostare o modificare insieme i blocchi scelti, devi terminare la selezione e disattivare la modalità.  

<br>

**Opzioni aggiuntive**

Inoltre, se fai **clic destro** su un blocco,  
trovi varie opzioni aggiuntive, come **ridurre/espandere il blocco, attivarlo/disattivarlo e Aiuto**.  

<br>

## Editor di Python {#python-editor}

### Tavolozza del codice {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

È l'area in cui le **funzioni di base** che ti servono per programmare i robot e i **codici Python** propri dei robot e dei moduli di estensione sono organizzati per **categorie**.  


Questi sono i tipi di categorie di codice offerti nelle funzioni di base (Codici).  

- Logica (logic)
- Cicli (loops)
- Matematica (math)
- Testo (text)
- Lista (lists)
- Colore (color)
- Audio (audio)
- Controllo (control)

I codici offerti nelle funzioni di base svolgono tutti lo stesso ruolo dei blocchi di base dell'editor di programmazione con blocchi.  

<br>

**⚙️ Nota**  
Il modo di programmare nell'editor di Python usando la tavolozza del codice lo trovi in [**Come usare la tavolozza del codice**](#python-codes-usage).

<br>

### Editor di codice {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

È l'area in cui puoi scrivere il codice per comandare il robot.  


Se in [**Impostazioni dell'editor**](Menu#editor-settings) scegli l'editor **Python**, puoi scrivere codice Python.

<br>

### Struttura di base del codice {#python-structure}

Quando programmi nell'editor di codice devi rispettare la struttura di base seguente.

```python
from robomation import *

# (se vuoi usare un robot, dichiaralo come istanza, esempio)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

L'editor di codice interpreta ed esegue il codice che sta dentro la funzione **setup** e la funzione **loop**.  
Per questo devi scrivere il codice dentro la funzione **setup** e la funzione **loop**.  
Inoltre, per comandare il robot, `from robomation import *` sta all'inizio del codice e il robot che vuoi usare va dichiarato come istanza.

**setup**  

Dentro la funzione setup si definiscono le azioni da eseguire all'inizio, quando il codice viene eseguito.  
Con la funzione **Utils.wait** puoi far sì che le azioni vengano eseguite ordinate nel tempo.  

**loop**  
Dentro la funzione loop si definiscono le azioni da eseguire ripetutamente mentre il codice è in esecuzione.  
Le azioni definite vengono eseguite di nuovo ogni 10 ms.  


<br>

### Come usare la tavolozza del codice {#python-codes-usage}

Qui sotto si descrive, con esempi semplici, **come usare la tavolozza del codice nella programmazione**.  

### Trovare il codice che vuoi {#python-codes-find}

La tavolozza del codice offre varie funzioni e codici che ti servono per programmare i robot.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Se guardi i menu dentro la categoria **Codici**, vedi che alcuni hanno l'icona <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Se fai clic una volta sul menu **Logica**, l'icona diventa <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> e i **sottomenu** che stanno dentro si espandono e diventano visibili.  
Un menu che ha dei sottomenu in questo modo si chiama «**categoria**».  

Se un menu non ha l'icona <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, come **ternario** dentro la categoria **Logica**, significa che quel menu **non ha più sottomenu**.  
Un menu che non ha sottomenu in questo modo si chiama «**codice**».  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Se fai clic di nuovo su una categoria con i sottomenu espansi, l'icona torna a <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> e i sottomenu vengono nascosti.  

Percorrendo le categorie in questo modo, trovi nella tavolozza del codice il codice che vuoi.

<br>

### Inserire codice nell'editor {#python-codes-insert}

Il modo di inserire codice nell'editor è il seguente.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Un menu con l'icona <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> a sinistra del nome è un menu che non ha **opzioni di codice** da scegliere.  
È il caso della maggior parte dei menu di **categoria**, che hanno dei sottomenu.

Un menu con l'icona <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> a sinistra del nome è un menu in cui puoi scegliere **opzioni di codice**.  
È il caso della maggior parte dei menu di **codice**, che non hanno sottomenu.

Se fai **clic destro** del mouse sul codice che vuoi inserire nell'editor, vedi le opzioni che puoi scegliere.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Se fai clic destro su un menu di **codice**, vedi sempre le stesse opzioni, senza differenza tra le funzioni di base e i codici propri dei robot e dei moduli di estensione.

- **Inserisci codice**: inserisce il codice scelto nella posizione del cursore nell'editor.
- **Aiuto**: apre l'aiuto che descrive il modo di usare quel codice.
- **Annulla**: chiude il menu delle opzioni.

Nei codici propri dei robot e dei moduli di estensione, se scegli **Inserisci codice**, il codice viene inserito nella forma di una chiamata a un metodo di quell'istanza di robot.  
( p. es. il `set_wheel_speed` di HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Le categorie di codice proprie dei robot / dei moduli di estensione che hai aggiunto al programma e che non usi più  
si possono togliere dalla tavolozza del codice con **clic destro del mouse → Rimuovi**.

<br>
