---
title: CSD-09 电机
---

# CSD-09 电机

## 声明实例 {#instance}

把 CSD-09 电机(CSD09) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 启动伺服电机 {#start_servo_motor}

指定要使用伺服电机的端口。  
不指定端口，电机就不能正常工作。

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 伺服电机端口 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## 设置舵机角度 {#set_servo_motor}

设置指定端口的舵机角度。  
可以选择的值的范围是 0 ~ 180。

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 舵机端口 | Sa, Sb, Sc | 最后一次 `start_servo_motor` 的端口 |
| value | 输入值（字段） | 旋转角度（度） | 0 ~ 180 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## 改变舵机角度 {#change_servo_motor}

改变指定端口的舵机角度。  
可以选择的值的范围是 -180 ~ 180。

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 舵机端口 | Sa, Sb, Sc | 最后一次 `start_servo_motor` 的端口 |
| value | 输入值（字段） | 要改变的角度差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## 关闭舵机 {#stop_servo_motor}

关闭指定端口舵机的电源。

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 舵机端口 | Sa, Sb, Sc | 最后一次 `start_servo_motor` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## 启动直流电机 {#start_DC_motor}

让指定的端口可以用来控制直流电机。
在使用直流电机相关的其他积木之前，必须先调用一次。

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 直流电机端口 | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## 设置直流电机速度 {#set_DC_motor}

设置直流电机的 PWM 输出值。

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 直流电机端口 | Mab, Mcd | 最后一次 `start_dc_motor` 的端口 |
| value | 输入值（字段） | PWM 输出值 | 0 ~ 100 的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## 改变直流电机速度 {#change_DC_motor}

在当前直流电机的 PWM 输出值上加上输入的变化量，设置新的值。

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 直流电机端口 | Mab, Mcd | 最后一次 `start_dc_motor` 的端口 |
| value | 输入值（字段） | 要改变的 PWM 差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## 停止直流电机 {#stop_DC_motor}

停止直流电机的输出。

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 直流电机端口 | Mab, Mcd | 最后一次 `start_dc_motor` 的端口 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## 启动步进电机 {#start_step_motor}

开始使用步进电机。

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## 设置步进电机模式 {#set_step_motor_mode}

设置控制步进电机的模式。  
如果不单独设置模式，默认会设为「功率」模式。  
注意！步进电机正在旋转的过程中不能更改模式。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 驱动模式 | off(关闭), 普通(wave_step), 功率(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## 设置步进电机速度 {#set_step_motor_speed}

设置步进电机的速度。  
可以选择的值的范围是 -1000 ~ 1000。  
值为负数时，会朝相反方向旋转。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入值（字段） | 旋转速度（PPS） | 0 以上的整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## 旋转步进电机 {#rotate_step_motor}

设置步进电机旋转的脉冲数。  
可以选择的值的范围是 0 ~ 65535。  
如果没有选择步进电机的速度，就不会旋转。  
勾选等待后，会一直等到旋转完成。

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入值（字段） | 要旋转的步数 | 整数 | - |
| wait | 复选框 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)
# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## 改变步进电机速度 {#change_step_motor_speed}

改变步进电机的速度。  
可以选择的值的范围是 -2000 ~ 2000。

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 输入值（字段） | 要改变的 PPS 差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## 停止步进电机 {#stop_step_motor}

停止步进电机或关闭它的电源。

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 停止方式 | 停止(stop), 关闭电源(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()
# unit = "power"
csd09.turn_off_step_motor()
```

## 步数 {#step_motor_steps}

返回步进电机到目前为止累计旋转的步数。

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
