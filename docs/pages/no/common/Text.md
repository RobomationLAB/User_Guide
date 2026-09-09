---
title: Tekst
---

# Tekst {#text}

Her er noen eksempler på tekststrenger:
- "thing #1"
- "March 12, 2010"
- "" (tom tekst)

En tekst kan inneholde store og små bokstaver, tall, tegnsetting, andre symboler og mellomrom mellom ordene.  

<BlockImage module="common/text" id="text" />

## Lage tekst {#text_join}

Blokken **lag tekst med** setter sammen (skjøter) verdiene fra flere tekster til en ny tekst.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Legge til tekst {#text_append}

Blokken **legg til teksten** føyer den oppgitte teksten til den variabelen du velger.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Tekstens lengde {#text_length}

Blokken **lengden av** teller bokstaver, tall med mer i teksten og returnerer den samlede lengden.  
Lengden av `abc` nedenfor er 3, og lengden av en tom tekst er 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Sjekke om teksten er tom {#text_isEmpty}

Blokken **er tom** sjekker om den oppgitte teksten er tom (om lengden er 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Finne tekst {#text_indexOf}

Disse blokkene sjekker om en bestemt tekst finnes inne i en annen tekst, og returnerer posisjonen hvis den gjør det.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Hente ett enkelt tegn {#text_charAt}

Henter ett tegn fra en bestemt posisjon i teksten.  
Du kan velge mellom flere muligheter: første, siste, en tilfeldig posisjon, bokstav nummer N med mer.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Hente en del av teksten {#text_getSubstring}

Med blokken **hent delstreng** kan du hente ut teksten innenfor et bestemt område.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Endre store og små bokstaver {#text_changeCase}

Denne blokken gjør teksten du skriver inn, om til ett av disse formatene:

- **STORE BOKSTAVER**: gjør alle bokstavene om til store bokstaver
- **små bokstaver**: gjør alle bokstavene om til små bokstaver
- **Store Forbokstaver**: gjør bare den første bokstaven i hvert ord om til stor bokstav, resten til små

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # store bokstaver
TEXT.lower() # små bokstaver
TEXT.title() # store forbokstaver
```

## Fjerne mellomrom {#text_trim}

Denne blokken fjerner mellomrom fra teksten på disse stedene:
- begge sider
- venstre side
- høyre side

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # begge sider
TEXT.lstrip()   # venstre side
TEXT.rstrip()   # høyre side
```

## Telle en bestemt tekst i en tekst {#text_count}

Teller hvor mange ganger en bestemt deltekst forekommer i den oppgitte teksten, og returnerer antallet.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Erstatte en bestemt tekst i en tekst {#text_replace}

Bytter ut en bestemt deltekst med en annen tekst overalt i teksten.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Snu teksten {#text_reverse}

Returnerer en ny tekst der rekkefølgen på tegnene er snudd.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Skrive ut tekst {#text_print}

Blokken **skriv ut** viser verdien du skriver inn, i et popup-vindu.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Be brukeren om inndata {#text_prompt_ext}

Denne blokken lager et popup-vindu som ber brukeren om inndata, og verdien som skrives inn, lagres i en variabel.  
Brukeren kan skrive inn tekst eller tall.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
