---
title: Editori
---

# Editori

**Editori** on alue, jolla kirjoitat robottia ohjaavan koodin, joko **lohkoilla** tai **skriptikoodina**.  
Alla kerrotaan, miten koodaat kummassakin ympäristössä — **lohkokoodauksessa ja skriptikoodauksessa (Python)** — ja mitä sinun on otettava huomioon.

## Lohkokoodauksen editori {#block-editor}

### Lohkokategoriat {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Alue, jolla RobomationLABin lohkot on jaettu **kategorioihin**.  
Kun napsautat kategoriaa, näet siihen kuuluvan **lohkokokoelman**.  

Nämä lohkokategoriat ovat mukana valmiiksi.  

- Logiikka
- Silmukat
- Matematiikka
- Teksti
- Lista
- Väri
- Ääni
- Ohjaus
- Muuttujat
- Funktiot
- Muut

Kun lisäät ohjelmaan lisäksi [**robotin**](Menu#robot) tai [**laajennusmoduulin**](Menu#extension), voit käyttää ohjelmassa robotin tai moduulin omaa lohkokokoelmaa.  

<br>

**⚙️ Huomaa**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategoriat, jotka olet lisännyt ohjelmaan mutta joita et enää käytä, voit poistaa lohkokategorioista valitsemalla **hiiren oikea painike → Poista**.

<br>

### Lohkokokoelma {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Alue, jolle kategorian kaikki lohkot on koottu.  
Lohkokokoelman lohkot voit siirtää koodausalueelle **vetämällä ja pudottamalla**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Huomaa**  
Jos haluat tietää, miten lohkoa käytetään, voit valita **hiiren oikea painike → Apua** ja lukea ohjetekstin, joka kertoo kunkin lohkon käytöstä.  

<br>

### Koodausalue {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Alue, jolla kokoat lohkokokoelmasta hakemasi lohkot yhteen.  


Kokoamasi lohkot muunnetaan **Python-koodiksi** reaaliajassa,  
ja kun suoritat koodin, se tulkitaan, jolloin robotti liikkuu ja sitä ohjataan.  

<br>

### Lohkojen perusrakenne {#block-structure}

Kun koodaat lohkokoodauksen editorissa, noudata tätä perusrakennetta.

<BlockImage module="program/Editor" id="block-structure" /><br>

Lohkokoodauksen editori tulkitsee ja suorittaa sen koodin, joka on funktiolohkojen **funktio setup** ja **funktio loop** sisällä.  
Kirjoita koodi siis asettamalla lohkoja funktiolohkojen **funktio setup** ja **funktio loop** sisään.  

**funktio setup**  
Funktiolohkon funktio setup sisällä määrittelet toiminnot, jotka suoritetaan alussa, kun koodi ajetaan.  
Lohkolla **odota** voit saada toiminnot suoritettua aikajärjestyksessä.  

**funktio loop**  
Funktiolohkon funktio loop sisällä määrittelet toiminnot, jotka toistuvat niin kauan kuin koodi on käynnissä.  
Määrittelemäsi toiminnot toistuvat kerran 10 ms:n välein.  

**⚙️ Huomaa**  
(Lukuun ottamatta omia funktioita, jotka luot **Funktiot-kategorian** kautta)  
lohkot, jotka ovat funktiolohkojen **funktio setup** ja **funktio loop** ulkopuolella, eivät vaikuta mitään, kun koodi suoritetaan.  

<br>

### Näin käytät lohkoja {#block-usage}

**Lohkon lisääminen**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Lisäät lohkon **vetämällä sen lohkokokoelmasta** ja **pudottamalla sen editoriin**.   
<br>

**Lohkojen kopiointi ja liittäminen**  

Editorissa on kaksi tapaa kopioida ja liittää lohkoja.  

1. Valitse lohko ja paina **Ctrl+C**, niin **kopioit** valitun lohkon.  
Kun painat **Ctrl+V**, voit **liittää** viimeksi kopioimasi lohkon editoriin.  

2. Valitse lohko ja paina **Muokkaa**-valikossa painiketta **'Kopioi Ctrl+C'**, niin **kopioit** valitun lohkon.  
Kun painat **Muokkaa**-valikossa painiketta **'Liitä Ctrl+V'**, voit **liittää** viimeksi kopioimasi lohkon editoriin.

<br>

**Lohkojen poistaminen**  

Editorissa on kolme tapaa poistaa lohkoja.

1. Valitse lohko ja paina **Backspace**, niin poistat valitun lohkon.<br>  

2. Voit poistaa lohkon **vetämällä sen editorissa** ja **pudottamalla sen lohkokategorioihin**.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Voit poistaa lohkon **vetämällä sen editorissa** ja **pudottamalla sen roskakoriin**.  
Poistetut lohkot näet uudelleen **roskakorissa**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Usean lohkon valitseminen samalla kertaa**  

Editorissa on kaksi tapaa valita useita lohkoja samalla kertaa.

1. Kun pidät **Shift**-näppäintä pohjassa ja vedät työtilan yli tai napsautat lohkoja yksitellen,  
voit valita useita lohkoja samalla kertaa.  

2. Kun napsautat työtilan oikeassa alakulmassa olevaa **valintapainiketta**, voit kytkeä tilan 'valitse useita lohkoja' päälle ja pois.  
Jos painike on väritetty, tila on päällä.  
Jos painiketta ei ole väritetty, tila on pois päältä.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Niin kauan kuin tila 'valitse useita lohkoja' on päällä, voit vain valita lohkoja.   
Jos haluat siirtää tai muokata valittuja lohkoja samalla kertaa, kytke tila pois, kun olet valinnut ne.  

<br>

**Lisävalinnat**

Lisäksi voit **napsauttaa lohkoa hiiren oikealla painikkeella**  
ja saada esiin monia lisävalintoja, kuten **lohkon supistamisen/laajentamisen, käyttöön ottamisen/poistamisen ja ohjeen**.  

<br>

## Python-editori {#python-editor}

### Koodikokoelma {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Alue, jolla robottikoodauksen **perusfunktiot** ja robotteihin ja laajennusmoduuleihin kuuluva **Python-koodi** on jaettu **kategorioihin**.  


Nämä koodikategoriat ovat perusfunktioissa (Koodit).  

- Logiikka (logic)
- Silmukat (loops)
- Matematiikka (math)
- Teksti (text)
- Lista (lists)
- Väri (color)
- Ääni (audio)
- Ohjaus (control)

Perusfunktioiden koodit tekevät täsmälleen samat asiat kuin lohkokoodauksen editorin peruslohkot.  

<br>

**⚙️ Huomaa**  
Kohdassa [**Näin käytät koodikokoelmaa**](#python-codes-usage) kerrotaan, miten koodaat Python-editorissa koodikokoelman avulla.

<br>

### Koodieditori {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Alue, jolla kirjoitat robottia ohjaavan koodin.  


Kun valitset [**Editorin asetuksissa**](Menu#editor-settings) **Python**-editorin, voit kirjoittaa Python-koodia.

<br>

### Koodin perusrakenne {#python-structure}

Kun koodaat koodieditorissa, noudata tätä perusrakennetta.

```python
from robomation import *

# (jos on robotti, jota haluat käyttää, esittele se instanssina, esimerkki)
hamster_s = HamsterS(0)

# lisää tähän alustuskoodi, joka suoritetaan kerran:
def setup():
    pass

# lisää tähän ohjauskoodi, jota suoritetaan toistuvasti:
def loop():
    pass
```

Koodieditori tulkitsee ja suorittaa sen koodin, joka on funktioiden **setup** ja **loop** sisällä.  
Kirjoita koodi siis funktioiden **setup** ja **loop** sisään.  
Robotin ohjaamiseksi kirjoita lisäksi `from robomation import *` koodin alkuun ja esittele käytettävä robotti instanssina.

**setup**  

Funktion setup sisällä määrittelet toiminnot, jotka suoritetaan alussa, kun koodi ajetaan.  
Funktiolla **Utils.wait** voit saada toiminnot suoritettua aikajärjestyksessä.  

**loop**  
Funktion loop sisällä määrittelet toiminnot, jotka toistuvat niin kauan kuin koodi on käynnissä.  
Määrittelemäsi toiminnot toistuvat kerran 10 ms:n välein.  


<br>

### Näin käytät koodikokoelmaa {#python-codes-usage}

Alla kerrotaan yksinkertaisin esimerkein, **miten käytät koodikokoelmaa koodatessasi**.  

### Halutun koodin löytäminen {#python-codes-find}

Koodikokoelmassa on monia robottikoodauksessa tarvittavia funktioita ja koodeja.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Kun katsot **Koodit**-kategorian valikkokohtia, huomaat, että joissakin niistä on kuvake <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Kun napsautat valikkokohtaa **Logiikka** kerran, kuvake vaihtuu muotoon <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> ja sisällä olevat **alivalikot** avautuvat näkyviin.  
Valikkokohtaa, jolla on näin alivalikoita, kutsutaan '**kategoriaksi**'.  

Jos valikkokohdassa ei ole kuvaketta <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — kuten **kolmihaarainen** Logiikka-kategorian sisällä — se tarkoittaa, että valikkokohdalla **ei ole enää alivalikoita**.  
Valikkokohtaa, jolla ei näin ole alivalikoita, kutsutaan '**koodiksi**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Kun napsautat uudelleen kategoriaa, jonka alivalikot ovat avoinna, kuvake vaihtuu takaisin muotoon <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> ja alivalikot piilotetaan.  

Näin voit seurata kategorioita ja löytää haluamasi koodin koodikokoelmasta.

<br>

### Koodin lisääminen editoriin {#python-codes-insert}

Näin lisäät koodia editoriin.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Jos valikkokohdan nimen vasemmalla puolella on kuvake <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline />, se tarkoittaa, ettei valikkokohdalla ole valittavia **koodivalintoja**.  
Näin on useimmilla **kategoria**-valikkokohdilla, joilla on alivalikoita.

Jos valikkokohdan nimen vasemmalla puolella on kuvake <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline />, se tarkoittaa, että valikkokohdassa voi valita **koodivalintoja**.  
Näin on useimmilla **koodi**-valikkokohdilla, joilla ei ole alivalikoita.

Kun **napsautat hiiren oikealla painikkeella** sitä koodia, jonka haluat lisätä editoriin, näet käytettävissä olevat valinnat.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Kun napsautat **koodi**-valikkokohtaa oikealla painikkeella, näet samat valinnat riippumatta siitä, onko kyseessä perusfunktio vai robottiin tai laajennusmoduuliin kuuluva koodi.

- **Lisää koodi**: lisää valitun koodin siihen kohtaan, jossa kursori on editorissa.
- **Apua**: näyttää ohjetekstin, joka kertoo koodin käytöstä.
- **Peruuta**: sulkee valintavalikon.

Robottiin tai laajennusmoduuliin kuuluvat koodit lisätään robotti-instanssin metodikutsuna, kun valitset **Lisää koodi**.  
( Esim. HamsterSin `set_wheel_speed` → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Huomaa**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Robottien ja laajennusmoduulien koodikategoriat, jotka olet lisännyt ohjelmaan mutta joita et enää käytä,  
voit poistaa koodikokoelmasta valitsemalla **hiiren oikea painike → Poista**.

<br>
