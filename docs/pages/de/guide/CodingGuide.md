---
title: Programmierleitfaden
---

# Programmierleitfaden

Dieses Dokument beschreibt RobomationLAB, eine von Robomation entwickelte Plattform für die Roboter-Programmierausbildung, die Teil der „Ausführungsengine und integrierten Entwicklungsumgebung für den Streaming-Dienst von Roboterbewegungen" ist.  

Die ausführliche Beschreibung folgt dieser Reihenfolge:
- Die wichtigsten Merkmale von RobomationLAB
- Die Art der Roboterprogrammierung in RobomationLAB
- Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB  

<br>

## Inhaltsverzeichnis {#table-of-contents}
1. [RobomationLAB — Plattform für die Roboter-Programmierausbildung](#platform)  
    1-1) [Programme für die Roboterprogrammierung](#coding-programs)  
    1-2) [Echtzeit-Umwandlung Blöcke ↔ Python in beide Richtungen](#block-python-conversion)  
    1-3) [Die wichtigsten Merkmale der Programme](#features)  
    1-4) [Robotersteuerung in Echtzeit](#control-method)  

2. [Die Art der Roboterprogrammierung in RobomationLAB](#programming-method)  
    2-1) [Sequenzielle und parallele Ausführung](#sequential-parallel)  
    2-2) [Die Funktion setup](#setup)  
    2-3) [Die Funktion loop](#loop)  

3. [Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB](#grammar-syntax)  
    3-1) [Das Paket robomation importieren](#import-package)  
    3-2) [Eine Roboterinstanz erzeugen](#create-instance)  
    3-3) [Methoden zur Robotersteuerung](#control-methods)  
    3-4) [Sensoren und Zustände auslesen](#sensor)  
    3-5) [Ereignisse erkennen](#event)  
    3-6) [Auf den Abschluss einer Aktion warten (wait)](#wait)  
    3-7) [Hilfsfunktionen (Utils)](#utils)   

<br><br>

## RobomationLAB — Plattform für die Roboter-Programmierausbildung {#platform}
RobomationLAB ist eine Plattform, die für die **Ausbildung in KI-Robotik-Software** optimiert ist.  
Sie bietet eine integrierte Entwicklungsumgebung auf Basis des Chrome-Webbrowsers für die Roboter-Programmierausbildung von Grundschülern und Schülern der Sekundarstufe I.  

RobomationLAB bietet Programme für die Roboter-Programmierausbildung in verschiedenen Formen, etwa als **Blockprogrammierung** und **Skriptprogrammierung**.  
Man lernt nicht nur die Theorie des Programmierens, sondern bewegt und steuert mit den Produkten von Robomation echte Roboter  
und erhält so die Gelegenheit, Programmieren und Robotik gleichzeitig zu lernen.

<br>

### Programme für die Roboterprogrammierung {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer ist ein Werkzeug, mit dem man die eigenen Roboter über Blockprogrammierung einfach und schnell steuert und dabei die Grundlagen der Robotersteuerung lernt.**  

- Eine für Physical Computing optimierte Entwicklungsumgebung

- Programmieren per Drag & Drop von Blöcken — auch für Anfänger leicht  
- Eine Lernumgebung ohne Syntaxfehler, von den Grundbegriffen an  
- Automatische Umwandlung in Python-Skriptcode  
- Für jeden Roboter eine Sammlung von Blöcken mit fest vorgegebenen Funktionen sowie viele Beispiele zum Ausprobieren
- Ergebnisse durch Ausführen des Codes in Echtzeit sichtbar  
- Bessere Problemlösefähigkeit und Kreativität durch das Kombinieren von Blöcken  
- Optimiertes Feedback durch KI-basierte Analyse des Skriptcodes  

<br>

#### Script Composer {#script-composer}
**Script Composer ist ein Werkzeug, mit dem man die eigenen Roboter über Python-Programmierung einfach und schnell steuert und dabei die Python-Syntax und die Grundlagen der Roboterprogrammierung lernt.**  

- Ein Python-Editor

- Automatische Codevervollständigung und Codeeinfügung je Sprache
- Für jeden Roboter viele Beispielcodes zum Ausprobieren
- Ergebnisse durch Ausführen des Codes in Echtzeit sichtbar
- Optimiertes Feedback durch KI-basierte Analyse des Skriptcodes

<br>

#### Die wichtigsten Merkmale der Programme {#features}
Die Programme für die Roboterprogrammierung in RobomationLAB haben folgende wesentliche Merkmale.  
1.	Sie laufen im Chrome-Webbrowser und sind daher nicht an ein Betriebssystem gebunden
2.	Sie steuern die Roboter-Hardware über Web Serial direkt mit einem USB-Dongle
3.	Sie unterstützen die gleichzeitige Steuerung mehrerer Roboter — ohne Beschränkung von Art und Anzahl
4.	Beim Speichern wird das Ergebnis in eine JSON-Textdatei umgewandelt und gespeichert

<br>

### Robotersteuerung in Echtzeit {#control-method}
Die Programme für die Roboterprogrammierung in RobomationLAB steuern die Roboter in Echtzeit über die folgenden Schritte.  
1.	Mit Blockprogrammierung oder Skriptprogrammierung
schreibt man Code, der die Werte der Objekte Effector und Command zur Robotersteuerung setzt
oder die Sensor-Werte und Event-Ereignisse des Roboters nutzt.
2.	Der Code wird ausgeführt.
3.	Über Web Serial werden vom Roboter Pakete mit Sensor- und Event-Daten empfangen
und in das Device-Objekt des Roboters übernommen.
4.	Der Code wird in Echtzeit ausgewertet;
dabei werden Daten in den Objekten Effector und Command überschrieben oder Werte aus den Objekten Sensor und Event gelesen.
5.	Aus den Daten des Device-Objekts wird ein Paket erzeugt
und über Web Serial an den Roboter gesendet — so lässt sich prüfen, ob der Roboter tatsächlich arbeitet.
6.	Während der Code läuft, werden die Schritte 3 ~ 5 etwa alle 10 ~ 20 ms wiederholt.  

<br>

### Echtzeit-Umwandlung Blöcke ↔ Python in beide Richtungen {#block-python-conversion}
RobomationLAB bietet einen Editor für Blockprogrammierung und einen Editor für Python zusammen an; beide Editoren werden in Echtzeit in beide Richtungen synchronisiert.

- Wenn du im Block-Editor Blöcke hinzufügst, änderst oder löschst, werden diese Änderungen in Echtzeit in den Python-Code übernommen.
- Umgekehrt werden Änderungen, die du im Python-Editor am Code vornimmst, in Echtzeit in die Blöcke übernommen.

Da Blöcke und Python-Code so eins zu eins einander entsprechen und in beide Richtungen umgewandelt werden,  
kann man organisch zwischen Blockprogrammierung und Skriptprogrammierung wechseln — etwa die Gesamtstruktur schnell mit Blöcken aufbauen und die Details dann in Python verfeinern oder die Python-Syntax im Vergleich mit den Blöcken lernen.

> Die Umwandlung Python → Blöcke gelingt allerdings nur bei Code, der sich als Blöcke darstellen lässt.  
> (Bei fehlerhafter Syntax oder bei Code, der nicht in Blöcke umgewandelt werden kann, kann der Wechsel ausbleiben.  
Näheres findest du im Dokument [Programmierregeln](CodingRules).)

<br>

<br><br>

## Die Art der Roboterprogrammierung in RobomationLAB {#programming-method}

### Sequenzielle und parallele Ausführung {#sequential-parallel}
Beim Programmieren von Robotern unterscheidet man die sequenzielle und die parallele Ausführung.  
Sequenzielle Ausführung bedeutet, dass die nächste Aktion erst beginnt, wenn die vorherige abgeschlossen ist; sie eignet sich für einfache Verhaltensweisen.  
Soll der Roboter zum Beispiel erst vorwärts fahren und dann anhalten und eine LED einschalten, muss sequenzielle Ausführung möglich sein, damit der Code der einzelnen Aktionen in dieser Reihenfolge angeordnet und zeitlich hintereinander ausgeführt wird.  

Parallele Ausführung bedeutet, dass mehrere Aktionen gleichzeitig ablaufen; sie ist für komplexere und höherwertige Verhaltensweisen nötig.  
Will man etwa den Gang eines zweibeinigen Roboters umsetzen, muss Programmierung mit paralleler Ausführung möglich sein, denn Gehen gelingt nur, wenn Füße und Beine des Roboters sich gleichzeitig bewegen.

Die Programme für die Roboterprogrammierung in RobomationLAB unterstützen beides gleichzeitig —  
auf Grundlage einer setup-/loop-Codestruktur, die der Hardware-Entwicklungsumgebung von Arduino ähnelt.

<BlockImage module="program/Editor" id="block-structure" />

Wenn du den Block Composer zum ersten Mal öffnest, erscheinen im Arbeitsbereich zwei leere Funktionsblöcke:  
der Block **Funktion Setup** steht für die Funktion `setup`, der Block **Funktion Schleife** für die Funktion `loop`.  

Die Blöcke werden in Echtzeit in Python-Code umgewandelt,  
und dieser Code hat die folgende Grundstruktur.  

```python
# Grundstruktur des Python-Codes
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Um einen Roboter zu steuern, setzt du `from robomation import *` an den Anfang des Codes und deklarierst den zu verwendenden Roboter als Instanz. (z. B. `hamster_s = HamsterS(0)`)


<br>

### Die Funktion setup {#setup}
Die Funktion setup wird in dem Moment, in dem der Code ausgeführt wird, genau einmal durchlaufen.  
In der Funktion setup schreibt man vor allem Code, der Variablen initialisiert oder Modi und Funktionen des Roboters vorbereitet.  
Steuert man zum Beispiel einen Roboter, der sich über Räder bewegt, kann man in der Funktion setup die Anfangsgeschwindigkeit der Räder festlegen.  

Ist innerhalb einer Funktion eine Zeitverzögerung nötig, kann man mit der Funktion `Utils.wait(...)` Code schreiben, der zeitlich hintereinander abläuft, als wäre er synchron.  
`Utils.wait(...)` wartet die angegebene Zeit (in Sekunden) und führt dann den nächsten Code aus — der Code wacht also nach einer festgelegten Zeit oder Aktion auf und läuft weiter.  
Nutzt man diese Möglichkeit, wird zusammen mit der Funktion loop, die die parallele Ausführung übernimmt, nicht nur einfache sequenzielle Ausführung, sondern auch sehr leistungsfähige Roboterprogrammierung möglich.

Im folgenden Beispiel fährt der Roboter HamsterS eine Sekunde vorwärts und dann eine Sekunde rückwärts.  
Würde man das in der parallel ausgeführten Funktion loop umsetzen, vermischten sich Zeitberechnung und Steuerungscode und der Code würde sehr kompliziert.  
Verwendet man stattdessen in der Funktion setup die Verzögerungsfunktion `Utils.wait`, lässt sich Code schreiben, der zeitlich hintereinander abläuft, als wäre er synchron.  
( Die Funktion `Utils.wait` wird später unter [Hilfsfunktionen (Utils)](#utils) noch genauer beschrieben. )

Beispielcode (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # beide Radgeschwindigkeiten auf 50 setzen und vorwärts fahren
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 1 Sekunde warten
    # beide Radgeschwindigkeiten auf -50 setzen und rückwärts fahren
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 1 Sekunde warten
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( Die Syntax für Roboterinstanzen und Methoden wird später unter [Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB](#grammar-syntax) noch genauer beschrieben. )


<br>

### Die Funktion loop {#loop}
Die Funktion loop unterstützt die parallele Ausführung und wird, während der Code läuft, etwa alle 10 ms wiederholt durchlaufen.  
In der Funktion loop schreibt man vor allem Code, der Werte von Variablen wiederholt setzt oder das Auftreten bestimmter Ereignisse am Roboter erkennt und verarbeitet.  

Im folgenden Beispiel ändern sich die Radgeschwindigkeit und die LED-Farbe des Roboters HamsterS im Laufe der Zeit.  
( Wird eine außerhalb von setup / loop deklarierte Variable innerhalb einer Funktion geändert, deklariert man sie dort mit dem Schlüsselwort `global`. )

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
    frame += 1  # bei jedem Aufruf der Funktion loop wird der Wert von frame um 1 erhöht

    # mit dem geänderten Wert von frame beide Radgeschwindigkeiten und die RGB-Werte beider LEDs setzen
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Die Syntax für Roboterinstanzen und Methoden wird später unter [Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB](#grammar-syntax) noch genauer beschrieben. )  

Im folgenden Beispiel wird die LED rot eingeschaltet, wenn der Körper des Roboters HamsterS leicht angetippt wird (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # in dem Moment, in dem ein Tap auftritt, wird das Ereignis erkannt
    if hamster_s.tap():               # bei erkanntem Ereignis True
        hamster_s.set_led_color('both', 'red')   # beide LEDs rot einschalten
    else:
        hamster_s.turn_off('both')               # beide LEDs ausschalten
```
( Die Syntax für die Ereigniserkennung (`tap()`) und weiteres wird später unter [Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB](#grammar-syntax) noch genauer beschrieben. )  

<br><br>

## Das grundlegende Syntaxsystem der Roboterprogrammierung in RobomationLAB {#grammar-syntax}
Beim Schreiben von Code in den Programmen für die Roboterprogrammierung von RobomationLAB gilt das folgende grundlegende Syntaxsystem.  
Die Robotersteuerung läuft über das Python-Paket `robomation`:  
Man erzeugt aus dem Roboter eine Instanz und ruft dann die Methoden dieser Instanz auf.

### Das Paket robomation importieren {#import-package}
Damit du die zur Robotersteuerung nötigen Klassen (Roboter) und Hilfsfunktionen (`Utils`) verwenden kannst, gehört die folgende Zeile an den Anfang des Codes.

```python
from robomation import *
```

<br>

### Eine Roboterinstanz erzeugen {#create-instance}
Deklariere den zu verwendenden Roboter als Instanz.  
Der Klassenname steht für die Art des Roboters, die Zahl in Klammern für den Index der Instanz (beginnt bei 0).

```python
hamster_s = HamsterS(0)   # ein HamsterS
```

Die Klassennamen und die Standard-Variablennamen der einzelnen Roboter sind:

| Roboter | Klassenname | Standard-Variablenname |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Verwendest du mehrere Roboter derselben Art, deklariere sie mit aufsteigendem Index 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Methoden zur Robotersteuerung {#control-methods}
Zum Steuern des Roboters rufst du die Methoden der Instanz auf.  
Die Methoden führen Aktionen des Roboters aus — Radgeschwindigkeit setzen, fahren, LED, Töne und mehr.

```python
hamster_s.set_wheel_speed('both', 50)    # beide Radgeschwindigkeiten setzen
hamster_s.move_distance(10, 'cm')        # 10 cm vorwärts fahren
hamster_s.set_led_color('both', 'red')   # beide LEDs auf rot
```

Welche Methoden ein Roboter bietet und welche Parameter sie haben, steht im Dokument des jeweiligen Roboters (z. B. „HamsterS").

<br>

### Sensoren und Zustände auslesen {#sensor}
Auch zum Auslesen von Sensorwerten oder Zuständen des Roboters ruft man Methoden auf; die Methode gibt den Wert zurück.

```python
left = hamster_s.floor('left')        # Wert des linken Bodensensors lesen
dist = hamster_s.proximity('right')   # Wert des rechten Näherungssensors lesen
```

<br>

### Ereignisse erkennen {#event}
Ereignisse, die durch Zustandsänderungen oder Veränderungen der Umgebung auftreten, erkennt man daran, dass  
die zugehörige Ereignismethode in dem Moment True zurückgibt, in dem das Ereignis auftritt.

```python
if hamster_s.tap():        # in dem Moment, in dem ein Tap auftritt, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Auf den Abschluss einer Aktion warten (wait) {#wait}
Methoden, die bis zum Abschluss Zeit brauchen — fahren, drehen, Töne abspielen — haben einen Parameter `wait`.
- `wait=True` (Standardwert): Es wird gewartet, bis die Aktion abgeschlossen ist, dann läuft der nächste Code.
- `wait=False`: Die Aktion wird gestartet und der nächste Code läuft sofort weiter.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # wartet, bis die Fahrt beendet ist
hamster_s.move_distance(10, 'cm', wait=False)   # startet die Fahrt und führt gleich den nächsten Code aus
```

<br>

### Hilfsfunktionen (Utils) {#utils}
Gemeinsame Funktionen, die von der Art des Roboters unabhängig sind — Zeitverzögerung, Töne abspielen, Protokollausgabe, Farben —, verwendest du über die Methoden der Klasse `Utils`.

```python
Utils.wait(1)              # 1 Sekunde warten
Utils.speak('Hallo')       # Text als Sprache (TTS) abspielen
Utils.log(0, '', '')       # Protokollausgabe in der Konsole
```

<br>
