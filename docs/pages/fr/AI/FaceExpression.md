---
title: Expression du visage
---

# Expression du visage

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc d'Expression du visage (FaceExpression) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
face_expression = FaceExpression(0)
# s'il y a plusieurs instances
face_expression_1 = FaceExpression(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Choisir la caméra {#device}

Règle la caméra pour la reconnaissance de l'âge, du genre et de l'expression.

<BlockImage module="AI/FaceExpression" id="device" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Nom de la caméra | étiquettes des caméras du système | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Charger le modèle {#load_model}

Charge le modèle entraîné de l'âge, du genre et de l'expression. Cette opération est indispensable pour pouvoir utiliser les fonctions du module « Expression du visage ».

<BlockImage module="AI/FaceExpression" id="load_model" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| wait | Case à cocher | S'il faut attendre la fin du chargement | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Détecter une fois {#detect_once}

Analyse le visage présent dans l'image actuelle et affiche une seule fois l'âge, le genre et l'expression prédits.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Démarrer / arrêter la détection continue {#detect_continuous}

Analyse en continu le visage présent dans l'image actuelle et affiche à l'écran l'âge, le genre et l'expression prédits.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Afficher le résultat de la détection {#display}

Décide s'il faut afficher ou non le résultat de la reconnaissance de l'âge, du genre et de l'expression sur l'image de la caméra.

<BlockImage module="AI/FaceExpression" id="display" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| on | Option de liste | Affichage ON / OFF | afficher(on=True), masquer(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Âge {#age}

L'âge

<BlockImage module="AI/FaceExpression" id="age" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```


## Genre {#gender}

Le genre

<BlockImage module="AI/FaceExpression" id="gender" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```


## Expression {#expression}

L'expression

<BlockImage module="AI/FaceExpression" id="expression" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```


## Si le genre est détecté {#gender_detected}

Si le genre a été reconnu

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```


## Est-ce un genre donné ? {#gender_check}

Renvoie **vrai (True) / faux (False)** selon que le genre reconnu correspond ou non à la valeur indiquée.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Genre | homme(male), femme(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```


## Confiance du genre {#gender_confidence}

La probabilité (confiance) que ce soit le genre choisi

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Genre | homme(male), femme(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```


## Si l'expression est détectée {#expression_detected}

Si l'expression a été reconnue

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```


## Est-ce une expression donnée ? {#expression_check}

Renvoie **vrai (True) / faux (False)** selon que l'expression reconnue correspond ou non à la valeur indiquée.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Expression | en colère(angry), dégoûté(disgusted), effrayé(fearful), joyeux(happy), neutre(neutral), triste(sad), surpris(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```


## Confiance de l'expression {#expression_confidence}

La probabilité (confiance) que ce soit l'expression choisie

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Expression | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```


## État du modèle {#model_state}

Renvoie l'état de chargement du modèle de l'âge, du genre et de l'expression.  
Renvoie 0 s'il n'est pas encore chargé, 1 si le chargement est en cours et 2 si le chargement est terminé.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Paramètres

(aucun)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
