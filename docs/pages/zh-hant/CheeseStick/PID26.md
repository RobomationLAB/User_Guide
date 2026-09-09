---
title: PID-26 環境感測器
---

# PID-26 環境感測器

## 宣告實例 {#instance}

把 PID-26 環境感測器(PID26) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 啟動 {#start}

開始使用 PID-26 環境感測器。

<BlockImage module="CheeseStick/PID26" id="start" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## 溫度 (°C) {#temperature}

回傳 PID26 環境感測器測得的溫度值。 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## 濕度 (%RH) {#humidity}

回傳 PID26 環境感測器測得的濕度值。

<BlockImage module="CheeseStick/PID26" id="humidity" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## 氣壓 (hPa) {#pressure}

回傳 PID26 環境感測器測得的氣壓值。  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
