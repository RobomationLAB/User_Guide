---
title: Nhận diện cơ thể
---

# Nhận diện cơ thể

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện cơ thể(BodyDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
body_detection = BodyDetection(0)
# Khi có nhiều thực thể
body_detection_1 = BodyDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện cơ thể.

<BlockImage module="AI/BodyDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.device('')
```

## Tải mô hình cơ thể {#load_model}

Tải mô hình cơ thể đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Nhận diện cơ thể'.

<BlockImage module="AI/BodyDetection" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.load_model(wait=True)
```

## Phát hiện cơ thể một lần {#detect_once}

Tìm cơ thể đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/BodyDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detect_once()
```

## Bắt đầu / dừng phát hiện cơ thể liên tục {#detect_continuous}

Liên tục bám theo cơ thể đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/BodyDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
body_detection = BodyDetection(0)

# unit = "start"
body_detection.detect_continuous()
# unit = "stop"
body_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện cơ thể trên màn hình camera hay không.

<BlockImage module="AI/BodyDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
body_detection = BodyDetection(0)

body_detection.display(True)
body_detection.display(False)
```

## Tọa độ bộ phận cơ thể {#body_data}

Trả về tọa độ của từng bộ phận cơ thể.

<BlockImage module="AI/BodyDetection" id="body_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bộ phận cơ thể | mũi(nose), miệng(mouth), mắt trái(left eye), mắt phải(right eye), tai trái(left ear), tai phải(right ear), vai trái(left shoulder), vai phải(right shoulder), khuỷu tay trái(left elbow), khuỷu tay phải(right elbow), cổ tay trái(left wrist), cổ tay phải(right wrist), bàn tay trái(left hand), bàn tay phải(right hand), hông trái(left hip), hông phải(right hip), đầu gối trái(left knee), đầu gối phải(right knee), mắt cá chân trái(left ankle), mắt cá chân phải(right ankle), bàn chân trái(left foot), bàn chân phải(right foot) | - |
| pos | Tùy chọn danh sách thả xuống | Tọa độ | x, y | - |

### Python
```python
body_detection = BodyDetection(0)

body_detection.nose('x')
body_detection.mouth('y')
body_detection.left_eye('x')
body_detection.right_shoulder('y')
body_detection.left_hand('x')
```

## Khoảng cách giữa hai bộ phận {#body_distance}

Trả về khoảng cách giữa hai bộ phận cơ thể.

<BlockImage module="AI/BodyDetection" id="body_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Tùy chọn danh sách thả xuống | Bộ phận cơ thể thứ nhất | (xem bảng bộ phận cơ thể ở trên) | - |
| unit2 | Tùy chọn danh sách thả xuống | Bộ phận cơ thể thứ hai | (xem bảng bộ phận cơ thể ở trên) | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
body_detection = BodyDetection(0)

body_detection.get_distance('left_shoulder', 'right_shoulder')  # khoảng cách
body_detection.get_distance('left_wrist', 'right_wrist', 'horizontal')  # khoảng cách ngang
body_detection.get_distance('left_hip', 'left_knee', 'vertical')  # khoảng cách dọc
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình cơ thể.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/BodyDetection" id="model_state" />

### Tham số

(không có)

### Python
```python
body_detection = BodyDetection(0)

body_detection.model_state()
```

## Đã phát hiện cơ thể? {#detected}

Có tìm thấy cơ thể hay không

<BlockImage module="AI/BodyDetection" id="detected" />

### Tham số

(không có)

### Python
```python
body_detection = BodyDetection(0)

body_detection.detected()
```
