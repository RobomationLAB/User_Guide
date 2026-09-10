---
title: Chuyển giọng nói thành văn bản
---

# Chuyển giọng nói thành văn bản

## Khai báo thực thể {#instance}

Khi bạn thêm khối Chuyển giọng nói thành văn bản(ASR) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
asr = ASR(0)
# Khi có nhiều thực thể
asr_1 = ASR(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt ngôn ngữ {#lang}

Đặt ngôn ngữ nhận dạng giọng nói. Nếu bạn không đặt, ngôn ngữ vẫn được đặt tự động.

<BlockImage module="AI/ASR" id="lang" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Mã ngôn ngữ nhận dạng | Mã của 21 ngôn ngữ mà chương trình hỗ trợ (ví dụ: `'vi-VN'`, `'en-US'`) | - |

### Python
```python
asr = ASR(0)

asr.lang('vi-VN')
```

## Bắt đầu / dừng nhận dạng giọng nói {#listen}

Bắt đầu hoặc dừng việc nhận dạng giọng nói.

<BlockImage module="AI/ASR" id="listen" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | bắt đầu(start), dừng(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## Kết quả nhận dạng giọng nói {#result}

Kết quả nhận dạng giọng nói

<BlockImage module="AI/ASR" id="result" />

### Tham số

(không có)

### Python
```python
asr = ASR(0)

asr.result()
```

## Đang nhận dạng giọng nói? {#state}

Trả về **đúng (True) / sai (False)** tùy theo chức năng nhận dạng giọng nói có đang bật hay không.

<BlockImage module="AI/ASR" id="state" />

### Tham số

(không có)

### Python
```python
asr = ASR(0)

asr.is_active()
```
