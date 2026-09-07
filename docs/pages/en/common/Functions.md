---
title: Functions
---

# Functions

A **function** is a **collection of commands (blocks)** that performs a specific task.  
By defining a repeatedly used action as a single function, you can keep your code **concise and efficient**.

Functions have the following characteristics.  
- **Reusable**: once defined, a function can be called many times.  
- **Input and output**: a function can take parameters (input values), process them, and return a result (output value).  
- **Better readability**: they let you organize the flow of a program logically.


## setup {#setup}

The **setup function** is called only once, at the moment the code starts running.  
In the setup function you usually write code that initializes variables or sets up the robot's mode and options.  
For example, when controlling a robot that moves on wheels, you can set the initial wheel speed in the setup function.  

<BlockImage module="common/functions" id="setup" />
  
Using the `Utils.wait(...)` function, you can write code that runs in time order through sequential execution. Combined with the **loop function**, which provides parallel execution, this enables powerful robot programming beyond simple sequential execution.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

The **loop function** is called repeatedly, every 10 ms, while the program is running.  
In the loop function you usually write code that repeatedly sets variable values or detects and handles specific robot events.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Define a function {#procedures_defnoreturn}

The **function** block lets you create a **new function**.  
A function without a return value performs a specific action but **does not return a value**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Define a function with a return value {#procedures_defreturn}

A function with a return value performs a specific task and then **returns a value** that can be used by other blocks.  

<BlockImage module="common/functions" id="procedures_defreturn" />

The function below **takes the parameters x and y and returns the result of x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Call a function {#procedures_callnoreturn}

Once you define a function, a **custom function block** is created automatically.  
You can use it to call and run the **function you defined earlier**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## If ... return {#procedures_ifreturn}

This block **returns a value immediately and ends the function** when a specific condition inside the function is met.  
It can **only be used inside a function**, and is disabled anywhere else.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
