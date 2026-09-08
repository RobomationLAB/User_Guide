---
title: 表情認識
---

# 表情認識

## インスタンスの宣言 {#instance}

表情認識(FaceExpression) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
face_expression = FaceExpression(0)
# 複数のインスタンスがある場合
face_expression_1 = FaceExpression(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## カメラを設定 {#device}

年齢・性別・表情の認識に使うカメラを設定します。

<BlockImage module="AI/FaceExpression" id="device" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | カメラ機器の名前 | システムのカメラのラベル | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## 表情モデルを読み込む {#load_model}

学習済みの年齢・性別・表情モデルを読み込みます。「表情認識」モジュールの機能を使うには、この操作が必ず必要です。

<BlockImage module="AI/FaceExpression" id="load_model" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| wait | チェックボックス | 読み込みの完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## 表情を1回検出 {#detect_once}

いま画面にある顔を分析して、予測した年齢・性別・表情を 1 回だけ表示します。

<BlockImage module="AI/FaceExpression" id="detect_once" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## 表情の連続検出を開始 / 停止 {#detect_continuous}

いま画面にある顔を続けて分析して、予測した年齢・性別・表情を画面上に表示します。

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## 結果を表示 {#display}

カメラの画面に年齢・性別・表情の認識結果を表示するかどうかを決めます。

<BlockImage module="AI/FaceExpression" id="display" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | 表示 ON / OFF | 表示(on=True), 非表示(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## 年齢 {#age}

年齢

<BlockImage module="AI/FaceExpression" id="age" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## 性別 {#gender}

性別

<BlockImage module="AI/FaceExpression" id="gender" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## 表情 {#expression}

表情

<BlockImage module="AI/FaceExpression" id="expression" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## 性別を検出した？ {#gender_detected}

性別を認識したかどうか

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## 性別が ~ ? {#gender_check}

認識した性別が指定した値と一致するかどうかを **true(True) / false(False)** で返します。

<BlockImage module="AI/FaceExpression" id="gender_check" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 性別 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## 性別の信頼度 {#gender_confidence}

選んだ性別である確率（信頼度）

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 性別 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## 表情を検出した？ {#expression_detected}

表情を認識したかどうか

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## 表情が ~ ? {#expression_check}

認識した表情が指定した値と一致するかどうかを **true(True) / false(False)** で返します。

<BlockImage module="AI/FaceExpression" id="expression_check" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 表情 | 怒り(angry), 嫌悪(disgusted), 恐れ(fearful), 喜び(happy), 無表情(neutral), 悲しみ(sad), 驚き(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## 表情の信頼度 {#expression_confidence}

選んだ表情である確率（信頼度）

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 表情 | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## 表情モデルの読み込み状態 {#model_state}

年齢・性別・表情モデルの読み込み状態を返します。  
まだ読み込んでいなければ 0、読み込み中なら 1、読み込みが完了していれば 2 を返します。

<BlockImage module="AI/FaceExpression" id="model_state" />

### パラメーター

（なし）

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
