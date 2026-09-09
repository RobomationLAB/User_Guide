---
title: Funções
---

# Funções

Uma **função** é um **conjunto de instruções (blocos)** que executa uma determinada tarefa.  
Se definires como uma só função as ações que usas repetidamente, mantens o código **compacto e eficiente**.

As funções têm as características seguintes.  
- **Reutilizáveis**: se definires uma função uma vez, podes depois chamá-la tantas vezes quantas quiseres.  
- **Entrada e saída**: uma função pode receber parâmetros (valores de entrada), processá-los e devolver o resultado (valor de saída).  
- **Melhor legibilidade do código**: podes organizar o fluxo do programa de forma lógica.


## setup {#setup}

A **função setup** é executada exatamente uma vez no momento em que o código é executado.  
Na função setup escreves sobretudo código que inicializa variáveis ou que prepara os modos e as opções do robô.  
Se controlares, por exemplo, um robô que se move com rodas, na função setup podes definir a velocidade inicial das rodas.  

<BlockImage module="common/functions" id="setup" />
  
Com a função `Utils.wait(...)` podes escrever código que, através da execução sequencial, decorre ordenado no tempo. Assim, não só é possível a execução sequencial simples, mas também, juntamente com a **função loop**, que trata da execução em paralelo, uma programação de robôs muito poderosa.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

A **função loop** é chamada de novo a cada 10 ms enquanto o programa está a ser executado.  
Na função loop escreves sobretudo código que define repetidamente o valor de variáveis ou que deteta e trata determinados eventos do robô.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definir uma função {#procedures_defnoreturn}

Com o bloco que define uma função podes criar uma **função nova**.  
Uma função sem valor de retorno executa uma determinada ação, mas **não devolve nenhum valor**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definir uma função com valor de retorno {#procedures_defreturn}

Uma função com valor de retorno executa uma determinada tarefa e depois **devolve o valor resultante**, para que outros blocos o possam usar.  

<BlockImage module="common/functions" id="procedures_defreturn" />

A função a seguir **recebe os parâmetros x e y e devolve o resultado de x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Chamar uma função {#procedures_callnoreturn}

Quando defines uma função, é criado automaticamente um **bloco para essa função definida pelo utilizador**.  
Com ele podes chamar e executar a **função definida antes**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Se ... retorna {#procedures_ifreturn}

Um bloco que, dentro de uma função, **devolve imediatamente um valor** e termina a função assim que uma determinada condição se verifica.  
Este bloco só pode ser usado **dentro de uma função**; em qualquer outro lugar está desativado.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
