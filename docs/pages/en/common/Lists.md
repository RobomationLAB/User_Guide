---
title: Lists
---

# Lists

A list is **an ordered collection of items**, like a "to-do list" or a "shopping list".  
The items in a list can be of any type, and the same value can appear in a list more than once.


## Create empty list {#lists_create_with}

The simplest list is an empty list, created with the **create empty list** block.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Create list with {#lists_create_with-2}

The **create list with** block lets you give a new list its initial values.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Create list with repeated item {#lists_repeat}

The **create list with item repeated** block lets you build a list of the size you want by repeating the specified item.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Length of list {#lists_length}

The value of the **length of** block is the number of items in the list.  
The length of an empty list is 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Is empty {#lists_isEmpty}

The value of the **is empty** block is **true** when the input is an empty list, and **false** otherwise.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Find item in list {#lists_indexOf}

Finds the position of a specific item in a list.  
If the list does not contain that item, the result is 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Get / get and remove / remove an item {#lists_getIndex}

This block can get, get and remove, or remove an item from a list.  
There are several options: first, last, letter #N, and random.

<BlockImage module="common/lists" id="lists_getIndex" />

### Get {#lists_getIndex_get}

The **in list ... get** block gets the item at a specific position in a list.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Get and remove {#lists_getIndex_cut}

The **in list ... get and remove** block gets a specific item from a list and removes that item from the list.

### Python
```python
list.pop(N - 1)                        # #
list.pop(-N)                           # last_#
list.pop(0)                            # first
list.pop()                             # last 
lists_remove_random_item(list)         # random

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Remove {#lists_getIndex_remove}

The **in list ... remove** block only removes a specific item from the list.  
The plug on the left of the block disappears, so the block can be connected above and below instead.  

### Python
```python
list.pop(N - 1)                             # #
list.pop(-N)                                # last_#
list.pop(0)                                 # first
list.pop()                                  # last
list.pop(int(random.random() * len(list)))  # random
```

## Set / insert an item at a position {#lists_setIndex}

This block can set or insert an item at the position you want in a list.  
There are several options: first, last, letter #N, and random.

<BlockImage module="common/lists" id="lists_setIndex" />

### Set an item {#lists_setIndex_set}

The **in list ... set** block replaces the item at the specified position with another item.

### Python
```python
list[N - 1] = value                         # #
list[-N] = value                            # last_#
list[0] = value                             # first
list[-1] = value                            # last

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # random
```

### Insert an item {#lists_setIndex_insert}

The **in list ... insert at** block inserts a new item at the specified position.  
Existing items are kept and the length increases by 1.

### Python
```python
list.insert(N - 1, value)                        # #
list.insert(-N, value)                           # last_#
list.insert(0, value)                            # first
list.append(value)                               # last

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # random
```

## Get sub-list {#lists_getSublist}

The **in list ... get sub-list from ... to ...** block extracts a sub-list by specifying a start and an end position.  
There are several options: first, last, letter #N, and random.  
The original list is not changed by this operation.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# start is the first position (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# start is last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# start is first
list[ : N]
list[ : -N]
list[ : ]
```

## Get list with an item replaced {#lists_replace}

The **in list ... get list replace** block returns a new list in which the item at the specified position has been replaced with another item.  
There are several options: first, last, letter #N, and so on.  
The original list is not changed by this operation.  

<BlockImage module="common/lists" id="lists_replace" />

### Python
```python
# unit = "#"
[value if i == (N - 1) else data for i, data in enumerate(list)]

# unit = "last_#"
[value if i == (len(list) - N) else data for i, data in enumerate(list)]

# unit = "first"
[value if i == 0 else data for i, data in enumerate(list)]

# unit = "last"
[value if i == (len(list) - 1) else data for i, data in enumerate(list)]
```

## Split / join text with a delimiter {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Make list from text {#text_to_list}

The **make list from text** block splits the given text at the delimiter and returns the result as a list.

### Python
```python
text.split(delimiter)
```

### Make text from list {#list_to_text}

The **make text from list** block joins the items of a list into a single piece of text using the delimiter.

### Python
```python
delimiter.join(list)
```

## Sort list {#lists_sort}

A block that **sorts a list** by the criterion you choose.  
You can sort numerically or alphabetically, and choose ascending or descending order.  
You can also sort alphabetically while ignoring case.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # numeric, ascending
lists_sort(my_list, "NUMERIC", True)       # numeric, descending
lists_sort(my_list, "TEXT", False)         # text, ascending
lists_sort(my_list, "TEXT", True)          # text, descending
lists_sort(my_list, "IGNORE_CASE", False)  # ignore case, ascending
lists_sort(my_list, "IGNORE_CASE", True)   # ignore case, descending

def lists_sort(my_list, type, reverse):
    def try_float(s):
        try: return float(s)
        except: return 0
    key_funcs = {
        "NUMERIC": try_float,
        "TEXT": str,
        "IGNORE_CASE": lambda s: str(s).lower()
    }
    key_func = key_funcs[type]
    list_cpy = list(my_list)
    return sorted(list_cpy, key=key_func, reverse=reverse)
```

## Reverse list {#lists_reverse}

A block that **reverses the order** of the elements in a list.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
