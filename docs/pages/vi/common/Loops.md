---
title: Vòng lặp
---

# Vòng lặp

Câu lệnh điều khiển vòng lặp có hai loại:  
**câu lệnh điều kiện** và **câu lệnh lặp** (những câu lệnh điều khiển số lần chạy phần thân theo giá trị của các biến)


## Lặp lại {#controls_repeat}

Khối **lặp lại** đơn giản nhất chạy mã trong phần thân đúng số lần đã chỉ định. 

<BlockImage module="common/loops" id="controls_repeat" />

### Python
```python
for count in range(times):
    # ...
```

## Đếm theo {#controls_for}

Khối **đếm theo** (thường được gọi là **for loop**) tăng biến từ giá trị thứ nhất đến giá trị thứ ba theo bước tăng (giá trị thứ hai) và chạy phần thân một lần cho mỗi giá trị.  

<BlockImage module="common/loops" id="controls_for" />

### Python
```python
for VAR in range(from, to + 1, by):
    # ...
```

## Với mỗi thành phần {#controls_forEach}

Khối **với mỗi thành phần** cũng tương tự, chỉ khác là nó dùng lần lượt các giá trị trong danh sách thay vì một dãy số.

<BlockImage module="common/loops" id="controls_forEach" />

### Python
```python
for VAR in list:
    # ...
```


## Lặp lại khi / cho đến khi {#controls_while}

Khối **lặp lại khi** lặp phần thân trong khi điều kiện còn đúng.  
Khối **lặp lại cho đến khi** lặp phần thân trong khi điều kiện còn sai và thoát khỏi vòng lặp ngay khi điều kiện trở thành đúng.

<BlockImage module="common/loops" id="controls_while" />

### Python
```python
# unit = "while"
while condition:
    # ...

# unit = "until"
while not condition:
    # ...
```

## Thoát / lặp tiếp {#controls_flow_statements}

Khối **thoát** cho phép bạn **ra khỏi vòng lặp sớm**.  
Khối **lặp tiếp** (trong hầu hết các ngôn ngữ lập trình là **continue**) bỏ qua phần mã còn lại của phần thân và bắt đầu ngay lần lặp kế tiếp.

<BlockImage module="common/loops" id="controls_flow_statements" />

### Python
```python
break
continue
```
