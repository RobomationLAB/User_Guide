---
title: Expressão facial
---

# Expressão facial

## Declarar a instância {#instance}

Se acrescentares um bloco de Expressão facial(FaceExpression) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
face_expression = FaceExpression(0)
# se existirem várias instâncias
face_expression_1 = FaceExpression(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir a câmara {#device}

Define a câmara para o reconhecimento de idade, género e expressão facial.

<BlockImage module="AI/FaceExpression" id="device" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Nome do dispositivo de câmara | Etiqueta de câmara do sistema | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Carregar o modelo de expressão facial {#load_model}

Carrega os modelos treinados de idade, género e expressão facial. Este passo é indispensável para usar as funções do módulo «Expressão facial».

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| wait | Caixa de verificação | Aguardar que o carregamento termine | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Detetar uma vez {#detect_once}

Analisa o rosto na imagem atual e mostra exatamente uma vez os valores estimados de idade, género e expressão facial.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Iniciar / parar a deteção contínua {#detect_continuous}

Analisa o rosto na imagem atual continuamente e mostra no ecrã os valores estimados de idade, género e expressão facial.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Mostrar o resultado {#display}

Determina se o resultado do reconhecimento de idade, género e expressão facial é mostrado na imagem da câmara ou não.

<BlockImage module="AI/FaceExpression" id="display" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| on | Opção de lista | Visualização ON / OFF | mostrar(on=True), ocultar(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Idade {#age}

A idade

<BlockImage module="AI/FaceExpression" id="age" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Género {#gender}

O género

<BlockImage module="AI/FaceExpression" id="gender" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Expressão facial {#expression}

A expressão facial

<BlockImage module="AI/FaceExpression" id="expression" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Género detetado? {#gender_detected}

Se o género foi reconhecido

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## O género é ~ ? {#gender_check}

Devolve como **verdadeiro(True) / falso(False)** se o género reconhecido corresponde ao valor indicado.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Género | masculino(male), feminino(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Confiança do género {#gender_confidence}

A probabilidade (confiança) do género escolhido

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Género | masculino(male), feminino(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Expressão facial detetada? {#expression_detected}

Se a expressão facial foi reconhecida

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## A expressão facial é ~ ? {#expression_check}

Devolve como **verdadeiro(True) / falso(False)** se a expressão facial reconhecida corresponde ao valor indicado.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Expressão facial | zangado(angry), enojado(disgusted), assustado(fearful), feliz(happy), neutro(neutral), triste(sad), surpreendido(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Confiança da expressão facial {#expression_confidence}

A probabilidade (confiança) da expressão facial escolhida

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Expressão facial | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Estado de carregamento do modelo {#model_state}

Devolve o estado de carregamento dos modelos de idade, género e expressão facial.  
Se ainda não estiver carregado, devolve 0; durante o carregamento, 1; depois de carregado, 2.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parâmetros

(nenhum)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
