---
title: Koodaussäännöt
---

# Koodaussäännöt

Tämä dokumentti kertoo koodaussäännöistä, joita sinun on noudatettava, kun koodaat robotteja RobomationLABissa.

> **Huomaa**: Skriptikoodaus toimii **vain Pythonilla**, ja lohkot muunnetaan yksi yhteen Python-koodiksi, joka käyttää Python-pakettia `robomation`.

> **Järjestyksestä**: Säännöt ovat tässä järjestyksessä: yhteiset perussäännöt (1-2) → lohkokoodin säännöt (3-5) → Python-skriptikoodin säännöt (6-11). Niitä on yhtä tärkeää noudattaa sekä lohkokoodia että Python-koodia tehdessä.

<br>

## 1. Lohkojen ja Pythonin yksi yhteen -muunnoksen rajoitukset {#1}
Lohkokoodauksen editori ja Python-koodauksen editori vastaavat toisiaan yksi yhteen ja muuntuvat molempiin suuntiin reaaliajassa.

- Lohkot → Python: lohkot muunnetaan aina oikeaksi Python-koodiksi.
- Python → lohkot: vain **koodi, joka voidaan esittää lohkoina**, muunnetaan.

Jos siis kirjoitat Python-editorissa tällaista koodia, vaihto Pythonista lohkokoodauksen editoriin ei ehkä onnistu,  
ja silloin näytetään myös syy, miksi vaihto ei onnistunut.

1) Koodi, jossa on Python-syntaksivirhe
2) Koodi, joka käyttää funktioita, metodeja tai syntaksia, joita ei vastaa mikään lohko (eli joita ei ole määritelty muunnossäännöissä)

Jotta vaihto lohkokoodauksen editoriin toimii jatkossakin,  
kirjoita koodia niiden luokkien, metodien ja funktioiden sekä sen tuetun syntaksin rajoissa, jotka on määritelty tässä dokumentissa ja kunkin robotin dokumentissa.

<br>

## 2. Koodin esittämisen säännöt {#2}
Voit käyttää vain niitä luokkia, metodeja ja funktioita, jotka on lueteltu **robomationin Python-API-oppaassa** ja **lohkojen ja Pythonin muunnossääntöjen dokumentissa**.  
On ehdottomasti kiellettyä luoda ja käyttää robotin ohjaamiseen uusia metodeja, joita ei ole määritelty edellä mainituissa dokumenteissa.
Se on kuitenkin sallittua, jos käyttäjä pyytää uuden funktion luomista.

Väliaikaisia muuttujia, joita ei esiinny edellä mainittujen dokumenttien muunnosesimerkeissä (esimerkiksi muita muuttujia kuin se, joka sisältää robotti-instanssin), voi esitellä vain silloin, kun käyttäjä pyytää muuttujan luomista.  
Lisäksi metodien parametriarvot on aina kirjoitettava literaaleina.  

