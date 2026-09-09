---
title: Kodingsregler
---

# Kodingsregler

Dette dokumentet beskriver de kodingsreglene du skal følge når du koder roboter i RobomationLAB.

> **Merk**: Skriptkoding fungerer **bare med Python**, og blokkene konverteres én til én til Python-kode som bruker Python-pakken `robomation`.

> **Om rekkefølgen**: Reglene står i denne rekkefølgen: felles kjerneregler (1-2) → regler for blokkode (3-5) → regler for Python-skriptkode (6-11). Det er like viktig å følge dem både når du lager blokkode og Python-kode.

<br>

## 1. Begrensninger for konverteringen én til én mellom blokker og Python {#1}
Editoren for blokkoding og editoren for Python-koding svarer én til én til hverandre og konverteres begge veier i sanntid.

- Blokker → Python: blokker konverteres alltid til korrekt Python-kode.
- Python → blokker: bare **kode som kan uttrykkes med blokker**, konverteres.

Skriver du derfor slik kode i Python-editoren, hender det at den ikke skifter fra Python til editoren for blokkoding,  
og da vises også årsaken til at skiftet mislyktes.

1) Kode med syntaksfeil i Python
2) Kode som bruker funksjoner, metoder eller syntaks som ikke svarer til en blokk (og altså ikke er definert i konverteringsreglene)

For at skiftet til editoren for blokkoding skal fortsette å virke,  
må du skrive kode innenfor de klassene, metodene og funksjonene samt den støttede syntaksen som er definert i dette dokumentet og i dokumentene for de enkelte robotene.

<br>

## 2. Regler for å angi kode {#2}
Du kan bare bruke de klassene, metodene og funksjonene som står i **manualen for robomation-API-et i Python** og i **dokumentet med konverteringsregler mellom blokker og Python**.  
Det er strengt forbudt å lage og bruke nye metoder for robotstyring som ikke er definert i dokumentene ovenfor, når du styrer roboten.
Det er likevel tillatt hvis brukeren ber om å få laget en ny funksjon.

Midlertidige variabler som ikke finnes i konverteringseksemplene i dokumentene ovenfor (for eksempel andre variabler enn den som inneholder robotinstansen), kan bare erklæres når brukeren ber om å få opprettet en variabel.  
Dessuten skal parameterverdier til metoder alltid skrives som literaler.  

```python
# riktig eksempel
hamster_s.set_wheel_speed('both', 100)

# feil eksempel - bruker en funksjon som ikke står i API-manualen
hamster_s.set_wheel('both', 100)

# feil eksempel - erklærer en vilkårlig variabel
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Blokkodens grunnstruktur {#3}
All blokkode som angis, skal alltid inneholde grunnstrukturen med de øverste funksjonsblokkene funksjon oppsett og funksjon løkke, som er programmets inngangspunkter.  
Med denne regelen får all blokkode heretter denne grunnstrukturen.

| Blokkstruktur (Block Composer) | Slik angis den (tekstformat) |
| --- | --- |
| funksjon oppsett | funksjon oppsett |
| (indre blokker) | (indre blokker) |
| funksjon løkke | funksjon løkke |
| (indre blokker) | (indre blokker) |

<br>

## 4. Blokkodens format (regler for linjeskift og innrykk) {#4}
- De øverste blokkene (funksjon oppsett, funksjon løkke med flere) venstrejusteres.
- Hver kommandoblokk må skilles med et linjeskifttegn, så det bare skrives ut én blokk per linje.
- Underblokker inne i blokker som har sitt eget kjøringsområde (hvis, gjenta, funksjonsdefinisjoner med flere), rykkes inn, så hierarkiet kommer tydelig frem.

<br>

## 5. Regler for indre blokker og betingelsesuttrykk {#5}
Den valgte verdien i en nedtrekksmeny eller en innskrevet verdi er blokkens funksjonelle argument, og den uttrykkes ved å settes rett inn i hakeparenteser ([]) der verdien står i blokkens tekst.  
På den måten gjengis blokkens egen tekst og den verdien brukeren har valgt eller skrevet inn, visuelt som en helhet.

All blokkode skal angis i en form som med hakeparenteser ([]) inneholder både blokkens egen betegnelse, de valgte verdiene i nedtrekksmenyer og de verdiene brukeren har skrevet inn,  
så blokkenes faktiske utseende i Block Composer gjengis så nært som mulig i tekst.  

| Blokkstruktur (Block Composer) | Slik angis den (tekstformat) |
| --- | --- |
| hvis [betingelse] gjør [kommando] ellers [kommando] | hvis [betingelse] gjør [kommando] ellers [kommando] |
| RaccoonBot: sett styringsmodusen til [hastighet] | RaccoonBot: sett styringsmodusen til [hastighet] |
| RaccoonBot: sett hastigheten til ledd [1] til [100] | RaccoonBot: sett hastigheten til ledd [1] til [100] |

<br>

## 6. Skriptkodens grunnstruktur {#6}
All skriptkode (Python) som angis, skal alltid inneholde grunnstrukturen med funksjonene setup() og loop(), som er programmets inngangspunkter.  
Dessuten skal `from robomation import *` stå øverst i koden, så du kan bruke de klassene og hjelpefunksjonene som trengs for å styre roboten, og den roboten du vil bruke, erklæres som en instans.  
Med denne regelen får all skriptkode (Python) heretter denne grunnstrukturen.

```python
# Python-kodens grunnstruktur
from robomation import *

