---
title: Beagle
---

# Beagle

## Instance declaration {#instance}

When you add a Beagle block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
beagle = Beagle(0)
# When there are multiple instances
beagle_1 = Beagle(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set wheel speed {#set_wheel_speed}

Determines the wheel speed. The speed ranges from -100 to 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Wheel speed | Integer -100 to 100, 0: stop | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Move a distance {#move_distance}

Moves the specified distance at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If the distance is 0, it keeps moving according to the current wheel speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Distance to move | Real number 0 or greater | - |
| unit | Dropdown option | Distance unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Move for a time {#move_time}

Moves for the specified time at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Beagle" id="move_time" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Time to move (seconds) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## Turn in place {#turn_degree}

Sets the direction and angle to rotate in place.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction of rotation | left, right | - |
| data | Input (block) | Angle of rotation (degrees) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Change wheel speed {#change_speed}

Changes the wheel speed of Beagle.  
The new wheel speed is the current wheel speed plus the speed you enter.  
The newly set wheel speed is clamped to the range -100 to 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Stop {#stop}

Stops the movement of Beagle.  
The speed of both wheels of Beagle is reset to 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Is the wheel moving? {#wheel_moving}

Returns true if the wheel is moving, and false if it is stopped.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Set sound buzz {#sound_buzz}

Sets the buzzer sound of Beagle to the specified frequency.  
The frequency range that can produce sound is 27.5 Hz to 6553.5 Hz.  
If you enter a value outside this range, no buzzer sound is produced.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| hz | Input (block) | Frequency (Hz) | Real number 0, or 27.5 to 6553.5 (0 otherwise) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Play a note {#sound_note}

Beagle plays the specified note.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do# (C#), Re (D), Re# (D#), Mi (E), Fa (F), Fa# (F#), Sol (G), Sol# (G#), La (A), La# (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Play a sound clip {#sound_clip}

Beagle plays a particular sound clip.  
If wait is checked, execution waits until playback is complete.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Sound off {#sound_off}

Turns off the sound of Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Is a sound playing? {#sound_playing}

Returns true if a sound is playing, and false if it is not.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Wheel speed value {#wheel_speed}

The speed of a particular wheel

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to read | left, right | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Encoder value {#encoder}

The encoder value of a particular wheel

<BlockImage module="roboids/Beagle" id="encoder" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to read | left, right | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Gyroscope sensor value {#gyroscope}

The value of the gyroscope sensor along a particular axis

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Accelerometer sensor value {#accelerometer}

The value of the accelerometer sensor along a particular axis

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Magnetometer sensor value {#magnetometer}

The value of the magnetometer sensor along a particular axis

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Temperature sensor value {#temperature}

The temperature sensor value

<BlockImage module="roboids/Beagle" id="temperature" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/Beagle" id="battery" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Whether the state has changed {#state_change}

Whether the state of the robot has changed

<BlockImage module="roboids/Beagle" id="state_change" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Kind of state | 0 to 5 (see the table below) | - |

| unit | Condition |
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

## Turn the lidar on / off {#lidar_power}

Enables or disables the lidar sensor.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| on | Dropdown option | Lidar ON / OFF | start (True), stop (False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Distance value of the Nth object from the lidar {#lidar_value}

The lidar sensor can measure the distance to objects all around, over 360 degrees.  
Starting from the front of Beagle (value number 0), the number increases by 1 as you go counterclockwise.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Input (field) | Object number (starting from 0) | Integer 0 or greater | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Lidar distance value by direction {#lidar_directions}

Gives the distance measured by the lidar sensor to the front, back, both sides, and the diagonal directions.  
It outputs the average of the distance values within 45 degrees to the left and right of that direction.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction to measure | front, left front, left, left back, back, right back, right, right front | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Is the lidar ready? {#lidar_state}

Returns whether the lidar is on as **true (True) / false (False)**.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Parameters

(none)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
