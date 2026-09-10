---
title: Menu trên cùng
---

# Menu trên cùng

**Menu trên cùng** gom những chức năng hay dùng trong chương trình như nối đầu thu với robot, lưu và mở tệp.  
Dưới đây là chức năng của từng menu theo thứ tự. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

Đây là logo của chương trình.  
Khi bạn bấm vào logo, trang được tải lại. 

Khi **trình soạn thảo lập trình khối** đang bật, logo hiện chữ **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Khi **trình soạn thảo Python** đang bật, logo hiện chữ **Script Composer**.  

<br>

## Đầu thu USB {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Bạn **tìm đầu thu để giao tiếp với robot và nối nó vào chương trình**.

Để điều khiển robot trong chương trình, trước hết bạn phải nối vào chương trình đầu thu dùng để giao tiếp với robot.  
Quá trình này gọi là **ghép nối**. 

Khi bạn bấm nút **Đầu thu USB**, danh sách các đầu thu dùng được trên máy tính hiện ra.  
Bạn chọn đầu thu mong muốn trong danh sách rồi bấm nút **kết nối**, đầu thu sẽ được nối vào chương trình.  

### Xem trạng thái kết nối đầu thu {#dongle-status}

Đầu thu đã từng được nối vào chương trình sẽ tự động kết nối trong những lần dùng sau.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Khi đầu thu được nối vào chương trình đúng cách, biểu tượng chuyển sang **màu xanh nhạt**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Nếu trên thẻ trình duyệt có biểu tượng như hình dưới đây thì bạn biết là đầu thu đang được kết nối.  

<br>

**⚠️ Lưu ý**  

Nếu đầu thu đã được nối vào một chương trình khác hoặc một trang khác thì nó không nối được vào chương trình này.  
Trong trường hợp đó, hãy tìm chương trình đang giữ đầu thu và ngắt kết nối, rồi quay lại trang này và thử kết nối lại.

<br>

## Robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Bạn **chọn robot sẽ dùng trong chương trình** và **đăng ký thông tin cùng khối/mã lệnh riêng của robot đó**. 

Để điều khiển robot trong chương trình, trước hết bạn phải thêm vào chương trình thông tin và khối của robot mình dùng.

<BlockImage module="program/Menu" id="robot-select" /><br>

Khi bạn bấm nút **Robot**, cửa sổ bật lên hiện danh sách các robot dùng được trong chương trình.  

Bạn chọn robot mong muốn rồi bấm nút **Thêm**, thông tin và khối/mã lệnh riêng của robot đó sẽ được đăng ký vào chương trình.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Khi robot được thêm vào, những mục sau được tạo ra: 


