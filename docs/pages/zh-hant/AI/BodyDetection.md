---
title: 人體偵測
---

# 人體偵測

## 宣告實例 {#instance}

把人體偵測(BodyDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
body_detection = BodyDetection(0)
# 有多個實例時
body_detection_1 = BodyDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于人體偵測的相機。

<BlockImage module="AI/BodyDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## 載入人體模型 {#load_model}

載入訓練好的人體模型。要使用「人體偵測」模組的功能，必須先完成這一步。

<BlockImage module="AI/BodyDetection" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## 偵測一次人體 {#detect_once}

找出目前畫面中的身體，只標示一次。

<BlockImage module="AI/BodyDetection" id="detect_once" />

### 參數

（無）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## 開始 / 停止持續人體偵測 {#detect_continuous}

持續跟蹤目前畫面中的身體，並在畫面上標示出來。

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示人體偵測的結果。

<BlockImage module="AI/BodyDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## 身體部位的位置 {#body_data}

回傳身體各部位的坐標。

<BlockImage module="AI/BodyDetection" id="body_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 身體部位 | 鼻子(nose), 嘴(mouth), 左眼(left eye), 右眼(right eye), 左耳(left ear), 右耳(right ear), 左肩(left shoulder), 右肩(right shoulder), 左肘(left elbow), 右肘(right elbow), 左手腕(left wrist), 右手腕(right wrist), 左手(left hand), 右手(right hand), 左髖(left hip), 右髖(right hip), 左膝(left knee), 右膝(right knee), 左脚踝(left ankle), 右脚踝(right ankle), 左脚(left foot), 右脚(right foot) | - |
| pos | 下拉選項 | 坐標 | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## 兩個部位之間的距離 {#body_distance}

回傳身體兩處部位之間的距離。

<BlockImage module="AI/BodyDetection" id="body_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉選項 | 第一個身體部位 | （參見上面的身體部位表） | - |
| unit2 | 下拉選項 | 第二個身體部位 | （參見上面的身體部位表） | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # 距離
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # 水平距離
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # 垂直距離
```

## 身體模型載入狀態 {#model_state}

回傳人體模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/BodyDetection" id="model_state" />

### 參數

（無）

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## 偵測到身體？ {#detected}

是否找到了身體

<BlockImage module="AI/BodyDetection" id="detected" />

### 參數

（無）

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
