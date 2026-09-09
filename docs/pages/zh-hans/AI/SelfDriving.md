---
title: 摄像头自动驾驶
---

# 摄像头自动驾驶

## 声明实例 {#instance}

把摄像头自动驾驶(SelfDriving) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
self_driving = SelfDriving(0)
# 有多个实例时
self_driving_1 = SelfDriving(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于摄像头自动驾驶的摄像头。

<BlockImage module="AI/SelfDriving" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## 设置车道线颜色 {#set_lane_color}

设置左侧 / 右侧车道线的颜色。

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| left | 下拉选项 | 左侧车道线颜色 | 红色(red), 绿色(green), 蓝色(blue) | - |
| right | 下拉选项 | 右侧车道线颜色 | 红色(red), 绿色(green), 蓝色(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## 检测一次颜色/车道线 {#detect_once}

在画面中找出所选的颜色 / 车道线，只标示一次它们的区域。

<BlockImage module="AI/SelfDriving" id="detect_once" />

### 参数

（无）

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## 开始 / 停止持续颜色/车道线检测 {#detect_continuous}

针对所选的颜色 / 车道线持续跟踪画面，并在画面上标示它们的区域。

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示颜色 / 车道线检测的结果。

<BlockImage module="AI/SelfDriving" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## 车道线数据 {#lane_data}

返回指定车道线的位置或距离值。

<BlockImage module="AI/SelfDriving" id="lane_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| lane | 下拉选项 | 车道线 | 左侧(left), 右侧(right) | - |
| unit | 下拉选项 | 测量种类 | x, 距离(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## 颜色区域数据 {#color_data}

返回指定颜色的位置 / 大小值。

<BlockImage module="AI/SelfDriving" id="color_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 红色(red), 绿色(green), 蓝色(blue) | - |
| unit | 下拉选项 | 坐标 / 大小种类 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## 两个颜色区域之间的距离 {#color_to_color}

返回两个颜色之间的距离。

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉选项 | 第一个颜色 | 红色(red), 绿色(green), 蓝色(blue) | - |
| unit2 | 下拉选项 | 第二个颜色 | 红色(red), 绿色(green), 蓝色(blue) | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # 距离
self_driving.get_distance('green', 'blue', 'horizontal')  # 水平距离
```

## 检测到车道？ {#lane_detected}

是否找到了特定的车道线

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| lane | 下拉选项 | 车道线 | 左侧(left), 右侧(right), 两侧(both), 任意(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## 检测到颜色区域？ {#color_detected}

是否找到了特定的颜色区域

<BlockImage module="AI/SelfDriving" id="color_detected" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 红色(red), 绿色(green), 蓝色(blue), 任意(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
