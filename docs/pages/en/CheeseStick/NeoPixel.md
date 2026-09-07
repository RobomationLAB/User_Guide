---
title: NeoPixel
---

# NeoPixel

## Instance declaration {#instance}

When you add a NeoPixel block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Start {#start}

Uses the NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Set the color mode {#mode}

Sets the LED mode of the NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Color channel mode | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Set the color of one pixel {#set_one_color}

Sets the color of a single pixel with the specified number.  
When you pick a color from the color palette, it is converted to a **color name** (an English string) for the call. (The generated code uses a color name, not R, G, B numeric values.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| idx | Input (field) | Pixel number (starting from 1) | Integer 1 or greater | - |
| color | Color | Pick from the color palette → converted to a color name (English) | Color names: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Set the color of one pixel with a Color category block {#set_one_color_with_block}

Takes a Color category block as input and sets the color of one pixel.  
The output of a color block (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, all of which return `[R, G, B]`) is unpacked with `*` (an asterisk) and passed as the r, g, b arguments of `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| idx | Input (field) | Pixel number (starting from 1) | Integer 1 or greater | - |
| data | Input (color) | A Color category block or an `[R, G, B]` array | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Change the color of one pixel by RGB {#change_one_by_rgb}

Adds the amounts of change to the current RGB values of the specified pixel to set a new color.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| idx | Input (field) | Pixel number (starting from 1) | Integer 1 or greater | - |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Turn off one pixel {#turn_off_one}

Removes the color of the nth LED.  
The LED number ranges from 1 to 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| idx | Input (field) | Pixel number (starting from 1) | Integer 1 or greater | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Set a range pattern {#set_range_pattern}

Sets the color pattern of all the LEDs in the specified range.  
The LED number ranges from 1 to 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| pattern | Dropdown option | Color pattern name | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Set the color of a range {#set_range_color}

Sets the same color for the entire specified pixel range.  
When you pick a color from the color palette, it is converted to a **color name** (an English string) for the call.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| color | Color | Pick from the color palette → converted to a color name (English) | Color names: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Set the color of a range with a Color category block {#set_range_color_with_block}

Takes a Color category block as input and sets the color of a pixel range.  
The output of a color block (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) is unpacked with `*` (an asterisk) and passed as the r, g, b arguments of `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| data | Input (color) | A Color category block or an `[R, G, B]` array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Change the color of a range by RGB {#change_range_by_rgb}

Adds the RGB amounts of change to the current color of the specified pixel range to set a new color.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Turn off the color of a range {#turn_off_range}

Removes the color of all the LEDs in the specified range.  
The LED number ranges from 1 to 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Set the color of a range every n pixels {#set_range_increment_color}

Sets the color every `increment` pixels within the specified pixel range.  
When you pick a color from the color palette, it is converted to a **color name** (an English string) for the call.  
(For example, turning on only pixels 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| increment | Input (field) | Interval (number of pixels) | Integer 1 or greater | - |
| color | Color | Pick from the color palette → converted to a color name (English) | Color names: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Set the color of a range every n pixels with a Color category block {#set_range_increment_color_with_block}

Takes a Color category block as input and sets the color every n pixels within the specified pixel range.  
The output of a color block (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) is unpacked with `*` (an asterisk) and passed as the r, g, b arguments of `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| increment | Input (field) | Interval (number of pixels) | Integer 1 or greater | - |
| data | Input (color) | A Color category block or an `[R, G, B]` array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Change a range by RGB every n pixels {#change_range_increment_by_rgb}

Adds the RGB amounts of change to the current color of the pixels every n pixels to set a new color.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| increment | Input (field) | Increment interval (number of pixels) | Integer 1 or greater | - |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Turn off the color of a range every n pixels {#turn_off_range_increment}

Removes the color of all the LEDs in the specified range and interval.  
The LED number ranges from 1 to 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| from_idx | Input (field) | Start pixel number (starting from 1) | Integer 1 or greater | - |
| to_idx | Input (field) | End pixel number (starting from 1) | Integer 1 or greater | - |
| increment | Input (field) | Increment interval (number of pixels) | Integer 1 or greater | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Shift / rotate {#shift}

Shifts or rotates the LEDs by the specified direction and number of pixels.  
The range of values you can choose is 1 to 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Kind of action | shift, rotate | - |
| direction | Dropdown option | Direction | left, right | - |
| pixel | Input (field) | Number of pixels to move | Integer 1 or greater | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Set the brightness {#set_brightness}

Sets the brightness of the NeoPixel.  
The range of values you can choose is 0 to 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| value | Input (field) | Brightness | Integer 0 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Change the brightness {#change_brightness}

Changes the brightness of the NeoPixel.  
The range of values you can choose is -100 to 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| value | Input (field) | Amount of brightness change | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
