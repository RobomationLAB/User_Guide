---
title: CSD-07 Capteur de son
---

# CSD-07 Capteur de son

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de CSD-07 Capteur de son (CSD07) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler le port d'entrée {#set_input_port}

Règle le port auquel le CSD07 (capteur de son) est branché.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de branchement | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Valeur du capteur de son {#get_input}

La valeur du capteur de son sur le port choisi

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port à lire | Sa, Sb, Sc | le port du dernier `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
