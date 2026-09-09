---
title: Menu superior
---

# Menu superior

No **menu superior** estão reunidas as funções mais usadas do programa: ligar o adaptador e os robôs, guardar e abrir ficheiros e outras.  
A seguir são descritas por ordem as funções de cada menu. 

## Logótipo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

É o logótipo do programa.  
Se clicares no logótipo, a página é recarregada. 

Quando o **editor de programação com blocos** está ativo, o texto do logótipo aparece como **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Quando o **editor de Python** está ativo, o texto do logótipo aparece como **Script Composer**.  

<br>

## Procurar adaptador {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Aqui podes **procurar o adaptador que comunica com o robô e ligá-lo ao programa**.

Para poderes controlar um robô no programa, tens primeiro de ligar ao programa o adaptador que comunica com o robô.  
A esse processo chama-se **emparelhamento**. 

Se clicares no botão **Adaptador**, é apresentada a lista dos adaptadores disponíveis no PC.  
Escolhe na lista o adaptador que queres e clica no botão **Ligar**: o adaptador é ligado ao programa.  

### Verificar o estado da ligação do adaptador {#dongle-status}

Um adaptador que já tenha estado ligado ao programa é ligado automaticamente nas utilizações seguintes.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Quando o adaptador está corretamente ligado ao programa, o ícone passa a **azul-claro**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Se no separador do navegador houver um ícone como o da imagem seguinte, podes ver que o adaptador está ligado.  

<br>

**⚠️ Atenção**  

Se o adaptador já estiver ligado a outro programa ou a outra página, não é ligado a este programa.  
Nesse caso, procura o programa a que o adaptador está ligado, desliga-o aí, volta a esta página e tenta ligar outra vez.

<br>

## Selecionar robô {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Aqui podes **escolher o robô que vais usar** no programa e **registar a informação desse robô e os respetivos blocos/códigos de script**. 

Para poderes controlar um robô no programa, tens primeiro de acrescentar ao programa a informação e os blocos do robô que vais usar.

<BlockImage module="program/Menu" id="robot-select" /><br>

Se clicares no botão **Robô**, aparece uma janela com a lista dos robôs disponíveis no programa.  

Escolhe o robô que queres e clica no botão **Adicionar**: a informação desse robô e os respetivos blocos/códigos de script são registados no programa.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Quando um robô é acrescentado, são criados os itens seguintes. 


