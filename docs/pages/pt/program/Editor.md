---
title: Editor
---

# Editor

O **editor** é a área em que podes escrever, com **blocos** ou com **código de script**, o código para controlar o robô.  
A seguir são apresentadas as formas de programar nos ambientes de **programação com blocos / programação com scripts (Python)** e os pontos a que tens de dar atenção.

## Editor de programação com blocos {#block-editor}

### Categorias de blocos {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

É a área em que os blocos oferecidos pelo RobomationLAB estão organizados por **categorias**.  
Se clicares numa categoria, podes ver a **paleta de blocos** dessa categoria.  

Estes são os tipos de categorias de blocos oferecidos por predefinição.  

- Lógica
- Ciclos
- Matemática
- Texto
- Lista
- Cor
- Áudio
- Controlo
- Variáveis
- Funções
- Outros

Além destas, se acrescentares ao programa um [**robô**](Menu#robot) ou um [**módulo de extensão**](Menu#extension), passas a ter no programa a paleta de blocos própria desse robô ou módulo.  

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

As categorias de blocos que acrescentaste ao programa e já não usas podem ser retiradas das categorias de blocos com **clique com o botão direito do rato → Remover**.

<br>

### Paleta de blocos {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

É a área que reúne todos os blocos de cada categoria.  
Os blocos que estão na paleta de blocos podem ser levados para a área de programação por **Drag&Drop**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Nota**  
Se quiseres ver como se usa um bloco, com **clique com o botão direito do rato → Ajuda** podes abrir, para cada bloco, a ajuda que descreve a forma de o usar.  

<br>

### Área de programação {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

É a área em que podes montar os blocos que trouxeste da paleta de blocos.  


Os blocos montados são convertidos em tempo real em **código Python** e, quando executas o código, esse código é interpretado e move e controla o robô.  

<br>

### Estrutura básica dos blocos {#block-structure}

Ao programar no editor de programação com blocos tens de respeitar a estrutura básica seguinte.

<BlockImage module="program/Editor" id="block-structure" /><br>

O editor de programação com blocos interpreta e executa o código que está dentro dos blocos de função **função de configuração** e **função de repetição**.  
Por isso, tens de escrever o código pondo blocos dentro dos blocos de função **função de configuração** e **função de repetição**.  

**função de configuração**  
Dentro do bloco de função função de configuração definem-se as ações a executar no início, quando o código é executado.  
Com o bloco **Aguardar** podes fazer com que as ações sejam executadas ordenadas no tempo.  

**função de repetição**  
Dentro do bloco de função função de repetição definem-se as ações a executar repetidamente enquanto o código está a correr.  
As ações definidas são executadas de novo a cada 10 ms.  

**⚙️ Nota**  
(Com exceção das funções personalizadas criadas através da **categoria Funções**)  
Os blocos que estão fora dos blocos de função **função de configuração** ou **função de repetição** não têm nenhum efeito quando o código é executado.  

<br>

### Como usar os blocos {#block-usage}

**Acrescentar um bloco**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

O bloco que queres acrescentar **arrasta-se da paleta de blocos** e **larga-se no editor**: assim é acrescentado.   
<br>

**Copiar / colar blocos**  

Há duas formas de copiar e colar blocos no editor.  

1. Escolhe um bloco e pressiona **Ctrl+C**: o bloco escolhido é **copiado**.  
Se pressionares **Ctrl+V**, o último bloco copiado é **colado** no editor.  

2. Escolhe um bloco e clica no menu **Editar** no botão **«Copiar Ctrl+C»**: o bloco escolhido é **copiado**.  
Se clicares no menu **Editar** no botão **«Colar Ctrl+V»**, o último bloco copiado é **colado** no editor.

<br>

**Eliminar blocos**  

Há três formas de eliminar blocos no editor.

1. Escolhe um bloco e pressiona **Backspace**: o bloco escolhido é eliminado.<br>  

2. O bloco que queres eliminar **arrasta-se no editor** e **larga-se nas categorias de blocos**: assim é eliminado.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. O bloco que queres eliminar **arrasta-se no editor** e **larga-se na papeleira**: assim é eliminado.  
Os blocos eliminados podem ser vistos outra vez na **papeleira**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Selecionar vários blocos ao mesmo tempo**  

Há duas formas de selecionar vários blocos ao mesmo tempo no editor.

1. Se mantiveres a tecla **Shift** pressionada e arrastares pela área de trabalho ou clicares nos blocos um a um,  
podes selecionar vários blocos ao mesmo tempo.  

2. Com o **botão de visto** em baixo à direita da área de trabalho ativas ou desativas o modo «selecionar vários blocos».  
Se o botão estiver preenchido com cor, o modo está ativado.  
Se o botão não estiver preenchido com cor, o modo está desativado.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Enquanto o modo «selecionar vários blocos» está ativado, só podes selecionar blocos.   
Se quiseres mover ou editar em conjunto os vários blocos escolhidos, tens de terminar a seleção e desativar o modo.  

<br>

**Opções adicionais**

Além disso, se clicares num bloco com o **botão direito do rato**,  
encontras várias opções adicionais, como **reduzir/expandir o bloco, ativá-lo/desativá-lo e Ajuda**.  

<br>

## Editor de Python {#python-editor}

### Paleta de código {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

É a área em que as **funções básicas** de que precisas para programar robôs e os **códigos Python** próprios dos robôs e dos módulos de extensão estão organizados por **categorias**.  


Estes são os tipos de categorias de código oferecidos nas funções básicas (Códigos).  

- Lógica (logic)
- Ciclos (loops)
- Matemática (math)
- Texto (text)
- Lista (lists)
- Cor (color)
- Áudio (audio)
- Controlo (control)

Os códigos oferecidos nas funções básicas têm todos o mesmo papel que os blocos básicos do editor de programação com blocos.  

<br>

**⚙️ Nota**  
A forma de programar no editor de Python usando a paleta de código encontras em [**Como usar a paleta de código**](#python-codes-usage).

<br>

### Editor de código {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

É a área em que podes escrever o código para controlar o robô.  


Se em [**Definições do editor**](Menu#editor-settings) escolheres o editor **Python**, podes escrever código Python.

<br>

### Estrutura básica do código {#python-structure}

Ao programar no editor de código tens de respeitar a estrutura básica seguinte.

```python
from robomation import *

# (se vais usar um robô, declará-lo como instância, exemplo)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

O editor de código interpreta e executa o código que está dentro da função **setup** e da função **loop**.  
Por isso, tens de escrever o código dentro da função **setup** e da função **loop**.  
Além disso, para controlar o robô, `from robomation import *` fica no início do código e o robô que vais usar tem de ser declarado como instância.

**setup**  

Dentro da função setup definem-se as ações a executar no início, quando o código é executado.  
Com a função **Utils.wait** podes fazer com que as ações sejam executadas ordenadas no tempo.  

**loop**  
Dentro da função loop definem-se as ações a executar repetidamente enquanto o código está a correr.  
As ações definidas são executadas de novo a cada 10 ms.  


<br>

### Como usar a paleta de código {#python-codes-usage}

A seguir descreve-se, com exemplos simples, **como usar a paleta de código na programação**.  

### Encontrar o código que queres {#python-codes-find}

A paleta de código oferece várias funções e códigos de que precisas para programar robôs.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Se olhares para os menus dentro da categoria **Códigos**, vês que alguns têm o ícone <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Se clicares uma vez no menu **Lógica**, o ícone passa a <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> e os **submenus** que estão dentro dele são expandidos e ficam visíveis.  
A um menu que tem submenus deste modo chama-se «**categoria**».  

Se um menu não tiver o ícone <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, como **ternário** dentro da categoria **Lógica**, isso significa que esse menu **já não tem submenus**.  
A um menu que não tem submenus deste modo chama-se «**código**».  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Se clicares outra vez numa categoria com os submenus expandidos, o ícone volta a <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> e os submenus são escondidos.  

Percorrendo as categorias desta forma, encontras na paleta de código o código que queres.

<br>

### Inserir código no editor {#python-codes-insert}

A forma de inserir código no editor é a seguinte.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Um menu com o ícone <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> à esquerda do nome é um menu que não tem **opções de código** para escolher.  
É o caso da maioria dos menus de **categoria**, que têm submenus.

Um menu com o ícone <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> à esquerda do nome é um menu em que podes escolher **opções de código**.  
É o caso da maioria dos menus de **código**, que não têm submenus.

Se clicares com o **botão direito do rato** no código que queres inserir no editor, vês as opções que podes escolher.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Se clicares com o botão direito num menu de **código**, vês sempre as mesmas opções, sem diferença entre as funções básicas e os códigos próprios dos robôs e dos módulos de extensão.

- **Inserir código**: insere o código escolhido na posição do cursor no editor.
- **Ajuda**: abre a ajuda que descreve a forma de usar esse código.
- **Cancelar**: fecha o menu de opções.

Nos códigos próprios dos robôs e dos módulos de extensão, se escolheres **Inserir código**, o código é inserido na forma de uma chamada a um método dessa instância de robô.  
( p. ex. o `set_wheel_speed` do HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Nota**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

As categorias de código próprias dos robôs / módulos de extensão que acrescentaste ao programa e já não usas  
podem ser retiradas da paleta de código com **clique com o botão direito do rato → Remover**.

<br>
