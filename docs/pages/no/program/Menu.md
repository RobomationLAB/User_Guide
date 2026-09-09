---
title: Øverste meny
---

# Øverste meny

I den **øverste menyen** er de funksjonene samlet som brukes oftest i programmet: å koble til dongelen og roboten, å lagre og åpne filer og mye mer.  
Nedenfor beskrives hva hver meny gjør, i rekkefølge. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Programmets logo.  
Klikker du på logoen, oppdateres siden. 

Er **editoren for blokkoding** slått på, står det **Block Composer** i logoen.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Er **Python-editoren** slått på, står det **Script Composer** i logoen.  

<br>

## Finn dongel {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Her kan du **søke etter dongelen som kommuniserer med roboten, og koble den til programmet**.

For å kunne styre roboten fra programmet må du først koble til programmet den dongelen som kommuniserer med roboten.  
Det kalles å **pare**. 

Trykker du på knappen **Dongle**, vises listen over de dongelene som er tilgjengelige på PC-en akkurat nå.  
Velger du den dongelen du vil bruke, i listen og klikker på knappen **Koble til**, kobles dongelen til programmet.  

### Se om dongelen er tilkoblet {#dongle-status}

En dongel som én gang har vært koblet til programmet, kobles til automatisk neste gang du bruker programmet.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Er dongelen koblet riktig til programmet, skifter ikonet farge til **lyseblått**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Er det et ikon som på bildet nedenfor i nettleserfanen, er dongelen tilkoblet.  

<br>

**⚠️ Vær oppmerksom**  

Er dongelen allerede koblet til et annet program eller en annen side, kan den ikke kobles til programmet.  
Finn i så fall det programmet dongelen er koblet til, koble den fra, kom tilbake til denne siden og prøv å koble til på nytt.

<br>

## Velg robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Her kan du **velge den roboten du vil bruke** i programmet, og **registrere robotens opplysninger og dens egne blokker og skriptkoder**. 

For å kunne styre roboten fra programmet må du først legge robotens opplysninger og blokker til i programmet.

<BlockImage module="program/Menu" id="robot-select" /><br>

Trykker du på knappen **Robot**, viser et popup-vindu listen over de robotene du kan bruke i programmet.  

Velger du den roboten du vil bruke, og klikker på knappen **Legg til**, registreres robotens opplysninger og dens egne blokker og skriptkoder i programmet.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Når roboten er lagt til, opprettes dette. 


