---
title: ArUco Marker Detection
---

# ArUco Marker Detection

## Instance declaration {#instance}

When you add an ArUco Marker Detection block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
aruco_marker = ArucoMarker(0)
# When there are multiple instances
aruco_marker_1 = ArucoMarker(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Select the camera device {#device}

Sets the camera to use for ArUco marker detection.

<BlockImage module="AI/ArucoMarker" id="device" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Camera device name | System camera label | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Set the maximum marker count {#max_count}

Sets the maximum number of markers that can be recognized. The marker count ranges from 0 to 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Maximum marker count | Integer 0 to 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Detect once {#detect_once}

Finds the markers currently on screen and marks their regions just once.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Parameters

(none)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Start / stop continuous detection {#detect_continuous}

Keeps following the markers currently on screen and marks their regions on the screen.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Show the detection result {#display}

Decides whether or not to show the marker detection result on the camera screen.

<BlockImage module="AI/ArucoMarker" id="display" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Display ON / OFF | show (on=True), hide (off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Marker data {#marker_data}

Returns the position/size values of the specified marker ID.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Marker ID | Integer 0 or greater | - |
| unit | Dropdown option | Kind of measurement | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Distance between markers {#marker_to_marker}

Returns the distance between two markers.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit1 | Input (block) | First marker ID | Integer 0 or greater | - |
| unit2 | Input (block) | Second marker ID | Integer 0 or greater | - |
| type | Dropdown option | Kind of distance | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # distance
aruco_marker.get_distance(0, 2, 'horizontal')  # horizontal distance
```

## Whether a marker was detected {#marker_detected}

Whether a marker with the given id value was found

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Marker ID | Integer 0 or greater | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
