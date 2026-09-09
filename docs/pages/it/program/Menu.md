---
title: Menu superiore
---

# Menu superiore

Nel **menu superiore** sono raccolte le funzioni più usate del programma: collegare il dongle e i robot, salvare e aprire file e altre.  
Qui sotto sono descritte in ordine le funzioni di ogni menu. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

È il logo del programma.  
Se fai clic sul logo, la pagina viene ricaricata. 

Quando è attivo l'**editor di programmazione con blocchi**, il testo del logo compare come **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Quando è attivo l'**editor di Python**, il testo del logo compare come **Script Composer**.  

<br>

## Cercare il dongle {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Qui puoi **cercare il dongle che comunica con il robot e collegarlo al programma**.

Per poter comandare un robot nel programma devi prima collegare al programma il dongle che comunica con il robot.  
Questo processo si chiama **accoppiamento**. 

Se fai clic sul pulsante **Dongle**, compare l'elenco dei dongle disponibili sul PC.  
Scegli nell'elenco il dongle che vuoi e fai clic sul pulsante **Connetti**: il dongle viene collegato al programma.  

### Verificare lo stato della connessione del dongle {#dongle-status}

Un dongle che è già stato collegato al programma viene collegato automaticamente le volte successive.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Quando il dongle è collegato correttamente al programma, l'icona diventa **azzurra**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Se nella scheda del browser c'è un'icona come quella dell'immagine seguente, vedi che il dongle è collegato.  

<br>

**⚠️ Attenzione**  

Se il dongle è già collegato a un altro programma o a un'altra pagina, non viene collegato a questo programma.  
In quel caso cerca il programma a cui il dongle è collegato, scollegalo lì, torna a questa pagina e prova a collegarlo di nuovo.

<br>

## Selezionare il robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Qui puoi **scegliere il robot che vuoi usare** nel programma e **registrare le informazioni di quel robot e i suoi blocchi/codici di script**. 

Per poter comandare un robot nel programma devi prima aggiungere al programma le informazioni e i blocchi del robot che vuoi usare.

<BlockImage module="program/Menu" id="robot-select" /><br>

Se fai clic sul pulsante **Robot**, compare una finestra con l'elenco dei robot disponibili nel programma.  

Scegli il robot che vuoi e fai clic sul pulsante **Aggiungi**: le informazioni di quel robot e i suoi blocchi/codici di script vengono registrati nel programma.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Quando un robot viene aggiunto, vengono creati gli elementi seguenti. 


