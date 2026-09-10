---
title: Nhận diện khuôn mặt
---

# Nhận diện khuôn mặt

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện khuôn mặt(FaceDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
face_detection = FaceDetection(0)
# Khi có nhiều thực thể
face_detection_1 = FaceDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện khuôn mặt.

<BlockImage module="AI/FaceDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.device('')
```

## Tải mô hình khuôn mặt {#load_model}

Tải mô hình khuôn mặt đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Nhận diện khuôn mặt'.

<BlockImage module="AI/FaceDetection" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.load_model(wait=True)
```

## Phát hiện khuôn mặt một lần {#detect_once}

Tìm khuôn mặt đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/FaceDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detect_once()
```

## Bắt đầu / dừng phát hiện khuôn mặt liên tục {#detect_continuous}

Liên tục bám theo khuôn mặt đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/FaceDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
face_detection = FaceDetection(0)

# unit = "start"
face_detection.detect_continuous()
# unit = "stop"
face_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện khuôn mặt trên màn hình camera hay không.

<BlockImage module="AI/FaceDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
face_detection = FaceDetection(0)

face_detection.display(True)
face_detection.display(False)
```

## Vị trí bộ phận khuôn mặt {#face_data}

Trả về tọa độ vị trí của khuôn mặt hoặc của một bộ phận trên khuôn mặt.

<BlockImage module="AI/FaceDetection" id="face_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bộ phận khuôn mặt | khuôn mặt(face), mắt trái(left eye), mắt phải(right eye), tai trái(left ear), tai phải(right ear), mũi(nose), miệng(mouth) | - |
| pos | Tùy chọn danh sách thả xuống | Loại tọa độ | x, y | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('x')
face_detection.left_eye('y')
face_detection.right_eye('x')
face_detection.left_ear('x')
face_detection.right_ear('y')
face_detection.nose('x')
face_detection.mouth('y')
```

## Thông tin khung chữ nhật khuôn mặt {#face_square}

Trả về giá trị vị trí/kích thước của khung chữ nhật bao quanh khuôn mặt.

<BlockImage module="AI/FaceDetection" id="face_square" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| pos | Tùy chọn danh sách thả xuống | Thông tin khung chữ nhật | vị trí x nhỏ nhất(min_x), vị trí x lớn nhất(max_x), vị trí y nhỏ nhất(min_y), vị trí y lớn nhất(max_y), chiều rộng(width), chiều cao(height), diện tích(area) | - |

### Python
```python
face_detection = FaceDetection(0)

face_detection.face('min_x')
face_detection.face('width')
face_detection.face('area')
```

## Khoảng cách giữa hai bộ phận {#distance}

Trả về khoảng cách giữa hai bộ phận trên khuôn mặt.

<BlockImage module="AI/FaceDetection" id="distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Tùy chọn danh sách thả xuống | Bộ phận thứ nhất | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| unit2 | Tùy chọn danh sách thả xuống | Bộ phận thứ hai | face, left_eye, right_eye, left_ear, right_ear, nose, mouth | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
face_detection = FaceDetection(0)

face_detection.get_distance('left_eye', 'right_eye')  # khoảng cách
face_detection.get_distance('left_eye', 'right_eye', 'horizontal')  # khoảng cách ngang
face_detection.get_distance('nose', 'mouth', 'vertical')  # khoảng cách dọc
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình khuôn mặt.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/FaceDetection" id="model_state" />

### Tham số

(không có)

### Python
```python
face_detection = FaceDetection(0)

face_detection.model_state()
```

## Đã phát hiện khuôn mặt? {#detected}

Có tìm thấy khuôn mặt hay không

<BlockImage module="AI/FaceDetection" id="detected" />

### Tham số

(không có)

### Python
```python
face_detection = FaceDetection(0)

face_detection.detected()
```
