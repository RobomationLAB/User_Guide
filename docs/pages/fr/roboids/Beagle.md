---
title: Beagle
---

# Beagle

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Beagle à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
beagle = Beagle(0)
# s'il y a plusieurs instances
beagle_1 = Beagle(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la vitesse de la roue {#set_wheel_speed}

Détermine la vitesse des roues. La plage de la vitesse est -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Vitesse de la roue | entier -100 ~ 100, 0 : arrêt | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Avancer d'une distance {#move_distance}

Se déplace de la distance indiquée à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si la valeur de la distance est 0, il continue à se déplacer selon la vitesse actuelle des roues.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Distance du déplacement | décimal supérieur ou égal à 0 | - |
| unit | Option de liste | Unité de la distance | cm, mm, pouces(inch) | cm |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Avancer un temps {#move_time}

Se déplace pendant le temps indiqué à la vitesse actuelle des roues.  
Si tu n'as pas réglé la vitesse des roues, il avance à la vitesse par défaut.  
Si tu coches la case attendre, il attend que le déplacement soit terminé.

<BlockImage module="roboids/Beagle" id="move_time" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Temps du déplacement (secondes) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Tourner sur place {#turn_degree}

Règle la direction et l'angle de la rotation sur place.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction de la rotation | gauche(left), droite(right) | - |
| data | Entrée (bloc) | Angle de la rotation (degrés) | décimal supérieur ou égal à 0 | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Modifier la vitesse de la roue {#change_speed}

Modifie la vitesse des roues de Beagle.  
La nouvelle vitesse est la vitesse actuelle plus la vitesse que tu as saisie.  
La vitesse des roues qui vient d'être réglée est limitée à la plage -100 ~ 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue | gauche(left), droite(right), les deux(both) | - |
| speed | Entrée (bloc) | Écart de vitesse à appliquer | entier -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Arrêter {#stop}

Arrête le déplacement de Beagle.  
Les vitesses des deux roues de Beagle sont remises à 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## La roue est-elle en mouvement ? {#wheel_moving}

Renvoie true si les roues sont en mouvement et false si elles sont arrêtées.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de Beagle à la fréquence indiquée.  
La plage des fréquences que l'on peut émettre est 27,5 Hz ~ 6553,5 Hz.  
Si tu saisis une valeur hors de cette plage, le buzzer n'émet aucun son.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 0, 27,5 ~ 6553,5 (sinon 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Jouer une note {#sound_note}

Beagle joue la note indiquée.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

Beagle joue un extrait sonore donné.  
Si tu coches la case attendre, il attend que la lecture soit terminée.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Le son est-il en cours de lecture ? {#sound_playing}

Renvoie true si le son est en cours de lecture et false sinon.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Valeur de la vitesse de la roue {#wheel_speed}

La vitesse d'une roue donnée

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Valeur de l'encodeur {#encoder}

La valeur de l'encodeur d'une roue donnée

<BlockImage module="roboids/Beagle" id="encoder" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Roue à lire | gauche(left), droite(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Valeur du gyroscope {#gyroscope}

La valeur du gyroscope sur un axe donné

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Valeur de l'accéléromètre {#accelerometer}

La valeur de l'accéléromètre sur un axe donné

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Valeur du magnétomètre {#magnetometer}

La valeur du magnétomètre sur un axe donné

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Valeur du capteur de température {#temperature}

La valeur du capteur de température

<BlockImage module="roboids/Beagle" id="temperature" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/Beagle" id="battery" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Si l'état a changé {#state_change}

Si l'état du robot a changé

<BlockImage module="roboids/Beagle" id="state_change" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'état | 0 ~ 5 (voir le tableau ci-dessous) | - |

| unit | Condition |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Démarrer / arrêter le lidar {#lidar_power}

Active ou désactive le capteur lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Lidar ON / OFF | démarrer(on=True), arrêter(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Valeur de la distance de l'objet n du lidar {#lidar_value}

Le capteur lidar peut mesurer la distance des objets sur 360 degrés autour du robot.  
En partant de l'avant de Beagle (valeur numéro 0), le numéro augmente de 1 en allant dans le sens inverse des aiguilles d'une montre.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Entrée (champ) | Numéro de l'objet (à partir de 0) | entier supérieur ou égal à 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Valeur de la distance par direction du lidar {#lidar_directions}

Indique les distances mesurées par le capteur lidar devant, derrière, sur les deux côtés et en diagonale.  
Renvoie la moyenne des valeurs de distance dans les 45 degrés à gauche et à droite de cette direction.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| direction | Option de liste | Direction à mesurer | avant(front), avant gauche(left front), gauche(left), arrière gauche(left back), arrière(back), arrière droite(right back), droite(right), avant droite(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Le lidar est-il prêt ? {#lidar_state}

Renvoie **vrai (True) / faux (False)** selon que le lidar est allumé ou non.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Paramètres

(aucun)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
