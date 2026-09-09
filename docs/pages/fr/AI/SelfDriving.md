---
title: Conduite autonome par caméra
---

# Conduite autonome par caméra

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Conduite autonome par caméra (SelfDriving) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
self_driving = SelfDriving(0)
# s'il y a plusieurs instances
self_driving_1 = SelfDriving(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la conduite autonome par caméra.

<BlockImage module="AI/SelfDriving" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Régler la couleur de la voie {#set_lane_color}

Règle la couleur de la voie de gauche et de celle de droite.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| left | Option de liste | Couleur de la voie de gauche | rouge(red), vert(green), bleu(blue) | - |
| right | Option de liste | Couleur de la voie de droite | rouge(red), vert(green), bleu(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Détecter une fois {#detect_once}

Cherche dans l'image la couleur ou la voie choisie et affiche sa zone une seule fois.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu dans l'image les couleurs ou les voies choisies et affiche leurs zones à l'écran.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection de couleur et de voie sur l'image de la caméra.

<BlockImage module="AI/SelfDriving" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Données de la voie {#lane_data}

Renvoie la position ou la distance de la voie indiquée.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| lane | Option de liste | Voie | gauche(left), droite(right) | - |
| unit | Option de liste | Type de mesure | x, distance(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Données de la couleur {#color_data}

Renvoie la position et la taille de la couleur indiquée.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | rouge(red), vert(green), bleu(blue) | - |
| unit | Option de liste | Type de coordonnée / taille | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Distance entre deux couleurs {#color_to_color}

Renvoie la distance entre deux couleurs.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Option de liste | Première couleur | rouge(red), vert(green), bleu(blue) | - |
| unit2 | Option de liste | Deuxième couleur | rouge(red), vert(green), bleu(blue) | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # distance
self_driving.get_distance('green', 'blue', 'horizontal')  # distance horizontale
```

## Si la voie est détectée {#lane_detected}

Si une voie donnée a été trouvée

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| lane | Option de liste | Voie | gauche(left), droite(right), les deux(both), n'importe laquelle(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Si la couleur est détectée {#color_detected}

Si la zone d'une couleur donnée a été trouvée

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | rouge(red), vert(green), bleu(blue), n'importe laquelle(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
