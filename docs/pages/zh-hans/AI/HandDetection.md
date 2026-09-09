---
title: 手部检测
---

# 手部检测

## 声明实例 {#instance}

把手部检测(HandDetection) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
hand_detection = HandDetection(0)
# 有多个实例时
hand_detection_1 = HandDetection(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于手部检测的摄像头。

<BlockImage module="AI/HandDetection" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## 加载手部模型 {#load_model}

加载训练好的手部模型。要使用「手部检测」模块的功能，必须先完成这一步。

<BlockImage module="AI/HandDetection" id="load_model" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| wait | 复选框 | 是否等待加载完成 | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## 设置检测目标 {#max_hands}

决定检测手部时，是以单手为准还是以双手为准。

<BlockImage module="AI/HandDetection" id="max_hands" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 手的数量 | 单手(one), 双手(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## 检测一次手部 {#detect_once}

找出当前画面中的手，只标示一次。

<BlockImage module="AI/HandDetection" id="detect_once" />

### 参数

（无）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## 开始 / 停止持续手部检测 {#detect_continuous}

持续跟踪当前画面中的手，并在画面上标示出来。

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示手部检测的结果。

<BlockImage module="AI/HandDetection" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## 手部部位的位置 {#hand_data}

返回指定手的手掌 / 手腕位置信息。

<BlockImage module="AI/HandDetection" id="hand_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| side | 下拉选项 | 手的方向 | 左侧(left), 右侧(right) | - |
| unit | 下拉选项 | 手部部位 | 手掌(palm), 手腕(wrist) | - |
| pos | 下拉选项 | 坐标 / 大小种类 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 手指关节的位置 {#joint_data}

返回指定手指的关节坐标。

<BlockImage module="AI/HandDetection" id="joint_data" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| side | 下拉选项 | 手的方向 | 左侧(left), 右侧(right) | - |
| unit | 下拉选项 | 手指 | 拇指(thumb), 食指(index), 中指(middle), 无名指(ring), 小指(pinky) | - |
| joint | 下拉选项 | 关节位置 | 第一关节(first), 第二关节(second), 第三关节(third), 指尖(last) | - |
| pos | 下拉选项 | 坐标 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## 手部矩形信息 {#hand_square}

返回指定手部区域矩形的位置 / 大小值。

<BlockImage module="AI/HandDetection" id="hand_square" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| side | 下拉选项 | 手的方向 | 左侧(left), 右侧(right) | - |
| unit | 下拉选项 | 手部部位 | 手(hand), 手掌(palm) | - |
| pos | 下拉选项 | 矩形信息 | 最小 x 坐标(min_x), 最大 x 坐标(max_x), 最小 y 坐标(min_y), 最大 y 坐标(max_y), 宽(width), 高(height), 面积(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 手与手之间的距离 {#hand_to_hand_distance}

返回两个手部部位之间的距离。

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 输入值（字符串） | 第一个手部部位 | 手: `'side_unit'` (例: `'left_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 输入值（字符串） | 第二个手部部位 | 手: `'side_unit'` (例: `'right_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 手 / 距离
hand_detection.get_distance('left_palm', 'right_palm')  
```

## 手与手指之间的距离 {#hand_to_joint_distance}

返回手部部位与手指关节之间的距离。

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 输入值（字符串） | 第一个部位 | 手: `'side_unit'` (例: `'left_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 输入值（字符串） | 第二个部位 | 手指: `'side_unit_joint'` (例: `'right_index_first'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 手指关节 / 水平距离
hand_detection.get_distance('left_palm', 'right_index_first')
```

## 手指与手指之间的距离 {#joint_to_joint_distance}

返回两个手指关节之间的距离。

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit1 | 输入值（字符串） | 第一个部位 | 手指: `'side_unit_joint'` (例: `'left_thumb_last'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | 输入值（字符串） | 第二个部位 | 手指: `'side_unit_joint'` (例: `'right_index_first'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | 下拉选项 | 距离种类 | 距离(省略或 None), 水平距离(horizontal), 垂直距离(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手指关节 ↔ 手指关节 / 垂直距离
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## 手部模型加载状态 {#model_state}

返回手部模型的加载状态。  
还没有加载时返回 0，正在加载时返回 1，加载完成时返回 2。

<BlockImage module="AI/HandDetection" id="model_state" />

### 参数

（无）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## 检测到手部？ {#detected}

是否找到了手

<BlockImage module="AI/HandDetection" id="detected" />

### 参数

（无）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
