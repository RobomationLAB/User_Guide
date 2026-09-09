---
title: Obere Menüleiste
---

# Obere Menüleiste

In der **oberen Menüleiste** sind die häufig genutzten Funktionen des Programms versammelt — den Dongle und den Roboter verbinden, Dateien speichern und öffnen und mehr.  
Im Folgenden werden die Funktionen der einzelnen Menüs der Reihe nach beschrieben. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Das Logo des Programms.  
Ein Klick auf das Logo lädt die Seite neu. 

Ist der **Block-Editor** aktiv, zeigt das Logo den Text **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Ist der **Python-Editor** aktiv, zeigt das Logo den Text **Script Composer**.  

<br>

## Dongle suchen {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Hier kannst du den **Dongle für die Kommunikation mit dem Roboter suchen und mit dem Programm verbinden**.

Um im Programm einen Roboter zu steuern, muss zuerst der Dongle für die Kommunikation mit dem Roboter mit dem Programm verbunden werden.  
Diesen Vorgang nennt man **Pairing**. 

Drückst du die Schaltfläche **Dongle**, erscheint die Liste der am PC verfügbaren Dongles.  
Wähle in der Liste den gewünschten Dongle aus und klicke auf **Verbinden** — der Dongle wird mit dem Programm verbunden.  

### Den Verbindungszustand des Dongles prüfen {#dongle-status}

Ein Dongle, der einmal mit dem Programm verbunden war, wird bei der nächsten Nutzung des Programms automatisch verbunden.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Ist der Dongle ordnungsgemäß mit dem Programm verbunden, wechselt das Symbol zu **Hellblau**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Zeigt der Browser-Tab ein Symbol wie im folgenden Bild, ist der Dongle verbunden.  

<br>

**⚠️ Achtung**  

Ist der Dongle bereits mit einem anderen Programm oder einer anderen Seite verbunden, kann er nicht mit diesem Programm verbunden werden.  
Suche in diesem Fall das Programm, mit dem der Dongle verbunden ist, trenne die Verbindung dort, kehre auf diese Seite zurück und versuche es erneut.

<br>

## Roboter auswählen {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Hier kannst du **den im Programm zu verwendenden Roboter auswählen** und **die Informationen dieses Roboters samt seiner eigenen Blöcke bzw. Skriptcodes registrieren**. 

Um im Programm einen Roboter zu steuern, müssen zuerst die Informationen und die Blöcke des gewünschten Roboters zum Programm hinzugefügt werden.

<BlockImage module="program/Menu" id="robot-select" /><br>

Drückst du die Schaltfläche **Roboter**, zeigt ein Dialogfenster die Liste der im Programm verfügbaren Roboter.  

Wähle den gewünschten Roboter aus und klicke auf **Hinzufügen** — die Informationen dieses Roboters und seine eigenen Blöcke bzw. Skriptcodes werden im Programm registriert.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Wird ein Roboter hinzugefügt, entstehen die folgenden Einträge. 


