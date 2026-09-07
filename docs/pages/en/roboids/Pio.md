---
title: Piobot
---

# Piobot

## Instance declaration {#instance}

When you add a Piobot block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
pio = Pio(0)
# When there are multiple instances
pio_1 = Pio(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set wheel speed {#set_wheel_speed}

Sets the wheel speed. The wheel speed ranges from -100 to 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Wheel speed | Integer -100 to 100, 0: stop | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Move a distance {#move_distance}

Moves the specified distance at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If the distance is 0, it keeps moving according to the current wheel speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Pio" id="move_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Distance to move | Real number 0 or greater | - |
| unit | Dropdown option | Distance unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Move for a time {#move_time}

Moves for the specified time at the current wheel speed.  
If the wheel speed has not been set, it moves forward at the default speed.  
If wait is checked, execution waits until the movement is complete.

<BlockImage module="roboids/Pio" id="move_time" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Time to move (seconds) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Turn in place {#turn_degree}

Sets the direction and angle to rotate in place.  
If wait is checked, execution waits until the rotation is complete.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| direction | Dropdown option | Direction of rotation | left, right | - |
| data | Input (block) | Angle of rotation (degrees) | Real number 0 or greater | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Change wheel speed {#change_speed}

Changes the wheel speed of Piobot.  
The new wheel speed is the current wheel speed plus the speed you enter.  
The newly set wheel speed is clamped to the range -100 to 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to control | left, right, both | - |
| speed | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Turn turbo mode on / off {#turbo}

Turns the turbo mode of Piobot on or off.

<BlockImage module="roboids/Pio" id="turbo" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Turbo mode ON / OFF | on (True), off (False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Stop {#stop}

Stops the movement of Piobot.  
The speed of both wheels of Piobot is reset to 0.

<BlockImage module="roboids/Pio" id="stop" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Is the wheel moving? {#wheel_moving}

Returns true if the wheel is moving, and false if it is stopped.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Move one step on the board {#grid_move}

Moves one step at a time on the board as configured.

<BlockImage module="roboids/Pio" id="grid_move" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Direction to move | forward, backward, left, right | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Turn once on the board {#grid_turn}

Piobot rotates 90 degrees on the board in the given direction. It always waits until completion (internally wait=True is fixed).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Direction of rotation | left, right | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Set neck rotation speed {#set_neck_speed}

Sets the rotation speed of the neck. The neck speed ranges from 1 to 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Neck rotation speed | Integer 1 to 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Set neck angle {#set_neck_angle}

Sets the angle the neck rotates to. The neck angle ranges from -45 to 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Neck angle (degrees) | Real number -45 to 45 | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Is the neck moving? {#neck_moving}

Returns true if the neck is moving, and false if it is stopped.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Set eye LED color {#set_eye_color}

Sets the eye LED color of Piobot.  
You can change the color of the left eye, the right eye, or both.  
When you pick a color from the color preset, it is converted to a **color name** (an English string) for the call. (The generated code uses a color name, not R, G, B numeric values.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Eye to control | left, right, both | - |
| color | Dropdown option | Color preset → converted to a color name (English) | black, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Set eye LED color with a Color category block {#set_eye_color_with_block}

Sets the eye LED color of Piobot using blocks from the Color category.  
You can change the color of the left eye, the right eye, or both.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Eye to control | left, right, both | - |
| data | Input (color) | An [R, G, B] array | A Color category block or `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Change eye LED color by the specified RGB {#change_by_rgb}

Changes the eye LED color of Piobot by the specified R, G, and B amounts.  
You can set the color of the left eye, the right eye, or both.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Eye to control | left, right, both | - |
| r | Input (field) | Amount of red change | Integer -255 to 255 | 0 |
| g | Input (field) | Amount of green change | Integer -255 to 255 | 0 |
| b | Input (field) | Amount of blue change | Integer -255 to 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Set eye LED pattern {#set_eye_pattern}

Sets the pattern of the eyes and specifies the color of each eye when the pattern starts.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| pattern | Dropdown option | Kind of pattern | reset, blink, dimming, rainbow | - |
| left | Dropdown option | Left eye color | default (black), red, yellow, green, cyan, blue, magenta, white | white |
| right | Dropdown option | Right eye color | (same as left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Turn off eye LED {#turn_off}

Removes the color of the eyes.

<BlockImage module="roboids/Pio" id="turn_off" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Eye to control | left, right, both | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Set sound buzz {#sound_buzz}

Sets the buzzer sound of Piobot to the specified frequency.  
The frequency range that can produce sound is 27.5 Hz to 6553.5 Hz.  
If you enter a value outside this range, no buzzer sound is produced.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| hz | Input (block) | Frequency (Hz) | Real number 27.5 to 6553.5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Play a note {#sound_note}

Piobot plays the specified note.

<BlockImage module="roboids/Pio" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do#/Re♭ (C#), Re (D), Re#/Mi♭ (D#), Mi (E), Fa (F), Fa#/Sol♭ (F#), Sol (G), Sol#/La♭ (G#), La (A), La#/Si♭ (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Play a sound clip {#sound_clip}

Piobot plays a particular sound clip.  
If wait is checked, execution waits until playback is complete.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Play a melody {#sound_melody}

Piobot plays a particular melody.  
If wait is checked, execution waits until playback is complete.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| melody | Dropdown option | Melody name | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Sound off {#sound_off}

Turns off the sound of Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Is a sound playing? {#sound_playing}

Returns true if a sound is playing, and false if it is not.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Wheel speed value {#wheel_speed}

The speed of a particular wheel

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Wheel to read | left, right | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/Pio" id="signal_strength" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/Pio" id="battery" />

### Parameters

(none)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Keypad button {#keypad}

Detects the keypad button the user pressed last.

<BlockImage module="roboids/Pio" id="keypad" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| button | Dropdown option | Button to detect | play, move forward (forward), move backward (backward), move left (left), move right (right), action, repeat, clear | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
