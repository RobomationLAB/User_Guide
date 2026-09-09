---
title: Regole di programmazione
---

# Regole di programmazione

Questo documento descrive le regole di programmazione da rispettare quando si programmano i robot in RobomationLAB.

> **Nota**: la programmazione con script funziona **solo con Python**; i blocchi vengono convertiti uno a uno in codice Python che usa il pacchetto Python `robomation`.

> **Sull'ordine**: prima le regole di base comuni (1~2), poi le regole del codice a blocchi (3~5) e poi le regole del codice di script Python (6~11). Sono importanti sia quando si genera codice a blocchi sia quando si genera codice Python.

<br>

## 1. Limite della conversione uno a uno tra blocchi e Python {#1}
L'editor di programmazione con blocchi e l'editor di programmazione in Python si corrispondono uno a uno e vengono convertiti in tempo reale nei due sensi.

- Blocchi → Python: i blocchi vengono sempre convertiti in codice Python corretto.
- Python → blocchi: la conversione funziona solo con **codice che si possa rappresentare come blocchi**.

Per questo, se scrivi nell'editor di Python codice come il seguente, il passaggio da Python all'editor di programmazione con blocchi può non avvenire;  
in quel caso viene mostrato anche il motivo del mancato passaggio.

1) Codice con errori di sintassi di Python
2) Codice che usa funzioni, metodi o sintassi a cui non corrisponde nessun blocco (cioè che non sono definiti nelle regole di conversione)

Perché il passaggio all'editor di programmazione con blocchi funzioni sempre,  
devi scrivere il codice dentro le classi, i metodi, le funzioni e l'insieme di sintassi supportato che sono definiti in questo documento e nei documenti di ogni robot.

<br>

## 2. Regole per presentare il codice {#2}
Puoi usare solo le classi, i metodi e le funzioni che compaiono nel **manuale dell'API Python di robomation** e nel **documento delle regole di conversione tra blocchi e Python**.  
È severamente vietato creare e usare nuovi metodi di controllo del robot che non siano definiti in quei documenti.
È permesso solo se l'utente chiede espressamente di creare una nuova funzione.

