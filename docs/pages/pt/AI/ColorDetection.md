---
title: Detecção de cores
---

# Detecção de cores

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção de cores(ColorDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
color_detection = ColorDetection(0)
# se existirem várias instâncias
color_detection_1 = ColorDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a deteção de cores.

<BlockImage module="AI/ColorDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Adicionar uma cor-alvo {#register_color}

Adiciona uma cor que a deteção de cores deve reconhecer.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | preto(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Remover uma cor-alvo {#delete_color}

Retira a cor indicada das cores que a deteção de cores deve reconhecer.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | preto(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |
| wait | Caixa de verificação | Aguardar que termine | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Definir a condição de deteção por área {#area_condition}

Determina o tamanho mínimo da área que é reconhecida como zona de cor. Só são mostradas no ecrã as zonas cuja área excede esse valor.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Valor da condição de área | decimal ≥ 0 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Detetar cor uma vez {#detect_once}

De entre as cores adicionadas, procura as que estão na imagem atual e marca as suas zonas exatamente uma vez.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Iniciar / parar a deteção contínua de cores {#detect_continuous}

De entre as cores adicionadas, segue as que estão na imagem atual continuamente e marca as suas zonas no ecrã.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção de cores é mostrado na imagem da câmara ou não.

<BlockImage module="AI/ColorDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Posição da zona de cor {#color_data}

Devolve a posição e o tamanho da cor indicada.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | preto(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |
| pos | Opção de lista | Tipo de coordenada / tamanho | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Determinada cor detetada? {#color_detected}

Se a cor escolhida foi encontrada

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | preto(black), vermelho(red), amarelo(yellow), verde(green), ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
