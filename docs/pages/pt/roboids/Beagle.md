---
title: Beagle
---

# Beagle

## Declarar a instância {#instance}

Se acrescentares um bloco de Beagle à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
beagle = Beagle(0)
# se existirem várias instâncias
beagle_1 = Beagle(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a velocidade da roda {#set_wheel_speed}

Determina a velocidade da roda. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Velocidade da roda | inteiro -100 ~ 100, 0: parado | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Mover uma distância {#move_distance}

Avança a distância indicada à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se a distância for 0, o robô continua a avançar à velocidade de roda atual.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Distância a percorrer | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade de distância | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Mover durante um tempo {#move_time}

Avança durante o tempo indicado à velocidade de roda atual.  
Se não houver velocidade de roda definida, o robô avança à velocidade predefinida.  
Se marcares aguardar, aguarda-se até o movimento terminar.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Tempo de movimento (segundos) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Virar no mesmo lugar {#turn_degree}

Define a direção e o ângulo com que o robô vira no mesmo lugar.  
Se marcares aguardar, aguarda-se até a rotação terminar.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção da rotação | esquerda(left), direita(right) | - |
| data | Entrada (bloco) | Ângulo de rotação (graus) | decimal ≥ 0 | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Alterar a velocidade da roda {#change_speed}

Altera a velocidade de roda do Beagle.  
A nova velocidade de roda é a velocidade atual mais a velocidade introduzida.  
A velocidade de roda definida é mantida dentro do intervalo -100 ~ 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de roda | esquerda(left), direita(right), ambas(both) | - |
| speed | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Parar {#stop}

Para o movimento do Beagle.  
A velocidade das duas rodas do Beagle passa a 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Roda em movimento? {#wheel_moving}

Devolve true se a roda estiver em movimento e false se estiver parada.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Definir a frequência do som {#sound_buzz}

Define a frequência do som do Beagle para o valor indicado.  
O intervalo das frequências que se ouvem é 27,5 Hz ~ 6553,5 Hz.  
Se introduzires outro valor, não se ouve som.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| hz | Entrada (bloco) | Frequência (Hz) | decimal 0, 27,5 ~ 6553,5 (caso contrário 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Tocar uma nota {#sound_note}

O Beagle toca a nota indicada.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O Beagle reproduz um clipe de som.  
Se marcares esperar, aguarda-se até a reprodução terminar.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Som a tocar? {#sound_playing}

Devolve true se estiver som a tocar e false se não.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Velocidade da roda {#wheel_speed}

A velocidade de uma determinada roda

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Valor do codificador {#encoder}

O valor do codificador de uma determinada roda

<BlockImage module="roboids/Beagle" id="encoder" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Roda em questão | esquerda(left), direita(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Valor do giroscópio {#gyroscope}

O valor do giroscópio num determinado eixo

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Valor do acelerómetro {#accelerometer}

O valor do acelerómetro num determinado eixo

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Valor do magnetómetro {#magnetometer}

O valor do magnetómetro num determinado eixo

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Eixo medido | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Valor do sensor de temperatura {#temperature}

O valor do sensor de temperatura

<BlockImage module="roboids/Beagle" id="temperature" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/Beagle" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## O estado mudou? {#state_change}

Se o estado do robô mudou

<BlockImage module="roboids/Beagle" id="state_change" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de estado | 0 ~ 5 (ver a tabela seguinte) | - |

| unit | Condição |
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

## Iniciar / parar o lidar {#lidar_power}

Ativa ou desativa o sensor lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Lidar ON / OFF | iniciar(on=True), parar(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Distância ao objeto ~ segundo o lidar {#lidar_value}

O sensor lidar pode medir a distância aos objetos nos 360 graus em volta.  
A partir da frente do Beagle (o valor 0), o número aumenta de 1 em 1 no sentido anti-horário.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Entrada (campo) | Número do objeto (a partir de 0) | inteiro ≥ 0 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Distância por direção segundo o lidar {#lidar_directions}

Dá a distância medida pelo sensor lidar para a frente, para trás, para os lados e nas direções diagonais.  
A saída é a média dos valores de distância 45 graus à esquerda e à direita dessa direção.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| direction | Opção de lista | Direção medida | frente(front), frente esquerda(left front), esquerda(left), trás esquerda(left back), trás(back), trás direita(right back), direita(right), frente direita(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## O lidar está pronto? {#lidar_state}

Devolve como **verdadeiro(True) / falso(False)** se o lidar está ligado.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parâmetros

(nenhum)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
