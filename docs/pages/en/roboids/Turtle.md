---
title: Turtle
---

# Turtle

## Instance declaration {#instance}

When you add a Turtle block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
turtle = Turtle(0)
# When there are multiple instances
turtle_1 = Turtle(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set wheel speed {#set_wheel_speed}

Determines the wheel speed. The speed ranges from -100 to 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Wheel speed | Integer -100 to 100, 0: stop | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Move a distance {#move_distance}

Sets the distance to move.  
If the wheel speed has not been set, it does not move.  
If the distance is 0, it keeps moving according to the current wheel speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Distance to move | Real number 0 or greater | - |
| unit | Dropdown option | Distance unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Move for a time {#move_time}

Moves for the specified time at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Turtle" id="move_time" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Time to move (seconds) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## Turn in place {#turn_degree}

Sets the direction and angle to rotate in place.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction of rotation | left, right | - |
| data | Input (block) | Angle of rotation (degrees) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Change wheel speed {#change_speed}

Changes the wheel speed of Turtle.  
The new wheel speed is the current wheel speed plus the speed you enter.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Stop {#stop}

Stops the movement of Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Is the wheel moving? {#wheel_moving}

Returns true if the wheel is moving, and false if it is stopped.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Pivot around a wheel {#pivot}

Sets the pivot point, direction, and angle of rotation.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="roboids/Turtle" id="pivot" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| base | Dropdown option | Wheel to pivot around | left wheel (left_wheel), right wheel (right_wheel) | - |
| direction | Dropdown option | Direction of rotation | forward, backward | - |
| data | Input (block) | Angle of rotation (degrees) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Draw a circle {#pivot_circle}

When drawing a circle with the pen, sets the direction, radius, and angle of rotation.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction of rotation | left forward (left_forward), left backward (left_backward), right forward (right_forward), right backward (right_backward) | - |
| degree | Input (block) | Angle of rotation (degrees) | Real number 0 or greater | - |
| radius | Input (block) | Radius of rotation | Real number 0 or greater | - |
| unit | Dropdown option | Radius unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Trace a line with the sensor {#trace_line}

Uses the color sensor on the bottom to move along a line of a particular color.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| line | Dropdown option | Color of the line to trace | black, red, green, blue, any | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Trace a line until a particular color {#trace_line_until_color}

Uses the color sensor on the bottom to trace a line of color A until it meets color B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| line | Dropdown option | Color of the line to trace | black, red, green, blue, any | - |
| color | Dropdown option | Color to stop at | black, red, green, cyan, blue, magenta, any | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Move through an intersection and stop at the next one {#intersection}

Turtle moves in the specified direction at an intersection, then keeps moving until it meets the next intersection.  
If wait is checked, execution waits until the movement is complete.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction to take at the intersection | forward, left, right, u-turn (uturn) | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Set line trace speed {#set_trace_speed}

Sets the line trace speed. The speed ranges from 1 to 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Line trace speed | Integer 1 to 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Set line trace gain {#set_trace_gain}

Sets the amount by which the line trace direction changes. The gain ranges from 1 to 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Amount of direction change | Integer 1 to 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Stop line tracing {#stop_trace}

Ends the line tracing function of Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Set LED color {#set_led_color}

Sets the head LED color of Turtle.  
When you pick a color from the color palette, it is converted to a **color name** (an English string) for the call. (The generated code uses a color name, not R, G, B numeric values.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Color | Pick from the color palette → converted to a color name (English) | Color names: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Set LED color with a Color category block {#set_led_color_with_block}

Takes the output of a Color category block (`[R, G, B]`) as input and sets the head LED color.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (color) | A Color category block or an `[R, G, B]` array | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Change LED color by RGB {#change_by_rgb}

Adds the R, G, and B amounts you enter to the current head LED color to set a new color.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Turn off LED {#turn_off}

Removes the head LED color.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Set sound buzz {#sound_buzz}

Sets the buzzer sound of Turtle to the specified frequency.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| hz | Input (block) | Frequency (Hz) | Real number 0 to 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Play a note {#sound_note}

Turtle plays the specified note.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do# (C#), Re (D), Re# (D#), Mi (E), Fa (F), Fa# (F#), Sol (G), Sol# (G#), La (A), La# (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Play a sound clip {#sound_clip}

Turtle plays a particular sound clip.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Sound off {#sound_off}

Turns off the sound of Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Is a sound playing? {#sound_playing}

Returns true if a sound is playing, and false if it is not.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Wheel speed value {#wheel_speed}

The speed of a particular wheel

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to read | left, right | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Floor color sensor value {#floor}

The value of the color sensor on the bottom

<BlockImage module="roboids/Turtle" id="floor" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Card color name value {#card_color}

The name of the card color read through the color sensor on the bottom

<BlockImage module="roboids/Turtle" id="card_color" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Card color pattern value {#card_pattern}

The pattern of the card colors read through the color sensor on the bottom

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Gravitational acceleration value {#acceleration}

The gravitational acceleration value along a particular axis

<BlockImage module="roboids/Turtle" id="acceleration" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Temperature sensor value {#temperature}

The temperature sensor value

<BlockImage module="roboids/Turtle" id="temperature" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/Turtle" id="battery" />

### Parameters

(none)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Is it touching a particular color? {#color_read}

Measures through the Turtle color sensor whether it is touching the specified color and returns **true (True) / false (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| color | Dropdown option | Color name | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Is the card color pattern ~ ? {#pattern_read}

Returns whether the pattern of the card colors recognized by the color sensor matches, as **true (True) / false (False)**.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| pattern | Dropdown option | Card pattern name | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Back button state {#button}

Whether the button on the back is pressed or has been clicked

<BlockImage module="roboids/Turtle" id="button" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| event | Dropdown option | Kind of button state | pressed, click, long click (long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Whether the state has changed {#state_change}

Whether the state of the robot has changed

<BlockImage module="roboids/Turtle" id="state_change" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Kind of state | 0 to 5 (see the table below) | - |

| unit | Condition |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
