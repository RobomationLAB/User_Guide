---
title: Variables
---

# Variables

We use the term *variable* in the same sense as in mathematics and other programming languages.  
That is, it means **a named element that stores a value and can be changed**.  
  
Variables can be created in several ways.  

- Some blocks, such as [count with](Loops#controls_for) and [for each item](Loops#controls_forEach), use a variable and define its value.  
  Such variables are traditionally called **loop variables**.  
- [Custom functions](Functions#procedures_defnoreturn) also use variables to define parameters or arguments.
- You can create a variable at any time with the **set** block, and any variable created this way is declared as a **global variable**.  
- The block coding environment in RobomationLAB does not support **local variables**.  

Clicking the dropdown on a variable block shows the following options.  

- The names of all existing variables defined in the program are listed.  
- **"Rename Variable"**: renames that variable throughout the program. Choosing this option opens a window where you can enter the new name.  
- **"Delete Variable"**: deletes every block in the program that refers to this variable. 


## Set {#variables_set}

The **set** block assigns a value to a variable.  
If the variable has not been declared in the code, it declares the new variable and then assigns the value.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Change {#math_change}

The **change** block adds a number to the value of a variable.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Get {#variables_get}

The block below provides the value stored in a variable, but does not change that value.  
It is possible to use this block without a set block, but that is not good programming practice.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
