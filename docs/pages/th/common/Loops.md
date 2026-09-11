---
title: ลูป
---

# ลูป

คำสั่งควบคุมการทำซ้ำมี 2 ประเภท:  
**คำสั่งเงื่อนไข** และ **คำสั่งวนซ้ำ** (ซึ่งควบคุมจำนวนครั้งที่จะทำงานภายในบล็อกตามค่าของตัวแปร)


## ทำซ้ำ {#controls_repeat}

บล็อก **ทำซ้ำ** แบบง่ายที่สุดจะทำงานโค้ดภายในตามจำนวนครั้งที่กำหนด 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## นับด้วย {#controls_for}

บล็อก **นับด้วย** (มักเรียกว่า **for loop**) จะเพิ่มค่าตัวแปรจากค่าแรกไปจนถึงค่าที่สาม โดยเพิ่มทีละค่าที่กำหนด (ค่าที่สอง) และทำงานภายในบล็อกหนึ่งครั้งสำหรับแต่ละค่า  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## จากทุกรายการ {#controls_forEach}

บล็อก **จากทุกรายการ** ทำงานคล้ายกัน แต่ใช้ค่าในรายการทีละค่าตามลำดับแทนลำดับตัวเลข

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## ทำซ้ำขณะที่ / จนกระทั่ง {#controls_while}

บล็อก **ทำซ้ำขณะที่** จะทำงานภายในซ้ำไปตราบที่เงื่อนไขเป็นจริง  
บล็อก **ทำซ้ำจนกระทั่ง** จะทำงานภายในซ้ำไปขณะที่เงื่อนไขเป็นเท็จ และออกจากลูปทันทีที่เงื่อนไขกลายเป็นจริง

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## หยุด / ทำต่อ {#controls_flow_statements}

บล็อก **หยุด** ช่วยให้ **ออกจากลูปก่อนกำหนด** ได้  
**ทำต่อ** (ในภาษาโปรแกรมส่วนใหญ่คือ **continue**) จะข้ามโค้ดที่เหลือภายในบล็อกและเริ่มรอบถัดไปของลูป

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
