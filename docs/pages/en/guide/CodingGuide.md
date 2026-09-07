---
title: Coding Guide
---

# Coding Guide

This document explains RobomationLAB, a robot coding education platform that is part of the 'execution engine and integrated authoring environment for a robot motion streaming service' developed by Robomation.  

Detailed explanations are provided in the following order:
- The main features of RobomationLAB
- How robot programming works in RobomationLAB
- The basic syntax system of robot coding in RobomationLAB  

<br>

## Table of contents {#table-of-contents}
1. [The RobomationLAB robot coding education platform](#platform)  
    1-1) [Robot coding programs](#coding-programs)  
    1-2) [Real-time two-way block ↔ Python conversion](#block-python-conversion)  
    1-3) [The main features of the coding programs](#features)  
    1-4) [How real-time robot control works](#control-method)  

2. [How robot programming works in RobomationLAB](#programming-method)  
    2-1) [Sequential execution and parallel execution](#sequential-parallel)  
    2-2) [The setup function](#setup)  
    2-3) [The loop function](#loop)  

3. [The basic syntax system of robot coding in RobomationLAB](#grammar-syntax)  
    3-1) [Importing the robomation package](#import-package)  
    3-2) [Creating a robot instance](#create-instance)  
    3-3) [Robot control methods](#control-methods)  
    3-4) [Reading sensors and state](#sensor)  
    3-5) [Detecting events](#event)  
    3-6) [Waiting for an action to complete (wait)](#wait)  
    3-7) [Utility functions (Utils)](#utils)   

<br><br>

## The RobomationLAB robot coding education platform {#platform}
RobomationLAB is a platform optimized for **AI robotics SW education**,  
providing a Chrome web browser based integrated authoring environment for robot coding education aimed at elementary and middle school students.  

RobomationLAB provides robot coding education programs in a variety of styles, including **block coding** and **script coding**.  
Beyond learning the theory of coding, it offers the chance to learn coding and robots at the same time  
by actually moving and controlling robots with Robomation's products.

<br>

### Robot coding programs {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer is a tool that lets you control our robots easily and quickly through block coding, and learn the basics of robot control.**  

- An authoring environment optimized for physical computing

- Even beginners can code easily with drag & drop blocks  
- Provides a learning environment free of syntax errors, starting from the basic concepts  
- Automatic conversion into Python script code  
- Provides a collection of blocks with predefined features for each robot, along with a variety of hands-on examples
- Check the results in real time by running the code  
- Improves problem-solving skills and creativity by combining blocks  
- Provides optimized feedback through AI-based script code analysis  

<br>

#### Script Composer {#script-composer}
**Script Composer is a tool that lets you control our robots easily and quickly through Python coding, and learn Python syntax and the basics of robot coding.**  

- Provides a Python editor

- Provides code autocompletion and code insertion for each language
- Provides a variety of hands-on example code for each robot
- Check the results in real time by running the code
- Provides optimized feedback through AI-based script code analysis

<br>

#### The main features of the coding programs {#features}
The main features of the robot coding programs provided by RobomationLAB are as follows.  
1.	Based on the Chrome web browser, so it is not restricted by the OS (operating system)
2.	Based on Web Serial communication, so it controls the robot hardware directly through a USB dongle
3.	Supports controlling multiple robots at the same time — no limit on the kind or number of robots
4.	When you save a file, the result is converted into a JSON text file and saved

<br>

### How real-time robot control works {#control-method}
The robot coding programs provided by RobomationLAB control robots in real time through the following process.  
1.	Through block coding or script coding,
you write code that sets the values of the Effector and Command objects used to control the robot,
or that makes use of the robot's Sensor values and Event occurrences.
2.	You run the code.
3.	Through Web Serial communication, packets containing Sensor and Event data are received from the robot
and applied to the robot Device object.
4.	The code is interpreted in real time,
overwriting data on the Effector and Command objects, or reading the values of the Sensor and Event objects.
5.	A packet reflecting the data of the robot Device object is created, then
sent to the robot through Web Serial communication so that you can see the robot actually move.
6.	While the code is running, steps 3 to 5 are repeated about every 10 to 20 ms.  

<br>

### Real-time two-way block ↔ Python conversion {#block-python-conversion}
RobomationLAB provides a block coding editor and a Python coding editor together, and the two editors are synchronized in both directions in real time.

- When you add, modify, or delete a block in the block coding editor, that change is reflected in the Python code in real time.
- Conversely, when you modify the code in the Python coding editor, that change is reflected in the blocks in real time.

Because blocks and Python code correspond one-to-one and are converted in both directions,  
you can build the overall structure quickly with blocks and then refine the details in Python, or learn Python syntax by comparing it with the blocks —  
coding organically while moving back and forth between block coding and script coding.

> Note, however, that Python → block conversion happens only for code that can be expressed as blocks.  
> (If the syntax is invalid or the code cannot be converted into blocks, the switch may not happen.  
For details, see the [Coding Rules](CodingRules) document.)

<br>

<br><br>

## How robot programming works in RobomationLAB {#programming-method}

### Sequential execution and parallel execution {#sequential-parallel}
There are two ways to program a robot: sequential execution and parallel execution.  
Sequential execution runs the next action after one action has finished, and suits coding simple behavior.  
For example, if you want the robot to move forward and then stop and turn on its LED, sequential execution must be possible so that you can place the code for each action in order and have it run in time sequence.  

Parallel execution performs several actions at the same time, and is needed to program more complex and advanced behavior.  
For example, if you want to implement the walking motion of a bipedal robot, coding with parallel execution must be possible, because walking requires moving the robot's feet and legs at the same time.

The robot coding programs provided by RobomationLAB  
support both sequential execution and parallel execution, based on a setup / loop code structure similar to Arduino's hardware development environment.

<BlockImage module="program/Editor" id="block-structure" />

When you first open Block Composer, two empty function blocks are shown in the workspace as below.  
The 'function setup' block represents the `setup` function, and the 'function loop' block represents the `loop` function.  

Blocks are converted into Python code in real time,  
and the code has the following basic structure.  

```python
# The basic structure of Python code
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> To control a robot, put `from robomation import *` at the very top of the code and declare the robot you will use as an instance. (For example `hamster_s = HamsterS(0)`)


<br>

### The setup function {#setup}
The setup function runs exactly once, at the moment you 'run the code'.  
In the setup function you mainly write code that initializes variables or initializes the robot's modes and features.  
For example, when controlling a robot that moves with wheels, you can set the initial wheel speed in the setup function.  

If you need a time delay inside the function, using the `Utils.wait(...)` function lets you write code that runs in time sequence, as if it were synchronous.  
`Utils.wait(...)` waits for the specified time (in seconds) and then runs the next code, so it wakes up after the given time or action and continues with the next code.  
Using this feature, you can achieve powerful robot programming not only with simple sequential execution but also by combining it with the loop function that handles parallel execution.

The following is an example of writing code where the HamsterS robot moves forward for 1 second and then backward for 1 second.  
Implementing the above behavior inside the loop function, which uses parallel execution, would mix time calculation with control code and make it very complicated.  
Instead, using the `Utils.wait` time delay function inside the setup function lets you write code that runs in time sequence, as if it were synchronous.  
( The `Utils.wait` function is explained again later in [Utility functions (Utils)](#utils). )

Example code (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # Set both wheel speeds to 50 to move forward
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # wait 1 second
    # Set both wheel speeds to -50 to move backward
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # wait 1 second
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( The syntax of robot instances and methods is explained again later in [The basic syntax system of robot coding in RobomationLAB](#grammar-syntax). )


<br>

### The loop function {#loop}
The loop function supports parallel execution, and repeats about every 10 ms while the code is running.  
In the loop function you mainly write code that sets variable values repeatedly, or that detects and handles the occurrence of particular robot events.  

The following is an example of writing code where the wheel speed and LED color of the HamsterS robot change over time.  
( When changing a variable declared outside the setup / loop functions from inside a function, declare it with the `global` keyword. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # increase the value of the frame variable by 1 each time the loop function is called

    # Use the changed frame value to set both wheel speeds and the RGB values of both LEDs
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( The syntax of robot instances and methods is explained again later in [The basic syntax system of robot coding in RobomationLAB](#grammar-syntax). )  

The following is an example of writing code that turns the LED red when a Tap action — lightly tapping the body of the HamsterS robot — occurs.  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # Detect the event at the moment a Tap action occurs
    if hamster_s.tap():               # True when the event is detected
        hamster_s.set_led_color('both', 'red')   # turn both LEDs red
    else:
        hamster_s.turn_off('both')               # turn off both LEDs
```
( Syntax such as event detection (`tap()`) is explained again later in [The basic syntax system of robot coding in RobomationLAB](#grammar-syntax). )  

<br><br>

## The basic syntax system of robot coding in RobomationLAB {#grammar-syntax}
The basic syntax system you should follow when writing code in the robot coding programs provided by RobomationLAB is as follows.  
Robot control is done through the `robomation` Python package,  
and you write code by creating the robot as an instance and then calling the methods of that instance.

### Importing the robomation package {#import-package}
To use the classes (robots) and the utilities (`Utils`) needed for robot control, include the following single line at the very top of the code.

```python
from robomation import *
```

<br>

### Creating a robot instance {#create-instance}
Declare the robot you will use as an instance.  
The class name indicates the kind of robot, and the number in parentheses indicates the instance index (starting from 0).

```python
hamster_s = HamsterS(0)   # one HamsterS
```

The class name and default variable name for each robot are as follows.

| Robot | Class name | Default variable name |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

If you use several robots of the same kind, declare them with increasing indexes 0, 1, 2 … .

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Robot control methods {#control-methods}
To control a robot, call the methods of the instance.  
Methods perform the robot's actions, such as setting wheel speed, moving, LEDs, and sound.

```python
hamster_s.set_wheel_speed('both', 50)    # set both wheel speeds
hamster_s.move_distance(10, 'cm')        # move 10 cm forward
hamster_s.set_led_color('both', 'red')   # turn both LEDs red
```

For the list of methods available for each robot and their parameters, see each robot's document ('HamsterS' and so on).

<br>

### Reading sensors and state {#sensor}
You also call methods to read sensor values or the robot's state, and the method returns that value.

```python
left = hamster_s.floor('left')        # read the left floor sensor value
dist = hamster_s.proximity('right')   # read the right proximity sensor value
```

<br>

### Detecting events {#event}
Events that occur from a change of state or a change in the environment are detected  
by the corresponding event method returning True at the moment the event occurs.

```python
if hamster_s.tap():        # True at the moment a Tap event occurs
    hamster_s.set_led_color('both', 'red')
```

<br>

### Waiting for an action to complete (wait) {#wait}
Methods that take time to complete, such as moving, rotating, and playing a sound, have a `wait` parameter.
- `wait=True` (default): waits until the action is complete and then runs the next code.
- `wait=False`: starts the action and immediately continues with the next code.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # waits until the movement is finished
hamster_s.move_distance(10, 'cm', wait=False)   # starts the movement and runs the next code right away
```

<br>

### Utility functions (Utils) {#utils}
Common features that are independent of the kind of robot, such as time delays, playing sounds, printing logs, and colors, are used through the methods of the `Utils` class.

```python
Utils.wait(1)              # wait 1 second
Utils.speak('Hello')       # play text-to-speech (TTS)
Utils.log(0, '', '')       # print a console log
```

<br>
