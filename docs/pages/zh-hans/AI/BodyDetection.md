---
title: 人体检测
---

# 人体检测

## 声明实例 {#instance}

把人体检测(BodyDetection) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
body_detection = BodyDetection(0)
# 有多个实例时
body_detection_1 = BodyDetection(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于人体检测的摄像头。

<BlockImage module="AI/BodyDetection" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## 加载人体模型 {#load_model}

加载训练好的人体模型。要使用「人体检测」模块的功能，必须先完成这一步。

<BlockImage module="AI/BodyDetection" id="load_model" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| wait | 复选框 | 是否等待加载完成 | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## 检测一次人体 {#detect_once}

找出当前画面中的身体，只标示一次。

<BlockImage module="AI/BodyDetection" id="detect_once" />

### 参数

（无）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## 开始 / 停止持续人体检测 {#detect_continuous}

持续跟踪当前画面中的身体，并在画面上标示出来。

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示人体检测的结果。

<BlockImage module="AI/BodyDetection" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## 身体部位的位置 {#body_data}

返回身体各部位的坐标。

<BlockImage module="AI/BodyDetection" id="body_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 身体部位 | 鼻子(nose), 嘴(mouth), 左眼(left eye), 右眼(right eye), 左耳(left ear), 右耳(right ear), 左肩(left shoulder), 右肩(right shoulder), 左肘(left elbow), 右肘(right elbow), 左手腕(left wrist), 右手腕(right wrist), 左手(left hand), 右手(right hand), 左髋(left hip), 右髋(right hip), 左膝(left knee), 右膝(right knee), 左脚踝(left ankle), 右脚踝(right ankle), 左脚(left foot), 右脚(right foot) | - |
| pos | 下拉选项 | 坐标 | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## 两个部位之间的距离 {#body_distance}

返回身体两处部位之间的距离。

<BlockImage module="AI/BodyDetection" id="body_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉选项 | 第一个身体部位 | （参见上面的身体部位表） | - |
| unit2 | 下拉选项 | 第二个身体部位 | （参见上面的身体部位表） | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # 距离
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # 水平距离
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # 垂直距离
```

## 身体模型加载状态 {#model_state}

返回人体模型的加载状态。  
还没有加载时返回 0，正在加载时返回 1，加载完成时返回 2。

<BlockImage module="AI/BodyDetection" id="model_state" />

### 参数

（无）

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## 检测到身体？ {#detected}

是否找到了身体

<BlockImage module="AI/BodyDetection" id="detected" />

### 参数

（无）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
