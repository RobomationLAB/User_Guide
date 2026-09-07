---
title: Logic
---

# Logic

Logic blocks are generally used to control **if** statements and [**loop**](Loops) blocks.

## If statement {#controls_if}

The **if** block lets you set a **condition** and the **action** to take when that condition is met.

<BlockImage module="common/logic" id="controls_if" />

For example, you can write code like the following.  
If the value of the variable **x** is greater than 100, the condition is **true** and the text "It is a big number." is printed.  
If the value of **x** is not greater than 100, the condition is **false** and "It is not a big number." is printed.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Comparisons {#logic_compare}

There are six comparison operators.  
Each operator takes two inputs (usually numbers) and returns true or false depending on how the inputs compare with each other.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Logical operations {#logic_operation}

The **and** block returns true only when both inputs are true.  
The **or** block returns true if either of the two inputs is true.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Not {#logic_negate}

The **not** block converts a Boolean input into its opposite.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolean {#logic_boolean}

You can obtain a Boolean value using a single block with a dropdown that selects **true** or **false**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Ternary operator {#logic_ternary}

The ternary block works like a simple **if** block.  
It takes three inputs.  
The first input is the Boolean condition to test, and the second is the value to return when the condition is **true**.  
The third is the value to return when the condition is **false**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
