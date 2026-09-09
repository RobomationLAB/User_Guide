---
title: Bovenste menubalk
---

# Bovenste menubalk

In de **bovenste menubalk** zijn de functies verzameld die je in het programma vaak gebruikt — de dongle en de robot verbinden, bestanden opslaan en openen en meer.  
Hieronder worden de functies van de afzonderlijke menu's op volgorde beschreven. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Het logo van het programma.  
Klik je op het logo, dan wordt de pagina opnieuw geladen. 

Is de **blokeditor** actief, dan toont het logo de tekst **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Is de **Python-editor** actief, dan toont het logo de tekst **Script Composer**.  

<br>

## Dongle zoeken {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Hier kun je de **dongle voor de communicatie met de robot zoeken en met het programma verbinden**.

Om in het programma een robot te besturen, moet eerst de dongle voor de communicatie met de robot met het programma worden verbonden.  
Dat proces heet **pairing**. 

Druk je op de knop **Dongle**, dan verschijnt de lijst met dongles die op de pc beschikbaar zijn.  
Kies in de lijst de gewenste dongle en klik op **Verbinden** — de dongle wordt met het programma verbonden.  

### De verbindingstoestand van de dongle controleren {#dongle-status}

Een dongle die één keer met het programma verbonden was, wordt bij het volgende gebruik van het programma automatisch verbonden.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Is de dongle goed met het programma verbonden, dan wordt het pictogram **lichtblauw**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Staat er in het browsertabblad een pictogram zoals op de volgende afbeelding, dan is de dongle verbonden.  

<br>

**⚠️ Let op**  

Is de dongle al met een ander programma of een andere pagina verbonden, dan kan die niet met dit programma worden verbonden.  
Zoek in dat geval het programma waarmee de dongle verbonden is, verbreek de verbinding daar, ga terug naar deze pagina en probeer het opnieuw.

<br>

## Robot selecteren {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Hier kun je **de robot kiezen die je in het programma wilt gebruiken** en **de informatie van die robot samen met de eigen blokken of scriptcodes registreren**. 

Om in het programma een robot te besturen, moeten eerst de informatie en de blokken van de gewenste robot aan het programma worden toegevoegd.

<BlockImage module="program/Menu" id="robot-select" /><br>

Druk je op de knop **Robot**, dan toont een dialoogvenster de lijst met robots die in het programma beschikbaar zijn.  

Kies de gewenste robot en klik op **Toevoegen** — de informatie van die robot en de eigen blokken of scriptcodes worden in het programma geregistreerd.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Voeg je een robot toe, dan ontstaan de volgende onderdelen. 


