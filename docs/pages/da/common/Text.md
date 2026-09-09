---
title: Tekst
---

# Tekst {#text}

Her er nogle eksempler på tekst:
- "thing #1"
- "March 12, 2010"
- "" (tom tekst)

Tekst kan indeholde store og små bogstaver, tal, tegnsætning, andre symboler og mellemrum mellem ordene.  

<BlockImage module="common/text" id="text" />

## Lav en tekst med {#text_join}

Blokken **lav en tekst med** sætter værdierne fra flere tekster sammen til én ny tekst.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Tilføj tekst {#text_append}

Blokken **tilføj tekst** føjer den angivne tekst til den valgte variabel.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Længden af tekst {#text_length}

Blokken **længden af** tæller tegn, tal med mere i en tekst og returnerer den samlede længde.  
Nedenfor er længden af `abc` 3, og længden af en tom tekst er 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Er tom {#text_isEmpty}

Blokken **er tom** kontrollerer, om den angivne tekst er tom (om længden er 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Find tekst {#text_indexOf}

Disse blokke kontrollerer, om en bestemt tekst findes inde i en anden tekst, og returnerer positionen, hvis den gør.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Hent ét bogstav {#text_charAt}

Henter ét bogstav fra en bestemt position i en tekst.  
Der er flere muligheder: første, sidste, en tilfældig position, bogstav nummer N med flere.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Hent en delstreng {#text_getSubstring}

Med blokken **hent delstreng fra** kan du hente teksten i et bestemt interval.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Skift mellem store og små bogstaver {#text_changeCase}

Denne blok omdanner den angivne tekst til et af følgende formater:

- **STORE BOGSTAVER**: gør alle tegn til store bogstaver
- **små bogstaver**: gør alle tegn til små bogstaver
- **Stort Begyndelsesbogstav**: gør det første bogstav i hvert ord til et stort bogstav og resten til små

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # STORE BOGSTAVER
TEXT.lower() # små bogstaver
TEXT.title() # Stort Begyndelsesbogstav
```

## Fjern mellemrum {#text_trim}

Følgende blok fjerner mellemrum fra disse positioner i en tekst:
- begge sider
- venstre side
- højre side

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # begge sider
TEXT.lstrip()   # venstre side
TEXT.rstrip()   # højre side
```

## Tæl forekomster i tekst {#text_count}

Tæller, hvor mange gange en bestemt deltekst forekommer i den angivne tekst, og returnerer antallet.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Erstat tekst {#text_replace}

Erstatter alle forekomster af en bestemt deltekst med en anden tekst.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Vend tekst om {#text_reverse}

Returnerer en ny tekst, hvor tegnenes rækkefølge er vendt om.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Skriv tekst {#text_print}

Blokken **skriv** viser den angivne værdi i et pop op-vindue.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Spørg efter input {#text_prompt_ext}

Følgende blok åbner et pop op-vindue, der beder brugeren om et input, og den indtastede værdi gemmes i en variabel.  
Du kan bede om tekst eller om et tal.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
