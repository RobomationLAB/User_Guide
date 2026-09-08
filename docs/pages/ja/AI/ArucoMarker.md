---
title: ArUcoマーカー検出
---

# ArUcoマーカー検出

## インスタンスの宣言 {#instance}

ArUcoマーカー検出(ArucoMarker) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
aruco_marker = ArucoMarker(0)
# 複数のインスタンスがある場合
aruco_marker_1 = ArucoMarker(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

ArUcoマーカー検出に使うカメラを設定します。

<BlockImage module="AI/ArucoMarker" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## マーカーの最大数を設定 {#max_count}

認識できるマーカーの最大の数を設定します。マーカーの数の範囲は 0 ~ 10 です。

<BlockImage module="AI/ArucoMarker" id="max_count" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | マーカーの最大数 | 0 ~ 10 の整数 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## マーカーを1回検出 {#detect_once}

いま画面にあるマーカーを見つけて、1 回だけ領域を表示します。

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### パラメーター

（なし）

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## マーカーの連続検出を開始 / 停止 {#detect_continuous}

いま画面にあるマーカーを続けて追いかけながら、画面上に領域を表示します。

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## 結果を表示 {#display}

カメラの画面にマーカー検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/ArucoMarker" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## マーカーのデータ {#marker_data}

指定したマーカー ID の位置/大きさの値を返します。

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | マーカー ID | 0 以上の整数 | - |
| unit | ドロップダウンオプション | 測定の種類 | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## マーカーの間の距離 {#marker_to_marker}

2 つのマーカーの間の距離を返します。

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | 入力値（ブロック） | 1 つ目のマーカー ID | 0 以上の整数 | - |
| unit2 | 入力値（ブロック） | 2 つ目のマーカー ID | 0 以上の整数 | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # 距離
aruco_marker.get_distance(0, 2, 'horizontal')  # 横の距離
```

## マーカーを検出した？ {#marker_detected}

特定の id を持つマーカーを見つけたかどうか

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | マーカー ID | 0 以上の整数 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
