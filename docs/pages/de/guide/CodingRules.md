---
title: Programmierregeln
---

# Programmierregeln

Dieses Dokument beschreibt die Programmierregeln, die beim Programmieren von Robotern in RobomationLAB einzuhalten sind.

> **Hinweis**: Die Skriptprogrammierung arbeitet **ausschließlich mit Python**; Blöcke werden eins zu eins in Python-Code umgewandelt, der das Python-Paket `robomation` verwendet.

> **Zur Reihenfolge**: Zuerst die gemeinsamen Kernregeln (1~2), dann die Regeln für Blockcode (3~5), dann die Regeln für Python-Skriptcode (6~11). Sowohl beim Erzeugen von Blockcode als auch von Python-Code sind sie wichtig einzuhalten.

<br>

## 1. Einschränkung der 1-zu-1-Umwandlung Blöcke ↔ Python {#1}
Der Block-Editor und der Python-Editor entsprechen einander eins zu eins und werden in Echtzeit in beide Richtungen umgewandelt.

- Blöcke → Python: Blöcke werden immer in korrekten Python-Code umgewandelt.
- Python → Blöcke: Die Umwandlung gelingt nur bei **Code, der sich als Blöcke darstellen lässt**.

Schreibst du also im Python-Editor Code wie den folgenden, kann der Wechsel von Python zum Block-Editor ausbleiben;  
in diesem Fall wird auch der Grund angezeigt, weshalb der Wechsel fehlgeschlagen ist.

1) Code mit Python-Syntaxfehlern
2) Code, der Funktionen, Methoden oder Syntax verwendet, denen kein Block entspricht (die also in den Umwandlungsregeln nicht definiert sind)

Damit der Wechsel zum Block-Editor stets funktioniert,  
musst du den Code innerhalb der Klassen, Methoden, Funktionen und des unterstützten Syntaxumfangs schreiben, die in diesem Dokument und in den Dokumenten der einzelnen Roboter definiert sind.

<br>

## 2. Regeln für die Codeangabe {#2}
Verwendet werden dürfen nur die Klassen, Methoden und Funktionen, die im **Handbuch der Python-API von robomation** und im **Dokument der Umwandlungsregeln Blöcke ↔ Python** aufgeführt sind.  
Zur Robotersteuerung neue, in den genannten Dokumenten nicht definierte Steuerungsmethoden zu erzeugen und zu verwenden, ist strikt untersagt.
Nur wenn der Anwender ausdrücklich das Erzeugen einer neuen Funktion verlangt, ist es erlaubt.

Hilfsvariablen, die in den Umwandlungsbeispielen der genannten Dokumente nicht vorkommen (also zusätzliche Variablen neben der Variablen für die Roboterinstanz), dürfen nur dann deklariert werden, wenn der Anwender das Erzeugen einer Variablen verlangt.  
Außerdem müssen die Argumente einer Methode zwingend als Literale geschrieben werden.  

```python
# richtiges Beispiel
hamster_s.set_wheel_speed('both', 100)

# falsches Beispiel — eine im API-Handbuch nicht aufgeführte Funktion
hamster_s.set_wheel('both', 100)

# falsches Beispiel — Deklaration einer beliebigen Variablen
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Grundstruktur des Blockcodes {#3}
Bei jeder Angabe von Blockcode gehören die obersten Funktionsblöcke Funktion Setup und Funktion Schleife, die als Einsprungpunkt des Programms dienen, immer als Grundstruktur dazu.  
Mit dieser Regel hat künftig jeder Blockcode die folgende Grundstruktur.

| Blockstruktur (Block Composer) | Angabe (als Text) |
| --- | --- |
| Funktion Setup | Funktion Setup |
| (innere Blöcke) | (innere Blöcke) |
| Funktion Schleife | Funktion Schleife |
| (innere Blöcke) | (innere Blöcke) |

<br>

## 4. Format des Blockcodes (Regeln für Zeilenumbruch und Einrückung) {#4}
- Die obersten Blöcke (Funktion Setup, Funktion Schleife usw.) werden linksbündig ausgerichtet.
- Jeder Befehlsblock muss durch ein Zeilenumbruchzeichen getrennt werden, sodass pro Zeile nur ein Block ausgegeben wird.
- Untergeordnete Blöcke, die in einem Block mit innerem Ausführungsbereich stehen (falls, wiederhole, Funktionsdefinition usw.), werden eingerückt, damit die Hierarchie klar erkennbar ist.

<br>

## 5. Regeln für innere Blöcke und die Darstellung von Bedingungen {#5}
Der Auswahlwert eines Dropdown-Menüs oder ein Eingabewert entspricht einem funktionalen Argument des Blocks und wird an der Stelle, an der dieser Wert im Text des Blocks steht, direkt in eckigen Klammern ([]) eingefügt.  
Das dient dazu, den festen Text des Blocks und den vom Anwender gewählten oder eingegebenen Wert zusammen visuell wiederzugeben.

Jeder Blockcode muss die feste Bezeichnung des Blocks, die Auswahlwerte der Dropdown-Menüs und die vom Anwender eingegebenen Werte alle in eckigen Klammern ([]) enthalten,  
sodass die tatsächliche Form der Blöcke im Block Composer als Text möglichst genau wiedergegeben wird.  

| Blockstruktur (Block Composer) | Angabe (als Text) |
| --- | --- |
| falls [Bedingung] mache [Befehl] sonst [Befehl] | falls [Bedingung] mache [Befehl] sonst [Befehl] |
| RaccoonBot: auf Steuerungsmodus [Geschwindigkeit] setzen | RaccoonBot: auf Steuerungsmodus [Geschwindigkeit] setzen |
| RaccoonBot: Geschwindigkeit von Gelenk [1] auf [100] setzen | RaccoonBot: Geschwindigkeit von Gelenk [1] auf [100] setzen |

<br>

## 6. Grundstruktur des Skriptcodes {#6}
Bei jeder Angabe von Skriptcode (Python) gehören die Funktionen setup() und loop(), die als Einsprungpunkt des Programms dienen, immer als Grundstruktur dazu.  
Außerdem gehört `from robomation import *` an den Anfang des Codes, damit die zur Robotersteuerung nötigen Klassen und Hilfsfunktionen verfügbar sind, und der zu verwendende Roboter wird als Instanz deklariert.  
Mit dieser Regel hat künftig jeder Skriptcode (Python) die folgende Grundstruktur.

```python
# Grundstruktur des Python-Codes
from robomation import *

