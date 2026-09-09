---
title: Detecção de objetos
---

# Detecção de objetos

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção de objetos(ObjectDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
object_detection = ObjectDetection(0)
# se existirem várias instâncias
object_detection_1 = ObjectDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a deteção de objetos.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Carregar o modelo de objetos {#load_model}

Carrega o modelo de objetos treinado. Este passo é indispensável para usar as funções do módulo «Detecção de objetos».

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Definir número máximo de objetos {#max_objects}

Determina quantos objetos podem ser encontrados no máximo. O intervalo do número de objetos é 0 ~ 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Número máximo de objetos | inteiro 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Definir o limiar de confiança {#confidence_threshold}

Define a probabilidade (confiança) mínima para a deteção de objetos. Só são mostrados no ecrã os objetos com uma probabilidade (confiança) acima desse valor. O intervalo da probabilidade (confiança) é 0 ~ 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada (bloco) | Limiar de confiança | decimal 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Detetar objeto uma vez {#detect_once}

Procura os objetos na imagem atual e marca-os exatamente uma vez.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Iniciar / parar a deteção contínua de objetos {#detect_continuous}

Segue os objetos na imagem atual continuamente e marca-os no ecrã.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção de objetos é mostrado na imagem da câmara ou não.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Posição dos objetos {#object_data}

Devolve a posição e o tamanho do objeto indicado.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do objeto | 80 classes de objeto (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'`, etc.) | - |
| pos | Opção de lista | Coordenada | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Retângulo do objeto {#object_square}

Devolve a posição e o tamanho do retângulo que envolve a zona do objeto indicado.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do objeto | 80 classes de objeto | - |
| pos | Opção de lista | Dado do retângulo | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Distância entre dois objetos {#object_distance}

Devolve a distância entre duas classes de objeto.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Opção de lista | Nome do primeiro objeto | 80 classes de objeto | - |
| unit2 | Opção de lista | Nome do segundo objeto | 80 classes de objeto | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # distância
object_detection.get_distance('person', 'car', 'horizontal')  # distância horizontal
```

## Confiança do objeto {#object_confidence}

A probabilidade (confiança) de o objeto escolhido ter sido reconhecido corretamente

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do objeto | 80 classes de objeto | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Estado de carregamento do modelo de objetos {#model_state}

Devolve o estado de carregamento do modelo de objetos.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Objeto detetado? {#detected}

Se foi encontrado um objeto

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parâmetros

(nenhum)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Determinado objeto detetado? {#object_detected}

Se o objeto escolhido foi encontrado

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do objeto | 80 classes de objeto | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
