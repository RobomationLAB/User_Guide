---
title: CSD-07 聲音感測器
---

# CSD-07 聲音感測器

## 宣告實例 {#instance}

把 CSD-07 聲音感測器(CSD07) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 從連接埠開始 {#set_input_port}

設定 CSD07（聲音感測器）所連線的連接埠。

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要連線的連接埠 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## 值 {#get_input}

所選連接埠的聲音感測器值

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 要讀取的連接埠 | Sa, Sb, Sc | 最後一次 `set_port` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
