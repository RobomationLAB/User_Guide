---
title: CSD-10 ALSセンサー
---

# CSD-10 ALSセンサー

## インスタンスの宣言 {#instance}

CSD-10 ALSセンサー(CSD10) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## ポートで開始する {#set_input_port}

CSD10 (照度センサー) が接続されているポートを設定します。

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 接続するポート | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## 値 {#get_input}

選んだポートの照度センサーの値

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 読み取るポート | Sa, Sb, Sc | 最後の `set_port` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