# (falls ein Roboter verwendet wird, als Instanz deklarieren, Beispiel)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Format des Skriptcodes (Regeln für Zeilenumbruch und Einrückung) {#7}
- Die obersten Funktionen (setup, loop usw.) werden linksbündig ausgerichtet.
- Die Einrückung nach einem Zeilenumbruch richtet sich zwingend nach **einem Tabulator (`\t`)**. (wie die Einrückung im Editor)

<br>

## 8. Regeln zur Robotersteuerung (Instanz / Methoden) {#8}
Zur Steuerung eines Roboters sind die folgenden Regeln einzuhalten.  

1) `from robomation import *` gehört an den Anfang des Codes.
2) Der zu verwendende Roboter wird als Instanz deklariert. Als Variablennamen nimmt man den für den Roboter festgelegten Standardnamen, der Index beginnt bei 0.
3) Der Roboter wird gesteuert, indem man die Methoden der deklarierten Instanz aufruft.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Verwendest du mehrere Roboter derselben Art, deklariere sie mit aufsteigendem Index 0, 1, 2 … (z. B. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Beim Setzen der Radgeschwindigkeit, beim Fahren und Ähnlichem erledigen die Methoden die nötige Initialisierung intern (etwa das Aufräumen eines vorherigen Fahrbefehls) — du musst dafür keinen eigenen Vorbereitungscode schreiben.

<br>

## 9. Regeln zum Aufruf von Hilfsfunktionen {#9}
Gemeinsame Hilfsfunktionen — Zeitverzögerung, Töne abspielen, Protokollausgabe, Farben — rufst du über die Methoden der Klasse `Utils` auf.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Die ausführliche Liste der Hilfsfunktionen findest du in den folgenden Dokumenten.
- [Farbe](../common/Color)
- [Audio](../common/Audio)
- [Steuerung](../common/Control)

<br>

## 10. Regel zum Vorrang roboterspezifischer Methoden {#10}
Beim Steuern der Roboter-Hardware (Radgeschwindigkeit, LED, Töne usw.)  
sind die eigenen Methoden der Roboterinstanz (z. B. „HamsterS") den gemeinsamen Hilfsfunktionen vorzuziehen.

Soll etwa ein Ton über den Roboter ausgegeben werden,  
ist die Methode `sound_clip()` der Instanz „HamsterS" der Hilfsfunktion `Utils.play_sound()` vorzuziehen.

```python
# der Ton kommt aus dem Roboter HamsterS. (empfohlen)
hamster_s.sound_clip('beep')

# der Ton kommt aus dem PC / Tablet / Mobilgerät. (nicht empfohlen)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regeln für Imports {#11}
Beim Schreiben von Python-Code werden nur die Module importiert, die zur Ausführung des Codes nötig sind.
- Zur Robotersteuerung gehört `from robomation import *` grundsätzlich an den Anfang des Codes.
- Bei Code, der `math.` verwendet, wird automatisch `import math` ergänzt, bei Code mit `random.` entsprechend `import random`.
- Sonstige, nicht benötigte Module werden nicht importiert.
