---
title: 語音轉文字
---

# 語音轉文字

## 宣告實例 {#instance}

把語音轉文字(ASR) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
asr = ASR(0)
# 有多個實例時
asr_1 = ASR(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定語言 {#lang}

設定語音識別的語言。即使不設定語言，也會自動設定。

<BlockImage module="AI/ASR" id="lang" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 識別語言程式碼 | 程式支援的 21 種語言的程式碼 (例: `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## 開始 / 停止語音識別 {#listen}

開始或停止語音識別。

<BlockImage module="AI/ASR" id="listen" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## 識別結果 {#result}

語音識別的結果

<BlockImage module="AI/ASR" id="result" />

### 參數

（無）

### Python
```python
asr = ASR(0)

asr.result()
```

## 正在識別？ {#state}

回傳語音識別是否處于活動狀態，結果為 **true(True) / false(False)**。

<BlockImage module="AI/ASR" id="state" />

### 參數

（無）

### Python
```python
asr = ASR(0)

asr.is_active()
```
