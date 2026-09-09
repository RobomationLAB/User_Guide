---
title: Color
---

# Color

El color se usa en todo tipo de programas gráficos. 


## Color básico {#color_picker}

La forma más sencilla de obtener un color es la **paleta de colores**.  
Si haces clic en el rectángulo redondeado blanco, aparece la paleta de colores y puedes elegir el color que quieras.

<BlockImage module="common/color" id="color_picker" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Color | Color preestablecido | negro(black), rojo(red), amarillo(yellow), verde(green),<br>cian(cyan), azul(blue), magenta(magenta), blanco(white) | - |

### Python
```python
# por ejemplo: al elegir el preestablecido rojo
Utils.color('red')
```

## Color del control deslizante {#color_slider}

Con el bloque **color del control deslizante** puedes componer un color tú mismo con un control circular y una barra deslizante.  
Si haces clic en el rectángulo redondeado blanco, aparecen una rueda de color circular con la que ajustas los valores de **rojo (R), verde (G) y azul (B)** y una barra deslizante con la que ajustas el **brillo**.

<BlockImage module="common/color" id="color_slider" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| color | Color | Rueda de color + control de brillo | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# el color que eliges en la rueda de color → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Color RGB {#color_rgb}

El bloque **color RGB** crea una matriz RGB indicando por separado los valores de rojo, verde y azul.

<BlockImage module="common/color" id="color_rgb" />

### Parámetros

| Nombre | Tipo | Descripción | Rango / Tipo | Valor predeterminado |
| --- | --- | --- | --- | --- |
| r | Entrada (bloque) | Valor de rojo | entero 0 ~ 255 | - |
| g | Entrada (bloque) | Valor de verde | entero 0 ~ 255 | - |
| b | Entrada (bloque) | Valor de azul | entero 0 ~ 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Color aleatorio {#color_random}

El bloque **color aleatorio** crea un color RGB aleatorio cada vez que se llama.

<BlockImage module="common/color" id="color_random" />

### Parámetros

(ninguno)

### Python
```python
Utils.random_color()
```
