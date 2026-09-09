---
title: Cheese Stick
---

# Cheese Stick

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Cheese Stick all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
# se ci sono più istanze
cheesestick_1 = CheeseStick(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare il modo di ingresso {#set_input_mode}

Imposta il modo di ingresso della porta scelta.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Opzione di elenco | Modo di ingresso | ingresso makey(makey), ingresso pulsante(button), digitale pull-up(digital_pullup), digitale pull-down(digital_pulldown), analogico(analog), tensione analogica(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Impostare l'intervallo di ingresso {#set_input_range}

Converte il valore di ingresso della porta scelta nell'intervallo minimo~massimo indicato.  
L'intervallo del valore di ingresso è 0 ~ 255.  
L'intervallo dei valori in cui si può convertire è -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Ingresso (campo) | Valore minimo di partenza | intero 0 ~ 255 | - |
| src_max | Ingresso (campo) | Valore massimo di partenza | intero 0 ~ 255 | - |
| dst_min | Ingresso (campo) | Valore minimo dopo la conversione | intero -100 ~ 100 | - |
| dst_max | Ingresso (campo) | Valore massimo dopo la conversione | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Impostare l'intervallo di ingresso con un valore intermedio {#set_input_range_median}

Converte il valore di ingresso della porta scelta nell'intervallo minimo~intermedio~massimo indicato.  
L'intervallo del valore di ingresso è 0 ~ 255.  
L'intervallo dei valori in cui si può convertire è -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Ingresso (campo) | Valore minimo di partenza | intero 0 ~ 255 | - |
| src_median | Ingresso (campo) | Valore intermedio di partenza | intero 0 ~ 255 | - |
| src_max | Ingresso (campo) | Valore massimo di partenza | intero 0 ~ 255 | - |
| dst_min | Ingresso (campo) | Valore minimo dopo la conversione | intero -100 ~ 100 | - |
| dst_median | Ingresso (campo) | Valore intermedio dopo la conversione | intero -100 ~ 100 | - |
| dst_max | Ingresso (campo) | Valore massimo dopo la conversione | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Valore di ingresso {#get_input}

Il valore di ingresso della porta scelta

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Impostare il modo di ingresso a impulso {#set_pulse_input_mode}

Imposta il modo di ingresso a impulso della porta scelta.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso a impulso | Sc, Lc | - |
| option | Opzione di elenco | Modo di pull | impulso (default), impulso (pull-up), impulso (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Valore dell'ingresso a impulso {#get_pulse_input}

Se sulla porta scelta è stato rilevato un ingresso a impulso

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di ingresso a impulso | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Impostare l'uscita digitale {#set_digital_output}

Imposta il valore dell'uscita digitale della porta indicata.  
I valori che si possono scegliere sono 0 o 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di uscita digitale | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Opzione di elenco | Valore di uscita | 0 o 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Impostare l'uscita PWM {#set_pwm_output}

Imposta il valore dell'uscita PWM della porta indicata.  
L'intervallo dei valori che si possono scegliere è 0 ~ 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di uscita PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Ingresso (campo) | Valore PWM | intero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Modificare l'uscita PWM {#change_pwm_output}

Modifica il valore dell'uscita PWM della porta indicata.  
L'intervallo dei valori che si possono scegliere è -100 ~ 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di uscita PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Ingresso (campo) | Differenza di PWM da applicare | intero -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Impostare il suono del cicalino {#sound_buzz}

Imposta il suono del cicalino di Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 0 ~ 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Suonare una nota {#sound_note}

Cheese Stick riproduce la nota indicata.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

Cheese Stick riproduce un clip audio determinato.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Disattivare il suono {#sound_off}

Spegne il suono di Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Valore dell'accelerazione {#acceleration}

Il valore dell'accelerazione di gravità su un asse determinato

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Valore del sensore di temperatura {#temperature}

Il valore del sensore di temperatura

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Se lo stato è cambiato {#state_change}

Se lo stato del robot è cambiato

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di stato | 0 ~ 7 (vedi la tabella qui sotto) | - |

| unit | Condizione |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (evento di colpetto) |
| 7 | `fall()` (evento di caduta) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
