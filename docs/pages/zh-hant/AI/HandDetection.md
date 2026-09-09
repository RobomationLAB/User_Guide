---
title: 手部偵測
---

# 手部偵測

## 宣告實例 {#instance}

把手部偵測(HandDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
hand_detection = HandDetection(0)
# 有多個實例時
hand_detection_1 = HandDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于手部偵測的相機。

<BlockImage module="AI/HandDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## 載入手部模型 {#load_model}

載入訓練好的手部模型。要使用「手部偵測」模組的功能，必須先完成這一步。

<BlockImage module="AI/HandDetection" id="load_model" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| wait | 核取方塊 | 是否等待載入完成 | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## 設定偵測目標 {#max_hands}

決定偵測手部時，是以單手為准還是以雙手為准。

<BlockImage module="AI/HandDetection" id="max_hands" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 手的數量 | 單手(one), 雙手(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## 偵測一次手部 {#detect_once}

找出目前畫面中的手，只標示一次。

<BlockImage module="AI/HandDetection" id="detect_once" />

### 參數

（無）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## 開始 / 停止持續手部偵測 {#detect_continuous}

持續跟蹤目前畫面中的手，並在畫面上標示出來。

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示手部偵測的結果。

<BlockImage module="AI/HandDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## 手部部位的位置 {#hand_data}

回傳指定手的手掌 / 手腕位置資訊。

<BlockImage module="AI/HandDetection" id="hand_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| side | 下拉選項 | 手的方向 | 左側(left), 右側(right) | - |
| unit | 下拉選項 | 手部部位 | 手掌(palm), 手腕(wrist) | - |
| pos | 下拉選項 | 坐標 / 大小種類 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 手指指節的位置 {#joint_data}

回傳指定手指的關節坐標。

<BlockImage module="AI/HandDetection" id="joint_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| side | 下拉選項 | 手的方向 | 左側(left), 右側(right) | - |
| unit | 下拉選項 | 手指 | 拇指(thumb), 食指(index), 中指(middle), 無名指(ring), 小指(pinky) | - |
| joint | 下拉選項 | 指節位置 | 第一指節(first), 第二指節(second), 第三指節(third), 指尖(last) | - |
| pos | 下拉選項 | 坐標 | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## 手部矩形資訊 {#hand_square}

回傳指定手部區域矩形的位置 / 大小值。

<BlockImage module="AI/HandDetection" id="hand_square" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| side | 下拉選項 | 手的方向 | 左側(left), 右側(right) | - |
| unit | 下拉選項 | 手部部位 | 手(hand), 手掌(palm) | - |
| pos | 下拉選項 | 矩形資訊 | 最小 x 坐標(min_x), 最大 x 坐標(max_x), 最小 y 坐標(min_y), 最大 y 坐標(max_y), 寬(width), 高(height), 面積(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## 手與手之間的距離 {#hand_to_hand_distance}

回傳兩個手部部位之間的距離。

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 輸入值（字串） | 第一個手部部位 | 手: `'side_unit'` (例: `'left_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 輸入值（字串） | 第二個手部部位 | 手: `'side_unit'` (例: `'right_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 手 / 距離
hand_detection.get_distance('left_palm', 'right_palm')  
```

## 手與手指之間的距離 {#hand_to_joint_distance}

回傳手部部位與手指指節之間的距離。

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 輸入值（字串） | 第一個部位 | 手: `'side_unit'` (例: `'left_palm'`)。side=left/right, unit=palm/wrist/hand | - |
| unit2 | 輸入值（字串） | 第二個部位 | 手指: `'side_unit_joint'` (例: `'right_index_first'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手 ↔ 手指指節 / 水平距離
hand_detection.get_distance('left_palm', 'right_index_first')
```

## 手指與手指之間的距離 {#joint_to_joint_distance}

回傳兩個手指指節之間的距離。

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 輸入值（字串） | 第一個部位 | 手指: `'side_unit_joint'` (例: `'left_thumb_last'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | 輸入值（字串） | 第二個部位 | 手指: `'side_unit_joint'` (例: `'right_index_first'`)。unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# 手指指節 ↔ 手指指節 / 垂直距離
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## 手部模型載入狀態 {#model_state}

回傳手部模型的載入狀態。  
還沒有載入時回傳 0，正在載入時回傳 1，載入完成時回傳 2。

<BlockImage module="AI/HandDetection" id="model_state" />

### 參數

（無）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## 偵測到手部？ {#detected}

是否找到了手

<BlockImage module="AI/HandDetection" id="detected" />

### 參數

（無）

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
