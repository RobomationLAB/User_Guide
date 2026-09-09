---
title: Cheese Stick
---

# Cheese Stick

## Déclarer l'instance {#instance}

Si tu ajoutes un bloc de Cheese Stick à la zone de travail, la déclaration d'instance suivante est insérée automatiquement dans le code Python :

```python
cheesestick = CheeseStick(0)
# s'il y a plusieurs instances
cheesestick_1 = CheeseStick(1)
```

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| index | Option de liste | Numéro de l'instance (commence à 0) | entier supérieur ou égal à 0 | 0 |


## Régler le mode d'entrée {#set_input_mode}

Règle le mode d'entrée du port choisi.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Option de liste | Mode d'entrée | entrée makey(makey), entrée bouton(button), numérique pull-up(digital_pullup), numérique pull-down(digital_pulldown), analogique(analog), tension analogique(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Régler la plage d'entrée {#set_input_range}

Convertit la valeur d'entrée du port choisi dans la plage minimum~maximum indiquée.  
La plage de la valeur d'entrée est 0 ~ 255.  
La plage des valeurs vers lesquelles on peut convertir est -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrée (champ) | Valeur minimale de départ | entier 0 ~ 255 | - |
| src_max | Entrée (champ) | Valeur maximale de départ | entier 0 ~ 255 | - |
| dst_min | Entrée (champ) | Valeur minimale après conversion | entier -100 ~ 100 | - |
| dst_max | Entrée (champ) | Valeur maximale après conversion | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Régler la plage d'entrée avec une valeur intermédiaire {#set_input_range_median}

Convertit la valeur d'entrée du port choisi dans la plage minimum~intermédiaire~maximum indiquée.  
La plage de la valeur d'entrée est 0 ~ 255.  
La plage des valeurs vers lesquelles on peut convertir est -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Entrée (champ) | Valeur minimale de départ | entier 0 ~ 255 | - |
| src_median | Entrée (champ) | Valeur intermédiaire de départ | entier 0 ~ 255 | - |
| src_max | Entrée (champ) | Valeur maximale de départ | entier 0 ~ 255 | - |
| dst_min | Entrée (champ) | Valeur minimale après conversion | entier -100 ~ 100 | - |
| dst_median | Entrée (champ) | Valeur intermédiaire après conversion | entier -100 ~ 100 | - |
| dst_max | Entrée (champ) | Valeur maximale après conversion | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valeur d'entrée {#get_input}

La valeur d'entrée du port choisi

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Régler le mode d'entrée par impulsion {#set_pulse_input_mode}

Règle le mode d'entrée par impulsion du port choisi.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée par impulsion | Sc, Lc | - |
| option | Option de liste | Mode de pull | impulsion (default), impulsion (pull-up), impulsion (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Valeur de l'entrée par impulsion {#get_pulse_input}

Si une entrée par impulsion a été détectée sur le port choisi

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port d'entrée par impulsion | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Régler la sortie numérique {#set_digital_output}

Règle la valeur de la sortie numérique du port indiqué.  
Les valeurs que l'on peut choisir sont 0 ou 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de sortie numérique | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Option de liste | Valeur de sortie | 0 ou 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Régler la sortie PWM {#set_pwm_output}

Règle la valeur de la sortie PWM du port indiqué.  
La plage des valeurs que l'on peut choisir est 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de sortie PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrée (champ) | Valeur PWM | entier 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Modifier la sortie PWM {#change_pwm_output}

Modifie la valeur de la sortie PWM du port indiqué.  
La plage des valeurs que l'on peut choisir est -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Port de sortie PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Entrée (champ) | Écart de PWM à appliquer | entier -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Régler le bourdonnement {#sound_buzz}

Règle le bourdonnement de Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| hz | Entrée (bloc) | Fréquence (Hz) | décimal 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Jouer une note {#sound_note}

Cheese Stick joue la note indiquée.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| note | Option de liste | Note | Do(C), Do#(C#), Ré(D), Ré#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Option de liste | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Jouer un extrait sonore {#sound_clip}

Cheese Stick joue un extrait sonore donné.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| clip | Option de liste | Nom de l'extrait sonore | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` et d'autres | - |
| wait | Case à cocher | S'il faut attendre la fin | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Désactiver le son {#sound_off}

Éteint le son de Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Valeur de l'accélération {#acceleration}

La valeur de l'accélération de la pesanteur sur un axe donné

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Axe à lire | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Valeur du capteur de température {#temperature}

La valeur du capteur de température

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Valeur de la force du signal {#signal_strength}

La force du signal

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Tension de la batterie {#battery}

La tension de la batterie

<BlockImage module="roboids/CheeseStick" id="battery" />

### Paramètres

(aucun)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Si l'état a changé {#state_change}

Si l'état du robot a changé

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Paramètres

| Nom | Type | Description | Plage / Type | Valeur par défaut |
| --- | --- | --- | --- | --- |
| unit | Option de liste | Type d'état | 0 ~ 7 (voir le tableau ci-dessous) | - |

| unit | Condition |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (événement de tape) |
| 7 | `fall()` (événement de chute) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
