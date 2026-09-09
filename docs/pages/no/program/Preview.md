---
title: Forhåndsvisning
---

# Forhåndsvisning

**Forhåndsvisning** er området som hjelper deg med robotkodingen: her ser du **robotenes tilkobling** samt kode, kamera, konsoll med mer.  
Nedenfor beskrives de funksjonene du kan bruke under hver fane.

## Tilkoblinger {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Under fanen Tilkoblinger ser du opplysninger om de robotene som er tilkoblet akkurat nå.   
Klikker du på **Vis sensorverdi i sanntid**, kan du følge robotens sensorverdier i sanntid som en graf eller som tall.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Her velger du den sensoren du vil se, og hvilke sensorer som støttes, er forskjellig fra robot til robot.  
Grafen og måten data vises på, endrer seg automatisk etter verdiene til den valgte sensoren. 

2. Her velger du hvor mange sekunder det skal gå mellom hver avlesing eller registrering av sensorverdien.  
Det valgte intervallet avgjør hvor lenge det kan registreres data og vises graf. 
3. Holder du musen over sensorgrafen, ser du samtidig sensorverdien på det aktuelle tidspunktet i sanntid. 
4. Start/stopp registrering: registrerer sensordata. 
5. Eksporter: lagrer de registrerte sensordataene (.csv) og grafbildet (.png) som filer.  
Denne funksjonen kan først brukes når du har registrert data. 
6. Ta bilde: lagrer det gjeldende grafbildet (.png) i sanntid.  
Du kan registrere hvordan sensorverdiene endrer seg, og lagre både datafilen og grafbildet som filer.    

<br>

## Forhåndsvisning av Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Under Forhåndsvisning av Python ser du i sanntid hvordan blokkene konverteres til **Python**-kode når du legger dem til eller fjerner dem.  
Ved å følge med på hvordan blokkene blir til kode, lærer du kodingens syntaks lettere. 

※ Forhåndsvisning av Python finnes bare i **editoren for blokkoding**.  
I Python-editoren skriver du koden selv, og derfor er det ingen forhåndsvisning.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Under fanen Kamera ser du i sanntid bildet fra det kameraet som er koblet til PC-en.  

Denne funksjonen virker bare **hvis du har lagt til et utvidelsesmodul som bruker kameraet, i programmet**, og det opprettes da et kameramodul under fanen Kamera.  

I hvert kameramodul kan du bruke disse funksjonene.
- Du kan velge ett av de kameraene som er tilgjengelige på PC-en akkurat nå, og få bildet vist.
- Med knappen **På / Av** kan du vise eller stoppe kamerabildet.
- Du kan endre **kameraets oppløsning**.

<br>

## Konsoll {#console}

Under fanen Konsoll ser du i sanntid de loggmeldingene (Logg) som skrives ut mens programmet kjører, og grafen (Graf).  
Fanen brukes til feilsøking, til å følge med på sensorverdier, til analyse ut fra grafer og mye mer.  

### Logg {#console-log}
Med blokken **Skriv til loggen** kan du skrive ut tekst eller tallverdier i loggområdet i konsollen sammen med en etikett du selv angir.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Graf {#console-scope}

Med blokken **Vis i grafen** kan du vise tallverdier for hver etikett som en **graf i sanntid**.  
Du kan angi minsteverdi, størsteverdi og grafens farge og på den måten følge med på hvordan de verdiene du vil se, endrer seg. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
