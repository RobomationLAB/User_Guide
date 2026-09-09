---
title: Beagle
---

# Beagle

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Beagle all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
beagle = Beagle(0)
# se ci sono più istanze
beagle_1 = Beagle(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la velocità della ruota {#set_wheel_speed}

Determina la velocità delle ruote. L'intervallo della velocità è -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Velocità della ruota | intero -100 ~ 100, 0: fermo | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Muovere di una distanza {#move_distance}

Si muove della distanza indicata alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se il valore della distanza è 0, continua a muoversi secondo la velocità attuale delle ruote.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Distanza del movimento | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità della distanza | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Muovere per un tempo {#move_time}

Si muove per il tempo indicato alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Tempo del movimento (secondi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Ruotare sul posto {#turn_degree}

Imposta la direzione e l'angolo della rotazione sul posto.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |
| data | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Modificare la velocità della ruota {#change_speed}

Modifica la velocità delle ruote di Beagle.  
La nuova velocità è la velocità attuale più la velocità che hai inserito.  
La velocità delle ruote appena impostata viene limitata all'intervallo -100 ~ 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Fermarsi {#stop}

Ferma il movimento di Beagle.  
Le velocità di entrambe le ruote di Beagle vengono azzerate.

<BlockImage module="roboids/Beagle" id="stop" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## La ruota è in movimento? {#wheel_moving}

Restituisce true se le ruote sono in movimento e false se sono ferme.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Impostare il suono del buzzer {#sound_buzz}

Imposta il suono del buzzer di Beagle alla frequenza indicata.  
L'intervallo delle frequenze che si possono emettere è 27,5 Hz ~ 6553,5 Hz.  
Se inserisci un valore fuori da questo intervallo, il buzzer non emette alcun suono.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 0, 27,5 ~ 6553,5 (altrimenti 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Riprodurre una nota {#sound_note}

Beagle riproduce la nota indicata.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

Beagle riproduce un clip audio determinato.  
Se attivi la casella attendi, aspetta che la riproduzione sia finita.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Disattivare il suono {#sound_off}

Spegne il suono di Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Il suono è in riproduzione? {#sound_playing}

Restituisce true se il suono è in riproduzione e false se non lo è.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Valore della velocità della ruota {#wheel_speed}

La velocità di una ruota determinata

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Valore dell'encoder {#encoder}

Il valore dell'encoder di una ruota determinata

<BlockImage module="roboids/Beagle" id="encoder" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Valore del giroscopio {#gyroscope}

Il valore del giroscopio su un asse determinato

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Valore dell'accelerometro {#accelerometer}

Il valore dell'accelerometro su un asse determinato

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Valore del magnetometro {#magnetometer}

Il valore del magnetometro su un asse determinato

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Valore del sensore di temperatura {#temperature}

Il valore del sensore di temperatura

<BlockImage module="roboids/Beagle" id="temperature" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/Beagle" id="battery" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Se lo stato è cambiato {#state_change}

Se lo stato del robot è cambiato

<BlockImage module="roboids/Beagle" id="state_change" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di stato | 0 ~ 5 (vedi la tabella qui sotto) | - |

| unit | Condizione |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Avviare / arrestare il lidar {#lidar_power}

Attiva o disattiva il sensore lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| on | Opzione di elenco | Lidar ON / OFF | avvia(on=True), arresta(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Valore della distanza dall'oggetto n del lidar {#lidar_value}

Il sensore lidar può misurare la distanza dagli oggetti su 360 gradi attorno al robot.  
Partendo dalla parte anteriore di Beagle (valore numero 0), il numero cresce di 1 procedendo in senso antiorario.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Ingresso (campo) | Numero dell'oggetto (da 0) | intero maggiore o uguale a 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Valore della distanza per direzione del lidar {#lidar_directions}

Indica le distanze misurate dal sensore lidar davanti, dietro, sui due lati e in diagonale.  
Restituisce la media dei valori di distanza nei 45 gradi a sinistra e a destra di quella direzione.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione da misurare | avanti(front), avanti a sinistra(left front), sinistra(left), indietro a sinistra(left back), indietro(back), indietro a destra(right back), destra(right), avanti a destra(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Il lidar è pronto? {#lidar_state}

Restituisce **vero (True) / falso (False)** a seconda che il lidar sia acceso o no.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parametri

(nessuno)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
