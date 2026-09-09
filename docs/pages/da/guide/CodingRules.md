---
title: Kodningsregler
---

# Kodningsregler

Dette dokument beskriver de kodningsregler, du skal følge, når du koder robotter i RobomationLAB.

> **Bemærk**: Skriptkodning fungerer **udelukkende med Python**, og blokkene konverteres én til én til Python-kode, der bruger Python-pakken `robomation`.

> **Om rækkefølgen**: Reglerne står i denne orden: fælles kerneregler (1-2) → regler for blokkode (3-5) → regler for Python-skriptkode (6-11). Det er lige vigtigt at følge dem, både når du laver blokkode og Python-kode.

<br>

## 1. Begrænsninger for konverteringen én til én mellem blokke og Python {#1}
Editoren til blokkodning og editoren til Python-kodning svarer én til én til hinanden og konverteres begge veje i realtid.

- Blokke → Python: blokke konverteres altid til korrekt Python-kode.
- Python → blokke: kun **kode, der kan udtrykkes med blokke**, konverteres.

Skriver du derfor følgende slags kode i Python-editoren, skifter den måske ikke fra Python til editoren til blokkodning,  
og i så fald vises også årsagen til, at skiftet mislykkedes.

1) Kode med Python-syntaksfejl
2) Kode, der bruger funktioner, metoder eller syntaks, som ikke svarer til en blok (og altså ikke er defineret i konverteringsreglerne)

For at skiftet til editoren til blokkodning bliver ved med at virke,  
skal du skrive kode inden for de klasser, metoder og funktioner samt den understøttede syntaks, der er defineret i dette dokument og i dokumenterne for de enkelte robotter.

<br>

## 2. Regler for at angive kode {#2}
Du må kun bruge de klasser, metoder og funktioner, der står i **manualen til robomation-API'et i Python** og i **dokumentet med konverteringsregler mellem blokke og Python**.  
Det er strengt forbudt at lave og bruge nye metoder til robotstyring, som ikke er defineret i ovenstående dokumenter, når du styrer robotten.
Det er dog tilladt, hvis brugeren beder om at få lavet en ny funktion.

Midlertidige variabler, der ikke optræder i konverteringseksemplerne i ovenstående dokumenter (for eksempel andre variabler end den, der indeholder robotinstansen), må kun erklæres, når brugeren beder om at få oprettet en variabel.  
Desuden skal parameterværdier til metoder altid skrives som literaler.  

```python
# korrekt eksempel
hamster_s.set_wheel_speed('both', 100)

# forkert eksempel - bruger en funktion, der ikke står i API-manualen
hamster_s.set_wheel('both', 100)

# forkert eksempel - erklærer en vilkårlig variabel
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Blokkodens grundstruktur {#3}
Al blokkode, der angives, skal altid indeholde grundstrukturen med de øverste funktionsblokke funktion opsætning og funktion løkke, som er programmets indgangspunkter.  
Med denne regel får al blokkode fremover følgende grundstruktur.

| Blokstruktur (Block Composer) | Sådan angives den (tekstformat) |
| --- | --- |
| funktion opsætning | funktion opsætning |
| (indre blokke) | (indre blokke) |
| funktion løkke | funktion løkke |
| (indre blokke) | (indre blokke) |

<br>

## 4. Blokkodens format (regler for linjeskift og indrykning) {#4}
- De øverste blokke (funktion opsætning, funktion løkke med flere) venstrestilles.
- Hver kommandoblok skal adskilles med et linjeskifttegn, så der kun skrives én blok pr. linje.
- Underblokke inde i blokke, der har deres eget udførelsesområde (hvis, gentag, funktionsdefinitioner med flere), rykkes ind, så hierarkiet fremgår tydeligt.

<br>

## 5. Regler for indre blokke og betingelsesudtryk {#5}
Den valgte værdi i en rullemenu eller en indtastet værdi er blokkens funktionelle argument, og den udtrykkes ved at blive sat direkte ind i kantede parenteser ([]) dér, hvor værdien står i blokkens tekst.  
På den måde gengives blokkens egen tekst og den værdi, brugeren har valgt eller indtastet, visuelt som en helhed.

Al blokkode skal angives i en form, der med kantede parenteser ([]) indeholder både blokkens egen betegnelse, de valgte værdier i rullemenuer og de værdier, brugeren har indtastet,  
så blokkenes faktiske udseende i Block Composer gengives så tæt på virkeligheden som muligt i tekst.  

| Blokstruktur (Block Composer) | Sådan angives den (tekstformat) |
| --- | --- |
| hvis [betingelse] udfør [kommando] ellers [kommando] | hvis [betingelse] udfør [kommando] ellers [kommando] |
| RaccoonBot: indstil styringstilstanden til [hastighed] | RaccoonBot: indstil styringstilstanden til [hastighed] |
| RaccoonBot: indstil hastigheden for led [1] til [100] | RaccoonBot: indstil hastigheden for led [1] til [100] |

<br>

## 6. Skriptkodens grundstruktur {#6}
Al skriptkode (Python), der angives, skal altid indeholde grundstrukturen med funktionerne setup() og loop(), som er programmets indgangspunkter.  
Desuden skal `from robomation import *` stå øverst i koden, så du kan bruge de klasser og hjælpefunktioner, der skal til for at styre robotten, og den robot, du vil bruge, erklæres som en instans.  
Med denne regel får al skriptkode (Python) fremover følgende grundstruktur.

```python
# Python-kodens grundstruktur
from robomation import *

