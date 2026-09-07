---
title: CSD-10 ALS Sensor
---

# CSD-10 ALS Sensor

## Instance declaration {#instance}

When you add a CSD-10 ALS Sensor block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the input port {#set_input_port}

Sets the port that CSD10 (an ambient light sensor) is connected to.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to connect to | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Ambient light sensor value {#get_input}

The ambient light sensor value of the selected port

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to read from | Sa, Sb, Sc | The port of the last `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
