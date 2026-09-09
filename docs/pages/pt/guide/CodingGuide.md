---
title: Guia de programação
---

# Guia de programação

Este documento descreve o RobomationLAB, a plataforma de ensino de programação de robôs desenvolvida pela Robomation, que faz parte do «motor de execução e ambiente de autoria integrado para o serviço de streaming de movimentos de robôs».  

A descrição detalhada segue esta ordem:
- As principais características do RobomationLAB
- A forma de programar robôs no RobomationLAB
- O sistema de sintaxe básica da programação de robôs no RobomationLAB  

<br>

## Índice {#table-of-contents}
1. [RobomationLAB — plataforma de ensino de programação de robôs](#platform)  
    1-1) [Programas para programar robôs](#coding-programs)  
    1-2) [Conversão bidirecional em tempo real entre blocos e Python](#block-python-conversion)  
    1-3) [As principais características dos programas](#features)  
    1-4) [Controlo de robôs em tempo real](#control-method)  

2. [A forma de programar robôs no RobomationLAB](#programming-method)  
    2-1) [Execução sequencial e execução em paralelo](#sequential-parallel)  
    2-2) [A função setup](#setup)  
    2-3) [A função loop](#loop)  

3. [O sistema de sintaxe básica da programação de robôs no RobomationLAB](#grammar-syntax)  
    3-1) [Importar o pacote robomation](#import-package)  
    3-2) [Criar uma instância de robô](#create-instance)  
    3-3) [Métodos para controlar o robô](#control-methods)  
    3-4) [Ler sensores e estados](#sensor)  
    3-5) [Detetar eventos](#event)  
    3-6) [Aguardar que uma ação termine (wait)](#wait)  
    3-7) [Funções utilitárias (Utils)](#utils)   

<br><br>

## RobomationLAB — plataforma de ensino de programação de robôs {#platform}
O RobomationLAB é uma plataforma otimizada para o **ensino de software de robótica com IA**.  
Oferece um ambiente de autoria integrado baseado no navegador Chrome para o ensino de programação de robôs a alunos do ensino básico.  

O RobomationLAB oferece programas de ensino de programação de robôs em várias formas, como a **programação com blocos** e a **programação com scripts**.  
Não se aprende apenas a teoria da programação: com os produtos da Robomation movem-se e controlam-se robôs reais,  
o que dá a oportunidade de aprender programação e robótica ao mesmo tempo.

<br>

### Programas para programar robôs {#coding-programs}

#### Block Composer {#block-composer}
**O Block Composer é uma ferramenta com que se controlam os próprios robôs de forma fácil e rápida através da programação com blocos e se aprendem as bases do controlo de robôs.**  

- Um ambiente de autoria otimizado para a computação física

- Programar arrastando e largando blocos: fácil mesmo para principiantes  
- Um ambiente de aprendizagem sem erros de sintaxe, desde os conceitos básicos  
- Conversão automática em código de script Python  
- Para cada robô, uma coleção de blocos com funções predefinidas e muitos exemplos para experimentar
- Resultados visíveis em tempo real ao executar o código  
- Melhor capacidade de resolução de problemas e mais criatividade ao combinar blocos  
- Comentários otimizados através da análise do código de script baseada em IA  

<br>

#### Script Composer {#script-composer}
**O Script Composer é uma ferramenta com que se controlam os próprios robôs de forma fácil e rápida através da programação em Python e se aprendem a sintaxe de Python e as bases da programação de robôs.**  

- Um editor de Python

- Conclusão automática e inserção de código por idioma
- Para cada robô, muitos códigos de exemplo para experimentar
- Resultados visíveis em tempo real ao executar o código
- Comentários otimizados através da análise do código de script baseada em IA

<br>

#### As principais características dos programas {#features}
Os programas para programar robôs do RobomationLAB têm as principais características seguintes.  
1.	Funcionam no navegador Chrome, pelo que não dependem do sistema operativo
2.	Controlam o hardware do robô diretamente com um adaptador USB através de Web Serial
3.	Suportam o controlo simultâneo de vários robôs, sem limite de tipo nem de quantidade
4.	Ao guardar, o resultado é convertido num ficheiro de texto JSON e guardado

<br>

### Controlo de robôs em tempo real {#control-method}
Os programas para programar robôs do RobomationLAB controlam os robôs em tempo real através dos passos seguintes.  
1.	Com programação com blocos ou com scripts
escreve-se código que define os valores dos objetos Effector e Command para controlar o robô
ou que usa os valores Sensor e os eventos Event do robô.
2.	Executa-se o código.
3.	Através de Web Serial recebem-se do robô pacotes com dados de Sensor e Event
e integram-se no objeto Device do robô.
4.	O código é interpretado em tempo real;
nesse processo escrevem-se dados nos objetos Effector e Command ou leem-se valores dos objetos Sensor e Event.
5.	Com os dados do objeto Device é criado um pacote
e enviado ao robô através de Web Serial, para que se possa verificar se o robô funciona de facto.
6.	Enquanto o código está a ser executado, os passos 3 ~ 5 repetem-se aproximadamente a cada 10 ~ 20 ms.  

<br>

### Conversão bidirecional em tempo real entre blocos e Python {#block-python-conversion}
O RobomationLAB oferece em conjunto um editor de programação com blocos e um editor de Python; os dois editores sincronizam-se em tempo real nos dois sentidos.

- Se acrescentares, alterares ou removeres blocos no editor de blocos, essas alterações são integradas em tempo real no código Python.
- Ao contrário, as alterações que fizeres ao código no editor de Python são integradas em tempo real nos blocos.

Como os blocos e o código Python correspondem um a um e são convertidos nos dois sentidos,  
podes passar de forma natural da programação com blocos para a programação com scripts: por exemplo, construir rapidamente toda a estrutura com blocos e depois afinar os detalhes em Python, ou aprender a sintaxe de Python comparando-a com os blocos.

> No entanto, a conversão de Python para blocos só funciona com código que possa ser representado como blocos.  
> (Com sintaxe errada ou com código que não pode ser convertido em blocos, a mudança pode não acontecer.  
Encontras mais informações no documento [Regras de programação](CodingRules).)

<br>

<br><br>

## A forma de programar robôs no RobomationLAB {#programming-method}

### Execução sequencial e execução em paralelo {#sequential-parallel}
Ao programar robôs distinguem-se a execução sequencial e a execução em paralelo.  
A execução sequencial significa que a ação seguinte só começa quando a anterior termina; é adequada para comportamentos simples.  
Se, por exemplo, quiseres que o robô avance e depois pare e acenda um LED, tem de ser possível a execução sequencial, para que o código de cada ação fique nessa ordem e seja executado um a seguir ao outro no tempo.  

A execução em paralelo significa que várias ações são executadas ao mesmo tempo; é necessária para comportamentos mais complexos e avançados.  
Se, por exemplo, quiseres conseguir que um robô bípede ande, tem de ser possível programar com execução em paralelo, porque andar só funciona se os pés e as pernas do robô se moverem ao mesmo tempo.

Os programas para programar robôs do RobomationLAB suportam as duas formas ao mesmo tempo,  
a partir de uma estrutura de código setup / loop parecida com o ambiente de desenvolvimento de hardware do Arduino.

<BlockImage module="program/Editor" id="block-structure" />

Quando abres o Block Composer pela primeira vez, na área de trabalho aparecem dois blocos de função vazios:  
o bloco **função de configuração** representa a função `setup` e o bloco **função de repetição**, a função `loop`.  

Os blocos são convertidos em tempo real em código Python,  
e esse código tem a estrutura básica seguinte.  

```python
# estrutura básica do código Python
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> Para controlar um robô, põe `from robomation import *` no início do código e declara o robô que vais usar como instância. (p. ex. `hamster_s = HamsterS(0)`)


<br>

### A função setup {#setup}
A função setup é executada exatamente uma vez no momento em que o código é executado.  
Na função setup escreve-se sobretudo código que inicializa variáveis ou que prepara os modos e as funções do robô.  
Se controlares, por exemplo, um robô que se move com rodas, na função setup podes definir a velocidade inicial das rodas.  

Se dentro de uma função for preciso um atraso, com a função `Utils.wait(...)` podes escrever código que decorra ordenado no tempo, como se fosse síncrono.  
`Utils.wait(...)` aguarda o tempo indicado (em segundos) e depois executa o código seguinte, ou seja, o código acorda depois de um tempo ou de uma ação determinados e continua.  
Se aproveitares esta possibilidade, juntamente com a função loop, que trata da execução em paralelo, não só é possível a execução sequencial simples, mas também uma programação de robôs muito poderosa.

No exemplo seguinte, o robô HamsterS avança um segundo e depois recua um segundo.  
Se fizesses isso na função loop, que é executada em paralelo, o cálculo do tempo e o código de controlo misturavam-se e o código ficava muito complicado.  
Se, em vez disso, usares na função setup a função de atraso `Utils.wait`, podes escrever código que decorra ordenado no tempo, como se fosse síncrono.  
( A função `Utils.wait` é descrita mais adiante com mais detalhe em [Funções utilitárias (Utils)](#utils). )

Código de exemplo (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # colocar as duas velocidades de roda em 50 e avançar
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # aguardar 1 segundo
    # colocar as duas velocidades de roda em -50 e recuar
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # aguardar 1 segundo
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( A sintaxe das instâncias de robô e dos métodos é descrita mais adiante com mais detalhe em [O sistema de sintaxe básica da programação de robôs no RobomationLAB](#grammar-syntax). )


<br>

### A função loop {#loop}
A função loop suporta a execução em paralelo e é executada de novo aproximadamente a cada 10 ms enquanto o código está a correr.  
Na função loop escreve-se sobretudo código que define repetidamente o valor de variáveis ou que deteta e trata determinados eventos do robô.  

No exemplo seguinte, a velocidade de roda e a cor do LED do robô HamsterS mudam com o tempo.  
( Se dentro de uma função alterares uma variável declarada fora de setup / loop, declara-a aí com a palavra-chave `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # de cada vez que a função loop é chamada, o valor de frame aumenta 1

    # com o valor alterado de frame, definir as duas velocidades de roda e os valores RGB dos dois LEDs
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( A sintaxe das instâncias de robô e dos métodos é descrita mais adiante com mais detalhe em [O sistema de sintaxe básica da programação de robôs no RobomationLAB](#grammar-syntax). )  

No exemplo seguinte, o LED acende-se a vermelho quando se dá um toque no corpo do robô HamsterS (Tap).  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # no momento em que ocorre um toque, o evento é detetado
    if hamster_s.tap():               # se o evento for detetado, True
        hamster_s.set_led_color('both', 'red')   # acender os dois LEDs a vermelho
    else:
        hamster_s.turn_off('both')               # desligar os dois LEDs
```
( A sintaxe da deteção de eventos (`tap()`) e restante é descrita mais adiante com mais detalhe em [O sistema de sintaxe básica da programação de robôs no RobomationLAB](#grammar-syntax). )  

<br><br>

## O sistema de sintaxe básica da programação de robôs no RobomationLAB {#grammar-syntax}
Ao escrever código nos programas para programar robôs do RobomationLAB aplica-se o sistema de sintaxe básica seguinte.  
O controlo do robô é feito através do pacote Python `robomation`:  
cria-se uma instância do robô e depois chamam-se os métodos dessa instância.

### Importar o pacote robomation {#import-package}
Para poderes usar as classes (robôs) e os utilitários (`Utils`) de que precisas para controlar o robô, a linha seguinte fica no início do código.

```python
from robomation import *
```

<br>

### Criar uma instância de robô {#create-instance}
Declara o robô que vais usar como instância.  
O nome da classe indica o tipo de robô e o número entre parênteses, o índice da instância (começa em 0).

```python
hamster_s = HamsterS(0)   # um HamsterS
```

Os nomes de classe e os nomes de variável predefinidos de cada robô são:

| Robô | Nome da classe | Nome de variável predefinido |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Se usares vários robôs do mesmo tipo, declara-os com índices ascendentes 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Métodos para controlar o robô {#control-methods}
Para controlar o robô chamam-se os métodos da instância.  
Os métodos executam as ações do robô: definir a velocidade das rodas, avançar, LED, som e mais.

```python
hamster_s.set_wheel_speed('both', 50)    # definir as duas velocidades de roda
hamster_s.move_distance(10, 'cm')        # avançar 10 cm
hamster_s.set_led_color('both', 'red')   # os dois LEDs a vermelho
```

Os métodos que cada robô oferece e os seus parâmetros estão no documento desse robô (p. ex. «HamsterS»).

<br>

### Ler sensores e estados {#sensor}
Também para ler valores de sensores ou estados do robô se chamam métodos; o método devolve o valor.

```python
left = hamster_s.floor('left')        # ler o valor do sensor de chão esquerdo
dist = hamster_s.proximity('right')   # ler o valor do sensor de proximidade direito
```

<br>

### Detetar eventos {#event}
Os eventos que ocorrem por alterações de estado ou do ambiente detetam-se porque  
o método de evento correspondente devolve True no momento em que o evento ocorre.

```python
if hamster_s.tap():        # no momento em que ocorre um toque, True
    hamster_s.set_led_color('both', 'red')
```

<br>

### Aguardar que uma ação termine (wait) {#wait}
Os métodos que demoram a terminar — avançar, virar, reproduzir som — têm um parâmetro `wait`.
- `wait=True` (valor predefinido): aguarda-se até a ação terminar e depois é executado o código seguinte.
- `wait=False`: a ação é iniciada e o código seguinte é executado logo em seguida.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # aguarda até o movimento terminar
hamster_s.move_distance(10, 'cm', wait=False)   # inicia o movimento e executa logo o código seguinte
```

<br>

### Funções utilitárias (Utils) {#utils}
As funções comuns que não dependem do tipo de robô — atraso, reproduzir som, registar, cores — usam-se através dos métodos da classe `Utils`.

```python
Utils.wait(1)              # aguardar 1 segundo
Utils.speak('Olá')         # reproduzir texto como voz (TTS)
Utils.log(0, '', '')       # registar na consola
```

<br>
