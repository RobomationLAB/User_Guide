---
title: RaccoonBot
---

# RaccoonBot

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de RaccoonBot à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
raccoon = RaccoonBot(0)
# s'il y a plusieurs instances
raccoon_1 = RaccoonBot(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Allumer / éteindre le moteur de l'articulation {#motor}

Décide s'il faut relâcher ou maintenir la commande appliquée à chaque moteur d'articulation.  
Si tu ne le règles pas, on démarre avec la commande des moteurs de toutes les articulations allumée.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Numéro de l'articulation | toutes les articulations(-1), n° 1(1), n° 2(2), n° 3(3), n° 4(4) | -1 |
| on | Case à cocher | Commande du moteur ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# toutes les articulations, commande du moteur éteinte
raccoon.motor(-1, False)

# articulation n° 1, commande du moteur allumée
raccoon.motor(1, True)
```

## Régler la vitesse de l'articulation {#speed_joint}

Règle la vitesse de l'articulation choisie.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| joint | Option de liste | Numéro de l'articulation | toutes les articulations(-1), n° 1(1), n° 2(2), n° 3(3), n° 4(4) | - |
| data | Entrée (bloc) | Vitesse de l'articulation | entier -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Modifier la vitesse de l'articulation {#change_speed_joint}

Modifie la vitesse de l'articulation choisie.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| joint | Option de liste | Numéro de l'articulation | toutes les articulations(-1), n° 1(1), n° 2(2), n° 3(3), n° 4(4) | - |
| data | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Régler d'un coup la vitesse des articulations {#speed_joints}

Règle d'un coup la vitesse des quatre articulations.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (tableau) | Tableau des vitesses des 4 articulations | `[joint1, joint2, joint3, joint4]`, chacune -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# tableau littéral [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# tableau dans une variable
raccoon.set_speed_joints(*arr)
```

## Régler la vitesse du contrôle d'angle des articulations {#angle_speed}

Règle la vitesse à laquelle les articulations sont commandées dans le mode de contrôle d'angle.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse maximale du contrôle d'angle | entier 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Régler l'angle de l'articulation {#angle_joint}

Règle l'angle de l'articulation choisie.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| joint | Option de liste | Numéro de l'articulation | toutes les articulations(-1), n° 1(1), n° 2(2), n° 3(3), n° 4(4) | - |
| data | Entrée (bloc) | Angle de l'articulation (degrés) | voir le tableau ci-dessus (limité automatiquement) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Modifier l'angle de l'articulation {#change_angle_joint}

Modifie l'angle de l'articulation choisie.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| joint | Option de liste | Numéro de l'articulation | toutes les articulations(-1), n° 1(1), n° 2(2), n° 3(3), n° 4(4) | - |
| data | Entrée (bloc) | Écart d'angle à appliquer (degrés) | voir le tableau ci-dessus (limité automatiquement) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Régler d'un coup les angles des articulations {#angle_joints}

Règle d'un coup l'angle des quatre articulations.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (tableau) | Tableau des angles des 4 articulations ou nom d'une pose | tableau `[j1, j2, j3, j4]` | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tableau explicite
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Initialiser l'état des articulations {#default_angle_joints}

Règle l'angle des quatre articulations sur une pose prédéfinie (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Liste | Nom de la pose | `'zero'` / `'park'` / `'home'` | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

Poses prédéfinies :
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# pose prédéfinie
raccoon.set_angle_joints('home', wait=True)
```

## Enregistrer les angles des articulations {#save_encoder}

Enregistre les valeurs actuelles de l'encodeur dans une variable quelconque.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| encoder | Variable | Nom de la variable où enregistrer | variable | - |
| data | Entrée (tableau) | Tableau initial à enregistrer | tableau de 4 éléments ou tableau vide | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Régler une coordonnée donnée {#set_coordinate}

Déplace le bras robotique en réglant la valeur d'une coordonnée donnée.  
Les plages des coordonnées sont les suivantes.  
Par rapport au poignet => x : -20,0 cm ~ 20,0 cm, y : -10,0 cm ~ 20,0 cm, z : -2,0 mm ~ 28,0 cm  
Par rapport à la pince => la plage peut changer selon l'appareil branché.  
L'orientation de la pince est fixée à l'horizontale ou à la verticale par rapport au sol.  
Si tu saisis une coordonnée inatteignable, la commande est ignorée.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| origin | Option de liste | Point de référence | poignet(wrist), effecteur terminal(end_effector) | - |
| pos | Option de liste | Axe | x, y, z | - |
| data | Entrée (bloc) | Valeur de la coordonnée | x : -20 ~ 20 cm, y : -10 ~ 20 cm, z : -2 ~ 28 cm | - |
| unit | Option de liste | Unité | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# régler la coordonnée x sur 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# coordonnée z par rapport à end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Changer une coordonnée donnée {#change_coordinate}

Déplace le bras robotique en changeant la valeur d'une coordonnée donnée par rapport à la position actuelle.  
Les plages des coordonnées sont les suivantes.  
Par rapport au poignet => x : -20,0 cm ~ 20,0 cm, y : -10,0 cm ~ 20,0 cm, z : -2,0 mm ~ 28,0 cm  
Par rapport à la pince => la plage peut changer selon l'appareil branché.  
L'orientation de la pince est fixée à l'horizontale ou à la verticale par rapport au sol.  
Si tu saisis une coordonnée inatteignable, la commande est ignorée.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| origin | Option de liste | Point de référence | poignet(wrist), effecteur terminal(end_effector) | - |
| pos | Option de liste | Axe | x, y, z | - |
| data | Entrée (bloc) | Écart de coordonnée à appliquer | décimal | - |
| unit | Option de liste | Unité | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Se déplacer vers une coordonnée xyz {#set_coordinates}

Règle d'un coup les coordonnées x, y et z sur les valeurs indiquées.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| origin | Option de liste | Point de référence | poignet(wrist), effecteur terminal(end_effector) | - |
| x | Entrée (bloc) | Coordonnée x | décimal | - |
| y | Entrée (bloc) | Coordonnée y | décimal | - |
| z | Entrée (bloc) | Coordonnée z | décimal | - |
| unit | Option de liste | Unité | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Régler le verrouillage de l'effecteur terminal {#lock}

Règle l'orientation dans laquelle la pince est verrouillée. Après que l'option est réglée sur horizontal ou vertical, tu ne peux plus commander la vitesse ni l'angle de l'articulation 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| mode | Option de liste | Orientation du verrouillage | aucun(none), horizontal(horizontal), vertical(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Saisir / poser un objet avec l'effecteur terminal {#end_effector}

Saisit ou pose un objet avec l'effecteur terminal.  
Selon la valeur du menu déroulant unit, il appelle l'une des deux méthodes.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | saisir (fermer)(pick), poser (ouvrir)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Dispositif de l'effecteur terminal {#end_effector_device}

Le numéro de la pince branchée en ce moment  
(1, 3, 4 : pince à mors, 2 : pince à vide)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## État de l'effecteur terminal {#end_effector_status}

L'état dans lequel la pince tient un objet  
(0 : a posé, 1 : a saisi)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Jouer une note {#sound_note}

RaccoonBot joue la note indiquée.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

RaccoonBot joue un extrait sonore donné.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Valeur de l'encodeur {#encoder}

La valeur de l'encodeur de l'articulation choisie

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| joint | Option de liste | Numéro de l'articulation (ou toutes les articulations) | 1, 2, 3, 4, toutes les articulations(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# toutes les articulations
raccoon.encoder(-1)
```

## Coordonnée de l'élément choisi {#coordinate}

Renvoie les coordonnées xyz actuelles du point de référence.  
Si tu omets `pos`, il renvoie le tableau complet `[x, y, z]` ; si tu l'indiques, il ne renvoie que la valeur de cet axe.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| origin | Option de liste | Point de référence | poignet(wrist), effecteur terminal(end_effector) | wrist |
| pos | Option de liste | Axe (ou tous) | x, y, z, tous (si omis il renvoie le tableau complet) | None (tous) |

### Python
```python
raccoon = RaccoonBot(0)

# un axe donné
raccoon.get_coordinates('wrist', 'x')

# tous (tableau de 3 éléments)
raccoon.get_coordinates('wrist')
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/Raccoon4" id="battery" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Le bouton est-il pressé ? {#button}

Si le bouton choisi est pressé ou si un événement de clic s'est produit

<BlockImage module="roboids/Raccoon4" id="button" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom du bouton | teach(teach), play(play), power(power), delete(delete), n'importe quel bouton(any) | - |
| event | Option de liste | Type d'événement | pressé(pressed), clic(click), clic long(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Régler la vitesse du convoyeur {#conveyor_speed}

Règle la vitesse du convoyeur. La plage de la vitesse est -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Vitesse du convoyeur | entier -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Régler la distance du convoyeur {#conveyor_distance}

Déplace le convoyeur d'une distance donnée.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Distance du déplacement | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité de la distance | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Modifier la vitesse du convoyeur {#change_conveyor_speed}

Modifie la vitesse du convoyeur.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Arrêter le convoyeur {#stop_conveyor}

Arrête le convoyeur.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Le convoyeur est-il en marche ? {#conveyor_running}

Si le convoyeur fonctionne

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Paramètres

(aucun)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Le bouton du convoyeur est-il pressé ? {#conveyor_button}

Si le bouton du convoyeur est pressé ou si un événement de clic s'est produit

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| event | Option de liste | Type d'événement | pressé(pressed), cliqué(click), cliqué longuement(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
