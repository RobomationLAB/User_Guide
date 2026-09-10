---
title: Ylävalikko
---

# Ylävalikko

**Ylävalikkoon** on koottu ne toiminnot, joita ohjelmassa käytetään useimmin: sovittimen ja robotin yhdistäminen, tiedostojen tallentaminen ja avaaminen ja moni muu.  
Alla kerrotaan järjestyksessä, mitä kukin valikko tekee. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Ohjelman logo.  
Kun napsautat logoa, sivu päivittyy. 

Kun **lohkokoodauksen editori** on käytössä, logossa lukee **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Kun **Python-editori** on käytössä, logossa lukee **Script Composer**.  

<br>

## Etsi sovitin {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Täällä voit **etsiä robotin kanssa keskustelevan sovittimen ja yhdistää sen ohjelmaan**.

Jotta voit ohjata robottia ohjelmasta, sinun on ensin yhdistettävä ohjelmaan se sovitin, joka keskustelee robotin kanssa.  
Tätä kutsutaan **pariliitokseksi**. 

Kun painat painiketta **Sovitin**, näet luettelon niistä sovittimista, jotka ovat juuri nyt käytettävissä tietokoneella.  
Kun valitset luettelosta haluamasi sovittimen ja napsautat painiketta **Yhdistä**, sovitin yhdistetään ohjelmaan.  

### Sovittimen yhteyden tarkistaminen {#dongle-status}

Sovitin, joka on kerran yhdistetty ohjelmaan, yhdistetään automaattisesti seuraavan kerran, kun käytät ohjelmaa.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Kun sovitin on yhdistetty ohjelmaan oikein, kuvake muuttuu **vaaleansiniseksi**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Jos selaimen välilehdellä on alla olevan kuvan mukainen kuvake, sovitin on yhdistetty.  

<br>

**⚠️ Ota huomioon**  

Jos sovitin on jo yhdistetty toiseen ohjelmaan tai toiselle sivulle, sitä ei voi yhdistää tähän ohjelmaan.  
Etsi silloin se ohjelma, johon sovitin on yhdistetty, katkaise yhteys, tule takaisin tälle sivulle ja yritä yhdistää uudelleen.

<br>

## Valitse robotti {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Täällä voit **valita ohjelmaan robotin, jota haluat käyttää**, ja **rekisteröidä robotin tiedot sekä sen omat lohkot ja skriptikoodit**. 

Jotta voit ohjata robottia ohjelmasta, sinun on ensin lisättävä ohjelmaan robotin tiedot ja lohkot.

<BlockImage module="program/Menu" id="robot-select" /><br>

Kun painat painiketta **Robotti**, ponnahdusikkunassa näkyy luettelo niistä roboteista, joita voit käyttää ohjelmassa.  

Kun valitset haluamasi robotin ja napsautat painiketta **Lisää**, robotin tiedot sekä sen omat lohkot ja skriptikoodit rekisteröidään ohjelmaan.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Kun robotti on lisätty, syntyvät nämä. 


