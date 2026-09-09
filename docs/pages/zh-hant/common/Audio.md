---
title: 音訊
---

# 音訊

使用音訊積木可以播放各種音效和語音。


## 播放音效 {#play_sound}

以指定的 **音量** 播放想要的音效。  
勾選 **重複** 核取方塊，就可以讓選中的音效不斷重複播放。

<BlockImage module="common/audio" id="play_sound" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | 音效庫中的片段名稱 | - |
| volume | 輸入值（欄位） | 音量 | 0 ~ 100 的整數 | 100 |
| repeat | 核取方塊 | 是否重複播放 | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## 設定語言與語音 {#set_tts}

設定播放 **TTS** 的 **語言** 和 **語音**。  
可以選擇各種語言和語音，輸出更自然的聲音。

<BlockImage module="common/audio" id="set_tts" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| lang | 下拉選項 | 語言代碼 | 程式支援的 21 種語言的 TTS 語言代碼 (例: `'ko-KR'`, `'en-US'`) | - |
| voice | 下拉選項 | 語音名稱 | 系統 TTS 語音名稱 (例: `'Google 國語（臺灣）'`) | - |

### Python
```python
Utils.set_tts('zh-TW', '')
```

## 說出 {#speak}

把輸入的文字轉換成聲音說出來。

<BlockImage module="common/audio" id="speak" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| text | 輸入值 | 要說出的文字 | 字串 | - |

### Python
```python
Utils.speak('你好')
```
