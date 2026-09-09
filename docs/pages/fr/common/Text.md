---
title: Texte
---

# Texte {#text}

Voici des exemples de texte :
- "thing #1"
- "March 12, 2010"
- "" (texte vide)

Un texte peut contenir des lettres majuscules ou minuscules, des chiffres, des signes de ponctuation, d'autres symboles et des espaces entre les mots.  

<BlockImage module="common/text" id="text" />

## Créer un texte {#text_join}

Le bloc **créer un texte avec** réunit (concatène) les valeurs de plusieurs textes et crée un nouveau texte.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Ajouter un texte {#text_append}

Le bloc **ajouter le texte** ajoute le texte indiqué à la variable choisie.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Longueur du texte {#text_length}

Le bloc **longueur de** compte les lettres, les chiffres et les autres caractères d'un texte et renvoie la longueur totale.  
Ci-dessous la longueur de `abc` est 3, et la longueur d'un texte vide est 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Vérifier si un texte est vide {#text_isEmpty}

Le bloc **est vide** vérifie si le texte indiqué est vide (si sa longueur est 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Chercher un texte {#text_indexOf}

Ces blocs vérifient si un texte donné se trouve dans un autre texte et, s'il y est, renvoient sa position.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Extraire un seul caractère {#text_charAt}

Prend dans un texte le caractère qui se trouve à une position donnée.  
Il y a plusieurs options : le premier, le dernier, une position au hasard, le n-ième et d'autres.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Extraire une partie du texte {#text_getSubstring}

Avec le bloc **obtenir la sous-chaîne** tu peux extraire le texte d'un intervalle donné.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Changer la casse {#text_changeCase}

Ce bloc transforme le texte d'entrée dans l'un des formats suivants :

- **en MAJUSCULES** : transforme toutes les lettres en majuscules
- **en minuscules** : transforme toutes les lettres en minuscules
- **En Majuscule Au Début De Chaque Mot** : met en majuscule seulement la première lettre de chaque mot et le reste en minuscules

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # en MAJUSCULES
TEXT.lower() # en minuscules
TEXT.title() # En Majuscule Au Début De Chaque Mot
```

## Supprimer les espaces {#text_trim}

Le bloc suivant supprime dans un texte les espaces aux endroits suivants :
- des deux côtés
- à gauche
- à droite

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # des deux côtés
TEXT.lstrip()   # à gauche
TEXT.rstrip()   # à droite
```

## Compter combien de fois un texte apparaît dans un autre texte {#text_count}

Compte combien de fois une sous-chaîne donnée apparaît dans le texte indiqué et renvoie le résultat.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Remplacer un texte dans un texte {#text_replace}

Remplace d'un coup une sous-chaîne donnée par un autre texte, dans un texte.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Renverser un texte {#text_reverse}

Renvoie un nouveau texte dans lequel l'ordre des caractères est inversé.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Afficher un texte {#text_print}

Le bloc **afficher** montre la valeur d'entrée dans une fenêtre qui apparaît.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Demander une valeur à l'utilisateur {#text_prompt_ext}

Le bloc suivant crée une fenêtre qui demande une valeur à l'utilisateur ; la valeur saisie est enregistrée dans une variable.  
On peut demander un texte ou un nombre.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
