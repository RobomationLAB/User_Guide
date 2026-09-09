---
title: Løkker
---

# Løkker

Det finnes to typer løkkestyring:  
**betingelsessetninger** og **løkkesetninger** (de som ut fra verdien av variabler styrer hvor mange ganger innholdet skal kjøres)


## Gjenta {#controls_repeat}

Den enkleste **gjenta**-blokken kjører koden i innholdet så mange ganger som du angir. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Tell med {#controls_for}

Blokken **tell med** (som de fleste kaller en **for-løkke**) øker en variabel fra den første verdien til den tredje verdien med den andre verdien som steg, og kjører innholdet én gang for hver verdi.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## For hvert element {#controls_forEach}

Blokken **for hvert element** ligner, men bruker verdiene i en liste etter tur i stedet for en tallrekke.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Gjenta mens / til {#controls_while}

Blokken **gjenta mens** gjentar innholdet så lenge betingelsen er sann.  
Blokken **gjenta til** gjentar innholdet så lenge betingelsen er usann, og går ut av løkken i det øyeblikket betingelsen blir sann.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Avbryt / fortsett {#controls_flow_statements}

Blokken **avbryt** lar deg **gå ut av løkken tidlig**.  
**fortsett** (**continue** i de fleste programmeringsspråk) hopper over resten av koden i innholdet og starter neste gjennomgang.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
