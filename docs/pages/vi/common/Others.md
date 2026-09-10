---
title: Khác
---

# Khác

Trong lập trình khối, **khối khác** gồm những đoạn mã không ảnh hưởng đến hoạt động của robot.  
Nó dùng để ghi chú thích hoặc kết thúc việc chạy mã.  

## Chú thích một dòng {#comment}

Với khối **chú thích một dòng**, bạn thêm được **lời giải thích** mà không ảnh hưởng đến việc chạy mã.  
Chú thích giúp mã dễ đọc hơn và dễ bảo trì hơn.

<BlockImage module="common/others" id="comment" />

### Python
```python
# nội dung chú thích
```

## Chú thích nhiều dòng {#long_comment}

Với khối **chú thích nhiều dòng**, bạn nhập được nhiều dòng chú thích cùng một lúc.  
Mỗi dòng tự động được đánh dấu là chú thích, còn dòng trống thì được giữ nguyên.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
dòng thứ nhất
dòng thứ hai

dòng thứ tư
"""
```

## Liên kết {#link}

Với khối **liên kết**, bạn dùng **chú thích** để thêm **liên kết trang** muốn mở.  
Khi bạn bấm nút **mở**, trình duyệt chuyển đến trang của liên kết đã nhập.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## Thoát {#exit}

Khối **thoát** dừng ngay việc chạy mã trong chương trình.  
Nó hữu ích khi bạn muốn thêm chức năng dừng bắt buộc trong một điều kiện nhất định.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
