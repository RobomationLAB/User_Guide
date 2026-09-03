---
title: CSD-09 모터
---

# CSD-09 모터

## 인스턴스 선언

CSD-09 모터(CSD09) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| index | 드롭다운 옵션 | 인스턴스 번호 (0부터 시작) | 0 이상 정수 | 0 |

<br>

## 서보 모터 시작하기 {#start_servo_motor}

서보 모터를 사용할 포트를 지정합니다.  
포트를 지정하지 않으면, 모터가 정상적으로 동작하지 않습니다.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 서보 모터 포트 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

---

## 서보 모터 각도 설정하기 {#set_servo_motor}

지정한 포트의 서보 모터 각도를 설정합니다.  
선택할 수 있는 값의 범위는 0 ~ 180 입니다.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 서보 모터 포트 | Sa, Sb, Sc | 마지막 `start_servo_motor` 의 포트 |
| value | 입력값 (필드) | 회전 각도 (도) | 0 ~ 180 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

---

## 서보 모터 각도 변경하기 {#change_servo_motor}

지정한 포트의 서보 모터 각도를 변경합니다.  
선택할 수 있는 값의 범위는 -180 ~ 180 입니다.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 서보 모터 포트 | Sa, Sb, Sc | 마지막 `start_servo_motor` 의 포트 |
| value | 입력값 (필드) | 변경할 각도 차 | 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

---

## 서보 모터 정지하기 {#stop_servo_motor}

지정한 포트의 서보 모터의 전원을 끕니다.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 서보 모터 포트 | Sa, Sb, Sc | 마지막 `start_servo_motor` 의 포트 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

---

## DC 모터 시작하기 {#start_DC_motor}

지정한 포트를 사용하여 DC 모터를 제어할 수 있도록 합니다.
DC 모터 관련 다른 블록을 사용하기 전에 한 번 호출해야 합니다.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | DC 모터 포트 | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

---

## DC 모터 속도 설정하기 {#set_DC_motor}

DC 모터의 PWM 출력값을 설정합니다.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | DC 모터 포트 | Mab, Mcd | 마지막 `start_dc_motor` 의 포트 |
| value | 입력값 (필드) | PWM 출력값 | 0 ~ 100 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

---

## DC 모터 속도 변경하기 {#change_DC_motor}

현재 DC 모터의 PWM 출력값에 입력한 변화량을 더해 새로운 값을 설정합니다.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | DC 모터 포트 | Mab, Mcd | 마지막 `start_dc_motor` 의 포트 |
| value | 입력값 (필드) | 변경할 PWM 차 | 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

---

## DC 모터 정지하기 {#stop_DC_motor}

DC 모터의 출력을 정지합니다.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | DC 모터 포트 | Mab, Mcd | 마지막 `start_dc_motor` 의 포트 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

---

## 스텝 모터 시작하기 {#start_step_motor}

스텝 모터를 사용합니다.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

---

## 스텝 모터 모드 설정하기 {#set_step_motor_mode}

스텝 모터를 제어할 모드를 설정합니다.  
별도로 모드를 설정하지 않으면, 기본으로 '파워' 모드로 설정됩니다.  
주의! 스텝 모터가 회전하는 도중에 모드를 바꿔서는 안됩니다.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 구동 모드 | off(끄기), 기본(wave_step), 파워(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

---

## 스텝 모터 속도 설정하기 {#set_step_motor_speed}

스텝 모터의 속도를 설정합니다.  
선택할 수 있는 값의 범위는 -1000 ~ 1000 입니다.  
값이 음수인 경우, 반대 방향으로 회전합니다.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| value | 입력값 (필드) | 회전 속도 (PPS) | 0 이상 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

---

## 스텝 모터 회전하기 {#rotate_step_motor}

스텝 모터를 회전할 펄스 수를 설정합니다.  
선택할 수 있는 값의 범위는 0 ~ 65535 입니다.  
스탭 모터의 속도를 선택하지 않은 경우, 회전하지 않습니다.  
기다리기를 체크하면, 회전이 완료될 때까지 기다립니다.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| value | 입력값 (필드) | 회전할 스텝 수 | 정수 | - |
| wait | 체크박스 | 완료 대기 여부 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

---

## 스텝 모터 속도 변경하기 {#change_step_motor_speed}

스텝 모터의 속도를 변경합니다.  
선택할 수 있는 값의 범위는 -2000 ~ 2000 입니다.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| value | 입력값 (필드) | 변경할 PPS 차 | 정수 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

---

## 스텝 모터 정지하기 {#stop_step_motor}

스텝 모터를 정지하거나 전원을 끕니다.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| unit | 드롭다운 옵션 | 정지 방식 | 정지(stop), 전원 끄기(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

---

## 누적 스텝 수 {#step_motor_steps}

스텝 모터가 지금까지 회전한 누적 스텝 수를 반환합니다.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### 매개변수

(없음)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
