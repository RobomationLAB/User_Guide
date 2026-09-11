---
title: PID-13 จอยสติ๊กและปุ่ม
---

# PID-13 จอยสติ๊กและปุ่ม

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก PID-13 จอยสติ๊กและปุ่ม (PID13) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มใช้งานจอยสติ๊ก {#start}

เริ่มใช้งานจอยสติ๊กและปุ่ม

<BlockImage module="CheeseStick/PID13" id="start" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## ค่าจอยสติ๊ก {#joystick}

ค่า x / y ของจอยสติ๊ก  
ช่วงของแต่ละค่าคือ -128 ~ 127

<BlockImage module="CheeseStick/PID13" id="joystick" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## ค่าอินพุตปุ่ม {#button_input}

สถานะอินพุตของปุ่มที่เลือก  
แสดงค่า 1 ถ้าปุ่มถูกกดอยู่ และ 0 ถ้าปุ่มไม่ได้ถูกกด

<BlockImage module="CheeseStick/PID13" id="button_input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อปุ่ม | ปุ่ม A(a), ปุ่ม B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## คลิกปุ่มแล้วหรือไม่? {#button_click}

ปุ่มที่เลือกถูกคลิกหรือไม่  
บล็อกนี้จะคืนค่าจริงเฉพาะช่วงที่ปุ่มที่เลือกถูกคลิกเท่านั้น นอกนั้นจะคืนค่าเท็จ

<BlockImage module="CheeseStick/PID13" id="button_click" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชื่อปุ่ม | ปุ่ม A(a), ปุ่ม B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
