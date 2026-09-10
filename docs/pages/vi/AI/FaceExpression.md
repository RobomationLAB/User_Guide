---
title: Biểu cảm khuôn mặt
---

# Biểu cảm khuôn mặt

## Khai báo thực thể {#instance}

Khi bạn thêm khối Biểu cảm khuôn mặt(FaceExpression) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
face_expression = FaceExpression(0)
# Khi có nhiều thực thể
face_expression_1 = FaceExpression(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện tuổi, giới tính và biểu cảm.

<BlockImage module="AI/FaceExpression" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Tải mô hình biểu cảm khuôn mặt {#load_model}

Tải mô hình tuổi, giới tính và biểu cảm đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Biểu cảm khuôn mặt'.

<BlockImage module="AI/FaceExpression" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Phát hiện biểu cảm khuôn mặt một lần {#detect_once}

Tìm khuôn mặt đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Bắt đầu / dừng phát hiện biểu cảm khuôn mặt liên tục {#detect_continuous}

Liên tục bám theo khuôn mặt đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện trên màn hình camera hay không.

<BlockImage module="AI/FaceExpression" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Tuổi {#age}

Tuổi

<BlockImage module="AI/FaceExpression" id="age" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Giới tính {#gender}

Giới tính

<BlockImage module="AI/FaceExpression" id="gender" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Biểu cảm {#expression}

Biểu cảm

<BlockImage module="AI/FaceExpression" id="expression" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Đã phát hiện giới tính? {#gender_detected}

Có nhận ra giới tính hay không

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Giới tính có phải là ~ không? {#gender_check}

Trả về **đúng (True) / sai (False)** tùy theo giới tính nhận ra được có khớp với giá trị bạn chỉ định hay không.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Giới tính | nam(male), nữ(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Độ tin cậy của giới tính {#gender_confidence}

Xác suất (độ tin cậy) khuôn mặt thuộc giới tính đã chọn

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Giới tính | nam(male), nữ(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Đã phát hiện biểu cảm? {#expression_detected}

Có nhận ra biểu cảm hay không

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Biểu cảm có phải là ~ không? {#expression_check}

Trả về **đúng (True) / sai (False)** tùy theo biểu cảm nhận ra được có khớp với giá trị bạn chỉ định hay không.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Biểu cảm | tức giận(angry), ghê tởm(disgusted), sợ hãi(fearful), vui(happy), bình thường(neutral), buồn(sad), ngạc nhiên(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Độ tin cậy của biểu cảm {#expression_confidence}

Xác suất (độ tin cậy) khuôn mặt có biểu cảm đã chọn

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Biểu cảm | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình tuổi, giới tính và biểu cảm.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Tham số

(không có)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
