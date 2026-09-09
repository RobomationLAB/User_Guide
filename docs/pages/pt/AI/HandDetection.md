---
title: Detecção de mãos
---

# Detecção de mãos

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção de mãos(HandDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
hand_detection = HandDetection(0)
# se existirem várias instâncias
hand_detection_1 = HandDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a deteção de mãos.

<BlockImage module="AI/HandDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Carregar o modelo de mãos {#load_model}

Carrega o modelo de mãos treinado. Este passo é indispensável para usar as funções do módulo «Detecção de mãos».

<BlockImage module="AI/HandDetection" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Definir o alvo {#max_hands}

Determina se a deteção de mãos se baseia numa mão ou nas duas.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Número de mãos | uma mão(one), as duas mãos(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Detetar mão uma vez {#detect_once}

Procura a mão na imagem atual e marca-a exatamente uma vez.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Iniciar / parar a deteção contínua de mãos {#detect_continuous}

Segue a mão na imagem atual continuamente e marca-a no ecrã.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção de mãos é mostrado na imagem da câmara ou não.

<BlockImage module="AI/HandDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Posição das partes da mão {#hand_data}

Devolve a posição da palma ou do pulso da mão indicada.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| side | Opção de lista | Lado da mão | esquerda(left), direita(right) | - |
| unit | Opção de lista | Parte da mão | palma(palm), pulso(wrist) | - |
| pos | Opção de lista | Tipo de coordenada / tamanho | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Posição das articulações dos dedos {#joint_data}

Devolve as coordenadas das articulações do dedo indicado.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| side | Opção de lista | Lado da mão | esquerda(left), direita(right) | - |
| unit | Opção de lista | Dedo | polegar(thumb), índice(index), médio(middle), anelar(ring), mindinho(pinky) | - |
| joint | Opção de lista | Posição da articulação | primeira articulação(first), segunda articulação(second), terceira articulação(third), ponta do dedo(last) | - |
| pos | Opção de lista | Coordenada | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Retângulo da mão {#hand_square}

Devolve a posição e o tamanho do retângulo que envolve a zona da mão indicada.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| side | Opção de lista | Lado da mão | esquerda(left), direita(right) | - |
| unit | Opção de lista | Parte da mão | mão(hand), palma(palm) | - |
| pos | Opção de lista | Dado do retângulo | posição x mín.(min_x), posição x máx.(max_x), posição y mín.(min_y), posição y máx.(max_y), largura(width), altura(height), área(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Distância entre mão e mão {#hand_to_hand_distance}

Devolve a distância entre duas partes das mãos.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primeira parte da mão | Mão: `'side_unit'` (p. ex. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Entrada (texto) | Segunda parte da mão | Mão: `'side_unit'` (p. ex. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mão ↔ mão / distância
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Distância entre mão e dedo {#hand_to_joint_distance}

Devolve a distância entre uma parte da mão e uma articulação de um dedo.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primeira parte | Mão: `'side_unit'` (p. ex. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Entrada (texto) | Segunda parte | Dedo: `'side_unit_joint'` (p. ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# mão ↔ articulação do dedo / distância horizontal
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Distância entre dedo e dedo {#joint_to_joint_distance}

Devolve a distância entre duas articulações dos dedos.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Entrada (texto) | Primeira parte | Dedo: `'side_unit_joint'` (p. ex. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Entrada (texto) | Segunda parte | Dedo: `'side_unit_joint'` (p. ex. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# articulação do dedo ↔ articulação do dedo / distância vertical
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Estado de carregamento do modelo de mãos {#model_state}

Devolve o estado de carregamento do modelo de mãos.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Mão detetada? {#detected}

Se foi encontrada uma mão

<BlockImage module="AI/HandDetection" id="detected" />

### Parâmetros

(nenhum)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
