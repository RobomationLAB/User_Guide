---
title: Overig
---

# Overig

Bij blokprogrammeren bestaan de **overige blokken** uit code die geen invloed heeft op het gedrag van de robot.  
Je kunt er commentaar bij zetten of de uitvoering van de code beëindigen.  

## Commentaar van één regel {#comment}

Met het blok **commentaar van één regel** kun je **uitleg** toevoegen zonder de uitvoering van de code te beïnvloeden.  
Commentaar maakt de code leesbaarder en gemakkelijker te onderhouden.

<BlockImage module="common/others" id="comment" />

### Python
```python
# inhoud van het commentaar
```

## Commentaar van meerdere regels {#long_comment}

Met het blok **commentaar van meerdere regels** kun je in één keer commentaar over meerdere regels invoeren.  
Elke regel krijgt automatisch de commentaarnotatie; lege regels blijven behouden.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
eerste regel
tweede regel

vierde regel
"""
```

## Link {#link}

Met het blok **link** kun je via **commentaar** een **link naar een pagina** toevoegen die je wilt openen.  
Klik je op de knop **openen**, dan ga je naar de pagina van de ingevoerde link.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Afsluiten {#exit}

Het blok **afsluiten** stopt de uitvoering van de code in het programma onmiddellijk.  
Dat is handig als je onder bepaalde voorwaarden een geforceerde afsluiting wilt toevoegen.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
