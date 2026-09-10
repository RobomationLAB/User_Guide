---
title: RaccoonBot
---

# RaccoonBot

## Khai báo thực thể {#instance}

Khi bạn thêm khối RaccoonBot vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:

```python
raccoon = RaccoonBot(0)
# Khi có nhiều thực thể
raccoon_1 = RaccoonBot(1)
```

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| index | Tùy chọn danh sách thả xuống | Số hiệu thực thể (bắt đầu từ 0) | số nguyên từ 0 trở lên | 0 |


## Bật / tắt điều khiển động cơ khớp {#motor}

Quyết định giữ hay bỏ phần điều khiển đang áp lên từng động cơ khớp.  
Nếu bạn không đặt gì, mọi khớp đều bắt đầu ở trạng thái bật điều khiển động cơ.

<BlockImage module="roboids/Raccoon4" id="motor" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Số hiệu khớp | tất cả(-1), số 1(1), số 2(2), số 3(3), số 4(4) | -1 |
| on | Hộp kiểm | Điều khiển động cơ BẬT / TẮT | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# tất cả các khớp, tắt điều khiển động cơ
raccoon.motor(-1, False)

# khớp số 1, bật điều khiển động cơ
raccoon.motor(1, True)
```

## Đặt tốc độ khớp {#speed_joint}

Đặt tốc độ của khớp đã chọn.

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| joint | Tùy chọn danh sách thả xuống | Số hiệu khớp | tất cả(-1), số 1(1), số 2(2), số 3(3), số 4(4) | - |
| data | Giá trị nhập (khối) | Tốc độ khớp | số nguyên từ -100 đến 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## Thay đổi tốc độ khớp {#change_speed_joint}

Thay đổi tốc độ của khớp đã chọn.

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| joint | Tùy chọn danh sách thả xuống | Số hiệu khớp | tất cả(-1), số 1(1), số 2(2), số 3(3), số 4(4) | - |
| data | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## Đặt tốc độ bốn khớp cùng lúc {#speed_joints}

Đặt tốc độ của cả bốn khớp cùng một lúc.

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (mảng) | Mảng tốc độ của 4 khớp | `[joint1, joint2, joint3, joint4]`, mỗi giá trị -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# mảng trực tiếp [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# mảng lấy từ biến
raccoon.set_speed_joints(*arr)
```

## Đặt tốc độ điều khiển góc khớp {#angle_speed}

Đặt tốc độ dùng để điều khiển khớp trong chế độ điều khiển theo góc.

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ lớn nhất khi điều khiển theo góc | số nguyên từ 0 đến 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## Đặt góc khớp {#angle_joint}

Đặt góc của khớp đã chọn.

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| joint | Tùy chọn danh sách thả xuống | Số hiệu khớp | tất cả(-1), số 1(1), số 2(2), số 3(3), số 4(4) | - |
| data | Giá trị nhập (khối) | Góc khớp (độ) | xem bảng trên (tự động giới hạn) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## Thay đổi góc khớp {#change_angle_joint}

Thay đổi góc của khớp đã chọn.

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| joint | Tùy chọn danh sách thả xuống | Số hiệu khớp | tất cả(-1), số 1(1), số 2(2), số 3(3), số 4(4) | - |
| data | Giá trị nhập (khối) | Mức thay đổi góc (độ) | xem bảng trên (tự động giới hạn) | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## Đặt góc bốn khớp cùng lúc {#angle_joints}

Đặt góc của cả bốn khớp cùng một lúc.

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (mảng) | Mảng góc của 4 khớp hoặc tên tư thế | mảng `[j1, j2, j3, j4]` | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# mảng ghi rõ
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## Khởi tạo trạng thái các khớp {#default_angle_joints}

Đặt góc của bốn khớp về một tư thế định sẵn (`'zero'`, `'park'`, `'home'`).

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Danh sách thả xuống | Tên tư thế | `'zero'` / `'park'` / `'home'` | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

