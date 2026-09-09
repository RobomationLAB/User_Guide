---
title: Piobot
---

# Piobot

## 声明实例 {#instance}

把 Piobot(Pio) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
pio = Pio(0)
# 有多个实例时
pio_1 = Pio(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置轮速度 {#set_wheel_speed}

设置轮速度。轮速度的范围是 -100 ~ 100。

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 轮速度 | -100 ~ 100 的整数, 0: 停止 | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## 移动指定距离 {#move_distance}

以当前的轮速度移动指定的距离。  
如果没有设置轮速度，就以默认速度向前移动。  
距离值为 0 时，按当前的轮速度持续移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Pio" id="move_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动距离 | 0 以上的实数 | - |
| unit | 下拉选项 | 距离单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## 移动指定时间 {#move_time}

以当前的轮速度移动指定的时间。  
如果没有设置轮速度，就以默认速度向前移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Pio" id="move_time" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动时间（秒） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## 原地转动 {#turn_degree}

设置原地旋转的方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/Pio" id="turn_degree" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左侧(left), 右侧(right) | - |
| data | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## 改变轮速度 {#change_speed}

改变 Piobot 的轮速度。  
在当前的轮速度上加上输入的速度，得到新的轮速度。  
新设置的轮速度范围会限制在 -100 ~ 100。

<BlockImage module="roboids/Pio" id="change_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## 打开 / 关闭涡轮模式 {#turbo}

打开或关闭 Piobot 的涡轮模式。

<BlockImage module="roboids/Pio" id="turbo" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 涡轮模式 ON / OFF | 开(on=True), 关(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## 停止 {#stop}

让 Piobot 停止移动。  
Piobot 两轮的速度都会初始化为 0。

<BlockImage module="roboids/Pio" id="stop" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.stop()
```

## 轮正在移动？ {#wheel_moving}

车轮正在移动时返回 true，停止时返回 false。

<BlockImage module="roboids/Pio" id="wheel_moving" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## 在板上移动一步 {#grid_move}

在板上按既定的方式一格一格地移动。

<BlockImage module="roboids/Pio" id="grid_move" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 移动方向 | 前进(forward), 后退(backward), 向左(left), 向右(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## 在板上转向 {#grid_turn}

板上的 Piobot 按输入的方向旋转 90 度。总是等到完成为止（内部固定为 wait=True）。

<BlockImage module="roboids/Pio" id="grid_turn" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 旋转方向 | 左侧(left), 右侧(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## 设置颈部速度 {#set_neck_speed}

设置颈部的旋转速度。颈部速度的范围是 1 ~ 6。

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 颈部旋转速度 | 1 ~ 6 的整数 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## 设置颈部角度 {#set_neck_angle}

设置颈部旋转后要到达的角度。颈部角度的范围是 -45 ~ 45。

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 颈部角度（度） | -45 ~ 45 的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## 颈部正在移动？ {#neck_moving}

颈部正在移动时返回 true，停止时返回 false。

<BlockImage module="roboids/Pio" id="neck_moving" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## 设置眼睛颜色 {#set_eye_color}

设置 Piobot 的眼睛 LED 颜色。  
可以改变左眼、右眼或两只眼睛的 LED 颜色。  
在颜色预设中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。(生成的代码使用颜色名称，而不是 R, G, B 的数值。)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标眼睛 | 左眼(left), 右眼(right), 两眼(both) | - |
| color | 下拉选项 | 颜色预设 → 转换成颜色名称（英文） | 黑色(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## 用颜色类别的积木设置眼睛颜色 {#set_eye_color_with_block}

用颜色类别中的积木设置 Piobot 的眼睛 LED 颜色。  
可以改变左眼、右眼或两只眼睛的 LED 颜色。

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标眼睛 | 左眼(left), 右眼(right), 两眼(both) | - |
| data | 输入值（颜色） | [R, G, B] 数组 | 颜色类别的积木或 `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## 按 RGB 改变眼睛颜色 {#change_by_rgb}

按指定的 R, G, B 值改变 Piobot 的眼睛 LED 颜色。  
可以设置左眼、右眼或两只眼睛的颜色。

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标眼睛 | 左眼(left), 右眼(right), 两眼(both) | - |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## 设置眼睛图案 {#set_eye_pattern}

设置眼睛的图案，并指定图案开始时每只眼睛的颜色。

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| pattern | 下拉选项 | 图案种类 | 关闭(reset), 闪烁(blink), 渐变(dimming), 彩虹(rainbow) | - |
| left | 下拉选项 | 左眼颜色 | 默认(black), 红色(red), 黄色(yellow), 绿色(green), 青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | white |
| right | 下拉选项 | 右眼颜色 | （与 left 相同） | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## 关闭眼睛 {#turn_off}

消除眼睛的颜色。

<BlockImage module="roboids/Pio" id="turn_off" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标眼睛 | 左眼(left), 右眼(right), 两眼(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## 设置蜂鸣声 {#sound_buzz}

以指定的频率设置 Piobot 的蜂鸣器声音。  
可以发声的频率范围是 27.5hz ~ 6553.5hz。  
输入其他值时不会发出蜂鸣声。

<BlockImage module="roboids/Pio" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 27.5 ~ 6553.5 的实数 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## 播放音符 {#sound_note}

Piobot 播放指定的音符。

<BlockImage module="roboids/Pio" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## 播放声音片段 {#sound_clip}

Piobot 播放特定的声音片段。  
勾选等待后，会一直等到播放完成。

<BlockImage module="roboids/Pio" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## 播放旋律 {#sound_melody}

Piobot 播放特定的旋律。  
勾选等待后，会一直等到播放完成。

<BlockImage module="roboids/Pio" id="sound_melody" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| melody | 下拉选项 | 旋律名称 | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## 关闭声音 {#sound_off}

关闭 Piobot 的声音。

<BlockImage module="roboids/Pio" id="sound_off" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## 声音正在播放？ {#sound_playing}

声音正在播放时返回 true，没有播放时返回 false。

<BlockImage module="roboids/Pio" id="sound_playing" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## 车轮速度值 {#wheel_speed}

特定车轮的速度

<BlockImage module="roboids/Pio" id="wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左侧(left), 右侧(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/Pio" id="signal_strength" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/Pio" id="battery" />

### 参数

（无）

### Python
```python
pio = Pio(0)

pio.battery()
```

## 按下的按钮 {#keypad}

检测用户最后按下的键盘按钮。

<BlockImage module="roboids/Pio" id="keypad" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| button | 下拉选项 | 要检测的按钮 | 运行(play), 向前移动(forward), 向后移动(backward), 向左移动(left), 向右移动(right), 动作(action), 重复(repeat), 清除(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
