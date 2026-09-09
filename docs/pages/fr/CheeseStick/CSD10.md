---
title: CSD-10 Capteur ALS
---

# CSD-10 Capteur ALS

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-10 Capteur ALS (CSD10) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler le port d'entrée {#set_input_port}

Règle le port auquel le CSD10 (capteur de luminosité) est branché.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de branchement | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Valeur du capteur de luminosité {#get_input}

La valeur du capteur de luminosité sur le port choisi

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port à lire | Sa, Sb, Sc | le port du dernier `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
