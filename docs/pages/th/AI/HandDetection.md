---
title: การตรวจจับมือ
---

# การตรวจจับมือ

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อกการตรวจจับมือ (HandDetection) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
hand_detection = HandDetection(0)
# กรณีที่มีหลายอินสแตนซ์
hand_detection_1 = HandDetection(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เลือกอุปกรณ์กล้อง {#device}

ตั้งกล้องที่จะใช้ตรวจจับมือ

<BlockImage module="AI/HandDetection" id="device" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่ออุปกรณ์กล้อง | ป้ายชื่อกล้องของระบบ | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## โหลดโมเดล {#load_model}

โหลดโมเดลมือที่ผ่านการเรียนรู้แล้ว การใช้ฟังก์ชันต่าง ๆ ของโมดูล 'การตรวจจับมือ' จำเป็นต้องทำขั้นตอนนี้ก่อนเสมอ

<BlockImage module="AI/HandDetection" id="load_model" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| wait | ช่องทำเครื่องหมาย | รอจนโหลดเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## ตั้งจำนวนมือสูงสุด {#max_hands}

กำหนดว่าจะตรวจจับมือโดยยึดมือข้างเดียวหรือสองมือ

<BlockImage module="AI/HandDetection" id="max_hands" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | จำนวนมือ | มือข้างเดียว(one), สองมือ(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## ตรวจจับหนึ่งครั้ง {#detect_once}

ค้นหามือที่อยู่บนหน้าจอปัจจุบัน แล้วแสดงผลเพียงครั้งเดียว

<BlockImage module="AI/HandDetection" id="detect_once" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## เริ่ม / หยุดการตรวจจับต่อเนื่อง {#detect_continuous}

ติดตามมือที่อยู่บนหน้าจอปัจจุบันอย่างต่อเนื่อง และแสดงผลบนหน้าจอ

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | เริ่ม(start), หยุด(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## แสดงผลลัพธ์การตรวจจับ {#display}

กำหนดว่าจะแสดงผลการตรวจจับมือบนหน้าจอกล้องหรือไม่

<BlockImage module="AI/HandDetection" id="display" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดการแสดงผล | แสดง(on=True), ซ่อน(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## พิกัดของส่วนต่าง ๆ ของมือ {#hand_data}

คืนค่าข้อมูลตำแหน่งฝ่ามือ/ข้อมือของมือที่กำหนด

<BlockImage module="AI/HandDetection" id="hand_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| side | ตัวเลือกดรอปดาวน์ | ข้างของมือ | ซ้าย(left), ขวา(right) | - |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนของมือ | ฝ่ามือ(palm), ข้อมือ(wrist) | - |
| pos | ตัวเลือกดรอปดาวน์ | ชนิดของพิกัด/ขนาด | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## พิกัดข้อนิ้ว {#joint_data}

คืนค่าพิกัดข้อของนิ้วที่กำหนด

<BlockImage module="AI/HandDetection" id="joint_data" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| side | ตัวเลือกดรอปดาวน์ | ข้างของมือ | ซ้าย(left), ขวา(right) | - |
| unit | ตัวเลือกดรอปดาวน์ | นิ้ว | นิ้วโป้ง(thumb), นิ้วชี้(index), นิ้วกลาง(middle), นิ้วนาง(ring), นิ้วก้อย(pinky) | - |
| joint | ตัวเลือกดรอปดาวน์ | ตำแหน่งข้อนิ้ว | ข้อนิ้วแรก(first), ข้อนิ้วที่สอง(second), ข้อนิ้วที่สาม(third), ปลายนิ้ว(last) | - |
| pos | ตัวเลือกดรอปดาวน์ | พิกัด | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## ข้อมูลกรอบสี่เหลี่ยมของมือ {#hand_square}

คืนค่าตำแหน่ง/ขนาดของกรอบสี่เหลี่ยมรอบพื้นที่มือที่กำหนด

<BlockImage module="AI/HandDetection" id="hand_square" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| side | ตัวเลือกดรอปดาวน์ | ข้างของมือ | ซ้าย(left), ขวา(right) | - |
| unit | ตัวเลือกดรอปดาวน์ | ส่วนของมือ | มือ(hand), ฝ่ามือ(palm) | - |
| pos | ตัวเลือกดรอปดาวน์ | ข้อมูลกรอบสี่เหลี่ยม | ตำแหน่ง x ต่ำสุด(min_x), ตำแหน่ง x สูงสุด(max_x), ตำแหน่ง y ต่ำสุด(min_y), ตำแหน่ง y สูงสุด(max_y), ความกว้าง(width), ความสูง(height), พื้นที่(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## ระยะห่างระหว่างมือกับมือ {#hand_to_hand_distance}

คืนค่าระยะห่างระหว่างสองส่วนของมือ

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ค่าป้อนเข้า (ข้อความ) | ส่วนของมือที่หนึ่ง | มือ: `'side_unit'` (เช่น `'left_palm'`) side=left/right, unit=palm/wrist/hand  | - |
| unit2 | ค่าป้อนเข้า (ข้อความ) | ส่วนของมือที่สอง | มือ: `'side_unit'` (เช่น `'right_palm'`) side=left/right, unit=palm/wrist/hand | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# มือ ↔ มือ / ระยะห่าง
hand_detection.get_distance('left_palm', 'right_palm')  
```

## ระยะห่างระหว่างมือกับนิ้ว {#hand_to_joint_distance}

คืนค่าระยะห่างระหว่างส่วนของมือกับข้อนิ้ว

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ค่าป้อนเข้า (ข้อความ) | ส่วนที่หนึ่ง | มือ: `'side_unit'` (เช่น `'left_palm'`) side=left/right, unit=palm/wrist/hand | - |
| unit2 | ค่าป้อนเข้า (ข้อความ) | ส่วนที่สอง | นิ้ว: `'side_unit_joint'` (เช่น `'right_index_first'`) unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# มือ ↔ ข้อนิ้ว / ระยะห่างแนวนอน
hand_detection.get_distance('left_palm', 'right_index_first')
```

## ระยะห่างระหว่างนิ้วกับนิ้ว {#joint_to_joint_distance}

คืนค่าระยะห่างระหว่างข้อนิ้วสองข้อ

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit1 | ค่าป้อนเข้า (ข้อความ) | ส่วนที่หนึ่ง | นิ้ว: `'side_unit_joint'` (เช่น `'left_thumb_last'`) unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | ค่าป้อนเข้า (ข้อความ) | ส่วนที่สอง | นิ้ว: `'side_unit_joint'` (เช่น `'right_index_first'`) unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | ตัวเลือกดรอปดาวน์ | ชนิดของระยะห่าง | ระยะห่าง(ละไว้ หรือ None), ระยะห่างแนวนอน(horizontal), ระยะห่างแนวตั้ง(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# ข้อนิ้ว ↔ ข้อนิ้ว / ระยะห่างแนวตั้ง
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## สถานะโมเดล {#model_state}

คืนสถานะการโหลดโมเดลมือ  
คืนค่า 0 ถ้ายังไม่ได้โหลด, 1 ถ้ากำลังโหลด, และ 2 ถ้าโหลดเสร็จแล้ว

<BlockImage module="AI/HandDetection" id="model_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## ตรวจพบมือหรือไม่ {#detected}

พบมือหรือไม่

<BlockImage module="AI/HandDetection" id="detected" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
