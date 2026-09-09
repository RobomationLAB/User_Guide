---
title: Andre
---

# Andre

I blokprogrammering består **andre-blokkene** af kode, der ikke påvirker robottens opførsel.  
Med dem kan du tilføje kommentarer eller afslutte kørslen af koden.  

## Enlinjekommentar {#comment}

Med blokken **enlinjekommentar** kan du tilføje en **forklaring** uden at påvirke, hvordan koden kører.  
Kommentarer gør koden lettere at læse og lettere at vedligeholde.

<BlockImage module="common/others" id="comment" />

### Python
```python
# kommentarens indhold
```

## Kommentar på flere linjer {#long_comment}

Med blokken **kommentar på flere linjer** kan du skrive en kommentar over flere linjer på én gang.  
Hver linje får automatisk kommentarmarkering, og tomme linjer bevares, som de er.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
første linje
anden linje

fjerde linje
"""
```

## Link {#link}

Med blokken **link** kan du bruge en **kommentar** til at tilføje et **link til en side**, du vil åbne.  
Når du klikker på knappen **åbn**, kommer du til siden for det link, du har skrevet ind.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Afslut {#exit}

Blokken **afslut** standser kørslen af koden i programmet med det samme.  
Det er nyttigt, når du vil tilføje en tvungen afslutning ved en bestemt betingelse.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