- **Block Composer**: In der [**Blockpalette**](Editor#block-editor) links entstehen die eigenen **Blöcke** dieses Roboters 
- **Script Composer**: In der [**Code-Palette**](Editor#python-editor) links entstehen die eigenen **Skriptcodes** dieses Roboters

So lässt sich echte Roboter-Hardware — Sensoren, Motoren, LEDs und mehr — frei bewegen und steuern.  

<br>

**⚙️ Hinweis**

In RobomationLAB kannst du unabhängig von Art und Anzahl beliebig viele Roboter verbinden und verwenden.  

Willst du allerdings mehrere Roboter gleichzeitig verbinden und verwenden, müssen so viele Dongles mit dem Programm verbunden sein, wie du Roboter verwenden willst, und du musst ebenso viele Roboter zum Programm hinzufügen.  

<br>

## Erweiterung auswählen {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Erweiterungen sind Module, die **KI-basierte Zusatzfunktionen wie Spracherkennung, Bilderkennung und Bildanalyse** bereitstellen.  
Hier kannst du **die im Programm zu verwendende Erweiterung auswählen** und **die Informationen dieser Erweiterung samt ihrer eigenen Blöcke bzw. Skriptcodes registrieren**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Drückst du die Schaltfläche **Erweiterung**, erscheint ein Dialogfenster mit der Liste der im Programm verfügbaren Erweiterungen.  
- Spracherkennung
- Gesichtserkennung
- Detaillierte Gesichtserkennung
- Gesichtsausdruck
- Handerkennung
- Körpererkennung
- Objekterkennung
- Farberkennung
- ArUco-Marker-Erkennung
- Autonomes Fahren mit Kamera

Klickst du das gewünschte Modul an, werden — genau wie bei [**Roboter auswählen**](#robot) — die Informationen dieser Erweiterung und ihre eigenen Blöcke bzw. Skriptcodes im Programm registriert. 

Fügst du eine Erweiterung hinzu, die die Kamera verwendet — etwa **Gesichtserkennung** oder **Handerkennung** —,  
entsteht im Tab [**Vorschau – Kamera**](Preview#camera) ein Kameramodul und du kannst die Kamera mit dem Programm verbinden und verwenden.  

Brauchst du eine ausgewählte Erweiterung nicht mehr, kannst du sie über **Rechtsklick → Entfernen** aus der Liste entfernen.

<br>

## Ton {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Hier kannst du Töne für das Programmieren auswählen oder eigene Töne von deinem Rechner zum Programm hinzufügen.

### Einen Ton auswählen {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Drückst du die Schaltfläche **Ton**, erscheint ein Fenster, in dem du aus den vielen vom Programm bereitgestellten Tönen auswählen kannst.  
Folgende Funktionen stehen zur Verfügung.  
- Töne suchen
- ▶ Ton vorhören
- Ton zur Tonliste (linkes Panel) hinzufügen

### Zusatzfunktionen {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Klickst du unten links auf die Schaltfläche **Erweiterung** (rotes Kästchen) oder fährst mit der Maus darüber, erscheinen drei Optionen mit Zusatzfunktionen.  
Folgende Funktionen stehen zur Verfügung.
- Lokale Datei hinzufügen: fügt eine Audiodatei vom Rechner des Anwenders hinzu 
- Ton aufnehmen: nimmt selbst einen Ton auf und fügt ihn hinzu
- Zufälligen Ton hinzufügen: fügt einen zufällig aus der gesamten Tonliste gewählten Ton hinzu

### Töne beim Programmieren verwenden {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Töne, die zur Tonliste (linkes Panel) hinzugefügt wurden, kannst du beim Programmieren verwenden.

- Beim **Blockprogrammieren** wählst du den gewünschten Ton im Dropdown-Menü des Blocks **Ton abspielen**.  

- Beim **Skriptprogrammieren** wählst du den gewünschten Ton in den Unteroptionen der Funktion **„Ton abspielen"** in der Kategorie **Codes – Audio**.  

Beim Ausführen des Codes wird der gewählte Ton über die Lautsprecher des Rechners abgespielt.

<br>

## Beispiel {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Ist im Programm ein Roboter hinzugefügt, kannst du je Roboter einfache Beispiele laden und ausprobieren.

### Ein Beispiel auswählen {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Drückst du die Schaltfläche Beispiel, erscheint das oben gezeigte Fenster **Beispiel auswählen**.   
Über die **Kategorien** und die **Suche** findest du das gewünschte Beispiel schnell. 

### Ein Beispiel laden {#example-load}
1. Klicke auf das Menü **Beispiel**, öffne das Fenster **Beispiel auswählen** und wähle das gewünschte Beispiel. 
2. Das Fenster wird neu geladen und das Beispiel erscheint im Programmierbereich.   
3. Nach dem Laden kannst du ohne weitere Schritte die **Schaltfläche Ausführen (▶)** drücken und das Verhalten beobachten. 

<br>

## Bearbeiten {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Eine Funktion, mit der du Arbeitsschritte zurücknehmen oder wiederholen kannst.
- Kopieren (Ctrl+C): kopiert den ausgewählten Block oder Code.
- Einfügen (Ctrl+V): fügt den kopierten Block oder Code in den Arbeitsbereich ein.
- Rückgängig (Ctrl+Z): nimmt den letzten Schritt zurück.
- Wiederholen (Ctrl+Y): führt den zurückgenommenen Schritt erneut aus. 

<br>

## Datei {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Hier verwaltest du Dateien — neuen Code anlegen, geschriebenen Code als Datei speichern und wieder öffnen.

- Neu  
Setzt den gerade geschriebenen Code zurück und legt neuen Code an.

- Projekt speichern  
Speichert die Datei des gerade bearbeiteten Projekts.  
Die Datei wird im Ordner „Downloads" des Anwenders gespeichert, die Dateiendung ist „.block".

- Python-Code exportieren  
Extrahiert den Python-Code des gerade bearbeiteten Projekts und speichert ihn als Datei.  
Die Datei wird im Ordner „Downloads" des Anwenders gespeichert, die Dateiendung ist „.py".  
Die gespeicherte Datei lässt sich in einer externen Python-Umgebung wie VSCode öffnen und ausführen.

- Projekt öffnen  
Öffnet eine Projektdatei oder eine Python-Codedatei vom Rechner des Anwenders.  
Öffnen lassen sich die Dateiendungen „.block" und „.py".  
Eine „.block"-Datei wird im Block-Editor geöffnet, eine „.py"-Datei im Python-Editor.  
Beachte beim Öffnen einer „.py"-Datei: Passt sie nicht zum Codeformat des Block Composer oder enthält sie Syntaxfehler, kann sie möglicherweise nicht richtig geöffnet werden.

<br>

## Code ausführen / stoppen {#run-stop}

### Ausführen (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Wertet den im aktiven Editor geschriebenen Blockcode oder Skriptcode aus und führt ihn aus.  

Je nach geschriebenem Code kannst du damit die mit dem Programm verbundenen Roboter steuern.  
Während der Code läuft, kann der geschriebene Code nicht bearbeitet werden.

### Stoppen (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Stoppt die Ausführung des Codes.


<br>

## KI-Programmierung {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Drückst du in der oberen Menüleiste die Schaltfläche **KI-Programmierung**, öffnet sich rechts das Panel des KI-Chatbots.  
Du kannst mit dem in RobomationLAB eingebauten **KI-Chatbot** sprechen und gemeinsam mit der KI programmieren.

Folgende Funktionen stehen zur Verfügung.
- Du kannst frei Fragen zum Programmieren stellen — wie man Code schreibt und ändert, zur Syntax, zu Begriffen und mehr.
- **Tritt beim Ausführen des Codes ein Fehler auf**, kannst du die KI nach dem Grund und der Lösung fragen und das Problem schnell beheben.
- Von der KI vorgeschlagenen Code kopierst du bequem über die Schaltfläche rechts am Codeblock.
- Der Gesprächsverlauf wird gespeichert, sodass du das Gespräch fortsetzen kannst; du kannst auch ein **neues Gespräch** beginnen.
- Durch Ziehen am linken Rand des Panels kannst du dessen Breite anpassen.

<br>

## Code kopieren {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Hier kannst du den im aktiven Editor geschriebenen Code in die Zwischenablage kopieren.  

### Block Composer (Blockprogrammierung) {#copy-block}

Es wird der Python-Code kopiert, der im Tab **[Python-Vorschau](Preview#python-preview)** angezeigt wird.

### Script Composer (Python) {#copy-python}
Der im Python-Editor geschriebene Code wird unverändert kopiert.  

Den kopierten Code kannst du mit Ctrl+V an der gewünschten Stelle einfügen.

<br>

## Editor-Einstellung {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Du kannst zwischen **Block** und **Python** den gewünschten Editor wählen und darin programmieren.  

Auch nach dem Wechsel des Editors bleibt der zuvor geschriebene Code erhalten und du kannst jederzeit weiterprogrammieren. 

**※ Der Block-Editor und der Python-Editor entsprechen einander eins zu eins; beim Wechsel wird der geschriebene Code jeweils umgewandelt und fortgeführt.**

### Block-Editor {#editor-settings-block}
Wählst du Block, wechselt das Logo zu **Block Composer**.  
Die im Block-Editor gebauten Blöcke werden in Echtzeit in Python-Code umgewandelt; das Ergebnis siehst du im Tab **Vorschau – Python-Vorschau**.  

### Python-Editor {#editor-settings-python}
Wählst du Python, wechselt das Logo zu **Script Composer**.  
Der im Python-Editor geschriebene Code wird beim Wechsel zurück zum **Block-Editor** in Blöcke umgewandelt.  

> Die Umwandlung Python → Blöcke gelingt allerdings nur bei Code, der sich als Blöcke darstellen lässt.  
> Bei fehlerhafter Syntax oder bei Code, der nicht in Blöcke umgewandelt werden kann, kann der Wechsel zum Block-Editor ausbleiben; in diesem Fall wird auch der Grund des Fehlschlags angezeigt.

<br>

## Einstellungen {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Hier nimmst du die Grundeinstellungen des Programms vor.

### Sprache {#settings-language}
Ändert die im Programm angezeigte Sprache (das Land).  
Du kannst aus insgesamt 21 Sprachen die gewünschte auswählen.

### Dongle {#settings-dongle}
- Trennen: trennt die Verbindung aller mit dem Programm verbundenen Dongles.
- Verbinden: verbindet den Dongle erneut mit dem Programm.

### Zurücksetzen {#settings-reset}
- Programm zurücksetzen: Alle im Programm registrierten Daten (Roboterinformationen, Blöcke bzw. Skriptcodes, Einstellungen usw.) werden zurückgesetzt.

<br>

## Support {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Hier findest du die Anleitungen und externen Materialien, die du zur Nutzung des Programms brauchst.  

- Tutorial: bietet ein Tutorial für alle, die das Programm zum ersten Mal verwenden.
- Hilfe: hier siehst du direkt im Programm die Verwendung und Beispiele der Blöcke und Python-Codes.
- Benutzerhandbuch: öffnet die Wiki-Seite des Benutzerhandbuchs von RobomationLAB.  
Sie beschreibt die Bestandteile und die Verwendung des Programms sowie die Funktionen und die Syntax der einzelnen Blöcke bzw. Skriptcodes im Detail.
- Robomation Lab: öffnet die Hauptseite von RobomationLAB.
- Startseite: öffnet die offizielle Website des Unternehmens Robomation.
- YouTube: öffnet die YouTube-Seite von Robomation.
- Onlineshop: öffnet den Onlineshop von Robomation.
- Info: hier siehst du Programmversion und Änderungsverlauf, Nutzungsbedingungen, Datenschutzerklärung und mehr.
- Kontakt: hier kannst du Fragen zur Nutzung des Programms oder Fehler melden.

<br>
