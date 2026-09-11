---
title: CSD-09 มอเตอร์
---

# CSD-09 มอเตอร์

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก CSD-09 มอเตอร์ (CSD09) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มเซอร์โวมอเตอร์ที่พอร์ต {#start_servo_motor}

กำหนดพอร์ตที่จะใช้เซอร์โวมอเตอร์  
ถ้าไม่กำหนดพอร์ต มอเตอร์จะไม่ทำงานตามปกติ

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเซอร์โวมอเตอร์ | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## ตั้งค่ามุมของเซอร์โวมอเตอร์ {#set_servo_motor}

ตั้งมุมของเซอร์โวมอเตอร์ที่พอร์ตที่กำหนด  
ช่วงของค่าที่เลือกได้คือ 0 ~ 180

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเซอร์โวมอเตอร์ | Sa, Sb, Sc | พอร์ตของ `start_servo_motor` ครั้งล่าสุด |
| value | ค่าป้อนเข้า (ฟิลด์) | มุมที่หมุน (องศา) | จำนวนเต็ม 0 ~ 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## เปลี่ยนมุมของเซอร์โวมอเตอร์ {#change_servo_motor}

เปลี่ยนมุมของเซอร์โวมอเตอร์ที่พอร์ตที่กำหนด  
ช่วงของค่าที่เลือกได้คือ -180 ~ 180

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเซอร์โวมอเตอร์ | Sa, Sb, Sc | พอร์ตของ `start_servo_motor` ครั้งล่าสุด |
| value | ค่าป้อนเข้า (ฟิลด์) | ผลต่างมุมที่จะเปลี่ยน | จำนวนเต็ม | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## ปิดเซอร์โวมอเตอร์ {#stop_servo_motor}

ปิดไฟเลี้ยงของเซอร์โวมอเตอร์ที่พอร์ตที่กำหนด

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเซอร์โวมอเตอร์ | Sa, Sb, Sc | พอร์ตของ `start_servo_motor` ครั้งล่าสุด |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## เริ่มใช้มอเตอร์ DC ที่พอร์ต {#start_DC_motor}

ทำให้ควบคุมมอเตอร์ DC ผ่านพอร์ตที่กำหนดได้
ต้องเรียกใช้หนึ่งครั้งก่อนใช้บล็อกอื่นที่เกี่ยวกับมอเตอร์ DC

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตมอเตอร์ DC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## ตั้งค่าความเร็วของมอเตอร์ DC {#set_DC_motor}

ตั้งค่าเอาต์พุต PWM ของมอเตอร์ DC

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตมอเตอร์ DC | Mab, Mcd | พอร์ตของ `start_dc_motor` ครั้งล่าสุด |
| value | ค่าป้อนเข้า (ฟิลด์) | ค่าเอาต์พุต PWM | จำนวนเต็ม 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## เปลี่ยนความเร็วของมอเตอร์ DC {#change_DC_motor}

นำค่าเปลี่ยนแปลงที่ป้อนไปบวกกับค่าเอาต์พุต PWM ปัจจุบันของมอเตอร์ DC แล้วตั้งเป็นค่าใหม่

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตมอเตอร์ DC | Mab, Mcd | พอร์ตของ `start_dc_motor` ครั้งล่าสุด |
| value | ค่าป้อนเข้า (ฟิลด์) | ผลต่าง PWM ที่จะเปลี่ยน | จำนวนเต็ม | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## หยุดมอเตอร์ DC {#stop_DC_motor}

หยุดเอาต์พุตของมอเตอร์ DC

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตมอเตอร์ DC | Mab, Mcd | พอร์ตของ `start_dc_motor` ครั้งล่าสุด |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## เริ่มใช้สเต็ปมอเตอร์ {#start_step_motor}

เริ่มใช้งานสเต็ปมอเตอร์

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## ตั้งค่าโหมดของสเต็ปมอเตอร์ {#set_step_motor_mode}

ตั้งโหมดที่จะใช้ควบคุมสเต็ปมอเตอร์  
ถ้าไม่ตั้งโหมดไว้ จะใช้โหมด 'กำลัง' เป็นค่าเริ่มต้น  
ข้อควรระวัง! ห้ามเปลี่ยนโหมดขณะที่สเต็ปมอเตอร์กำลังหมุน

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | โหมดการขับ | ปิด(off), ปกติ(wave_step), กำลัง(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## ตั้งค่าความเร็วของสเต็ปมอเตอร์ {#set_step_motor_speed}

ตั้งความเร็วของสเต็ปมอเตอร์  
ช่วงของค่าที่เลือกได้คือ -1000 ~ 1000  
ถ้าค่าเป็นลบ จะหมุนไปในทิศทางตรงข้าม

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| value | ค่าป้อนเข้า (ฟิลด์) | ความเร็วในการหมุน (PPS) | จำนวนเต็ม 0 ขึ้นไป | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## หมุนสเต็ปมอเตอร์ {#rotate_step_motor}

ตั้งจำนวนพัลส์ที่จะหมุนสเต็ปมอเตอร์  
ช่วงของค่าที่เลือกได้คือ 0 ~ 65535  
ถ้ายังไม่ได้เลือกความเร็วของสเต็ปมอเตอร์ มอเตอร์จะไม่หมุน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| value | ค่าป้อนเข้า (ฟิลด์) | จำนวนสเต็ปที่จะหมุน | จำนวนเต็ม | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## เปลี่ยนความเร็วของสเต็ปมอเตอร์ {#change_step_motor_speed}

เปลี่ยนความเร็วของสเต็ปมอเตอร์  
ช่วงของค่าที่เลือกได้คือ -2000 ~ 2000

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| value | ค่าป้อนเข้า (ฟิลด์) | ผลต่าง PPS ที่จะเปลี่ยน | จำนวนเต็ม | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## หยุดสเต็ปมอเตอร์ {#stop_step_motor}

หยุดสเต็ปมอเตอร์หรือปิดไฟเลี้ยง

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | วิธีการหยุด | หยุด(stop), ปิดไฟเลี้ยง(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## จำนวนสเต็ปสะสม {#step_motor_steps}

คืนจำนวนสเต็ปสะสมที่สเต็ปมอเตอร์หมุนไปแล้วจนถึงตอนนี้

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
