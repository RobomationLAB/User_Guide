---
title: Detecção corporal
---

# Detecção corporal

## Declarar a instância {#instance}

Se acrescentares um bloco de Detecção corporal(BodyDetection) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
body_detection = BodyDetection(0)
# se existirem várias instâncias
body_detection_1 = BodyDetection(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |

## Definir a câmara {#device}

Define a câmara para a deteção corporal.

<BlockImage module="AI/BodyDetection" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Carregar o modelo corporal {#load_model}

Carrega o modelo corporal treinado. Este passo é indispensável para usar as funções do módulo «Detecção corporal».

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Detetar corpo uma vez {#detect_once}

Procura o corpo na imagem atual e marca-o exatamente uma vez.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Iniciar / parar a deteção contínua de corpo {#detect_continuous}

Segue o corpo na imagem atual continuamente e marca-o no ecrã.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado da deteção corporal é mostrado na imagem da câmara ou não.

<BlockImage module="AI/BodyDetection" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coordenada das partes do corpo {#body_data}

Devolve a coordenada de cada parte do corpo.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Parte do corpo | nariz(nose), boca(mouth), olho esquerdo(left eye), olho direito(right eye), orelha esquerda(left ear), orelha direita(right ear), ombro esquerdo(left shoulder), ombro direito(right shoulder), cotovelo esquerdo(left elbow), cotovelo direito(right elbow), pulso esquerdo(left wrist), pulso direito(right wrist), mão esquerda(left hand), mão direita(right hand), quadril esquerdo(left hip), quadril direito(right hip), joelho esquerdo(left knee), joelho direito(right knee), tornozelo esquerdo(left ankle), tornozelo direito(right ankle), pé esquerdo(left foot), pé direito(right foot) | - |
| pos | Opção de lista | Coordenada | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Distância entre duas partes {#body_distance}

Devolve a distância entre duas partes do corpo.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit1 | Opção de lista | Primeira parte do corpo | (ver a tabela das partes do corpo acima) | - |
| unit2 | Opção de lista | Segunda parte do corpo | (ver a tabela das partes do corpo acima) | - |
| type | Opção de lista | Tipo de distância | distância (omitido ou None), distância horizontal(horizontal), distância vertical(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # distância
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # distância horizontal
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # distância vertical
```

## Estado de carregamento do modelo corporal {#model_state}

Devolve o estado de carregamento do modelo corporal.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Corpo detetado? {#detected}

Se foi encontrado um corpo

<BlockImage module="AI/BodyDetection" id="detected" />

### Parâmetros

(nenhum)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
