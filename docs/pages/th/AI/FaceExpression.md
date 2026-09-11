---
title: การแสดงสีหน้า
---

# การแสดงสีหน้า

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการแสดงสีหน้า (FaceExpression) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
face_expression = FaceExpression(0)
# กรณีที่มีหลายอินสแตนซ์
face_expression_1 = FaceExpression(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้รู้จำอายุ เพศ และสีหน้า

<BlockImage module="AI/FaceExpression" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลอายุ เพศ และสีหน้าที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การแสดงสีหน้า' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/FaceExpression" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

วิเคราะห์ใบหน้าที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงอายุ เพศ และสีหน้าที่คาดการณ์ได้เพียงครั้งเดียว

<BlockImage module="AI/FaceExpression" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

วิเคราะห์ใบหน้าที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง แล้วแสดงอายุ เพศ และสีหน้าที่คาดการณ์ได้บนหน้าจอ

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการรู้จำอายุ เพศ และสีหน้าบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/FaceExpression" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## อายุ {#age}

อายุ

<BlockImage module="AI/FaceExpression" id="age" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## เพศ {#gender}

เพศ

<BlockImage module="AI/FaceExpression" id="gender" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## สีหน้า {#expression}

สีหน้า

<BlockImage module="AI/FaceExpression" id="expression" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## ตรวจพบเพศหรือไม่ {#gender_detected}

รู้จำเพศได้หรือไม่

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## เป็นเพศที่กำหนดหรือไม่? {#gender_check}

คืนค่า **จริง (True) / เท็จ (False)** ว่าเพศที่รู้จำได้ตรงกับค่าที่กำหนดหรือไม่

<BlockImage module="AI/FaceExpression" id="gender_check" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | เพศ | ชาย(male), หญิง(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## ความมั่นใจของเพศ {#gender_confidence}

ความน่าจะเป็น (ความมั่นใจ) ที่จะเป็นเพศที่เลือก

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | เพศ | ชาย(male), หญิง(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## ตรวจพบสีหน้าหรือไม่ {#expression_detected}

รู้จำสีหน้าได้หรือไม่

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## เป็นสีหน้าที่กำหนดหรือไม่? {#expression_check}

คืนค่า **จริง (True) / เท็จ (False)** ว่าสีหน้าที่รู้จำได้ตรงกับค่าที่กำหนดหรือไม่

<BlockImage module="AI/FaceExpression" id="expression_check" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | สีหน้า | โกรธ(angry), รังเกียจ(disgusted), กลัว(fearful), มีความสุข(happy), เฉยเมย(neutral), เศร้า(sad), ประหลาดใจ(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## ความมั่นใจของสีหน้า {#expression_confidence}

ความน่าจะเป็น (ความมั่นใจ) ที่จะเป็นสีหน้าที่เลือก

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | สีหน้า | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลอายุ เพศ และสีหน้า  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/FaceExpression" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
