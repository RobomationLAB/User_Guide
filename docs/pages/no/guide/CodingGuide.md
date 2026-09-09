---
title: Kodingsveiledning
---

# Kodingsveiledning

Dette dokumentet beskriver RobomationLAB, en undervisningsplattform for robotkoding som er en del av 'utførelsesmotoren og det integrerte utviklingsmiljøet for strømmetjenesten for robotbevegelser', utviklet av Robomation.  

Beskrivelsen følger denne rekkefølgen:
- De viktigste egenskapene ved RobomationLAB
- Slik programmerer du roboter i RobomationLAB
- Grunnleggende syntaks for robotkoding i RobomationLAB  

<br>

## Innholdsfortegnelse {#table-of-contents}
1. [RobomationLAB — undervisningsplattform for robotkoding](#platform)  
    1-1) [Programmer for robotkoding](#coding-programs)  
    1-2) [Toveis konvertering mellom blokker og Python i sanntid](#block-python-conversion)  
    1-3) [De viktigste egenskapene ved kodingsprogrammene](#features)  
    1-4) [Robotstyring i sanntid](#control-method)  

2. [Slik programmerer du roboter i RobomationLAB](#programming-method)  
    2-1) [Sekvensiell og parallell kjøring](#sequential-parallel)  
    2-2) [Funksjonen setup](#setup)  
    2-3) [Funksjonen loop](#loop)  

3. [Grunnleggende syntaks for robotkoding i RobomationLAB](#grammar-syntax)  
    3-1) [Importere robomation-pakken](#import-package)  
    3-2) [Opprette en robotinstans](#create-instance)  
    3-3) [Metoder for robotstyring](#control-methods)  
    3-4) [Lese sensorer og tilstand](#sensor)  
    3-5) [Registrere hendelser](#event)  
    3-6) [Vente til handlingen er ferdig (wait)](#wait)  
    3-7) [Hjelpefunksjoner (Utils)](#utils)   

<br><br>

## RobomationLAB — undervisningsplattform for robotkoding {#platform}
RobomationLAB er en plattform som er optimalisert for **undervisning i AI-robotteknologi og programvare**,  
og den gir et integrert utviklingsmiljø i nettleseren Chrome for undervisning i robotkoding for elever i grunnskolen.  

RobomationLAB tilbyr programmer for undervisning i robotkoding på flere måter, blant annet **blokkoding** og **skriptkoding**.  
Du lærer ikke bare kodingens teori, men får også muligheten til å lære koding og roboter samtidig,  
mens du får produktene fra Robomation til å bevege seg og styrer dem i virkeligheten.

<br>

### Programmer for robotkoding {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer er et verktøy der du raskt og enkelt styrer robotene fra Robomation med blokkoding og lærer det grunnleggende i robotstyring.**  

- Et utviklingsmiljø som er optimalisert for fysisk databehandling

- Dra og slipp av blokker gjør det enkelt å kode, også for nybegynnere  
- Et læringsmiljø uten syntaksfeil, helt fra de grunnleggende begrepene  
- Automatisk konvertering til Python-skriptkode  
- Samlinger av blokker med ferdige funksjoner for hver robot, og mange eksempler å prøve
- Resultatet ses i sanntid når koden kjøres  
- Å sette sammen blokker styrker evnen til å løse problemer og utvikler kreativiteten  
- AI-basert analyse av skriptkoden gir tilpasset tilbakemelding  

<br>

#### Script Composer {#script-composer}
**Script Composer er et verktøy der du raskt og enkelt styrer robotene fra Robomation med Python-koding og lærer det grunnleggende i Python-syntaks og robotkoding.**  

- En Python-editor

- Automatisk kodefullføring og innsetting av kode for hvert språk
- Mange eksempelkoder å prøve for hver robot
- Resultatet ses i sanntid når koden kjøres
- AI-basert analyse av skriptkoden gir tilpasset tilbakemelding

<br>

#### De viktigste egenskapene ved kodingsprogrammene {#features}
Programmene for robotkoding i RobomationLAB har disse viktigste egenskapene.  
1.	De kjører i nettleseren Chrome og er derfor ikke bundet til et bestemt operativsystem
2.	De styrer robotmaskinvaren direkte gjennom en USB-dongel via Web Serial-kommunikasjon
3.	De støtter styring av flere roboter samtidig — uten begrensning på robotenes type og antall
4.	Når du lagrer en fil, konverteres resultatet til en JSON-tekstfil

<br>

### Robotstyring i sanntid {#control-method}
Programmene for robotkoding i RobomationLAB styrer roboten i sanntid gjennom dette forløpet.  
1.	Med blokkoding eller skriptkoding skriver du kode
som setter verdier for robotens Effector- og Command-objekter
eller bruker robotens Sensor-verdier og de hendelsene (Event) som oppstår.
2.	Du kjører koden.
3.	Via Web Serial-kommunikasjon mottas pakker med Sensor- og Event-data fra roboten,
og de overføres til robotens Device-objekt.
4.	Koden tolkes i sanntid,
og data skrives til Effector- og Command-objektene, eller verdiene i Sensor- og Event-objektene leses.
5.	Det lages en pakke med data fra robotens Device-objekt,
og pakken sendes til roboten via Web Serial-kommunikasjon, så du kan se at roboten faktisk beveger seg.
6.	Så lenge koden kjører, gjentas trinn 3 til 5 omtrent hvert 10.-20. ms.  

<br>

### Toveis konvertering mellom blokker og Python i sanntid {#block-python-conversion}
RobomationLAB har både en editor for blokkoding og en editor for Python-koding, og de to editorene synkroniseres begge veier i sanntid.

- Når du legger til, endrer eller sletter blokker i editoren for blokkoding, gjenspeiles endringen i Python-koden i sanntid.
- Omvendt gjenspeiles endringen i blokkene i sanntid når du redigerer koden i editoren for Python-koding.

Fordi blokkene og Python-koden svarer én til én til hverandre og konverteres begge veier,  
kan du kode organisk på tvers av blokkoding og skriptkoding: du kan raskt bygge hele strukturen med blokker og deretter finpusse detaljene i Python,  
eller du kan lære Python-syntaksen ved å sammenligne med blokkene.

> Konverteringen fra Python til blokker skjer likevel bare for kode som kan uttrykkes med blokker.  
> (Er syntaksen feil, eller kan koden ikke konverteres til blokker, hender det at den ikke skifter.  
Du kan lese mer i dokumentet [Kodingsregler](CodingRules).)

<br>

<br><br>

## Slik programmerer du roboter i RobomationLAB {#programming-method}

### Sekvensiell og parallell kjøring {#sequential-parallel}
Roboter kan programmeres på to måter: med sekvensiell kjøring og med parallell kjøring.  
Ved sekvensiell kjøring utføres den neste handlingen først når den forrige er ferdig, og det passer godt til å kode enkel atferd.  
Vil du for eksempel at roboten skal kjøre fremover og deretter stoppe og slå på LED-en, må sekvensiell kjøring være mulig, så du kan sette koden for hver handling i rekkefølge og kjøre den i tidsrekkefølge.  

Ved parallell kjøring utføres flere handlinger samtidig, og det trengs for å programmere mer sammensatt og avansert atferd.  
Vil du for eksempel få en tobeint robot til å gå, må du kunne kode med parallell kjøring, for roboten kan bare gå når føttene og beina beveger seg samtidig.

Programmene for robotkoding i RobomationLAB  
bygger på en setup/loop-struktur som ligner utviklingsmiljøet for maskinvare i Arduino, og de støtter både sekvensiell og parallell kjøring.

<BlockImage module="program/Editor" id="block-structure" />

Når du åpner Block Composer for første gang, vises to tomme funksjonsblokker i arbeidsområdet.  
Blokken 'funksjon oppsett' svarer til funksjonen `setup`, og blokken 'funksjon løkke' svarer til funksjonen `loop`.  

Blokkene konverteres til Python-kode i sanntid,  
og koden har denne grunnstrukturen.  

```python
# Python-kodens grunnstruktur
from robomation import *

# legg oppsettskode her, som skal kjøres én gang:
def setup():
    pass

# legg kontrollkode her, som skal kjøres gjentatte ganger:
def loop():
    pass
```

> For å styre roboten skriver du `from robomation import *` øverst i koden og erklærer den roboten du vil bruke, som en instans. (f.eks. `hamster_s = HamsterS(0)`)


<br>

### Funksjonen setup {#setup}
Funksjonen setup kjøres bare én eneste gang, i det øyeblikket du kjører koden.  
I funksjonen setup skriver du hovedsakelig kode som klargjør variabler eller robotens tilstand og funksjoner.  
Når du for eksempel styrer en robot som beveger seg på hjul, kan du sette hjulenes starthastighet i funksjonen setup.  

Trenger du en tidsforsinkelse inne i funksjonen, kan du bruke funksjonen `Utils.wait(...)` og skrive kode som kjøres i tidsrekkefølge, nesten som om den var synkron.  
`Utils.wait(...)` venter det antall sekunder du angir, og kjører deretter den neste koden, så koden våkner etter et bestemt tidsrom eller en bestemt handling og fortsetter.  
Med denne muligheten kan du ikke bare lage enkel sekvensiell kjøring, men også programmere roboter effektivt sammen med funksjonen loop, som står for den parallelle kjøringen.

Nedenfor er et eksempel på kode der roboten HamsterS kjører 1 sekund fremover og deretter 1 sekund bakover.  
Vil du lage det samme inne i funksjonen loop, som kjører parallelt, blir koden svært innviklet, fordi tidsberegning og styring blandes sammen.  
Bruker du i stedet forsinkelsesfunksjonen `Utils.wait` inne i funksjonen setup, kan du skrive kode som kjøres i tidsrekkefølge, nesten som om den var synkron.  
( Funksjonen `Utils.wait` beskrives igjen senere under [Hjelpefunksjoner (Utils)](#utils). )

Eksempelkode (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# legg oppsettskode her, som skal kjøres én gang:
def setup():
    # sett hastigheten til begge hjulene til 50, så roboten kjører fremover
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # vent 1 sekund
    # sett hastigheten til begge hjulene til -50, så roboten kjører bakover
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # vent 1 sekund
    hamster_s.stop()

# legg kontrollkode her, som skal kjøres gjentatte ganger:
def loop():
    pass
```
( Syntaksen for robotinstanser og metoder beskrives igjen senere under [Grunnleggende syntaks for robotkoding i RobomationLAB](#grammar-syntax). )


<br>

### Funksjonen loop {#loop}
Funksjonen loop støtter parallell kjøring og gjentas omtrent hvert 10. ms så lenge koden kjører.  
I funksjonen loop skriver du hovedsakelig kode som setter verdien av variabler gjentatte ganger, eller som fanger opp og håndterer bestemte hendelser fra roboten.  

Nedenfor er et eksempel på kode der hjulhastigheten og LED-fargen til roboten HamsterS endrer seg med tiden.  
( Vil du endre en variabel som er erklært utenfor funksjonene setup og loop, inne i en funksjon, må du erklære den med nøkkelordet `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# legg oppsettskode her, som skal kjøres én gang:
def setup():
    global frame
    frame = 0

# legg kontrollkode her, som skal kjøres gjentatte ganger:
def loop():
    global frame
    frame += 1  # øk verdien av variabelen frame med 1 hver gang funksjonen loop kalles

    # bruk den endrede verdien av frame til å sette hastigheten på begge hjulene og RGB-verdien for begge lysdiodene
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Syntaksen for robotinstanser og metoder beskrives igjen senere under [Grunnleggende syntaks for robotkoding i RobomationLAB](#grammar-syntax). )  

Nedenfor er et eksempel på kode som slår på LED-en i rødt når noen banker lett på kroppen til roboten HamsterS.  

```python
from robomation import *

hamster_s = HamsterS(0)

# legg oppsettskode her, som skal kjøres én gang:
def setup():
    pass

# legg kontrollkode her, som skal kjøres gjentatte ganger:
def loop():
    # i det øyeblikket det bankes, registreres hendelsen
    if hamster_s.tap():               # True når hendelsen registreres
        hamster_s.set_led_color('both', 'red')   # slå på begge lysdiodene i rødt
    else:
        hamster_s.turn_off('both')               # slå av begge lysdiodene
```
( Syntaksen for registrering av hendelser (`tap()`) med mer beskrives igjen senere under [Grunnleggende syntaks for robotkoding i RobomationLAB](#grammar-syntax). )  

<br><br>

## Grunnleggende syntaks for robotkoding i RobomationLAB {#grammar-syntax}
Når du skriver kode i programmene for robotkoding i RobomationLAB, gjelder denne grunnleggende syntaksen.  
Roboten styres gjennom Python-pakken `robomation`,  
og du skriver koden ved å opprette roboten som en instans og deretter kalle metodene på instansen.

### Importere robomation-pakken {#import-package}
For å bruke de klassene (robotene) og hjelpefunksjonene (`Utils`) som trengs for å styre roboten, må du ha denne ene linjen øverst i koden.

```python
from robomation import *
```

<br>

### Opprette en robotinstans {#create-instance}
Erklær den roboten du vil bruke, som en instans.  
Klassenavnet angir robotens type, og tallet i parentesen er instansens indeks (den starter på 0).

```python
hamster_s = HamsterS(0)   # én HamsterS
```

Klassenavn og standard variabelnavn for hver robot er slik.

| Robot | Klassenavn | Standard variabelnavn |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Bruker du flere roboter av samme type, erklærer du dem med indeks 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metoder for robotstyring {#control-methods}
Du styrer roboten ved å kalle metodene på instansen.  
Metodene utfører robotens handlinger: setter hjulhastigheten, kjører, styrer lysdioder, lyd og mye mer.

```python
hamster_s.set_wheel_speed('both', 50)    # sett hastigheten på begge hjulene
hamster_s.move_distance(10, 'cm')        # kjør 10 cm fremover
hamster_s.set_led_color('both', 'red')   # slå på begge lysdiodene i rødt
```

Du finner listen over metoder og parametere for hver robot i robotens eget dokument ('HamsterS' med flere).

<br>

### Lese sensorer og tilstand {#sensor}
Du leser også sensorverdier og robotens tilstand ved å kalle en metode, og metoden returnerer verdien.

```python
left = hamster_s.floor('left')        # les verdien fra den venstre gulvsensoren
dist = hamster_s.proximity('right')   # les verdien fra den høyre avstandssensoren
```

<br>

### Registrere hendelser {#event}
Hendelser som oppstår ved endringer i robotens tilstand eller i omgivelsene, registreres ved  
at den aktuelle hendelsesmetoden returnerer True i det øyeblikket hendelsen oppstår.

```python
if hamster_s.tap():        # True i det øyeblikket det bankes (Tap)
    hamster_s.set_led_color('both', 'red')
```

<br>

### Vente til handlingen er ferdig (wait) {#wait}
Metoder som tar tid å bli ferdige — som å kjøre, snu eller spille av lyd — har parameteren `wait`.
- `wait=True` (standard): venter til handlingen er ferdig, og kjører deretter den neste koden.
- `wait=False`: starter handlingen og fortsetter straks med den neste koden.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # venter til kjøringen er ferdig
hamster_s.move_distance(10, 'cm', wait=False)   # starter kjøringen og kjører straks den neste koden
```

<br>

### Hjelpefunksjoner (Utils) {#utils}
Felles funksjoner som ikke avhenger av robotens type — tidsforsinkelse, lydavspilling, loggutskrift, farger med mer — bruker du gjennom metodene i klassen `Utils`.

```python
Utils.wait(1)              # vent 1 sekund
Utils.speak('Hei')         # spill av tekst som tale (TTS)
Utils.log(0, '', '')       # skriv en logg i konsollen
```

<br>
