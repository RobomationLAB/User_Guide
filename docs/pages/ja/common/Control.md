---
title: 制御
---

# 制御

ブロックコーディングにおいて **制御ブロック** は、プログラムの流れを操作する役割を持ちます。  
一定時間待つ、キーボード入力を検知する、ログを出力するなどの機能を実行できます。


## 秒待つ {#wait_sec}

指定した時間（秒）だけ待ってから、次の命令を実行します。

<BlockImage module="common/control" id="wait_sec" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| sec | 入力値（フィールド） | 待ち時間 — **リテラル数値**（例: `Utils.wait(0.5)`） | 0 以上の実数 | - |
| sec | 入力値（ブロック） | 待ち時間 — **変数/式**（例: `Utils.wait(time)`） | 0 以上の実数 | - |

### Python
```python
# field sec = 2 → そのまま（秒単位）
Utils.wait(2)

# 変数入力
Utils.wait(myVar)
```

## 1フレーム待つ {#wait_1msec}

プログラムの実行を 1 フレーム（約 0.001 秒）だけ止めます。

<BlockImage module="common/control" id="wait_1msec" />

### パラメーター

（なし — 0.001 秒に固定）

### Python
```python
Utils.wait(0.001)
```

<!--
## 無限に待つ {#wait_forever}

プログラムの実行を止めて、無限に待ちます。

### パラメーター

（なし）

### Python
```python
Utils.wait_forever()
```
-->

## キーが押されている {#key_pressed}

特定のキーが押されているかどうかを **true(True) / false(False)** で返します。

<BlockImage module="common/control" id="key_pressed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| key | 入力値 | キー名 | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## ログ出力 {#log}

特定の変数や属性の値をリアルタイムで **コンソール** 画面に出力します。

<BlockImage module="common/control" id="log" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値 | 出力する値 | 任意の値 | - |
| tag | 入力値 | ログタグ | 文字列 | - |
| unit | 入力値 | 単位の表示 | 文字列 | - |

### Python
```python
Utils.log(data, '', '')
```

## グラフ出力 {#scope}

特定の値の変化をリアルタイムのグラフとして **グラフ** 画面に表示します。  
グラフの色、最小値/最大値、範囲を設定できます。

<BlockImage module="common/control" id="scope" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| signal | 入力値（ブロック） | グラフの信号値 | 実数 | - |
| name | 入力値 | グラフ名 | 文字列 | - |
| min_val | 入力値（フィールド） | グラフの最小値 | 実数 | - |
| max_val | 入力値（フィールド） | グラフの最大値 | 実数 | - |
| color | 色 | グラフの色（hex） | hex 文字列 | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
