---
title: HamsterS
---

# HamsterS

## Declarar a instância {#instance}

Se acrescentares um bloco de HamsterS à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
hamster_s = HamsterS(0)
# se existirem várias instâncias
hamster_s_1 = HamsterS(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a velocidade da roda {#set_wheel_speed}

Determina a velocidade da roda. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Velocidade da roda | inteiro -100 ~ 100, 0: parado | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Mover uma distância {#move_distance}

Avança a distância indicada à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se a distância for 0, o robô continua a avançar à velocidade de roda atual.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Distância a percorrer | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade de distância | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Mover durante um tempo {#move_time}

Avança durante o tempo indicado à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Tempo de movimento (segundos) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Virar no mesmo lugar {#turn_degree}

Define a direção e o ângulo com que o robô vira no mesmo lugar.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |
| data | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Alterar a velocidade da roda {#change_speed}

Altera a velocidade de roda do HamsterS.  
A nova velocidade de roda é a velocidade atual mais a velocidade introduzida.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Parar {#stop}

Para o movimento do HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Roda em movimento? {#wheel_moving}

Devolve true se a roda estiver em movimento e false se estiver parada.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Avançar um passo no tabuleiro {#grid_move}

Avança no tabuleiro casa a casa, conforme definido.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Parâmetros

nenhum.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Virar uma vez no tabuleiro {#grid_turn}

Vira 90 graus no tabuleiro na direção indicada.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Girar em torno do suporte da caneta {#pivot}

Ao usar o suporte da caneta, define o ponto de rotação, a direção e o ângulo.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| base | Opção de lista | Ponto de rotação | caneta esquerda(left_pen), caneta direita(right_pen), roda esquerda(left_wheel), roda direita(right_wheel) | - |
| direction | Opção de lista | Direção da rotação | para a frente(forward), para trás(backward) | - |
| degree | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Desenhar um círculo em torno do suporte da caneta {#pivot_circle}

Ao desenhar um círculo com o suporte da caneta, define o ponto de rotação, a direção, o raio e o ângulo.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| base | Opção de lista | Ponto de rotação | caneta esquerda(left_pen), caneta direita(right_pen) | - |
| direction | Opção de lista | Direção da rotação | frente esquerda(left_forward), trás esquerda(left_backward), frente direita(right_forward), trás direita(right_backward) | - |
| degree | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| radius | Entrada (bloco) | Raio da rotação | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade do raio | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Seguir a linha com o sensor {#trace_mode}

O HamsterS segue com o sensor de piso uma linha de uma determinada cor.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| floor | Opção de lista | Sensor de piso com que segue | esquerda(left), direita(right), centro(center) | - |
| line | Opção de lista | Cor da linha | preto(black), branco(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Virar numa interseção e parar na seguinte {#trace_until_grid}

O HamsterS vira na interseção na direção indicada e depois avança até encontrar a interseção seguinte.  
Se marcares aguardar, aguarda-se até o movimento terminar.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção na interseção | virar à esquerda(left), virar à direita(right), seguir em frente(forward), inverter a marcha(uturn) | - |
| line | Opção de lista | Cor da linha | preto(black), branco(white) | black |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Definir a velocidade de seguimento da linha {#set_trace_speed}

Define a velocidade de seguimento da linha. O intervalo da velocidade é 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade de seguimento da linha | inteiro 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Definir o ganho de seguimento da linha {#set_trace_gain}

Define a correção de direção no seguimento da linha. O intervalo da correção é 1 ~ 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Correção de direção | inteiro 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Parar de seguir a linha {#stop_trace}

Termina a função de seguimento da linha do HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Definir a cor do LED {#set_led_color}

Define a cor do LED do HamsterS.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês). (O código não é gerado com valores numéricos R, G, B, mas com o nome da cor.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | - |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Definir a cor do LED com um bloco da categoria Cor {#set_led_color_with_block}

Recebe como entrada um bloco da categoria Cor (`[R, G, B]`) e define com ele a cor do LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | - |
| data | Entrada (cor) | Bloco da categoria Cor ou uma matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Alterar a cor do LED com valores RGB {#change_by_rgb}

Altera a cor do LED do HamsterS com os valores R, G e B indicados.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | - |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Desligar o LED {#turn_off}

Apaga a cor do LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do HamsterS para o valor indicado.  
O intervalo das frequências que se ouvem é 122,1 Hz ~ 4186,0 Hz.  
Se introduzires outro valor, não se ouve som.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 122,1 ~ 4186,0 (caso contrário 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O HamsterS toca a nota indicada.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O HamsterS reproduz um clipe de som.  
Se marcares esperar, aguarda-se até a reprodução terminar.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Som a tocar? {#sound_playing}

Devolve true se estiver som a tocar e false se não.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Velocidade da roda {#wheel_speed}

A velocidade de uma determinada roda

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Valor do sensor de proximidade {#proximity}

O valor de um determinado sensor de proximidade

<BlockImage module="roboids/HamsterS" id="proximity" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Posição do sensor medido | esquerda(left), direita(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Valor do sensor de chão {#floor}

O valor de um determinado sensor de chão

<BlockImage module="roboids/HamsterS" id="floor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Posição do sensor medido | esquerda(left), direita(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Valor da aceleração {#acceleration}

O valor da aceleração da gravidade num determinado eixo

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Valor do sensor de luminosidade {#light}

O valor do sensor de luminosidade

<BlockImage module="roboids/HamsterS" id="light" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Valor do sensor de temperatura {#temperature}

O valor do sensor de temperatura

<BlockImage module="roboids/HamsterS" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/HamsterS" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## O estado mudou? {#state_change}

Se o estado do robô mudou

<BlockImage module="roboids/HamsterS" id="state_change" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de estado | 0 ~ 7 (ver a tabela seguinte) | - |

| unit | Significado | Python |
|------|------|--------|
| 0 | inclinar para a frente | `acceleration('x') > 5000` |
| 1 | inclinar para trás | `acceleration('x') < -5000` |
| 2 | inclinar para a esquerda | `acceleration('y') > 5000` |
| 3 | inclinar para a direita | `acceleration('y') < -5000` |
| 4 | voltado ao contrário | `acceleration('z') > 0` |
| 5 | não voltado ao contrário | `acceleration('z') < -3000` |
| 6 | obstáculo/mão detetados | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | toque | `tap()` |

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

## Definir o modo de entrada da porta de E/S {#io_mode}

Define o modo de entrada da porta IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| option | Opção de lista | Modo de E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Definir a saída da porta de E/S {#set_output}

Define o valor de saída da porta IO indicada.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| data | Entrada (bloco) | Valor de saída | inteiro 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Alterar a saída da porta de E/S {#change_output}

Altera o valor de saída da porta IO indicada.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| data | Entrada (bloco) | Diferença do valor de saída | inteiro | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Abrir / fechar a garra {#gripper}

Abre ou fecha a garra do HamsterS.  
De acordo com o valor de unit é chamado um dos dois métodos.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | abrir(open), fechar(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Definir o ângulo do lançador {#shooter}

Controla o lançador definindo o seu ângulo. O intervalo do ângulo é 0 ~ 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Ângulo do lançador | inteiro 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Valor de entrada da porta de E/S {#input}

Devolve o valor de entrada da porta de E/S do HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