Các tư thế dựng sẵn:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# tư thế dựng sẵn
raccoon.set_angle_joints('home', wait=True)
```

## Lưu góc khớp {#save_encoder}

Lưu giá trị bộ mã hóa hiện tại vào một biến bất kỳ.

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| encoder | Biến | Tên biến để lưu | biến | - |
| data | Giá trị nhập (mảng) | Mảng ban đầu để lưu | mảng 4 phần tử hoặc mảng rỗng | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## Đặt một giá trị tọa độ {#set_coordinate}

Di chuyển cánh tay robot bằng cách đặt một giá trị tọa độ.  
Phạm vi của từng tọa độ như sau.  
So với cổ tay => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
So với bộ gắp => phạm vi có thể khác nhau tùy thiết bị bạn lắp vào.  
Hướng của bộ gắp được cố định nằm ngang hoặc thẳng đứng so với mặt đất.  
Nếu bạn nhập tọa độ mà robot không tới được, lệnh sẽ bị bỏ qua.

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| origin | Tùy chọn danh sách thả xuống | Mốc quy chiếu | cổ tay(wrist), bộ gắp(end_effector) | - |
| pos | Tùy chọn danh sách thả xuống | Trục | x, y, z | - |
| data | Giá trị nhập (khối) | Giá trị tọa độ | x: -20 ~ 20 cm, y: -10 ~ 20 cm, z: -2 ~ 28 cm | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# đặt tọa độ x là 10 cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# tọa độ z so với end_effector
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## Thay đổi một giá trị tọa độ {#change_coordinate}

Di chuyển cánh tay robot bằng cách thay đổi một giá trị tọa độ so với vị trí hiện tại.  
Phạm vi của từng tọa độ như sau.  
So với cổ tay => x: -20,0 cm ~ 20,0 cm, y: -10,0 cm ~ 20,0 cm, z: -2,0 mm ~ 28,0 cm  
So với bộ gắp => phạm vi có thể khác nhau tùy thiết bị bạn lắp vào.  
Hướng của bộ gắp được cố định nằm ngang hoặc thẳng đứng so với mặt đất.  
Nếu bạn nhập tọa độ mà robot không tới được, lệnh sẽ bị bỏ qua.

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| origin | Tùy chọn danh sách thả xuống | Mốc quy chiếu | cổ tay(wrist), bộ gắp(end_effector) | - |
| pos | Tùy chọn danh sách thả xuống | Trục | x, y, z | - |
| data | Giá trị nhập (khối) | Mức thay đổi tọa độ | số thực | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## Di chuyển tới tọa độ xyz {#set_coordinates}

Đặt cả ba tọa độ x, y, z về những giá trị đã chỉ định cùng một lúc.  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| origin | Tùy chọn danh sách thả xuống | Mốc quy chiếu | cổ tay(wrist), bộ gắp(end_effector) | - |
| x | Giá trị nhập (khối) | Tọa độ x | số thực | - |
| y | Giá trị nhập (khối) | Tọa độ y | số thực | - |
| z | Giá trị nhập (khối) | Tọa độ z | số thực | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## Đặt khóa bộ gắp {#lock}

Đặt hướng cố định của bộ gắp. Sau khi tùy chọn được đặt là nằm ngang hoặc thẳng đứng, bạn không điều khiển được tốc độ hay góc của khớp 4 nữa.

<BlockImage module="roboids/Raccoon4" id="lock" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| mode | Tùy chọn danh sách thả xuống | Hướng cố định | không(none), nằm ngang(horizontal), thẳng đứng(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## Gắp / thả vật bằng bộ gắp {#end_effector}

Gắp hoặc thả một vật bằng bộ gắp.  
Tùy theo giá trị của danh sách thả xuống unit mà một trong hai phương thức được gọi.

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Hành động | gắp (đóng)(pick), thả (mở)(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## Thiết bị bộ gắp {#end_effector_device}

Số hiệu bộ gắp đang được lắp  
(1, 3, 4: bộ gắp kẹp, 2: bộ gắp hút chân không)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## Trạng thái bộ gắp {#end_effector_status}

Trạng thái bộ gắp có đang giữ vật hay không  
(0: đã thả, 1: đang giữ)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## Phát nốt nhạc {#sound_note}

RaccoonBot phát nốt nhạc đã chỉ định.

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| note | Tùy chọn danh sách thả xuống | Nốt nhạc | Đô(C), Đô#(C#), Rê(D), Rê#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | Tùy chọn danh sách thả xuống | Quãng tám | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## Phát đoạn âm thanh {#sound_clip}

RaccoonBot phát một đoạn âm thanh nhất định.

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'`… | - |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## Tắt âm thanh {#sound_off}

