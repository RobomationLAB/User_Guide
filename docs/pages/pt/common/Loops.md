---
title: Ciclos
---

# Ciclos

Existem dois tipos de controlo de ciclo:  
as **condições** e os **ciclos** (aqueles que controlam quantas vezes o corpo é executado de acordo com o valor das variáveis)


## Repetir {#controls_repeat}

O bloco **repetir** mais simples executa o código do corpo o número de vezes indicado. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Contar com {#controls_for}

O bloco **contar com** (que quase sempre se chama **for loop**) vai aumentando uma variável desde o primeiro valor até ao terceiro com o passo indicado (o segundo valor) e executa o corpo uma vez para cada valor.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Para cada item {#controls_forEach}

O bloco **para cada item** funciona de forma parecida, mas em vez de uma série de números usa os valores de uma lista pela ordem.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Repetir enquanto / até {#controls_while}

O bloco **repetir enquanto** repete o corpo enquanto a condição for verdadeira.  
O bloco **repetir até** repete o corpo enquanto a condição for falsa e sai do ciclo no momento em que a condição passa a verdadeira.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Interromper o ciclo / próxima iteração {#controls_flow_statements}

Com o bloco **interromper** podes **sair do ciclo antes do tempo**.  
**Próxima iteração** (na maioria das linguagens de programação, **continue**) ignora o resto do código do corpo e começa a iteração (passagem) seguinte.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
