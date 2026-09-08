---
title: 身体検出
---

# 身体検出

## インスタンスの宣言 {#instance}

身体検出(BodyDetection) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
body_detection = BodyDetection(0)
# 複数のインスタンスがある場合
body_detection_1 = BodyDetection(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

身体検出に使うカメラを設定します。

<BlockImage module="AI/BodyDetection" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## 身体モデルを読み込む {#load_model}

学習済みの身体モデルを読み込みます。「身体検出」モジュールの機能を使うには、この操作が必ず必要です。

<BlockImage module="AI/BodyDetection" id="load_model" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| wait | チェックボックス | 読み込みの完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## 身体を1回検出 {#detect_once}

いま画面にある身体を見つけて、1 回だけ表示します。

<BlockImage module="AI/BodyDetection" id="detect_once" />

### パラメーター

（なし）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## 身体の連続検出を開始 / 停止 {#detect_continuous}

いま画面にある身体を続けて追いかけながら、画面上に表示します。

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## 結果を表示 {#display}

カメラの画面に身体検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/BodyDetection" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## 身体の部位の座標 {#body_data}

身体の部位ごとの座標を返します。

<BlockImage module="AI/BodyDetection" id="body_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 身体の部位 | 鼻(nose), 口(mouth), 左目(left eye), 右目(right eye), 左耳(left ear), 右耳(right ear), 左肩(left shoulder), 右肩(right shoulder), 左ひじ(left elbow), 右ひじ(right elbow), 左手首(left wrist), 右手首(right wrist), 左手(left hand), 右手(right hand), 左腰(left hip), 右腰(right hip), 左ひざ(left knee), 右ひざ(right knee), 左足首(left ankle), 右足首(right ankle), 左足(left foot), 右足(right foot) | - |
| pos | ドロップダウンオプション | 座標 | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## 2つの部位の間の距離 {#body_distance}

身体の 2 つの部位の間の距離を返します。

<BlockImage module="AI/BodyDetection" id="body_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | ドロップダウンオプション | 1 つ目の身体の部位 | (上の身体の部位の表を参照) | - |
| unit2 | ドロップダウンオプション | 2 つ目の身体の部位 | (上の身体の部位の表を参照) | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # 距離
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # 横の距離
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # 縦の距離
```

## 身体モデルの読み込み状態 {#model_state}

身体モデルの読み込み状態を返します。  
まだ読み込んでいなければ 0、読み込み中なら 1、読み込みが完了していれば 2 を返します。

<BlockImage module="AI/BodyDetection" id="model_state" />

### パラメーター

（なし）

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## 身体を検出した？ {#detected}

身体を見つけたかどうか

<BlockImage module="AI/BodyDetection" id="detected" />

### パラメーター

（なし）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
