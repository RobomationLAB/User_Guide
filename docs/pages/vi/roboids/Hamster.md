---
title: Hamster
---

# Hamster

## Khai báo thực thể {#instance}

Khi bạn thêm khối Hamster vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
hamster = Hamster(0)
# Khi có nhiều thực thể
hamster_1 = Hamster(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt tốc độ bánh xe {#set_wheel_speed}

Quyết định tốc độ bánh xe. Phạm vi của tốc độ là từ -100 đến 100.

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Tốc độ bánh xe | số nguyên từ -100 đến 100, 0: dừng | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## Di chuyển trong một khoảng thời gian {#move_time}

Di chuyển trong khoảng thời gian đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Hamster" id="move_time" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Thời gian di chuyển (giây) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## Thay đổi tốc độ bánh xe {#change_speed}

Thay đổi tốc độ bánh xe của Hamster.  
Tốc độ bánh xe mới là tốc độ hiện tại cộng với giá trị bạn nhập vào.  
Tốc độ bánh xe mới được đặt trong phạm vi từ -100 đến 100.

<BlockImage module="roboids/Hamster" id="change_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## Dừng {#stop}

Dừng việc di chuyển của Hamster.  
Tốc độ của cả hai bánh xe của Hamster đều được đưa về 0.

<BlockImage module="roboids/Hamster" id="stop" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## Tiến một bước trên bảng {#grid_move}

Di chuyển từng bước một trên bảng theo cách đã định.

<BlockImage module="roboids/Hamster" id="grid_move" />

### Tham số

Không có.

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## Quay một lần trên bảng {#grid_turn}

Quay 90 độ theo hướng đã chỉ định trên bảng.

<BlockImage module="roboids/Hamster" id="grid_turn" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## Dò theo đường bằng cảm biến {#trace_mode}

Hamster dùng cảm biến sàn để dò theo đường có màu nhất định.

<BlockImage module="roboids/Hamster" id="trace_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| floor | Tùy chọn danh sách thả xuống | Cảm biến sàn dùng để dò | trái(left), phải(right), giữa(center) | - |
| line | Tùy chọn danh sách thả xuống | Màu đường | đen(black), trắng(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## Đi qua giao điểm rồi dừng ở giao điểm tiếp theo {#trace_until_grid}

Hamster đi theo hướng đã chỉ định tại giao điểm, rồi đi tiếp cho đến khi gặp giao điểm tiếp theo.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng đi tại giao điểm | rẽ trái(left), rẽ phải(right), đi thẳng(forward), quay đầu(uturn) | - |
| line | Tùy chọn danh sách thả xuống | Màu đường | đen(black), trắng(white) | black |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## Đặt tốc độ dò đường {#set_trace_speed}

Đặt tốc độ dò đường. Phạm vi của tốc độ là từ 1 đến 10.

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ dò đường | số nguyên từ 1 đến 10 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## Dừng dò đường {#stop_trace}

Kết thúc chức năng dò đường của Hamster.

<BlockImage module="roboids/Hamster" id="stop_trace" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## Đặt màu đèn LED {#set_led_color}

Đặt màu đèn LED.

<BlockImage module="roboids/Hamster" id="set_led_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần đặt | trái(left), phải(right), cả hai(both) | - |
| color | Tùy chọn danh sách thả xuống | Màu sắc | đen(black), xanh dương(blue), xanh lá(green), xanh lơ(cyan), đỏ(red), đỏ tươi(magenta), vàng(yellow), trắng(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## Tắt đèn LED {#turn_off}

Tắt màu của đèn LED.

<BlockImage module="roboids/Hamster" id="turn_off" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần tắt | trái(left), phải(right), cả hai(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của Hamster theo tần số đã chỉ định.  
Phạm vi tần số phát được là từ 1,0 Hz đến 6553,5 Hz.  
Nếu bạn nhập giá trị ngoài phạm vi này, còi không kêu.

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | số thực từ 0 đến 6553,5 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

Hamster phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/Hamster" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của Hamster.

<BlockImage module="roboids/Hamster" id="sound_off" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## Giá trị tốc độ bánh xe {#wheel_speed}

Tốc độ của một bánh xe nhất định

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## Giá trị cảm biến tiệm cận {#proximity}

Giá trị của một cảm biến tiệm cận nhất định

<BlockImage module="roboids/Hamster" id="proximity" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Vị trí cảm biến cần đọc | trái(left), phải(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## Giá trị cảm biến sàn {#floor}

Giá trị của một cảm biến sàn nhất định

<BlockImage module="roboids/Hamster" id="floor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Vị trí cảm biến cần đọc | trái(left), phải(right), giữa(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## Giá trị gia tốc trọng trường {#acceleration}

Giá trị gia tốc trọng trường theo một trục nhất định

<BlockImage module="roboids/Hamster" id="acceleration" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## Giá trị cảm biến độ sáng {#light}

Giá trị cảm biến độ sáng

<BlockImage module="roboids/Hamster" id="light" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## Giá trị cảm biến nhiệt độ {#temperature}

Giá trị cảm biến nhiệt độ

<BlockImage module="roboids/Hamster" id="temperature" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/Hamster" id="signal_strength" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/Hamster" id="battery" />

### Tham số

(không có)

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## Trạng thái có thay đổi hay không {#state_change}

Trạng thái của robot có thay đổi hay không

<BlockImage module="roboids/Hamster" id="state_change" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại trạng thái | 0 ~ 6 (xem bảng dưới) | - |

| unit | Điều kiện |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## Đặt chế độ đầu vào của cổng vào ra {#io_mode}

Đặt chế độ đầu vào của cổng IO.

<BlockImage module="roboids/Hamster" id="io_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| option | Tùy chọn danh sách thả xuống | Chế độ vào ra | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## Đặt đầu ra của cổng vào ra {#set_output}

Đặt giá trị đầu ra của cổng IO đã chỉ định.

<BlockImage module="roboids/Hamster" id="set_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| data | Giá trị nhập (khối) | Giá trị đầu ra | số nguyên từ 0 đến 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## Thay đổi đầu ra của cổng vào ra {#change_output}

Thay đổi giá trị đầu ra của cổng IO đã chỉ định.

<BlockImage module="roboids/Hamster" id="change_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| data | Giá trị nhập (khối) | Mức thay đổi giá trị đầu ra | số nguyên | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## Mở / đóng bộ gắp {#gripper}

Mở hoặc đóng bộ gắp của Hamster.  
Tùy theo giá trị unit mà một trong hai phương thức được gọi.

<BlockImage module="roboids/Hamster" id="gripper" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | đóng(close), mở(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## Đặt góc bộ phóng {#shooter}

Điều khiển bộ phóng bằng cách đặt góc. Phạm vi của góc là từ 0 đến 180.

<BlockImage module="roboids/Hamster" id="shooter" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Góc bộ phóng | số nguyên từ 0 đến 180 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## Giá trị đầu vào của cổng vào ra {#input}

Trả về giá trị đầu vào của cổng vào ra của Hamster.

<BlockImage module="roboids/Hamster" id="input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
