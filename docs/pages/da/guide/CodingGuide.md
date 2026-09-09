---
title: Kodningsvejledning
---

# Kodningsvejledning

Dette dokument beskriver RobomationLAB, en undervisningsplatform til robotkodning, som er en del af 'udførelsesmotoren og det integrerede udviklingsmiljø til streamingtjenesten for robotbevægelser', der er udviklet af Robomation.  

Beskrivelsen følger denne rækkefølge:
- RobomationLABs vigtigste egenskaber
- Sådan programmerer du robotter i RobomationLAB
- Grundlæggende syntaks for robotkodning i RobomationLAB  

<br>

## Indholdsfortegnelse {#table-of-contents}
1. [RobomationLAB — undervisningsplatform til robotkodning](#platform)  
    1-1) [Programmer til robotkodning](#coding-programs)  
    1-2) [Tovejskonvertering mellem blokke og Python i realtid](#block-python-conversion)  
    1-3) [Kodningsprogrammernes vigtigste egenskaber](#features)  
    1-4) [Robotstyring i realtid](#control-method)  

2. [Sådan programmerer du robotter i RobomationLAB](#programming-method)  
    2-1) [Sekventiel og parallel kørsel](#sequential-parallel)  
    2-2) [Funktionen setup](#setup)  
    2-3) [Funktionen loop](#loop)  

3. [Grundlæggende syntaks for robotkodning i RobomationLAB](#grammar-syntax)  
    3-1) [Import af robomation-pakken](#import-package)  
    3-2) [Oprettelse af en robotinstans](#create-instance)  
    3-3) [Metoder til robotstyring](#control-methods)  
    3-4) [Aflæsning af sensorer og status](#sensor)  
    3-5) [Registrering af hændelser](#event)  
    3-6) [Vent på, at handlingen er færdig (wait)](#wait)  
    3-7) [Hjælpefunktioner (Utils)](#utils)   

<br><br>

## RobomationLAB — undervisningsplatform til robotkodning {#platform}
RobomationLAB er en platform, der er optimeret til **undervisning i AI-robotteknologi og software**,  
og den tilbyder et integreret udviklingsmiljø i Chrome-webbrowseren til undervisning i robotkodning for elever i grundskolen.  

RobomationLAB tilbyder programmer til undervisning i robotkodning på flere måder, blandt andet **blokkodning** og **skriptkodning**.  
Du lærer ikke kun kodningens teori, men får også mulighed for at lære kodning og robotter på samme tid,  
mens du får Robomations produkter til at bevæge sig og styrer dem i virkeligheden.

<br>

### Programmer til robotkodning {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer er et værktøj, hvor du hurtigt og nemt styrer Robomations robotter med blokkodning og lærer det grundlæggende i robotstyring.**  

- Et udviklingsmiljø, der er optimeret til fysisk databehandling

- Træk og slip af blokke gør det nemt at kode, også for begyndere  
- Et læringsmiljø uden syntaksfejl, lige fra de grundlæggende begreber  
- Automatisk konvertering til Python-skriptkode  
- Samlinger af blokke med færdige funktioner til hver robot samt mange eksempler at prøve
- Resultatet ses i realtid, når koden køres  
- Kombinationen af blokke styrker evnen til at løse problemer og udvikler kreativiteten  
- AI-baseret analyse af skriptkoden giver optimeret feedback  

<br>

#### Script Composer {#script-composer}
**Script Composer er et værktøj, hvor du hurtigt og nemt styrer Robomations robotter med Python-kodning og lærer det grundlæggende i Python-syntaks og robotkodning.**  

- En Python-editor

- Automatisk kodefuldførelse og indsættelse af kode for hvert sprog
- Mange eksempelkoder at prøve for hver robot
- Resultatet ses i realtid, når koden køres
- AI-baseret analyse af skriptkoden giver optimeret feedback

<br>

#### Kodningsprogrammernes vigtigste egenskaber {#features}
Programmerne til robotkodning i RobomationLAB har følgende vigtigste egenskaber.  
1.	De kører i Chrome-webbrowseren og er derfor ikke bundet til et bestemt styresystem
2.	De styrer robothardwaren direkte gennem en USB-dongle via Web Serial-kommunikation
3.	De understøtter samtidig styring af flere robotter — uden begrænsning på robotternes type og antal
4.	Når du gemmer en fil, konverteres resultatet til en JSON-tekstfil

<br>

### Robotstyring i realtid {#control-method}
Programmerne til robotkodning i RobomationLAB styrer robotten i realtid gennem følgende forløb.  
1.	Med blokkodning eller skriptkodning skriver du kode,
der sætter værdier for robottens Effector- og Command-objekter
eller bruger robottens Sensor-værdier og de hændelser (Event), der opstår.
2.	Du kører koden.
3.	Via Web Serial-kommunikation modtages pakker med Sensor- og Event-data fra robotten,
og de overføres til robottens Device-objekt.
4.	Koden fortolkes i realtid,
og data skrives til Effector- og Command-objekterne, eller værdierne i Sensor- og Event-objekterne aflæses.
5.	Der dannes en pakke med data fra robottens Device-objekt,
og pakken sendes til robotten via Web Serial-kommunikation, så du kan se, at robotten rent faktisk bevæger sig.
6.	Så længe koden kører, gentages trin 3 til 5 cirka hvert 10.-20. ms.  

<br>

### Tovejskonvertering mellem blokke og Python i realtid {#block-python-conversion}
RobomationLAB tilbyder både en editor til blokkodning og en editor til Python-kodning, og de to editorer synkroniseres begge veje i realtid.

- Når du tilføjer, ændrer eller sletter blokke i editoren til blokkodning, afspejles ændringen i Python-koden i realtid.
- Omvendt afspejles ændringen i blokkene i realtid, når du redigerer koden i editoren til Python-kodning.

Fordi blokkene og Python-koden svarer én til én til hinanden og konverteres begge veje,  
kan du kode organisk på tværs af blokkodning og skriptkodning: du kan hurtigt bygge hele strukturen med blokke og derefter finpudse detaljerne i Python,  
eller du kan lære Python-syntaksen ved at sammenligne med blokkene.

> Konverteringen fra Python til blokke sker dog kun for kode, der kan udtrykkes med blokke.  
> (Er syntaksen forkert, eller kan koden ikke konverteres til blokke, skifter den måske ikke.  
Du kan læse mere i dokumentet [Kodningsregler](CodingRules).)

<br>

<br><br>

## Sådan programmerer du robotter i RobomationLAB {#programming-method}

### Sekventiel og parallel kørsel {#sequential-parallel}
Robotter kan programmeres på to måder: med sekventiel kørsel og med parallel kørsel.  
Ved sekventiel kørsel udføres den næste handling først, når den forrige er færdig, og det passer godt til at kode enkel adfærd.  
Hvis du for eksempel vil have robotten til at køre fremad og derefter stoppe og tænde lysdioden, skal sekventiel kørsel være mulig, så du kan placere koden til hver handling i rækkefølge og køre den i tidsmæssig orden.  

Ved parallel kørsel udføres flere handlinger samtidig, og det er nødvendigt for at programmere mere kompleks og avanceret adfærd.  
Hvis du for eksempel vil få en tobenet robot til at gå, skal du kunne kode med parallel kørsel, for robotten kan kun gå, når dens fødder og ben bevæger sig samtidig.

Programmerne til robotkodning i RobomationLAB  
bygger på en setup/loop-struktur, der ligner Arduinos udviklingsmiljø til hardware, og de understøtter både sekventiel og parallel kørsel.

<BlockImage module="program/Editor" id="block-structure" />

Når du åbner Block Composer første gang, vises to tomme funktionsblokke i arbejdsområdet.  
Blokken 'funktion opsætning' svarer til funktionen `setup`, og blokken 'funktion løkke' svarer til funktionen `loop`.  

Blokkene konverteres til Python-kode i realtid,  
og koden har følgende grundstruktur.  

```python
# Python-kodens grundstruktur
from robomation import *

# indsæt opsætningskode her, som skal køres én gang:
def setup():
    pass

# indsæt styringskode her, som skal køres gentagne gange:
def loop():
    pass
```

> For at styre robotten skriver du `from robomation import *` øverst i koden og erklærer den robot, du vil bruge, som en instans. (f.eks. `hamster_s = HamsterS(0)`)


<br>

### Funktionen setup {#setup}
Funktionen setup udføres kun én eneste gang, i det øjeblik du kører koden.  
I funktionen setup skriver du hovedsagelig kode, der klargør variabler eller robottens tilstand og funktioner.  
Når du for eksempel styrer en robot, der bevæger sig på hjul, kan du i funktionen setup indstille hjulenes starthastighed.  

Har du brug for en tidsforsinkelse inde i funktionen, kan du bruge funktionen `Utils.wait(...)` og skrive kode, der udføres i tidsmæssig orden, næsten som var den synkron.  
`Utils.wait(...)` venter det angivne antal sekunder og udfører derefter den næste kode, så koden vågner efter et bestemt tidsrum eller en bestemt handling og fortsætter.  
Med denne mulighed kan du ikke bare lave enkel sekventiel kørsel, men også programmere robotter effektivt sammen med funktionen loop, der står for den parallelle kørsel.

Herunder er et eksempel på kode, hvor robotten HamsterS kører 1 sekund fremad og derefter 1 sekund baglæns.  
Hvis du vil lave det samme inde i funktionen loop, der kører parallelt, bliver koden meget indviklet, fordi tidsberegning og styring blandes sammen.  
Bruger du i stedet forsinkelsesfunktionen `Utils.wait` inde i funktionen setup, kan du skrive kode, der udføres i tidsmæssig orden, næsten som var den synkron.  
( Funktionen `Utils.wait` beskrives igen senere under [Hjælpefunktioner (Utils)](#utils). )

Eksempelkode (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# indsæt opsætningskode her, som skal køres én gang:
def setup():
    # sæt begge hjuls hastighed til 50, så robotten kører fremad
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # vent 1 sekund
    # sæt begge hjuls hastighed til -50, så robotten kører baglæns
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # vent 1 sekund
    hamster_s.stop()

# indsæt styringskode her, som skal køres gentagne gange:
def loop():
    pass
```
( Syntaksen for robotinstanser og metoder beskrives igen senere under [Grundlæggende syntaks for robotkodning i RobomationLAB](#grammar-syntax). )


<br>

### Funktionen loop {#loop}
Funktionen loop understøtter parallel kørsel og gentages cirka hvert 10. ms, så længe koden kører.  
I funktionen loop skriver du hovedsagelig kode, der gentagne gange sætter værdien af variabler, eller som registrerer og håndterer bestemte hændelser fra robotten.  

Herunder er et eksempel på kode, hvor hjulhastigheden og LED-farven hos robotten HamsterS ændrer sig med tiden.  
( Vil du ændre en variabel, der er erklæret uden for funktionerne setup og loop, inde i en funktion, skal du erklære den med nøgleordet `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# indsæt opsætningskode her, som skal køres én gang:
def setup():
    global frame
    frame = 0

# indsæt styringskode her, som skal køres gentagne gange:
def loop():
    global frame
    frame += 1  # forøg værdien af variablen frame med 1, hver gang funktionen loop kaldes

    # brug den ændrede værdi af frame til at sætte begge hjuls hastighed og RGB-værdien for begge lysdioder
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Syntaksen for robotinstanser og metoder beskrives igen senere under [Grundlæggende syntaks for robotkodning i RobomationLAB](#grammar-syntax). )  

Herunder er et eksempel på kode, der tænder lysdioden rødt, når der bankes let på kroppen af robotten HamsterS.  

```python
from robomation import *

hamster_s = HamsterS(0)

# indsæt opsætningskode her, som skal køres én gang:
def setup():
    pass

# indsæt styringskode her, som skal køres gentagne gange:
def loop():
    # i det øjeblik der bankes, registreres hændelsen
    if hamster_s.tap():               # True, når hændelsen registreres
        hamster_s.set_led_color('both', 'red')   # tænd begge lysdioder rødt
    else:
        hamster_s.turn_off('both')               # sluk begge lysdioder
```
( Syntaksen for registrering af hændelser (`tap()`) med mere beskrives igen senere under [Grundlæggende syntaks for robotkodning i RobomationLAB](#grammar-syntax). )  

<br><br>

## Grundlæggende syntaks for robotkodning i RobomationLAB {#grammar-syntax}
Når du skriver kode i programmerne til robotkodning i RobomationLAB, gælder følgende grundlæggende syntaks.  
Robotten styres gennem Python-pakken `robomation`,  
og du skriver koden ved at oprette robotten som en instans og derefter kalde instansens metoder.

### Import af robomation-pakken {#import-package}
For at bruge de klasser (robotter) og hjælpefunktioner (`Utils`), der skal til for at styre robotten, skal du have denne ene linje øverst i koden.

```python
from robomation import *
```

<br>

### Oprettelse af en robotinstans {#create-instance}
Erklær den robot, du vil bruge, som en instans.  
Klassenavnet angiver robottens type, og tallet i parentesen er instansens indeks (det starter ved 0).

```python
hamster_s = HamsterS(0)   # én HamsterS
```

Klassenavne og standardvariabelnavne for hver robot er følgende.

| Robot | Klassenavn | Standardvariabelnavn |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Bruger du flere robotter af samme type, erklærer du dem med indeks 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metoder til robotstyring {#control-methods}
Du styrer robotten ved at kalde instansens metoder.  
Metoderne udfører robottens handlinger: indstiller hjulhastigheden, kører, styrer lysdioder, lyd og meget mere.

```python
hamster_s.set_wheel_speed('both', 50)    # indstil begge hjuls hastighed
hamster_s.move_distance(10, 'cm')        # kør 10 cm fremad
hamster_s.set_led_color('both', 'red')   # tænd begge lysdioder rødt
```

Du kan se listen over metoder og parametre for hver robot i robottens eget dokument ('HamsterS' med flere).

<br>

### Aflæsning af sensorer og status {#sensor}
Du aflæser også sensorværdier og robottens status ved at kalde en metode, og metoden returnerer værdien.

```python
left = hamster_s.floor('left')        # aflæs værdien fra den venstre gulvsensor
dist = hamster_s.proximity('right')   # aflæs værdien fra den højre afstandssensor
```

<br>

### Registrering af hændelser {#event}
Hændelser, der opstår ved ændringer i robottens tilstand eller i omgivelserne, registreres ved,  
at den pågældende hændelsesmetode returnerer True i det øjeblik hændelsen opstår.

```python
if hamster_s.tap():        # True i det øjeblik der bankes (Tap)
    hamster_s.set_led_color('both', 'red')
```

<br>

### Vent på, at handlingen er færdig (wait) {#wait}
Metoder, der tager tid at gøre færdig — som at køre, dreje eller afspille lyd — har parameteren `wait`.
- `wait=True` (standard): venter, til handlingen er færdig, og udfører derefter den næste kode.
- `wait=False`: starter handlingen og fortsætter straks med den næste kode.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # venter, til kørslen er færdig
hamster_s.move_distance(10, 'cm', wait=False)   # starter kørslen og udfører straks den næste kode
```

<br>

### Hjælpefunktioner (Utils) {#utils}
Fælles funktioner, der ikke afhænger af robottens type — tidsforsinkelse, lydafspilning, logudskrift, farver med mere — bruger du gennem metoderne i klassen `Utils`.

```python
Utils.wait(1)              # vent 1 sekund
Utils.speak('Hej')         # afspil tekst som tale (TTS)
Utils.log(0, '', '')       # skriv en log i konsollen
```

<br>
