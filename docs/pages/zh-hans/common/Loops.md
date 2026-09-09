---
title: 循环
---

# 循环

循环控制语句有两种类型：  
**条件语句** 和 **循环语句**（根据变量的值控制主体执行多少次的语句）


## 重复 {#controls_repeat}

最简单的 **重复** 积木会把主体中的代码执行指定的次数。 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## 数到 {#controls_for}

**数到** 积木（大多称为 **for loop**）让变量从第一个值按增量（第三个值）递增到第二个值，并对每个值把主体执行一次。  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## 遍历列表里的每一项 {#controls_forEach}

**遍历列表里的每一项** 积木与它相似，区别在于依次使用列表中的值，而不是按数字顺序。

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## 重复当 / 重复直到 {#controls_while}

**重复当** 积木在条件为 true 期间反复执行主体。  
**重复直到** 积木在条件为 false 期间反复执行主体，条件变为 true 的那一刻跳出循环。

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## 跳出 / 继续 {#controls_flow_statements}

**跳出** 积木让你可以 **提前离开循环**。  
**继续**（在大多数编程语言中是 **continue**）会跳过主体中剩下的代码，直接开始下一次循环。

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