- **Block Composer**: nella [**tavolozza dei blocchi**](Editor#block-editor) a sinistra vengono creati i **blocchi** propri di quel robot 
- **Script Composer**: nella [**tavolozza del codice**](Editor#python-editor) a sinistra vengono creati i **codici di script** propri di quel robot

Così puoi muovere e comandare liberamente l'hardware reale del robot: sensori, motori, LED e altro.  

<br>

**⚙️ Nota**

In RobomationLAB puoi collegare e usare quanti robot vuoi, indipendentemente dal tipo e dalla quantità.  

Però, se vuoi collegare e usare più robot insieme, al programma devono essere collegati tanti dongle quanti sono i robot che vuoi usare, e devi aggiungere al programma tanti robot quanti vuoi usare.  

<br>

## Selezionare il modulo di estensione {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

I moduli di estensione sono moduli che offrono **funzioni ampliate basate sull'IA: riconoscimento vocale, riconoscimento delle immagini, analisi delle immagini e altro**.  
Qui puoi **scegliere il modulo di estensione che vuoi usare** nel programma e **registrare le informazioni di quel modulo e i suoi blocchi/codici di script**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Se fai clic sul pulsante **Estensione**, compare una schermata con l'elenco dei moduli di estensione disponibili nel programma.  
- Da voce a testo
- Rilevamento del volto
- Rilevamento dettagliato del volto
- Espressione facciale
- Rilevamento delle mani
- Rilevamento del corpo
- Rilevamento degli oggetti
- Rilevamento dei colori
- Rilevamento marker ArUco
- Guida autonoma con fotocamera

Se fai clic sul modulo che vuoi, le informazioni di quel modulo di estensione e i suoi blocchi/codici di script vengono registrati nel programma, come in [**Selezionare il robot**](#robot). 

Quando aggiungi al programma un modulo di estensione che usa la fotocamera, come **Rilevamento del volto** o **Rilevamento delle mani**,  
nella scheda [**Anteprima - Fotocamera**](Preview#camera) viene creato un modulo fotocamera e puoi collegare una fotocamera al programma e usarla.  

Se un modulo di estensione che hai scelto non ti serve più, puoi togliere il robot dall'elenco con **clic destro → Rimuovi**.

<br>

## Suono {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Qui puoi scegliere suoni da usare nella programmazione oppure aggiungere al programma suoni che hai sul tuo computer.

### Scegliere un suono {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Se fai clic sul pulsante **Suono**, compare una schermata in cui puoi scegliere tra i vari suoni che il programma offre.  
Puoi usare le funzioni seguenti.  
- Cercare un suono
- ▶ Ascoltare l'anteprima del suono
- Aggiungere il suono all'elenco dei suoni (pannello di sinistra)

### Funzioni ampliate {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Se fai clic sul pulsante di **estensione** in basso a sinistra (riquadro rosso) o ci passi sopra con il mouse, compaiono tre opzioni di funzioni ampliate.  
Puoi usare le funzioni seguenti.
- Aggiungere un file locale: aggiunge un file audio che sta sul computer dell'utente 
- Registrare un suono: aggiunge un suono registrato dall'utente stesso
- Aggiungere un suono casuale: aggiunge un suono scelto a caso da tutto l'elenco dei suoni

### Usare i suoni nella programmazione {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

I suoni aggiunti all'elenco dei suoni (pannello di sinistra) possono essere usati nella programmazione.

- Nella **programmazione con blocchi** puoi scegliere il suono che vuoi nel menu a tendina del blocco **riproduci suono**.  

- Nella **programmazione con script** puoi scegliere il suono che vuoi nelle sotto-opzioni della funzione **«riproduci suono»** della categoria **Codici - Audio**.  

Quando il codice viene eseguito, il suono scelto viene riprodotto dagli altoparlanti del computer dell'utente.

<br>

## Esempio {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Se al programma è stato aggiunto un robot, puoi aprire e provare esempi semplici per ogni robot.

### Scegliere un esempio {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Se fai clic sul pulsante Esempio, compare la schermata **Seleziona esempio** che vedi sopra.   
Con la **divisione per categorie** e la **ricerca** trovi rapidamente l'esempio che vuoi. 

### Aprire un esempio {#example-load}
1. Fai clic sul menu **Esempio** per aprire la schermata **Seleziona esempio** e scegli l'esempio che vuoi. 
2. La schermata viene ricaricata e l'esempio compare nell'area di programmazione.   
3. Dopo aver aperto l'esempio, puoi vedere subito cosa fa premendo il **pulsante di esecuzione (▶)**, senza altro. 

<br>

## Modifica {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


È la funzione con cui puoi annullare o rifare quello che hai fatto.
- Copia (Ctrl+C): copia i blocchi o il codice selezionati.
- Incolla (Ctrl+V): incolla nell'area di lavoro i blocchi o il codice copiati.
- Annulla (Ctrl+Z): annulla l'ultima azione.
- Ripeti (Ctrl+Y): rifà l'azione annullata. 

<br>

## File {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Qui puoi gestire i file: creare codice nuovo, salvare in un file il codice che hai scritto, aprire file e altro.

- Nuovo  
Reimposta il codice su cui stai lavorando e crea codice nuovo.

- Salva progetto  
Salva il file del progetto su cui stai lavorando.  
Il file viene salvato nella cartella «Download» del computer dell'utente e l'estensione del file è «.block».

- Esporta codice Python  
Estrae il codice Python del progetto su cui stai lavorando e lo salva in un file.  
Il file viene salvato nella cartella «Download» del computer dell'utente e l'estensione del file è «.py».  
Il file salvato si può aprire ed eseguire in un ambiente di sviluppo Python esterno, come VSCode.

- Apri progetto  
Apre un file di progetto o un file di codice Python che sta sul computer dell'utente.  
Le estensioni dei file che si possono aprire sono «.block» e «.py».  
Un file «.block» si apre nell'editor di programmazione con blocchi e un file «.py» si apre nell'editor di Python.  
Attenzione: aprendo un file «.py», se non corrisponde al formato di codice di Block Composer o ha errori di sintassi, può non essere aperto correttamente.

<br>

## Eseguire / arrestare il codice {#run-stop}

### Esegui (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Interpreta ed esegue il codice a blocchi o il codice di script scritto nell'editor attivo.  

In base al codice che hai scritto puoi comandare il robot collegato al programma.  
Mentre il codice è in esecuzione non puoi modificare il codice scritto.

### Arresta (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Arresta l'esecuzione del codice.


<br>

## Programmazione con IA {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Se fai clic sul pulsante **Programmazione con IA** del menu superiore, a destra dello schermo si apre il pannello del chatbot di IA.  
Puoi conversare con il **chatbot di IA** integrato in RobomationLAB e programmare insieme all'IA.

Puoi usare le funzioni seguenti.
- Puoi fare liberamente domande sulla programmazione: come scrivere e modificare il codice, sintassi, concetti e altro.
- **Se durante l'esecuzione del codice si verifica un errore**, puoi chiedere all'IA perché è avvenuto e come risolverlo, e risolvere il problema rapidamente.
- Il codice che l'IA propone si copia facilmente con il pulsante di copia a destra del blocco di codice.
- La conversazione viene salvata e puoi continuarla, e puoi anche cominciare una **nuova conversazione**.
- Puoi regolare la larghezza del pannello trascinandone il bordo sinistro.

<br>

## Copia codice {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Qui puoi copiare negli appunti il codice scritto nell'editor attivo.  

### Block Composer (programmazione con blocchi) {#copy-block}

Viene copiato il codice Python mostrato nella scheda **[Anteprima Python](Preview#python-preview)**.

### Script Composer (Python) {#copy-python}
Viene copiato tale e quale il codice scritto nell'editor di Python.  

Il codice copiato si può incollare dove vuoi con Ctrl+V.

<br>

## Impostazioni dell'editor {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Puoi scegliere tra **Blocco** e **Python** l'editor con cui vuoi programmare.  

Anche se cambi editor, il codice che hai scritto prima rimane, e puoi continuare a programmare in qualunque momento. 

**※ L'editor di programmazione con blocchi e l'editor di Python si corrispondono uno a uno: quando cambi editor, il codice che hai scritto viene convertito e continua nell'altro.**

### Editor di programmazione con blocchi {#editor-settings-block}
Se scegli Blocco, il logo diventa **Block Composer**.  
I blocchi che scrivi nell'editor di programmazione con blocchi vengono convertiti in tempo reale in codice Python, e puoi vedere il risultato della conversione nella scheda **Anteprima - Anteprima Python**.  

### Editor di Python {#editor-settings-python}
Se scegli Python, il logo diventa **Script Composer**.  
Il codice che scrivi nell'editor di Python viene convertito in blocchi quando torni all'**editor di programmazione con blocchi**.  

> Tuttavia la conversione da Python a blocchi funziona solo con codice che si possa rappresentare come blocchi.  
> Con sintassi errata o con codice che non può essere convertito in blocchi, il passaggio all'editor di programmazione con blocchi può non avvenire; in quel caso viene mostrato anche il motivo del mancato passaggio.

<br>

## Impostazioni {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Qui puoi fare le impostazioni di base del programma.

### Lingua {#settings-language}
Cambia la lingua (il paese) in cui il programma è mostrato.  
Puoi scegliere la lingua che vuoi usare tra 21 lingue.

### Dongle {#settings-dongle}
- Disconnetti: scollega tutti i dongle collegati al programma.
- Connetti: ricollega il dongle al programma.

### Reimpostazione {#settings-reset}
- Reimposta il programma: tutti i dati registrati nel programma (informazioni dei robot, blocchi/codici di script, impostazioni e altro) vengono reimpostati.

<br>

## Supporto {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Qui trovi le guide e i materiali esterni che ti servono per usare il programma.  

- Tutorial: offre un tutorial per chi usa il programma per la prima volta.
- Aiuto: dentro il programma puoi vedere subito come si usano i blocchi e il codice Python, con esempi.
- Guida utente: va alla pagina Wiki della guida utente di RobomationLAB.  
Offre descrizioni dettagliate dei componenti del programma e del modo di usarli, e delle funzioni e della sintassi di ogni blocco/codice di script.
- Robomation Lab: va alla pagina principale di RobomationLAB.
- Home: va al sito ufficiale dell'azienda Robomation.
- YouTube: va alla pagina YouTube di Robomation.
- Negozio online: va alla pagina del negozio online di Robomation.
- Informazioni: qui puoi vedere la versione del programma e la cronologia degli aggiornamenti, le condizioni d'uso, l'informativa sulla privacy e altro.
- Contattaci: qui puoi porre domande che hai usando il programma, segnalare errori e altro.

<br>
