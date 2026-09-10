---
title: Funktiot
---

# Funktiot

**Funktio (Function)** on **kokoelma käskyjä (lohkoja)**, jotka tekevät tietyn tehtävän.  
Kun määrität usein toistuvan toiminnon yhdeksi funktioksi, koodista tulee **lyhyempää ja helpompaa hallita**.

Funktiolla on nämä ominaisuudet.  
- **Uudelleenkäytettävä**: kun olet määrittänyt sen kerran, voit kutsua sitä niin monta kertaa kuin haluat.  
- **Syöte ja tuloste**: se voi ottaa vastaan parametreja (syötteitä), käsitellä ne ja palauttaa tuloksen (tulosteen).  
- **Parempi luettavuus**: voit rakentaa ohjelman loogisesti.


## setup {#setup}

**Funktio setup** kutsutaan vain yhden ainoan kerran, sillä hetkellä kun suoritat koodin.  
Funktiossa setup kirjoitat pääasiassa koodia, joka alustaa muuttujat tai robotin tilan ja asetukset.  
Kun esimerkiksi ohjaat pyörillä liikkuvaa robottia, voit asettaa pyörien alkunopeuden funktiossa setup.  

<BlockImage module="common/functions" id="setup" />
  
Funktiolla `Utils.wait(...)` voit kirjoittaa koodia, joka etenee peräkkäin ja siten aikajärjestyksessä. Tämän avulla voit tehdä yksinkertaisen peräkkäisen suorituksen lisäksi tehokasta robottiohjelmointia yhdessä **funktion loop** kanssa, joka hoitaa rinnakkaisen suorituksen.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Funktio loop** kutsutaan yhä uudelleen 10 ms:n välein niin kauan kuin ohjelma on käynnissä.  
Funktiossa loop kirjoitat pääasiassa koodia, joka asettaa muuttujien arvoja toistuvasti tai havaitsee ja käsittelee robotin tiettyjä tapahtumia.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Funktion määrittäminen {#procedures_defnoreturn}

Funktion määrittävällä lohkolla voit luoda **uuden funktion**.  
Funktio ilman paluuarvoa tekee tietyn toiminnon, mutta **ei palauta arvoa**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Paluuarvollisen funktion määrittäminen {#procedures_defreturn}

Paluuarvollinen funktio tekee tietyn tehtävän ja **palauttaa** sitten tuloksen, jota voit käyttää muissa lohkoissa.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Alla oleva funktio **ottaa vastaan parametrit x ja y ja palauttaa x + y:n tuloksen**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Funktion kutsuminen {#procedures_callnoreturn}

Kun olet määrittänyt funktion, sille luodaan automaattisesti **oman funktion lohko**.  
Sillä voit kutsua ja suorittaa **etukäteen määrittämäsi funktion**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Jos ... palauta {#procedures_ifreturn}

Lohko, joka **palauttaa arvon heti ja lopettaa funktion, kun tietty ehto täyttyy**.  
Tätä lohkoa voi **käyttää vain funktion sisällä**, ja muualla se on poissa käytöstä.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
