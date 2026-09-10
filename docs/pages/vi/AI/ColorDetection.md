---
title: Nhận diện màu sắc
---

# Nhận diện màu sắc

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện màu sắc(ColorDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
color_detection = ColorDetection(0)
# Khi có nhiều thực thể
color_detection_1 = ColorDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện màu sắc.

<BlockImage module="AI/ColorDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.device('')
```

## Thêm vào màu mục tiêu {#register_color}

Thêm một màu vào những màu mà chức năng nhận diện màu sắc sẽ nhận ra.

<BlockImage module="AI/ColorDetection" id="register_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đen(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.register_color('red', wait=True)
```

## Xóa khỏi màu mục tiêu {#delete_color}

Xóa một màu khỏi những màu mà chức năng nhận diện màu sắc sẽ nhận ra.

<BlockImage module="AI/ColorDetection" id="delete_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đen(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.delete_color('blue', wait=True)
```

## Đặt điều kiện phát hiện theo diện tích {#area_condition}

Đặt diện tích nhỏ nhất của vùng màu cần nhận ra. Chỉ khi diện tích của vùng lớn hơn giá trị này thì vùng đó mới hiện trên màn hình.

<BlockImage module="AI/ColorDetection" id="area_condition" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Giá trị điều kiện diện tích | số thực từ 0 trở lên | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.area_condition(50)
```

## Phát hiện màu một lần {#detect_once}

Trong những màu nhận ra được, tìm màu đang có trên màn hình rồi đánh dấu vùng của nó đúng một lần.

<BlockImage module="AI/ColorDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
color_detection = ColorDetection(0)

color_detection.detect_once()
```

## Bắt đầu / dừng phát hiện màu liên tục {#detect_continuous}

Trong những màu nhận ra được, liên tục bám theo màu đang có trên màn hình và đánh dấu vùng của nó trên màn hình.

<BlockImage module="AI/ColorDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
color_detection = ColorDetection(0)

# unit = "start"
color_detection.detect_continuous()
# unit = "stop"
color_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện màu sắc trên màn hình camera hay không.

<BlockImage module="AI/ColorDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
color_detection = ColorDetection(0)

color_detection.display(True)
color_detection.display(False)
```

## Thông tin vùng màu {#color_data}

Trả về giá trị vị trí/kích thước của màu đã chỉ định.

<BlockImage module="AI/ColorDetection" id="color_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đen(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |
| pos | Tùy chọn danh sách thả xuống | Loại tọa độ / kích thước | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color('red', 'x')
color_detection.color('green', 'y')
color_detection.color('blue', 'area')
```

## Đã phát hiện một màu nhất định? {#color_detected}

Có tìm thấy màu đã chọn hay không

<BlockImage module="AI/ColorDetection" id="color_detected" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đen(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |

### Python
```python
color_detection = ColorDetection(0)

color_detection.color_detected('red')
```
