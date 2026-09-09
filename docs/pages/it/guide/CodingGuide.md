---
title: Guida alla programmazione
---

# Guida alla programmazione

Questo documento descrive RobomationLAB, la piattaforma per l'insegnamento della programmazione dei robot sviluppata da Robomation, che fa parte del «motore di esecuzione e ambiente di autoria integrato per il servizio di streaming dei movimenti dei robot».  

La descrizione dettagliata segue quest'ordine:
- Le caratteristiche principali di RobomationLAB
- Il modo di programmare i robot in RobomationLAB
- Il sistema della sintassi di base della programmazione dei robot in RobomationLAB  

<br>

## Indice {#table-of-contents}
1. [RobomationLAB — piattaforma per l'insegnamento della programmazione dei robot](#platform)  
    1-1) [Programmi per programmare i robot](#coding-programs)  
    1-2) [Conversione bidirezionale in tempo reale tra blocchi e Python](#block-python-conversion)  
    1-3) [Le caratteristiche principali dei programmi](#features)  
    1-4) [Controllo dei robot in tempo reale](#control-method)  

2. [Il modo di programmare i robot in RobomationLAB](#programming-method)  
    2-1) [Esecuzione sequenziale ed esecuzione in parallelo](#sequential-parallel)  
    2-2) [La funzione setup](#setup)  
    2-3) [La funzione loop](#loop)  

3. [Il sistema della sintassi di base della programmazione dei robot in RobomationLAB](#grammar-syntax)  
    3-1) [Importare il pacchetto robomation](#import-package)  
    3-2) [Creare un'istanza di robot](#create-instance)  
    3-3) [Metodi per controllare il robot](#control-methods)  
    3-4) [Leggere sensori e stati](#sensor)  
    3-5) [Rilevare eventi](#event)  
    3-6) [Aspettare che un'azione finisca (wait)](#wait)  
    3-7) [Funzioni di utilità (Utils)](#utils)   

<br><br>

## RobomationLAB — piattaforma per l'insegnamento della programmazione dei robot {#platform}
RobomationLAB è una piattaforma ottimizzata per l'**insegnamento del software di robotica con IA**.  
Offre un ambiente di autoria integrato basato sul browser Chrome per insegnare la programmazione dei robot agli alunni della scuola primaria.  

RobomationLAB offre programmi per l'insegnamento della programmazione dei robot in varie forme, come la **programmazione con blocchi** e la **programmazione con script**.  
Non si impara solo la teoria della programmazione: con i prodotti Robomation si muovono e si comandano robot reali,  
e questo dà la possibilità di imparare programmazione e robotica insieme.

<br>

### Programmi per programmare i robot {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer è uno strumento con cui comandare i propri robot in modo facile e rapido con la programmazione con blocchi e imparare le basi del controllo dei robot.**  

- Un ambiente di autoria ottimizzato per il physical computing

- Programmare trascinando e rilasciando blocchi: facile anche per chi comincia  
- Un ambiente di apprendimento senza errori di sintassi, fin dai concetti di base  
- Conversione automatica in codice di script Python  
- Per ogni robot, una raccolta di blocchi con funzioni predefinite e molti esempi da provare
- Risultati visibili in tempo reale durante l'esecuzione del codice  
- Maggiore capacità di risolvere problemi e più creatività combinando i blocchi  
- Commenti ottimizzati grazie all'analisi del codice di script basata sull'IA  

<br>

#### Script Composer {#script-composer}
**Script Composer è uno strumento con cui comandare i propri robot in modo facile e rapido con la programmazione in Python e imparare la sintassi di Python e le basi della programmazione dei robot.**  

- Un editor di Python

- Completamento automatico e inserimento di codice per ogni lingua
- Per ogni robot, molti esempi di codice da provare
- Risultati visibili in tempo reale durante l'esecuzione del codice
- Commenti ottimizzati grazie all'analisi del codice di script basata sull'IA

<br>

#### Le caratteristiche principali dei programmi {#features}
I programmi per programmare i robot di RobomationLAB hanno le caratteristiche principali seguenti.  
1.	Funzionano nel browser Chrome, quindi non dipendono dal sistema operativo
2.	Comandano l'hardware del robot direttamente con un adattatore USB tramite Web Serial
3.	Supportano il controllo di più robot insieme, senza limiti di tipo né di quantità
4.	Al salvataggio il risultato viene convertito in un file di testo JSON e salvato

<br>

### Controllo dei robot in tempo reale {#control-method}
I programmi per programmare i robot di RobomationLAB comandano i robot in tempo reale attraverso i passi seguenti.  
1.	Con la programmazione con blocchi o con script
si scrive codice che imposta i valori degli oggetti Effector e Command per comandare il robot
oppure che usa i valori Sensor e gli eventi Event del robot.
2.	Si esegue il codice.
3.	Tramite Web Serial si ricevono dal robot pacchetti con i dati Sensor ed Event
e si integrano nell'oggetto Device del robot.
4.	Il codice viene interpretato in tempo reale;
in questo processo si scrivono dati negli oggetti Effector e Command oppure si leggono valori dagli oggetti Sensor ed Event.
5.	Con i dati dell'oggetto Device viene creato un pacchetto
e inviato al robot tramite Web Serial, così da poter verificare che il robot funzioni davvero.
6.	Mentre il codice è in esecuzione, i passi 3 ~ 5 si ripetono circa ogni 10 ~ 20 ms.  

<br>

### Conversione bidirezionale in tempo reale tra blocchi e Python {#block-python-conversion}
RobomationLAB offre insieme un editor di programmazione con blocchi e un editor di Python; i due editor si sincronizzano in tempo reale nei due sensi.

- Se aggiungi, modifichi o rimuovi blocchi nell'editor di blocchi, quelle modifiche vengono integrate in tempo reale nel codice Python.
- Al contrario, le modifiche che fai al codice nell'editor di Python vengono integrate in tempo reale nei blocchi.

Poiché i blocchi e il codice Python si corrispondono uno a uno e vengono convertiti nei due sensi,  
puoi passare in modo naturale dalla programmazione con blocchi alla programmazione con script: per esempio costruire rapidamente tutta la struttura con i blocchi e poi rifinire i dettagli in Python, oppure imparare la sintassi di Python confrontandola con i blocchi.

> Tuttavia la conversione da Python a blocchi funziona solo con codice che si possa rappresentare come blocchi.  
> (Con sintassi errata o con codice che non può essere convertito in blocchi, il passaggio può non avvenire.  
Trovi altre informazioni nel documento [Regole di programmazione](CodingRules).)

<br>

<br><br>

## Il modo di programmare i robot in RobomationLAB {#programming-method}

### Esecuzione sequenziale ed esecuzione in parallelo {#sequential-parallel}
Nella programmazione dei robot si distinguono l'esecuzione sequenziale e l'esecuzione in parallelo.  
L'esecuzione sequenziale significa che l'azione successiva comincia solo quando la precedente è finita; è adatta ai comportamenti semplici.  
Se per esempio vuoi che il robot avanzi e poi si fermi e accenda un LED, deve essere possibile l'esecuzione sequenziale, così che il codice di ogni azione stia in quell'ordine e venga eseguito uno dopo l'altro nel tempo.  

L'esecuzione in parallelo significa che più azioni vengono eseguite nello stesso momento; serve per comportamenti più complessi e avanzati.  
Se per esempio vuoi far camminare un robot bipede, devi poter programmare con l'esecuzione in parallelo, perché il cammino funziona solo se i piedi e le gambe del robot si muovono nello stesso momento.

I programmi per programmare i robot di RobomationLAB supportano le due forme insieme,  
partendo da una struttura di codice setup / loop simile all'ambiente di sviluppo hardware di Arduino.

<BlockImage module="program/Editor" id="block-structure" />

Quando apri Block Composer per la prima volta, nell'area di lavoro compaiono due blocchi di funzione vuoti:  
il blocco **funzione setup** rappresenta la funzione `setup` e il blocco **funzione loop** la funzione `loop`.  

I blocchi vengono convertiti in tempo reale in codice Python,  
e quel codice ha la struttura di base seguente.  

```python
# struttura di base del codice Python
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Per comandare un robot, metti `from robomation import *` all'inizio del codice e dichiara come istanza il robot che vuoi usare. (p. es. `hamster_s = HamsterS(0)`)


<br>

### La funzione setup {#setup}
La funzione setup viene eseguita esattamente una volta, nel momento in cui il codice viene eseguito.  
Nella funzione setup si scrive soprattutto codice che inizializza le variabili oppure che prepara i modi e le funzioni del robot.  
Se comandi per esempio un robot che si muove con le ruote, nella funzione setup puoi impostare la velocità iniziale delle ruote.  

Se dentro una funzione serve un ritardo, con la funzione `Utils.wait(...)` puoi scrivere codice che si svolge ordinato nel tempo, come se fosse sincrono.  
`Utils.wait(...)` aspetta il tempo indicato (in secondi) e poi esegue il codice successivo, cioè il codice si risveglia dopo un tempo o un'azione determinati e continua.  
Se sfrutti questa possibilità, insieme alla funzione loop, che si occupa dell'esecuzione in parallelo, non è possibile soltanto la semplice esecuzione sequenziale, ma anche una programmazione dei robot molto potente.

Nell'esempio seguente il robot HamsterS avanza per un secondo e poi torna indietro per un secondo.  
Se lo facessi nella funzione loop, che viene eseguita in parallelo, il calcolo del tempo e il codice di controllo si mescolerebbero e il codice diventerebbe molto complicato.  
Se invece usi nella funzione setup la funzione di ritardo `Utils.wait`, puoi scrivere codice che si svolge ordinato nel tempo, come se fosse sincrono.  
( La funzione `Utils.wait` è descritta più avanti in dettaglio in [Funzioni di utilità (Utils)](#utils). )

Esempio di codice (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # mettere le due velocità delle ruote a 50 e avanzare
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # aspettare 1 secondo
    # mettere le due velocità delle ruote a -50 e tornare indietro
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # aspettare 1 secondo
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( La sintassi delle istanze di robot e dei metodi è descritta più avanti in dettaglio in [Il sistema della sintassi di base della programmazione dei robot in RobomationLAB](#grammar-syntax). )


<br>

### La funzione loop {#loop}
La funzione loop supporta l'esecuzione in parallelo e viene eseguita di nuovo circa ogni 10 ms mentre il codice è in esecuzione.  
Nella funzione loop si scrive soprattutto codice che imposta ripetutamente il valore delle variabili oppure che rileva e gestisce eventi determinati del robot.  

Nell'esempio seguente la velocità delle ruote e il colore del LED del robot HamsterS cambiano col tempo.  
( Se dentro una funzione modifichi una variabile dichiarata fuori da setup / loop, dichiarala lì con la parola chiave `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # ogni volta che la funzione loop viene chiamata, il valore di frame aumenta di 1

    # con il valore modificato di frame, impostare le due velocità delle ruote e i valori RGB dei due LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( La sintassi delle istanze di robot e dei metodi è descritta più avanti in dettaglio in [Il sistema della sintassi di base della programmazione dei robot in RobomationLAB](#grammar-syntax). )  

Nell'esempio seguente il LED si accende di rosso quando si dà un colpetto sul corpo del robot HamsterS (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # nel momento in cui arriva un colpetto, l'evento viene rilevato
    if hamster_s.tap():               # se l'evento viene rilevato, True
        hamster_s.set_led_color('both', 'red')   # accendere i due LED di rosso
    else:
        hamster_s.turn_off('both')               # spegnere i due LED
```
( La sintassi del rilevamento degli eventi (`tap()`) e il resto sono descritti più avanti in dettaglio in [Il sistema della sintassi di base della programmazione dei robot in RobomationLAB](#grammar-syntax). )  

<br><br>

## Il sistema della sintassi di base della programmazione dei robot in RobomationLAB {#grammar-syntax}
Quando scrivi codice nei programmi per programmare i robot di RobomationLAB vale il sistema della sintassi di base seguente.  
Il controllo del robot avviene attraverso il pacchetto Python `robomation`:  
si crea un'istanza del robot e poi si chiamano i metodi di quell'istanza.

### Importare il pacchetto robomation {#import-package}
Perché tu possa usare le classi (i robot) e le utilità (`Utils`) che servono per comandare il robot, la riga seguente sta all'inizio del codice.

```python
from robomation import *
```

<br>

### Creare un'istanza di robot {#create-instance}
Dichiara come istanza il robot che vuoi usare.  
Il nome della classe indica il tipo di robot e il numero tra parentesi l'indice dell'istanza (parte da 0).

```python
hamster_s = HamsterS(0)   # un HamsterS
```

I nomi delle classi e i nomi di variabile predefiniti di ogni robot sono:

| Robot | Nome della classe | Nome di variabile predefinito |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Se usi più robot dello stesso tipo, dichiarali con indici crescenti 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metodi per controllare il robot {#control-methods}
Per comandare il robot si chiamano i metodi dell'istanza.  
I metodi eseguono le azioni del robot: impostare la velocità delle ruote, avanzare, LED, suono e altro.

```python
hamster_s.set_wheel_speed('both', 50)    # impostare le due velocità delle ruote
hamster_s.move_distance(10, 'cm')        # avanzare di 10 cm
hamster_s.set_led_color('both', 'red')   # i due LED di rosso
```

I metodi che ogni robot offre e i loro parametri stanno nel documento di quel robot (p. es. «HamsterS»).

<br>

### Leggere sensori e stati {#sensor}
Anche per leggere i valori dei sensori o gli stati del robot si chiamano metodi; il metodo restituisce il valore.

```python
left = hamster_s.floor('left')        # leggere il valore del sensore del pavimento sinistro
dist = hamster_s.proximity('right')   # leggere il valore del sensore di prossimità destro
```

<br>

### Rilevare eventi {#event}
Gli eventi che si verificano per cambiamenti di stato o dell'ambiente si rilevano perché  
il metodo di evento corrispondente restituisce True nel momento in cui l'evento si verifica.

```python
if hamster_s.tap():        # nel momento in cui arriva un colpetto, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Aspettare che un'azione finisca (wait) {#wait}
I metodi che richiedono tempo per finire — avanzare, girare, riprodurre un suono — hanno un parametro `wait`.
- `wait=True` (valore predefinito): si aspetta che l'azione sia finita e poi viene eseguito il codice successivo.
- `wait=False`: l'azione viene avviata e il codice successivo viene eseguito subito dopo.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # aspetta che il movimento sia finito
hamster_s.move_distance(10, 'cm', wait=False)   # avvia il movimento ed esegue subito il codice successivo
```

<br>

### Funzioni di utilità (Utils) {#utils}
Le funzioni comuni che non dipendono dal tipo di robot — ritardo, riprodurre un suono, scrivere nel log, colori — si usano attraverso i metodi della classe `Utils`.

```python
Utils.wait(1)              # aspettare 1 secondo
Utils.speak('Ciao')        # riprodurre un testo come voce (TTS)
Utils.log(0, '', '')       # scrivere nella console
```

<br>
