---
title: ArUco 標記偵測
---

# ArUco 標記偵測

## 宣告實例 {#instance}

把 ArUco 標記偵測(ArucoMarker) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
aruco_marker = ArucoMarker(0)
# 有多個實例時
aruco_marker_1 = ArucoMarker(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于 ArUco 標記偵測的相機。

<BlockImage module="AI/ArucoMarker" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## 設定最大標記數 {#max_count}

設定最多可以識別的標記個數。標記個數的範圍是 0 ~ 10。

<BlockImage module="AI/ArucoMarker" id="max_count" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 最大標記數 | 0 ~ 10 的整數 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## 偵測一次標記 {#detect_once}

找出目前畫面中的標記，只標示一次它們的區域。

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### 參數

（無）

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## 開始 / 停止連續標記偵測 {#detect_continuous}

連續跟蹤目前畫面中的標記，並在畫面上標示它們的區域。

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示標記偵測的結果。

<BlockImage module="AI/ArucoMarker" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## 標記資料 {#marker_data}

回傳指定標記 ID 的位置 / 大小值。

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 標記 ID | 0 以上的整數 | - |
| unit | 下拉選項 | 測量種類 | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## 標記之間的距離 {#marker_to_marker}

回傳兩個標記之間的距離。

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 輸入值（積木） | 第一個標記 ID | 0 以上的整數 | - |
| unit2 | 輸入值（積木） | 第二個標記 ID | 0 以上的整數 | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # 距離
aruco_marker.get_distance(0, 2, 'horizontal')  # 水平距離
```

## 偵測到標記？ {#marker_detected}

是否找到了具有特定 id 值的標記

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 標記 ID | 0 以上的整數 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
