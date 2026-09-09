---
title: Outros
---

# Outros

Na programação com blocos, os **blocos de outros** são formados por código que não afeta o comportamento do robô.  
Podes acrescentar comentários ou terminar a execução do código.  

## Comentário de uma linha {#comment}

Com o bloco **comentário de uma linha** podes acrescentar uma **explicação** sem afetar a execução do código.  
Os comentários tornam o código mais legível e mais fácil de manter.

<BlockImage module="common/others" id="comment" />

### Python
```python
# conteúdo do comentário
```

## Comentário de várias linhas {#long_comment}

Com o bloco **comentário de várias linhas** podes escrever de uma vez um comentário com várias linhas.  
Cada linha recebe automaticamente a marca de comentário; as linhas vazias mantêm-se.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
primeira linha
segunda linha

quarta linha
"""
```

## Link {#link}

Com o bloco **link** podes acrescentar através de um **comentário** o **link de uma página** que queiras abrir.  
Se clicares no botão **abrir**, vais para a página do link introduzido.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Sair {#exit}

O bloco **sair** para imediatamente a execução do código do programa.  
É útil se quiseres acrescentar uma saída forçada em determinadas condições.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
