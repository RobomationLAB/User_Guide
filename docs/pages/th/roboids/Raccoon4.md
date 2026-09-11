---
title: RaccoonBot
---

# RaccoonBot

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก RaccoonBot ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
raccoon = RaccoonBot(0)
# กรณีที่มีหลายอินสแตนซ์
raccoon_1 = RaccoonBot(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เปิด / ปิดการควบคุมมอเตอร์ข้อต่อ {#motor}

กำหนดว่าจะปลดหรือคงการควบคุมที่กระทำกับมอเตอร์ของแต่ละข้อต่อไว้  
ถ้าไม่ได้ตั้งค่า จะเริ่มต้นในสถานะที่การควบคุมมอเตอร์ของทุกข้อต่อเปิดอยู่

<BlockImage module="roboids/Raccoon4" id="motor" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ | ทั้งหมด(-1), ข้อที่ 1(1), ข้อที่ 2(2), ข้อที่ 3(3), ข้อที่ 4(4) | -1 |
| on | ช่องทำเครื่องหมาย | เปิด / ปิดการควบคุมมอเตอร์ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# ทุกข้อต่อ, ปิดการควบคุมมอเตอร์
raccoon.motor(-1, False)

# ข้อต่อที่ 1, เปิดการควบคุมมอเตอร์
raccoon.motor(1, True)
```

## ตั้งความเร็วข้อต่อ {#speed_joint}

ตั้งความเร็วของข้อต่อที่เลือก

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| joint | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ | ทั้งหมด(-1), ข้อที่ 1(1), ข้อที่ 2(2), ข้อที่ 3(3), ข้อที่ 4(4) | - |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วข้อต่อ | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## เปลี่ยนความเร็วข้อต่อ {#change_speed_joint}

เปลี่ยนความเร็วของข้อต่อที่เลือก

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| joint | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ | ทั้งหมด(-1), ข้อที่ 1(1), ข้อที่ 2(2), ข้อที่ 3(3), ข้อที่ 4(4) | - |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## ตั้งความเร็วข้อต่อพร้อมกัน {#speed_joints}

ตั้งความเร็วของข้อต่อทั้งสี่พร้อมกันในครั้งเดียว

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (อาร์เรย์) | อาร์เรย์ความเร็ว 4 ข้อต่อ | `[joint1, joint2, joint3, joint4]`, แต่ละค่า -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# อาร์เรย์ลิเทอรัล [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# อาร์เรย์ที่เป็นตัวแปร
raccoon.set_speed_joints(*arr)
```

## ตั้งความเร็วการควบคุมมุมข้อต่อ {#angle_speed}

ตั้งความเร็วที่จะใช้ควบคุมข้อต่อในโหมดควบคุมมุม

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วสูงสุดในการควบคุมมุม | จำนวนเต็ม 0 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## ตั้งมุมข้อต่อ {#angle_joint}

ตั้งมุมของข้อต่อที่เลือก

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| joint | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ | ทั้งหมด(-1), ข้อที่ 1(1), ข้อที่ 2(2), ข้อที่ 3(3), ข้อที่ 4(4) | - |
| data | ค่าป้อนเข้า (บล็อก) | มุมข้อต่อ (องศา) | ดูตารางด้านบน (จำกัดค่าอัตโนมัติ) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## เปลี่ยนมุมข้อต่อ {#change_angle_joint}

เปลี่ยนมุมของข้อต่อที่เลือก

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| joint | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ | ทั้งหมด(-1), ข้อที่ 1(1), ข้อที่ 2(2), ข้อที่ 3(3), ข้อที่ 4(4) | - |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างมุมที่จะเปลี่ยน (องศา) | ดูตารางด้านบน (จำกัดค่าอัตโนมัติ) | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## ตั้งมุมข้อต่อพร้อมกัน {#angle_joints}

ตั้งมุมของข้อต่อทั้งสี่พร้อมกันในครั้งเดียว

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (อาร์เรย์) | อาร์เรย์มุม 4 ข้อต่อ หรือชื่อท่า | อาร์เรย์ `[j1, j2, j3, j4]` | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# อาร์เรย์ที่ระบุชัดเจน
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## กำหนดสถานะเริ่มต้นของข้อต่อ {#default_angle_joints}

ตั้งมุมของข้อต่อทั้งสี่เป็นท่าที่กำหนดไว้ล่วงหน้า (`'zero'`, `'park'`, `'home'`)

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ดรอปดาวน์ | ชื่อท่า | `'zero'` / `'park'` / `'home'` | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

ท่าพรีเซ็ต:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# ท่าพรีเซ็ต
raccoon.set_angle_joints('home', wait=True)
```

## บันทึกมุมข้อต่อ {#save_encoder}

บันทึกค่าเอนโคเดอร์ปัจจุบันลงในตัวแปรที่ต้องการ

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| encoder | ตัวแปร | ชื่อตัวแปรที่จะบันทึก | ตัวแปร | - |
| data | ค่าป้อนเข้า (อาร์เรย์) | อาร์เรย์เริ่มต้นที่จะบันทึก | อาร์เรย์ 4 สมาชิก หรืออาร์เรย์ว่าง | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## ตั้งค่าพิกัดที่กำหนด {#set_coordinate}

เคลื่อนแขนกลโดยตั้งค่าพิกัดที่กำหนด  
ช่วงของแต่ละพิกัดเป็นดังนี้  
อ้างอิงจากข้อมือ => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
อ้างอิงจากกริปเปอร์ => ช่วงอาจต่างกันไปตามอุปกรณ์ที่เชื่อมต่อ  
ทิศทางของกริปเปอร์จะถูกตรึงให้ขนานหรือตั้งฉากกับพื้น  
ถ้าป้อนพิกัดที่เคลื่อนไปไม่ได้ คำสั่งจะถูกข้าม

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| origin | ตัวเลือกดรอปดาวน์ | จุดอ้างอิง | ข้อมือ(wrist), อุปกรณ์ปลายแขน(end_effector) | - |
| pos | ตัวเลือกดรอปดาวน์ | แกน | x, y, z | - |
| data | ค่าป้อนเข้า (บล็อก) | ค่าพิกัด | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วย | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# ตั้งพิกัด x เป็น 10cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# พิกัด z โดยอ้างอิงจาก end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## เปลี่ยนค่าพิกัดที่กำหนด {#change_coordinate}

เคลื่อนแขนกลโดยเปลี่ยนค่าพิกัดที่กำหนดจากตำแหน่งปัจจุบัน  
ช่วงของแต่ละพิกัดเป็นดังนี้  
อ้างอิงจากข้อมือ => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
อ้างอิงจากกริปเปอร์ => ช่วงอาจต่างกันไปตามอุปกรณ์ที่เชื่อมต่อ  
ทิศทางของกริปเปอร์จะถูกตรึงให้ขนานหรือตั้งฉากกับพื้น  
ถ้าป้อนพิกัดที่เคลื่อนไปไม่ได้ คำสั่งจะถูกข้าม

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| origin | ตัวเลือกดรอปดาวน์ | จุดอ้างอิง | ข้อมือ(wrist), อุปกรณ์ปลายแขน(end_effector) | - |
| pos | ตัวเลือกดรอปดาวน์ | แกน | x, y, z | - |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างพิกัดที่จะเปลี่ยน | จำนวนจริง | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วย | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## เคลื่อนไปยังพิกัด xyz {#set_coordinates}

ตั้งพิกัด x, y, z เป็นค่าที่กำหนดพร้อมกันในครั้งเดียว  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| origin | ตัวเลือกดรอปดาวน์ | จุดอ้างอิง | ข้อมือ(wrist), อุปกรณ์ปลายแขน(end_effector) | - |
| x | ค่าป้อนเข้า (บล็อก) | พิกัด x | จำนวนจริง | - |
| y | ค่าป้อนเข้า (บล็อก) | พิกัด y | จำนวนจริง | - |
| z | ค่าป้อนเข้า (บล็อก) | พิกัด z | จำนวนจริง | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วย | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## ตั้งการล็อกอุปกรณ์ปลายแขน {#lock}

ตั้งทิศทางที่จะล็อกกริปเปอร์ หลังจากตั้งตัวเลือกเป็นแนวนอนหรือแนวตั้งแล้ว จะไม่สามารถควบคุมความเร็วหรือมุมของข้อต่อที่ 4 ได้

<BlockImage module="roboids/Raccoon4" id="lock" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| mode | ตัวเลือกดรอปดาวน์ | ทิศทางการล็อก | ไม่มี(none), แนวนอน(horizontal), แนวตั้ง(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## หยิบ / วางสิ่งของด้วยอุปกรณ์ปลายแขน {#end_effector}

หยิบหรือวางสิ่งของด้วยอุปกรณ์ปลายแขน  
เรียกใช้เมธอดหนึ่งในสองตามค่าดรอปดาวน์ unit

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | การทำงาน | หยิบ (ปิด)(pick), วาง (เปิด)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## ชนิดของอุปกรณ์ปลายแขน {#end_effector_device}

หมายเลขกริปเปอร์ที่เชื่อมต่ออยู่ในปัจจุบัน  
(1, 3, 4: กริปเปอร์แบบคีบ, 2: กริปเปอร์สุญญากาศ)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## สถานะของอุปกรณ์ปลายแขน {#end_effector_status}

สถานะที่กริปเปอร์กำลังจับสิ่งของอยู่  
(0: สถานะวางแล้ว, 1: สถานะจับอยู่)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## เล่นโน้ต {#sound_note}

RaccoonBot เล่นโน้ตที่กำหนด

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## เล่นคลิปเสียง {#sound_clip}

RaccoonBot เล่นคลิปเสียงที่กำหนด

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| clip | ตัวเลือกดรอปดาวน์ | ชื่อคลิปเสียง | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` ฯลฯ | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ RaccoonBot

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## ค่าเอนโคเดอร์ {#encoder}

ค่าเอนโคเดอร์ของข้อต่อที่เลือก

<BlockImage module="roboids/Raccoon4" id="encoder" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| joint | ตัวเลือกดรอปดาวน์ | หมายเลขข้อต่อ (หรือทุกข้อต่อ) | 1, 2, 3, 4, ทั้งหมด(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# ทุกข้อต่อ
raccoon.encoder(-1)
```

## พิกัดขององค์ประกอบที่เลือก {#coordinate}

คืนพิกัด xyz ปัจจุบันของจุดอ้างอิง  
ถ้าละ `pos` ไว้ จะคืนอาร์เรย์ `[x, y, z]` ทั้งหมด ถ้าระบุจะคืนเฉพาะค่าของแกนนั้น

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| origin | ตัวเลือกดรอปดาวน์ | จุดอ้างอิง | ข้อมือ(wrist), อุปกรณ์ปลายแขน(end_effector) | wrist |
| pos | ตัวเลือกดรอปดาวน์ | แกน (หรือทั้งหมด) | x, y, z, xyz (ถ้าละไว้จะคืนอาร์เรย์ทั้งหมด) | None (ทั้งหมด) |

### Python
```python
raccoon = RaccoonBot(0)

# แกนที่กำหนด
raccoon.get_coordinates('wrist', 'x')

# ทั้งหมด (อาร์เรย์ 3 สมาชิก)
raccoon.get_coordinates('wrist')
```

## ค่าความแรงของสัญญาณ {#signal_strength}

ความแรงของสัญญาณ

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/Raccoon4" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## ปุ่มถูกกดอยู่หรือไม่? {#button}

ปุ่มที่เลือกถูกกดอยู่ หรือเกิดเหตุการณ์คลิกหรือไม่

<BlockImage module="roboids/Raccoon4" id="button" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อปุ่ม | สอน(teach), เล่น(play), เปิดปิดเครื่อง(power), ลบ(delete), ปุ่มใดก็ได้(any) | - |
| event | ตัวเลือกดรอปดาวน์ | ชนิดของเหตุการณ์ | กดอยู่(pressed), คลิก(click), คลิกค้าง(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## ตั้งความเร็วสายพาน {#conveyor_speed}

ตั้งความเร็วของสายพานลำเลียง ช่วงความเร็วคือ -100 ~ 100

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ความเร็วสายพาน | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## เลื่อนสายพานตามระยะทาง {#conveyor_distance}

เลื่อนสายพานไปตามระยะทางที่กำหนด

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ระยะทางที่เลื่อน | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยระยะทาง | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## เปลี่ยนความเร็วสายพาน {#change_conveyor_speed}

เปลี่ยนความเร็วของสายพานลำเลียง

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## หยุดสายพาน {#stop_conveyor}

หยุดสายพาน

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## สายพานกำลังทำงาน? {#conveyor_running}

สายพานลำเลียงกำลังทำงานอยู่หรือไม่

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## ปุ่มสายพานถูกกดอยู่หรือไม่? {#conveyor_button}

ปุ่มของสายพานถูกกดอยู่ หรือเกิดเหตุการณ์คลิกหรือไม่

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| event | ตัวเลือกดรอปดาวน์ | ชนิดของเหตุการณ์ | กดอยู่(pressed), คลิก(click), คลิกค้าง(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
