---
title: Détection d'objet
---

# Détection d'objet

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection d'objet (ObjectDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
object_detection = ObjectDetection(0)
# s'il y a plusieurs instances
object_detection_1 = ObjectDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection d'objet.

<BlockImage module="AI/ObjectDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Charger le modèle {#load_model}

Charge le modèle d'objet entraîné. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Détection d'objet ».

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```


## Régler le nombre maximal d'objets {#max_objects}

Règle le nombre maximal d'objets que l'on peut trouver. La plage du nombre d'objets est 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Nombre maximal d'objets | entier 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```


## Régler le seuil de confiance {#confidence_threshold}

Règle la probabilité (confiance) minimale pour la détection d'objet. Seuls les objets dont la probabilité (confiance) est égale ou supérieure sont affichés à l'écran. La plage de la probabilité (confiance) est 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Seuil de confiance | décimal 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```


## Détecter une fois {#detect_once}

Cherche les objets présents dans l'image actuelle et les affiche une seule fois.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```


## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu les objets présents dans l'image actuelle et les affiche à l'écran.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```


## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection d'objet sur l'image de la caméra.

<BlockImage module="AI/ObjectDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```


## Informations sur la position de l'objet {#object_data}

Renvoie la position et la taille de l'objet indiqué.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de l'objet | 80 classes d'objets (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` et d'autres) | - |
| pos | Option de liste | Coordonnée | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```


## Informations sur le rectangle de l'objet {#object_square}

Renvoie la position et la taille du rectangle de la zone de l'objet indiqué.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de l'objet | 80 classes d'objets | - |
| pos | Option de liste | Information sur le rectangle | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```


## Distance entre deux objets {#object_distance}

Renvoie la distance entre deux classes d'objets.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Option de liste | Nom du premier objet | 80 classes d'objets | - |
| unit2 | Option de liste | Nom du deuxième objet | 80 classes d'objets | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # distance
object_detection.get_distance('person', 'car', 'horizontal')  # distance horizontale
```


## Confiance de l'objet {#object_confidence}

La probabilité (confiance) que l'objet choisi soit correct

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de l'objet | 80 classes d'objets | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```


## État du modèle {#model_state}

Renvoie l'état de chargement du modèle d'objet.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Paramètres

(aucun)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```


## Si l'objet est détecté {#detected}

Si un objet a été trouvé

<BlockImage module="AI/ObjectDetection" id="detected" />

### Paramètres

(aucun)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```


## Un objet donné a-t-il été détecté ? {#object_detected}

Si l'objet choisi a été trouvé

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de l'objet | 80 classes d'objets | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
