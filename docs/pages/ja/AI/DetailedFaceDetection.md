---
title: 詳細な顔検出
---

# 詳細な顔検出

## インスタンスの宣言 {#instance}

詳細な顔検出(DetailedFaceDetection) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
detailed_face_detection = DetailedFaceDetection(0)
# 複数のインスタンスがある場合
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

詳細な顔検出に使うカメラを設定します。

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## 顔モデルを読み込む {#load_model}

学習済みの顔モデルを読み込みます。「詳細な顔検出」モジュールの機能を使うには、この操作が必ず必要です。

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| wait | チェックボックス | 読み込みの完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## 顔を1回検出 {#detect_once}

いま画面にある顔を見つけて、1 回だけ表示します。

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### パラメーター

（なし）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## 顔の連続検出を開始 / 停止 {#detect_continuous}

いま画面にある顔を続けて追いかけながら、画面上に表示します。

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## 結果を表示 {#display}

カメラの画面に顔検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## 顔の部位の座標 {#face_data}

顔の部位ごとの座標を返します。

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 顔の部位 | 顔(face), 左目(left eye), 右目(right eye), 口(mouth), 鼻(nose), 上唇(upper lip), 下唇(lower lip), 左の口角(left lip), 右の口角(right lip), 左の瞳(left pupil), 右の瞳(right pupil) | - |
| pos | ドロップダウンオプション | 座標 | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## 顔の部位の矩形の情報 {#face_square}

顔の部位ごとの領域の矩形の位置/大きさの値を返します。

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 顔の部位 | 顔(face), 左目(left eye), 右目(right eye), 口(mouth) | - |
| pos | ドロップダウンオプション | 矩形の情報 | 最小x座標(min_x), 最大x座標(max_x), 最小y座標(min_y), 最大y座標(max_y), 幅(width), 高さ(height), 面積(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## 2つの部位の間の距離 {#distance}

顔の 2 つの部位の間の距離を返します。

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | ドロップダウンオプション | 1 つ目の部位 | 顔の部位の名前 | - |
| unit2 | ドロップダウンオプション | 2 つ目の部位 | 顔の部位の名前 | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # 距離
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # 横の距離
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # 縦の距離
```

## 顔モデルの読み込み状態 {#model_state}

顔モデルの読み込み状態を返します。  
まだ読み込んでいなければ 0、読み込み中なら 1、読み込みが完了していれば 2 を返します。

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### パラメーター

（なし）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## 顔を検出した？ {#detected}

顔を見つけたかどうか

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### パラメーター

（なし）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
