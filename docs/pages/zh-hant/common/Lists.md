---
title: 清單
---

# 清單

清單就像「待辦事項清單」或「購物清單」那樣，是 **按順序排列的項目集合**。  
清單中的項目可以是任何類型，同一個值也可以在清單中出現多次。


## 建立空的清單 {#lists_create_with}

最簡單的清單是空的清單，使用 **建立空的清單** 積木來建立。

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## 使用這些值建立清單 {#lists_create_with-2}

使用 **使用這些值建立清單** 積木，可以為新清單指定初始值。

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## 使用項目重複建立清單 {#lists_repeat}

使用 **使用項目重複建立清單** 積木，可以重複指定的項目，建立出想要長度的清單。

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## 清單的長度 {#lists_length}

**長度** 積木的值是清單中項目的個數。  
空的清單長度是 0。

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## 判斷空的清單 {#lists_isEmpty}

**值為空** 積木的值在輸入為空的清單時是 **true**，其他情況下是 **false**。

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## 項目在清單中出現的位置 {#lists_indexOf}

在清單中尋找某個項目的位置。  
如果清單中沒有這個項目，結果是 0。

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## 取得 / 取出 / 移除項目 {#lists_getIndex}

這個積木可以從清單中取得項目、取出項目，或者移除項目。  
有最前面、最後面、第 # 個、隨機項目等各種選項。

<BlockImage module="common/lists" id="lists_getIndex" />

### 取得 {#lists_getIndex_get}

**自清單取得** 積木可以從清單中取得特定位置的項目。  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### 取出 {#lists_getIndex_cut}

**自清單取出** 積木從清單中取得特定的項目，並把該項目從清單中移除。

### Python
```python
list.pop(N - 1)                        # 第 # 個
list.pop(-N)                           # 從最後面數起第 # 個
list.pop(0)                            # 最前面
list.pop()                             # 最後面
lists_remove_random_item(list)         # 隨機

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### 移除 {#lists_getIndex_remove}

**自清單移除** 積木只是從清單中移除特定的項目。  
積木左邊的插頭會消失，可以在上下連接其他積木。  

### Python
```python
list.pop(N - 1)                             # 第 # 個
list.pop(-N)                                # 從最後面數起第 # 個
list.pop(0)                                 # 最前面
list.pop()                                  # 最後面
list.pop(int(random.random() * len(list)))  # 隨機
```

## 在想要的位置設定 / 插入項目 {#lists_setIndex}

這個積木可以在清單中想要的位置設定或插入項目。  
有最前面、最後面、第 # 個、隨機項目等各種選項。

<BlockImage module="common/lists" id="lists_setIndex" />

### 設定項目 {#lists_setIndex_set}

**自清單設定** 積木把指定位置的項目替換成另一個項目。

### Python
```python
list[N - 1] = value                         # 第 # 個
list[-N] = value                            # 從最後面數起第 # 個
list[0] = value                             # 最前面
list[-1] = value                            # 最後面

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # 隨機
```

### 插入項目 {#lists_setIndex_insert}

**自清單插入** 積木把新的項目插入到指定位置。  
原有的項目保持不變，長度增加 1。

### Python
```python
list.insert(N - 1, value)                        # 第 # 個
list.insert(-N, value)                           # 從最後面數起第 # 個
list.insert(0, value)                            # 最前面
list.append(value)                               # 最後面

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # 隨機
```

## 取得子清單 {#lists_getSublist}

**自清單取得子清單** 積木透過指定開始和結束位置來取出子清單。  
有最前面、最後面、第 # 個、隨機項目等各種選項。  
執行之後原來的清單不會改變。  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# 開始為最前面(#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# 開始為 last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# 開始為 first
list[ : N]
list[ : -N]
list[ : ]
```

## 取出替換了項目的新清單 {#lists_replace}

**在清單中將清單索引的項目替換為** 積木回傳一個把指定位置的項目換成另一個項目的新清單。  
有最前面、最後面、第 # 個等各種選項。  
執行之後原來的清單不會改變。  

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

## 用分隔符分割 / 連接文字 {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### 從文本製作清單 {#text_to_list}

**從文本製作清單** 積木把給定的文字按分隔符切分，回傳一個清單。

### Python
```python
text.split(delimiter)
```

### 從清單製作文本 {#list_to_text}

**從清單製作文本** 積木使用分隔符把清單中的項目連接成一段文字。

### Python
```python
delimiter.join(list)
```

## 清單排列 {#lists_sort}

按想要的標準 **對清單排列的積木**。  
可以依數字或依字母排列，並且可以選擇升序和降序。  
另外，依字母排列時也可以忽略大小寫。

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # 數字, 升序
lists_sort(my_list, "NUMERIC", True)       # 數字, 降序
lists_sort(my_list, "TEXT", False)         # 字母, 升序
lists_sort(my_list, "TEXT", True)          # 字母, 降序
lists_sort(my_list, "IGNORE_CASE", False)  # 忽略大小寫, 升序
lists_sort(my_list, "IGNORE_CASE", True)   # 忽略大小寫, 降序

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

## 反轉清單 {#lists_reverse}

把清單中元素的順序 **改為相反次序** 的積木。

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
