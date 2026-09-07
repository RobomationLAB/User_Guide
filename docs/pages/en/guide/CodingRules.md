---
title: Coding Rules
---

# Coding Rules

This document explains the coding rules you should follow when doing robot coding in RobomationLAB.

> **Note**: Script coding works with **Python only**, and blocks are converted one-to-one into Python code that uses the `robomation` Python package.

> **About the order**: The rules are organized as common core rules (1~2) → block code rules (3~5) → Python script code rules (6~11). Both block code and Python code generation matter and must be followed.

<br>

## 1. The one-to-one block ↔ Python conversion constraint {#1}
The block coding editor and the Python coding editor correspond one-to-one and are converted in both directions in real time.

- Block → Python: blocks are always converted into valid Python code.
- Python → block: conversion happens only for **code that can be expressed as blocks**.

So if you write the following kinds of code in the Python editor, switching from Python to the block coding editor may not work,  
and in that case the reason the switch failed is shown as well.

1) Code with Python syntax errors
2) Code that uses functions, methods, or syntax that has no corresponding block (that is not defined in the conversion rules)

To keep switching to the block coding editor working normally,  
write your code within the classes, methods, functions, and supported syntax defined in this document and in each robot document.

<br>

## 2. Rules for presenting code {#2}
You may use only the classes, methods, and functions specified in the **robomation Python API manual** and in the **block ↔ Python conversion rules document**.  
Creating and using new robot control methods that are not defined in those documents when controlling a robot is strictly forbidden.
It is allowed only when the user has asked for a new function to be created.

Declaring temporary variables that do not appear in the conversion examples specified in those documents (for example, variables other than the one holding the robot instance) is allowed only when the user asks for a variable to be created.  
In addition, the arguments of a method must always be written as literals.  

```python
# Correct example
hamster_s.set_wheel_speed('both', 100)

# Wrong example - using a function not specified in the API manual
hamster_s.set_wheel('both', 100)

# Wrong example - declaring an arbitrary variable
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. The basic structure of block code {#3}
Whenever you present block code, always include the top-level function blocks that serve as the program's entry point — function setup and function loop — as the basic structure.  
With this rule added, all block code from now on has the basic structure shown below.

| Block structure (Block Composer) | How to present it (text form) |
| --- | --- |
| function setup | function setup |
| (inner blocks) | (inner blocks) |
| function loop | function loop |
| (inner blocks) | (inner blocks) |

<br>

## 4. The format of block code (line break and indentation rules) {#4}
- Align top-level blocks (function setup, function loop, and so on) to the left.
- Each command block must be separated with a newline character so that only one block is output per line.
- For blocks that have an inner execution area (if, repeat, function definition, and so on), indent the child blocks inside them so that the hierarchy is expressed clearly.

<br>

## 5. Rules for expressing inner blocks and conditions {#5}
The selected value of a dropdown menu or an input value corresponds to a functional argument of the block, and is expressed by inserting it directly with square brackets ([]) at the place where that value sits within the block's text.  
This serves to visually reproduce the block by combining the block's own text with the value the user selected or entered.

All block code must be presented in a form that includes the block's own name, the selected dropdown values, and the values the user entered, all using square brackets ([]),  
reproducing the actual shape of the Block Composer block in text as closely as possible.  

| Block structure (Block Composer) | How to present it (text form) |
| --- | --- |
| if [condition] do [command] else [command] | if [condition] do [command] else [command] |
| RaccoonBot: set to [speed] control mode | RaccoonBot: set to [speed] control mode |
| RaccoonBot: set joint [1] speed as [100] | RaccoonBot: set joint [1] speed as [100] |

<br>

## 6. The basic structure of script code {#6}
Whenever you present script code (Python), always include the functions that serve as the program's entry point — setup() and loop() — as the basic structure.  
Also include `from robomation import *` at the very top of the code so that the classes/utilities needed for robot control are available, and declare the robots you will use as instances.  
With this rule added, all script code (Python) from now on has the basic structure shown below.

```python
# The basic structure of Python code
from robomation import *

# (If there is a robot to use, declare it as an instance — example)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

<br>

## 7. The format of script code (line break and indentation rules) {#7}
- Align top-level functions (setup, loop, and so on) to the left.
- Indentation after a line break must always use **one tab (`\t`)**. (The same as the editor's indentation standard.)

<br>

## 8. Robot control rules (instances / methods) {#8}
When controlling a robot, you must follow these rules.  

1) Include `from robomation import *` at the very top of the code.
2) Declare the robot you will use as an instance. Use the default variable name defined for each robot, and assign the index starting from 0.
3) Call the methods of the declared instance to control the robot.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> If you use several robots of the same kind, declare them with increasing indexes 0, 1, 2 … (for example `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Setting a robot's wheel speed, moving it, and so on handle any needed initialization (for example clearing a previous movement command) automatically inside the method, so you do not need to write separate initialization code beforehand.

<br>

## 9. Rules for calling utility functions {#9}
Common utility features such as time delays, playing sounds, printing logs, and colors are called through the methods of the `Utils` class.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

For the detailed list of utility functions, see the documents below.
- [Color](../common/Color)
- [Audio](../common/Audio)
- [Control](../common/Control)

<br>

## 10. The rule of preferring robot-specific methods {#10}
When controlling robot hardware (wheel speed, LED, sound, and so on),  
you should prefer the dedicated methods of the robot instance (for example 'HamsterS') over the common utility functions.

For example, when you need to make a sound with a robot,  
you should prefer the `sound_clip()` method of the 'HamsterS' instance over the utility function `Utils.play_sound()`.

```python
# Makes a sound through the HamsterS robot. (recommended)
hamster_s.sound_clip('beep')

# Makes a sound through the PC / tablet / mobile device. (not recommended)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Import rules {#11}
When writing Python code, import only the modules needed to run the code.
- Include `from robomation import *` at the very top of the code by default, for robot control.
- `import math` is added automatically for code that uses `math.`, and `import random` for code that uses `random.`.
- Do not import any other unnecessary modules.
