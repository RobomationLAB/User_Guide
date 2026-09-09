---
title: 文本
---

# 文本 {#text}

文本的例子如下：
- "thing #1"
- "March 12, 2010"
- ""（空文本）

文本中可以包含大写或小写的字母、数字、标点符号、其他符号，以及单词之间的空格。  

<BlockImage module="common/text" id="text" />

## 创建文本 {#text_join}

**创建文本** 积木把多个文本的值合并（连接）起来，生成新的文本。

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## 加上文本 {#text_append}

**加上文本** 积木把给定的文本追加到指定的变量上。

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## 文本的长度 {#text_length}

**长度** 积木数出每个文本中的字母、数字等，返回总长度。  
下面 `abc` 的长度是 3，空文本的长度是 0。

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## 判断空文本 {#text_isEmpty}

**是空的** 积木检查给定的文本是否为空（长度是否为 0）。

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## 寻找文本 {#text_indexOf}

这些积木检查某个文本是否在另一个文本中，如果存在则返回它的位置。

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## 获取单个字符 {#text_charAt}

从文本中取出指定位置的一个字符。  
有第一个、最后一个、随机位置、第 # 个等各种选项。

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## 获取子串 {#text_getSubstring}

使用 **获取子串** 积木，可以取出特定范围的文本。

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## 转换文本的大小写 {#text_changeCase}

这个积木把输入的文本转换成下面其中一种形式：

- **转为大写**：把所有字母转换成大写
- **转为小写**：把所有字母转换成小写
- **转为首字母大写**：只把每个单词的首字母转换成大写，其余转换成小写

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # 转为大写
TEXT.lower() # 转为小写
TEXT.title() # 转为首字母大写
```

## 消除空格 {#text_trim}

下面的积木消除文本中以下位置的空格：
- 两侧
- 左侧
- 右侧

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # 两侧
TEXT.lstrip()   # 左侧
TEXT.rstrip()   # 右侧
```

## 计算文本在文本里出现的次数 {#text_count}

数出某个子串在给定文本中出现的次数并返回。

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## 替换文本中的特定文本 {#text_replace}

把文本中某个子串统一替换为另一个文本。

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## 倒转文本 {#text_reverse}

返回把文本的顺序颠倒过来的新文本。

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## 输出文本 {#text_print}

**输出** 积木把输入的值显示在弹出窗口中。

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## 接受用户输入 {#text_prompt_ext}

下面的积木会生成一个要求用户输入的弹出窗口，输入的值保存到变量中。  
可以接受文本或数字。

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
