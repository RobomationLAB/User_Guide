---
title: Détection détaillée de visage
---

# Détection détaillée de visage

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection détaillée de visage (DetailedFaceDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
detailed_face_detection = DetailedDetailedFaceDetection(0)
# s'il y a plusieurs instances
detailed_face_detection_1 = DetailedDetailedFaceDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection de visage.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Charger le modèle {#load_model}

Charge le modèle de visage entraîné. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Détection détaillée de visage ».

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Détecter une fois {#detect_once}

Cherche le visage présent dans l'image actuelle et l'affiche une seule fois.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu le visage présent dans l'image actuelle et l'affiche à l'écran.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection de visage sur l'image de la caméra.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coordonnées d'une partie du visage {#face_data}

Renvoie les coordonnées de chaque partie du visage.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Partie du visage | visage(face), œil gauche(left eye), œil droit(right eye), bouche(mouth), nez(nose), lèvre supérieure(upper lip), lèvre inférieure(lower lip), coin gauche de la bouche(left lip), coin droit de la bouche(right lip), pupille gauche(left pupil), pupille droite(right pupil) | - |
| pos | Option de liste | Coordonnée | x, y | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Informations sur le rectangle d'une partie du visage {#face_square}

Renvoie la position et la taille du rectangle de la zone de chaque partie du visage.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Partie du visage | visage(face), œil gauche(left eye), œil droit(right eye), bouche(mouth) | - |
| pos | Option de liste | Information sur le rectangle | position x min(min_x), position x max(max_x), position y min(min_y), position y max(max_y), largeur(width), hauteur(height), aire(area) | - |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Distance entre deux parties {#distance}

Renvoie la distance entre deux parties du visage.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Option de liste | Première partie | nom d'une partie du visage | - |
| unit2 | Option de liste | Deuxième partie | nom d'une partie du visage | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # distance
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # distance horizontale
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # distance verticale
```

## État du modèle {#model_state}

Renvoie l'état de chargement du modèle de visage.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Paramètres

(aucun)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Si le visage est détecté {#detected}

Si le visage a été trouvé

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Paramètres

(aucun)

### Python
```python
detailed_face_detection = DetailedDetailedFaceDetection(0)

detailed_face_detection.detected()
```
