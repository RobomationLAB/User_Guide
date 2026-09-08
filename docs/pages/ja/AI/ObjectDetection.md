---
title: 物体検出
---

# 物体検出

## インスタンスの宣言 {#instance}

物体検出(ObjectDetection) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
object_detection = ObjectDetection(0)
# 複数のインスタンスがある場合
object_detection_1 = ObjectDetection(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

物体検出に使うカメラを設定します。

<BlockImage module="AI/ObjectDetection" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## 物体モデルを読み込む {#load_model}

学習済みの物体モデルを読み込みます。「物体検出」モジュールの機能を使うには、この操作が必ず必要です。

<BlockImage module="AI/ObjectDetection" id="load_model" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| wait | チェックボックス | 読み込みの完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## 物体の最大数を設定 {#max_objects}

検出できる物体の最大の数を設定します。物体の数の範囲は 0 ~ 10 です。

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 物体の最大数 | 0 ~ 10 の整数 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## 信頼度のしきい値を設定 {#confidence_threshold}

物体検出の最小の確率（信頼度）を設定します。確率（信頼度）がこれ以上の場合だけ画面に表示されます。確率（信頼度）の範囲は 0 ~ 1 です。

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 信頼度のしきい値 | 0 ~ 1 の実数 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## 物体を1回検出 {#detect_once}

いま画面にある物体を見つけて、1 回だけ表示します。

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### パラメーター

（なし）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## 物体の連続検出を開始 / 停止 {#detect_continuous}

いま画面にある物体を続けて追いかけながら、画面上に表示します。

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## 結果を表示 {#display}

カメラの画面に物体検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/ObjectDetection" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## 物体の位置の情報 {#object_data}

指定した物体の位置/大きさの値を返します。

<BlockImage module="AI/ObjectDetection" id="object_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 物体の名前 | 物体クラス 80 種（`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` など） | - |
| pos | ドロップダウンオプション | 座標 | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## 物体の矩形の情報 {#object_square}

指定した物体の領域の矩形の位置/大きさの値を返します。

<BlockImage module="AI/ObjectDetection" id="object_square" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 物体の名前 | 物体クラス 80 種 | - |
| pos | ドロップダウンオプション | 矩形の情報 | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## 2つの物体の間の距離 {#object_distance}

2 つの物体クラスの間の距離を返します。

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | ドロップダウンオプション | 1 つ目の物体の名前 | 物体クラス 80 種 | - |
| unit2 | ドロップダウンオプション | 2 つ目の物体の名前 | 物体クラス 80 種 | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # 距離
object_detection.get_distance('person', 'car', 'horizontal')  # 横の距離
```

## 物体の信頼度 {#object_confidence}

選んだ物体である確率（信頼度）

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 物体の名前 | 物体クラス 80 種 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## 物体モデルの読み込み状態 {#model_state}

物体モデルの読み込み状態を返します。  
まだ読み込んでいなければ 0、読み込み中なら 1、読み込みが完了していれば 2 を返します。

<BlockImage module="AI/ObjectDetection" id="model_state" />

### パラメーター

（なし）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## 物体を検出した？ {#detected}

物体を見つけたかどうか

<BlockImage module="AI/ObjectDetection" id="detected" />

### パラメーター

（なし）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## 特定の物体を検出した？ {#object_detected}

選んだ物体を見つけたかどうか

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 物体の名前 | 物体クラス 80 種 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
