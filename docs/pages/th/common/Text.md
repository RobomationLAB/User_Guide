---
title: ข้อความ
---

# ข้อความ {#text}

ตัวอย่างของข้อความ (สตริง) มีดังนี้:
- "thing #1"
- "March 12, 2010"
- "" (ข้อความว่าง)

ข้อความอาจประกอบด้วยตัวอักษรพิมพ์ใหญ่หรือพิมพ์เล็ก ตัวเลข เครื่องหมายวรรคตอน สัญลักษณ์อื่น ๆ และช่องว่างระหว่างคำ  

<BlockImage module="common/text" id="text" />

## สร้างข้อความด้วย {#text_join}

บล็อก **สร้างข้อความด้วย** จะรวม (ต่อ) ค่าของข้อความหลายค่าเข้าด้วยกันเพื่อสร้างข้อความใหม่

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## ต่อด้วยข้อความ {#text_append}

บล็อก **ต่อด้วยข้อความ** จะเพิ่มข้อความที่กำหนดต่อท้ายตัวแปรที่ระบุ

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## ความยาวของข้อความ {#text_length}

บล็อก **ความยาวของ** จะนับตัวอักษร ตัวเลข ฯลฯ ในข้อความ แล้วคืนความยาวทั้งหมด  
ความยาวของ `abc` ด้านล่างคือ 3 และความยาวของข้อความว่างคือ 0

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## ตรวจสอบข้อความว่าง {#text_isEmpty}

บล็อก **ว่าง** จะตรวจสอบว่าข้อความที่กำหนดว่างหรือไม่ (ความยาวเป็น 0 หรือไม่)

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## ค้นหาข้อความ {#text_indexOf}

บล็อกเหล่านี้จะตรวจสอบว่ามีข้อความหนึ่งอยู่ในอีกข้อความหนึ่งหรือไม่ และคืนตำแหน่งหากพบ

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## ดึงตัวอักษรตัวเดียว {#text_charAt}

ดึงตัวอักษรหนึ่งตัวจากตำแหน่งที่กำหนดในข้อความ  
มีตัวเลือกหลายแบบ เช่น ตัวแรก ตัวสุดท้าย ตำแหน่งสุ่ม ตัวที่ N

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## แยกข้อความย่อย {#text_getSubstring}

บล็อก **แยกข้อความย่อย** ใช้ดึงข้อความในช่วงที่กำหนดออกมา

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## เปลี่ยนตัวพิมพ์ใหญ่-เล็กของข้อความ {#text_changeCase}

บล็อกนี้จะแปลงข้อความที่ป้อนเข้าให้เป็นรูปแบบใดรูปแบบหนึ่งต่อไปนี้:

- **ตัวพิมพ์ใหญ่**: แปลงตัวอักษรทั้งหมดเป็นตัวพิมพ์ใหญ่
- **ตัวพิมพ์เล็ก**: แปลงตัวอักษรทั้งหมดเป็นตัวพิมพ์เล็ก
- **ตัวพิมพ์ใหญ่เฉพาะอักษรแรก**: แปลงเฉพาะอักษรแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่ ส่วนที่เหลือเป็นตัวพิมพ์เล็ก

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # ตัวพิมพ์ใหญ่
TEXT.lower() # ตัวพิมพ์เล็ก
TEXT.title() # ตัวพิมพ์ใหญ่เฉพาะอักษรแรก
```

## ลบช่องว่าง {#text_trim}

บล็อกต่อไปนี้จะลบช่องว่างในข้อความจากตำแหน่งต่อไปนี้:
- ทั้งสองข้าง
- ด้านซ้าย
- ด้านขวา

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # ทั้งสองข้าง
TEXT.lstrip()   # ด้านซ้าย
TEXT.rstrip()   # ด้านขวา
```

## นับจำนวนข้อความที่กำหนดในข้อความ {#text_count}

นับจำนวนครั้งที่ข้อความย่อยที่กำหนดปรากฏในข้อความที่ให้มา แล้วคืนค่านั้น

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## แทนที่ข้อความที่กำหนดในข้อความ {#text_replace}

แทนที่ข้อความย่อยที่กำหนดทั้งหมดภายในข้อความด้วยข้อความอื่น

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## เรียงข้อความแบบย้อนกลับ {#text_reverse}

คืนข้อความใหม่ที่กลับลำดับตัวอักษรของข้อความเดิม

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## พิมพ์ข้อความ {#text_print}

บล็อก **พิมพ์** จะแสดงค่าที่ป้อนเข้าในหน้าต่างป๊อปอัป

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## รับค่าจากผู้ใช้ {#text_prompt_ext}

บล็อกต่อไปนี้จะสร้างหน้าต่างป๊อปอัปเพื่อขอให้ผู้ใช้ป้อนค่า และค่าที่ป้อนจะถูกเก็บไว้ในตัวแปร  
สามารถรับได้ทั้งข้อความและตัวเลข

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
