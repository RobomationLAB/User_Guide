---
title: Hàm
---

# Hàm

**Hàm (Function)** là **tập hợp các lệnh (khối)** thực hiện một công việc nhất định.  
Khi bạn gom những hành động dùng đi dùng lại thành một hàm, mã trở nên **gọn gàng và hiệu quả** hơn.

Hàm có những đặc điểm sau.  
- **Dùng lại được**: định nghĩa một lần rồi gọi lại bao nhiêu lần cũng được.  
- **Đầu vào và đầu ra**: hàm nhận tham số (giá trị đầu vào), xử lý rồi trả về kết quả (giá trị đầu ra).  
- **Mã dễ đọc hơn**: giúp bạn tổ chức luồng chạy của chương trình một cách hợp lý.


## setup {#setup}

**Hàm setup** chỉ được gọi đúng một lần, ngay lúc mã bắt đầu chạy.  
Trong hàm setup, người ta thường viết mã đặt giá trị ban đầu cho biến hoặc đặt chế độ, tùy chọn của robot.  
Ví dụ, khi điều khiển một robot chạy bằng bánh xe, bạn đặt được tốc độ bánh xe ban đầu trong hàm setup.  

<BlockImage module="common/functions" id="setup" />
  
Với hàm `Utils.wait(...)`, bạn viết được mã chạy tuần tự theo thời gian. Khi kết hợp với **hàm loop** vốn chạy song song, bạn không chỉ chạy tuần tự đơn giản mà còn lập trình robot một cách mạnh mẽ.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Hàm loop** được gọi lặp lại mỗi 10 ms trong suốt thời gian chương trình chạy.  
Trong hàm loop, người ta thường viết mã liên tục đặt giá trị cho biến hoặc nhận biết và xử lý các sự kiện của robot.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Định nghĩa hàm {#procedures_defnoreturn}

Với khối định nghĩa hàm, bạn tạo được **một hàm mới**.  
Hàm không có giá trị trả về thì thực hiện một hành động nhất định nhưng **không trả về giá trị nào**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Định nghĩa hàm có giá trị trả về {#procedures_defreturn}

Hàm có giá trị trả về thì sau khi làm xong công việc sẽ **hoàn trả kết quả** để các khối khác dùng được.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Hàm dưới đây **nhận tham số x, y rồi trả về kết quả x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Gọi hàm {#procedures_callnoreturn}

Khi bạn định nghĩa một hàm, **khối hàm do người dùng định nghĩa** được tạo ra ngay.  
Nhờ đó bạn gọi và chạy được **hàm đã định nghĩa sẵn**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Nếu thì hoàn trả {#procedures_ifreturn}

Khối này **trả về giá trị ngay và kết thúc hàm khi một điều kiện nhất định được thỏa mãn** bên trong hàm.  
Khối này **chỉ dùng được bên trong hàm**; ở những nơi khác nó bị vô hiệu hóa.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
