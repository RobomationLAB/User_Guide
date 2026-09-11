---
title: การตรวจจับมาร์กเกอร์ ArUco
---

# การตรวจจับมาร์กเกอร์ ArUco

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับมาร์กเกอร์ ArUco (ArucoMarker) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
aruco_marker = ArucoMarker(0)
# กรณีที่มีหลายอินสแตนซ์
aruco_marker_1 = ArucoMarker(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับมาร์กเกอร์ ArUco

<BlockImage module="AI/ArucoMarker" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## ตั้งจำนวนมาร์กเกอร์สูงสุด {#max_count}

ตั้งจำนวนมาร์กเกอร์สูงสุดที่รู้จำได้ ช่วงของจำนวนมาร์กเกอร์คือ 0 ~ 10

<BlockImage module="AI/ArucoMarker" id="max_count" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | จำนวนมาร์กเกอร์สูงสุด | จำนวนเต็ม 0 ~ 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหามาร์กเกอร์ที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงพื้นที่เพียงครั้งเดียว

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามมาร์กเกอร์ที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงพื้นที่บนหน้าจอ

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับมาร์กเกอร์บนหน้าจอกล้องหรือไม่

<BlockImage module="AI/ArucoMarker" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## ข้อมูลมาร์กเกอร์ {#marker_data}

คืนค่าตำแหน่ง/ขนาดของมาร์กเกอร์ตาม ID ที่กำหนด

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ID ของมาร์กเกอร์ | จำนวนเต็ม 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของค่าที่วัด | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## ระยะห่างระหว่างมาร์กเกอร์ {#marker_to_marker}

คืนค่าระยะห่างระหว่างมาร์กเกอร์สองอัน

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ค่าป้อนเข้า (บล็อก) | ID ของมาร์กเกอร์อันแรก | จำนวนเต็ม 0 ขึ้นไป | - |
| unit2 | ค่าป้อนเข้า (บล็อก) | ID ของมาร์กเกอร์อันที่สอง | จำนวนเต็ม 0 ขึ้นไป | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # ระยะห่าง
aruco_marker.get_distance(0, 2, 'horizontal')  # ระยะห่างแนวนอน
```

## ตรวจพบมาร์กเกอร์หรือไม่ {#marker_detected}

พบมาร์กเกอร์ที่มีค่า id ที่กำหนดหรือไม่

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ID ของมาร์กเกอร์ | จำนวนเต็ม 0 ขึ้นไป | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
