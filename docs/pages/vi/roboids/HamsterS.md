---
title: HamsterS
---

# HamsterS

## Khai báo thực thể {#instance}

Khi bạn thêm khối HamsterS vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
hamster_s = HamsterS(0)
# Khi có nhiều thực thể
hamster_s_1 = HamsterS(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt tốc độ bánh xe {#set_wheel_speed}

Quyết định tốc độ bánh xe. Phạm vi của tốc độ là từ -100 đến 100.

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Tốc độ bánh xe | số nguyên từ -100 đến 100, 0: dừng | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## Di chuyển một quãng đường {#move_distance}

Di chuyển đúng quãng đường đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu giá trị quãng đường là 0, robot cứ đi tiếp theo tốc độ bánh xe hiện tại.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/HamsterS" id="move_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Quãng đường di chuyển | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị chiều dài | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## Di chuyển trong một khoảng thời gian {#move_time}

Di chuyển trong khoảng thời gian đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/HamsterS" id="move_time" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Thời gian di chuyển (giây) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## Quay tại chỗ {#turn_degree}

Đặt hướng và góc quay tại chỗ.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |
| data | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## Thay đổi tốc độ bánh xe {#change_speed}

Thay đổi tốc độ bánh xe của HamsterS.  
Tốc độ bánh xe mới là tốc độ hiện tại cộng với giá trị bạn nhập vào.

<BlockImage module="roboids/HamsterS" id="change_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## Dừng {#stop}

Dừng việc di chuyển của HamsterS.

<BlockImage module="roboids/HamsterS" id="stop" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## Bánh xe đang chuyển động? {#wheel_moving}

Trả về true nếu bánh xe đang chuyển động và false nếu bánh xe đang đứng yên.

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## Tiến một bước trên bảng {#grid_move}

Di chuyển từng bước một trên bảng theo cách đã định.

<BlockImage module="roboids/HamsterS" id="grid_move" />

### Tham số

Không có.

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## Quay một lần trên bảng {#grid_turn}

Quay 90 độ theo hướng đã chỉ định trên bảng.

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## Xoay quanh giá bút {#pivot}

Khi dùng giá bút, đặt tâm quay, hướng quay và góc quay.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/HamsterS" id="pivot" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| base | Tùy chọn danh sách thả xuống | Tâm quay | bút trái(left_pen), bút phải(right_pen), bánh xe trái(left_wheel), bánh xe phải(right_wheel) | - |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | tiến(forward), lùi(backward) | - |
| degree | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## Vẽ đường tròn quanh giá bút {#pivot_circle}

Khi vẽ đường tròn bằng giá bút, đặt tâm quay, hướng quay, bán kính và góc quay.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| base | Tùy chọn danh sách thả xuống | Tâm quay | bút trái(left_pen), bút phải(right_pen) | - |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái tiến(left_forward), trái lùi(left_backward), phải tiến(right_forward), phải lùi(right_backward) | - |
| degree | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| radius | Giá trị nhập (khối) | Bán kính quay | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị bán kính | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## Dò theo vạch bằng cảm biến {#trace_mode}

HamsterS dùng cảm biến sàn để dò theo vạch có màu nhất định.

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| floor | Tùy chọn danh sách thả xuống | Cảm biến sàn dùng để dò | trái(left), phải(right), giữa(center) | - |
| line | Tùy chọn danh sách thả xuống | Màu vạch | đen(black), trắng(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## Đi qua giao điểm rồi dừng ở giao điểm tiếp theo {#trace_until_grid}

HamsterS đi theo hướng đã chỉ định tại giao điểm, rồi đi tiếp cho đến khi gặp giao điểm tiếp theo.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng đi tại giao điểm | rẽ trái(left), rẽ phải(right), đi thẳng(forward), quay đầu(uturn) | - |
| line | Tùy chọn danh sách thả xuống | Màu vạch | đen(black), trắng(white) | black |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## Đặt tốc độ dò vạch {#set_trace_speed}

Đặt tốc độ dò vạch. Phạm vi của tốc độ là từ 1 đến 10.

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ dò vạch | số nguyên từ 1 đến 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## Đặt độ nhạy dò vạch {#set_trace_gain}

Đặt mức thay đổi hướng khi dò vạch. Phạm vi của mức thay đổi là từ 1 đến 10.

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Mức thay đổi hướng | số nguyên từ 1 đến 10 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## Dừng dò vạch {#stop_trace}

Kết thúc chức năng dò vạch của HamsterS.

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## Đặt màu đèn LED {#set_led_color}

Đặt màu đèn LED của HamsterS.  
Màu bạn chọn trên bảng màu được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào lời gọi. (Mã sinh ra chứa tên màu chứ không phải ba số R, G, B.)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần đặt | trái(left), phải(right), cả hai(both) | - |
| color | Màu sắc | Chọn trên bảng màu → đổi thành tên màu (tiếng Anh) | Tên màu: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## Đặt màu đèn LED bằng khối thuộc nhóm Màu sắc {#set_led_color_with_block}

Nhận một khối thuộc nhóm Màu sắc (`[R, G, B]`) làm đầu vào rồi đặt màu đèn LED.

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần đặt | trái(left), phải(right), cả hai(both) | - |
| data | Giá trị nhập (màu) | Khối thuộc nhóm Màu sắc hoặc mảng `[R, G, B]` | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## Thay đổi màu đèn LED theo RGB {#change_by_rgb}

Thay đổi màu đèn LED của HamsterS theo đúng các giá trị R, G, B đã chỉ định.

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần đặt | trái(left), phải(right), cả hai(both) | - |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## Tắt đèn LED {#turn_off}

Tắt màu của đèn LED.

<BlockImage module="roboids/HamsterS" id="turn_off" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Đèn LED cần tắt | trái(left), phải(right), cả hai(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của HamsterS theo tần số đã chỉ định.  
Phạm vi tần số phát được là từ 122,1 Hz đến 4186,0 Hz.  
Nếu bạn nhập giá trị ngoài phạm vi này, còi không kêu.

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | số thực từ 122,1 đến 4186,0 (ngoài phạm vi là 0) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

HamsterS phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/HamsterS" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

HamsterS phát một đoạn âm thanh nhất định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi phát xong.

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của HamsterS.

<BlockImage module="roboids/HamsterS" id="sound_off" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## Đang phát âm thanh? {#sound_playing}

Trả về true nếu âm thanh đang được phát và false nếu không.

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## Giá trị tốc độ bánh xe {#wheel_speed}

Tốc độ của một bánh xe nhất định

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## Giá trị cảm biến tiệm cận {#proximity}

Giá trị của một cảm biến tiệm cận nhất định

<BlockImage module="roboids/HamsterS" id="proximity" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Vị trí cảm biến cần đọc | trái(left), phải(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## Giá trị cảm biến sàn {#floor}

Giá trị của một cảm biến sàn nhất định

<BlockImage module="roboids/HamsterS" id="floor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Vị trí cảm biến cần đọc | trái(left), phải(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## Giá trị gia tốc trọng trường {#acceleration}

Giá trị gia tốc trọng trường theo một trục nhất định

<BlockImage module="roboids/HamsterS" id="acceleration" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## Giá trị cảm biến độ sáng {#light}

Giá trị cảm biến độ sáng

<BlockImage module="roboids/HamsterS" id="light" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## Giá trị cảm biến nhiệt độ {#temperature}

Giá trị cảm biến nhiệt độ

<BlockImage module="roboids/HamsterS" id="temperature" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/HamsterS" id="battery" />

### Tham số

(không có)

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## Trạng thái có thay đổi hay không {#state_change}

Trạng thái của robot có thay đổi hay không

<BlockImage module="roboids/HamsterS" id="state_change" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại trạng thái | 0 ~ 7 (xem bảng dưới) | - |

| unit | Ý nghĩa | Python |
|------|------|--------|
| 0 | Nghiêng về trước | `acceleration('x') > 5000` |
| 1 | Nghiêng về sau | `acceleration('x') < -5000` |
| 2 | Nghiêng sang trái | `acceleration('y') > 5000` |
| 3 | Nghiêng sang phải | `acceleration('y') < -5000` |
| 4 | Bị lật ngược | `acceleration('z') > 0` |
| 5 | Không bị lật | `acceleration('z') < -3000` |
| 6 | Phát hiện vật cản/bàn tay | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | Gõ nhẹ | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## Đặt chế độ đầu vào của cổng vào ra {#io_mode}

Đặt chế độ đầu vào của cổng IO.

<BlockImage module="roboids/HamsterS" id="io_mode" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| option | Tùy chọn danh sách thả xuống | Chế độ vào ra | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## Đặt đầu ra của cổng vào ra {#set_output}

Đặt giá trị đầu ra của cổng IO đã chỉ định.

<BlockImage module="roboids/HamsterS" id="set_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| data | Giá trị nhập (khối) | Giá trị đầu ra | số nguyên từ 0 đến 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## Thay đổi đầu ra của cổng vào ra {#change_output}

Thay đổi giá trị đầu ra của cổng IO đã chỉ định.

<BlockImage module="roboids/HamsterS" id="change_output" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b, cả hai(both) | - |
| data | Giá trị nhập (khối) | Mức thay đổi giá trị đầu ra | số nguyên | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## Mở / đóng bộ gắp {#gripper}

Mở hoặc đóng bộ gắp của HamsterS.  
Tùy theo giá trị unit mà một trong hai phương thức được gọi.

<BlockImage module="roboids/HamsterS" id="gripper" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | mở(open), đóng(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## Đặt góc bộ phóng {#shooter}

Điều khiển bộ phóng bằng cách đặt góc. Phạm vi của góc là từ 0 đến 180.

<BlockImage module="roboids/HamsterS" id="shooter" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Góc bộ phóng | số nguyên từ 0 đến 180 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## Giá trị đầu vào của cổng vào ra {#input}

Trả về giá trị đầu vào của cổng vào ra của HamsterS.

<BlockImage module="roboids/HamsterS" id="input" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Cổng vào ra | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
