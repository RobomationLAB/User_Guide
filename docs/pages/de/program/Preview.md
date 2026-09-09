---
title: Vorschau
---

# Vorschau

Die **Vorschau** ist der Bereich, in dem du den **Verbindungszustand der Roboter** prüfst und der dich beim Programmieren unterstützt — mit Code, Kamera, Konsole und mehr.  
Im Folgenden werden die Funktionen der einzelnen Tabs beschrieben.

## Verbindungen {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Im Tab Verbindungen siehst du die Informationen der aktuell verbundenen Roboter.   
Klickst du auf **Echtzeit-Sensorwert anzeigen**, kannst du die Sensorwerte des Roboters als Graph oder als Zahl in Echtzeit ansehen.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Du kannst den anzuzeigenden Sensor auswählen; welche Sensorarten unterstützt werden, hängt vom Roboter ab.  
Je nach gewähltem Sensor passen sich Graph und Datendarstellung automatisch an die Werte dieses Sensors an. 

2. Du kannst wählen, in welchem Sekundenintervall die Sensorwerte angezeigt bzw. aufgezeichnet werden.  
Je nach gewähltem Intervall ändert sich die maximale Zeitspanne, über die Daten aufgezeichnet und im Graphen dargestellt werden können. 
3. Fährst du mit der Maus über den Sensorgraphen, siehst du zugleich den Sensorwert zum jeweiligen Zeitpunkt in Echtzeit. 
4. Aufzeichnung starten/stoppen: zeichnet die Sensordaten auf. 
5. Exportieren: speichert die aufgezeichneten Sensordaten (.csv) und das Bild des Graphen (.png) als Dateien.  
Diese Funktion ist erst nach dem Aufzeichnen von Daten verfügbar. 
6. Momentaufnahme: speichert das aktuelle Bild des Graphen (.png) in Echtzeit.  
So kannst du die Änderungen der Sensorwerte aufzeichnen und die aufgezeichnete Datendatei sowie das Bild des Graphen als Dateien speichern.    

<br>

## Python-Vorschau {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

In der Python-Vorschau siehst du in Echtzeit, wie sich das Hinzufügen oder Entfernen von Blöcken in **Python**-Code umsetzt.  
Weil du zugleich verfolgst, wie Blöcke zu Code werden, lernst du die Syntax leichter. 

※ Die Python-Vorschau gibt es nur im **Block-Editor**.  
Im Python-Editor schreibt der Anwender den Code selbst, deshalb gibt es dort keine Vorschau.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Im Tab Kamera siehst du das Bild der am PC angeschlossenen Kamera in Echtzeit.  

Diese Funktion ist nur aktiv, **wenn du eine Erweiterung zum Programm hinzugefügt hast, die die Kamera verwendet**; im Tab Kamera entsteht dann ein Kameramodul.  

In jedem Kameramodul kannst du:
- eine der am PC verfügbaren Kameras auswählen und ihr Bild anzeigen.
- über die Schaltfläche **Ein / Aus** das Kamerabild anzeigen oder anhalten.
- die **Auflösung der Kamera** ändern.

<br>

## Konsole {#console}

Im Tab Konsole siehst du in Echtzeit die Protokoll-(Log-)Meldungen und die Oszilloskop-(Scope-)Graphen, die während der Programmausführung ausgegeben werden.  
Dieser Tab dient dem Debuggen, dem Beobachten von Sensorwerten, der graphbasierten Analyse und Ähnlichem.  

### Protokoll {#console-log}
Mit dem Block **Protokoll ausgeben** kannst du zusammen mit einem angegebenen Tag einen Text oder Zahlenwert im Protokollbereich der Konsole ausgeben.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Oszilloskop {#console-scope}

Mit dem Block **Oszilloskop ausgeben** kannst du Zahlenwerte je Tag als **Echtzeit-Graph** darstellen.  
Über Minimum, Maximum und Farbe des Graphen kannst du die Änderungen der gewünschten Werte anschaulich verfolgen. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
