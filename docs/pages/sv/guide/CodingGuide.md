---
title: Kodningsguide
---

# Kodningsguide

Det här dokumentet beskriver RobomationLAB, en plattform för utbildning i robotprogrammering och en del av "körmotorn och den integrerade författarmiljön för strömmande robotrörelser" som Robomation har utvecklat.  

Beskrivningen följer den här ordningen:
- RobomationLABs viktigaste egenskaper
- Så programmerar du robotar i RobomationLAB
- Grundläggande syntaxsystem för robotprogrammering i RobomationLAB  

<br>

## Innehåll {#table-of-contents}
1. [RobomationLAB – utbildningsplattform för robotprogrammering](#platform)  
    1-1) [Program för robotprogrammering](#coding-programs)  
    1-2) [Omvandling mellan block och Python i realtid, åt båda hållen](#block-python-conversion)  
    1-3) [Kodningsprogrammens viktigaste egenskaper](#features)  
    1-4) [Så styrs roboten i realtid](#control-method)  

2. [Så programmerar du robotar i RobomationLAB](#programming-method)  
    2-1) [Sekventiell och parallell körning](#sequential-parallel)  
    2-2) [Funktionen setup](#setup)  
    2-3) [Funktionen loop](#loop)  

3. [Grundläggande syntaxsystem för robotprogrammering i RobomationLAB](#grammar-syntax)  
    3-1) [Importera paketet robomation](#import-package)  
    3-2) [Skapa en robotinstans](#create-instance)  
    3-3) [Metoder för robotstyrning](#control-methods)  
    3-4) [Läsa av sensorer och tillstånd](#sensor)  
    3-5) [Känna av händelser](#event)  
    3-6) [Vänta tills en åtgärd är klar (wait)](#wait)  
    3-7) [Verktygsfunktioner (Utils)](#utils)   

<br><br>

## RobomationLAB – utbildningsplattform för robotprogrammering {#platform}
RobomationLAB är en plattform som är optimerad för **utbildning i AI, robotik och programvara**,  
och erbjuder en integrerad författarmiljö i webbläsaren Chrome för robotprogrammering för elever i grundskolan.  

RobomationLAB erbjuder flera olika slags program för robotprogrammering, som **blockprogrammering** och **skriptprogrammering**.  
Du lär dig inte bara programmeringens teori, utan får också chansen att lära dig programmering och robotar samtidigt  
genom att verkligen få robotar från Robomation att röra sig och styras.

<br>

### Program för robotprogrammering {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer är ett verktyg där du enkelt och snabbt styr företagets robotar med blockprogrammering och lär dig grunderna i robotstyrning.**  

- En författarmiljö optimerad för fysisk databehandling

- Dra och släpp block gör det lätt att programmera även för nybörjare  
- En inlärningsmiljö utan syntaxfel, ända från grundbegreppen  
- Automatisk omvandling till Python-skriptkod  
- Färdiga blocksamlingar med funktioner för varje robot samt många exempel att prova  
- Se resultatet i realtid genom att köra koden  
- Att kombinera block utvecklar problemlösningsförmåga och kreativitet  
- AI-baserad analys av skriptkoden ger optimerad återkoppling  

<br>

#### Script Composer {#script-composer}
**Script Composer är ett verktyg där du enkelt och snabbt styr företagets robotar med Python-programmering och lär dig grunderna i Python-syntax och robotprogrammering.**  

- En Python-redigerare

- Automatisk kodkomplettering och kodinfogning per språk
- Många exempelkoder att prova för varje robot
- Se resultatet i realtid genom att köra koden
- AI-baserad analys av skriptkoden ger optimerad återkoppling

<br>

#### Kodningsprogrammens viktigaste egenskaper {#features}
Programmen för robotprogrammering i RobomationLAB har följande viktiga egenskaper.  
1.	De bygger på webbläsaren Chrome och är därför oberoende av operativsystem
2.	De bygger på Web Serial-kommunikation och styr robotens maskinvara direkt via en USB-dongel
3.	De stöder styrning av flera robotar samtidigt – ingen gräns för robotarnas typ eller antal
4.	När du sparar en fil omvandlas resultatet till en JSON-textfil som sparas

<br>

### Så styrs roboten i realtid {#control-method}
I programmen för robotprogrammering i RobomationLAB styrs roboten i realtid genom följande steg.  
1.	Med blockprogrammering eller skriptprogrammering
skriver du kod som sätter värden på objekten Effector och Command för att styra roboten,
eller som använder robotens Sensor-värden och Event-händelser.
2.	Du kör koden.
3.	Via Web Serial-kommunikationen tas paket med Sensor- och Event-data emot från roboten,
och de skrivs in i robotens Device-objekt.
4.	Koden tolkas i realtid, och
data skrivs över i objekten Effector och Command, eller läses från objekten Sensor och Event.
5.	Ett paket med data från robotens Device-objekt skapas
och skickas till roboten via Web Serial-kommunikationen, så att du kan se att roboten verkligen rör sig.
6.	Så länge koden körs upprepas steg 3–5 ungefär var 10–20:e millisekund.  

<br>

### Omvandling mellan block och Python i realtid, åt båda hållen {#block-python-conversion}
RobomationLAB erbjuder både en blockredigerare och en Python-redigerare, och de två synkroniseras i realtid åt båda hållen.

- När du lägger till, ändrar eller tar bort block i blockredigeraren syns ändringen i Python-koden i realtid.
- Och tvärtom: när du ändrar koden i Python-redigeraren syns ändringen i blocken i realtid.

Eftersom block och Python-kod motsvarar varandra ett till ett och omvandlas åt båda hållen  
kan du programmera fritt mellan blockprogrammering och skriptprogrammering – bygga hela strukturen snabbt med block och sedan finslipa detaljerna i Python, eller lära dig Python-syntax genom att jämföra med blocken.

> Omvandlingen från Python till block sker dock bara för kod som går att uttrycka med block.  
> (Om syntaxen är felaktig eller koden inte går att omvandla till block kan växlingen misslyckas.  
Mer om det finns i dokumentet [Kodningsregler](CodingRules).)

<br>

<br><br>

## Så programmerar du robotar i RobomationLAB {#programming-method}

### Sekventiell och parallell körning {#sequential-parallel}
Det finns två sätt att programmera robotar: sekventiell körning och parallell körning.  
Sekventiell körning innebär att nästa åtgärd utförs först när den föregående är klar, och passar bra för att programmera enkla beteenden.  
Om du till exempel vill att roboten ska köra framåt, stanna och sedan tända lysdioden behöver sekventiell körning vara möjlig, så att du kan lägga koden för varje åtgärd i ordning och köra den i tidsföljd.  

Parallell körning innebär att flera åtgärder utförs samtidigt, och behövs för att programmera mer komplexa och avancerade beteenden.  
Om du till exempel vill få en tvåbent robot att gå måste fötter och ben röra sig samtidigt för att gången ska fungera, och då behöver parallell körning vara möjlig.

Programmen för robotprogrammering i RobomationLAB  
bygger på en setup/loop-struktur som liknar Arduinos utvecklingsmiljö för maskinvara, och stöder både sekventiell och parallell körning.

<BlockImage module="program/Editor" id="block-structure" />

När du öppnar Block Composer första gången visas två tomma funktionsblock i arbetsytan.  
Blocket 'funktionen setup' motsvarar funktionen `setup` och blocket 'funktionen loop' motsvarar funktionen `loop`.  

Blocken omvandlas till Python-kod i realtid,  
och koden får följande grundstruktur.  

```python
# grundstruktur för Python-kod
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> För att styra roboten har du `from robomation import *` överst i koden och deklarerar den robot du ska använda som en instans. (t.ex. `hamster_s = HamsterS(0)`)


<br>

### Funktionen setup {#setup}
Funktionen setup körs bara en enda gång, i samma stund som du kör koden.  
I setup-funktionen skriver du oftast kod som initierar variabler eller robotens läge och funktioner.  
När du styr en robot som rör sig med hjulen kan du till exempel ställa in hjulens starthastighet i setup-funktionen.  

Om du behöver en fördröjning inuti funktionen kan du använda funktionen `Utils.wait(...)` och skriva kod som körs i tidsföljd, nästan som synkron kod.  
`Utils.wait(...)` väntar den angivna tiden (i sekunder) och kör sedan nästa kodrad, så programmet vaknar efter den bestämda tiden eller åtgärden och fortsätter med nästa rad.  
Med den funktionen får du inte bara enkel sekventiell körning, utan tillsammans med loop-funktionen, som står för den parallella körningen, kraftfulla möjligheter att programmera roboten.

Här är ett exempel där HamsterS-roboten kör framåt i 1 sekund och sedan bakåt i 1 sekund.  
Om du skulle bygga det beteendet inuti den parallella loop-funktionen skulle tidsberäkningar och styrkod blandas, och koden bli mycket komplicerad.  
Med fördröjningsfunktionen `Utils.wait` inuti setup-funktionen kan du i stället skriva kod som körs i tidsföljd, nästan som synkron kod.  
( Funktionen `Utils.wait` beskrivs närmare längre fram, under [Verktygsfunktioner (Utils)](#utils). )

Exempelkod (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # ställ in båda hjulens hastighet till 50 för att köra framåt
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # vänta 1 sekund
    # ställ in båda hjulens hastighet till -50 för att köra bakåt
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # vänta 1 sekund
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( Syntaxen för robotinstanser och metoder beskrivs närmare längre fram, under [Grundläggande syntaxsystem för robotprogrammering i RobomationLAB](#grammar-syntax). )


<br>

### Funktionen loop {#loop}
Funktionen loop stöder parallell körning och anropas om och om igen, ungefär var tionde millisekund, så länge koden körs.  
I loop-funktionen skriver du oftast kod som upprepat sätter värden på variabler eller känner av och hanterar särskilda händelser hos roboten.  

Här är ett exempel där HamsterS-robotens hjulhastighet och LED-färg ändras över tid.  
( När du ändrar en variabel som deklarerats utanför setup/loop inuti en funktion deklarerar du den med nyckelordet `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # varje gång loop-funktionen anropas ökar variabeln frame med 1

    # använd det nya frame-värdet för att sätta båda hjulens hastighet och båda lysdiodernas RGB-värden
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Syntaxen för robotinstanser och metoder beskrivs närmare längre fram, under [Grundläggande syntaxsystem för robotprogrammering i RobomationLAB](#grammar-syntax). )  

Här är ett exempel där lysdioden tänds med rött ljus när HamsterS-roboten får en lätt knackning (Tap) på kroppen.  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # i samma stund som en knackning sker känns händelsen av
    if hamster_s.tap():               # True när händelsen känns av
        hamster_s.set_led_color('both', 'red')   # tänd båda lysdioderna med rött
    else:
        hamster_s.turn_off('both')               # släck båda lysdioderna
```
( Syntax som händelseavkänning (`tap()`) beskrivs närmare längre fram, under [Grundläggande syntaxsystem för robotprogrammering i RobomationLAB](#grammar-syntax). )  

<br><br>

## Grundläggande syntaxsystem för robotprogrammering i RobomationLAB {#grammar-syntax}
När du skriver kod i programmen för robotprogrammering i RobomationLAB ska du följa det här grundläggande syntaxsystemet.  
Robotstyrningen sker via Python-paketet `robomation`,  
och du skriver koden genom att först skapa roboten som en instans och sedan anropa instansens metoder.

### Importera paketet robomation {#import-package}
För att kunna använda de klasser (robotar) och verktyg (`Utils`) som behövs för robotstyrning har du med den här raden överst i koden.

```python
from robomation import *
```

<br>

### Skapa en robotinstans {#create-instance}
Deklarera den robot du ska använda som en instans.  
Klassens namn anger robottypen och siffran inom parentes anger instansens index (som börjar på 0).

```python
hamster_s = HamsterS(0)   # en HamsterS
```

Klassnamn och förvalda variabelnamn för varje robot är följande.

| Robot | Klassnamn | Förvalt variabelnamn |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Om du använder flera robotar av samma slag deklarerar du dem med index 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metoder för robotstyrning {#control-methods}
Du styr roboten genom att anropa instansens metoder.  
Metoderna utför robotens åtgärder: ställa in hjulhastighet, köra, lysdioder, ljud med mera.

```python
hamster_s.set_wheel_speed('both', 50)    # ställ in båda hjulens hastighet
hamster_s.move_distance(10, 'cm')        # kör 10 cm framåt
hamster_s.set_led_color('both', 'red')   # båda lysdioderna med rött
```

En lista över tillgängliga metoder och parametrar för varje robot finns i respektive robots dokument (HamsterS med flera).

<br>

### Läsa av sensorer och tillstånd {#sensor}
Du läser av sensorvärden och robotens tillstånd genom att anropa metoder, och metoden returnerar värdet.

```python
left = hamster_s.floor('left')        # läs av vänster golvsensor
dist = hamster_s.proximity('right')   # läs av höger avståndssensor
```

<br>

### Känna av händelser {#event}
Händelser som uppstår vid en tillståndsändring eller en förändring i omgivningen känns av genom att  
händelsens metod returnerar True i samma stund som händelsen inträffar.

```python
if hamster_s.tap():        # True i samma stund som en knackning (Tap) sker
    hamster_s.set_led_color('both', 'red')
```

<br>

### Vänta tills en åtgärd är klar (wait) {#wait}
Metoder som tar tid att slutföra, som att köra, svänga eller spela upp ljud, har parametern `wait`.
- `wait=True` (standard): väntar tills åtgärden är klar och kör sedan nästa kodrad.
- `wait=False`: startar åtgärden och fortsätter direkt med nästa kodrad.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # väntar tills körningen är klar
hamster_s.move_distance(10, 'cm', wait=False)   # startar körningen och kör nästa rad direkt
```

<br>

### Verktygsfunktioner (Utils) {#utils}
Gemensamma funktioner som inte beror på robottypen – fördröjning, ljuduppspelning, loggutskrift, färger med mera – används som metoder på klassen `Utils`.

```python
Utils.wait(1)              # vänta 1 sekund
Utils.speak('Hej')         # spela upp text som tal (TTS)
Utils.log(0, '', '')       # skriv ut i konsolloggen
```

<br>
