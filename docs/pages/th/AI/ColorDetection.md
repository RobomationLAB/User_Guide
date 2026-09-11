---
title: การตรวจจับสี
---

# การตรวจจับสี

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับสี (ColorDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
color_detection = ColorDetection(0)
# กรณีที่มีหลายอินสแตนซ์
color_detection_1 = ColorDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับสี

<BlockImage module="AI/ColorDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## เพิ่มสีเป้าหมาย {#register_color}

เพิ่มสีที่จะรู้จำผ่านการตรวจจับสี

<BlockImage module="AI/ColorDetection" id="register_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | ดำ(black), แดง(red), เหลือง(yellow), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วงแดง(magenta), ขาว(white) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## ลบสีเป้าหมาย {#delete_color}

ลบสีนั้นออกจากสีที่จะรู้จำผ่านการตรวจจับสี

<BlockImage module="AI/ColorDetection" id="delete_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | ดำ(black), แดง(red), เหลือง(yellow), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วงแดง(magenta), ขาว(white) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## ตั้งเงื่อนไขพื้นที่ {#area_condition}

กำหนดขนาดต่ำสุดของพื้นที่สีที่จะรู้จำ พื้นที่จะแสดงบนหน้าจอเฉพาะเมื่อมีขนาดมากกว่าค่านี้เท่านั้น

<BlockImage module="AI/ColorDetection" id="area_condition" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ค่าเงื่อนไขพื้นที่ | จำนวนจริง 0 ขึ้นไป | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาสีที่อยู่บนหน้าจอปัจจุบันจากสีที่รู้จำได้ แล้วแสดงพื้นที่เพียงครั้งเดียว

<BlockImage module="AI/ColorDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามสีที่อยู่บนหน้าจอปัจจุบันจากสีที่รู้จำได้อย่างต่อเนื่อง และแสดงพื้นที่บนหน้าจอ

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับสีบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/ColorDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## ข้อมูลสี {#color_data}

คืนค่าตำแหน่ง/ขนาดของสีที่กำหนด

<BlockImage module="AI/ColorDetection" id="color_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | ดำ(black), แดง(red), เหลือง(yellow), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วงแดง(magenta), ขาว(white) | - |
| pos | ตัวเลือกดรอปดาวน์ | ชนิดของพิกัด/ขนาด | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## ตรวจพบสีที่กำหนดหรือไม่ {#color_detected}

พบสีที่เลือกหรือไม่

<BlockImage module="AI/ColorDetection" id="color_detected" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | ดำ(black), แดง(red), เหลือง(yellow), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วงแดง(magenta), ขาว(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
