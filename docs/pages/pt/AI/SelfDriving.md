---
title: Condução autónoma por câmara
---

# Condução autónoma por câmara

## Declarar a instância {#instance}

Se acrescentares um bloco de Condução autónoma por câmara(SelfDriving) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
self_driving = SelfDriving(0)
# se existirem várias instâncias
self_driving_1 = SelfDriving(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a condução autónoma por câmara.

<BlockImage module="AI/SelfDriving" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Definir a cor das faixas {#set_lane_color}

Define a cor da faixa esquerda e da direita.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| left | Opção de lista | Cor da faixa esquerda | vermelho(red), verde(green), azul(blue) | - |
| right | Opção de lista | Cor da faixa direita | vermelho(red), verde(green), azul(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Detetar uma vez {#detect_once}

Procura as cores ou faixas escolhidas na imagem e marca as suas zonas exatamente uma vez.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Iniciar / parar a deteção contínua {#detect_continuous}

Segue as cores ou faixas escolhidas na imagem continuamente e marca as suas zonas no ecrã.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção de cores ou faixas é mostrado na imagem da câmara ou não.

<BlockImage module="AI/SelfDriving" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Dados da faixa {#lane_data}

Devolve a posição ou a distância da faixa indicada.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| lane | Opção de lista | Faixa | esquerda(left), direita(right) | - |
| unit | Opção de lista | Tipo de medida | x, distância(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Dados da cor {#color_data}

Devolve a posição e o tamanho da cor indicada.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | vermelho(red), verde(green), azul(blue) | - |
| unit | Opção de lista | Tipo de coordenada / tamanho | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Distância entre duas zonas de cor {#color_to_color}

Devolve a distância entre duas cores.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Opção de lista | Primeira cor | vermelho(red), verde(green), azul(blue) | - |
| unit2 | Opção de lista | Segunda cor | vermelho(red), verde(green), azul(blue) | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # distância
self_driving.get_distance('green', 'blue', 'horizontal')  # distância horizontal
```

## Faixa detetada? {#lane_detected}

Se foi encontrada uma determinada faixa

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| lane | Opção de lista | Faixa | esquerda(left), direita(right), ambas(both), qualquer(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Zona de cor detetada? {#color_detected}

Se foi encontrada uma determinada zona de cor

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Opção de lista | Nome da cor | vermelho(red), verde(green), azul(blue), qualquer(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
