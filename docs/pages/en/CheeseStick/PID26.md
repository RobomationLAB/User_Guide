---
title: PID-26 Environment Sensor
---

# PID-26 Environment Sensor

## Instance declaration {#instance}

When you add a PID-26 Environment Sensor block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Start the environment sensor {#start}

Uses the PID-26 Environment Sensor.

<BlockImage module="CheeseStick/PID26" id="start" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Temperature {#temperature}

Returns the temperature value measured by the PID26 environment sensor. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Humidity {#humidity}

Returns the humidity value measured by the PID26 environment sensor.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Pressure {#pressure}

Returns the atmospheric pressure value measured by the PID26 environment sensor.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Parameters

(none)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