- **Block Composer**: na [**paleta de blocos**](Editor#block-editor) à esquerda são criados os **blocos** próprios desse robô 
- **Script Composer**: na [**paleta de código**](Editor#python-editor) à esquerda são criados os **códigos de script** próprios desse robô

Assim podes mover e controlar livremente o hardware real do robô — sensores, motores, LED e mais.  

<br>

**⚙️ Nota**

No RobomationLAB podes ligar e usar tantos robôs quantos quiseres, independentemente do tipo e da quantidade.  

Mas, se quiseres ligar e usar vários robôs ao mesmo tempo, têm de estar ligados ao programa tantos adaptadores quantos robôs queres usar, e tens de acrescentar ao programa tantos robôs quantos queres usar.  

<br>

## Selecionar módulo de extensão {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Os módulos de extensão são módulos que oferecem **funções ampliadas baseadas em IA: reconhecimento de voz, reconhecimento de imagem, análise de imagem e mais**.  
Aqui podes **escolher o módulo de extensão que vais usar** no programa e **registar a informação desse módulo e os respetivos blocos/códigos de script**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Se clicares no botão **Extensão**, aparece um ecrã com a lista dos módulos de extensão disponíveis no programa.  
- Conversão de fala em texto
- Detecção facial
- Detecção facial detalhada
- Expressão facial
- Detecção de mãos
- Detecção corporal
- Detecção de objetos
- Detecção de cores
- Detecção de marcadores ArUco
- Condução autónoma por câmara

Se clicares no módulo que queres, a informação desse módulo de extensão e os respetivos blocos/códigos de script são registados no programa, tal como em [**Selecionar robô**](#robot). 

Quando acrescentas ao programa um módulo de extensão que usa a câmara, como **Detecção facial** ou **Detecção de mãos**,  
é criado um módulo de câmara no separador [**Pré-visualização - Câmara**](Preview#camera) e podes ligar uma câmara ao programa e usá-la.  

Se já não precisares de um módulo de extensão que escolheste, podes retirá-lo da lista com **clique com o botão direito → Remover**.

<br>

## Som {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Aqui podes escolher sons para usar na programação ou acrescentar ao programa sons que tens no teu computador.

### Escolher um som {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Se clicares no botão **Som**, aparece um ecrã onde podes escolher entre os vários sons que o programa oferece.  
Podes usar as funções seguintes.  
- Procurar um som
- ▶ Ouvir a pré-escuta do som
- Acrescentar o som à lista de sons (painel da esquerda)

### Funções ampliadas {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Se clicares no botão de **extensão** em baixo à esquerda (caixa vermelha) ou passares o rato por cima, aparecem três opções de funções ampliadas.  
Podes usar as funções seguintes.
- Acrescentar um ficheiro local: acrescenta um ficheiro de áudio que está no computador do utilizador 
- Gravar um som: acrescenta um som gravado pelo próprio utilizador
- Acrescentar um som aleatório: acrescenta um som escolhido ao acaso de toda a lista de sons

### Usar sons na programação {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Os sons acrescentados à lista de sons (painel da esquerda) podem ser usados na programação.

- Na **programação com blocos** podes escolher o som que queres no menu suspenso do bloco **reproduzir som**.  

- Na **programação com scripts** podes escolher o som que queres nas subopções da função **«reproduzir som»** da categoria **Códigos - Áudio**.  

Quando o código é executado, o som escolhido é reproduzido pelos altifalantes do computador do utilizador.

<br>

## Exemplo {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Se houver um robô acrescentado ao programa, podes abrir e experimentar exemplos simples para cada robô.

### Escolher um exemplo {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Se clicares no botão Exemplo, aparece o ecrã **Selecionar exemplo** que vês acima.   
Com a **divisão por categorias** e a **pesquisa** encontras rapidamente o exemplo que queres. 

### Abrir um exemplo {#example-load}
1. Clica no menu **Exemplo** para abrir o ecrã **Selecionar exemplo** e escolhe o exemplo que queres. 
2. O ecrã é recarregado e o exemplo aparece na área de programação.   
3. Depois de abrires o exemplo, podes ver logo o que ele faz clicando no **botão de execução (▶)**, sem mais nada. 

<br>

## Editar {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


É a função com que podes anular ou repetir o que fizeste.
- Copiar (Ctrl+C): copia os blocos ou o código selecionados.
- Colar (Ctrl+V): cola na área de trabalho os blocos ou o código copiados.
- Desfazer (Ctrl+Z): anula a última ação.
- Refazer (Ctrl+Y): repete a ação anulada. 

<br>

## Ficheiro {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Aqui podes gerir ficheiros: criar código novo, guardar num ficheiro o código que escreveste, abrir ficheiros e mais.

- Novo  
Reinicia o código em que estás a trabalhar e cria código novo.

- Guardar projeto  
Guarda o ficheiro do projeto em que estás a trabalhar.  
O ficheiro é guardado na pasta «Descargas» do computador do utilizador e a extensão do ficheiro é «.block».

- Exportar código Python  
Extrai o código Python do projeto em que estás a trabalhar e guarda-o num ficheiro.  
O ficheiro é guardado na pasta «Descargas» do computador do utilizador e a extensão do ficheiro é «.py».  
O ficheiro guardado pode ser aberto e executado num ambiente de desenvolvimento Python externo, como o VSCode.

- Abrir projeto  
Abre um ficheiro de projeto ou um ficheiro de código Python que está no computador do utilizador.  
As extensões de ficheiro que se podem abrir são «.block» e «.py».  
Um ficheiro «.block» abre no editor de programação com blocos e um ficheiro «.py» abre no editor de Python.  
Atenção: ao abrir um ficheiro «.py», se ele não corresponder ao formato de código do Block Composer ou tiver erros de sintaxe, pode não ser aberto corretamente.

<br>

## Executar / parar o código {#run-stop}

### Executar (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Interpreta e executa o código de blocos ou o código de script escrito no editor que está ativo.  

Conforme o código que escreveste, podes controlar o robô ligado ao programa.  
Enquanto o código está a ser executado, não podes alterar o código escrito.

### Parar (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Para a execução do código.


<br>

## Programação com IA {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Se clicares no botão **Programação com IA** do menu superior, abre-se à direita do ecrã o painel do chatbot de IA.  
Podes conversar com o **chatbot de IA** integrado no RobomationLAB e programar em conjunto com a IA.

Podes usar as funções seguintes.
- Podes fazer livremente perguntas sobre programação: como escrever e alterar código, sintaxe, conceitos e mais.
- **Se ocorrer um erro durante a execução do código**, podes perguntar à IA por que motivo ocorreu e como resolvê-lo, e resolver o problema rapidamente.
- O código que a IA apresenta copia-se facilmente com o botão de copiar à direita do bloco de código.
- A conversa é guardada e podes continuá-la, e também podes começar uma **conversa nova**.
- Podes ajustar a largura do painel arrastando a sua margem esquerda.

<br>

## Copiar código {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Aqui podes copiar para a área de transferência o código escrito no editor que está ativo.  

### Block Composer (programação com blocos) {#copy-block}

É copiado o código Python apresentado no separador **[Pré-visualização de Python](Preview#python-preview)**.

### Script Composer (Python) {#copy-python}
É copiado tal e qual o código escrito no editor de Python.  

O código copiado pode ser colado onde quiseres com Ctrl+V.

<br>

## Definições do editor {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Podes escolher entre **Bloco** e **Python** o editor com que queres programar.  

Mesmo que mudes de editor, o código que escreveste antes mantém-se, e podes continuar a programar a qualquer momento. 

**※ O editor de programação com blocos e o editor de Python correspondem-se um a um: quando mudas de editor, o código que escreveste é convertido e continua no outro.**

### Editor de programação com blocos {#editor-settings-block}
Se escolheres Bloco, o logótipo passa a **Block Composer**.  
Os blocos que escreves no editor de programação com blocos são convertidos em tempo real em código Python, e podes ver o resultado da conversão no separador **Pré-visualização - Pré-visualização de Python**.  

### Editor de Python {#editor-settings-python}
Se escolheres Python, o logótipo passa a **Script Composer**.  
O código que escreves no editor de Python é convertido em blocos quando voltas a mudar para o **editor de programação com blocos**.  

> No entanto, a conversão de Python para blocos só funciona com código que possa ser representado como blocos.  
> Com sintaxe errada ou com código que não pode ser convertido em blocos, a mudança para o editor de programação com blocos pode não acontecer; nesse caso é também apresentado o motivo da falha.

<br>

## Definições {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Aqui podes fazer as definições básicas do programa.

### Idioma {#settings-language}
Altera o idioma (país) em que o programa é apresentado.  
Podes escolher o idioma que queres usar de entre 21 idiomas.

### Adaptador {#settings-dongle}
- Desligar: desliga todos os adaptadores ligados ao programa.
- Ligar: volta a ligar o adaptador ao programa.

### Reposição {#settings-reset}
- Repor programa: todos os dados registados no programa (informação dos robôs, blocos/códigos de script, definições e mais) são repostos.

<br>

## Suporte {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Aqui encontras os guias e os materiais externos de que precisas para usar o programa.  

- Tutorial: oferece um tutorial para quem usa o programa pela primeira vez.
- Ajuda: dentro do programa podes ver logo como se usam os blocos e o código Python, com exemplos.
- Guia do utilizador: vai para a página Wiki do guia do utilizador do RobomationLAB.  
Oferece descrições detalhadas dos componentes do programa e da forma de os usar, e das funções e da sintaxe de cada bloco/código de script.
- Laboratório Robomation: vai para a página principal do RobomationLAB.
- Início: vai para o site oficial da empresa Robomation.
- YouTube: vai para a página de YouTube da Robomation.
- Loja online: vai para a página da loja online da Robomation.
- Sobre: aqui podes ver a versão do programa e o histórico de atualizações, os termos de utilização, a política de privacidade e mais.
- Contacte-nos: aqui podes colocar dúvidas que tenhas ao usar o programa, comunicar erros e mais.

<br>
