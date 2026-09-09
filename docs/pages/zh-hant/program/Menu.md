---
title: 頂部選單
---

# 頂部選單

**頂部選單** 集中了程式中經常使用的功能，例如連線接收器和機器人，或者儲存和開啟檔案。  
下面按順序說明各個選單的功能。 

## 徽標 {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

這是程式的徽標。  
點擊徽標會重新載入頁面。 

**積木程式設計編輯器** 啟用時，徽標的文字顯示為 **Block Composer**。  

<BlockImage module="program/Menu" id="logo-python" /><br>

**Python 編輯器** 啟用時，徽標的文字顯示為 **Script Composer**。  

<br>

## 查找接收器 {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

可以 **搜尋與機器人通信的接收器並連線到程式**。

要在程式中控制機器人，必須先把與機器人通信的接收器連線到程式。  
這個過程叫做 **配對**。 

按下 **接收器** 按鈕，會顯示目前 PC 上可用的接收器清單。  
從清單中選擇想要的接收器後點擊 **連線** 按鈕，接收器就會連線到程式。  

### 確認接收器的連線狀態 {#dongle-status}

一旦連線過程式的接收器，之後使用程式時會自動連線。

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


接收器正常連線到程式時，圖標會變成 **天藍色**。  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

如果瀏覽器分頁上有下面圖片中那樣的圖標，就可以確認接收器處于已連線狀態。  

<br>

**⚠️ 注意事項**  

如果接收器已經連線到別的程式或別的頁面，就無法連線到本程式。  
這時請找到連線着該接收器的程式並中斷連線，然後回到本頁面重新嘗試連線。

<br>

## 選擇機器人 {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

可以 **選擇程式中要使用的機器人**，並 **注冊該機器人的資訊和專用的積木 / 脚本程式碼**。 

要在程式中控制機器人，必須先把要使用的機器人的資訊和積木新增到程式。

<BlockImage module="program/Menu" id="robot-select" /><br>

按下 **機器人** 按鈕，彈出視窗會顯示程式中可用的機器人清單。  

選擇想要的機器人後點擊 **新增** 按鈕，該機器人的資訊和專用的積木 / 脚本程式碼就會注冊到程式中。  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

新增機器人後，會產生下面這些專案。 


