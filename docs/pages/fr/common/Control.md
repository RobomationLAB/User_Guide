---
title: Contrôle
---

# Contrôle

Dans la programmation avec blocs, les **blocs de contrôle** servent à gérer le déroulement du programme.  
Avec ces blocs tu peux attendre un certain temps, détecter l'appui sur les touches, écrire dans le journal et plus encore.


## Attendre {#wait_sec}

Attend pendant le temps indiqué (en secondes) puis exécute l'instruction suivante.

<BlockImage module="common/control" id="wait_sec" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| sec | Entrée (champ) | Temps d'attente — **nombre littéral** (p. ex. `Utils.wait(0.5)`) | décimal supérieur ou égal à 0 | - |
| sec | Entrée (bloc) | Temps d'attente — **variable/expression** (p. ex. `Utils.wait(time)`) | décimal supérieur ou égal à 0 | - |

### Python
```python
# field sec = 2 → tel quel (en secondes)
Utils.wait(2)

# avec une variable en entrée
Utils.wait(myVar)
```

## Attendre une image {#wait_1msec}

Arrête l'exécution du programme pendant une image (environ 0,001 seconde).

<BlockImage module="common/control" id="wait_1msec" />

### Paramètres

(aucun — fixé à 0,001 seconde)

### Python
```python
Utils.wait(0.001)
```

<!--
## Attendre indéfiniment {#wait_forever}

Arrête l'exécution du programme et attend indéfiniment.

### Paramètres

(aucun)

### Python
```python
Utils.wait_forever()
```
-->

## Touche pressée {#key_pressed}

Renvoie **vrai (True) / faux (False)** selon qu'une touche donnée est pressée ou non.

<BlockImage module="common/control" id="key_pressed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| key | Entrée | Nom de la touche | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Écrire dans le journal {#log}

Affiche en temps réel la valeur d'une variable ou d'une propriété dans la fenêtre **Console**.

<BlockImage module="common/control" id="log" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| data | Entrée | La valeur à afficher | n'importe quelle valeur | - |
| tag | Entrée | Étiquette du journal | texte | - |
| unit | Entrée | Indication de l'unité | texte | - |

### Python
```python
Utils.log(data, '', '')
```

## Afficher un graphique {#scope}

Affiche la variation d'une valeur sous forme de graphique en temps réel dans la fenêtre du **graphique**.  
Tu peux régler la couleur, les valeurs minimale et maximale et l'intervalle du graphique.

<BlockImage module="common/control" id="scope" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| signal | Entrée (bloc) | Valeur du signal du graphique | décimal | - |
| name | Entrée | Nom du graphique | texte | - |
| min_val | Entrée (champ) | Valeur minimale du graphique | décimal | - |
| max_val | Entrée (champ) | Valeur maximale du graphique | décimal | - |
| color | Couleur | Couleur du graphique (hex) | texte hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
