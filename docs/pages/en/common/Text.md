---
title: Text
---

# Text {#text}

Here are some examples of text:
- "thing #1"
- "March 12, 2010"
- "" (an empty string)

Text can contain uppercase or lowercase letters, numbers, punctuation, other symbols, and spaces between words.  

<BlockImage module="common/text" id="text" />

## Create text with {#text_join}

The **create text with** block joins (concatenates) the values of several strings to build a new string.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Append text {#text_append}

The **append text** block adds the given text to the specified variable.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Length of text {#text_length}

The **length of** block counts the letters, numbers, and other characters in a string and returns the total length.  
The length of `abc` below is 3, and the length of an empty string is 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Is empty {#text_isEmpty}

The **is empty** block checks whether the given string is empty (that is, whether its length is 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Find text {#text_indexOf}

These blocks check whether one string occurs inside another and, if it does, return its position.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Get a single letter {#text_charAt}

Gets one character at a specific position in a string.  
There are several options: first, last, random, and letter #N.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Get substring {#text_getSubstring}

The **get substring** block lets you extract a specific range of a string.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Change letter case {#text_changeCase}

This block converts the input string into one of the following forms:

- **UPPER CASE**: converts every letter to uppercase
- **lower case**: converts every letter to lowercase
- **Title Case**: capitalizes the first letter of each word and lowercases the rest

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # UPPER CASE
TEXT.lower() # lower case
TEXT.title() # Title Case
```

## Trim whitespace {#text_trim}

The following block removes whitespace from a string at these positions:
- both sides
- left side
- right side

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # both sides
TEXT.lstrip()   # left side
TEXT.rstrip()   # right side
```

## Count occurrences in text {#text_count}

Counts and returns how many times a specific substring appears in the given string.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Replace text {#text_replace}

Replaces every occurrence of a specific substring in a string with another string.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Reverse text {#text_reverse}

Returns a new string with the order of the characters reversed.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Print text {#text_print}

The **print** block shows the input value in a popup window.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Get user input {#text_prompt_ext}

The following block creates a popup window that asks the user for input, and the entered value is stored in a variable.  
You can accept either text or a number.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
