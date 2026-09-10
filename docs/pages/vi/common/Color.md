---
title: Màu sắc
---

# Màu sắc

Màu sắc được dùng trong nhiều chương trình đồ họa khác nhau. 


## Màu cơ bản {#color_picker}

Cách lấy màu đơn giản nhất là dùng **bảng màu**.  
Khi bạn bấm vào ô vuông bo tròn màu trắng, bảng màu hiện ra và bạn chọn được màu mong muốn.

<BlockImage module="common/color" id="color_picker" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Màu sắc | Màu dựng sẵn | đen(black), đỏ(red), vàng(yellow), xanh lá(green),<br>xanh lơ(cyan), xanh dương(blue), đỏ tươi(magenta), trắng(white) | - |

### Python
```python
# ví dụ: khi chọn màu đỏ dựng sẵn
Utils.color('red')
```

## Màu thanh trượt {#color_slider}

Với khối **màu thanh trượt**, bạn tự pha màu bằng thanh trượt tròn / thanh trượt ngang.  
Khi bạn bấm vào ô vuông bo tròn màu trắng, một vòng màu để chỉnh giá trị **đỏ (R), xanh lá (G), xanh dương (B)** và một thanh trượt để chỉnh **độ sáng** sẽ hiện ra.

<BlockImage module="common/color" id="color_slider" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| color | Màu sắc | Vòng màu + thanh trượt độ sáng | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# màu chọn trên vòng màu → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## Màu RGB {#color_rgb}

Khối **màu RGB** tạo ra một mảng RGB từ ba giá trị đỏ, xanh lá và xanh dương mà bạn chỉ định.

<BlockImage module="common/color" id="color_rgb" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| r | Giá trị nhập (khối) | Giá trị đỏ | số nguyên từ 0 đến 255 | - |
| g | Giá trị nhập (khối) | Giá trị xanh lá | số nguyên từ 0 đến 255 | - |
| b | Giá trị nhập (khối) | Giá trị xanh dương | số nguyên từ 0 đến 255 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## Màu ngẫu nhiên {#color_random}

Khối **màu ngẫu nhiên** tạo ra một màu RGB ngẫu nhiên mỗi lần được gọi.

<BlockImage module="common/color" id="color_random" />

### Tham số

(không có)

### Python
```python
Utils.random_color()
```
