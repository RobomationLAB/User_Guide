---
title: Cheese Stick
---

# Cheese Stick

## Instance declaration {#instance}

When you add a Cheese Stick block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
# When there are multiple instances
cheesestick_1 = CheeseStick(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the input mode {#set_input_mode}

Sets the input mode of the selected port.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Input port | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Dropdown option | Input mode | makey, button, digital pullup (digital_pullup), digital pulldown (digital_pulldown), analog, analog voltage (analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Set the input range {#set_input_range}

Converts the input value of the selected port to the minimum~maximum range you specify.  
The range of the input value is 0 to 255.  
The range of values it can be converted to is -100 to 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Input port | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Input (field) | Source minimum | Integer 0 to 255 | - |
| src_max | Input (field) | Source maximum | Integer 0 to 255 | - |
| dst_min | Input (field) | Minimum after conversion | Integer -100 to 100 | - |
| dst_max | Input (field) | Maximum after conversion | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Set the input range with a median {#set_input_range_median}

Converts the input value of the selected port to the minimum~median~maximum range you specify.  
The range of the input value is 0 to 255.  
The range of values it can be converted to is -100 to 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Input port | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Input (field) | Source minimum | Integer 0 to 255 | - |
| src_median | Input (field) | Source median | Integer 0 to 255 | - |
| src_max | Input (field) | Source maximum | Integer 0 to 255 | - |
| dst_min | Input (field) | Minimum after conversion | Integer -100 to 100 | - |
| dst_median | Input (field) | Median after conversion | Integer -100 to 100 | - |
| dst_max | Input (field) | Maximum after conversion | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Input value {#get_input}

The input value of the selected port

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Input port | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Set the pulse input mode {#set_pulse_input_mode}

Sets the pulse input mode of the selected port.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Pulse input port | Sc, Lc | - |
| option | Dropdown option | Pull mode | pulse (default), pulse(pull-up) (pull-up), pulse(pull-down) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Pulse input value {#get_pulse_input}

Whether a pulse input was detected on the selected port

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Pulse input port | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Set the digital output {#set_digital_output}

Sets the digital output value of the specified port.  
The values you can choose are 0 and 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Digital output port | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Dropdown option | Output value | 0 or 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Set the PWM output {#set_pwm_output}

Sets the PWM output value of the specified port.  
The range of values you can choose is 0 to 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | PWM output port | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Input (field) | PWM value | Integer 0 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Change the PWM output {#change_pwm_output}

Changes the PWM output value of the specified port.  
The range of values you can choose is -100 to 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | PWM output port | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Input (field) | Amount of PWM change | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Set sound buzz {#sound_buzz}

Sets the buzzer sound of Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| hz | Input (block) | Frequency (Hz) | Real number 0 to 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Play a note {#sound_note}

Cheese Stick plays the specified note.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do# (C#), Re (D), Re# (D#), Mi (E), Fa (F), Fa# (F#), Sol (G), Sol# (G#), La (A), La# (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Play a sound clip {#sound_clip}

Cheese Stick plays a particular sound clip.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Sound off {#sound_off}

Turns off the sound of Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Acceleration value {#acceleration}

The gravitational acceleration value along a particular axis

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Temperature sensor value {#temperature}

The temperature sensor value

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/CheeseStick" id="battery" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Whether the state has changed {#state_change}

Whether the state of the robot has changed

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Kind of state | 0 to 7 (see the table below) | - |

| unit | Condition |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (tap event) |
| 7 | `fall()` (fall event) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
