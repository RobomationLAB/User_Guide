---
title: Détection de visage
---

# Détection de visage

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection de visage (FaceDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
face_detection = FaceDetection(0)
# s'il y a plusieurs instances
face_detection_1 = FaceDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection de visage.

<BlockImage module="AI/FaceDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Charger le modèle {#load_model}

Charge le modèle de visage entraîné. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Détection de visage ».

<BlockImage module="AI/FaceDetection" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Détecter une fois {#detect_once}

Cherche le visage présent dans l'image actuelle et l'affiche une seule fois.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu le visage présent dans l'image actuelle et l'affiche à l'écran.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection de visage sur l'image de la caméra.

<BlockImage module="AI/FaceDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Position d'une partie du visage {#face_data}

Renvoie les coordonnées de la position du visage ou d'une de ses parties.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Partie du visage | visage(face), œil gauche(left eye), œil droit(right eye), oreille gauche(left ear), oreille droite(right ear), nez(nose), bouche(mouth) | - |
| pos | Option de liste | Type de coordonnée | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Informations sur le rectangle du visage {#face_square}

Renvoie la position et la taille du rectangle de la zone du visage.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| pos | Option de liste | Information sur le rectangle | position x min(min_x), position x max(max_x), position y min(min_y), position y max(max_y), largeur(width), hauteur(height), aire(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Distance entre deux parties {#distance}

Renvoie la distance entre deux parties du visage.

<BlockImage module="AI/FaceDetection" id="distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Option de liste | Première partie | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Option de liste | Deuxième partie | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # distance
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # distance horizontale
face_detection.get_distance('nose', 'mouth', 'vertical')  # distance verticale
```

## État du modèle {#model_state}

Renvoie l'état de chargement du modèle de visage.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Paramètres

(aucun)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Si le visage est détecté {#detected}

Si le visage a été trouvé

<BlockImage module="AI/FaceDetection" id="detected" />

### Paramètres

(aucun)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
