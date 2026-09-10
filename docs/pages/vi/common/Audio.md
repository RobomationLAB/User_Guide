---
title: Âm thanh
---

# Âm thanh

Với khối âm thanh, bạn phát được nhiều hiệu ứng âm thanh và giọng nói khác nhau.


## Phát âm thanh {#play_sound}

Phát âm thanh mong muốn với **âm lượng** đã chỉ định.  
Khi bạn bật hộp kiểm **lặp lại**, âm thanh đã chọn được phát đi phát lại liên tục.

<BlockImage module="common/audio" id="play_sound" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| clip | Tùy chọn danh sách thả xuống | Tên đoạn âm thanh | Tên đoạn âm thanh trong thư viện âm thanh | - |
| volume | Giá trị nhập (ô) | Âm lượng | số nguyên từ 0 đến 100 | 100 |
| repeat | Hộp kiểm | Có lặp lại hay không | TRUE / FALSE | FALSE |

### Python
```python
Utils.play_sound('', 100, True)
Utils.play_sound('', 100, False)
```

## Đặt ngôn ngữ và giọng nói {#set_tts}

Đặt **ngôn ngữ** và **giọng nói** dùng để phát **TTS**.  
Bạn chọn được nhiều ngôn ngữ và giọng nói khác nhau để có giọng đọc tự nhiên hơn.

<BlockImage module="common/audio" id="set_tts" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| lang | Tùy chọn danh sách thả xuống | Mã ngôn ngữ | Mã ngôn ngữ TTS của 21 ngôn ngữ mà chương trình hỗ trợ (ví dụ: `'vi-VN'`, `'en-US'`) | - |
| voice | Tùy chọn danh sách thả xuống | Tên giọng nói | Tên giọng nói TTS của hệ thống (ví dụ: `'Google tiếng Việt'`) | - |

### Python
```python
Utils.set_tts('vi-VN', '')
```

## Đọc {#speak}

Chuyển văn bản nhập vào thành âm thanh rồi đọc lên.

<BlockImage module="common/audio" id="speak" />

### Tham số

| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |
| --- | --- | --- | --- | --- |
| text | Giá trị nhập | Văn bản cần đọc | chuỗi ký tự | - |

### Python
```python
Utils.speak('Xin chào')
```
