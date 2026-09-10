---
title: Nhận diện bàn tay
---

# Nhận diện bàn tay

## Khai báo thực thể {#instance}

Khi bạn thêm khối Nhận diện bàn tay(HandDetection) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
hand_detection = HandDetection(0)
# Khi có nhiều thực thể
hand_detection_1 = HandDetection(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt camera {#device}

Đặt camera dùng để nhận diện bàn tay.

<BlockImage module="AI/HandDetection" id="device" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên thiết bị camera | nhãn camera của hệ thống | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.device('')
```

## Tải mô hình bàn tay {#load_model}

Tải mô hình bàn tay đã được huấn luyện. Bạn bắt buộc phải làm việc này thì mới dùng được các chức năng của mô-đun 'Nhận diện bàn tay'.

<BlockImage module="AI/HandDetection" id="load_model" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| wait | Hộp kiểm | Có chờ tải xong hay không | TRUE / FALSE | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.load_model(wait=True)
```

## Đặt số bàn tay mục tiêu {#max_hands}

Quyết định khi tìm bàn tay thì lấy một tay hay cả hai tay làm mục tiêu.

<BlockImage module="AI/HandDetection" id="max_hands" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Số bàn tay | một(one), hai(both) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.max_hands('one')
hand_detection.max_hands('both')
```

## Phát hiện bàn tay một lần {#detect_once}

Tìm bàn tay đang có trên màn hình rồi đánh dấu đúng một lần.

<BlockImage module="AI/HandDetection" id="detect_once" />

### Tham số

(không có)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detect_once()
```

## Bắt đầu / dừng phát hiện bàn tay liên tục {#detect_continuous}

Liên tục bám theo bàn tay đang có trên màn hình và đánh dấu nó trên màn hình.

<BlockImage module="AI/HandDetection" id="detect_continuous" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
hand_detection = HandDetection(0)

# unit = "start"
hand_detection.detect_continuous()
# unit = "stop"
hand_detection.stop()
```

## Hiện kết quả {#display}

Quyết định có hiện kết quả nhận diện bàn tay trên màn hình camera hay không.

<BlockImage module="AI/HandDetection" id="display" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Hiển thị BẬT / TẮT | hiện(on=True), ẩn(off=False) | TRUE |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.display(True)
hand_detection.display(False)
```

## Tọa độ bộ phận bàn tay {#hand_data}

Trả về thông tin vị trí lòng bàn tay/cổ tay của bàn tay đã chỉ định.

<BlockImage module="AI/HandDetection" id="hand_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| side | Tùy chọn danh sách thả xuống | Bên bàn tay | trái(left), phải(right) | - |
| unit | Tùy chọn danh sách thả xuống | Bộ phận bàn tay | lòng bàn(palm), cổ tay(wrist) | - |
| pos | Tùy chọn danh sách thả xuống | Loại tọa độ / kích thước | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'palm', 'x')
hand_detection.hand('right', 'wrist', 'y')
hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Tọa độ khớp ngón tay {#joint_data}

Trả về tọa độ khớp của ngón tay đã chỉ định.

<BlockImage module="AI/HandDetection" id="joint_data" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| side | Tùy chọn danh sách thả xuống | Bên bàn tay | trái(left), phải(right) | - |
| unit | Tùy chọn danh sách thả xuống | Ngón tay | cái(thumb), trỏ(index), giữa(middle), áp út(ring), út(pinky) | - |
| joint | Tùy chọn danh sách thả xuống | Vị trí khớp | khớp thứ nhất(first), khớp thứ hai(second), khớp thứ ba(third), đầu ngón(last) | - |
| pos | Tùy chọn danh sách thả xuống | Tọa độ | x, y | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.finger('left', 'index', 'first', 'x')
hand_detection.finger('right', 'thumb', 'last', 'y')
```

## Thông tin hình chữ nhật bàn tay {#hand_square}

Trả về giá trị vị trí/kích thước của hình chữ nhật bao quanh bàn tay đã chỉ định.

<BlockImage module="AI/HandDetection" id="hand_square" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| side | Tùy chọn danh sách thả xuống | Bên bàn tay | trái(left), phải(right) | - |
| unit | Tùy chọn danh sách thả xuống | Bộ phận bàn tay | bàn tay(hand), lòng bàn(palm) | - |
| pos | Tùy chọn danh sách thả xuống | Thông tin hình chữ nhật | vị trí x nhỏ nhất(min_x), vị trí x lớn nhất(max_x), vị trí y nhỏ nhất(min_y), vị trí y lớn nhất(max_y), chiều rộng(width), chiều cao(height), diện tích(area) | - |

### Python
```python
hand_detection = HandDetection(0)

hand_detection.hand('left', 'hand', 'min_x')
hand_detection.hand('right', 'palm', 'width')
```

## Khoảng cách giữa hai bàn tay {#hand_to_hand_distance}

Trả về khoảng cách giữa hai bộ phận bàn tay.

<BlockImage module="AI/HandDetection" id="hand_to_hand_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Giá trị nhập (văn bản) | Bộ phận bàn tay thứ nhất | bàn tay: `'side_unit'` (ví dụ: `'left_palm'`). side=left/right, unit=palm/wrist/hand  | - |
| unit2 | Giá trị nhập (văn bản) | Bộ phận bàn tay thứ hai | bàn tay: `'side_unit'` (ví dụ: `'right_palm'`). side=left/right, unit=palm/wrist/hand | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# bàn tay ↔ bàn tay / khoảng cách
hand_detection.get_distance('left_palm', 'right_palm')  
```

## Khoảng cách giữa bàn tay và ngón tay {#hand_to_joint_distance}

Trả về khoảng cách giữa một bộ phận bàn tay và một khớp ngón tay.

<BlockImage module="AI/HandDetection" id="hand_to_joint_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Giá trị nhập (văn bản) | Bộ phận thứ nhất | bàn tay: `'side_unit'` (ví dụ: `'left_palm'`).side=left/right, unit=palm/wrist/hand | - |
| unit2 | Giá trị nhập (văn bản) | Bộ phận thứ hai | ngón tay: `'side_unit_joint'` (ví dụ: `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# bàn tay ↔ khớp ngón tay / khoảng cách ngang
hand_detection.get_distance('left_palm', 'right_index_first')
```

## Khoảng cách giữa hai ngón tay {#joint_to_joint_distance}

Trả về khoảng cách giữa hai khớp ngón tay.

<BlockImage module="AI/HandDetection" id="joint_to_joint_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit1 | Giá trị nhập (văn bản) | Bộ phận thứ nhất | ngón tay: `'side_unit_joint'` (ví dụ: `'left_thumb_last'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| unit2 | Giá trị nhập (văn bản) | Bộ phận thứ hai | ngón tay: `'side_unit_joint'` (ví dụ: `'right_index_first'`). unit=thumb/index/middle/ring/pinky, joint=first/second/third/last | - |
| type | Tùy chọn danh sách thả xuống | Loại khoảng cách | khoảng cách (bỏ qua hoặc None), khoảng cách ngang(horizontal), khoảng cách dọc(vertical) | None |

### Python
```python
hand_detection = HandDetection(0)

# khớp ngón tay ↔ khớp ngón tay / khoảng cách dọc
hand_detection.get_distance('left_thumb_last', 'right_index_first', 'vertical')
```

## Trạng thái mô hình {#model_state}

Trả về trạng thái tải mô hình bàn tay.  
Trả về 0 nếu chưa tải, 1 nếu đang tải và 2 nếu đã tải xong.

<BlockImage module="AI/HandDetection" id="model_state" />

### Tham số

(không có)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.model_state()
```

## Đã phát hiện bàn tay? {#detected}

Có tìm thấy bàn tay hay không

<BlockImage module="AI/HandDetection" id="detected" />

### Tham số

(không có)

### Python
```python
hand_detection = HandDetection(0)

hand_detection.detected()
```
