---
title: 色
---

# 色

色はさまざまなグラフィックプログラムで使われます。 


## 基本色 {#color_picker}

もっとも簡単に色を得る方法は、**カラーパレット**を使うことです。  
白い角丸の四角をクリックするとカラーパレットが表示され、好きな色を選べます。

<BlockImage module="common/color" id="color_picker" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | 色 | 色のプリセット | 黒(black), 赤(red), 黄(yellow), 緑(green),<br>シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |

### Python
```python
# 例: 赤のプリセットを選んだ場合
Utils.color('red')
```

## スライダー色 {#color_slider}

**スライダー色** ブロックは、円形 / バーのスライダーを使って色を直接組み合わせることができます。  
白い角丸の四角をクリックすると、**赤(R), 緑(G), 青(B)** の値を調整できる円形のカラーホイールと、**明度**（明るさ）を調整できるバースライダーが表示されます。

<BlockImage module="common/color" id="color_slider" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | 色 | カラーホイール + 明度スライダー | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# カラーホイールで選んだ色 → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB 色 {#color_rgb}

**RGB 色** ブロックは、赤・緑・青の値をそれぞれ指定して RGB 配列を作ります。

<BlockImage module="common/color" id="color_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| r | 入力値（ブロック） | 赤の値 | 0 ~ 255 の整数 | - |
| g | 入力値（ブロック） | 緑の値 | 0 ~ 255 の整数 | - |
| b | 入力値（ブロック） | 青の値 | 0 ~ 255 の整数 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## ランダムな色 {#color_random}

**ランダムな色** ブロックは、呼び出されるたびにランダムな RGB 色を生成します。

<BlockImage module="common/color" id="color_random" />

### パラメーター

（なし）

### Python
```python
Utils.random_color()
```
