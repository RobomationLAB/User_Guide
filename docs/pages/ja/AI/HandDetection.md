---
title: 手検出
---

# 手検出

## インスタンスの宣言 {#instance}

手検出(HandDetection) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
hand_detection = HandDetection(0)
# 複数のインスタンスがある場合
hand_detection_1 = HandDetection(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

手検出に使うカメラを設定します。

<BlockImage module="AI/HandDetection" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## 手モデルを読み込む {#load_model}

学習済みの手モデルを読み込みます。「手検出」モジュールの機能を使うには、この操作が必ず必要です。

<BlockImage module="AI/HandDetection" id="load_model" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| wait | チェックボックス | 読み込みの完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## 対象の手の数を設定 {#max_hands}

手を検出するとき、片手を対象にするか、両手を対象にするかを決めます。

<BlockImage module="AI/HandDetection" id="max_hands" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 手の数 | 片手(one), 両手(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## 手を1回検出 {#detect_once}

いま画面にある手を見つけて、1 回だけ表示します。

<BlockImage module="AI/HandDetection" id="detect_once" />

### パラメーター

（なし）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## 手の連続検出を開始 / 停止 {#detect_continuous}

いま画面にある手を続けて追いかけながら、画面上に表示します。

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## 結果を表示 {#display}

カメラの画面に手検出の結果を表示するかどうかを決めます。

<BlockImage module="AI/HandDetection" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## 手の部位の座標 {#hand_data}

指定した手の手のひら/手首の位置の情報を返します。

<BlockImage module="AI/HandDetection" id="hand_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| side | ドロップダウンオプション | 手の左右 | 左(left), 右(right) | - |
| unit | ドロップダウンオプション | 手の部位 | 手のひら(palm), 手首(wrist) | - |
| pos | ドロップダウンオプション | 座標/大きさの種類 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 指の関節の座標 {#joint_data}

指定した指の関節の座標を返します。

<BlockImage module="AI/HandDetection" id="joint_data" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| side | ドロップダウンオプション | 手の左右 | 左(left), 右(right) | - |
| unit | ドロップダウンオプション | 指 | 親指(thumb), 人差し指(index), 中指(middle), 薬指(ring), 小指(pinky) | - |
| joint | ドロップダウンオプション | 関節の位置 | 第1関節(first), 第2関節(second), 第3関節(third), 先端(last) | - |
| pos | ドロップダウンオプション | 座標 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## 手の長方形の情報 {#hand_square}

指定した手の領域の長方形の位置/大きさの値を返します。

<BlockImage module="AI/HandDetection" id="hand_square" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| side | ドロップダウンオプション | 手の左右 | 左(left), 右(right) | - |
| unit | ドロップダウンオプション | 手の部位 | 手(hand), 手のひら(palm) | - |
| pos | ドロップダウンオプション | 長方形の情報 | 最小X位置(min_x), 最大X位置(max_x), 最小Y位置(min_y), 最大Y位置(max_y), 幅(width), 高さ(height), 面積(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 手と手の間の距離 {#hand_to_hand_distance}

2 つの手の部位の間の距離を返します。

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | 入力値（文字列） | 1 つ目の手の部位 | 手: `'side_unit'`（例: `'left_palm'`）。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 入力値（文字列） | 2 つ目の手の部位 | 手: `'side_unit'`（例: `'right_palm'`）。side=left/right, unit=palm/wrist/hand | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 手 / 距離
hand_detection.get_distance('left_palm', 'right_palm')  
```

## 手と指の間の距離 {#hand_to_joint_distance}

手の部位と指の関節の間の距離を返します。

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | 入力値（文字列） | 1 つ目の部位 | 手: `'side_unit'`（例: `'left_palm'`）。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 入力値（文字列） | 2 つ目の部位 | 指: `'side_unit_joint'`（例: `'right_index_first'`）。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 指の関節 / 横の距離
hand_detection.get_distance('left_palm', 'right_index_first')
```

## 指と指の間の距離 {#joint_to_joint_distance}

2 つの指の関節の間の距離を返します。

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit1 | 入力値（文字列） | 1 つ目の部位 | 指: `'side_unit_joint'`（例: `'left_thumb_last'`）。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | 入力値（文字列） | 2 つ目の部位 | 指: `'side_unit_joint'`（例: `'right_index_first'`）。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | ドロップダウンオプション | 距離の種類 | 距離(省略または None), 横の距離(horizontal), 縦の距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 指の関節 ↔ 指の関節 / 縦の距離
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## 手モデルの読み込み状態 {#model_state}

手モデルの読み込み状態を返します。  
まだ読み込んでいなければ 0、読み込み中なら 1、読み込みが完了していれば 2 を返します。

<BlockImage module="AI/HandDetection" id="model_state" />

### パラメーター

（なし）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## 手を検出した？ {#detected}

手を見つけたかどうか

<BlockImage module="AI/HandDetection" id="detected" />

### パラメーター

（なし）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
