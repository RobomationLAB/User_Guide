---
title: 햄스터
---

# 햄스터

## 인스턴스 선언

햄스터(Hamster) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
hamster = Hamster(0)
# 여러 인스턴스가 있는 경우
hamster_1 = Hamster(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |

<br>

## 바퀴 속도 설정하기 {#set_wheel_speed}

바퀴 속도를 결정합니다. 속도의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 바퀴 속도 | -100 ~ 100 정수, 0: 정지 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

---

## 시간 이동하기 {#move_time}

현재 바퀴 속도로 지정한 시간동안 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Hamster" id="move_time" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 시간 (초) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

---

## 바퀴 속도 변경하기 {#change_speed}

햄스터의 바퀴 속도를 변경합니다.  
현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다.  
새롭게 설정된 바퀴 속도의 범위는 -100 ~ 100으로 설정됩니다.

<BlockImage module="roboids/Hamster" id="change_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 변경할 속도 차 | -200 ~ 200 정수 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

---

## 정지하기 {#stop}

햄스터의 이동을 멈춥니다.  
햄스터의 양쪽 바퀴 속도가 모두 0으로 초기화됩니다.

<BlockImage module="roboids/Hamster" id="stop" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

---

## 말판 앞으로 한 칸 이동하기 {#grid_move}

말판 위에서 정해진 대로 한 칸씩 움직입니다.

<BlockImage module="roboids/Hamster" id="grid_move" />

### 매개변수

없음.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

---

## 말판에서 한번 돌기 {#grid_turn}

말판 위에서 정해진 방향으로 90도 회전합니다.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

---

## 센서로 선 따라가기 {#trace_mode}

햄스터가 바닥 센서를 이용하여 특정한 색의 선을 따라갑니다.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| floor | 드롭다운 옵션 | 따라갈 바닥 센서 | 왼쪽(left), 오른쪽(right), 가운데(center) | - |
| line | 드롭다운 옵션 | 선 색 | 검정(black), 흰색(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

---

## 교차로 이동 후 다음 교차로에서 멈추기 {#trace_until_grid}

햄스터가 교차로에서 지정한 방향으로 이동한 뒤, 다음 교차로를 만날 때까지 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 교차로 이동 방향 | 왼쪽(left), 오른쪽(right), 앞(forward), 유턴(uturn) | - |
| line | 드롭다운 옵션 | 선 색 | 검정(black), 흰색(white) | black |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

---

## 선 따라가기 속도 설정 {#set_trace_speed}

선 따라가기 속도를 설정합니다. 속도의 범위는 1 ~ 10 입니다.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 선 따라가기 속도 | 1 ~ 10 정수 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

---

## 선 따라가기 멈추기 {#stop_trace}

햄스터의 선 따라가기 기능을 종료합니다.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

---

## LED 색 설정하기 {#set_led_color}

LED 색을 설정합니다.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| color | 드롭다운 옵션 | 색상 | 끄기(off), 파란색(blue), 초록색(green), 청록색(cyan), 빨간색(red), 자홍색(magenta), 노란색(yellow), 흰색(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

---

## LED 끄기 {#turn_off}

LED 색을 없앱니다.

<BlockImage module="roboids/Hamster" id="turn_off" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

---

## 버저음 설정하기 {#sound_buzz}

지정된 주파수로 햄스터의 버저음을 설정합니다.  
소리낼 수 있는 주파수의 범위는 1.0hz ~ 6553.5hz 입니다.  
이 외의 값을 입력하면 버저음이 발생하지 않습니다.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 0 ~ 6553.5 실수 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

---

## 음계 연주하기 {#sound_note}

햄스터가 지정된 음계를 재생합니다.

<BlockImage module="roboids/Hamster" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#(C#), 레(D), 레#(D#), 미(E), 파(F), 파#(F#), 솔(G), 솔#(G#), 라(A), 라#(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

---

## 소리 끄기 {#sound_off}

햄스터의 소리를 끕니다.

<BlockImage module="roboids/Hamster" id="sound_off" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

---

## 바퀴 속도 값 {#wheel_speed}

특정 바퀴의 속도

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

---

## 근접 센서 값 {#proximity}

특정 근접 센서의 값

<BlockImage module="roboids/Hamster" id="proximity" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 센서 위치 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

---

## 바닥 센서 값 {#floor}

특정 바닥 센서의 값

<BlockImage module="roboids/Hamster" id="floor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 센서 위치 | 왼쪽(left), 오른쪽(right), 가운데(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

---

## 중력 가속도 값 {#acceleration}

특정 축의 중력 가속도 값

<BlockImage module="roboids/Hamster" id="acceleration" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

---

## 밝기 센서 값 {#light}

밝기 센서 값

<BlockImage module="roboids/Hamster" id="light" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

---

## 온도 센서 값 {#temperature}

온도 센서 값

<BlockImage module="roboids/Hamster" id="temperature" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

---

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/Hamster" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

---

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/Hamster" id="battery" />

### 매개변수

(없음)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

---

## 상태 변경 여부 {#state_change}

로봇의 상태가 변했는지 여부

<BlockImage module="roboids/Hamster" id="state_change" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 상태 종류 | 0 ~ 6 (아래 표 참조) | - |

| unit | 조건 |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

---

## 입출력 포트 입력 모드 설정하기 {#io_mode}

IO 포트의 입력 모드를 설정합니다.

<BlockImage module="roboids/Hamster" id="io_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| option | 드롭다운 옵션 | 입출력 모드 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

---

## 입출력 포트 출력값 설정하기 {#set_output}

지정한 IO 포트의 출력 값을 설정합니다.

<BlockImage module="roboids/Hamster" id="set_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| data | 입력값 (블록) | 출력값 | 0 ~ 180 정수 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

---

## 입출력 포트 출력값 변경하기 {#change_output}

지정한 IO 포트의 출력 값을 변경합니다.

<BlockImage module="roboids/Hamster" id="change_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| data | 입력값 (블록) | 변경할 출력값 차 | 정수 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

---

## 집게 열기 / 닫기 {#gripper}

햄스터의 집게를 열거나 닫습니다.  
unit 값에 따라 두 메서드 중 하나를 호출합니다.

<BlockImage module="roboids/Hamster" id="gripper" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 동작 | 닫기(close), 열기(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

---

## 슈터 각도 설정하기 {#shooter}

슈터 각도를 설정하여 제어합니다. 각도의 범위는 0 ~ 180 입니다.

<BlockImage module="roboids/Hamster" id="shooter" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 슈터 각도 | 0 ~ 180 정수 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

---

## 입출력 포트 입력 값 {#input}

햄스터의 입출력 포트 입력 값을 반환합니다.

<BlockImage module="roboids/Hamster" id="input" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
