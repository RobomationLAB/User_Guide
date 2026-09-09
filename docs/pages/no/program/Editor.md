---
title: Editor
---

# Editor

**Editoren** er området der du skriver koden som styrer roboten, enten med **blokker** eller med **skriptkode**.  
Nedenfor kan du lese hvordan du koder i hvert av de to miljøene — **blokkoding og skriptkoding (Python)** — og hva du må være oppmerksom på.

## Editoren for blokkoding {#block-editor}

### Blokkategorier {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Området der blokkene i RobomationLAB er delt inn i **kategorier**.  
Klikker du på en kategori, ser du den **bloksamlingen** som hører til kategorien.  

Her er de blokkategoriene som finnes som standard.  

- Logikk
- Løkker
- Matematikk
- Tekst
- Liste
- Farge
- Lyd
- Styring
- Variabler
- Funksjoner
- Annet

Legger du i tillegg til en [**robot**](Menu#robot) eller et [**utvidelsesmodul**](Menu#extension) i programmet, kan du bruke robotens eller modulens egen bloksamling i programmet.  

<br>

**⚙️ Merk**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategorier du har lagt til i programmet, men ikke bruker lenger, kan du fjerne fra blokkategoriene med **høyreklikk med musen → Fjern**.

<br>

### Bloksamlingen {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Området der alle blokkene i en kategori er samlet.  
Blokkene i bloksamlingen kan du flytte over i kodingsområdet ved å **dra og slippe**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Merk**  
Vil du vite hvordan en blokk brukes, kan du med **høyreklikk med musen → Hjelp** se en hjelpetekst som beskriver hvordan hver enkelt blokk brukes.  

<br>

### Kodingsområdet {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Området der du setter sammen de blokkene du har hentet fra bloksamlingen.  


De sammensatte blokkene konverteres til **Python-kode** i sanntid,  
og når du kjører koden, tolkes den, så roboten beveger seg og styres.  

<br>

### Blokkenes grunnstruktur {#block-structure}

Når du koder i editoren for blokkoding, må du følge denne grunnstrukturen.

<BlockImage module="program/Editor" id="block-structure" /><br>

Editoren for blokkoding tolker og kjører den koden som ligger inne i funksjonsblokkene **funksjon oppsett** og **funksjon løkke**.  
Du må derfor skrive koden ved å legge blokker inn i funksjonsblokkene **funksjon oppsett** og **funksjon løkke**.  

**funksjon oppsett**  
Inne i funksjonsblokken funksjon oppsett definerer du de handlingene som skal utføres i starten når koden kjøres.  
Med blokken **Vent** kan du få handlingene til å bli utført i tidsrekkefølge.  

**funksjon løkke**  
Inne i funksjonsblokken funksjon løkke definerer du de handlingene som skal gjentas så lenge koden kjører.  
De handlingene du definerer, gjentas én gang hvert 10. ms.  

**⚙️ Merk**  
(Bortsett fra de egendefinerte funksjonene du oppretter via **kategorien Funksjoner**)  
har blokker som ligger utenfor funksjonsblokkene **funksjon oppsett** og **funksjon løkke**, ingen virkning når koden kjøres.  

<br>

### Slik bruker du blokkene {#block-usage}

**Legge til en blokk**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Du legger til en blokk ved å **dra den fra bloksamlingen** og **slippe den i editoren**.   
<br>

**Kopiere/lime inn blokker**  

Det er i alt to måter å kopiere og lime inn blokker på i editoren.  

1. Merk blokken, og trykk på **Ctrl+C** for å **kopiere** den merkede blokken.  
Trykker du på **Ctrl+V**, kan du **lime inn** den blokken du kopierte sist, i editoren.  

2. Merk blokken, og trykk på knappen **'Kopier Ctrl+C'** i menyen **Rediger** for å **kopiere** den merkede blokken.  
Trykker du på knappen **'Lim inn Ctrl+V'** i menyen **Rediger**, kan du **lime inn** den blokken du kopierte sist, i editoren.

<br>

**Slette blokker**  

Det er i alt tre måter å slette blokker på i editoren.

1. Merk blokken, og trykk på **Backspace** for å slette den merkede blokken.<br>  

2. Du kan slette en blokk ved å **dra den i editoren** og **slippe den i blokkategoriene**.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Du kan slette en blokk ved å **dra den i editoren** og **slippe den i papirkurven**.  
Du kan se de slettede blokkene igjen i **papirkurven**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Merke flere blokker samtidig**  

Det er i alt to måter å merke flere blokker samtidig på i editoren.

1. Holder du **Shift** nede mens du drar over arbeidsområdet eller klikker på blokkene én for én,  
kan du merke flere blokker samtidig.  

2. Klikker du på **avkrysningsknappen** nederst til høyre i arbeidsområdet, kan du slå modusen 'merk flere blokker' på og av.  
Er knappen fylt med farge, er modusen på.  
Er knappen ikke fylt med farge, er modusen av.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Så lenge modusen 'merk flere blokker' er på, kan du bare merke blokker.   
Vil du flytte eller redigere de merkede blokkene samtidig, må du slå modusen av når du er ferdig med å merke.  

<br>

**Flere valg**

I tillegg kan du **høyreklikke med musen** på en blokk  
og få frem flere valg, blant annet **folde blokken sammen/ut, aktivere/deaktivere og hjelp**.  

<br>

## Python-editoren {#python-editor}

### Kodesamlingen {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Området der de **grunnleggende funksjonene** for robotkoding og den **Python-koden** som hører til roboter og utvidelsesmoduler, er delt inn i **kategorier**.  


Her er de kodekategoriene som finnes blant grunnfunksjonene (Koder).  

- Logikk (logic)
- Løkker (loops)
- Matematikk (math)
- Tekst (text)
- Liste (lists)
- Farge (color)
- Lyd (audio)
- Styring (control)

Kodene blant grunnfunksjonene gjør nøyaktig det samme som de grunnleggende blokkene i editoren for blokkoding.  

<br>

**⚙️ Merk**  
Du kan lese under [**Slik bruker du kodesamlingen**](#python-codes-usage) hvordan du koder i Python-editoren ved hjelp av kodesamlingen.

<br>

### Kodeeditoren {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Området der du skriver koden som styrer roboten.  


Velger du **Python**-editoren under [**Editorinnstillinger**](Menu#editor-settings), kan du skrive Python-kode.

<br>

### Kodens grunnstruktur {#python-structure}

Når du koder i kodeeditoren, må du følge denne grunnstrukturen.

```python
from robomation import *

# (er det en robot du vil bruke, erklæres den som en instans, eksempel)
hamster_s = HamsterS(0)

# legg oppsettskode her, som skal kjøres én gang:
def setup():
    pass

# legg kontrollkode her, som skal kjøres gjentatte ganger:
def loop():
    pass
```

Kodeeditoren tolker og kjører den koden som ligger inne i funksjonene **setup** og **loop**.  
Du må derfor skrive koden inne i funksjonene **setup** og **loop**.  
For å styre roboten må du dessuten skrive `from robomation import *` øverst i koden og erklære den roboten du vil bruke, som en instans.

**setup**  

Inne i funksjonen setup definerer du de handlingene som skal utføres i starten når koden kjøres.  
Med funksjonen **Utils.wait** kan du få handlingene til å bli utført i tidsrekkefølge.  

**loop**  
Inne i funksjonen loop definerer du de handlingene som skal gjentas så lenge koden kjører.  
De handlingene du definerer, gjentas én gang hvert 10. ms.  


<br>

### Slik bruker du kodesamlingen {#python-codes-usage}

Nedenfor beskrives med enkle eksempler **hvordan du bruker kodesamlingen når du koder**.  

### Finne den koden du vil bruke {#python-codes-find}

Kodesamlingen inneholder mange forskjellige funksjoner og koder for robotkoding.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Ser du på menypunktene i kategorien **Koder**, ser du at noen av dem har ikonet <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Klikker du én gang på menypunktet **Logikk**, skifter ikonet til <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline />, og **undermenyene** inni foldes ut, så du kan se dem.  
Et menypunkt som på denne måten har undermenyer, kalles en '**kategori**'.  

Har et menypunkt ikke ikonet <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — som **ternær** inne i kategorien **Logikk** — betyr det at menypunktet **ikke har flere undermenyer**.  
Et menypunkt som på denne måten ikke har undermenyer, kalles en '**kode**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Klikker du igjen på en kategori der undermenyene er foldet ut, skifter ikonet tilbake til <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, og undermenyene skjules.  

På denne måten kan du følge kategoriene og finne den koden du vil bruke, i kodesamlingen.

<br>

### Sette inn kode i editoren {#python-codes-insert}

Slik setter du inn kode i editoren.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Har et menypunkt ikonet <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> til venstre for navnet, betyr det at menypunktet ikke har noen **kodevalg** å velge mellom.  
Det gjelder de fleste **kategori**-menypunktene som har undermenyer.

Har et menypunkt ikonet <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> til venstre for navnet, betyr det at du kan velge **kodevalg** i menypunktet.  
Det gjelder de fleste **kode**-menypunktene som ikke har undermenyer.

**Høyreklikker** du med musen på den koden du vil sette inn i editoren, ser du de valgene du har.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Høyreklikker du på et **kode**-menypunkt, ser du de samme valgene, uansett om det er en grunnfunksjon eller en kode som hører til en robot eller et utvidelsesmodul.

- **Sett inn kode**: setter den valgte koden inn der markøren står i editoren.
- **Hjelp**: viser en hjelpetekst som beskriver hvordan koden brukes.
- **Avbryt**: lukker menyen med valg.

For koder som hører til en robot eller et utvidelsesmodul, settes koden inn som et kall av en metode på robotens instans når du velger **Sett inn kode**.  
( F.eks. `set_wheel_speed` hos HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Merk**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Kodekategorier for roboter og utvidelsesmoduler du har lagt til i programmet, men ikke bruker lenger,  
kan du fjerne fra kodesamlingen med **høyreklikk med musen → Fjern**.

<br>
