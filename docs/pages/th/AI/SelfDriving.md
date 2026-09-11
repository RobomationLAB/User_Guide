---
title: การขับเคลื่อนอัตโนมัติด้วยกล้อง
---

# การขับเคลื่อนอัตโนมัติด้วยกล้อง

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการขับเคลื่อนอัตโนมัติด้วยกล้อง (SelfDriving) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
self_driving = SelfDriving(0)
# กรณีที่มีหลายอินสแตนซ์
self_driving_1 = SelfDriving(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ขับเคลื่อนอัตโนมัติด้วยกล้อง

<BlockImage module="AI/SelfDriving" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## ตั้งสีช่องทาง {#set_lane_color}

ตั้งสีของช่องทางด้านซ้าย/ขวา

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| left | ตัวเลือกดรอปดาวน์ | สีของช่องทางซ้าย | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue) | - |
| right | ตัวเลือกดรอปดาวน์ | สีของช่องทางขวา | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาสี/ช่องทางที่เลือกบนหน้าจอ แล้วแสดงพื้นที่เพียงครั้งเดียว

<BlockImage module="AI/SelfDriving" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามสี/ช่องทางที่เลือกบนหน้าจออย่างต่อเนื่อง และแสดงพื้นที่บนหน้าจอ

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับสี/ช่องทางบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/SelfDriving" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## ข้อมูลช่องทาง {#lane_data}

คืนค่าตำแหน่งหรือระยะทางของช่องทางที่กำหนด

<BlockImage module="AI/SelfDriving" id="lane_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| lane | ตัวเลือกดรอปดาวน์ | ช่องทาง | ซ้าย(left), ขวา(right) | - |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของค่าที่วัด | x, ระยะทาง(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## ข้อมูลสี {#color_data}

คืนค่าตำแหน่ง/ขนาดของสีที่กำหนด

<BlockImage module="AI/SelfDriving" id="color_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue) | - |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของพิกัด/ขนาด | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## ระยะทางระหว่างสองสี {#color_to_color}

คืนค่าระยะทางระหว่างพื้นที่ของสองสี

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ตัวเลือกดรอปดาวน์ | สีที่หนึ่ง | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue) | - |
| unit2 | ตัวเลือกดรอปดาวน์ | สีที่สอง | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue) | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะทาง | ระยะทาง(ละไว้ หรือ None), ระยะทางแนวนอน(horizontal), ระยะทางแนวตั้ง(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # ระยะทาง
self_driving.get_distance('green', 'blue', 'horizontal')  # ระยะทางแนวนอน
```

## ตรวจพบเลนหรือไม่ {#lane_detected}

พบเลนที่กำหนดหรือไม่

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| lane | ตัวเลือกดรอปดาวน์ | เลน | ซ้าย(left), ขวา(right), ทั้งสอง(both), ใดก็ได้(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## ตรวจพบพื้นที่สีหรือไม่ {#color_detected}

พบพื้นที่ของสีที่กำหนดหรือไม่

<BlockImage module="AI/SelfDriving" id="color_detected" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | ตัวเลือกดรอปดาวน์ | ชื่อสี | สีแดง(red), สีเขียว(green), สีน้ำเงิน(blue), ใดก็ได้(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
