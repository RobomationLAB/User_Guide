---
title: CSD-01 Công tắc nhấn
---

# CSD-01 Công tắc nhấn

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-01 Công tắc nhấn(CSD01) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bắt đầu với cổng đầu vào {#set_input_port}

Đặt cổng mà mô-đun CSD01 (công tắc nhấn) được cắm vào.

<BlockImage module="CheeseStick/CSD01" id="set_input_port" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần kết nối | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.set_port('Sa')
```

## Đầu vào nút nhấn {#button_input}

Giá trị đầu vào của nút nhấn ở cổng đã chọn  
Trả về 0 nếu nút đang được nhấn và 1 nếu nút không được nhấn.

<BlockImage module="CheeseStick/CSD01" id="button_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần đọc | Sa, Sb, Sc | cổng của lần gọi `set_port` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_input('Sa')
```

## Nút có được nhấn? {#button_pressed}

Nút của công tắc ở cổng đã chọn có đang được nhấn hay không

<BlockImage module="CheeseStick/CSD01" id="button_pressed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần đọc | Sa, Sb, Sc | cổng của lần gọi `set_port` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd01 = cheesestick.CSD01()

csd01.button_pressed('Sa')
```
