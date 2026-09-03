---
title: 논리
---

# 논리

논리 블록은 일반적으로 **조건문** 과 [**반복 블록**](Loops)을 제어하는 데 사용됩니다.

<br>

## 조건문 (만약 ~ 라면) {#controls_if}

변수 **x**의 값이 100보다 크면 조건은 **참**이 되어 "큰 수입니다."라는 텍스트가 출력됩니다.
만약 **x**의 값이 100보다 크지 않으면 조건은 **거짓**이 되어 "크지 않은 수입니다."가 출력됩니다.

<BlockImage module="common/logic" id="controls_if" />

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## 비교 {#logic_compare}

여섯 가지 비교 연산자가 있습니다.
각 연산자는 두 개의 입력(보통 숫자)을 받아, 입력값들이 서로 어떻게 비교되는지에 따라 참 또는 거짓을 반환합니다.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## 논리 연산 (그리고 / 또는) {#logic_operation}

**그리고** 블록은 두 입력이 모두 참일 때만 참을 반환합니다.
**또는** 블록은 두 입력 중 하나라도 참이면 참을 반환합니다.

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## 아닙니다 {#logic_negate}

**아닙니다** 블록은 불리언 입력을 그 반대로 변환합니다.

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## 참 / 거짓 값 {#logic_boolean}

**참** 또는 **거짓**를 지정하는 드롭다운이 있는 단일 블록을 사용하여 불리언 값을 얻을 수 있습니다.

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## 삼항 연산자 {#logic_ternary}

삼항 블록은 간단한 조건문 블록처럼 동작합니다.
세 개의 입력을 받습니다.
첫 번째 입력은 테스트할 불리언 조건이고, 두 번째 입력은 조건이 **참**일 경우 반환할 값입니다.  
세 번째 입력은 조건이 **거짓**일 경우 반환할 값입니다.

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
