---
title: RaccoonBot
---

# RaccoonBot

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di RaccoonBot all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
raccoon = RaccoonBot(0)
# se ci sono più istanze
raccoon_1 = RaccoonBot(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Accendere / spegnere il motore dell'articolazione {#motor}

Decide se rilasciare o mantenere il controllo applicato a ogni motore di articolazione.  
Se non lo imposti, si parte con il controllo dei motori di tutte le articolazioni acceso.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Numero dell'articolazione | tutte le articolazioni(-1), n. 1(1), n. 2(2), n. 3(3), n. 4(4) | -1 |
| on | Casella di controllo | Controllo del motore ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tutte le articolazioni, controllo del motore spento
raccoon.motor(-1, False)

# articolazione n. 1, controllo del motore acceso
raccoon.motor(1, True)
```

## Impostare la velocità dell'articolazione {#speed_joint}

Imposta la velocità dell'articolazione scelta.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| joint | Opzione di elenco | Numero dell'articolazione | tutte le articolazioni(-1), n. 1(1), n. 2(2), n. 3(3), n. 4(4) | - |
| data | Ingresso (blocco) | Velocità dell'articolazione | intero -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Cambiare la velocità dell'articolazione {#change_speed_joint}

Cambia la velocità dell'articolazione scelta.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| joint | Opzione di elenco | Numero dell'articolazione | tutte le articolazioni(-1), n. 1(1), n. 2(2), n. 3(3), n. 4(4) | - |
| data | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Impostare in una volta la velocità delle articolazioni {#speed_joints}

Imposta in una volta la velocità delle quattro articolazioni.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (array) | Array con le velocità delle 4 articolazioni | `[joint1, joint2, joint3, joint4]`, ognuna -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# array letterale [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# array in una variabile
raccoon.set_speed_joints(*arr)
```

## Impostare la velocità del controllo angolare delle articolazioni {#angle_speed}

Imposta la velocità con cui le articolazioni sono comandate nel modo di controllo angolare.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità massima del controllo angolare | intero 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Impostare l'angolo dell'articolazione {#angle_joint}

Imposta l'angolo dell'articolazione scelta.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| joint | Opzione di elenco | Numero dell'articolazione | tutte le articolazioni(-1), n. 1(1), n. 2(2), n. 3(3), n. 4(4) | - |
| data | Ingresso (blocco) | Angolo dell'articolazione (gradi) | vedi la tabella sopra (viene limitato automaticamente) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Cambiare l'angolo dell'articolazione {#change_angle_joint}

Cambia l'angolo dell'articolazione scelta.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| joint | Opzione di elenco | Numero dell'articolazione | tutte le articolazioni(-1), n. 1(1), n. 2(2), n. 3(3), n. 4(4) | - |
| data | Ingresso (blocco) | Differenza di angolo da applicare (gradi) | vedi la tabella sopra (viene limitato automaticamente) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Impostare in una volta gli angoli delle articolazioni {#angle_joints}

Imposta in una volta l'angolo delle quattro articolazioni.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (array) | Array con gli angoli delle 4 articolazioni o nome di una posa | array `[j1, j2, j3, j4]` | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# array esplicito
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Inizializzare lo stato delle articolazioni {#default_angle_joints}

Imposta l'angolo delle quattro articolazioni su una posa predefinita (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Elenco | Nome della posa | `'zero'` / `'park'` / `'home'` | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

Pose preimpostate:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# posa preimpostata
raccoon.set_angle_joints('home', wait=True)
```

## Salvare gli angoli delle articolazioni {#save_encoder}

Salva i valori attuali dell'encoder in una variabile qualsiasi.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| encoder | Variabile | Nome della variabile in cui salvare | variabile | - |
| data | Ingresso (array) | Array iniziale da salvare | array di 4 elementi o array vuoto | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Impostare una coordinata determinata {#set_coordinate}

Muove il braccio robotico impostando il valore di una coordinata determinata.  
Gli intervalli delle coordinate sono i seguenti.  
Rispetto al polso => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Rispetto alla pinza => l'intervallo può cambiare a seconda del dispositivo collegato.  
L'orientamento della pinza è fisso in orizzontale o in verticale rispetto al suolo.  
Se inserisci una coordinata a cui non si può arrivare, il comando viene saltato.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| origin | Opzione di elenco | Punto di riferimento | polso(wrist), organo terminale(end_effector) | - |
| pos | Opzione di elenco | Asse | x, y, z | - |
| data | Ingresso (blocco) | Valore della coordinata | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Opzione di elenco | Unità | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# impostare la coordinata x a 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# coordinata z rispetto a end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Cambiare una coordinata determinata {#change_coordinate}

Muove il braccio robotico cambiando il valore di una coordinata determinata rispetto alla posizione attuale.  
Gli intervalli delle coordinate sono i seguenti.  
Rispetto al polso => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
Rispetto alla pinza => l'intervallo può cambiare a seconda del dispositivo collegato.  
L'orientamento della pinza è fisso in orizzontale o in verticale rispetto al suolo.  
Se inserisci una coordinata a cui non si può arrivare, il comando viene saltato.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| origin | Opzione di elenco | Punto di riferimento | polso(wrist), organo terminale(end_effector) | - |
| pos | Opzione di elenco | Asse | x, y, z | - |
| data | Ingresso (blocco) | Differenza di coordinata da applicare | decimale | - |
| unit | Opzione di elenco | Unità | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Muoversi a una coordinata xyz {#set_coordinates}

Imposta in una volta le coordinate x, y e z sui valori indicati.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| origin | Opzione di elenco | Punto di riferimento | polso(wrist), organo terminale(end_effector) | - |
| x | Ingresso (blocco) | Coordinata x | decimale | - |
| y | Ingresso (blocco) | Coordinata y | decimale | - |
| z | Ingresso (blocco) | Coordinata z | decimale | - |
| unit | Opzione di elenco | Unità | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Impostare il blocco dell'organo terminale {#lock}

Imposta l'orientamento in cui la pinza è bloccata. Dopo che l'opzione è impostata su orizzontale o verticale, non puoi più comandare la velocità né l'angolo dell'articolazione 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| mode | Opzione di elenco | Orientamento del blocco | nessuno(none), orizzontale(horizontal), verticale(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Prendere / posare un oggetto con l'organo terminale {#end_effector}

Prende o posa un oggetto con l'organo terminale.  
A seconda del valore del menu a tendina unit chiama uno dei due metodi.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | prendi (chiudi)(pick), posa (apri)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Dispositivo dell'organo terminale {#end_effector_device}

Il numero della pinza collegata in questo momento  
(1, 3, 4: pinza a morsetto, 2: pinza a vuoto)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Stato dell'organo terminale {#end_effector_status}

Lo stato in cui la pinza tiene un oggetto  
(0: ha posato, 1: ha preso)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Suonare una nota {#sound_note}

RaccoonBot riproduce la nota indicata.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

RaccoonBot riproduce un clip audio determinato.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Disattivare l'audio {#sound_off}

Spegne l'audio di RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Valore dell'encoder {#encoder}

Il valore dell'encoder dell'articolazione scelta

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| joint | Opzione di elenco | Numero dell'articolazione (o tutte le articolazioni) | 1, 2, 3, 4, tutte le articolazioni(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# tutte le articolazioni
raccoon.encoder(-1)
```

## Coordinata dell'elemento scelto {#coordinate}

Restituisce le coordinate xyz attuali del punto di riferimento.  
Se ometti `pos` restituisce l'array completo `[x, y, z]`; se lo indichi restituisce solo il valore di quell'asse.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| origin | Opzione di elenco | Punto di riferimento | polso(wrist), organo terminale(end_effector) | wrist |
| pos | Opzione di elenco | Asse (o tutti) | x, y, z, tutti (se omesso restituisce l'array completo) | None (tutti) |

### Python
```python
raccoon = RaccoonBot(0)

# un asse determinato
raccoon.get_coordinates('wrist', 'x')

# tutti (array di 3 elementi)
raccoon.get_coordinates('wrist')
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Il pulsante è premuto? {#button}

Se il pulsante scelto è premuto oppure se si è verificato un evento di clic

<BlockImage module="roboids/Raccoon4" id="button" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Nome del pulsante | teach(teach), play(play), power(power), delete(delete), qualunque pulsante(any) | - |
| event | Opzione di elenco | Tipo di evento | premuto(pressed), clic(click), clic prolungato(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Impostare la velocità del nastro trasportatore {#conveyor_speed}

Imposta la velocità del nastro trasportatore. L'intervallo della velocità è -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità del nastro trasportatore | intero -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Impostare la distanza del nastro trasportatore {#conveyor_distance}

Sposta il nastro trasportatore di una distanza determinata.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Distanza dello spostamento | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità della distanza | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Variare la velocità del nastro trasportatore {#change_conveyor_speed}

Varia la velocità del nastro trasportatore.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Arrestare il nastro trasportatore {#stop_conveyor}

Arresta il nastro trasportatore.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Il nastro trasportatore è in movimento? {#conveyor_running}

Se il nastro trasportatore è in funzione

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parametri

(nessuno)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Il pulsante del nastro trasportatore è premuto? {#conveyor_button}

Se il pulsante del nastro trasportatore è premuto oppure se si è verificato un evento di clic

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| event | Opzione di elenco | Tipo di evento | premuto(pressed), cliccato(click), cliccato a lungo(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
