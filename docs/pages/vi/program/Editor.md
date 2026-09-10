---
title: Trình soạn thảo
---

# Trình soạn thảo

**Trình soạn thảo** là khu vực để bạn viết mã điều khiển robot bằng **khối** hoặc **mã lệnh**.  
Dưới đây là cách lập trình trong môi trường **lập trình khối / lập trình bằng mã lệnh (Python)** và những điều cần lưu ý.

## Trình soạn thảo lập trình khối {#block-editor}

### Nhóm khối {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

Đây là khu vực phân loại các khối mà RobomationLAB cung cấp thành từng **nhóm**.  
Khi bạn bấm vào một nhóm, bạn xem được **bảng khối** của nhóm đó.  

Các nhóm khối được cung cấp sẵn gồm:  

- Logic
- Vòng lặp
- Toán học
- Văn bản
- Danh sách
- Màu sắc
- Âm thanh
- Điều khiển
- Biến
- Hàm
- Khác

Ngoài ra, khi bạn thêm [**Robot**](Menu#robot) hoặc [**Tiện ích mở rộng**](Menu#extension) vào chương trình, bạn dùng được cả bảng khối riêng của chúng.  

<br>

**⚙️ Ghi chú**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Những nhóm khối bạn đã thêm vào chương trình mà không dùng nữa thì bạn bỏ khỏi phần nhóm khối bằng **bấm chuột phải → Xóa**.

<br>

### Bảng khối {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

Đây là khu vực gom toàn bộ khối của từng nhóm.  
Bạn đưa các khối trong bảng khối sang vùng lập trình bằng cách **kéo và thả**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Ghi chú**  
Nếu muốn biết cách dùng một khối, bạn mở được trang trợ giúp giải thích cách dùng của từng khối bằng **bấm chuột phải → Trợ Giúp**.  

<br>

### Vùng lập trình {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

Đây là khu vực để bạn ghép các khối lấy từ bảng khối.  


Các khối đã ghép được chuyển thành **mã Python** theo thời gian thực,  
và khi bạn chạy mã, chương trình diễn giải những mã đó để cho robot chuyển động và điều khiển nó.  

<br>

### Cấu trúc cơ bản của khối {#block-structure}

Khi lập trình trong trình soạn thảo lập trình khối, bạn phải giữ đúng cấu trúc cơ bản sau.

<BlockImage module="program/Editor" id="block-structure" /><br>

Trình soạn thảo lập trình khối chỉ diễn giải và chạy phần mã nằm trong các khối hàm **hàm thiết lập** và **hàm lặp**.  
Vì vậy, bạn phải viết mã bằng cách đặt khối vào bên trong các khối hàm **hàm thiết lập** và **hàm lặp**.  

**hàm thiết lập**  
Bên trong khối hàm thiết lập, bạn định nghĩa những việc sẽ làm đầu tiên khi mã chạy.  
Bạn dùng khối **chờ** để các việc được làm theo trình tự thời gian.  

**hàm lặp**  
Bên trong khối hàm lặp, bạn định nghĩa những việc sẽ được làm lặp lại trong suốt thời gian mã chạy.  
Những việc đã định nghĩa được lặp lại mỗi 10 ms một lần.  

**⚙️ Ghi chú**  
(Trừ những hàm tùy chỉnh bạn tạo qua **nhóm Hàm**)  
Những khối nằm ngoài các khối hàm **hàm thiết lập** hoặc **hàm lặp** không ảnh hưởng gì khi mã chạy.  

<br>

### Cách dùng khối {#block-usage}

**Thêm khối**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Bạn **kéo khối muốn thêm từ bảng khối** rồi **thả vào trình soạn thảo** là khối đó được thêm vào.   
<br>

**Sao chép/dán khối**  

Có hai cách sao chép và dán khối trong trình soạn thảo.  

1. Chọn khối rồi bấm **Ctrl+C** là bạn **sao chép** được khối đã chọn.  
Bấm **Ctrl+V** là bạn **dán** được khối vừa sao chép vào trình soạn thảo.  

2. Chọn khối rồi bấm nút **'Sao chép Ctrl+C'** trong menu **Chỉnh sửa** là bạn **sao chép** được khối đã chọn.  
Bấm nút **'Dán Ctrl+V'** trong menu **Chỉnh sửa** là bạn **dán** được khối vừa sao chép vào trình soạn thảo.

<br>

**Xóa khối**  

Có ba cách xóa khối trong trình soạn thảo.

1. Chọn khối rồi bấm phím **Backspace** là bạn xóa được khối đã chọn.<br>  

2. Bạn **kéo khối muốn xóa trong trình soạn thảo** rồi **thả vào phần nhóm khối** là khối đó bị xóa.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Bạn **kéo khối muốn xóa trong trình soạn thảo** rồi **thả vào thùng rác** là khối đó bị xóa.  
Bạn xem lại được khối đã xóa trong **thùng rác**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Chọn nhiều khối cùng lúc**  

Có hai cách chọn nhiều khối cùng lúc trong trình soạn thảo.

1. Giữ phím **Shift** rồi kéo trong vùng làm việc hoặc bấm từng khối một,  
bạn chọn được nhiều khối cùng lúc.  

2. Bạn bấm **nút đánh dấu** ở góc dưới bên phải vùng làm việc để bật hoặc tắt chế độ 'chọn nhiều khối'.  
Nút được tô màu nghĩa là chế độ đang bật.  
Nút không được tô màu nghĩa là chế độ đang tắt.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Trong khi chế độ 'chọn nhiều khối' đang bật, bạn chỉ làm được việc chọn khối.   
Muốn di chuyển hay chỉnh sửa nhiều khối đã chọn cùng lúc, bạn phải tắt chế độ này sau khi chọn xong.  

<br>

**Tùy chọn thêm**

Ngoài ra, khi bạn **bấm chuột phải** vào một khối,  
bạn xem được nhiều tùy chọn thêm như **thu gọn/mở rộng khối, bật/tắt khối, trợ giúp**.  

<br>

## Trình soạn thảo Python {#python-editor}

### Bảng mã lệnh {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

Đây là khu vực phân loại thành từng **nhóm** các **hàm cơ bản** cần cho việc lập trình robot và các **mã Python** riêng của robot/tiện ích mở rộng.  


Các nhóm mã được cung cấp trong phần hàm cơ bản (Codes) gồm:  

- Logic (logic)
- Vòng lặp (loops)
- Toán học (math)
- Văn bản (text)
- Danh sách (lists)
- Màu sắc (color)
- Âm thanh (audio)
- Điều khiển (control)

Các mã trong phần hàm cơ bản làm đúng những việc mà các khối cơ bản của trình soạn thảo lập trình khối làm.  

<br>

**⚙️ Ghi chú**  
Bạn xem cách dùng bảng mã lệnh để lập trình trong trình soạn thảo Python ở phần [**Cách dùng bảng mã lệnh**](#python-codes-usage).

<br>

### Trình soạn thảo mã {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

Đây là khu vực để bạn viết mã điều khiển robot.  


Khi bạn chọn trình soạn thảo **Python** ở [**Chọn trình soạn thảo**](Menu#editor-settings), bạn viết được mã Python.

<br>

### Cấu trúc cơ bản của mã {#python-structure}

Khi lập trình trong trình soạn thảo mã, bạn phải giữ đúng cấu trúc cơ bản sau.

```python
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

Trình soạn thảo mã chỉ diễn giải và chạy phần mã nằm trong hai hàm **setup** và **loop**.  
Vì vậy, bạn phải viết mã bên trong hai hàm **setup** và **loop**.  
Ngoài ra, để điều khiển robot, bạn phải đặt `from robomation import *` ở đầu mã và khai báo robot sẽ dùng dưới dạng thực thể.

**setup**  

Bên trong hàm setup, bạn định nghĩa những việc sẽ làm đầu tiên khi mã chạy.  
Bạn dùng hàm **Utils.wait** để các việc được làm theo trình tự thời gian.  

**loop**  
Bên trong hàm loop, bạn định nghĩa những việc sẽ được làm lặp lại trong suốt thời gian mã chạy.  
Những việc đã định nghĩa được lặp lại mỗi 10 ms một lần.  


<br>

### Cách dùng bảng mã lệnh {#python-codes-usage}

Dưới đây là phần giải thích **cách dùng bảng mã lệnh khi lập trình** kèm những ví dụ đơn giản.  

### Tìm mã bạn muốn {#python-codes-find}

Bảng mã lệnh cung cấp nhiều hàm và đoạn mã cần cho việc lập trình robot.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Khi xem các mục trong nhóm **Mã lệnh**, bạn thấy có những mục mang biểu tượng <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Khi bạn bấm một lần vào mục **Logic**, biểu tượng đổi thành <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> và các **mục con** bên trong được mở ra.  
Mục có mục con như vậy được gọi là '**nhóm**'.  

Nếu một mục như **ba ngôi** trong nhóm **Logic** không có biểu tượng <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />, nghĩa là bên trong mục đó **không còn mục con nào nữa**.  
Mục không có mục con như vậy được gọi là '**mã**'.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Khi bạn bấm lại vào một nhóm đang mở các mục con, biểu tượng đổi lại thành <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> và các mục con được ẩn đi.  

Bằng cách đi theo các nhóm như vậy, bạn tìm được đoạn mã mình muốn trong bảng mã lệnh.

<br>

### Chèn mã vào trình soạn thảo {#python-codes-insert}

Cách chèn mã vào trình soạn thảo như sau.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Mục có biểu tượng <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> ở bên trái tên nghĩa là mục đó không có **tùy chọn mã** nào để chọn.  
Phần lớn các mục **nhóm** có mục con đều như vậy.

Mục có biểu tượng <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> ở bên trái tên nghĩa là mục đó có **tùy chọn mã** để chọn.  
Phần lớn các mục **mã** không có mục con đều như vậy.

Khi bạn **bấm chuột phải** vào đoạn mã muốn chèn vào trình soạn thảo, bạn xem được các tùy chọn có thể chọn.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Khi bạn bấm chuột phải vào một mục **mã**, bạn thấy cùng những tùy chọn sau, không phân biệt hàm cơ bản hay mã riêng của robot/tiện ích mở rộng.

- **Chèn mã**: chèn đoạn mã đã chọn vào vị trí con trỏ trong trình soạn thảo.
- **Trợ Giúp**: mở trang trợ giúp giải thích cách dùng của đoạn mã đó.
- **Hủy**: đóng menu tùy chọn.

Với mã riêng của robot/tiện ích mở rộng, khi bạn chọn **Chèn mã**, mã được chèn dưới dạng lời gọi phương thức của thực thể robot đó.  
( ví dụ: mã `set_wheel_speed` của Hamster S → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Ghi chú**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Những nhóm mã riêng của robot / tiện ích mở rộng bạn đã thêm vào chương trình mà không dùng nữa  
thì bạn bỏ khỏi bảng mã lệnh bằng **bấm chuột phải → Xóa**.

<br>
