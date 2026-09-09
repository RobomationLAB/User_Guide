---
title: Lussen
---

# Lussen

Er zijn twee soorten lusbesturing:  
**voorwaarden** en **lussen** (die aan de hand van de waarden van variabelen bepalen hoe vaak de romp wordt uitgevoerd)


## Herhalen {#controls_repeat}

Het eenvoudigste blok **herhalen** voert de code in de romp een opgegeven aantal keer uit. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Rekenen met {#controls_for}

Het blok **rekenen met** (meestal **for loop** genoemd) verhoogt een variabele van de eerste waarde tot de derde waarde met de stapgrootte (de tweede waarde) en voert de romp voor elke waarde één keer uit.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Voor ieder item {#controls_forEach}

Het blok **voor ieder item** werkt vergelijkbaar, maar gebruikt in plaats van een reeks getallen de waarden van een lijst op volgorde.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Herhaal zolang / totdat {#controls_while}

Het blok **herhaal zolang** herhaalt de romp zolang de voorwaarde waar is.  
Het blok **herhaal totdat** herhaalt de romp zolang de voorwaarde onwaar is en verlaat de lus op het moment dat de voorwaarde waar wordt.

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

## Lus stoppen / volgende ronde {#controls_flow_statements}

Met het blok **stop** kun je **de lus vroegtijdig verlaten**.  
**Volgende ronde** (in de meeste programmeertalen **continue**) sla de rest van de code in de romp over en begint aan de volgende ronde (pas).

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
