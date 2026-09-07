---
title: 치즈스틱
---

# 치즈스틱

## 인스턴스 선언 {#instance}

치즈스틱(CheeseStick) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
cheesestick = CheeseStick(0)
# 여러 인스턴스가 있는 경우
cheesestick_1 = CheeseStick(1)
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |


## 입력 모드 설정하기 {#set_input_mode}

선택한 포트의 입력 모드를 설정합니다.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |
| option | 드롭다운 옵션 | 입력 모드 | 메이키 입력(makey), 버튼 입력(button), 디지털 풀업(digital_pullup), 디지털 풀다운(digital_pulldown), 아날로그(analog), 아날로그 전압(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## 입력 범위 설정하기 {#set_input_range}

선택한 포트의 입력값을 지정한 최소~최대 범위로 변환합니다.  
입력값의 범위는 0 ~ 255 입니다.  
변환할 수 있는 값의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 입력값 (필드) | 원본 최소값 | 0 ~ 255 정수 | - |
| src_max | 입력값 (필드) | 원본 최대값 | 0 ~ 255 정수 | - |
| dst_min | 입력값 (필드) | 변환 후 최소값 | -100 ~ 100 정수 | - |
| dst_max | 입력값 (필드) | 변환 후 최대값 | -100 ~ 100 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## 중간값으로 입력 범위 설정하기 {#set_input_range_median}

선택한 포트의 입력값을 지정한 최소~중간~최대 범위로 변환합니다.  
입력값의 범위는 0 ~ 255 입니다.  
변환할 수 있는 값의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 입력값 (필드) | 원본 최소값 | 0 ~ 255 정수 | - |
| src_median | 입력값 (필드) | 원본 중간값 | 0 ~ 255 정수 | - |
| src_max | 입력값 (필드) | 원본 최대값 | 0 ~ 255 정수 | - |
| dst_min | 입력값 (필드) | 변환 후 최소값 | -100 ~ 100 정수 | - |
| dst_median | 입력값 (필드) | 변환 후 중간값 | -100 ~ 100 정수 | - |
| dst_max | 입력값 (필드) | 변환 후 최대값 | -100 ~ 100 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 입력 값 {#get_input}

선택한 포트의 입력 값

<BlockImage module="roboids/CheeseStick" id="get_input" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 입력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## 펄스 입력 모드 설정하기 {#set_pulse_input_mode}

선택한 포트의 펄스 입력 모드를 설정합니다.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 펄스 입력 포트 | Sc, Lc | - |
| option | 드롭다운 옵션 | 풀 모드 | 기본(default), 풀업(pull-up), 풀다운(pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## 펄스 입력 값 {#get_pulse_input}

선택한 포트에 펄스 입력이 감지되었는지 여부

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 펄스 입력 포트 | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## 디지털 출력 설정하기 {#set_digital_output}

지정한 포트의 디지털 출력 값을 설정합니다.  
선택할 수 있는 값은 0 또는 1입니다.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 디지털 출력 포트 | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | 드롭다운 옵션 | 출력값 | 0 또는 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## PWM 출력 설정하기 {#set_pwm_output}

지정한 포트의 PWM 출력 값을 설정합니다.  
선택할 수 있는 값의 범위는 0 ~ 100 입니다.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | PWM 출력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 입력값 (필드) | PWM 값 | 0 ~ 100 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## PWM 출력 변경하기 {#change_pwm_output}

지정한 포트의 PWM 출력 값을 변경합니다.  
선택할 수 있는 값의 범위는 -100 ~ 100 입니다.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | PWM 출력 포트 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 입력값 (필드) | 변경할 PWM 차 | -100 ~ 100 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## 버저음 설정하기 {#sound_buzz}

치즈스틱의 버저음을 설정합니다.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| hz | 입력값 (블록) | 주파수 (Hz) | 0 ~ 6553.5 실수 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## 음계 연주하기 {#sound_note}

치즈스틱이 지정된 음계를 재생합니다.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| note | 드롭다운 옵션 | 음계 | 도(C), 도#(C#), 레(D), 레#(D#), 미(E), 파(F), 파#(F#), 솔(G), 솔#(G#), 라(A), 라#(A#), 시(B) | - |
| octave | 드롭다운 옵션 | 옥타브 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## 소리 재생하기 {#sound_clip}

치즈스틱이 특정 사운드 클립을 재생합니다.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| clip | 드롭다운 옵션 | 사운드 클립 이름 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` 등 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## 소리 끄기 {#sound_off}

치즈스틱의 소리를 끕니다.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## 가속도 값 {#acceleration}

특정 축의 중력 가속도 값

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 측정 축 | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## 온도 센서 값 {#temperature}

온도 센서 값

<BlockImage module="roboids/CheeseStick" id="temperature" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## 신호 세기 값 {#signal_strength}

신호 세기

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## 배터리 전압 {#battery}

배터리 전압

<BlockImage module="roboids/CheeseStick" id="battery" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## 상태 변경 여부 {#state_change}

로봇의 상태가 변했는지 여부

<BlockImage module="roboids/CheeseStick" id="state_change" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 상태 종류 | 0 ~ 7 (아래 표 참조) | - |

| unit | 조건 |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (탭 이벤트) |
| 7 | `fall()` (낙하 이벤트) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
