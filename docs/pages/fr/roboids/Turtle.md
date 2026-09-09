---
title: Turtle
---

# Turtle

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Turtle à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
turtle = Turtle(0)
# s'il y a plusieurs instances
turtle_1 = Turtle(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la vitesse de la roue {#set_wheel_speed}

Détermine la vitesse des roues. La plage de la vitesse est -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Vitesse de la roue | entier -100 ~ 100, 0 : arrêt | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Avancer d'une distance {#move_distance}

Règle la distance à parcourir.  
Si tu n'as pas réglé la vitesse des roues, il ne se déplace pas.  
Si la valeur de la distance est 0, il continue à se déplacer selon la vitesse actuelle des roues.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Distance du déplacement | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité de la distance | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Avancer un temps {#move_time}

Se déplace pendant le temps indiqué à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Turtle" id="move_time" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Temps du déplacement (secondes) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Tourner sur place {#turn_degree}

Règle la direction et l'angle de la rotation sur place.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |
| data | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Modifier la vitesse de la roue {#change_speed}

Modifie la vitesse des roues de Turtle.  
La nouvelle vitesse est la vitesse actuelle plus la vitesse que tu as saisie.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Arrêter {#stop}

Arrête le déplacement de Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## La roue est-elle en mouvement ? {#wheel_moving}

Renvoie true si les roues sont en mouvement et false si elles sont arrêtées.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Pivoter autour de la roue {#pivot}

Règle le point de référence, la direction et l'angle de la rotation.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/Turtle" id="pivot" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| base | Option de liste | Roue de référence de la rotation | roue gauche(left_wheel), roue droite(right_wheel) | - |
| direction | Option de liste | Direction de la rotation | avant(forward), arrière(backward) | - |
| data | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Dessiner un cercle {#pivot_circle}

Quand tu dessines un cercle avec le stylo, règle la direction, le rayon et l'angle de la rotation.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | avant gauche(left_forward), arrière gauche(left_backward), avant droite(right_forward), arrière droite(right_backward) | - |
| degree | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| radius | Entrée (bloc) | Rayon de la rotation | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité du rayon | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Suivre la ligne avec le capteur {#trace_line}

Avec le capteur de couleur du sol il suit une ligne d'une couleur donnée.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| line | Option de liste | Couleur de la ligne à suivre | noir(black), rouge(red), vert(green), bleu(blue), toutes les couleurs(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Suivre la ligne jusqu'à une couleur donnée {#trace_line_until_color}

Avec le capteur de couleur du sol il suit une ligne de la couleur A jusqu'à rencontrer la couleur B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| line | Option de liste | Couleur de la ligne à suivre | noir(black), rouge(red), vert(green), bleu(blue), toutes les couleurs(any) | - |
| color | Option de liste | Couleur où s'arrêter | noir(black), rouge(red), vert(green), cyan(cyan), bleu(blue), magenta(magenta), toutes les couleurs(any) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Passer l'intersection et s'arrêter à la suivante {#intersection}

Turtle se déplace à l'intersection dans la direction indiquée puis continue jusqu'à rencontrer l'intersection suivante.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction à l'intersection | avancer(forward), à gauche(left), à droite(right), demi-tour(uturn) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Régler la vitesse de suivi de ligne {#set_trace_speed}

Règle la vitesse de suivi de ligne. La plage de la vitesse est 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse de suivi de ligne | entier 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Régler le gain de suivi de ligne {#set_trace_gain}

Règle de combien la direction change pendant le suivi de ligne. La plage du gain est 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Variation de la direction | entier 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Arrêter le suivi de ligne {#stop_trace}

Termine la fonction de suivi de ligne de Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Régler la couleur de la LED {#set_led_color}

Règle la couleur de la LED de la tête de Turtle.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi. (le code est généré avec le nom de la couleur, pas avec les valeurs numériques R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Régler la couleur de la LED avec un bloc de la catégorie Couleur {#set_led_color_with_block}

Reçoit en entrée la sortie d'un bloc de la catégorie Couleur (`[R, G, B]`) et règle la couleur de la LED de la tête.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (couleur) | Bloc de la catégorie Couleur ou tableau `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Changer la couleur de la LED d'une valeur RGB {#change_by_rgb}

Ajoute à la couleur actuelle de la LED de la tête les variations R, G, B saisies et règle la nouvelle couleur.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Éteindre la LED de la tête {#turn_off}

Enlève la couleur de la LED de la tête.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de Turtle à la fréquence indiquée.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Jouer une note {#sound_note}

Turtle joue la note indiquée.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

Turtle joue un extrait sonore donné.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Le son est-il en cours de lecture ? {#sound_playing}

Renvoie true si le son est en cours de lecture et false sinon.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Valeur de la vitesse de la roue {#wheel_speed}

La vitesse d'une roue donnée

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Valeur du capteur de couleur du sol {#floor}

La valeur du capteur de couleur du sol

<BlockImage module="roboids/Turtle" id="floor" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Valeur du nom de la couleur de la carte {#card_color}

Le nom de la couleur de la carte lue avec le capteur de couleur du sol

<BlockImage module="roboids/Turtle" id="card_color" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Valeur du motif de couleur de la carte {#card_pattern}

Le motif de couleur de la carte lu avec le capteur de couleur du sol

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Valeur de l'accélération de la pesanteur {#acceleration}

La valeur de l'accélération de la pesanteur sur un axe donné

<BlockImage module="roboids/Turtle" id="acceleration" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Valeur du capteur de température {#temperature}

La valeur du capteur de température

<BlockImage module="roboids/Turtle" id="temperature" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/Turtle" id="battery" />

### Paramètres

(aucun)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Touche-t-il une couleur donnée ? {#color_read}

Mesure avec le capteur de couleur de Turtle s'il touche la couleur indiquée et renvoie **vrai (True) / faux (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Le motif de couleur de la carte est-il ~ ? {#pattern_read}

Renvoie **vrai (True) / faux (False)** selon que le motif de couleur de la carte détecté par le capteur de couleur correspond ou non.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| pattern | Option de liste | Nom du motif de la carte | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## État du bouton du dos {#button}

Si le bouton qui se trouve sur le dos est pressé ou s'il a été cliqué

<BlockImage module="roboids/Turtle" id="button" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| event | Option de liste | Type d'état du bouton | pressé(pressed), cliqué(click), cliqué longuement(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Si l'état a changé {#state_change}

Si l'état du robot a changé

<BlockImage module="roboids/Turtle" id="state_change" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'état | 0 ~ 5 (voir le tableau ci-dessous) | - |

| unit | Condition |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```

