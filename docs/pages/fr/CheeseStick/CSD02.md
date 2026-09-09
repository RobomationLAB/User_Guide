---
title: CSD-02 LED RGB
---

# CSD-02 LED RGB

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-02 LED RGB (CSD02) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Démarrer la LED RGB {#start}

Commence à utiliser la LED RGB.  
Si tu n'ajoutes pas ce bloc, la LED RGB n'est pas activée.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Régler la couleur {#set_color}

Règle la couleur de la LED du CSD02 sur la couleur indiquée.  
Si tu choisis une couleur dans la palette de couleurs, elle est convertie en **nom de couleur** (texte en anglais) et appelée ainsi. (le code est généré avec le nom de la couleur, pas avec les valeurs numériques R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| color | Couleur | Choix dans la palette de couleurs → converti en nom de couleur (en anglais) | noms de couleurs : `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Régler la couleur avec un bloc de la catégorie Couleur {#set_color_with_block}

Reçoit en entrée un bloc de la catégorie Couleur (par exemple un tableau `[R, G, B]`) et règle la couleur de la LED du CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée (couleur) | Sortie d'un bloc de la catégorie Couleur ou tableau `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Changer la couleur d'une valeur RGB {#change_by_rgb}

Ajoute à la couleur actuelle de la LED les variations R, G, B saisies et règle la nouvelle couleur.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| r | Entrée (champ) | Variation du rouge | entier -255 ~ 255 | 0 |
| g | Entrée (champ) | Variation du vert | entier -255 ~ 255 | 0 |
| b | Entrée (champ) | Variation du bleu | entier -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Éteindre la LED {#turn_off}

Enlève la couleur de la LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
