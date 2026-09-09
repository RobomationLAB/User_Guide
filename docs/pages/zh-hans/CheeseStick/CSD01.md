---
title: CSD-01 轻触开关
---

# CSD-01 轻触开关

## 声明实例 {#instance}

把 CSD-01 轻触开关(CSD01) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 从端口开始 {#set_input_port}

设置 CSD01 (Tact Switch) 所连接的端口。

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要连接的端口 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## 按钮输入 {#button_input}

所选端口的按钮输入值  
按钮被按下时返回 0，否则返回 1。

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要读取的端口 | Sa, Sb, Sc | 最后一次 `set_port` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## 按钮已按下？ {#button_pressed}

所选端口上连接的开关按钮是否被按下

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要读取的端口 | Sa, Sb, Sc | 最后一次 `set_port` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
