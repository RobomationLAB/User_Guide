---
title: Övrigt
---

# Övrigt

I blockprogrammering består **övrigt-blocken** av kod som inte påverkar robotens beteende.  
Med dem kan du lägga till kommentarer eller avsluta körningen av koden.  

## Enradskommentar {#comment}

Med blocket **enradskommentar** kan du lägga till en **förklaring** utan att påverka hur koden körs.  
Kommentarer gör koden lättare att läsa och lättare att underhålla.

<BlockImage module="common/others" id="comment" />

### Python
```python
# kommentarens innehåll
```

## Flerradskommentar {#long_comment}

Med blocket **flerradskommentar** kan du skriva in en kommentar över flera rader på en gång.  
Varje rad får automatiskt kommentarmarkering, och tomma rader behålls som de är.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
första raden
andra raden

fjärde raden
"""
```

## Länk {#link}

Med blocket **länk** kan du använda en **kommentar** för att lägga till en **länk till en sida** som du vill öppna.  
När du klickar på knappen **öppna** kommer du till sidan för länken du har skrivit in.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Avsluta {#exit}

Blocket **avsluta** stoppar körningen av koden i programmet omedelbart.  
Det är användbart när du vill lägga till en tvingande avslutning vid ett visst villkor.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
