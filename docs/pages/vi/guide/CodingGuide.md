---
title: Hướng dẫn lập trình
---

# Hướng dẫn lập trình

Tài liệu này giới thiệu RobomationLAB, nền tảng giáo dục lập trình robot thuộc công trình 'động cơ chạy và môi trường phát triển tích hợp cho dịch vụ truyền chuyển động robot' do Robomation phát triển.  

Phần trình bày chi tiết theo thứ tự sau:
- Những đặc điểm chính của RobomationLAB
- Cách lập trình robot trong RobomationLAB
- Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB

<br>

## Mục lục {#table-of-contents}
1. [Nền tảng giáo dục lập trình robot RobomationLAB](#platform)  
    1-1) [Các chương trình lập trình robot](#coding-programs)  
    1-2) [Chuyển đổi hai chiều theo thời gian thực giữa khối và Python](#block-python-conversion)  
    1-3) [Đặc điểm chính của các chương trình lập trình](#features)  
    1-4) [Cách điều khiển robot theo thời gian thực](#control-method)  

2. [Cách lập trình robot trong RobomationLAB](#programming-method)  
    2-1) [Chạy tuần tự và chạy song song](#sequential-parallel)  
    2-2) [Hàm setup](#setup)  
    2-3) [Hàm loop](#loop)  

3. [Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB](#grammar-syntax)  
    3-1) [Nhập gói robomation](#import-package)  
    3-2) [Tạo thực thể robot](#create-instance)  
    3-3) [Các phương thức điều khiển robot](#control-methods)  
    3-4) [Đọc cảm biến và trạng thái](#sensor)  
    3-5) [Nhận biết sự kiện](#event)  
    3-6) [Chờ hoàn tất (wait)](#wait)  
    3-7) [Hàm tiện ích (Utils)](#utils)   

<br><br>

## Nền tảng giáo dục lập trình robot RobomationLAB {#platform}
RobomationLAB là nền tảng được thiết kế riêng cho **giáo dục phần mềm AI và robot**,  
cung cấp môi trường phát triển tích hợp chạy trên trình duyệt web Chrome dành cho việc dạy lập trình robot ở bậc tiểu học và trung học cơ sở.  

RobomationLAB cung cấp các chương trình giáo dục lập trình robot theo nhiều cách khác nhau như **lập trình khối** và **lập trình bằng mã lệnh**.  
Bạn không chỉ học lý thuyết lập trình mà còn thật sự cho robot của Robomation chuyển động và điều khiển chúng,  
nhờ vậy học lập trình và học về robot cùng một lúc.

<br>

### Các chương trình lập trình robot {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer là công cụ giúp bạn điều khiển robot của công ty một cách dễ dàng và nhanh chóng bằng lập trình khối, đồng thời học được những điều cơ bản về điều khiển robot.**  

- Môi trường phát triển được thiết kế riêng cho tin học vật lý

- Người mới bắt đầu cũng lập trình được dễ dàng bằng cách kéo và thả khối  
- Môi trường học tập không có lỗi cú pháp, bắt đầu từ những khái niệm cơ bản  
- Tự động chuyển thành mã lệnh Python  
- Nhiều bộ khối có sẵn cho từng robot và nhiều ví dụ trải nghiệm phong phú  
- Chạy mã để xem kết quả ngay lập tức  
- Nâng cao khả năng giải quyết vấn đề và sức sáng tạo nhờ việc ghép các khối  
- Phản hồi tối ưu nhờ phân tích mã lệnh bằng AI  

<br>

#### Script Composer {#script-composer}
**Script Composer là công cụ giúp bạn điều khiển robot của công ty một cách dễ dàng và nhanh chóng bằng lập trình Python, đồng thời học được cú pháp Python và những điều cơ bản về lập trình robot.**  

- Trình soạn thảo Python

- Tự động hoàn thành mã và chèn mã theo từng ngôn ngữ
- Nhiều mã ví dụ trải nghiệm cho từng robot
- Chạy mã để xem kết quả ngay lập tức
- Phản hồi tối ưu nhờ phân tích mã lệnh bằng AI

<br>

#### Đặc điểm chính của các chương trình lập trình {#features}
Những đặc điểm chính của các chương trình lập trình robot mà RobomationLAB cung cấp như sau.  
1.	Chạy trên trình duyệt web Chrome nên không bị hệ điều hành ràng buộc
2.	Dùng giao tiếp Web Serial để điều khiển trực tiếp phần cứng robot qua đầu thu USB
3.	Hỗ trợ điều khiển nhiều robot cùng lúc — không giới hạn loại và số lượng robot
4.	Khi lưu tệp, kết quả được chuyển thành tệp văn bản JSON rồi mới lưu

<br>

### Cách điều khiển robot theo thời gian thực {#control-method}
Các chương trình lập trình robot của RobomationLAB điều khiển robot theo thời gian thực qua các bước sau.  
1.	Bằng lập trình khối hoặc lập trình bằng mã lệnh,
bạn viết mã đặt giá trị cho các đối tượng Effector, Command để điều khiển robot
hoặc dùng giá trị Sensor và sự kiện Event của robot.
2.	Bạn chạy mã.
3.	Qua giao tiếp Web Serial, chương trình nhận các gói tin chứa dữ liệu Sensor và Event từ robot
rồi đưa vào đối tượng Device của robot.
4.	Chương trình diễn giải mã theo thời gian thực,
ghi dữ liệu vào các đối tượng Effector, Command hoặc đọc giá trị của các đối tượng Sensor, Event.
5.	Chương trình tạo gói tin chứa dữ liệu của đối tượng Device rồi
gửi tới robot qua giao tiếp Web Serial và bạn thấy robot thật sự hoạt động.
6.	Trong khi mã đang chạy, các bước từ 3 đến 5 được lặp lại mỗi khoảng 10 đến 20 ms.  

<br>

### Chuyển đổi hai chiều theo thời gian thực giữa khối và Python {#block-python-conversion}
RobomationLAB cung cấp cả trình soạn thảo lập trình khối lẫn trình soạn thảo Python, và hai trình soạn thảo được đồng bộ hai chiều theo thời gian thực.

- Khi bạn thêm, sửa hay xóa khối trong trình soạn thảo lập trình khối, thay đổi đó lập tức hiện ra trong mã Python.
- Ngược lại, khi bạn sửa mã trong trình soạn thảo Python, thay đổi đó lập tức hiện ra ở các khối.

Vì khối và mã Python tương ứng một–một và chuyển đổi được hai chiều,  
bạn dựng nhanh cấu trúc bằng khối rồi tinh chỉnh chi tiết bằng Python, hoặc học cú pháp Python bằng cách so sánh với khối,  
tức là lập trình một cách liền mạch giữa lập trình khối và lập trình bằng mã lệnh.

> Tuy nhiên, việc chuyển từ Python sang khối chỉ thực hiện được với phần mã có thể biểu diễn bằng khối.  
> (Nếu cú pháp sai hoặc mã không chuyển được thành khối thì có thể không chuyển đổi được.  
Xem chi tiết trong tài liệu [Quy tắc lập trình](CodingRules).)

<br>

<br><br>

## Cách lập trình robot trong RobomationLAB {#programming-method}

### Chạy tuần tự và chạy song song {#sequential-parallel}
Có hai cách lập trình robot: chạy tuần tự và chạy song song.  
Chạy tuần tự là cách làm xong một việc rồi mới làm việc tiếp theo, phù hợp để lập trình những hành vi đơn giản.  
Ví dụ, nếu bạn muốn cho robot đi tới rồi dừng lại và bật đèn LED, bạn cần xếp mã của từng việc theo thứ tự và chạy theo trình tự thời gian, nghĩa là cần cách chạy tuần tự.  

Chạy song song là cách làm nhiều việc cùng một lúc, cần thiết khi lập trình những hành vi phức tạp và cao cấp hơn.  
Ví dụ, nếu bạn muốn cho robot hai chân bước đi, bạn phải cử động bàn chân và chân của robot cùng lúc, nên cần lập trình theo cách chạy song song.

Các chương trình lập trình robot của RobomationLAB được xây dựng trên cấu trúc setup / loop giống môi trường phát triển phần cứng của Arduino,  
và hỗ trợ đồng thời cả chạy tuần tự lẫn chạy song song.

<BlockImage module="program/Editor" id="block-structure" />

Khi bạn vào Block Composer lần đầu, hai khối hàm rỗng hiện ra trong vùng làm việc;  
khối 'hàm thiết lập' là hàm `setup`, còn khối 'hàm lặp' là hàm `loop`.  

Các khối được chuyển thành mã Python theo thời gian thực,  
và mã có cấu trúc cơ bản như sau.  

```python
# Cấu trúc cơ bản của mã Python
from robomation import *

# đặt mã thiết lập ở đây, để chạy một lần:
def setup():
    pass

# đặt mã điều khiển ở đây, để chạy lặp lại:
def loop():
    pass
```

> Để điều khiển robot, hãy đặt `from robomation import *` ở đầu mã và khai báo robot bạn dùng dưới dạng thực thể. (ví dụ: `hamster_s = HamsterS(0)`)


<br>

### Hàm setup {#setup}
Hàm setup chỉ chạy đúng một lần, ngay lúc bạn 'chạy mã'.  
Trong hàm setup, người ta thường viết mã đặt giá trị ban đầu cho biến hoặc đặt chế độ, chức năng của robot.  
Ví dụ, khi điều khiển một robot chạy bằng bánh xe, bạn đặt được tốc độ bánh xe ban đầu trong hàm setup.  

Nếu cần trễ thời gian trong hàm, bạn dùng hàm `Utils.wait(...)` để viết mã chạy theo trình tự thời gian như thể đồng bộ.  
`Utils.wait(...)` chờ đúng khoảng thời gian (giây) bạn chỉ định rồi mới chạy mã tiếp theo, nghĩa là sau khoảng thời gian hay hành động đã định thì thức dậy và chạy tiếp phần mã sau đó.  
Khi tận dụng tính năng này, bạn không chỉ chạy tuần tự đơn giản mà còn kết hợp được với hàm loop vốn đóng vai trò chạy song song để lập trình robot một cách mạnh mẽ.

Dưới đây là ví dụ viết mã cho robot HamsterS đi tới 1 giây rồi lùi 1 giây.  
Nếu muốn làm việc đó bên trong hàm loop chạy song song, mã tính thời gian và mã điều khiển sẽ trộn lẫn và trở nên rất phức tạp.  
Thay vào đó, khi dùng hàm trễ `Utils.wait` bên trong hàm setup, bạn viết được mã chạy theo trình tự thời gian như thể đồng bộ.  
( Hàm `Utils.wait` sẽ được nói lại ở phần [Hàm tiện ích (Utils)](#utils). )

Mã ví dụ (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# đặt mã thiết lập ở đây, để chạy một lần:
def setup():
    # Đặt tốc độ hai bánh xe là 50 để đi tới
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # chờ 1 giây
    # Đặt tốc độ hai bánh xe là -50 để đi lùi
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # chờ 1 giây
    hamster_s.stop()

# đặt mã điều khiển ở đây, để chạy lặp lại:
def loop():
    pass
```
( Cú pháp về thực thể robot và phương thức sẽ được nói lại ở phần [Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB](#grammar-syntax). )


<br>

### Hàm loop {#loop}
Hàm loop hỗ trợ chạy song song và được lặp lại mỗi khoảng 10 ms trong suốt thời gian mã chạy.  
Trong hàm loop, người ta thường viết mã liên tục đặt giá trị cho biến hoặc nhận biết và xử lý các sự kiện nhất định của robot.  

Dưới đây là ví dụ viết mã cho tốc độ bánh xe và màu đèn LED của robot HamsterS thay đổi theo thời gian.  
( Khi thay đổi bên trong hàm một biến đã khai báo ngoài hàm setup / loop, hãy khai báo biến đó bằng từ khóa `global`. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# đặt mã thiết lập ở đây, để chạy một lần:
def setup():
    global frame
    frame = 0

# đặt mã điều khiển ở đây, để chạy lặp lại:
def loop():
    global frame
    frame += 1  # mỗi lần hàm loop được gọi thì giá trị của biến frame tăng thêm 1

    # Dùng giá trị frame đã đổi để đặt tốc độ hai bánh xe và giá trị RGB của hai đèn LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Cú pháp về thực thể robot và phương thức sẽ được nói lại ở phần [Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB](#grammar-syntax). )  

Dưới đây là ví dụ viết mã bật đèn LED màu đỏ khi có động tác gõ nhẹ (Tap) lên thân robot HamsterS.  

```python
from robomation import *

hamster_s = HamsterS(0)

# đặt mã thiết lập ở đây, để chạy một lần:
def setup():
    pass

# đặt mã điều khiển ở đây, để chạy lặp lại:
def loop():
    # Nhận biết sự kiện ngay lúc động tác Tap xảy ra
    if hamster_s.tap():               # True khi nhận biết được sự kiện
        hamster_s.set_led_color('both', 'red')   # Bật hai đèn LED màu đỏ
    else:
        hamster_s.turn_off('both')               # Tắt hai đèn LED
```
( Cú pháp về nhận biết sự kiện (`tap()`) sẽ được nói lại ở phần [Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB](#grammar-syntax). )  

<br><br>

## Hệ thống cú pháp cơ bản khi lập trình robot trong RobomationLAB {#grammar-syntax}
Hệ thống cú pháp cơ bản bạn phải tuân theo khi viết mã trong các chương trình lập trình robot của RobomationLAB như sau.  
Việc điều khiển robot được thực hiện qua gói Python `robomation`;  
bạn tạo robot thành thực thể rồi gọi các phương thức của thực thể đó để viết mã.

### Nhập gói robomation {#import-package}
Để dùng được các lớp (robot) và tiện ích (`Utils`) cần cho việc điều khiển robot, hãy thêm dòng sau ở đầu mã.

```python
from robomation import *
```

<br>

### Tạo thực thể robot {#create-instance}
Hãy khai báo robot bạn dùng dưới dạng thực thể.  
Tên lớp cho biết loại robot, còn số trong ngoặc là chỉ số của thực thể (bắt đầu từ 0).

```python
hamster_s = HamsterS(0)   # 1 con Hamster S
```

Tên lớp và tên biến mặc định của từng robot như sau.

| Robot | Tên lớp | Tên biến mặc định |
| --- | --- | --- |
| Hamster S | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Nếu bạn dùng nhiều robot cùng loại, hãy tăng chỉ số 0, 1, 2 … khi khai báo.

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Các phương thức điều khiển robot {#control-methods}
Khi điều khiển robot, bạn gọi các phương thức của thực thể.  
Các phương thức thực hiện những hành động của robot như đặt tốc độ bánh xe, di chuyển, LED, âm thanh.

```python
hamster_s.set_wheel_speed('both', 50)    # Đặt tốc độ hai bánh xe
hamster_s.move_distance(10, 'cm')        # Đi tới 10 cm
hamster_s.set_led_color('both', 'red')   # Đặt hai đèn LED màu đỏ
```

Xem danh sách phương thức và tham số dùng được cho từng robot trong tài liệu của robot đó ('Hamster-S' chẳng hạn).

<br>

### Đọc cảm biến và trạng thái {#sensor}
Khi đọc giá trị cảm biến hoặc trạng thái của robot, bạn cũng gọi phương thức và phương thức trả về giá trị đó.

```python
left = hamster_s.floor('left')        # Đọc giá trị cảm biến sàn bên trái
dist = hamster_s.proximity('right')   # Đọc giá trị cảm biến tiệm cận bên phải
```

<br>

### Nhận biết sự kiện {#event}
Những sự kiện sinh ra do thay đổi trạng thái hay thay đổi của môi trường được nhận biết bằng cách  
phương thức sự kiện tương ứng trả về True ngay tại thời điểm sự kiện xảy ra.

```python
if hamster_s.tap():        # True ngay lúc sự kiện gõ nhẹ (Tap) xảy ra
    hamster_s.set_led_color('both', 'red')
```

<br>

### Chờ hoàn tất (wait) {#wait}
Những phương thức cần thời gian mới xong như di chuyển, quay, phát âm thanh đều có tham số `wait`.
- `wait=True` (mặc định): chờ đến khi hành động xong rồi mới chạy mã tiếp theo.
- `wait=False`: bắt đầu hành động rồi chạy tiếp mã sau đó ngay.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # Chờ đến khi di chuyển xong
hamster_s.move_distance(10, 'cm', wait=False)   # Bắt đầu di chuyển rồi chạy ngay mã tiếp theo
```

<br>

### Hàm tiện ích (Utils) {#utils}
Những chức năng chung không phụ thuộc loại robot như trễ thời gian, phát âm thanh, ghi nhật ký, màu sắc đều dùng qua các phương thức của lớp `Utils`.

```python
Utils.wait(1)              # Chờ 1 giây
Utils.speak('Xin chào')    # Phát giọng nói từ văn bản (TTS)
Utils.log(0, '', '')       # Ghi nhật ký ra bảng điều khiển
```

<br>
