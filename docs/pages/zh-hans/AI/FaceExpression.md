---
title: 面部表情
---

# 面部表情

## 声明实例 {#instance}

把面部表情(FaceExpression) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
face_expression = FaceExpression(0)
# 有多个实例时
face_expression_1 = FaceExpression(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置摄像头 {#device}

设置用于识别年龄、性别和表情的摄像头。

<BlockImage module="AI/FaceExpression" id="device" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 摄像头设备名称 | 系统摄像头标签 | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## 加载人脸表情模型 {#load_model}

加载训练好的年龄、性别和表情模型。要使用「面部表情」模块的功能，必须先完成这一步。

<BlockImage module="AI/FaceExpression" id="load_model" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| wait | 复选框 | 是否等待加载完成 | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## 检测一次人脸表情 {#detect_once}

分析当前画面中的人脸，把预测出的年龄、性别和表情只显示一次。

<BlockImage module="AI/FaceExpression" id="detect_once" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## 开始 / 停止持续人脸表情检测 {#detect_continuous}

持续分析当前画面中的人脸，把预测出的年龄、性别和表情显示在画面上。

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## 显示结果 {#display}

决定是否在摄像头画面上显示年龄、性别和表情的识别结果。

<BlockImage module="AI/FaceExpression" id="display" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 显示 ON / OFF | 显示(on=True), 隐藏(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## 年龄 {#age}

年龄

<BlockImage module="AI/FaceExpression" id="age" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## 性别 {#gender}

性别

<BlockImage module="AI/FaceExpression" id="gender" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## 表情 {#expression}

表情

<BlockImage module="AI/FaceExpression" id="expression" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## 检测到性别？ {#gender_detected}

是否识别出了性别

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## 性别是特定值？ {#gender_check}

返回识别出的性别是否与指定的值一致，结果为 **true(True) / false(False)**。

<BlockImage module="AI/FaceExpression" id="gender_check" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 性别 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## 性别的置信度 {#gender_confidence}

是所选性别的概率（置信度）

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 性别 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## 检测到表情？ {#expression_detected}

是否识别出了表情

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## 表情是特定值？ {#expression_check}

返回识别出的表情是否与指定的值一致，结果为 **true(True) / false(False)**。

<BlockImage module="AI/FaceExpression" id="expression_check" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 表情 | 生气(angry), 厌恶(disgusted), 害怕(fearful), 开心(happy), 无表情(neutral), 悲伤(sad), 惊讶(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## 表情的置信度 {#expression_confidence}

是所选表情的概率（置信度）

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 表情 | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## 面部表情模型加载状态 {#model_state}

返回年龄、性别和表情模型的加载状态。  
还没有加载时返回 0，正在加载时返回 1，加载完成时返回 2。

<BlockImage module="AI/FaceExpression" id="model_state" />

### 参数

（无）

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
