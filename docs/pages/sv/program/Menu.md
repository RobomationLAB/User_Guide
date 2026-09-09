---
title: Övre menyn
---

# Övre menyn

I **övre menyn** finns de funktioner du använder oftast i programmet, som att ansluta dongel och robot eller att spara och öppna filer.  
Nedan beskrivs varje meny i tur och ordning. 

## Logotyp {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Programmets logotyp.  
När du klickar på logotypen laddas sidan om. 

När **blockredigeraren** är aktiv står det **Block Composer** i logotypen.  

<BlockImage module="program/Menu" id="logo-python" /><br>

När **Python-redigeraren** är aktiv står det **Script Composer** i logotypen.  

<br>

## Dongel {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Här kan du **söka efter dongeln som kommunicerar med roboten och ansluta den till programmet**.

För att kunna styra roboten från programmet måste du först ansluta dongeln som kommunicerar med roboten till programmet.  
Det kallas **parkoppling**. 

När du trycker på knappen **Dongel** visas en lista över de donglar som är tillgängliga på datorn just nu.  
Välj den dongel du vill ha i listan och klicka på **Anslut**, så ansluts dongeln till programmet.  

### Kontrollera dongelns anslutning {#dongle-status}

En dongel som en gång har anslutits till programmet ansluts automatiskt nästa gång du använder programmet.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


När dongeln är korrekt ansluten till programmet blir ikonen **ljusblå**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Om webbläsarfliken har en ikon som på bilden nedan vet du att dongeln är ansluten.  

<br>

**⚠️ Var försiktig**  

Om dongeln redan är ansluten till ett annat program eller en annan sida går den inte att ansluta till det här programmet.  
Leta i så fall rätt på programmet som dongeln är ansluten till, koppla från den där, gå tillbaka hit och försök ansluta igen.

<br>

## Robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Här kan du **välja vilken robot du vill använda** i programmet och **registrera robotens information och dess egna block/skriptkoder**. 

För att kunna styra roboten från programmet måste du först lägga till robotens information och block i programmet.

<BlockImage module="program/Menu" id="robot-select" /><br>

När du trycker på knappen **Robot** visas en lista i ett popup-fönster över de robotar som går att använda i programmet.  

Välj den robot du vill ha och klicka på **Lägg till**, så registreras robotens information och dess egna block/skriptkoder i programmet.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

När roboten har lagts till skapas följande. 


