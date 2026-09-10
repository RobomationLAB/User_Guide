---
title: Cheese Stick
---

# Cheese Stick

## Khai báo thực thể {#instance}

Khi bạn thêm khối Cheese Stick(CheeseStick) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
cheesestick = CheeseStick(0)
# Khi có nhiều thực thể
cheesestick_1 = CheeseStick(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt chế độ đầu vào {#set_input_mode}

Đặt chế độ đầu vào của cổng đã chọn.

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào | Sa, Sb, Sc, La, Lb, Lc | - |
| option | Tùy chọn danh sách thả xuống | Chế độ đầu vào | makey(makey), nút bấm(button), số kéo lên(digital_pullup), số kéo xuống(digital_pulldown), analog(analog), điện áp analog(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## Đặt phạm vi đầu vào {#set_input_range}

Đổi giá trị đầu vào của cổng đã chọn sang phạm vi nhỏ nhất~lớn nhất đã chỉ định.  
Phạm vi của giá trị đầu vào là từ 0 đến 255.  
Phạm vi giá trị đổi được là từ -100 đến 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Giá trị nhập (ô) | Giá trị nhỏ nhất của nguồn | số nguyên từ 0 đến 255 | - |
| src_max | Giá trị nhập (ô) | Giá trị lớn nhất của nguồn | số nguyên từ 0 đến 255 | - |
| dst_min | Giá trị nhập (ô) | Giá trị nhỏ nhất sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_max | Giá trị nhập (ô) | Giá trị lớn nhất sau khi đổi | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## Đặt phạm vi đầu vào theo giá trị giữa {#set_input_range_median}

Đổi giá trị đầu vào của cổng đã chọn sang phạm vi nhỏ nhất~giữa~lớn nhất đã chỉ định.  
Phạm vi của giá trị đầu vào là từ 0 đến 255.  
Phạm vi giá trị đổi được là từ -100 đến 100.

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | Giá trị nhập (ô) | Giá trị nhỏ nhất của nguồn | số nguyên từ 0 đến 255 | - |
| src_median | Giá trị nhập (ô) | Giá trị giữa của nguồn | số nguyên từ 0 đến 255 | - |
| src_max | Giá trị nhập (ô) | Giá trị lớn nhất của nguồn | số nguyên từ 0 đến 255 | - |
| dst_min | Giá trị nhập (ô) | Giá trị nhỏ nhất sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_median | Giá trị nhập (ô) | Giá trị giữa sau khi đổi | số nguyên từ -100 đến 100 | - |
| dst_max | Giá trị nhập (ô) | Giá trị lớn nhất sau khi đổi | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## Giá trị đầu vào {#get_input}

Giá trị đầu vào của cổng đã chọn

<BlockImage module="roboids/CheeseStick" id="get_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## Đặt chế độ đầu vào xung {#set_pulse_input_mode}

Đặt chế độ đầu vào xung của cổng đã chọn.

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào xung | Sc, Lc | - |
| option | Tùy chọn danh sách thả xuống | Chế độ kéo | xung (default), xung (kéo lên) (pull-up), xung (kéo xuống) (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## Giá trị đầu vào xung {#get_pulse_input}

Cổng đã chọn có nhận được đầu vào xung hay không

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu vào xung | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## Đặt đầu ra số {#set_digital_output}

Đặt giá trị đầu ra số của cổng đã chỉ định.  
Giá trị chọn được là 0 hoặc 1.

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu ra số | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | Tùy chọn danh sách thả xuống | Giá trị đầu ra | 0 hoặc 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## Đặt đầu ra PWM {#set_pwm_output}

Đặt giá trị đầu ra PWM của cổng đã chỉ định.  
Phạm vi giá trị chọn được là từ 0 đến 100.

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu ra PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Giá trị nhập (ô) | Giá trị PWM | số nguyên từ 0 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## Thay đổi đầu ra PWM {#change_pwm_output}

Thay đổi giá trị đầu ra PWM của cổng đã chỉ định.  
Phạm vi giá trị chọn được là từ -100 đến 100.

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng đầu ra PWM | Sa, Sb, Sc, La, Lb, Lc | - |
| value | Giá trị nhập (ô) | Mức thay đổi PWM | số nguyên từ -100 đến 100 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | số thực từ 0 đến 6553,5 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

Cheese Stick phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

Cheese Stick phát một đoạn âm thanh nhất định.

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của Cheese Stick.

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## Giá trị gia tốc {#acceleration}

Giá trị gia tốc trọng trường theo một trục nhất định

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## Giá trị cảm biến nhiệt độ {#temperature}

Giá trị cảm biến nhiệt độ

<BlockImage module="roboids/CheeseStick" id="temperature" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/CheeseStick" id="battery" />

### Tham số

(không có)

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## Trạng thái có thay đổi hay không {#state_change}

Trạng thái của robot có thay đổi hay không

<BlockImage module="roboids/CheeseStick" id="state_change" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại trạng thái | 0 ~ 7 (xem bảng dưới) | - |

| unit | Điều kiện |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (sự kiện gõ nhẹ) |
| 7 | `fall()` (sự kiện rơi) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
