---
title: 函数
---

# 函数

**函数(Function)** 是执行特定任务的 **命令（积木）的集合**。  
把反复使用的动作定义成一个函数，就可以 **简洁高效地** 管理代码。

函数具有下面这些特点。  
- **可以复用**：定义一次之后可以多次调用使用。  
- **输入和输出**：可以接受参数（输入值）进行处理，然后返回结果（输出值）。  
- **提高代码可读性**：可以在逻辑上组织程序的流程。


## setup {#setup}

**setup 函数** 在执行代码的那一刻只被调用一次。  
在 setup 函数中主要编写初始化变量，或者初始化机器人的模式、选项等的代码。  
例如，控制靠轮子移动的机器人时，可以在 setup 函数中设置轮子的初始速度。  

<BlockImage module="common/functions" id="setup" />
  
使用 `Utils.wait(...)` 函数，可以通过顺序执行编写按时间顺序动作的代码。使用这个功能，不仅可以做简单的顺序执行，还可以与承担并行执行的 **loop 函数** 配合，实现强大的机器人编程。  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**loop 函数** 在程序运行期间每 10ms 反复被调用一次。  
在 loop 函数中主要编写反复设置变量的值，或者检测并处理机器人特定事件的代码。

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## 定义函数 {#procedures_defnoreturn}

使用定义函数的积木可以创建 **新的函数**。  
没有返回值的函数会执行特定的动作，但 **不返回值**。

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## 定义有返回值的函数 {#procedures_defreturn}

有返回值的函数在执行特定任务之后，会 **返回结果值**，可以在其他积木中使用。  

<BlockImage module="common/functions" id="procedures_defreturn" />

下面的函数 **接受参数 x、y 并返回 x + y 的结果**。  

### Python
```python
def myFunction(x, y):
    return x + y
```

## 调用函数 {#procedures_callnoreturn}

定义函数之后，会自动生成 **自定义函数积木**。  
通过它可以调用并执行 **事先定义的函数**。

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## 如果 ... 返回 {#procedures_ifreturn}

这个积木的功能是在函数中 **满足特定条件时立即返回值** 并结束函数。  
这个积木 **只能在函数内部使用**，在其他地方会被禁用。

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
