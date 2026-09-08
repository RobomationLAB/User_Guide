---
title: カメラ自動運転
---

# カメラ自動運転

## インスタンスの宣言 {#instance}

カメラ自動運転(SelfDriving) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
self_driving = SelfDriving(0)
# 複数のインスタンスがある場合
self_driving_1 = SelfDriving(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

カメラ自動運転に使うカメラを設定します。

<BlockImage module="AI/SelfDriving" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## 車線の色を設定 {#set_lane_color}

左/右の車線の色を設定します。

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| left | ドロップダウンオプション | 左の車線の色 | 赤(red), 緑(green), 青(blue) | - |
| right | ドロップダウンオプション | 右の車線の色 | 赤(red), 緑(green), 青(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## 色 / 車線を1回検出 {#detect_once}

選んだ色/車線を画面から見つけて、1 回だけ領域を表示します。

<BlockImage module="AI/SelfDriving" id="detect_once" />

### パラメーター

（なし）

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## 色 / 車線の連続検出を開始 / 停止 {#detect_continuous}

選んだ色/車線について画面を続けて追いかけながら、画面上に領域を表示します。

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## 結果を表示 {#display}

カメラの画面に色/車線の検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/SelfDriving" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## 車線のデータ {#lane_data}

指定した車線の位置または距離の値を返します。

<BlockImage module="AI/SelfDriving" id="lane_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| lane | ドロップダウンオプション | 車線 | 左(left), 右(right) | - |
| unit | ドロップダウンオプション | 測定の種類 | x, 距離(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## 色のデータ {#color_data}

指定した色の位置/大きさの値を返します。

<BlockImage module="AI/SelfDriving" id="color_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 赤(red), 緑(green), 青(blue) | - |
| unit | ドロップダウンオプション | 座標/大きさの種類 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## 2つの色の間の距離 {#color_to_color}

2 つの色の間の距離を返します。

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | ドロップダウンオプション | 1 つ目の色 | 赤(red), 緑(green), 青(blue) | - |
| unit2 | ドロップダウンオプション | 2 つ目の色 | 赤(red), 緑(green), 青(blue) | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # 距離
self_driving.get_distance('green', 'blue', 'horizontal')  # 横の距離
```

## 車線を検出した？ {#lane_detected}

特定の車線を見つけたかどうか

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| lane | ドロップダウンオプション | 車線 | 左(left), 右(right), 両方(both), どれでも(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## 色を検出した？ {#color_detected}

特定の色の領域を見つけたかどうか

<BlockImage module="AI/SelfDriving" id="color_detected" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | 赤(red), 緑(green), 青(blue), どれでも(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
