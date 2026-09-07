---
title: RaccoonBot
---

# RaccoonBot

## Instance declaration {#instance}

When you add a RaccoonBot block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
raccoon = RaccoonBot(0)
# When there are multiple instances
raccoon_1 = RaccoonBot(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Turn joint motor control on / off {#motor}

Decides whether to release or keep the control applied to each joint motor.  
If you do not set it, all joints start with motor control turned on.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Joint number | all (-1), 1 (1), 2 (2), 3 (3), 4 (4) | -1 |
| on | Checkbox | Motor control ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# All joints, motor control off
raccoon.motor(-1, False)

# Joint no. 1, motor control on
raccoon.motor(1, True)
```

## Set joint speed {#speed_joint}

Sets the speed of the selected joint.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| joint | Dropdown option | Joint number | all (-1), 1 (1), 2 (2), 3 (3), 4 (4) | - |
| data | Input (block) | Joint speed | Integer -100 to 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Change joint speed {#change_speed_joint}

Changes the speed of the selected joint.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| joint | Dropdown option | Joint number | all (-1), 1 (1), 2 (2), 3 (3), 4 (4) | - |
| data | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Set all joint speeds at once {#speed_joints}

Sets the speed of all four joints at once.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (array) | Array of the four joint speeds | `[joint1, joint2, joint3, joint4]`, each -100 to 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# Literal array [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# Array in a variable
raccoon.set_speed_joints(*arr)
```

## Set the speed of joint angle control {#angle_speed}

Sets the speed at which joints are controlled in angle control mode.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Maximum speed of angle control | Integer 0 to 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Set joint angle {#angle_joint}

Sets the angle of the selected joint.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| joint | Dropdown option | Joint number | all (-1), 1 (1), 2 (2), 3 (3), 4 (4) | - |
| data | Input (block) | Joint angle (degrees) | See the table above (clamped automatically) | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Change joint angle {#change_angle_joint}

Changes the angle of the selected joint.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| joint | Dropdown option | Joint number | all (-1), 1 (1), 2 (2), 3 (3), 4 (4) | - |
| data | Input (block) | Amount of angle change (degrees) | See the table above (clamped automatically) | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Set all joint angles at once {#angle_joints}

Sets the angle of all four joints at once.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (array) | Array of the four joint angles, or a posture name | `[j1, j2, j3, j4]` array | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# Explicit array
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Initialize the joint state {#default_angle_joints}

Sets the angle of all four joints to a predefined posture (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Dropdown | Posture name | `'zero'` / `'park'` / `'home'` | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

Posture presets:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# Posture preset
raccoon.set_angle_joints('home', wait=True)
```

## Save the joint angles {#save_encoder}

Saves the current encoder values to a variable of your choice.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| encoder | Variable | Name of the variable to save to | Variable | - |
| data | Input (array) | Initial array to save | A 4-element array or an empty array | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Set a particular coordinate value {#set_coordinate}

Moves the robot arm by setting a particular coordinate value.  
The range of each coordinate is as follows.  
Relative to the wrist => x: -20.0 cm to 20.0 cm, y: -10.0 cm to 20.0 cm, z: -2.0 mm to 28.0 cm  
Relative to the gripper => the range can differ depending on the device you connect.  
The direction of the gripper is fixed either horizontal or vertical to the ground.  
If you enter a coordinate that cannot be reached, the command is skipped.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| origin | Dropdown option | Origin | wrist, end effector (end_effector) | - |
| pos | Dropdown option | Axis | x, y, z | - |
| data | Input (block) | Coordinate value | x: -20 to 20 cm, y: -10 to 20 cm, z: -2 to 28 cm | - |
| unit | Dropdown option | Unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# Set the x coordinate to 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# The z coordinate relative to end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Change a particular coordinate value {#change_coordinate}

Moves the robot arm by changing a particular coordinate value relative to the current position.  
The range of each coordinate is as follows.  
Relative to the wrist => x: -20.0 cm to 20.0 cm, y: -10.0 cm to 20.0 cm, z: -2.0 mm to 28.0 cm  
Relative to the gripper => the range can differ depending on the device you connect.  
The direction of the gripper is fixed either horizontal or vertical to the ground.  
If you enter a coordinate that cannot be reached, the command is skipped.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| origin | Dropdown option | Origin | wrist, end effector (end_effector) | - |
| pos | Dropdown option | Axis | x, y, z | - |
| data | Input (block) | Amount of coordinate change | Real number | - |
| unit | Dropdown option | Unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Move to xyz coordinates {#set_coordinates}

Sets the x, y, and z coordinates to the specified values all at once.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| origin | Dropdown option | Origin | wrist, end effector (end_effector) | - |
| x | Input (block) | x coordinate | Real number | - |
| y | Input (block) | y coordinate | Real number | - |
| z | Input (block) | z coordinate | Real number | - |
| unit | Dropdown option | Unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Set the end effector lock {#lock}

Sets the direction in which the gripper is locked. Once the option is set to horizontal or vertical, you can no longer control the speed or angle of joint 4.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| mode | Dropdown option | Lock direction | none, horizontal, vertical | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Pick / place an object with the end effector {#end_effector}

Picks up or places an object with the end effector.  
Depending on the unit dropdown value, one of two methods is called.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | pick (close), place (open) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## End effector device {#end_effector_device}

The number of the gripper currently connected  
(1, 3, 4: tong gripper, 2: vacuum gripper)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## End effector status {#end_effector_status}

Whether the gripper is holding an object  
(0: released, 1: holding)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Play a note {#sound_note}

RaccoonBot plays the specified note.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| note | Dropdown option | Note | Do (C), Do# (C#), Re (D), Re# (D#), Mi (E), Fa (F), Fa# (F#), Sol (G), Sol# (G#), La (A), La# (A#), Si (B) | - |
| octave | Dropdown option | Octave | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Play a sound clip {#sound_clip}

RaccoonBot plays a particular sound clip.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| clip | Dropdown option | Sound clip name | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'`, and so on | - |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Sound off {#sound_off}

Turns off the sound of RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Encoder value {#encoder}

The encoder value of the selected joint

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| joint | Dropdown option | Joint number (or all joints) | 1, 2, 3, 4, all (-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# All joints
raccoon.encoder(-1)
```

## Coordinate of the selected element {#coordinate}

Returns the current xyz coordinates of the reference point.  
If you omit `pos`, it returns the whole `[x, y, z]` array; if you specify it, it returns only that axis value.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| origin | Dropdown option | Origin | wrist, end effector (end_effector) | wrist |
| pos | Dropdown option | Axis (or all) | x, y, z, xyz (omit to return the whole array) | None (all) |

### Python
```python
raccoon = RaccoonBot(0)

# A particular axis
raccoon.get_coordinates('wrist', 'x')

# All (a 3-element array)
raccoon.get_coordinates('wrist')
```

## Signal strength value {#signal_strength}

The signal strength

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Battery voltage {#battery}

The battery voltage

<BlockImage module="roboids/Raccoon4" id="battery" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Is the button pressed? {#button}

Whether the selected button is pressed or a click event has occurred

<BlockImage module="roboids/Raccoon4" id="button" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Button name | teach, play, power, delete, any | - |
| event | Dropdown option | Kind of event | pressed, click, long click (long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Set the conveyor speed {#conveyor_speed}

Sets the speed of the conveyor belt. The speed ranges from -100 to 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Conveyor speed | Integer -100 to 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Set the conveyor travel distance {#conveyor_distance}

Moves the conveyor a certain distance.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Distance to move | Real number 0 or greater | - |
| unit | Dropdown option | Distance unit | cm, mm, inch | cm |
| wait | Checkbox | Whether to wait for completion | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Change the conveyor speed {#change_conveyor_speed}

Changes the speed of the conveyor belt.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| data | Input (block) | Amount of speed change | Integer -200 to 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Stop the conveyor {#stop_conveyor}

Stops the conveyor.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Is the conveyor running? {#conveyor_running}

Whether the conveyor belt is running

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Parameters

(none)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Is the conveyor button pressed? {#conveyor_button}

Whether the button on the conveyor is pressed or a click event has occurred

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| event | Dropdown option | Kind of event | pressed, click, long click (long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
