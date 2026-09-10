---
title: Nhận diện khuôn mặt chi tiết
---

# Nhận diện khuôn mặt chi tiết

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện khuôn mặt chi tiết(DetailedFaceDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
detailed_face_detection = DetailedFaceDetection(0)
# Khi có nhiều thực thể
detailed_face_detection_1 = DetailedFaceDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện khuôn mặt chi tiết.

<BlockImage module="AI/DetailedFaceDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.device('')
```

## Tải mô hình khuôn mặt {#load_model}

Tải mô hình khuôn mặt đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Nhận diện khuôn mặt chi tiết'.

<BlockImage module="AI/DetailedFaceDetection" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.load_model(wait=True)
```

## Phát hiện khuôn mặt một lần {#detect_once}

Tìm khuôn mặt đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/DetailedFaceDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detect_once()
```

## Bắt đầu / dừng phát hiện khuôn mặt liên tục {#detect_continuous}

Liên tục bám theo khuôn mặt đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/DetailedFaceDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

# unit = "start"
detailed_face_detection.detect_continuous()
# unit = "stop"
detailed_face_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện khuôn mặt trên màn hình camera hay không.

<BlockImage module="AI/DetailedFaceDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.display(True)
detailed_face_detection.display(False)
```

## Tọa độ bộ phận khuôn mặt {#face_data}

Trả về tọa độ của từng bộ phận trên khuôn mặt.

<BlockImage module="AI/DetailedFaceDetection" id="face_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bộ phận khuôn mặt | khuôn mặt(face), mắt trái(left eye), mắt phải(right eye), miệng(mouth), mũi(nose), môi trên(upper lip), môi dưới(lower lip), khóe miệng trái(left lip), khóe miệng phải(right lip), con ngươi trái(left pupil), con ngươi phải(right pupil) | - |
| pos | Tùy chọn danh sách thả xuống | Tọa độ | x, y | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('x')
detailed_face_detection.left_eye('y')
detailed_face_detection.upper_lip('x')
detailed_face_detection.right_pupil('y')
```

## Thông tin khung chữ nhật bộ phận khuôn mặt {#face_square}

Trả về giá trị vị trí/kích thước của khung chữ nhật bao quanh từng bộ phận trên khuôn mặt.

<BlockImage module="AI/DetailedFaceDetection" id="face_square" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bộ phận khuôn mặt | khuôn mặt(face), mắt trái(left eye), mắt phải(right eye), miệng(mouth) | - |
| pos | Tùy chọn danh sách thả xuống | Thông tin khung chữ nhật | vị trí x nhỏ nhất(min_x), vị trí x lớn nhất(max_x), vị trí y nhỏ nhất(min_y), vị trí y lớn nhất(max_y), chiều rộng(width), chiều cao(height), diện tích(area) | - |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.face('min_x')
detailed_face_detection.left_eye('area')
```

## Khoảng cách giữa hai bộ phận {#distance}

Trả về khoảng cách giữa hai bộ phận trên khuôn mặt.

<BlockImage module="AI/DetailedFaceDetection" id="distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Tùy chọn danh sách thả xuống | Bộ phận thứ nhất | tên bộ phận khuôn mặt | - |
| unit2 | Tùy chọn danh sách thả xuống | Bộ phận thứ hai | tên bộ phận khuôn mặt | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.get_distance('left_eye', 'right_eye')  # khoảng cách
detailed_face_detection.get_distance('left_pupil', 'right_pupil', 'horizontal')  # khoảng cách ngang
detailed_face_detection.get_distance('upper_lip', 'lower_lip', 'vertical')  # khoảng cách dọc
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình khuôn mặt.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/DetailedFaceDetection" id="model_state" />

### Tham số

(không có)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.model_state()
```

## Đã phát hiện khuôn mặt? {#detected}

Có tìm thấy khuôn mặt hay không

<BlockImage module="AI/DetailedFaceDetection" id="detected" />

### Tham số

(không có)

### Python
```python
detailed_face_detection = DetailedFaceDetection(0)

detailed_face_detection.detected()
```
