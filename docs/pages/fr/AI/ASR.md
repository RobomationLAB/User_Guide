---
title: Reconnaissance vocale
---

# Reconnaissance vocale

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Reconnaissance vocale (ASR) à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
asr = ASR(0)
# s'il y a plusieurs instances
asr_1 = ASR(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler la langue {#lang}

Règle la langue de la reconnaissance vocale. Même si tu ne la règles pas, elle est réglée automatiquement.

<BlockImage module="AI/ASR" id="lang" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Code de la langue de reconnaissance | codes des 21 langues prises en charge par le programme (p. ex. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('fr-FR')
```

## Démarrer / arrêter la reconnaissance vocale {#listen}

Démarre ou arrête la reconnaissance vocale.

<BlockImage module="AI/ASR" id="listen" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Action | démarrer(start), arrêter(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Résultat de la reconnaissance vocale {#result}

Le résultat de la reconnaissance vocale

<BlockImage module="AI/ASR" id="result" />

### Paramètres

(aucun)

### Python
```python
asr = ASR(0)

asr.result()
```

## La reconnaissance vocale est-elle en cours ? {#state}

Renvoie **vrai (True) / faux (False)** selon que la reconnaissance vocale est active ou non.

<BlockImage module="AI/ASR" id="state" />

### Paramètres

(aucun)

### Python
```python
asr = ASR(0)

asr.is_active()
```
