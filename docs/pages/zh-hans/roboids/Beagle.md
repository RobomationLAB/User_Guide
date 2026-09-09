---
title: Beagle
---

# Beagle

## 声明实例 {#instance}

把 Beagle 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
beagle = Beagle(0)
# 有多个实例时
beagle_1 = Beagle(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置轮速度 {#set_wheel_speed}

决定轮速度。速度的范围是 -100 ~ 100。

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 轮速度 | -100 ~ 100 的整数, 0: 停止 | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## 移动指定距离 {#move_distance}

以当前的轮速度移动指定的距离。  
如果没有设置轮速度，就以默认速度向前移动。  
距离值为 0 时，按当前的轮速度持续移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Beagle" id="move_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动距离 | 0 以上的实数 | - |
| unit | 下拉选项 | 距离单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## 移动指定时间 {#move_time}

以当前的轮速度移动指定的时间。  
如果没有设置轮速度，就以默认速度向前移动。  
勾选等待后，会一直等到移动完成。

<BlockImage module="roboids/Beagle" id="move_time" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动时间（秒） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## 原地转动 {#turn_degree}

设置原地旋转的方向和角度。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="roboids/Beagle" id="turn_degree" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 旋转方向 | 左侧(left), 右侧(right) | - |
| data | 输入值（积木） | 旋转角度（度） | 0 以上的实数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## 改变轮速度 {#change_speed}

改变 Beagle 的轮速度。  
在当前的轮速度上加上输入的速度，得到新的轮速度。  
新设置的轮速度范围会限制在 -100 ~ 100。

<BlockImage module="roboids/Beagle" id="change_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 车轮种类 | 左轮(left), 右轮(right), 两轮(both) | - |
| speed | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## 停止 {#stop}

让 Beagle 停止移动。  
Beagle 两轮的速度都会初始化为 0。

<BlockImage module="roboids/Beagle" id="stop" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## 车轮正在移动？ {#wheel_moving}

车轮正在移动时返回 true，停止时返回 false。

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## 设置蜂鸣器频率 {#sound_buzz}

以指定的频率设置 Beagle 的蜂鸣器声音。  
可以发声的频率范围是 27.5hz ~ 6553.5hz。  
输入其他值时不会发出蜂鸣声。

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| hz | 输入值（积木） | 频率（Hz） | 0, 27.5 ~ 6553.5 的实数（其他为 0） | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## 播放音符 {#sound_note}

Beagle 播放指定的音符。

<BlockImage module="roboids/Beagle" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | 哆(C), 哆#(C#), 来(D), 来#(D#), 咪(E), 发(F), 发#(F#), 索(G), 索#(G#), 拉(A), 拉#(A#), 西(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

Beagle 播放特定的声音片段。  
勾选等待后，会一直等到播放完成。

<BlockImage module="roboids/Beagle" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## 关闭声音 {#sound_off}

关闭 Beagle 的声音。

<BlockImage module="roboids/Beagle" id="sound_off" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## 正在播放声音？ {#sound_playing}

声音正在播放时返回 true，没有播放时返回 false。

<BlockImage module="roboids/Beagle" id="sound_playing" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## 轮速度值 {#wheel_speed}

特定车轮的速度

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左侧(left), 右侧(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## 编码器值 {#encoder}

特定车轮的编码器值

<BlockImage module="roboids/Beagle" id="encoder" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 目标车轮 | 左侧(left), 右侧(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## 陀螺仪值 {#gyroscope}

特定轴的陀螺仪传感器的值

<BlockImage module="roboids/Beagle" id="gyroscope" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## 加速度计值 {#accelerometer}

特定轴的加速度传感器的值

<BlockImage module="roboids/Beagle" id="accelerometer" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## 磁力计值 {#magnetometer}

特定轴的地磁传感器的值

<BlockImage module="roboids/Beagle" id="magnetometer" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 测量的轴 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## 温度传感器值 {#temperature}

温度传感器值

<BlockImage module="roboids/Beagle" id="temperature" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/Beagle" id="signal_strength" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/Beagle" id="battery" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## 状态是否改变 {#state_change}

机器人的状态是否发生了改变

<BlockImage module="roboids/Beagle" id="state_change" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 状态种类 | 0 ~ 5（参见下表） | - |

| unit | 条件 |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## 启动 / 停止激光雷达 {#lidar_power}

启用或停用激光雷达传感器。

<BlockImage module="roboids/Beagle" id="lidar_power" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| on | 下拉选项 | 激光雷达 ON / OFF | 启动(on=True), 停止(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## 激光雷达第 ~ 个值 {#lidar_value}

激光雷达传感器可以测量周围 360 度范围内与物体的距离。  
以 Beagle 的前方（第 0 个值）为基准，沿逆时针方向编号每次加 1。

<BlockImage module="roboids/Beagle" id="lidar_value" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 输入值（字段） | 物体编号（从 0 开始） | 0 以上的整数 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## 激光雷达各方向的距离值 {#lidar_directions}

表示激光雷达传感器测得的前、后、两侧和斜方向的距离。  
输出该方向左右各 45 度范围内距离值的平均值。

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 下拉选项 | 测量方向 | 前方(front), 左前方(left front), 左侧(left), 左后方(left back), 后方(back), 右后方(right back), 右侧(right), 右前方(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## 激光雷达已就绪？ {#lidar_state}

返回激光雷达是否已启动，结果为 **true(True) / false(False)**。

<BlockImage module="roboids/Beagle" id="lidar_state" />

### 参数

（无）

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
