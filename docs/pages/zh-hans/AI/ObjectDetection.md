---
title: 物体检测
---

# 物体检测

## 声明实例 {#instance}

把物体检测(ObjectDetection) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
object_detection = ObjectDetection(0)
# 有多个实例时
object_detection_1 = ObjectDetection(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于物体检测的摄像头。

<BlockImage module="AI/ObjectDetection" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## 加载物体模型 {#load_model}

加载训练好的物体模型。要使用「物体检测」模块的功能，必须先完成这一步。

<BlockImage module="AI/ObjectDetection" id="load_model" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| wait | 复选框 | 是否等待加载完成 | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## 设置最大物体数量 {#max_objects}

设置最多可以检测到的物体个数。物体个数的范围是 0 ~ 10。

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 最大物体数量 | 0 ~ 10 的整数 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## 设置物体检测置信度 {#confidence_threshold}

设置物体检测的最小概率（置信度）。只有概率（置信度）在这个值以上时才会显示在画面上。概率（置信度）的范围是 0 ~ 1。

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 置信度阈值 | 0 ~ 1 的实数 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## 检测一次物体 {#detect_once}

找出当前画面中的物体，只标示一次。

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### 参数

（无）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## 开始 / 停止连续物体检测 {#detect_continuous}

连续跟踪当前画面中的物体，并在画面上标示出来。

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示物体检测的结果。

<BlockImage module="AI/ObjectDetection" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## 物体的位置 {#object_data}

返回指定物体的位置 / 大小值。

<BlockImage module="AI/ObjectDetection" id="object_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 物体名称 | 80 个物体类别 (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` 等) | - |
| pos | 下拉选项 | 坐标 | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## 物体矩形信息 {#object_square}

返回指定物体区域矩形的位置 / 大小值。

<BlockImage module="AI/ObjectDetection" id="object_square" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 物体名称 | 80 个物体类别 | - |
| pos | 下拉选项 | 矩形信息 | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## 两个物体之间的距离 {#object_distance}

返回两个物体类别之间的距离。

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉选项 | 第一个物体名称 | 80 个物体类别 | - |
| unit2 | 下拉选项 | 第二个物体名称 | 80 个物体类别 | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # 距离
object_detection.get_distance('person', 'car', 'horizontal')  # 水平距离
```

## 物体的置信度 {#object_confidence}

是所选物体的概率（置信度）

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 物体名称 | 80 个物体类别 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## 物体模型加载状态 {#model_state}

返回物体模型的加载状态。  
还没有加载时返回 0，正在加载时返回 1，加载完成时返回 2。

<BlockImage module="AI/ObjectDetection" id="model_state" />

### 参数

（无）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## 检测到物体？ {#detected}

是否找到了物体

<BlockImage module="AI/ObjectDetection" id="detected" />

### 参数

（无）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## 检测到特定物体？ {#object_detected}

是否找到了所选的物体

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 物体名称 | 80 个物体类别 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
