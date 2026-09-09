---
title: Boucles
---

# Boucles

Il y a deux types d'instructions pour contrôler la répétition :  
les **blocs de condition** et les **boucles** (celles qui, selon la valeur des variables, contrôlent combien de fois le corps est exécuté)


## Répéter {#controls_repeat}

Le bloc **répéter**, le plus simple, exécute le code du corps le nombre de fois indiqué. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## compter avec {#controls_for}

Le bloc **compter avec** (le plus souvent appelé **for loop**) augmente une variable de la première valeur jusqu'à la troisième, par pas égaux à l'incrément (la deuxième valeur), et exécute le corps une fois pour chaque valeur.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## pour chaque élément {#controls_forEach}

Le bloc **pour chaque élément** est semblable, mais au lieu d'une suite de nombres il utilise l'un après l'autre les valeurs d'une liste.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Répéter tant que / jusqu'à ce que {#controls_while}

Le bloc **répéter tant que** répète le corps tant que la condition est vraie.  
Le bloc **répéter jusqu'à ce que** répète le corps tant que la condition est fausse et sort de la boucle dès que la condition devient vraie.

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

## Interrompre la boucle / itération suivante {#controls_flow_statements}

Avec le bloc **interrompre** tu peux **sortir de la boucle avant la fin**.  
**Itération suivante** (dans la plupart des langages de programmation, **continue**) passe le reste du code du corps et commence l'itération (le passage) suivante.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
