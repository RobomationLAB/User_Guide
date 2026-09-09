---
title: 程式設計指南
---

# 程式設計指南

本文檔介紹 RobomationLAB（Robomation 實驗室）—— 由 Robomation 開發的「面向機器人動作流服務的執行引擎及集成創作環境」之一，一個用于機器人程式設計教育的平台。  

按下面的順序提供詳細說明：
- RobomationLAB 的主要特點
- RobomationLAB 的機器人程式設計方式
- RobomationLAB 的機器人程式設計基本語法體系  

<br>

## 目錄 {#table-of-contents}
1. [RobomationLAB 機器人程式設計教育平台](#platform)  
    1-1) [機器人程式設計程式](#coding-programs)  
    1-2) [積木 ↔ Python 實時雙向轉換](#block-python-conversion)  
    1-3) [程式設計程式的主要特點](#features)  
    1-4) [實時機器人控制方式](#control-method)  

2. [RobomationLAB 的機器人程式設計方式](#programming-method)  
    2-1) [順序執行與並行執行](#sequential-parallel)  
    2-2) [setup 函式](#setup)  
    2-3) [loop 函式](#loop)  

3. [RobomationLAB 的機器人程式設計基本語法體系](#grammar-syntax)  
    3-1) [導入 robomation 包](#import-package)  
    3-2) [建立機器人實例](#create-instance)  
    3-3) [機器人控制方法](#control-methods)  
    3-4) [讀取感測器和狀態](#sensor)  
    3-5) [偵測事件](#event)  
    3-6) [等待動作完成 (wait)](#wait)  
    3-7) [實用函式 (Utils)](#utils)   

<br><br>

## RobomationLAB 機器人程式設計教育平台 {#platform}
RobomationLAB 是一個為 **AI 機器人 SW 教育** 最佳化的平台，  
為面向小學生和初中生的機器人程式設計教育提供基于 Chrome 瀏覽器的集成創作環境。  

RobomationLAB 提供 **積木程式設計**、**脚本程式設計** 等多種方式的機器人程式設計教育程式。  
不僅可以學習程式設計的理論，還可以用 Robomation 的產品實際地移動和控制機器人，  
提供同時學習程式設計和機器人的機會。

<br>

### 機器人程式設計程式 {#coding-programs}

#### Block Composer (積木編排器) {#block-composer}
**Block Composer 是透過積木程式設計簡單快速地控制本公司機器人、學習機器人控制基礎的工具。**  

- 為實體計算最佳化的創作環境

- 采用積木的 Drag&Drop 方式，初學者也能輕松程式設計  
- 從基本概念開始，提供沒有語法錯誤的學習環境  
- 自動轉換為 Python 脚本程式碼  
- 為每種機器人提供帶有預設功能的積木面板和各種體驗範例
- 透過運行程式碼可以實時確認結果  
- 透過組合積木提升解決問題的能力和創造力  
- 透過基于 AI 的脚本程式碼分析提供最佳化的反饋  

<br>

#### Script Composer (脚本編排器) {#script-composer}
**Script Composer 是透過 Python 程式設計簡單快速地控制本公司機器人、學習 Python 語法和機器人程式設計基礎的工具。**  

- 提供 Python 編輯器

- 提供各語言的程式碼自動補全和程式碼插入功能
- 為每種機器人提供各種體驗範例程式碼
- 透過運行程式碼可以實時確認結果
- 透過基于 AI 的脚本程式碼分析提供最佳化的反饋

<br>

#### 程式設計程式的主要特點 {#features}
RobomationLAB 提供的機器人程式設計程式的主要特點如下。  
1.	基于 Chrome 瀏覽器，不受 OS（操作系統）的限制
2.	基于 Web Serial 通信，透過 USB 接收器直接控制機器人硬體
3.	支援多機器人同時控制 - 機器人的種類和數量不受限制
4.	儲存檔案時，成果物會轉換為 JSON 文字檔案儲存

<br>

### 實時機器人控制方式 {#control-method}
RobomationLAB 提供的機器人程式設計程式透過下面的過程實時控制機器人。  
1.	透過積木程式設計或脚本程式設計，
編寫設定用于控制機器人的 Effector, Command 對象的值，
或者利用機器人的 Sensor 值和 Event 發生的程式碼。
2.	運行程式碼。
3.	透過 Web Serial 通信從機器人接收包含 Sensor 和 Event 資料的資料包，
並反映到機器人的 Device 對象中。
4.	實時解釋程式碼，
覆寫 Effector, Command 對象的資料，或者讀取 Sensor, Event 對象的值。
5.	產生反映了機器人 Device 對象資料的資料包，
透過 Web Serial 通信發送到機器人，確認機器人是否實際動作。
6.	程式碼運行期間，每約 10 ~ 20ms 重複執行 3 ~ 5 的過程。  

<br>

### 積木 ↔ Python 實時雙向轉換 {#block-python-conversion}
RobomationLAB 同時提供積木程式設計編輯器和 Python 程式設計編輯器，兩個編輯器實時雙向同步。

- 在積木程式設計編輯器中新增、修改、刪除積木時，這些改動會實時反映到 Python 程式碼中。
- 反過來，在 Python 程式設計編輯器中修改程式碼時，這些改動會實時反映到積木中。

由于積木和 Python 程式碼 1 對 1 對應並雙向轉換，  
可以先用積木快速搭出整體結構再用 Python 打磨細節程式碼，或者對照積木學習 Python 語法，  
實現在積木程式設計和脚本程式設計之間往來的有機程式設計。

> 不過，Python → 積木的轉換只對能用積木表示的程式碼進行。  
> (語法錯誤或無法轉換為積木的程式碼可能無法切換。  
詳情請參閱 [程式設計規則](CodingRules) 文檔。)

<br>

<br><br>

## RobomationLAB 的機器人程式設計方式 {#programming-method}

### 順序執行與並行執行 {#sequential-parallel}
機器人程式設計的方式有順序執行方式和並行執行方式。  
順序執行是一個動作結束後再執行下一個動作的方式，適合編寫簡單的行為。  
例如，想讓機器人向前移動之後停下來點亮 LED，就需要能按順序排列各動作對應的程式碼並按時間順序執行，也就是需要順序執行方式。  

並行執行是同時執行多個動作的方式，編寫更複雜、更高級的行為時需要它。  
例如，想實現雙足機器人走路的動作，必須同時移動機器人的脚和腿才能行走，因此需要並行執行方式的程式設計。

RobomationLAB 提供的機器人程式設計程式，  
以類似 Arduino 硬體開發環境的 setup / loop 程式碼結構為基礎，同時支援順序執行方式和並行執行方式。

<BlockImage module="program/Editor" id="block-structure" />

首次開啟 Block Composer 時，工作空間中會顯示下面這樣兩個空的函式積木，  
「setup 函式」積木表示 `setup` 函式，「loop 函式」積木表示 `loop` 函式。  

積木會實時轉換為 Python 程式碼，  
程式碼具有下面這樣的基本結構。  

```python
# Python 程式碼的基本結構
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> 要控制機器人，需要在程式碼最上方放置 `from robomation import *`，並把要使用的機器人宣告為實例。(例: `hamster_s = HamsterS(0)`)


<br>

### setup 函式 {#setup}
setup 函式在「運行程式碼」的那一刻只執行一次。  
在 setup 函式中主要編寫初始化變數，或者初始化機器人的模式、功能等的程式碼。  
例如，控制靠輪子移動的機器人時，可以在 setup 函式中設定輪子的初始速度。  

如果函式中需要延時，使用 `Utils.wait(...)` 函式就可以編寫仿佛同步方式那樣按時間順序動作的程式碼。  
`Utils.wait(...)` 會等待指定的時間（秒）之後再執行下一段程式碼，因此會在既定的時間或動作之後醒來，繼續執行下一段程式碼。  
利用這個功能，不僅可以做簡單的順序執行，還可以與承擔並行執行的 loop 函式配合，實現強大的機器人程式設計。

下面是編寫 HamsterS 機器人前進 1 秒後後退 1 秒的程式碼的例子。  
如果在並行執行方式的 loop 函式中實現上面的動作，時間計算和控制程式碼會混在一起，程式碼變得非常複雜。  
相反，在 setup 函式中使用 `Utils.wait` 延時函式，就可以編寫仿佛同步方式那樣按時間順序動作的程式碼。  
( 關於 `Utils.wait` 函式，會在後面的 [實用函式 (Utils)](#utils) 中再次說明。 )

範例程式碼 (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # 把兩側的輪速度設為 50，向前移動
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 等待 1 秒
    # 把兩側的輪速度設為 -50，向後移動
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 等待 1 秒
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( 關於機器人實例和方法的語法，會在後面的 [RobomationLAB 的機器人程式設計基本語法體系](#grammar-syntax) 中再次說明。 )


<br>

### loop 函式 {#loop}
loop 函式支援並行執行，在程式碼運行期間每約 10ms 重複執行一次。  
在 loop 函式中主要編寫反複設定變數的值，或者偵測並處理機器人特定事件的程式碼。  

下面是編寫隨時間改變 HamsterS 機器人輪速度和 LED 顏色的程式碼的例子。  
( 在函式中修改 setup / loop 函式外宣告的變數時，要用 `global` 關鍵字宣告。 )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # 每次呼叫 loop 函式時，把 frame 變數的值加 1

    # 利用變化後的 frame 值，設定兩側的輪速度和兩側 LED 的 RGB 值
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( 關於機器人實例和方法的語法，會在後面的 [RobomationLAB 的機器人程式設計基本語法體系](#grammar-syntax) 中再次說明。 )  

下面是編寫輕敲 HamsterS 機器人機身發生 Tap 動作時，把 LED 點亮為紅色的程式碼的例子。  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # Tap 動作發生的那一刻，偵測到事件
    if hamster_s.tap():               # 偵測到事件時為 True
        hamster_s.set_led_color('both', 'red')   # 把兩側的 LED 點亮為紅色
    else:
        hamster_s.turn_off('both')               # 關閉兩側的 LED
```
( 關於偵測事件(`tap()`) 等語法，會在後面的 [RobomationLAB 的機器人程式設計基本語法體系](#grammar-syntax) 中再次說明。 )  

<br><br>

## RobomationLAB 的機器人程式設計基本語法體系 {#grammar-syntax}
在 RobomationLAB 提供的機器人程式設計程式中編寫程式碼時應遵守的基本語法體系如下。  
機器人的控制透過 `robomation` Python 包進行，  
先把機器人做成實例，然後以呼叫該實例方法的方式編寫程式碼。

### 導入 robomation 包 {#import-package}
要使用控制機器人所需的類（機器人）和實用工具(`Utils`)，需要在程式碼最上方包含下面這一行。

```python
from robomation import *
```

<br>

### 建立機器人實例 {#create-instance}
把要使用的機器人宣告為實例。  
類名表示機器人的種類，括號中的數字表示實例的索引（從 0 開始）。

```python
hamster_s = HamsterS(0)   # 1 台 HamsterS
```

各機器人的類名和預設變數名如下。

| 機器人 | 類名 | 預設變數名 |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

使用同一種機器人的多台時，把索引按 0, 1, 2 … 遞增來宣告。

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### 機器人控制方法 {#control-methods}
控制機器人時，呼叫實例的方法。  
方法執行機器人的動作，例如設定輪速度、移動、LED、聲音等。

```python
hamster_s.set_wheel_speed('both', 50)    # 設定兩側的輪速度
hamster_s.move_distance(10, 'cm')        # 向前移動 10cm
hamster_s.set_led_color('both', 'red')   # 把兩側的 LED 設為紅色
```

各機器人可用的方法清單和參數，請參閱各機器人的文檔（「HamsterS」等）。

<br>

### 讀取感測器和狀態 {#sensor}
讀取感測器的值或機器人的狀態時也呼叫方法，方法會回傳該值。

```python
left = hamster_s.floor('left')        # 讀取左側地面感測器的值
dist = hamster_s.proximity('right')   # 讀取右側接近感測器的值
```

<br>

### 偵測事件 {#event}
因狀態變化或環境變化而發生的事件，透過對應的事件方法  
在事件發生的那一刻回傳 True 的方式來偵測。

```python
if hamster_s.tap():        # 敲擊(Tap)事件發生的那一刻為 True
    hamster_s.set_led_color('both', 'red')
```

<br>

### 等待動作完成 (wait) {#wait}
像移動、旋轉、播放聲音那樣完成需要時間的方法，都有 `wait` 參數。
- `wait=True` (預設值): 等到動作完成後再執行下一段程式碼。
- `wait=False`: 開始動作後立即繼續執行下一段程式碼。

```python
hamster_s.move_distance(10, 'cm', wait=True)    # 等到移動結束
hamster_s.move_distance(10, 'cm', wait=False)   # 開始移動後立即執行下一段程式碼
```

<br>

### 實用函式 (Utils) {#utils}
延時、播放聲音、輸出記錄、顏色等與機器人種類無關的共通功能，透過 `Utils` 類的方法使用。

```python
Utils.wait(1)              # 等待 1 秒
Utils.speak('你好')         # 播放文字語音(TTS)
Utils.log(0, '', '')       # 輸出主控台記錄
```

<br>
