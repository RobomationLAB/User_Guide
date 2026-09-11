---
title: การตรวจจับร่างกาย
---

# การตรวจจับร่างกาย

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับร่างกาย (BodyDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
body_detection = BodyDetection(0)
# กรณีที่มีหลายอินสแตนซ์
body_detection_1 = BodyDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับร่างกาย

<BlockImage module="AI/BodyDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลร่างกายที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การตรวจจับร่างกาย' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/BodyDetection" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาร่างกายที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงผลเพียงครั้งเดียว

<BlockImage module="AI/BodyDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามร่างกายที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงผลบนหน้าจอ

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับร่างกายบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/BodyDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## พิกัดของส่วนต่าง ๆ ของร่างกาย {#body_data}

คืนค่าพิกัดของแต่ละส่วนของร่างกาย

<BlockImage module="AI/BodyDetection" id="body_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนของร่างกาย | จมูก(nose), ปาก(mouth), ตาซ้าย(left eye), ตาขวา(right eye), หูซ้าย(left ear), หูขวา(right ear), ไหล่ซ้าย(left shoulder), ไหล่ขวา(right shoulder), ข้อศอกซ้าย(left elbow), ข้อศอกขวา(right elbow), ข้อมือซ้าย(left wrist), ข้อมือขวา(right wrist), มือซ้าย(left hand), มือขวา(right hand), สะโพกซ้าย(left hip), สะโพกขวา(right hip), เข่าซ้าย(left knee), เข่าขวา(right knee), ข้อเท้าซ้าย(left ankle), ข้อเท้าขวา(right ankle), เท้าซ้าย(left foot), เท้าขวา(right foot) | - |
| pos | ตัวเลือกดรอปดาวน์ | พิกัด | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## ระยะห่างระหว่างสองส่วน {#body_distance}

คืนค่าระยะห่างระหว่างสองส่วนของร่างกาย

<BlockImage module="AI/BodyDetection" id="body_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ตัวเลือกดรอปดาวน์ | ส่วนของร่างกายที่หนึ่ง | (ดูตารางส่วนของร่างกายด้านบน) | - |
| unit2 | ตัวเลือกดรอปดาวน์ | ส่วนของร่างกายที่สอง | (ดูตารางส่วนของร่างกายด้านบน) | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # ระยะห่าง
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # ระยะห่างแนวนอน
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # ระยะห่างแนวตั้ง
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลร่างกาย  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/BodyDetection" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## ตรวจพบร่างกายหรือไม่ {#detected}

พบร่างกายหรือไม่

<BlockImage module="AI/BodyDetection" id="detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
