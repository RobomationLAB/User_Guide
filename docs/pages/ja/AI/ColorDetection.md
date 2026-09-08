---
title: 色検出
---

# 色検出

## インスタンスの宣言 {#instance}

色検出(ColorDetection) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
color_detection = ColorDetection(0)
# 複数のインスタンスがある場合
color_detection_1 = ColorDetection(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定する {#device}

色検出に使うカメラを設定します。

<BlockImage module="AI/ColorDetection" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## 対象色に登録する {#register_color}

色検出で認識する色を追加します。

<BlockImage module="AI/ColorDetection" id="register_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 黒(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## 対象色から削除する {#delete_color}

色検出で認識する色から、その色を削除します。

<BlockImage module="AI/ColorDetection" id="delete_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 黒(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## 検出条件を面積で設定する {#area_condition}

認識する色の領域の面積の最小の大きさを決めます。領域の面積がこれ以上の場合だけ画面に表示されます。

<BlockImage module="AI/ColorDetection" id="area_condition" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 面積の条件の値 | 0 以上の実数 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## 1回検出する {#detect_once}

認識できる色のうち、いま画面にある色を見つけて、1 回だけ領域を表示します。

<BlockImage module="AI/ColorDetection" id="detect_once" />

### パラメーター

（なし）

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## 色を連続検出 開始 / 停止 {#detect_continuous}

認識できる色のうち、いま画面にある色を続けて追いかけながら、画面上に領域を表示します。

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## 結果を表示 {#display}

カメラの画面に色検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/ColorDetection" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## 色の領域の情報 {#color_data}

指定した色の位置/大きさの値を返します。

<BlockImage module="AI/ColorDetection" id="color_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 黒(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |
| pos | ドロップダウンオプション | 座標/大きさの種類 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## 特定の色を検出した？ {#color_detected}

選んだ色を見つけたかどうか

<BlockImage module="AI/ColorDetection" id="color_detected" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 黒(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