- **Block Composer**: 在左側的 [**積木面板**](Editor#block-editor) 中產生該機器人的專用 **積木** 
- **Script Composer**: 在左側的 [**程式碼面板**](Editor#python-editor) 中產生該機器人的專用 **脚本程式碼**

透過它們，可以自由地移動和控制感測器、馬達、LED 等實際的機器人硬體。  

<br>

**⚙️ 參考**

在 RobomationLAB 中，不論機器人的種類和數量，都可以連線並使用任意多的機器人。  

不過，如果想同時連線並使用多台機器人，程式中必須連線與想使用的機器人台數相同數量的接收器，並且要把相同台數的機器人新增到程式中。  

<br>

## 選擇擴展 {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

擴展模組是提供 **語音識別、圖像識別、圖像分析等基于 AI 的擴展功能** 的模組。  
可以 **選擇程式中要使用的擴展模組**，並 **注冊該擴展模組的資訊和專用的積木 / 脚本程式碼**。  

<BlockImage module="program/Menu" id="extension-select" /><br>

按下 **擴展** 按鈕，會出現顯示程式中可用擴展模組清單的彈出視窗。  
- 語音轉文字
- 臉部偵測
- 詳細臉部偵測
- 臉部表情
- 手部偵測
- 人體偵測
- 物體偵測
- 顏色偵測
- ArUco 標記偵測
- 相機自動駕駛

點擊想要的模組後，和 [**選擇機器人**](#robot) 一樣，該擴展模組的資訊和專用的積木 / 脚本程式碼就會注冊到程式中。 

把 **臉部偵測、手部偵測** 等使用相機的擴展模組新增到程式時，  
[**預覽 - 相機**](Preview#camera) 分頁中會產生相機模組，可以把相機連線到程式使用。  

如果不再需要所選的擴展模組，可以透過 **右鍵 → 移除** 把機器人從清單中去掉。

<br>

## 聲音 {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

可以選擇程式設計中要使用的聲音，也可以把離線的聲音自己新增到程式中。

### 選擇聲音 {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

按下 **聲音** 按鈕，會出現可以選擇程式提供的各種聲音的畫面。  
可以使用下面這些功能。  
- 搜尋聲音
- ▶ 試聽聲音
- 把聲音新增到聲音清單（左側面板）

### 擴展功能 {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

點擊或把滑鼠放到左下角的 **擴展** 按鈕（紅框）上，會出現 3 個擴展功能選項。  
可以使用下面這些功能。
- 新增本地檔案: 新增使用者電腦上的音訊檔案 
- 錄制聲音: 自己錄音來新增聲音
- 新增隨機聲音: 從整個聲音清單中隨機選擇一個聲音新增

### 在程式設計中使用聲音 {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

新增到聲音清單（左側面板）的聲音可以用在程式設計中。

- **積木程式設計** 時，可以從 **播放聲音** 積木的下拉選單中選擇想要的聲音。  

- **脚本程式設計** 時，可以從 **程式碼 - 音訊** 類別中 **「播放聲音」** 函式的下層選項中選擇想要的聲音。  

運行程式碼時，所選的聲音會透過使用者電腦的揚聲器播放。

<br>

## 範例 {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

如果程式中已經新增了機器人，就可以按機器人載入簡單的範例來體驗。

### 選擇範例 {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

按下範例按鈕，會出現上面那樣的 **選擇範例** 畫面。   
透過 **類別篩選** 和 **搜尋** 功能，可以快速找到想要的範例。 

### 載入範例 {#example-load}
1. 點擊 **範例** 選單開啟 **選擇範例** 畫面，選擇想要的範例。 
2. 畫面會重新載入，範例出現在程式設計區域中。   
3. 載入範例後，不用做別的事，按 **運行按鈕(▶)** 就可以確認動作。 

<br>

## 編輯 {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


這是可以取消或重做操作的功能。
- 複製 (Ctrl+C): 複製所選的積木或程式碼。
- 貼上 (Ctrl+V): 把複製的積木或程式碼貼上到工作區。
- 復原 (Ctrl+Z): 取消上一步操作。
- 重做 (Ctrl+Y): 重新執行復原的操作。 

<br>

## 檔案 {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

可以管理檔案，例如新建程式碼，或者把寫好的程式碼儲存為檔案再開啟。

- 新建  
初始化目前正在編寫的程式碼，建立新的程式碼。

- 儲存專案  
儲存目前正在編寫的專案檔案。  
檔案儲存在使用者電腦的「下載」檔案夾中，檔案擴展名是「.block」。

- 匯出 Python 程式碼  
提取目前正在編寫專案的 Python 程式碼並儲存為檔案。  
檔案儲存在使用者電腦的「下載」檔案夾中，檔案擴展名是「.py」。  
儲存的檔案可以在 VSCode 等外部 Python 開發環境中開啟並運行。

- 開啟專案  
開啟使用者電腦上的專案檔案或 Python 程式碼檔案。  
可以開啟的檔案擴展名是「.block」和「.py」。  
開啟「.block」檔案會在積木程式設計編輯器中開啟，開啟「.py」檔案會在 Python 編輯器中開啟。  
開啟「.py」檔案時，如果不符合 BlockComposer 的程式碼格式或者有語法錯誤，檔案可能無法正常開啟，請注意。

<br>

## 運行 / 停止程式碼 {#run-stop}

### 運行 (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

解釋並運行目前啟用的編輯器中所寫的積木程式碼或脚本程式碼。  

根據所寫的程式碼，可以控制連線到程式的機器人。  
程式碼運行期間，無法修改已寫好的程式碼。

### 停止 (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

停止程式碼的運行。


<br>

## AI 程式設計 {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

按下頂部選單的 **AI 程式設計** 按鈕，畫面右側會開啟 AI 聊天機器人面板。  
可以和 RobomationLAB 內建的 **AI 聊天機器人** 對話，與 AI 一起程式設計。

可以使用下面這些功能。
- 可以自由地詢問關於程式設計的問題，例如程式碼的寫法和改法、語法、概念等。
- **程式碼運行中發生錯誤時**，可以詢問 AI 錯誤發生的原因和解決方法，快速解決問題。
- AI 給出的程式碼可以透過程式碼塊右側的複製按鈕輕松複製。
- 對話內容會儲存下來可以繼續對話，也可以開始 **新的對話**。
- 拖動面板的左邊緣可以調節面板的寬度。

<br>

## 複製程式碼 {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

可以把目前啟用的編輯器中所寫的程式碼複製到剪貼板。  

### Block Composer (積木程式設計) {#copy-block}

複製 **[Python 預覽](Preview#python-preview)** 分頁中顯示的 Python 程式碼。

### Script Composer (Python) {#copy-python}
原樣複製 Python 編輯器中所寫的程式碼。  

複製的程式碼可以用 Ctrl+V 貼上到想要的地方。

<br>

## 編輯器設定 {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

可以在 **積木程式設計** 和 **Python** 中選擇想要的編輯器來程式設計。  

即使更換編輯器，之前寫的程式碼也會原樣保留，隨時都可以繼續程式設計。 

**※ 積木程式設計編輯器和 Python 編輯器 1 對 1 對應，切換編輯器時所寫的程式碼會互相轉換並延續。**

### 積木程式設計編輯器 {#editor-settings-block}
選擇積木程式設計時，徽標會變成 **Block Composer**（積木編排器）。  
在積木程式設計編輯器中寫的積木會實時轉換為 Python 程式碼，可以在 **預覽 - Python 預覽** 分頁中確認轉換的結果。  

### Python 編輯器 {#editor-settings-python}
選擇 Python 時，徽標會變成 **Script Composer**（脚本編排器）。  
在 Python 編輯器中寫的程式碼，在重新切換到 **積木程式設計編輯器** 時會轉換為積木。  

> 不過，Python → 積木的轉換只對能用積木表示的程式碼進行。  
> 語法錯誤或無法轉換為積木的程式碼可能無法切換到積木程式設計編輯器，這時會一起顯示切換失敗的原因。

<br>

## 設定 {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

可以進行程式的基本設定。

### 語言 {#settings-language}
更改程式中顯示的語言（國別）。  
可以從全部 21 種語言中選擇想要使用的語言。

### 接收器 {#settings-dongle}
- 中斷連線: 中斷連線到程式的所有接收器。
- 連線: 重新把接收器連線到程式。

### 重設 {#settings-reset}
- 重設程式: 初始化程式中注冊的所有資料（機器人資訊、積木 / 脚本程式碼、設定等）。

<br>

## 支援 {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

可以查看使用程式所需的指南和外部資料。  

- 教學: 為初次使用程式的人提供教學。
- 說明: 可以在程式中直接查看積木和 Python 程式碼的使用方法和範例。
- 使用者指南: 跳轉到 RobomationLAB 使用者指南 Wiki 頁面。  
提供關於程式的構成要素和使用方法、各積木 / 脚本程式碼的功能和語法等的詳細說明。
- Robomation 實驗室: 跳轉到 RobomationLAB 主頁面。
- 首頁: 跳轉到 Robomation 公司的官方主頁。
- YouTube: 跳轉到 Robomation 的 YouTube 頁面。
- 網路商城: 跳轉到 Robomation 的網路商城頁面。
- 關於: 可以查看程式的版本和更新記錄、使用條款、隱私政策等。
- 聯絡我們: 可以咨詢使用程式時的疑問或 bug 等。

<br>
