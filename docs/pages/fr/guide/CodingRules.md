---
title: Règles de programmation
---

# Règles de programmation

Ce document décrit les règles de programmation à respecter quand on programme les robots dans RobomationLAB.

> **Remarque** : la programmation avec scripts fonctionne **uniquement avec Python** ; les blocs sont convertis un à un en code Python qui utilise le paquet Python `robomation`.

> **À propos de l'ordre** : d'abord les règles de base communes (1~2), puis les règles du code à blocs (3~5) et enfin les règles du code de script Python (6~11). Elles sont importantes aussi bien pour générer du code à blocs que du code Python.

<br>

## 1. Limite de la conversion un à un entre blocs et Python {#1}
L'éditeur de programmation avec blocs et l'éditeur de programmation en Python se correspondent un à un et sont convertis en temps réel dans les deux sens.

- Blocs → Python : les blocs sont toujours convertis en code Python correct.
- Python → blocs : la conversion ne fonctionne qu'avec du **code que l'on peut représenter sous forme de blocs**.

C'est pourquoi, si tu écris dans l'éditeur de Python du code comme le suivant, le passage de Python à l'éditeur de programmation avec blocs peut ne pas se faire ;  
dans ce cas la raison de l'échec est aussi affichée.

1) Du code avec des erreurs de syntaxe Python
2) Du code qui utilise des fonctions, des méthodes ou une syntaxe auxquelles ne correspond aucun bloc (c'est-à-dire qui ne sont pas définies dans les règles de conversion)

Pour que le passage à l'éditeur de programmation avec blocs fonctionne toujours,  
tu dois écrire le code dans les classes, les méthodes, les fonctions et l'étendue de syntaxe prise en charge qui sont définies dans ce document et dans les documents de chaque robot.

<br>

## 2. Règles pour présenter le code {#2}
Tu ne peux utiliser que les classes, les méthodes et les fonctions qui figurent dans le **manuel de l'API Python de robomation** et dans le **document des règles de conversion entre blocs et Python**.  
Il est strictement interdit de créer et d'utiliser de nouvelles méthodes de commande du robot qui ne sont pas définies dans ces documents.
Ce n'est permis que si l'utilisateur demande expressément de créer une nouvelle fonction.

Les variables auxiliaires qui n'apparaissent pas dans les exemples de conversion de ces documents (c'est-à-dire des variables supplémentaires en plus de celle de l'instance du robot) ne peuvent être déclarées que si l'utilisateur demande de créer une variable.  
De plus, les arguments d'une méthode doivent obligatoirement être écrits comme des valeurs littérales.  

```python
# exemple correct
hamster_s.set_wheel_speed('both', 100)

# exemple incorrect — une fonction qui ne figure pas dans le manuel de l'API
hamster_s.set_wheel('both', 100)

# exemple incorrect — déclarer une variable arbitraire
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Structure de base du code à blocs {#3}
Chaque fois que l'on présente du code à blocs, les blocs de fonction supérieurs au démarrage et répéter indéfiniment, qui servent de point d'entrée du programme, sont toujours inclus comme structure de base.  
Avec cette règle, tout le code à blocs aura désormais la structure de base suivante.

| Structure à blocs (Block Composer) | Présentation (sous forme de texte) |
| --- | --- |
| au démarrage | au démarrage |
| (blocs internes) | (blocs internes) |
| répéter indéfiniment | répéter indéfiniment |
| (blocs internes) | (blocs internes) |

<br>

## 4. Format du code à blocs (règles de retour à la ligne et d'indentation) {#4}
- Les blocs supérieurs (au démarrage, répéter indéfiniment, etc.) sont alignés à gauche.
- Chaque bloc d'instruction doit être séparé par un caractère de retour à la ligne, de sorte qu'un seul bloc apparaisse par ligne.
- Les blocs subordonnés qui se trouvent dans un bloc doté d'une zone d'exécution interne (si, répéter, définition de fonction, etc.) sont indentés pour que la hiérarchie soit claire.

<br>

## 5. Règles pour les blocs internes et la représentation des conditions {#5}
La valeur choisie dans un menu déroulant ou une valeur d'entrée correspond à un argument fonctionnel du bloc et est insérée directement entre crochets ([]) à l'endroit où cette valeur apparaît dans le texte du bloc.  
Cela sert à reproduire visuellement ensemble le texte fixe du bloc et la valeur que l'utilisateur a choisie ou saisie.

Tout le code à blocs doit contenir la dénomination fixe du bloc, les valeurs choisies dans les menus déroulants et les valeurs saisies par l'utilisateur, toutes entre crochets ([]),  
de sorte que la forme réelle des blocs dans Block Composer soit reproduite sous forme de texte le plus fidèlement possible.  

| Structure à blocs (Block Composer) | Présentation (sous forme de texte) |
| --- | --- |
| si [condition] faire [instruction] sinon [instruction] | si [condition] faire [instruction] sinon [instruction] |
| RaccoonBot : régler le mode de commande sur [vitesse] | RaccoonBot : régler le mode de commande sur [vitesse] |
| RaccoonBot : régler la vitesse de l'articulation [1] sur [100] | RaccoonBot : régler la vitesse de l'articulation [1] sur [100] |

<br>

## 6. Structure de base du code de script {#6}
Chaque fois que l'on présente du code de script (Python), les fonctions setup() et loop(), qui servent de point d'entrée du programme, sont toujours incluses comme structure de base.  
De plus, `from robomation import *` se place au début du code pour que les classes et les utilitaires nécessaires à la commande du robot soient disponibles, et le robot que l'on veut utiliser est déclaré comme instance.  
Avec cette règle, tout le code de script (Python) aura désormais la structure de base suivante.

```python
# structure de base du code Python
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

<br>

## 7. Format du code de script (règles de retour à la ligne et d'indentation) {#7}
- Les fonctions supérieures (setup, loop, etc.) sont alignées à gauche.
- L'indentation après un retour à la ligne se base obligatoirement sur **une tabulation (`\t`)**. (comme l'indentation de l'éditeur)

<br>

## 8. Règles pour commander le robot (instance / méthodes) {#8}
Pour commander un robot il faut respecter les règles suivantes.  

1) `from robomation import *` se place au début du code.
2) Le robot que l'on veut utiliser est déclaré comme instance. Comme nom de variable on prend le nom par défaut de ce robot et l'indice commence à 0.
3) Le robot se commande en appelant les méthodes de l'instance déclarée.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Si tu utilises plusieurs robots du même type, déclare-les avec des indices croissants 0, 1, 2 … (p. ex. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Lors du réglage de la vitesse des roues, du déplacement et dans les cas semblables, les méthodes se chargent en interne de l'initialisation nécessaire (par exemple de nettoyer un ordre de déplacement précédent), donc tu n'as pas à écrire de code de préparation.

