---
title: Programmeerregels
---

# Programmeerregels

Dit document beschrijft de programmeerregels die je bij het roboprogrammeren in RobomationLAB moet naleven.

> **Opmerking**: Het scriptprogrammeren werkt **uitsluitend met Python**; blokken worden één op één omgezet in Python-code die het Python-pakket `robomation` gebruikt.

> **Over de volgorde**: eerst de gemeenschappelijke kernregels (1~2), dan de regels voor blokcode (3~5), dan de regels voor Python-scriptcode (6~11). Zowel bij het maken van blokcode als van Python-code zijn ze belangrijk om na te leven.

<br>

## 1. Beperking van de één-op-één-omzetting blokken ↔ Python {#1}
De blokeditor en de Python-editor komen één op één met elkaar overeen en worden in realtime in twee richtingen omgezet.

- Blokken → Python: blokken worden altijd in correcte Python-code omgezet.
- Python → blokken: de omzetting lukt alleen bij **code die als blokken kan worden weergegeven**.

Schrijf je dus in de Python-editor code zoals hieronder, dan kan het wisselen van Python naar de blokeditor mislukken;  
in dat geval wordt ook de reden van het mislukken weergegeven.

1) Code met Python-syntaxfouten
2) Code die functies, methoden of syntaxis gebruikt waar geen blok bij hoort (die dus niet in de omzettingsregels zijn gedefinieerd)

Om het wisselen naar de blokeditor altijd te laten werken,  
moet je de code schrijven binnen de klassen, methoden, functies en de ondersteunde syntaxis die in dit document en in de documenten van de afzonderlijke robots zijn gedefinieerd.

<br>

## 2. Regels voor het opgeven van code {#2}
Je mag alleen de klassen, methoden en functies gebruiken die in de **handleiding van de Python-API van robomation** en in het **document met de omzettingsregels blokken ↔ Python** staan.  
Voor de robotbesturing nieuwe besturingsmethoden maken die in de genoemde documenten niet zijn gedefinieerd en die gebruiken, is streng verboden.
Alleen als de gebruiker uitdrukkelijk vraagt om een nieuwe functie te maken, mag dat.

Hulpvariabelen die in de omzettingsvoorbeelden van de genoemde documenten niet voorkomen (dus extra variabelen naast de variabele voor de robotinstantie) mogen alleen worden gedeclareerd als de gebruiker vraagt om een variabele te maken.  
Bovendien moeten de argumenten van een methode beslist als letterlijke waarden worden geschreven.  

```python
# goed voorbeeld
hamster_s.set_wheel_speed('both', 100)

# fout voorbeeld — een functie die niet in de API-handleiding staat
hamster_s.set_wheel('both', 100)

# fout voorbeeld — een willekeurige variabele declareren
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Basisstructuur van de blokcode {#3}
Bij elke opgave van blokcode horen de bovenste functieblokken functie setup en functie loop, die als ingang van het programma dienen, altijd als basisstructuur erbij.  
Met deze regel heeft elke blokcode voortaan de volgende basisstructuur.

| Blokstructuur (Block Composer) | Opgave (als tekst) |
| --- | --- |
| functie setup | functie setup |
| (interne blokken) | (interne blokken) |
| functie loop | functie loop |
| (interne blokken) | (interne blokken) |

<br>

## 4. Vorm van de blokcode (regels voor regeleinde en inspringing) {#4}
- De bovenste blokken (functie setup, functie loop enzovoort) worden links uitgelijnd.
- Elk opdrachtblok moet met een regeleindeteken worden gescheiden, zodat per regel maar één blok wordt uitgevoerd.
- Onderliggende blokken die in een blok met een intern uitvoergebied staan (als, herhalen, functiedefinitie enzovoort) worden ingesprongen, zodat de hiërarchie duidelijk te zien is.

<br>

## 5. Regels voor interne blokken en het weergeven van voorwaarden {#5}
De keuzewaarde van een keuzelijst of een invoerwaarde hoort bij een functioneel argument van het blok en wordt op de plaats waar die waarde in de tekst van het blok staat, direct tussen rechte haken ([]) ingevoegd.  
Dat dient om de vaste tekst van het blok en de door de gebruiker gekozen of ingevoerde waarde samen visueel weer te geven.

Elke blokcode moet de vaste benaming van het blok, de keuzewaarden van de keuzelijsten en de door de gebruiker ingevoerde waarden alle tussen rechte haken ([]) bevatten,  
zodat de werkelijke vorm van de blokken in Block Composer als tekst zo goed mogelijk wordt weergegeven.  

| Blokstructuur (Block Composer) | Opgave (als tekst) |
| --- | --- |
| als [voorwaarde] voer uit [opdracht] anders [opdracht] | als [voorwaarde] voer uit [opdracht] anders [opdracht] |
| RaccoonBot: stel besturingsmodus in op [snelheid] | RaccoonBot: stel besturingsmodus in op [snelheid] |
| RaccoonBot: stel snelheid van gewricht [1] in op [100] | RaccoonBot: stel snelheid van gewricht [1] in op [100] |

<br>

## 6. Basisstructuur van de scriptcode {#6}
Bij elke opgave van scriptcode (Python) horen de functies setup() en loop(), die als ingang van het programma dienen, altijd als basisstructuur erbij.  
Bovendien hoort `from robomation import *` aan het begin van de code, zodat de klassen en hulpfuncties die je voor de robotbesturing nodig hebt beschikbaar zijn, en wordt de robot die je wilt gebruiken als instantie gedeclareerd.  
Met deze regel heeft elke scriptcode (Python) voortaan de volgende basisstructuur.

```python
# basisstructuur van de Python-code
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

