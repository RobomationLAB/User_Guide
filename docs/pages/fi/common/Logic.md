---
title: Logiikka
---

# Logiikka

Logiikkalohkoja käytetään yleensä **ehtolauseiden** ja [**silmukka**](Loops)lohkojen ohjaamiseen.

## Ehtolause (jos ...) {#controls_if}

Ehtolohkolla voit määrittää **ehdon** ja sen **toiminnon**, joka suoritetaan, kun ehto täyttyy.

<BlockImage module="common/logic" id="controls_if" />

Voit esimerkiksi kirjoittaa koodia näin.  
Jos muuttujan **x** arvo on suurempi kuin 100, ehto on **tosi** ja teksti "Se on iso luku." tulostuu.  
Jos **x**:n arvo ei ole suurempi kuin 100, ehto on **epätosi** ja "Se ei ole iso luku." tulostuu.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Vertailuoperaattorit {#logic_compare}

Vertailuoperaattoreita on kuusi.  
Jokainen operaattori ottaa kaksi syötettä (yleensä lukuja) ja palauttaa toden tai epätoden sen mukaan, miten arvot suhtautuvat toisiinsa.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Loogiset operaattorit {#logic_operation}

Lohko **ja** palauttaa toden vain silloin, kun molemmat syötteet ovat tosia.  
Lohko **tai** palauttaa toden, jos vähintään toinen syöte on tosi.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Ei {#logic_negate}

Lohko **ei** kääntää totuusarvosyötteen päinvastaiseksi.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Totuusarvo {#logic_boolean}

Saat totuusarvon yhdellä lohkolla, jossa on pudotusvalikko arvoille **tosi** ja **epätosi**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternäärioperaattori {#logic_ternary}

Ternäärilohko toimii kuin yksinkertainen ehtolohko.  
Se ottaa kolme syötettä.  
Ensimmäinen syöte on testattava totuusarvoehto, ja toinen on arvo, joka palautetaan, kun ehto on **tosi**.  
Kolmas syöte on arvo, joka palautetaan, kun ehto on **epätosi**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
