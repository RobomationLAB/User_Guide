---
title: การตรวจจับใบหน้า
---

# การตรวจจับใบหน้า

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับใบหน้า (FaceDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
face_detection = FaceDetection(0)
# กรณีที่มีหลายอินสแตนซ์
face_detection_1 = FaceDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับใบหน้า

<BlockImage module="AI/FaceDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลใบหน้าที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การตรวจจับใบหน้า' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/FaceDetection" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาใบหน้าที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงผลเพียงครั้งเดียว

<BlockImage module="AI/FaceDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามใบหน้าที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงผลบนหน้าจอ

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับใบหน้าบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/FaceDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## ตำแหน่งของส่วนต่าง ๆ บนใบหน้า {#face_data}

คืนค่าพิกัดตำแหน่งของใบหน้าหรือส่วนต่าง ๆ บนใบหน้า

<BlockImage module="AI/FaceDetection" id="face_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนบนใบหน้า | ใบหน้า(face), ตาซ้าย(left eye), ตาขวา(right eye), หูซ้าย(left ear), หูขวา(right ear), จมูก(nose), ปาก(mouth) | - |
| pos | ตัวเลือกดรอปดาวน์ | ชนิดของพิกัด | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## ข้อมูลกรอบสี่เหลี่ยมรอบใบหน้า {#face_square}

คืนค่าตำแหน่ง/ขนาดของกรอบสี่เหลี่ยมรอบพื้นที่ใบหน้า

<BlockImage module="AI/FaceDetection" id="face_square" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| pos | ตัวเลือกดรอปดาวน์ | ข้อมูลกรอบสี่เหลี่ยม | ตำแหน่ง x ต่ำสุด(min_x), ตำแหน่ง x สูงสุด(max_x), ตำแหน่ง y ต่ำสุด(min_y), ตำแหน่ง y สูงสุด(max_y), ความกว้าง(width), ความสูง(height), พื้นที่(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## ระยะห่างระหว่างสองส่วน {#distance}

คืนค่าระยะห่างระหว่างสองส่วนบนใบหน้า

<BlockImage module="AI/FaceDetection" id="distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ตัวเลือกดรอปดาวน์ | ส่วนที่หนึ่ง | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | ตัวเลือกดรอปดาวน์ | ส่วนที่สอง | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # ระยะห่าง
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # ระยะห่างแนวนอน
face_detection.get_distance('nose', 'mouth', 'vertical')  # ระยะห่างแนวตั้ง
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลใบหน้า  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/FaceDetection" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## ตรวจพบใบหน้าหรือไม่ {#detected}

พบใบหน้าหรือไม่

<BlockImage module="AI/FaceDetection" id="detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
