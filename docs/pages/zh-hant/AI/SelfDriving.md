---
title: 相機自動駕駛
---

# 相機自動駕駛

## 宣告實例 {#instance}

把相機自動駕駛(SelfDriving) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
self_driving = SelfDriving(0)
# 有多個實例時
self_driving_1 = SelfDriving(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于相機自動駕駛的相機。

<BlockImage module="AI/SelfDriving" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## 設定車道線顏色 {#set_lane_color}

設定左側 / 右側車道線的顏色。

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| left | 下拉選項 | 左側車道線顏色 | 紅色(red), 綠色(green), 藍色(blue) | - |
| right | 下拉選項 | 右側車道線顏色 | 紅色(red), 綠色(green), 藍色(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## 偵測一次顏色/車道線 {#detect_once}

在畫面中找出所選的顏色 / 車道線，只標示一次它們的區域。

<BlockImage module="AI/SelfDriving" id="detect_once" />

### 參數

（無）

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## 開始 / 停止持續顏色/車道線偵測 {#detect_continuous}

針對所選的顏色 / 車道線持續跟蹤畫面，並在畫面上標示它們的區域。

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示顏色 / 車道線偵測的結果。

<BlockImage module="AI/SelfDriving" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## 車道線資料 {#lane_data}

回傳指定車道線的位置或距離值。

<BlockImage module="AI/SelfDriving" id="lane_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| lane | 下拉選項 | 車道線 | 左側(left), 右側(right) | - |
| unit | 下拉選項 | 測量種類 | x, 距離(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## 顏色區域資料 {#color_data}

回傳指定顏色的位置 / 大小值。

<BlockImage module="AI/SelfDriving" id="color_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 紅色(red), 綠色(green), 藍色(blue) | - |
| unit | 下拉選項 | 坐標 / 大小種類 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## 兩個顏色區域之間的距離 {#color_to_color}

回傳兩個顏色之間的距離。

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit1 | 下拉選項 | 第一個顏色 | 紅色(red), 綠色(green), 藍色(blue) | - |
| unit2 | 下拉選項 | 第二個顏色 | 紅色(red), 綠色(green), 藍色(blue) | - |
| type | 下拉選項 | 距離種類 | 距離(省略或 None), 水平距離(horizontal), 垂直距離(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # 距離
self_driving.get_distance('green', 'blue', 'horizontal')  # 水平距離
```

## 偵測到車道？ {#lane_detected}

是否找到了特定的車道線

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| lane | 下拉選項 | 車道線 | 左側(left), 右側(right), 兩側(both), 任意(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## 偵測到顏色區域？ {#color_detected}

是否找到了特定的顏色區域

<BlockImage module="AI/SelfDriving" id="color_detected" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 紅色(red), 綠色(green), 藍色(blue), 任意(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
