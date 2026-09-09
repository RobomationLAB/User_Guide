---
title: Loopar
---

# Loopar

Det finns två slags loopsatser:  
**villkorsstyrda loopar** och **räknande loopar** (de som styr hur många gånger kroppen körs utifrån värdet på variabler)


## Upprepa {#controls_repeat}

Det enklaste **upprepa**-blocket kör koden i sin kropp ett angivet antal gånger. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Räkna med {#controls_for}

Blocket **räkna med** (som oftast kallas **for-loop**) ökar en variabel från det första värdet till det tredje värdet med ökningen (det andra värdet) och kör kroppen en gång för varje värde.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## För varje föremål {#controls_forEach}

Blocket **för varje föremål** fungerar på liknande sätt, men går igenom värdena i en lista i tur och ordning i stället för en talföljd.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Upprepa medan / tills {#controls_while}

Blocket **upprepa medan** upprepar kroppen så länge villkoret är sant.  
Blocket **upprepa tills** upprepar kroppen så länge villkoret är falskt och lämnar loopen i samma stund som villkoret blir sant.

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

## Avbryt / fortsätt {#controls_flow_statements}

Blocket **avbryt** låter dig **lämna en loop i förtid**.  
Blocket **fortsätt** (i de flesta programmeringsspråk **continue**) hoppar över resten av koden i kroppen och påbörjar nästa upprepning.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
