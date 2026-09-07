---
title: Others
---

# Others

In block coding, **other blocks** consist of code that does not affect the robot's behavior.  
They can add comments or end the execution of the code.  

## One-line comment {#comment}

The **one-line comment** block lets you add an **explanation** without affecting how the code runs.  
Comments make code easier to read and to maintain.

<BlockImage module="common/others" id="comment" />

### Python
```python
# comment text
```

## Multi-line comment {#long_comment}

The **multi-line comment** block lets you enter several lines of comment at once.  
Each line is marked as a comment automatically, and blank lines are kept as they are.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
first line
second line

fourth line
"""
```

## Link {#link}

The **link** block lets you use a **comment** to add a **page link** that you want to open.  
Clicking the **open** button takes you to the page at the link you entered.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Exit {#exit}

The **exit** block immediately stops the execution of the code in the program.  
It is useful for adding a forced shutdown under a specific condition.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
