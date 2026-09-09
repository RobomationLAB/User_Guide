---
title: HamsterS
---

# HamsterS

## 声明实例 {#instance}

把 HamsterS 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
hamster_s = HamsterS(0)
# 有多个实例时
hamster_s_1 = HamsterS(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置轮速度 {#set_wheel_speed}

决定轮速度。速度的范围是 -100 ~ 100。

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左(left), 右(right), 两侧(both) | - |
| speed | 输入值（积木） | 轮速度 | -100 ~ 100 的整数, 0: 停止 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## 移动指定距离 {#move_distance}

以当前的轮速度移动指定的距离。  
如果没有设置轮速度，就以默认速度向前移动。  
距离值为 0 时，按当前的轮速度持续移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/HamsterS" id="move_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动距离 | 0 以上的实数 | - |
| unit | 下拉选项 | 距离单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## 移动指定时间 {#move_time}

以当前的轮速度移动指定的时间。  
如果没有设置轮速度，就以默认速度向前移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/HamsterS" id="move_time" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动时间（秒） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## 原地转动 {#turn_degree}

设置原地旋转的方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左(left), 右(right) | - |
| data | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## 改变轮速度 {#change_speed}

改变 HamsterS 的轮速度。  
在当前的轮速度上加上输入的速度，得到新的轮速度。

<BlockImage module="roboids/HamsterS" id="change_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左(left), 右(right), 两侧(both) | - |
| speed | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## 停止 {#stop}

让 HamsterS 停止移动。

<BlockImage module="roboids/HamsterS" id="stop" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## 车轮正在转动？ {#wheel_moving}

车轮正在转动时返回 true，停止时返回 false。

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## 在板上向前移动一步 {#grid_move}

在板上按既定的方式一格一格地移动。

<BlockImage module="roboids/HamsterS" id="grid_move" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## 在板上转向 {#grid_turn}

在板上向指定的方向旋转 90 度。

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## 以笔架为中心旋转 {#pivot}

使用笔架时，设置旋转的中心、方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/HamsterS" id="pivot" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| base | 下拉选项 | 旋转中心 | 左笔(left_pen), 右笔(right_pen), 左轮(left_wheel), 右轮(right_wheel) | - |
| direction | 下拉选项 | 旋转方向 | 前进(forward), 后退(backward) | - |
| degree | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## 以笔架为圆心画圆 {#pivot_circle}

使用笔架画圆时，设置旋转的圆心、方向、半径和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| base | 下拉选项 | 旋转圆心 | 左笔(left_pen), 右笔(right_pen) | - |
| direction | 下拉选项 | 旋转方向 | 左前方(left_forward), 左后方(left_backward), 右前方(right_forward), 右后方(right_backward) | - |
| degree | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| radius | 输入值（积木） | 旋转半径 | 0 以上的实数 | - |
| unit | 下拉选项 | 半径单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## 用传感器循线 {#trace_mode}

HamsterS 使用地面传感器沿着特定颜色的线行进。

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| floor | 下拉选项 | 用来循线的地面传感器 | 左(left), 右(right), 中间(center) | - |
| line | 下拉选项 | 线的颜色 | 黑色(black), 白色(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## 循线至下一个交叉点 {#trace_until_grid}

HamsterS 在交叉点按指定的方向移动后，一直行进到遇到下一个交叉点。  
勾选等待后，会一直等到移动完成。  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 在交叉点的移动方向 | 左转(left), 右转(right), 前进(forward), 掉头(uturn) | - |
| line | 下拉选项 | 线的颜色 | 黑色(black), 白色(white) | black |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## 设置循迹速度 {#set_trace_speed}

设置循线的速度。速度的范围是 1 ~ 10。

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 循线速度 | 1 ~ 10 的整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## 设置循迹增益 {#set_trace_gain}

设置循线的方向变化量。变化量的范围是 1 ~ 10。

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 方向变化量 | 1 ~ 10 的整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## 停止循迹 {#stop_trace}

结束 HamsterS 的循线功能。

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## 设置 LED 颜色 {#set_led_color}

设置 HamsterS 的 LED 颜色。  
在调色板中选择颜色后，会转换成 **颜色名称**（英文字符串）来调用。(生成的代码使用颜色名称，而不是 R, G, B 的数值。)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | - |
| color | 颜色 | 调色板选择 → 转换成颜色名称（英文） | 颜色名称: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## 用颜色类别的积木设置 LED 颜色 {#set_led_color_with_block}

接受颜色类别的积木 (`[R, G, B]`) 作为输入来设置 LED 颜色。

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | - |
| data | 输入值（颜色） | 颜色类别的积木或 `[R, G, B]` 数组 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## 按 RGB 改变 LED 颜色 {#change_by_rgb}

按指定的 R, G, B 值改变 HamsterS 的 LED 颜色。

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | - |
| r | 输入值（字段） | 红的变化量 | -255 ~ 255 的整数 | 0 |
| g | 输入值（字段） | 绿的变化量 | -255 ~ 255 的整数 | 0 |
| b | 输入值（字段） | 蓝的变化量 | -255 ~ 255 的整数 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## 关闭 LED {#turn_off}

消除 LED 的颜色。

<BlockImage module="roboids/HamsterS" id="turn_off" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## 设置蜂鸣器频率 {#sound_buzz}

以指定的频率设置 HamsterS 的蜂鸣器声音。  
可以发声的频率范围是 122.1hz ~ 4186.0hz。  
输入其他值时不会发出蜂鸣声。

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 122.1 ~ 4186.0 的实数（其他为 0） | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## 播放音符 {#sound_note}

HamsterS 播放指定的音符。

<BlockImage module="roboids/HamsterS" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

HamsterS 播放特定的声音片段。  
勾选等待后，会一直等到播放完成。

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## 关闭声音 {#sound_off}

关闭 HamsterS 的声音。

<BlockImage module="roboids/HamsterS" id="sound_off" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## 正在播放声音？ {#sound_playing}

声音正在播放时返回 true，没有播放时返回 false。

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## 车轮速度值 {#wheel_speed}

特定车轮的速度

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## 接近传感器值 {#proximity}

特定接近传感器的值

<BlockImage module="roboids/HamsterS" id="proximity" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的传感器位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## 地面传感器值 {#floor}

特定地面传感器的值

<BlockImage module="roboids/HamsterS" id="floor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的传感器位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## 重力加速度值 {#acceleration}

特定轴的重力加速度值

<BlockImage module="roboids/HamsterS" id="acceleration" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## 亮度传感器值 {#light}

亮度传感器值

<BlockImage module="roboids/HamsterS" id="light" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## 温度传感器值 {#temperature}

温度传感器值

<BlockImage module="roboids/HamsterS" id="temperature" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/HamsterS" id="battery" />

### 参数

（无）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## 状态是否改变 {#state_change}

机器人的状态是否发生了改变

<BlockImage module="roboids/HamsterS" id="state_change" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 状态种类 | 0 ~ 7（参见下表） | - |

| unit | 含义 | Python |
|------|------|--------|
| 0 | 向前倾斜 | `acceleration('x') > 5000` |
| 1 | 向后倾斜 | `acceleration('x') < -5000` |
| 2 | 向左倾斜 | `acceleration('y') > 5000` |
| 3 | 向右倾斜 | `acceleration('y') < -5000` |
| 4 | 倒过来翻转 | `acceleration('z') > 0` |
| 5 | 没有翻转 | `acceleration('z') < -3000` |
| 6 | 检测到障碍物 / 手 | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | 敲击 | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## 设置端口的输入模式 {#io_mode}

设置 IO 端口的输入模式。

<BlockImage module="roboids/HamsterS" id="io_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| option | 下拉选项 | 输入输出模式 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## 设置端口的输出值 {#set_output}

设置指定 IO 端口的输出值。

<BlockImage module="roboids/HamsterS" id="set_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| data | 输入值（积木） | 输出值 | 0 ~ 180 的整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## 改变端口的输出值 {#change_output}

改变指定 IO 端口的输出值。

<BlockImage module="roboids/HamsterS" id="change_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| data | 输入值（积木） | 要改变的输出值差 | 整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## 打开 / 关闭夹持器 {#gripper}

打开或关闭 HamsterS 的夹持器。  
根据 unit 的值调用两个方法中的一个。

<BlockImage module="roboids/HamsterS" id="gripper" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 打开(open), 关闭(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## 设置发射器角度 {#shooter}

通过设置发射器的角度来控制它。角度的范围是 0 ~ 180。

<BlockImage module="roboids/HamsterS" id="shooter" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 发射器角度 | 0 ~ 180 的整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## 端口的输入值 {#input}

返回 HamsterS 输入输出端口的输入值。

<BlockImage module="roboids/HamsterS" id="input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
