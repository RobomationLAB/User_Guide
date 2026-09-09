---
title: 顏色偵測
---

# 顏色偵測

## 宣告實例 {#instance}

把顏色偵測(ColorDetection) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
color_detection = ColorDetection(0)
# 有多個實例時
color_detection_1 = ColorDetection(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定相機 {#device}

設定用于顏色偵測的相機。

<BlockImage module="AI/ColorDetection" id="device" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 相機設備名稱 | 系統相機標籤 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## 新增到目標顏色 {#register_color}

新增要透過顏色偵測識別的顏色。

<BlockImage module="AI/ColorDetection" id="register_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## 從目標顏色中刪除 {#delete_color}

從要透過顏色偵測識別的顏色中刪除該顏色。

<BlockImage module="AI/ColorDetection" id="delete_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## 設定偵測條件（面積） {#area_condition}

設定要識別的顏色區域面積的最小值。只有區域面積在這個值以上時才會顯示在畫面上。

<BlockImage module="AI/ColorDetection" id="area_condition" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 面積條件值 | 0 以上的實數 | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## 偵測一次物體 {#detect_once}

在可識別的顏色中，找出目前畫面里的顏色，只標示一次它們的區域。

<BlockImage module="AI/ColorDetection" id="detect_once" />

### 參數

（無）

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## 開始 / 停止持續偵測物體 {#detect_continuous}

在可識別的顏色中，持續跟蹤目前畫面里的顏色，並在畫面上標示它們的區域。

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## 顯示結果 {#display}

決定是否在相機畫面上顯示顏色偵測的結果。

<BlockImage module="AI/ColorDetection" id="display" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 顯示 ON / OFF | 顯示(on=True), 隱藏(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## 顏色區域資訊 {#color_data}

回傳指定顏色的位置 / 大小值。

<BlockImage module="AI/ColorDetection" id="color_data" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |
| pos | 下拉選項 | 坐標 / 大小種類 | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## 偵測到特定顏色？ {#color_detected}

是否找到了所選的顏色

<BlockImage module="AI/ColorDetection" id="color_detected" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
