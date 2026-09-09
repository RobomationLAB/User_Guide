---
title: CSD-03 旋转电位器
---

# CSD-03 旋转电位器

## 声明实例 {#instance}

把 CSD-03 旋转电位器(CSD03) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 从端口开始 {#set_input_port}

设置 CSD03（可变电阻）所连接的端口。

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要连接的端口 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## 设置输入范围 {#set_input_range}

把所选端口的输入值转换到指定的最小 ~ 最大范围。  
输入值的范围是 0 ~ 255。  
可以转换到的值的范围是 -100 ~ 100。

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标端口 | Sa, Sb, Sc | - |
| src_min | 输入值（字段） | 原始最小值 | 0 ~ 255 的整数 | - |
| src_max | 输入值（字段） | 原始最大值 | 0 ~ 255 的整数 | - |
| dst_min | 输入值（字段） | 转换后的最小值 | -100 ~ 100 的整数 | - |
| dst_max | 输入值（字段） | 转换后的最大值 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## 用中间值设置输入范围 {#set_input_range_median}

把所选端口的输入值转换到指定的最小 ~ 中间 ~ 最大范围。  
输入值的范围是 0 ~ 255。  
可以转换到的值的范围是 -100 ~ 100。

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标端口 | Sa, Sb, Sc | - |
| src_min | 输入值（字段） | 原始最小值 | 0 ~ 255 的整数 | - |
| src_median | 输入值（字段） | 原始中间值 | 0 ~ 255 的整数 | - |
| src_max | 输入值（字段） | 原始最大值 | 0 ~ 255 的整数 | - |
| dst_min | 输入值（字段） | 转换后的最小值 | -100 ~ 100 的整数 | - |
| dst_median | 输入值（字段） | 转换后的中间值 | -100 ~ 100 的整数 | - |
| dst_max | 输入值（字段） | 转换后的最大值 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 输入 {#get_input}

所选端口的旋转电位器输入值  
如果没有单独设置输入范围，输入值的范围是 0 ~ 255。

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 要读取的端口 | Sa, Sb, Sc | 最后一次 `set_port` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
