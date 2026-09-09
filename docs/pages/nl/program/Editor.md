---
title: Editor
---

# Editor

De **editor** is het gebied waar je met **blokken** of **scriptcode** de code voor het besturen van een robot schrijft.  
Hieronder wordt beschreven hoe je in de omgeving voor **blokprogrammeren of script-(Python-)programmeren** programmeert en waarop je moet letten.

## Blokeditor {#block-editor}

### Blokcategorieën {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Het gebied waarin de blokken van RobomationLAB per **categorie** zijn ingedeeld.  
Klik je op een categorie, dan zie je het **blokpalet** van die categorie.  

De categorieën die standaard aanwezig zijn:  

- Logica
- Lussen
- Wiskunde
- Tekst
- Lijst
- Kleur
- Audio
- Besturing
- Variabelen
- Functies
- Overige

Voeg je daarnaast een [**robot**](Menu#robot) of een [**uitbreiding**](Menu#extension) aan het programma toe, dan is in het programma ook het eigen blokpalet daarvan beschikbaar.  

<br>

**⚙️ Opmerking**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Categorieën van toegevoegde blokken die je niet meer nodig hebt, kun je met **rechtsklik → Verwijderen** uit de blokcategorieën verwijderen.

<br>

### Blokpalet {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Het gebied waarin alle blokken van een categorie zijn verzameld.  
De blokken uit het blokpalet kun je met **slepen en neerzetten** naar het programmeergebied verplaatsen.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Opmerking**  
Wil je het gebruik van een blok nalezen, dan vind je met **rechtsklik → Help** bij elk blok een help die het gebruik uitlegt.  

<br>

### Programmeergebied {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Het gebied waarin je de blokken uit het blokpalet in elkaar zet.  


De in elkaar gezette blokken worden in realtime in **Python-code** omgezet;  
voer je de code uit, dan wordt die geïnterpreteerd en kun je daarmee de robot bewegen en besturen.  

<br>

### Basisstructuur van de blokken {#block-structure}

Bij het programmeren in de blokeditor moet je de volgende basisstructuur naleven.

<BlockImage module="program/Editor" id="block-structure" /><br>

De blokeditor interpreteert de code binnen de functieblokken **functie setup** en **functie loop** en voert die uit.  
Je moet je code dus schrijven door blokken in de functieblokken **functie setup** en **functie loop** te zetten.  

**functie setup**  
In het functieblok functie setup definieer je de acties die bij het uitvoeren van de code aan het begin worden uitgevoerd.  
Met het blok **wacht** kun je ervoor zorgen dat de acties op tijd achter elkaar verlopen.  

**functie loop**  
In het functieblok functie loop definieer je de acties die tijdens het uitvoeren van de code steeds opnieuw worden uitgevoerd.  
De gedefinieerde acties worden ongeveer elke 10 ms opnieuw uitgevoerd.  

**⚙️ Opmerking**  
(Afgezien van eigen functies die je via de **categorie Functies** hebt gemaakt)  
Blokken die buiten de functieblokken **functie setup** of **functie loop** liggen, hebben bij het uitvoeren van de code geen effect.  

<br>

### Blokken gebruiken {#block-usage}

**Een blok toevoegen**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Het blok dat je wilt toevoegen **sleep je uit het blokpalet** en **zet je in de editor neer** — zo wordt het toegevoegd.   
<br>

**Blokken kopiëren / plakken**  

Er zijn twee manieren om in de editor blokken te kopiëren en te plakken.  

1. Kies een blok en druk op **Ctrl+C** — het gekozen blok wordt **gekopieerd**.  
Druk je op **Ctrl+V**, dan wordt het laatst gekopieerde blok in de editor **geplakt**.  

2. Kies een blok en druk in het menu **Bewerken** op **„Kopiëren Ctrl+C"** — het gekozen blok wordt **gekopieerd**.  
Druk je in het menu **Bewerken** op **„Plakken Ctrl+V"**, dan wordt het laatst gekopieerde blok in de editor **geplakt**.

<br>

**Blokken verwijderen**  

Er zijn drie manieren om in de editor blokken te verwijderen.

1. Kies een blok en druk op **Backspace** — het gekozen blok wordt verwijderd.<br>  

2. Het blok dat je wilt verwijderen **sleep je in de editor** en **zet je op de blokcategorieën neer** — zo wordt het verwijderd.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Het blok dat je wilt verwijderen **sleep je in de editor** en **zet je op de prullenbak neer** — zo wordt het verwijderd.  
Verwijderde blokken kun je in de **prullenbak** terugzien.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Meerdere blokken tegelijk selecteren**  

Er zijn twee manieren om in de editor meerdere blokken tegelijk te selecteren.

1. Houd je de **Shift**-toets ingedrukt en sleep je over het werkgebied of klik je de blokken één voor één aan,  
dan kun je meerdere blokken tegelijk selecteren.  

2. Met de **vinkjesknop** rechtsonder in het werkgebied zet je de modus „meerdere blokken selecteren" aan of uit.  
Is de knop met kleur gevuld, dan staat de modus aan.  
Is de knop niet met kleur gevuld, dan staat de modus uit.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Zolang de modus „meerdere blokken selecteren" aan staat, kun je alleen blokken selecteren.   
Wil je de gekozen blokken samen verplaatsen of bewerken, dan moet je de selectie afsluiten en de modus uitzetten.  

<br>

**Extra opties**

Klik je een blok bovendien **met de rechtermuisknop** aan,  
dan vind je verschillende extra opties zoals **blok inklappen/uitklappen, activeren/deactiveren en Help**.  

<br>

## Python-editor {#python-editor}

### Codepalet {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Het gebied waarin de **basisfuncties** die je voor het roboprogrammeren nodig hebt en de **Python-codes** van de robots en uitbreidingen per **categorie** zijn ingedeeld.  


De codecategorieën van de basisfuncties (Code) zijn:  

- Logica (logic)
- Lussen (loops)
- Wiskunde (math)
- Tekst (text)
- Lijst (lists)
- Kleur (color)
- Audio (audio)
- Besturing (control)

De codes van de basisfuncties doen hetzelfde als de basisblokken in de blokeditor.  

<br>

**⚙️ Opmerking**  
Hoe je met het codepalet in de Python-editor programmeert, staat onder [**Het codepalet gebruiken**](#python-codes-usage).

<br>

### Code-editor {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Het gebied waarin je de code voor het besturen van een robot schrijft.  


Kies je onder [**Editorinstelling**](Menu#editor-settings) de editor **Python**, dan kun je Python-code schrijven.

<br>

### Basisstructuur van de code {#python-structure}

Bij het programmeren in de code-editor moet je de volgende basisstructuur naleven.

```python
from robomation import *

# (als je een robot gebruikt, die als instantie declareren, voorbeeld)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

De code-editor interpreteert de code binnen de functies **setup** en **loop** en voert die uit.  
Je moet je code dus binnen de functies **setup** en **loop** schrijven.  
Bovendien hoort voor het besturen van een robot `from robomation import *` aan het begin van de code en moet de robot die je wilt gebruiken als instantie worden gedeclareerd.

**setup**  

In de functie setup definieer je de acties die bij het uitvoeren van de code aan het begin worden uitgevoerd.  
Met de functie **Utils.wait** kun je ervoor zorgen dat de acties op tijd achter elkaar verlopen.  

**loop**  
In de functie loop definieer je de acties die tijdens het uitvoeren van de code steeds opnieuw worden uitgevoerd.  
De gedefinieerde acties worden ongeveer elke 10 ms opnieuw uitgevoerd.  


<br>

### Het codepalet gebruiken {#python-codes-usage}

Hieronder wordt aan de hand van eenvoudige voorbeelden beschreven **hoe je het codepalet bij het programmeren gebruikt**.  

### De gewenste code vinden {#python-codes-find}

Het codepalet biedt veel functies en codes die je voor het roboprogrammeren nodig hebt.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Bekijk je de items in de categorie **Code**, dan vind je bij sommige het pictogram <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Klik je het item **Logica** één keer aan, dan wordt het pictogram <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> en klappen de **subitems** daarin open.  
Een item met subitems heet een „**categorie**".  

Ontbreekt bij een item het pictogram <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — zoals bij **ternair** in de categorie **Logica** —, dan betekent dat dat er daarin **geen verdere subitems** zijn.  
Een item zonder subitems heet een „**code**".  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Klik je een uitgeklapte categorie opnieuw aan, dan wordt het pictogram weer <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> en worden de subitems verborgen.  

Zo kun je de categorieën volgen en in het codepalet de gewenste code vinden.

<br>

### Code in de editor invoegen {#python-codes-insert}

Zo voeg je code in de editor in.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Staat er links van de naam van een item het pictogram <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline />, dan betekent dat dat er voor dat item geen **code-opties** te kiezen zijn.  
Dat geldt meestal voor de **categorie**-items met subitems.

Staat er links van de naam van een item het pictogram <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline />, dan betekent dat dat er voor dat item **code-opties** te kiezen zijn.  
Dat geldt meestal voor de **code**-items zonder subitems.

Klik je de code die je in de editor wilt invoegen met de **rechtermuisknop** aan, dan zie je de beschikbare opties.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Klik je een **code**-item met de rechtermuisknop aan, dan vind je — zonder verschil tussen de basisfuncties en de codes van de robots en uitbreidingen — dezelfde opties:

- **Code invoegen**: voegt de gekozen code op de cursorpositie in de editor in.
- **Help**: toont de help die het gebruik van die code uitlegt.
- **Annuleren**: sluit het optiemenu.

Bij de codes van de robots en uitbreidingen wordt met **Code invoegen** een methodeaanroep van de betreffende robotinstantie ingevoegd.  
( bijv. `set_wheel_speed` van HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Opmerking**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Codecategorieën van de toegevoegde robots of uitbreidingen die je niet meer nodig hebt,  
kun je met **rechtsklik → Verwijderen** uit het codepalet verwijderen.

<br>
