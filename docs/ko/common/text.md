---
title: 문자열
---

# 문자열

문자열의 예시는 다음과 같습니다:
- "thing #1"
- "March 12, 2010"
- "" (빈 문자열)

문자열에는 대문자 또는 소문자로 된 문자, 숫자, 구두점, 기타 기호 및 단어 사이의 공백이 포함될 수 있습니다.  

<br>

## 문자열 만들기 {#text}

문자열은 대문자 또는 소문자로 된 문자, 숫자, 구두점, 기타 기호 및 단어 사이의 공백이 포함될 수 있습니다.

<BlockImage module="common/text" id="text" />

## 문자열 연결 {#text_join}

**문자열 만들기** 블록은 여러 문자열의 값을 결합(연결)하여 새로운 문자열을 생성합니다.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## 문자열 수정 (...내용 덧붙이기) {#text_append}

**...내용 덧붙이기** 블록은 지정된 변수에 주어진 문자열를 추가합니다.
아래 `greeting` 변수의 값이 "`hello`"에서 "`hello, there!`"로 변경됩니다.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## 문자열 길이 {#text_length}

**길이** 블록은 각 문자열에서 문자, 숫자 등을 세어 총 길이를 반환합니다.
아래 "`We're #1!`"의 길이는 9이며, 빈 문자열의 길이는 0입니다.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## 빈 문자열 확인 {#text_isEmpty}

**비어 있습니다** 블록은 주어진 문자열가 비었는지(길이가 0인지) 확인합니다.

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## 문자열 찾기 {#text_indexOf}

이 블록들은 특정 문자열이 다른 문자열 안에 있는지 확인하고, 존재하는 경우 위치를 반환합니다.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## 단일 문자 추출 {#text_charAt}

문자열에서 특정 위치의 한 문자를 가져옵니다.  
첫 번째, 마지막, 임의 위치, N번째 등 다양한 옵션이 있습니다.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## 문자열 일부 추출 {#text_getSubstring}

**문자열에서...부분 문자열 가져오기** 블록을 사용하면 특정 범위의 문자열를 추출할 수 있습니다.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## 문자열 대소문자 변경 {#text_changeCase}

이 블록은 입력 문자열를 다음 형식 중 하나로 변환합니다:

- **대문자** (모든 문자 대문자로 변환)
- **소문자**
- **첫 글자만 대문자** (각 단어의 첫 글자만 대문자로 변환)

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper()
TEXT.lower()
TEXT.title()
```

## 공백 제거 {#text_trim}

다음 블록은 문자열에서 다음 위치의 공백을 제거합니다:
- 문자열의 앞쪽
- 문자열의 끝쪽
- 양쪽 모두

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()
TEXT.lstrip()
TEXT.rstrip()
```

## 문자열에서 특정 문자열 숫자 세기 {#text_count}

주어진 문자열에서 특정한 단어(부분 문자열)가 등장하는 횟수를 세어 반환합니다.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## 문자열에서 특정 문자 변경 {#text_replace}

문자열 내에서 특정 문자(부분 문자열)를 다른 문자로 일괄 변경합니다.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## 문자열 뒤집기 {#text_reverse}

문자열의 순서를 거꾸로 바꾼 새로운 문자열을 반환합니다.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## 문자열 출력 {#text_print}

**출력** 블록은 입력 값을 팝업 창에 표시합니다.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## 사용자 입력 받기 {#text_prompt_ext}

다음 블록은 사용자에게 입력을 요청하는 팝업 창을 생성하며, 입력된 값은 변수에 저장됩니다.  
텍스트 또는 숫자를 입력받을 수 있습니다.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
