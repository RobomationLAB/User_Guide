---
title: PID-13 Cần điều khiển & nút nhấn
---

# PID-13 Cần điều khiển & nút nhấn

## Khai báo thực thể {#instance}

Khi bạn thêm khối PID-13 Cần điều khiển & nút nhấn(PID13) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Khởi động cần điều khiển {#start}

Cho phép dùng cần điều khiển và các nút nhấn.

<BlockImage module="CheeseStick/PID13" id="start" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.start()
```

## Giá trị cần điều khiển {#joystick}

Giá trị x / y của cần điều khiển.  
Phạm vi của mỗi giá trị là từ -128 đến 127.

<BlockImage module="CheeseStick/PID13" id="joystick" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.joystick('x')
```

## Giá trị đầu vào nút {#button_input}

Trạng thái đầu vào của nút đã chọn  
Trả về 1 nếu nút đang được nhấn và 0 nếu nút không được nhấn.

<BlockImage module="CheeseStick/PID13" id="button_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên nút | nút A(a), nút B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_input('a')
```

## Nút có được bấm? {#button_click}

Nút đã chọn có được bấm hay không  
Khối này chỉ trả về đúng vào lúc nút được bấm, còn lại trả về sai.

<BlockImage module="CheeseStick/PID13" id="button_click" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên nút | nút A(a), nút B(b) | - |

### Python
```python
cheesestick = CheeseStick(0)
pid13 = cheesestick.PID13()

pid13.button_click('a')
```
