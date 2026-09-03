---
title: 햄스터 S
---

# 햄스터 S

## 인스턴스 선언

햄스터 S(HamsterS) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
hamster_s = HamsterS(0)
# 여러 인스턴스가 있는 경우
hamster_s_1 = HamsterS(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |

<br>

## 바퀴 속도 설정하기 {#set_wheel_speed}

바퀴 속도를 결정합니다. 속도의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 바퀴 속도 | -100 ~ 100 정수, 0: 정지 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

---

## 거리 이동하기 {#move_distance}

현재 바퀴 속도로 지정한 거리만큼 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
거리 값이 0일 경우, 현재 바퀴 속도에 따라 계속 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 거리 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 거리 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

---

## 시간 이동하기 {#move_time}

현재 바퀴 속도로 지정한 시간동안 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="move_time" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 시간 (초) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

---

## 제자리 돌기 {#turn_degree}

제자리에서 회전할 방향과 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |
| data | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

---

## 바퀴 속도 변경하기 {#change_speed}

햄스터 S의 바퀴 속도를 변경합니다.  
현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 변경할 속도 차 | -200 ~ 200 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

---

## 정지하기 {#stop}

햄스터 S의 이동을 멈춥니다.

<BlockImage module="roboids/HamsterS" id="stop" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

---

## 바퀴가 움직이는 중인가? {#wheel_moving}

바퀴가 움직이는 중이면 true, 멈춰있으면 false를 반환합니다.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

---

## 말판 앞으로 한 칸 이동하기 {#grid_move}

말판 위에서 정해진 대로 한 칸씩 움직입니다.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### 매개변수

없음.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

---

## 말판에서 한번 돌기 {#grid_turn}

말판 위에서 정해진 방향으로 90도 회전합니다.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

---

## 펜 홀더 기준 회전하기 {#pivot}

펜 홀더를 사용할 때, 회전할 기준과 방향, 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="pivot" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| base | 드롭다운 옵션 | 회전 기준 | 왼쪽 펜(left_pen), 오른쪽 펜(right_pen), 왼쪽 바퀴(left_wheel), 오른쪽 바퀴(right_wheel) | - |
| direction | 드롭다운 옵션 | 회전 방향 | 앞(forward), 뒤(backward) | - |
| degree | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

---

## 펜 홀더 기준 원 그리며 돌기 {#pivot_circle}

펜 홀더를 사용해 원을 그릴 때, 회전할 기준과 방향, 반지름, 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| base | 드롭다운 옵션 | 회전 기준 | 왼쪽 펜(left_pen), 오른쪽 펜(right_pen) | - |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽 앞(left_forward), 왼쪽 뒤(left_backward), 오른쪽 앞(right_forward), 오른쪽 뒤(right_backward) | - |
| degree | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| radius | 입력값 (블록) | 회전 반지름 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 반지름 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

---

## 센서로 선 따라가기 {#trace_mode}

햄스터 S가 바닥 센서를 이용하여 특정한 색의 선을 따라갑니다.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| floor | 드롭다운 옵션 | 따라갈 바닥 센서 | 왼쪽(left), 오른쪽(right), 가운데(center) | - |
| line | 드롭다운 옵션 | 선 색 | 검정(black), 흰색(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

---

## 교차로 이동 후 다음 교차로에서 멈추기 {#trace_until_grid}

햄스터 S가 교차로에서 지정한 방향으로 이동한 뒤, 다음 교차로를 만날 때까지 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 교차로 이동 방향 | 좌회전(left), 우회전(right), 전진(forward), 유턴(uturn) | - |
| line | 드롭다운 옵션 | 선 색 | 검정(black), 흰색(white) | black |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

---

## 선 따라가기 속도 설정 {#set_trace_speed}

선 따라가기 속도를 설정합니다. 속도의 범위는 1 ~ 10 입니다.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 선 따라가기 속도 | 1 ~ 10 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

---

## 선 따라가기 방향 변화량 설정 {#set_trace_gain}

선 따라가기 방향 변화량을 설정합니다. 변화량의 범위는 1 ~ 10 입니다.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 방향 변화량 | 1 ~ 10 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

---

## 선 따라가기 멈추기 {#stop_trace}

햄스터 S의 선 따라가기 기능을 종료합니다.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

---

## LED 색 설정하기 {#set_led_color}

햄스터 S의 LED 색을 설정합니다.  
색상 팔레트에서 색을 선택하면 **색 이름**(영문 문자열)으로 변환되어 호출됩니다. (R, G, B 숫자 값이 아니라 색 이름으로 코드가 생성됩니다.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| color | 색상 | 색상 팔레트 선택 → 색 이름(영문)으로 변환 | 색 이름: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

---

## 색상 카테고리 블록으로 LED 색 설정하기 {#set_led_color_with_block}

색상 카테고리 블록 (`[R, G, B]`) 을 입력으로 받아 LED 색을 설정합니다.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| data | 입력값 (색상) | 색상 카테고리 블록 또는 `[R, G, B]` 배열 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

---

## RGB 만큼 LED 색 변경하기 {#change_by_rgb}

지정한 R, G, B 값만큼 햄스터 S의 LED 색을 변경합니다.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| r | 입력값 (필드) | 빨강 변화량 | -255 ~ 255 정수 | 0 |
| g | 입력값 (필드) | 초록 변화량 | -255 ~ 255 정수 | 0 |
| b | 입력값 (필드) | 파랑 변화량 | -255 ~ 255 정수 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

---

## LED 끄기 {#turn_off}

LED 색을 없앱니다.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 LED | 왼쪽(left), 오른쪽(right), 양쪽(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

---

## 버저음 설정하기 {#sound_buzz}

지정된 주파수로 햄스터 S의 버저음을 설정합니다.  
소리 낼 수 있는 주파수의 범위는 122.1hz ~ 4186.0hz 입니다.  
이외의 값을 입력하면 버저음이 발생하지 않습니다.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 122.1 ~ 4186.0 실수 (그 외 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

---

## 음계 연주하기 {#sound_note}

햄스터 S가 지정된 음계를 재생합니다.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#(C#), 레(D), 레#(D#), 미(E), 파(F), 파#(F#), 솔(G), 솔#(G#), 라(A), 라#(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

---

## 소리 재생하기 {#sound_clip}

햄스터 S가 특정 사운드 클립을 재생합니다.  
기다리기를 체크하면, 재생이 완료될 때까지 기다립니다.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

---

## 소리 끄기 {#sound_off}

햄스터 S의 소리를 끕니다.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

---

## 소리가 재생 중인가? {#sound_playing}

소리가 재생 중이면 true, 재생 중이 아니면 false를 반환합니다.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

---

## 바퀴 속도 값 {#wheel_speed}

특정 바퀴의 속도

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

---

## 근접 센서 값 {#proximity}

특정 근접 센서의 값

<BlockImage module="roboids/HamsterS" id="proximity" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 센서 위치 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

---

## 바닥 센서 값 {#floor}

특정 바닥 센서의 값

<BlockImage module="roboids/HamsterS" id="floor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 센서 위치 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

---

## 중력 가속도 값 {#acceleration}

특정 축의 중력 가속도 값

<BlockImage module="roboids/HamsterS" id="acceleration" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

---

## 밝기 센서 값 {#light}

밝기 센서 값

<BlockImage module="roboids/HamsterS" id="light" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

---

## 온도 센서 값 {#temperature}

온도 센서 값

<BlockImage module="roboids/HamsterS" id="temperature" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

---

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

---

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/HamsterS" id="battery" />

### 매개변수

(없음)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

---

## 상태 변경 여부 {#state_change}

로봇의 상태가 변했는지 여부

<BlockImage module="roboids/HamsterS" id="state_change" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 상태 종류 | 0 ~ 7 (아래 표 참조) | - |

| unit | 의미 | Python |
|------|------|--------|
| 0 | 앞으로 기울임 | `acceleration('x') > 5000` |
| 1 | 뒤로 기울임 | `acceleration('x') < -5000` |
| 2 | 왼쪽으로 기울임 | `acceleration('y') > 5000` |
| 3 | 오른쪽으로 기울임 | `acceleration('y') < -5000` |
| 4 | 거꾸로 뒤집힘 | `acceleration('z') > 0` |
| 5 | 뒤집어지지 않음 | `acceleration('z') < -3000` |
| 6 | 장애물/손 감지 | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | 두드림 | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

---

## 입출력 포트 입력 모드 설정하기 {#io_mode}

IO 포트의 입력 모드를 설정합니다.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| option | 드롭다운 옵션 | 입출력 모드 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

---

## 입출력 포트 출력값 설정하기 {#set_output}

지정한 IO 포트의 출력 값을 설정합니다.

<BlockImage module="roboids/HamsterS" id="set_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| data | 입력값 (블록) | 출력값 | 0 ~ 180 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

---

## 입출력 포트 출력값 변경하기 {#change_output}

지정한 IO 포트의 출력 값을 변경합니다.

<BlockImage module="roboids/HamsterS" id="change_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b, 양쪽(both) | - |
| data | 입력값 (블록) | 변경할 출력값 차 | 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

---

## 집게 열기 / 닫기 {#gripper}

햄스터 S의 집게를 열거나 닫습니다.  
unit 값에 따라 두 메서드 중 하나를 호출합니다.

<BlockImage module="roboids/HamsterS" id="gripper" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 동작 | 열기(open), 닫기(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

---

## 슈터 각도 설정하기 {#shooter}

슈터 각도를 설정하여 제어합니다. 각도의 범위는 0 ~ 180 입니다.

<BlockImage module="roboids/HamsterS" id="shooter" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 슈터 각도 | 0 ~ 180 정수 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

---

## 입출력 포트 입력 값 {#input}

햄스터 S의 입출력 포트 입력 값을 반환합니다.

<BlockImage module="roboids/HamsterS" id="input" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입출력 포트 | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
