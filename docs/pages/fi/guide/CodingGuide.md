---
title: Koodausopas
---

# Koodausopas

Tämä dokumentti kertoo RobomationLABista, robottikoodauksen opetusalustasta, joka on osa Robomationin kehittämää 'robottiliikkeiden suoratoistopalvelun suoritusmoottoria ja integroitua kehitysympäristöä'.  

Kuvaus edetään tässä järjestyksessä:
- RobomationLABin tärkeimmät ominaisuudet
- Näin ohjelmoit robotteja RobomationLABissa
- Robottikoodauksen perussyntaksi RobomationLABissa  

<br>

## Sisällysluettelo {#table-of-contents}
1. [RobomationLAB — robottikoodauksen opetusalusta](#platform)  
    1-1) [Robottikoodauksen ohjelmat](#coding-programs)  
    1-2) [Lohkojen ja Pythonin kaksisuuntainen muunnos reaaliajassa](#block-python-conversion)  
    1-3) [Koodausohjelmien tärkeimmät ominaisuudet](#features)  
    1-4) [Robotin ohjaus reaaliajassa](#control-method)  

2. [Näin ohjelmoit robotteja RobomationLABissa](#programming-method)  
    2-1) [Peräkkäinen ja rinnakkainen suoritus](#sequential-parallel)  
    2-2) [Funktio setup](#setup)  
    2-3) [Funktio loop](#loop)  

3. [Robottikoodauksen perussyntaksi RobomationLABissa](#grammar-syntax)  
    3-1) [robomation-paketin tuominen](#import-package)  
    3-2) [Robotti-instanssin luominen](#create-instance)  
    3-3) [Robotin ohjausmetodit](#control-methods)  
    3-4) [Anturien ja tilan lukeminen](#sensor)  
    3-5) [Tapahtumien havaitseminen](#event)  
    3-6) [Valmistumisen odottaminen (wait)](#wait)  
    3-7) [Apufunktiot (Utils)](#utils)   

<br><br>

## RobomationLAB — robottikoodauksen opetusalusta {#platform}
RobomationLAB on alusta, joka on optimoitu **tekoälyrobotiikan ja ohjelmiston opetukseen**,  
ja se tarjoaa Chrome-selaimessa toimivan integroidun kehitysympäristön robottikoodauksen opetukseen perus- ja yläkoululaisille.  

RobomationLAB tarjoaa robottikoodauksen opetusohjelmia monella tavalla, muun muassa **lohkokoodauksena** ja **skriptikoodauksena**.  
Et opi vain koodauksen teoriaa, vaan saat myös tilaisuuden oppia koodausta ja robotteja samaan aikaan,  
kun liikutat Robomationin tuotteita ja ohjaat niitä oikeasti.

<br>

### Robottikoodauksen ohjelmat {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer on työkalu, jolla ohjaat Robomationin robotteja nopeasti ja helposti lohkokoodauksella ja opit robotin ohjauksen perusteet.**  

- Kehitysympäristö, joka on optimoitu fyysiseen tietojenkäsittelyyn

- Lohkojen veto ja pudotus tekee koodauksesta helppoa myös aloittelijalle  
- Oppimisympäristö ilman syntaksivirheitä aina peruskäsitteistä lähtien  
- Automaattinen muunnos Python-skriptikoodiksi  
- Jokaiselle robotille valmiit lohkokokoelmat sekä monia kokeiltavia esimerkkejä
- Tulos näkyy reaaliajassa, kun koodi suoritetaan  
- Lohkojen yhdistely kehittää ongelmanratkaisukykyä ja luovuutta  
- Tekoälypohjainen skriptikoodin analyysi antaa räätälöityä palautetta  

<br>

#### Script Composer {#script-composer}
**Script Composer on työkalu, jolla ohjaat Robomationin robotteja nopeasti ja helposti Python-koodauksella ja opit Python-syntaksin ja robottikoodauksen perusteet.**  

- Python-editori

- Automaattinen koodin täydennys ja koodin lisääminen kielen mukaan
- Jokaiselle robotille monia kokeiltavia esimerkkikoodeja
- Tulos näkyy reaaliajassa, kun koodi suoritetaan
- Tekoälypohjainen skriptikoodin analyysi antaa räätälöityä palautetta

<br>

#### Koodausohjelmien tärkeimmät ominaisuudet {#features}
RobomationLABin robottikoodauksen ohjelmilla on nämä tärkeimmät ominaisuudet.  
1.	Ne toimivat Chrome-selaimessa, joten ne eivät ole sidottuja tiettyyn käyttöjärjestelmään
2.	Ne ohjaavat robotin laitteistoa suoraan USB-sovittimen kautta Web Serial -tiedonsiirrolla
3.	Ne tukevat useiden robottien ohjaamista samaan aikaan — robottien tyyppiä ja määrää ei ole rajoitettu
4.	Kun tallennat tiedoston, tulos muunnetaan JSON-tekstitiedostoksi

<br>

### Robotin ohjaus reaaliajassa {#control-method}
RobomationLABin robottikoodauksen ohjelmat ohjaavat robottia reaaliajassa tämän kulun mukaan.  
1.	Kirjoitat lohkokoodauksella tai skriptikoodauksella koodia,
joka asettaa arvoja robotin Effector- ja Command-objekteille
tai käyttää robotin Sensor-arvoja ja syntyviä tapahtumia (Event).
2.	Suoritat koodin.
3.	Web Serial -tiedonsiirron kautta robotilta vastaanotetaan paketteja, joissa on Sensor- ja Event-tietoja,
ja ne siirretään robotin Device-objektiin.
4.	Koodi tulkitaan reaaliajassa,
ja tietoja kirjoitetaan Effector- ja Command-objekteihin tai luetaan Sensor- ja Event-objektien arvoja.
5.	Robotin Device-objektin tiedoista muodostetaan paketti,
ja paketti lähetetään robotille Web Serial -tiedonsiirron kautta, jotta näet robotin todella liikkuvan.
6.	Niin kauan kuin koodi on käynnissä, vaiheet 3, 4 ja 5 toistuvat noin 10-20 ms:n välein.  

<br>

### Lohkojen ja Pythonin kaksisuuntainen muunnos reaaliajassa {#block-python-conversion}
RobomationLABissa on sekä lohkokoodauksen editori että Python-koodauksen editori, ja nämä kaksi editoria synkronoidaan molempiin suuntiin reaaliajassa.

- Kun lisäät, muutat tai poistat lohkoja lohkokoodauksen editorissa, muutos näkyy Python-koodissa reaaliajassa.
- Kun taas muokkaat koodia Python-koodauksen editorissa, muutos näkyy lohkoissa reaaliajassa.

Koska lohkot ja Python-koodi vastaavat toisiaan yksi yhteen ja muuntuvat molempiin suuntiin,  
voit koodata joustavasti lohkokoodauksen ja skriptikoodauksen välillä: voit rakentaa koko rakenteen nopeasti lohkoilla ja hienosäätää yksityiskohdat Pythonilla  
tai opetella Python-syntaksia vertaamalla sitä lohkoihin.

> Muunnos Pythonista lohkoiksi tehdään kuitenkin vain sellaiselle koodille, joka voidaan esittää lohkoina.  
> (Jos syntaksi on virheellinen tai koodia ei voi muuntaa lohkoiksi, vaihto ei ehkä onnistu.  
Lisätietoja löydät dokumentista [Koodaussäännöt](CodingRules).)

<br>

<br><br>

## Näin ohjelmoit robotteja RobomationLABissa {#programming-method}

### Peräkkäinen ja rinnakkainen suoritus {#sequential-parallel}
Robotteja voi ohjelmoida kahdella tavalla: peräkkäisenä suorituksena ja rinnakkaisena suorituksena.  
Peräkkäisessä suorituksessa seuraava toiminto tehdään vasta, kun edellinen on valmis, ja se sopii hyvin yksinkertaisen käyttäytymisen koodaamiseen.  
Jos haluat esimerkiksi, että robotti ajaa eteenpäin ja sitten pysähtyy ja sytyttää LEDin, peräkkäisen suorituksen on oltava mahdollista, jotta voit asettaa kunkin toiminnon koodin järjestykseen ja suorittaa sen aikajärjestyksessä.  

Rinnakkaisessa suorituksessa useita toimintoja tehdään samaan aikaan, ja sitä tarvitaan monimutkaisemman ja kehittyneemmän käyttäytymisen ohjelmointiin.  
Jos haluat esimerkiksi saada kaksijalkaisen robotin kävelemään, sinun on osattava koodata rinnakkaisella suorituksella, sillä robotti voi kävellä vain, kun sen jalat ja sääret liikkuvat samaan aikaan.

RobomationLABin robottikoodauksen ohjelmat  
perustuvat setup/loop-rakenteeseen, joka muistuttaa Arduinon laitteistokehitysympäristöä, ja ne tukevat sekä peräkkäistä että rinnakkaista suoritusta.

<BlockImage module="program/Editor" id="block-structure" />

Kun avaat Block Composerin ensimmäisen kerran, työtilassa näkyy kaksi tyhjää funktiolohkoa.  
Lohko 'funktio setup' vastaa funktiota `setup`, ja lohko 'funktio loop' vastaa funktiota `loop`.  

Lohkot muunnetaan Python-koodiksi reaaliajassa,  
ja koodilla on tämä perusrakenne.  

```python
# Python-koodin perusrakenne
from robomation import *

# lisää tähän alustuskoodi, joka suoritetaan kerran:
def setup():
    pass

# lisää tähän ohjauskoodi, jota suoritetaan toistuvasti:
def loop():
    pass
```

> Robotin ohjaamiseksi kirjoitat `from robomation import *` koodin alkuun ja esittelet käytettävän robotin instanssina. (esim. `hamster_s = HamsterS(0)`)


<br>

### Funktio setup {#setup}
Funktio setup suoritetaan vain yhden ainoan kerran, sillä hetkellä kun suoritat koodin.  
Funktiossa setup kirjoitat pääasiassa koodia, joka alustaa muuttujat tai robotin tilan ja toiminnot.  
Kun esimerkiksi ohjaat pyörillä liikkuvaa robottia, voit asettaa pyörien alkunopeuden funktiossa setup.  

Jos tarvitset viivettä funktion sisällä, voit käyttää funktiota `Utils.wait(...)` ja kirjoittaa koodia, joka etenee aikajärjestyksessä lähes kuin synkronisesti.  
`Utils.wait(...)` odottaa määrittämäsi sekuntimäärän ja suorittaa sitten seuraavan koodin, joten koodi herää tietyn ajan tai toiminnon jälkeen ja jatkaa.  
Tämän avulla voit tehdä yksinkertaisen peräkkäisen suorituksen lisäksi tehokasta robottiohjelmointia yhdessä funktion loop kanssa, joka hoitaa rinnakkaisen suorituksen.

Alla on esimerkki koodista, jossa robotti HamsterS ajaa 1 sekunnin eteenpäin ja sitten 1 sekunnin taaksepäin.  
Jos teet saman rinnakkaisesti toimivan funktion loop sisällä, koodista tulee hyvin sekavaa, koska ajanlaskenta ja ohjaus sekoittuvat.  
Kun taas käytät viivefunktiota `Utils.wait` funktion setup sisällä, voit kirjoittaa koodia, joka etenee aikajärjestyksessä lähes kuin synkronisesti.  
( Funktio `Utils.wait` esitellään myöhemmin uudelleen kohdassa [Apufunktiot (Utils)](#utils). )

Esimerkkikoodi (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# lisää tähän alustuskoodi, joka suoritetaan kerran:
def setup():
    # aseta molempien pyörien nopeudeksi 50, jolloin robotti ajaa eteenpäin
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # odota 1 sekunti
    # aseta molempien pyörien nopeudeksi -50, jolloin robotti ajaa taaksepäin
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # odota 1 sekunti
    hamster_s.stop()

# lisää tähän ohjauskoodi, jota suoritetaan toistuvasti:
def loop():
    pass
```
( Robotti-instanssien ja metodien syntaksi esitellään myöhemmin uudelleen kohdassa [Robottikoodauksen perussyntaksi RobomationLABissa](#grammar-syntax). )


<br>

### Funktio loop {#loop}
Funktio loop tukee rinnakkaista suoritusta ja toistuu noin 10 ms:n välein niin kauan kuin koodi on käynnissä.  
Funktiossa loop kirjoitat pääasiassa koodia, joka asettaa muuttujien arvoja toistuvasti tai havaitsee ja käsittelee robotin tiettyjä tapahtumia.  

Alla on esimerkki koodista, jossa robotin HamsterS pyörän nopeus ja LEDin väri muuttuvat ajan myötä.  
( Kun haluat muuttaa funktioiden setup ja loop ulkopuolella esiteltyä muuttujaa funktion sisällä, esittele se avainsanalla `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# lisää tähän alustuskoodi, joka suoritetaan kerran:
def setup():
    global frame
    frame = 0

# lisää tähän ohjauskoodi, jota suoritetaan toistuvasti:
def loop():
    global frame
    frame += 1  # kasvata muuttujan frame arvoa yhdellä joka kerta, kun funktiota loop kutsutaan

    # käytä muuttunutta frame-arvoa molempien pyörien nopeuden ja molempien LEDien RGB-arvon asettamiseen
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Robotti-instanssien ja metodien syntaksi esitellään myöhemmin uudelleen kohdassa [Robottikoodauksen perussyntaksi RobomationLABissa](#grammar-syntax). )  

Alla on esimerkki koodista, joka sytyttää LEDin punaiseksi, kun robotin HamsterS runkoa naputetaan kevyesti.  

```python
from robomation import *

hamster_s = HamsterS(0)

# lisää tähän alustuskoodi, joka suoritetaan kerran:
def setup():
    pass

# lisää tähän ohjauskoodi, jota suoritetaan toistuvasti:
def loop():
    # sillä hetkellä kun naputetaan, tapahtuma havaitaan
    if hamster_s.tap():               # True, kun tapahtuma havaitaan
        hamster_s.set_led_color('both', 'red')   # sytytä molemmat LEDit punaiseksi
    else:
        hamster_s.turn_off('both')               # sammuta molemmat LEDit
```
( Tapahtumien havaitsemisen (`tap()`) ja muun syntaksi esitellään myöhemmin uudelleen kohdassa [Robottikoodauksen perussyntaksi RobomationLABissa](#grammar-syntax). )  

<br><br>

## Robottikoodauksen perussyntaksi RobomationLABissa {#grammar-syntax}
Kun kirjoitat koodia RobomationLABin robottikoodauksen ohjelmissa, noudata tätä perussyntaksia.  
Robottia ohjataan Python-paketin `robomation` kautta,  
ja kirjoitat koodin luomalla robotista instanssin ja kutsumalla sitten instanssin metodeja.

### robomation-paketin tuominen {#import-package}
Jotta voit käyttää robotin ohjaamiseen tarvittavia luokkia (robotteja) ja apufunktioita (`Utils`), koodin alussa on oltava tämä yksi rivi.

```python
from robomation import *
```

<br>

### Robotti-instanssin luominen {#create-instance}
Esittele käytettävä robotti instanssina.  
Luokan nimi kertoo robotin tyypin, ja suluissa oleva luku on instanssin indeksi (se alkaa nollasta).

```python
hamster_s = HamsterS(0)   # yksi HamsterS
```

Kunkin robotin luokan nimi ja oletusmuuttujan nimi ovat nämä.

| Robotti | Luokan nimi | Oletusmuuttujan nimi |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Jos käytät useita samantyyppisiä robotteja, esittele ne indekseillä 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Robotin ohjausmetodit {#control-methods}
Ohjaat robottia kutsumalla instanssin metodeja.  
Metodit tekevät robotin toiminnot: asettavat pyörän nopeuden, ajavat, ohjaavat LEDejä, ääntä ja muuta.

```python
hamster_s.set_wheel_speed('both', 50)    # aseta molempien pyörien nopeus
hamster_s.move_distance(10, 'cm')        # aja 10 cm eteenpäin
hamster_s.set_led_color('both', 'red')   # sytytä molemmat LEDit punaiseksi
```

Kunkin robotin metodien ja parametrien luettelo löytyy robotin omasta dokumentista ('HamsterS' ja muut).

<br>

### Anturien ja tilan lukeminen {#sensor}
Myös anturien arvot ja robotin tilan luet kutsumalla metodia, ja metodi palauttaa arvon.

```python
left = hamster_s.floor('left')        # lue vasemman lattia-anturin arvo
dist = hamster_s.proximity('right')   # lue oikean läheisyysanturin arvo
```

<br>

### Tapahtumien havaitseminen {#event}
Tapahtumat, jotka syntyvät robotin tilan tai ympäristön muutoksista, havaitaan siten,  
että kyseinen tapahtumametodi palauttaa True sillä hetkellä, kun tapahtuma syntyy.

```python
if hamster_s.tap():        # True sillä hetkellä, kun naputetaan (Tap)
    hamster_s.set_led_color('both', 'red')
```

<br>

### Valmistumisen odottaminen (wait) {#wait}
Metodeilla, joiden valmistuminen kestää — kuten ajaminen, kääntyminen ja äänen toistaminen — on parametri `wait`.
- `wait=True` (oletus): odottaa, kunnes toiminto on valmis, ja suorittaa sitten seuraavan koodin.
- `wait=False`: aloittaa toiminnon ja jatkaa heti seuraavaan koodiin.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # odottaa, kunnes ajo on valmis
hamster_s.move_distance(10, 'cm', wait=False)   # aloittaa ajon ja suorittaa heti seuraavan koodin
```

<br>

### Apufunktiot (Utils) {#utils}
Yhteiset toiminnot, jotka eivät riipu robotin tyypistä — viive, äänen toistaminen, lokitulostus, värit ja muut — käytät luokan `Utils` metodien kautta.

```python
Utils.wait(1)              # odota 1 sekunti
Utils.speak('Hei')         # toista teksti puheena (TTS)
Utils.log(0, '', '')       # kirjoita loki konsoliin
```

<br>