Le variabili ausiliarie che non compaiono negli esempi di conversione di quei documenti (cioè variabili in più oltre a quella dell'istanza del robot) possono essere dichiarate solo se l'utente chiede di creare una variabile.  
Inoltre gli argomenti di un metodo vanno scritti obbligatoriamente come valori letterali.  

```python
# esempio corretto
hamster_s.set_wheel_speed('both', 100)

# esempio sbagliato — una funzione che non compare nel manuale dell'API
hamster_s.set_wheel('both', 100)

# esempio sbagliato — dichiarare una variabile arbitraria
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Struttura di base del codice a blocchi {#3}
Ogni volta che si presenta codice a blocchi, i blocchi di funzione superiori funzione setup e funzione loop, che fanno da punto di ingresso del programma, vengono sempre inclusi come struttura di base.  
Con questa regola tutto il codice a blocchi avrà da qui in avanti la struttura di base seguente.

| Struttura a blocchi (Block Composer) | Presentazione (come testo) |
| --- | --- |
| funzione setup | funzione setup |
| (blocchi interni) | (blocchi interni) |
| funzione loop | funzione loop |
| (blocchi interni) | (blocchi interni) |

<br>

## 4. Formato del codice a blocchi (regole di andata a capo e indentazione) {#4}
- I blocchi superiori (funzione setup, funzione loop, ecc.) sono allineati a sinistra.
- Ogni blocco di istruzione va separato con un carattere di andata a capo, così che su ogni riga compaia un solo blocco.
- I blocchi subordinati che stanno dentro un blocco con area di esecuzione interna (se, ripeti, definizione di funzione, ecc.) vengono indentati perché la gerarchia sia chiara.

<br>

## 5. Regole per i blocchi interni e la rappresentazione delle condizioni {#5}
Il valore scelto in un menu a tendina o un valore di ingresso corrisponde a un argomento funzionale del blocco e viene inserito direttamente tra parentesi quadre ([]) nel punto in cui quel valore compare nel testo del blocco.  
Questo serve a riprodurre visivamente insieme il testo fisso del blocco e il valore che l'utente ha scelto o inserito.

Tutto il codice a blocchi deve contenere la denominazione fissa del blocco, i valori scelti nei menu a tendina e i valori inseriti dall'utente, tutti tra parentesi quadre ([]),  
così che la forma reale dei blocchi in Block Composer sia riprodotta come testo il più fedelmente possibile.  

| Struttura a blocchi (Block Composer) | Presentazione (come testo) |
| --- | --- |
| se [condizione] fai [istruzione] altrimenti [istruzione] | se [condizione] fai [istruzione] altrimenti [istruzione] |
| RaccoonBot: imposta la modalità di controllo su [velocità] | RaccoonBot: imposta la modalità di controllo su [velocità] |
| RaccoonBot: imposta la velocità dell'articolazione [1] su [100] | RaccoonBot: imposta la velocità dell'articolazione [1] su [100] |

<br>

## 6. Struttura di base del codice di script {#6}
Ogni volta che si presenta codice di script (Python), le funzioni setup() e loop(), che fanno da punto di ingresso del programma, vengono sempre incluse come struttura di base.  
Inoltre `from robomation import *` sta all'inizio del codice perché siano disponibili le classi e le utilità che servono per comandare il robot, e il robot che si vuole usare viene dichiarato come istanza.  
Con questa regola tutto il codice di script (Python) avrà da qui in avanti la struttura di base seguente.

```python
# struttura di base del codice Python
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

<br>

## 7. Formato del codice di script (regole di andata a capo e indentazione) {#7}
- Le funzioni superiori (setup, loop, ecc.) sono allineate a sinistra.
- L'indentazione dopo un'andata a capo si basa obbligatoriamente su **un tabulatore (`\t`)**. (uguale all'indentazione dell'editor)

<br>

## 8. Regole per comandare il robot (istanza / metodi) {#8}
Per comandare un robot bisogna rispettare le regole seguenti.  

1) `from robomation import *` sta all'inizio del codice.
2) Il robot che si vuole usare viene dichiarato come istanza. Come nome di variabile si usa il nome predefinito di quel robot e l'indice parte da 0.
3) Il robot si comanda chiamando i metodi dell'istanza dichiarata.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Se usi più robot dello stesso tipo, dichiarali con indici crescenti 0, 1, 2 … (p. es. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Quando si imposta la velocità delle ruote, quando si avanza e in casi simili, i metodi si occupano internamente dell'inizializzazione necessaria (per esempio di ripulire un comando di movimento precedente), quindi non devi scrivere codice di preparazione tuo.

<br>

## 9. Regole per chiamare le funzioni di utilità {#9}
Le funzioni di utilità comuni — ritardo, riprodurre un suono, scrivere nel log, colori — si chiamano attraverso i metodi della classe `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Trovi l'elenco dettagliato delle funzioni di utilità nei documenti seguenti.
- [Colore](../common/Color)
- [Audio](../common/Audio)
- [Controllo](../common/Control)

<br>

## 10. Regola di preferenza per i metodi propri del robot {#10}
Quando si comanda l'hardware del robot (velocità delle ruote, LED, suono, ecc.)  
bisogna preferire i metodi propri dell'istanza del robot (p. es. «HamsterS») alle funzioni di utilità comuni.

Se per esempio bisogna emettere un suono con il robot,  
bisogna preferire il metodo `sound_clip()` dell'istanza «HamsterS» alla funzione di utilità `Utils.play_sound()`.

```python
# il suono esce dal robot HamsterS. (consigliato)
hamster_s.sound_clip('beep')

# il suono esce dal PC / tablet / dispositivo mobile. (non consigliato)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regole per gli import {#11}
Quando si scrive codice Python si importano solo i moduli che servono per eseguire il codice.
- Per comandare il robot, `from robomation import *` sta per principio all'inizio del codice.
- Nel codice che usa `math.` viene aggiunto automaticamente `import math`, e in quello che usa `random.`, `import random`.
- Gli altri moduli che non servono non vengono importati.