```python
# oikea esimerkki
hamster_s.set_wheel_speed('both', 100)

# väärä esimerkki - käyttää funktiota, jota ei ole API-oppaassa
hamster_s.set_wheel('both', 100)

# väärä esimerkki - esittelee mielivaltaisen muuttujan
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Lohkokoodin perusrakenne {#3}
Kaiken esitettävän lohkokoodin on aina sisällettävä perusrakenne, jossa ovat ylimmät funktiolohkot funktio setup ja funktio loop, jotka ovat ohjelman aloituskohdat.  
Tämän säännön myötä kaikella lohkokoodilla on jatkossa tämä perusrakenne.

| Lohkorakenne (Block Composer) | Näin se esitetään (tekstimuodossa) |
| --- | --- |
| funktio setup | funktio setup |
| (sisälohkot) | (sisälohkot) |
| funktio loop | funktio loop |
| (sisälohkot) | (sisälohkot) |

<br>

## 4. Lohkokoodin muotoilu (rivinvaihdon ja sisennyksen säännöt) {#4}
- Ylimmät lohkot (funktio setup, funktio loop ja muut) tasataan vasempaan.
- Jokainen komentolohko on erotettava rivinvaihtomerkillä, jotta yhdellä rivillä tulostuu vain yksi lohko.
- Alilohkot, jotka ovat sellaisten lohkojen sisällä, joilla on oma suoritusalue (jos, toista, funktiomäärittelyt ja muut), sisennetään, jotta hierarkia näkyy selvästi.

<br>

## 5. Sisälohkojen ja ehtolausekkeiden säännöt {#5}
Pudotusvalikosta valittu arvo tai kirjoitettu arvo on lohkon toiminnallinen argumentti, ja se esitetään sijoittamalla se suoraan hakasulkeisiin ([]) siihen kohtaan, jossa arvo on lohkon tekstissä.  
Näin lohkon oma teksti ja käyttäjän valitsema tai kirjoittama arvo esitetään yhtenä kokonaisuutena.

Kaikki lohkokoodi on esitettävä muodossa, joka sisältää hakasulkeissa ([]) sekä lohkon oman nimityksen, pudotusvalikoista valitut arvot että käyttäjän kirjoittamat arvot,  
jotta lohkojen todellinen ulkoasu Block Composerissa toistuu tekstinä mahdollisimman tarkasti.  

| Lohkorakenne (Block Composer) | Näin se esitetään (tekstimuodossa) |
| --- | --- |
| jos [ehto] tee [komento] muuten [komento] | jos [ehto] tee [komento] muuten [komento] |
| RaccoonBot: aseta ohjaustilaksi [nopeus] | RaccoonBot: aseta ohjaustilaksi [nopeus] |
| RaccoonBot: aseta nivelen [1] nopeudeksi [100] | RaccoonBot: aseta nivelen [1] nopeudeksi [100] |

<br>

## 6. Skriptikoodin perusrakenne {#6}
Kaiken esitettävän skriptikoodin (Python) on aina sisällettävä perusrakenne, jossa ovat funktiot setup() ja loop(), jotka ovat ohjelman aloituskohdat.  
Lisäksi koodin alussa on oltava `from robomation import *`, jotta voit käyttää robotin ohjaamiseen tarvittavia luokkia ja apufunktioita, ja käytettävä robotti esitellään instanssina.  
Tämän säännön myötä kaikella skriptikoodilla (Python) on jatkossa tämä perusrakenne.

```python
# Python-koodin perusrakenne
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

<br>

## 7. Skriptikoodin muotoilu (rivinvaihdon ja sisennyksen säännöt) {#7}
- Ylimmät funktiot (setup, loop ja muut) tasataan vasempaan.
- Rivinvaihdon sisennyksen on aina oltava **1 sarkain (`\t`)**. (Sama kuin editorin sisennys)

<br>

## 8. Robotin ohjaamisen säännöt (instanssit / metodit) {#8}
Kun ohjaat robottia, noudata näitä sääntöjä.  

1) Kirjoita `from robomation import *` koodin alkuun.
2) Esittele käytettävä robotti instanssina. Käytä robotille määritettyä oletusmuuttujan nimeä ja anna indeksit nollasta alkaen.
3) Ohjaa robottia kutsumalla esittelemäsi instanssin metodeja.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Jos käytät useita samantyyppisiä robotteja, esittele ne indekseillä 0, 1, 2 … (esim. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Kun asetat robotin pyörän nopeuden, panet sen ajamaan ja niin edelleen, metodit hoitavat itse tarvittavan alustuksen sisäisesti (esimerkiksi siivoavat edellisen ajokomennon), joten sinun ei tarvitse kirjoittaa erillistä alustuskoodia ensin.

<br>

## 9. Apufunktioiden kutsumisen säännöt {#9}
Yhteiset apufunktiot, kuten viive, äänen toistaminen, lokitulostus ja värit, kutsut luokan `Utils` metodien kautta.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Apufunktioiden koko luettelo löytyy alla olevista dokumenteista.
- [Väri](../common/Color)
- [Ääni](../common/Audio)
- [Ohjaus](../common/Control)

<br>

## 10. Sääntö robotin omien metodien ensisijaisuudesta {#10}
Kun ohjaat robotin laitteistoa (pyörän nopeutta, LEDejä, ääntä ja muuta),  
käytä robotti-instanssin (esimerkiksi 'HamsterS') omia metodeja yhteisten apufunktioiden sijaan.

Jos robotin pitää esimerkiksi tuottaa ääni,  
käytä 'HamsterS'-instanssin metodia `sound_clip()` apufunktion `Utils.play_sound()` sijaan.

```python
# ääni tulee HamsterS-robotista. (suositeltu)
hamster_s.sound_clip('beep')

# ääni tulee tietokoneesta / tabletista / mobiililaitteesta. (ei suositeltu)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Importin säännöt {#11}
Kun kirjoitat Python-koodia, tuo vain ne moduulit, joita koodin suorittaminen vaatii.
- `from robomation import *` on lähtökohtaisesti koodin alussa, jotta robottia voi ohjata.
- Jos koodi käyttää `math.`, lisätään automaattisesti `import math`, ja jos se käyttää `random.`, lisätään automaattisesti `import random`.
- Muita tarpeettomia moduuleja ei tuoda.
