---
title: 터틀
---

# 터틀

## 인스턴스 선언

터틀(Turtle) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
turtle = Turtle(0)
# 여러 인스턴스가 있는 경우
turtle_1 = Turtle(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 바퀴 속도 설정하기 {#set_wheel_speed}

바퀴 속도를 결정합니다. 속도의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 바퀴 속도 | -100 ~ 100 정수, 0: 정지 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## 거리 이동하기 {#move_distance}

이동할 거리를 설정합니다.  
바퀴 속도를 설정하지 않은 경우, 이동하지 않습니다.  
거리 값이 0일 경우, 현재 바퀴 속도에 따라 계속 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Turtle" id="move_distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 거리 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 거리 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## 시간 이동하기 {#move_time}

현재 바퀴 속도로 지정한 시간동안 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Turtle" id="move_time" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 시간 (초) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## 제자리 돌기 {#turn_degree}

제자리에서 회전할 방향과 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |
| data | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## 바퀴 속도 변경하기 {#change_speed}

터틀의 바퀴 속도를 변경합니다.  
현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다.

<BlockImage module="roboids/Turtle" id="change_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 변경할 속도 차 | -200 ~ 200 정수 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## 정지하기 {#stop}

터틀의 이동을 멈춥니다.

<BlockImage module="roboids/Turtle" id="stop" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## 바퀴가 움직이는 중인가? {#wheel_moving}

바퀴가 움직이는 중이면 true, 멈춰있으면 false를 반환합니다.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## 바퀴 기준 회전하기 {#pivot}

회전할 기준과 방향, 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Turtle" id="pivot" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| base | 드롭다운 옵션 | 회전 기준 바퀴 | 왼쪽 바퀴(left_wheel), 오른쪽 바퀴(right_wheel) | - |
| direction | 드롭다운 옵션 | 회전 방향 | 앞(forward), 뒤(backward) | - |
| data | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## 원 그리며 돌기 {#pivot_circle}

펜을 이용해 원을 그릴 때, 회전할 방향, 반지름, 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽 앞(left_forward), 왼쪽 뒤(left_backward), 오른쪽 앞(right_forward), 오른쪽 뒤(right_backward) | - |
| degree | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| radius | 입력값 (블록) | 회전 반지름 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 반지름 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## 센서로 선 따라가기 {#trace_line}

바닥의 컬러 센서를 이용해, 특정 색의 선을 따라 이동합니다.

<BlockImage module="roboids/Turtle" id="trace_line" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| line | 드롭다운 옵션 | 따라갈 선 색 | 검정(black), 빨강(red), 초록(green), 파랑(blue), 모든 색(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## 특정 색까지 선 따라 이동하기 {#trace_line_until_color}

바닥의 컬러 센서를 이용해, B 색을 만날 때까지 A 색 선을 따라 이동합니다.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| line | 드롭다운 옵션 | 따라갈 선 색 | 검정(black), 빨강(red), 초록(green), 파랑(blue), 모든 색(any) | - |
| color | 드롭다운 옵션 | 멈출 색 | 검정(black), 빨강(red), 초록(green), 청록(cyan), 파랑(blue), 자홍(magenta), 모든 색(any) | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## 교차로 이동 후 다음 교차로에서 멈추기 {#intersection}

터틀이 교차로에서 지정한 방향으로 이동한 뒤, 다음 교차로를 만날 때까지 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.  

<BlockImage module="roboids/Turtle" id="intersection" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 교차로 이동 방향 | 앞으로(forward), 왼쪽(left), 오른쪽(right), 유턴(uturn) | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## 선 따라가기 속도 설정 {#set_trace_speed}

선 따라가기 속도를 설정합니다. 속도의 범위는 1 ~ 10 입니다.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 선 따라가기 속도 | 1 ~ 10 정수 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## 선 따라가기 방향 변화량 설정 {#set_trace_gain}

선 따라가기 방향 변화량을 설정합니다. 변화량의 범위는 1 ~ 10 입니다.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 방향 변화량 | 1 ~ 10 정수 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## 선 따라가기 멈추기 {#stop_trace}

터틀의 선 따라가기 기능을 종료합니다.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## LED 색 설정하기 {#set_led_color}

터틀의 머리 LED 색을 설정합니다.  
색상 팔레트에서 색을 선택하면 **색 이름**(영문 문자열)으로 변환되어 호출됩니다. (R, G, B 숫자 값이 아니라 색 이름으로 코드가 생성됩니다.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| color | 색상 | 색상 팔레트 선택 → 색 이름(영문)으로 변환 | 색 이름: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## 색상 카테고리 블록으로 LED 색 설정하기 {#set_led_color_with_block}

색상 카테고리 블록 출력 (`[R, G, B]`) 을 입력으로 받아 머리 LED 색을 설정합니다.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (색상) | 색상 카테고리 블록 또는 `[R, G, B]` 배열 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## RGB 만큼 LED 색 변경하기 {#change_by_rgb}

현재 머리 LED 색에 입력한 R, G, B 변화량을 더해 새로운 색을 설정합니다.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| r | 입력값 (필드) | 빨강 변화량 | -255 ~ 255 정수 | 0 |
| g | 입력값 (필드) | 초록 변화량 | -255 ~ 255 정수 | 0 |
| b | 입력값 (필드) | 파랑 변화량 | -255 ~ 255 정수 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## LED 끄기 {#turn_off}

머리 LED 색을 없앱니다.

<BlockImage module="roboids/Turtle" id="turn_off" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## 버저음 설정하기 {#sound_buzz}

지정된 주파수로 터틀의 버저음을 설정합니다.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 0 ~ 6553.5 실수 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## 음계 연주하기 {#sound_note}

터틀이 지정된 음계를 재생합니다.

<BlockImage module="roboids/Turtle" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#(C#), 레(D), 레#(D#), 미(E), 파(F), 파#(F#), 솔(G), 솔#(G#), 라(A), 라#(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## 소리 재생하기 {#sound_clip}

터틀이 특정 사운드 클립을 재생합니다.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## 소리 끄기 {#sound_off}

터틀의 소리를 끕니다.

<BlockImage module="roboids/Turtle" id="sound_off" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## 소리가 재생 중인가? {#sound_playing}

소리가 재생 중이면 true, 재생 중이 아니면 false를 반환합니다.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## 바퀴 속도 값 {#wheel_speed}

특정 바퀴의 속도

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## 바닥 컬러 센서 값 {#floor}

바닥의 컬러 센서 값

<BlockImage module="roboids/Turtle" id="floor" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## 카드 색깔 이름 값 {#card_color}

바닥의 컬러 센서를 통해 읽은 카드의 색깔의 번호

<BlockImage module="roboids/Turtle" id="card_color" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## 카드 색깔 패턴 값 {#card_pattern}

바닥의 컬러 센서를 통해 읽은 카드 색깔의 패턴

<BlockImage module="roboids/Turtle" id="card_pattern" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## 중력 가속도 값 {#acceleration}

특정 축의 중력 가속도 값

<BlockImage module="roboids/Turtle" id="acceleration" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## 온도 센서 값 {#temperature}

온도 센서 값

<BlockImage module="roboids/Turtle" id="temperature" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/Turtle" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/Turtle" id="battery" />

### 매개변수

(없음)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## 특정 색에 닿았는가? {#color_read}

지정한 특정 색에 닿았는지 터틀 컬러 센서를 통해 측정하여 **참(True) / 거짓(False)** 으로 반환합니다.

<BlockImage module="roboids/Turtle" id="color_read" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| color | 드롭다운 옵션 | 색깔 이름 | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## 카드 색깔 패턴이 ~ 인가? {#pattern_read}

컬러센서에 인식된 카드 색깔의 패턴 일치 여부를 **참(True) / 거짓(False)** 으로 반환합니다.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| pattern | 드롭다운 옵션 | 카드 패턴 이름 | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## 등 버튼 상태 {#button}

등에 있는 버튼이 눌려있거나 클릭했는지 여부

<BlockImage module="roboids/Turtle" id="button" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| event | 드롭다운 옵션 | 버튼 상태 종류 | 눌려있는가(pressed), 클릭했는가(click), 길게 클릭했는가(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## 상태 변경 여부 {#state_change}

로봇의 상태가 변했는지 여부

<BlockImage module="roboids/Turtle" id="state_change" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 상태 종류 | 0 ~ 5 (아래 표 참조) | - |

| unit | 조건 |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
