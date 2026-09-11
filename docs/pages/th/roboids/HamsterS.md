---
title: HamsterS
---

# HamsterS

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก HamsterS ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
hamster_s = HamsterS(0)
# กรณีที่มีหลายอินสแตนซ์
hamster_s_1 = HamsterS(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งความเร็วล้อ {#set_wheel_speed}

กำหนดความเร็วของล้อ ช่วงความเร็วคือ -100 ~ 100

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ความเร็วล้อ | จำนวนเต็ม -100 ~ 100, 0: หยุด | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## เคลื่อนที่ตามระยะทาง {#move_distance}

เคลื่อนที่ตามระยะทางที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าค่าระยะทางเป็น 0 จะเคลื่อนที่ต่อไปตามความเร็วล้อปัจจุบัน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="move_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ระยะทางที่เคลื่อนที่ | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยระยะทาง | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## เคลื่อนที่เป็นเวลา {#move_time}

เคลื่อนที่เป็นเวลาที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="move_time" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | เวลาที่เคลื่อนที่ (วินาที) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## หมุนอยู่กับที่ {#turn_degree}

กำหนดทิศทางและมุมที่จะหมุนอยู่กับที่  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | ซ้าย(left), ขวา(right) | - |
| data | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## เปลี่ยนความเร็วล้อ {#change_speed}

เปลี่ยนความเร็วล้อของ HamsterS  
ความเร็วล้อใหม่คือความเร็วล้อปัจจุบันบวกกับความเร็วที่ป้อน

<BlockImage module="roboids/HamsterS" id="change_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## หยุด {#stop}

หยุดการเคลื่อนที่ของ HamsterS

<BlockImage module="roboids/HamsterS" id="stop" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## ล้อกำลังเคลื่อนที่? {#wheel_moving}

คืนค่า true ถ้าล้อกำลังเคลื่อนที่ และ false ถ้าหยุดอยู่

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## เคลื่อนที่ไปข้างหน้าหนึ่งช่องบนกระดาน {#grid_move}

เคลื่อนที่ทีละหนึ่งช่องบนกระดานตามที่กำหนดไว้

<BlockImage module="roboids/HamsterS" id="grid_move" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## หมุนหนึ่งครั้งบนกระดาน {#grid_turn}

หมุน 90 องศาไปในทิศทางที่กำหนดบนกระดาน

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## หมุนรอบที่ใส่ปากกา {#pivot}

เมื่อใช้ที่ใส่ปากกา กำหนดจุดหมุน ทิศทาง และมุมที่จะหมุน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="pivot" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| base | ตัวเลือกดรอปดาวน์ | จุดหมุน | ปากกาซ้าย(left_pen), ปากกาขวา(right_pen), ล้อซ้าย(left_wheel), ล้อขวา(right_wheel) | - |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | เดินหน้า(forward), ถอยหลัง(backward) | - |
| degree | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## วาดวงกลมรอบที่ใส่ปากกา {#pivot_circle}

เมื่อใช้ที่ใส่ปากกาวาดวงกลม กำหนดจุดหมุน ทิศทาง รัศมี และมุมที่จะหมุน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| base | ตัวเลือกดรอปดาวน์ | จุดหมุน | ปากกาซ้าย(left_pen), ปากกาขวา(right_pen) | - |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | เฉียงซ้ายหน้า(left_forward), เฉียงซ้ายหลัง(left_backward), เฉียงขวาหน้า(right_forward), เฉียงขวาหลัง(right_backward) | - |
| degree | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| radius | ค่าป้อนเข้า (บล็อก) | รัศมีการหมุน | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยรัศมี | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## ตามเส้นด้วยเซ็นเซอร์ {#trace_mode}

HamsterS ใช้เซ็นเซอร์พื้นเคลื่อนที่ตามเส้นสีที่กำหนด

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| floor | ตัวเลือกดรอปดาวน์ | เซ็นเซอร์พื้นที่ใช้ตามเส้น | ซ้าย(left), ขวา(right), กลาง(center) | - |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้น | ดำ(black), ขาว(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## เคลื่อนที่ผ่านทางแยกแล้วหยุดที่ทางแยกถัดไป {#trace_until_grid}

HamsterS เคลื่อนที่ไปในทิศทางที่กำหนดที่ทางแยก แล้วเคลื่อนที่ต่อจนพบทางแยกถัดไป  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางที่ทางแยก | เลี้ยวซ้าย(left), เลี้ยวขวา(right), ตรงไป(forward), กลับรถ(uturn) | - |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้น | ดำ(black), ขาว(white) | black |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## ตั้งความเร็วการตามเส้น {#set_trace_speed}

ตั้งความเร็วในการตามเส้น ช่วงความเร็วคือ 1 ~ 10

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วการตามเส้น | จำนวนเต็ม 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## ตั้งค่าเกนการตามเส้น {#set_trace_gain}

ตั้งค่าเกน (อัตราการเปลี่ยนทิศทาง) ในการตามเส้น ช่วงของค่าคือ 1 ~ 10

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | อัตราการเปลี่ยนทิศทาง | จำนวนเต็ม 1 ~ 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## หยุดตามเส้น {#stop_trace}

จบการทำงานตามเส้นของ HamsterS

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## ตั้งสีไฟ LED {#set_led_color}

ตั้งสีไฟ LED ของ HamsterS  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้ (โค้ดที่สร้างขึ้นใช้ชื่อสี ไม่ใช่ค่าตัวเลข R, G, B)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## ตั้งสีไฟ LED ด้วยบล็อกหมวดสี {#set_led_color_with_block}

รับบล็อกหมวดสี (`[R, G, B]`) เป็นค่าป้อนเข้าเพื่อตั้งสีไฟ LED

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| data | ค่าป้อนเข้า (สี) | บล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## เปลี่ยนสีไฟ LED ทีละ RGB {#change_by_rgb}

เปลี่ยนสีไฟ LED ของ HamsterS ตามค่า R, G, B ที่กำหนด

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## ปิดไฟ LED {#turn_off}

ปิดสีไฟ LED

<BlockImage module="roboids/HamsterS" id="turn_off" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | LED ที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## ตั้งเสียงบัซเซอร์ {#sound_buzz}

ตั้งเสียงบัซเซอร์ของ HamsterS ด้วยความถี่ที่กำหนด  
ช่วงความถี่ที่ส่งเสียงได้คือ 122.1 Hz ~ 4186.0 Hz  
ถ้าป้อนค่าอื่นนอกช่วงนี้ บัซเซอร์จะไม่ส่งเสียง

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| hz | ค่าป้อนเข้า (บล็อก) | ความถี่ (Hz) | จำนวนจริง 122.1 ~ 4186.0 (นอกช่วงเป็น 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## เล่นโน้ต {#sound_note}

HamsterS เล่นโน้ตที่กำหนด

<BlockImage module="roboids/HamsterS" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## เล่นคลิปเสียง {#sound_clip}

HamsterS เล่นคลิปเสียงที่กำหนด  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเล่นจะเสร็จสิ้น

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| clip | ตัวเลือกดรอปดาวน์ | ชื่อคลิปเสียง | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` ฯลฯ | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ HamsterS

<BlockImage module="roboids/HamsterS" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## กำลังเล่นเสียง? {#sound_playing}

คืนค่า true ถ้ากำลังเล่นเสียง และ false ถ้าไม่ได้เล่น

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## ค่าความเร็วล้อ {#wheel_speed}

ความเร็วของล้อที่กำหนด

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## ค่าเซ็นเซอร์ตรวจจับวัตถุ {#proximity}

ค่าของเซ็นเซอร์ตรวจจับวัตถุที่กำหนด

<BlockImage module="roboids/HamsterS" id="proximity" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ตำแหน่งเซ็นเซอร์ที่วัด | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## ค่าเซ็นเซอร์พื้น {#floor}

ค่าของเซ็นเซอร์พื้นที่กำหนด

<BlockImage module="roboids/HamsterS" id="floor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ตำแหน่งเซ็นเซอร์ที่วัด | ซ้าย(left), ขวา(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## ค่าความเร่งแกน {#acceleration}

ค่าความเร่งโน้มถ่วงของแกนที่กำหนด

<BlockImage module="roboids/HamsterS" id="acceleration" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## ค่าความสว่าง {#light}

ค่าเซ็นเซอร์ความสว่าง

<BlockImage module="roboids/HamsterS" id="light" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## ค่าอุณหภูมิ {#temperature}

ค่าเซ็นเซอร์อุณหภูมิ

<BlockImage module="roboids/HamsterS" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## ค่าความแรงสัญญาณ {#signal_strength}

ความแรงสัญญาณ

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/HamsterS" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## สถานะเปลี่ยนแปลงหรือไม่ {#state_change}

สถานะของหุ่นยนต์เปลี่ยนแปลงหรือไม่

<BlockImage module="roboids/HamsterS" id="state_change" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะ | 0 ~ 7 (ดูตารางด้านล่าง) | - |

| unit | ความหมาย | Python |
|------|------|--------|
| 0 | เอียงไปข้างหน้า | `acceleration('x') > 5000` |
| 1 | เอียงไปข้างหลัง | `acceleration('x') < -5000` |
| 2 | เอียงไปทางซ้าย | `acceleration('y') > 5000` |
| 3 | เอียงไปทางขวา | `acceleration('y') < -5000` |
| 4 | พลิกกลับหัว | `acceleration('z') > 0` |
| 5 | ไม่พลิกกลับหัว | `acceleration('z') < -3000` |
| 6 | ตรวจพบสิ่งกีดขวาง/มือ | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | เคาะ | `tap()` |

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

## ตั้งโหมดอินพุตของพอร์ต I/O {#io_mode}

ตั้งโหมดอินพุตของพอร์ต IO

<BlockImage module="roboids/HamsterS" id="io_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| option | ตัวเลือกดรอปดาวน์ | โหมด I/O | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## ตั้งค่าเอาต์พุตของพอร์ต I/O {#set_output}

ตั้งค่าเอาต์พุตของพอร์ต IO ที่กำหนด

<BlockImage module="roboids/HamsterS" id="set_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| data | ค่าป้อนเข้า (บล็อก) | ค่าเอาต์พุต | จำนวนเต็ม 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## เปลี่ยนค่าเอาต์พุตของพอร์ต I/O {#change_output}

เปลี่ยนค่าเอาต์พุตของพอร์ต IO ที่กำหนด

<BlockImage module="roboids/HamsterS" id="change_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b, ทั้งคู่(both) | - |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างค่าเอาต์พุตที่จะเปลี่ยน | จำนวนเต็ม | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## เปิด / ปิดกริปเปอร์ {#gripper}

เปิดหรือปิดกริปเปอร์ของ HamsterS  
เรียกใช้เมธอดหนึ่งในสองตามค่า unit

<BlockImage module="roboids/HamsterS" id="gripper" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เปิด(open), ปิด(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## ตั้งมุมตัวยิง {#shooter}

ควบคุมตัวยิงโดยตั้งมุม ช่วงของมุมคือ 0 ~ 180

<BlockImage module="roboids/HamsterS" id="shooter" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | มุมตัวยิง | จำนวนเต็ม 0 ~ 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## ค่าอินพุตของพอร์ต I/O {#input}

คืนค่าอินพุตของพอร์ต I/O ของ HamsterS

<BlockImage module="roboids/HamsterS" id="input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ต I/O | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
