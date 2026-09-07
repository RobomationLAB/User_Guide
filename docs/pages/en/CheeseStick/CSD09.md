---
title: CSD-09 Motor
---

# CSD-09 Motor

## Instance declaration {#instance}

When you add a CSD-09 Motor block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Start the servo motor {#start_servo_motor}

Specifies the port to use for the servo motor.  
If you do not specify a port, the motor does not work properly.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Servo motor port | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Set the servo motor angle {#set_servo_motor}

Sets the angle of the servo motor on the specified port.  
The range of values you can choose is 0 to 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Servo motor port | Sa, Sb, Sc | The port of the last `start_servo_motor` |
| value | Input (field) | Angle of rotation (degrees) | Integer 0 to 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Change the servo motor angle {#change_servo_motor}

Changes the angle of the servo motor on the specified port.  
The range of values you can choose is -180 to 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Servo motor port | Sa, Sb, Sc | The port of the last `start_servo_motor` |
| value | Input (field) | Amount of angle change | Integer | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Stop the servo motor {#stop_servo_motor}

Turns off the power to the servo motor on the specified port.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Servo motor port | Sa, Sb, Sc | The port of the last `start_servo_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Start the DC motor {#start_DC_motor}

Makes the DC motor controllable using the specified port.
You must call it once before using the other DC motor blocks.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | DC motor port | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Set the DC motor speed {#set_DC_motor}

Sets the PWM output value of the DC motor.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | DC motor port | Mab, Mcd | The port of the last `start_dc_motor` |
| value | Input (field) | PWM output value | Integer 0 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Change the DC motor speed {#change_DC_motor}

Adds the amount of change you enter to the current PWM output value of the DC motor to set a new value.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | DC motor port | Mab, Mcd | The port of the last `start_dc_motor` |
| value | Input (field) | Amount of PWM change | Integer | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Stop the DC motor {#stop_DC_motor}

Stops the output of the DC motor.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | DC motor port | Mab, Mcd | The port of the last `start_dc_motor` |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Start the step motor {#start_step_motor}

Uses the step motor.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Set the step motor mode {#set_step_motor_mode}

Sets the mode used to control the step motor.  
If you do not set a mode separately, it defaults to 'power' mode.  
Caution! You must not change the mode while the step motor is rotating.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Drive mode | off, normal (wave_step), power (full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Set the step motor speed {#set_step_motor_speed}

Sets the speed of the step motor.  
The range of values you can choose is -1000 to 1000.  
If the value is negative, it rotates in the opposite direction.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| value | Input (field) | Rotation speed (pps) | Integer 0 or greater | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Rotate the step motor {#rotate_step_motor}

Sets the number of pulses to rotate the step motor.  
The range of values you can choose is 0 to 65535.  
If you have not chosen a speed for the step motor, it does not rotate.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| value | Input (field) | Number of steps to rotate | Integer | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Change the step motor speed {#change_step_motor_speed}

Changes the speed of the step motor.  
The range of values you can choose is -2000 to 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| value | Input (field) | Amount of pps change | Integer | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Stop the step motor {#stop_step_motor}

Stops the step motor or turns off its power.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Way to stop | stop, power off (power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Accumulated step count {#step_motor_steps}

Returns the accumulated number of steps the step motor has rotated so far.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
