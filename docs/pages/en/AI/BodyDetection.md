---
title: Body Detection
---

# Body Detection

## Instance declaration {#instance}

When you add a Body Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
body_detection = BodyDetection(0)
# When there are multiple instances
body_detection_1 = BodyDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for body detection.

<BlockImage module="AI/BodyDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Load the model {#load_model}

Loads the trained body model. This step is required in order to use the features of the 'Body Detection' module.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Detect once {#detect_once}

Finds the bodies currently on screen and marks them just once.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the bodies currently on screen and marks them on the screen.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the body detection result on the camera screen.

<BlockImage module="AI/BodyDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Coordinates of a body part {#body_data}

Returns the coordinates of each body part.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Body part | nose, mouth, left eye, right eye, left ear, right ear, left shoulder, right shoulder, left elbow, right elbow, left wrist, right wrist, left hand, right hand, left hip, right hip, left knee, right knee, left ankle, right ankle, left foot, right foot | - |
| pos | Dropdown option | Coordinate | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Distance between two parts {#body_distance}

Returns the distance between two body parts.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown option | First body part | (see the body part table above) | - |
| unit2 | Dropdown option | Second body part | (see the body part table above) | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # distance
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # horizontal distance
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # vertical distance
```

## Model state {#model_state}

Returns the loading state of the body model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Parameters

(none)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Whether a body was detected {#detected}

Whether a body was found

<BlockImage module="AI/BodyDetection" id="detected" />

### Parameters

(none)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
