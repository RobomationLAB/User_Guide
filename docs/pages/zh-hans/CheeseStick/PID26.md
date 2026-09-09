---
title: PID-26 环境传感器
---

# PID-26 环境传感器

## 声明实例 {#instance}

把 PID-26 环境传感器(PID26) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 启动 {#start}

开始使用 PID-26 环境传感器。

<BlockImage module="CheeseStick/PID26" id="start" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## 温度 (°C) {#temperature}

返回 PID26 环境传感器测得的温度值。 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## 湿度 (%RH) {#humidity}

返回 PID26 环境传感器测得的湿度值。

<BlockImage module="CheeseStick/PID26" id="humidity" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## 气压 (hPa) {#pressure}

返回 PID26 环境传感器测得的气压值。  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### 参数

（无）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
