---
title: CSD-07 声音传感器
---

# CSD-07 声音传感器

## 声明实例 {#instance}

把 CSD-07 声音传感器(CSD07) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 从端口开始 {#set_input_port}

设置 CSD07（声音传感器）所连接的端口。

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要连接的端口 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## 值 {#get_input}

所选端口的声音传感器值

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要读取的端口 | Sa, Sb, Sc | 最后一次 `set_port` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
