---
title: 音频
---

# 音频

使用音频积木可以播放各种音效和语音。


## 播放声音 {#play_sound}

以指定的 **音量** 播放想要的声音。  
勾选 **重复** 复选框，就可以让选中的声音不断重复播放。

<BlockImage module="common/audio" id="play_sound" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| clip | 下拉选项 | 声音片段名称 | 声音库中的片段名称 | - |
| volume | 输入值（字段） | 音量 | 0 ~ 100 的整数 | 100 |
| repeat | 复选框 | 是否重复播放 | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## 设置语言和语音 {#set_tts}

设置播放 **TTS** 的 **语言** 和 **语音**。  
可以选择各种语言和语音，输出更自然的声音。

<BlockImage module="common/audio" id="set_tts" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| lang | 下拉选项 | 语言代码 | 程序支持的 21 种语言的 TTS 语言代码 (例: `'ko-KR'`, `'en-US'`) | - |
| voice | 下拉选项 | 语音名称 | 系统 TTS 语音名称 (例: `'Google 普通话（中国大陆）'`) | - |

### Python
```python
Utils.set_tts('zh-CN', '')
```

## 朗读 {#speak}

把输入的文本转换成声音朗读出来。

<BlockImage module="common/audio" id="speak" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 输入值 | 要朗读的文本 | 字符串 | - |

### Python
```python
Utils.speak('你好')
```