- **Block Composer**: robotens egne **blokker** opprettes i [**bloksamlingen**](Editor#block-editor) til venstre 
- **Script Composer**: robotens egne **skriptkoder** opprettes i [**kodesamlingen**](Editor#python-editor) til venstre

Dermed kan du fritt bevege og styre robotens maskinvare: sensorer, motorer, lysdioder med mer.  

<br>

**⚙️ Merk**

I RobomationLAB kan du koble til og bruke så mange roboter du vil, uansett robotenes type og antall.  

Vil du likevel bruke flere roboter samtidig, må det være koblet like mange dongler til programmet som du vil bruke roboter, og du må legge like mange roboter til i programmet som du vil bruke.  

<br>

## Velg utvidelsesmodul {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Et utvidelsesmodul er et modul med **AI-baserte utvidede funksjoner som talegjenkjenning, bildegjenkjenning og bildeanalyse**.  
Her kan du **velge det utvidelsesmodulet du vil bruke** i programmet, og **registrere modulets opplysninger og dets egne blokker og skriptkoder**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Trykker du på knappen **Utvidelse**, kommer det frem et popup-vindu med listen over de utvidelsesmodulene du kan bruke i programmet.  
- Tale til tekst
- Ansiktsgjenkjenning
- Detaljert ansiktsgjenkjenning
- Ansiktsuttrykk
- Håndgjenkjenning
- Kroppsgjenkjenning
- Objektgjenkjenning
- Fargegjenkjenning
- ArUco-markørgjenkjenning
- Selvkjøring med kamera

Klikker du på det modulet du vil bruke, registreres modulets opplysninger og dets egne blokker og skriptkoder i programmet, på samme måte som under [**Velg robot**](#robot). 

Legger du til et utvidelsesmodul som bruker kameraet — som **Ansiktsgjenkjenning** eller **Håndgjenkjenning** — i programmet,  
opprettes det et kameramodul under fanen [**Forhåndsvisning - Kamera**](Preview#camera), og du kan koble et kamera til programmet og bruke det.  

Trenger du ikke lenger det utvidelsesmodulet du har valgt, kan du fjerne roboten fra listen med **høyreklikk → Fjern**.

<br>

## Lyd {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Her kan du velge en lyd til koden din eller selv legge til en lyd fra maskinen din i programmet.

### Velg lyd {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Trykker du på knappen **Lyd**, kommer det frem et skjermbilde der du kan velge blant de mange lydene i programmet.  
Du kan bruke disse funksjonene.  
- Søk etter lyder
- ▶ Hør lyden på forhånd
- Legg lyden til i lydlisten (panelet til venstre)

### Utvidede funksjoner {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Klikker du på knappen **utvid** (den røde rammen) nederst til venstre eller holder musen over den, kommer det frem tre utvidede funksjoner.  
Du kan bruke disse funksjonene.
- Legg til en lokal fil: legger til en lydfil fra din egen maskin 
- Ta opp en lyd: tar opp en lyd selv og legger den til
- Legg til en tilfeldig lyd: legger til en lyd som er valgt tilfeldig fra hele lydlisten

### Bruke lyd i koden {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

De lydene som er lagt til i lydlisten (panelet til venstre), kan du bruke i koden din.

- Ved **blokkoding** velger du den lyden du vil bruke, i nedtrekksmenyen på blokken **spill av lyd**.  

- Ved **skriptkoding** velger du den lyden du vil bruke, blant undermenyene til funksjonen **'spill av lyd'** i kategorien **Koder - Lyd**.  

Når koden kjøres, spilles den valgte lyden av gjennom høyttaleren på maskinen din.

<br>

## Eksempel {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Er det lagt til en robot i programmet, kan du hente frem enkle eksempler for hver robot og prøve dem.

### Velg eksempel {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Trykker du på knappen Eksempel, kommer skjermbildet **Velg eksempel** frem, slik du ser ovenfor.   
Med **kategoriene** og **søkefunksjonen** kan du raskt finne det eksemplet du vil bruke. 

### Hente et eksempel {#example-load}
1. Klikk på menyen **Eksempel** for å åpne skjermbildet **Velg eksempel**, og velg det eksemplet du vil bruke. 
2. Skjermbildet oppdateres, og eksemplet vises i kodingsområdet.   
3. Når eksemplet er hentet, kan du trykke på **kjør-knappen (▶)** og se hva som skjer, uten å gjøre noe annet først. 

<br>

## Rediger {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Her kan du angre en handling eller utføre den på nytt.
- Kopier (Ctrl+C): kopierer den valgte blokken eller koden.
- Lim inn (Ctrl+V): limer den kopierte blokken eller koden inn i arbeidsområdet.
- Angre (Ctrl+Z): angrer den siste handlingen.
- Gjør om (Ctrl+Y): utfører den angrede handlingen på nytt. 

<br>

## Fil {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Her kan du håndtere filer: lage ny kode, lagre den koden du har skrevet, som en fil og åpne den igjen.

- Ny  
Tømmer den koden du holder på med, og lager ny kode.

- Lagre prosjekt  
Lagrer den prosjektfilen du holder på med.  
Filen lagres i mappen 'Nedlastinger' på maskinen din, og filtypen er '.block'.

- Eksporter Python-kode  
Henter ut Python-koden fra det prosjektet du holder på med, og lagrer den som en fil.  
Filen lagres i mappen 'Nedlastinger' på maskinen din, og filtypen er '.py'.  
Den lagrede filen kan du åpne og kjøre i et eksternt Python-utviklingsmiljø som VSCode.

- Åpne prosjekt  
Åpner en prosjektfil eller en Python-kodefil fra maskinen din.  
Du kan åpne filtypene '.block' og '.py'.  
Åpner du en '.block'-fil, åpnes den i editoren for blokkoding, og åpner du en '.py'-fil, åpnes den i Python-editoren.  
Vær oppmerksom på at en '.py'-fil kanskje ikke kan åpnes riktig hvis den ikke passer til kodeformatet i Block Composer, eller hvis den har syntaksfeil.

<br>

## Kjøre / stoppe koden {#run-stop}

### Kjør (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Tolker og kjører den blokkoden eller skriptkoden som er skrevet i den editoren som er slått på akkurat nå.  

Ut fra den koden du har skrevet, kan du styre de robotene som er koblet til programmet.  
Mens koden kjører, kan du ikke endre den koden som er skrevet.

### Stopp (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Stopper kjøringen av koden.


<br>

## AI-koding {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Trykker du på knappen **AI-koding** i den øverste menyen, åpnes panelet med AI-chatboten på høyre side av skjermen.  
Du kan snakke med den **AI-chatboten** som er innebygd i RobomationLAB, og kode sammen med AI-en.

Du kan bruke disse funksjonene.
- Du kan fritt spørre om koding: hvordan du skriver og endrer kode, om syntaks, om begreper og mye mer.
- **Oppstår det en feil mens koden kjører**, kan du spørre AI-en hvorfor feilen oppsto, og hvordan du løser den, og dermed komme raskt videre.
- Den koden AI-en foreslår, kan du enkelt kopiere med kopiknappen til høyre for kodeblokken.
- Samtalen lagres, så du kan fortsette den senere, og du kan også starte en **ny samtale**.
- Du kan dra i panelets venstre kant og justere bredden på panelet.

<br>

## Kopier kode {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Her kan du kopiere den koden som er skrevet i den editoren som er slått på akkurat nå, til utklippstavlen.  

### Block Composer (blokkoding) {#copy-block}

Den Python-koden som vises under fanen **[Forhåndsvisning av Python](Preview#python-preview)**, kopieres.

### Script Composer (Python) {#copy-python}
Koden i Python-editoren kopieres nøyaktig slik den står.  

Den kopierte koden kan du lime inn der du vil, med Ctrl+V.

<br>

## Editorinnstillinger {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Her kan du velge den editoren du vil kode i: **blokkoding** eller **Python**.  

Skifter du editor, blir den koden du har skrevet, bevart, så du alltid kan kode videre. 

**※ Editoren for blokkoding og Python-editoren svarer én til én til hverandre, og skifter du editor, konverteres den koden du har skrevet, så du kan fortsette.**

### Editoren for blokkoding {#editor-settings-block}
Velger du blokkoding, skifter logoen til **Block Composer**.  
De blokkene du setter sammen i editoren for blokkoding, konverteres til Python-kode i sanntid, og du kan se resultatet under fanen **Forhåndsvisning - Forhåndsvisning av Python**.  

### Python-editoren {#editor-settings-python}
Velger du Python, skifter logoen til **Script Composer**.  
Den koden du skriver i Python-editoren, konverteres til blokker når du skifter tilbake til **editoren for blokkoding**.  

> Konverteringen fra Python til blokker skjer likevel bare for kode som kan uttrykkes med blokker.  
> Er syntaksen feil, eller kan koden ikke konverteres til blokker, hender det at den ikke skifter til editoren for blokkoding, og da vises også årsaken til at skiftet mislyktes.

<br>

## Innstillinger {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Her kan du gjøre programmets grunnleggende innstillinger.

### Språk {#settings-language}
Endrer hvilket språk (hvilket land) programmet vises på.  
Du kan velge det språket du vil bruke, blant i alt 21 språk.

### Dongel {#settings-dongle}
- Koble fra: kobler fra alle de dongelene som er koblet til programmet.
- Koble til: kobler dongelen til programmet igjen.

### Tilbakestilling {#settings-reset}
- Tilbakestill programmet: alle data som er registrert i programmet (robotopplysninger, blokker og skriptkoder, innstillinger med mer), tilbakestilles.

<br>

## Brukerstøtte {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Her finner du de veiledningene og de eksterne ressursene du trenger for å bruke programmet.  

- Opplæring: en innføring for dem som bruker programmet for første gang.
- Hjelp: her kan du inne i programmet se hvordan blokker og Python-koder brukes, og se eksempler.
- Brukerveiledning: går til wikisiden med brukerveiledningen for RobomationLAB.  
Her finner du en detaljert beskrivelse av programmets deler og hvordan du bruker dem, samt av hva hver enkelt blokk og skriptkode gjør, og syntaksen deres.
- Robomation Lab: går til hovedsiden for RobomationLAB.
- Hjem: går til den offisielle nettsiden til Robomation.
- YouTube: går til YouTube-siden til Robomation.
- Nettbutikk: går til nettbutikken til Robomation.
- Om: her kan du se programmets versjon og oppdateringshistorikk, brukervilkårene, personvernerklæringen med mer.
- Kontakt oss: her kan du spørre om det du lurer på, eller melde fra om feil du støter på mens du bruker programmet.

<br>
