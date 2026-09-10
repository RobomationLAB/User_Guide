---
title: NeoPixel
---

# NeoPixel

## Khai báo thực thể {#instance}

Khi bạn thêm khối NeoPixel vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Khởi động {#start}

Cho phép dùng NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="start" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.start()
```

## Đặt chế độ màu {#mode}

Đặt chế độ LED của NeoPixel.

<BlockImage module="CheeseStick/NeoPixel" id="mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Chế độ kênh màu | GRBW, GRB | GRBW |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.mode('GRBW')
```

## Đặt màu một điểm ảnh {#set_one_color}

Đặt màu cho một điểm ảnh mang số hiệu đã chỉ định.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào mã. (Mã chứa tên màu chứ không phải ba số R, G, B.)

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| idx | Giá trị nhập (ô) | Số hiệu điểm ảnh (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, 'red')
```

## Đặt màu một điểm ảnh bằng khối thuộc nhóm Màu sắc {#set_one_color_with_block}

Nhận một khối thuộc nhóm Màu sắc làm đầu vào rồi đặt màu cho một điểm ảnh.  
Kết quả của khối màu (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`, đều trả về `[R, G, B]`) được mở ra bằng `*` (dấu sao) rồi truyền vào các đối số r, g, b của `set_one_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_one_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| idx | Giá trị nhập (ô) | Số hiệu điểm ảnh (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| data | Giá trị nhập (màu) | Khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | [0~255, 0~255, 0~255] | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_one_color(1, *Utils.color('red'))
```

## Thay đổi màu một điểm ảnh theo RGB {#change_one_by_rgb}

Cộng mức thay đổi vào giá trị RGB hiện tại của một điểm ảnh đã chỉ định để đặt màu mới.

<BlockImage module="CheeseStick/NeoPixel" id="change_one_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| idx | Giá trị nhập (ô) | Số hiệu điểm ảnh (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_one_color(1, 10, 0, 0)
```

## Tắt một điểm ảnh {#turn_off_one}

Tắt màu của đèn LED thứ n.  
Phạm vi số hiệu LED là từ 1 đến 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_one" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| idx | Giá trị nhập (ô) | Số hiệu điểm ảnh (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_one(1)
```

## Đặt mẫu cho một khoảng {#set_range_pattern}

Đặt mẫu màu cho toàn bộ các đèn LED trong khoảng đã chỉ định.  
Phạm vi số hiệu LED là từ 1 đến 144.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_pattern" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| pattern | Tùy chọn danh sách thả xuống | Tên mẫu màu | `3_colors`, `6_colors`, `12_colors`, `red_green`, `red_blue`, `red_white`, `green_red`, `green_blue`, `green_white`, `blue_red`, `blue_green`, `blue_white`, `white_red`, `white_green`, `white_blue`, `black_red`, `black_green`, `black_blue`, `black_white`, `red_black`, `green_black`, `blue_black`, `white_black` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_pattern(1, 10, '3_colors')
```

## Đặt màu cho một khoảng {#set_range_color}

Đặt cùng một màu cho toàn bộ khoảng điểm ảnh đã chỉ định.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào mã.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, 'red')
```

## Đặt màu cho một khoảng bằng khối thuộc nhóm Màu sắc {#set_range_color_with_block}

Nhận một khối thuộc nhóm Màu sắc làm đầu vào rồi đặt màu cho khoảng điểm ảnh.  
Kết quả của khối màu (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) được mở ra bằng `*` (dấu sao) rồi truyền vào các đối số r, g, b của `set_range_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| data | Giá trị nhập (màu) | Khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_color(1, 10, *Utils.color('red'))
```

## Thay đổi màu một khoảng theo RGB {#change_range_by_rgb}

Cộng mức thay đổi RGB vào màu hiện tại của khoảng điểm ảnh đã chỉ định để đặt màu mới.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_color(1, 10, 10, 0, 0)
```

## Tắt màu một khoảng {#turn_off_range}

Tắt màu của toàn bộ các đèn LED trong khoảng đã chỉ định.  
Phạm vi số hiệu LED là từ 1 đến 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range(1, 10)
```

