---
title: Piobot
---

# Piobot

## Declarar a instância {#instance}

Se acrescentares um bloco de Piobot(Pio) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
pio = Pio(0)
# se existirem várias instâncias
pio_1 = Pio(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a velocidade da roda {#set_wheel_speed}

Determina a velocidade da roda. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Velocidade da roda | inteiro -100 ~ 100, 0: parado | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Mover uma distância {#move_distance}

Avança a distância indicada à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se a distância for 0, o robô continua a avançar à velocidade de roda atual.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Distância a percorrer | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade de distância | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Mover durante um tempo {#move_time}

Avança durante o tempo indicado à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Pio" id="move_time" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Tempo de movimento (segundos) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Virar no mesmo lugar {#turn_degree}

Define a direção e o ângulo com que o robô vira no mesmo lugar.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |
| data | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Alterar a velocidade da roda {#change_speed}

Altera a velocidade de roda do Piobot.  
A nova velocidade de roda é a velocidade atual mais a velocidade introduzida.  
A velocidade de roda definida é mantida dentro do intervalo -100 ~ 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Modo turbo ligado / desligado {#turbo}

Liga ou desliga o modo turbo do Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Modo turbo ON / OFF | ligado(on=True), desligado(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Parar {#stop}

Para o movimento do Piobot.  
A velocidade das duas rodas do Piobot passa a 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Roda em movimento? {#wheel_moving}

Devolve true se a roda estiver em movimento e false se estiver parada.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Mover um passo no tabuleiro {#grid_move}

Avança no tabuleiro casa a casa, conforme definido.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Direção do movimento | para a frente(forward), para trás(backward), para a esquerda(left), para a direita(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Virar uma vez no tabuleiro {#grid_turn}

O Piobot vira 90 graus no tabuleiro na direção indicada. Aguarda-se sempre até terminar (internamente wait=True está fixo).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Definir velocidade do pescoço {#set_neck_speed}

Define a velocidade de rotação do pescoço. O intervalo da velocidade do pescoço é 1 ~ 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade de rotação do pescoço | inteiro 1 ~ 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Definir ângulo do pescoço {#set_neck_angle}

Define o ângulo em que o pescoço fica depois de girar. O intervalo do ângulo do pescoço é -45 ~ 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Ângulo do pescoço (graus) | decimal -45 ~ 45 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Pescoço em movimento? {#neck_moving}

Devolve true se o pescoço estiver em movimento e false se estiver parado.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Definir cor do olho {#set_eye_color}

Define a cor do LED do olho do Piobot.  
Podes alterar a cor do LED do olho esquerdo, do direito ou dos dois.  
Se escolheres uma cor predefinida, ela é passada como **nome da cor** (texto em inglês). (O código não é gerado com valores numéricos R, G, B, mas com o nome da cor.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Olho em questão | esquerdo(left), direito(right), ambos(both) | - |
| color | Opção de lista | Cor predefinida → nome da cor (inglês) | preto(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Definir cor do olho com um bloco da categoria Cor {#set_eye_color_with_block}

Define a cor do LED do olho do Piobot com os blocos da categoria Cor.  
Podes alterar a cor do LED do olho esquerdo, do direito ou dos dois.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Olho em questão | esquerdo(left), direito(right), ambos(both) | - |
| data | Entrada (cor) | Matriz [R, G, B] | Bloco da categoria Cor ou `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Alterar a cor do olho com valores RGB {#change_by_rgb}

Altera a cor do LED do olho do Piobot com os valores R, G e B indicados.  
Podes definir a cor do olho esquerdo, do direito ou dos dois.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Olho em questão | esquerdo(left), direito(right), ambos(both) | - |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Definir padrão dos olhos {#set_eye_pattern}

Define o padrão dos olhos e indica a cor de cada olho quando o padrão começa.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| pattern | Opção de lista | Tipo de padrão | desligado(reset), piscar(blink), esmorecer(dimming), arco-íris(rainbow) | - |
| left | Opção de lista | Cor do olho esquerdo | padrão(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | white |
| right | Opção de lista | Cor do olho direito | (igual a left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Apagar o olho {#turn_off}

Apaga a cor do olho.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Olho em questão | esquerdo(left), direito(right), ambos(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do Piobot para o valor indicado.  
O intervalo das frequências que se ouvem é 27,5 Hz ~ 6553,5 Hz.  
Se introduzires outro valor, não se ouve som.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 27,5 ~ 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O Piobot toca a nota indicada.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#/Ré♭(C#), Ré(D), Ré#/Mi♭(D#), Mi(E), Fá(F), Fá#/Sol♭(F#), Sol(G), Sol#/Lá♭(G#), Lá(A), Lá#/Si♭(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O Piobot reproduz um clipe de som.  
Se marcares esperar, aguarda-se até a reprodução terminar.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Reproduzir uma melodia {#sound_melody}

O Piobot reproduz uma melodia.  
Se marcares aguardar, aguarda-se até a reprodução terminar.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| melody | Opção de lista | Nome da melodia | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Som a tocar? {#sound_playing}

Devolve true se estiver som a tocar e false se não.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Velocidade da roda {#wheel_speed}

A velocidade de uma determinada roda

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/Pio" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Botão do teclado {#keypad}

Deteta o último botão do teclado que o utilizador premiu.

<BlockImage module="roboids/Pio" id="keypad" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| button | Opção de lista | Botão detetado | executar(play), avançar(forward), recuar(backward), ir para a esquerda(left), ir para a direita(right), ação(action), repetir(repeat), apagar(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
