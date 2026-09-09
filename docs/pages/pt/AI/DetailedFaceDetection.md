---
title: Detecção facial detalhada
---

# Detecção facial detalhada

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção facial detalhada detalhada(DetailedFaceDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
detailed_face_detection = DetailedFaceDetection(0)
# se existirem várias instâncias
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a câmara {#device}

Define a câmara para a deteção facial detalhada.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Carregar o modelo facial {#load_model}

Carrega o modelo facial treinado. Este passo é indispensável para usar as funções do módulo «Detecção facial detalhada».

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Detetar rosto uma vez {#detect_once}

Procura o rosto na imagem atual e marca-o exatamente uma vez.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Iniciar / parar a deteção contínua de rosto {#detect_continuous}

Segue o rosto na imagem atual continuamente e marca-o no ecrã.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção facial é mostrado na imagem da câmara ou não.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coordenada das partes do rosto {#face_data}

Devolve a coordenada de cada parte do rosto.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Parte do rosto | rosto(face), olho esquerdo(left eye), olho direito(right eye), boca(mouth), nariz(nose), lábio superior(upper lip), lábio inferior(lower lip), canto esquerdo da boca(left lip), canto direito da boca(right lip), pupila esquerda(left pupil), pupila direita(right pupil) | - |
| pos | Opção de lista | Coordenada | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Retângulo das partes do rosto {#face_square}

Devolve a posição e o tamanho do retângulo que envolve uma parte do rosto.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Parte do rosto | rosto(face), olho esquerdo(left eye), olho direito(right eye), boca(mouth) | - |
| pos | Opção de lista | Dado do retângulo | posição x mín.(min_x), posição x máx.(max_x), posição y mín.(min_y), posição y máx.(max_y), largura(width), altura(height), área(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Distância entre duas partes {#distance}

Devolve a distância entre duas partes do rosto.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Opção de lista | Primeira parte | Nome de uma parte do rosto | - |
| unit2 | Opção de lista | Segunda parte | Nome de uma parte do rosto | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # distância
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # distância horizontal
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # distância vertical
```

## Estado de carregamento do modelo facial {#model_state}

Devolve o estado de carregamento do modelo facial.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Rosto detetado? {#detected}

Se foi encontrado um rosto

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parâmetros

(nenhum)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
