---
title: NeoPixel
---

# NeoPixel

## 声明实例 {#instance}

把 NeoPixel 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 启动 {#start}

开始使用 NeoPixel。

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## 设置 LED 模式 {#mode}

设置 NeoPixel 的 LED 模式。

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 颜色通道模式 | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## 设置一个像素的颜色 {#set_one_color}

给指定编号的一个像素设置颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。(生成的代码使用颜色名称，而不是 R, G, B 的数值。)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| idx | 输入值（字段） | 像素编号（从 1 开始） | 1 以上的整数 | - |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## 用颜色类别的积木设置一个像素的颜色 {#set_one_color_with_block}

接受颜色类别的积木作为输入，设置一个像素的颜色。  
把颜色积木的输出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`，都返回 `[R, G, B]`）用 `*`（星号）解包，传给 `set_one_color` 的 r, g, b 参数。

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| idx | 输入值（字段） | 像素编号（从 1 开始） | 1 以上的整数 | - |
| data | 输入值（颜色） | 颜色类别的积木或 `[R, G, B]` 数组 | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## 按 RGB 更改一个像素的颜色 {#change_one_by_rgb}

在指定的一个像素当前的 RGB 值上加上变化量，设置新的颜色。

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| idx | 输入值（字段） | 像素编号（从 1 开始） | 1 以上的整数 | - |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## 关闭一个像素 {#turn_off_one}

消除第 n 个 LED 的颜色。  
LED 编号的范围是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| idx | 输入值（字段） | 像素编号（从 1 开始） | 1 以上的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## 设置范围的图案 {#set_range_pattern}

设置指定范围内所有 LED 的颜色图案。  
LED 编号的范围是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| pattern | 下拉选项 | 颜色图案名称 | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## 设置范围的颜色 {#set_range_color}

给指定的整个像素范围设置相同的颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## 用颜色类别的积木设置范围的颜色 {#set_range_color_with_block}

接受颜色类别的积木作为输入，设置像素范围的颜色。  
把颜色积木的输出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）用 `*`（星号）解包，传给 `set_range_color` 的 r, g, b 参数。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| data | 输入值（颜色） | 颜色类别的积木或 `[R, G, B]` 数组 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## 按 RGB 更改范围的颜色 {#change_range_by_rgb}

在指定像素范围当前的颜色上加上 RGB 的变化量，设置新的颜色。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## 关闭范围的颜色 {#turn_off_range}

消除指定范围内所有 LED 的颜色。  
LED 编号的范围是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## 每隔 n 个设置范围的颜色 {#set_range_increment_color}

在指定的像素范围内，每隔 `increment` 个设置颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。  
(例: 只点亮第 1, 3, 5, … 个)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| increment | 输入值（字段） | 间隔（格数） | 1 以上的整数 | - |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## 用颜色类别的积木每隔 n 个设置范围的颜色 {#set_range_increment_color_with_block}

接受颜色类别的积木作为输入，在指定的像素范围内每隔 n 个设置颜色。  
把颜色积木的输出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）用 `*`（星号）解包，传给 `set_range_increment_color` 的 r, g, b 参数。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| increment | 输入值（字段） | 间隔（格数） | 1 以上的整数 | - |
| data | 输入值（颜色） | 颜色类别的积木或 `[R, G, B]` 数组 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## 每隔 n 个按 RGB 更改范围的颜色 {#change_range_increment_by_rgb}

在每隔 n 个的像素当前的颜色上加上 RGB 的变化量，设置新的颜色。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| increment | 输入值（字段） | 增量间隔（格数） | 1 以上的整数 | - |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## 每隔 n 个关闭范围的颜色 {#turn_off_range_increment}

消除指定范围和间隔内所有 LED 的颜色。  
LED 编号的范围是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| from_idx | 输入值（字段） | 起始像素编号（从 1 开始） | 1 以上的整数 | - |
| to_idx | 输入值（字段） | 结束像素编号（从 1 开始） | 1 以上的整数 | - |
| increment | 输入值（字段） | 增量间隔（格数） | 1 以上的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## 平移 / 旋转 {#shift}

按指定的方向和格数平移或旋转 LED。  
可以选择的值的范围是 1 ~ 143。

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作种类 | 平移(shift), 旋转(rotate) | - |
| direction | 下拉选项 | 方向 | 向左(left), 向右(right) | - |
| pixel | 输入值（字段） | 要移动的像素数 | 1 以上的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## 设置亮度 {#set_brightness}

设置 NeoPixel 的亮度。  
可以选择的值的范围是 0 ~ 100。

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入值（字段） | 亮度 | 0 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## 更改亮度 {#change_brightness}

更改 NeoPixel 的亮度。  
可以选择的值的范围是 -100 ~ 100。

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入值（字段） | 亮度变化量 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
