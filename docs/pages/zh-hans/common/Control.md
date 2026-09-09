---
title: 控制
---

# 控制

在积木编程中，**控制积木** 的作用是操纵程序的流程。  
可以实现等待一段时间、检测键盘输入、输出日志等功能。


## 等待 {#wait_sec}

等待指定的时间（秒）之后执行下一条命令。

<BlockImage module="common/control" id="wait_sec" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| sec | 输入值（字段） | 等待时间 — **字面数字** (例: `Utils.wait(0.5)`) | 0 以上的实数 | - |
| sec | 输入值（积木） | 等待时间 — **变量/表达式** (例: `Utils.wait(time)`) | 0 以上的实数 | - |

### Python
```python
# field sec = 2 → 原样（单位为秒）
Utils.wait(2)

# 变量输入
Utils.wait(myVar)
```

## 等待一帧 {#wait_1msec}

让程序的执行停止一帧（约 0.001 秒）。

<BlockImage module="common/control" id="wait_1msec" />

### 参数

（无 — 固定为 0.001 秒）

### Python
```python
Utils.wait(0.001)
```

<!--
## 无限等待 {#wait_forever}

停止程序的执行并无限等待。

### 参数

（无）

### Python
```python
Utils.wait_forever()
```
-->

## 键已按下 {#key_pressed}

返回某个键是否处于按下状态，结果为 **true(True) / false(False)**。

<BlockImage module="common/control" id="key_pressed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| key | 输入值 | 键名 | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## 输出日志 {#log}

把某个变量或属性的值实时输出到 **控制台** 窗口。

<BlockImage module="common/control" id="log" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值 | 要输出的值 | 任意值 | - |
| tag | 输入值 | 日志标签 | 字符串 | - |
| unit | 输入值 | 单位显示 | 字符串 | - |

### Python
```python
Utils.log(data, '', '')
```

## 输出示波器 {#scope}

把某个值的变化以实时图表的形式显示在 **示波器** 窗口中。  
可以设置图表的颜色、最小 / 最大值和范围。

<BlockImage module="common/control" id="scope" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| signal | 输入值（积木） | 图表信号值 | 实数 | - |
| name | 输入值 | 图表名称 | 字符串 | - |
| min_val | 输入值（字段） | 图表最小值 | 实数 | - |
| max_val | 输入值（字段） | 图表最大值 | 实数 | - |
| color | 颜色 | 图表颜色 (hex) | hex 字符串 | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
