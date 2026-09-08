---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## インスタンスの宣言 {#instance}

CSD-02 RGB LED(CSD02) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 開始 {#start}

RGB LED を使い始めます。  
このブロックを追加しないと、RGB LED は有効になりません。

<BlockImage module="CheeseStick/CSD02" id="start" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## LEDの色を設定 {#set_color}

CSD02 の LED の色を指定した色に設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。(R, G, B の数値ではなく色の名前でコードが生成されます。)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## 色カテゴリーのブロックで色を設定 {#set_color_with_block}

色カテゴリーのブロック（例: `[R, G, B]` 配列）を入力として受け取り、CSD02 の LED の色を設定します。

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（色） | 色カテゴリーのブロックの出力または `[R, G, B]` 配列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## RGB の分だけ色を変える {#change_by_rgb}

現在の LED の色に、入力した R, G, B の変化量を足して新しい色を設定します。

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## LEDを消す {#turn_off}

RGB LED の色を消します。

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
