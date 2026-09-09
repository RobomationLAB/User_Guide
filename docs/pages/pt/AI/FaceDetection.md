---
title: Detecção facial
---

# Detecção facial

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção facial(FaceDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
face_detection = FaceDetection(0)
# se existirem várias instâncias
face_detection_1 = FaceDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para a deteção facial.

<BlockImage module="AI/FaceDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Carregar o modelo facial {#load_model}

Carrega o modelo facial treinado. Este passo é indispensável para usar as funções do módulo «Detecção facial».

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Detetar rosto uma vez {#detect_once}

Procura o rosto na imagem atual e marca-o exatamente uma vez.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Iniciar / parar a deteção contínua de rosto {#detect_continuous}

Segue o rosto na imagem atual continuamente e marca-o no ecrã.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção facial é mostrado na imagem da câmara ou não.

<BlockImage module="AI/FaceDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Posição das partes do rosto {#face_data}

Devolve as coordenadas de posição do rosto ou de uma parte do rosto.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Parte do rosto | rosto(face), olho esquerdo(left eye), olho direito(right eye), orelha esquerda(left ear), orelha direita(right ear), nariz(nose), boca(mouth) | - |
| pos | Opção de lista | Tipo de coordenada | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Retângulo do rosto {#face_square}

Devolve a posição e o tamanho do retângulo que envolve a zona do rosto.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| pos | Opção de lista | Dado do retângulo | posição x mín.(min_x), posição x máx.(max_x), posição y mín.(min_y), posição y máx.(max_y), largura(width), altura(height), área(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Distância entre duas partes {#distance}

Devolve a distância entre duas partes do rosto.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Opção de lista | Primeira parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Opção de lista | Segunda parte | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # distância
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # distância horizontal
face_detection.get_distance('nose', 'mouth', 'vertical')  # distância vertical
```

## Estado de carregamento do modelo facial {#model_state}

Devolve o estado de carregamento do modelo facial.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Rosto detetado? {#detected}

Se foi encontrado um rosto

<BlockImage module="AI/FaceDetection" id="detected" />

### Parâmetros

(nenhum)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
