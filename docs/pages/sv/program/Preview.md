---
title: Förhandsvisning
---

# Förhandsvisning

**Förhandsvisningen** är området där du kontrollerar **robotens anslutning** och får hjälp med robotprogrammeringen genom kod, kamera, konsol med mera.  
Nedan beskrivs vad du kan göra på varje flik.

## Anslutningar {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

På fliken Anslutningar ser du information om de robotar som är anslutna just nu.   
När du klickar på **Visa sensorvärdet i realtid** kan du följa robotens sensorvärden i realtid, som graf eller siffror.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Här väljer du vilken sensor du vill titta på; vilka sensorer som stöds skiljer sig mellan robotarna.  
Grafen och hur data visas anpassas automatiskt efter den valda sensorns värden. 

2. Här väljer du med hur många sekunders mellanrum sensorvärdet ska läsas av eller spelas in.  
Det valda intervallet avgör hur länge data som mest kan spelas in och visas i grafen. 
3. Om du håller muspekaren över sensorgrafen ser du samtidigt sensorvärdet vid just den tidpunkten i realtid. 
4. Starta/stoppa inspelningen: spelar in sensordata. 
5. Exportera: sparar de inspelade sensordata (.csv) och grafbilden (.png) som filer.  
Funktionen går bara att använda när du har spelat in data. 
6. Ta bild: sparar den aktuella grafbilden (.png) i realtid.  
Du kan spela in hur sensorvärdena ändras och spara både datafilen och grafbilden som filer.    

<br>

## Python-förhandsvisning {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

I Python-förhandsvisningen ser du i realtid hur blocken omvandlas till **Python**-kod när du lägger till eller tar bort dem.  
Genom att samtidigt se hur blocken blir kod lär du dig programmeringens syntax lättare. 

※ Python-förhandsvisningen finns bara i **blockredigeraren**.  
I Python-redigeraren skriver du koden själv, och därför finns ingen förhandsvisning där.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

På fliken Kamera ser du bilden från datorns kamera i realtid.  

Funktionen aktiveras bara **när du har lagt till ett tillägg som använder kameran i programmet**, och då skapas en kameramodul på fliken Kamera.  

I varje kameramodul kan du göra följande.
- Välja en av de kameror som är tillgängliga på datorn och visa dess bild.
- Visa eller stoppa kamerabilden med knappen **På / Av**.
- Ändra **kamerans upplösning**.

<br>

## Konsol {#console}

På fliken Konsol ser du i realtid de loggmeddelanden och grafer som skrivs ut medan programmet körs.  
Fliken används för felsökning, för att följa sensorvärden och för grafbaserad analys.  

### Logg {#console-log}
Med blocket **skriv till loggen** kan du skriva ut text eller tal tillsammans med en angiven tagg i konsolens loggområde.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Graf {#console-scope}

Med blocket **visa i grafen** kan du visa tal som en **graf i realtid**, taggade var för sig.  
Genom att ställa in minsta värde, största värde och grafens färg kan du se hur just de värden du vill följa ändras. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
