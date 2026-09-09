---
title: 詳細臉部偵測
---

# 詳細臉部偵測

## 宣告實例 {#instance}

把詳細臉部偵測(DetailedFaceDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
detailed_face_detection = DetailedFaceDetection(0)
# 有多個實例時
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于詳細臉部偵測的相機。

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## 載入人臉模型 {#load_model}

載入訓練好的人臉模型。要使用「詳細臉部偵測」模組的功能，必須先完成這一步。

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## 偵測一次人臉 {#detect_once}

找出目前畫面中的人臉，只標示一次。

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### 參數

（無）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## 開始 / 停止連續臉部偵測 {#detect_continuous}

連續跟蹤目前畫面中的人臉，並在畫面上標示出來。

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示臉部偵測的結果。

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## 人臉部位的坐標 {#face_data}

回傳人臉各部位的坐標。

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 人臉部位 | 人臉(face), 左眼(left eye), 右眼(right eye), 嘴(mouth), 鼻子(nose), 上唇(upper lip), 下唇(lower lip), 左嘴角(left lip), 右嘴角(right lip), 左瞳孔(left pupil), 右瞳孔(right pupil) | - |
| pos | 下拉選項 | 坐標 | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## 人臉部位矩形框資訊 {#face_square}

回傳人臉各部位區域矩形框的位置 / 大小值。

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 人臉部位 | 人臉(face), 左眼(left eye), 右眼(right eye), 嘴(mouth) | - |
| pos | 下拉選項 | 矩形框資訊 | 最小 x 坐標(min_x), 最大 x 坐標(max_x), 最小 y 坐標(min_y), 最大 y 坐標(max_y), 寬(width), 高(height), 面積(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## 兩個部位之間的距離 {#distance}

回傳人臉兩處部位之間的距離。

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉選項 | 第一個部位 | 人臉部位名稱 | - |
| unit2 | 下拉選項 | 第二個部位 | 人臉部位名稱 | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # 距離
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # 水平距離
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # 垂直距離
```

## 人臉模型載入狀態 {#model_state}

回傳人臉模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### 參數

（無）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## 偵測到人臉？ {#detected}

是否找到了人臉

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### 參數

（無）

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