<br>

## 7. Vorm van de scriptcode (regels voor regeleinde en inspringing) {#7}
- De bovenste functies (setup, loop enzovoort) worden links uitgelijnd.
- De inspringing na een regeleinde richt zich beslist op **één tab (`\t`)**. (net als de inspringing in de editor)

<br>

## 8. Regels voor robotbesturing (instantie / methoden) {#8}
Voor het besturen van een robot moet je de volgende regels naleven.  

1) `from robomation import *` hoort aan het begin van de code.
2) De robot die je wilt gebruiken wordt als instantie gedeclareerd. Als variabelenaam neem je de standaardnaam die voor die robot vastligt, de index begint bij 0.
3) De robot wordt bestuurd door de methoden van de gedeclareerde instantie aan te roepen.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Gebruik je meerdere robots van hetzelfde soort, declareer die dan met oplopende index 0, 1, 2 … (bijv. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Bij het instellen van de wielsnelheid, bij het rijden en dergelijke regelen de methoden de nodige initialisatie intern (bijvoorbeeld het opruimen van een eerdere rijopdracht) — je hoeft daarvoor geen eigen voorbereidende code te schrijven.

<br>

## 9. Regels voor het aanroepen van hulpfuncties {#9}
Gemeenschappelijke hulpfuncties — tijdvertraging, geluid afspelen, loguitvoer, kleuren — roep je aan via de methoden van de klasse `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

De uitgebreide lijst met hulpfuncties vind je in de volgende documenten.
- [Kleur](../common/Color)
- [Audio](../common/Audio)
- [Besturing](../common/Control)

<br>

## 10. Regel over de voorkeur voor robotspecifieke methoden {#10}
Bij het besturen van de roboterhardware (wielsnelheid, led, geluid enzovoort)  
hebben de eigen methoden van de robotinstantie (bijv. „HamsterS") de voorkeur boven de gemeenschappelijke hulpfuncties.

Moet er bijvoorbeeld een geluid via de robot worden weergegeven,  
dan heeft de methode `sound_clip()` van de instantie „HamsterS" de voorkeur boven de hulpfunctie `Utils.play_sound()`.

```python
# het geluid komt uit de robot HamsterS. (aanbevolen)
hamster_s.sound_clip('beep')

# het geluid komt uit de pc / tablet / mobiel apparaat. (niet aanbevolen)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regels voor imports {#11}
Bij het schrijven van Python-code importeer je alleen de modules die voor het uitvoeren van de code nodig zijn.
- Voor de robotbesturing hoort `from robomation import *` in principe aan het begin van de code.
- Bij code die `math.` gebruikt wordt automatisch `import math` toegevoegd, bij code met `random.` overeenkomstig `import random`.
- Overige, niet benodigde modules worden niet geïmporteerd.
