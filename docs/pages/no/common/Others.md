---
title: Andre
---

# Andre

I blokkodingen består **de andre blokkene** av kode som ikke påvirker hva roboten gjør.  
Med dem kan du skrive kommentarer eller avslutte kjøringen av koden.  

## Enlinjekommentar {#comment}

Med blokken **enlinjekommentar** kan du legge til en **forklaring** uten at det påvirker kjøringen av koden.  
Kommentarer gjør koden lettere å lese og enklere å vedlikeholde.

<BlockImage module="common/others" id="comment" />

### Python
```python
# innholdet i kommentaren
```

## Flerlinjekommentar {#long_comment}

Med blokken **flerlinjekommentar** kan du skrive en kommentar over flere linjer på én gang.  
Hver linje merkes automatisk som kommentar, og tomme linjer blir stående som de er.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
første linje
andre linje

fjerde linje
"""
```

## Lenke {#link}

Med blokken **lenke** kan du bruke en **kommentar** til å legge inn **lenken til en side** du vil åpne.  
Klikker du på knappen **åpne**, går du til siden lenken peker til.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Avslutt {#exit}

Blokken **avslutt** stopper kjøringen av koden i programmet med det samme.  
Den er nyttig når du vil avbryte kjøringen under bestemte betingelser.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
