---
title: 삐오봇
---

# 삐오봇

## 인스턴스 선언

삐오봇(Pio) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
pio = Pio(0)
# 여러 인스턴스가 있는 경우
pio_1 = Pio(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 바퀴 속도 설정하기 {#set_wheel_speed}

바퀴 속도를 설정합니다. 바퀴 속도의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 바퀴 속도 | -100 ~ 100 정수, 0: 정지 | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## 거리 이동하기 {#move_distance}

현재 바퀴 속도로 지정한 거리만큼 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
거리 값이 0일 경우, 현재 바퀴 속도에 따라 계속 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Pio" id="move_distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 거리 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 거리 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## 시간 이동하기 {#move_time}

현재 바퀴 속도로 지정한 시간동안 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Pio" id="move_time" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 시간 (초) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## 제자리 돌기 {#turn_degree}

제자리에서 회전할 방향과 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Pio" id="turn_degree" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |
| data | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## 바퀴 속도 변경하기 {#change_speed}

삐오봇의 바퀴 속도를 변경합니다.  
현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다.  
새롭게 설정된 바퀴 속도의 범위는 -100 ~ 100으로 설정됩니다.

<BlockImage module="roboids/Pio" id="change_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 변경할 속도 차 | -200 ~ 200 정수 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## 터보 모드 켜기 / 끄기 {#turbo}

삐오봇의 터보 모드를 켜거나 끕니다.

<BlockImage module="roboids/Pio" id="turbo" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 터보 모드 ON / OFF | 켜기(on=True), 끄기(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## 정지하기 {#stop}

삐오봇의 이동을 멈춥니다.  
삐오봇의 양쪽 바퀴 속도가 모두 0으로 초기화됩니다.

<BlockImage module="roboids/Pio" id="stop" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.stop()
```

## 바퀴가 움직이는 중인가? {#wheel_moving}

바퀴가 움직이는 중이면 true, 멈춰있으면 false를 반환한다.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## 말판 한 칸 이동하기 {#grid_move}

말판 위에서 정해진 대로 한 칸씩 움직입니다.

<BlockImage module="roboids/Pio" id="grid_move" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 이동 방향 | 앞으로(forward), 뒤로(backward), 왼쪽으로(left), 오른쪽으로(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## 말판에서 한번 돌기 {#grid_turn}

말판 위 삐오봇이 입력받은 방향으로 90도 회전합니다. 항상 완료까지 대기합니다 (내부적으로 wait=True 고정).

<BlockImage module="roboids/Pio" id="grid_turn" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## 목 회전속도 설정하기 {#set_neck_speed}

목의 회전 속도를 설정합니다. 목 속도의 범위는 1 ~ 6 입니다.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 목 회전 속도 | 1 ~ 6 정수 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## 목 각도 설정하기 {#set_neck_angle}

목을 회전하여 도착할 각도를 설정합니다. 목 각도의 범위는 -45 ~ 45 입니다.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 목 각도 (도) | -45 ~ 45 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## 목이 움직이는 중인가? {#neck_moving}

목이 움직이는 중이면 true, 멈춰있으면 false를 반환한다.

<BlockImage module="roboids/Pio" id="neck_moving" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## 눈 LED 색상 설정하기 {#set_eye_color}

삐오봇의 눈 LED 색을 설정합니다.  
왼쪽, 오른쪽 또는 양쪽의 눈 LED 색을 변경할 수 있습니다.  
색상 프리셋에서 색을 선택하면 **색 이름**(영문 문자열)으로 변환되어 호출됩니다. (R, G, B 숫자 값이 아니라 색 이름으로 코드가 생성됩니다.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 눈 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| color | 드롭다운 옵션 | 색상 프리셋 → 색 이름(영문)으로 변환 | 검정색(black), 빨간색(red), 노란색(yellow), 초록색(green), 청록색(cyan), 파란색(blue), 자홍색(magenta), 흰색(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## 눈 LED 색 색상 카테고리 블록으로 설정하기 {#set_eye_color_with_block}

색상 카테고리에 있는 블록들로 삐오봇의 눈 LED 색을 설정합니다.  
왼쪽, 오른쪽 또는 양쪽의 눈 LED 색을 변경할 수 있습니다.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 눈 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| data | 입력값 (색상) | [R, G, B] 배열 | 색상 카테고리 블록 또는 `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## 눈 LED 색 지정 RGB만큼 변경하기 {#change_by_rgb}

지정한 R, G, B 값만큼 삐오봇의 눈 LED 색을 변경합니다.  
왼쪽, 오른쪽 또는 양쪽의 색을 설정할 수 있습니다.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 눈 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| r | 입력값 (필드) | 빨강 변화량 | -255 ~ 255 정수 | 0 |
| g | 입력값 (필드) | 초록 변화량 | -255 ~ 255 정수 | 0 |
| b | 입력값 (필드) | 파랑 변화량 | -255 ~ 255 정수 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## 눈 LED 패턴 설정하기 {#set_eye_pattern}

눈의 패턴을 설정하고, 패턴이 시작될 때 각 눈의 색상을 지정합니다.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| pattern | 드롭다운 옵션 | 패턴 종류 | 끄기(reset), 깜빡이기(blink), 디밍(dimming), 무지개(rainbow) | - |
| left | 드롭다운 옵션 | 왼쪽 눈 색상 | 기본(black), 빨간색(red), 노란색(yellow), 초록색(green), 청록색(cyan), 파란색(blue), 자홍색(magenta), 흰색(white) | white |
| right | 드롭다운 옵션 | 오른쪽 눈 색상 | (left 와 동일) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## 눈 LED 끄기 {#turn_off}

눈의 색을 없앱니다.

<BlockImage module="roboids/Pio" id="turn_off" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 눈 | 왼쪽(left), 오른쪽(right), 양쪽(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## 버저음 설정하기 {#sound_buzz}

지정된 주파수로 삐오봇의 버저음을 설정합니다.  
소리낼 수 있는 주파수의 범위는 27.5hz ~ 6553.5hz 입니다.  
이 외의 값을 입력하면 버저음이 발생하지 않습니다.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 27.5 ~ 6553.5 실수 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## 음계 연주하기 {#sound_note}

삐오봇이 지정된 음계를 재생합니다.

<BlockImage module="roboids/Pio" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#/레♭(C#), 레(D), 레#/미♭(D#), 미(E), 파(F), 파#/솔♭(F#), 솔(G), 솔#/라♭(G#), 라(A), 라#/시♭(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## 소리 재생하기 {#sound_clip}

삐오봇이 특정 사운드 클립을 재생합니다.  
기다리기를 체크하면, 재생이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Pio" id="sound_clip" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## 멜로디 재생하기 {#sound_melody}

삐오봇이 특정 멜로디를 재생합니다.  
기다리기를 체크하면, 재생이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Pio" id="sound_melody" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| melody | 드롭다운 옵션 | 멜로디 이름 | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## 소리 끄기 {#sound_off}

삐오봇의 소리를 끕니다.

<BlockImage module="roboids/Pio" id="sound_off" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## 소리가 재생 중인가? {#sound_playing}

소리가 재생 중이면 true, 재생 중이 아니면 false를 반환합니다.

<BlockImage module="roboids/Pio" id="sound_playing" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## 바퀴 속도 값 {#wheel_speed}

특정 바퀴의 속도

<BlockImage module="roboids/Pio" id="wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/Pio" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/Pio" id="battery" />

### 매개변수

(없음)

### Python
```python
pio = Pio(0)

pio.battery()
```

## 키패드 버튼 {#keypad}

사용자가 마지막으로 누른 키패드 버튼을 감지합니다.

<BlockImage module="roboids/Pio" id="keypad" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| button | 드롭다운 옵션 | 감지할 버튼 | 실행하기(play), 앞으로 가기(forward), 뒤로 가기(backward), 왼쪽으로 가기(left), 오른쪽으로 가기(right), 행동하기(action), 반복하기(repeat), 삭제하기(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
