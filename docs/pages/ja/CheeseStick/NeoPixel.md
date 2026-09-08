---
title: NeoPixel
---

# NeoPixel

## インスタンスの宣言 {#instance}

NeoPixel ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 開始 {#start}

NeoPixel を使い始めます。

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## 色モードを設定 {#mode}

NeoPixel の LED モードを設定します。

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 色チャンネルのモード | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## 1つのピクセルの色を設定 {#set_one_color}

指定した番号のピクセル 1 つに色を設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。(R, G, B の数値ではなく色の名前でコードが生成されます。)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| idx | 入力値（フィールド） | ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## 色カテゴリーのブロックで1つのピクセルの色を設定 {#set_one_color_with_block}

色カテゴリーのブロックを入力として受け取り、1 つのピクセルの色を設定します。  
色ブロックの出力（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`、いずれも `[R, G, B]` を返します）を `*`（アスタリスク）でアンパックして、`set_one_color` の r, g, b 引数に渡します。

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| idx | 入力値（フィールド） | ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| data | 入力値（色） | 色カテゴリーのブロックまたは `[R, G, B]` 配列 | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## 1つのピクセルの色を RGB の分だけ変える {#change_one_by_rgb}

指定した 1 つのピクセルの現在の RGB 値に変化量を足して、新しい色を設定します。

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| idx | 入力値（フィールド） | ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## 1つのピクセルを消す {#turn_off_one}

n 番目の LED の色を消します。  
LED 番号の範囲は 1 ~ 144 です。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| idx | 入力値（フィールド） | ピクセル番号（1 から始まる） | 1 以上の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## 範囲のパターンを設定 {#set_range_pattern}

指定した範囲に当たるすべての LED の色パターンを設定します。  
LED 番号の範囲は 1 ~ 144 です。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| pattern | ドロップダウンオプション | 色パターンの名前 | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## 範囲の色を設定 {#set_range_color}

指定したピクセル範囲の全体に同じ色を設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## 色カテゴリーのブロックで範囲の色を設定 {#set_range_color_with_block}

色カテゴリーのブロックを入力として受け取り、ピクセル範囲の色を設定します。  
色ブロックの出力（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）を `*`（アスタリスク）でアンパックして、`set_range_color` の r, g, b 引数に渡します。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| data | 入力値（色） | 色カテゴリーのブロックまたは `[R, G, B]` 配列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## 範囲の色を RGB の分だけ変える {#change_range_by_rgb}

指定したピクセル範囲の現在の色に RGB の変化量を足して、新しい色を設定します。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## 範囲の色を消す {#turn_off_range}

指定した範囲に当たるすべての LED の色を消します。  
LED 番号の範囲は 1 ~ 144 です。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## n 個おきに範囲の色を設定 {#set_range_increment_color}

指定したピクセル範囲の中で `increment` 個おきに色を設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。  
(例: 1, 3, 5, … のマスだけ点灯する)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| increment | 入力値（フィールド） | 間隔（マスの数） | 1 以上の整数 | - |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## 色カテゴリーのブロックで n 個おきに範囲の色を設定 {#set_range_increment_color_with_block}

色カテゴリーのブロックを入力として受け取り、指定したピクセル範囲の中で n 個おきに色を設定します。  
色ブロックの出力（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）を `*`（アスタリスク）でアンパックして、`set_range_increment_color` の r, g, b 引数に渡します。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| increment | 入力値（フィールド） | 間隔（マスの数） | 1 以上の整数 | - |
| data | 入力値（色） | 色カテゴリーのブロックまたは `[R, G, B]` 配列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## n 個おきに範囲の色を RGB の分だけ変える {#change_range_increment_by_rgb}

n 個おきにピクセルの現在の色に RGB の変化量を足して、新しい色を設定します。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| increment | 入力値（フィールド） | 増分の間隔（マスの数） | 1 以上の整数 | - |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## n 個おきに範囲の色を消す {#turn_off_range_increment}

指定した範囲と間隔に当たるすべての LED の色を消します。  
LED 番号の範囲は 1 ~ 144 です。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| from_idx | 入力値（フィールド） | 開始ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| to_idx | 入力値（フィールド） | 終了ピクセル番号（1 から始まる） | 1 以上の整数 | - |
| increment | 入力値（フィールド） | 増分の間隔（マスの数） | 1 以上の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## シフト・回転 {#shift}

指定した方向とマスの分だけ LED を移動したり回転したりします。  
選べる値の範囲は 1 ~ 143 です。

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作の種類 | シフト(shift), 回転(rotate) | - |
| direction | ドロップダウンオプション | 方向 | 左(left), 右(right) | - |
| pixel | 入力値（フィールド） | 移動するピクセル数 | 1 以上の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## 明るさを設定 {#set_brightness}

NeoPixel の明るさを設定します。  
選べる値の範囲は 0 ~ 100 です。

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| value | 入力値（フィールド） | 明るさ | 0 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## 明るさを変更 {#change_brightness}

NeoPixel の明るさを変更します。  
選べる値の範囲は -100 ~ 100 です。

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| value | 入力値（フィールド） | 明るさの変化量 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
