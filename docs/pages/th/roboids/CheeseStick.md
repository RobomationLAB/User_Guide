---
title: Cheese Stick
---

# Cheese Stick

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก Cheese Stick ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
# กรณีที่มีหลายอินสแตนซ์
cheesestick_1 = CheeseStick(1)
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## ตั้งโหมดอินพุต {#set_input_mode}

ตั้งโหมดอินพุตของพอร์ตที่เลือก

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุต | Sa, Sb, Sc, La, Lb, Lc | - |
| option | ตัวเลือกดรอปดาวน์ | โหมดอินพุต | เมคีย์(makey), ปุ่มกด(button), ดิจิทัลพูลอัป(digital_pullup), ดิจิทัลพูลดาวน์(digital_pulldown), แอนะล็อก(analog), แรงดันแอนะล็อก(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## ตั้งช่วงอินพุต {#set_input_range}

แปลงค่าอินพุตของพอร์ตที่เลือกให้อยู่ในช่วงต่ำสุด~สูงสุดที่กำหนด  
ช่วงของค่าอินพุตคือ 0 ~ 255  
ช่วงของค่าที่แปลงได้คือ -100 ~ 100

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุต | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | ค่าป้อนเข้า (ฟิลด์) | ค่าต่ำสุดต้นทาง | จำนวนเต็ม 0 ~ 255 | - |
| src_max | ค่าป้อนเข้า (ฟิลด์) | ค่าสูงสุดต้นทาง | จำนวนเต็ม 0 ~ 255 | - |
| dst_min | ค่าป้อนเข้า (ฟิลด์) | ค่าต่ำสุดหลังแปลง | จำนวนเต็ม -100 ~ 100 | - |
| dst_max | ค่าป้อนเข้า (ฟิลด์) | ค่าสูงสุดหลังแปลง | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## ตั้งช่วงอินพุตด้วยค่ากลาง {#set_input_range_median}

แปลงค่าอินพุตของพอร์ตที่เลือกให้อยู่ในช่วงต่ำสุด~กลาง~สูงสุดที่กำหนด  
ช่วงของค่าอินพุตคือ 0 ~ 255  
ช่วงของค่าที่แปลงได้คือ -100 ~ 100

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุต | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | ค่าป้อนเข้า (ฟิลด์) | ค่าต่ำสุดต้นทาง | จำนวนเต็ม 0 ~ 255 | - |
| src_median | ค่าป้อนเข้า (ฟิลด์) | ค่ากลางต้นทาง | จำนวนเต็ม 0 ~ 255 | - |
| src_max | ค่าป้อนเข้า (ฟิลด์) | ค่าสูงสุดต้นทาง | จำนวนเต็ม 0 ~ 255 | - |
| dst_min | ค่าป้อนเข้า (ฟิลด์) | ค่าต่ำสุดหลังแปลง | จำนวนเต็ม -100 ~ 100 | - |
| dst_median | ค่าป้อนเข้า (ฟิลด์) | ค่ากลางหลังแปลง | จำนวนเต็ม -100 ~ 100 | - |
| dst_max | ค่าป้อนเข้า (ฟิลด์) | ค่าสูงสุดหลังแปลง | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## ค่าอินพุต {#get_input}

ค่าอินพุตของพอร์ตที่เลือก

<BlockImage module="roboids/CheeseStick" id="get_input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุต | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## ตั้งโหมดอินพุตพัลส์ {#set_pulse_input_mode}

ตั้งโหมดอินพุตพัลส์ของพอร์ตที่เลือก

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุตพัลส์ | Sc, Lc | - |
| option | ตัวเลือกดรอปดาวน์ | โหมดพูล | พัลส์ (default), พัลส์ (พูลอัป) (pull-up), พัลส์ (พูลดาวน์) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## ค่าอินพุตพัลส์ {#get_pulse_input}

ตรวจพบอินพุตพัลส์ที่พอร์ตที่เลือกหรือไม่

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตอินพุตพัลส์ | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## ตั้งค่าเอาต์พุตดิจิทัล {#set_digital_output}

ตั้งค่าเอาต์พุตดิจิทัลของพอร์ตที่กำหนด  
ค่าที่เลือกได้คือ 0 หรือ 1

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเอาต์พุตดิจิทัล | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | ตัวเลือกดรอปดาวน์ | ค่าเอาต์พุต | 0 หรือ 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## ตั้งค่าเอาต์พุต PWM {#set_pwm_output}

ตั้งค่าเอาต์พุต PWM ของพอร์ตที่กำหนด  
ช่วงของค่าที่เลือกได้คือ 0 ~ 100

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเอาต์พุต PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | ค่าป้อนเข้า (ฟิลด์) | ค่า PWM | จำนวนเต็ม 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## เปลี่ยนเอาต์พุต PWM {#change_pwm_output}

เปลี่ยนค่าเอาต์พุต PWM ของพอร์ตที่กำหนด  
ช่วงของค่าที่เลือกได้คือ -100 ~ 100

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | พอร์ตเอาต์พุต PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | ค่าป้อนเข้า (ฟิลด์) | ผลต่าง PWM ที่จะเปลี่ยน | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## ตั้งค่าเสียงบัซเซอร์ {#sound_buzz}

ตั้งเสียงบัซเซอร์ของ Cheese Stick

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| hz | ค่าป้อนเข้า (บล็อก) | ความถี่ (Hz) | จำนวนจริง 0 ~ 6553.5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## เล่นโน้ต {#sound_note}

Cheese Stick เล่นโน้ตที่กำหนด

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| note | ตัวเลือกดรอปดาวน์ | โน้ต | โด(C), โด#(C#), เร(D), เร#(D#), มี(E), ฟา(F), ฟา#(F#), ซอล(G), ซอล#(G#), ลา(A), ลา#(A#), ที(B) | - |
| octave | ตัวเลือกดรอปดาวน์ | อ็อกเทฟ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## เล่นคลิปเสียง {#sound_clip}

Cheese Stick เล่นคลิปเสียงที่กำหนด

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| clip | ตัวเลือกดรอปดาวน์ | ชื่อคลิปเสียง | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` ฯลฯ | - |
| wait | ช่องทำเครื่องหมาย | รอจนเสร็จสิ้นหรือไม่ | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## ปิดเสียง {#sound_off}

ปิดเสียงของ Cheese Stick

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## ค่าความเร่งแกน {#acceleration}

ค่าความเร่งโน้มถ่วงของแกนที่กำหนด

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | แกนที่วัด | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## ค่าอุณหภูมิ {#temperature}

ค่าเซ็นเซอร์อุณหภูมิ

<BlockImage module="roboids/CheeseStick" id="temperature" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## ค่าความแรงของสัญญาณ {#signal_strength}

ความแรงของสัญญาณ

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## แรงดันแบตเตอรี่ {#battery}

แรงดันแบตเตอรี่

<BlockImage module="roboids/CheeseStick" id="battery" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## สถานะเปลี่ยนแปลงหรือไม่ {#state_change}

สถานะของหุ่นยนต์เปลี่ยนแปลงหรือไม่

<BlockImage module="roboids/CheeseStick" id="state_change" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของสถานะ | 0 ~ 7 (ดูตารางด้านล่าง) | - |

| unit | เงื่อนไข |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (เหตุการณ์เคาะ) |
| 7 | `fall()` (เหตุการณ์ตกหล่น) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
