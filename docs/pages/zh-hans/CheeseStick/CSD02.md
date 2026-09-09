---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## 声明实例 {#instance}

把 CSD-02 RGB LED(CSD02) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 启动 {#start}

开始使用 RGB LED。  
不添加这个积木，RGB LED 就不会启用。

<BlockImage module="CheeseStick/CSD02" id="start" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## 设置 LED 颜色 {#set_color}

把 CSD02 的 LED 颜色设置为指定的颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。(生成的代码使用颜色名称，而不是 R, G, B 的数值。)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## 用颜色类别的积木设置颜色 {#set_color_with_block}

接受颜色类别的积木（例: `[R, G, B]` 数组）作为输入来设置 CSD02 的 LED 颜色。

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（颜色） | 颜色类别积木的输出或 `[R, G, B]` 数组 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## 按 RGB 调整 LED {#change_by_rgb}

在当前的 LED 颜色上加上输入的 R, G, B 变化量，设置新的颜色。

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## 关闭 LED {#turn_off}

消除 RGB LED 的颜色。

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
