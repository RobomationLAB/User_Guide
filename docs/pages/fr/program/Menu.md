---
title: Menu supérieur
---

# Menu supérieur

Le **menu supérieur** rassemble les fonctions les plus utilisées du programme : brancher le dongle et les robots, enregistrer et ouvrir des fichiers, et d'autres.  
Ci-dessous les fonctions de chaque menu sont décrites dans l'ordre. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

C'est le logo du programme.  
Si tu cliques sur le logo, la page est rechargée. 

Quand l'**éditeur de programmation avec blocs** est actif, le texte du logo apparaît comme **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Quand l'**éditeur de Python** est actif, le texte du logo apparaît comme **Script Composer**.  

<br>

## Chercher le dongle {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Ici tu peux **chercher le dongle qui communique avec le robot et le brancher au programme**.

Pour pouvoir commander un robot dans le programme, tu dois d'abord brancher au programme le dongle qui communique avec le robot.  
Ce processus s'appelle l'**appariement**. 

Si tu cliques sur le bouton **Dongle**, la liste des dongles disponibles sur le PC apparaît.  
Choisis dans la liste le dongle que tu veux et clique sur le bouton **Connecter** : le dongle est branché au programme.  

### Vérifier l'état de la connexion du dongle {#dongle-status}

Un dongle qui a déjà été branché au programme est branché automatiquement les fois suivantes.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Quand le dongle est branché correctement au programme, l'icône devient **bleu clair**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

S'il y a dans l'onglet du navigateur une icône comme celle de l'image suivante, tu vois que le dongle est branché.  

<br>

**⚠️ Attention**  

Si le dongle est déjà branché à un autre programme ou à une autre page, il n'est pas branché à ce programme.  
Dans ce cas, cherche le programme auquel le dongle est branché, débranche-le là, reviens à cette page et essaie de le brancher de nouveau.

<br>

## Sélectionner le robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Ici tu peux **choisir le robot que tu veux utiliser** dans le programme et **enregistrer les informations de ce robot ainsi que ses blocs/codes de script**. 

Pour pouvoir commander un robot dans le programme, tu dois d'abord ajouter au programme les informations et les blocs du robot que tu veux utiliser.

<BlockImage module="program/Menu" id="robot-select" /><br>

Si tu cliques sur le bouton **Robot**, une fenêtre apparaît avec la liste des robots disponibles dans le programme.  

Choisis le robot que tu veux et clique sur le bouton **Ajouter** : les informations de ce robot et ses blocs/codes de script sont enregistrés dans le programme.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Quand un robot est ajouté, les éléments suivants sont créés. 


