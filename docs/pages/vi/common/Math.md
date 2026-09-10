---
title: Toán học
---

# Toán học

Tài liệu này mô tả chức năng và cách dùng của các khối toán học.  
Nó giới thiệu những khối thực hiện nhiều phép toán khác nhau như phép tính với số, xử lý danh sách, xác suất và phép tính góc.

## Giá trị số {#math_number}

Khối trả về đúng **giá trị số** mà bạn nhập vào.  
Với khối này, bạn lưu được một số vào biến hoặc dùng số đó trong các phép tính khác.

<BlockImage module="common/math" id="math_number" />

### Python
```
50
```

## Tạo mảng và phép tính với mảng {#math_array}

Khối tạo **mảng**.
Nó trả về một mảng có các phần tử là những giá trị bạn nhập trong `[]`.
Bạn nhập giá trị mong muốn vào trong `[]` để tạo danh sách; chuỗi ký tự phải được đặt trong " ".

<BlockImage module="common/math" id="math_array" />

### Python
```python
[]
```

## Phép tính số học cơ bản {#math_arithmetic}

Khối thực hiện **phép tính số học** (cộng, trừ, nhân, chia, lũy thừa) với hai giá trị số.

<BlockImage module="common/math" id="math_arithmetic" />

### Python
```python
A + B
A - B
A * B
A / B
A ** B
```

## Phép tính một ngôi {#math_single}

Khối thực hiện **phép tính một ngôi** như căn bậc hai, giá trị tuyệt đối, đổi dấu, lũy thừa, hàm logarit.

<BlockImage module="common/math" id="math_single" />

### Python
```python
math.sqrt(NUM)  # căn bậc hai
math.fabs(NUM)  # giá trị tuyệt đối
-NUM            # -
math.log(NUM)   # ln
math.log10(NUM) # log10
math.exp(NUM)   # e^
10 ** NUM       # 10^
```

## Hàm lượng giác {#math_trig}

Khối tính giá trị **hàm lượng giác** như sin, cosin, tang.

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

## Hằng số {#math_constant}

Trả về **giá trị hằng số đặc biệt** cần cho phép tính (π, e, tỉ lệ vàng, √2, √(1/2), vô cực).

<BlockImage module="common/math" id="math_constant" />

### Python
```python
math.pi                      # π
math.e                       # e
(1 + math.sqrt(5)) / 2       # tỉ lệ vàng
math.sqrt(2)                 # √2
math.sqrt(1.0 / 2)           # √(1/2)
float('inf')                 # vô cực
```

## Điều kiện {#math_number_property}

Xét xem số nhập vào là số chẵn, số lẻ, số nguyên tố, số nguyên, số dương, số âm hay bội của một số nào đó rồi trả về **đúng/sai**.

<BlockImage module="common/math" id="math_number_property" />

### Python
```python
NUM % 2 == 0           # EVEN (số chẵn)
NUM % 2 == 1           # ODD (số lẻ)
math_isPrime(NUM)      # PRIME (số nguyên tố)
NUM % 1 == 0           # WHOLE (số nguyên)
NUM > 0                # POSITIVE (số dương)
NUM < 0                # NEGATIVE (số âm)
NUM % DIVISOR == 0     # DIVISIBLE_BY (bội số)

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

## Làm tròn {#math_round}

Xử lý số nhập vào theo kiểu **làm tròn (round), làm tròn lên (ceil), làm tròn xuống (floor)** rồi trả về giá trị.

<BlockImage module="common/math" id="math_round" />

### Python
```python
round(NUM)        # làm tròn
math.ceil(NUM)    # làm tròn lên
math.floor(NUM)   # làm tròn xuống
```

## Phép tính với danh sách {#math_on_list}

Thực hiện các phép tính trên danh sách: tổng, giá trị nhỏ nhất, giá trị lớn nhất, trung bình, trung vị, giá trị hay gặp nhất, độ lệch chuẩn, lấy một phần tử bất kỳ.

<BlockImage module="common/math" id="math_on_list" />

### Python
```python
sum(list)                          # tổng
min(list)                          # giá trị nhỏ nhất
max(list)                          # giá trị lớn nhất
math_mean(list)                    # trung bình
math_median(list)                  # trung vị
math_modes(list)                   # giá trị hay gặp nhất (xuất hiện nhiều lần nhất)
math_standard_deviation(list)      # độ lệch chuẩn
random.choice(list)                # một phần tử bất kỳ của danh sách

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

## Số dư {#math_modulo}

Khối tìm **số dư** của phép chia hai số.

<BlockImage module="common/math" id="math_modulo" />

### Python
```python
A % B
```

## Giới hạn nhỏ nhất lớn nhất {#math_constrain}

Giới hạn giá trị nhập vào để nó không vượt ra ngoài phạm vi **nhỏ nhất/lớn nhất** đã chỉ định.  
Giá trị nằm ngoài phạm vi được đưa về giá trị biên gần nhất.

<BlockImage module="common/math" id="math_constrain" />

### Python
```python
min(max(VALUE, LOW), HIGH)
```

## Số nguyên bất kỳ {#math_random_int}

Khối tạo **một số nguyên ngẫu nhiên** trong phạm vi đã chỉ định.

<BlockImage module="common/math" id="math_random_int" />

### Python
```python
random.randint(FROM, TO)
```

## Phân số bất kỳ {#math_random_float}

Tạo **một phân số ngẫu nhiên** trong khoảng từ 0 đến 1.

<BlockImage module="common/math" id="math_random_float" />

### Python
```python
random.random()
```

## atan2 {#math_atan2}

Khối tính góc (atan2) mà tọa độ (x, y) cho trước tạo với gốc tọa độ (0,0).  
Bạn có thể dùng nó để xác định hướng dựa trên vị trí tọa độ.

<BlockImage module="common/math" id="math_atan2" />

### Python
```python
math.atan2(Y, X) / math.pi * 180
```