Tắt âm thanh của RaccoonBot.

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## Giá trị bộ mã hóa {#encoder}

Giá trị bộ mã hóa của khớp đã chọn

<BlockImage module="roboids/Raccoon4" id="encoder" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| joint | Tùy chọn danh sách thả xuống | Số hiệu khớp (hoặc tất cả các khớp) | 1, 2, 3, 4, tất cả(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# tất cả các khớp
raccoon.encoder(-1)
```

## Tọa độ của phần đã chọn {#coordinate}

Trả về tọa độ xyz hiện tại của mốc quy chiếu.  
Nếu bỏ qua `pos`, khối trả về cả mảng `[x, y, z]`; nếu chỉ định, khối chỉ trả về giá trị của trục đó.

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| origin | Tùy chọn danh sách thả xuống | Mốc quy chiếu | cổ tay(wrist), bộ gắp(end_effector) | wrist |
| pos | Tùy chọn danh sách thả xuống | Trục (hoặc toàn bộ) | x, y, z, toàn bộ (bỏ qua thì trả về cả mảng) | None (toàn bộ) |

### Python
```python
raccoon = RaccoonBot(0)

# một trục nhất định
raccoon.get_coordinates('wrist', 'x')

# toàn bộ (mảng 3 phần tử)
raccoon.get_coordinates('wrist')
```

## Giá trị cường độ tín hiệu {#signal_strength}

Cường độ tín hiệu

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## Điện áp pin {#battery}

Điện áp pin

<BlockImage module="roboids/Raccoon4" id="battery" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## Nút có đang được nhấn? {#button}

Nút đã chọn có đang được nhấn hay có sự kiện bấm nào xảy ra hay không

<BlockImage module="roboids/Raccoon4" id="button" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| unit | Tùy chọn danh sách thả xuống | Tên nút | teach(teach), play(play), power(power), delete(delete), nút bất kỳ(any) | - |
| event | Tùy chọn danh sách thả xuống | Loại sự kiện | được nhấn(pressed), được bấm(click), được bấm giữ lâu(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## Đặt tốc độ băng tải {#conveyor_speed}

Đặt tốc độ của băng tải. Phạm vi của tốc độ là từ -100 đến 100.

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Tốc độ băng tải | số nguyên từ -100 đến 100 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## Đặt quãng đường di chuyển của băng tải {#conveyor_distance}

Cho băng tải chạy đúng một quãng đường nhất định.

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Quãng đường di chuyển | số thực từ 0 trở lên | - |
| unit | Tùy chọn danh sách thả xuống | Đơn vị chiều dài | cm, mm, inch(inch) | cm |
| wait | Hộp kiểm | Có chờ hoàn tất hay không | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## Thay đổi tốc độ băng tải {#change_conveyor_speed}

Thay đổi tốc độ của băng tải.

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| data | Giá trị nhập (khối) | Mức thay đổi tốc độ | số nguyên từ -200 đến 200 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## Dừng băng tải {#stop_conveyor}

Dừng băng tải.

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## Băng tải đang chạy? {#conveyor_running}

Băng tải có đang chạy hay không

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### Tham số

(không có)

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## Nút băng tải có đang được nhấn? {#conveyor_button}

Nút của băng tải có đang được nhấn hay có sự kiện bấm nào xảy ra hay không

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| event | Tùy chọn danh sách thả xuống | Loại sự kiện | được nhấn(pressed), được bấm(click), được bấm giữ lâu(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
