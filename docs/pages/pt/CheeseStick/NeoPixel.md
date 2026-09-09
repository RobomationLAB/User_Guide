---
title: NeoPixel
---

# NeoPixel

## Declarar a instância {#instance}

Se acrescentares um bloco de NeoPixel à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Iniciar {#start}

Usa o NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Definir modo do LED {#mode}

Define o modo do LED do NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Modo dos canais de cor | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Definir a cor de um píxel {#set_one_color}

Define a cor de um único píxel com o número indicado.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês). (O código não é gerado com valores numéricos R, G, B, mas com o nome da cor.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número do píxel (começa em 1) | inteiro ≥ 1 | - |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Definir a cor de um píxel com um bloco da categoria Cor {#set_one_color_with_block}

Recebe como entrada um bloco da categoria Cor e define com ele a cor de um píxel.  
A saída do bloco de cor (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, que devolvem todos `[R, G, B]`) é desempacotada com `*` (asterisco) e passada como argumentos r, g, b a `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número do píxel (começa em 1) | inteiro ≥ 1 | - |
| data | Entrada (cor) | Bloco da categoria Cor ou uma matriz `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Alterar a cor de um píxel com valores RGB {#change_one_by_rgb}

Soma as alterações aos valores RGB atuais do píxel indicado e define assim uma cor nova.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número do píxel (começa em 1) | inteiro ≥ 1 | - |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Apagar um píxel {#turn_off_one}

Apaga a cor do LED n.  
O intervalo dos números de LED é 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| idx | Entrada (campo) | Número do píxel (começa em 1) | inteiro ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Definir o padrão de um intervalo {#set_range_pattern}

Define o padrão de cor de todos os LEDs do intervalo indicado.  
O intervalo dos números de LED é 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| pattern | Opção de lista | Nome do padrão de cor | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Definir a cor de um intervalo {#set_range_color}

Define a mesma cor para todo o intervalo de píxeis indicado.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês).

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Definir a cor de um intervalo com um bloco da categoria Cor {#set_range_color_with_block}

Recebe como entrada um bloco da categoria Cor e define com ele a cor de um intervalo de píxeis.  
A saída do bloco de cor (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) é desempacotada com `*` (asterisco) e passada como argumentos r, g, b a `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| data | Entrada (cor) | Bloco da categoria Cor ou uma matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Alterar a cor de um intervalo com valores RGB {#change_range_by_rgb}

Soma as alterações RGB à cor atual do intervalo de píxeis indicado e define assim uma cor nova.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Apagar as cores de um intervalo {#turn_off_range}

Apaga as cores de todos os LEDs do intervalo indicado.  
O intervalo dos números de LED é 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Definir a cor de um em cada n LEDs de um intervalo {#set_range_increment_color}

Define, dentro do intervalo de píxeis indicado, a cor de um em cada `increment` LEDs.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês).  
(p. ex. acender só os LEDs 1, 3, 5, …)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| increment | Entrada (campo) | Intervalo (número de LEDs) | inteiro ≥ 1 | - |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Definir a cor de um em cada n LEDs de um intervalo com um bloco da categoria Cor {#set_range_increment_color_with_block}

Recebe como entrada um bloco da categoria Cor e define com ele, dentro do intervalo de píxeis indicado, a cor de um em cada n LEDs.  
A saída do bloco de cor (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) é desempacotada com `*` (asterisco) e passada como argumentos r, g, b a `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| increment | Entrada (campo) | Intervalo (número de LEDs) | inteiro ≥ 1 | - |
| data | Entrada (cor) | Bloco da categoria Cor ou uma matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Alterar a cor de um em cada n LEDs com valores RGB {#change_range_increment_by_rgb}

Soma as alterações RGB à cor atual de um em cada n LEDs e define assim uma cor nova.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| increment | Entrada (campo) | Intervalo dos passos (número de LEDs) | inteiro ≥ 1 | - |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Apagar a cor de um em cada n LEDs {#turn_off_range_increment}

Apaga as cores de todos os LEDs que correspondem ao intervalo e ao espaçamento indicados.  
O intervalo dos números de LED é 1 ~ 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| from_idx | Entrada (campo) | Número do primeiro píxel (começa em 1) | inteiro ≥ 1 | - |
| to_idx | Entrada (campo) | Número do último píxel (começa em 1) | inteiro ≥ 1 | - |
| increment | Entrada (campo) | Intervalo dos passos (número de LEDs) | inteiro ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Deslocar / rodar {#shift}

Desloca ou roda os LEDs na direção e pelo número de posições indicados.  
O intervalo dos valores que podes escolher é 1 ~ 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Tipo de ação | deslocar(shift), rodar(rotate) | - |
| direction | Opção de lista | Direção | esquerda(left), direita(right) | - |
| pixel | Entrada (campo) | Número de píxeis a deslocar | inteiro ≥ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Definir o brilho {#set_brightness}

Define o brilho do NeoPixel.  
O intervalo dos valores que podes escolher é 0 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Brilho | inteiro 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Alterar o brilho {#change_brightness}

Altera o brilho do NeoPixel.  
O intervalo dos valores que podes escolher é -100 ~ 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| value | Entrada (campo) | Alteração do brilho | inteiro -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
