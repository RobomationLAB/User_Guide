---
title: Nhận diện vật thể
---

# Nhận diện vật thể

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện vật thể(ObjectDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
object_detection = ObjectDetection(0)
# Khi có nhiều thực thể
object_detection_1 = ObjectDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện vật thể.

<BlockImage module="AI/ObjectDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.device('')
```

## Tải mô hình vật thể {#load_model}

Tải mô hình vật thể đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Nhận diện vật thể'.

<BlockImage module="AI/ObjectDetection" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.load_model(wait=True)
```

## Đặt số vật thể tối đa {#max_objects}

Đặt số vật thể nhiều nhất có thể tìm được. Phạm vi của số vật thể là từ 0 đến 10.

<BlockImage module="AI/ObjectDetection" id="max_objects" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Số vật thể tối đa | số nguyên từ 0 đến 10 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.max_objects(5)
```

## Đặt ngưỡng độ tin cậy {#confidence_threshold}

Đặt xác suất (độ tin cậy) nhỏ nhất khi nhận diện vật thể. Chỉ khi xác suất (độ tin cậy) lớn hơn giá trị này thì vật thể mới hiện trên màn hình. Phạm vi của xác suất (độ tin cậy) là từ 0 đến 1.

<BlockImage module="AI/ObjectDetection" id="confidence_threshold" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Ngưỡng độ tin cậy | số thực từ 0 đến 1 | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.confidence_threshold(0.5)
```

## Phát hiện vật thể một lần {#detect_once}

Tìm vật thể đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/ObjectDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detect_once()
```

## Bắt đầu / dừng phát hiện vật thể liên tục {#detect_continuous}

Liên tục bám theo vật thể đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/ObjectDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
object_detection = ObjectDetection(0)

# unit = "start"
object_detection.detect_continuous()
# unit = "stop"
object_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện vật thể trên màn hình camera hay không.

<BlockImage module="AI/ObjectDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.display(True)
object_detection.display(False)
```

## Thông tin vị trí vật thể {#object_data}

Trả về giá trị vị trí/kích thước của vật thể đã chỉ định.

<BlockImage module="AI/ObjectDetection" id="object_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên vật thể | 80 lớp vật thể (`'person'`, `'bicycle'`, `'car'`, `'motorcycle'`, `'airplane'`, `'bus'`, `'cat'`, `'dog'`, `'apple'`, `'cup'`, `'laptop'`, `'cell_phone'`…) | - |
| pos | Tùy chọn danh sách thả xuống | Tọa độ | x, y | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'x')
object_detection.object('bicycle', 'y')
```

## Thông tin khung chữ nhật vật thể {#object_square}

Trả về giá trị vị trí/kích thước của khung chữ nhật bao quanh vật thể đã chỉ định.

<BlockImage module="AI/ObjectDetection" id="object_square" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên vật thể | 80 lớp vật thể | - |
| pos | Tùy chọn danh sách thả xuống | Thông tin khung chữ nhật | min_x, max_x, min_y, max_y, width, height, area | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object('person', 'width')
object_detection.object('car', 'area')
```

## Khoảng cách giữa hai vật thể {#object_distance}

Trả về khoảng cách giữa hai lớp vật thể.

<BlockImage module="AI/ObjectDetection" id="object_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Tùy chọn danh sách thả xuống | Tên vật thể thứ nhất | 80 lớp vật thể | - |
| unit2 | Tùy chọn danh sách thả xuống | Tên vật thể thứ hai | 80 lớp vật thể | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.get_distance('person', 'bicycle')  # khoảng cách
object_detection.get_distance('person', 'car', 'horizontal')  # khoảng cách ngang
```

## Độ tin cậy của vật thể {#object_confidence}

Xác suất (độ tin cậy) vật thể đã chọn là đúng

<BlockImage module="AI/ObjectDetection" id="object_confidence" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên vật thể | 80 lớp vật thể | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_confidence('person')
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình vật thể.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/ObjectDetection" id="model_state" />

### Tham số

(không có)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.model_state()
```

## Đã phát hiện vật thể? {#detected}

Có tìm thấy vật thể hay không

<BlockImage module="AI/ObjectDetection" id="detected" />

### Tham số

(không có)

### Python
```python
object_detection = ObjectDetection(0)

object_detection.detected()
```

## Đã phát hiện một vật thể nhất định? {#object_detected}

Có tìm thấy vật thể đã chọn hay không

<BlockImage module="AI/ObjectDetection" id="object_detected" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên vật thể | 80 lớp vật thể | - |

### Python
```python
object_detection = ObjectDetection(0)

object_detection.object_detected('person')
```
