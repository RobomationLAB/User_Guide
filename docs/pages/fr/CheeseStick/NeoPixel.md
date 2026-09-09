---
title: NeoPixel
---

# NeoPixel

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de NeoPixel à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Démarrer {#start}

Utilise le NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Régler le mode de couleur {#mode}

Règle le mode des LED du NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Mode des canaux de couleur | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Régler la couleur d'un pixel {#set_one_color}

Règle la couleur d'un seul pixel, celui du numéro indiqué.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi. (le code est généré avec le nom de la couleur, pas avec les valeurs numériques R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| idx | Entrée (champ) | Numéro du pixel (commence à 1) | entier supérieur ou égal à 1 | - |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Régler la couleur d'un pixel avec un bloc de la catégorie Couleur {#set_one_color_with_block}

Reçoit en entrée un bloc de la catégorie Couleur et règle la couleur d'un pixel.  
La sortie du bloc de couleur (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, qui renvoient tous `[R, G, B]`) est décompressée avec `*` (astérisque) et passée comme arguments r, g, b de `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| idx | Entrée (champ) | Numéro du pixel (commence à 1) | entier supérieur ou égal à 1 | - |
| data | Entrée (couleur) | Bloc de la catégorie Couleur ou tableau `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Modifier la couleur d'un pixel d'une valeur RGB {#change_one_by_rgb}

Ajoute à la valeur RGB actuelle du pixel indiqué la variation et règle la nouvelle couleur.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| idx | Entrée (champ) | Numéro du pixel (commence à 1) | entier supérieur ou égal à 1 | - |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Éteindre un pixel {#turn_off_one}

Enlève la couleur de la LED numéro n.  
La plage des numéros de LED est 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| idx | Entrée (champ) | Numéro du pixel (commence à 1) | entier supérieur ou égal à 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Régler le motif d'une plage {#set_range_pattern}

Règle le motif de couleurs de toutes les LED de la plage indiquée.  
La plage des numéros de LED est 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| pattern | Option de liste | Nom du motif de couleurs | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Régler la couleur d'une plage {#set_range_color}

Règle la même couleur sur toute la plage de pixels indiquée.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Régler la couleur d'une plage avec un bloc de la catégorie Couleur {#set_range_color_with_block}

Reçoit en entrée un bloc de la catégorie Couleur et règle la couleur d'une plage de pixels.  
La sortie du bloc de couleur (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) est décompressée avec `*` (astérisque) et passée comme arguments r, g, b de `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| data | Entrée (couleur) | Bloc de la catégorie Couleur ou tableau `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Modifier la couleur d'une plage d'une valeur RGB {#change_range_by_rgb}

Ajoute à la couleur actuelle de la plage de pixels indiquée la variation RGB et règle la nouvelle couleur.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Éteindre la couleur d'une plage {#turn_off_range}

Enlève la couleur de toutes les LED de la plage indiquée.  
La plage des numéros de LED est 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Régler la couleur d'une plage tous les n pixels {#set_range_increment_color}

Règle la couleur tous les `increment` pixels dans la plage de pixels indiquée.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi.  
(par exemple : n'allumer que les pixels 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| increment | Entrée (champ) | Pas (nombre de pixels) | entier supérieur ou égal à 1 | - |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Régler la couleur d'une plage tous les n pixels avec un bloc de la catégorie Couleur {#set_range_increment_color_with_block}

Reçoit en entrée un bloc de la catégorie Couleur et règle la couleur tous les n pixels dans la plage de pixels indiquée.  
La sortie du bloc de couleur (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) est décompressée avec `*` (astérisque) et passée comme arguments r, g, b de `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| increment | Entrée (champ) | Pas (nombre de pixels) | entier supérieur ou égal à 1 | - |
| data | Entrée (couleur) | Bloc de la catégorie Couleur ou tableau `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Modifier d'une valeur RGB tous les n pixels {#change_range_increment_by_rgb}

Ajoute à la couleur actuelle des pixels pris tous les n la variation RGB et règle la nouvelle couleur.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| increment | Entrée (champ) | Pas de l'incrément (nombre de pixels) | entier supérieur ou égal à 1 | - |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Éteindre la couleur d'une plage tous les n pixels {#turn_off_range_increment}

Enlève la couleur de toutes les LED qui correspondent à la plage et au pas indiqués.  
La plage des numéros de LED est 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| from_idx | Entrée (champ) | Numéro du pixel de départ (commence à 1) | entier supérieur ou égal à 1 | - |
| to_idx | Entrée (champ) | Numéro du pixel d'arrivée (commence à 1) | entier supérieur ou égal à 1 | - |
| increment | Entrée (champ) | Pas de l'incrément (nombre de pixels) | entier supérieur ou égal à 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Déplacer / faire tourner {#shift}

Déplace ou fait tourner les LED dans la direction et du nombre de pixels indiqués.  
La plage des valeurs que l'on peut choisir est 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'action | déplacer(shift), faire tourner(rotate) | - |
| direction | Option de liste | Direction | gauche(left), droite(right) | - |
| pixel | Entrée (champ) | Nombre de pixels à déplacer | entier supérieur ou égal à 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Régler la luminosité {#set_brightness}

Règle la luminosité du NeoPixel.  
La plage des valeurs que l'on peut choisir est 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| value | Entrée (champ) | Luminosité | entier 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Modifier la luminosité {#change_brightness}

Modifie la luminosité du NeoPixel.  
La plage des valeurs que l'on peut choisir est -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| value | Entrée (champ) | Variation de la luminosité | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
