---
title: 文字
---

# 文字 {#text}

文字的例子如下：
- "thing #1"
- "March 12, 2010"
- ""（空字串）

文字中可以包含大寫或小寫的字母、數字、標點符號、其他符號，以及單字之間的空格。  

<BlockImage module="common/text" id="text" />

## 字串組合 {#text_join}

**字串組合** 積木把多個字串的值合併（連接）起來，產生新的字串。

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## 套用文字 {#text_append}

**套用文字** 積木把給定的字串附加到指定的變數上。

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## 字串的長度 {#text_length}

**長度** 積木數出每個字串中的字母、數字等，回傳總長度。  
下面 `abc` 的長度是 3，空字串的長度是 0。

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## 判斷空字串 {#text_isEmpty}

**為空** 積木檢查給定的字串是否為空（長度是否為 0）。

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## 索引字串 {#text_indexOf}

這些積木檢查某個字串是否在另一個字串中，如果存在就回傳它的位置。

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## 取得單一字母 {#text_charAt}

從字串中取出指定位置的一個字母。  
有最前面、最後面、隨機位置、第 # 個等各種選項。

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## 取得子字串 {#text_getSubstring}

使用 **取得子字串** 積木，可以取出特定範圍的字串。

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## 轉換字串的大小寫 {#text_changeCase}

這個積木把輸入的字串轉換成下面其中一種形式：

- **轉成英文大寫**：把所有字母轉換成大寫
- **轉成英文小寫**：把所有字母轉換成小寫
- **轉成首字母大寫**：只把每個單字的首字母轉換成大寫，其餘轉換成小寫

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # 轉成英文大寫
TEXT.lower() # 轉成英文小寫
TEXT.title() # 轉成首字母大寫
```

## 消除空格 {#text_trim}

下面的積木消除字串中以下位置的空格：
- 兩側
- 左側
- 右側

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # 兩側
TEXT.lstrip()   # 左側
TEXT.rstrip()   # 右側
```

## 計算字串在字串裡出現的次數 {#text_count}

數出某個子字串在給定字串中出現的次數並回傳。

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## 取代字串中的特定字串 {#text_replace}

把字串中某個子字串一併取代為另一個字串。

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## 反轉字串 {#text_reverse}

回傳把字串的順序顛倒過來的新字串。

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## 輸出字串 {#text_print}

**輸出** 積木把輸入的值顯示在彈出視窗中。

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## 接受使用者輸入 {#text_prompt_ext}

下面的積木會產生一個要求使用者輸入的彈出視窗，輸入的值會儲存到變數中。  
可以接受文字或數字。

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
