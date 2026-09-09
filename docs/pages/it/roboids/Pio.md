---
title: Piobot
---

# Piobot

## Dichiarare l'istanza {#instance}

Se aggiungi un blocco di Piobot all'area di lavoro, nel codice Python viene inserita automaticamente la dichiarazione di istanza seguente:

```python
pio = Pio(0)
# se ci sono più istanze
pio_1 = Pio(1)
```

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| index | Opzione di elenco | Numero dell'istanza (parte da 0) | intero maggiore o uguale a 0 | 0 |


## Impostare la velocità della ruota {#set_wheel_speed}

Imposta la velocità delle ruote. L'intervallo della velocità delle ruote è -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Velocità della ruota | intero -100 ~ 100, 0: fermo | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Muovere di una distanza {#move_distance}

Si muove della distanza indicata alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se il valore della distanza è 0, continua a muoversi secondo la velocità attuale delle ruote.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Distanza del movimento | decimale maggiore o uguale a 0 | - |
| unit | Opzione di elenco | Unità della distanza | cm, mm, pollici(inch) | cm |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Muovere per un tempo {#move_time}

Si muove per il tempo indicato alla velocità attuale delle ruote.  
Se non hai impostato la velocità delle ruote, avanza alla velocità predefinita.  
Se attivi la casella attendi, aspetta che il movimento sia finito.

<BlockImage module="roboids/Pio" id="move_time" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Tempo del movimento (secondi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Ruotare sul posto {#turn_degree}

Imposta la direzione e l'angolo della rotazione sul posto.  
Se attivi la casella attendi, aspetta che la rotazione sia finita.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| direction | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |
| data | Ingresso (blocco) | Angolo della rotazione (gradi) | decimale maggiore o uguale a 0 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Modificare la velocità della ruota {#change_speed}

Modifica la velocità delle ruote di Piobot.  
La nuova velocità è la velocità attuale più la velocità che hai inserito.  
La velocità delle ruote appena impostata viene limitata all'intervallo -100 ~ 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota | sinistra(left), destra(right), entrambe(both) | - |
| speed | Ingresso (blocco) | Differenza di velocità da applicare | intero -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Attivare / disattivare il modo turbo {#turbo}

Attiva o disattiva il modo turbo di Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Modo turbo ON / OFF | acceso(on=True), spento(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Fermarsi {#stop}

Ferma il movimento di Piobot.  
Le velocità di entrambe le ruote di Piobot vengono azzerate.

<BlockImage module="roboids/Pio" id="stop" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.stop()
```

## La ruota è in movimento? {#wheel_moving}

Restituisce true se le ruote sono in movimento e false se sono ferme.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Muovere di un passo sulla tavola {#grid_move}

Sulla tavola si muove di una casella per volta, come stabilito.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Direzione del movimento | avanti(forward), indietro(backward), a sinistra(left), a destra(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Ruotare una volta sulla tavola {#grid_turn}

Sulla tavola Piobot ruota di 90 gradi nella direzione che riceve in ingresso. Aspetta sempre la fine (internamente wait=True è fisso).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Direzione della rotazione | sinistra(left), destra(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Impostare la velocità del collo {#set_neck_speed}

Imposta la velocità di rotazione del collo. L'intervallo della velocità del collo è 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Velocità di rotazione del collo | intero 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Impostare l'angolo del collo {#set_neck_angle}

Imposta l'angolo che il collo raggiunge ruotando. L'intervallo dell'angolo del collo è -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| data | Ingresso (blocco) | Angolo del collo (gradi) | decimale -45 ~ 45 | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Il collo è in movimento? {#neck_moving}

Restituisce true se il collo è in movimento e false se è fermo.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Impostare il colore del LED dell'occhio {#set_eye_color}

Imposta il colore del LED degli occhi di Piobot.  
Puoi cambiare il colore del LED dell'occhio sinistro, di quello destro o di entrambi.  
Se scegli un colore tra quelli preimpostati, viene convertito nel **nome del colore** (testo in inglese) e chiamato così. (il codice viene generato con il nome del colore, non con i valori numerici R, G, B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Occhio da comandare | sinistro(left), destro(right), entrambi(both) | - |
| color | Opzione di elenco | Colore preimpostato → convertito nel nome del colore (in inglese) | nero(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Impostare il colore del LED dell'occhio con un blocco della categoria Colore {#set_eye_color_with_block}

Imposta il colore del LED degli occhi di Piobot con i blocchi della categoria Colore.  
Puoi cambiare il colore del LED dell'occhio sinistro, di quello destro o di entrambi.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Occhio da comandare | sinistro(left), destro(right), entrambi(both) | - |
| data | Ingresso (colore) | Array [R, G, B] | Blocco della categoria Colore o `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Modificare il colore del LED dell'occhio di un valore RGB {#change_by_rgb}

Modifica il colore del LED degli occhi di Piobot dei valori R, G, B indicati.  
Puoi impostare il colore dell'occhio sinistro, di quello destro o di entrambi.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Occhio da comandare | sinistro(left), destro(right), entrambi(both) | - |
| r | Ingresso (campo) | Variazione del rosso | intero -255 ~ 255 | 0 |
| g | Ingresso (campo) | Variazione del verde | intero -255 ~ 255 | 0 |
| b | Ingresso (campo) | Variazione del blu | intero -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Impostare il motivo dei LED degli occhi {#set_eye_pattern}

Imposta il motivo degli occhi e indica il colore di ogni occhio all'inizio del motivo.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| pattern | Opzione di elenco | Tipo di motivo | spento(reset), lampeggio(blink), dissolvenza(dimming), arcobaleno(rainbow) | - |
| left | Opzione di elenco | Colore dell'occhio sinistro | predefinito(black), rosso(red), giallo(yellow), verde(green), ciano(cyan), blu(blue), magenta(magenta), bianco(white) | white |
| right | Opzione di elenco | Colore dell'occhio destro | (come left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Spegnere il LED dell'occhio {#turn_off}

Toglie il colore degli occhi.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Occhio da comandare | sinistro(left), destro(right), entrambi(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Impostare il ronzio {#sound_buzz}

Imposta il ronzio di Piobot alla frequenza indicata.  
L'intervallo delle frequenze che si possono emettere è 27,5 Hz ~ 6553,5 Hz.  
Se inserisci un valore fuori da questo intervallo, il buzzer non emette alcun suono.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| hz | Ingresso (blocco) | Frequenza (Hz) | decimale 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Riprodurre una nota {#sound_note}

Piobot riproduce la nota indicata.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| note | Opzione di elenco | Nota | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Opzione di elenco | Ottava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Riprodurre un clip audio {#sound_clip}

Piobot riproduce un clip audio determinato.  
Se attivi la casella attendi, aspetta che la riproduzione sia finita.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| clip | Opzione di elenco | Nome del clip audio | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Riprodurre una melodia {#sound_melody}

Piobot riproduce una melodia determinata.  
Se attivi la casella attendi, aspetta che la riproduzione sia finita.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| melody | Opzione di elenco | Nome della melodia | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` e altri | - |
| wait | Casella di controllo | Se aspettare la fine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Disattivare l'audio {#sound_off}

Spegne l'audio di Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## L'audio è in riproduzione? {#sound_playing}

Restituisce true se l'audio è in riproduzione e false se non lo è.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Valore della velocità della ruota {#wheel_speed}

La velocità di una ruota determinata

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| unit | Opzione di elenco | Ruota da leggere | sinistra(left), destra(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Valore della potenza del segnale {#signal_strength}

La potenza del segnale

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Tensione della batteria {#battery}

La tensione della batteria

<BlockImage module="roboids/Pio" id="battery" />

### Parametri

(nessuno)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Pulsante del tastierino {#keypad}

Rileva l'ultimo pulsante del tastierino premuto dall'utente.

<BlockImage module="roboids/Pio" id="keypad" />

### Parametri

| Nome | Tipo | Descrizione | Intervallo / Tipo | Valore predefinito |
| --- | --- | --- | --- | --- |
| button | Opzione di elenco | Pulsante da rilevare | esegui(play), vai avanti(forward), vai indietro(backward), vai a sinistra(left), vai a destra(right), azione(action), ripeti(repeat), cancella(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
