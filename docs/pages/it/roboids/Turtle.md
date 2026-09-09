---
title: Turtle
---

# Turtle

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Turtle all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
turtle = Turtle(0)
# se ci sono più istanze
turtle_1 = Turtle(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la velocità della ruota {#set_wheel_speed}

Determina la velocità delle ruote. L'intervallo della velocità è -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Velocità della ruota | intero -100 ~ 100, 0: fermo | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Avanzare di una distanza {#move_distance}

Imposta la distanza da percorrere.  
Se non hai impostato la velocità delle ruote, non si muove.  
Se il valore della distanza è 0, continua a muoversi secondo la velocità attuale delle ruote.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Distanza del movimento | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità della distanza | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Muoversi per un tempo {#move_time}

Si muove per il tempo indicato alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Tempo del movimento (secondi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Girare sul posto {#turn_degree}

Imposta la direzione e l'angolo della rotazione sul posto.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |
| data | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Cambiare la velocità della ruota {#change_speed}

Cambia la velocità delle ruote di Turtle.  
La nuova velocità è la velocità attuale più la velocità che hai inserito.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Fermarsi {#stop}

Ferma il movimento di Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## La ruota è in movimento? {#wheel_moving}

Restituisce true se le ruote sono in movimento e false se sono ferme.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Ruotare attorno alla ruota {#pivot}

Imposta il punto di riferimento, la direzione e l'angolo della rotazione.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| base | Opzione di elenco | Ruota di riferimento della rotazione | ruota sinistra(left_wheel), ruota destra(right_wheel) | - |
| direction | Opzione di elenco | Direzione della rotazione | avanti(forward), indietro(backward) | - |
| data | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Disegnare un cerchio {#pivot_circle}

Quando disegni un cerchio con la penna, imposta la direzione, il raggio e l'angolo della rotazione.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | avanti a sinistra(left_forward), indietro a sinistra(left_backward), avanti a destra(right_forward), indietro a destra(right_backward) | - |
| degree | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| radius | Ingresso (blocco) | Raggio della rotazione | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità del raggio | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Seguire la linea con il sensore {#trace_line}

Con il sensore di colore del pavimento segue una linea di un colore determinato.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| line | Opzione di elenco | Colore della linea da seguire | nero(black), rosso(red), verde(green), blu(blue), qualunque colore(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Seguire la linea fino a un colore determinato {#trace_line_until_color}

Con il sensore di colore del pavimento segue una linea del colore A fino a incontrare il colore B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| line | Opzione di elenco | Colore della linea da seguire | nero(black), rosso(red), verde(green), blu(blue), qualunque colore(any) | - |
| color | Opzione di elenco | Colore in cui fermarsi | nero(black), rosso(red), verde(green), ciano(cyan), blu(blue), magenta(magenta), qualunque colore(any) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Passare l'intersezione e fermarsi a quella successiva {#intersection}

Turtle si muove all'intersezione nella direzione indicata e poi continua fino a incontrare l'intersezione successiva.  
Se attivi la casella attendi, aspetta che il movimento sia finito.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione all'intersezione | vai avanti(forward), a sinistra(left), a destra(right), inversione a U(uturn) | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Impostare la velocità di inseguimento della linea {#set_trace_speed}

Imposta la velocità di inseguimento della linea. L'intervallo della velocità è 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità di inseguimento della linea | intero 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Impostare il guadagno di inseguimento della linea {#set_trace_gain}

Imposta di quanto cambia la direzione durante l'inseguimento della linea. L'intervallo del guadagno è 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Variazione della direzione | intero 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Interrompere l'inseguimento della linea {#stop_trace}

Termina la funzione di inseguimento della linea di Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Impostare il colore del LED {#set_led_color}

Imposta il colore del LED della testa di Turtle.  
Se scegli un colore nella tavolozza dei colori, viene convertito nel **nome del colore** (testo in inglese) e chiamato così. (il codice viene generato con il nome del colore, non con i valori numerici R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Colore | Scelta nella tavolozza dei colori → convertita nel nome del colore (in inglese) | nomi dei colori: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Impostare il colore del LED con un blocco della categoria Colore {#set_led_color_with_block}

Riceve in ingresso l'uscita di un blocco della categoria Colore (`[R, G, B]`) e imposta il colore del LED della testa.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (colore) | Blocco della categoria Colore o array `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Cambiare il colore del LED di un valore RGB {#change_by_rgb}

Somma al colore attuale del LED della testa le variazioni R, G, B inserite e imposta il nuovo colore.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Spegnere il LED della testa {#turn_off}

Toglie il colore del LED della testa.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Impostare la frequenza del cicalino {#sound_buzz}

Imposta il cicalino di Turtle alla frequenza indicata.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Suonare una nota {#sound_note}

Turtle riproduce la nota indicata.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

Turtle riproduce un clip audio determinato.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Disattivare il suono {#sound_off}

Spegne il suono di Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Il suono è in riproduzione? {#sound_playing}

Restituisce true se il suono è in riproduzione e false se non lo è.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Valore della velocità della ruota {#wheel_speed}

La velocità di una ruota determinata

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Valore del sensore di colore del pavimento {#floor}

Il valore del sensore di colore del pavimento

<BlockImage module="roboids/Turtle" id="floor" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Valore del nome del colore della scheda {#card_color}

Il nome del colore della scheda letto con il sensore di colore del pavimento

<BlockImage module="roboids/Turtle" id="card_color" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Valore della sequenza di colori della scheda {#card_pattern}

La sequenza dei colori della scheda letta con il sensore di colore del pavimento

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Valore dell'accelerazione di gravità {#acceleration}

Il valore dell'accelerazione di gravità su un asse determinato

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Asse da leggere | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Valore del sensore di temperatura {#temperature}

Il valore del sensore di temperatura

<BlockImage module="roboids/Turtle" id="temperature" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/Turtle" id="battery" />

### Parametri

(nessuno)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Tocca un colore determinato? {#color_read}

Misura con il sensore di colore di Turtle se tocca il colore indicato e restituisce **vero (True) / falso (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| color | Opzione di elenco | Nome del colore | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## La sequenza di colori della scheda è ~ ? {#pattern_read}

Restituisce **vero (True) / falso (False)** a seconda che la sequenza dei colori della scheda rilevata dal sensore di colore corrisponda o no.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| pattern | Opzione di elenco | Nome della sequenza della scheda | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Stato del pulsante posteriore {#button}

Se il pulsante che sta sul dorso è premuto oppure se è stato cliccato

<BlockImage module="roboids/Turtle" id="button" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| event | Opzione di elenco | Tipo di stato del pulsante | premuto(pressed), cliccato(click), cliccato a lungo(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Se lo stato è cambiato {#state_change}

Se lo stato del robot è cambiato

<BlockImage module="roboids/Turtle" id="state_change" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Tipo di stato | 0 ~ 5 (vedi la tabella qui sotto) | - |

| unit | Condizione |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```

