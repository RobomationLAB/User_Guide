---
title: CSD-03 Rotary Pot
---

# CSD-03 Rotary Pot

## Instance declaration {#instance}

When you add a CSD-03 Rotary Pot block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the input port {#set_input_port}

Sets the port that CSD03 (a potentiometer) is connected to.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to connect to | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Set the input range {#set_input_range}

Converts the input value of the selected port to the minimum~maximum range you specify.  
The range of the input value is 0 to 255.  
The range of values it can be converted to is -100 to 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Target port | Sa, Sb, Sc | - |
| src_min | Input (field) | Source minimum | Integer 0 to 255 | - |
| src_max | Input (field) | Source maximum | Integer 0 to 255 | - |
| dst_min | Input (field) | Minimum after conversion | Integer -100 to 100 | - |
| dst_max | Input (field) | Maximum after conversion | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Set the input range with a median {#set_input_range_median}

Converts the input value of the selected port to the minimum~median~maximum range you specify.  
The range of the input value is 0 to 255.  
The range of values it can be converted to is -100 to 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Target port | Sa, Sb, Sc | - |
| src_min | Input (field) | Source minimum | Integer 0 to 255 | - |
| src_median | Input (field) | Source median | Integer 0 to 255 | - |
| src_max | Input (field) | Source maximum | Integer 0 to 255 | - |
| dst_min | Input (field) | Minimum after conversion | Integer -100 to 100 | - |
| dst_median | Input (field) | Median after conversion | Integer -100 to 100 | - |
| dst_max | Input (field) | Maximum after conversion | Integer -100 to 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Input value {#get_input}

The rotary potentiometer input value of the selected port  
If you have not set an input range separately, the range of the input value is 0 to 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Port to read from | Sa, Sb, Sc | The port of the last `set_port` |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
