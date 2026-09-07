---
title: Loops
---

# Loops

There are two kinds of loop control statements:  
**conditional loops** and **counting loops** (those that control how many times the body runs based on the values of variables)


## Repeat {#controls_repeat}

The simplest **repeat** block runs the code in its body a specified number of times. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Count with {#controls_for}

The **count with** block (commonly called a **for loop**) increases a variable from the **from** value to the **to** value by the **by** amount, running the body once for each value.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## For each item {#controls_forEach}

The **for each item** block is similar, except that it steps through the values in a list instead of a sequence of numbers.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Repeat while / until {#controls_while}

The **repeat while** block repeats the body as long as the condition is true.  
The **repeat until** block repeats the body while the condition is false, and exits the loop as soon as the condition becomes true.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Break / continue {#controls_flow_statements}

The **break** block lets you **exit a loop early**.  
The **continue** block skips the rest of the code in the body and starts the next iteration (pass).

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
