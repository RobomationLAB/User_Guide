---
title: Esikatselu
---

# Esikatselu

**Esikatselu** on alue, joka auttaa sinua robottikoodauksessa: täällä näet **robottien yhteydet** sekä koodin, kameran, konsolin ja muuta.  
Alla kerrotaan, mitä toimintoja voit käyttää kullakin välilehdellä.

## Yhteydet {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Yhteydet-välilehdellä näet tiedot niistä roboteista, jotka on juuri nyt yhdistetty.   
Kun napsautat **Näytä anturin reaaliaikainen arvo**, voit seurata robotin anturien arvoja reaaliajassa kuvaajana tai lukuina.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Täällä valitset anturin, jota haluat tarkastella, ja tuetut anturit vaihtelevat robotin mukaan.  
Kuvaaja ja tapa, jolla tiedot näytetään, muuttuvat automaattisesti valitun anturin arvojen mukaan. 

2. Täällä valitset, kuinka monen sekunnin välein anturin arvo luetaan tai tallennetaan.  
Valittu väli ratkaisee, kuinka pitkään tietoja voidaan enintään tallentaa ja näyttää kuvaajassa. 
3. Kun siirrät hiiren anturikuvaajan päälle, näet samalla anturin arvon kyseisellä hetkellä reaaliajassa. 
4. Aloita/lopeta tallennus: tallentaa anturitiedot. 
5. Vie: tallentaa tallennetut anturitiedot (.csv) ja kuvaajan kuvan (.png) tiedostoiksi.  
Tätä toimintoa voi käyttää vasta, kun olet tallentanut tietoja. 
6. Kuvakaappaus: tallentaa nykyisen kuvaajan kuvan (.png) reaaliajassa.  
Voit tallentaa anturien arvojen muutokset ja tallentaa sekä tiedostotiedot että kuvaajan kuvan tiedostoiksi.    

<br>

## Python-esikatselu {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Python-esikatselussa näet reaaliajassa, miten lohkot muunnetaan **Python**-koodiksi, kun lisäät tai poistat niitä.  
Kun seuraat, miten lohkoista tulee koodia, opit koodauksen syntaksin helpommin. 

※ Python-esikatselu on käytössä vain **lohkokoodauksen editorissa**.  
Python-editorissa kirjoitat koodin itse, joten esikatselua ei ole.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Kamera-välilehdellä näet reaaliajassa kuvan siitä kamerasta, joka on liitetty tietokoneeseen.  

Tämä toiminto on käytössä vain, **jos olet lisännyt ohjelmaan laajennusmoduulin, joka käyttää kameraa**, ja silloin Kamera-välilehdelle luodaan kameramoduuli.  

Kussakin kameramoduulissa voit käyttää näitä toimintoja.
- Voit valita yhden niistä kameroista, jotka ovat juuri nyt käytettävissä tietokoneella, ja näyttää sen kuvan.
- Painikkeella **Päällä / Pois** voit näyttää kamerakuvan tai pysäyttää sen.
- Voit muuttaa **kameran tarkkuutta**.

<br>

## Konsoli {#console}

Konsoli-välilehdellä näet reaaliajassa lokiviestit (Loki), jotka tulostuvat ohjelman ollessa käynnissä, sekä kuvaajan (Kuvaaja).  
Välilehteä käytetään virheiden etsimiseen, anturien arvojen seuraamiseen, kuvaajiin perustuvaan analyysiin ja muuhun.  

### Loki {#console-log}
Lohkolla **Tulosta lokiin** voit tulostaa tekstiä tai lukuarvoja konsolin lokialueelle yhdessä itse antamasi tunnisteen kanssa.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Kuvaaja {#console-scope}

Lohkolla **Näytä kuvaajassa** voit näyttää lukuarvot tunnisteittain **reaaliaikaisena kuvaajana**.  
Voit määrittää pienimmän arvon, suurimman arvon ja kuvaajan värin ja seurata näin, miten haluamasi arvot muuttuvat. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