- **Block Composer**: robotin omat **lohkot** luodaan vasemmalla olevaan [**lohkokokoelmaan**](Editor#block-editor) 
- **Script Composer**: robotin omat **skriptikoodit** luodaan vasemmalla olevaan [**koodikokoelmaan**](Editor#python-editor)

Näin voit vapaasti liikuttaa ja ohjata robotin laitteistoa: antureita, moottoreita, LEDejä ja muuta.  

<br>

**⚙️ Huomaa**

RobomationLABissa voit yhdistää ja käyttää niin monta robottia kuin haluat, robottien tyypistä ja määrästä riippumatta.  

Jos haluat kuitenkin käyttää useita robotteja samaan aikaan, ohjelmaan on oltava yhdistetty yhtä monta sovitinta kuin haluat käyttää robotteja, ja sinun on lisättävä ohjelmaan yhtä monta robottia kuin haluat käyttää.  

<br>

## Valitse laajennusmoduuli {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Laajennusmoduuli on moduuli, joka tuo **tekoälypohjaisia lisätoimintoja, kuten puheentunnistuksen, kuvantunnistuksen ja kuva-analyysin**.  
Täällä voit **valita ohjelmaan laajennusmoduulin, jota haluat käyttää**, ja **rekisteröidä moduulin tiedot sekä sen omat lohkot ja skriptikoodit**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Kun painat painiketta **Laajennus**, esiin tulee ponnahdusikkuna, jossa on luettelo niistä laajennusmoduuleista, joita voit käyttää ohjelmassa.  
- Puhe tekstiksi
- Kasvojentunnistus
- Yksityiskohtainen kasvojentunnistus
- Ilmeentunnistus
- Käden tunnistus
- Kehon tunnistus
- Kohteentunnistus
- Värintunnistus
- ArUco-merkkien tunnistus
- Kamerapohjainen itseajo

Kun napsautat haluamaasi moduulia, moduulin tiedot sekä sen omat lohkot ja skriptikoodit rekisteröidään ohjelmaan samalla tavalla kuin kohdassa [**Valitse robotti**](#robot). 

Kun lisäät ohjelmaan laajennusmoduulin, joka käyttää kameraa — kuten **Kasvojentunnistus** tai **Käden tunnistus** —  
välilehdelle [**Esikatselu - Kamera**](Preview#camera) luodaan kameramoduuli, ja voit yhdistää kameran ohjelmaan ja käyttää sitä.  

Jos et enää tarvitse valitsemaasi laajennusmoduulia, voit poistaa robotin luettelosta valitsemalla **oikea painike → Poista**.

<br>

## Ääni {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Täällä voit valita koodiisi äänen tai lisätä ohjelmaan itse äänen omalta koneeltasi.

### Valitse ääni {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Kun painat painiketta **Ääni**, esiin tulee näkymä, jossa voit valita ohjelman monista äänistä.  
Voit käyttää näitä toimintoja.  
- Äänten haku
- ▶ Äänen kuuntelu ennakkoon
- Äänen lisääminen äänilistaan (vasen paneeli)

### Lisätoiminnot {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Kun napsautat vasemmassa alakulmassa olevaa **laajennus**-painiketta (punainen kehys) tai siirrät hiiren sen päälle, esiin tulee kolme lisätoimintoa.  
Voit käyttää näitä toimintoja.
- Lisää paikallinen tiedosto: lisää äänitiedoston omalta koneeltasi 
- Tallenna ääni: tallentaa äänen itse ja lisää sen
- Lisää satunnainen ääni: lisää äänen, joka on valittu satunnaisesti koko äänilistasta

### Äänen käyttäminen koodissa {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Ääniä, jotka on lisätty äänilistaan (vasen paneeli), voit käyttää koodissasi.

- **Lohkokoodauksessa** valitset haluamasi äänen lohkon **toista ääni** pudotusvalikosta.  

- **Skriptikoodauksessa** valitset haluamasi äänen kategorian **Koodit - Ääni** funktion **'toista ääni'** alivalikoista.  

Kun koodi suoritetaan, valittu ääni soitetaan koneesi kaiuttimesta.

<br>

## Esimerkki {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Jos ohjelmaan on lisätty robotti, voit hakea jokaiselle robotille yksinkertaisia esimerkkejä ja kokeilla niitä.

### Valitse esimerkki {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Kun painat Esimerkki-painiketta, esiin tulee yllä näkyvä näkymä **Valitse esimerkki**.   
**Kategorioiden** ja **hakutoiminnon** avulla löydät haluamasi esimerkin nopeasti. 

### Esimerkin hakeminen {#example-load}
1. Napsauta valikkoa **Esimerkki**, jolloin näkymä **Valitse esimerkki** avautuu, ja valitse haluamasi esimerkki. 
2. Näkymä päivittyy, ja esimerkki näkyy koodausalueella.   
3. Kun esimerkki on haettu, voit painaa **suorituspainiketta (▶)** ja katsoa, mitä tapahtuu, ilman muita toimia. 

<br>

## Muokkaa {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Täällä voit kumota toiminnon tai tehdä sen uudelleen.
- Kopioi (Ctrl+C): kopioi valitun lohkon tai koodin.
- Liitä (Ctrl+V): liittää kopioidun lohkon tai koodin työtilaan.
- Kumoa (Ctrl+Z): kumoaa viimeisimmän toiminnon.
- Tee uudelleen (Ctrl+Y): tekee kumotun toiminnon uudelleen. 

<br>

## Tiedosto {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Täällä voit hallita tiedostoja: tehdä uutta koodia, tallentaa kirjoittamasi koodin tiedostoksi ja avata sen uudelleen.

- Uusi  
Tyhjentää koodin, jota olet kirjoittamassa, ja tekee uutta koodia.

- Tallenna projekti  
Tallentaa projektitiedoston, jota olet kirjoittamassa.  
Tiedosto tallennetaan koneesi 'Lataukset'-kansioon, ja tiedostopääte on '.block'.

- Vie Python-koodi  
Poimii Python-koodin projektista, jota olet kirjoittamassa, ja tallentaa sen tiedostoksi.  
Tiedosto tallennetaan koneesi 'Lataukset'-kansioon, ja tiedostopääte on '.py'.  
Tallennetun tiedoston voit avata ja suorittaa ulkoisessa Python-kehitysympäristössä, kuten VSCodessa.

- Avaa projekti  
Avaa projektitiedoston tai Python-kooditiedoston koneeltasi.  
Voit avata tiedostopäätteet '.block' ja '.py'.  
Kun avaat '.block'-tiedoston, se avautuu lohkokoodauksen editorissa, ja kun avaat '.py'-tiedoston, se avautuu Python-editorissa.  
Ota huomioon, että '.py'-tiedosto ei ehkä avaudu oikein, jos se ei vastaa Block Composerin koodimuotoa tai jos siinä on syntaksivirheitä.

<br>

## Koodin suorittaminen / pysäyttäminen {#run-stop}

### Suorita (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Tulkitsee ja suorittaa sen lohkokoodin tai skriptikoodin, joka on kirjoitettu juuri nyt käytössä olevaan editoriin.  

Kirjoittamasi koodin mukaan voit ohjata ohjelmaan yhdistettyjä robotteja.  
Kun koodi on käynnissä, et voi muuttaa kirjoitettua koodia.

### Pysäytä (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Pysäyttää koodin suorituksen.


<br>

## Tekoälykoodaus {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Kun painat ylävalikossa painiketta **Tekoälykoodaus**, näytön oikeaan reunaan avautuu tekoälychatbotin paneeli.  
Voit keskustella RobomationLABiin sisäänrakennetun **tekoälychatbotin** kanssa ja koodata yhdessä tekoälyn kanssa.

Voit käyttää näitä toimintoja.
- Voit kysyä vapaasti koodauksesta: miten kirjoitat ja muutat koodia, syntaksista, käsitteistä ja muusta.
- **Jos koodin suorituksessa tulee virhe**, voit kysyä tekoälyltä, miksi virhe syntyi ja miten sen ratkaisee, ja päästä nopeasti eteenpäin.
- Tekoälyn ehdottaman koodin voit kopioida helposti koodilohkon oikealla puolella olevalla kopiointipainikkeella.
- Keskustelu tallennetaan, joten voit jatkaa sitä myöhemmin, ja voit myös aloittaa **uuden keskustelun**.
- Voit vetää paneelin vasenta reunaa ja säätää paneelin leveyttä.

<br>

## Kopioi koodi {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Täällä voit kopioida leikepöydälle sen koodin, joka on kirjoitettu juuri nyt käytössä olevaan editoriin.  

### Block Composer (lohkokoodaus) {#copy-block}

Kopioidaan se Python-koodi, joka näkyy välilehdellä **[Python-esikatselu](Preview#python-preview)**.

### Script Composer (Python) {#copy-python}
Python-editorin koodi kopioidaan täsmälleen sellaisena kuin se on.  

Kopioidun koodin voit liittää haluamaasi paikkaan näppäinyhdistelmällä Ctrl+V.

<br>

## Editorin asetukset {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Täällä voit valita editorin, jolla haluat koodata: **lohkokoodaus** tai **Python**.  

Kun vaihdat editoria, kirjoittamasi koodi säilyy, joten voit aina jatkaa koodaamista. 

**※ Lohkokoodauksen editori ja Python-editori vastaavat toisiaan yksi yhteen, ja kun vaihdat editoria, kirjoittamasi koodi muunnetaan, jotta voit jatkaa.**

### Lohkokoodauksen editori {#editor-settings-block}
Kun valitset lohkokoodauksen, logo vaihtuu muotoon **Block Composer**.  
Lohkot, jotka kokoat lohkokoodauksen editorissa, muunnetaan Python-koodiksi reaaliajassa, ja näet tuloksen välilehdellä **Esikatselu - Python-esikatselu**.  

### Python-editori {#editor-settings-python}
Kun valitset Pythonin, logo vaihtuu muotoon **Script Composer**.  
Koodi, jonka kirjoitat Python-editorissa, muunnetaan lohkoiksi, kun vaihdat takaisin **lohkokoodauksen editoriin**.  

> Muunnos Pythonista lohkoiksi tehdään kuitenkin vain sellaiselle koodille, joka voidaan esittää lohkoina.  
> Jos syntaksi on virheellinen tai koodia ei voi muuntaa lohkoiksi, vaihto lohkokoodauksen editoriin ei ehkä onnistu, ja silloin näytetään myös syy, miksi vaihto ei onnistunut.

<br>

## Asetukset {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Täällä voit tehdä ohjelman perusasetukset.

### Kieli {#settings-language}
Vaihtaa kielen (maan), jolla ohjelma näytetään.  
Voit valita haluamasi kielen kaikkiaan 21 kielen joukosta.

### Sovitin {#settings-dongle}
- Katkaise yhteys: katkaisee yhteyden kaikkiin ohjelmaan yhdistettyihin sovittimiin.
- Yhdistä: yhdistää sovittimen ohjelmaan uudelleen.

### Nollaus {#settings-reset}
- Ohjelman nollaus: kaikki ohjelmaan rekisteröidyt tiedot (robottien tiedot, lohkot ja skriptikoodit, asetukset ja muut) nollataan.

<br>

## Tuki {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Täältä löydät oppaat ja ulkoiset materiaalit, joita tarvitset ohjelman käyttöön.  

- Ohjevideo: opastus niille, jotka käyttävät ohjelmaa ensimmäistä kertaa.
- Ohje: täällä näet ohjelmassa, miten lohkoja ja Python-koodeja käytetään, sekä esimerkkejä.
- Käyttöopas: siirtyy RobomationLABin käyttöoppaan wikisivulle.  
Täältä löydät yksityiskohtaisen kuvauksen ohjelman osista ja niiden käytöstä sekä jokaisen lohkon ja skriptikoodin toiminnasta ja syntaksista.
- Robomation Lab: siirtyy RobomationLABin pääsivulle.
- Etusivu: siirtyy Robomationin viralliselle verkkosivustolle.
- YouTube: siirtyy Robomationin YouTube-sivulle.
- Verkkokauppa: siirtyy Robomationin verkkokauppaan.
- Tietoja: täällä näet ohjelman version ja päivityshistorian, käyttöehdot, tietosuojakäytännön ja muuta.
- Ota yhteyttä: täällä voit kysyä sinua askarruttavista asioista tai ilmoittaa virheistä, joita kohtaat ohjelmaa käyttäessäsi.

<br>
