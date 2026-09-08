---
title: CSD-07 音センサー
---

# CSD-07 音センサー

## インスタンスの宣言 {#instance}

CSD-07 音センサー(CSD07) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## ポートで開始 {#set_input_port}

CSD07 (音センサー) が接続されているポートを設定します。

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 接続するポート | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## 値 {#get_input}

選んだポートの音センサーの値

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 読み取るポート | Sa, Sb, Sc | 最後の `set_port` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
