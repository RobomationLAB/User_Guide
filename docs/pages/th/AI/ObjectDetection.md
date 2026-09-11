---
title: การตรวจจับวัตถุ
---

# การตรวจจับวัตถุ

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับวัตถุ (ObjectDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
object_detection = ObjectDetection(0)
# กรณีที่มีหลายอินสแตนซ์
object_detection_1 = ObjectDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับวัตถุ

<BlockImage module="AI/ObjectDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลวัตถุที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การตรวจจับวัตถุ' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/ObjectDetection" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## ตั้งจำนวนวัตถุสูงสุด {#max_objects}

ตั้งจำนวนวัตถุสูงสุดที่ค้นหาได้ ช่วงของจำนวนวัตถุคือ 0 ~ 10

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | จำนวนวัตถุสูงสุด | จำนวนเต็ม 0 ~ 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## ตั้งค่าขีดแบ่งความมั่นใจ {#confidence_threshold}

ตั้งค่าความน่าจะเป็น (ความมั่นใจ) ต่ำสุดของการตรวจจับวัตถุ วัตถุจะแสดงบนหน้าจอเฉพาะเมื่อความน่าจะเป็น (ความมั่นใจ) มากกว่าค่านี้เท่านั้น ช่วงของความน่าจะเป็น (ความมั่นใจ) คือ 0 ~ 1

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ขีดแบ่งความมั่นใจ | จำนวนจริง 0 ~ 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหาวัตถุที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงผลเพียงครั้งเดียว

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามวัตถุที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงผลบนหน้าจอ

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับวัตถุบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/ObjectDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## ข้อมูลตำแหน่งวัตถุ {#object_data}

คืนค่าตำแหน่ง/ขนาดของวัตถุที่กำหนด

<BlockImage module="AI/ObjectDetection" id="object_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุ | คลาสของวัตถุ 80 รายการ (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'` ฯลฯ) | - |
| pos | ตัวเลือกดรอปดาวน์ | พิกัด | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## ข้อมูลกรอบสี่เหลี่ยมของวัตถุ {#object_square}

คืนค่าตำแหน่ง/ขนาดของกรอบสี่เหลี่ยมรอบพื้นที่วัตถุที่กำหนด

<BlockImage module="AI/ObjectDetection" id="object_square" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุ | คลาสของวัตถุ 80 รายการ | - |
| pos | ตัวเลือกดรอปดาวน์ | ข้อมูลกรอบสี่เหลี่ยม | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## ระยะทางระหว่างสองวัตถุ {#object_distance}

คืนค่าระยะทางระหว่างคลาสของวัตถุสองรายการ

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุที่หนึ่ง | คลาสของวัตถุ 80 รายการ | - |
| unit2 | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุที่สอง | คลาสของวัตถุ 80 รายการ | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะทาง | ระยะทาง(ละไว้ หรือ None), ระยะทางแนวนอน(horizontal), ระยะทางแนวตั้ง(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # ระยะทาง
object_detection.get_distance('person', 'car', 'horizontal')  # ระยะทางแนวนอน
```

## ความมั่นใจของวัตถุ {#object_confidence}

ความน่าจะเป็น (ความมั่นใจ) ที่จะเป็นวัตถุที่เลือก

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุ | คลาสของวัตถุ 80 รายการ | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลวัตถุ  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/ObjectDetection" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## ตรวจพบวัตถุหรือไม่ {#detected}

พบวัตถุหรือไม่

<BlockImage module="AI/ObjectDetection" id="detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## ตรวจพบวัตถุที่กำหนดหรือไม่? {#object_detected}

พบวัตถุที่เลือกหรือไม่

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อวัตถุ | คลาสของวัตถุ 80 รายการ | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
