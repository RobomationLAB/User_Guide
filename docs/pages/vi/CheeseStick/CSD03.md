---
title: CSD-03 Chiết áp xoay
---

# CSD-03 Chiết áp xoay

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-03 Chiết áp xoay(CSD03) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bắt đầu với cổng đầu vào {#set_input_port}

Đặt cổng mà mô-đun CSD03 (chiết áp) được cắm vào.

<BlockImage module="CheeseStick/CSD03" id="set_input_port" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần kết nối | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_port('Sa')
```

## Đặt phạm vi đầu vào {#set_input_range}

Đổi giá trị đầu vào của cổng đã chọn sang phạm vi nhỏ nhất~lớn nhất đã chỉ định.  
Phạm vi của giá trị đầu vào là từ 0 đến 255.  
Phạm vi giá trị đổi được là từ -100 đến 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đã chọn | Sa, Sb, Sc | - |
| src_min | Giá trị nhập (ô) | Giá trị nhỏ nhất của nguồn | số nguyên từ 0 đến 255 | - |
| src_max | Giá trị nhập (ô) | Giá trị lớn nhất của nguồn | số nguyên từ 0 đến 255 | - |
| dst_min | Giá trị nhập (ô) | Giá trị nhỏ nhất sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_max | Giá trị nhập (ô) | Giá trị lớn nhất sau khi đổi | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range('Sa', 0, 255, 0, 100)
```

## Đặt phạm vi đầu vào theo giá trị giữa {#set_input_range_median}

Đổi giá trị đầu vào của cổng đã chọn sang phạm vi nhỏ nhất~giữa~lớn nhất đã chỉ định.  
Phạm vi của giá trị đầu vào là từ 0 đến 255.  
Phạm vi giá trị đổi được là từ -100 đến 100.

<BlockImage module="CheeseStick/CSD03" id="set_input_range_median" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đã chọn | Sa, Sb, Sc | - |
| src_min | Giá trị nhập (ô) | Giá trị nhỏ nhất của nguồn | số nguyên từ 0 đến 255 | - |
| src_median | Giá trị nhập (ô) | Giá trị giữa của nguồn | số nguyên từ 0 đến 255 | - |
| src_max | Giá trị nhập (ô) | Giá trị lớn nhất của nguồn | số nguyên từ 0 đến 255 | - |
| dst_min | Giá trị nhập (ô) | Giá trị nhỏ nhất sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_median | Giá trị nhập (ô) | Giá trị giữa sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_max | Giá trị nhập (ô) | Giá trị lớn nhất sau khi đổi | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Giá trị đầu vào {#get_input}

Giá trị đầu vào của chiết áp xoay ở cổng đã chọn  
Nếu bạn chưa đặt phạm vi đầu vào thì giá trị nằm trong khoảng từ 0 đến 255.

<BlockImage module="CheeseStick/CSD03" id="get_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần đọc | Sa, Sb, Sc | cổng của lần gọi `set_port` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd03 = cheesestick.CSD03()

csd03.get_input('Sa')
```
