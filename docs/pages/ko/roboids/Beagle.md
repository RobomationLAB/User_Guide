---
title: 비글
---

# 비글

## 인스턴스 선언 {#instance}

비글(Beagle) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
beagle = Beagle(0)
# 여러 인스턴스가 있는 경우
beagle_1 = Beagle(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 바퀴 속도 설정하기 {#set_wheel_speed}

바퀴 속도를 결정합니다. 속도의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 바퀴 속도 | -100 ~ 100 정수, 0: 정지 | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## 거리 이동하기 {#move_distance}

현재 바퀴 속도로 지정한 거리만큼 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
거리 값이 0일 경우, 현재 바퀴 속도에 따라 계속 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Beagle" id="move_distance" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 거리 | 0 이상 실수 | - |
| unit | 드롭다운 옵션 | 거리 단위 | cm, mm, 인치(inch) | cm |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## 시간 이동하기 {#move_time}

현재 바퀴 속도로 지정한 시간동안 이동합니다.  
바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다.  
기다리기를 체크하면, 이동이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Beagle" id="move_time" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| data | 입력값 (블록) | 이동 시간 (초) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## 제자리 돌기 {#turn_degree}

제자리에서 회전할 방향과 각도를 설정합니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 회전 방향 | 왼쪽(left), 오른쪽(right) | - |
| data | 입력값 (블록) | 회전 각도 (도) | 0 이상 실수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## 바퀴 속도 변경하기 {#change_speed}

비글의 바퀴 속도를 변경합니다.  
현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다.  
새롭게 설정된 바퀴 속도의 범위는 -100 ~ 100으로 설정됩니다.

<BlockImage module="roboids/Beagle" id="change_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 바퀴 종류 | 왼쪽(left), 오른쪽(right), 양쪽(both) | - |
| speed | 입력값 (블록) | 변경할 속도 차 | -200 ~ 200 정수 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## 정지하기 {#stop}

비글의 이동을 멈춥니다.  
비글의 양쪽 바퀴 속도가 모두 0으로 초기화됩니다.

<BlockImage module="roboids/Beagle" id="stop" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## 바퀴가 움직이는 중인가? {#wheel_moving}

바퀴가 움직이는 중이면 true, 멈춰있으면 false를 반환합니다.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## 버저음 설정하기 {#sound_buzz}

지정된 주파수로 비글의 버저음을 설정합니다.  
소리 낼 수 있는 주파수의 범위는 27.5hz ~ 6553.5hz 입니다.  
이 외의 값을 입력하면 버저음이 발생하지 않습니다.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 0, 27.5 ~ 6553.5 실수 (그 외 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## 음계 연주하기 {#sound_note}

비글이 지정된 음계를 재생합니다.

<BlockImage module="roboids/Beagle" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#(C#), 레(D), 레#(D#), 미(E), 파(F), 파#(F#), 솔(G), 솔#(G#), 라(A), 라#(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## 소리 재생하기 {#sound_clip}

비글이 특정 사운드 클립을 재생합니다.  
기다리기를 체크하면, 재생이 완료될 때까지 기다립니다.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## 소리 끄기 {#sound_off}

비글의 소리를 끕니다.

<BlockImage module="roboids/Beagle" id="sound_off" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## 소리가 재생 중인가? {#sound_playing}

소리가 재생 중이면 true, 재생 중이 아니면 false를 반환합니다.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## 바퀴 속도 값 {#wheel_speed}

특정 바퀴의 속도

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## 엔코더 값 {#encoder}

특정 바퀴의 엔코더 값

<BlockImage module="roboids/Beagle" id="encoder" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 대상 바퀴 | 왼쪽(left), 오른쪽(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## 자이로 센서 값 {#gyroscope}

특정 축의 자이로 센서의 값

<BlockImage module="roboids/Beagle" id="gyroscope" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## 가속도 센서 값 {#accelerometer}

특정 축의 가속도 센서의 값

<BlockImage module="roboids/Beagle" id="accelerometer" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## 지자계 센서 값 {#magnetometer}

특정 축의 지자계 센서의 값

<BlockImage module="roboids/Beagle" id="magnetometer" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## 온도 센서 값 {#temperature}

온도 센서 값

<BlockImage module="roboids/Beagle" id="temperature" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/Beagle" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/Beagle" id="battery" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## 상태 변경 여부 {#state_change}

로봇의 상태가 변했는지 여부

<BlockImage module="roboids/Beagle" id="state_change" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 상태 종류 | 0 ~ 5 (아래 표 참조) | - |

| unit | 조건 |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## 라이다 켜기 / 끄기 {#lidar_power}

라이다 센서를 활성화하거나 비활성화합니다.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| on | 드롭다운 옵션 | 라이다 ON / OFF | 켜기(on=True), 끄기(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## 라이다 ~번째 사물의 거리 값 {#lidar_value}

라이다 센서는 주변 360도 사물과의 거리를 측정할 수 있습니다.  
비글의 앞쪽(0번째 값)을 기준으로, 반시계 방향으로 갈수록 번호가 1씩 커집니다.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 입력값 (필드) | 사물 번호 (0부터) | 0 이상 정수 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## 라이다 방향별 거리 값 {#lidar_directions}

라이다 센서가 측정한 앞, 뒤, 양 옆, 대각선 방향의 거리를 나타냅니다.  
해당 방향의 좌우 45도 거리 값들의 평균값을 출력합니다.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| direction | 드롭다운 옵션 | 측정 방향 | 앞(front), 왼쪽 앞(left front), 왼쪽(left), 왼쪽 뒤(left back), 뒤(back), 오른쪽 뒤(right back), 오른쪽(right), 오른쪽 앞(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## 라이다가 켜져 있는가? {#lidar_state}

라이다가 켜져 있는지 여부를 **참(True) / 거짓(False)** 으로 반환합니다.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### 매개변수

(없음)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
