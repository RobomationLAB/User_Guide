---
title: 사물 찾기
---

# 사물 찾기

## 인스턴스 선언

사물 찾기(ObjectDetection) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
object_detection = ObjectDetection(0)
# 여러 인스턴스가 있는 경우
object_detection_1 = ObjectDetection(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |

<br>

## 카메라 장치 선택하기 {#device}

사물 찾기를 위한 카메라를 설정합니다.

<BlockImage module="AI/ObjectDetection" id="device" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 카메라 장치 이름 | 시스템 카메라 라벨 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

---

## 모델 로드하기 {#load_model}

학습된 사물 모델을 불러옵니다. '사물 찾기' 모듈의 기능들을 사용하기 위해서는 이 작업이 반드시 필요합니다.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| wait | 체크박스 | 로드 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

---

## 최대 사물 수 설정하기 {#max_objects}

최대로 찾을 수 있는 사물의 개수를 설정합니다. 사물 개수의 범위는 0 ~ 10 입니다.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 최대 사물 수 | 0 ~ 10 정수 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

---

## 신뢰도 임계값 설정하기 {#confidence_threshold}

사물 찾기의 최소 확률(신뢰도)를 설정합니다. 확률(신뢰도)가 이 이상인 경우에만 화면에 표시됩니다. 확률(신뢰도)의 범위는 0 ~ 1 입니다.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 신뢰도 임계값 | 0 ~ 1 실수 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

---

## 한 번 인식하기 {#detect_once}

현재 화면에 있는 사물을 찾아 딱 한번 표시합니다.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### 매개변수

(없음)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

---

## 연속 인식 시작 / 중지 {#detect_continuous}

현재 화면에 있는 사물들을 계속해서 따라가며 화면 상에 표시합니다.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 동작 | 시작(start), 중지(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

---

## 인식 화면 표시하기 {#display}

카메라 화면에 사물 찾기 결과를 표시할지 말지를 결정합니다.

<BlockImage module="AI/ObjectDetection" id="display" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| on | 드롭다운 옵션 | 표시 ON / OFF | 표시(on=True), 숨기기(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

---

## 사물 위치 정보 {#object_data}

지정한 사물의 위치/크기 값을 반환합니다.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 사물 이름 | 사물 클래스 80개 (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` 등) | - |
| pos | 드롭다운 옵션 | 좌표 | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

---

## 사물 사각형 정보 {#object_square}

지정한 사물 영역 사각형의 위치/크기 값을 반환합니다.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 사물 이름 | 사물 클래스 80개 | - |
| pos | 드롭다운 옵션 | 사각형 정보 | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

---

## 두 사물 사이 거리 {#object_distance}

두 사물 클래스 사이의 거리를 반환합니다.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit1 | 드롭다운 옵션 | 첫 번째 사물 이름 | 사물 클래스 80개 | - |
| unit2 | 드롭다운 옵션 | 두 번째 사물 이름 | 사물 클래스 80개 | - |
| type | 드롭다운 옵션 | 거리 종류 | 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # 거리
object_detection.get_distance('person', 'car', 'horizontal')  # 가로 거리
```

---

## 사물 신뢰도 {#object_confidence}

선택한 사물이 맞을 확률(신뢰도)

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 사물 이름 | 사물 클래스 80개 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

---

## 모델 상태 {#model_state}

사물 모델 로딩 상태를 반환합니다.  
아직 불러오지 않았으면 0, 불러오는 중이면 1, 불러오기를 완료했으면 2를 반환합니다.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### 매개변수

(없음)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

---

## 사물 감지 여부 {#detected}

사물을 찾았는지 여부

<BlockImage module="AI/ObjectDetection" id="detected" />

### 매개변수

(없음)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

---

## 특정 사물이 감지되었는가? {#object_detected}

선택한 사물을 찾았는지 여부

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 사물 이름 | 사물 클래스 80개 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
