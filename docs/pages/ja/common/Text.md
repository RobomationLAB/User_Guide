---
title: テキスト
---

# テキスト {#text}

文字列の例は次のとおりです:
- "thing #1"
- "March 12, 2010"
- "" (空の文字列)

文字列には、大文字または小文字の文字、数字、句読点、そのほかの記号、単語の間のスペースを含めることができます。  

<BlockImage module="common/text" id="text" />

## テキストを結合して作成 {#text_join}

**テキストを結合して作成** ブロックは、複数の文字列の値を結合（連結）して新しい文字列を作ります。

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## テキストを追加 {#text_append}

**テキストを追加** ブロックは、指定した変数に与えられた文字列を追加します。

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## テキストの長さ {#text_length}

**長さ** ブロックは、それぞれの文字列に含まれる文字や数字などを数えて、全体の長さを返します。  
下の `abc` の長さは 3 で、空の文字列の長さは 0 です。

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## テキストが空かどうか {#text_isEmpty}

**が空** ブロックは、与えられた文字列が空かどうか（長さが 0 かどうか）を調べます。

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## テキストを検索 {#text_indexOf}

これらのブロックは、特定の文字列がほかの文字列の中にあるかどうかを調べ、ある場合はその位置を返します。

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## 1 文字を取り出す {#text_charAt}

文字列から特定の位置の 1 文字を取得します。  
最初・最後・ランダムな位置・N 番目など、さまざまなオプションがあります。

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## 部分文字列を取得 {#text_getSubstring}

**部分文字列を取得** ブロックを使うと、特定の範囲の文字列を取り出せます。

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## テキストの大文字・小文字を変換 {#text_changeCase}

このブロックは、入力された文字列を次のいずれかの形式に変換します:

- **大文字に**: すべての文字を大文字に変換
- **小文字に**: すべての文字を小文字に変換
- **先頭だけ大文字に**: 各単語の先頭だけを大文字にし、残りを小文字に変換

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # 大文字
TEXT.lower() # 小文字
TEXT.title() # 先頭だけ大文字
```

## スペースを取り除く {#text_trim}

次のブロックは、文字列から次の位置のスペースを取り除きます:
- 両端
- 左
- 右

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # 両端
TEXT.lstrip()   # 左
TEXT.rstrip()   # 右
```

## テキストに含まれる文字列の数を数える {#text_count}

与えられた文字列の中に、特定の部分文字列が現れる回数を数えて返します。

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## テキストに含まれる文字列を置換 {#text_replace}

文字列の中の特定の部分文字列を、ほかの文字列にまとめて置き換えます。

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## テキストを逆順に {#text_reverse}

文字列の順番を逆にした新しい文字列を返します。

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## テキストを表示 {#text_print}

**表示** ブロックは、入力された値をポップアップ画面に表示します。

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## ユーザーの入力を求める {#text_prompt_ext}

次のブロックは、ユーザーに入力を求めるポップアップ画面を作り、入力された値は変数に保存されます。  
テキストまたは数値を入力してもらうことができます。

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
