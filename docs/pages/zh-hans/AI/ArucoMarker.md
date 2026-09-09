---
title: ArUco 标记检测
---

# ArUco 标记检测

## 声明实例 {#instance}

把 ArUco 标记检测(ArucoMarker) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
aruco_marker = ArucoMarker(0)
# 有多个实例时
aruco_marker_1 = ArucoMarker(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于 ArUco 标记检测的摄像头。

<BlockImage module="AI/ArucoMarker" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## 设置最大标记数 {#max_count}

设置最多可以识别的标记个数。标记个数的范围是 0 ~ 10。

<BlockImage module="AI/ArucoMarker" id="max_count" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 最大标记数 | 0 ~ 10 的整数 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## 检测一次标记 {#detect_once}

找出当前画面中的标记，只标示一次它们的区域。

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### 参数

（无）

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## 开始 / 停止连续标记检测 {#detect_continuous}

连续跟踪当前画面中的标记，并在画面上标示它们的区域。

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示标记检测的结果。

<BlockImage module="AI/ArucoMarker" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## 标记数据 {#marker_data}

返回指定标记 ID 的位置 / 大小值。

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 标记 ID | 0 以上的整数 | - |
| unit | 下拉选项 | 测量种类 | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## 标记之间的距离 {#marker_to_marker}

返回两个标记之间的距离。

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 输入值（积木） | 第一个标记 ID | 0 以上的整数 | - |
| unit2 | 输入值（积木） | 第二个标记 ID | 0 以上的整数 | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # 距离
aruco_marker.get_distance(0, 2, 'horizontal')  # 水平距离
```

## 检测到标记？ {#marker_detected}

是否找到了具有特定 id 值的标记

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 标记 ID | 0 以上的整数 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