<br>

## 9. Règles pour appeler les fonctions utilitaires {#9}
Les fonctions utilitaires communes — délai, jouer un son, écrire dans le journal, couleurs — s'appellent via les méthodes de la classe `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Tu trouveras la liste détaillée des fonctions utilitaires dans les documents suivants.
- [Couleur](../common/Color)
- [Audio](../common/Audio)
- [Contrôle](../common/Control)

<br>

## 10. Règle de préférence pour les méthodes propres au robot {#10}
Pour commander le matériel du robot (vitesse des roues, LED, son, etc.)  
il faut préférer les méthodes propres à l'instance du robot (p. ex. « HamsterS ») aux fonctions utilitaires communes.

Si par exemple il faut émettre un son avec le robot,  
il faut préférer la méthode `sound_clip()` de l'instance « HamsterS » à la fonction utilitaire `Utils.play_sound()`.

```python
# le son sort du robot HamsterS. (recommandé)
hamster_s.sound_clip('beep')

# le son sort du PC / de la tablette / de l'appareil mobile. (non recommandé)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Règles pour les imports {#11}
Quand on écrit du code Python, on n'importe que les modules nécessaires à l'exécution du code.
- Pour commander le robot, `from robomation import *` se place en principe au début du code.
- Dans le code qui utilise `math.`, `import math` est ajouté automatiquement, et dans celui qui utilise `random.`, `import random`.
- Les autres modules qui ne sont pas nécessaires ne sont pas importés.
