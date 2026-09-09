---
title: CSD-10 ALS 传感器
---

# CSD-10 ALS 传感器

## 声明实例 {#instance}

把 CSD-10 ALS 传感器(CSD10) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 从端口开始 {#set_input_port}

设置 CSD10（光照传感器）所连接的端口。

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要连接的端口 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## 值 {#get_input}

所选端口的光照传感器值

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要读取的端口 | Sa, Sb, Sc | 最后一次 `set_port` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
