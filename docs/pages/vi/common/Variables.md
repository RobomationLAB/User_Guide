---
title: Biến
---

# Biến

Chúng ta dùng thuật ngữ biến với đúng nghĩa như trong toán học hay các ngôn ngữ lập trình khác.  
Nghĩa là **một thành phần có tên, dùng để lưu giá trị và có thể thay đổi giá trị đó**.  
  
Bạn tạo được biến bằng nhiều cách.  

- Một số khối như [đếm theo](Loops#controls_for) và [với mỗi thành phần](Loops#controls_forEach) dùng biến và tự đặt giá trị cho biến đó.  
Những biến này theo truyền thống được gọi là **biến vòng lặp (loop variables)**.  
- [Hàm do người dùng định nghĩa](Functions#procedures_defnoreturn) cũng dùng biến để định nghĩa tham số hay đối số.
- Bạn tạo được biến bất cứ lúc nào bằng khối **cho ... bằng**, và biến được tạo ra sẽ là **biến toàn cục (global variables)**.  
- Môi trường lập trình khối của RobomationLAB không hỗ trợ **biến cục bộ (local variables)**.  

Khi bạn bấm vào danh sách thả xuống của khối biến, các lựa chọn sau hiện ra.  

- Tên của mọi biến đã được định nghĩa trong chương trình.  
- **"Đổi tên biến"**: đổi tên của biến đó trong toàn bộ chương trình. Khi chọn lựa chọn này, một cửa sổ để nhập tên mới hiện ra.  
- **"Xóa biến"**: xóa mọi khối đang tham chiếu đến biến này trong chương trình. 


## Đặt giá trị cho biến {#variables_set}

Khối **cho ... bằng** gán một giá trị cho biến.  
Nếu biến đó chưa được khai báo trong mã, khối này khai báo biến mới rồi mới gán giá trị.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Thay đổi giá trị {#math_change}

Khối **cộng vào** cộng thêm một số vào giá trị của biến.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Lấy giá trị {#variables_get}

Khối dưới đây cho ra giá trị đang lưu trong biến nhưng không làm thay đổi giá trị đó.  
Bạn dùng được khối này mà không cần khối đặt giá trị, nhưng đó không phải là cách lập trình đúng đắn.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
