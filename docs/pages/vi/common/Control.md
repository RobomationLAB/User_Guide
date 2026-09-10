---
title: Điều khiển
---

# Điều khiển

Trong lập trình khối, **khối điều khiển** giữ vai trò điều chỉnh luồng chạy của chương trình.  
Nó làm được những việc như chờ một khoảng thời gian, nhận biết phím bấm, ghi nhật ký.


## Chờ {#wait_sec}

Chờ trong khoảng thời gian (giây) đã chỉ định rồi mới chạy lệnh tiếp theo.

<BlockImage module="common/control" id="wait_sec" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| sec | Giá trị nhập (ô) | Thời gian chờ — **số trực tiếp** (ví dụ: `Utils.wait(0.5)`) | số thực từ 0 trở lên | - |
| sec | Giá trị nhập (khối) | Thời gian chờ — **biến/biểu thức** (ví dụ: `Utils.wait(time)`) | số thực từ 0 trở lên | - |

### Python
```python
# ô sec = 2 → giữ nguyên (đơn vị giây)
Utils.wait(2)

# giá trị lấy từ biến
Utils.wait(myVar)
```

## Chờ một khung hình {#wait_1msec}

Dừng chương trình trong một khung hình (khoảng 0,001 giây).

<BlockImage module="common/control" id="wait_1msec" />

### Tham số

(không có — cố định 0,001 giây)

### Python
```python
Utils.wait(0.001)
```

<!--
## Chờ mãi mãi {#wait_forever}

Dừng chương trình và chờ vô hạn.

### Tham số

(không có)

### Python
```python
Utils.wait_forever()
```
-->

## Phím được nhấn {#key_pressed}

Trả về **đúng (True) / sai (False)** tùy theo một phím nhất định có đang được nhấn hay không.

<BlockImage module="common/control" id="key_pressed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| key | Giá trị nhập | Tên phím | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Ghi nhật ký {#log}

Ghi giá trị của một biến hay thuộc tính lên cửa sổ **bảng điều khiển** theo thời gian thực.

<BlockImage module="common/control" id="log" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập | Giá trị cần ghi | giá trị bất kỳ | - |
| tag | Giá trị nhập | Thẻ nhật ký | chuỗi ký tự | - |
| unit | Giá trị nhập | Đơn vị hiển thị | chuỗi ký tự | - |

### Python
```python
Utils.log(data, '', '')
```

## Vẽ biểu đồ {#scope}

Hiển thị sự thay đổi của một giá trị dưới dạng biểu đồ thời gian thực trên cửa sổ **biểu đồ**.  
Bạn đặt được màu, giá trị nhỏ nhất/lớn nhất và phạm vi của biểu đồ.

<BlockImage module="common/control" id="scope" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| signal | Giá trị nhập (khối) | Giá trị tín hiệu của biểu đồ | số thực | - |
| name | Giá trị nhập | Tên biểu đồ | chuỗi ký tự | - |
| min_val | Giá trị nhập (ô) | Giá trị nhỏ nhất của biểu đồ | số thực | - |
| max_val | Giá trị nhập (ô) | Giá trị lớn nhất của biểu đồ | số thực | - |
| color | Màu sắc | Màu biểu đồ (hex) | chuỗi hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
