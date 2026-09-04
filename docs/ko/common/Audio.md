---
title: 소리
---

# 소리

소리 블록을 활용하면 다양한 효과음과 음성을 재생할 수 있습니다.


## 소리 재생하기 {#play_sound}

원하는 소리를 지정한 **볼륨**으로 재생합니다.  
**반복** 체크박스를 활성화하면 선택한 소리를 계속해서 반복 재생할 수 있습니다.

<BlockImage module="common/audio" id="play_sound" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | 사운드 라이브러리 클립 이름 | - |
| volume | 입력값 (필드) | 볼륨 | 0 ~ 100 정수 | 100 |
| repeat | 체크박스 | 반복 재생 여부 | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## 언어 음성 정하기 {#set_tts}

**TTS**를 재생할 **언어**와 **목소리**를 설정합니다.  
다양한 언어 및 목소리를 선택하여 더욱 자연스러운 음성을 출력할 수 있습니다.

<BlockImage module="common/audio" id="set_tts" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| lang | 드롭다운 옵션 | 언어 코드 | 시스템 TTS 언어 (예: `'ko-KR'`, `'en-US'`) | - |
| voice | 드롭다운 옵션 | 목소리 이름 | 시스템 TTS 목소리 이름 (예: `'Google 한국의'`) | - |

### Python
```python
Utils.set_tts('ko-KR', '')
```

## 다음을 말하기 {#speak}

입력된 텍스트를 소리로 변환하여 말합니다.

<BlockImage module="common/audio" id="speak" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| text | 입력값 | 말할 텍스트 | 문자열 | - |

### Python
```python
Utils.speak('안녕하세요')
```
