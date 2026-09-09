---
title: PID-13 搖杆和按鈕
---

# PID-13 搖杆和按鈕

## 宣告實例 {#instance}

把 PID-13 搖杆和按鈕(PID13) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 啟動 {#start}

開始使用搖杆和按鈕。

<BlockImage module="CheeseStick/PID13" id="start" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## 搖杆 {#joystick}

搖杆的 x / y 值。  
各個值的範圍是 -128 ~ 127。

<BlockImage module="CheeseStick/PID13" id="joystick" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## 按鈕 {#button_input}

所選按鈕的輸入狀態  
按鈕被按下時輸出 1，沒有被按下時輸出 0。

<BlockImage module="CheeseStick/PID13" id="button_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 按鈕名稱 | A 按鈕(a), B 按鈕(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## 按鈕已點擊？ {#button_click}

所選按鈕是否被點擊  
這個積木只在所選按鈕被點擊的那一刻回傳 true，其他時候回傳 false。

<BlockImage module="CheeseStick/PID13" id="button_click" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 按鈕名稱 | A 按鈕(a), B 按鈕(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
