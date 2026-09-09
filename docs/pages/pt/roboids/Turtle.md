---
title: Turtle
---

# Turtle

## Declarar a instância {#instance}

Se acrescentares um bloco de Turtle à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
turtle = Turtle(0)
# se existirem várias instâncias
turtle_1 = Turtle(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a velocidade da roda {#set_wheel_speed}

Determina a velocidade da roda. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Velocidade da roda | inteiro -100 ~ 100, 0: parado | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Mover uma distância {#move_distance}

Define a distância a percorrer.  
Se não houver velocidade de roda definida, o robô não se move.  
Se a distância for 0, o robô continua a avançar à velocidade de roda atual.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Distância a percorrer | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade de distância | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Mover durante um tempo {#move_time}

Avança durante o tempo indicado à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Tempo de movimento (segundos) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Virar no mesmo lugar {#turn_degree}

Define a direção e o ângulo com que o robô vira no mesmo lugar.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |
| data | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Alterar a velocidade da roda {#change_speed}

Altera a velocidade de roda do Turtle.  
A nova velocidade de roda é a velocidade atual mais a velocidade introduzida.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Parar {#stop}

Para o movimento do Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Roda em movimento? {#wheel_moving}

Devolve true se a roda estiver em movimento e false se estiver parada.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Girar em torno de uma roda {#pivot}

Define o ponto de rotação, a direção e o ângulo.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| base | Opção de lista | Roda como ponto de rotação | roda esquerda(left_wheel), roda direita(right_wheel) | - |
| direction | Opção de lista | Direção da rotação | para a frente(forward), para trás(backward) | - |
| data | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Desenhar um círculo {#pivot_circle}

Ao desenhar um círculo com a caneta, define a direção, o raio e o ângulo.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | frente esquerda(left_forward), trás esquerda(left_backward), frente direita(right_forward), trás direita(right_backward) | - |
| degree | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| radius | Entrada (bloco) | Raio da rotação | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade do raio | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Seguir a linha com o sensor {#trace_line}

Segue com o sensor de cor da parte de baixo uma linha de uma determinada cor.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| line | Opção de lista | Cor da linha que segue | preto(black), vermelho(red), verde(green), azul(blue), qualquer cor(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Seguir a linha até uma determinada cor {#trace_line_until_color}

Segue com o sensor de cor da parte de baixo a linha da cor A até encontrar a cor B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| line | Opção de lista | Cor da linha que segue | preto(black), vermelho(red), verde(green), azul(blue), qualquer cor(any) | - |
| color | Opção de lista | Cor em que para | preto(black), vermelho(red), verde(green), ciano(cyan), azul(blue), magenta(magenta), qualquer cor(any) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Virar numa interseção e parar na seguinte {#intersection}

O Turtle vira na interseção na direção indicada e depois avança até encontrar a interseção seguinte.  
Se marcares aguardar, aguarda-se até o movimento terminar.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção na interseção | avançar(forward), esquerda(left), direita(right), inverter a marcha(uturn) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Definir a velocidade de seguimento da linha {#set_trace_speed}

Define a velocidade de seguimento da linha. O intervalo da velocidade é 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade de seguimento da linha | inteiro 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Definir o ganho de seguimento da linha {#set_trace_gain}

Define a correção de direção no seguimento da linha. O intervalo da correção é 1 ~ 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Correção de direção | inteiro 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Parar de seguir a linha {#stop_trace}

Termina a função de seguimento da linha do Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Definir a cor do LED {#set_led_color}

Define a cor do LED da cabeça do Turtle.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês). (O código não é gerado com valores numéricos R, G, B, mas com o nome da cor.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Definir a cor do LED com um bloco da categoria Cor {#set_led_color_with_block}

Recebe como entrada a saída de um bloco da categoria Cor (`[R, G, B]`) e define com ela a cor do LED da cabeça.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (cor) | Bloco da categoria Cor ou uma matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Alterar a cor do LED com valores RGB {#change_by_rgb}

Soma as alterações de R, G e B introduzidas à cor atual do LED da cabeça e define assim uma cor nova.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Desligar o LED {#turn_off}

Apaga a cor do LED da cabeça.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do Turtle para o valor indicado.  

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O Turtle toca a nota indicada.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O Turtle reproduz um clipe de som.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Som a tocar? {#sound_playing}

Devolve true se estiver som a tocar e false se não.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Velocidade da roda {#wheel_speed}

A velocidade de uma determinada roda

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Valor do sensor de cor do piso {#floor}

O valor do sensor de cor da parte de baixo

<BlockImage module="roboids/Turtle" id="floor" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Cor do cartão {#card_color}

O nome da cor do cartão lida com o sensor de cor da parte de baixo

<BlockImage module="roboids/Turtle" id="card_color" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Padrão de cores do cartão {#card_pattern}

O padrão das cores do cartão lido com o sensor de cor da parte de baixo

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Valor da aceleração {#acceleration}

O valor da aceleração da gravidade num determinado eixo

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Valor do sensor de temperatura {#temperature}

O valor do sensor de temperatura

<BlockImage module="roboids/Turtle" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/Turtle" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Está a tocar numa determinada cor? {#color_read}

Mede com o sensor de cor do Turtle se o robô está a tocar na cor indicada e devolve o resultado como **verdadeiro(True) / falso(False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## O padrão de cores do cartão é ~ ? {#pattern_read}

Devolve como **verdadeiro(True) / falso(False)** se o padrão de cores do cartão reconhecido pelo sensor de cor corresponde.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| pattern | Opção de lista | Nome do padrão do cartão | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Estado do botão traseiro {#button}

Se o botão das costas está pressionado ou se foi clicado

<BlockImage module="roboids/Turtle" id="button" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| event | Opção de lista | Tipo de estado do botão | pressionado(pressed), clicado(click), clicado longamente(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## O estado mudou? {#state_change}

Se o estado do robô mudou

<BlockImage module="roboids/Turtle" id="state_change" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de estado | 0 ~ 5 (ver a tabela seguinte) | - |

| unit | Condição |
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
