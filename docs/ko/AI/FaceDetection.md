---
title: 얼굴 찾기
---

# 얼굴 찾기

## 인스턴스 선언

얼굴 찾기(FaceDetection) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
face_detection = FaceDetection(0)
# 여러 인스턴스가 있는 경우
face_detection_1 = FaceDetection(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 카메라 장치 선택하기 {#device}

얼굴 찾기를 위한 카메라를 설정합니다.

<BlockImage module="AI/FaceDetection" id="device" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 카메라 장치 이름 | 시스템 카메라 라벨 | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## 모델 로드하기 {#load_model}

학습된 얼굴 모델을 불러옵니다. '얼굴 찾기' 모듈의 기능들을 사용하기 위해서는 이 작업이 반드시 필요합니다.

<BlockImage module="AI/FaceDetection" id="load_model" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| wait | 체크박스 | 로드 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## 한 번 인식하기 {#detect_once}

현재 화면에 있는 얼굴을 찾아 딱 한번 표시합니다.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### 매개변수

(없음)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## 연속 인식 시작 / 중지 {#detect_continuous}

현재 화면에 있는 얼굴을 계속해서 따라가며 화면 상에 표시합니다.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 동작 | 시작(start), 중지(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## 인식 화면 표시하기 {#display}

카메라 화면에 얼굴 찾기 결과를 표시할지 말지를 결정합니다.

<BlockImage module="AI/FaceDetection" id="display" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| on | 드롭다운 옵션 | 표시 ON / OFF | 표시(on=True), 숨기기(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## 얼굴 부위 위치 {#face_data}

얼굴 또는 얼굴 부위의 위치 좌표를 반환합니다.

<BlockImage module="AI/FaceDetection" id="face_data" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 얼굴 부위 | 얼굴(face), 왼눈(left eye), 오른눈(right eye), 왼귀(left ear), 오른귀(right ear), 코(nose), 입(mouth) | - |
| pos | 드롭다운 옵션 | 좌표 종류 | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## 얼굴 사각형 정보 {#face_square}

얼굴 영역 사각형의 위치/크기 값을 반환합니다.

<BlockImage module="AI/FaceDetection" id="face_square" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| pos | 드롭다운 옵션 | 사각형 정보 | 최소 x(min_x), 최대 x(max_x), 최소 y(min_y), 최대 y(max_y), 폭(width), 높이(height), 넓이(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## 두 부위 사이 거리 {#distance}

얼굴의 두 부위 사이 거리를 반환합니다.

<BlockImage module="AI/FaceDetection" id="distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit1 | 드롭다운 옵션 | 첫 번째 부위 | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | 드롭다운 옵션 | 두 번째 부위 | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | 드롭다운 옵션 | 거리 종류 | 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # 거리
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # 가로 거리
face_detection.get_distance('nose', 'mouth', 'vertical')  # 세로 거리
```

## 모델 상태 {#model_state}

얼굴 모델 로딩 상태를 반환합니다.  
아직 불러오지 않았으면 0, 불러오는 중이면 1, 불러오기를 완료했으면 2를 반환합니다.

<BlockImage module="AI/FaceDetection" id="model_state" />

### 매개변수

(없음)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## 얼굴 감지 여부 {#detected}

얼굴을 찾았는지 여부

<BlockImage module="AI/FaceDetection" id="detected" />

### 매개변수

(없음)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
