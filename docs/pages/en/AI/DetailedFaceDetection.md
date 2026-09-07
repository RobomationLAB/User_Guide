---
title: Detailed Face Detection
---

# Detailed Face Detection

## Instance declaration {#instance}

When you add a Detailed Face Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
detailed_face_detection = DetailedFaceDetection(0)
# When there are multiple instances
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for detailed face detection.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Load the model {#load_model}

Loads the trained face model. This step is required in order to use the features of the 'Detailed Face Detection' module.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Detect once {#detect_once}

Finds the faces currently on screen and marks them just once.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the faces currently on screen and marks them on the screen.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the face detection result on the camera screen.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Coordinates of a face part {#face_data}

Returns the coordinates of each face part.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Face part | face, left eye, right eye, mouth, nose, upper lip, lower lip, left lip, right lip, left pupil, right pupil | - |
| pos | Dropdown option | Coordinate | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Face part rectangle information {#face_square}

Returns the position/size values of the rectangle around each face part region.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Face part | face, left eye, right eye, mouth | - |
| pos | Dropdown option | Rectangle information | min x position (min_x), max x position (max_x), min y position (min_y), max y position (max_y), width, height, area | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Distance between two parts {#distance}

Returns the distance between two face parts.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown option | First part | A face part name | - |
| unit2 | Dropdown option | Second part | A face part name | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # distance
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # horizontal distance
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # vertical distance
```

## Model state {#model_state}

Returns the loading state of the face model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Parameters

(none)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Whether a face was detected {#detected}

Whether a face was found

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Parameters

(none)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
