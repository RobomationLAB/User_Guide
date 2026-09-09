---
title: Forhåndsvisning
---

# Forhåndsvisning

**Forhåndsvisning** er det område, der hjælper dig med robotkodningen: her ser du **robotternes forbindelse** samt kode, kamera, konsol med mere.  
Herunder beskrives de funktioner, du kan bruge under hver fane.

## Forbindelser {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Under fanen Forbindelser kan du se oplysninger om de robotter, der er forbundet lige nu.   
Klikker du på **Vis sensorværdi i realtid**, kan du følge robottens sensorværdier i realtid som en graf eller som tal.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Her vælger du den sensor, du vil se, og hvilke sensorer der understøttes, er forskelligt fra robot til robot.  
Grafen og måden, data vises på, ændrer sig automatisk efter den valgte sensors værdier. 

2. Her vælger du, hvor mange sekunder der skal gå mellem hver aflæsning eller registrering af sensorværdien.  
Det valgte interval afgør, hvor lang tid der højst kan registreres data og vises graf for. 
3. Holder du musen over sensorgrafen, kan du samtidig se sensorværdien på det pågældende tidspunkt i realtid. 
4. Start/stop registrering: registrerer sensordata. 
5. Eksportér: gemmer de registrerede sensordata (.csv) og grafbilledet (.png) som filer.  
Denne funktion kan først bruges, når du har registreret data. 
6. Optag: gemmer det aktuelle grafbillede (.png) i realtid.  
Du kan registrere sensorværdiernes ændringer og gemme både datafilen og grafbilledet som filer.    

<br>

## Python-forhåndsvisning {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Under Python-forhåndsvisning kan du i realtid se, hvordan blokkene konverteres til **Python**-kode, når du tilføjer eller fjerner dem.  
Ved at følge med i, hvordan blokkene bliver til kode, lærer du nemmere kodningens syntaks. 

※ Python-forhåndsvisning findes kun i **editoren til blokkodning**.  
I Python-editoren skriver du selv koden, og derfor er der ingen forhåndsvisning.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Under fanen Kamera kan du i realtid se billedet fra det kamera, der er forbundet med pc'en.  

Denne funktion virker kun, **hvis du har tilføjet et udvidelsesmodul, der bruger kameraet, til programmet**, og der oprettes så et kameramodul under fanen Kamera.  

I hvert kameramodul kan du bruge følgende funktioner.
- Du kan vælge et af de kameraer, der er tilgængelige på pc'en lige nu, og få billedet vist.
- Med knappen **Til / Fra** kan du vise eller stoppe kamerabilledet.
- Du kan ændre **kameraets opløsning**.

<br>

## Konsol {#console}

Under fanen Konsol kan du i realtid se de logmeddelelser (Log), der skrives ud, mens programmet kører, og grafen (Graf).  
Fanen bruges til fejlfinding, til at holde øje med sensorværdier, til analyse ud fra grafer og meget mere.  

### Log {#console-log}
Med blokken **Skriv til loggen** kan du skrive tekst eller talværdier ud i konsollens logområde sammen med et tag, du selv angiver.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Graf {#console-scope}

Med blokken **Vis i grafen** kan du vise talværdier for hvert tag som en **graf i realtid**.  
Du kan indstille mindsteværdi, størsteværdi og grafens farve og på den måde følge med i, hvordan de værdier, du vil se, ændrer sig. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
