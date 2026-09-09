---
title: Texto
---

# Texto {#text}

Exemplos de texto:
- "thing #1"
- "March 12, 2010"
- "" (texto vazio)

O texto pode conter letras maiúsculas ou minúsculas, algarismos, pontuação, outros símbolos e espaços entre palavras.  

<BlockImage module="common/text" id="text" />

## Criar texto {#text_join}

O bloco **criar texto com** junta (concatena) os valores de vários textos e cria com eles um texto novo.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Acrescentar texto {#text_append}

O bloco **acrescentar texto** acrescenta o texto dado à variável indicada.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Tamanho do texto {#text_length}

O bloco **tamanho de** conta as letras, os algarismos e o resto de um texto e devolve o tamanho total.  
O tamanho de `abc` a seguir é 3; o tamanho do texto vazio é 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Verificar se o texto está vazio {#text_isEmpty}

O bloco **está vazio** verifica se o texto dado está vazio (se o tamanho é 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Procurar texto {#text_indexOf}

Estes blocos verificam se um texto aparece dentro de outro texto e, se aparecer, devolvem a posição.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Obter uma só letra {#text_charAt}

Obtém de um texto uma letra numa determinada posição.  
Há várias opções: a primeira, a última, uma posição aleatória, a N-ésima e mais.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Obter parte do texto {#text_getSubstring}

Com o bloco **obter subsequência** podes obter o texto de um determinado intervalo.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Mudar maiúsculas e minúsculas do texto {#text_changeCase}

Este bloco converte o texto introduzido para uma das formas seguintes:

- **MAIÚSCULAS**: converte todas as letras para maiúsculas
- **minúsculas**: converte todas as letras para minúsculas
- **Iniciais Em Maiúscula**: converte apenas a primeira letra de cada palavra para maiúscula e as restantes para minúsculas

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # MAIÚSCULAS
TEXT.lower() # minúsculas
TEXT.title() # Iniciais Em Maiúscula
```

## Remover espaços {#text_trim}

O bloco seguinte remove os espaços destas posições do texto:
- de ambos os lados
- da esquerda
- da direita

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # de ambos os lados
TEXT.lstrip()   # da esquerda
TEXT.rstrip()   # da direita
```

## Contar as ocorrências de um texto noutro {#text_count}

Conta quantas vezes um subtexto aparece no texto dado e devolve esse número.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Substituir um texto dentro de outro {#text_replace}

Substitui num texto todas as ocorrências de um subtexto por outro texto.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Inverter o texto {#text_reverse}

Devolve um texto novo com a ordem do texto invertida.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Imprimir texto {#text_print}

O bloco **imprime** apresenta o valor introduzido numa janela.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Pedir a entrada do utilizador {#text_prompt_ext}

O bloco seguinte cria uma janela que pede uma entrada ao utilizador; o valor introduzido é guardado numa variável.  
Podes pedir texto ou um número.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
