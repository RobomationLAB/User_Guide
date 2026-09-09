---
title: 颜色检测
---

# 颜色检测

## 声明实例 {#instance}

把颜色检测(ColorDetection) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
color_detection = ColorDetection(0)
# 有多个实例时
color_detection_1 = ColorDetection(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于颜色检测的摄像头。

<BlockImage module="AI/ColorDetection" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## 添加到目标颜色 {#register_color}

添加要通过颜色检测识别的颜色。

<BlockImage module="AI/ColorDetection" id="register_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 黑色(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## 从目标颜色中删除 {#delete_color}

从要通过颜色检测识别的颜色中删除该颜色。

<BlockImage module="AI/ColorDetection" id="delete_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 黑色(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## 设置检测条件（面积） {#area_condition}

设定要识别的颜色区域面积的最小值。只有区域面积在这个值以上时才会显示在画面上。

<BlockImage module="AI/ColorDetection" id="area_condition" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 面积条件值 | 0 以上的实数 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## 检测一次物体 {#detect_once}

在可识别的颜色中，找出当前画面里的颜色，只标示一次它们的区域。

<BlockImage module="AI/ColorDetection" id="detect_once" />

### 参数

（无）

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## 开始 / 停止持续检测物体 {#detect_continuous}

在可识别的颜色中，持续跟踪当前画面里的颜色，并在画面上标示它们的区域。

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示颜色检测的结果。

<BlockImage module="AI/ColorDetection" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## 颜色区域信息 {#color_data}

返回指定颜色的位置 / 大小值。

<BlockImage module="AI/ColorDetection" id="color_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 黑色(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |
| pos | 下拉选项 | 坐标 / 大小种类 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## 检测到特定颜色？ {#color_detected}

是否找到了所选的颜色

<BlockImage module="AI/ColorDetection" id="color_detected" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | 黑色(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
