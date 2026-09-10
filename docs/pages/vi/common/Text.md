---
title: Văn bản
---

# Văn bản {#text}

Ví dụ về văn bản:
- "thing #1"
- "March 12, 2010"
- "" (văn bản rỗng)

Văn bản có thể chứa chữ hoa hoặc chữ thường, chữ số, dấu câu, các ký hiệu khác và khoảng trắng giữa các từ.  

<BlockImage module="common/text" id="text" />

## Tạo văn bản {#text_join}

Khối **tạo văn bản từ** ghép (nối) giá trị của nhiều văn bản lại để tạo ra một văn bản mới.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Thêm văn bản {#text_append}

Khối **thêm văn bản** nối văn bản cho trước vào biến đã chỉ định.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Độ dài văn bản {#text_length}

Khối **độ dài của** đếm các chữ cái, chữ số… trong văn bản và trả về tổng độ dài.  
Độ dài của `abc` dưới đây là 3, còn độ dài của văn bản rỗng là 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Kiểm tra văn bản rỗng {#text_isEmpty}

Khối **trống không** kiểm tra xem văn bản cho trước có rỗng hay không (độ dài bằng 0).

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Tìm văn bản {#text_indexOf}

Những khối này kiểm tra xem một văn bản có nằm trong một văn bản khác hay không và trả về vị trí nếu có.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Lấy một ký tự {#text_charAt}

Lấy một ký tự ở vị trí nhất định trong văn bản.  
Có nhiều lựa chọn như ký tự đầu tiên, ký tự cuối cùng, vị trí bất kỳ, ký tự thứ N.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Lấy một phần văn bản {#text_getSubstring}

Với khối **lấy một phần văn bản**, bạn trích được đoạn văn bản trong một phạm vi nhất định.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Đổi chữ hoa chữ thường {#text_changeCase}

Khối này đổi văn bản đầu vào sang một trong các dạng sau:

- **CHỮ IN HOA**: đổi tất cả các chữ thành chữ hoa
- **chữ in thường**: đổi tất cả các chữ thành chữ thường
- **Viết Hoa Chữ Đầu**: chỉ viết hoa chữ cái đầu của mỗi từ, phần còn lại là chữ thường

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # chữ in hoa
TEXT.lower() # chữ in thường
TEXT.title() # viết hoa chữ đầu
```

## Cắt khoảng trắng {#text_trim}

Khối sau cắt khoảng trắng ở những vị trí sau trong văn bản:
- cả hai mặt
- bên trái
- bên phải

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # cả hai mặt
TEXT.lstrip()   # bên trái
TEXT.rstrip()   # bên phải
```

## Đếm số lần một văn bản xuất hiện {#text_count}

Đếm và trả về số lần một đoạn văn bản xuất hiện trong văn bản cho trước.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Thay thế một văn bản {#text_replace}

Thay thế đồng loạt một đoạn văn bản trong văn bản bằng một văn bản khác.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Đảo ngược văn bản {#text_reverse}

Trả về một văn bản mới có thứ tự ngược lại với văn bản ban đầu.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## In văn bản {#text_print}

Khối **in lên màng hình** hiển thị giá trị đầu vào trong một cửa sổ bật lên.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Nhận dữ liệu người dùng nhập {#text_prompt_ext}

Khối sau tạo một cửa sổ bật lên để xin người dùng nhập dữ liệu, và giá trị nhập vào được lưu vào biến.  
Bạn nhận được văn bản hoặc số.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
