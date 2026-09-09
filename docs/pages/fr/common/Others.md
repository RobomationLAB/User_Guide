---
title: Autres
---

# Autres

Dans la programmation avec blocs, les **blocs autres** sont du code qui n'a pas d'effet sur le fonctionnement du robot.  
Avec ces blocs tu peux insérer un commentaire ou arrêter l'exécution du code.  

## Commentaire sur une ligne {#comment}

Avec le bloc **commentaire sur une ligne** tu peux ajouter une **explication** sans influer sur l'exécution du code.  
Les commentaires rendent le code plus lisible et plus facile à maintenir.

<BlockImage module="common/others" id="comment" />

### Python
```python
# texte du commentaire
```

## Commentaire multiligne {#long_comment}

Avec le bloc **commentaire multiligne** tu peux saisir d'un coup un commentaire de plusieurs lignes.  
Le signe de commentaire est ajouté automatiquement à chaque ligne et les lignes vides restent telles quelles.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
première ligne
deuxième ligne

quatrième ligne
"""
```

## Lien {#link}

Avec le bloc **lier** tu peux ajouter, sous forme de **commentaire**, le **lien de la page** que tu veux ouvrir.  
Si tu cliques sur le bouton **ouvrir**, tu vas à la page du lien saisi.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Sortir {#exit}

Le bloc **sortir** arrête immédiatement l'exécution du code dans le programme.  
C'est utile quand tu veux ajouter un arrêt forcé lorsqu'une condition donnée est remplie.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
