---
title: Variables
---

# Variables

Nous employons le terme variable avec le même sens qu'en mathématiques et dans les autres langages de programmation.  
Il désigne donc un **élément portant un nom qui conserve une valeur et que l'on peut modifier**.  
  
On peut créer des variables de plusieurs façons.  

- Certains blocs, comme [compter avec](Loops#controls_for) et [pour chaque élément](Loops#controls_forEach), utilisent une variable et définissent sa valeur.  
Ces variables s'appellent traditionnellement **variables de boucle (loop variables)**.  
- Les [fonctions définies par l'utilisateur](Functions#procedures_defnoreturn) utilisent aussi des variables pour définir les paramètres ou les arguments.
- L'utilisateur peut créer une variable à tout moment avec le bloc **définir une variable** ; les variables créées sont déclarées comme **variables globales (global variables)**.  
- L'environnement de programmation avec blocs de RobomationLAB ne prend pas en charge les **variables locales (local variables)**.  

Si tu cliques sur le menu déroulant d'un bloc de variable, les options suivantes apparaissent.  

- Les noms de toutes les variables déjà définies dans le programme sont affichés.  
- **« Renommer la variable »** : change le nom de cette variable dans tout le programme. Si tu choisis cette option, une fenêtre apparaît où tu peux saisir le nouveau nom.  
- **« Supprimer la variable »** : supprime tous les blocs du programme qui font référence à cette variable. 


## Définir une variable {#variables_set}

Le bloc **définir** affecte une valeur à une variable.  
Si cette variable n'est pas déclarée dans le code, il la déclare puis lui affecte la valeur.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Changer la valeur {#math_change}

Le bloc **incrémenter** ajoute un nombre à la valeur de la variable.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Lire la valeur {#variables_get}

Le bloc suivant donne la valeur conservée dans une variable, mais il ne la modifie pas.  
On peut aussi utiliser ce bloc sans le bloc qui définit la variable, mais ce n'est pas une bonne façon de programmer.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