- **Block Composer**: in het [**blokpalet**](Editor#block-editor) links ontstaan de eigen **blokken** van die robot 
- **Script Composer**: in het [**codepalet**](Editor#python-editor) links ontstaan de eigen **scriptcodes** van die robot

Zo kun je echte roboterhardware — sensoren, motoren, leds en meer — vrij bewegen en besturen.  

<br>

**⚙️ Opmerking**

In RobomationLAB kun je onafhankelijk van soort en aantal zoveel robots verbinden en gebruiken als je wilt.  

Wil je echter meerdere robots tegelijk verbinden en gebruiken, dan moeten er evenveel dongles met het programma verbonden zijn als je robots wilt gebruiken, en moet je evenveel robots aan het programma toevoegen.  

<br>

## Uitbreiding selecteren {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Uitbreidingen zijn modules die **AI-gebaseerde extra functies bieden, zoals spraakherkenning, beeldherkenning en beeldanalyse**.  
Hier kun je **de uitbreiding kiezen die je in het programma wilt gebruiken** en **de informatie van die uitbreiding samen met de eigen blokken of scriptcodes registreren**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Druk je op de knop **Uitbreiding**, dan verschijnt een dialoogvenster met de lijst met uitbreidingen die in het programma beschikbaar zijn.  
- Spraak naar tekst
- Gezichtsdetectie
- Gedetailleerde gezichtsdetectie
- Gezichtsuitdrukking
- Handdetectie
- Lichaamsdetectie
- Objectdetectie
- Kleurdetectie
- ArUco-markerdetectie
- Zelfrijden met camera

Klik je de gewenste module aan, dan worden — net als bij [**Robot selecteren**](#robot) — de informatie van die uitbreiding en de eigen blokken of scriptcodes in het programma geregistreerd. 

Voeg je een uitbreiding toe die de camera gebruikt — bijvoorbeeld **Gezichtsdetectie** of **Handdetectie** —,  
dan ontstaat in het tabblad [**Voorbeeld – Camera**](Preview#camera) een cameramodule en kun je de camera met het programma verbinden en gebruiken.  

Heb je een gekozen uitbreiding niet meer nodig, dan kun je die met **rechtsklik → Verwijderen** uit de lijst verwijderen.

<br>

## Geluid {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Hier kun je geluiden kiezen om bij het programmeren te gebruiken of zelf geluiden van je computer aan het programma toevoegen.

### Een geluid selecteren {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Druk je op de knop **Geluid**, dan verschijnt een venster waarin je uit de vele geluiden van het programma kunt kiezen.  
De volgende functies zijn beschikbaar.  
- Geluiden zoeken
- ▶ Geluid voorbeluisteren
- Geluid aan de geluidenlijst (linkerpaneel) toevoegen

### Extra functies {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Klik je linksonder op de knop **Uitbreiding** (rood kader) of ga je er met de muis over, dan verschijnen drie opties met extra functies.  
De volgende functies zijn beschikbaar.
- Lokaal bestand toevoegen: voegt een audiobestand van de computer van de gebruiker toe 
- Geluid opnemen: neemt zelf een geluid op en voegt dat toe
- Willekeurig geluid toevoegen: voegt een willekeurig uit de hele geluidenlijst gekozen geluid toe

### Geluiden bij het programmeren gebruiken {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Geluiden die aan de geluidenlijst (linkerpaneel) zijn toegevoegd, kun je bij het programmeren gebruiken.

- Bij **blokprogrammeren** kies je het gewenste geluid in de keuzelijst van het blok **speel geluid**.  

- Bij **scriptprogrammeren** kies je het gewenste geluid in de subopties van de functie **„geluid afspelen"** in de categorie **Code – Audio**.  

Bij het uitvoeren van de code wordt het gekozen geluid via de luidsprekers van de computer afgespeeld.

<br>

## Voorbeeld {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Is er in het programma een robot toegevoegd, dan kun je per robot eenvoudige voorbeelden laden en uitproberen.

### Een voorbeeld selecteren {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Druk je op de knop Voorbeeld, dan verschijnt het hierboven getoonde venster **Voorbeeld selecteren**.   
Via de **categorieën** en de **zoekfunctie** vind je het gewenste voorbeeld snel. 

### Een voorbeeld laden {#example-load}
1. Klik op het menu **Voorbeeld**, open het venster **Voorbeeld selecteren** en kies het gewenste voorbeeld. 
2. Het venster wordt opnieuw geladen en het voorbeeld verschijnt in het programmeergebied.   
3. Na het laden kun je zonder verdere stappen op de **knop Uitvoeren (▶)** drukken en het gedrag bekijken. 

<br>

## Bewerken {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Een functie waarmee je handelingen kunt terugnemen of herhalen.
- Kopiëren (Ctrl+C): kopieert het gekozen blok of de gekozen code.
- Plakken (Ctrl+V): plakt het gekopieerde blok of de gekopieerde code in het werkgebied.
- Ongedaan maken (Ctrl+Z): neemt de laatste handeling terug.
- Opnieuw (Ctrl+Y): voert de teruggenomen handeling opnieuw uit. 

<br>

## Bestand {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Hier beheer je bestanden — nieuwe code aanmaken, geschreven code als bestand opslaan en weer openen.

- Nieuw  
Zet de code die je nu schrijft terug en maakt nieuwe code aan.

- Project opslaan  
Slaat het bestand van het project op waaraan je nu werkt.  
Het bestand wordt in de map „Downloads" van de gebruiker opgeslagen, de bestandsextensie is „.block".

- Python-code exporteren  
Haalt de Python-code van het project waaraan je nu werkt eruit en slaat die als bestand op.  
Het bestand wordt in de map „Downloads" van de gebruiker opgeslagen, de bestandsextensie is „.py".  
Het opgeslagen bestand kun je in een externe Python-omgeving zoals VSCode openen en uitvoeren.

- Project openen  
Opent een projectbestand of een Python-codebestand van de computer van de gebruiker.  
Je kunt bestanden met de extensies „.block" en „.py" openen.  
Een „.block"-bestand wordt in de blokeditor geopend, een „.py"-bestand in de Python-editor.  
Let op bij het openen van een „.py"-bestand: past dat niet bij de codevorm van Block Composer of bevat het syntaxfouten, dan kan het mogelijk niet goed worden geopend.

<br>

## Code uitvoeren / stoppen {#run-stop}

### Uitvoeren (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Interpreteert de blokcode of scriptcode in de actieve editor en voert die uit.  

Afhankelijk van de geschreven code kun je daarmee de robots besturen die met het programma verbonden zijn.  
Terwijl de code loopt, kun je de geschreven code niet bewerken.

### Stoppen (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Stopt het uitvoeren van de code.


<br>

## Programmeren met AI {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Druk je in de bovenste menubalk op de knop **Programmeren met AI**, dan opent rechts het paneel van de AI-chatbot.  
Je kunt met de in RobomationLAB ingebouwde **AI-chatbot** praten en samen met de AI programmeren.

De volgende functies zijn beschikbaar.
- Je kunt vrij vragen stellen over programmeren — hoe je code schrijft en wijzigt, over de syntaxis, over begrippen en meer.
- **Treedt er bij het uitvoeren van de code een fout op**, dan kun je de AI naar de oorzaak en de oplossing vragen en het probleem snel verhelpen.
- Code die de AI voorstelt, kopieer je gemakkelijk met de knop rechts bij het codeblok.
- Het gespreksverloop wordt opgeslagen, zodat je het gesprek kunt voortzetten; je kunt ook een **nieuw gesprek** beginnen.
- Door aan de linkerrand van het paneel te slepen kun je de breedte ervan aanpassen.

<br>

## Code kopiëren {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Hier kun je de code in de actieve editor naar het klembord kopiëren.  

### Block Composer (blokprogrammeren) {#copy-block}

Er wordt de Python-code gekopieerd die in het tabblad **[Python-voorbeeld](Preview#python-preview)** wordt weergegeven.

### Script Composer (Python) {#copy-python}
De code in de Python-editor wordt ongewijzigd gekopieerd.  

De gekopieerde code kun je met Ctrl+V op de gewenste plaats plakken.

<br>

## Editorinstelling {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Je kunt tussen **Blok** en **Python** de gewenste editor kiezen en daarin programmeren.  

Ook na het wisselen van editor blijft de eerder geschreven code bewaard en kun je altijd verder programmeren. 

**※ De blokeditor en de Python-editor komen één op één met elkaar overeen; bij het wisselen wordt de geschreven code omgezet en voortgezet.**

### Blokeditor {#editor-settings-block}
Kies je Blok, dan wordt het logo **Block Composer**.  
De blokken die je in de blokeditor bouwt, worden in realtime in Python-code omgezet; het resultaat zie je in het tabblad **Voorbeeld – Python-voorbeeld**.  

### Python-editor {#editor-settings-python}
Kies je Python, dan wordt het logo **Script Composer**.  
De code die je in de Python-editor schrijft, wordt bij het terugwisselen naar de **blokeditor** in blokken omgezet.  

> De omzetting Python → blokken lukt echter alleen bij code die als blokken kan worden weergegeven.  
> Bij foutieve syntaxis of bij code die niet in blokken kan worden omgezet, kan het wisselen naar de blokeditor mislukken; in dat geval wordt ook de reden van het mislukken weergegeven.

<br>

## Instellingen {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Hier maak je de basisinstellingen van het programma.

### Taal {#settings-language}
Wijzigt de taal (het land) die in het programma wordt weergegeven.  
Je kunt uit in totaal 21 talen de gewenste kiezen.

### Dongle {#settings-dongle}
- Verbinding verbreken: verbreekt de verbinding van alle dongles die met het programma verbonden zijn.
- Verbinden: verbindt de dongle opnieuw met het programma.

### Resetten {#settings-reset}
- Programma resetten: alle in het programma geregistreerde gegevens (robotinformatie, blokken of scriptcodes, instellingen enzovoort) worden teruggezet.

<br>

## Ondersteuning {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Hier vind je de gidsen en het externe materiaal dat je voor het gebruik van het programma nodig hebt.  

- Tutorial: biedt een tutorial voor wie het programma voor het eerst gebruikt.
- Help: hier zie je direct in het programma het gebruik en voorbeelden van de blokken en Python-codes.
- Gebruikershandleiding: opent de wikipagina van de gebruikershandleiding van RobomationLAB.  
Die beschrijft de onderdelen en het gebruik van het programma en de functies en de syntaxis van de afzonderlijke blokken of scriptcodes in detail.
- Robomation Lab: opent de hoofdpagina van RobomationLAB.
- Home: opent de officiële website van het bedrijf Robomation.
- YouTube: opent de YouTube-pagina van Robomation.
- Webwinkel: opent de webwinkel van Robomation.
- Over: hier zie je de programmaversie en het wijzigingsoverzicht, de gebruiksvoorwaarden, de privacyverklaring en meer.
- Contact opnemen: hier kun je vragen over het gebruik van het programma of fouten melden.

<br>
