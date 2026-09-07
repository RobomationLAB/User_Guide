---
title: CSD-01 Tact Switch
---

# CSD-01 Tact Switch

## Instance declaration {#instance}

When you add a CSD-01 Tact Switch block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the input port {#set_input_port}

Sets the port that CSD01 (Tact Switch) is connected to.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to connect to | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Button input value {#button_input}

The button input value of the selected port  
It returns 0 if the button is pressed, and 1 otherwise.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to read from | Sa, Sb, Sc | The port of the last `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Is the button pressed? {#button_pressed}

Whether the switch button connected to the selected port is pressed

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to read from | Sa, Sb, Sc | The port of the last `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
