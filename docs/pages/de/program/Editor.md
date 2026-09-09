---
title: Editor
---

# Editor

Der **Editor** ist der Bereich, in dem du mit **Blöcken** oder **Skriptcode** den Code zur Steuerung eines Roboters schreibst.  
Im Folgenden wird vorgestellt, wie man in der Umgebung für **Blockprogrammierung bzw. Skript-(Python-)Programmierung** jeweils programmiert und worauf zu achten ist.

## Block-Editor {#block-editor}

### Blockkategorien {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Der Bereich, in dem die von RobomationLAB bereitgestellten Blöcke nach **Kategorien** geordnet sind.  
Klickst du eine Kategorie an, siehst du die **Blockpalette** dieser Kategorie.  

Die standardmäßig vorhandenen Blockkategorien sind:  

- Logik
- Schleifen
- Mathematik
- Text
- Liste
- Farbe
- Audio
- Steuerung
- Variablen
- Funktionen
- Sonstiges

Fügst du darüber hinaus einen [**Roboter**](Menu#robot) oder eine [**Erweiterung**](Menu#extension) zum Programm hinzu, steht im Programm auch dessen eigene Blockpalette zur Verfügung.  

<br>

**⚙️ Hinweis**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategorien hinzugefügter Blöcke, die du nicht mehr brauchst, kannst du über **Rechtsklick → Entfernen** aus den Blockkategorien entfernen.

<br>

### Blockpalette {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Der Bereich, in dem alle Blöcke einer Kategorie versammelt sind.  
Die Blöcke der Blockpalette lassen sich per **Drag & Drop** in den Programmierbereich ziehen.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Hinweis**  
Willst du die Verwendung eines Blocks nachlesen, findest du über **Rechtsklick → Hilfe** zu jedem Block eine Hilfe, die seine Verwendung erklärt.  

<br>

### Programmierbereich {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Der Bereich, in dem du die aus der Blockpalette geholten Blöcke zusammensetzt.  


Die zusammengesetzten Blöcke werden in Echtzeit in **Python-Code** umgewandelt;  
führst du den Code aus, wird er ausgewertet und du kannst damit den Roboter bewegen und steuern.  

<br>

### Grundstruktur der Blöcke {#block-structure}

Beim Programmieren im Block-Editor ist die folgende Grundstruktur einzuhalten.

<BlockImage module="program/Editor" id="block-structure" /><br>

Der Block-Editor wertet den Code innerhalb der Funktionsblöcke **Funktion Setup** und **Funktion Schleife** aus und führt ihn aus.  
Du musst deinen Code also schreiben, indem du Blöcke in die Funktionsblöcke **Funktion Setup** und **Funktion Schleife** einsetzt.  

**Funktion Setup**  
Im Funktionsblock Funktion Setup definierst du die Aktionen, die beim Ausführen des Codes zu Beginn ausgeführt werden.  
Mit dem Block **warten** kannst du dafür sorgen, dass die Aktionen zeitlich hintereinander ablaufen.  

**Funktion Schleife**  
Im Funktionsblock Funktion Schleife definierst du die Aktionen, die während der Ausführung des Codes wiederholt ausgeführt werden.  
Die definierten Aktionen werden etwa alle 10 ms wiederholt ausgeführt.  

**⚙️ Hinweis**  
(Abgesehen von eigenen Funktionen, die du über die **Kategorie Funktionen** erstellt hast)  
Blöcke, die außerhalb der Funktionsblöcke **Funktion Setup** oder **Funktion Schleife** liegen, haben beim Ausführen des Codes keine Wirkung.  

<br>

### Blöcke verwenden {#block-usage}

**Einen Block hinzufügen**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Den Block, den du hinzufügen willst, **ziehst du aus der Blockpalette** und **lässt ihn im Editor fallen** — so wird er hinzugefügt.   
<br>

**Blöcke kopieren / einfügen**  

Es gibt zwei Wege, im Editor Blöcke zu kopieren und einzufügen.  

1. Wähle einen Block aus und drücke **Ctrl+C** — der ausgewählte Block wird **kopiert**.  
Drückst du **Ctrl+V**, wird der zuletzt kopierte Block in den Editor **eingefügt**.  

2. Wähle einen Block aus und drücke im Menü **Bearbeiten** auf **„Kopieren Ctrl+C"** — der ausgewählte Block wird **kopiert**.  
Drückst du im Menü **Bearbeiten** auf **„Einfügen Ctrl+V"**, wird der zuletzt kopierte Block in den Editor **eingefügt**.

<br>

**Blöcke löschen**  

Es gibt drei Wege, im Editor Blöcke zu löschen.

1. Wähle einen Block aus und drücke **Backspace** — der ausgewählte Block wird gelöscht.<br>  

2. Den Block, den du löschen willst, **ziehst du im Editor** und **lässt ihn auf den Blockkategorien fallen** — so wird er gelöscht.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Den Block, den du löschen willst, **ziehst du im Editor** und **lässt ihn auf dem Papierkorb fallen** — so wird er gelöscht.  
Gelöschte Blöcke kannst du im **Papierkorb** wieder ansehen.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Mehrere Blöcke gleichzeitig auswählen**  

Es gibt zwei Wege, im Editor mehrere Blöcke gleichzeitig auszuwählen.

1. Hältst du die **Shift**-Taste gedrückt und ziehst über den Arbeitsbereich oder klickst die Blöcke einzeln an,  
kannst du mehrere Blöcke gleichzeitig auswählen.  

2. Über die **Häkchen-Schaltfläche** unten rechts im Arbeitsbereich schaltest du den Modus „mehrere Blöcke auswählen" ein oder aus.  
Ist die Schaltfläche farbig gefüllt, ist der Modus eingeschaltet.  
Ist die Schaltfläche nicht farbig gefüllt, ist der Modus ausgeschaltet.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Solange der Modus „mehrere Blöcke auswählen" eingeschaltet ist, kannst du nur Blöcke auswählen.   
Willst du die ausgewählten Blöcke gemeinsam verschieben oder bearbeiten, musst du die Auswahl abschließen und den Modus ausschalten.  

<br>

**Weitere Optionen**

Klickst du einen Block außerdem **mit der rechten Maustaste** an,  
findest du verschiedene weitere Optionen wie **Block einklappen/ausklappen, aktivieren/deaktivieren und Hilfe**.  

<br>

## Python-Editor {#python-editor}

### Code-Palette {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Der Bereich, in dem die für die Roboterprogrammierung nötigen **Grundfunktionen** sowie die **Python-Codes** der Roboter und Erweiterungen nach **Kategorien** geordnet sind.  


Die Codekategorien der Grundfunktionen (Code) sind:  

- Logik (logic)
- Schleifen (loops)
- Mathematik (math)
- Text (text)
- Liste (lists)
- Farbe (color)
- Audio (audio)
- Steuerung (control)

Die Codes der Grundfunktionen erfüllen dieselben Aufgaben wie die Grundblöcke im Block-Editor.  

<br>

**⚙️ Hinweis**  
Wie man mit der Code-Palette im Python-Editor programmiert, steht unter [**Die Code-Palette verwenden**](#python-codes-usage).

<br>

### Code-Editor {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Der Bereich, in dem du den Code zur Steuerung eines Roboters schreibst.  


Wählst du unter [**Editor-Einstellung**](Menu#editor-settings) den Editor **Python**, kannst du Python-Code schreiben.

<br>

### Grundstruktur des Codes {#python-structure}

Beim Programmieren im Code-Editor ist die folgende Grundstruktur einzuhalten.

```python
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

Der Code-Editor wertet den Code innerhalb der Funktionen **setup** und **loop** aus und führt ihn aus.  
Du musst deinen Code also innerhalb der Funktionen **setup** und **loop** schreiben.  
Außerdem gehört zur Steuerung eines Roboters `from robomation import *` an den Anfang des Codes, und der zu verwendende Roboter muss als Instanz deklariert werden.

**setup**  

In der Funktion setup definierst du die Aktionen, die beim Ausführen des Codes zu Beginn ausgeführt werden.  
Mit der Funktion **Utils.wait** kannst du dafür sorgen, dass die Aktionen zeitlich hintereinander ablaufen.  

**loop**  
In der Funktion loop definierst du die Aktionen, die während der Ausführung des Codes wiederholt ausgeführt werden.  
Die definierten Aktionen werden etwa alle 10 ms wiederholt ausgeführt.  


<br>

### Die Code-Palette verwenden {#python-codes-usage}

Im Folgenden wird anhand einfacher Beispiele beschrieben, **wie man die Code-Palette beim Programmieren verwendet**.  

### Den gewünschten Code finden {#python-codes-find}

Die Code-Palette bietet viele Funktionen und Codes, die man für die Roboterprogrammierung braucht.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Sieh dir die Einträge in der Kategorie **Code** an — bei manchen findest du das Symbol <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Klickst du den Eintrag **Logik** einmal an, wird das Symbol zu <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> und die darin liegenden **Untereinträge** klappen auf.  
Einen Eintrag mit Untereinträgen nennt man „**Kategorie**".  

Fehlt bei einem Eintrag das Symbol <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — wie bei **ternär** in der Kategorie **Logik** —, bedeutet das, dass es darin **keine weiteren Untereinträge** gibt.  
Einen Eintrag ohne Untereinträge nennt man „**Code**".  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Klickst du eine aufgeklappte Kategorie erneut an, wird das Symbol wieder zu <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> und die Untereinträge werden ausgeblendet.  

So kannst du den Kategorien folgen und in der Code-Palette den gewünschten Code finden.

<br>

### Code in den Editor einfügen {#python-codes-insert}

So fügst du Code in den Editor ein.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Steht links vom Namen eines Eintrags das Symbol <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline />, bedeutet das, dass es für diesen Eintrag keine wählbaren **Codeoptionen** gibt.  
Das trifft meist auf die **Kategorie**-Einträge mit Untereinträgen zu.

Steht links vom Namen eines Eintrags das Symbol <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline />, bedeutet das, dass für diesen Eintrag **Codeoptionen** wählbar sind.  
Das trifft meist auf die **Code**-Einträge ohne Untereinträge zu.

Klickst du den Code, den du in den Editor einfügen willst, mit der **rechten Maustaste** an, siehst du die wählbaren Optionen.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Klickst du einen **Code**-Eintrag mit der rechten Maustaste an, findest du — ohne Unterschied zwischen Grundfunktionen und den Codes der Roboter und Erweiterungen — dieselben Optionen:

- **Code einfügen**: fügt den ausgewählten Code an der Cursorposition im Editor ein.
- **Hilfe**: zeigt die Hilfe, die die Verwendung dieses Codes erklärt.
- **Abbrechen**: schließt das Optionsmenü.

Bei den Codes der Roboter und Erweiterungen wird mit **Code einfügen** ein Methodenaufruf der jeweiligen Roboterinstanz eingefügt.  
( z. B. `set_wheel_speed` von HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Hinweis**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Codekategorien der hinzugefügten Roboter bzw. Erweiterungen, die du nicht mehr brauchst,  
kannst du über **Rechtsklick → Entfernen** aus der Code-Palette entfernen.

<br>
