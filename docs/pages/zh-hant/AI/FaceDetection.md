---
title: 臉部偵測
---

# 臉部偵測

## 宣告實例 {#instance}

把臉部偵測(FaceDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
face_detection = FaceDetection(0)
# 有多個實例時
face_detection_1 = FaceDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于臉部偵測的相機。

<BlockImage module="AI/FaceDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## 載入人臉模型 {#load_model}

載入訓練好的人臉模型。要使用「臉部偵測」模組的功能，必須先完成這一步。

<BlockImage module="AI/FaceDetection" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## 偵測一次人臉 {#detect_once}

找出目前畫面中的人臉，只標示一次。

<BlockImage module="AI/FaceDetection" id="detect_once" />

### 參數

（無）

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## 開始 / 停止持續臉部偵測 {#detect_continuous}

持續跟蹤目前畫面中的人臉，並在畫面上標示出來。

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示臉部偵測的結果。

<BlockImage module="AI/FaceDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## 人臉部位的位置 {#face_data}

回傳人臉或人臉各部位的位置坐標。

<BlockImage module="AI/FaceDetection" id="face_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 人臉部位 | 人臉(face), 左眼(left eye), 右眼(right eye), 左耳(left ear), 右耳(right ear), 鼻子(nose), 嘴(mouth) | - |
| pos | 下拉選項 | 坐標種類 | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## 人臉矩形框資訊 {#face_square}

回傳人臉區域矩形框的位置 / 大小值。

<BlockImage module="AI/FaceDetection" id="face_square" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| pos | 下拉選項 | 矩形框資訊 | 最小 x 坐標(min_x), 最大 x 坐標(max_x), 最小 y 坐標(min_y), 最大 y 坐標(max_y), 寬(width), 高(height), 面積(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## 兩個部位之間的距離 {#distance}

回傳人臉兩個部位之間的距離。

<BlockImage module="AI/FaceDetection" id="distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉選項 | 第一個部位 | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | 下拉選項 | 第二個部位 | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # 距離
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # 水平距離
face_detection.get_distance('nose', 'mouth', 'vertical')  # 垂直距離
```

## 人臉模型載入狀態 {#model_state}

回傳人臉模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/FaceDetection" id="model_state" />

### 參數

（無）

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## 偵測到人臉？ {#detected}

是否找到了人臉

<BlockImage module="AI/FaceDetection" id="detected" />

### 參數

（無）

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
