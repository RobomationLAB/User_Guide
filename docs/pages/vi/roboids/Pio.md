---
title: Piobot
---

# Piobot

## Khai báo thực thể {#instance}

Khi bạn thêm khối Piobot(Pio) vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
pio = Pio(0)
# Khi có nhiều thực thể
pio_1 = Pio(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt tốc độ bánh xe {#set_wheel_speed}

Đặt tốc độ bánh xe. Phạm vi của tốc độ bánh xe là từ -100 đến 100.

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Tốc độ bánh xe | số nguyên từ -100 đến 100, 0: dừng | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## Di chuyển một quãng đường {#move_distance}

Di chuyển đúng quãng đường đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu giá trị quãng đường là 0, robot cứ đi tiếp theo tốc độ bánh xe hiện tại.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Pio" id="move_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Quãng đường di chuyển | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị chiều dài | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## Di chuyển trong một khoảng thời gian {#move_time}

Di chuyển trong khoảng thời gian đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Pio" id="move_time" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Thời gian di chuyển (giây) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## Quay tại chỗ {#turn_degree}

Đặt hướng và góc quay tại chỗ.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/Pio" id="turn_degree" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |
| data | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## Thay đổi tốc độ bánh xe {#change_speed}

Thay đổi tốc độ bánh xe của Piobot.  
Tốc độ bánh xe mới là tốc độ hiện tại cộng với giá trị bạn nhập vào.  
Tốc độ bánh xe mới được đặt trong phạm vi từ -100 đến 100.

<BlockImage module="roboids/Pio" id="change_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## Bật / tắt chế độ turbo {#turbo}

Bật hoặc tắt chế độ turbo của Piobot.

<BlockImage module="roboids/Pio" id="turbo" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Chế độ turbo BẬT / TẮT | bật(on=True), tắt(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## Dừng {#stop}

Dừng việc di chuyển của Piobot.  
Tốc độ của cả hai bánh xe của Piobot đều được đưa về 0.

<BlockImage module="roboids/Pio" id="stop" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.stop()
```

## Bánh xe đang chuyển động? {#wheel_moving}

Trả về true nếu bánh xe đang chuyển động và false nếu bánh xe đang đứng yên.

<BlockImage module="roboids/Pio" id="wheel_moving" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## Di chuyển một bước trên bảng {#grid_move}

Di chuyển từng bước một trên bảng theo cách đã định.

<BlockImage module="roboids/Pio" id="grid_move" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hướng di chuyển | tiến(forward), lùi(backward), sang trái(left), sang phải(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## Quay một lần trên bảng {#grid_turn}

Piobot quay 90 độ trên bảng theo hướng bạn nhập vào. Nó luôn chờ đến khi xong (bên trong luôn cố định wait=True).

<BlockImage module="roboids/Pio" id="grid_turn" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## Đặt tốc độ cổ {#set_neck_speed}

Đặt tốc độ quay của cổ. Phạm vi của tốc độ cổ là từ 1 đến 6.

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ quay của cổ | số nguyên từ 1 đến 6 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## Đặt góc cổ {#set_neck_angle}

Đặt góc mà cổ sẽ quay tới. Phạm vi của góc cổ là từ -45 đến 45.

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Góc cổ (độ) | số thực từ -45 đến 45 | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## Cổ đang chuyển động? {#neck_moving}

Trả về true nếu cổ đang chuyển động và false nếu cổ đang đứng yên.

<BlockImage module="roboids/Pio" id="neck_moving" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## Đặt màu mắt {#set_eye_color}

Đặt màu đèn LED mắt của Piobot.  
Bạn đổi được màu mắt trái, mắt phải hoặc cả hai.  
Màu bạn chọn trong danh sách màu dựng sẵn được đổi thành **tên màu** (chuỗi tiếng Anh) rồi mới đưa vào lời gọi. (Mã sinh ra chứa tên màu chứ không phải ba số R, G, B.)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Mắt cần đặt | trái(left), phải(right), cả hai(both) | - |
| color | Tùy chọn danh sách thả xuống | Màu dựng sẵn → đổi thành tên màu (tiếng Anh) | đen(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## Đặt màu mắt bằng khối thuộc nhóm Màu sắc {#set_eye_color_with_block}

Đặt màu đèn LED mắt của Piobot bằng các khối thuộc nhóm Màu sắc.  
Bạn đổi được màu mắt trái, mắt phải hoặc cả hai.

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Mắt cần đặt | trái(left), phải(right), cả hai(both) | - |
| data | Giá trị nhập (màu) | Mảng [R, G, B] | Khối thuộc nhóm Màu sắc hoặc `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## Thay đổi màu mắt theo RGB {#change_by_rgb}

Thay đổi màu đèn LED mắt của Piobot theo đúng các giá trị R, G, B đã chỉ định.  
Bạn đặt được màu mắt trái, mắt phải hoặc cả hai.

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Mắt cần đặt | trái(left), phải(right), cả hai(both) | - |
| r | Giá trị nhập (ô) | Mức thay đổi đỏ | số nguyên từ -255 đến 255 | 0 |
| g | Giá trị nhập (ô) | Mức thay đổi xanh lá | số nguyên từ -255 đến 255 | 0 |
| b | Giá trị nhập (ô) | Mức thay đổi xanh dương | số nguyên từ -255 đến 255 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## Đặt kiểu mắt {#set_eye_pattern}

Đặt kiểu hiển thị của mắt và chỉ định màu của từng mắt khi kiểu đó bắt đầu.

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| pattern | Tùy chọn danh sách thả xuống | Loại kiểu | tắt(reset), nhấp nháy(blink), mờ dần(dimming), cầu vồng(rainbow) | - |
| left | Tùy chọn danh sách thả xuống | Màu mắt trái | mặc định(black), đỏ(red), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | white |
| right | Tùy chọn danh sách thả xuống | Màu mắt phải | (giống left) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## Tắt mắt {#turn_off}

Tắt màu của mắt.

<BlockImage module="roboids/Pio" id="turn_off" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Mắt cần tắt | trái(left), phải(right), cả hai(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của Piobot theo tần số đã chỉ định.  
Phạm vi tần số phát được là từ 27,5 Hz đến 6553,5 Hz.  
Nếu bạn nhập giá trị ngoài phạm vi này, còi không kêu.

<BlockImage module="roboids/Pio" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | số thực từ 27,5 đến 6553,5 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

Piobot phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/Pio" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#/Rê♭(C#), Rê(D), Rê#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

Piobot phát một đoạn âm thanh nhất định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi phát xong.

<BlockImage module="roboids/Pio" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## Phát giai điệu {#sound_melody}

Piobot phát một giai điệu nhất định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi phát xong.

<BlockImage module="roboids/Pio" id="sound_melody" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| melody | Tùy chọn danh sách thả xuống | Tên giai điệu | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của Piobot.

<BlockImage module="roboids/Pio" id="sound_off" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## Đang phát âm thanh? {#sound_playing}

Trả về true nếu âm thanh đang được phát và false nếu không.

<BlockImage module="roboids/Pio" id="sound_playing" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## Giá trị tốc độ bánh xe {#wheel_speed}

Tốc độ của một bánh xe nhất định

<BlockImage module="roboids/Pio" id="wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/Pio" id="signal_strength" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/Pio" id="battery" />

### Tham số

(không có)

### Python
```python
pio = Pio(0)

pio.battery()
```

## Nút bàn phím {#keypad}

Nhận biết nút bàn phím mà người dùng bấm sau cùng.

<BlockImage module="roboids/Pio" id="keypad" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| button | Tùy chọn danh sách thả xuống | Nút cần nhận biết | chạy(play), đi tới(forward), đi lùi(backward), sang trái(left), sang phải(right), hành động(action), lặp lại(repeat), xóa(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
