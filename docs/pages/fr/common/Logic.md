---
title: Logique
---

# Logique

Les blocs logiques servent en général à contrôler les **blocs de condition** et les blocs [**Boucles**](Loops).

## Condition (si ~ alors) {#controls_if}

Avec le bloc de condition tu peux définir une **condition** et l'**action** qui est exécutée quand elle est remplie.

<BlockImage module="common/logic" id="controls_if" />

Par exemple, tu peux écrire le code ainsi.  
Si la valeur de la variable **x** est supérieure à 100, la condition est **vraie** et le texte « C'est un grand nombre. » est affiché.  
Si la valeur de **x** n'est pas supérieure à 100, la condition est **fausse** et « Ce n'est pas un grand nombre. » est affiché.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Opérateurs de comparaison {#logic_compare}

Il y a six opérateurs de comparaison.  
Chaque opérateur reçoit deux valeurs d'entrée (en général des nombres) et renvoie vrai ou faux selon la façon dont les deux valeurs se comparent.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Opérateurs logiques {#logic_operation}

Le bloc **et** renvoie vrai seulement quand les deux valeurs d'entrée sont vraies.  
Le bloc **ou** renvoie vrai quand au moins une des deux valeurs d'entrée est vraie.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## non {#logic_negate}

Le bloc **non** transforme une valeur booléenne d'entrée en son contraire.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Booléen {#logic_boolean}

Tu peux obtenir une valeur booléenne avec un seul bloc qui a un menu déroulant où tu choisis **vrai** ou **faux**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Opérateur ternaire {#logic_ternary}

Le bloc ternaire fonctionne comme un bloc de condition simple.  
Il reçoit trois valeurs d'entrée.  
La première est la condition booléenne à vérifier, la deuxième est la valeur renvoyée quand la condition est **vraie**.  
La troisième est la valeur renvoyée quand la condition est **fausse**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
