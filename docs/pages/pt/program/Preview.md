---
title: Pré-visualização
---

# Pré-visualização

A **pré-visualização** é a área que serve de apoio à programação de robôs: aqui vês o **estado da ligação dos robôs** e tens também o código, a câmara, a consola e mais.  
A seguir são descritas as funções que podes usar em cada separador.

## Estado da ligação dos robôs {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

No separador do estado da ligação dos robôs podes ver a informação dos robôs que estão ligados neste momento.   
Se clicares em **Mostrar valor do sensor em tempo real**, podes ver em tempo real os valores dos sensores do robô, como gráfico ou como número.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Podes escolher o sensor que queres consultar; os tipos de sensor suportados são diferentes de robô para robô.  
Conforme o sensor escolhido, o gráfico e a forma de apresentar os dados mudam automaticamente para se adaptarem aos valores desse sensor. 

2. Podes escolher com que intervalo, em segundos, os valores do sensor são consultados ou registados.  
Conforme o intervalo escolhido, muda o tempo máximo durante o qual os dados podem ser registados e apresentados no gráfico. 
3. Se passares o rato por cima do gráfico do sensor, podes ver ao mesmo tempo, em tempo real, o valor do sensor nesse momento. 
4. Iniciar/parar o registo: regista os dados do sensor. 
5. Exportar: guarda em ficheiros os dados de sensor registados (.csv) e o ecrã do gráfico (.png).  
Esta função só pode ser usada depois de teres registado dados. 
6. Capturar: guarda em tempo real o ecrã do gráfico atual (.png).  
Podes registar a variação dos valores do sensor e guardar em ficheiros os dados registados e o ecrã do gráfico.    

<br>

## Pré-visualização de Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Na pré-visualização de Python podes ver em tempo real como os blocos são convertidos em código **Python** quando os acrescentas ou os retiras.  
Vendo ao mesmo tempo como os blocos são convertidos em código, aprendes a sintaxe da programação com mais facilidade. 

※ A pré-visualização de Python só existe no **editor de programação com blocos**.  
No editor de Python é o próprio utilizador que escreve o código, por isso não há pré-visualização.

<br>

## Câmara {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

No separador da câmara podes ver em tempo real a imagem de uma câmara ligada ao PC.  

Esta função só fica ativa **se tiveres acrescentado ao programa um módulo de extensão que usa a câmara**; nesse caso é criado um módulo de câmara no separador da câmara.  

Em cada módulo de câmara podes usar as funções seguintes.
- Podes escolher uma das câmaras disponíveis no PC e apresentar a sua imagem.
- Com o botão **Ligada / Desligada** podes apresentar ou parar a imagem da câmara.
- Podes alterar a **resolução da câmara**.

<br>

## Consola {#console}

No separador da consola podes ver em tempo real as mensagens de registo (Log) que saem durante a execução do programa e os gráficos do osciloscópio (Scope).  
Este separador serve para depurar, monitorizar valores de sensores, fazer análises com base em gráficos e mais.  

### Registo {#console-log}
Com o bloco **Registar** podes apresentar na área de registo da consola um texto ou um valor numérico, juntamente com a etiqueta que indicares.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Osciloscópio {#console-scope}

Com o bloco **Apresentar gráfico** podes representar valores numéricos, por etiqueta, num **gráfico em tempo real**.  
Definindo o valor mínimo, o valor máximo e a cor do gráfico, vês visualmente a variação do valor que te interessa. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
