---
title: Logic
---

# Logic

Khối logic thường được dùng để điều khiển khối **câu lệnh điều kiện** và khối [**vòng lặp**](Loops).

## Câu lệnh điều kiện (nếu ~ thì) {#controls_if}

Với khối câu lệnh điều kiện, bạn đặt được **điều kiện** và **hành động** sẽ làm khi điều kiện đó thỏa mãn.

<BlockImage module="common/logic" id="controls_if" />

Ví dụ, bạn có thể viết mã như sau.  
Nếu giá trị của biến **x** lớn hơn 100 thì điều kiện là **đúng** và dòng chữ "Đây là số lớn." được in ra.  
Nếu giá trị của **x** không lớn hơn 100 thì điều kiện là **sai** và dòng chữ "Đây không phải số lớn." được in ra.

### Python
```python
if condition:
  # ...
elif condition2:
  # ...
else:
  # ...
```

## Phép so sánh {#logic_compare}

Có sáu toán tử so sánh.  
Mỗi toán tử nhận hai giá trị đầu vào (thường là số) và trả về đúng hoặc sai tùy theo cách hai giá trị đó so với nhau.

<BlockImage module="common/logic" id="logic_compare" />

### Python
```python
A == B
A != B
A < B
A <= B
A > B
A >= B
```

## Phép logic {#logic_operation}

Khối **và** chỉ trả về đúng khi cả hai giá trị đầu vào đều đúng.  
Khối **hoặc** trả về đúng khi có ít nhất một trong hai giá trị đầu vào là đúng.  

<BlockImage module="common/logic" id="logic_operation" />

### Python
```python
A and B
A or B
```

## Phủ định {#logic_negate}

Khối **không** đổi giá trị boolean đầu vào thành giá trị ngược lại.  

<BlockImage module="common/logic" id="logic_negate" />

### Python
```python
not A
```

## Boolean {#logic_boolean}

Bạn lấy được giá trị boolean bằng một khối duy nhất có danh sách thả xuống để chọn **đúng** hoặc **sai**.  

<BlockImage module="common/logic" id="logic_boolean" />

### Python
```python
True
False
```

## Toán tử ba ngôi {#logic_ternary}

Khối ba ngôi hoạt động như một khối câu lệnh điều kiện đơn giản.  
Nó nhận ba giá trị đầu vào.  
Giá trị đầu tiên là điều kiện boolean cần kiểm tra, giá trị thứ hai là giá trị trả về khi điều kiện **đúng**.  
Giá trị thứ ba là giá trị trả về khi điều kiện **sai**.  

<BlockImage module="common/logic" id="logic_ternary" />

### Python
```python
thenValue if test else elseValue
```
