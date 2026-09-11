---
title: CSD-01 สวิตช์กด
---

# CSD-01 สวิตช์กด

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก CSD-01 สวิตช์กด (CSD01) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งพอร์ตอินพุต {#set_input_port}

ตั้งพอร์ตที่ CSD01 (Tact Switch) เชื่อมต่ออยู่

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตที่จะเชื่อมต่อ | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## ค่าอินพุตปุ่ม {#button_input}

ค่าอินพุตปุ่มของพอร์ตที่เลือก  
คืนค่า 0 ถ้าปุ่มถูกกดอยู่ และ 1 ถ้าไม่ได้ถูกกด

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตที่จะอ่าน | Sa, Sb, Sc | พอร์ตของ `set_port` ครั้งล่าสุด |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## ปุ่มถูกกดอยู่หรือไม่? {#button_pressed}

ปุ่มสวิตช์ที่เชื่อมต่อกับพอร์ตที่เลือกถูกกดอยู่หรือไม่

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตที่จะอ่าน | Sa, Sb, Sc | พอร์ตของ `set_port` ครั้งล่าสุด |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
