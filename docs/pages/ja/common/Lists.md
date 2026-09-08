---
title: リスト
---

# リスト

リストは「やることリスト」や「買い物リスト」のように、**項目が順番に並べられた集合**です。  
リストの項目はどんな型でもよく、同じ値がリストに何度も現れてもかまいません。


## 空のリストを作成 {#lists_create_with}

もっとも簡単なリストは空のリストで、**空のリストを作成** ブロックを使って作ります。

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## リストを作成 {#lists_create_with-2}

**リストを作成** ブロックを使うと、新しいリストに初期値を指定できます。

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## 項目を繰り返したリストを作成 {#lists_repeat}

**項目を繰り返したリストを作成** ブロックを使うと、指定した項目を繰り返して、好きな個数のリストを作れます。

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## リストの長さ {#lists_length}

**長さ** ブロックの値は、リストの項目数です。  
空のリストの長さは 0 です。

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## リストが空かどうか {#lists_isEmpty}

**が空** ブロックの値は、入力が空のリストの場合は **true**、それ以外は **false** です。

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## リストで項目が現れた位置 {#lists_indexOf}

リストの中から特定の項目の位置を探します。  
リストにその項目がない場合、結果は 0 です。

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## 項目の取得 / 取り出し / 削除 {#lists_getIndex}

このブロックは、リストから項目を取得したり、取り出したり、削除したりできます。  
最初・最後・N 番目・ランダムな項目など、さまざまなオプションがあります。

<BlockImage module="common/lists" id="lists_getIndex" />

### 取得 {#lists_getIndex_get}

**リストから項目を取得** ブロックは、リストから特定の位置の項目を取得できます。  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### 取り出し {#lists_getIndex_cut}

**リストから項目を取り出し** ブロックは、リストから特定の項目を取得して、その項目をリストから削除します。

### Python
```python
list.pop(N - 1)                        # # 番目
list.pop(-N)                           # 最後から # 番目
list.pop(0)                            # 最初
list.pop()                             # 最後
lists_remove_random_item(list)         # ランダムに

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### 削除 {#lists_getIndex_remove}

**リストから項目を削除** ブロックは、リストから特定の項目を削除するだけです。  
ブロックの左側のプラグがなくなり、上下のブロックをつなげられるようになります。  

### Python
```python
list.pop(N - 1)                             # # 番目
list.pop(-N)                                # 最後から # 番目
list.pop(0)                                 # 最初
list.pop()                                  # 最後
list.pop(int(random.random() * len(list)))  # ランダムに
```

## 好きな位置に項目をセット / 挿入 {#lists_setIndex}

このブロックは、リストの好きな位置に項目をセットしたり挿入したりできます。  
最初・最後・N 番目・ランダムな項目など、さまざまなオプションがあります。

<BlockImage module="common/lists" id="lists_setIndex" />

### 項目をセット {#lists_setIndex_set}

**リストで項目をセット** ブロックは、指定した位置の項目をほかの項目に置き換えます。

### Python
```python
list[N - 1] = value                         # # 番目
list[-N] = value                            # 最後から # 番目
list[0] = value                             # 最初
list[-1] = value                            # 最後

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # ランダムに
```

### 項目を挿入 {#lists_setIndex_insert}

**リストで項目を挿入** ブロックは、新しい項目を指定した位置に挿入します。  
もとの項目は残り、長さが 1 増えます。

### Python
```python
list.insert(N - 1, value)                        # # 番目
list.insert(-N, value)                           # 最後から # 番目
list.insert(0, value)                            # 最初
list.append(value)                               # 最後

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # ランダムに
```

## サブリストの取得 {#lists_getSublist}

**リストから ... サブリストを取得** ブロックは、開始位置と終了位置を指定してサブリストを取得します。  
最初・最後・N 番目・ランダムな項目など、さまざまなオプションがあります。  
実行後も、もとのリストは変更されません。  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# 開始が最初の位置(#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# 開始が last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# 開始が first
list[ : N]
list[ : -N]
list[ : ]
```

## 項目を置き換えた新しいリストを取得 {#lists_replace}

**リストの項目を置き換えた新しいリストを取得** ブロックは、指定した位置にある項目をほかの項目に置き換えた新しいリストを返します。  
最初・最後・N 番目など、さまざまなオプションがあります。  
実行後も、もとのリストは変更されません。  

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

## 区切り記号でテキストを分割 / 結合 {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### テキストからリストを作る {#text_to_list}

**テキストからリストを作る** ブロックは、与えられたテキストを区切り記号で分けてリストとして返します。

### Python
```python
text.split(delimiter)
```

### リストからテキストを作る {#list_to_text}

**リストからテキストを作る** ブロックは、区切り記号を使ってリストの項目を 1 つのテキストに結合します。

### Python
```python
delimiter.join(list)
```

## リストを並び替える {#lists_sort}

リストを好きな基準で **並び替えるブロック** です。  
数値順またはアルファベット順に並び替えることができ、昇順と降順を選べます。  
また、アルファベット順に並び替えるときに大文字と小文字を区別せずに並び替えることもできます。

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # 数値, 昇順
lists_sort(my_list, "NUMERIC", True)       # 数値, 降順
lists_sort(my_list, "TEXT", False)         # 文字, 昇順
lists_sort(my_list, "TEXT", True)          # 文字, 降順
lists_sort(my_list, "IGNORE_CASE", False)  # 大文字小文字の区別なし, 昇順
lists_sort(my_list, "IGNORE_CASE", True)   # 大文字小文字の区別なし, 降順

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

## リストを逆順に {#lists_reverse}

リストの要素の順番を **逆順に変える** ブロックです。

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
