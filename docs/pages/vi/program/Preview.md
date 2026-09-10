---
title: Xem trước
---

# Xem trước

**Xem trước** là khu vực để bạn xem **trạng thái kết nối robot** và hỗ trợ việc lập trình robot bằng mã, camera, bảng điều khiển.  
Dưới đây là những chức năng bạn dùng được ở từng thẻ.

## Trạng thái kết nối robot {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Ở thẻ Kết nối, bạn xem được thông tin của những robot đang được kết nối.   
Khi bạn bấm **Hiển thị giá trị cảm biến theo thời gian thực**, bạn theo dõi được giá trị cảm biến của robot bằng biểu đồ hoặc bằng số theo thời gian thực.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Bạn chọn được cảm biến muốn xem; mỗi robot hỗ trợ những loại cảm biến khác nhau.  
Tùy cảm biến bạn chọn, cách hiển thị biểu đồ và dữ liệu tự động đổi cho hợp với giá trị của cảm biến đó. 

2. Bạn chọn được khoảng bao nhiêu giây thì đọc hoặc ghi giá trị cảm biến một lần.  
Tùy chu kỳ bạn chọn, thời gian dài nhất có thể ghi dữ liệu và hiển thị lên biểu đồ sẽ khác nhau. 
3. Khi bạn đưa chuột lên biểu đồ cảm biến, bạn xem được luôn giá trị cảm biến tại thời điểm đó. 
4. Bắt đầu/dừng ghi: ghi lại dữ liệu cảm biến. 
5. Xuất ra: lưu dữ liệu cảm biến đã ghi (.csv) và ảnh biểu đồ (.png) thành tệp.  
Chức năng này chỉ dùng được sau khi đã ghi dữ liệu. 
6. Chụp màn hình: lưu ngay ảnh biểu đồ hiện tại (.png).  
Bạn ghi lại được sự thay đổi của giá trị cảm biến và lưu tệp dữ liệu đã ghi cùng ảnh biểu đồ thành tệp.    

<br>

## Xem trước Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

Ở phần Xem trước Python, bạn thấy được ngay theo thời gian thực việc thêm hay bớt khối được chuyển thành mã **Python** như thế nào.  
Vừa xem khối được chuyển thành mã ra sao, bạn vừa học cú pháp lập trình một cách dễ dàng hơn. 

※ Xem trước Python chỉ có ở **trình soạn thảo lập trình khối**.  
Ở trình soạn thảo Python, người dùng tự viết mã nên không có phần xem trước.

<br>

## Camera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Ở thẻ Camera, bạn xem được hình ảnh của camera nối với máy tính theo thời gian thực.  

Chức năng này chỉ bật khi **bạn đã thêm vào chương trình một mô-đun mở rộng có dùng camera**, và một mô-đun camera được tạo ra trong thẻ Camera.  

Ở mỗi mô-đun camera, bạn làm được những việc sau:
- Chọn một trong các camera dùng được trên máy tính hiện tại để hiện hình ảnh.
- Dùng nút **Bật / Tắt** để hiện hoặc dừng hình ảnh camera.
- Đổi **độ phân giải camera**.

<br>

## Bảng điều khiển {#console}

Ở thẻ Bảng điều khiển, bạn xem được theo thời gian thực các thông điệp nhật ký (Log) và biểu đồ (Scope) xuất ra trong khi chương trình chạy.  
Thẻ này được dùng để gỡ lỗi, theo dõi giá trị cảm biến và phân tích dựa trên biểu đồ.  

### Nhật ký {#console-log}
Với khối **ghi nhật ký**, bạn xuất được văn bản hoặc giá trị số kèm theo thẻ đã chỉ định ra vùng nhật ký của bảng điều khiển.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Biểu đồ {#console-scope}

Với khối **vẽ biểu đồ**, bạn biểu diễn được giá trị số theo từng thẻ dưới dạng **biểu đồ thời gian thực**.  
Bạn đặt giá trị nhỏ nhất, giá trị lớn nhất và màu biểu đồ để theo dõi trực quan sự thay đổi của giá trị mình muốn. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
