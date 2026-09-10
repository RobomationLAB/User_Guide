---
title: CSD-02 Đèn LED RGB
---

# CSD-02 Đèn LED RGB

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-02 Đèn LED RGB(CSD02) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bắt đầu đèn LED RGB {#start}

Bắt đầu dùng đèn LED RGB.  
Không có khối này thì đèn LED RGB không hoạt động.

<BlockImage module="CheeseStick/CSD02" id="start" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.start()
```

## Đặt màu {#set_color}

Đặt màu đèn LED của mô-đun CSD02 theo màu đã chọn.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào mã. (Mã chứa tên màu chứ không phải ba số R, G, B.)

<BlockImage module="CheeseStick/CSD02" id="set_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'orange'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'violet'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color('orange')
```

## Đặt màu bằng khối thuộc nhóm Màu sắc {#set_color_with_block}

Đặt màu đèn LED của mô-đun CSD02 theo một khối thuộc nhóm Màu sắc (ví dụ mảng `[R, G, B]`).

<BlockImage module="CheeseStick/CSD02" id="set_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (màu) | Kết quả của khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.set_color(*Utils.color('yellow'))
```

## Thay đổi màu theo RGB {#change_by_rgb}

Cộng các mức thay đổi R, G, B bạn nhập vào màu hiện tại của đèn LED để tạo màu mới.

<BlockImage module="CheeseStick/CSD02" id="change_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.change_color(10, 0, 0)
```

## Tắt LED {#turn_off}

Tắt màu của đèn LED RGB.

<BlockImage module="CheeseStick/CSD02" id="turn_off" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
csd02 = cheesestick.CSD02()

csd02.turn_off()
```
