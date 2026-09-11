---
title: การตรวจจับใบหน้าแบบละเอียด
---

# การตรวจจับใบหน้าแบบละเอียด

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับใบหน้าแบบละเอียด (DetailedFaceDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
detailed_face_detection = DetailedFaceDetection(0)
# กรณีที่มีหลายอินสแตนซ์
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับใบหน้าแบบละเอียด

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลใบหน้าที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การตรวจจับใบหน้าแบบละเอียด' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาใบหน้าที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงผลเพียงครั้งเดียว

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามใบหน้าที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงผลบนหน้าจอ

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับใบหน้าแบบละเอียดบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## พิกัดของส่วนต่าง ๆ บนใบหน้า {#face_data}

คืนค่าพิกัดของแต่ละส่วนบนใบหน้า

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนบนใบหน้า | ใบหน้า(face), ตาซ้าย(left eye), ตาขวา(right eye), ปาก(mouth), จมูก(nose), ริมฝีปากบน(upper lip), ริมฝีปากล่าง(lower lip), มุมปากซ้าย(left lip), มุมปากขวา(right lip), ตาดำซ้าย(left pupil), ตาดำขวา(right pupil) | - |
| pos | ตัวเลือกดรอปดาวน์ | พิกัด | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## ข้อมูลกรอบสี่เหลี่ยมของส่วนบนใบหน้า {#face_square}

คืนค่าตำแหน่ง/ขนาดของกรอบสี่เหลี่ยมรอบแต่ละส่วนบนใบหน้า

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนบนใบหน้า | ใบหน้า(face), ตาซ้าย(left eye), ตาขวา(right eye), ปาก(mouth) | - |
| pos | ตัวเลือกดรอปดาวน์ | ข้อมูลกรอบสี่เหลี่ยม | ตำแหน่ง x ต่ำสุด(min_x), ตำแหน่ง x สูงสุด(max_x), ตำแหน่ง y ต่ำสุด(min_y), ตำแหน่ง y สูงสุด(max_y), ความกว้าง(width), ความสูง(height), พื้นที่(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## ระยะห่างระหว่างสองส่วน {#distance}

คืนค่าระยะห่างระหว่างสองส่วนบนใบหน้า

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ตัวเลือกดรอปดาวน์ | ส่วนที่หนึ่ง | ชื่อส่วนบนใบหน้า | - |
| unit2 | ตัวเลือกดรอปดาวน์ | ส่วนที่สอง | ชื่อส่วนบนใบหน้า | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # ระยะห่าง
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # ระยะห่างแนวนอน
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # ระยะห่างแนวตั้ง
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลใบหน้า  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## ตรวจพบใบหน้าหรือไม่ {#detected}

พบใบหน้าหรือไม่

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
