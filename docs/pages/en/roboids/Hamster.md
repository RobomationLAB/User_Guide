---
title: Hamster
---

# Hamster

## Instance declaration {#instance}

When you add a Hamster block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
hamster = Hamster(0)
# When there are multiple instances
hamster_1 = Hamster(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set wheel speed {#set_wheel_speed}

Determines the wheel speed. The speed ranges from -100 to 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Wheel speed | Integer -100 to 100, 0: stop | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Move for a time {#move_time}

Moves for the specified time at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Hamster" id="move_time" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Time to move (seconds) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Change wheel speed {#change_speed}

Changes the wheel speed of Hamster.  
The new wheel speed is the current wheel speed plus the speed you enter.  
The newly set wheel speed is clamped to the range -100 to 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Stop {#stop}

Stops the movement of Hamster.  
The speed of both wheels of Hamster is reset to 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Move forward one step on the board {#grid_move}

Moves one step at a time on the board as configured.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Turn once on the board {#grid_turn}

Rotates 90 degrees on the board in the specified direction.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction of rotation | left, right | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Trace a line with the sensor {#trace_mode}

Hamster uses its floor sensor to follow a line of a particular color.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| floor | Dropdown option | Floor sensor to trace with | left, right, center | - |
| line | Dropdown option | Line color | black, white | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Move through an intersection and stop at the next one {#trace_until_grid}

Hamster moves in the specified direction at an intersection, then keeps moving until it meets the next intersection.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction to take at the intersection | left, right, forward, u-turn (uturn) | - |
| line | Dropdown option | Line color | black, white | black |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Set line trace speed {#set_trace_speed}

Sets the line trace speed. The speed ranges from 1 to 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Line trace speed | Integer 1 to 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Stop line tracing {#stop_trace}

Ends the line tracing function of Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Set LED color {#set_led_color}

Sets the LED color.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | LED to control | left, right, both | - |
| color | Dropdown option | Color | black, blue, green, cyan, red, magenta, yellow, white | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Turn off LED {#turn_off}

Removes the LED color.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | LED to control | left, right, both | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Set sound buzz {#sound_buzz}

Sets the buzzer sound of Hamster to the specified frequency.  
The frequency range that can produce sound is 1.0 Hz to 6553.5 Hz.  
If you enter a value outside this range, no buzzer sound is produced.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| hz | Input (block) | Frequency (Hz) | Real number 0 to 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Play a note {#sound_note}

Hamster plays the specified note.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do# (C#), Re (D), Re# (D#), Mi (E), Fa (F), Fa# (F#), Sol (G), Sol# (G#), La (A), La# (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Sound off {#sound_off}

Turns off the sound of Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Wheel speed value {#wheel_speed}

The speed of a particular wheel

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to read | left, right | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Proximity sensor value {#proximity}

The value of a particular proximity sensor

<BlockImage module="roboids/Hamster" id="proximity" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Sensor position to measure | left, right | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Floor sensor value {#floor}

The value of a particular floor sensor

<BlockImage module="roboids/Hamster" id="floor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Sensor position to measure | left, right, center | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Gravitational acceleration value {#acceleration}

The gravitational acceleration value along a particular axis

<BlockImage module="roboids/Hamster" id="acceleration" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Brightness sensor value {#light}

The brightness sensor value

<BlockImage module="roboids/Hamster" id="light" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Temperature sensor value {#temperature}

The temperature sensor value

<BlockImage module="roboids/Hamster" id="temperature" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/Hamster" id="battery" />

### Parameters

(none)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Whether the state has changed {#state_change}

Whether the state of the robot has changed

<BlockImage module="roboids/Hamster" id="state_change" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Kind of state | 0 to 6 (see the table below) | - |

| unit | Condition |
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

## Set I/O port input mode {#io_mode}

Sets the input mode of an I/O port.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | I/O port | A (`'a'`), B (`'b'`), both | - |
| option | Dropdown option | I/O mode | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Set I/O port output value {#set_output}

Sets the output value of the specified I/O port.

<BlockImage module="roboids/Hamster" id="set_output" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | I/O port | A (`'a'`), B (`'b'`), both | - |
| data | Input (block) | Output value | Integer 0 to 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Change I/O port output value {#change_output}

Changes the output value of the specified I/O port.

<BlockImage module="roboids/Hamster" id="change_output" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | I/O port | A (`'a'`), B (`'b'`), both | - |
| data | Input (block) | Amount of output change | Integer | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Open / close the gripper {#gripper}

Opens or closes the gripper of Hamster.  
Depending on the unit value, one of two methods is called.

<BlockImage module="roboids/Hamster" id="gripper" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | close, open | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Set shooter angle {#shooter}

Sets and controls the shooter angle. The angle ranges from 0 to 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Shooter angle | Integer 0 to 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## I/O port input value {#input}

Returns the input value of an I/O port of Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | I/O port | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
