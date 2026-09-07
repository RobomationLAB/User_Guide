---
title: Face Detection
---

# Face Detection

## Instance declaration {#instance}

When you add a Face Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
face_detection = FaceDetection(0)
# When there are multiple instances
face_detection_1 = FaceDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for face detection.

<BlockImage module="AI/FaceDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Load the model {#load_model}

Loads the trained face model. This step is required in order to use the features of the 'Face Detection' module.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Detect once {#detect_once}

Finds the faces currently on screen and marks them just once.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the faces currently on screen and marks them on the screen.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the face detection result on the camera screen.

<BlockImage module="AI/FaceDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Position of a face part {#face_data}

Returns the position coordinate of the face or of a face part.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Face part | face, left eye, right eye, left ear, right ear, nose, mouth | - |
| pos | Dropdown option | Kind of coordinate | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Face rectangle information {#face_square}

Returns the position/size values of the rectangle around the face region.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| pos | Dropdown option | Rectangle information | min x position (min_x), max x position (max_x), min y position (min_y), max y position (max_y), width, height, area | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Distance between two parts {#distance}

Returns the distance between two parts of the face.

<BlockImage module="AI/FaceDetection" id="distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown option | First part | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Dropdown option | Second part | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # distance
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # horizontal distance
face_detection.get_distance('nose', 'mouth', 'vertical')  # vertical distance
```

## Model state {#model_state}

Returns the loading state of the face model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Parameters

(none)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Whether a face was detected {#detected}

Whether a face was found

<BlockImage module="AI/FaceDetection" id="detected" />

### Parameters

(none)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
