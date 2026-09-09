---
title: Détection de marqueur ArUco
---

# Détection de marqueur ArUco

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection de marqueur ArUco (ArucoMarker) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
aruco_marker = ArucoMarker(0)
# s'il y a plusieurs instances
aruco_marker_1 = ArucoMarker(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection des marqueurs ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Régler le nombre maximal de marqueurs {#max_count}

Règle le nombre maximal de marqueurs que l'on peut reconnaître. La plage du nombre de marqueurs est 0 ~ 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Nombre maximal de marqueurs | entier 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Détecter une fois {#detect_once}

Cherche les marqueurs présents dans l'image actuelle et affiche leurs zones une seule fois.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Suit en continu les marqueurs présents dans l'image actuelle et affiche leurs zones à l'écran.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection des marqueurs sur l'image de la caméra.

<BlockImage module="AI/ArucoMarker" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Données du marqueur {#marker_data}

Renvoie la position et la taille du marqueur portant l'ID indiqué.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | ID du marqueur | entier supérieur ou égal à 0 | - |
| unit | Option de liste | Type de mesure | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Distance entre marqueurs {#marker_to_marker}

Renvoie la distance entre deux marqueurs.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit1 | Entrée (bloc) | ID du premier marqueur | entier supérieur ou égal à 0 | - |
| unit2 | Entrée (bloc) | ID du deuxième marqueur | entier supérieur ou égal à 0 | - |
| type | Option de liste | Type de distance | distance(omis ou None), distance horizontale(horizontal), distance verticale(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # distance
aruco_marker.get_distance(0, 2, 'horizontal')  # distance horizontale
```

## Si le marqueur est détecté {#marker_detected}

Si le marqueur portant un id donné a été trouvé

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | ID du marqueur | entier supérieur ou égal à 0 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
