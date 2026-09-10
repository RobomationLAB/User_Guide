---
title: CSD-10 Cảm biến ALS
---

# CSD-10 Cảm biến ALS

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-10 Cảm biến ALS(CSD10) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bắt đầu với cổng đầu vào {#set_input_port}

Đặt cổng mà mô-đun CSD10 (cảm biến ánh sáng) được cắm vào.

<BlockImage module="CheeseStick/CSD10" id="set_input_port" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần kết nối | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.set_port('Sa')
```

## Giá trị cảm biến ALS {#get_input}

Giá trị cảm biến ánh sáng ở cổng đã chọn

<BlockImage module="CheeseStick/CSD10" id="get_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần đọc | Sa, Sb, Sc | cổng của lần gọi `set_port` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd10 = cheesestick.CSD10()

csd10.get_input('Sa')
```
