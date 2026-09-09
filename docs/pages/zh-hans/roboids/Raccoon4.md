---
title: RaccoonBot
---

# RaccoonBot

## 声明实例 {#instance}

把 RaccoonBot 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
raccoon = RaccoonBot(0)
# 有多个实例时
raccoon_1 = RaccoonBot(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 打开 / 关闭关节电机 {#motor}

决定是解除还是保持施加在各关节电机上的控制。  
不进行设置时，所有关节的电机控制都以打开的状态启动。

<BlockImage module="roboids/Raccoon4" id="motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 关节编号 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | 复选框 | 电机控制 ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 全部关节，关闭电机控制
raccoon.motor(-1, False)

# 1 号关节，打开电机控制
raccoon.motor(1, True)
```

## 设置关节速度 {#speed_joint}

设置所选关节的速度。

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| joint | 下拉选项 | 关节编号 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 输入值（积木） | 关节速度 | -100 ~ 100 的整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## 改变关节速度 {#change_speed_joint}

改变所选关节的速度。

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| joint | 下拉选项 | 关节编号 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## 一次设置各关节速度 {#speed_joints}

一次设置四个关节的速度。

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（数组） | 4 个关节速度的数组 | `[joint1, joint2, joint3, joint4]`，各 -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# 字面数组 [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# 变量数组
raccoon.set_speed_joints(*arr)
```

## 设置关节角度控制速度 {#angle_speed}

设置在角度控制模式下控制关节的速度。

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 角度控制的最大速度 | 0 ~ 100 的整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## 设置关节角度 {#angle_joint}

设置所选关节的角度。

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| joint | 下拉选项 | 关节编号 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 输入值（积木） | 关节角度（度） | 参见上表（自动 clamp） | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## 改变关节角度 {#change_angle_joint}

改变所选关节的角度。

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| joint | 下拉选项 | 关节编号 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 输入值（积木） | 要改变的角度差（度） | 参见上表（自动 clamp） | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## 一次设置各关节角度 {#angle_joints}

一次设置四个关节的角度。

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（数组） | 4 个关节角度的数组或姿态名称 | `[j1, j2, j3, j4]` 数组 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 显式数组
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## 初始化关节状态 {#default_angle_joints}

把四个关节的角度设置为预先定义的姿态 (`'zero'`, `'park'`, `'home'`)。

姿态预设：
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 下拉 | 姿态名称 | `'zero'` / `'park'` / `'home'` | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 姿态预设
raccoon.set_angle_joints('home', wait=True)
```

## 保存关节角度 {#save_encoder}

把当前的编码器值保存到任意变量中。

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| encoder | 变量 | 要保存到的变量名 | 变量 | - |
| data | 输入值（数组） | 要保存的初始数组 | 4 个元素的数组或空数组 | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## 设置特定坐标值 {#set_coordinate}

通过设置特定的坐标值来移动机械臂。  
各坐标的范围如下。  
以腕部为基准 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
以夹爪为基准 => 范围会随连接的设备而变化。  
夹爪的方向固定为与地面水平或垂直。  
输入了无法到达的坐标时，会跳过该命令。

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| origin | 下拉选项 | 基准点 | 腕部(wrist), 末端执行器(end_effector) | - |
| pos | 下拉选项 | 轴 | x, y, z | - |
| data | 输入值（积木） | 坐标值 | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | 下拉选项 | 单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 把 x 坐标设为 10cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# 以 end_effector 为基准的 z 坐标
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## 改变特定坐标值 {#change_coordinate}

以当前位置为基准改变特定的坐标值来移动机械臂。  
各坐标的范围如下。  
以腕部为基准 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
以夹爪为基准 => 范围会随连接的设备而变化。  
夹爪的方向固定为与地面水平或垂直。  
输入了无法到达的坐标时，会跳过该命令。

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| origin | 下拉选项 | 基准点 | 腕部(wrist), 末端执行器(end_effector) | - |
| pos | 下拉选项 | 轴 | x, y, z | - |
| data | 输入值（积木） | 要改变的坐标差 | 实数 | - |
| unit | 下拉选项 | 单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## 移动到 xyz 坐标 {#set_coordinates}

一次把 x, y, z 坐标分别设置为指定的值。  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| origin | 下拉选项 | 基准点 | 腕部(wrist), 末端执行器(end_effector) | - |
| x | 输入值（积木） | x 坐标 | 实数 | - |
| y | 输入值（积木） | y 坐标 | 实数 | - |
| z | 输入值（积木） | z 坐标 | 实数 | - |
| unit | 下拉选项 | 单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## 设置末端执行器锁定 {#lock}

设置夹爪要锁定的方向。选项设置为水平或垂直之后，就无法控制关节 4 的速度或角度。

<BlockImage module="roboids/Raccoon4" id="lock" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| mode | 下拉选项 | 锁定方向 | 无(none), 水平(horizontal), 垂直(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## 用末端执行器抓取 / 放下物体 {#end_effector}

用末端执行器抓住或放下物体。  
根据 unit 下拉选项的值调用两个方法中的一个。

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 抓取（闭合）(pick), 放下（张开）(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## 末端执行器设备 {#end_effector_device}

当前连接的夹爪编号  
(1, 3, 4: 夹钳式夹爪, 2: 真空夹爪)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## 末端执行器状态 {#end_effector_status}

夹爪抓住物体的状态  
(0: 放下的状态, 1: 抓住的状态)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## 播放音符 {#sound_note}

RaccoonBot 播放指定的音符。

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| note | 下拉选项 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉选项 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## 播放声音片段 {#sound_clip}

RaccoonBot 播放特定的声音片段。

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` 等 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## 关闭声音 {#sound_off}

关闭 RaccoonBot 的声音。

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## 编码器值 {#encoder}

所选关节的编码器值

<BlockImage module="roboids/Raccoon4" id="encoder" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| joint | 下拉选项 | 关节编号（或全部关节） | 1, 2, 3, 4, 全部(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# 全部关节
raccoon.encoder(-1)
```

## 所选元素的坐标 {#coordinate}

返回基准点当前的 xyz 坐标。  
省略 `pos` 时返回 `[x, y, z]` 整个数组，指定时只返回该轴的值。

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| origin | 下拉选项 | 基准点 | 腕部(wrist), 末端执行器(end_effector) | wrist |
| pos | 下拉选项 | 轴（或全部） | x, y, z, xyz（省略时返回整个数组） | None（全部） |

### Python
```python
raccoon = RaccoonBot(0)

# 特定轴
raccoon.get_coordinates('wrist', 'x')

# 全部（3 个元素的数组）
raccoon.get_coordinates('wrist')
```

## 信号强度值 {#signal_strength}

信号强度

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## 电池电压 {#battery}

电池电压

<BlockImage module="roboids/Raccoon4" id="battery" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## 按钮已按下？ {#button}

所选按钮是否处于按下状态，或者是否发生了点击事件

<BlockImage module="roboids/Raccoon4" id="button" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 按钮名称 | teach, play, power, delete, 任意按钮(any) | - |
| event | 下拉选项 | 事件种类 | 按下(pressed), 点击(click), 长按(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## 设置传送带速度 {#conveyor_speed}

设置传送带的速度。速度的范围是 -100 ~ 100。

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 传送带速度 | -100 ~ 100 的整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## 移动传送带指定距离 {#conveyor_distance}

用传送带移动一定的距离。

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 移动距离 | 0 以上的实数 | - |
| unit | 下拉选项 | 距离单位 | 厘米(cm), 毫米(mm), 英寸(inch) | cm |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## 改变传送带速度 {#change_conveyor_speed}

改变传送带的速度。

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| data | 输入值（积木） | 要改变的速度差 | -200 ~ 200 的整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## 停止传送带 {#stop_conveyor}

停止传送带。

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## 传送带正在运行？ {#conveyor_running}

传送带是否正在运行

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### 参数

（无）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## 传送带按钮已按下？ {#conveyor_button}

传送带的按钮是否处于按下状态，或者是否发生了点击事件

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| event | 下拉选项 | 事件种类 | 按下(pressed), 点击(click), 长按(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
