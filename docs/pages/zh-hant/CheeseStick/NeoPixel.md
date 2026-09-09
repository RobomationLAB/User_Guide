---
title: NeoPixel
---

# NeoPixel

## 宣告實例 {#instance}

把 NeoPixel 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 啟動 {#start}

開始使用 NeoPixel。

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## 設定 LED 模式 {#mode}

設定 NeoPixel 的 LED 模式。

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 顏色通道模式 | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## 設定一個像素的顏色 {#set_one_color}

給指定編號的一個像素設定顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。(產生的程式碼使用顏色名稱，而不是 R, G, B 的數值。)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| idx | 輸入值（欄位） | 像素編號（從 1 開始） | 1 以上的整數 | - |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## 用顏色類別的積木設定一個像素的顏色 {#set_one_color_with_block}

接受顏色類別的積木作為輸入，設定一個像素的顏色。  
把顏色積木的輸出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`，都回傳 `[R, G, B]`）用 `*`（星號）解包，傳給 `set_one_color` 的 r, g, b 參數。

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| idx | 輸入值（欄位） | 像素編號（從 1 開始） | 1 以上的整數 | - |
| data | 輸入值（顏色） | 顏色類別的積木或 `[R, G, B]` 陣列 | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## 按 RGB 更改一個像素的顏色 {#change_one_by_rgb}

在指定的一個像素目前的 RGB 值上加上變化量，設定新的顏色。

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| idx | 輸入值（欄位） | 像素編號（從 1 開始） | 1 以上的整數 | - |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## 關閉一個像素 {#turn_off_one}

消除第 n 個 LED 的顏色。  
LED 編號的範圍是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| idx | 輸入值（欄位） | 像素編號（從 1 開始） | 1 以上的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## 設定範圍的圖案 {#set_range_pattern}

設定指定範圍內所有 LED 的顏色圖案。  
LED 編號的範圍是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| pattern | 下拉選項 | 顏色圖案名稱 | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## 設定範圍的顏色 {#set_range_color}

給指定的整個像素範圍設定相同的顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## 用顏色類別的積木設定範圍的顏色 {#set_range_color_with_block}

接受顏色類別的積木作為輸入，設定像素範圍的顏色。  
把顏色積木的輸出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）用 `*`（星號）解包，傳給 `set_range_color` 的 r, g, b 參數。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| data | 輸入值（顏色） | 顏色類別的積木或 `[R, G, B]` 陣列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## 按 RGB 更改範圍的顏色 {#change_range_by_rgb}

在指定像素範圍目前的顏色上加上 RGB 的變化量，設定新的顏色。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## 關閉範圍的顏色 {#turn_off_range}

消除指定範圍內所有 LED 的顏色。  
LED 編號的範圍是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## 每隔 n 個設定範圍的顏色 {#set_range_increment_color}

在指定的像素範圍內，每隔 `increment` 個設定顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。  
(例: 只點亮第 1, 3, 5, … 個)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| increment | 輸入值（欄位） | 間隔（格數） | 1 以上的整數 | - |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## 用顏色類別的積木每隔 n 個設定範圍的顏色 {#set_range_increment_color_with_block}

接受顏色類別的積木作為輸入，在指定的像素範圍內每隔 n 個設定顏色。  
把顏色積木的輸出（`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`）用 `*`（星號）解包，傳給 `set_range_increment_color` 的 r, g, b 參數。

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| increment | 輸入值（欄位） | 間隔（格數） | 1 以上的整數 | - |
| data | 輸入值（顏色） | 顏色類別的積木或 `[R, G, B]` 陣列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## 每隔 n 個按 RGB 更改範圍的顏色 {#change_range_increment_by_rgb}

在每隔 n 個的像素目前的顏色上加上 RGB 的變化量，設定新的顏色。

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| increment | 輸入值（欄位） | 增量間隔（格數） | 1 以上的整數 | - |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## 每隔 n 個關閉範圍的顏色 {#turn_off_range_increment}

消除指定範圍和間隔內所有 LED 的顏色。  
LED 編號的範圍是 1 ~ 144。

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| from_idx | 輸入值（欄位） | 起始像素編號（從 1 開始） | 1 以上的整數 | - |
| to_idx | 輸入值（欄位） | 結束像素編號（從 1 開始） | 1 以上的整數 | - |
| increment | 輸入值（欄位） | 增量間隔（格數） | 1 以上的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## 平移 / 旋轉 {#shift}

按指定的方向和格數平移或旋轉 LED。  
可以選擇的值的範圍是 1 ~ 143。

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作種類 | 平移(shift), 旋轉(rotate) | - |
| direction | 下拉選項 | 方向 | 向左(left), 向右(right) | - |
| pixel | 輸入值（欄位） | 要移動的像素數 | 1 以上的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## 設定亮度 {#set_brightness}

設定 NeoPixel 的亮度。  
可以選擇的值的範圍是 0 ~ 100。

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| value | 輸入值（欄位） | 亮度 | 0 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## 更改亮度 {#change_brightness}

更改 NeoPixel 的亮度。  
可以選擇的值的範圍是 -100 ~ 100。

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| value | 輸入值（欄位） | 亮度變化量 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
