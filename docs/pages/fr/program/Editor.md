---
title: Éditeur
---

# Éditeur

L'**éditeur** est la zone dans laquelle tu peux écrire, avec des **blocs** ou du **code de script**, le code pour commander le robot.  
Ci-dessous sont présentées les façons de programmer dans les environnements de **programmation avec blocs / programmation avec scripts (Python)** et les points auxquels il faut faire attention.

## Éditeur de programmation avec blocs {#block-editor}

### Catégories de blocs {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

C'est la zone dans laquelle les blocs proposés par RobomationLAB sont classés par **catégories**.  
Si tu cliques sur une catégorie, tu peux voir la **palette de blocs** de cette catégorie.  

Voici les types de catégories de blocs proposés par défaut.  

- Logique
- Boucles
- Maths
- Texte
- Liste
- Couleur
- Audio
- Contrôle
- Variables
- Fonctions
- Autres

En plus de celles-ci, si tu ajoutes au programme un [**robot**](Menu#robot) ou un [**module d'extension**](Menu#extension), tu disposes dans le programme de la palette de blocs propre à ce robot ou à ce module.  

<br>

**⚙️ Remarque**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Les catégories de blocs que tu as ajoutées au programme et que tu n'utilises plus peuvent être retirées des catégories de blocs avec **clic droit de la souris → Supprimer**.

<br>

### Palette de blocs {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

C'est la zone qui rassemble tous les blocs de chaque catégorie.  
Les blocs qui se trouvent dans la palette de blocs peuvent être amenés dans la zone de programmation par **Drag&Drop**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Remarque**  
Si tu veux voir comment s'utilise un bloc, avec **clic droit de la souris → Aide** tu peux ouvrir, pour chaque bloc, l'aide qui décrit la façon de l'utiliser.  

<br>

### Zone de programmation {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

C'est la zone dans laquelle tu peux assembler les blocs que tu as pris dans la palette de blocs.  


Les blocs assemblés sont convertis en temps réel en **code Python** et, quand tu exécutes le code, ce code est interprété et fait bouger et commande le robot.  

<br>

### Structure de base des blocs {#block-structure}

Quand tu programmes dans l'éditeur de programmation avec blocs, tu dois respecter la structure de base suivante.

<BlockImage module="program/Editor" id="block-structure" /><br>

L'éditeur de programmation avec blocs interprète et exécute le code qui se trouve dans les blocs de fonction **au démarrage** et **répéter indéfiniment**.  
C'est pourquoi tu dois écrire le code en mettant des blocs dans les blocs de fonction **au démarrage** et **répéter indéfiniment**.  

**au démarrage**  
Dans le bloc de fonction au démarrage on définit les actions à exécuter au début, quand le code est exécuté.  
Avec le bloc **attendre** tu peux faire en sorte que les actions soient exécutées dans l'ordre du temps.  

**répéter indéfiniment**  
Dans le bloc de fonction répéter indéfiniment on définit les actions à exécuter de façon répétée pendant que le code est en cours d'exécution.  
Les actions définies sont exécutées de nouveau toutes les 10 ms.  

**⚙️ Remarque**  
(À l'exception des fonctions personnalisées créées via la **catégorie Fonctions**)  
Les blocs qui se trouvent en dehors des blocs de fonction **au démarrage** ou **répéter indéfiniment** n'ont aucun effet quand le code est exécuté.  

<br>

### Comment utiliser les blocs {#block-usage}

**Ajouter un bloc**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Le bloc que tu veux ajouter, tu le **fais glisser depuis la palette de blocs** et tu le **déposes dans l'éditeur** : il est ainsi ajouté.   
<br>

**Copier / coller des blocs**  

Il y a deux façons de copier et coller des blocs dans l'éditeur.  

1. Choisis un bloc et appuie sur **Ctrl+C** : le bloc choisi est **copié**.  
Si tu appuies sur **Ctrl+V**, le dernier bloc copié est **collé** dans l'éditeur.  

2. Choisis un bloc et clique dans le menu **Édition** sur le bouton **« Copier Ctrl+C »** : le bloc choisi est **copié**.  
Si tu cliques dans le menu **Édition** sur le bouton **« Coller Ctrl+V »**, le dernier bloc copié est **collé** dans l'éditeur.

<br>

**Supprimer des blocs**  

Il y a trois façons de supprimer des blocs dans l'éditeur.

1. Choisis un bloc et appuie sur **Backspace** : le bloc choisi est supprimé.<br>  

2. Le bloc que tu veux supprimer, tu le **fais glisser dans l'éditeur** et tu le **déposes sur les catégories de blocs** : il est ainsi supprimé.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Le bloc que tu veux supprimer, tu le **fais glisser dans l'éditeur** et tu le **déposes dans la corbeille** : il est ainsi supprimé.  
Les blocs supprimés peuvent être revus dans la **corbeille**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Sélectionner plusieurs blocs à la fois**  

Il y a deux façons de sélectionner plusieurs blocs à la fois dans l'éditeur.

1. Si tu maintiens la touche **Shift** enfoncée et que tu fais glisser dans la zone de travail ou que tu cliques sur les blocs un par un,  
tu peux sélectionner plusieurs blocs à la fois.  

2. Avec le **bouton de coche** en bas à droite de la zone de travail, tu actives ou désactives le mode « sélectionner plusieurs blocs ».  
Si le bouton est rempli de couleur, le mode est activé.  
Si le bouton n'est pas rempli de couleur, le mode est désactivé.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Pendant que le mode « sélectionner plusieurs blocs » est activé, tu ne peux que sélectionner des blocs.   
Si tu veux déplacer ou modifier ensemble les blocs choisis, tu dois terminer la sélection et désactiver le mode.  

<br>

**Options supplémentaires**

De plus, si tu fais un **clic droit** sur un bloc,  
tu trouves plusieurs options supplémentaires, comme **réduire/développer le bloc, l'activer/le désactiver et Aide**.  

<br>

## Éditeur de Python {#python-editor}

### Palette de code {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

C'est la zone dans laquelle les **fonctions de base** dont tu as besoin pour programmer les robots et les **codes Python** propres aux robots et aux modules d'extension sont classés par **catégories**.  


Voici les types de catégories de code proposés dans les fonctions de base (Codes).  

- Logique (logic)
- Boucles (loops)
- Maths (math)
- Texte (text)
- Liste (lists)
- Couleur (color)
- Audio (audio)
- Contrôle (control)

Les codes proposés dans les fonctions de base ont tous le même rôle que les blocs de base de l'éditeur de programmation avec blocs.  

<br>

**⚙️ Remarque**  
La façon de programmer dans l'éditeur de Python en utilisant la palette de code se trouve dans [**Comment utiliser la palette de code**](#python-codes-usage).

<br>

### Éditeur de code {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

C'est la zone dans laquelle tu peux écrire le code pour commander le robot.  


Si dans [**Paramètres de l'éditeur**](Menu#editor-settings) tu choisis l'éditeur **Python**, tu peux écrire du code Python.

<br>

### Structure de base du code {#python-structure}

Quand tu programmes dans l'éditeur de code, tu dois respecter la structure de base suivante.

```python
from robomation import *

# (si tu veux utiliser un robot, le déclarer comme instance, exemple)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

L'éditeur de code interprète et exécute le code qui se trouve dans la fonction **setup** et la fonction **loop**.  
C'est pourquoi tu dois écrire le code dans la fonction **setup** et la fonction **loop**.  
De plus, pour commander le robot, `from robomation import *` se place au début du code et le robot que tu veux utiliser doit être déclaré comme instance.

**setup**  

Dans la fonction setup on définit les actions à exécuter au début, quand le code est exécuté.  
Avec la fonction **Utils.wait** tu peux faire en sorte que les actions soient exécutées dans l'ordre du temps.  

**loop**  
Dans la fonction loop on définit les actions à exécuter de façon répétée pendant que le code est en cours d'exécution.  
Les actions définies sont exécutées de nouveau toutes les 10 ms.  


<br>

### Comment utiliser la palette de code {#python-codes-usage}

Ci-dessous est décrite, avec des exemples simples, la **façon d'utiliser la palette de code dans la programmation**.  

### Trouver le code que tu veux {#python-codes-find}

La palette de code propose différentes fonctions et différents codes dont tu as besoin pour programmer les robots.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Si tu regardes les menus dans la catégorie **Codes**, tu vois que certains ont l'icône <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Si tu cliques une fois sur le menu **Logique**, l'icône devient <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> et les **sous-menus** qui s'y trouvent sont dépliés et deviennent visibles.  
Un menu qui a des sous-menus de cette façon s'appelle une « **catégorie** ».  

Si un menu n'a pas l'icône <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, comme **ternaire** dans la catégorie **Logique**, cela signifie que ce menu **n'a plus de sous-menus**.  
Un menu qui n'a pas de sous-menus de cette façon s'appelle un « **code** ».  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Si tu cliques de nouveau sur une catégorie dont les sous-menus sont dépliés, l'icône redevient <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> et les sous-menus sont masqués.  

En parcourant les catégories de cette façon, tu trouves dans la palette de code le code que tu veux.

<br>

### Insérer du code dans l'éditeur {#python-codes-insert}

La façon d'insérer du code dans l'éditeur est la suivante.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Un menu avec l'icône <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> à gauche du nom est un menu qui n'a pas d'**options de code** à choisir.  
C'est le cas de la plupart des menus de **catégorie**, qui ont des sous-menus.

Un menu avec l'icône <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> à gauche du nom est un menu dans lequel tu peux choisir des **options de code**.  
C'est le cas de la plupart des menus de **code**, qui n'ont pas de sous-menus.

Si tu fais un **clic droit** de la souris sur le code que tu veux insérer dans l'éditeur, tu vois les options que tu peux choisir.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Si tu fais un clic droit sur un menu de **code**, tu vois toujours les mêmes options, sans différence entre les fonctions de base et les codes propres aux robots et aux modules d'extension.

- **Insérer le code** : insère le code choisi à la position du curseur dans l'éditeur.
- **Aide** : ouvre l'aide qui décrit la façon d'utiliser ce code.
- **Annuler** : ferme le menu des options.

Pour les codes propres aux robots et aux modules d'extension, si tu choisis **Insérer le code**, le code est inséré sous la forme d'un appel à une méthode de cette instance de robot.  
( p. ex. le `set_wheel_speed` de HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Remarque**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Les catégories de code propres aux robots / aux modules d'extension que tu as ajoutées au programme et que tu n'utilises plus  
peuvent être retirées de la palette de code avec **clic droit de la souris → Supprimer**.

<br>
