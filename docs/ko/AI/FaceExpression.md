---
title: 나이, 성별, 표정
---

# 나이, 성별, 표정

## 인스턴스 선언

나이, 성별, 표정(FaceExpression) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
face_expression = FaceExpression(0)
# 여러 인스턴스가 있는 경우
face_expression_1 = FaceExpression(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 카메라 장치 선택하기 {#device}

나이, 성별, 표정 인식을 위한 카메라를 설정합니다.

<BlockImage module="AI/FaceExpression" id="device" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 카메라 장치 이름 | 시스템 카메라 라벨 | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## 모델 로드하기 {#load_model}

학습된 나이, 성별, 표정 모델을 불러옵니다. '나이, 성별, 표정' 모듈의 기능들을 사용하기 위해서는 이 작업이 반드시 필요합니다.

<BlockImage module="AI/FaceExpression" id="load_model" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| wait | 체크박스 | 로드 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## 한 번 인식하기 {#detect_once}

현재 화면에 있는 얼굴을 분석하여 예측한 나이, 성별, 표정을 딱 한번 표시합니다.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## 연속 인식 시작 / 중지 {#detect_continuous}

현재 화면에 있는 얼굴을 계속해서 분석하여 예측한 나이, 성별, 표정을 화면 상에 표시합니다.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 동작 | 시작(start), 중지(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## 인식 화면 표시하기 {#display}

카메라 화면에 나이, 성별, 표정 인식 결과를 표시할지 말지를 결정합니다.

<BlockImage module="AI/FaceExpression" id="display" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| on | 드롭다운 옵션 | 표시 ON / OFF | 표시(on=True), 숨기기(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## 나이 {#age}

나이

<BlockImage module="AI/FaceExpression" id="age" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## 성별 {#gender}

성별

<BlockImage module="AI/FaceExpression" id="gender" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## 표정 {#expression}

표정

<BlockImage module="AI/FaceExpression" id="expression" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## 성별 감지 여부 {#gender_detected}

성별 인식 여부

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## 특정 성별인가? {#gender_check}

인식된 성별이 지정한 값과 일치하는지 여부를 **참(True) / 거짓(False)** 으로 반환합니다.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 성별 | 남성(male), 여성(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## 성별 신뢰도 {#gender_confidence}

선택한 성별일 확률(신뢰도)

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 성별 | 남성(male), 여성(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## 표정 감지 여부 {#expression_detected}

표정 인식 여부

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## 특정 표정인가? {#expression_check}

인식된 표정이 지정한 값과 일치하는지 여부를 **참(True) / 거짓(False)** 으로 반환합니다.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 표정 | 화남(angry), 역겨움(disgusted), 두려움(fearful), 행복(happy), 무표정(neutral), 슬픔(sad), 놀람(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## 표정 신뢰도 {#expression_confidence}

선택한 표정일 확률(신뢰도)

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 표정 | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## 모델 상태 {#model_state}

나이, 성별, 표정 모델 로딩 상태를 반환합니다.  
아직 불러오지 않았으면 0, 불러오는 중이면 1, 불러오기를 완료했으면 2를 반환합니다.

<BlockImage module="AI/FaceExpression" id="model_state" />

### 매개변수

(없음)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
