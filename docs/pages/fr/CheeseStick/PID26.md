---
title: PID-26 Capteur d'environnement
---

# PID-26 Capteur d'environnement

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de PID-26 Capteur d'environnement (PID26) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Démarrer le capteur d'environnement {#start}

Utilise le capteur d'environnement PID-26.

<BlockImage module="CheeseStick/PID26" id="start" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Température {#temperature}

Renvoie la température mesurée par le capteur d'environnement PID26. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Humidité {#humidity}

Renvoie l'humidité mesurée par le capteur d'environnement PID26.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Pression {#pressure}

Renvoie la pression atmosphérique mesurée par le capteur d'environnement PID26.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
