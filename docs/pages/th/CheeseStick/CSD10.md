---
title: CSD-10 เซ็นเซอร์วัดแสง ALS
---

# CSD-10 เซ็นเซอร์วัดแสง ALS

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก CSD-10 เซ็นเซอร์วัดแสง ALS (CSD10) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มด้วยพอร์ต {#set_input_port}

ตั้งพอร์ตที่ CSD10 (เซ็นเซอร์วัดแสง) เชื่อมต่ออยู่

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตที่จะเชื่อมต่อ | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## ค่าเซ็นเซอร์วัดแสง {#get_input}

ค่าเซ็นเซอร์วัดแสงของพอร์ตที่เลือก

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตที่จะอ่าน | Sa, Sb, Sc | พอร์ตของ `set_port` ครั้งล่าสุด |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
