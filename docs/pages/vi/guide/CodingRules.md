---
title: Quy tắc lập trình
---

# Quy tắc lập trình

Tài liệu này nói về các quy tắc lập trình bạn phải tuân theo khi lập trình robot trong RobomationLAB.

> **Lưu ý**: Việc lập trình bằng mã lệnh **chỉ chạy với Python**, và các khối được chuyển một–một thành mã Python dùng gói Python `robomation`.

> **Thứ tự**: Tài liệu được sắp theo thứ tự quy tắc chung cốt lõi (1~2) → quy tắc mã khối (3~5) → quy tắc mã lệnh Python (6~11). Cả khi sinh mã khối lẫn khi sinh mã Python đều phải tuân theo những quy tắc này.

<br>

## 1. Ràng buộc chuyển đổi một–một giữa khối và Python {#1}
Trình soạn thảo lập trình khối và trình soạn thảo Python tương ứng một–một và chuyển đổi hai chiều theo thời gian thực.

- Khối → Python: khối luôn được chuyển thành mã Python hợp lệ.
- Python → khối: chỉ **phần mã có thể biểu diễn bằng khối** mới được chuyển.

Vì vậy, nếu bạn viết mã như dưới đây trong trình soạn thảo Python thì có thể không chuyển được từ Python sang trình soạn thảo lập trình khối,  
và khi đó lý do chuyển đổi thất bại cũng được hiện ra.

1) Mã có lỗi cú pháp Python
2) Mã dùng hàm, phương thức hay cú pháp không có khối tương ứng (không được định nghĩa trong quy tắc chuyển đổi)

Để giữ cho việc chuyển sang trình soạn thảo lập trình khối luôn suôn sẻ,  
bạn phải viết mã trong phạm vi các lớp, phương thức, hàm và cú pháp được định nghĩa trong tài liệu này cùng tài liệu của từng robot.

<br>

## 2. Quy tắc trình bày mã {#2}
Chỉ được dùng những lớp, phương thức và hàm được ghi trong **sổ tay API Python robomation** và **tài liệu quy tắc chuyển đổi khối ↔ Python**.  
Khi điều khiển robot, việc tự tạo ra rồi dùng một phương thức điều khiển robot mới không có trong các tài liệu trên là điều nghiêm cấm.
Chỉ khi người dùng yêu cầu tạo hàm mới thì mới được phép.

Những biến tạm không xuất hiện trong các ví dụ chuyển đổi ở các tài liệu trên (ví dụ biến phụ ngoài biến chứa thực thể robot) chỉ được khai báo khi người dùng yêu cầu tạo biến.  
Ngoài ra, giá trị truyền cho phương thức bắt buộc phải viết dưới dạng hằng trực tiếp.  

```python
# Ví dụ đúng
hamster_s.set_wheel_speed('both', 100)

# Ví dụ sai - dùng hàm không có trong sổ tay API
hamster_s.set_wheel('both', 100)

# Ví dụ sai - khai báo biến tùy tiện
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Cấu trúc cơ bản của mã khối {#3}
Khi trình bày mã khối, luôn phải kèm theo cấu trúc cơ bản gồm các khối hàm cấp cao nhất đóng vai trò điểm vào của chương trình là hàm thiết lập và hàm lặp.  
Với quy tắc này, từ nay mọi mã khối đều có cấu trúc cơ bản như dưới đây.

| Cấu trúc khối (Block Composer) | Cách trình bày (dạng văn bản) |
| --- | --- |
| hàm thiết lập | hàm thiết lập |
| (khối bên trong) | (khối bên trong) |
| hàm lặp | hàm lặp |
| (khối bên trong) | (khối bên trong) |

<br>

## 4. Định dạng mã khối (quy tắc xuống dòng và thụt lề) {#4}
- Các khối cấp cao nhất (hàm thiết lập, hàm lặp…) được canh trái.
- Mỗi khối lệnh bắt buộc phải tách nhau bằng ký tự xuống dòng, mỗi dòng chỉ được có một khối.
- Các khối con nằm trong khối có vùng chạy bên trong (nếu, lặp lại, định nghĩa hàm…) được thụt lề để thể hiện rõ cấu trúc phân cấp.

<br>

## 5. Quy tắc viết khối bên trong và điều kiện {#5}
Giá trị chọn trong danh sách thả xuống hay giá trị nhập vào chính là đối số chức năng của khối; chúng được viết trực tiếp trong dấu ngoặc vuông ([]) ngay tại vị trí của giá trị đó trong câu chữ của khối.  
Nhờ vậy, câu chữ riêng của khối và giá trị mà người dùng chọn/nhập được gộp lại và tái hiện một cách trực quan.

Mọi mã khối phải được trình bày sao cho bao gồm tên riêng của khối, giá trị chọn trong danh sách thả xuống và giá trị người dùng nhập, tất cả đều đặt trong dấu ngoặc vuông ([]),  
tái hiện bằng văn bản gần giống nhất với hình dáng khối thật trong Block Composer.  

| Cấu trúc khối (Block Composer) | Cách trình bày (dạng văn bản) |
| --- | --- |
| nếu [điều kiện] thực hiện [lệnh] nếu không [lệnh] | nếu [điều kiện] thực hiện [lệnh] nếu không [lệnh] |
| RaccoonBot: đặt chế độ điều khiển là [tốc độ] | RaccoonBot: đặt chế độ điều khiển là [tốc độ] |
| RaccoonBot: đặt tốc độ khớp [1] là [100] | RaccoonBot: đặt tốc độ khớp [1] là [100] |

<br>

## 6. Cấu trúc cơ bản của mã lệnh {#6}
Khi trình bày mã lệnh (Python), luôn phải kèm theo cấu trúc cơ bản gồm hai hàm đóng vai trò điểm vào của chương trình là setup() và loop().  
Ngoài ra, để dùng được các lớp/tiện ích cần cho việc điều khiển robot, phải đặt `from robomation import *` ở đầu mã và khai báo robot sẽ dùng dưới dạng thực thể.  
Với quy tắc này, từ nay mọi mã lệnh (Python) đều có cấu trúc cơ bản như dưới đây.

```python
# Cấu trúc cơ bản của mã Python
from robomation import *

