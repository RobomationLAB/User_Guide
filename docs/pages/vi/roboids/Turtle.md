---
title: Turtle
---

# Turtle

## Khai báo thực thể {#instance}

Khi bạn thêm khối Turtle vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
turtle = Turtle(0)
# Khi có nhiều thực thể
turtle_1 = Turtle(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt tốc độ bánh xe {#set_wheel_speed}

Đặt tốc độ bánh xe. Phạm vi của tốc độ bánh xe là từ -100 đến 100.

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Tốc độ bánh xe | số nguyên từ -100 đến 100, 0: dừng | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## Di chuyển một quãng đường {#move_distance}

Di chuyển đúng quãng đường đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu giá trị quãng đường là 0, robot cứ đi tiếp theo tốc độ bánh xe hiện tại.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Turtle" id="move_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Quãng đường di chuyển | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị chiều dài | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## Di chuyển trong một khoảng thời gian {#move_time}

Di chuyển trong khoảng thời gian đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Turtle" id="move_time" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Thời gian di chuyển (giây) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(5, wait=False)
```

## Quay tại chỗ {#turn_degree}

Đặt hướng và góc quay tại chỗ.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/Turtle" id="turn_degree" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |
| data | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## Thay đổi tốc độ bánh xe {#change_speed}

Thay đổi tốc độ bánh xe của Turtle.  
Tốc độ bánh xe mới là tốc độ hiện tại cộng với giá trị bạn nhập vào.

<BlockImage module="roboids/Turtle" id="change_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## Dừng {#stop}

Dừng việc di chuyển của Turtle.

<BlockImage module="roboids/Turtle" id="stop" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## Bánh xe đang chuyển động? {#wheel_moving}

Trả về true nếu bánh xe đang chuyển động và false nếu bánh xe đang đứng yên.

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## Xoay quanh bánh xe {#pivot}

Đặt tâm quay, hướng quay và góc quay.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/Turtle" id="pivot" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| base | Tùy chọn danh sách thả xuống | Bánh xe làm tâm quay | bánh trái(left_wheel), bánh phải(right_wheel) | - |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | tiến(forward), lùi(backward) | - |
| data | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## Vẽ đường tròn {#pivot_circle}

Khi vẽ đường tròn bằng bút, đặt hướng quay, bán kính và góc quay.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái tiến(left_forward), trái lùi(left_backward), phải tiến(right_forward), phải lùi(right_backward) | - |
| degree | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| radius | Giá trị nhập (khối) | Bán kính quay | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị bán kính | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## Bám theo vạch bằng cảm biến {#trace_line}

Dùng cảm biến màu ở đáy để đi theo vạch có màu nhất định.

<BlockImage module="roboids/Turtle" id="trace_line" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| line | Tùy chọn danh sách thả xuống | Màu vạch cần bám theo | đen(black), đỏ(red), xanh lá(green), xanh dương(blue), mọi màu(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## Bám theo vạch đến khi gặp một màu {#trace_line_until_color}

Dùng cảm biến màu ở đáy để đi theo vạch màu A cho đến khi gặp màu B.

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| line | Tùy chọn danh sách thả xuống | Màu vạch cần bám theo | đen(black), đỏ(red), xanh lá(green), xanh dương(blue), mọi màu(any) | - |
| color | Tùy chọn danh sách thả xuống | Màu để dừng lại | đen(black), đỏ(red), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), mọi màu(any) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## Đi qua giao điểm rồi dừng ở giao điểm tiếp theo {#intersection}

Turtle đi theo hướng đã chỉ định tại giao điểm, rồi đi tiếp cho đến khi gặp giao điểm tiếp theo.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.  

<BlockImage module="roboids/Turtle" id="intersection" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng đi tại giao điểm | đi thẳng(forward), rẽ trái(left), rẽ phải(right), quay đầu(uturn) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## Đặt tốc độ bám vạch {#set_trace_speed}

Đặt tốc độ bám vạch. Phạm vi của tốc độ là từ 1 đến 10.

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ bám vạch | số nguyên từ 1 đến 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## Đặt độ nhạy bám vạch {#set_trace_gain}

Đặt mức thay đổi hướng khi bám vạch. Phạm vi của mức thay đổi là từ 1 đến 10.

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Mức thay đổi hướng | số nguyên từ 1 đến 10 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## Dừng bám vạch {#stop_trace}

Kết thúc chức năng bám vạch của Turtle.

<BlockImage module="roboids/Turtle" id="stop_trace" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## Đặt màu đèn LED {#set_led_color}

Đặt màu đèn LED trên đầu của Turtle.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào lời gọi. (Mã sinh ra chứa tên màu chứ không phải ba số R, G, B.)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## Đặt màu đèn LED bằng khối thuộc nhóm Màu sắc {#set_led_color_with_block}

Nhận kết quả của khối thuộc nhóm Màu sắc (`[R, G, B]`) làm đầu vào rồi đặt màu đèn LED trên đầu.

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (màu) | Khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## Thay đổi màu đèn LED theo RGB {#change_by_rgb}

Cộng các mức thay đổi R, G, B bạn nhập vào màu đèn LED trên đầu hiện tại để tạo màu mới.

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## Tắt đèn LED {#turn_off}

Tắt màu đèn LED trên đầu.

<BlockImage module="roboids/Turtle" id="turn_off" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của Turtle theo tần số đã chỉ định.

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | số thực từ 0 đến 6553,5 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

Turtle phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/Turtle" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

Turtle phát một đoạn âm thanh nhất định.

<BlockImage module="roboids/Turtle" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của Turtle.

<BlockImage module="roboids/Turtle" id="sound_off" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## Đang phát âm thanh? {#sound_playing}

Trả về true nếu âm thanh đang được phát và false nếu không.

<BlockImage module="roboids/Turtle" id="sound_playing" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## Giá trị tốc độ bánh xe {#wheel_speed}

Tốc độ của một bánh xe nhất định

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## Giá trị cảm biến màu ở đáy {#floor}

Giá trị của cảm biến màu ở đáy

<BlockImage module="roboids/Turtle" id="floor" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## Tên màu thẻ {#card_color}

Tên màu của tấm thẻ đọc được bằng cảm biến màu ở đáy

<BlockImage module="roboids/Turtle" id="card_color" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## Mẫu màu thẻ {#card_pattern}

Mẫu màu của tấm thẻ đọc được bằng cảm biến màu ở đáy

<BlockImage module="roboids/Turtle" id="card_pattern" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## Giá trị gia tốc trọng trường {#acceleration}

Giá trị gia tốc trọng trường theo một trục nhất định

<BlockImage module="roboids/Turtle" id="acceleration" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## Giá trị cảm biến nhiệt độ {#temperature}

Giá trị cảm biến nhiệt độ

<BlockImage module="roboids/Turtle" id="temperature" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/Turtle" id="signal_strength" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/Turtle" id="battery" />

### Tham số

(không có)

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## Đang chạm một màu nhất định? {#color_read}

Đo bằng cảm biến màu của Turtle xem robot có đang chạm màu đã chỉ định hay không rồi trả về **đúng (True) / sai (False)**.

<BlockImage module="roboids/Turtle" id="color_read" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Tùy chọn danh sách thả xuống | Tên màu | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## Mẫu màu thẻ có phải là ~ không? {#pattern_read}

Trả về **đúng (True) / sai (False)** tùy theo mẫu màu thẻ mà cảm biến màu nhận ra có khớp hay không.

<BlockImage module="roboids/Turtle" id="pattern_read" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| pattern | Tùy chọn danh sách thả xuống | Tên mẫu thẻ | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## Trạng thái nút phía sau {#button}

Nút ở phía sau có đang được nhấn hay đã được bấm hay không

<BlockImage module="roboids/Turtle" id="button" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| event | Tùy chọn danh sách thả xuống | Loại trạng thái nút | được nhấn(pressed), được bấm(click), được bấm giữ lâu(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## Trạng thái có thay đổi hay không {#state_change}

Trạng thái của robot có thay đổi hay không

<BlockImage module="roboids/Turtle" id="state_change" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại trạng thái | 0 ~ 5 (xem bảng dưới) | - |

| unit | Điều kiện |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
