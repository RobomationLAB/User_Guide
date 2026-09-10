---
title: Danh sách
---

# Danh sách

Danh sách là **tập hợp các thành phần được sắp theo thứ tự**, giống như "danh sách việc cần làm" hay "danh sách mua sắm".  
Thành phần của danh sách có thể thuộc bất kỳ kiểu nào, và cùng một giá trị có thể xuất hiện nhiều lần trong danh sách.


## Tạo danh sách trống {#lists_create_with}

Danh sách đơn giản nhất là danh sách rỗng; bạn tạo nó bằng khối **tạo danh sách trống**.

<BlockImage module="common/lists" id="lists_create_with" />

### Python
```python
[]
```

## Tạo danh sách gồm {#lists_create_with-2}

Với khối **tạo danh sách gồm**, bạn đặt được giá trị ban đầu cho danh sách mới.

<BlockImage module="common/lists" id="lists_create_with-2" />

### Python
```python
[item0, item1, item2]
```

## Lặp lại một vật trong danh sách {#lists_repeat}

Với khối **tạo danh sách gồm một vật**, bạn lặp lại một thành phần đã chỉ định để tạo danh sách có đúng số lượng mong muốn.

<BlockImage module="common/lists" id="lists_repeat" />

### Python
```python
[item] * times
```

## Độ dài danh sách {#lists_length}

Giá trị của khối **độ dài của** là số thành phần trong danh sách.  
Độ dài của danh sách rỗng là 0.

<BlockImage module="common/lists" id="lists_length" />

### Python
```python
len(list)
```

## Kiểm tra danh sách rỗng {#lists_isEmpty}

Giá trị của khối **trống rỗng** là **đúng** khi đầu vào là danh sách rỗng, và là **sai** trong các trường hợp còn lại.

<BlockImage module="common/lists" id="lists_isEmpty" />

### Python
```python
not len(list)
```

## Vị trí xuất hiện của một vật trong danh sách {#lists_indexOf}

Tìm vị trí của một thành phần trong danh sách.  
Nếu danh sách không có thành phần đó, kết quả là 0.

<BlockImage module="common/lists" id="lists_indexOf" />

### Python
```python
list.index(VALUE) + 1
```

## Lấy / cắt / xóa thành tố {#lists_getIndex}

Khối này lấy, cắt hoặc xóa một thành tố khỏi danh sách.  
Có nhiều lựa chọn như thành tố đầu tiên, cuối cùng, thứ N, bất kỳ.

<BlockImage module="common/lists" id="lists_getIndex" />

### Lấy {#lists_getIndex_get}

Khối **trong danh sách lấy thành tố** lấy thành tố ở một vị trí nhất định trong danh sách.  

### Python
```python
list[0]
list[-1]
list[int(random.random() * len(list))]
list[N - 1]
list[-N]
```

### Cắt {#lists_getIndex_cut}

Khối **trong danh sách cắt thành tố** lấy một thành tố ra khỏi danh sách và đồng thời xóa thành tố đó khỏi danh sách.

### Python
```python
list.pop(N - 1)                        # thứ #
list.pop(-N)                           # thứ # tính từ cuối
list.pop(0)                            # đầu tiên
list.pop()                             # cuối cùng 
lists_remove_random_item(list)         # bất kỳ

# random
def lists_remove_random_item(myList):
    x = int(random.random() * len(myList))
    return myList.pop(x)
```

### Xóa {#lists_getIndex_remove}

Khối **trong danh sách xóa thành tố** chỉ xóa một thành tố khỏi danh sách.  
Chấu cắm bên trái của khối biến mất và bạn nối được khối bên trên với khối bên dưới.  

### Python
```python
list.pop(N - 1)                             # thứ #
list.pop(-N)                                # thứ # tính từ cuối
list.pop(0)                                 # đầu tiên
list.pop()                                  # cuối cùng
list.pop(int(random.random() * len(list)))  # bất kỳ
```

## Đặt / chèn thành tố ở vị trí mong muốn {#lists_setIndex}

Khối này đặt hoặc chèn một thành tố vào vị trí mong muốn trong danh sách.  
Có nhiều lựa chọn như thành tố đầu tiên, cuối cùng, thứ N, bất kỳ.

<BlockImage module="common/lists" id="lists_setIndex" />

### Đặt thành tố {#lists_setIndex_set}

Khối **trong danh sách đặt thành tố** thay thành tố ở vị trí đã chỉ định bằng một thành tố khác.

### Python
```python
list[N - 1] = value                         # thứ #
list[-N] = value                            # thứ # tính từ cuối
list[0] = value                             # đầu tiên
list[-1] = value                            # cuối cùng

tmp_x = int(random.random() * len(list))
list[tmp_x] = value                         # bất kỳ
```

