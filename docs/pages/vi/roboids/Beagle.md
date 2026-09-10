---
title: Beagle
---

# Beagle

## Khai báo thực thể {#instance}

Khi bạn thêm khối Beagle vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
beagle = Beagle(0)
# Khi có nhiều thực thể
beagle_1 = Beagle(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Đặt tốc độ bánh xe {#set_wheel_speed}

Đặt tốc độ bánh xe. Phạm vi của tốc độ bánh xe là từ -100 đến 100.

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Tốc độ bánh xe | số nguyên từ -100 đến 100, 0: dừng | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## Di chuyển một quãng đường {#move_distance}

Di chuyển đúng quãng đường đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu giá trị quãng đường là 0, robot cứ đi tiếp theo tốc độ bánh xe hiện tại.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Beagle" id="move_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Quãng đường di chuyển | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị chiều dài | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## Di chuyển trong một khoảng thời gian {#move_time}

Di chuyển trong khoảng thời gian đã chỉ định với tốc độ bánh xe hiện tại.  
Nếu bạn chưa đặt tốc độ bánh xe, robot đi tới với tốc độ mặc định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi di chuyển xong.

<BlockImage module="roboids/Beagle" id="move_time" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Thời gian di chuyển (giây) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(5, wait=False)
```

## Quay tại chỗ {#turn_degree}

Đặt hướng và góc quay tại chỗ.  
Nếu bạn đánh dấu chờ, robot chờ đến khi quay xong.

<BlockImage module="roboids/Beagle" id="turn_degree" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng quay | trái(left), phải(right) | - |
| data | Giá trị nhập (khối) | Góc quay (độ) | số thực từ 0 trở lên | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## Thay đổi tốc độ bánh xe {#change_speed}

Thay đổi tốc độ bánh xe của Beagle.  
Tốc độ bánh xe mới là tốc độ hiện tại cộng với giá trị bạn nhập vào.  
Tốc độ bánh xe mới được đặt trong phạm vi từ -100 đến 100.

<BlockImage module="roboids/Beagle" id="change_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại bánh xe | trái(left), phải(right), cả hai(both) | - |
| speed | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## Dừng {#stop}

Dừng việc di chuyển của Beagle.  
Tốc độ của cả hai bánh xe của Beagle đều được đưa về 0.

<BlockImage module="roboids/Beagle" id="stop" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## Bánh xe đang chuyển động? {#wheel_moving}

Trả về true nếu bánh xe đang chuyển động và false nếu bánh xe đang đứng yên.

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## Đặt tần số còi {#sound_buzz}

Đặt tiếng còi của Beagle theo tần số đã chỉ định.  
Phạm vi tần số phát được là từ 27,5 Hz đến 6553,5 Hz.  
Nếu bạn nhập giá trị ngoài phạm vi này, còi không kêu.

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| hz | Giá trị nhập (khối) | Tần số (Hz) | 0, số thực từ 27,5 đến 6553,5 (ngoài phạm vi là 0) | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## Phát nốt nhạc {#sound_note}

Beagle phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/Beagle" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

Beagle phát một đoạn âm thanh nhất định.  
Nếu bạn đánh dấu chờ, robot chờ đến khi phát xong.

<BlockImage module="roboids/Beagle" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của Beagle.

<BlockImage module="roboids/Beagle" id="sound_off" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## Đang phát âm thanh? {#sound_playing}

Trả về true nếu âm thanh đang được phát và false nếu không.

<BlockImage module="roboids/Beagle" id="sound_playing" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## Giá trị tốc độ bánh xe {#wheel_speed}

Tốc độ của một bánh xe nhất định

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## Giá trị bộ mã hóa {#encoder}

Giá trị bộ mã hóa của một bánh xe nhất định

<BlockImage module="roboids/Beagle" id="encoder" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Bánh xe cần đọc | trái(left), phải(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## Giá trị cảm biến con quay hồi chuyển {#gyroscope}

Giá trị cảm biến con quay hồi chuyển theo một trục nhất định

<BlockImage module="roboids/Beagle" id="gyroscope" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## Giá trị cảm biến gia tốc {#accelerometer}

Giá trị cảm biến gia tốc theo một trục nhất định

<BlockImage module="roboids/Beagle" id="accelerometer" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## Giá trị cảm biến từ kế {#magnetometer}

Giá trị cảm biến từ kế theo một trục nhất định

<BlockImage module="roboids/Beagle" id="magnetometer" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Trục cần đo | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## Giá trị cảm biến nhiệt độ {#temperature}

Giá trị cảm biến nhiệt độ

<BlockImage module="roboids/Beagle" id="temperature" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/Beagle" id="signal_strength" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/Beagle" id="battery" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## Trạng thái có thay đổi hay không {#state_change}

Trạng thái của robot có thay đổi hay không

<BlockImage module="roboids/Beagle" id="state_change" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Loại trạng thái | 0 ~ 5 (xem bảng dưới) | - |

| unit | Điều kiện |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## Bật / tắt lidar {#lidar_power}

Bật hoặc tắt cảm biến lidar.

<BlockImage module="roboids/Beagle" id="lidar_power" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| on | Tùy chọn danh sách thả xuống | Lidar BẬT / TẮT | bắt đầu(on=True), dừng(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## Giá trị khoảng cách tới vật thứ ~ của lidar {#lidar_value}

Cảm biến lidar đo được khoảng cách tới các vật xung quanh trong 360 độ.  
Lấy phía trước của Beagle làm mốc (giá trị thứ 0), số hiệu tăng thêm 1 theo chiều ngược kim đồng hồ.

<BlockImage module="roboids/Beagle" id="lidar_value" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Giá trị nhập (ô) | Số hiệu vật (bắt đầu từ 0) | số nguyên từ 0 trở lên | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## Giá trị khoảng cách theo hướng của lidar {#lidar_directions}

Cho biết khoảng cách mà cảm biến lidar đo được ở phía trước, phía sau, hai bên và các hướng chéo.  
Nó cho ra giá trị trung bình của các khoảng cách trong phạm vi 45 độ sang trái và sang phải của hướng đó.

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| direction | Tùy chọn danh sách thả xuống | Hướng cần đo | trước(front), trước trái(left front), trái(left), sau trái(left back), sau(back), sau phải(right back), phải(right), trước phải(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## Lidar đã sẵn sàng? {#lidar_state}

Trả về **đúng (True) / sai (False)** tùy theo lidar có đang bật hay không.

<BlockImage module="roboids/Beagle" id="lidar_state" />

### Tham số

(không có)

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
