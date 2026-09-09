---
title: CSD-03 旋轉電位器
---

# CSD-03 旋轉電位器

## 宣告實例 {#instance}

把 CSD-03 旋轉電位器(CSD03) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 從連接埠開始 {#set_input_port}

設定 CSD03（可變電阻）所連線的連接埠。

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要連線的連接埠 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## 設定輸入範圍 {#set_input_range}

把所選連接埠的輸入值轉換到指定的最小 ~ 最大範圍。  
輸入值的範圍是 0 ~ 255。  
可以轉換到的值的範圍是 -100 ~ 100。

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標連接埠 | Sa, Sb, Sc | - |
| src_min | 輸入值（欄位） | 原始最小值 | 0 ~ 255 的整數 | - |
| src_max | 輸入值（欄位） | 原始最大值 | 0 ~ 255 的整數 | - |
| dst_min | 輸入值（欄位） | 轉換後的最小值 | -100 ~ 100 的整數 | - |
| dst_max | 輸入值（欄位） | 轉換後的最大值 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## 用中間值設定輸入範圍 {#set_input_range_median}

把所選連接埠的輸入值轉換到指定的最小 ~ 中間 ~ 最大範圍。  
輸入值的範圍是 0 ~ 255。  
可以轉換到的值的範圍是 -100 ~ 100。

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標連接埠 | Sa, Sb, Sc | - |
| src_min | 輸入值（欄位） | 原始最小值 | 0 ~ 255 的整數 | - |
| src_median | 輸入值（欄位） | 原始中間值 | 0 ~ 255 的整數 | - |
| src_max | 輸入值（欄位） | 原始最大值 | 0 ~ 255 的整數 | - |
| dst_min | 輸入值（欄位） | 轉換後的最小值 | -100 ~ 100 的整數 | - |
| dst_median | 輸入值（欄位） | 轉換後的中間值 | -100 ~ 100 的整數 | - |
| dst_max | 輸入值（欄位） | 轉換後的最大值 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 輸入 {#get_input}

所選連接埠的旋轉電位器輸入值  
如果沒有單獨設定輸入範圍，輸入值的範圍是 0 ~ 255。

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要讀取的連接埠 | Sa, Sb, Sc | 最後一次 `set_port` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
