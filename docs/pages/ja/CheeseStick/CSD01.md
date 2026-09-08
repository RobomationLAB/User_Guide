---
title: CSD-01 タクトスイッチ
---

# CSD-01 タクトスイッチ

## インスタンスの宣言 {#instance}

CSD-01 タクトスイッチ(CSD01) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## ポートで開始 {#set_input_port}

CSD01 (Tact Switch) が接続されているポートを設定します。

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 接続するポート | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## ボタン入力 {#button_input}

選んだポートのボタン入力の値  
ボタンが押されていれば 0、そうでなければ 1 を返します。

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 読み取るポート | Sa, Sb, Sc | 最後の `set_port` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## ボタンが押された？ {#button_pressed}

選んだポートに接続されたスイッチのボタンが押されているかどうか

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 読み取るポート | Sa, Sb, Sc | 最後の `set_port` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