# (er det en robot du vil bruke, erklæres den som en instans, eksempel)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Skriptkodens format (regler for linjeskift og innrykk) {#7}
- De øverste funksjonene (setup, loop med flere) venstrejusteres.
- Innrykket ved linjeskift skal alltid være **1 tabulator (`\t`)**. (Det samme som innrykket i editoren)

<br>

## 8. Regler for robotstyring (instanser / metoder) {#8}
Når du styrer roboten, må du følge disse reglene.  

1) Skriv `from robomation import *` øverst i koden.
2) Erklær den roboten du vil bruke, som en instans. Bruk det standard variabelnavnet som er fastsatt for roboten, og gi indeks fra 0 og oppover.
3) Styr roboten ved å kalle metodene på den instansen du har erklært.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Bruker du flere roboter av samme type, erklærer du dem med indeks 0, 1, 2 … (f.eks. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Når du setter robotens hjulhastighet, får den til å kjøre og lignende, ordner metodene selv den klargjøringen som trengs internt (for eksempel å rydde opp etter den forrige kjørekommandoen), så du behøver ikke å skrive egen kode for klargjøring først.

<br>

## 9. Regler for kall av hjelpefunksjoner {#9}
Felles hjelpefunksjoner som tidsforsinkelse, lydavspilling, loggutskrift og farger kaller du gjennom metodene i klassen `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Du finner den fullstendige listen over hjelpefunksjoner i dokumentene nedenfor.
- [Farge](../common/Color)
- [Lyd](../common/Audio)
- [Styring](../common/Control)

<br>

## 10. Regel om å bruke robotens egne metoder først {#10}
Når du styrer robotens maskinvare (hjulhastighet, lysdioder, lyd med mer),  
skal du bruke de egne metodene på robotinstansen (for eksempel 'HamsterS') fremfor de felles hjelpefunksjonene.

Skal roboten for eksempel lage en lyd,  
skal du bruke metoden `sound_clip()` på 'HamsterS'-instansen fremfor hjelpefunksjonen `Utils.play_sound()`.

```python
# lyden kommer fra HamsterS-roboten. (anbefales)
hamster_s.sound_clip('beep')

# lyden kommer fra PC-en / nettbrettet / mobilenheten. (anbefales ikke)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regler for import {#11}
Når du skriver Python-kode, skal du bare importere de modulene som trengs for å kjøre koden.
- `from robomation import *` skal som utgangspunkt stå øverst i koden, så roboten kan styres.
- Bruker koden `math.`, legges `import math` til automatisk, og bruker den `random.`, legges `import random` til automatisk.
- Andre unødvendige moduler skal ikke importeres.
