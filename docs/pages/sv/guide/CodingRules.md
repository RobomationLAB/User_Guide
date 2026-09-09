---
title: Kodningsregler
---

# Kodningsregler

Det här dokumentet beskriver de kodningsregler du ska följa när du programmerar robotar i RobomationLAB.

> **Obs**: skriptkodning fungerar **enbart med Python**, och blocken omvandlas ett till ett till Python-kod som använder Python-paketet `robomation`.

> **Om ordningen**: reglerna är ordnade som gemensamma kärnregler (1–2) → regler för blockkod (3–5) → regler för Python-skriptkod (6–11). Det är lika viktigt att följa reglerna för både blockkod och Python-kod.

<br>

## 1. Begränsningar vid ett-till-ett-omvandling mellan block och Python {#1}
Blockredigeraren och Python-redigeraren motsvarar varandra ett till ett och omvandlas åt båda hållen i realtid.

- Block → Python: block omvandlas alltid till korrekt Python-kod.
- Python → block: bara **kod som går att uttrycka med block** omvandlas.

Om du skriver följande slags kod i Python-redigeraren kan därför växlingen från Python till blockredigeraren misslyckas,  
och i så fall visas också varför växlingen inte gick.

1) Kod med syntaxfel i Python
2) Kod som använder funktioner, metoder eller syntax som inte motsvaras av block (som inte finns definierade i omvandlingsreglerna)

För att växlingen till blockredigeraren ska fortsätta fungera  
måste du hålla dig till de klasser, metoder och funktioner samt den syntax som beskrivs i det här dokumentet och i dokumenten för respektive robot.

<br>

## 2. Regler för hur kod ska anges {#2}
Du får bara använda de klasser, metoder och funktioner som anges i **API-manualen för robomation i Python** och i **dokumentet med omvandlingsregler mellan block och Python**.  
Det är strängt förbjudet att skapa och använda nya robotstyrningsmetoder som inte är definierade i dokumenten ovan.
Det är dock tillåtet om användaren själv ber om att en ny funktion skapas.

Tillfälliga variabler som inte förekommer i omvandlingsexemplen i dokumenten ovan (till exempel andra variabler än den som håller robotinstansen) får bara deklareras när användaren ber om att en variabel skapas.  
Metodernas argument måste dessutom alltid skrivas som literaler.  

```python
# rätt exempel
hamster_s.set_wheel_speed('both', 100)

# fel exempel – en funktion som inte finns i API-manualen används
hamster_s.set_wheel('both', 100)

# fel exempel – en egen variabel deklareras
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Blockkodens grundstruktur {#3}
All blockkod som anges ska alltid innehålla grundstrukturen med de översta funktionsblocken funktionen setup och funktionen loop, som är programmets ingångspunkter.  
Med den här regeln får all blockkod hädanefter följande grundstruktur.

| Blockstruktur (Block Composer) | Så anges den (textformat) |
| --- | --- |
| funktionen setup | funktionen setup |
| (inre block) | (inre block) |
| funktionen loop | funktionen loop |
| (inre block) | (inre block) |

<br>

## 4. Blockkodens format (regler för radbrytning och indrag) {#4}
- De översta blocken (funktionen setup, funktionen loop med flera) vänsterjusteras.
- Varje kommandoblock måste skiljas åt med ett radbrytningstecken, så att bara ett block skrivs ut per rad.
- Underordnade block inuti block som har ett eget körningsområde (om, upprepa, funktionsdefinitioner med flera) ska dras in, så att hierarkin framgår tydligt.

<br>

## 5. Regler för inre block och villkorsuttryck {#5}
Värdet i en rullgardinsmeny eller ett inmatat värde är blockets funktionella argument, och uttrycks genom att sättas in direkt inom hakparenteser ([]) på den plats i blockets text där värdet står.  
På så sätt återges blockets fasta text och det värde användaren valt eller matat in visuellt som en helhet.

All blockkod ska anges i en form som med hakparenteser ([]) innehåller både blockets egen benämning, valda värden i rullgardinsmenyer och de värden användaren matat in,  
så att blockens faktiska utseende i Block Composer återges så nära som möjligt i text.  

| Blockstruktur (Block Composer) | Så anges den (textformat) |
| --- | --- |
| om [villkor] utför [kommando] annars [kommando] | om [villkor] utför [kommando] annars [kommando] |
| RaccoonBot: ställ in styrläget till [hastighet] | RaccoonBot: ställ in styrläget till [hastighet] |
| RaccoonBot: ställ in hastigheten för led [1] till [100] | RaccoonBot: ställ in hastigheten för led [1] till [100] |

<br>

## 6. Skriptkodens grundstruktur {#6}
All skriptkod (Python) som anges ska alltid innehålla grundstrukturen med funktionerna setup() och loop(), som är programmets ingångspunkter.  
Överst i koden ska dessutom `from robomation import *` finnas med, så att de klasser och verktyg som behövs för att styra roboten går att använda, och de robotar som ska användas deklareras som instanser.  
Med den här regeln får all skriptkod (Python) hädanefter följande grundstruktur.

```python
# grundstruktur för Python-kod
from robomation import *

# (om det finns en robot att använda deklareras den som en instans, exempel)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Skriptkodens format (regler för radbrytning och indrag) {#7}
- De översta funktionerna (setup, loop med flera) vänsterjusteras.
- Indraget efter en radbrytning ska alltid vara **en tabb (`\t`)**. (Samma som redigerarens indrag.)

<br>

## 8. Regler för robotstyrning (instanser / metoder) {#8}
När du styr en robot ska du följa följande regler.  

1) Ha med `from robomation import *` överst i koden.
2) Deklarera den robot du ska använda som en instans. Använd det förvalda variabelnamnet för varje robot och ge index från och med 0.
3) Styr roboten genom att anropa metoder på den deklarerade instansen.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Om du använder flera robotar av samma slag deklarerar du dem med index 0, 1, 2 … (t.ex. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Metoder som ställer in hjulhastigheten eller flyttar roboten sköter själva den initiering som behövs (till exempel att rensa tidigare rörelsekommandon), så du behöver inte skriva någon egen initieringskod före dem.

<br>

## 9. Regler för anrop av verktygsfunktioner {#9}
Gemensamma verktygsfunktioner som fördröjning, ljuduppspelning, loggutskrift och färger anropas som metoder på klassen `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

En utförlig lista över verktygsfunktionerna finns i dokumenten nedan.
- [Färg](../common/Color)
- [Ljud](../common/Audio)
- [Styrning](../common/Control)

<br>

## 10. Regeln om att robotens egna metoder går först {#10}
När du styr robotens maskinvara (hjulhastighet, lysdioder, ljud med mera)  
ska du i första hand använda robotinstansens egna metoder (till exempel HamsterS) framför de gemensamma verktygsfunktionerna.

Om du till exempel vill få roboten att låta  
ska du hellre använda metoden `sound_clip()` på HamsterS-instansen än verktygsfunktionen `Utils.play_sound()`.

```python
# ljudet kommer från HamsterS-roboten. (rekommenderas)
hamster_s.sound_clip('beep')

# ljudet kommer från datorn / surfplattan / mobilen. (rekommenderas inte)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regler för import {#11}
När du skriver Python-kod importerar du bara de moduler som koden behöver för att köras.
- För robotstyrning har du som standard med `from robomation import *` överst i koden.
- Kod som använder `math.` får automatiskt `import math`, och kod som använder `random.` får automatiskt `import random`.
- Importera inga andra moduler i onödan.
