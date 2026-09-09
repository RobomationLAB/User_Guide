---
title: CSD-01 輕觸開關
---

# CSD-01 輕觸開關

## 宣告實例 {#instance}

把 CSD-01 輕觸開關(CSD01) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 從連接埠開始 {#set_input_port}

設定 CSD01 (Tact Switch) 所連線的連接埠。

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要連線的連接埠 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## 按鈕輸入 {#button_input}

所選連接埠的按鈕輸入值  
按鈕被按下時回傳 0，否則回傳 1。

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要讀取的連接埠 | Sa, Sb, Sc | 最後一次 `set_port` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## 按鈕已按下？ {#button_pressed}

所選連接埠上連線的開關按鈕是否被按下

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要讀取的連接埠 | Sa, Sb, Sc | 最後一次 `set_port` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
