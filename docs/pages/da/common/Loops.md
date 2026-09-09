---
title: Løkker
---

# Løkker

Der findes to slags løkkesætninger:  
**betingede løkker** og **tællende løkker** (dem, der styrer, hvor mange gange kroppen køres ud fra værdien af variabler)


## Gentag {#controls_repeat}

Den enkleste **gentag**-blok kører koden i sin krop et bestemt antal gange. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Tæl med {#controls_for}

Blokken **tæl med** (som oftest kaldes en **for-løkke**) øger en variabel fra den første værdi til den tredje værdi med tilvæksten (den anden værdi) og kører kroppen én gang for hver værdi.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## For hvert element {#controls_forEach}

Blokken **for hvert element** fungerer på samme måde, men gennemløber værdierne i en liste i stedet for en talrække.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Gentag mens / indtil {#controls_while}

Blokken **gentag mens** gentager kroppen, så længe betingelsen er sand.  
Blokken **gentag indtil** gentager kroppen, så længe betingelsen er falsk, og forlader løkken i samme øjeblik betingelsen bliver sand.

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

## Afbryd / fortsæt {#controls_flow_statements}

Blokken **afbryd** lader dig **forlade en løkke før tid**.  
Blokken **fortsæt** (i de fleste programmeringssprog **continue**) springer resten af koden i kroppen over og begynder på næste gentagelse.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
