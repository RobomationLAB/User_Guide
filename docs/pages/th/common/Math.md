---
title: คณิตศาสตร์
---

# คณิตศาสตร์

เอกสารนี้อธิบายหน้าที่และวิธีใช้บล็อกคณิตศาสตร์ต่าง ๆ  
แนะนำบล็อกที่ใช้ทำการคำนวณทางคณิตศาสตร์หลากหลายรูปแบบ เช่น การคำนวณตัวเลข การประมวลผลรายการ ความน่าจะเป็น และมุม

## ค่าตัวเลข {#math_number}

บล็อกที่คืน **ค่าตัวเลข** ที่ป้อนเข้าตามเดิม  
ใช้บล็อกนี้เพื่อเก็บตัวเลขที่ต้องการไว้ในตัวแปร หรือนำไปใช้ในการคำนวณอื่นได้

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## สร้างอาร์เรย์และการดำเนินการ {#math_array}

บล็อกสำหรับสร้าง **อาร์เรย์**
คืนอาร์เรย์ที่มีค่าที่ป้อนใน `[]` เป็นสมาชิก
ป้อนค่าที่ต้องการลงใน `[]` เพื่อสร้างรายการได้ โดยสตริงต้องครอบด้วย " "

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## การคำนวณเลขคณิตพื้นฐาน {#math_arithmetic}

บล็อกที่ใช้ค่าตัวเลข 2 ค่าเพื่อทำ **การคำนวณเลขคณิต** (บวก ลบ คูณ หาร ยกกำลัง)

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## การดำเนินการเอกนัย {#math_single}

บล็อกที่ทำ **การดำเนินการเอกนัย** เช่น รากที่สอง ค่าสัมบูรณ์ กลับเครื่องหมาย เอกซ์โพเนนเชียล และฟังก์ชันลอการิทึม

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # รากที่สอง
math.fabs(NUM)  # ค่าสัมบูรณ์
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## ฟังก์ชันตรีโกณมิติ {#math_trig}

บล็อกที่คำนวณค่า **ฟังก์ชันตรีโกณมิติ** เช่น ไซน์ โคไซน์ แทนเจนต์

<BlockImage module="common/math" id="math_trig" />

### Python
```python
math.sin(NUM / 180.0 * math.pi) # sin
math.cos(NUM / 180.0 * math.pi) # cos
math.tan(NUM / 180.0 * math.pi) # tan
math.asin(NUM) / math.pi * 180  # asin
math.acos(NUM) / math.pi * 180  # acos
math.atan(NUM) / math.pi * 180  # atan
```

## ค่าคงที่ {#math_constant}

คืน **ค่าคงที่พิเศษ** ที่จำเป็นในการคำนวณ (π, e, อัตราส่วนทองคำ, √2, √(1/2), อนันต์)

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # อัตราส่วนทองคำ
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # อนันต์
```

## เงื่อนไข {#math_number_property}

ตรวจสอบว่าตัวเลขที่ป้อนเป็นจำนวนคู่ จำนวนคี่ จำนวนเฉพาะ จำนวนเต็ม จำนวนบวก จำนวนลบ หรือหารด้วยจำนวนที่กำหนดลงตัวหรือไม่ แล้วคืนค่า **จริง/เท็จ**

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (จำนวนคู่)
NUM % 2 == 1           # ODD (จำนวนคี่)
math_isPrime(NUM)      # PRIME (จำนวนเฉพาะ)
NUM % 1 == 0           # WHOLE (จำนวนเต็ม)
NUM > 0                # POSITIVE (จำนวนบวก)
NUM < 0                # NEGATIVE (จำนวนลบ)
NUM % DIVISOR == 0     # DIVISIBLE_BY (หารลงตัว)

def math_isPrime(n):
    if not isinstance(n, Number):
        try: n = float(n)
        except: return False
    if n == 2 or n == 3: return True
    if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0: return False
    for x in range(6, int(math.sqrt(n)) + 2, 6):
        if n % (x - 1) == 0 or n % (x + 1) == 0: return False
    return True
```

## ปัดเศษ {#math_round}

คืนค่าตัวเลขที่ป้อนเข้าหลังจาก **ปัดเศษ (round), ปัดเศษขึ้น (ceil), ปัดเศษลง (floor)**

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # ปัดเศษ
math.ceil(NUM)    # ปัดเศษขึ้น
math.floor(NUM)   # ปัดเศษลง
```

## การดำเนินการกับรายการ {#math_on_list}

คำนวณผลรวม ค่าต่ำสุด ค่าสูงสุด ค่าเฉลี่ย ค่ามัธยฐาน ฐานนิยม ส่วนเบี่ยงเบนมาตรฐาน และการสุ่มหยิบรายการหนึ่งจากรายการ

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # ผลรวม
min(list)                          # ค่าต่ำสุด
max(list)                          # ค่าสูงสุด
math_mean(list)                    # ค่าเฉลี่ย
math_median(list)                  # ค่ามัธยฐาน
math_modes(list)                   # ฐานนิยม (ค่าที่พบบ่อยที่สุด)
math_standard_deviation(list)      # ส่วนเบี่ยงเบนมาตรฐาน
random.choice(list)                # รายการหนึ่งแบบสุ่มจากรายการ

def math_mean(myList):
    localList = [e for e in myList if isinstance(e, Number)]
    if not localList: return
    return float(sum(localList)) / len(localList)

def math_median(myList):
    localList = sorted([e for e in myList if isinstance(e, Number)])
    if not localList: return
    if len(localList) % 2 == 0:
        return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0
    else:
        return localList[(len(localList) - 1) // 2]

def math_modes(some_list):
    modes = []
    counts = []
    maxCount = 1
    for item in some_list:
        found = False
        for count in counts:
            if count[0] == item:
                count[1] += 1
                maxCount = max(maxCount, count[1])
                found = True
        if not found:
            counts.append([item, 1])
    for counted_item, item_count in counts:
        if item_count == maxCount:
            modes.append(counted_item)
    return modes

def math_standard_deviation(numbers):
    n = len(numbers)
    if n == 0: return
    mean = float(sum(numbers)) / n
    variance = sum((x - mean) ** 2 for x in numbers) / n
    return math.sqrt(variance)
```

## เศษของ {#math_modulo}

บล็อกที่หา **เศษ** จากการหารตัวเลข 2 จำนวน

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## จำกัดค่า {#math_constrain}

จำกัดค่าที่ป้อนเข้าไม่ให้ออกนอกช่วง **ต่ำสุด/สูงสุด** ที่กำหนด  
ค่าที่อยู่นอกช่วงจะถูกปรับเป็นค่าขอบเขตที่ใกล้ที่สุด

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## สุ่มเลขจำนวนเต็ม {#math_random_int}

บล็อกที่สร้าง **จำนวนเต็มแบบสุ่ม** ภายในช่วงที่กำหนด

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## สุ่มเลขเศษส่วน {#math_random_float}

สร้าง **ค่าเศษส่วนแบบสุ่ม** ระหว่าง 0 ถึง 1

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

บล็อกที่คำนวณมุม (atan2) ระหว่างพิกัด (x, y) ที่กำหนดกับจุดกำเนิด (0,0)  
ใช้ระบุทิศทางจากตำแหน่งพิกัดได้

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
