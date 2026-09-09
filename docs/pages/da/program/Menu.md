---
title: Øverste menu
---

# Øverste menu

I den **øverste menu** er de funktioner samlet, du bruger oftest i programmet: at forbinde donglen og robotten, at gemme og åbne filer og meget mere.  
Herunder beskrives hver menus funktion i rækkefølge. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Programmets logo.  
Klikker du på logoet, opdateres siden. 

Er **editoren til blokkodning** slået til, står der **Block Composer** i logoet.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Er **Python-editoren** slået til, står der **Script Composer** i logoet.  

<br>

## Find dongle {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Her kan du **søge efter den dongle, der kommunikerer med robotten, og forbinde den med programmet**.

For at kunne styre robotten fra programmet skal du først forbinde den dongle, der kommunikerer med robotten, med programmet.  
Det kaldes at **parre**. 

Trykker du på knappen **Dongle**, vises en liste over de dongler, der er tilgængelige på pc'en lige nu.  
Vælger du den ønskede dongle på listen og klikker på knappen **Opret forbindelse**, forbindes donglen med programmet.  

### Tjek donglens forbindelse {#dongle-status}

En dongle, der én gang har været forbundet med programmet, forbindes automatisk, næste gang du bruger programmet.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Er donglen forbundet korrekt med programmet, skifter ikonet farve til **lyseblå**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Er der et ikon som på billedet herunder i browserfanen, er donglen forbundet.  

<br>

**⚠️ Vær opmærksom**  

Er donglen allerede forbundet med et andet program eller en anden side, kan den ikke forbindes med programmet.  
Find i så fald det program, donglen er forbundet med, afbryd forbindelsen, kom tilbage til denne side, og prøv at oprette forbindelse igen.

<br>

## Vælg robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Her kan du **vælge den robot, du vil bruge** i programmet, og **registrere robottens oplysninger og dens egne blokke og skriptkoder**. 

For at kunne styre robotten fra programmet skal du først tilføje robottens oplysninger og blokke til programmet.

<BlockImage module="program/Menu" id="robot-select" /><br>

Trykker du på knappen **Robot**, viser et pop op-vindue listen over de robotter, du kan bruge i programmet.  

Vælger du den ønskede robot og klikker på knappen **Tilføj**, registreres robottens oplysninger og dens egne blokke og skriptkoder i programmet.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Når robotten er tilføjet, oprettes følgende. 