### Chèn thành tố {#lists_setIndex_insert}

Khối **trong danh sách chèn thành tố** chèn một thành tố mới vào vị trí đã chỉ định.  
Các thành tố cũ vẫn được giữ lại và độ dài tăng thêm 1.

### Python
```python
list.insert(N - 1, value)                        # thứ #
list.insert(-N, value)                           # thứ # tính từ cuối
list.insert(0, value)                            # đầu tiên
list.append(value)                               # cuối cùng

tmp_x = int(random.random() * len(list))
list.insert(tmp_x, value)                        # bất kỳ
```

## Lấy một danh sách con {#lists_getSublist}

Khối **trong danh sách lấy một danh sách con** lấy ra một danh sách con theo vị trí bắt đầu và vị trí kết thúc.  
Có nhiều lựa chọn như thành tố đầu tiên, cuối cùng, thứ N, bất kỳ.  
Sau khi chạy, danh sách gốc vẫn không thay đổi.  

<BlockImage module="common/lists" id="lists_getSublist" />

### Python
```python
# bắt đầu từ vị trí đầu tiên (#1)
list[ : N]                             # #N (1-based)
list[ : -N]                            # last_#N
list[ : ]                              # last

# bắt đầu từ last_#N
list[-N : M]
list[-N : -M]
list[-N : ]

# bắt đầu từ first
list[ : N]
list[ : -N]
list[ : ]
```

## Lấy danh sách mới đã thay một mục {#lists_replace}

Khối **trong danh sách thay mục** trả về một danh sách mới trong đó thành tố ở vị trí đã chỉ định được thay bằng thành tố khác.  
Có nhiều lựa chọn như thành tố đầu tiên, cuối cùng, thứ N.  
Sau khi chạy, danh sách gốc vẫn không thay đổi.  

<BlockImage module="common/lists" id="lists_replace" />

### Python
```python
# unit = "#"
[value if i == (N - 1) else data for i, data in enumerate(list)]

# unit = "last_#"
[value if i == (len(list) - N) else data for i, data in enumerate(list)]

# unit = "first"
[value if i == 0 else data for i, data in enumerate(list)]

# unit = "last"
[value if i == (len(list) - 1) else data for i, data in enumerate(list)]
```

## Tách / ghép văn bản theo ký tự phân cách {#lists_split}

<BlockImage module="common/lists" id="lists_split" />

### Tạo danh sách từ văn bản {#text_to_list}

Khối **tạo danh sách từ văn bản** chia văn bản cho trước theo ký tự phân cách và trả về danh sách.

### Python
```python
text.split(delimiter)
```

### Tạo văn bản từ danh sách {#list_to_text}

Khối **tạo văn bản từ danh sách** dùng ký tự phân cách để ghép các thành phần của danh sách thành một văn bản.

### Python
```python
delimiter.join(list)
```

## Sắp xếp danh sách {#lists_sort}

Khối **sắp xếp** danh sách theo tiêu chí mong muốn.  
Bạn sắp xếp được theo số hoặc theo bảng chữ cái, và chọn được thứ tự tăng dần hay giảm dần.  
Ngoài ra, khi sắp xếp theo bảng chữ cái, bạn còn sắp xếp được mà không phân biệt chữ hoa chữ thường.

<BlockImage module="common/lists" id="lists_sort" />

### Python
```python
lists_sort(my_list, "NUMERIC", False)      # số, tăng dần
lists_sort(my_list, "NUMERIC", True)       # số, giảm dần
lists_sort(my_list, "TEXT", False)         # chữ, tăng dần
lists_sort(my_list, "TEXT", True)          # chữ, giảm dần
lists_sort(my_list, "IGNORE_CASE", False)  # không phân biệt hoa thường, tăng dần
lists_sort(my_list, "IGNORE_CASE", True)   # không phân biệt hoa thường, giảm dần

def lists_sort(my_list, type, reverse):
    def try_float(s):
        try: return float(s)
        except: return 0
    key_funcs = {
        "NUMERIC": try_float,
        "TEXT": str,
        "IGNORE_CASE": lambda s: str(s).lower()
    }
    key_func = key_funcs[type]
    list_cpy = list(my_list)
    return sorted(list_cpy, key=key_func, reverse=reverse)
```

## Đảo ngược danh sách {#lists_reverse}

Khối **đảo ngược** thứ tự các thành phần của danh sách.

<BlockImage module="common/lists" id="lists_reverse" />

### Python
```python
list(reversed(my_list))
```
