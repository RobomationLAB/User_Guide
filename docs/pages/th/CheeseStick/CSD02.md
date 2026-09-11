---
title: CSD-02 ไฟ LED RGB
---

# CSD-02 ไฟ LED RGB

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก CSD-02 ไฟ LED RGB (CSD02) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มต้นใช้งานไฟ LED RGB {#start}

เริ่มต้นใช้งานไฟ LED RGB  
ถ้าไม่เพิ่มบล็อกนี้ ไฟ LED RGB จะไม่ทำงาน

<BlockImage module="CheeseStick/CSD02" id="start" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## ตั้งสี {#set_color}

ตั้งสีไฟ LED ของ CSD02 เป็นสีที่กำหนด  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้ (โค้ดที่สร้างขึ้นใช้ชื่อสี ไม่ใช่ค่าตัวเลข R, G, B)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## ตั้งสีด้วยบล็อกหมวดสี {#set_color_with_block}

รับบล็อกหมวดสี (เช่น อาร์เรย์ `[R, G, B]`) เป็นค่าป้อนเข้าเพื่อตั้งสีไฟ LED ของ CSD02

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (สี) | ผลลัพธ์ของบล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## เปลี่ยนสีตาม RGB {#change_by_rgb}

นำค่าเปลี่ยนแปลง R, G, B ที่ป้อนไปบวกกับสีไฟ LED ปัจจุบัน แล้วตั้งเป็นสีใหม่

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## ปิด LED {#turn_off}

ปิดสีไฟ LED RGB

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
