---
title: รายการ
---

# รายการ

รายการคือ **กลุ่มของไอเท็มที่เรียงตามลำดับ** เช่น "รายการสิ่งที่ต้องทำ" หรือ "รายการซื้อของ"  
ไอเท็มในรายการเป็นชนิดใดก็ได้ และค่าเดียวกันสามารถปรากฏในรายการได้หลายครั้ง


## สร้างรายการเปล่า {#lists_create_with}

รายการที่ง่ายที่สุดคือรายการเปล่า ซึ่งสร้างด้วยบล็อก **สร้างรายการเปล่า**

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## สร้างรายการด้วย {#lists_create_with-2}

บล็อก **สร้างรายการด้วย** ใช้กำหนดค่าเริ่มต้นให้กับรายการใหม่ได้

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## สร้างรายการที่มีไอเท็มซ้ำ {#lists_repeat}

บล็อก **สร้างรายการที่มีไอเท็ม ... จำนวน** ใช้สร้างรายการโดยทำซ้ำไอเท็มที่กำหนดตามจำนวนที่ต้องการ

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## ความยาวของรายการ {#lists_length}

ค่าของบล็อก **ความยาวของ** คือจำนวนไอเท็มในรายการ  
ความยาวของรายการเปล่าคือ 0

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## ตรวจสอบรายการว่างเปล่า {#lists_isEmpty}

ค่าของบล็อก **ว่างเปล่า** จะเป็น **จริง** เมื่อค่าที่ป้อนเข้าเป็นรายการเปล่า และเป็น **เท็จ** ในกรณีอื่น

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## ตำแหน่งที่ไอเท็มปรากฏในรายการ {#lists_indexOf}

ค้นหาตำแหน่งของไอเท็มที่กำหนดในรายการ  
ถ้าไม่มีไอเท็มนั้นในรายการ ผลลัพธ์จะเป็น 0

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## เรียกดู / เรียกดูและลบ / ลบไอเท็ม {#lists_getIndex}

บล็อกนี้ใช้เรียกดู เรียกดูพร้อมลบ หรือลบไอเท็มออกจากรายการได้  
มีตัวเลือกหลายแบบ เช่น อันแรก อันสุดท้าย ลำดับที่ N ไอเท็มสุ่ม

<BlockImage module="common/lists" id="lists_getIndex" />

### เรียกดู {#lists_getIndex_get}

บล็อก **ในรายการ ... เรียกดู** จะดึงไอเท็มในตำแหน่งที่กำหนดออกจากรายการ  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### เรียกดูและลบ {#lists_getIndex_cut}

บล็อก **ในรายการ ... เรียกดูและลบ** จะดึงไอเท็มที่กำหนดออกมา แล้วลบไอเท็มนั้นออกจากรายการ

### Python
```python
list.pop(N - 1)                        # ลำดับที่ #
list.pop(-N)                           # ลำดับที่ # นับจากท้าย
list.pop(0)                            # อันแรก
list.pop()                             # อันสุดท้าย 
lists_remove_random_item(list)         # สุ่ม

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### ลบ {#lists_getIndex_remove}

บล็อก **ในรายการ ... ลบ** จะลบไอเท็มที่กำหนดออกจากรายการเท่านั้น  
ปลั๊กด้านซ้ายของบล็อกจะหายไป และสามารถต่อบล็อกด้านบนและด้านล่างได้  

### Python
```python
list.pop(N - 1)                             # ลำดับที่ #
list.pop(-N)                                # ลำดับที่ # นับจากท้าย
list.pop(0)                                 # อันแรก
list.pop()                                  # อันสุดท้าย
list.pop(int(random.random() * len(list)))  # สุ่ม
```

## กำหนด / แทรกไอเท็มในตำแหน่งที่ต้องการ {#lists_setIndex}

บล็อกนี้ใช้กำหนดหรือแทรกไอเท็มในตำแหน่งที่ต้องการของรายการได้  
มีตัวเลือกหลายแบบ เช่น อันแรก อันสุดท้าย ลำดับที่ N ไอเท็มสุ่ม

<BlockImage module="common/lists" id="lists_setIndex" />

### กำหนดไอเท็ม {#lists_setIndex_set}

บล็อก **ในรายการ ... กำหนด** จะแทนที่ไอเท็มในตำแหน่งที่กำหนดด้วยไอเท็มอื่น

### Python
```python
list[N - 1] = value                         # ลำดับที่ #
list[-N] = value                            # ลำดับที่ # นับจากท้าย
list[0] = value                             # อันแรก
list[-1] = value                            # อันสุดท้าย

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # สุ่ม
```

### แทรกไอเท็ม {#lists_setIndex_insert}

บล็อก **ในรายการ ... แทรก** จะแทรกไอเท็มใหม่ในตำแหน่งที่กำหนด  
ไอเท็มเดิมยังคงอยู่ และความยาวจะเพิ่มขึ้น 1

### Python
```python
list.insert(N - 1, value)                        # ลำดับที่ #
list.insert(-N, value)                           # ลำดับที่ # นับจากท้าย
list.insert(0, value)                            # อันแรก
list.append(value)                               # อันสุดท้าย

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # สุ่ม
```

## ดึงรายการย่อย {#lists_getSublist}

บล็อก **ในรายการ ... ดึงรายการย่อยจาก** จะดึงรายการย่อยโดยกำหนดตำแหน่งเริ่มต้นและสิ้นสุด  
มีตัวเลือกหลายแบบ เช่น อันแรก อันสุดท้าย ลำดับที่ N ไอเท็มสุ่ม  
รายการต้นฉบับจะไม่เปลี่ยนแปลงหลังการทำงาน  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# เริ่มที่ตำแหน่งแรก (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# เริ่มที่ last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# เริ่มที่ first
list[ : N]
list[ : -N]
list[ : ]
```

