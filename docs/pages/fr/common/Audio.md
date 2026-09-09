---
title: Audio
---

# Audio

Avec les blocs audio tu peux jouer toutes sortes d'effets sonores et de voix.


## Jouer un son {#play_sound}

Joue le son que tu veux au **volume** indiqué.  
Si tu coches la case **répéter**, le son choisi est joué en continu.

<BlockImage module="common/audio" id="play_sound" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom du clip audio | noms des clips de la bibliothèque de sons | - |
| volume | Entrée (champ) | Volume | entier 0 ~ 100 | 100 |
| repeat | Case à cocher | S'il faut répéter la lecture | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Régler la langue et la voix {#set_tts}

Règle la **langue** et la **voix** avec lesquelles le **TTS** est joué.  
En choisissant parmi les différentes langues et voix tu peux obtenir une prononciation plus naturelle.

<BlockImage module="common/audio" id="set_tts" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| lang | Option de liste | Code de la langue | codes de langue TTS des 21 langues prises en charge par le programme (p. ex. `'ko-KR'`, `'en-US'`) | - |
| voice | Option de liste | Nom de la voix | noms des voix TTS du système (p. ex. `'Google français'`) | - |

### Python
```python
Utils.set_tts('fr-FR', '')
```

## Dire un texte {#speak}

Transforme en son le texte saisi et le prononce.

<BlockImage module="common/audio" id="speak" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| text | Entrée | Le texte à prononcer | texte | - |

### Python
```python
Utils.speak('Bonjour')
```
