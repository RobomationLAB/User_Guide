---
title: Turtle
---

# Turtle

## 声明实例 {#instance}

把 Turtle 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
turtle = Turtle(0)
# 有多个实例时
turtle_1 = Turtle(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置轮速度 {#set_wheel_speed}

决定轮速度。速度的范围是 -100 ~ 100。

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 轮速度 | -100 ~ 100 的整数, 0: 停止 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## 移动指定距离 {#move_distance}

设置要移动的距离。  
如果没有设置轮速度，就不会移动。  
距离值为 0 时，按当前的轮速度持续移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Turtle" id="move_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动距离 | 0 以上的实数 | - |
| unit | 下拉选项 | 距离单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## 移动指定时间 {#move_time}

以当前的轮速度移动指定的时间。  
如果没有设置轮速度，就以默认速度向前移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Turtle" id="move_time" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动时间（秒） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## 原地转动 {#turn_degree}

设置原地旋转的方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/Turtle" id="turn_degree" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左侧(left), 右侧(right) | - |
| data | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## 改变轮速度 {#change_speed}

改变 Turtle 的轮速度。  
在当前的轮速度上加上输入的速度，得到新的轮速度。

<BlockImage module="roboids/Turtle" id="change_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## 停止 {#stop}

让 Turtle 停止移动。

<BlockImage module="roboids/Turtle" id="stop" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## 车轮正在转动？ {#wheel_moving}

车轮正在转动时返回 true，停止时返回 false。

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## 以车轮为轴旋转 {#pivot}

设置旋转的轴、方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/Turtle" id="pivot" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| base | 下拉选项 | 作为旋转轴的车轮 | 左轮(left_wheel), 右轮(right_wheel) | - |
| direction | 下拉选项 | 旋转方向 | 前进(forward), 后退(backward) | - |
| data | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## 画圆弧 {#pivot_circle}

用笔画圆时，设置旋转的方向、半径和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左前方(left_forward), 左后方(left_backward), 右前方(right_forward), 右后方(right_backward) | - |
| degree | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| radius | 输入值（积木） | 旋转半径 | 0 以上的实数 | - |
| unit | 下拉选项 | 半径单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## 沿线巡线 {#trace_line}

使用底部的颜色传感器，沿着特定颜色的线移动。

<BlockImage module="roboids/Turtle" id="trace_line" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| line | 下拉选项 | 要沿着的线的颜色 | 黑色(black), 红色(red), 绿色(green), 蓝色(blue), 所有颜色(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## 巡线直到特定颜色 {#trace_line_until_color}

使用底部的颜色传感器，沿着 A 颜色的线移动，直到遇到 B 颜色。

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| line | 下拉选项 | 要沿着的线的颜色 | 黑色(black), 红色(red), 绿色(green), 蓝色(blue), 所有颜色(any) | - |
| color | 下拉选项 | 停止的颜色 | 黑色(black), 红色(red), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 所有颜色(any) | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## 在交叉点行驶 {#intersection}

Turtle 在交叉点按指定的方向移动后，一直行进到遇到下一个交叉点。  
勾选等待后，会一直等到移动完成。  

<BlockImage module="roboids/Turtle" id="intersection" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 在交叉点的移动方向 | 向前行驶(forward), 左侧(left), 右侧(right), 掉头(uturn) | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## 设置巡线速度 {#set_trace_speed}

设置巡线的速度。速度的范围是 1 ~ 10。

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 巡线速度 | 1 ~ 10 的整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## 设置巡线增益 {#set_trace_gain}

设置巡线的方向变化量。变化量的范围是 1 ~ 10。

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 方向变化量 | 1 ~ 10 的整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## 停止巡线 {#stop_trace}

结束 Turtle 的巡线功能。

<BlockImage module="roboids/Turtle" id="stop_trace" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## 设置头部 LED 颜色 {#set_led_color}

设置 Turtle 头部 LED 的颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。(生成的代码使用颜色名称，而不是 R, G, B 的数值。)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## 用颜色类别的积木设置 LED 颜色 {#set_led_color_with_block}

接受颜色类别积木的输出 (`[R, G, B]`) 作为输入来设置头部 LED 的颜色。

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（颜色） | 颜色类别的积木或 `[R, G, B]` 数组 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## 按 RGB 改变 LED 颜色 {#change_by_rgb}

在当前头部 LED 颜色上加上输入的 R, G, B 变化量，设置新的颜色。

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## 关闭头部 LED {#turn_off}

消除头部 LED 的颜色。

<BlockImage module="roboids/Turtle" id="turn_off" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## 设置蜂鸣器频率 {#sound_buzz}

以指定的频率设置 Turtle 的蜂鸣器声音。

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 0 ~ 6553.5 的实数 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## 播放音符 {#sound_note}

Turtle 播放指定的音符。

<BlockImage module="roboids/Turtle" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

Turtle 播放特定的声音片段。

<BlockImage module="roboids/Turtle" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## 关闭声音 {#sound_off}

关闭 Turtle 的声音。

<BlockImage module="roboids/Turtle" id="sound_off" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## 正在播放声音？ {#sound_playing}

声音正在播放时返回 true，没有播放时返回 false。

<BlockImage module="roboids/Turtle" id="sound_playing" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## 车轮速度值 {#wheel_speed}

特定车轮的速度

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左侧(left), 右侧(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## 地面颜色传感器值 {#floor}

底部颜色传感器的值

<BlockImage module="roboids/Turtle" id="floor" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## 卡片颜色值 {#card_color}

通过底部的颜色传感器读到的卡片颜色的 **名称**

<BlockImage module="roboids/Turtle" id="card_color" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## 卡片颜色图案值 {#card_pattern}

通过底部的颜色传感器读到的卡片颜色的图案

<BlockImage module="roboids/Turtle" id="card_pattern" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## 轴加速度值 {#acceleration}

特定轴的重力加速度值

<BlockImage module="roboids/Turtle" id="acceleration" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## 温度传感器值 {#temperature}

温度传感器值

<BlockImage module="roboids/Turtle" id="temperature" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/Turtle" id="signal_strength" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/Turtle" id="battery" />

### 参数

（无）

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## 碰到特定颜色？ {#color_read}

通过 Turtle 的颜色传感器测量是否碰到了指定的颜色，返回 **true(True) / false(False)**。

<BlockImage module="roboids/Turtle" id="color_read" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 下拉选项 | 颜色名称 | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## 卡片图案是 ~ ？ {#pattern_read}

返回颜色传感器识别到的卡片颜色图案是否匹配，结果为 **true(True) / false(False)**。

<BlockImage module="roboids/Turtle" id="pattern_read" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| pattern | 下拉选项 | 卡片图案名称 | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## 背部按钮状态 {#button}

背部的按钮是否被按下或点击

<BlockImage module="roboids/Turtle" id="button" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| event | 下拉选项 | 按钮状态种类 | 按下(pressed), 点击(click), 长按(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## 状态是否改变 {#state_change}

机器人的状态是否发生了改变

<BlockImage module="roboids/Turtle" id="state_change" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 状态种类 | 0 ~ 5（参见下表） | - |

| unit | 条件 |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
