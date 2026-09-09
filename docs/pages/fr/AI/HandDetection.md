---
title: Détection de la main
---

# Détection de la main

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection de la main (HandDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
hand_detection = HandDetection(0)
# s'il y a plusieurs instances
hand_detection_1 = HandDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection de visage.

<BlockImage module="AI/HandDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Charger le modèle {#load_model}

Charge le modèle de main entraîné. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Détection de la main ».

<BlockImage module="AI/HandDetection" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Régler le nombre maximal de mains {#max_hands}

Décide si, en cherchant les mains, la référence est une seule main ou les deux mains.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nombre de mains | une main(one), deux mains(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```


## Détecter une fois {#detect_once}

Cherche la main présente dans l'image actuelle et l'affiche une seule fois.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu la main présente dans l'image actuelle et l'affiche à l'écran.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection de la main sur l'image de la caméra.

<BlockImage module="AI/HandDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Coordonnées d'une partie de la main {#hand_data}

Renvoie les informations sur la position de la paume ou du poignet de la main indiquée.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| side | Option de liste | Côté de la main | gauche(left), droite(right) | - |
| unit | Option de liste | Partie de la main | paume(palm), poignet(wrist) | - |
| pos | Option de liste | Type de coordonnée / taille | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```


## Coordonnées de l'articulation d'un doigt {#joint_data}

Renvoie les coordonnées de l'articulation du doigt indiqué.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| side | Option de liste | Côté de la main | gauche(left), droite(right) | - |
| unit | Option de liste | Doigt | pouce(thumb), index(index), majeur(middle), annulaire(ring), auriculaire(pinky) | - |
| joint | Option de liste | Position de l'articulation | première articulation(first), deuxième articulation(second), troisième articulation(third), bout(last) | - |
| pos | Option de liste | Coordonnée | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```


## Informations sur le rectangle de la main {#hand_square}

Renvoie la position et la taille du rectangle de la zone de la main indiquée.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| side | Option de liste | Côté de la main | gauche(left), droite(right) | - |
| unit | Option de liste | Partie de la main | main(hand), paume(palm) | - |
| pos | Option de liste | Information sur le rectangle | position x min(min_x), position x max(max_x), position y min(min_y), position y max(max_y), largeur(width), hauteur(height), aire(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```


## Distance entre main et main {#hand_to_hand_distance}

Renvoie la distance entre deux parties de la main.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Entrée (texte) | Première partie de la main | main : `'side_unit'` (p. ex. `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Entrée (texte) | Deuxième partie de la main | main : `'side_unit'` (p. ex. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# main ↔ main / distance
hand_detection.get_distance('left_palm', 'right_palm')  
```


## Distance entre main et doigt {#hand_to_joint_distance}

Renvoie la distance entre une partie de la main et l'articulation d'un doigt.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Entrée (texte) | Première partie | main : `'side_unit'` (p. ex. `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Entrée (texte) | Deuxième partie | doigt : `'side_unit_joint'` (p. ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# main ↔ articulation du doigt / distance horizontale
hand_detection.get_distance('left_palm', 'right_index_first')
```


## Distance entre doigt et doigt {#joint_to_joint_distance}

Renvoie la distance entre les articulations de deux doigts.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Entrée (texte) | Première partie | doigt : `'side_unit_joint'` (p. ex. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Entrée (texte) | Deuxième partie | doigt : `'side_unit_joint'` (p. ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# articulation du doigt ↔ articulation du doigt / distance verticale
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```
## État du modèle {#model_state}

Renvoie l'état de chargement du modèle de main.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/HandDetection" id="model_state" />

### Paramètres

(aucun)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Si la main est détectée {#detected}

Si la main a été trouvée

<BlockImage module="AI/HandDetection" id="detected" />

### Paramètres

(aucun)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
