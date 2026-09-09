---
title: HamsterS
---

# HamsterS

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di HamsterS all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
hamster_s = HamsterS(0)
# se ci sono più istanze
hamster_s_1 = HamsterS(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la velocità della ruota {#set_wheel_speed}

Determina la velocità delle ruote. L'intervallo della velocità è -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Velocità della ruota | intero -100 ~ 100, 0: fermo | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Avanzare di una distanza {#move_distance}

Si muove della distanza indicata alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se il valore della distanza è 0, continua a muoversi secondo la velocità attuale delle ruote.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Distanza del movimento | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità della distanza | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Muoversi per un tempo {#move_time}

Si muove per il tempo indicato alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Tempo del movimento (secondi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Ruotare sul posto {#turn_degree}

Imposta la direzione e l'angolo della rotazione sul posto.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |
| data | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Modificare la velocità della ruota {#change_speed}

Modifica la velocità delle ruote di HamsterS.  
La nuova velocità è la velocità attuale più la velocità che hai inserito.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Fermarsi {#stop}

Ferma il movimento di HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## La ruota è in movimento? {#wheel_moving}

Restituisce true se le ruote sono in movimento e false se sono ferme.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Avanzare di un passo sulla griglia {#grid_move}

Sul tabellone si muove di una casella per volta, come stabilito.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Ruotare una volta sulla griglia {#grid_turn}

Sul tabellone ruota di 90 gradi nella direzione indicata.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Ruotare attorno al portapenna {#pivot}

Quando usi il portapenna, imposta il punto di riferimento, la direzione e l'angolo della rotazione.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| base | Opzione di elenco | Punto di riferimento della rotazione | penna sinistra(left_pen), penna destra(right_pen), ruota sinistra(left_wheel), ruota destra(right_wheel) | - |
| direction | Opzione di elenco | Direzione della rotazione | avanti(forward), indietro(backward) | - |
| degree | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Disegnare un cerchio attorno al portapenna {#pivot_circle}

Quando disegni un cerchio con il portapenna, imposta il punto di riferimento, la direzione, il raggio e l'angolo della rotazione.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| base | Opzione di elenco | Punto di riferimento della rotazione | penna sinistra(left_pen), penna destra(right_pen) | - |
| direction | Opzione di elenco | Direzione della rotazione | avanti a sinistra(left_forward), indietro a sinistra(left_backward), avanti a destra(right_forward), indietro a destra(right_backward) | - |
| degree | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| radius | Ingresso (blocco) | Raggio della rotazione | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità del raggio | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Seguire la linea con il sensore {#trace_mode}

HamsterS segue con il sensore del pavimento una linea di un colore determinato.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| floor | Opzione di elenco | Sensore del pavimento da seguire | sinistra(left), destra(right), centro(center) | - |
| line | Opzione di elenco | Colore della linea | nero(black), bianco(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Passare l'intersezione e fermarsi a quella successiva {#trace_until_grid}

HamsterS si muove all'intersezione nella direzione indicata e poi continua fino a incontrare l'intersezione successiva.  
Se attivi la casella attendi, aspetta che il movimento sia finito.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione all'intersezione | gira a sinistra(left), gira a destra(right), avanti(forward), inversione a U(uturn) | - |
| line | Opzione di elenco | Colore della linea | nero(black), bianco(white) | black |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Impostare la velocità di inseguimento della linea {#set_trace_speed}

Imposta la velocità di inseguimento della linea. L'intervallo della velocità è 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità di inseguimento della linea | intero 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Impostare il guadagno di inseguimento della linea {#set_trace_gain}

Imposta di quanto cambia la direzione durante l'inseguimento della linea. L'intervallo del guadagno è 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Variazione della direzione | intero 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Interrompere l'inseguimento della linea {#stop_trace}

Termina la funzione di inseguimento della linea di HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Impostare il colore del LED {#set_led_color}

Imposta il colore del LED di HamsterS.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così. (il codice viene generato con il nome del colore, non con i valori numerici R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | - |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Impostare il colore del LED con un blocco della categoria Colore {#set_led_color_with_block}

Riceve in ingresso un blocco della categoria Colore (`[R, G, B]`) e imposta il colore del LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | - |
| data | Ingresso (colore) | Blocco della categoria Colore o array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Modificare il colore del LED di un valore RGB {#change_by_rgb}

Modifica il colore del LED di HamsterS dei valori R, G, B indicati.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | - |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Spegnere il LED {#turn_off}

Toglie il colore del LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Impostare il suono del buzzer {#sound_buzz}

Imposta il suono del buzzer di HamsterS alla frequenza indicata.  
L'intervallo delle frequenze che si possono emettere è 122,1 Hz ~ 4186,0 Hz.  
Se inserisci un valore fuori da questo intervallo, il buzzer non emette alcun suono.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 122,1 ~ 4186,0 (altrimenti 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Suonare una nota {#sound_note}

HamsterS riproduce la nota indicata.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

HamsterS riproduce un clip audio determinato.  
Se attivi la casella attendi, aspetta che la riproduzione sia finita.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Disattivare il suono {#sound_off}

Spegne il suono di HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Il suono è in riproduzione? {#sound_playing}

Restituisce true se il suono è in riproduzione e false se non lo è.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Valore della velocità della ruota {#wheel_speed}

La velocità di una ruota determinata

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Valore del sensore di prossimità {#proximity}

Il valore di un sensore di prossimità determinato

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Posizione del sensore da leggere | sinistra(left), destra(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Valore del sensore del pavimento {#floor}

Il valore di un sensore del pavimento determinato

<BlockImage module="roboids/HamsterS" id="floor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Posizione del sensore da leggere | sinistra(left), destra(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Valore dell'accelerazione di gravità {#acceleration}

Il valore dell'accelerazione di gravità su un asse determinato

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Valore del sensore di luminosità {#light}

Il valore del sensore di luminosità

<BlockImage module="roboids/HamsterS" id="light" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Valore del sensore di temperatura {#temperature}

Il valore del sensore di temperatura

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/HamsterS" id="battery" />

### Parametri

(nessuno)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Se lo stato è cambiato {#state_change}

Se lo stato del robot è cambiato

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di stato | 0 ~ 7 (vedi la tabella qui sotto) | - |

| unit | Significato | Python |
|------|------|--------|
| 0 | inclina in avanti | `acceleration('x') > 5000` |
| 1 | inclina indietro | `acceleration('x') < -5000` |
| 2 | inclina a sinistra | `acceleration('y') > 5000` |
| 3 | inclina a destra | `acceleration('y') < -5000` |
| 4 | è capovolto | `acceleration('z') > 0` |
| 5 | non è capovolto | `acceleration('z') < -3000` |
| 6 | rileva un ostacolo o una mano | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | riceve un colpetto | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Impostare il modo di ingresso della porta di I/O {#io_mode}

Imposta il modo di ingresso della porta di I/O.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| option | Opzione di elenco | Modo di I/O | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Impostare il valore di uscita della porta di I/O {#set_output}

Imposta il valore di uscita della porta di I/O indicata.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| data | Ingresso (blocco) | Valore di uscita | intero 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Modificare il valore di uscita della porta di I/O {#change_output}

Modifica il valore di uscita della porta di I/O indicata.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| data | Ingresso (blocco) | Differenza di valore di uscita da applicare | intero | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Aprire / chiudere la pinza {#gripper}

Apre o chiude la pinza di HamsterS.  
A seconda del valore di unit chiama uno dei due metodi.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | apri(open), chiudi(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Impostare l'angolo del lanciatore {#shooter}

Comanda il lanciatore impostandone l'angolo. L'intervallo dell'angolo è 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Angolo del lanciatore | intero 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Valore di ingresso della porta di I/O {#input}

Restituisce il valore di ingresso della porta di I/O di HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
