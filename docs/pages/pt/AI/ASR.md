---
title: Conversão de fala em texto
---

# Conversão de fala em texto

## Declarar a instância {#instance}

Se acrescentares um bloco de Conversão de fala em texto(ASR) à área de trabalho, no código Python é inserida automaticamente a declaração de instância seguinte:

```python
asr = ASR(0)
# se existirem várias instâncias
asr_1 = ASR(1)
```

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| index | Opção de lista | Número da instância (começa em 0) | inteiro ≥ 0 | 0 |


## Definir o idioma {#lang}

Define o idioma do reconhecimento de voz. Mesmo que não definas nenhum idioma, é escolhido um automaticamente.

<BlockImage module="AI/ASR" id="lang" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Código de idioma do reconhecimento | Códigos dos 21 idiomas que o programa suporta (p. ex. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## Iniciar / parar o reconhecimento de voz {#listen}

Inicia ou para o reconhecimento de voz.

<BlockImage module="AI/ASR" id="listen" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| unit | Opção de lista | Ação | iniciar(start), parar(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Resultado do reconhecimento de voz {#result}

O resultado do reconhecimento de voz

<BlockImage module="AI/ASR" id="result" />

### Parâmetros

(nenhum)

### Python
```python
asr = ASR(0)

asr.result()
```

## O reconhecimento de voz está ativo? {#state}

Devolve como **verdadeiro(True) / falso(False)** se o reconhecimento de voz está ativo.

<BlockImage module="AI/ASR" id="state" />

### Parâmetros

(nenhum)

### Python
```python
asr = ASR(0)

asr.is_active()
```
