---
title: Speech to Text
---

# Speech to Text

## Instance declaration {#instance}

When you add a Speech to Text block to the workspace, the following instance declaration is automatically inserted into the Python code:

```python
asr = ASR(0)
# When there are multiple instances
asr_1 = ASR(1)
```

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| index | Dropdown option | Instance number (starting from 0) | Integer 0 or greater | 0 |


## Set the language {#lang}

Sets the speech recognition language. It is set automatically even if you do not set it.

<BlockImage module="AI/ASR" id="lang" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Recognition language code | Codes for the 21 languages the program supports (e.g. `'ko-KR'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('ko-KR')
```

## Start / stop speech recognition {#listen}

Starts or stops speech recognition.

<BlockImage module="AI/ASR" id="listen" />

### Parameters

| Name | Kind | Description | Range / Type | Default |
| --- | --- | --- | --- | --- |
| unit | Dropdown option | Action | start, stop | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Speech recognition result {#result}

The speech recognition result

<BlockImage module="AI/ASR" id="result" />

### Parameters

(none)

### Python
```python
asr = ASR(0)

asr.result()
```

## Speech recognition active state {#state}

Returns whether speech recognition is active as **true (True) / false (False)**.

<BlockImage module="AI/ASR" id="state" />

### Parameters

(none)

### Python
```python
asr = ASR(0)

asr.is_active()
```
