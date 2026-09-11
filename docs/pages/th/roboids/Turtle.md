---
title: Turtle
---

# Turtle

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก Turtle ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
turtle = Turtle(0)
# กรณีที่มีหลายอินสแตนซ์
turtle_1 = Turtle(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งความเร็วล้อ {#set_wheel_speed}

กำหนดความเร็วของล้อ ช่วงความเร็วคือ -100 ~ 100

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ความเร็วล้อ | จำนวนเต็ม -100 ~ 100, 0: หยุด | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## เคลื่อนที่ตามระยะทาง {#move_distance}

ตั้งระยะทางที่จะเคลื่อนที่  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะไม่เคลื่อนที่  
ถ้าค่าระยะทางเป็น 0 จะเคลื่อนที่ต่อไปตามความเร็วล้อปัจจุบัน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/Turtle" id="move_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ระยะทางที่เคลื่อนที่ | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยระยะทาง | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## เคลื่อนที่เป็นเวลา {#move_time}

เคลื่อนที่เป็นเวลาที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/Turtle" id="move_time" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | เวลาที่เคลื่อนที่ (วินาที) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## หมุนอยู่กับที่ {#turn_degree}

กำหนดทิศทางและมุมที่จะหมุนอยู่กับที่  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/Turtle" id="turn_degree" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | ซ้าย(left), ขวา(right) | - |
| data | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## เปลี่ยนความเร็วล้อ {#change_speed}

เปลี่ยนความเร็วล้อของ Turtle  
ความเร็วล้อใหม่คือความเร็วล้อปัจจุบันบวกกับความเร็วที่ป้อน

<BlockImage module="roboids/Turtle" id="change_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## หยุด {#stop}

หยุดการเคลื่อนที่ของ Turtle

<BlockImage module="roboids/Turtle" id="stop" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## ล้อกำลังเคลื่อนที่? {#wheel_moving}

คืนค่า true ถ้าล้อกำลังเคลื่อนที่ และ false ถ้าหยุดอยู่

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## หมุนรอบล้อ {#pivot}

กำหนดจุดหมุน ทิศทาง และมุมที่จะหมุน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/Turtle" id="pivot" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| base | ตัวเลือกดรอปดาวน์ | ล้อที่เป็นจุดหมุน | ล้อซ้าย(left_wheel), ล้อขวา(right_wheel) | - |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | เดินหน้า(forward), ถอยหลัง(backward) | - |
| data | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```


## วาดวงกลม {#pivot_circle}

เมื่อใช้ปากกาวาดวงกลม กำหนดทิศทาง รัศมี และมุมที่จะหมุน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | เฉียงซ้ายหน้า(left_forward), เฉียงซ้ายหลัง(left_backward), เฉียงขวาหน้า(right_forward), เฉียงขวาหลัง(right_backward) | - |
| degree | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| radius | ค่าป้อนเข้า (บล็อก) | รัศมีการหมุน | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยรัศมี | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```


## ตามเส้นด้วยเซ็นเซอร์ {#trace_line}

ใช้เซ็นเซอร์สีที่พื้นเคลื่อนที่ตามเส้นสีที่กำหนด

<BlockImage module="roboids/Turtle" id="trace_line" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้นที่จะตาม | ดำ(black), แดง(red), เขียว(green), น้ำเงิน(blue), ทุกสี(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```


## ตามเส้นจนถึงสีที่กำหนด {#trace_line_until_color}

ใช้เซ็นเซอร์สีที่พื้นเคลื่อนที่ตามเส้นสี A จนกว่าจะพบสี B

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| line | ตัวเลือกดรอปดาวน์ | สีของเส้นที่จะตาม | ดำ(black), แดง(red), เขียว(green), น้ำเงิน(blue), ทุกสี(any) | - |
| color | ตัวเลือกดรอปดาวน์ | สีที่จะหยุด | ดำ(black), แดง(red), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วงแดง(magenta), ทุกสี(any) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```


## เคลื่อนที่ผ่านทางแยกแล้วหยุดที่ทางแยกถัดไป {#intersection}

Turtle เคลื่อนที่ไปในทิศทางที่กำหนดที่ทางแยก แล้วเคลื่อนที่ต่อจนพบทางแยกถัดไป  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น  

<BlockImage module="roboids/Turtle" id="intersection" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางที่ทางแยก | เดินหน้า(forward), ซ้าย(left), ขวา(right), กลับรถ(uturn) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```


## ตั้งความเร็วในการตามเส้น {#set_trace_speed}

ตั้งความเร็วในการตามเส้น ช่วงความเร็วคือ 1 ~ 10

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วในการตามเส้น | จำนวนเต็ม 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## ตั้งอัตราขยายในการตามเส้น {#set_trace_gain}

ตั้งอัตราขยาย (อัตราการเปลี่ยนทิศทาง) ในการตามเส้น ช่วงของค่าคือ 1 ~ 10

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | อัตราการเปลี่ยนทิศทาง | จำนวนเต็ม 1 ~ 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## หยุดตามเส้น {#stop_trace}

จบการทำงานตามเส้นของ Turtle

<BlockImage module="roboids/Turtle" id="stop_trace" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## ตั้งสีไฟ LED {#set_led_color}

ตั้งสีไฟ LED ที่หัวของ Turtle  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้ (โค้ดที่สร้างขึ้นใช้ชื่อสี ไม่ใช่ค่าตัวเลข R, G, B)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```


## ตั้งสีไฟ LED ด้วยบล็อกหมวดสี {#set_led_color_with_block}

รับผลลัพธ์ของบล็อกหมวดสี (`[R, G, B]`) เป็นค่าป้อนเข้าเพื่อตั้งสีไฟ LED ที่หัว

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (สี) | บล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```


## เปลี่ยนสีไฟ LED ทีละ RGB {#change_by_rgb}

นำค่าเปลี่ยนแปลง R, G, B ที่ป้อนไปบวกกับสีไฟ LED ที่หัวในปัจจุบัน แล้วตั้งเป็นสีใหม่

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```


## ปิดไฟ LED {#turn_off}

ปิดสีไฟ LED ที่หัว

<BlockImage module="roboids/Turtle" id="turn_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```


## ตั้งเสียงบัซเซอร์ {#sound_buzz}

ตั้งเสียงบัซเซอร์ของ Turtle ด้วยความถี่ที่กำหนด

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| hz | ค่าป้อนเข้า (บล็อก) | ความถี่ (Hz) | จำนวนจริง 0 ~ 6553.5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```


## เล่นโน้ต {#sound_note}

Turtle เล่นโน้ตที่กำหนด

<BlockImage module="roboids/Turtle" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## เล่นคลิปเสียง {#sound_clip}

Turtle เล่นคลิปเสียงที่กำหนด

<BlockImage module="roboids/Turtle" id="sound_clip" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| clip | ตัวเลือกดรอปดาวน์ | ชื่อคลิปเสียง | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` ฯลฯ | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ Turtle

<BlockImage module="roboids/Turtle" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## กำลังเล่นเสียง? {#sound_playing}

คืนค่า true ถ้ากำลังเล่นเสียง และ false ถ้าไม่ได้เล่น

<BlockImage module="roboids/Turtle" id="sound_playing" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## ค่าความเร็วล้อ {#wheel_speed}

ความเร็วของล้อที่กำหนด

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## ค่าเซ็นเซอร์สีพื้น {#floor}

ค่าของเซ็นเซอร์สีที่พื้น

<BlockImage module="roboids/Turtle" id="floor" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```


## ค่าชื่อสีการ์ด {#card_color}

ชื่อสีของการ์ดที่อ่านได้จากเซ็นเซอร์สีที่พื้น

<BlockImage module="roboids/Turtle" id="card_color" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```


## ค่ารูปแบบสีการ์ด {#card_pattern}

รูปแบบสีของการ์ดที่อ่านได้จากเซ็นเซอร์สีที่พื้น

<BlockImage module="roboids/Turtle" id="card_pattern" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```


## ค่าความเร่งแกน {#acceleration}

ค่าความเร่งโน้มถ่วงของแกนที่กำหนด

<BlockImage module="roboids/Turtle" id="acceleration" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## ค่าอุณหภูมิ {#temperature}

ค่าเซ็นเซอร์อุณหภูมิ

<BlockImage module="roboids/Turtle" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## ค่าความแรงสัญญาณ {#signal_strength}

ความแรงสัญญาณ

<BlockImage module="roboids/Turtle" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/Turtle" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## แตะสีที่กำหนดหรือไม่? {#color_read}

วัดด้วยเซ็นเซอร์สีของ Turtle ว่าแตะสีที่กำหนดหรือไม่ แล้วคืนค่า **จริง (True) / เท็จ (False)**

<BlockImage module="roboids/Turtle" id="color_read" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```


## รูปแบบสีการ์ดเป็น ~ หรือไม่? {#pattern_read}

คืนค่า **จริง (True) / เท็จ (False)** ว่ารูปแบบสีของการ์ดที่เซ็นเซอร์สีอ่านได้ตรงกันหรือไม่

<BlockImage module="roboids/Turtle" id="pattern_read" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| pattern | ตัวเลือกดรอปดาวน์ | ชื่อรูปแบบการ์ด | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```


## สถานะปุ่มด้านหลัง {#button}

ปุ่มที่ด้านหลังถูกกดอยู่หรือถูกคลิกหรือไม่

<BlockImage module="roboids/Turtle" id="button" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| event | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะปุ่ม | กดอยู่(pressed), คลิก(click), คลิกค้าง(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```


## สถานะเปลี่ยนแปลงหรือไม่ {#state_change}

สถานะของหุ่นยนต์เปลี่ยนแปลงหรือไม่

<BlockImage module="roboids/Turtle" id="state_change" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะ | 0 ~ 5 (ดูตารางด้านล่าง) | - |

| unit | เงื่อนไข |
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
