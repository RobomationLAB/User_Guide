---
title: 編輯器
---

# 編輯器

**編輯器** 是可以用 **積木** 或 **脚本程式碼** 編寫控制機器人程式碼的區域。  
下面介紹在 **積木程式設計 / 脚本(Python)程式設計** 環境中各自的程式設計方法和需要注意的地方。

## 積木程式設計編輯器 {#block-editor}

### 積木類別 {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

這是把 RobomationLAB 提供的積木按 **類別** 分類的區域。  
點擊類別，就可以看到各個類別對應的 **積木面板**。  

下面是預設提供的積木類別的種類。  

- 邏輯
- 迴圈
- 數學
- 文字
- 清單
- 顏色
- 音訊
- 控制
- 變數
- 函式
- 其他

除此之外，把 [**機器人**](Menu#robot) 或 [**擴展模組**](Menu#extension) 新增到程式後，就可以在程式中使用專用的積木面板。  

<br>

**⚙️ 參考**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

新增到程式的積木中不再使用的類別，可以透過 **滑鼠右鍵 → 移除** 從積木類別中去掉。

<br>

### 積木面板 {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

這是匯集了各個類別所有積木的區域。  
積木面板中的積木可以用 **Drag&Drop** 的方式移到程式設計區域。  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ 參考**  
想確認積木的使用方法時，可以透過 **滑鼠右鍵 → 說明** 查看說明每個積木使用方法的說明。  

<br>

### 程式設計區域 {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

這是可以組裝從積木面板取來的積木的區域。  


組裝好的積木會實時轉換為 **Python 程式碼**，  
運行程式碼時，會解釋這些程式碼來移動和控制機器人。  

<br>

### 積木的基本結構 {#block-structure}

在積木程式設計編輯器中程式設計時，必須遵守下面這樣的基本結構。

<BlockImage module="program/Editor" id="block-structure" /><br>

積木程式設計編輯器會解釋並運行 **setup 函式** 和 **loop 函式** 這兩個函式積木內部的程式碼。  
因此，必須把積木放進 **setup 函式** 和 **loop 函式** 的函式積木內部來編寫程式碼。  

**setup 函式**  
在 setup 函式積木內部定義程式碼運行時最先要做的動作。  
可以利用 **等待** 積木，讓動作按時間順序執行。  

**loop 函式**  
在 loop 函式積木內部定義程式碼運行期間要反複執行的動作。  
所定義的動作每 10ms 重複執行一次。  

**⚙️ 參考**  
(除了透過 **函式類別** 建立的自定義函式以外)  
放在 **setup 函式** 或 **loop 函式** 的函式積木外部的積木，在程式碼運行時不會產生任何影響。  

<br>

### 積木的使用方法 {#block-usage}

**新增積木**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

把想新增的積木 **從積木面板拖動** 並 **放到編輯器中**，就可以新增該積木。   
<br>

**積木的複製 / 貼上**  

在編輯器中複製 / 貼上積木的方法一共有 2 種。  

1. 選中積木後按 **Ctrl+C** 鍵，就可以 **複製** 所選的積木。  
按 **Ctrl+V** 鍵，就可以把最後複製的積木 **貼上** 到編輯器中。  

2. 選中積木後在 **編輯** 選單中按 **「複製 Ctrl+C」** 按鈕，就可以 **複製** 所選的積木。  
在 **編輯** 選單中按 **「貼上 Ctrl+V」** 按鈕，就可以把最後複製的積木 **貼上** 到編輯器中。

<br>

**刪除積木**  

在編輯器中刪除積木的方法一共有 3 種。

1. 選中積木後按 **Backspace** 鍵，就可以刪除所選的積木。<br>  

2. 把想刪除的積木 **在編輯器中拖動** 並 **放到積木類別上**，就可以刪除該積木。  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. 把想刪除的積木 **在編輯器中拖動** 並 **放到垃圾桶上**，就可以刪除該積木。  
刪除的積木可以在 **垃圾桶** 中再次查看。<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**同時選中多個積木**  

在編輯器中同時選中多個積木的方法一共有 2 種。

1. 按住 **Shift** 鍵拖動工作區，或者一個一個地點擊積木，  
就可以同時選中多個積木。  

2. 點擊工作區右下角的 **勾選按鈕**，可以開啟或關閉「多積木選擇」模式。  
按鈕填充了顏色，表示模式處于開啟狀態。  
按鈕沒有填充顏色，表示模式處于關閉狀態。  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

「多積木選擇」模式開啟期間，只能做選擇積木的操作。   
要同時移動或編輯所選的多個積木，必須在完成積木選擇後關閉該模式。  

<br>

**附加選項**

除此之外，**用滑鼠右鍵點擊** 積木，  
可以看到 **積木的折疊 / 展開、啟用 / 禁用、說明** 等各種附加選項。  

<br>

## Python 編輯器 {#python-editor}

### 程式碼面板 {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

這是把機器人程式設計所需的 **基本函式** 和機器人 / 擴展模組專用的 **Python 程式碼** 按 **類別** 分類的區域。  


下面是基本函式（程式碼）中提供的程式碼類別的種類。  

- 邏輯 (logic)
- 迴圈 (loops)
- 數學 (math)
- 文字 (text)
- 清單 (lists)
- 顏色 (color)
- 音訊 (audio)
- 控制 (control)

基本函式中提供的程式碼，與積木程式設計編輯器的基本積木起完全相同的作用。  

<br>

**⚙️ 參考**  
利用程式碼面板在 Python 編輯器中程式設計的方法，可以在 [**程式碼面板的使用方法**](#python-codes-usage) 中查看。

<br>

### 程式碼編輯器 {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

這是可以編寫控制機器人程式碼的區域。  


在 [**編輯器設定**](Menu#editor-settings) 中選擇 **Python** 編輯器後，就可以編寫 Python 程式碼。

<br>

### 程式碼的基本結構 {#python-structure}

在程式碼編輯器中程式設計時，必須遵守下面這樣的基本結構。

```python
from robomation import *

# (如果有要使用的機器人，就宣告為實例，範例)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

程式碼編輯器會解釋並運行 **setup** 函式和 **loop** 函式內部的程式碼。  
因此，必須在 **setup** 函式和 **loop** 函式內部編寫程式碼。  
另外，要控制機器人，需要在程式碼最上方放置 `from robomation import *`，並把要使用的機器人宣告為實例。

**setup**  

在 setup 函式內部定義程式碼運行時最先要做的動作。  
可以利用 **Utils.wait** 函式，讓動作按時間順序執行。  

**loop**  
在 loop 函式內部定義程式碼運行期間要反複執行的動作。  
所定義的動作每 10ms 重複執行一次。  


<br>

### 程式碼面板的使用方法 {#python-codes-usage}

下面結合簡單的例子說明 **在程式設計中利用程式碼面板的方法**。  

### 查找想要的程式碼 {#python-codes-find}

程式碼面板提供機器人程式設計所需的各種函式和程式碼。  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

查看 **程式碼** 類別中的選單，可以看到帶有 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 圖標的選單。  

點擊一次 **邏輯** 選單，圖標會變成 <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline />，可以展開查看里面的 **下層選單**。  
這樣帶有下層選單的選單叫做「**類別**」。  

像 **邏輯** 類別中的 **三元運算** 那樣，選單上沒有 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 圖標，就意味着選單里 **沒有下層選單** 了。  
這樣不帶下層選單的選單叫做「**程式碼**」。  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

再次點擊已展開下層選單的類別，圖標會重新變成 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />，下層選單會隱藏起來。  

用上面這樣的方法沿着類別往下找，就可以在程式碼面板中找到想要的程式碼。

<br>

### 把程式碼插入編輯器 {#python-codes-insert}

把程式碼插入編輯器的方法如下。  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

選單名左側帶有 <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> 圖標的選單，意味着沒有可選的 **程式碼選項**。  
帶有下層選單的 **類別** 選單大多屬于這一類。

選單名左側帶有 <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> 圖標的選單，意味着可以選擇 **程式碼選項**。  
不帶下層選單的 **程式碼** 選單大多屬于這一類。

用滑鼠 **右鍵點擊** 想插入編輯器的程式碼，就可以看到可選的選項。  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

右鍵點擊 **程式碼** 選單時，不論是基本函式還是機器人 / 擴展模組專用的程式碼，都可以看到下面這些相同的選項。

- **插入程式碼**: 把所選的程式碼插入編輯器的光標位置。
- **說明**: 查看說明該程式碼使用方法的說明。
- **取消**: 關閉選項選單。

對于機器人 / 擴展模組專用的程式碼，選擇 **插入程式碼** 後，會以呼叫該機器人實例方法的形式插入。  
( 例. HamsterS 的 `set_wheel_speed` → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ 參考**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

新增到程式的機器人 / 擴展模組專用程式碼中不再使用的程式碼類別，  
可以透過 **滑鼠右鍵 → 移除** 從程式碼面板中去掉。

<br>
