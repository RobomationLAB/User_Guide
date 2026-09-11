---
title: NeoPixel
---

# NeoPixel

## การประกาศอินสแตนซ์ {#instance}

เมื่อเพิ่มบล็อก NeoPixel ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| index | ตัวเลือกดรอปดาวน์ | หมายเลขอินสแตนซ์ (เริ่มจาก 0) | จำนวนเต็ม 0 ขึ้นไป | 0 |


## เริ่มใช้งาน {#start}

เริ่มใช้งาน NeoPixel

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### พารามิเตอร์

(ไม่มี)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## ตั้งค่าโหมดสี {#mode}

ตั้งโหมด LED ของ NeoPixel

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | โหมดช่องสัญญาณสี | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## ตั้งค่าสีของพิกเซลเดียว {#set_one_color}

ตั้งสีให้พิกเซลหนึ่งดวงตามหมายเลขที่กำหนด  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้ (โค้ดที่สร้างขึ้นใช้ชื่อสี ไม่ใช่ค่าตัวเลข R, G, B)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซล (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## ตั้งค่าสีของพิกเซลเดียวด้วยบล็อกหมวดสี {#set_one_color_with_block}

รับบล็อกหมวดสีเป็นค่าป้อนเข้าเพื่อตั้งสีของพิกเซลหนึ่งดวง  
ผลลัพธ์ของบล็อกสี (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()` ซึ่งคืนค่า `[R, G, B]` ทั้งหมด) จะถูกแตกออกด้วย `*` (เครื่องหมายดอกจัน) แล้วส่งเป็นอาร์กิวเมนต์ r, g, b ของ `set_one_color`

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซล (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| data | ค่าป้อนเข้า (สี) | บล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## เปลี่ยนสีของพิกเซลเดียวตามค่า RGB {#change_one_by_rgb}

นำค่าเปลี่ยนแปลงไปบวกกับค่า RGB ปัจจุบันของพิกเซลที่กำหนด แล้วตั้งเป็นสีใหม่

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซล (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## ปิดพิกเซลเดียว {#turn_off_one}

ปิดสีของ LED ดวงที่ n  
ช่วงหมายเลข LED คือ 1 ~ 144

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซล (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## ตั้งค่ารูปแบบของช่วง {#set_range_pattern}

ตั้งรูปแบบสีของ LED ทุกดวงในช่วงที่กำหนด  
ช่วงหมายเลข LED คือ 1 ~ 144

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| pattern | ตัวเลือกดรอปดาวน์ | ชื่อรูปแบบสี | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## ตั้งค่าสีของช่วง {#set_range_color}

ตั้งสีเดียวกันให้พิกเซลทั้งช่วงที่กำหนด  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## ตั้งค่าสีของช่วงด้วยบล็อกหมวดสี {#set_range_color_with_block}

รับบล็อกหมวดสีเป็นค่าป้อนเข้าเพื่อตั้งสีของพิกเซลทั้งช่วง  
ผลลัพธ์ของบล็อกสี (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) จะถูกแตกออกด้วย `*` (เครื่องหมายดอกจัน) แล้วส่งเป็นอาร์กิวเมนต์ r, g, b ของ `set_range_color`

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| data | ค่าป้อนเข้า (สี) | บล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## เปลี่ยนสีของช่วงตามค่า RGB {#change_range_by_rgb}

นำค่าเปลี่ยนแปลง RGB ไปบวกกับสีปัจจุบันของพิกเซลในช่วงที่กำหนด แล้วตั้งเป็นสีใหม่

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## ปิดสีของช่วง {#turn_off_range}

ปิดสีของ LED ทุกดวงในช่วงที่กำหนด  
ช่วงหมายเลข LED คือ 1 ~ 144

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## ตั้งค่าสีของช่วงทุก ๆ n ดวง {#set_range_increment_color}

ตั้งสีทุก ๆ `increment` ดวงภายในช่วงพิกเซลที่กำหนด  
เมื่อเลือกสีจากจานสี จะถูกแปลงเป็น **ชื่อสี** (สตริงภาษาอังกฤษ) แล้วเรียกใช้  
(เช่น เปิดเฉพาะดวงที่ 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| increment | ค่าป้อนเข้า (ฟิลด์) | ระยะห่าง (จำนวนดวง) | จำนวนเต็ม 1 ขึ้นไป | - |
| color | สี | เลือกจากจานสี → แปลงเป็นชื่อสี (ภาษาอังกฤษ) | ชื่อสี: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## ตั้งค่าสีของช่วงทุก ๆ n ดวงด้วยบล็อกหมวดสี {#set_range_increment_color_with_block}

รับบล็อกหมวดสีเป็นค่าป้อนเข้าเพื่อตั้งสีทุก ๆ n ดวงภายในช่วงพิกเซลที่กำหนด  
ผลลัพธ์ของบล็อกสี (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) จะถูกแตกออกด้วย `*` (เครื่องหมายดอกจัน) แล้วส่งเป็นอาร์กิวเมนต์ r, g, b ของ `set_range_increment_color`

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| increment | ค่าป้อนเข้า (ฟิลด์) | ระยะห่าง (จำนวนดวง) | จำนวนเต็ม 1 ขึ้นไป | - |
| data | ค่าป้อนเข้า (สี) | บล็อกหมวดสี หรืออาร์เรย์ `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## เปลี่ยนสีของช่วงทุก ๆ n ดวงตามค่า RGB {#change_range_increment_by_rgb}

นำค่าเปลี่ยนแปลง RGB ไปบวกกับสีปัจจุบันของพิกเซลทุก ๆ n ดวง แล้วตั้งเป็นสีใหม่

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| increment | ค่าป้อนเข้า (ฟิลด์) | ระยะห่างที่เพิ่มทีละ (จำนวนดวง) | จำนวนเต็ม 1 ขึ้นไป | - |
| r | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีแดง | จำนวนเต็ม -255 ~ 255 | 0 |
| g | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีเขียว | จำนวนเต็ม -255 ~ 255 | 0 |
| b | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงสีน้ำเงิน | จำนวนเต็ม -255 ~ 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## ปิดสีของช่วงทุก ๆ n ดวง {#turn_off_range_increment}

ปิดสีของ LED ทุกดวงที่ตรงกับช่วงและระยะห่างที่กำหนด  
ช่วงหมายเลข LED คือ 1 ~ 144

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| from_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลเริ่มต้น (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| to_idx | ค่าป้อนเข้า (ฟิลด์) | หมายเลขพิกเซลสิ้นสุด (เริ่มจาก 1) | จำนวนเต็ม 1 ขึ้นไป | - |
| increment | ค่าป้อนเข้า (ฟิลด์) | ระยะห่างที่เพิ่มทีละ (จำนวนดวง) | จำนวนเต็ม 1 ขึ้นไป | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## เลื่อน / หมุน {#shift}

เลื่อนหรือหมุน LED ไปตามทิศทางและจำนวนดวงที่กำหนด  
ช่วงของค่าที่เลือกได้คือ 1 ~ 143

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| unit | ตัวเลือกดรอปดาวน์ | ชนิดของการทำงาน | เลื่อน(shift), หมุน(rotate) | - |
| direction | ตัวเลือกดรอปดาวน์ | ทิศทาง | ซ้าย(left), ขวา(right) | - |
| pixel | ค่าป้อนเข้า (ฟิลด์) | จำนวนพิกเซลที่จะเลื่อน | จำนวนเต็ม 1 ขึ้นไป | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## ตั้งความสว่าง {#set_brightness}

ตั้งความสว่างของ NeoPixel  
ช่วงของค่าที่เลือกได้คือ 0 ~ 100

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| value | ค่าป้อนเข้า (ฟิลด์) | ความสว่าง | จำนวนเต็ม 0 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## เปลี่ยนความสว่าง {#change_brightness}

เปลี่ยนความสว่างของ NeoPixel  
ช่วงของค่าที่เลือกได้คือ -100 ~ 100

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### พารามิเตอร์

| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |
| --- | --- | --- | --- | --- |
| value | ค่าป้อนเข้า (ฟิลด์) | ค่าเปลี่ยนแปลงความสว่าง | จำนวนเต็ม -100 ~ 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
