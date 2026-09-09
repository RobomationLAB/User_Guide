---
title: 臉部表情
---

# 臉部表情

## 宣告實例 {#instance}

把臉部表情(FaceExpression) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
face_expression = FaceExpression(0)
# 有多個實例時
face_expression_1 = FaceExpression(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于識別年齡、性別和表情的相機。

<BlockImage module="AI/FaceExpression" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## 載入人臉表情模型 {#load_model}

載入訓練好的年齡、性別和表情模型。要使用「臉部表情」模組的功能，必須先完成這一步。

<BlockImage module="AI/FaceExpression" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## 偵測一次人臉表情 {#detect_once}

分析目前畫面中的人臉，把預測出的年齡、性別和表情只顯示一次。

<BlockImage module="AI/FaceExpression" id="detect_once" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## 開始 / 停止持續人臉表情偵測 {#detect_continuous}

持續分析目前畫面中的人臉，把預測出的年齡、性別和表情顯示在畫面上。

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示年齡、性別和表情的識別結果。

<BlockImage module="AI/FaceExpression" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## 年齡 {#age}

年齡

<BlockImage module="AI/FaceExpression" id="age" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## 性別 {#gender}

性別

<BlockImage module="AI/FaceExpression" id="gender" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## 表情 {#expression}

表情

<BlockImage module="AI/FaceExpression" id="expression" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## 偵測到性別？ {#gender_detected}

是否識別出了性別

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## 性別是特定值？ {#gender_check}

回傳識別出的性別是否與指定的值一致，結果為 **true(True) / false(False)**。

<BlockImage module="AI/FaceExpression" id="gender_check" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 性別 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## 性別的信心度 {#gender_confidence}

是所選性別的機率（信心度）

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 性別 | 男性(male), 女性(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## 偵測到表情？ {#expression_detected}

是否識別出了表情

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## 表情是特定值？ {#expression_check}

回傳識別出的表情是否與指定的值一致，結果為 **true(True) / false(False)**。

<BlockImage module="AI/FaceExpression" id="expression_check" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 表情 | 生氣(angry), 厭惡(disgusted), 害怕(fearful), 開心(happy), 無表情(neutral), 悲傷(sad), 驚訝(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## 表情的信心度 {#expression_confidence}

是所選表情的機率（信心度）

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 表情 | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## 臉部表情模型載入狀態 {#model_state}

回傳年齡、性別和表情模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/FaceExpression" id="model_state" />

### 參數

（無）

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
