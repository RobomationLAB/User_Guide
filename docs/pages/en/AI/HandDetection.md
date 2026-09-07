---
title: Hand Detection
---

# Hand Detection

## Instance declaration {#instance}

When you add a Hand Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
hand_detection = HandDetection(0)
# When there are multiple instances
hand_detection_1 = HandDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for hand detection.

<BlockImage module="AI/HandDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Load the model {#load_model}

Loads the trained hand model. This step is required in order to use the features of the 'Hand Detection' module.

<BlockImage module="AI/HandDetection" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Set the maximum number of hands {#max_hands}

Decides whether to detect based on one hand or on both hands.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Number of hands | one hand (one), both hands (both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Detect once {#detect_once}

Finds the hands currently on screen and marks them just once.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the hands currently on screen and marks them on the screen.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the hand detection result on the camera screen.

<BlockImage module="AI/HandDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Coordinates of a hand part {#hand_data}

Returns the palm/wrist position information of the specified hand.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| side | Dropdown option | Hand side | left, right | - |
| unit | Dropdown option | Hand part | palm, wrist | - |
| pos | Dropdown option | Kind of coordinate/size | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Coordinates of a finger joint {#joint_data}

Returns the joint coordinates of the specified finger.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| side | Dropdown option | Hand side | left, right | - |
| unit | Dropdown option | Finger | thumb, index, middle, ring, pinky | - |
| joint | Dropdown option | Joint position | first joint (first), second joint (second), third joint (third), last joint (last) | - |
| pos | Dropdown option | Coordinate | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Hand rectangle information {#hand_square}

Returns the position/size values of the rectangle around the specified hand region.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| side | Dropdown option | Hand side | left, right | - |
| unit | Dropdown option | Hand part | hand, palm | - |
| pos | Dropdown option | Rectangle information | min x position (min_x), max x position (max_x), min y position (min_y), max y position (max_y), width, height, area | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Distance between hand and hand {#hand_to_hand_distance}

Returns the distance between two hand parts.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Input (string) | First hand part | Hand: `'side_unit'` (e.g. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Input (string) | Second hand part | Hand: `'side_unit'` (e.g. `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ hand / distance
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Distance between hand and finger {#hand_to_joint_distance}

Returns the distance between a hand part and a finger joint.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Input (string) | First part | Hand: `'side_unit'` (e.g. `'left_palm'`). side=left/right, unit=palm/wrist/hand | - |
| unit2 | Input (string) | Second part | Finger: `'side_unit_joint'` (e.g. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# hand ↔ finger joint / horizontal distance
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Distance between finger and finger {#joint_to_joint_distance}

Returns the distance between two finger joints.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Input (string) | First part | Finger: `'side_unit_joint'` (e.g. `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Input (string) | Second part | Finger: `'side_unit_joint'` (e.g. `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# finger joint ↔ finger joint / vertical distance
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Model state {#model_state}

Returns the loading state of the hand model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/HandDetection" id="model_state" />

### Parameters

(none)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Whether a hand was detected {#detected}

Whether a hand was found

<BlockImage module="AI/HandDetection" id="detected" />

### Parameters

(none)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
