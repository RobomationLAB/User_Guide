---
title: Hamster
---

# Hamster

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Hamster à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
hamster = Hamster(0)
# s'il y a plusieurs instances
hamster_1 = Hamster(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la vitesse de la roue {#set_wheel_speed}

Détermine la vitesse des roues. La plage de la vitesse est -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Vitesse de la roue | entier -100 ~ 100, 0 : arrêt | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Avancer un temps {#move_time}

Se déplace pendant le temps indiqué à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Hamster" id="move_time" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Temps du déplacement (secondes) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Modifier la vitesse de la roue {#change_speed}

Modifie la vitesse des roues de Hamster.  
La nouvelle vitesse est la vitesse actuelle plus la vitesse que tu as saisie.  
La vitesse des roues qui vient d'être réglée est limitée à la plage -100 ~ 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Arrêter {#stop}

Arrête le déplacement de Hamster.  
Les vitesses des deux roues de Hamster sont remises à 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Avancer d'un pas sur le plateau {#grid_move}

Sur le plateau il se déplace d'une case à la fois, comme prévu.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Tourner une fois sur le plateau {#grid_turn}

Sur le plateau il tourne de 90 degrés dans la direction indiquée.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Suivre la ligne avec le capteur {#trace_mode}

Hamster suit avec le capteur de sol une ligne d'une couleur donnée.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| floor | Option de liste | Capteur de sol à suivre | gauche(left), droite(right), centre(center) | - |
| line | Option de liste | Couleur de la ligne | noir(black), blanc(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Passer l'intersection et s'arrêter à la suivante {#trace_until_grid}

Hamster se déplace à l'intersection dans la direction indiquée puis continue jusqu'à rencontrer l'intersection suivante.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction à l'intersection | gauche(left), droite(right), avant(forward), demi-tour(uturn) | - |
| line | Option de liste | Couleur de la ligne | noir(black), blanc(white) | black |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Régler la vitesse de suivi de ligne {#set_trace_speed}

Règle la vitesse de suivi de ligne. La plage de la vitesse est 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse de suivi de ligne | entier 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Arrêter le suivi de ligne {#stop_trace}

Termine la fonction de suivi de ligne de Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Régler la couleur de la LED {#set_led_color}

Règle la couleur de la LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | - |
| color | Option de liste | Couleur | noir(black), bleu(blue), vert(green), cyan(cyan), rouge(red), magenta(magenta), jaune(yellow), blanc(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Éteindre la LED {#turn_off}

Enlève la couleur de la LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | LED à commander | gauche(left), droite(right), les deux(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de Hamster à la fréquence indiquée.  
La plage des fréquences que l'on peut émettre est 1,0 Hz ~ 6553,5 Hz.  
Si tu saisis une valeur hors de cette plage, le buzzer n'émet aucun son.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Jouer une note {#sound_note}

Hamster joue la note indiquée.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Désactiver le son {#sound_off}

Éteint le son de Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Valeur de la vitesse de la roue {#wheel_speed}

La vitesse d'une roue donnée

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Valeur du capteur de proximité {#proximity}

La valeur d'un capteur de proximité donné

<BlockImage module="roboids/Hamster" id="proximity" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Position du capteur à lire | gauche(left), droite(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Valeur du capteur de sol {#floor}

La valeur d'un capteur de sol donné

<BlockImage module="roboids/Hamster" id="floor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Position du capteur à lire | gauche(left), droite(right), centre(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Valeur de l'accélération de la pesanteur {#acceleration}

La valeur de l'accélération de la pesanteur sur un axe donné

<BlockImage module="roboids/Hamster" id="acceleration" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Valeur du capteur de luminosité {#light}

La valeur du capteur de luminosité

<BlockImage module="roboids/Hamster" id="light" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Valeur du capteur de température {#temperature}

La valeur du capteur de température

<BlockImage module="roboids/Hamster" id="temperature" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/Hamster" id="battery" />

### Paramètres

(aucun)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Si l'état a changé {#state_change}

Si l'état du robot a changé

<BlockImage module="roboids/Hamster" id="state_change" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'état | 0 ~ 6 (voir le tableau ci-dessous) | - |

| unit | Condition |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Définir le mode d'entrée du port d'E/S {#io_mode}

Définit le mode d'entrée du port d'E/S.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| option | Option de liste | Mode d'E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Régler la valeur de sortie du port d'E/S {#set_output}

Règle la valeur de sortie du port d'E/S indiqué.

<BlockImage module="roboids/Hamster" id="set_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| data | Entrée (bloc) | Valeur de sortie | entier 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Changer la valeur de sortie du port d'E/S {#change_output}

Change la valeur de sortie du port d'E/S indiqué.

<BlockImage module="roboids/Hamster" id="change_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b, les deux(both) | - |
| data | Entrée (bloc) | Écart de valeur de sortie à appliquer | entier | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Ouvrir / fermer la pince {#gripper}

Ouvre ou ferme la pince de Hamster.  
Selon la valeur de unit, il appelle l'une des deux méthodes.

<BlockImage module="roboids/Hamster" id="gripper" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | fermer(close), ouvrir(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Régler l'angle du lanceur {#shooter}

Commande le lanceur en réglant son angle. La plage de l'angle est 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Angle du lanceur | entier 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Valeur d'entrée du port d'E/S {#input}

Renvoie la valeur d'entrée du port d'E/S de Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'E/S | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
