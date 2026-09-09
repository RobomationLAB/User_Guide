---
title: Cheese Stick
---

# Cheese Stick

## 声明实例 {#instance}

把 Cheese Stick(CheeseStick) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
# 有多个实例时
cheesestick_1 = CheeseStick(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置输入模式 {#set_input_mode}

设置所选端口的输入模式。

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入端口 | Sa, Sb, Sc, La, Lb, Lc | - |
| option | 下拉选项 | 输入模式 | Makey 输入(makey), 按钮输入(button), 数字上拉(digital_pullup), 数字下拉(digital_pulldown), 模拟(analog), 模拟电压(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## 设置输入范围 {#set_input_range}

把所选端口的输入值转换到指定的最小 ~ 最大范围。  
输入值的范围是 0 ~ 255。  
可以转换到的值的范围是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入端口 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 输入值（字段） | 原始最小值 | 0 ~ 255 的整数 | - |
| src_max | 输入值（字段） | 原始最大值 | 0 ~ 255 的整数 | - |
| dst_min | 输入值（字段） | 转换后的最小值 | -100 ~ 100 的整数 | - |
| dst_max | 输入值（字段） | 转换后的最大值 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## 用中间值设置输入范围 {#set_input_range_median}

把所选端口的输入值转换到指定的最小 ~ 中间 ~ 最大范围。  
输入值的范围是 0 ~ 255。  
可以转换到的值的范围是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入端口 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 输入值（字段） | 原始最小值 | 0 ~ 255 的整数 | - |
| src_median | 输入值（字段） | 原始中间值 | 0 ~ 255 的整数 | - |
| src_max | 输入值（字段） | 原始最大值 | 0 ~ 255 的整数 | - |
| dst_min | 输入值（字段） | 转换后的最小值 | -100 ~ 100 的整数 | - |
| dst_median | 输入值（字段） | 转换后的中间值 | -100 ~ 100 的整数 | - |
| dst_max | 输入值（字段） | 转换后的最大值 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 输入值 {#get_input}

所选端口的输入值

<BlockImage module="roboids/CheeseStick" id="get_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 输入端口 | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## 设置脉冲输入模式 {#set_pulse_input_mode}

设置所选端口的脉冲输入模式。

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 脉冲输入端口 | Sc, Lc | - |
| option | 下拉选项 | 上下拉模式 | 脉冲 (default), 脉冲（上拉） (pull-up), 脉冲（下拉） (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## 脉冲输入值 {#get_pulse_input}

所选端口是否检测到脉冲输入

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 脉冲输入端口 | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## 设置数字输出 {#set_digital_output}

设置指定端口的数字输出值。  
可以选择的值是 0 或 1。

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 数字输出端口 | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | 下拉选项 | 输出值 | 0 或 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## 设置 PWM 输出 {#set_pwm_output}

设置指定端口的 PWM 输出值。  
可以选择的值的范围是 0 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | PWM 输出端口 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 输入值（字段） | PWM 值 | 0 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## 改变 PWM 输出 {#change_pwm_output}

改变指定端口的 PWM 输出值。  
可以选择的值的范围是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | PWM 输出端口 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 输入值（字段） | 要改变的 PWM 差 | -100 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## 设置蜂鸣声 {#sound_buzz}

设置 Cheese Stick 的蜂鸣器声音。

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 0 ~ 6553.5 的实数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## 播放音符 {#sound_note}

Cheese Stick 播放指定的音符。

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## 播放声音片段 {#sound_clip}

Cheese Stick 播放特定的声音片段。

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## 关闭声音 {#sound_off}

关闭 Cheese Stick 的声音。

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## 轴加速度值 {#acceleration}

特定轴的重力加速度值

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## 温度传感器值 {#temperature}

温度传感器值

<BlockImage module="roboids/CheeseStick" id="temperature" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/CheeseStick" id="battery" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## 状态是否改变 {#state_change}

机器人的状态是否发生了改变

<BlockImage module="roboids/CheeseStick" id="state_change" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 状态种类 | 0 ~ 7（参见下表） | - |

| unit | 条件 |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()`（敲击事件） |
| 7 | `fall()`（落下事件） |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
