---
title: Cor
---

# Cor

A cor é usada em todo o tipo de programas gráficos. 


## Cor básica {#color_picker}

A forma mais simples de obter uma cor é a **palete de cores**.  
Se clicares no retângulo arredondado branco, aparece a palete de cores e podes escolher a cor que quiseres.

<BlockImage module="common/color" id="color_picker" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Cor | Cor predefinida | preto(black), vermelho(red), amarelo(yellow), verde(green),<br>ciano(cyan), azul(blue), magenta(magenta), branco(white) | - |

### Python
```python
# por exemplo: ao escolher a predefinição vermelho
Utils.color('red')
```

## Cor do controlo deslizante {#color_slider}

Com o bloco **cor do controlo deslizante** podes compor uma cor com um controlo circular e uma barra deslizante.  
Se clicares no retângulo arredondado branco, aparecem uma roda de cores circular com a qual defines os valores de **vermelho (R), verde (G) e azul (B)** e uma barra deslizante com a qual defines o **brilho**.

<BlockImage module="common/color" id="color_slider" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| color | Cor | Roda de cores + controlo de brilho | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# a cor que escolhes na roda de cores → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Cor RGB {#color_rgb}

O bloco **cor RGB** cria uma matriz RGB indicando separadamente os valores de vermelho, verde e azul.

<BlockImage module="common/color" id="color_rgb" />

### Parâmetros

| Nome | Tipo | Descrição | Intervalo / Tipo | Valor predefinido |
| --- | --- | --- | --- | --- |
| r | Entrada (bloco) | Valor de vermelho | inteiro 0 ~ 255 | - |
| g | Entrada (bloco) | Valor de verde | inteiro 0 ~ 255 | - |
| b | Entrada (bloco) | Valor de azul | inteiro 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Cor aleatória {#color_random}

O bloco **cor aleatória** cria uma cor RGB aleatória em cada chamada.

<BlockImage module="common/color" id="color_random" />

### Parâmetros

(nenhum)

### Python
```python
Utils.random_color()
```
