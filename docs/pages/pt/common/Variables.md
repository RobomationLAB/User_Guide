---
title: Variáveis
---

# Variáveis

Usamos a palavra variável com o mesmo significado que na matemática e noutras linguagens de programação.  
Ou seja, **um elemento com nome que guarda um valor e pode alterá-lo**.  
  
Podes criar variáveis de várias formas.  

- Alguns blocos, como [contar com](Loops#controls_for) e [para cada item](Loops#controls_forEach), usam uma variável e determinam o seu valor.  
Essas variáveis chamam-se tradicionalmente **variáveis de ciclo (loop variables)**.  
- Também as [funções definidas pelo utilizador](Functions#procedures_defnoreturn) usam variáveis para definir parâmetros ou argumentos.
- Com o bloco **definir variável** podes criar uma variável em qualquer momento; essa variável é declarada como **variável global (global variable)**.  
- O ambiente de programação com blocos do RobomationLAB não suporta **variáveis locais (local variables)**.  

Se clicares na lista de um bloco de variável, aparecem as opções seguintes.  

- São apresentados todos os nomes das variáveis já definidas no programa.  
- **"Mudar o nome da variável"**: muda o nome dessa variável em todo o programa. Se escolheres esta opção, aparece uma janela onde podes escrever o nome novo.  
- **"Eliminar a variável"**: elimina todos os blocos do programa que fazem referência a esta variável. 


## Definir variável {#variables_set}

O bloco **definir** atribui um valor a uma variável.  
Se essa variável ainda não estiver declarada no código, é primeiro declarada uma variável nova e depois atribuído o valor.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Alterar o valor {#math_change}

O bloco **alterar** soma um número ao valor de uma variável.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Obter o valor {#variables_get}

O bloco seguinte dá o valor guardado numa variável, mas não o altera.  
Também podes usar este bloco sem o bloco de definição, mas essa não é uma boa forma de programar.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
