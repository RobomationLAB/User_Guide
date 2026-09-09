---
title: Piobot
---

# Piobot

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Piobot à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
pio = Pio(0)
# s'il y a plusieurs instances
pio_1 = Pio(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la vitesse de la roue {#set_wheel_speed}

Règle la vitesse des roues. La plage de la vitesse des roues est -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Vitesse de la roue | entier -100 ~ 100, 0 : arrêt | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Avancer d'une distance {#move_distance}

Se déplace de la distance indiquée à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si la valeur de la distance est 0, il continue à se déplacer selon la vitesse actuelle des roues.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Pio" id="move_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Distance du déplacement | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité de la distance | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Avancer un temps {#move_time}

Se déplace pendant le temps indiqué à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Pio" id="move_time" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Temps du déplacement (secondes) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Tourner sur place {#turn_degree}

Règle la direction et l'angle de la rotation sur place.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |
| data | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Modifier la vitesse de la roue {#change_speed}

Modifie la vitesse des roues de Piobot.  
La nouvelle vitesse est la vitesse actuelle plus la vitesse que tu as saisie.  
La vitesse des roues qui vient d'être réglée est limitée à la plage -100 ~ 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Activer / désactiver le mode turbo {#turbo}

Active ou désactive le mode turbo de Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Mode turbo ON / OFF | allumer(on=True), éteindre(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Arrêter {#stop}

Arrête le déplacement de Piobot.  
Les vitesses des deux roues de Piobot sont remises à 0.

<BlockImage module="roboids/Pio" id="stop" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.stop()
```

## La roue est-elle en mouvement ? {#wheel_moving}

Renvoie true si les roues sont en mouvement et false si elles sont arrêtées.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Se déplacer d'une case sur le plateau {#grid_move}

Sur le plateau il se déplace d'une case à la fois, comme prévu.

<BlockImage module="roboids/Pio" id="grid_move" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Direction du déplacement | avant(forward), arrière(backward), à gauche(left), à droite(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Tourner une fois sur le plateau {#grid_turn}

Sur le plateau Piobot tourne de 90 degrés dans la direction reçue en entrée. Il attend toujours la fin (en interne wait=True est fixé).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Régler la vitesse du cou {#set_neck_speed}

Règle la vitesse de rotation du cou. La plage de la vitesse du cou est 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse de rotation du cou | entier 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Régler l'angle du cou {#set_neck_angle}

Règle l'angle que le cou atteint en tournant. La plage de l'angle du cou est -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Angle du cou (degrés) | décimal -45 ~ 45 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Le cou est-il en mouvement ? {#neck_moving}

Renvoie true si le cou est en mouvement et false s'il est arrêté.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Régler la couleur de la LED de l'œil {#set_eye_color}

Règle la couleur de la LED des yeux de Piobot.  
Tu peux changer la couleur de la LED de l'œil gauche, de l'œil droit ou des deux.  
Si tu choisis une couleur parmi les couleurs prédéfinies, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi. (le code est généré avec le nom de la couleur, pas avec les valeurs numériques R, G, B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Œil à commander | gauche(left), droite(right), les deux(both) | - |
| color | Option de liste | Couleur prédéfinie → convertie en nom de couleur (en anglais) | noir(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Régler la couleur de la LED de l'œil avec un bloc de la catégorie Couleur {#set_eye_color_with_block}

Règle la couleur de la LED des yeux de Piobot avec les blocs de la catégorie Couleur.  
Tu peux changer la couleur de la LED de l'œil gauche, de l'œil droit ou des deux.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Œil à commander | gauche(left), droite(right), les deux(both) | - |
| data | Entrée (couleur) | Tableau [R, G, B] | Bloc de la catégorie Couleur ou `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Changer la couleur de la LED de l'œil d'une valeur RGB {#change_by_rgb}

Change la couleur de la LED des yeux de Piobot des valeurs R, G, B indiquées.  
Tu peux régler la couleur de l'œil gauche, de l'œil droit ou des deux.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Œil à commander | gauche(left), droite(right), les deux(both) | - |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Définir le motif des LED des yeux {#set_eye_pattern}

Définit le motif des yeux et indique la couleur de chaque œil au début du motif.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| pattern | Option de liste | Type de motif | éteindre(reset), clignoter(blink), fondu(dimming), arc-en-ciel(rainbow) | - |
| left | Option de liste | Couleur de l'œil gauche | par défaut(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | white |
| right | Option de liste | Couleur de l'œil droit | (comme left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Éteindre la LED de l'œil {#turn_off}

Enlève la couleur des yeux.

<BlockImage module="roboids/Pio" id="turn_off" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Œil à commander | gauche(left), droite(right), les deux(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de Piobot à la fréquence indiquée.  
La plage des fréquences que l'on peut émettre est 27,5 Hz ~ 6553,5 Hz.  
Si tu saisis une valeur hors de cette plage, le buzzer n'émet aucun son.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Jouer la note de son {#sound_note}

Piobot joue la note indiquée.

<BlockImage module="roboids/Pio" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#/Ré♭(C#), Ré(D), Ré#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

Piobot joue un extrait sonore donné.  
Si tu coches la case attendre, il attend que la lecture soit terminée.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Jouer une mélodie {#sound_melody}

Piobot joue une mélodie donnée.  
Si tu coches la case attendre, il attend que la lecture soit terminée.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| melody | Option de liste | Nom de la mélodie | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Le son est-il en cours de lecture ? {#sound_playing}

Renvoie true si le son est en cours de lecture et false sinon.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Valeur de la vitesse de la roue {#wheel_speed}

La vitesse d'une roue donnée

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/Pio" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/Pio" id="battery" />

### Paramètres

(aucun)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Bouton du clavier {#keypad}

Détecte le dernier bouton du clavier pressé par l'utilisateur.

<BlockImage module="roboids/Pio" id="keypad" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| button | Option de liste | Bouton à détecter | exécuter(play), avancer(forward), reculer(backward), aller à gauche(left), aller à droite(right), action(action), répéter(repeat), effacer(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
