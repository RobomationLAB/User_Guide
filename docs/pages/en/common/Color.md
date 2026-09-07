---
title: Color
---

# Color

Colors are used in a variety of graphics programs. 


## Basic colors {#color_picker}

The simplest way to get a color is to use the **color palette**.  
Clicking the white rounded square opens the color palette, where you can choose the color you want.

<BlockImage module="common/color" id="color_picker" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Color | Color preset | black, red, yellow, green,<br>cyan, blue, magenta, white | - |

### Python
```python
# e.g. when the red preset is selected
Utils.color('red')
```

## Slider color {#color_slider}

The **slider color** block lets you mix a color yourself using a wheel and a bar slider.  
Clicking the white rounded square opens a circular color wheel for adjusting the **red (R), green (G), blue (B)** values, together with a bar slider for adjusting the **brightness**.

<BlockImage module="common/color" id="color_slider" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Color | Color wheel + brightness slider | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# color selected on the color wheel → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB color {#color_rgb}

The **RGB color** block builds an RGB array by specifying the red, green, and blue values individually.

<BlockImage module="common/color" id="color_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| r | Input (block) | Red value | Integer 0 to 255 | - |
| g | Input (block) | Green value | Integer 0 to 255 | - |
| b | Input (block) | Blue value | Integer 0 to 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Random color {#color_random}

The **random color** block generates a random RGB color each time it is called.

<BlockImage module="common/color" id="color_random" />

### Parameters

(none)

### Python
```python
Utils.random_color()
```
