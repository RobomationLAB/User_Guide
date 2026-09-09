---
title: Controlo
---

# Controlo

Na programação com blocos, os **blocos de controlo** determinam o fluxo do programa.  
Podem aguardar um certo tempo, detetar teclas premidas, registar mensagens e mais.


## Aguardar {#wait_sec}

Aguarda o tempo indicado (em segundos) e depois executa a instrução seguinte.

<BlockImage module="common/control" id="wait_sec" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| sec | Entrada (campo) | Tempo de espera — um **número literal** (p. ex. `Utils.wait(0.5)`) | decimal ≥ 0 | - |
| sec | Entrada (bloco) | Tempo de espera — uma **variável/expressão** (p. ex. `Utils.wait(time)`) | decimal ≥ 0 | - |

### Python
```python
# campo sec = 2 → sem alteração (em segundos)
Utils.wait(2)

# entrada através de uma variável
Utils.wait(myVar)
```

## Aguardar um fotograma {#wait_1msec}

Interrompe a execução do programa durante um fotograma (cerca de 0,001 segundos).

<BlockImage module="common/control" id="wait_1msec" />

### Parâmetros

(nenhum — fixo em 0,001 segundos)

### Python
```python
Utils.wait(0.001)
```

<!--
## Aguardar indefinidamente {#wait_forever}

Para a execução do programa e aguarda indefinidamente.

### Parâmetros

(nenhum)

### Python
```python
Utils.wait_forever()
```
-->

## Tecla premida {#key_pressed}

Devolve como **verdadeiro(True) / falso(False)** se uma determinada tecla está premida.

<BlockImage module="common/control" id="key_pressed" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| key | Entrada | Nome da tecla | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Registar {#log}

Apresenta em tempo real o valor de uma variável ou propriedade na janela **Consola**.

<BlockImage module="common/control" id="log" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| data | Entrada | O valor que é apresentado | qualquer valor | - |
| tag | Entrada | Etiqueta do registo | texto | - |
| unit | Entrada | Indicação da unidade | texto | - |

### Python
```python
Utils.log(data, '', '')
```

## Apresentar gráfico {#scope}

Apresenta a variação de um valor como gráfico em tempo real na janela do **gráfico**.  
Podes definir a cor, os valores mínimo e máximo e o intervalo do gráfico.

<BlockImage module="common/control" id="scope" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| signal | Entrada (bloco) | Valor do sinal do gráfico | decimal | - |
| name | Entrada | Nome do gráfico | texto | - |
| min_val | Entrada (campo) | Valor mínimo do gráfico | decimal | - |
| max_val | Entrada (campo) | Valor máximo do gráfico | decimal | - |
| color | Cor | Cor do gráfico (hex) | texto hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
