---
title: Nhận diện điểm đánh dấu ArUco
---

# Nhận diện điểm đánh dấu ArUco

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện điểm đánh dấu ArUco(ArucoMarker) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
aruco_marker = ArucoMarker(0)
# Khi có nhiều thực thể
aruco_marker_1 = ArucoMarker(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện điểm đánh dấu ArUco.

<BlockImage module="AI/ArucoMarker" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.device('')
```

## Đặt số dấu tối đa {#max_count}

Đặt số điểm đánh dấu nhiều nhất có thể nhận diện được. Phạm vi của số điểm đánh dấu là từ 0 đến 10.

<BlockImage module="AI/ArucoMarker" id="max_count" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Số dấu tối đa | số nguyên từ 0 đến 10 | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.max_count(5)
```

## Nhận diện dấu một lần {#detect_once}

Tìm điểm đánh dấu đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/ArucoMarker" id="detect_once" />

### Tham số

(không có)

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.detect_once()
```

## Bắt đầu / dừng nhận diện dấu liên tục {#detect_continuous}

Liên tục bám theo điểm đánh dấu đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/ArucoMarker" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
aruco_marker = ArucoMarker(0)

# unit = "start"
aruco_marker.detect_continuous()
# unit = "stop"
aruco_marker.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện điểm đánh dấu trên màn hình camera hay không.

<BlockImage module="AI/ArucoMarker" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.display(True)
aruco_marker.display(False)
```

## Dữ liệu dấu {#marker_data}

Trả về giá trị vị trí/kích thước của điểm đánh dấu có ID đã chỉ định.

<BlockImage module="AI/ArucoMarker" id="marker_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | ID của dấu | số nguyên từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Loại giá trị đo | x, y, min_x, max_x, min_y, max_y, width, height, area, rotation | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker(0, 'x')
aruco_marker.marker(3, 'area')
```

## Khoảng cách giữa hai dấu {#marker_to_marker}

Trả về khoảng cách giữa hai điểm đánh dấu.

<BlockImage module="AI/ArucoMarker" id="marker_to_marker" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Giá trị nhập (khối) | ID của dấu thứ nhất | số nguyên từ 0 trở lên | - |
| unit2 | Giá trị nhập (khối) | ID của dấu thứ hai | số nguyên từ 0 trở lên | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.get_distance(0, 1)  # khoảng cách
aruco_marker.get_distance(0, 2, 'horizontal')  # khoảng cách ngang
```

## Đã phát hiện dấu? {#marker_detected}

Có tìm thấy điểm đánh dấu mang giá trị id nhất định hay không

<BlockImage module="AI/ArucoMarker" id="marker_detected" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | ID của dấu | số nguyên từ 0 trở lên | - |

### Python
```python
aruco_marker = ArucoMarker(0)

aruco_marker.marker_detected(0)
```