# (nếu có robot cần dùng thì khai báo dưới dạng thực thể, ví dụ)
hamster_s = HamsterS(0)

# đặt mã thiết lập ở đây, để chạy một lần:
def setup():
    pass

# đặt mã điều khiển ở đây, để chạy lặp lại:
def loop():
    pass
```

<br>

## 7. Định dạng mã lệnh (quy tắc xuống dòng và thụt lề) {#7}
- Các hàm cấp cao nhất (setup, loop…) được canh trái.
- Thụt lề sinh ra khi xuống dòng bắt buộc phải là **1 tab (`\t`)**. (giống chuẩn thụt lề của trình soạn thảo)

<br>

## 8. Quy tắc điều khiển robot (thực thể / phương thức) {#8}
Khi điều khiển robot, bạn phải tuân theo những quy tắc sau.  

1) Đặt `from robomation import *` ở đầu mã.
2) Khai báo robot sẽ dùng dưới dạng thực thể. Tên biến là tên biến mặc định của từng robot, chỉ số bắt đầu từ 0.
3) Gọi các phương thức của thực thể đã khai báo để điều khiển robot.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Nếu dùng nhiều robot cùng loại, hãy tăng chỉ số 0, 1, 2 … khi khai báo. (ví dụ: `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Việc đặt tốc độ bánh xe, di chuyển… của robot đã tự lo phần khởi tạo cần thiết bên trong phương thức (ví dụ dọn dẹp lệnh di chuyển trước đó), nên bạn không cần viết thêm mã khởi tạo nào khác.

<br>

## 9. Quy tắc gọi hàm tiện ích {#9}
Những chức năng tiện ích chung như trễ thời gian, phát âm thanh, ghi nhật ký, màu sắc đều được gọi qua các phương thức của lớp `Utils`.  

```python
Utils.wait(1)  # (giây)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Xem danh sách chi tiết các hàm tiện ích trong những tài liệu dưới đây.
- [Màu sắc](../common/Color)
- [Âm thanh](../common/Audio)
- [Điều khiển](../common/Control)

<br>

## 10. Quy tắc ưu tiên dùng phương thức riêng của robot {#10}
Khi điều khiển phần cứng robot (tốc độ bánh xe, LED, âm thanh…),  
bạn phải ưu tiên dùng phương thức riêng của thực thể robot ('Hamster-S' chẳng hạn) thay vì các hàm tiện ích chung.

Ví dụ, nếu cần phát âm thanh bằng robot,  
bạn phải ưu tiên dùng phương thức `sound_clip()` của thực thể 'Hamster-S' thay vì hàm tiện ích `Utils.play_sound()`.

```python
# Phát âm thanh bằng robot Hamster S. (nên dùng)
hamster_s.sound_clip('beep')

# Phát âm thanh bằng máy tính / máy tính bảng / thiết bị di động. (không nên dùng)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Quy tắc import {#11}
Khi viết mã Python, chỉ import những mô-đun cần cho việc chạy mã.
- Để điều khiển robot, mặc định đặt `from robomation import *` ở đầu mã.
- Mã dùng `math.` sẽ tự động được thêm `import math`, mã dùng `random.` sẽ tự động được thêm `import random`.
- Ngoài ra, không import những mô-đun không cần thiết.
