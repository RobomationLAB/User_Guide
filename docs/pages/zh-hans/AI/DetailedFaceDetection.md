---
title: 详细人脸检测
---

# 详细人脸检测

## 声明实例 {#instance}

把详细人脸检测(DetailedFaceDetection) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
detailed_face_detection = DetailedFaceDetection(0)
# 有多个实例时
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于详细人脸检测的摄像头。

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## 加载人脸模型 {#load_model}

加载训练好的人脸模型。要使用「详细人脸检测」模块的功能，必须先完成这一步。

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| wait | 复选框 | 是否等待加载完成 | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## 检测一次人脸 {#detect_once}

找出当前画面中的人脸，只标示一次。

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### 参数

（无）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## 开始 / 停止连续人脸检测 {#detect_continuous}

连续跟踪当前画面中的人脸，并在画面上标示出来。

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示人脸检测的结果。

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## 人脸部位的坐标 {#face_data}

返回人脸各部位的坐标。

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 人脸部位 | 人脸(face), 左眼(left eye), 右眼(right eye), 嘴(mouth), 鼻子(nose), 上唇(upper lip), 下唇(lower lip), 左嘴角(left lip), 右嘴角(right lip), 左瞳孔(left pupil), 右瞳孔(right pupil) | - |
| pos | 下拉选项 | 坐标 | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## 人脸部位矩形框信息 {#face_square}

返回人脸各部位区域矩形框的位置 / 大小值。

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 人脸部位 | 人脸(face), 左眼(left eye), 右眼(right eye), 嘴(mouth) | - |
| pos | 下拉选项 | 矩形框信息 | 最小 x 坐标(min_x), 最大 x 坐标(max_x), 最小 y 坐标(min_y), 最大 y 坐标(max_y), 宽(width), 高(height), 面积(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## 两个部位之间的距离 {#distance}

返回人脸两处部位之间的距离。

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉选项 | 第一个部位 | 人脸部位名称 | - |
| unit2 | 下拉选项 | 第二个部位 | 人脸部位名称 | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # 距离
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # 水平距离
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # 垂直距离
```

## 人脸模型加载状态 {#model_state}

返回人脸模型的加载状态。  
还没有加载时返回 0，正在加载时返回 1，加载完成时返回 2。

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### 参数

（无）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## 检测到人脸？ {#detected}

是否找到了人脸

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### 参数

（无）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
