---
title: Détection du corps
---

# Détection du corps

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection du corps (BodyDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
body_detection = BodyDetection(0)
# s'il y a plusieurs instances
body_detection_1 = BodyDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection de visage.

<BlockImage module="AI/BodyDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Charger le modèle {#load_model}

Charge le modèle du corps entraîné. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Détection du corps ».

<BlockImage module="AI/BodyDetection" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Détecter une fois {#detect_once}

Cherche le corps présent dans l'image actuelle et l'affiche une seule fois.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu le corps présent dans l'image actuelle et l'affiche à l'écran.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection du corps sur l'image de la caméra.

<BlockImage module="AI/BodyDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coordonnées d'une partie du corps {#body_data}

Renvoie les coordonnées de chaque partie du corps.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Partie du corps | nez(nose), bouche(mouth), œil gauche(left eye), œil droit(right eye), oreille gauche(left ear), oreille droite(right ear), épaule gauche(left shoulder), épaule droite(right shoulder), coude gauche(left elbow), coude droit(right elbow), poignet gauche(left wrist), poignet droit(right wrist), main gauche(left hand), main droite(right hand), hanche gauche(left hip), hanche droite(right hip), genou gauche(left knee), genou droit(right knee), cheville gauche(left ankle), cheville droite(right ankle), pied gauche(left foot), pied droit(right foot) | - |
| pos | Option de liste | Coordonnée | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```


## Distance entre deux parties {#body_distance}

Renvoie la distance entre deux parties du corps.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Option de liste | Première partie du corps | (voir le tableau des parties du corps ci-dessus) | - |
| unit2 | Option de liste | Deuxième partie du corps | (voir le tableau des parties du corps ci-dessus) | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # distance
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # distance horizontale
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # distance verticale
```


## État du modèle {#model_state}

Renvoie l'état de chargement du modèle du corps.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Paramètres

(aucun)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Si le corps est détecté {#detected}

Si le corps a été trouvé

<BlockImage module="AI/BodyDetection" id="detected" />

### Paramètres

(aucun)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
