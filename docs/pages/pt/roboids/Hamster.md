---
title: Hamster
---

# Hamster

## Declarar a instância {#instance}

Se acrescentares um bloco de Hamster à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
hamster = Hamster(0)
# se existirem várias instâncias
hamster_1 = Hamster(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a velocidade da roda {#set_wheel_speed}

Determina a velocidade da roda. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Velocidade da roda | inteiro -100 ~ 100, 0: parado | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Mover por um tempo {#move_time}

Avança durante o tempo indicado à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Tempo de movimento (segundos) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Alterar a velocidade da roda {#change_speed}

Altera a velocidade de roda do Hamster.  
A nova velocidade de roda é a velocidade atual mais a velocidade introduzida.  
A velocidade de roda definida é mantida dentro do intervalo -100 ~ 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Parar {#stop}

Para o movimento do Hamster.  
A velocidade das duas rodas do Hamster passa a 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Avançar um passo no tabuleiro {#grid_move}

Avança no tabuleiro casa a casa, conforme definido.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parâmetros

nenhum.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Virar uma vez no tabuleiro {#grid_turn}

Vira 90 graus no tabuleiro na direção indicada.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Seguir a linha com o sensor {#trace_mode}

O Hamster segue com o sensor de piso uma linha de uma determinada cor.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| floor | Opção de lista | Sensor de piso com que segue | esquerda(left), direita(right), centro(center) | - |
| line | Opção de lista | Cor da linha | preto(black), branco(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Virar numa interseção e parar na seguinte {#trace_until_grid}

O Hamster vira na interseção na direção indicada e depois avança até encontrar a interseção seguinte.  
Se marcares aguardar, aguarda-se até o movimento terminar.  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção na interseção | esquerda(left), direita(right), frente(forward), inverter a marcha(uturn) | - |
| line | Opção de lista | Cor da linha | preto(black), branco(white) | black |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Definir a velocidade de seguimento da linha {#set_trace_speed}

Define a velocidade de seguimento da linha. O intervalo da velocidade é 1 ~ 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade de seguimento da linha | inteiro 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Parar de seguir a linha {#stop_trace}

Termina a função de seguimento da linha do Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Definir a cor do LED {#set_led_color}

Define a cor do LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | - |
| color | Opção de lista | Cor | preto(black), azul(blue), verde(green), ciano(cyan), vermelho(red), magenta(magenta), amarelo(yellow), branco(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Desligar o LED {#turn_off}

Apaga a cor do LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | LED em questão | esquerdo(left), direito(right), ambos(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do Hamster para o valor indicado.  
O intervalo das frequências que se ouvem é 1,0 Hz ~ 6553,5 Hz.  
Se introduzires outro valor, não se ouve som.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 0 ~ 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O Hamster toca a nota indicada.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Desligar o som {#sound_off}

Desliga o som do Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Velocidade da roda {#wheel_speed}

A velocidade de uma determinada roda

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Valor do sensor de proximidade {#proximity}

O valor de um determinado sensor de proximidade

<BlockImage module="roboids/Hamster" id="proximity" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Posição do sensor medido | esquerda(left), direita(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Valor do sensor de chão {#floor}

O valor de um determinado sensor de chão

<BlockImage module="roboids/Hamster" id="floor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Posição do sensor medido | esquerda(left), direita(right), centro(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Valor da aceleração {#acceleration}

O valor da aceleração da gravidade num determinado eixo

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Valor do sensor de luminosidade {#light}

O valor do sensor de luminosidade

<BlockImage module="roboids/Hamster" id="light" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Valor do sensor de temperatura {#temperature}

O valor do sensor de temperatura

<BlockImage module="roboids/Hamster" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/Hamster" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## O estado mudou? {#state_change}

Se o estado do robô mudou

<BlockImage module="roboids/Hamster" id="state_change" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de estado | 0 ~ 6 (ver a tabela seguinte) | - |

| unit | Condição |
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

## Definir o modo de entrada da porta de E/S {#io_mode}

Define o modo de entrada da porta IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| option | Opção de lista | Modo de E/S | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Definir a saída da porta de E/S {#set_output}

Define o valor de saída da porta IO indicada.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| data | Entrada (bloco) | Valor de saída | inteiro 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Alterar a saída da porta de E/S {#change_output}

Altera o valor de saída da porta IO indicada.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b, ambas(both) | - |
| data | Entrada (bloco) | Diferença do valor de saída | inteiro | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Abrir / fechar a garra {#gripper}

Abre ou fecha a garra do Hamster.  
De acordo com o valor de unit é chamado um dos dois métodos.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | fechar(close), abrir(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Definir ângulo do lançador {#shooter}

Controla o lançador definindo o seu ângulo. O intervalo do ângulo é 0 ~ 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Ângulo do lançador | inteiro 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Valor de entrada da porta de E/S {#input}

Devolve o valor de entrada da porta de E/S do Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Porta de E/S | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
