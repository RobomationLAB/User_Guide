---
title: PID-26 환경 센서
---

# PID-26 환경 센서

## 인스턴스 선언

PID-26 환경 센서(PID26) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |

<br>

## 환경 센서 시작하기 {#start}

PID-26 환경 센서를 사용합니다.

<BlockImage module="CheeseStick/PID26" id="start" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

---

## 온도 {#temperature}

PID26 환경 센서로 측정한 온도 값을 반환합니다. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

---

## 습도 {#humidity}

PID26 환경 센서로 측정한 습도 값을 반환합니다.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

---

## 기압 {#pressure}

PID26 환경 센서로 측정한 기압 값을 반환합니다.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
