---
title: Guide de programmation
---

# Guide de programmation

Ce document décrit RobomationLAB, la plateforme d'enseignement de la programmation des robots développée par Robomation, qui fait partie du « moteur d'exécution et environnement de création intégré pour le service de diffusion des mouvements de robots ».  

La description détaillée suit cet ordre :
- Les principales caractéristiques de RobomationLAB
- La façon de programmer les robots dans RobomationLAB
- Le système de syntaxe de base de la programmation des robots dans RobomationLAB  

<br>

## Sommaire {#table-of-contents}
1. [RobomationLAB — plateforme d'enseignement de la programmation des robots](#platform)  
    1-1) [Programmes pour programmer les robots](#coding-programs)  
    1-2) [Conversion bidirectionnelle en temps réel entre blocs et Python](#block-python-conversion)  
    1-3) [Les principales caractéristiques des programmes](#features)  
    1-4) [Commande des robots en temps réel](#control-method)  

2. [La façon de programmer les robots dans RobomationLAB](#programming-method)  
    2-1) [Exécution séquentielle et exécution en parallèle](#sequential-parallel)  
    2-2) [La fonction setup](#setup)  
    2-3) [La fonction loop](#loop)  

3. [Le système de syntaxe de base de la programmation des robots dans RobomationLAB](#grammar-syntax)  
    3-1) [Importer le paquet robomation](#import-package)  
    3-2) [Créer une instance de robot](#create-instance)  
    3-3) [Méthodes pour commander le robot](#control-methods)  
    3-4) [Lire les capteurs et les états](#sensor)  
    3-5) [Détecter les événements](#event)  
    3-6) [Attendre la fin d'une action (wait)](#wait)  
    3-7) [Fonctions utilitaires (Utils)](#utils)   

<br><br>

## RobomationLAB — plateforme d'enseignement de la programmation des robots {#platform}
RobomationLAB est une plateforme optimisée pour l'**enseignement du logiciel de robotique avec IA**.  
Elle offre un environnement de création intégré basé sur le navigateur Chrome pour enseigner la programmation des robots aux élèves de l'école primaire.  

RobomationLAB propose des programmes d'enseignement de la programmation des robots sous plusieurs formes, comme la **programmation avec blocs** et la **programmation avec scripts**.  
On n'apprend pas seulement la théorie de la programmation : avec les produits Robomation on fait bouger et on commande de vrais robots,  
ce qui donne l'occasion d'apprendre la programmation et la robotique en même temps.

<br>

### Programmes pour programmer les robots {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer est un outil avec lequel on commande ses propres robots facilement et rapidement grâce à la programmation avec blocs et on apprend les bases de la commande des robots.**  

- Un environnement de création optimisé pour l'informatique physique

- Programmer en glissant et déposant des blocs : facile même pour les débutants  
- Un environnement d'apprentissage sans erreurs de syntaxe, dès les notions de base  
- Conversion automatique en code de script Python  
- Pour chaque robot, une collection de blocs aux fonctions prédéfinies et de nombreux exemples à essayer
- Des résultats visibles en temps réel pendant l'exécution du code  
- Une meilleure capacité à résoudre les problèmes et plus de créativité en combinant les blocs  
- Des commentaires optimisés grâce à l'analyse du code de script basée sur l'IA  

<br>

#### Script Composer {#script-composer}
**Script Composer est un outil avec lequel on commande ses propres robots facilement et rapidement grâce à la programmation en Python et on apprend la syntaxe de Python et les bases de la programmation des robots.**  

- Un éditeur de Python

- Complétion automatique et insertion de code par langue
- Pour chaque robot, de nombreux exemples de code à essayer
- Des résultats visibles en temps réel pendant l'exécution du code
- Des commentaires optimisés grâce à l'analyse du code de script basée sur l'IA

<br>

#### Les principales caractéristiques des programmes {#features}
Les programmes pour programmer les robots de RobomationLAB ont les principales caractéristiques suivantes.  
1.	Ils fonctionnent dans le navigateur Chrome, donc ils ne dépendent pas du système d'exploitation
2.	Ils commandent le matériel du robot directement avec un dongle USB via Web Serial
3.	Ils prennent en charge la commande de plusieurs robots à la fois, sans limite de type ni de quantité
4.	À l'enregistrement, le résultat est converti en un fichier texte JSON et enregistré

<br>

### Commande des robots en temps réel {#control-method}
Les programmes pour programmer les robots de RobomationLAB commandent les robots en temps réel par les étapes suivantes.  
1.	Avec la programmation avec blocs ou avec scripts
on écrit du code qui définit les valeurs des objets Effector et Command pour commander le robot
ou qui utilise les valeurs Sensor et les événements Event du robot.
2.	On exécute le code.
3.	Via Web Serial on reçoit du robot des paquets contenant les données Sensor et Event
et on les intègre dans l'objet Device du robot.
4.	Le code est interprété en temps réel ;
dans ce processus on écrit des données dans les objets Effector et Command ou on lit des valeurs dans les objets Sensor et Event.
5.	Avec les données de l'objet Device un paquet est créé
et envoyé au robot via Web Serial, pour que l'on puisse vérifier que le robot fonctionne vraiment.
6.	Pendant que le code est en cours d'exécution, les étapes 3 ~ 5 se répètent environ toutes les 10 ~ 20 ms.  

<br>

### Conversion bidirectionnelle en temps réel entre blocs et Python {#block-python-conversion}
RobomationLAB propose ensemble un éditeur de programmation avec blocs et un éditeur de Python ; les deux éditeurs se synchronisent en temps réel dans les deux sens.

- Si tu ajoutes, modifies ou supprimes des blocs dans l'éditeur de blocs, ces modifications sont intégrées en temps réel dans le code Python.
- À l'inverse, les modifications que tu apportes au code dans l'éditeur de Python sont intégrées en temps réel dans les blocs.

Comme les blocs et le code Python se correspondent un à un et sont convertis dans les deux sens,  
tu peux passer naturellement de la programmation avec blocs à la programmation avec scripts : par exemple construire rapidement toute la structure avec les blocs puis affiner les détails en Python, ou apprendre la syntaxe de Python en la comparant aux blocs.

> Cependant la conversion de Python vers les blocs ne fonctionne qu'avec du code que l'on peut représenter sous forme de blocs.  
> (Avec une syntaxe erronée ou du code qui ne peut pas être converti en blocs, le passage peut ne pas se faire.  
Tu trouveras plus d'informations dans le document [Règles de programmation](CodingRules).)

<br>

<br><br>

## La façon de programmer les robots dans RobomationLAB {#programming-method}

### Exécution séquentielle et exécution en parallèle {#sequential-parallel}
Dans la programmation des robots on distingue l'exécution séquentielle et l'exécution en parallèle.  
L'exécution séquentielle signifie que l'action suivante ne commence que lorsque la précédente est terminée ; elle convient aux comportements simples.  
Si par exemple tu veux que le robot avance puis s'arrête et allume une LED, l'exécution séquentielle doit être possible, pour que le code de chaque action soit dans cet ordre et soit exécuté l'un après l'autre dans le temps.  

L'exécution en parallèle signifie que plusieurs actions sont exécutées en même temps ; elle est nécessaire pour des comportements plus complexes et plus avancés.  
Si par exemple tu veux faire marcher un robot bipède, tu dois pouvoir programmer avec l'exécution en parallèle, car la marche ne fonctionne que si les pieds et les jambes du robot bougent en même temps.

Les programmes pour programmer les robots de RobomationLAB prennent en charge les deux formes à la fois,  
en partant d'une structure de code setup / loop semblable à l'environnement de développement matériel d'Arduino.

<BlockImage module="program/Editor" id="block-structure" />

Quand tu ouvres Block Composer pour la première fois, deux blocs de fonction vides apparaissent dans la zone de travail :  
le bloc **au démarrage** représente la fonction `setup` et le bloc **répéter indéfiniment** la fonction `loop`.  

Les blocs sont convertis en temps réel en code Python,  
et ce code a la structure de base suivante.  

```python
# structure de base du code Python
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Pour commander un robot, mets `from robomation import *` au début du code et déclare comme instance le robot que tu veux utiliser. (p. ex. `hamster_s = HamsterS(0)`)


<br>

### La fonction setup {#setup}
La fonction setup est exécutée exactement une fois, au moment où le code est exécuté.  
Dans la fonction setup on écrit surtout le code qui initialise les variables ou qui prépare les modes et les fonctions du robot.  
Si tu commandes par exemple un robot qui se déplace avec des roues, tu peux régler dans la fonction setup la vitesse initiale des roues.  

Si un délai est nécessaire dans une fonction, avec la fonction `Utils.wait(...)` tu peux écrire du code qui se déroule dans l'ordre du temps, comme s'il était synchrone.  
`Utils.wait(...)` attend le temps indiqué (en secondes) puis exécute le code suivant, c'est-à-dire que le code se réveille après un temps ou une action donnés et continue.  
Si tu exploites cette possibilité, avec la fonction loop qui se charge de l'exécution en parallèle, non seulement la simple exécution séquentielle est possible, mais aussi une programmation des robots très puissante.

Dans l'exemple suivant le robot HamsterS avance une seconde puis recule une seconde.  
Si tu le faisais dans la fonction loop, qui est exécutée en parallèle, le calcul du temps et le code de commande se mélangeraient et le code deviendrait très compliqué.  
Si en revanche tu utilises dans la fonction setup la fonction de délai `Utils.wait`, tu peux écrire du code qui se déroule dans l'ordre du temps, comme s'il était synchrone.  
( La fonction `Utils.wait` est décrite plus loin en détail dans [Fonctions utilitaires (Utils)](#utils). )

Exemple de code (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # mettre les deux vitesses de roue à 50 et avancer
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # attendre 1 seconde
    # mettre les deux vitesses de roue à -50 et reculer
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # attendre 1 seconde
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( La syntaxe des instances de robot et des méthodes est décrite plus loin en détail dans [Le système de syntaxe de base de la programmation des robots dans RobomationLAB](#grammar-syntax). )


<br>

### La fonction loop {#loop}
La fonction loop prend en charge l'exécution en parallèle et est exécutée de nouveau environ toutes les 10 ms pendant que le code est en cours d'exécution.  
Dans la fonction loop on écrit surtout le code qui définit de façon répétée la valeur des variables ou qui détecte et traite certains événements du robot.  

Dans l'exemple suivant la vitesse des roues et la couleur de la LED du robot HamsterS changent avec le temps.  
( Si dans une fonction tu modifies une variable déclarée en dehors de setup / loop, déclare-la là avec le mot-clé `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # chaque fois que la fonction loop est appelée, la valeur de frame augmente de 1

    # avec la valeur modifiée de frame, définir les deux vitesses de roue et les valeurs RGB des deux LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( La syntaxe des instances de robot et des méthodes est décrite plus loin en détail dans [Le système de syntaxe de base de la programmation des robots dans RobomationLAB](#grammar-syntax). )  

Dans l'exemple suivant la LED s'allume en rouge quand on donne une tape sur le corps du robot HamsterS (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # au moment où une tape arrive, l'événement est détecté
    if hamster_s.tap():               # si l'événement est détecté, True
        hamster_s.set_led_color('both', 'red')   # allumer les deux LED en rouge
    else:
        hamster_s.turn_off('both')               # éteindre les deux LED
```
( La syntaxe de la détection des événements (`tap()`) et le reste sont décrits plus loin en détail dans [Le système de syntaxe de base de la programmation des robots dans RobomationLAB](#grammar-syntax). )  

<br><br>

## Le système de syntaxe de base de la programmation des robots dans RobomationLAB {#grammar-syntax}
Quand tu écris du code dans les programmes pour programmer les robots de RobomationLAB, le système de syntaxe de base suivant s'applique.  
La commande du robot passe par le paquet Python `robomation` :  
on crée une instance du robot puis on appelle les méthodes de cette instance.

### Importer le paquet robomation {#import-package}
Pour que tu puisses utiliser les classes (les robots) et les utilitaires (`Utils`) nécessaires pour commander le robot, la ligne suivante se place au début du code.

```python
from robomation import *
```

<br>

### Créer une instance de robot {#create-instance}
Déclare comme instance le robot que tu veux utiliser.  
Le nom de la classe indique le type de robot et le nombre entre parenthèses l'indice de l'instance (commence à 0).

```python
hamster_s = HamsterS(0)   # un HamsterS
```

Les noms de classe et les noms de variable par défaut de chaque robot sont :

| Robot | Nom de la classe | Nom de variable par défaut |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Si tu utilises plusieurs robots du même type, déclare-les avec des indices croissants 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Méthodes pour commander le robot {#control-methods}
Pour commander le robot on appelle les méthodes de l'instance.  
Les méthodes exécutent les actions du robot : régler la vitesse des roues, avancer, LED, son et plus encore.

```python
hamster_s.set_wheel_speed('both', 50)    # régler les deux vitesses de roue
hamster_s.move_distance(10, 'cm')        # avancer de 10 cm
hamster_s.set_led_color('both', 'red')   # les deux LED en rouge
```

Les méthodes que chaque robot propose et leurs paramètres se trouvent dans le document de ce robot (p. ex. « HamsterS »).

<br>

### Lire les capteurs et les états {#sensor}
Pour lire les valeurs des capteurs ou les états du robot on appelle aussi des méthodes ; la méthode renvoie la valeur.

```python
left = hamster_s.floor('left')        # lire la valeur du capteur de sol gauche
dist = hamster_s.proximity('right')   # lire la valeur du capteur de proximité droit
```

<br>

### Détecter les événements {#event}
Les événements qui se produisent à cause de changements d'état ou de l'environnement se détectent parce que  
la méthode d'événement correspondante renvoie True au moment où l'événement se produit.

```python
if hamster_s.tap():        # au moment où une tape arrive, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Attendre la fin d'une action (wait) {#wait}
Les méthodes qui prennent du temps à se terminer — avancer, tourner, jouer un son — ont un paramètre `wait`.
- `wait=True` (valeur par défaut) : on attend que l'action soit terminée puis le code suivant est exécuté.
- `wait=False` : l'action est lancée et le code suivant est exécuté juste après.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # attend que le déplacement soit terminé
hamster_s.move_distance(10, 'cm', wait=False)   # lance le déplacement et exécute tout de suite le code suivant
```

<br>

### Fonctions utilitaires (Utils) {#utils}
Les fonctions communes qui ne dépendent pas du type de robot — délai, jouer un son, écrire dans le journal, couleurs — s'utilisent via les méthodes de la classe `Utils`.

```python
Utils.wait(1)              # attendre 1 seconde
Utils.speak('Bonjour')     # jouer un texte sous forme de voix (TTS)
Utils.log(0, '', '')       # écrire dans la console
```

<br>
