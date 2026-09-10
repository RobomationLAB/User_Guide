---
title: CSD-07 Cảm biến âm thanh
---

# CSD-07 Cảm biến âm thanh

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-07 Cảm biến âm thanh(CSD07) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bắt đầu với cổng đầu vào {#set_input_port}

Đặt cổng mà mô-đun CSD07 (cảm biến âm thanh) được cắm vào.

<BlockImage module="CheeseStick/CSD07" id="set_input_port" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần kết nối | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.set_port('Sa')
```

## Giá trị cảm biến âm thanh {#get_input}

Giá trị cảm biến âm thanh ở cổng đã chọn

<BlockImage module="CheeseStick/CSD07" id="get_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng cần đọc | Sa, Sb, Sc | cổng của lần gọi `set_port` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd07 = cheesestick.CSD07()

csd07.get_input('Sa')
```
