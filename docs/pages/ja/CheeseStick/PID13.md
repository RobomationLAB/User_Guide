---
title: PID-13 ジョイスティック＆ボタン
---

# PID-13 ジョイスティック＆ボタン

## インスタンスの宣言 {#instance}

PID-13 ジョイスティック＆ボタン(PID13) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 開始 {#start}

ジョイスティックとボタンを使います。

<BlockImage module="CheeseStick/PID13" id="start" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## ジョイスティック {#joystick}

ジョイスティックの x / y の値。  
それぞれの値の範囲は -128 ~ 127 です。

<BlockImage module="CheeseStick/PID13" id="joystick" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## ボタンの入力 {#button_input}

選んだボタンの入力の状態  
ボタンが押されていれば 1、ボタンが押されていなければ 0 を出力します。

<BlockImage module="CheeseStick/PID13" id="button_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | ボタンの名前 | ボタン A (`'a'`), ボタン B (`'b'`) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## ボタンがクリックされた？ {#button_click}

選んだボタンがクリックされたかどうか  
このブロックは、選んだボタンがクリックされた瞬間だけ true を返し、それ以外は false を返します。

<BlockImage module="CheeseStick/PID13" id="button_click" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | ボタンの名前 | ボタン A (`'a'`), ボタン B (`'b'`) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
