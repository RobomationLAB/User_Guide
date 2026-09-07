---
title: CSD-07 Sound Sensor
---

# CSD-07 Sound Sensor

## Instance declaration {#instance}

When you add a CSD-07 Sound Sensor block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the input port {#set_input_port}

Sets the port that CSD07 (a sound sensor) is connected to.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to connect to | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Sound sensor value {#get_input}

The sound sensor value of the selected port

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to read from | Sa, Sb, Sc | The port of the last `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
