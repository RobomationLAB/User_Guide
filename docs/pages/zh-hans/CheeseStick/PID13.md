---
title: PID-13 摇杆和按钮
---

# PID-13 摇杆和按钮

## 声明实例 {#instance}

把 PID-13 摇杆和按钮(PID13) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 启动 {#start}

开始使用摇杆和按钮。

<BlockImage module="CheeseStick/PID13" id="start" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## 摇杆 {#joystick}

摇杆的 x / y 值。  
各个值的范围是 -128 ~ 127。

<BlockImage module="CheeseStick/PID13" id="joystick" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## 按钮 {#button_input}

所选按钮的输入状态  
按钮被按下时输出 1，没有被按下时输出 0。

<BlockImage module="CheeseStick/PID13" id="button_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 按钮名称 | A 按钮(a), B 按钮(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## 按钮已点击？ {#button_click}

所选按钮是否被点击  
这个积木只在所选按钮被点击的那一刻返回 true，其他时候返回 false。

<BlockImage module="CheeseStick/PID13" id="button_click" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 按钮名称 | A 按钮(a), B 按钮(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