- **Block Composer** : dans la [**palette de blocs**](Editor#block-editor) à gauche sont créés les **blocs** propres à ce robot 
- **Script Composer** : dans la [**palette de code**](Editor#python-editor) à gauche sont créés les **codes de script** propres à ce robot

Ainsi tu peux faire bouger et commander librement le matériel réel du robot : capteurs, moteurs, LED et plus encore.  

<br>

**⚙️ Remarque**

Dans RobomationLAB tu peux brancher et utiliser autant de robots que tu veux, quels que soient leur type et leur nombre.  

Mais si tu veux brancher et utiliser plusieurs robots à la fois, il faut qu'autant de dongles que de robots à utiliser soient branchés au programme, et tu dois ajouter au programme autant de robots que tu veux utiliser.  

<br>

## Sélectionner le module d'extension {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Les modules d'extension sont des modules qui offrent des **fonctions étendues basées sur l'IA : reconnaissance vocale, reconnaissance d'images, analyse d'images et plus encore**.  
Ici tu peux **choisir le module d'extension que tu veux utiliser** dans le programme et **enregistrer les informations de ce module ainsi que ses blocs/codes de script**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Si tu cliques sur le bouton **Extension**, un écran apparaît avec la liste des modules d'extension disponibles dans le programme.  
- Reconnaissance vocale
- Détection de visage
- Détection détaillée de visage
- Expression du visage
- Détection de la main
- Détection du corps
- Détection d'objet
- Détection de couleur
- Détection de marqueur ArUco
- Conduite autonome par caméra

Si tu cliques sur le module que tu veux, les informations de ce module d'extension et ses blocs/codes de script sont enregistrés dans le programme, comme dans [**Sélectionner le robot**](#robot). 

Quand tu ajoutes au programme un module d'extension qui utilise la caméra, comme **Détection de visage** ou **Détection de la main**,  
un module de caméra est créé dans l'onglet [**Aperçu - Caméra**](Preview#camera) et tu peux brancher une caméra au programme et l'utiliser.  

Si un module d'extension que tu as choisi ne te sert plus, tu peux retirer le robot de la liste avec **clic droit → Supprimer**.

<br>

## Son {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Ici tu peux choisir des sons à utiliser dans la programmation ou ajouter au programme des sons que tu as sur ton ordinateur.

### Choisir un son {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Si tu cliques sur le bouton **Son**, un écran apparaît où tu peux choisir parmi les différents sons que le programme propose.  
Tu peux utiliser les fonctions suivantes.  
- Chercher un son
- ▶ Écouter l'aperçu du son
- Ajouter le son à la liste des sons (panneau de gauche)

### Fonctions étendues {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Si tu cliques sur le bouton d'**extension** en bas à gauche (cadre rouge) ou que tu passes la souris dessus, trois options de fonctions étendues apparaissent.  
Tu peux utiliser les fonctions suivantes.
- Ajouter un fichier local : ajoute un fichier audio qui se trouve sur l'ordinateur de l'utilisateur 
- Enregistrer un son : ajoute un son enregistré par l'utilisateur lui-même
- Ajouter un son au hasard : ajoute un son choisi au hasard dans toute la liste des sons

### Utiliser les sons dans la programmation {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Les sons ajoutés à la liste des sons (panneau de gauche) peuvent être utilisés dans la programmation.

- Dans la **programmation avec blocs** tu peux choisir le son que tu veux dans le menu déroulant du bloc **jouer le son**.  

- Dans la **programmation avec scripts** tu peux choisir le son que tu veux dans les sous-options de la fonction **« jouer le son »** de la catégorie **Codes - Audio**.  

Quand le code est exécuté, le son choisi est joué par les haut-parleurs de l'ordinateur de l'utilisateur.

<br>

## Exemple {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

S'il y a un robot ajouté au programme, tu peux ouvrir et essayer des exemples simples pour chaque robot.

### Choisir un exemple {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Si tu cliques sur le bouton Exemple, l'écran **Sélectionner un exemple** que tu vois ci-dessus apparaît.   
Avec la **répartition par catégories** et la **recherche** tu trouves rapidement l'exemple que tu veux. 

### Ouvrir un exemple {#example-load}
1. Clique sur le menu **Exemple** pour ouvrir l'écran **Sélectionner un exemple** et choisis l'exemple que tu veux. 
2. L'écran est rechargé et l'exemple apparaît dans la zone de programmation.   
3. Après avoir ouvert l'exemple, tu peux voir tout de suite ce qu'il fait en appuyant sur le **bouton d'exécution (▶)**, sans rien d'autre. 

<br>

## Édition {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


C'est la fonction avec laquelle tu peux annuler ou refaire ce que tu as fait.
- Copier (Ctrl+C) : copie les blocs ou le code sélectionnés.
- Coller (Ctrl+V) : colle dans la zone de travail les blocs ou le code copiés.
- Annuler (Ctrl+Z) : annule la dernière action.
- Rétablir (Ctrl+Y) : refait l'action annulée. 

<br>

## Fichier {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Ici tu peux gérer les fichiers : créer du code nouveau, enregistrer dans un fichier le code que tu as écrit, ouvrir des fichiers et plus encore.

- Nouveau  
Réinitialise le code sur lequel tu travailles et crée du code nouveau.

- Enregistrer le projet  
Enregistre le fichier du projet sur lequel tu travailles.  
Le fichier est enregistré dans le dossier « Téléchargements » de l'ordinateur de l'utilisateur et l'extension du fichier est « .block ».

- Exporter le code Python  
Extrait le code Python du projet sur lequel tu travailles et l'enregistre dans un fichier.  
Le fichier est enregistré dans le dossier « Téléchargements » de l'ordinateur de l'utilisateur et l'extension du fichier est « .py ».  
Le fichier enregistré peut être ouvert et exécuté dans un environnement de développement Python externe, comme VSCode.

- Ouvrir le projet  
Ouvre un fichier de projet ou un fichier de code Python qui se trouve sur l'ordinateur de l'utilisateur.  
Les extensions de fichier que l'on peut ouvrir sont « .block » et « .py ».  
Un fichier « .block » s'ouvre dans l'éditeur de programmation avec blocs et un fichier « .py » s'ouvre dans l'éditeur de Python.  
Attention : en ouvrant un fichier « .py », s'il ne correspond pas au format de code de Block Composer ou s'il contient des erreurs de syntaxe, il peut ne pas s'ouvrir correctement.

<br>

## Exécuter / arrêter le code {#run-stop}

### Exécuter (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Interprète et exécute le code à blocs ou le code de script écrit dans l'éditeur actif.  

Selon le code que tu as écrit, tu peux commander le robot branché au programme.  
Pendant que le code est en cours d'exécution, tu ne peux pas modifier le code écrit.

### Arrêter (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Arrête l'exécution du code.


<br>

## Codage IA {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Si tu cliques sur le bouton **Codage IA** du menu supérieur, le panneau du chatbot d'IA s'ouvre à droite de l'écran.  
Tu peux discuter avec le **chatbot d'IA** intégré à RobomationLAB et programmer avec l'IA.

Tu peux utiliser les fonctions suivantes.
- Tu peux poser librement des questions sur la programmation : comment écrire et modifier du code, la syntaxe, les notions et plus encore.
- **Si une erreur se produit pendant l'exécution du code**, tu peux demander à l'IA pourquoi elle s'est produite et comment la résoudre, et résoudre le problème rapidement.
- Le code que l'IA propose se copie facilement avec le bouton de copie à droite du bloc de code.
- La conversation est enregistrée et tu peux la poursuivre, et tu peux aussi commencer une **nouvelle conversation**.
- Tu peux régler la largeur du panneau en tirant son bord gauche.

<br>

## Copier le code {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Ici tu peux copier dans le presse-papiers le code écrit dans l'éditeur actif.  

### Block Composer (programmation avec blocs) {#copy-block}

C'est le code Python affiché dans l'onglet **[Aperçu Python](Preview#python-preview)** qui est copié.

### Script Composer (Python) {#copy-python}
C'est le code écrit dans l'éditeur de Python qui est copié tel quel.  

Le code copié peut être collé où tu veux avec Ctrl+V.

<br>

## Paramètres de l'éditeur {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Tu peux choisir entre **Bloc** et **Python** l'éditeur avec lequel tu veux programmer.  

Même si tu changes d'éditeur, le code que tu as écrit avant reste, et tu peux continuer à programmer à tout moment. 

**※ L'éditeur de programmation avec blocs et l'éditeur de Python se correspondent un à un : quand tu changes d'éditeur, le code que tu as écrit est converti et continue dans l'autre.**

### Éditeur de programmation avec blocs {#editor-settings-block}
Si tu choisis Bloc, le logo devient **Block Composer**.  
Les blocs que tu écris dans l'éditeur de programmation avec blocs sont convertis en temps réel en code Python, et tu peux voir le résultat de la conversion dans l'onglet **Aperçu - Aperçu Python**.  

### Éditeur de Python {#editor-settings-python}
Si tu choisis Python, le logo devient **Script Composer**.  
Le code que tu écris dans l'éditeur de Python est converti en blocs quand tu reviens à l'**éditeur de programmation avec blocs**.  

> Cependant la conversion de Python vers les blocs ne fonctionne qu'avec du code que l'on peut représenter sous forme de blocs.  
> Avec une syntaxe erronée ou du code qui ne peut pas être converti en blocs, le passage à l'éditeur de programmation avec blocs peut ne pas se faire ; dans ce cas la raison de l'échec est aussi affichée.

<br>

## Paramètres {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Ici tu peux effectuer les réglages de base du programme.

### Langue {#settings-language}
Change la langue (le pays) dans laquelle le programme est affiché.  
Tu peux choisir la langue que tu veux utiliser parmi 21 langues.

### Dongle {#settings-dongle}
- Déconnecter : débranche tous les dongles branchés au programme.
- Connecter : rebranche le dongle au programme.

### Réinitialisation {#settings-reset}
- Réinitialiser le programme : toutes les données enregistrées dans le programme (informations des robots, blocs/codes de script, réglages et plus encore) sont réinitialisées.

<br>

## Assistance {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Ici tu trouves les guides et les ressources externes dont tu as besoin pour utiliser le programme.  

- Tutoriel : propose un tutoriel pour ceux qui utilisent le programme pour la première fois.
- Aide : dans le programme tu peux voir tout de suite comment s'utilisent les blocs et le code Python, avec des exemples.
- Guide de l'utilisateur : va à la page Wiki du guide de l'utilisateur de RobomationLAB.  
Elle propose des descriptions détaillées des composants du programme et de la façon de les utiliser, ainsi que des fonctions et de la syntaxe de chaque bloc/code de script.
- Robomation Lab : va à la page principale de RobomationLAB.
- Accueil : va au site officiel de l'entreprise Robomation.
- Youtube : va à la page Youtube de Robomation.
- Boutique en ligne : va à la page de la boutique en ligne de Robomation.
- À propos : ici tu peux voir la version du programme et l'historique des mises à jour, les conditions d'utilisation, la politique de confidentialité et plus encore.
- Nous contacter : ici tu peux poser des questions que tu te poses en utilisant le programme, signaler des erreurs et plus encore.

<br>
