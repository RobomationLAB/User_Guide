---
title: Editor
---

# Editor

**Editoren** er det område, hvor du skriver den kode, der styrer robotten, enten med **blokke** eller med **skriptkode**.  
Herunder kan du læse, hvordan du koder i hvert af de to miljøer — **blokkodning og skriptkodning (Python)** — og hvad du skal være opmærksom på.

## Editoren til blokkodning {#block-editor}

### Blokkategorier {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Det område, hvor blokkene i RobomationLAB er inddelt i **kategorier**.  
Klikker du på en kategori, kan du se den **bloksamling**, der hører til kategorien.  

Her er de blokkategorier, der findes som standard.  

- Logik
- Løkker
- Matematik
- Tekst
- Liste
- Farve
- Lyd
- Styring
- Variabler
- Funktioner
- Andre

Tilføjer du desuden en [**robot**](Menu#robot) eller et [**udvidelsesmodul**](Menu#extension) til programmet, kan du bruge robottens eller modulets egen bloksamling i programmet.  

<br>

**⚙️ Bemærk**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategorier, du har tilføjet til programmet, men ikke bruger længere, kan du fjerne fra blokkategorierne med **højreklik med musen → Fjern**.

<br>

### Bloksamlingen {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Det område, hvor alle blokkene i en kategori er samlet.  
Blokkene i bloksamlingen kan du flytte over i kodningsområdet ved at **trække og slippe**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Bemærk**  
Vil du vide, hvordan en blok bruges, kan du med **højreklik med musen → Hjælp** se en hjælpetekst, der beskriver, hvordan hver enkelt blok bruges.  

<br>

### Kodningsområdet {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Det område, hvor du sætter de blokke sammen, du har hentet fra bloksamlingen.  


De samlede blokke konverteres til **Python-kode** i realtid,  
og når du kører koden, fortolkes den, så robotten bevæger sig og styres.  

<br>

### Blokkenes grundstruktur {#block-structure}

Når du koder i editoren til blokkodning, skal du følge denne grundstruktur.

<BlockImage module="program/Editor" id="block-structure" /><br>

Editoren til blokkodning fortolker og kører den kode, der ligger inde i funktionsblokkene **funktion opsætning** og **funktion løkke**.  
Du skal derfor skrive koden ved at lægge blokke ind i funktionsblokkene **funktion opsætning** og **funktion løkke**.  

**funktion opsætning**  
Inde i funktionsblokken funktion opsætning definerer du de handlinger, der skal udføres i starten, når koden køres.  
Med blokken **Vent** kan du få handlingerne til at blive udført i tidsmæssig orden.  

**funktion løkke**  
Inde i funktionsblokken funktion løkke definerer du de handlinger, der skal gentages, så længe koden kører.  
De handlinger, du definerer, gentages én gang hvert 10. ms.  

**⚙️ Bemærk**  
(Bortset fra de brugerdefinerede funktioner, du opretter via **kategorien Funktioner**)  
har blokke, der ligger uden for funktionsblokkene **funktion opsætning** og **funktion løkke**, ingen virkning, når koden køres.  

<br>

### Sådan bruger du blokkene {#block-usage}

**Tilføj en blok**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Du tilføjer en blok ved at **trække den fra bloksamlingen** og **slippe den i editoren**.   
<br>

**Kopiér/indsæt blokke**  

Der er i alt to måder at kopiere og indsætte blokke på i editoren.  

1. Markér blokken, og tryk på **Ctrl+C** for at **kopiere** den markerede blok.  
Trykker du på **Ctrl+V**, kan du **indsætte** den blok, du sidst kopierede, i editoren.  

2. Markér blokken, og tryk på knappen **'Kopiér Ctrl+C'** i menuen **Rediger** for at **kopiere** den markerede blok.  
Trykker du på knappen **'Indsæt Ctrl+V'** i menuen **Rediger**, kan du **indsætte** den blok, du sidst kopierede, i editoren.

<br>

**Slet blokke**  

Der er i alt tre måder at slette blokke på i editoren.

1. Markér blokken, og tryk på **Backspace** for at slette den markerede blok.<br>  

2. Du kan slette en blok ved at **trække den i editoren** og **slippe den i blokkategorierne**.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Du kan slette en blok ved at **trække den i editoren** og **slippe den i papirkurven**.  
Du kan se de slettede blokke igen i **papirkurven**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Markér flere blokke på én gang**  

Der er i alt to måder at markere flere blokke på én gang i editoren.

1. Holder du **Shift** nede, mens du trækker hen over arbejdsområdet eller klikker på blokkene én for én,  
kan du markere flere blokke på én gang.  

2. Klikker du på **afkrydsningsknappen** nederst til højre i arbejdsområdet, kan du slå tilstanden 'markér flere blokke' til og fra.  
Er knappen fyldt med farve, er tilstanden slået til.  
Er knappen ikke fyldt med farve, er tilstanden slået fra.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Så længe tilstanden 'markér flere blokke' er slået til, kan du kun markere blokke.   
Vil du flytte eller redigere de markerede blokke på én gang, skal du slå tilstanden fra, når du er færdig med at markere.  

<br>

**Flere valgmuligheder**

Ud over dette kan du **højreklikke med musen** på en blok  
og få flere valgmuligheder frem, blandt andet **fold blokken sammen/ud, aktivér/deaktivér og hjælp**.  

<br>

## Python-editoren {#python-editor}

### Kodesamlingen {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Det område, hvor de **grundlæggende funktioner** til robotkodning og den **Python-kode**, der hører til robotter og udvidelsesmoduler, er inddelt i **kategorier**.  


Her er de kodekategorier, der findes blandt grundfunktionerne (Kode).  

- Logik (logic)
- Løkker (loops)
- Matematik (math)
- Tekst (text)
- Liste (lists)
- Farve (color)
- Lyd (audio)
- Styring (control)

Koderne blandt grundfunktionerne gør nøjagtig det samme som de grundlæggende blokke i editoren til blokkodning.  

<br>

**⚙️ Bemærk**  
Du kan læse under [**Sådan bruger du kodesamlingen**](#python-codes-usage), hvordan du koder i Python-editoren ved hjælp af kodesamlingen.

<br>

### Kodeeditoren {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Det område, hvor du skriver den kode, der styrer robotten.  


Vælger du **Python**-editoren under [**Editorindstillinger**](Menu#editor-settings), kan du skrive Python-kode.

<br>

### Kodens grundstruktur {#python-structure}

Når du koder i kodeeditoren, skal du følge denne grundstruktur.

```python
from robomation import *

# (er der en robot, du vil bruge, erklæres den som en instans, eksempel)
hamster_s = HamsterS(0)

# indsæt opsætningskode her, som skal køres én gang:
def setup():
    pass

# indsæt styringskode her, som skal køres gentagne gange:
def loop():
    pass
```

Kodeeditoren fortolker og kører den kode, der ligger inde i funktionerne **setup** og **loop**.  
Du skal derfor skrive koden inde i funktionerne **setup** og **loop**.  
For at styre robotten skal du desuden skrive `from robomation import *` øverst i koden og erklære den robot, du vil bruge, som en instans.

**setup**  

Inde i funktionen setup definerer du de handlinger, der skal udføres i starten, når koden køres.  
Med funktionen **Utils.wait** kan du få handlingerne til at blive udført i tidsmæssig orden.  

**loop**  
Inde i funktionen loop definerer du de handlinger, der skal gentages, så længe koden kører.  
De handlinger, du definerer, gentages én gang hvert 10. ms.  


<br>

### Sådan bruger du kodesamlingen {#python-codes-usage}

Herunder beskrives med enkle eksempler, **hvordan du bruger kodesamlingen, når du koder**.  

### Find den kode, du vil bruge {#python-codes-find}

Kodesamlingen indeholder mange forskellige funktioner og koder til robotkodning.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Ser du på menupunkterne i kategorien **Kode**, kan du se, at nogle af dem har ikonet <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Klikker du én gang på menupunktet **Logik**, skifter ikonet til <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline />, og **undermenuerne** indeni foldes ud, så du kan se dem.  
Et menupunkt, der på denne måde har undermenuer, kaldes en '**kategori**'.  

Har et menupunkt ikke ikonet <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — som **ternær** inde i kategorien **Logik** — betyder det, at menupunktet **ikke har flere undermenuer**.  
Et menupunkt, der på denne måde ikke har undermenuer, kaldes en '**kode**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Klikker du igen på en kategori, hvis undermenuer er foldet ud, skifter ikonet tilbage til <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, og undermenuerne skjules.  

På denne måde kan du følge kategorierne og finde den kode, du vil bruge, i kodesamlingen.

<br>

### Indsæt kode i editoren {#python-codes-insert}

Sådan indsætter du kode i editoren.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Har et menupunkt ikonet <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> til venstre for navnet, betyder det, at menupunktet ikke har nogen **kodemuligheder** at vælge.  
Det gælder for de fleste **kategori**-menupunkter, der har undermenuer.

Har et menupunkt ikonet <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> til venstre for navnet, betyder det, at du kan vælge **kodemuligheder** i menupunktet.  
Det gælder for de fleste **kode**-menupunkter, der ikke har undermenuer.

**Højreklikker** du med musen på den kode, du vil indsætte i editoren, kan du se de valgmuligheder, du har.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Højreklikker du på et **kode**-menupunkt, ser du de samme valgmuligheder, uanset om det er en grundfunktion eller en kode, der hører til en robot eller et udvidelsesmodul.

- **Indsæt kode**: indsætter den valgte kode dér, hvor markøren står i editoren.
- **Hjælp**: viser en hjælpetekst, der beskriver, hvordan koden bruges.
- **Annuller**: lukker menuen med valgmuligheder.

For koder, der hører til en robot eller et udvidelsesmodul, indsættes koden som et kald af en metode på robottens instans, når du vælger **Indsæt kode**.  
( F.eks. `set_wheel_speed` hos HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Bemærk**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Kodekategorier for robotter og udvidelsesmoduler, du har tilføjet til programmet, men ikke bruger længere,  
kan du fjerne fra kodesamlingen med **højreklik med musen → Fjern**.

<br>
