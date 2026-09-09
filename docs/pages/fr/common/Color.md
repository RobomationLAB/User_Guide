---
title: Couleur
---

# Couleur

Les couleurs sont utilisées dans de nombreux programmes graphiques. 


## Couleur de base {#color_picker}

La façon la plus simple d'obtenir une couleur est d'utiliser la **palette de couleurs**.  
Si tu cliques sur le petit carré blanc aux coins arrondis, la palette de couleurs apparaît et tu peux y choisir la couleur que tu veux.

<BlockImage module="common/color" id="color_picker" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Couleur | Couleur prédéfinie | noir(black), rouge(red), jaune(yellow), vert(green),<br>cyan(cyan), bleu(blue), magenta(magenta), blanc(white) | - |

### Python
```python
# exemple : quand on choisit la couleur prédéfinie rouge
Utils.color('red')
```

## Couleur du curseur {#color_slider}

Avec le bloc **couleur du curseur** tu peux composer une couleur toi-même à l'aide d'un curseur circulaire et d'un curseur en barre.  
Si tu cliques sur le petit carré blanc aux coins arrondis, une roue des couleurs circulaire apparaît, avec laquelle tu règles les valeurs de **rouge (R), vert (V) et bleu (B)**, ainsi qu'un curseur en barre avec lequel tu règles la **luminosité**.

<BlockImage module="common/color" id="color_slider" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Couleur | Roue des couleurs + curseur de luminosité | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# la couleur choisie dans la roue des couleurs → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Couleur RGB {#color_rgb}

Le bloc **couleur RGB** crée un tableau RGB en indiquant séparément les valeurs de rouge, vert et bleu.

<BlockImage module="common/color" id="color_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| r | Entrée (bloc) | Valeur du rouge | entier 0 ~ 255 | - |
| g | Entrée (bloc) | Valeur du vert | entier 0 ~ 255 | - |
| b | Entrée (bloc) | Valeur du bleu | entier 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Couleur aléatoire {#color_random}

Le bloc **couleur aléatoire** génère une couleur RGB au hasard chaque fois qu'il est appelé.

<BlockImage module="common/color" id="color_random" />

### Paramètres

(aucun)

### Python
```python
Utils.random_color()
```
