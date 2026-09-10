---
title: PID-26 Cảm biến môi trường
---

# PID-26 Cảm biến môi trường

## Khai báo thực thể {#instance}

Khi bạn thêm khối PID-26 Cảm biến môi trường(PID26) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Khởi động cảm biến môi trường {#start}

Cho phép dùng PID-26 Cảm biến môi trường.

<BlockImage module="CheeseStick/PID26" id="start" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## Nhiệt độ {#temperature}

Trả về giá trị nhiệt độ đo được bằng PID26 Cảm biến môi trường. 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## Độ ẩm {#humidity}

Trả về giá trị độ ẩm đo được bằng PID26 Cảm biến môi trường.

<BlockImage module="CheeseStick/PID26" id="humidity" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## Áp suất {#pressure}

Trả về giá trị áp suất đo được bằng PID26 Cảm biến môi trường.  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
