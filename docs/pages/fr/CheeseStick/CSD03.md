---
title: CSD-03 Potentiomètre rotatif
---

# CSD-03 Potentiomètre rotatif

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-03 Potentiomètre rotatif (CSD03) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler le port d'entrée {#set_input_port}

Règle le port auquel le CSD03 (résistance variable) est branché.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de branchement | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Régler la plage d'entrée {#set_input_range}

Convertit la valeur d'entrée du port choisi dans la plage minimum~maximum indiquée.  
La plage de la valeur d'entrée est 0 ~ 255.  
La plage des valeurs vers lesquelles on peut convertir est -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port concerné | Sa, Sb, Sc | - |
| src_min | Entrée (champ) | Valeur minimale de départ | entier 0 ~ 255 | - |
| src_max | Entrée (champ) | Valeur maximale de départ | entier 0 ~ 255 | - |
| dst_min | Entrée (champ) | Valeur minimale après conversion | entier -100 ~ 100 | - |
| dst_max | Entrée (champ) | Valeur maximale après conversion | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Régler la plage d'entrée avec une valeur intermédiaire {#set_input_range_median}

Convertit la valeur d'entrée du port choisi dans la plage minimum~intermédiaire~maximum indiquée.  
La plage de la valeur d'entrée est 0 ~ 255.  
La plage des valeurs vers lesquelles on peut convertir est -100 ~ 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port concerné | Sa, Sb, Sc | - |
| src_min | Entrée (champ) | Valeur minimale de départ | entier 0 ~ 255 | - |
| src_median | Entrée (champ) | Valeur intermédiaire de départ | entier 0 ~ 255 | - |
| src_max | Entrée (champ) | Valeur maximale de départ | entier 0 ~ 255 | - |
| dst_min | Entrée (champ) | Valeur minimale après conversion | entier -100 ~ 100 | - |
| dst_median | Entrée (champ) | Valeur intermédiaire après conversion | entier -100 ~ 100 | - |
| dst_max | Entrée (champ) | Valeur maximale après conversion | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valeur d'entrée {#get_input}

La valeur d'entrée du potentiomètre rotatif sur le port choisi  
Si tu n'as pas réglé de plage d'entrée, la plage de la valeur est 0 ~ 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port à lire | Sa, Sb, Sc | le port du dernier `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
