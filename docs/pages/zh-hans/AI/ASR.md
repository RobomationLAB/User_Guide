---
title: 语音转文字
---

# 语音转文字

## 声明实例 {#instance}

把语音转文字(ASR) 积木添加到工作区后，Python 代码中会自动插入下面这样的实例声明：

```python
asr = ASR(0)
# 有多个实例时
asr_1 = ASR(1)
```

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| index | 下拉选项 | 实例编号（从 0 开始） | 0 以上的整数 | 0 |


## 设置语言 {#lang}

设置语音识别的语言。即使不设置语言，也会自动设置。

<BlockImage module="AI/ASR" id="lang" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 识别语言代码 | 程序支持的 21 种语言的代码 (例: `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## 开始 / 停止语音识别 {#listen}

开始或停止语音识别。

<BlockImage module="AI/ASR" id="listen" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| unit | 下拉选项 | 动作 | 开始(start), 停止(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## 识别结果 {#result}

语音识别的结果

<BlockImage module="AI/ASR" id="result" />

### 参数

（无）

### Python
```python
asr = ASR(0)

asr.result()
```

## 正在识别？ {#state}

返回语音识别是否处于活动状态，结果为 **true(True) / false(False)**。

<BlockImage module="AI/ASR" id="state" />

### 参数

（无）

### Python
```python
asr = ASR(0)

asr.is_active()
```
