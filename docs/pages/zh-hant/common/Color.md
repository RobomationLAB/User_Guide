---
title: 顏色
---

# 顏色

顏色用在各種圖形程式中。 


## 基本顏色 {#color_picker}

取得顏色最簡單的方法就是使用 **調色盤**。  
點擊白色的圓角方塊會出現調色盤，可以從中選擇想要的顏色。

<BlockImage module="common/color" id="color_picker" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 顏色 | 顏色預設 | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green),<br>青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |

### Python
```python
# 例: 選擇紅色預設時
Utils.color('red')
```

## 滑桿顏色 {#color_slider}

**滑桿顏色** 積木可以用圓形 / 條狀滑桿直接調配顏色。  
點擊白色的圓角方塊，會出現可以調整 **紅(R)、綠(G)、藍(B)** 值的圓形色輪，以及可以調節 **明度**（亮度）的條狀滑桿。

<BlockImage module="common/color" id="color_slider" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 顏色 | 色輪 + 明度滑桿 | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# 在色輪中選擇的顏色 → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB 顏色 {#color_rgb}

**RGB 顏色** 積木分別指定紅、綠、藍的值，產生 RGB 陣列。

<BlockImage module="common/color" id="color_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| r | 輸入值（積木） | 紅的值 | 0 ~ 255 的整數 | - |
| g | 輸入值（積木） | 綠的值 | 0 ~ 255 的整數 | - |
| b | 輸入值（積木） | 藍的值 | 0 ~ 255 的整數 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## 隨機顏色 {#color_random}

**隨機顏色** 積木每次被呼叫時都會產生隨機的 RGB 顏色。

<BlockImage module="common/color" id="color_random" />

### 參數

（無）

### Python
```python
Utils.random_color()
```
