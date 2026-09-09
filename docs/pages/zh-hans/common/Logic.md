---
title: 逻辑
---

# 逻辑

逻辑积木通常用于控制 **条件语句** 和 [**循环**](Loops) 积木。

## 条件语句（如果 ~ 那么） {#controls_if}

通过条件语句积木，可以设置 **条件** 以及满足该条件时的 **动作**。

<BlockImage module="common/logic" id="controls_if" />

例如，可以按下面的方式编写代码。  
如果变量 **x** 的值大于 100，条件为 **true**，则输出“是大的数。”这段文本。  
如果 **x** 的值不大于 100，条件为 **false**，则输出“不是大的数。”。

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## 比较运算 {#logic_compare}

共有六种比较运算符。  
每个运算符接受两个输入（通常是数字），并根据输入值之间的比较结果返回 true 或 false。

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## 逻辑运算 {#logic_operation}

**并且** 积木只有在两个输入都为 true 时才返回 true。  
**或者** 积木只要两个输入中有一个为 true 就返回 true。  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## 非 {#logic_negate}

**非** 积木把布尔输入转换成相反的值。  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## 布尔值 {#logic_boolean}

使用带有下拉菜单的单个积木指定 **true** 或 **false**，就可以得到布尔值。  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## 三元运算符 {#logic_ternary}

三元积木的作用和简单的条件语句积木相似。  
它接受三个输入。  
第一个输入是要判断的布尔条件，第二个输入是条件为 **true** 时返回的值。  
第三个输入是条件为 **false** 时返回的值。  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
