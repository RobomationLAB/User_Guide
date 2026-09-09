---
title: Voorbeeld
---

# Voorbeeld

Het **voorbeeld** is het gebied waarin je de **verbindingstoestand van de robots** controleert en dat je bij het programmeren ondersteunt — met code, camera, console en meer.  
Hieronder worden de functies van de afzonderlijke tabbladen beschreven.

## Verbindingen {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

In het tabblad Verbindingen zie je de informatie van de robots die op dit moment verbonden zijn.   
Klik je op **Realtime sensorwaarde tonen**, dan kun je de sensorwaarden van de robot als grafiek of als getal in realtime bekijken.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Je kunt de sensor kiezen die je wilt bekijken; welke sensorsoorten worden ondersteund, hangt van de robot af.  
Afhankelijk van de gekozen sensor passen de grafiek en de weergave van de gegevens zich automatisch aan de waarden van die sensor aan. 

2. Je kunt kiezen met welk interval in seconden de sensorwaarden worden bekeken of vastgelegd.  
Afhankelijk van het gekozen interval verandert de maximale tijdspanne waarover gegevens kunnen worden vastgelegd en in de grafiek kunnen worden weergegeven. 
3. Ga je met de muis over de sensorgrafiek, dan zie je tegelijk de sensorwaarde op dat moment in realtime. 
4. Opname starten/stoppen: legt de sensorgegevens vast. 
5. Exporteren: slaat de vastgelegde sensorgegevens (.csv) en het beeld van de grafiek (.png) als bestanden op.  
Deze functie is pas beschikbaar nadat er gegevens zijn vastgelegd. 
6. Momentopname: slaat het huidige beeld van de grafiek (.png) in realtime op.  
Zo kun je de veranderingen van de sensorwaarden vastleggen en het vastgelegde gegevensbestand en het beeld van de grafiek als bestanden opslaan.    

<br>

## Python-voorbeeld {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

In het Python-voorbeeld zie je in realtime hoe het toevoegen of verwijderen van blokken zich in **Python**-code omzet.  
Omdat je tegelijk volgt hoe blokken code worden, leer je de syntaxis gemakkelijker. 

※ Het Python-voorbeeld is er alleen in de **blokeditor**.  
In de Python-editor schrijft de gebruiker de code zelf, daarom is er daar geen voorbeeld.

<br>

## Camera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

In het tabblad Camera zie je het beeld van de camera die op de pc is aangesloten in realtime.  

Deze functie is alleen actief **als je een uitbreiding aan het programma hebt toegevoegd die de camera gebruikt**; in het tabblad Camera ontstaat dan een cameramodule.  

In elke cameramodule kun je:
- een van de op de pc beschikbare camera's kiezen en het beeld daarvan tonen.
- met de knop **Aan / Uit** het camerabeeld tonen of stilzetten.
- de **resolutie van de camera** wijzigen.

<br>

## Console {#console}

In het tabblad Console zie je in realtime de log-meldingen en de grafieken (Scope) die tijdens het uitvoeren van het programma worden uitgevoerd.  
Dit tabblad dient voor debuggen, het volgen van sensorwaarden, grafiekgebaseerde analyse en dergelijke.  

### Log {#console-log}
Met het blok **log uitvoeren** kun je samen met een opgegeven tag een tekst of getalwaarde in het loggebied van de console uitvoeren.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Grafiek {#console-scope}

Met het blok **grafiek uitvoeren** kun je getalwaarden per tag als **realtimegrafiek** weergeven.  
Via het minimum, het maximum en de kleur van de grafiek kun je de veranderingen van de gewenste waarden overzichtelijk volgen. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