## รับรายการใหม่ที่แทนที่ไอเท็ม {#lists_replace}

บล็อก **ในรายการ ... รับรายการที่แทนที่** จะคืนรายการใหม่ที่แทนที่ไอเท็มในตำแหน่งที่กำหนดด้วยไอเท็มอื่น  
มีตัวเลือกหลายแบบ เช่น อันแรก อันสุดท้าย ลำดับที่ N  
รายการต้นฉบับจะไม่เปลี่ยนแปลงหลังการทำงาน  

<BlockImage module="common/lists" id="lists_replace" />

### Python
```python
# unit = "#"
[value if i == (N - 1) else data for i, data in enumerate(list)]

# unit = "last_#"
[value if i == (len(list) - N) else data for i, data in enumerate(list)]

# unit = "first"
[value if i == 0 else data for i, data in enumerate(list)]

# unit = "last"
[value if i == (len(list) - 1) else data for i, data in enumerate(list)]
```

## แยก / รวมข้อความด้วยตัวคั่น {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### สร้างรายการจากข้อความ {#text_to_list}

บล็อก **สร้างรายการจากข้อความ** จะแบ่งข้อความที่กำหนดตามตัวคั่น แล้วคืนเป็นรายการ

### Python
```python
text.split(delimiter)
```

### สร้างข้อความจากรายการ {#list_to_text}

บล็อก **สร้างข้อความจากรายการ** จะรวมไอเท็มในรายการเป็นข้อความเดียวโดยใช้ตัวคั่น

### Python
```python
delimiter.join(list)
```

## เรียงลำดับรายการ {#lists_sort}

**บล็อกสำหรับเรียงลำดับ** รายการตามเกณฑ์ที่ต้องการ  
เรียงตามตัวเลขหรือตัวอักษรได้ และเลือกได้ว่าจะเรียงจากน้อยไปหามากหรือมากไปหาน้อย  
นอกจากนี้ เมื่อเรียงตามตัวอักษรยังสามารถเรียงโดยไม่สนใจตัวพิมพ์ใหญ่-เล็กได้

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # ตัวเลข, น้อยไปหามาก
lists_sort(my_list, "NUMERIC", True)       # ตัวเลข, มากไปหาน้อย
lists_sort(my_list, "TEXT", False)         # ตัวอักษร, น้อยไปหามาก
lists_sort(my_list, "TEXT", True)          # ตัวอักษร, มากไปหาน้อย
lists_sort(my_list, "IGNORE_CASE", False)  # ไม่สนใจตัวพิมพ์ใหญ่-เล็ก, น้อยไปหามาก
lists_sort(my_list, "IGNORE_CASE", True)   # ไม่สนใจตัวพิมพ์ใหญ่-เล็ก, มากไปหาน้อย

def lists_sort(my_list, type, reverse):
    def try_float(s):
        try: return float(s)
        except: return 0
    key_funcs = {
        "NUMERIC": try_float,
        "TEXT": str,
        "IGNORE_CASE": lambda s: str(s).lower()
    }
    key_func = key_funcs[type]
    list_cpy = list(my_list)
    return sorted(list_cpy, key=key_func, reverse=reverse)
```

## เรียงรายการแบบย้อนกลับ {#lists_reverse}

บล็อกที่ **กลับลำดับ** ของสมาชิกในรายการ

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
