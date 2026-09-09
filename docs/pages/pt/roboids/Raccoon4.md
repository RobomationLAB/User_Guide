---
title: RaccoonBot
---

# RaccoonBot

## Declarar a instância {#instance}

Se acrescentares um bloco de RaccoonBot à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
raccoon = RaccoonBot(0)
# se existirem várias instâncias
raccoon_1 = RaccoonBot(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Motor da articulação ligado / desligado {#motor}

Determina se o controlo de cada motor de articulação é largado ou mantido.  
Se não configurares nada, o robô arranca com o controlo dos motores de todas as articulações ligado.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Número da articulação | todas as articulações(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | -1 |
| on | Caixa de verificação | Controlo do motor ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# todas as articulações, controlo do motor desligado
raccoon.motor(-1, False)

# articulação 1, controlo do motor ligado
raccoon.motor(1, True)
```

## Definir velocidade da articulação {#speed_joint}

Define a velocidade da articulação escolhida.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| joint | Opção de lista | Número da articulação | todas as articulações(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloco) | Velocidade da articulação | inteiro -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Alterar velocidade da articulação {#change_speed_joint}

Altera a velocidade da articulação escolhida.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| joint | Opção de lista | Número da articulação | todas as articulações(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Definir as velocidades das articulações de uma vez {#speed_joints}

Define de uma vez a velocidade das quatro articulações.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (matriz) | Matriz com a velocidade de 4 articulações | `[joint1, joint2, joint3, joint4]`, cada um -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# matriz literal [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# matriz de uma variável
raccoon.set_speed_joints(*arr)
```

## Definir velocidade do controlo de ângulo das articulações {#angle_speed}

Define a velocidade com que as articulações são controladas no modo de controlo por ângulo.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade máxima do controlo de ângulo | inteiro 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Definir ângulo da articulação {#angle_joint}

Define o ângulo da articulação escolhida.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| joint | Opção de lista | Número da articulação | todas as articulações(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloco) | Ângulo da articulação (graus) | ver a tabela acima (é limitado automaticamente) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Alterar ângulo da articulação {#change_angle_joint}

Altera o ângulo da articulação escolhida.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| joint | Opção de lista | Número da articulação | todas as articulações(-1), n.º 1(1), n.º 2(2), n.º 3(3), n.º 4(4) | - |
| data | Entrada (bloco) | Diferença de ângulo da alteração (graus) | ver a tabela acima (é limitado automaticamente) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Definir os ângulos das articulações de uma vez {#angle_joints}

Define de uma vez o ângulo das quatro articulações.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (matriz) | Matriz com o ângulo de 4 articulações ou o nome de uma postura | matriz `[j1, j2, j3, j4]` | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# matriz explícita
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Inicializar estado das articulações {#default_angle_joints}

Coloca o ângulo das quatro articulações numa postura predefinida (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Lista | Nome da postura | `'zero'` / `'park'` / `'home'` | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

Posturas predefinidas:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# postura predefinida
raccoon.set_angle_joints('home', wait=True)
```

## Guardar ângulos das articulações {#save_encoder}

Guarda os valores atuais do codificador na variável que quiseres.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| encoder | Variável | Nome da variável onde é guardado | variável | - |
| data | Entrada (matriz) | Matriz inicial que é guardada | matriz de 4 elementos ou matriz vazia | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Definir uma determinada coordenada {#set_coordinate}

Move o braço robótico definindo uma determinada coordenada.  
Os intervalos das coordenadas são:  
relativamente ao pulso => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
relativamente à garra => o intervalo pode variar conforme o dispositivo ligado.  
A orientação da garra fica fixa: horizontal ou vertical em relação ao chão.  
Se introduzires uma coordenada inalcançável, a instrução é ignorada.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| origin | Opção de lista | Ponto de referência | pulso(wrist), efetor final(end_effector) | - |
| pos | Opção de lista | Eixo | x, y, z | - |
| data | Entrada (bloco) | Valor da coordenada | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Opção de lista | Unidade | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# colocar a coordenada x em 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# a coordenada z relativamente a end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Alterar uma determinada coordenada {#change_coordinate}

Move o braço robótico alterando uma determinada coordenada em relação à posição atual.  
Os intervalos das coordenadas são:  
relativamente ao pulso => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
relativamente à garra => o intervalo pode variar conforme o dispositivo ligado.  
A orientação da garra fica fixa: horizontal ou vertical em relação ao chão.  
Se introduzires uma coordenada inalcançável, a instrução é ignorada.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| origin | Opção de lista | Ponto de referência | pulso(wrist), efetor final(end_effector) | - |
| pos | Opção de lista | Eixo | x, y, z | - |
| data | Entrada (bloco) | Diferença de coordenada da alteração | decimal | - |
| unit | Opção de lista | Unidade | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Mover para uma coordenada xyz {#set_coordinates}

Define de uma vez as coordenadas x, y e z nos valores indicados.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| origin | Opção de lista | Ponto de referência | pulso(wrist), efetor final(end_effector) | - |
| x | Entrada (bloco) | Coordenada x | decimal | - |
| y | Entrada (bloco) | Coordenada y | decimal | - |
| z | Entrada (bloco) | Coordenada z | decimal | - |
| unit | Opção de lista | Unidade | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Definir bloqueio do efetor final {#lock}

Define a orientação em que a garra é bloqueada. Depois de a opção estar em horizontal ou vertical, já não podes controlar a velocidade nem o ângulo da articulação 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| mode | Opção de lista | Orientação do bloqueio | nenhum(none), horizontal(horizontal), vertical(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Pegar / largar algo com o efetor final {#end_effector}

Pega num objeto com o efetor final ou larga-o.  
De acordo com o valor da lista unit é chamado um dos dois métodos.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | pegar (fechar)(pick), largar (abrir)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Tipo de efetor final {#end_effector_device}

O número da garra ligada  
(1, 3, 4: garra de pinça, 2: garra de vácuo)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Estado do efetor final {#end_effector_status}

O estado em que a garra segura um objeto  
(0: largado, 1: segurado)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Tocar uma nota {#sound_note}

O RaccoonBot toca a nota indicada.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| note | Opção de lista | Nota | Dó(C), Dó#(C#), Ré(D), Ré#(D#), Mi(E), Fá(F), Fá#(F#), Sol(G), Sol#(G#), Lá(A), Lá#(A#), Si(B) | - |
| octave | Opção de lista | Oitava | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Reproduzir um som {#sound_clip}

O RaccoonBot reproduz um clipe de som.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| clip | Opção de lista | Nome do clipe de som | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` e mais | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Desligar o som {#sound_off}

Desliga o som do RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Valor do codificador {#encoder}

O valor do codificador da articulação escolhida

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| joint | Opção de lista | Número da articulação (ou todas) | 1, 2, 3, 4, todas as articulações(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# todas as articulações
raccoon.encoder(-1)
```

## Coordenada do elemento escolhido {#coordinate}

Devolve a coordenada xyz atual do ponto de referência.  
Se omitires `pos`, devolve toda a matriz `[x, y, z]`; se o indicares, apenas o valor desse eixo.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| origin | Opção de lista | Ponto de referência | pulso(wrist), efetor final(end_effector) | wrist |
| pos | Opção de lista | Eixo (ou tudo) | x, y, z, tudo (se o omitires, devolve toda a matriz) | None (tudo) |

### Python
```python
raccoon = RaccoonBot(0)

# um eixo em particular
raccoon.get_coordinates('wrist', 'x')

# tudo (matriz de 3 elementos)
raccoon.get_coordinates('wrist')
```

## Valor da intensidade do sinal {#signal_strength}

A intensidade do sinal

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Tensão da bateria {#battery}

A tensão da bateria

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## O botão está pressionado? {#button}

Se o botão escolhido está pressionado ou se ocorreu um evento de clique

<BlockImage module="roboids/Raccoon4" id="button" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do botão | teach(teach), play(play), power(power), delete(delete), qualquer botão(any) | - |
| event | Opção de lista | Tipo de evento | pressionado(pressed), clicado(click), clicado longamente(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Definir velocidade do transportador {#conveyor_speed}

Define a velocidade do tapete transportador. O intervalo da velocidade é -100 ~ 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Velocidade do transportador | inteiro -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Definir a distância do transportador {#conveyor_distance}

Faz o transportador deslocar-se uma determinada distância.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Distância a percorrer | decimal ≥ 0 | - |
| unit | Opção de lista | Unidade de distância | cm, mm, polegada(inch) | cm |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Alterar velocidade do transportador {#change_conveyor_speed}

Altera a velocidade do tapete transportador.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Diferença de velocidade da alteração | inteiro -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Parar o transportador {#stop_conveyor}

Para o transportador.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## O transportador está a funcionar? {#conveyor_running}

Se o tapete transportador está a funcionar

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parâmetros

(nenhum)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## O botão do transportador está pressionado? {#conveyor_button}

Se o botão do transportador está pressionado ou se ocorreu um evento de clique

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| event | Opção de lista | Tipo de evento | pressionado(pressed), clicado(click), clicado longamente(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
