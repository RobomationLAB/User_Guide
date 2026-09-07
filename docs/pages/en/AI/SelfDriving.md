---
title: Camera Self Driving
---

# Camera Self Driving

## Instance declaration {#instance}

When you add a Camera Self Driving block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
self_driving = SelfDriving(0)
# When there are multiple instances
self_driving_1 = SelfDriving(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for camera self driving.

<BlockImage module="AI/SelfDriving" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Set the lane colors {#set_lane_color}

Sets the color of the left and right lanes.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| left | Dropdown option | Left lane color | red, green, blue | - |
| right | Dropdown option | Right lane color | red, green, blue | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Detect once {#detect_once}

Finds the selected colors/lanes on the screen and marks their regions just once.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Parameters

(none)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the screen for the selected colors/lanes and marks their regions on the screen.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Show the detection result {#display}

Decides whether or not to show the color/lane detection result on the camera screen.

<BlockImage module="AI/SelfDriving" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Lane data {#lane_data}

Returns the position or distance value of the specified lane.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| lane | Dropdown option | Lane | left, right | - |
| unit | Dropdown option | Kind of measurement | x, distance | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Color data {#color_data}

Returns the position/size values of the specified color.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | red, green, blue | - |
| unit | Dropdown option | Kind of coordinate/size | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Distance between two colors {#color_to_color}

Returns the distance between two colors.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown option | First color | red, green, blue | - |
| unit2 | Dropdown option | Second color | red, green, blue | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # distance
self_driving.get_distance('green', 'blue', 'horizontal')  # horizontal distance
```

## Whether a lane was detected {#lane_detected}

Whether a particular lane was found

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| lane | Dropdown option | Lane | left, right, both, any | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Whether a color was detected {#color_detected}

Whether a particular color region was found

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | red, green, blue, any | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
