---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## 宣告實例 {#instance}

把 CSD-02 RGB LED(CSD02) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 啟動 {#start}

開始使用 RGB LED。  
不新增這個積木，RGB LED 就不會啟用。

<BlockImage module="CheeseStick/CSD02" id="start" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## 設定 LED 顏色 {#set_color}

把 CSD02 的 LED 顏色設定為指定的顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。(產生的程式碼使用顏色名稱，而不是 R, G, B 的數值。)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## 用顏色類別的積木設定顏色 {#set_color_with_block}

接受顏色類別的積木（例: `[R, G, B]` 陣列）作為輸入來設定 CSD02 的 LED 顏色。

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（顏色） | 顏色類別積木的輸出或 `[R, G, B]` 陣列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## 按 RGB 調整 LED {#change_by_rgb}

在目前的 LED 顏色上加上輸入的 R, G, B 變化量，設定新的顏色。

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## 關閉 LED {#turn_off}

消除 RGB LED 的顏色。

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
