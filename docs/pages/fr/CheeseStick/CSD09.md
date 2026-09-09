---
title: CSD-09 Moteur
---

# CSD-09 Moteur

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-09 Moteur (CSD09) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Démarrer le servomoteur {#start_servo_motor}

Indique le port sur lequel utiliser le servomoteur.  
Si tu n'indiques pas le port, le moteur ne fonctionne pas correctement.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du servomoteur | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Régler l'angle du servomoteur {#set_servo_motor}

Règle l'angle du servomoteur sur le port indiqué.  
La plage des valeurs que l'on peut choisir est 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du servomoteur | Sa, Sb, Sc | le port du dernier `start_servo_motor` |
| value | Entrée (champ) | Angle de rotation (degrés) | entier 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Modifier l'angle du servomoteur {#change_servo_motor}

Modifie l'angle du servomoteur sur le port indiqué.  
La plage des valeurs que l'on peut choisir est -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du servomoteur | Sa, Sb, Sc | le port du dernier `start_servo_motor` |
| value | Entrée (champ) | Écart d'angle à appliquer | entier | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Éteindre le servomoteur {#stop_servo_motor}

Coupe l'alimentation du servomoteur sur le port indiqué.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du servomoteur | Sa, Sb, Sc | le port du dernier `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Démarrer le moteur CC {#start_DC_motor}

Permet de commander le moteur CC en utilisant le port indiqué.
Il faut l'appeler une fois avant d'utiliser les autres blocs du moteur CC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du moteur CC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Régler la vitesse du moteur CC {#set_DC_motor}

Règle la valeur de la sortie PWM du moteur CC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du moteur CC | Mab, Mcd | le port du dernier `start_dc_motor` |
| value | Entrée (champ) | Valeur de la sortie PWM | entier 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Modifier la vitesse du moteur CC {#change_DC_motor}

Ajoute à la valeur actuelle de la sortie PWM du moteur CC la variation saisie et règle la nouvelle valeur.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du moteur CC | Mab, Mcd | le port du dernier `start_dc_motor` |
| value | Entrée (champ) | Écart de PWM à appliquer | entier | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Arrêter le moteur CC {#stop_DC_motor}

Arrête la sortie du moteur CC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port du moteur CC | Mab, Mcd | le port du dernier `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Démarrer le moteur pas à pas {#start_step_motor}

Utilise le moteur pas à pas.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Régler le mode du moteur pas à pas {#set_step_motor_mode}

Règle le mode dans lequel le moteur pas à pas est commandé.  
Si tu ne règles pas le mode, le mode « puissance » est utilisé par défaut.  
Attention : tu ne dois pas changer le mode pendant que le moteur pas à pas tourne.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Mode de fonctionnement | off(éteint), normal(wave_step), puissance(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Régler la vitesse du moteur pas à pas {#set_step_motor_speed}

Règle la vitesse du moteur pas à pas.  
La plage des valeurs que l'on peut choisir est -1000 ~ 1000.  
Si la valeur est négative, le moteur tourne dans le sens inverse.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| value | Entrée (champ) | Vitesse de rotation (PPS) | entier supérieur ou égal à 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Faire tourner le moteur pas à pas {#rotate_step_motor}

Règle le nombre d'impulsions dont le moteur pas à pas doit tourner.  
La plage des valeurs que l'on peut choisir est 0 ~ 65535.  
Si tu n'as pas choisi la vitesse du moteur pas à pas, le moteur ne tourne pas.  
Si tu coches la case attendre, il attend que la rotation soit terminée.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| value | Entrée (champ) | Nombre de pas à tourner | entier | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Changer la vitesse du moteur pas à pas {#change_step_motor_speed}

Change la vitesse du moteur pas à pas.  
La plage des valeurs que l'on peut choisir est -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| value | Entrée (champ) | Écart de PPS à appliquer | entier | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Arrêter le moteur pas à pas {#stop_step_motor}

Arrête le moteur pas à pas ou coupe son alimentation.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Mode d'arrêt | arrêter(stop), couper l'alimentation(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Nombre de pas cumulés {#step_motor_steps}

Renvoie le nombre de pas que le moteur pas à pas a parcourus jusqu'ici.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
