---
title: Muuttujat
---

# Muuttujat

Käytämme sanaa muuttuja samassa merkityksessä kuin matematiikassa ja muissa ohjelmointikielissä.  
Eli **nimettynä osana, joka säilyttää arvon ja jonka arvoa voi muuttaa**.  
  
Voit luoda muuttujia monella tavalla.  

- Jotkin lohkot, kuten [laske](Loops#controls_for) ja [kullekin kohteelle](Loops#controls_forEach), käyttävät muuttujaa ja määrittävät sen arvon.  
Tällaisia muuttujia kutsutaan perinteisesti **silmukkamuuttujiksi (loop variables)**.  
- Myös [omat funktiot](Functions#procedures_defnoreturn) käyttävät muuttujia parametrien tai argumenttien määrittämiseen.
- Voit luoda muuttujan milloin tahansa lohkolla **aseta ... arvoksi**, ja luomastasi muuttujasta tulee **yleinen muuttuja (global variable)**.  
- RobomationLABin lohkokoodausympäristö ei tue **paikallisia muuttujia (local variables)**.  

Kun napsautat muuttujalohkon pudotusvalikkoa, näet nämä vaihtoehdot.  

- Näet kaikkien ohjelmassa jo määriteltyjen muuttujien nimet.  
- **"Nimeä muuttuja uudelleen"**: vaihtaa muuttujan nimen koko ohjelmassa. Kun valitset tämän, näyttöön tulee ikkuna, johon voit kirjoittaa uuden nimen.  
- **"Poista muuttuja"**: poistaa kaikki ohjelman lohkot, jotka viittaavat tähän muuttujaan. 


## Muuttujan asettaminen {#variables_set}

Lohko **aseta ... arvoksi** antaa muuttujalle arvon.  
Jos muuttujaa ei ole vielä esitelty koodissa, se esitellään ensin ja saa sitten arvon.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Arvon muuttaminen {#math_change}

Lohko **muuta ... arvolla** lisää muuttujan arvoon luvun.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Arvon hakeminen {#variables_get}

Alla oleva lohko antaa sinulle muuttujaan tallennetun arvon, mutta ei muuta sitä.  
Voit käyttää lohkoa ilman aseta-lohkoa, mutta se ei ole hyvää ohjelmointitapaa.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
