---
title: Camera tự lái
---

# Camera tự lái

## Khai báo thực thể {#instance}

Khi bạn thêm khối Camera tự lái(SelfDriving) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
self_driving = SelfDriving(0)
# Khi có nhiều thực thể
self_driving_1 = SelfDriving(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để tự lái.

<BlockImage module="AI/SelfDriving" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.device('')
```

## Đặt màu làn đường {#set_lane_color}

Đặt màu của làn đường bên trái/bên phải.

<BlockImage module="AI/SelfDriving" id="set_lane_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| left | Tùy chọn danh sách thả xuống | Màu làn bên trái | đỏ(red), xanh lá(green), xanh dương(blue) | - |
| right | Tùy chọn danh sách thả xuống | Màu làn bên phải | đỏ(red), xanh lá(green), xanh dương(blue) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.set_lane('green', 'blue')
```

## Phát hiện màu/làn một lần {#detect_once}

Tìm màu và làn đường đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/SelfDriving" id="detect_once" />

### Tham số

(không có)

### Python
```python
self_driving = SelfDriving(0)

self_driving.detect_once()
```

## Bắt đầu / dừng phát hiện màu/làn liên tục {#detect_continuous}

Liên tục bám theo màu và làn đường đang có trên màn hình và đánh dấu chúng trên màn hình.

<BlockImage module="AI/SelfDriving" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
self_driving = SelfDriving(0)

# unit = "start"
self_driving.detect_continuous()
# unit = "stop"
self_driving.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện trên màn hình camera hay không.

<BlockImage module="AI/SelfDriving" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
self_driving = SelfDriving(0)

self_driving.display(True)
self_driving.display(False)
```

## Dữ liệu làn đường {#lane_data}

Trả về giá trị vị trí hoặc khoảng cách của làn đường đã chỉ định.

<BlockImage module="AI/SelfDriving" id="lane_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| lane | Tùy chọn danh sách thả xuống | Làn đường | trái(left), phải(right) | - |
| unit | Tùy chọn danh sách thả xuống | Loại giá trị đo | x, khoảng cách(distance) | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane('left', 'x')
self_driving.lane('right', 'distance')
```

## Dữ liệu màu {#color_data}

Trả về giá trị vị trí/kích thước của màu đã chỉ định.

<BlockImage module="AI/SelfDriving" id="color_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đỏ(red), xanh lá(green), xanh dương(blue) | - |
| unit | Tùy chọn danh sách thả xuống | Loại tọa độ / kích thước | x, y, min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color('red', 'x')
self_driving.color('green', 'y')
self_driving.color('blue', 'area')
```

## Khoảng cách giữa hai màu {#color_to_color}

Trả về khoảng cách giữa hai màu.

<BlockImage module="AI/SelfDriving" id="color_to_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Tùy chọn danh sách thả xuống | Màu thứ nhất | đỏ(red), xanh lá(green), xanh dương(blue) | - |
| unit2 | Tùy chọn danh sách thả xuống | Màu thứ hai | đỏ(red), xanh lá(green), xanh dương(blue) | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
self_driving = SelfDriving(0)

self_driving.get_distance('red', 'blue')  # khoảng cách
self_driving.get_distance('green', 'blue', 'horizontal')  # khoảng cách ngang
```

## Đã phát hiện làn đường? {#lane_detected}

Có tìm thấy làn đường nhất định hay không

<BlockImage module="AI/SelfDriving" id="lane_detected" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| lane | Tùy chọn danh sách thả xuống | Làn đường | trái(left), phải(right), cả hai(both), bất kỳ(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.lane_detected('left')
```

## Đã phát hiện màu? {#color_detected}

Có tìm thấy vùng màu nhất định hay không

<BlockImage module="AI/SelfDriving" id="color_detected" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | đỏ(red), xanh lá(green), xanh dương(blue), bất kỳ(any) | any |

### Python
```python
self_driving = SelfDriving(0)

self_driving.color_detected('red')
```
