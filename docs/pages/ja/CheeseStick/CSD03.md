---
title: CSD-03 回転式ポテンショメーター
---

# CSD-03 回転式ポテンショメーター

## インスタンスの宣言 {#instance}

CSD-03 回転式ポテンショメーター(CSD03) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## ポートで開始 {#set_input_port}

CSD03 (可変抵抗) が接続されているポートを設定します。

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 接続するポート | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## 入力の範囲を設定 {#set_input_range}

選んだポートの入力値を、指定した最小~最大の範囲に変換します。  
入力値の範囲は 0 ~ 255 です。  
変換できる値の範囲は -100 ~ 100 です。

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のポート | Sa, Sb, Sc | - |
| src_min | 入力値（フィールド） | もとの最小値 | 0 ~ 255 の整数 | - |
| src_max | 入力値（フィールド） | もとの最大値 | 0 ~ 255 の整数 | - |
| dst_min | 入力値（フィールド） | 変換後の最小値 | -100 ~ 100 の整数 | - |
| dst_max | 入力値（フィールド） | 変換後の最大値 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## 中間値で入力の範囲を設定 {#set_input_range_median}

選んだポートの入力値を、指定した最小~中間~最大の範囲に変換します。  
入力値の範囲は 0 ~ 255 です。  
変換できる値の範囲は -100 ~ 100 です。

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のポート | Sa, Sb, Sc | - |
| src_min | 入力値（フィールド） | もとの最小値 | 0 ~ 255 の整数 | - |
| src_median | 入力値（フィールド） | もとの中間値 | 0 ~ 255 の整数 | - |
| src_max | 入力値（フィールド） | もとの最大値 | 0 ~ 255 の整数 | - |
| dst_min | 入力値（フィールド） | 変換後の最小値 | -100 ~ 100 の整数 | - |
| dst_median | 入力値（フィールド） | 変換後の中間値 | -100 ~ 100 の整数 | - |
| dst_max | 入力値（フィールド） | 変換後の最大値 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 入力 {#get_input}

選んだポートの回転式ポテンショメーターの入力の値  
入力の範囲を別に設定していない場合、入力値の範囲は 0 ~ 255 です。

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 読み取るポート | Sa, Sb, Sc | 最後の `set_port` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
