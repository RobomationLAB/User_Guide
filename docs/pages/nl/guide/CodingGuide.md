---
title: Programmeergids
---

# Programmeergids

Dit document beschrijft RobomationLAB, het platform voor roboprogrammeeronderwijs dat deel uitmaakt van de door Robomation ontwikkelde „uitvoeringsengine en geïntegreerde ontwikkelomgeving voor de streamingdienst van robotbewegingen".  

De uitgebreide beschrijving volgt deze volgorde:
- De belangrijkste kenmerken van RobomationLAB
- De manier van roboprogrammeren in RobomationLAB
- Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB  

<br>

## Inhoud {#table-of-contents}
1. [RobomationLAB — platform voor roboprogrammeeronderwijs](#platform)  
    1-1) [Programma's voor roboprogrammeren](#coding-programs)  
    1-2) [Realtime omzetting blokken ↔ Python in twee richtingen](#block-python-conversion)  
    1-3) [De belangrijkste kenmerken van de programma's](#features)  
    1-4) [Realtime robotbesturing](#control-method)  

2. [De manier van roboprogrammeren in RobomationLAB](#programming-method)  
    2-1) [Sequentiële en parallelle uitvoering](#sequential-parallel)  
    2-2) [De functie setup](#setup)  
    2-3) [De functie loop](#loop)  

3. [Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB](#grammar-syntax)  
    3-1) [Het pakket robomation importeren](#import-package)  
    3-2) [Een robotinstantie maken](#create-instance)  
    3-3) [Methoden voor robotbesturing](#control-methods)  
    3-4) [Sensoren en toestanden uitlezen](#sensor)  
    3-5) [Gebeurtenissen opmerken](#event)  
    3-6) [Wachten tot een actie klaar is (wait)](#wait)  
    3-7) [Hulpfuncties (Utils)](#utils)   

<br><br>

## RobomationLAB — platform voor roboprogrammeeronderwijs {#platform}
RobomationLAB is een platform dat geoptimaliseerd is voor **onderwijs in AI-robotica-software**.  
Het biedt een geïntegreerde ontwikkelomgeving op basis van de Chrome-webbrowser voor roboprogrammeeronderwijs aan leerlingen van het basis- en het middelbaar onderwijs.  

RobomationLAB biedt programma's voor roboprogrammeeronderwijs in verschillende vormen, zoals **blokprogrammeren** en **scriptprogrammeren**.  
Je leert niet alleen de theorie van het programmeren, maar beweegt en bestuurt met de producten van Robomation echte robots  
en krijgt zo de kans om programmeren en robotica tegelijk te leren.

<br>

### Programma's voor roboprogrammeren {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer is een gereedschap waarmee je met blokprogrammeren de eigen robots eenvoudig en snel bestuurt en zo de basis van robotbesturing leert.**  

- Een ontwikkelomgeving die geoptimaliseerd is voor physical computing

- Programmeren door blokken te slepen — ook voor beginners eenvoudig  
- Een leeromgeving zonder syntaxfouten, vanaf de basisbegrippen  
- Automatische omzetting in Python-scriptcode  
- Voor elke robot een verzameling blokken met vaste functies en veel voorbeelden om uit te proberen
- Resultaten direct zichtbaar door de code uit te voeren  
- Beter probleemoplossend vermogen en meer creativiteit door blokken te combineren  
- Geoptimaliseerde feedback door AI-gebaseerde analyse van de scriptcode  

<br>

#### Script Composer {#script-composer}
**Script Composer is een gereedschap waarmee je met Python-programmeren de eigen robots eenvoudig en snel bestuurt en zo de Python-syntaxis en de basis van het roboprogrammeren leert.**  

- Een Python-editor

- Automatische codevoltooiing en code-invoeging per taal
- Voor elke robot veel voorbeeldcodes om uit te proberen
- Resultaten direct zichtbaar door de code uit te voeren
- Geoptimaliseerde feedback door AI-gebaseerde analyse van de scriptcode

<br>

#### De belangrijkste kenmerken van de programma's {#features}
De programma's voor roboprogrammeren in RobomationLAB hebben de volgende belangrijke kenmerken.  
1.	Ze werken in de Chrome-webbrowser en zijn dus niet aan een besturingssysteem gebonden
2.	Ze besturen de roboterhardware via Web Serial rechtstreeks met een USB-dongle
3.	Ze ondersteunen het gelijktijdig besturen van meerdere robots — zonder beperking van soort en aantal
4.	Bij het opslaan wordt het resultaat omgezet in een JSON-tekstbestand en opgeslagen

<br>

### Realtime robotbesturing {#control-method}
De programma's voor roboprogrammeren in RobomationLAB besturen de robots in realtime via de volgende stappen.  
1.	Met blokprogrammeren of scriptprogrammeren
schrijf je code die de waarden van de objecten Effector en Command voor de robotbesturing instelt
of die de Sensor-waarden en Event-gebeurtenissen van de robot gebruikt.
2.	De code wordt uitgevoerd.
3.	Via Web Serial worden van de robot pakketten met Sensor- en Event-gegevens ontvangen
en in het Device-object van de robot opgenomen.
4.	De code wordt in realtime geïnterpreteerd;
daarbij worden gegevens in de objecten Effector en Command overschreven of waarden uit de objecten Sensor en Event gelezen.
5.	Uit de gegevens van het Device-object wordt een pakket gemaakt
en via Web Serial naar de robot gestuurd — zo kun je controleren of de robot echt werkt.
6.	Terwijl de code loopt, worden de stappen 3 ~ 5 ongeveer elke 10 ~ 20 ms herhaald.  

<br>

### Realtime omzetting blokken ↔ Python in twee richtingen {#block-python-conversion}
RobomationLAB biedt een editor voor blokprogrammeren en een editor voor Python samen aan; beide editors worden in realtime in twee richtingen gesynchroniseerd.

- Voeg je in de blokeditor blokken toe, wijzig of verwijder je ze, dan worden die wijzigingen in realtime in de Python-code opgenomen.
- Omgekeerd worden wijzigingen die je in de Python-editor in de code maakt in realtime in de blokken opgenomen.

Omdat blokken en Python-code zo één op één met elkaar overeenkomen en in twee richtingen worden omgezet,  
kun je organisch tussen blokprogrammeren en scriptprogrammeren wisselen — bijvoorbeeld de hele structuur snel met blokken opbouwen en de details daarna in Python verfijnen, of de Python-syntaxis leren door die met de blokken te vergelijken.

> De omzetting Python → blokken lukt echter alleen bij code die als blokken kan worden weergegeven.  
> (Bij foutieve syntaxis of bij code die niet in blokken kan worden omgezet, kan het wisselen mislukken.  
Meer hierover vind je in het document [Programmeerregels](CodingRules).)

<br>

<br><br>

## De manier van roboprogrammeren in RobomationLAB {#programming-method}

### Sequentiële en parallelle uitvoering {#sequential-parallel}
Bij het programmeren van robots onderscheiden we sequentiële en parallelle uitvoering.  
Sequentiële uitvoering betekent dat de volgende actie pas begint als de vorige klaar is; dat past bij eenvoudig gedrag.  
Wil je bijvoorbeeld dat de robot eerst vooruit rijdt en dan stopt en een led aanzet, dan moet sequentiële uitvoering mogelijk zijn, zodat de code van de afzonderlijke acties in die volgorde staat en op tijd achter elkaar wordt uitgevoerd.  

Parallelle uitvoering betekent dat meerdere acties tegelijk lopen; dat is nodig voor complexer en geavanceerder gedrag.  
Wil je bijvoorbeeld het lopen van een tweebenige robot verwezenlijken, dan moet programmeren met parallelle uitvoering mogelijk zijn, want lopen lukt alleen als de voeten en benen van de robot tegelijk bewegen.

De programma's voor roboprogrammeren in RobomationLAB ondersteunen beide tegelijk,  
op basis van een setup-/loop-codestructuur die lijkt op de hardware-ontwikkelomgeving van Arduino.

<BlockImage module="program/Editor" id="block-structure" />

Open je Block Composer voor het eerst, dan verschijnen in het werkgebied twee lege functieblokken:  
het blok **functie setup** staat voor de functie `setup`, het blok **functie loop** voor de functie `loop`.  

De blokken worden in realtime in Python-code omgezet,  
en die code heeft de volgende basisstructuur.  

```python
# basisstructuur van de Python-code
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Om een robot te besturen zet je `from robomation import *` aan het begin van de code en declareer je de robot die je wilt gebruiken als instantie. (bijv. `hamster_s = HamsterS(0)`)


<br>

### De functie setup {#setup}
De functie setup wordt op het moment dat de code wordt uitgevoerd precies één keer doorlopen.  
In de functie setup schrijf je vooral code die variabelen initialiseert of de modi en functies van de robot voorbereidt.  
Bestuur je bijvoorbeeld een robot die zich op wielen voortbeweegt, dan kun je in de functie setup de beginsnelheid van de wielen instellen.  

Is er binnen een functie een tijdvertraging nodig, dan kun je met de functie `Utils.wait(...)` code schrijven die op tijd achter elkaar verloopt, alsof die synchroon is.  
`Utils.wait(...)` wacht de opgegeven tijd (in seconden) en voert dan de volgende code uit — de code wordt dus na een bepaalde tijd of actie weer wakker en gaat verder.  
Gebruik je deze mogelijkheid, dan is samen met de functie loop, die de parallelle uitvoering verzorgt, niet alleen eenvoudige sequentiële uitvoering mogelijk, maar ook zeer krachtig roboprogrammeren.

In het volgende voorbeeld rijdt de robot HamsterS één seconde vooruit en dan één seconde achteruit.  
Zou je dat in de parallel uitgevoerde functie loop verwezenlijken, dan raken tijdberekening en besturingscode door elkaar en wordt de code erg ingewikkeld.  
Gebruik je in plaats daarvan in de functie setup de vertragingsfunctie `Utils.wait`, dan kun je code schrijven die op tijd achter elkaar verloopt, alsof die synchroon is.  
( De functie `Utils.wait` wordt later onder [Hulpfuncties (Utils)](#utils) nog nader beschreven. )

Voorbeeldcode (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # beide wielsnelheden op 50 zetten en vooruit rijden
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 1 seconde wachten
    # beide wielsnelheden op -50 zetten en achteruit rijden
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 1 seconde wachten
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( De syntaxis voor robotinstanties en methoden wordt later onder [Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB](#grammar-syntax) nog nader beschreven. )


<br>

### De functie loop {#loop}
De functie loop ondersteunt parallelle uitvoering en wordt zolang de code loopt ongeveer elke 10 ms opnieuw doorlopen.  
In de functie loop schrijf je vooral code die de waarde van variabelen steeds opnieuw instelt of die bepaalde gebeurtenissen bij de robot opmerkt en verwerkt.  

In het volgende voorbeeld veranderen de wielsnelheid en de ledkleur van de robot HamsterS in de loop van de tijd.  
( Wijzig je binnen een functie een variabele die buiten setup / loop is gedeclareerd, dan declareer je die daar met het sleutelwoord `global`. )

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
    frame += 1  # bij elke aanroep van de functie loop neemt de waarde van frame met 1 toe

    # met de gewijzigde waarde van frame beide wielsnelheden en de RGB-waarden van beide leds instellen
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( De syntaxis voor robotinstanties en methoden wordt later onder [Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB](#grammar-syntax) nog nader beschreven. )  

In het volgende voorbeeld wordt de led rood aangezet wanneer er licht op het lichaam van de robot HamsterS wordt getikt (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # op het moment dat er een tik plaatsvindt, wordt de gebeurtenis opgemerkt
    if hamster_s.tap():               # bij een opgemerkte gebeurtenis True
        hamster_s.set_led_color('both', 'red')   # beide leds rood aanzetten
    else:
        hamster_s.turn_off('both')               # beide leds uitzetten
```
( De syntaxis voor het opmerken van gebeurtenissen (`tap()`) en meer wordt later onder [Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB](#grammar-syntax) nog nader beschreven. )  

<br><br>

## Het basissyntaxsysteem van het roboprogrammeren in RobomationLAB {#grammar-syntax}
Bij het schrijven van code in de programma's voor roboprogrammeren van RobomationLAB geldt het volgende basissyntaxsysteem.  
De robotbesturing loopt via het Python-pakket `robomation`:  
je maakt van de robot een instantie en roept dan de methoden van die instantie aan.

### Het pakket robomation importeren {#import-package}
Om de klassen (robots) en hulpfuncties (`Utils`) te gebruiken die je voor de robotbesturing nodig hebt, hoort de volgende regel aan het begin van de code.

```python
from robomation import *
```

<br>

### Een robotinstantie maken {#create-instance}
Declareer de robot die je wilt gebruiken als instantie.  
De klassenaam staat voor het soort robot, het getal tussen de haakjes voor de index van de instantie (begint bij 0).

```python
hamster_s = HamsterS(0)   # één HamsterS
```

De klassenamen en de standaard variabelenamen van de afzonderlijke robots zijn:

| Robot | Klassenaam | Standaard variabelenaam |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Gebruik je meerdere robots van hetzelfde soort, declareer die dan met oplopende index 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Methoden voor robotbesturing {#control-methods}
Om de robot te besturen roep je de methoden van de instantie aan.  
De methoden voeren acties van de robot uit — wielsnelheid instellen, rijden, led, geluid en meer.

```python
hamster_s.set_wheel_speed('both', 50)    # beide wielsnelheden instellen
hamster_s.move_distance(10, 'cm')        # 10 cm vooruit rijden
hamster_s.set_led_color('both', 'red')   # beide leds op rood
```

Welke methoden een robot biedt en welke parameters die hebben, staat in het document van de betreffende robot (bijv. „HamsterS").

<br>

### Sensoren en toestanden uitlezen {#sensor}
Ook voor het uitlezen van sensorwaarden of toestanden van de robot roep je methoden aan; de methode geeft de waarde terug.

```python
left = hamster_s.floor('left')        # de waarde van de linkervloersensor lezen
dist = hamster_s.proximity('right')   # de waarde van de rechternabijheidssensor lezen
```

<br>

### Gebeurtenissen opmerken {#event}
Gebeurtenissen die door veranderingen van toestand of omgeving plaatsvinden, merk je daaraan op dat  
de bijbehorende gebeurtenismethode op het moment dat de gebeurtenis plaatsvindt True teruggeeft.

```python
if hamster_s.tap():        # op het moment dat er een tik plaatsvindt, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Wachten tot een actie klaar is (wait) {#wait}
Methoden die tijd nodig hebben om klaar te zijn — rijden, draaien, geluid afspelen — hebben een parameter `wait`.
- `wait=True` (standaardwaarde): er wordt gewacht tot de actie klaar is, daarna loopt de volgende code.
- `wait=False`: de actie wordt gestart en de volgende code loopt direct verder.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # wacht tot de rit klaar is
hamster_s.move_distance(10, 'cm', wait=False)   # start de rit en voert direct de volgende code uit
```

<br>

### Hulpfuncties (Utils) {#utils}
Gemeenschappelijke functies die niet van het soort robot afhangen — tijdvertraging, geluid afspelen, loguitvoer, kleuren — gebruik je via de methoden van de klasse `Utils`.

```python
Utils.wait(1)              # 1 seconde wachten
Utils.speak('Hallo')       # tekst als spraak (TTS) afspelen
Utils.log(0, '', '')       # loguitvoer in de console
```

<br>
