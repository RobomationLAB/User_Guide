---
title: Regras de programação
---

# Regras de programação

Este documento descreve as regras de programação que tens de cumprir ao programar robôs no RobomationLAB.

> **Nota**: a programação com scripts funciona **só com Python**; os blocos são convertidos um a um em código Python que usa o pacote Python `robomation`.

> **Sobre a ordem**: primeiro as regras básicas comuns (1~2), depois as regras do código de blocos (3~5) e depois as regras do código de script Python (6~11). São importantes tanto ao gerar código de blocos como código Python.

<br>

## 1. Limitação da conversão um a um entre blocos e Python {#1}
O editor de programação com blocos e o editor de programação em Python correspondem-se um a um e são convertidos em tempo real nos dois sentidos.

- Blocos → Python: os blocos são sempre convertidos em código Python correto.
- Python → blocos: a conversão só funciona com **código que se possa representar como blocos**.

Por isso, se escreveres no editor de Python código como o seguinte, a mudança de Python para o editor de programação com blocos pode não acontecer;  
nesse caso é também apresentado o motivo da falha.

1) Código com erros de sintaxe de Python
2) Código que usa funções, métodos ou sintaxe a que não corresponde nenhum bloco (ou seja, que não estão definidos nas regras de conversão)

Para que a mudança para o editor de programação com blocos funcione sempre,  
tens de escrever o código dentro das classes, dos métodos, das funções e do alcance de sintaxe suportado que estão definidos neste documento e nos documentos de cada robô.

<br>

## 2. Regras para apresentar o código {#2}
Só podes usar as classes, os métodos e as funções que constam do **manual da API de Python do robomation** e do **documento das regras de conversão entre blocos e Python**.  
É estritamente proibido criar e usar métodos de controlo novos que não estejam definidos nesses documentos.
Só é permitido se o utilizador pedir expressamente para criar uma função nova.

As variáveis auxiliares que não aparecem nos exemplos de conversão desses documentos (ou seja, variáveis adicionais para além da variável da instância do robô) só podem ser declaradas se o utilizador pedir para criar uma variável.  
Além disso, os argumentos de um método têm obrigatoriamente de ser escritos como valores literais.  

```python
# exemplo correto
hamster_s.set_wheel_speed('both', 100)

# exemplo incorreto — uma função que não consta do manual da API
hamster_s.set_wheel('both', 100)

# exemplo incorreto — declarar uma variável arbitrária
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Estrutura básica do código de blocos {#3}
De cada vez que se apresenta código de blocos, os blocos de função superiores função de configuração e função de repetição, que servem de ponto de entrada do programa, são sempre incluídos como estrutura básica.  
Com esta regra, todo o código de blocos passa a ter a estrutura básica seguinte.

| Estrutura de blocos (Block Composer) | Apresentação (como texto) |
| --- | --- |
| função de configuração | função de configuração |
| (blocos internos) | (blocos internos) |
| função de repetição | função de repetição |
| (blocos internos) | (blocos internos) |

<br>

## 4. Formato do código de blocos (regras de mudança de linha e indentação) {#4}
- Os blocos superiores (função de configuração, função de repetição, etc.) são alinhados à esquerda.
- Cada bloco de instrução tem de ser separado com um carácter de mudança de linha, para que em cada linha seja apresentado apenas um bloco.
- Os blocos subordinados que estão dentro de um bloco com área de execução interna (se, repetir, definição de função, etc.) são indentados para que a hierarquia fique clara.

<br>

## 5. Regras para os blocos internos e a representação de condições {#5}
O valor escolhido num menu suspenso ou um valor de entrada corresponde a um argumento funcional do bloco e é inserido diretamente entre parênteses retos ([]) no lugar em que esse valor aparece no texto do bloco.  
Isso serve para reproduzir visualmente em conjunto o texto fixo do bloco e o valor que o utilizador escolheu ou introduziu.

Todo o código de blocos tem de conter a designação fixa do bloco, os valores escolhidos nos menus suspensos e os valores introduzidos pelo utilizador, todos entre parênteses retos ([]),  
para que a forma real dos blocos no Block Composer seja reproduzida como texto o mais fielmente possível.  

| Estrutura de blocos (Block Composer) | Apresentação (como texto) |
| --- | --- |
| se [condição] faça [instrução] senão [instrução] | se [condição] faça [instrução] senão [instrução] |
| RaccoonBot: definir o modo de controlo como [velocidade] | RaccoonBot: definir o modo de controlo como [velocidade] |
| RaccoonBot: definir velocidade da articulação [1] como [100] | RaccoonBot: definir velocidade da articulação [1] como [100] |

<br>

## 6. Estrutura básica do código de script {#6}
De cada vez que se apresenta código de script (Python), as funções setup() e loop(), que servem de ponto de entrada do programa, são sempre incluídas como estrutura básica.  
Além disso, `from robomation import *` fica no início do código para que estejam disponíveis as classes e os utilitários necessários para controlar o robô, e o robô que vai ser usado é declarado como instância.  
Com esta regra, todo o código de script (Python) passa a ter a estrutura básica seguinte.

```python
# estrutura básica do código Python
from robomation import *

# (se vais usar um robô, declará-lo como instância, exemplo)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. Formato do código de script (regras de mudança de linha e indentação) {#7}
- As funções superiores (setup, loop, etc.) são alinhadas à esquerda.
- A indentação depois de uma mudança de linha baseia-se obrigatoriamente em **um tabulador (`\t`)**. (igual à indentação do editor)

<br>

## 8. Regras para controlar o robô (instância / métodos) {#8}
Para controlar um robô tens de cumprir as regras seguintes.  

1) `from robomation import *` fica no início do código.
2) O robô que vai ser usado é declarado como instância. Como nome de variável usa-se o nome predefinido desse robô e o índice começa em 0.
3) O robô é controlado através da chamada dos métodos da instância declarada.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Se usares vários robôs do mesmo tipo, declara-os com índices ascendentes 0, 1, 2 … (p. ex. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Ao definir a velocidade das rodas, ao avançar e em casos parecidos, os métodos tratam internamente da inicialização necessária (por exemplo, de limpar uma ordem de movimento anterior), pelo que não tens de escrever código de preparação próprio.

<br>

## 9. Regras para chamar as funções utilitárias {#9}
As funções utilitárias comuns — atraso, reproduzir som, registar, cores — são chamadas através dos métodos da classe `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Encontras a lista detalhada das funções utilitárias nos documentos seguintes.
- [Cor](../common/Color)
- [Áudio](../common/Audio)
- [Controlo](../common/Control)

<br>

## 10. Regra de preferência pelos métodos próprios do robô {#10}
Ao controlar o hardware do robô (velocidade das rodas, LED, som, etc.)  
tens de dar preferência aos métodos próprios da instância do robô (p. ex. «HamsterS») em relação às funções utilitárias comuns.

Se, por exemplo, for preciso emitir um som com o robô,  
tens de dar preferência ao método `sound_clip()` da instância «HamsterS» em relação à função utilitária `Utils.play_sound()`.

```python
# o som sai do robô HamsterS. (recomendado)
hamster_s.sound_clip('beep')

# o som sai do PC / tablet / dispositivo móvel. (não recomendado)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Regras para os imports {#11}
Ao escrever código Python só se importam os módulos necessários para executar o código.
- Para controlar o robô, `from robomation import *` fica por princípio no início do código.
- No código que usa `math.` é acrescentado automaticamente `import math`, e no que usa `random.`, `import random`.
- Os restantes módulos que não são necessários não são importados.
