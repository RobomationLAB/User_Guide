---
title: Tekst
---

# Tekst {#text}

Voorbeelden van tekst zijn:
- "thing #1"
- "March 12, 2010"
- "" (lege tekst)

Tekst kan hoofdletters of kleine letters, cijfers, interpunctie, andere symbolen en spaties tussen woorden bevatten.  

<BlockImage module="common/text" id="text" />

## Tekst maken {#text_join}

Het blok **maak tekst met** voegt de waarden van meerdere teksten samen (koppelt ze) en maakt daarvan nieuwe tekst.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Tekst toevoegen {#text_append}

Het blok **voeg tekst toe** voegt de gegeven tekst toe aan de opgegeven variabele.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Lengte van tekst {#text_length}

Het blok **lengte van** telt de letters, cijfers en dergelijke in een tekst en geeft de totale lengte terug.  
De lengte van `abc` hieronder is 3; de lengte van lege tekst is 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Controleren op lege tekst {#text_isEmpty}

Het blok **is leeg** controleert of de gegeven tekst leeg is (of de lengte 0 is).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Tekst zoeken {#text_indexOf}

Deze blokken controleren of een bepaalde tekst in een andere tekst voorkomt en geven, als dat zo is, de positie terug.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Eén letter ophalen {#text_charAt}

Haalt uit een tekst één letter op een bepaalde positie op.  
Er zijn verschillende opties: de eerste, de laatste, een willekeurige positie, de N-de en meer.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Deel van tekst ophalen {#text_getSubstring}

Met het blok **haal subtekst op** kun je de tekst binnen een bepaald bereik ophalen.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Hoofdlettergebruik van tekst wijzigen {#text_changeCase}

Dit blok zet de ingevoerde tekst om naar een van de volgende vormen:

- **HOOFDLETTERS**: zet alle letters om naar hoofdletters
- **kleine letters**: zet alle letters om naar kleine letters
- **Beginletters Hoofdletter**: zet alleen de eerste letter van elk woord om naar een hoofdletter, de rest naar kleine letters

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # HOOFDLETTERS
TEXT.lower() # kleine letters
TEXT.title() # Beginletters Hoofdletter
```

## Spaties afhalen {#text_trim}

Het volgende blok haalt spaties van de volgende plaatsen in een tekst af:
- beide kanten
- links
- rechts

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # beide kanten
TEXT.lstrip()   # links
TEXT.rstrip()   # rechts
```

## Voorkomens van een tekst in een tekst tellen {#text_count}

Telt hoe vaak een bepaalde deeltekst in de gegeven tekst voorkomt en geeft dat aantal terug.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Een tekst in een tekst vervangen {#text_replace}

Vervangt in een tekst een bepaalde deeltekst overal door een andere tekst.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Tekst omkeren {#text_reverse}

Geeft een nieuwe tekst terug waarin de volgorde van de tekst is omgekeerd.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Tekst weergeven {#text_print}

Het blok **tekst weergeven** toont de ingevoerde waarde in een pop-upvenster.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Invoer van de gebruiker vragen {#text_prompt_ext}

Het volgende blok maakt een pop-upvenster dat de gebruiker om invoer vraagt; de ingevoerde waarde wordt in een variabele opgeslagen.  
Je kunt tekst of een getal laten invoeren.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
