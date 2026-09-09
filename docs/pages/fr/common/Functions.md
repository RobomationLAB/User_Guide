---
title: Fonctions
---

# Fonctions

Une **fonction (Function)** est un **ensemble d'instructions (de blocs)** qui accomplit une tâche donnée.  
Si tu définis comme fonction une action que tu utilises souvent, tu gères le code de façon **plus compacte et plus efficace**.

Les fonctions ont les caractéristiques suivantes.  
- **Réutilisables** : tu les définis une fois et tu peux les appeler autant de fois que tu veux.  
- **Entrée et sortie** : elles peuvent recevoir des paramètres (valeurs d'entrée), les traiter et renvoyer le résultat (valeur de sortie).  
- **Code plus lisible** : elles te permettent d'organiser le déroulement du programme de façon logique.


## setup {#setup}

La **fonction setup** est appelée une seule fois, au moment où le code est exécuté.  
Dans la fonction setup on écrit surtout le code qui initialise les variables ou les modes et les options du robot.  
Si par exemple tu commandes un robot qui se déplace avec des roues, tu peux régler dans la fonction setup la vitesse initiale des roues.  

<BlockImage module="common/functions" id="setup" />
  
Avec la fonction `Utils.wait(...)` tu peux écrire, grâce à l'exécution séquentielle, du code qui se déroule dans l'ordre du temps. Cette possibilité, avec la **fonction loop** qui se charge de l'exécution en parallèle, rend possible une programmation des robots très puissante.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

La **fonction loop** est appelée de nouveau toutes les 10 ms pendant que le programme est en cours d'exécution.  
Dans la fonction loop on écrit surtout le code qui règle de façon répétée la valeur des variables ou qui détecte et traite des événements donnés du robot.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Définir une fonction {#procedures_defnoreturn}

Avec le bloc qui définit une fonction tu peux créer une **nouvelle fonction**.  
Une fonction sans valeur de retour accomplit une action donnée mais **ne renvoie pas de valeur**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Définir une fonction avec valeur de retour {#procedures_defreturn}

Une fonction avec valeur de retour accomplit une tâche donnée puis **renvoie** le résultat, qui peut être utilisé dans un autre bloc.  

<BlockImage module="common/functions" id="procedures_defreturn" />

La fonction ci-dessous **reçoit les paramètres x et y et renvoie le résultat de x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Appeler une fonction {#procedures_callnoreturn}

Quand tu définis une fonction, le **bloc de la fonction définie par l'utilisateur** est créé automatiquement.  
Avec ce bloc tu peux appeler et exécuter la **fonction que tu as définie avant**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## si ... retourner {#procedures_ifreturn}

C'est le bloc qui, dans une fonction, **renvoie tout de suite une valeur si une condition donnée est remplie** et termine la fonction.  
Ce bloc ne peut être utilisé **qu'à l'intérieur d'une fonction** ; ailleurs il est désactivé.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
