---
title: Aperçu
---

# Aperçu

L'**aperçu** est la zone qui accompagne la programmation des robots : tu y vois l'**état de la connexion des robots** et tu y as aussi le code, la caméra, la console et plus encore.  
Ci-dessous sont décrites les fonctions que tu peux utiliser dans chaque onglet.

## État de la connexion des robots {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Dans l'onglet de l'état de la connexion des robots tu peux voir les informations des robots branchés en ce moment.   
Si tu cliques sur **Afficher la valeur du capteur en temps réel**, tu peux voir en temps réel les valeurs des capteurs du robot, sous forme de graphique ou de nombre.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Tu peux choisir le capteur à consulter ; les types de capteur pris en charge diffèrent d'un robot à l'autre.  
Selon le capteur choisi, le graphique et la façon d'afficher les données changent automatiquement pour s'adapter aux valeurs de ce capteur. 

2. Tu peux choisir à quel intervalle, en secondes, les valeurs du capteur sont consultées ou enregistrées.  
Selon l'intervalle choisi, le temps maximal pendant lequel les données peuvent être enregistrées et affichées dans le graphique change. 
3. Si tu passes la souris au-dessus du graphique du capteur, tu peux voir en même temps, en temps réel, la valeur du capteur à cet instant. 
4. Démarrer/arrêter l'enregistrement : enregistre les données du capteur. 
5. Exporter : enregistre dans des fichiers les données de capteur enregistrées (.csv) et l'écran du graphique (.png).  
Cette fonction ne peut être utilisée qu'après que tu as enregistré des données. 
6. Capturer : enregistre en temps réel l'écran du graphique actuel (.png).  
Tu peux enregistrer la variation des valeurs du capteur et enregistrer dans des fichiers les données enregistrées et l'écran du graphique.    

<br>

## Aperçu Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Dans l'aperçu Python tu peux voir en temps réel comment les blocs sont convertis en code **Python** quand tu les ajoutes ou les retires.  
En voyant en même temps comment les blocs sont convertis en code, tu apprends plus facilement la syntaxe de la programmation. 

※ L'aperçu Python n'existe que dans l'**éditeur de programmation avec blocs**.  
Dans l'éditeur de Python c'est l'utilisateur lui-même qui écrit le code, il n'y a donc pas d'aperçu.

<br>

## Caméra {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Dans l'onglet de la caméra tu peux voir en temps réel l'image d'une caméra branchée au PC.  

Cette fonction n'est activée **que si tu as ajouté au programme un module d'extension qui utilise la caméra** ; dans ce cas un module de caméra est créé dans l'onglet de la caméra.  

Dans chaque module de caméra tu peux utiliser les fonctions suivantes.
- Tu peux choisir une des caméras disponibles sur le PC et afficher son image.
- Avec le bouton **Activé / Désactivé** tu peux afficher ou arrêter l'image de la caméra.
- Tu peux changer la **résolution de la caméra**.

<br>

## Console {#console}

Dans l'onglet de la console tu peux voir en temps réel les messages de journal (Log) qui sortent pendant l'exécution du programme et les graphiques de l'oscilloscope (Scope).  
Cet onglet sert à déboguer, surveiller les valeurs des capteurs, faire des analyses à partir de graphiques et plus encore.  

### Journal {#console-log}
Avec le bloc **étiquette de journal** tu peux afficher dans la zone de journal de la console un texte ou une valeur numérique, avec l'étiquette que tu indiques.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Oscilloscope {#console-scope}

Avec le bloc **graphique** tu peux représenter des valeurs numériques, par étiquette, dans un **graphique en temps réel**.  
En réglant la valeur minimale, la valeur maximale et la couleur du graphique, tu vois visuellement la variation de la valeur qui t'intéresse. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