- **Block Composer**: robotens egna **block** skapas i [**blockpaletten**](Editor#block-editor) till vänster 
- **Script Composer**: robotens egna **skriptkoder** skapas i [**kodpaletten**](Editor#python-editor) till vänster

På så sätt kan du fritt röra och styra verklig robotmaskinvara som sensorer, motorer och lysdioder.  

<br>

**⚙️ Obs**

I RobomationLAB kan du ansluta och använda hur många robotar du vill, oavsett typ och antal.  

Om du vill använda flera robotar samtidigt måste dock lika många donglar vara anslutna till programmet som antalet robotar du vill använda, och du måste lägga till lika många robotar i programmet.  

<br>

## Tillägg {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Tilläggen är moduler som ger **AI-baserade extrafunktioner som taligenkänning, bildigenkänning och bildanalys**.  
Här kan du **välja vilka tillägg du vill använda** i programmet och **registrera tilläggets information och dess egna block/skriptkoder**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

När du trycker på knappen **Tillägg** öppnas en skärm med en lista i ett popup-fönster över de tillägg som går att använda i programmet.  
- Tal till text
- Ansiktsdetektering
- Detaljerad ansiktsdetektering
- Ansiktsuttryck
- Handdetektering
- Kroppsdetektering
- Objektdetektering
- Färgdetektering
- Detektering av ArUco-markörer
- Självkörning med kamera

När du klickar på den modul du vill ha registreras tilläggets information och dess egna block/skriptkoder i programmet, precis som vid [**Robot**](#robot). 

När du lägger till ett tillägg som använder kameran, som **Ansiktsdetektering** eller **Handdetektering**,  
skapas en kameramodul på fliken [**Förhandsvisning – Kamera**](Preview#camera), och du kan ansluta en kamera till programmet.  

Om du inte behöver ett tillägg längre kan du ta bort roboten ur listan med **högerklick → Ta bort**.

<br>

## Ljud {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Här kan du välja ljud att använda i programmeringen eller lägga till egna ljud från datorn i programmet.

### Välja ljud {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

När du trycker på knappen **Ljud** öppnas en skärm där du kan välja bland de olika ljud som programmet erbjuder.  
Där kan du göra följande.  
- Söka efter ljud
- ▶ Förhandslyssna på ljud
- Lägga till ljud i ljudlistan (vänstra panelen)

### Extrafunktioner {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Om du klickar på eller håller muspekaren över knappen längst ned till vänster (röd ruta) visas tre extrafunktioner.  
Där kan du göra följande.
- Lägga till en lokal fil: lägger till en ljudfil från din dator 
- Spela in ljud: lägger till ett ljud som du spelar in själv
- Lägga till ett slumpmässigt ljud: lägger till ett slumpvis valt ljud ur hela ljudlistan

### Använda ljud i programmeringen {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Ljud som du har lagt till i ljudlistan (vänstra panelen) kan användas i programmeringen.

- I **blockprogrammering** väljer du det ljud du vill ha i rullgardinsmenyn i blocket **spela ljud**.  

- I **skriptprogrammering** väljer du det ljud du vill ha bland underalternativen till funktionen **'spela ljud'** i kategorin **Kod – Ljud**.  

När koden körs spelas det valda ljudet upp genom datorns högtalare.

<br>

## Exempel {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Om det finns en robot tillagd i programmet kan du öppna och prova enkla exempel för varje robot.

### Välja exempel {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

När du trycker på Exempel-knappen visas skärmen **Välj exempel** som på bilden ovan.   
Med **kategorierna** och **sökfunktionen** hittar du snabbt det exempel du vill ha. 

### Öppna ett exempel {#example-load}
1. Klicka på menyn **Exempel** för att öppna skärmen **Välj exempel** och välj det exempel du vill ha. 
2. Sidan laddas om och exemplet visas i kodningsområdet.   
3. När exemplet har öppnats kan du direkt trycka på **körknappen (▶)** för att se vad det gör. 

<br>

## Redigera {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Här kan du ångra eller göra om det du har gjort.
- Kopiera (Ctrl+C): kopierar de block eller den kod du har markerat.
- Klistra in (Ctrl+V): klistrar in det du kopierat i arbetsytan.
- Ångra (Ctrl+Z): ångrar det senaste du gjorde.
- Gör om (Ctrl+Y): gör om det du har ångrat. 

<br>

## Arkiv {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Här hanterar du filer: skapar ny kod, sparar den kod du har skrivit som en fil och öppnar filer.

- Nytt  
Nollställer koden du håller på med och skapar ny kod.

- Spara projekt  
Sparar det projekt du håller på med som en fil.  
Filen sparas i mappen Hämtade filer på din dator och har filändelsen .block.

- Exportera Python-kod  
Hämtar ut Python-koden ur det projekt du håller på med och sparar den som en fil.  
Filen sparas i mappen Hämtade filer på din dator och har filändelsen .py.  
Den sparade filen kan du öppna och köra i en extern Python-miljö, till exempel VSCode.

- Öppna projekt  
Öppnar en projektfil eller en Python-kodfil från din dator.  
Filändelserna du kan öppna är .block och .py.  
En .block-fil öppnas i blockredigeraren och en .py-fil öppnas i Python-redigeraren.  
Tänk på att en .py-fil kanske inte går att öppna om den inte följer Block Composers kodformat eller innehåller syntaxfel.

<br>

## Kör / stoppa koden {#run-stop}

### Kör (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Tolkar och kör den blockkod eller skriptkod som finns i den redigerare som är aktiv.  

Beroende på koden kan du styra de robotar som är anslutna till programmet.  
Medan koden körs går det inte att ändra i den.

### Stoppa (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Stoppar körningen av koden.


<br>

## AI-kodning {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

När du trycker på knappen **AI-kodning** i övre menyn öppnas en panel med en AI-chattbot till höger på skärmen.  
Du kan prata med **AI-chattboten** som är inbyggd i RobomationLAB och programmera tillsammans med AI:n.

Där kan du göra följande.
- Ställa vilka frågor du vill om programmering: hur du skriver och ändrar kod, syntax, begrepp med mera.
- **Om ett fel uppstår när koden körs** kan du fråga AI:n varför felet uppstod och hur du löser det, och snabbt komma vidare.
- Kod som AI:n föreslår kopierar du enkelt med kopieringsknappen till höger om kodblocket.
- Konversationen sparas så att du kan fortsätta senare, och du kan också starta en **ny konversation**.
- Du kan dra i panelens vänsterkant för att ändra dess bredd.

<br>

## Kopiera kod {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Här kan du kopiera koden i den redigerare som är aktiv till urklipp.  

### Block Composer (blockprogrammering) {#copy-block}

Python-koden som visas på fliken **[Python-förhandsvisning](Preview#python-preview)** kopieras.

### Script Composer (Python) {#copy-python}
Koden i Python-redigeraren kopieras precis som den är.  

Den kopierade koden klistrar du in där du vill med Ctrl+V.

<br>

## Redigerarinställningar {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Du kan välja mellan redigerarna **Block** och **Python** och programmera i den du vill.  

Även om du byter redigerare finns koden du skrivit kvar, och du kan när som helst fortsätta programmera. 

**※ Blockredigeraren och Python-redigeraren motsvarar varandra ett till ett, och när du växlar redigerare omvandlas koden så att du kan fortsätta.**

### Blockredigeraren {#editor-settings-block}
Om du väljer Block ändras logotypen till **Block Composer**.  
Blocken du bygger i blockredigeraren omvandlas till Python-kod i realtid, och du ser resultatet på fliken **Förhandsvisning – Python-förhandsvisning**.  

### Python-redigeraren {#editor-settings-python}
Om du väljer Python ändras logotypen till **Script Composer**.  
Koden du skriver i Python-redigeraren omvandlas till block när du växlar tillbaka till **blockredigeraren**.  

> Omvandlingen från Python till block sker dock bara för kod som går att uttrycka med block.  
> Om syntaxen är felaktig eller koden inte går att omvandla till block kan växlingen till blockredigeraren misslyckas, och då visas också varför den inte gick.

<br>

## Inställningar {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Här gör du programmets grundinställningar.

### Språk {#settings-language}
Ändrar vilket språk som visas i programmet.  
Du kan välja bland 21 språk.

### Dongel {#settings-dongle}
- Koppla från: kopplar från alla donglar som är anslutna till programmet.
- Anslut: ansluter dongeln till programmet igen.

### Nollställning {#settings-reset}
- Återställ programmet: all data som är registrerad i programmet (robotinformation, block/skriptkoder, inställningar med mera) nollställs.

<br>

## Support {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Här hittar du guider och externt material som du behöver för att använda programmet.  

- Handledning: en handledning för den som använder programmet för första gången.
- Hjälp: här ser du direkt i programmet hur block och Python-kod används, med exempel.
- Användarguide: går till wikisidan med användarguiden för RobomationLAB.  
Där finns utförliga beskrivningar av programmets delar och hur de används, samt av varje block/skriptkods funktion och syntax.
- Robomation Lab: går till startsidan för RobomationLAB.
- Startsida: går till Robomations officiella webbplats.
- YouTube: går till Robomations YouTube-sida.
- Butik: går till Robomations butikssida.
- Om: här ser du programmets version och uppdateringshistorik, användarvillkor, integritetspolicy med mera.
- Kontakta oss: här kan du ställa frågor om programmet eller rapportera fel.

<br>
