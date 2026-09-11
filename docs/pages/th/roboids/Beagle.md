---
title: Beagle
---

# Beagle

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก Beagle ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
beagle = Beagle(0)
# กรณีที่มีหลายอินสแตนซ์
beagle_1 = Beagle(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งความเร็วล้อ {#set_wheel_speed}

กำหนดความเร็วของล้อ ช่วงความเร็วคือ -100 ~ 100

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ความเร็วล้อ | จำนวนเต็ม -100 ~ 100, 0: หยุด | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## เคลื่อนที่ตามระยะทาง {#move_distance}

เคลื่อนที่ตามระยะทางที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าค่าระยะทางเป็น 0 จะเคลื่อนที่ต่อไปตามความเร็วล้อปัจจุบัน  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/Beagle" id="move_distance" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | ระยะทางที่เคลื่อนที่ | จำนวนจริง 0 ขึ้นไป | - |
| unit | ตัวเลือกดรอปดาวน์ | หน่วยระยะทาง | ซม.(cm), มม.(mm), นิ้ว(inch) | cm |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## เคลื่อนที่เป็นเวลา {#move_time}

เคลื่อนที่เป็นเวลาที่กำหนดด้วยความเร็วล้อปัจจุบัน  
ถ้ายังไม่ได้ตั้งความเร็วล้อ จะเคลื่อนที่ไปข้างหน้าด้วยความเร็วเริ่มต้น  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเคลื่อนที่จะเสร็จสิ้น

<BlockImage module="roboids/Beagle" id="move_time" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| data | ค่าป้อนเข้า (บล็อก) | เวลาที่เคลื่อนที่ (วินาที) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## หมุนอยู่กับที่ {#turn_degree}

กำหนดทิศทางและมุมที่จะหมุนอยู่กับที่  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการหมุนจะเสร็จสิ้น

<BlockImage module="roboids/Beagle" id="turn_degree" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางการหมุน | ซ้าย(left), ขวา(right) | - |
| data | ค่าป้อนเข้า (บล็อก) | มุมที่หมุน (องศา) | จำนวนจริง 0 ขึ้นไป | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## เปลี่ยนความเร็วล้อ {#change_speed}

เปลี่ยนความเร็วล้อของ Beagle  
ความเร็วล้อใหม่คือความเร็วล้อปัจจุบันบวกกับความเร็วที่ป้อน  
ความเร็วล้อที่ตั้งใหม่จะถูกจำกัดอยู่ในช่วง -100 ~ 100

<BlockImage module="roboids/Beagle" id="change_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right), ทั้งคู่(both) | - |
| speed | ค่าป้อนเข้า (บล็อก) | ผลต่างความเร็วที่จะเปลี่ยน | จำนวนเต็ม -200 ~ 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## หยุด {#stop}

หยุดการเคลื่อนที่ของ Beagle  
ความเร็วล้อทั้งสองข้างของ Beagle จะถูกตั้งกลับเป็น 0

<BlockImage module="roboids/Beagle" id="stop" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## ล้อกำลังเคลื่อนที่? {#wheel_moving}

คืนค่า true ถ้าล้อกำลังเคลื่อนที่ และ false ถ้าหยุดอยู่

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## ตั้งเสียงบัซเซอร์ {#sound_buzz}

ตั้งเสียงบัซเซอร์ของ Beagle ด้วยความถี่ที่กำหนด  
ช่วงความถี่ที่ส่งเสียงได้คือ 27.5 Hz ~ 6553.5 Hz  
ถ้าป้อนค่าอื่นนอกช่วงนี้ บัซเซอร์จะไม่ส่งเสียง

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| hz | ค่าป้อนเข้า (บล็อก) | ความถี่ (Hz) | จำนวนจริง 0, 27.5 ~ 6553.5 (นอกช่วงเป็น 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## เล่นโน้ต {#sound_note}

Beagle เล่นโน้ตที่กำหนด

<BlockImage module="roboids/Beagle" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## เล่นคลิปเสียง {#sound_clip}

Beagle เล่นคลิปเสียงที่กำหนด  
ถ้าทำเครื่องหมายที่ รอ จะรอจนกว่าการเล่นจะเสร็จสิ้น

<BlockImage module="roboids/Beagle" id="sound_clip" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| clip | ตัวเลือกดรอปดาวน์ | ชื่อคลิปเสียง | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` ฯลฯ | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ Beagle

<BlockImage module="roboids/Beagle" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## กำลังเล่นเสียง? {#sound_playing}

คืนค่า true ถ้ากำลังเล่นเสียง และ false ถ้าไม่ได้เล่น

<BlockImage module="roboids/Beagle" id="sound_playing" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## ค่าความเร็วล้อ {#wheel_speed}

ความเร็วของล้อที่กำหนด

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## ค่าเอนโคเดอร์ {#encoder}

ค่าเอนโคเดอร์ของล้อที่กำหนด

<BlockImage module="roboids/Beagle" id="encoder" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ล้อที่เลือก | ซ้าย(left), ขวา(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```


## ค่าเซ็นเซอร์ไจโรสโคป {#gyroscope}

ค่าของเซ็นเซอร์ไจโรสโคปในแกนที่กำหนด

<BlockImage module="roboids/Beagle" id="gyroscope" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```


## ค่าเซ็นเซอร์มาตรความเร่ง {#accelerometer}

ค่าของเซ็นเซอร์มาตรความเร่งในแกนที่กำหนด

<BlockImage module="roboids/Beagle" id="accelerometer" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```


## ค่าเซ็นเซอร์มาตรสนามแม่เหล็ก {#magnetometer}

ค่าของเซ็นเซอร์มาตรสนามแม่เหล็กในแกนที่กำหนด

<BlockImage module="roboids/Beagle" id="magnetometer" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```


## ค่าอุณหภูมิ {#temperature}

ค่าเซ็นเซอร์อุณหภูมิ

<BlockImage module="roboids/Beagle" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## ค่าความแรงสัญญาณ {#signal_strength}

ความแรงสัญญาณ

<BlockImage module="roboids/Beagle" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/Beagle" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## สถานะเปลี่ยนแปลงหรือไม่ {#state_change}

สถานะของหุ่นยนต์เปลี่ยนแปลงหรือไม่

<BlockImage module="roboids/Beagle" id="state_change" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะ | 0 ~ 5 (ดูตารางด้านล่าง) | - |

| unit | เงื่อนไข |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```


## เปิด / ปิดไลดาร์ {#lidar_power}

เปิดหรือปิดการทำงานของเซ็นเซอร์ไลดาร์

<BlockImage module="roboids/Beagle" id="lidar_power" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| on | ตัวเลือกดรอปดาวน์ | เปิด / ปิดไลดาร์ | เริ่ม(on=True), หยุด(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```


## ค่าระยะทางของวัตถุลำดับที่ ~ ของไลดาร์ {#lidar_value}

เซ็นเซอร์ไลดาร์วัดระยะทางถึงวัตถุรอบตัวได้ 360 องศา  
โดยยึดด้านหน้าของ Beagle เป็นค่าลำดับที่ 0 และหมายเลขจะเพิ่มขึ้นทีละ 1 ตามทิศทวนเข็มนาฬิกา

<BlockImage module="roboids/Beagle" id="lidar_value" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ค่าป้อนเข้า (ฟิลด์) | หมายเลขวัตถุ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```


## ค่าระยะทางแยกตามทิศทางของไลดาร์ {#lidar_directions}

แสดงระยะทางด้านหน้า ด้านหลัง ด้านข้างทั้งสอง และแนวทแยงที่เซ็นเซอร์ไลดาร์วัดได้  
ค่าที่แสดงคือค่าเฉลี่ยของระยะทางในช่วง 45 องศาซ้ายและขวาของทิศทางนั้น

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทางที่วัด | หน้า(front), เฉียงซ้ายหน้า(left front), ซ้าย(left), เฉียงซ้ายหลัง(left back), หลัง(back), เฉียงขวาหลัง(right back), ขวา(right), เฉียงขวาหน้า(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```


## ไลดาร์พร้อมหรือไม่? {#lidar_state}

คืนค่า **จริง (True) / เท็จ (False)** ว่าไลดาร์เปิดอยู่หรือไม่

<BlockImage module="roboids/Beagle" id="lidar_state" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
