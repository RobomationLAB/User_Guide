---
title: 控制
---

# 控制

在積木程式設計中，**控制積木** 的作用是操縱程式的流程。  
可以實現等待一段時間、偵測鍵盤輸入、輸出記錄等功能。


## 等待 {#wait_sec}

等待指定的時間（秒）之後執行下一個指令。

<BlockImage module="common/control" id="wait_sec" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| sec | 輸入值（欄位） | 等待時間 — **字面數字** (例: `Utils.wait(0.5)`) | 0 以上的實數 | - |
| sec | 輸入值（積木） | 等待時間 — **變數/運算式** (例: `Utils.wait(time)`) | 0 以上的實數 | - |

### Python
```python
# field sec = 2 → 原樣（單位為秒）
Utils.wait(2)

# 變數輸入
Utils.wait(myVar)
```

## 等待一個影格 {#wait_1msec}

讓程式的執行停止一個影格（約 0.001 秒）。

<BlockImage module="common/control" id="wait_1msec" />

### 參數

（無 — 固定為 0.001 秒）

### Python
```python
Utils.wait(0.001)
```

<!--
## 無限等待 {#wait_forever}

停止程式的執行並無限等待。

### 參數

（無）

### Python
```python
Utils.wait_forever()
```
-->

## 按下鍵 {#key_pressed}

回傳某個鍵是否處於按下狀態，結果為 **true(True) / false(False)**。

<BlockImage module="common/control" id="key_pressed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| key | 輸入值 | 鍵名 | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## 輸出記錄 {#log}

把某個變數或屬性的值即時輸出到 **主控台** 視窗。

<BlockImage module="common/control" id="log" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值 | 要輸出的值 | 任意值 | - |
| tag | 輸入值 | 記錄標籤 | 字串 | - |
| unit | 輸入值 | 單位顯示 | 字串 | - |

### Python
```python
Utils.log(data, '', '')
```

## 輸出示波器 {#scope}

把某個值的變化以即時圖表的形式顯示在 **示波器** 視窗中。  
可以設定圖表的顏色、最小 / 最大值和範圍。

<BlockImage module="common/control" id="scope" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| signal | 輸入值（積木） | 圖表訊號值 | 實數 | - |
| name | 輸入值 | 圖表名稱 | 字串 | - |
| min_val | 輸入值（欄位） | 圖表最小值 | 實數 | - |
| max_val | 輸入值（欄位） | 圖表最大值 | 實數 | - |
| color | 顏色 | 圖表顏色 (hex) | hex 字串 | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
