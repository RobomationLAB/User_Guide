---
title: Hamster
---

# Hamster

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก Hamster ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
hamster = Hamster(0)
# กรณีที่มีหลายอินสแตนซ์
hamster_1 = Hamster(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งความเร็วล้อ {#set_wheel_speed}

กำหนดความเร็วของล้อ ช่วงความเร็วคือ -100 ~ 100

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ความเร็วล้อ | จำนวนเต็ม -100 ~ 100, 0: หยุด | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## เคลื่อนที่เป็นเวลา {#move_time}

เคลื่อนที่เป็นเวลาที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/Hamster" id="move_time" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | เวลาที่เคลื่อนที่ (วินาที) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## เปลี่ยนความเร็วล้อ {#change_speed}

เปลี่ยนความเร็วล้อของ Hamster  
ความเร็วล้อใหม่คือความเร็วล้อปัจจุบันบวกกับความเร็วที่ป้อน  
ความเร็วล้อที่ตั้งใหม่จะถูกจำกัดอยู่ในช่วง -100 ~ 100

<BlockImage module="roboids/Hamster" id="change_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## หยุด {#stop}

หยุดการเคลื่อนที่ของ Hamster  
ความเร็วล้อทั้งสองข้างของ Hamster จะถูกตั้งกลับเป็น 0

<BlockImage module="roboids/Hamster" id="stop" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## เคลื่อนที่ไปข้างหน้าหนึ่งช่องบนกระดาน {#grid_move}

เคลื่อนที่ทีละหนึ่งช่องบนกระดานตามที่กำหนดไว้

<BlockImage module="roboids/Hamster" id="grid_move" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## เลี้ยวหนึ่งครั้งบนกระดาน {#grid_turn}

เลี้ยว 90 องศาไปในทิศทางที่กำหนดบนกระดาน

<BlockImage module="roboids/Hamster" id="grid_turn" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการเลี้ยว | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## วิ่งตามเส้นด้วยเซ็นเซอร์ {#trace_mode}

Hamster ใช้เซ็นเซอร์พื้นวิ่งตามเส้นสีที่กำหนด

<BlockImage module="roboids/Hamster" id="trace_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| floor | ตัวเลือกดรอปดาวน์ | เซ็นเซอร์พื้นที่ใช้วิ่งตามเส้น | ซ้าย(left), ขวา(right), กลาง(center) | - |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้น | ดำ(black), ขาว(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## เคลื่อนที่ผ่านทางแยกแล้วหยุดที่ทางแยกถัดไป {#trace_until_grid}

Hamster วิ่งไปในทิศทางที่กำหนดที่ทางแยก แล้ววิ่งตามเส้นต่อจนพบทางแยกถัดไป  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น  

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางที่ทางแยก | เลี้ยวซ้าย(left), เลี้ยวขวา(right), ตรงไป(forward), กลับรถ(uturn) | - |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้น | ดำ(black), ขาว(white) | black |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## ตั้งความเร็วในการวิ่งตามเส้น {#set_trace_speed}

ตั้งความเร็วในการวิ่งตามเส้น ช่วงความเร็วคือ 1 ~ 10

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วในการวิ่งตามเส้น | จำนวนเต็ม 1 ~ 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## หยุดวิ่งตามเส้น {#stop_trace}

จบการทำงานวิ่งตามเส้นของ Hamster

<BlockImage module="roboids/Hamster" id="stop_trace" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## ตั้งสีไฟ LED {#set_led_color}

ตั้งสีไฟ LED

<BlockImage module="roboids/Hamster" id="set_led_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| color | ตัวเลือกดรอปดาวน์ | สี | ดำ(black), น้ำเงิน(blue), เขียว(green), ฟ้าอมเขียว(cyan), แดง(red), ม่วงแดง(magenta), เหลือง(yellow), ขาว(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## ปิดไฟ LED {#turn_off}

ปิดสีไฟ LED

<BlockImage module="roboids/Hamster" id="turn_off" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## ตั้งเสียงบัซเซอร์ {#sound_buzz}

ตั้งเสียงบัซเซอร์ของ Hamster ด้วยความถี่ที่กำหนด  
ช่วงความถี่ที่ส่งเสียงได้คือ 1.0 Hz ~ 6553.5 Hz  
ถ้าป้อนค่าอื่นนอกช่วงนี้ บัซเซอร์จะไม่ส่งเสียง

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| hz | ค่าป้อนเข้า (บล็อก) | ความถี่ (Hz) | จำนวนจริง 0 ~ 6553.5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## เล่นโน้ต {#sound_note}

Hamster เล่นโน้ตที่กำหนด

<BlockImage module="roboids/Hamster" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ Hamster

<BlockImage module="roboids/Hamster" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## ค่าความเร็วล้อ {#wheel_speed}

ความเร็วของล้อที่กำหนด

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## ค่าเซ็นเซอร์ตรวจจับระยะ {#proximity}

ค่าของเซ็นเซอร์ตรวจจับระยะที่กำหนด

<BlockImage module="roboids/Hamster" id="proximity" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ตำแหน่งเซ็นเซอร์ที่วัด | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## ค่าเซ็นเซอร์พื้น {#floor}

ค่าของเซ็นเซอร์พื้นที่กำหนด

<BlockImage module="roboids/Hamster" id="floor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ตำแหน่งเซ็นเซอร์ที่วัด | ซ้าย(left), ขวา(right), กลาง(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## ค่าความเร่ง {#acceleration}

ค่าความเร่งโน้มถ่วงของแกนที่กำหนด

<BlockImage module="roboids/Hamster" id="acceleration" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## ค่าความสว่าง {#light}

ค่าเซ็นเซอร์ความสว่าง

<BlockImage module="roboids/Hamster" id="light" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## ค่าอุณหภูมิ {#temperature}

ค่าเซ็นเซอร์อุณหภูมิ

<BlockImage module="roboids/Hamster" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## ค่าความแรงของสัญญาณ {#signal_strength}

ความแรงของสัญญาณ

<BlockImage module="roboids/Hamster" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/Hamster" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## สถานะเปลี่ยนแปลงหรือไม่ {#state_change}

สถานะของหุ่นยนต์เปลี่ยนแปลงหรือไม่

<BlockImage module="roboids/Hamster" id="state_change" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะ | 0 ~ 6 (ดูตารางด้านล่าง) | - |

| unit | เงื่อนไข |
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

## ตั้งค่าโหมดอินพุตของพอร์ต I/O {#io_mode}

ตั้งค่าโหมดอินพุตของพอร์ต IO

<BlockImage module="roboids/Hamster" id="io_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| option | ตัวเลือกดรอปดาวน์ | โหมด I/O | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## ตั้งค่าเอาต์พุตของพอร์ต I/O {#set_output}

ตั้งค่าเอาต์พุตของพอร์ต IO ที่กำหนด

<BlockImage module="roboids/Hamster" id="set_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| data | ค่าป้อนเข้า (บล็อก) | ค่าเอาต์พุต | จำนวนเต็ม 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## เปลี่ยนค่าเอาต์พุตของพอร์ต I/O {#change_output}

เปลี่ยนค่าเอาต์พุตของพอร์ต IO ที่กำหนด

<BlockImage module="roboids/Hamster" id="change_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างค่าเอาต์พุตที่จะเปลี่ยน | จำนวนเต็ม | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## เปิด / ปิดกริปเปอร์ {#gripper}

เปิดหรือปิดกริปเปอร์ของ Hamster  
เรียกใช้เมธอดหนึ่งในสองตามค่า unit

<BlockImage module="roboids/Hamster" id="gripper" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | ปิด(close), เปิด(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## ตั้งค่ามุมตัวยิง {#shooter}

ควบคุมตัวยิงโดยตั้งค่ามุม ช่วงของมุมคือ 0 ~ 180

<BlockImage module="roboids/Hamster" id="shooter" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | มุมตัวยิง | จำนวนเต็ม 0 ~ 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## ค่าอินพุตของพอร์ต I/O {#input}

คืนค่าอินพุตของพอร์ต I/O ของ Hamster

<BlockImage module="roboids/Hamster" id="input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