- **Block Composer**: robottens egne **blokke** oprettes i [**bloksamlingen**](Editor#block-editor) til venstre 
- **Script Composer**: robottens egne **skriptkoder** oprettes i [**kodesamlingen**](Editor#python-editor) til venstre

Dermed kan du frit bevæge og styre robottens hardware: sensorer, motorer, lysdioder med mere.  

<br>

**⚙️ Bemærk**

I RobomationLAB kan du forbinde og bruge lige så mange robotter, du vil, uanset robotternes type og antal.  

Vil du dog bruge flere robotter samtidig, skal der være forbundet lige så mange dongler til programmet, som du vil bruge robotter, og du skal tilføje lige så mange robotter til programmet, som du vil bruge.  

<br>

## Vælg udvidelsesmodul {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Et udvidelsesmodul er et modul med **AI-baserede udvidede funktioner som talegenkendelse, billedgenkendelse og billedanalyse**.  
Her kan du **vælge det udvidelsesmodul, du vil bruge** i programmet, og **registrere modulets oplysninger og dets egne blokke og skriptkoder**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Trykker du på knappen **Udvidelse**, kommer der et pop op-vindue frem med listen over de udvidelsesmoduler, du kan bruge i programmet.  
- Tale til tekst
- Ansigtsregistrering
- Detaljeret ansigtsregistrering
- Ansigtsudtryk
- Håndregistrering
- Kropsregistrering
- Objektregistrering
- Farveregistrering
- Registrering af ArUco-markører
- Kamerabaseret selvkørsel

Klikker du på det ønskede modul, registreres modulets oplysninger og dets egne blokke og skriptkoder i programmet, ligesom under [**Vælg robot**](#robot). 

Tilføjer du et udvidelsesmodul, der bruger kameraet — som **Ansigtsregistrering** eller **Håndregistrering** — til programmet,  
oprettes et kameramodul under fanen [**Forhåndsvisning - Kamera**](Preview#camera), og du kan forbinde et kamera med programmet og bruge det.  

Har du ikke længere brug for det valgte udvidelsesmodul, kan du fjerne robotten fra listen med **højreklik → Fjern**.

<br>

## Lyd {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Her kan du vælge en lyd til din kode eller selv tilføje en lyd fra din computer til programmet.

### Vælg lyd {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Trykker du på knappen **Lyd**, kommer der en skærm frem, hvor du kan vælge blandt programmets mange lyde.  
Du kan bruge følgende funktioner.  
- Søg efter lyde
- ▶ Hør lyden på forhånd
- Tilføj lyden til lydlisten (panelet til venstre)

### Udvidede funktioner {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Klikker du på knappen **udvid** (den røde ramme) nederst til venstre eller holder musen over den, kommer der tre udvidede funktioner frem.  
Du kan bruge følgende funktioner.
- Tilføj en lokal fil: tilføjer en lydfil fra din egen computer 
- Optag en lyd: optager selv en lyd og tilføjer den
- Tilføj en tilfældig lyd: tilføjer en lyd, der er valgt tilfældigt fra hele lydlisten

### Brug lyd i din kode {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

De lyde, der er føjet til lydlisten (panelet til venstre), kan du bruge i din kode.

- Ved **blokkodning** vælger du den ønskede lyd i rullemenuen på blokken **Afspil lyd**.  

- Ved **skriptkodning** vælger du den ønskede lyd blandt undermenuerne til funktionen **'Afspil lyd'** i kategorien **Kode - Lyd**.  

Når koden køres, afspilles den valgte lyd gennem højttaleren på din computer.

<br>

## Eksempel {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Er der tilføjet en robot til programmet, kan du hente enkle eksempler frem for hver robot og prøve dem.

### Vælg et eksempel {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Trykker du på knappen Eksempel, kommer skærmen **Vælg eksempel** frem, som du ser ovenfor.   
Med **kategorierne** og **søgefunktionen** kan du hurtigt finde det eksempel, du vil bruge. 

### Hent et eksempel {#example-load}
1. Klik på menuen **Eksempel** for at åbne skærmen **Vælg eksempel**, og vælg det ønskede eksempel. 
2. Skærmen opdateres, og eksemplet vises i kodningsområdet.   
3. Når eksemplet er hentet, kan du trykke på **kør-knappen (▶)** og se, hvad der sker, uden at gøre andet først. 

<br>

## Rediger {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Her kan du fortryde en handling eller udføre den igen.
- Kopiér (Ctrl+C): kopierer den valgte blok eller kode.
- Indsæt (Ctrl+V): indsætter den kopierede blok eller kode i arbejdsområdet.
- Fortryd (Ctrl+Z): fortryder den seneste handling.
- Annuller fortryd (Ctrl+Y): udfører den fortrudte handling igen. 

<br>

## Fil {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Her kan du håndtere filer: lave ny kode, gemme den kode, du har skrevet, som en fil og åbne den igen.

- Nyt  
Rydder den kode, du er ved at skrive, og laver ny kode.

- Gem projekt  
Gemmer den projektfil, du er ved at skrive.  
Filen gemmes i mappen 'Overførsler' på din computer, og filtypen er '.block'.

- Eksportér Python-kode  
Trækker Python-koden ud af det projekt, du er ved at skrive, og gemmer den som en fil.  
Filen gemmes i mappen 'Overførsler' på din computer, og filtypen er '.py'.  
Den gemte fil kan du åbne og køre i et eksternt Python-udviklingsmiljø som VSCode.

- Åbn projekt  
Åbner en projektfil eller en Python-kodefil fra din computer.  
Du kan åbne filtyperne '.block' og '.py'.  
Åbner du en '.block'-fil, åbnes den i editoren til blokkodning, og åbner du en '.py'-fil, åbnes den i Python-editoren.  
Vær opmærksom på, at en '.py'-fil måske ikke kan åbnes korrekt, hvis den ikke passer til kodeformatet i Block Composer, eller hvis der er syntaksfejl i den.

<br>

## Kør / stop koden {#run-stop}

### Kør (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Fortolker og kører den blokkode eller skriptkode, der er skrevet i den editor, der er slået til lige nu.  

Alt efter den kode, du har skrevet, kan du styre de robotter, der er forbundet med programmet.  
Mens koden kører, kan du ikke ændre den kode, der er skrevet.

### Stop (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Stopper kørslen af koden.


<br>

## AI-kodning {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Trykker du på knappen **AI-kodning** i den øverste menu, åbnes panelet med AI-chatbotten i højre side af skærmen.  
Du kan tale med den **AI-chatbot**, der er indbygget i RobomationLAB, og kode sammen med AI'en.

Du kan bruge følgende funktioner.
- Du kan frit spørge om kodning: hvordan du skriver og ændrer kode, om syntaks, om begreber og meget mere.
- **Opstår der en fejl, mens koden kører**, kan du spørge AI'en, hvorfor fejlen opstod, og hvordan du løser den, og dermed hurtigt komme videre.
- Den kode, AI'en foreslår, kan du nemt kopiere med kopiknappen til højre for kodeblokken.
- Samtalen gemmes, så du kan fortsætte den senere, og du kan også starte en **ny samtale**.
- Du kan trække i panelets venstre kant og justere panelets bredde.

<br>

## Kopiér kode {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Her kan du kopiere den kode, der er skrevet i den editor, der er slået til lige nu, til udklipsholderen.  

### Block Composer (blokkodning) {#copy-block}

Den Python-kode, der vises under fanen **[Python-forhåndsvisning](Preview#python-preview)**, kopieres.

### Script Composer (Python) {#copy-python}
Koden i Python-editoren kopieres, præcis som den står.  

Den kopierede kode kan du indsætte, hvor du vil, med Ctrl+V.

<br>

## Editorindstillinger {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Her kan du vælge den editor, du vil kode i: **blokkodning** eller **Python**.  

Skifter du editor, bliver den kode, du har skrevet, bevaret, så du altid kan kode videre. 

**※ Editoren til blokkodning og Python-editoren svarer én til én til hinanden, og skifter du editor, konverteres den kode, du har skrevet, så du kan fortsætte.**

### Editoren til blokkodning {#editor-settings-block}
Vælger du blokkodning, skifter logoet til **Block Composer**.  
De blokke, du sætter sammen i editoren til blokkodning, konverteres til Python-kode i realtid, og du kan se resultatet under fanen **Forhåndsvisning - Python-forhåndsvisning**.  

### Python-editoren {#editor-settings-python}
Vælger du Python, skifter logoet til **Script Composer**.  
Den kode, du skriver i Python-editoren, konverteres til blokke, når du skifter tilbage til **editoren til blokkodning**.  

> Konverteringen fra Python til blokke sker dog kun for kode, der kan udtrykkes med blokke.  
> Er syntaksen forkert, eller kan koden ikke konverteres til blokke, skifter den måske ikke til editoren til blokkodning, og i så fald vises også årsagen til, at skiftet mislykkedes.

<br>

## Indstillinger {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Her kan du foretage programmets grundlæggende indstillinger.

### Sprog {#settings-language}
Ændrer det sprog (det land), programmet vises på.  
Du kan vælge det sprog, du vil bruge, blandt i alt 21 sprog.

### Dongle {#settings-dongle}
- Afbryd forbindelsen: afbryder forbindelsen til alle de dongler, der er forbundet med programmet.
- Opret forbindelse: forbinder donglen med programmet igen.

### Nulstil {#settings-reset}
- Nulstil program: alle data, der er registreret i programmet (robotoplysninger, blokke og skriptkoder, indstillinger med mere), nulstilles.

<br>

## Support {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Her finder du de vejledninger og eksterne materialer, du har brug for til at bruge programmet.  

- Introduktion: en introduktion til dem, der bruger programmet for første gang.
- Hjælp: her kan du inde i programmet se, hvordan blokke og Python-koder bruges, og se eksempler.
- Brugervejledning: går til wikisiden med brugervejledningen til RobomationLAB.  
Her finder du en detaljeret beskrivelse af programmets dele og af, hvordan du bruger dem, samt af hver enkelt bloks og skriptkodes funktion og syntaks.
- Robomation Lab: går til forsiden for RobomationLAB.
- Hjem: går til Robomations officielle hjemmeside.
- YouTube: går til Robomations YouTube-side.
- Webshop: går til Robomations webshop.
- Om: her kan du se programmets version og opdateringshistorik, brugsbetingelserne, privatlivspolitikken med mere.
- Kontakt os: her kan du stille spørgsmål om det, du er i tvivl om, eller om fejl, du støder på, mens du bruger programmet.

<br>
