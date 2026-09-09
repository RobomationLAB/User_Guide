---
title: 列表
---

# 列表

列表就像“待办事项清单”或“购物清单”那样，是 **按顺序排列的项的集合**。  
列表中的项可以是任何类型，同一个值也可以在列表中出现多次。


## 创建空列表 {#lists_create_with}

最简单的列表是空列表，使用 **创建空列表** 积木来创建。

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## 创建列表 {#lists_create_with-2}

使用 **创建列表** 积木，可以为新列表指定初始值。

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## 重复列表的项 {#lists_repeat}

使用 **建立列表使用项** 积木，可以重复指定的项，创建出想要长度的列表。

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## 列表的长度 {#lists_length}

**长度** 积木的值是列表中项的个数。  
空列表的长度是 0。

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## 判断空列表 {#lists_isEmpty}

**是空的** 积木的值在输入为空列表时是 **true**，其他情况下是 **false**。

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## 项在列表中出现的位置 {#lists_indexOf}

在列表中查找某个项的位置。  
如果列表中没有这个项，结果是 0。

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## 取得 / 取出 / 删除项 {#lists_getIndex}

这个积木可以从列表中取得项、取出项，或者删除项。  
有第一项、最后一项、第 # 项、随机项等各种选项。

<BlockImage module="common/lists" id="lists_getIndex" />

### 取得 {#lists_getIndex_get}

**在列表中取得** 积木可以从列表中取得特定位置的项。  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### 取出 {#lists_getIndex_cut}

**在列表中取出** 积木从列表中取得特定的项，并把该项从列表中删除。

### Python
```python
list.pop(N - 1)                        # 第 # 项
list.pop(-N)                           # 从最后一项数起第 # 项
list.pop(0)                            # 第一项
list.pop()                             # 最后一项
lists_remove_random_item(list)         # 随机

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### 删除 {#lists_getIndex_remove}

**在列表中删除** 积木只是从列表中删除特定的项。  
积木左边的插头会消失，可以在上下连接其他积木。  

### Python
```python
list.pop(N - 1)                             # 第 # 项
list.pop(-N)                                # 从最后一项数起第 # 项
list.pop(0)                                 # 第一项
list.pop()                                  # 最后一项
list.pop(int(random.random() * len(list)))  # 随机
```

## 在想要的位置设置 / 插入项 {#lists_setIndex}

这个积木可以在列表中想要的位置设置或插入项。  
有第一项、最后一项、第 # 项、随机项等各种选项。

<BlockImage module="common/lists" id="lists_setIndex" />

### 设置项 {#lists_setIndex_set}

**在列表中设置** 积木把指定位置的项替换成另一个项。

### Python
```python
list[N - 1] = value                         # 第 # 项
list[-N] = value                            # 从最后一项数起第 # 项
list[0] = value                             # 第一项
list[-1] = value                            # 最后一项

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # 随机
```

### 插入项 {#lists_setIndex_insert}

**在列表中插入** 积木把新的项插入到指定位置。  
原有的项保持不变，长度增加 1。

### Python
```python
list.insert(N - 1, value)                        # 第 # 项
list.insert(-N, value)                           # 从最后一项数起第 # 项
list.insert(0, value)                            # 第一项
list.append(value)                               # 最后一项

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # 随机
```

## 获取子列表 {#lists_getSublist}

**在列表中获取子列表** 积木通过指定开始和结束位置来取出子列表。  
有第一项、最后一项、第 # 项、随机项等各种选项。  
执行之后原来的列表不会改变。  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# 开始为第一项(#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# 开始为 last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# 开始为 first
list[ : N]
list[ : -N]
list[ : ]
```

## 取出替换了项的新列表 {#lists_replace}

**在列表中将索引处的项替换为** 积木返回一个把指定位置的项换成另一个项的新列表。  
有第一项、最后一项、第 # 项等各种选项。  
执行之后原来的列表不会改变。  

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

## 用分隔符分割 / 连接文本 {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### 从文本制作列表 {#text_to_list}

**从文本制作列表** 积木把给定的文本按分隔符切分，返回一个列表。

### Python
```python
text.split(delimiter)
```

### 从列表制作文本 {#list_to_text}

**从列表制作文本** 积木使用分隔符把列表中的项连接成一段文本。

### Python
```python
delimiter.join(list)
```

## 列表排序 {#lists_sort}

按想要的标准 **对列表排序的积木**。  
可以按数字或字母排序，并且可以选择升序和降序。  
另外，按字母排序时也可以忽略大小写。

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # 数字, 升序
lists_sort(my_list, "NUMERIC", True)       # 数字, 降序
lists_sort(my_list, "TEXT", False)         # 字母, 升序
lists_sort(my_list, "TEXT", True)          # 字母, 降序
lists_sort(my_list, "IGNORE_CASE", False)  # 忽略大小写, 升序
lists_sort(my_list, "IGNORE_CASE", True)   # 忽略大小写, 降序

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

## 倒转列表 {#lists_reverse}

把列表中元素的顺序 **改为相反次序** 的积木。

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
