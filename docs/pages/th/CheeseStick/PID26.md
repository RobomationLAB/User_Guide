---
title: PID-26 เซ็นเซอร์สภาพแวดล้อม
---

# PID-26 เซ็นเซอร์สภาพแวดล้อม

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก PID-26 เซ็นเซอร์สภาพแวดล้อม (PID26) ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มใช้งานเซ็นเซอร์สภาพแวดล้อม {#start}

เริ่มใช้งาน PID-26 เซ็นเซอร์สภาพแวดล้อม

<BlockImage module="CheeseStick/PID26" id="start" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## อุณหภูมิ {#temperature}

คืนค่าอุณหภูมิที่วัดได้ด้วยเซ็นเซอร์สภาพแวดล้อม PID26 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## ความชื้น {#humidity}

คืนค่าความชื้นที่วัดได้ด้วยเซ็นเซอร์สภาพแวดล้อม PID26

<BlockImage module="CheeseStick/PID26" id="humidity" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## ความดัน {#pressure}

คืนค่าความดันที่วัดได้ด้วยเซ็นเซอร์สภาพแวดล้อม PID26  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
