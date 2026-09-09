---
title: CSD-01 Bouton tactile
---

# CSD-01 Bouton tactile

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-01 Bouton tactile (CSD01) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler le port d'entrée {#set_input_port}

Règle le port auquel le CSD01 (Tact Switch) est branché.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de branchement | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Valeur d'entrée du bouton {#button_input}

La valeur d'entrée du bouton sur le port choisi  
Renvoie 0 si le bouton est pressé et 1 sinon.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port à lire | Sa, Sb, Sc | le port du dernier `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Le bouton est-il pressé ? {#button_pressed}

Si le bouton de l'interrupteur branché au port choisi est pressé

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port à lire | Sa, Sb, Sc | le port du dernier `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
