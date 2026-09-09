---
title: Redigeraren
---

# Redigeraren

**Redigeraren** är området där du skriver koden som styr roboten, med **block** eller **skriptkod**.  
Nedan beskrivs hur du programmerar i miljöerna för **blockprogrammering respektive skriptprogrammering (Python)** och vad du bör tänka på.

## Blockredigeraren {#block-editor}

### Blockkategorier {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Här är blocken i RobomationLAB indelade i **kategorier**.  
När du klickar på en kategori ser du **blockpaletten** för just den kategorin.  

Följande blockkategorier finns som standard.  

- Logik
- Loopar
- Matematik
- Text
- Lista
- Färg
- Ljud
- Styrning
- Variabler
- Funktioner
- Övrigt

Om du dessutom lägger till en [**robot**](Menu#robot) eller ett [**tillägg**](Menu#extension) i programmet får du en egen blockpalett för den i programmet.  

<br>

**⚙️ Obs**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

En kategori du har lagt till i programmet men inte använder längre kan du ta bort från blockkategorierna med **högerklick → Ta bort**.

<br>

### Blockpaletten {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Här samlas alla block i varje kategori.  
Blocken i blockpaletten flyttar du till kodningsområdet genom att **dra och släppa**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Obs**  
Om du vill veta hur ett block används kan du via **högerklick → Hjälp** öppna hjälpen, som beskriver hur varje block används.  

<br>

### Kodningsområdet {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Här sätter du ihop de block du hämtat från blockpaletten.  


De block du sätter ihop omvandlas till **Python-kod** i realtid,  
och när du kör koden tolkas den så att roboten rör sig och styrs.  

<br>

### Blockens grundstruktur {#block-structure}

När du programmerar i blockredigeraren ska du följa den här grundstrukturen.

<BlockImage module="program/Editor" id="block-structure" /><br>

Blockredigeraren tolkar och kör koden som ligger inuti funktionsblocken **funktionen setup** och **funktionen loop**.  
Du ska därför skriva koden genom att lägga block inuti funktionsblocken **funktionen setup** och **funktionen loop**.  

**funktionen setup**  
Inuti funktionsblocket funktionen setup definierar du det som ska ske i början när koden körs.  
Med blocket **vänta** kan du få åtgärderna att utföras i tidsföljd.  

**funktionen loop**  
Inuti funktionsblocket funktionen loop definierar du det som ska upprepas medan koden körs.  
Det du definierar upprepas en gång var tionde millisekund.  

**⚙️ Obs**  
(Bortsett från egna funktioner som du skapat via **kategorin Funktioner**)  
block som ligger utanför funktionsblocken **funktionen setup** och **funktionen loop** påverkar inget när koden körs.  

<br>

### Så använder du blocken {#block-usage}

**Lägga till ett block**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Du lägger till ett block genom att **dra det från blockpaletten** och **släppa det i redigeraren**.   
<br>

**Kopiera/klistra in block**  

Det finns två sätt att kopiera och klistra in block i redigeraren.  

1. Markera blocket och tryck **Ctrl+C** för att **kopiera** det.  
Tryck **Ctrl+V** för att **klistra in** det senast kopierade blocket i redigeraren.  

2. Markera blocket och tryck på knappen **'Kopiera Ctrl+C'** i menyn **Redigera** för att **kopiera** det.  
Tryck på knappen **'Klistra in Ctrl+V'** i menyn **Redigera** för att **klistra in** det senast kopierade blocket i redigeraren.

<br>

**Ta bort block**  

Det finns tre sätt att ta bort block i redigeraren.

1. Markera blocket och tryck **Backspace** för att ta bort det.<br>  

2. **Dra blocket** du vill ta bort **i redigeraren** och **släpp det på blockkategorierna** för att ta bort det.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. **Dra blocket** du vill ta bort **i redigeraren** och **släpp det i papperskorgen** för att ta bort det.  
Borttagna block hittar du igen i **papperskorgen**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Markera flera block samtidigt**  

Det finns två sätt att markera flera block samtidigt i redigeraren.

1. Håll ned **Shift** och dra i arbetsytan eller klicka på blocken ett i taget,  
så markerar du flera block samtidigt.  

2. Klicka på **kryssknappen** längst ned till höger i arbetsytan för att slå på eller av läget för att markera flera block.  
När knappen är ifylld med färg är läget på.  
När knappen inte är ifylld med färg är läget av.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Så länge läget för att markera flera block är på kan du bara markera block.   
För att flytta eller ändra de markerade blocken samtidigt måste du stänga av läget när du har markerat klart.  

<br>

**Fler alternativ**

Om du **högerklickar** på ett block ser du dessutom  
flera andra alternativ, som att **fälla ihop/ut, aktivera/inaktivera blocket och Hjälp**.  

<br>

## Python-redigeraren {#python-editor}

### Kodpaletten {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Här är de **grundfunktioner** som behövs för robotprogrammering och de **Python-koder** som hör till robotar och tillägg indelade i **kategorier**.  


Följande kodkategorier finns bland grundfunktionerna (Kod).  

- Logik (logic)
- Loopar (loops)
- Matematik (math)
- Text (text)
- Lista (lists)
- Färg (color)
- Ljud (audio)
- Styrning (control)

Koderna bland grundfunktionerna gör exakt samma sak som grundblocken i blockredigeraren.  

<br>

**⚙️ Obs**  
Hur du programmerar i Python-redigeraren med hjälp av kodpaletten beskrivs under [**Så använder du kodpaletten**](#python-codes-usage).

<br>

### Kodredigeraren {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Här skriver du koden som styr roboten.  


När du väljer redigeraren **Python** i [**Redigerarinställningar**](Menu#editor-settings) kan du skriva Python-kod.

<br>

### Kodens grundstruktur {#python-structure}

När du programmerar i kodredigeraren ska du följa den här grundstrukturen.

```python
from robomation import *

# (om det finns en robot att använda deklareras den som en instans, exempel)
hamster_s = HamsterS(0)

# placera initieringskoden här, för att köra den en gång:
def setup():
    pass

# placera styrkoden här, för att köra den upprepade gånger:
def loop():
    pass
```

Kodredigeraren tolkar och kör koden som ligger inuti funktionerna **setup** och **loop**.  
Du ska därför skriva koden inuti funktionerna **setup** och **loop**.  
För att styra roboten ska du dessutom ha `from robomation import *` överst i koden och deklarera den robot du ska använda som en instans.

**setup**  

Inuti funktionen setup definierar du det som ska ske i början när koden körs.  
Med funktionen **Utils.wait** kan du få åtgärderna att utföras i tidsföljd.  

**loop**  
Inuti funktionen loop definierar du det som ska upprepas medan koden körs.  
Det du definierar upprepas en gång var tionde millisekund.  


<br>

### Så använder du kodpaletten {#python-codes-usage}

Nedan beskrivs med enkla exempel **hur du använder kodpaletten när du programmerar**.  

### Hitta den kod du vill ha {#python-codes-find}

Kodpaletten innehåller många olika funktioner och koder som du behöver för robotprogrammering.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Om du tittar på menyerna i kategorin **Kod** ser du att vissa har ikonen <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Klicka en gång på menyn **Logik**, så ändras ikonen till <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> och **undermenyerna** fälls ut.  
En meny som har undermenyer kallas en '**kategori**'.  

Om en meny inte har ikonen <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, som **ternär** inuti kategorin **Logik**, betyder det att menyn **inte har några fler undermenyer**.  
En meny utan undermenyer kallas en '**kod**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Om du klickar igen på en kategori vars undermenyer är utfällda ändras ikonen tillbaka till <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> och undermenyerna döljs.  

Genom att följa kategorierna på det här sättet hittar du den kod du vill ha i kodpaletten.

<br>

### Infoga kod i redigeraren {#python-codes-insert}

Så här infogar du kod i redigeraren.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

En meny med ikonen <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> till vänster om namnet är en meny utan **kodalternativ** att välja bland.  
Det gäller för det mesta **kategori**menyer, alltså de som har undermenyer.

En meny med ikonen <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> till vänster om namnet är en meny där du kan välja **kodalternativ**.  
Det gäller för det mesta **kod**menyer, alltså de som inte har undermenyer.

**Högerklicka** på den kod du vill infoga i redigeraren, så ser du vilka alternativ som går att välja.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

När du högerklickar på en **kod**meny ser du samma alternativ oavsett om det är en grundfunktion eller en kod som hör till en robot eller ett tillägg.

- **Infoga kod**: infogar den valda koden där markören står i redigeraren.
- **Hjälp**: öppnar hjälpen som beskriver hur koden används.
- **Avbryt**: stänger alternativmenyn.

För koder som hör till en robot eller ett tillägg infogas ett anrop av robotinstansens metod när du väljer **Infoga kod**.  
( t.ex. `set_wheel_speed` för HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Obs**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

En kodkategori som hör till en robot eller ett tillägg du har lagt till men inte använder längre  
kan du ta bort från kodpaletten med **högerklick → Ta bort**.

<br>
