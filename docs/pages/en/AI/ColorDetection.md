---
title: Color Detection
---

# Color Detection

## Instance declaration {#instance}

When you add a Color Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
color_detection = ColorDetection(0)
# When there are multiple instances
color_detection_1 = ColorDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for color detection.

<BlockImage module="AI/ColorDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Register a color {#register_color}

Adds a color to be recognized by color detection.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | black, red, yellow, green, cyan, blue, magenta, white | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Delete a color {#delete_color}

Deletes that color from the colors to be recognized by color detection.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | black, red, yellow, green, cyan, blue, magenta, white | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Set the area condition {#area_condition}

Sets the minimum size of the color region to recognize. Only regions whose area is at or above this value are shown on screen.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Area condition value | Real number 0 or greater | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Detect once {#detect_once}

Among the recognizable colors, finds the ones currently on screen and marks their regions just once.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Among the recognizable colors, keeps following the ones currently on screen and marks their regions on the screen.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the color detection result on the camera screen.

<BlockImage module="AI/ColorDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Color information {#color_data}

Returns the position/size values of the specified color.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | black, red, yellow, green, cyan, blue, magenta, white | - |
| pos | Dropdown option | Kind of coordinate/size | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Whether a particular color was detected {#color_detected}

Whether the selected color was found

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | black, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
