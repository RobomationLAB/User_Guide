---
title: Object Detection
---

# Object Detection

## Instance declaration {#instance}

When you add an Object Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
object_detection = ObjectDetection(0)
# When there are multiple instances
object_detection_1 = ObjectDetection(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for object detection.

<BlockImage module="AI/ObjectDetection" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Load the model {#load_model}

Loads the trained object model. This step is required in order to use the features of the 'Object Detection' module.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| wait | Checkbox | Whether to wait for loading to complete | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Set the maximum object count {#max_objects}

Sets the maximum number of objects that can be found. The object count ranges from 0 to 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Maximum object count | Integer 0 to 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Set the confidence threshold {#confidence_threshold}

Sets the minimum probability (confidence) for object detection. Only results whose probability (confidence) is at or above this value are shown on screen. The probability (confidence) ranges from 0 to 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Confidence threshold | Real number 0 to 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Detect once {#detect_once}

Finds the objects currently on screen and marks them just once.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Parameters

(none)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the objects currently on screen and marks them on the screen.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Show the detection result {#display}

Decides whether or not to show the object detection result on the camera screen.

<BlockImage module="AI/ObjectDetection" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Object position information {#object_data}

Returns the position/size values of the specified object.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Object name | 80 object classes (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'`, and so on) | - |
| pos | Dropdown option | Coordinate | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Object rectangle information {#object_square}

Returns the position/size values of the rectangle around the specified object region.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Object name | 80 object classes | - |
| pos | Dropdown option | Rectangle information | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Distance between two objects {#object_distance}

Returns the distance between two object classes.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Dropdown option | First object name | 80 object classes | - |
| unit2 | Dropdown option | Second object name | 80 object classes | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # distance
object_detection.get_distance('person', 'car', 'horizontal')  # horizontal distance
```

## Object confidence {#object_confidence}

The probability (confidence) that the selected object is correct

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Object name | 80 object classes | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Model state {#model_state}

Returns the loading state of the object model.  
It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Parameters

(none)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Whether an object was detected {#detected}

Whether an object was found

<BlockImage module="AI/ObjectDetection" id="detected" />

### Parameters

(none)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Was a particular object detected? {#object_detected}

Whether the selected object was found

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Object name | 80 object classes | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