- **Block Composer**: tạo **khối** riêng của robot đó trong [**bảng khối**](Editor#block-editor) bên trái 
- **Script Composer**: tạo **mã lệnh** riêng của robot đó trong [**bảng mã lệnh**](Editor#python-editor) bên trái

Nhờ vậy bạn cho phần cứng robot thật như cảm biến, động cơ, LED chuyển động và điều khiển chúng thoải mái.  

<br>

**⚙️ Ghi chú**

Trong RobomationLAB, bạn nối và dùng bao nhiêu robot cũng được, không phụ thuộc loại và số lượng robot.  

Tuy nhiên, nếu muốn nối và dùng nhiều robot cùng lúc, bạn phải nối vào chương trình đủ số đầu thu bằng số robot muốn dùng, và phải thêm vào chương trình đủ số robot đó.  

<br>

## Tiện ích mở rộng {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Tiện ích mở rộng là những mô-đun cung cấp **các chức năng mở rộng dựa trên AI như nhận dạng giọng nói, nhận dạng hình ảnh, phân tích ảnh**.  
Bạn **chọn tiện ích mở rộng sẽ dùng trong chương trình** và **đăng ký thông tin cùng khối/mã lệnh riêng của tiện ích đó**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Khi bạn bấm nút **Tiện ích mở rộng**, màn hình hiện cửa sổ bật lên với danh sách các tiện ích mở rộng dùng được trong chương trình.  
- Chuyển giọng nói thành văn bản
- Nhận diện khuôn mặt
- Nhận diện khuôn mặt chi tiết
- Biểu cảm khuôn mặt
- Nhận diện bàn tay
- Nhận diện cơ thể
- Nhận diện vật thể
- Nhận diện màu sắc
- Nhận diện điểm đánh dấu ArUco
- Camera tự lái

Khi bạn bấm vào mô-đun mong muốn, thông tin và khối/mã lệnh riêng của tiện ích đó được đăng ký vào chương trình, giống như ở [**Robot**](#robot). 

Khi bạn thêm vào chương trình một tiện ích mở rộng có dùng camera như **Nhận diện khuôn mặt, Nhận diện bàn tay**,  
một mô-đun camera được tạo ra ở thẻ [**Xem trước - Camera**](Preview#camera) và bạn nối được camera vào chương trình để dùng.  

Nếu không cần tiện ích mở rộng đã chọn nữa, bạn bỏ nó khỏi danh sách bằng **bấm chuột phải → Xóa**.

<br>

## Âm thanh {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Bạn chọn âm thanh để dùng khi lập trình hoặc tự thêm âm thanh có sẵn trên máy vào chương trình.

### Chọn âm thanh {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Khi bạn bấm nút **Âm thanh**, màn hình chọn nhiều âm thanh mà chương trình cung cấp hiện ra.  
Bạn dùng được những chức năng sau:  
- Tìm âm thanh
- ▶ Nghe thử âm thanh
- Thêm âm thanh vào danh sách âm thanh (bảng bên trái)

### Chức năng mở rộng {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Khi bạn bấm hoặc đưa chuột lên nút **mở rộng** (khung đỏ) ở góc dưới bên trái, ba tùy chọn mở rộng hiện ra.  
Bạn dùng được những chức năng sau:
- Thêm tệp trên máy: thêm một tệp âm thanh có trên máy tính của bạn 
- Ghi âm: tự ghi âm để thêm âm thanh
- Thêm âm thanh ngẫu nhiên: thêm một âm thanh được chọn ngẫu nhiên trong toàn bộ danh sách âm thanh

### Dùng âm thanh khi lập trình {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Bạn dùng được khi lập trình những âm thanh đã thêm vào danh sách âm thanh (bảng bên trái).

- Với **lập trình khối**, bạn chọn âm thanh mong muốn trong danh sách thả xuống của khối **phát âm thanh**.  

- Với **lập trình bằng mã lệnh**, bạn chọn âm thanh mong muốn trong các tùy chọn con của hàm **'phát âm thanh'** thuộc nhóm **Mã lệnh - Âm thanh**.  

Khi mã chạy, âm thanh bạn chọn được phát qua loa của máy tính.

<br>

## Ví dụ {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Nếu chương trình đã có robot, bạn mở được những ví dụ đơn giản của từng robot để trải nghiệm.

### Chọn ví dụ {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Khi bạn bấm nút Ví dụ, màn hình **Chọn ví dụ** như trên hiện ra.   
Nhờ chức năng **phân loại theo nhóm** và **tìm kiếm**, bạn tìm nhanh được ví dụ mình muốn. 

### Mở ví dụ {#example-load}
1. Bấm menu **Ví dụ** để mở màn hình **Chọn ví dụ** rồi chọn ví dụ bạn muốn. 
2. Màn hình được tải lại và ví dụ hiện ra trong vùng lập trình.   
3. Sau khi mở ví dụ, bạn chỉ cần bấm **nút chạy (▶)** là xem được kết quả mà không phải làm gì thêm. 

<br>

## Chỉnh sửa {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Đây là những chức năng để hủy hoặc làm lại thao tác.
- Sao chép (Ctrl+C): sao chép khối hoặc mã bạn đã chọn.
- Dán (Ctrl+V): dán khối hoặc mã đã sao chép vào vùng làm việc.
- Hoàn tác (Ctrl+Z): hủy thao tác vừa rồi.
- Làm lại (Ctrl+Y): làm lại thao tác đã hủy. 

<br>

## Tệp {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Bạn tạo mã mới, lưu mã đã viết thành tệp và mở lại, tức là quản lý tệp của mình.

- Mới  
Xóa sạch mã bạn đang viết và tạo mã mới.

- Lưu dự án  
Lưu tệp dự án bạn đang làm.  
Tệp được lưu vào thư mục 'Tải xuống' trên máy tính của bạn, phần mở rộng là '.block'.

- Xuất mã Python  
Trích mã Python của dự án bạn đang làm rồi lưu thành tệp.  
Tệp được lưu vào thư mục 'Tải xuống' trên máy tính của bạn, phần mở rộng là '.py'.  
Bạn mở và chạy được tệp đã lưu trong các môi trường phát triển Python bên ngoài như VSCode.

- Mở dự án  
Mở tệp dự án hoặc tệp mã Python có trên máy tính của bạn.  
Các phần mở rộng mở được là '.block' và '.py'.  
Tệp '.block' được mở trong trình soạn thảo lập trình khối, còn tệp '.py' được mở trong trình soạn thảo Python.  
Khi mở tệp '.py', nếu mã không hợp với định dạng mã của Block Composer hoặc có lỗi cú pháp thì tệp có thể không mở được, xin bạn lưu ý.

<br>

## Chạy / dừng mã {#run-stop}

### Chạy (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Diễn giải và chạy mã khối hoặc mã lệnh đã viết trong trình soạn thảo đang bật.  

Tùy theo mã bạn viết, bạn điều khiển được robot đang nối với chương trình.  
Trong khi mã đang chạy, bạn không sửa được mã đã viết.

### Dừng (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Dừng việc chạy mã.


<br>

## Lập trình AI {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Khi bạn bấm nút **Lập trình AI** trên menu trên cùng, bảng trò chuyện AI mở ra ở bên phải màn hình.  
Bạn trò chuyện với **chatbot AI** tích hợp trong RobomationLAB và lập trình cùng AI.

Bạn dùng được những chức năng sau:
- Hỏi thoải mái về lập trình như cách viết và sửa mã, cú pháp, khái niệm.
- **Khi có lỗi xảy ra lúc chạy mã**, bạn hỏi AI nguyên nhân và cách khắc phục để giải quyết vấn đề nhanh chóng.
- Bạn sao chép dễ dàng mã AI đưa ra bằng nút sao chép ở bên phải khối mã.
- Nội dung trò chuyện được lưu lại nên bạn trò chuyện tiếp được, và bạn cũng bắt đầu được **cuộc trò chuyện mới**.
- Bạn kéo mép trái của bảng để chỉnh chiều rộng của nó.

<br>

## Sao chép mã {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Bạn sao chép được vào bộ nhớ tạm phần mã đã viết trong trình soạn thảo đang bật.  

### Block Composer (lập trình khối) {#copy-block}

Mã Python hiện ở thẻ **[Xem trước Python](Preview#python-preview)** được sao chép.

### Script Composer (Python) {#copy-python}
Mã đang có trong trình soạn thảo Python được sao chép nguyên vẹn.  

Bạn dán mã đã sao chép vào nơi mình muốn bằng Ctrl+V.

<br>

## Chọn trình soạn thảo {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Bạn chọn trình soạn thảo mình muốn giữa **Khối** và **Python** để lập trình.  

Dù bạn đổi trình soạn thảo, mã đã viết trước đó vẫn được giữ nguyên và bạn lập trình tiếp bất cứ lúc nào. 

**※ Trình soạn thảo lập trình khối và trình soạn thảo Python tương ứng một–một; khi bạn đổi trình soạn thảo, mã đã viết được chuyển đổi qua lại và giữ nguyên.**

### Trình soạn thảo lập trình khối {#editor-settings-block}
Khi bạn chọn Khối, logo đổi thành **Block Composer**.  
Các khối bạn viết trong trình soạn thảo lập trình khối được chuyển thành mã Python theo thời gian thực, và bạn xem được kết quả chuyển đổi ở thẻ **Xem trước - Xem trước Python**.  

### Trình soạn thảo Python {#editor-settings-python}
Khi bạn chọn Python, logo đổi thành **Script Composer**.  
Mã bạn viết trong trình soạn thảo Python sẽ được chuyển thành khối khi bạn quay lại **trình soạn thảo lập trình khối**.  

> Tuy nhiên, việc chuyển từ Python sang khối chỉ thực hiện được với phần mã có thể biểu diễn bằng khối.  
> Nếu cú pháp sai hoặc mã không chuyển được thành khối thì có thể không chuyển sang trình soạn thảo lập trình khối được, và khi đó lý do chuyển đổi thất bại cũng được hiện ra.

<br>

## Cài đặt {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Bạn thực hiện được những cài đặt cơ bản của chương trình.

### Ngôn ngữ {#settings-language}
Đổi ngôn ngữ (quốc gia) hiện trong chương trình.  
Bạn chọn được ngôn ngữ mình muốn trong tổng cộng 21 ngôn ngữ.

### Dongle {#settings-dongle}
- Ngắt kết nối: ngắt kết nối toàn bộ đầu thu đang nối với chương trình.
- Kết nối: nối lại đầu thu vào chương trình.

### Đặt lại {#settings-reset}
- Đặt lại chương trình: toàn bộ dữ liệu đã đăng ký trong chương trình (thông tin robot, khối/mã lệnh, cài đặt…) được đặt lại.

<br>

## Hỗ trợ {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Bạn xem được những hướng dẫn và tài liệu bên ngoài cần cho việc dùng chương trình.  

- Hướng dẫn thực hành: cung cấp phần hướng dẫn dành cho người lần đầu dùng chương trình.
- Trợ giúp: bạn xem ngay được cách dùng và ví dụ của các khối và mã Python ngay trong chương trình.
- Hướng dẫn sử dụng: chuyển đến trang Wiki hướng dẫn sử dụng RobomationLAB.  
Trang này giải thích chi tiết về các thành phần và cách dùng chương trình, chức năng và cú pháp của từng khối/mã lệnh.
- Phòng thí nghiệm Robomation: chuyển đến trang chính của RobomationLAB.
- Trang chủ: chuyển đến trang chủ chính thức của công ty Robomation.
- YouTube: chuyển đến trang YouTube của Robomation.
- Trung tâm mua sắm: chuyển đến trang mua sắm của Robomation.
- Giới thiệu: bạn xem được phiên bản và lịch sử cập nhật của chương trình, điều khoản sử dụng, chính sách bảo mật.
- Liên hệ với chúng tôi: bạn hỏi được những thắc mắc hay lỗi gặp phải khi dùng chương trình.

<br>
