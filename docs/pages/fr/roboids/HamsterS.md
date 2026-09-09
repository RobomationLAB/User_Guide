---
title: HamsterS
---

# HamsterS

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de HamsterS à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
hamster_s = HamsterS(0)
# s'il y a plusieurs instances
hamster_s_1 = HamsterS(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la vitesse de la roue {#set_wheel_speed}

Détermine la vitesse des roues. La plage de la vitesse est -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Vitesse de la roue | entier -100 ~ 100, 0 : arrêt | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Avancer d'une distance {#move_distance}

Se déplace de la distance indiquée à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si la valeur de la distance est 0, il continue à se déplacer selon la vitesse actuelle des roues.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Distance du déplacement | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité de la distance | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Avancer pendant un temps {#move_time}

Se déplace pendant le temps indiqué à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Temps du déplacement (secondes) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Tourner sur place {#turn_degree}

Règle la direction et l'angle de la rotation sur place.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |
| data | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Modifier la vitesse de la roue {#change_speed}

Modifie la vitesse des roues de HamsterS.  
La nouvelle vitesse est la vitesse actuelle plus la vitesse que tu as saisie.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Arrêter {#stop}

Arrête le déplacement de HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## La roue est-elle en mouvement ? {#wheel_moving}

Renvoie true si les roues sont en mouvement et false si elles sont arrêtées.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Avancer d'un pas sur le plateau {#grid_move}

Sur le plateau il se déplace d'une case à la fois, comme prévu.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Tourner une fois sur le plateau {#grid_turn}

Sur le plateau il tourne de 90 degrés dans la direction indiquée.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Pivoter autour du porte-stylo {#pivot}

Quand tu utilises le porte-stylo, règle le point de référence, la direction et l'angle de la rotation.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| base | Option de liste | Point de référence de la rotation | stylo gauche(left_pen), stylo droit(right_pen), roue gauche(left_wheel), roue droite(right_wheel) | - |
| direction | Option de liste | Direction de la rotation | avant(forward), arrière(backward) | - |
| degree | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Dessiner un cercle autour du porte-stylo {#pivot_circle}

Quand tu dessines un cercle avec le porte-stylo, règle le point de référence, la direction, le rayon et l'angle de la rotation.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| base | Option de liste | Point de référence de la rotation | stylo gauche(left_pen), stylo droit(right_pen) | - |
| direction | Option de liste | Direction de la rotation | avant gauche(left_forward), arrière gauche(left_backward), avant droite(right_forward), arrière droite(right_backward) | - |
| degree | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| radius | Entrée (bloc) | Rayon de la rotation | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité du rayon | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Suivre la ligne avec le capteur {#trace_mode}

HamsterS suit avec le capteur de sol une ligne d'une couleur donnée.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| floor | Option de liste | Capteur de sol à suivre | gauche(left), droite(right), centre(center) | - |
| line | Option de liste | Couleur de la ligne | noir(black), blanc(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Passer l'intersection et s'arrêter à la suivante {#trace_until_grid}

HamsterS se déplace à l'intersection dans la direction indiquée puis continue jusqu'à rencontrer l'intersection suivante.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction à l'intersection | tourner à gauche(left), tourner à droite(right), avant(forward), demi-tour(uturn) | - |
| line | Option de liste | Couleur de la ligne | noir(black), blanc(white) | black |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Régler la vitesse de suivi de ligne {#set_trace_speed}

Règle la vitesse de suivi de ligne. La plage de la vitesse est 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse de suivi de ligne | entier 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Régler le gain de suivi de ligne {#set_trace_gain}

Règle de combien la direction change pendant le suivi de ligne. La plage du gain est 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Variation de la direction | entier 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Arrêter le suivi de ligne {#stop_trace}

Termine la fonction de suivi de ligne de HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Régler la couleur de la LED {#set_led_color}

Règle la couleur de la LED de HamsterS.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi. (le code est généré avec le nom de la couleur, pas avec les valeurs numériques R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | - |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Régler la couleur de la LED avec un bloc de la catégorie Couleur {#set_led_color_with_block}

Reçoit en entrée un bloc de la catégorie Couleur (`[R, G, B]`) et règle la couleur de la LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | - |
| data | Entrée (couleur) | Bloc de la catégorie Couleur ou tableau `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Changer la couleur de la LED d'une valeur RGB {#change_by_rgb}

Change la couleur de la LED de HamsterS des valeurs R, G, B indiquées.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | - |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Éteindre la LED {#turn_off}

Enlève la couleur de la LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de HamsterS à la fréquence indiquée.  
La plage des fréquences que l'on peut émettre est 122,1 Hz ~ 4186,0 Hz.  
Si tu saisis une valeur hors de cette plage, le buzzer n'émet aucun son.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 122,1 ~ 4186,0 (sinon 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Jouer une note {#sound_note}

HamsterS joue la note indiquée.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

HamsterS joue un extrait sonore donné.  
Si tu coches la case attendre, il attend que la lecture soit terminée.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Le son est-il en cours de lecture ? {#sound_playing}

Renvoie true si le son est en cours de lecture et false sinon.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Valeur de la vitesse de la roue {#wheel_speed}

La vitesse d'une roue donnée

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Valeur du capteur de proximité {#proximity}

La valeur d'un capteur de proximité donné

<BlockImage module="roboids/HamsterS" id="proximity" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Position du capteur à lire | gauche(left), droite(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Valeur du capteur de sol {#floor}

La valeur d'un capteur de sol donné

<BlockImage module="roboids/HamsterS" id="floor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Position du capteur à lire | gauche(left), droite(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Valeur de l'accélération de la pesanteur {#acceleration}

La valeur de l'accélération de la pesanteur sur un axe donné

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Valeur du capteur de luminosité {#light}

La valeur du capteur de luminosité

<BlockImage module="roboids/HamsterS" id="light" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Valeur du capteur de température {#temperature}

La valeur du capteur de température

<BlockImage module="roboids/HamsterS" id="temperature" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/HamsterS" id="battery" />

### Paramètres

(aucun)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Si l'état a changé {#state_change}

Si l'état du robot a changé

<BlockImage module="roboids/HamsterS" id="state_change" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'état | 0 ~ 7 (voir le tableau ci-dessous) | - |

| unit | Signification | Python |
|------|------|--------|
| 0 | incliner vers l'avant | `acceleration('x') > 5000` |
| 1 | incliner vers l'arrière | `acceleration('x') < -5000` |
| 2 | incliner vers la gauche | `acceleration('y') > 5000` |
| 3 | incliner vers la droite | `acceleration('y') < -5000` |
| 4 | être retourné | `acceleration('z') > 0` |
| 5 | ne pas être retourné | `acceleration('z') < -3000` |
| 6 | détecter un obstacle ou une main | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | recevoir une tape | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Définir le mode d'entrée du port d'E/S {#io_mode}

Définit le mode d'entrée du port d'E/S.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| option | Option de liste | Mode d'E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Régler la valeur de sortie du port d'E/S {#set_output}

Règle la valeur de sortie du port d'E/S indiqué.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| data | Entrée (bloc) | Valeur de sortie | entier 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Changer la valeur de sortie du port d'E/S {#change_output}

Change la valeur de sortie du port d'E/S indiqué.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| data | Entrée (bloc) | Écart de valeur de sortie à appliquer | entier | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Ouvrir / fermer la pince {#gripper}

Ouvre ou ferme la pince de HamsterS.  
Selon la valeur de unit, il appelle l'une des deux méthodes.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | ouvrir(open), fermer(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Régler l'angle du lanceur {#shooter}

Commande le lanceur en réglant son angle. La plage de l'angle est 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Angle du lanceur | entier 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Valeur d'entrée du port d'E/S {#input}

Renvoie la valeur d'entrée du port d'E/S de HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