## Đặt màu mỗi n ô trong một khoảng {#set_range_increment_color}

Trong khoảng điểm ảnh đã chỉ định, cứ cách `increment` ô lại đặt màu một lần.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào mã.  
(ví dụ: chỉ bật các ô 1, 3, 5, ...)

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| increment | Giá trị nhập (ô) | Bước nhảy (số ô) | số nguyên từ 1 trở lên | - |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, 'red')
```

## Đặt màu mỗi n ô trong một khoảng bằng khối thuộc nhóm Màu sắc {#set_range_increment_color_with_block}

Nhận một khối thuộc nhóm Màu sắc làm đầu vào rồi trong khoảng điểm ảnh đã chỉ định, cứ cách n ô lại đặt màu một lần.  
Kết quả của khối màu (`Utils.color()` / `Utils.color_rgb()` / `Utils.color_slider()`) được mở ra bằng `*` (dấu sao) rồi truyền vào các đối số r, g, b của `set_range_increment_color`.

<BlockImage module="CheeseStick/NeoPixel" id="set_range_increment_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| increment | Giá trị nhập (ô) | Bước nhảy (số ô) | số nguyên từ 1 trở lên | - |
| data | Giá trị nhập (màu) | Khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_range_increment_color(1, 10, 2, *Utils.color('red'))
```

## Thay đổi mỗi n ô trong một khoảng theo RGB {#change_range_increment_by_rgb}

Cứ cách n ô lại cộng mức thay đổi RGB vào màu hiện tại của điểm ảnh đó để đặt màu mới.

<BlockImage module="CheeseStick/NeoPixel" id="change_range_increment_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| increment | Giá trị nhập (ô) | Bước nhảy (số ô) | số nguyên từ 1 trở lên | - |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_range_increment_color(1, 10, 2, 10, 0, 0)
```

## Tắt mỗi n ô trong một khoảng {#turn_off_range_increment}

Tắt màu của toàn bộ các đèn LED nằm trong khoảng và bước nhảy đã chỉ định.  
Phạm vi số hiệu LED là từ 1 đến 144.

<BlockImage module="CheeseStick/NeoPixel" id="turn_off_range_increment" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| from_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh đầu (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| to_idx | Giá trị nhập (ô) | Số hiệu điểm ảnh cuối (bắt đầu từ 1) | số nguyên từ 1 trở lên | - |
| increment | Giá trị nhập (ô) | Bước nhảy (số ô) | số nguyên từ 1 trở lên | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.turn_off_range_increment(1, 10, 2)
```

## Dịch / xoay {#shift}

Dịch hoặc xoay các đèn LED theo hướng và số ô đã chỉ định.  
Phạm vi giá trị chọn được là từ 1 đến 143.

<BlockImage module="CheeseStick/NeoPixel" id="shift" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại thao tác | dịch(shift), xoay(rotate) | - |
| direction | Tùy chọn danh sách thả xuống | Hướng | trái(left), phải(right) | - |
| pixel | Giá trị nhập (ô) | Số điểm ảnh cần dịch | số nguyên từ 1 trở lên | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

# unit = 'shift'
neopixel.shift('left', 1)

# unit = 'rotate'
neopixel.rotate('left', 1)
```

## Đặt độ sáng {#set_brightness}

Đặt độ sáng của NeoPixel.  
Phạm vi giá trị chọn được là từ 0 đến 100.

<BlockImage module="CheeseStick/NeoPixel" id="set_brightness" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| value | Giá trị nhập (ô) | Độ sáng | số nguyên từ 0 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.set_brightness(50)
```

## Thay đổi độ sáng {#change_brightness}

Thay đổi độ sáng của NeoPixel.  
Phạm vi giá trị chọn được là từ -100 đến 100.

<BlockImage module="CheeseStick/NeoPixel" id="change_brightness" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| value | Giá trị nhập (ô) | Mức thay đổi độ sáng | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
neopixel = cheesestick.NeoPixel()

neopixel.change_brightness(10)
```
