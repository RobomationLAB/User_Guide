---
title: Détection de couleur
---

# Détection de couleur

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Détection de couleur (ColorDetection) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
color_detection = ColorDetection(0)
# s'il y a plusieurs instances
color_detection_1 = ColorDetection(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la détection de couleur.

<BlockImage module="AI/ColorDetection" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Enregistrer une couleur {#register_color}

Ajoute une couleur à reconnaître avec la détection de couleur.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | noir(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Supprimer une couleur {#delete_color}

Supprime cette couleur des couleurs à reconnaître avec la détection de couleur.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | noir(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Régler la condition d'aire {#area_condition}

Fixe l'aire minimale de la zone de couleur à reconnaître. Seules les zones dont l'aire est égale ou supérieure sont affichées à l'écran.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (bloc) | Valeur de la condition d'aire | décimal supérieur ou égal à 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Détecter une fois {#detect_once}

Parmi les couleurs reconnaissables, il cherche celles présentes dans l'image actuelle et affiche leurs zones une seule fois.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Parmi les couleurs reconnaissables, il suit en continu celles présentes dans l'image actuelle et affiche leurs zones à l'écran.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la détection de couleur sur l'image de la caméra.

<BlockImage module="AI/ColorDetection" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Informations sur la couleur {#color_data}

Renvoie la position et la taille de la couleur indiquée.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | noir(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |
| pos | Option de liste | Type de coordonnée / taille | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Si une couleur donnée est détectée {#color_detected}

Si la couleur choisie a été trouvée

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Option de liste | Nom de la couleur | noir(black), rouge(red), jaune(yellow), vert(green), cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
