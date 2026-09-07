---
title: PID-13 Joystick & Button
---

# PID-13 Joystick & Button

## Instance declaration {#instance}

When you add a PID-13 Joystick & Button block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Start the joystick {#start}

Uses the joystick and the buttons.

<BlockImage module="CheeseStick/PID13" id="start" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Joystick value {#joystick}

The x / y value of the joystick.  
Each value ranges from -128 to 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Axis to measure | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Button input value {#button_input}

The input state of the selected button  
It outputs 1 if the button is pressed, and 0 if the button is not pressed.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Button name | button A (`'a'`), button B (`'b'`) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Was the button clicked? {#button_click}

Whether the selected button was clicked  
This block returns true only at the moment the selected button is clicked, and false otherwise.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Button name | button A (`'a'`), button B (`'b'`) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