# (er der en robot, du vil bruge, erklæres den som en instans, eksempel)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Skriptkodens format (regler for linjeskift og indrykning) {#7}
- De øverste funktioner (setup, loop med flere) venstrestilles.
- Indrykningen ved linjeskift skal altid være **1 tabulator (`\t`)**. (Det samme som editorens indrykning)

<br>

## 8. Regler for robotstyring (instanser / metoder) {#8}
Når du styrer robotten, skal du følge disse regler.  

1) Skriv `from robomation import *` øverst i koden.
2) Erklær den robot, du vil bruge, som en instans. Brug det standardvariabelnavn, der er fastlagt for robotten, og giv indeks fra 0 og opefter.
3) Styr robotten ved at kalde metoderne på den instans, du har erklæret.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Bruger du flere robotter af samme type, erklærer du dem med indeks 0, 1, 2 … (f.eks. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Når du indstiller robottens hjulhastighed, får den til at køre og lignende, klarer metoderne selv den nødvendige klargøring indvendigt (for eksempel at rydde op efter den forrige kørselskommando), så du behøver ikke at skrive særskilt kode til klargøring først.

<br>

## 9. Regler for kald af hjælpefunktioner {#9}
Fælles hjælpefunktioner som tidsforsinkelse, lydafspilning, logudskrift og farver kalder du gennem metoderne i klassen `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Du kan se den fulde liste over hjælpefunktioner i dokumenterne herunder.
- [Farve](../common/Color)
- [Lyd](../common/Audio)
- [Styring](../common/Control)

<br>

## 10. Regel om at bruge robottens egne metoder først {#10}
Når du styrer robottens hardware (hjulhastighed, lysdioder, lyd med mere),  
skal du bruge de særlige metoder på robotinstansen (for eksempel 'HamsterS') frem for de fælles hjælpefunktioner.

Skal robotten for eksempel lave en lyd,  
skal du bruge metoden `sound_clip()` på 'HamsterS'-instansen frem for hjælpefunktionen `Utils.play_sound()`.

```python
# lyden kommer fra HamsterS-robotten. (anbefales)
hamster_s.sound_clip('beep')

# lyden kommer fra pc'en / tabletten / mobilenheden. (anbefales ikke)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regler for import {#11}
Når du skriver Python-kode, skal du kun importere de moduler, der skal bruges for at køre koden.
- `from robomation import *` skal som udgangspunkt stå øverst i koden, så robotten kan styres.
- Bruger koden `math.`, tilføjes `import math` automatisk, og bruger den `random.`, tilføjes `import random` automatisk.
- Andre unødvendige moduler må ikke importeres.
