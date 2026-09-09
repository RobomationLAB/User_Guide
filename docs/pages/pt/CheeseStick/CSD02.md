---
title: CSD-02 LED RGB
---

# CSD-02 LED RGB

## Declarar a instância {#instance}

Se acrescentares um bloco de CSD-02 LED RGB(CSD02) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Iniciar o LED RGB {#start}

Começa a usar o LED RGB.  
Sem este bloco, o LED RGB não é ativado.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Definir a cor {#set_color}

Define a cor do LED do CSD02 para a cor indicada.  
Se escolheres uma cor na palete de cores, ela é passada como **nome da cor** (texto em inglês). (O código não é gerado com valores numéricos R, G, B, mas com o nome da cor.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Cor | Escolha na palete de cores → nome da cor (inglês) | Nome da cor: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Definir a cor com um bloco da categoria Cor {#set_color_with_block}

Recebe como entrada um bloco da categoria Cor (p. ex. uma matriz `[R, G, B]`) e define com ele a cor do LED do CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (cor) | Saída de um bloco da categoria Cor ou uma matriz `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Alterar a cor com valores RGB {#change_by_rgb}

Soma as alterações de R, G e B introduzidas à cor atual do LED e define assim uma cor nova.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| r | Entrada (campo) | Alteração de vermelho | inteiro -255 ~ 255 | 0 |
| g | Entrada (campo) | Alteração de verde | inteiro -255 ~ 255 | 0 |
| b | Entrada (campo) | Alteração de azul | inteiro -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Desligar o LED {#turn_off}

Apaga a cor do LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parâmetros

(nenhum)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
