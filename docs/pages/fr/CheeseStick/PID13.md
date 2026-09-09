---
title: PID-13 Joystick et bouton
---

# PID-13 Joystick et bouton

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de PID-13 Joystick et bouton (PID13) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Démarrer le joystick {#start}

Utilise le joystick et les boutons.

<BlockImage module="CheeseStick/PID13" id="start" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Valeur du joystick {#joystick}

La valeur x / y du joystick.  
La plage de chaque valeur est -128 ~ 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Valeur d'entrée du bouton {#button_input}

L'état d'entrée du bouton choisi  
Renvoie 1 si le bouton est pressé et 0 sinon.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom du bouton | bouton A(a), bouton B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Le bouton a-t-il été cliqué ? {#button_click}

Si le bouton choisi a été cliqué  
Ce bloc ne renvoie vrai qu'au moment où le bouton choisi est cliqué ; dans les autres cas il renvoie faux.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom du bouton | bouton A(a), bouton B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
