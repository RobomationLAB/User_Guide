---
title: CSD-09 Motore
---

# CSD-09 Motore

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di CSD-09 Motore (CSD09) all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Avviare il servomotore {#start_servo_motor}

Indica la porta su cui usare il servomotore.  
Se non indichi la porta, il motore non funziona correttamente.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del servomotore | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Impostare l'angolo del servomotore {#set_servo_motor}

Imposta l'angolo del servomotore sulla porta indicata.  
L'intervallo dei valori che si possono scegliere è 0 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del servomotore | Sa, Sb, Sc | la porta dell'ultimo `start_servo_motor` |
| value | Ingresso (campo) | Angolo di rotazione (gradi) | intero 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Variare l'angolo del servomotore {#change_servo_motor}

Varia l'angolo del servomotore sulla porta indicata.  
L'intervallo dei valori che si possono scegliere è -180 ~ 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del servomotore | Sa, Sb, Sc | la porta dell'ultimo `start_servo_motor` |
| value | Ingresso (campo) | Differenza di angolo da applicare | intero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Spegnere il servomotore {#stop_servo_motor}

Toglie l'alimentazione al servomotore sulla porta indicata.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del servomotore | Sa, Sb, Sc | la porta dell'ultimo `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Avviare il motore CC {#start_DC_motor}

Permette di comandare il motore CC usando la porta indicata.
Va chiamato una volta prima di usare gli altri blocchi del motore CC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del motore CC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Impostare la velocità del motore CC {#set_DC_motor}

Imposta il valore dell'uscita PWM del motore CC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del motore CC | Mab, Mcd | la porta dell'ultimo `start_dc_motor` |
| value | Ingresso (campo) | Valore dell'uscita PWM | intero 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Variare la velocità del motore CC {#change_DC_motor}

Somma al valore attuale dell'uscita PWM del motore CC la variazione inserita e imposta il nuovo valore.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del motore CC | Mab, Mcd | la porta dell'ultimo `start_dc_motor` |
| value | Ingresso (campo) | Differenza di PWM da applicare | intero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Arrestare il motore CC {#stop_DC_motor}

Arresta l'uscita del motore CC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta del motore CC | Mab, Mcd | la porta dell'ultimo `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Avviare il motore passo-passo {#start_step_motor}

Usa il motore passo-passo.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Impostare la modalità del motore passo-passo {#set_step_motor_mode}

Imposta la modalità con cui comandare il motore passo-passo.  
Se non imposti la modalità, per predefinizione viene usata la modalità «potenza».  
Attenzione: non devi cambiare la modalità mentre il motore passo-passo sta girando.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Modalità di funzionamento | off(spento), normale(wave_step), potenza(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Impostare la velocità del motore passo-passo {#set_step_motor_speed}

Imposta la velocità del motore passo-passo.  
L'intervallo dei valori che si possono scegliere è -1000 ~ 1000.  
Se il valore è negativo, il motore gira nel senso opposto.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| value | Ingresso (campo) | Velocità di rotazione (PPS) | intero maggiore o uguale a 0 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Ruotare il motore passo-passo {#rotate_step_motor}

Imposta il numero di impulsi di cui ruotare il motore passo-passo.  
L'intervallo dei valori che si possono scegliere è 0 ~ 65535.  
Se non hai scelto la velocità del motore passo-passo, il motore non gira.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| value | Ingresso (campo) | Numero di passi da ruotare | intero | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Variare la velocità del motore passo-passo {#change_step_motor_speed}

Varia la velocità del motore passo-passo.  
L'intervallo dei valori che si possono scegliere è -2000 ~ 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| value | Ingresso (campo) | Differenza di PPS da applicare | intero | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Arrestare il motore passo-passo {#stop_step_motor}

Arresta il motore passo-passo o gli toglie l'alimentazione.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Modo di arresto | arresta(stop), togli alimentazione(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Numero di passi accumulati {#step_motor_steps}

Restituisce il numero di passi che il motore passo-passo ha percorso fino a ora.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parametri

(nessuno)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
