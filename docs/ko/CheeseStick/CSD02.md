---
title: CSD-02 RGB LED
---

# CSD-02 RGB LED

## 인스턴스 선언

CSD-02 RGB LED(CSD02) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## RGB LED 시작하기 {#start}

RGB LED를 사용하기 시작합니다.  
이 블록을 추가하지 않으면, RGB LED가 활성화되지 않습니다.

<BlockImage module="CheeseStick/CSD02" id="start" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## 색 설정하기 {#set_color}

CSD02 의 LED 색을 지정한 색으로 설정합니다.  
색상 팔레트에서 색을 선택하면 **색 이름**(영문 문자열)으로 변환되어 호출됩니다. (R, G, B 숫자 값이 아니라 색 이름으로 코드가 생성됩니다.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| color | 색상 | 색상 팔레트 선택 → 색 이름(영문)으로 변환 | 색 이름: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## 색상 카테고리 블록으로 색 설정하기 {#set_color_with_block}

색상 카테고리 블록 (예: `[R, G, B]` 배열) 을 입력으로 받아 CSD02 의 LED 색을 설정합니다.

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (색상) | 색상 카테고리 블록 출력 또는 `[R, G, B]` 배열 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## RGB 만큼 색 바꾸기 {#change_by_rgb}

현재의 LED 색에 입력한 R, G, B 변화량을 더해 새로운 색을 설정합니다.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| r | 입력값 (필드) | 빨강 변화량 | -255 ~ 255 정수 | 0 |
| g | 입력값 (필드) | 초록 변화량 | -255 ~ 255 정수 | 0 |
| b | 입력값 (필드) | 파랑 변화량 | -255 ~ 255 정수 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## LED 끄기 {#turn_off}

RGB LED 색을 없앱니다.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
