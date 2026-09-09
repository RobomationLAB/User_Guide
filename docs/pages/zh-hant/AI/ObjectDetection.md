---
title: 物體偵測
---

# 物體偵測

## 宣告實例 {#instance}

把物體偵測(ObjectDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
object_detection = ObjectDetection(0)
# 有多個實例時
object_detection_1 = ObjectDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于物體偵測的相機。

<BlockImage module="AI/ObjectDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## 載入物體模型 {#load_model}

載入訓練好的物體模型。要使用「物體偵測」模組的功能，必須先完成這一步。

<BlockImage module="AI/ObjectDetection" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## 設定最大物體數量 {#max_objects}

設定最多可以偵測到的物體個數。物體個數的範圍是 0 ~ 10。

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 最大物體數量 | 0 ~ 10 的整數 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## 設定物體偵測信心度 {#confidence_threshold}

設定物體偵測的最小機率（信心度）。只有機率（信心度）在這個值以上時才會顯示在畫面上。機率（信心度）的範圍是 0 ~ 1。

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 信心度閾值 | 0 ~ 1 的實數 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## 偵測一次物體 {#detect_once}

找出目前畫面中的物體，只標示一次。

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### 參數

（無）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## 開始 / 停止連續物體偵測 {#detect_continuous}

連續跟蹤目前畫面中的物體，並在畫面上標示出來。

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示物體偵測的結果。

<BlockImage module="AI/ObjectDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## 物體的位置 {#object_data}

回傳指定物體的位置 / 大小值。

<BlockImage module="AI/ObjectDetection" id="object_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 物體名稱 | 80 個物體類別 (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` 等) | - |
| pos | 下拉選項 | 坐標 | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## 物體矩形資訊 {#object_square}

回傳指定物體區域矩形的位置 / 大小值。

<BlockImage module="AI/ObjectDetection" id="object_square" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 物體名稱 | 80 個物體類別 | - |
| pos | 下拉選項 | 矩形資訊 | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## 兩個物體之間的距離 {#object_distance}

回傳兩個物體類別之間的距離。

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉選項 | 第一個物體名稱 | 80 個物體類別 | - |
| unit2 | 下拉選項 | 第二個物體名稱 | 80 個物體類別 | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # 距離
object_detection.get_distance('person', 'car', 'horizontal')  # 水平距離
```

## 物體的信心度 {#object_confidence}

是所選物體的機率（信心度）

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 物體名稱 | 80 個物體類別 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## 物體模型載入狀態 {#model_state}

回傳物體模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/ObjectDetection" id="model_state" />

### 參數

（無）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## 偵測到物體？ {#detected}

是否找到了物體

<BlockImage module="AI/ObjectDetection" id="detected" />

### 參數

（無）

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## 偵測到特定物體？ {#object_detected}

是否找到了所選的物體

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 物體名稱 | 80 個物體類別 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
