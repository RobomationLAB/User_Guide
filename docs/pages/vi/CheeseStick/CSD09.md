---
title: CSD-09 Động cơ
---

# CSD-09 Động cơ

## Khai báo thực thể {#instance}

Khi bạn thêm khối CSD-09 Động cơ(CSD09) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Khởi động động cơ servo {#start_servo_motor}

Chỉ định cổng mà động cơ servo sẽ dùng.  
Nếu bạn không chỉ định cổng, động cơ không chạy đúng.

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ servo | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## Đặt góc của động cơ servo {#set_servo_motor}

Đặt góc của động cơ servo ở cổng đã chỉ định.  
Phạm vi giá trị chọn được là từ 0 đến 180.

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ servo | Sa, Sb, Sc | cổng của lần gọi `start_servo_motor` sau cùng |
| value | Giá trị nhập (ô) | Góc quay (độ) | số nguyên từ 0 đến 180 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## Thay đổi góc của động cơ servo {#change_servo_motor}

Thay đổi góc của động cơ servo ở cổng đã chỉ định.  
Phạm vi giá trị chọn được là từ -180 đến 180.

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ servo | Sa, Sb, Sc | cổng của lần gọi `start_servo_motor` sau cùng |
| value | Giá trị nhập (ô) | Mức thay đổi góc | số nguyên | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## Tắt động cơ servo {#stop_servo_motor}

Tắt nguồn của động cơ servo ở cổng đã chỉ định.

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ servo | Sa, Sb, Sc | cổng của lần gọi `start_servo_motor` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## Khởi động động cơ DC {#start_DC_motor}

Cho phép điều khiển động cơ DC qua cổng đã chỉ định.
Bạn phải gọi khối này một lần trước khi dùng các khối khác liên quan đến động cơ DC.

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ DC | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## Đặt tốc độ của động cơ DC {#set_DC_motor}

Đặt giá trị đầu ra PWM của động cơ DC.

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ DC | Mab, Mcd | cổng của lần gọi `start_dc_motor` sau cùng |
| value | Giá trị nhập (ô) | Giá trị đầu ra PWM | số nguyên từ 0 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## Thay đổi tốc độ của động cơ DC {#change_DC_motor}

Cộng mức thay đổi bạn nhập vào giá trị đầu ra PWM hiện tại của động cơ DC để đặt giá trị mới.

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ DC | Mab, Mcd | cổng của lần gọi `start_dc_motor` sau cùng |
| value | Giá trị nhập (ô) | Mức thay đổi PWM | số nguyên | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## Dừng động cơ DC {#stop_DC_motor}

Dừng đầu ra của động cơ DC.

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng động cơ DC | Mab, Mcd | cổng của lần gọi `start_dc_motor` sau cùng |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## Khởi động động cơ bước {#start_step_motor}

Cho phép dùng động cơ bước.

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## Đặt chế độ động cơ bước {#set_step_motor_mode}

Đặt chế độ dùng để điều khiển động cơ bước.  
Nếu bạn không đặt chế độ riêng, chế độ mặc định là 'mạnh'.  
Chú ý! Không được đổi chế độ trong khi động cơ bước đang quay.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Chế độ chạy | tắt(off), thường(wave_step), mạnh(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## Đặt tốc độ của động cơ bước {#set_step_motor_speed}

Đặt tốc độ của động cơ bước.  
Phạm vi giá trị chọn được là từ -1000 đến 1000.  
Nếu giá trị là số âm thì động cơ quay theo chiều ngược lại.

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| value | Giá trị nhập (ô) | Tốc độ quay (PPS) | số nguyên từ 0 trở lên | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## Quay động cơ bước {#rotate_step_motor}

Đặt số xung mà động cơ bước sẽ quay.  
Phạm vi giá trị chọn được là từ 0 đến 65535.  
Nếu bạn chưa chọn tốc độ của động cơ bước thì động cơ không quay.  
Nếu bạn đánh dấu chờ, chương trình chờ đến khi quay xong.

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| value | Giá trị nhập (ô) | Số bước cần quay | số nguyên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## Thay đổi tốc độ của động cơ bước {#change_step_motor_speed}

Thay đổi tốc độ của động cơ bước.  
Phạm vi giá trị chọn được là từ -2000 đến 2000.

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| value | Giá trị nhập (ô) | Mức thay đổi PPS | số nguyên | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## Dừng động cơ bước {#stop_step_motor}

Dừng động cơ bước hoặc tắt nguồn của nó.

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cách dừng | dừng(stop), tắt nguồn(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## Số bước tích lũy {#step_motor_steps}

Trả về tổng số bước mà động cơ bước đã quay cho đến giờ.

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
