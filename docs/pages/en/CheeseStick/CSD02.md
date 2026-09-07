---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## Instance declaration {#instance}

When you add a CSD-02 RGB LED block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Start the RGB LED {#start}

Starts using the RGB LED.  
If you do not add this block, the RGB LED is not activated.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Set the color {#set_color}

Sets the LED color of CSD02 to the specified color.  
When you pick a color from the color palette, it is converted to a **color name** (an English string) for the call. (The generated code uses a color name, not R, G, B numeric values.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Color | Pick from the color palette → converted to a color name (English) | Color names: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Set the color with a Color category block {#set_color_with_block}

Takes a Color category block (for example an `[R, G, B]` array) as input and sets the LED color of CSD02.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (color) | The output of a Color category block or an `[R, G, B]` array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Change the color by RGB {#change_by_rgb}

Adds the R, G, and B amounts you enter to the current LED color to set a new color.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Turn off LED {#turn_off}

Removes the RGB LED color.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
