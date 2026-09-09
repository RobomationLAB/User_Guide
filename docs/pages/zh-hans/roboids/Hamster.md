---
title: Hamster
---

# Hamster

## 声明实例 {#instance}

把 Hamster 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
hamster = Hamster(0)
# 有多个实例时
hamster_1 = Hamster(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置轮速度 {#set_wheel_speed}

决定轮速度。速度的范围是 -100 ~ 100。

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左(left), 右(right), 两侧(both) | - |
| speed | 输入值（积木） | 轮速度 | -100 ~ 100 的整数, 0: 停止 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## 移动指定时间 {#move_time}

以当前的轮速度移动指定的时间。  
如果没有设置轮速度，就以默认速度向前移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Hamster" id="move_time" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动时间（秒） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## 改变轮速度 {#change_speed}

改变 Hamster 的轮速度。  
在当前的轮速度上加上输入的速度，得到新的轮速度。  
新设置的轮速度范围会限制在 -100 ~ 100。

<BlockImage module="roboids/Hamster" id="change_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左(left), 右(right), 两侧(both) | - |
| speed | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## 停止 {#stop}

让 Hamster 停止移动。  
Hamster 两侧的轮速度都会初始化为 0。

<BlockImage module="roboids/Hamster" id="stop" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## 在棋盘上向前移动一步 {#grid_move}

在棋盘上按既定的方式一格一格地移动。

<BlockImage module="roboids/Hamster" id="grid_move" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## 在棋盘上转向 {#grid_turn}

在棋盘上向指定的方向旋转 90 度。

<BlockImage module="roboids/Hamster" id="grid_turn" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## 用传感器循线 {#trace_mode}

Hamster 使用地面传感器沿着特定颜色的线行进。

<BlockImage module="roboids/Hamster" id="trace_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| floor | 下拉选项 | 用来循线的地面传感器 | 左(left), 右(right), 中间(center) | - |
| line | 下拉选项 | 线的颜色 | 黑色(black), 白色(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## 循线至下一个交叉点 {#trace_until_grid}

Hamster 在交叉点按指定的方向移动后，一直行进到遇到下一个交叉点。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 在交叉点的移动方向 | 左转(left), 右转(right), 前进(forward), 掉头(uturn) | - |
| line | 下拉选项 | 线的颜色 | 黑色(black), 白色(white) | black |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## 设置循线速度 {#set_trace_speed}

设置循线的速度。速度的范围是 1 ~ 10。

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 循线速度 | 1 ~ 10 的整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## 停止循线 {#stop_trace}

结束 Hamster 的循线功能。

<BlockImage module="roboids/Hamster" id="stop_trace" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## 设置 LED 颜色 {#set_led_color}

设置 LED 的颜色。

<BlockImage module="roboids/Hamster" id="set_led_color" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | - |
| color | 下拉选项 | 颜色 | 黑色(black), 蓝色(blue), 绿色(green), 青色(cyan), 红色(red), 洋红色(magenta), 黄色(yellow), 白色(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## 关闭 LED {#turn_off}

消除 LED 的颜色。

<BlockImage module="roboids/Hamster" id="turn_off" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标 LED | 左(left), 右(right), 两侧(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## 设置蜂鸣器频率 {#sound_buzz}

以指定的频率设置 Hamster 的蜂鸣器声音。  
可以发声的频率范围是 1.0hz ~ 6553.5hz。  
输入其他值时不会发出蜂鸣声。

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 0 ~ 6553.5 的实数 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## 播放音符 {#sound_note}

Hamster 播放指定的音符。

<BlockImage module="roboids/Hamster" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## 关闭声音 {#sound_off}

关闭 Hamster 的声音。

<BlockImage module="roboids/Hamster" id="sound_off" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## 轮速度值 {#wheel_speed}

特定车轮的速度

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## 接近传感器值 {#proximity}

特定接近传感器的值

<BlockImage module="roboids/Hamster" id="proximity" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的传感器位置 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## 地面传感器值 {#floor}

特定地面传感器的值

<BlockImage module="roboids/Hamster" id="floor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的传感器位置 | 左(left), 右(right), 中间(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## 轴加速度值 {#acceleration}

特定轴的重力加速度值

<BlockImage module="roboids/Hamster" id="acceleration" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## 亮度传感器值 {#light}

亮度传感器值

<BlockImage module="roboids/Hamster" id="light" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## 温度传感器值 {#temperature}

温度传感器值

<BlockImage module="roboids/Hamster" id="temperature" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/Hamster" id="signal_strength" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/Hamster" id="battery" />

### 参数

（无）

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## 状态是否改变 {#state_change}

机器人的状态是否发生了改变

<BlockImage module="roboids/Hamster" id="state_change" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 状态种类 | 0 ~ 6（参见下表） | - |

| unit | 条件 |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## 设置端口的输入模式 {#io_mode}

设置 IO 端口的输入模式。

<BlockImage module="roboids/Hamster" id="io_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| option | 下拉选项 | 输入输出模式 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## 设置端口的输出值 {#set_output}

设置指定 IO 端口的输出值。

<BlockImage module="roboids/Hamster" id="set_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| data | 输入值（积木） | 输出值 | 0 ~ 180 的整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## 改变端口的输出值 {#change_output}

改变指定 IO 端口的输出值。

<BlockImage module="roboids/Hamster" id="change_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b, 两侧(both) | - |
| data | 输入值（积木） | 要改变的输出值差 | 整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## 打开 / 关闭夹爪 {#gripper}

打开或关闭 Hamster 的夹爪。  
根据 unit 的值调用两个方法中的一个。

<BlockImage module="roboids/Hamster" id="gripper" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 关闭(close), 打开(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## 设置发射器角度 {#shooter}

通过设置发射器的角度来控制它。角度的范围是 0 ~ 180。

<BlockImage module="roboids/Hamster" id="shooter" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 发射器角度 | 0 ~ 180 的整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## 端口的输入值 {#input}

返回 Hamster 输入输出端口的输入值。

<BlockImage module="roboids/Hamster" id="input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入输出端口 | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
