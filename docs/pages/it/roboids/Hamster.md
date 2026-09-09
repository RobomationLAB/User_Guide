---
title: Hamster
---

# Hamster

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Hamster all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
hamster = Hamster(0)
# se ci sono più istanze
hamster_1 = Hamster(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la velocità della ruota {#set_wheel_speed}

Determina la velocità delle ruote. L'intervallo della velocità è -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Velocità della ruota | intero -100 ~ 100, 0: fermo | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Muovere per un tempo {#move_time}

Si muove per il tempo indicato alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Tempo del movimento (secondi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Modificare la velocità della ruota {#change_speed}

Modifica la velocità delle ruote di Hamster.  
La nuova velocità è la velocità attuale più la velocità che hai inserito.  
La velocità delle ruote appena impostata viene limitata all'intervallo -100 ~ 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Fermarsi {#stop}

Ferma il movimento di Hamster.  
Le velocità di entrambe le ruote di Hamster vengono azzerate.

<BlockImage module="roboids/Hamster" id="stop" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Avanzare di un passo sulla griglia {#grid_move}

Sul tabellone si muove di una casella per volta, come stabilito.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Girare una volta sulla griglia {#grid_turn}

Sul tabellone ruota di 90 gradi nella direzione indicata.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Seguire la linea con il sensore {#trace_mode}

Hamster segue con il sensore del pavimento una linea di un colore determinato.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| floor | Opzione di elenco | Sensore del pavimento da seguire | sinistra(left), destra(right), centro(center) | - |
| line | Opzione di elenco | Colore della linea | nero(black), bianco(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Passare l'incrocio e fermarsi a quello successivo {#trace_until_grid}

Hamster si muove all'incrocio nella direzione indicata e poi continua fino a incontrare l'incrocio successivo.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione all'incrocio | sinistra(left), destra(right), avanti(forward), inversione a U(uturn) | - |
| line | Opzione di elenco | Colore della linea | nero(black), bianco(white) | black |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Impostare la velocità di tracciamento della linea {#set_trace_speed}

Imposta la velocità di tracciamento della linea. L'intervallo della velocità è 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità di tracciamento della linea | intero 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Interrompere il tracciamento della linea {#stop_trace}

Termina la funzione di tracciamento della linea di Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Impostare il colore del LED {#set_led_color}

Imposta il colore del LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | - |
| color | Opzione di elenco | Colore | nero(black), blu(blue), verde(green), ciano(cyan), rosso(red), magenta(magenta), giallo(yellow), bianco(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Spegnere il LED {#turn_off}

Toglie il colore del LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | LED da comandare | sinistro(left), destro(right), entrambi(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Impostare la frequenza del buzzer {#sound_buzz}

Imposta il buzzer di Hamster alla frequenza indicata.  
L'intervallo delle frequenze che si possono emettere è 1,0 Hz ~ 6553,5 Hz.  
Se inserisci un valore fuori da questo intervallo, il buzzer non emette alcun suono.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Suonare una nota {#sound_note}

Hamster riproduce la nota indicata.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Disattivare il suono {#sound_off}

Spegne il suono di Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Valore della velocità della ruota {#wheel_speed}

La velocità di una ruota determinata

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Valore del sensore di prossimità {#proximity}

Il valore di un sensore di prossimità determinato

<BlockImage module="roboids/Hamster" id="proximity" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Posizione del sensore da leggere | sinistra(left), destra(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Valore del sensore del pavimento {#floor}

Il valore di un sensore del pavimento determinato

<BlockImage module="roboids/Hamster" id="floor" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Posizione del sensore da leggere | sinistra(left), destra(right), centro(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Valore dell'accelerazione di gravità {#acceleration}

Il valore dell'accelerazione di gravità su un asse determinato

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Valore del sensore di luminosità {#light}

Il valore del sensore di luminosità

<BlockImage module="roboids/Hamster" id="light" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Valore del sensore di temperatura {#temperature}

Il valore del sensore di temperatura

<BlockImage module="roboids/Hamster" id="temperature" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Valore dell'intensità del segnale {#signal_strength}

L'intensità del segnale

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/Hamster" id="battery" />

### Parametri

(nessuno)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Se lo stato è cambiato {#state_change}

Se lo stato del robot è cambiato

<BlockImage module="roboids/Hamster" id="state_change" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di stato | 0 ~ 6 (vedi la tabella qui sotto) | - |

| unit | Condizione |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Impostare il modo di ingresso della porta di I/O {#io_mode}

Imposta il modo di ingresso della porta di I/O.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| option | Opzione di elenco | Modo di I/O | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Impostare il valore di uscita della porta di I/O {#set_output}

Imposta il valore di uscita della porta di I/O indicata.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| data | Ingresso (blocco) | Valore di uscita | intero 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Cambiare il valore di uscita della porta di I/O {#change_output}

Cambia il valore di uscita della porta di I/O indicata.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b, entrambe(both) | - |
| data | Ingresso (blocco) | Differenza di valore di uscita da applicare | intero | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Aprire / chiudere la pinza {#gripper}

Apre o chiude la pinza di Hamster.  
A seconda del valore di unit chiama uno dei due metodi.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Azione | chiudi(close), apri(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Impostare l'angolo del lanciatore {#shooter}

Comanda il lanciatore impostandone l'angolo. L'intervallo dell'angolo è 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Angolo del lanciatore | intero 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Valore di ingresso della porta di I/O {#input}

Restituisce il valore di ingresso della porta di I/O di Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Porta di I/O | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
