---
title: HamsterS
---

# HamsterS

## 宣告實例 {#instance}

把 HamsterS 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
hamster_s = HamsterS(0)
# 有多個實例時
hamster_s_1 = HamsterS(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輪速度 {#set_wheel_speed}

決定輪速度。速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左(left), 右(right), 兩側(both) | - |
| speed | 輸入值（積木） | 輪速度 | -100 ~ 100 的整數, 0: 停止 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## 移動指定距離 {#move_distance}

以目前的輪速度移動指定的距離。  
如果沒有設定輪速度，就以預設速度向前移動。  
距離值為 0 時，按目前的輪速度持續移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/HamsterS" id="move_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動距離 | 0 以上的實數 | - |
| unit | 下拉選項 | 距離單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## 移動指定時間 {#move_time}

以目前的輪速度移動指定的時間。  
如果沒有設定輪速度，就以預設速度向前移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/HamsterS" id="move_time" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動時間（秒） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## 原地轉動 {#turn_degree}

設定原地旋轉的方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左(left), 右(right) | - |
| data | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## 改變輪速度 {#change_speed}

改變 HamsterS 的輪速度。  
在目前的輪速度上加上輸入的速度，得到新的輪速度。

<BlockImage module="roboids/HamsterS" id="change_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左(left), 右(right), 兩側(both) | - |
| speed | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## 停止 {#stop}

讓 HamsterS 停止移動。

<BlockImage module="roboids/HamsterS" id="stop" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## 車輪正在轉動？ {#wheel_moving}

車輪正在轉動時回傳 true，停止時回傳 false。

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## 在板上向前移動一步 {#grid_move}

在板上按既定的方式一格一格地移動。

<BlockImage module="roboids/HamsterS" id="grid_move" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## 在板上轉向 {#grid_turn}

在板上向指定的方向旋轉 90 度。

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## 以筆架為中心旋轉 {#pivot}

使用筆架時，設定旋轉的中心、方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/HamsterS" id="pivot" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| base | 下拉選項 | 旋轉中心 | 左筆(left_pen), 右筆(right_pen), 左輪(left_wheel), 右輪(right_wheel) | - |
| direction | 下拉選項 | 旋轉方向 | 前進(forward), 後退(backward) | - |
| degree | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## 以筆架為圓心畫圓 {#pivot_circle}

使用筆架畫圓時，設定旋轉的圓心、方向、半徑和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| base | 下拉選項 | 旋轉圓心 | 左筆(left_pen), 右筆(right_pen) | - |
| direction | 下拉選項 | 旋轉方向 | 左前方(left_forward), 左後方(left_backward), 右前方(right_forward), 右後方(right_backward) | - |
| degree | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| radius | 輸入值（積木） | 旋轉半徑 | 0 以上的實數 | - |
| unit | 下拉選項 | 半徑單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## 用感測器循跡 {#trace_mode}

HamsterS 使用地面感測器沿着特定顏色的線行進。

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| floor | 下拉選項 | 用來循跡的地面感測器 | 左(left), 右(right), 中間(center) | - |
| line | 下拉選項 | 線的顏色 | 黑色(black), 白色(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## 循跡至下一個交叉點 {#trace_until_grid}

HamsterS 在交叉點按指定的方向移動後，一直行進到遇到下一個交叉點。  
勾選等待後，會一直等到移動完成。  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 在交叉點的移動方向 | 左轉(left), 右轉(right), 前進(forward), 迴轉(uturn) | - |
| line | 下拉選項 | 線的顏色 | 黑色(black), 白色(white) | black |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## 設定循跡速度 {#set_trace_speed}

設定循跡的速度。速度的範圍是 1 ~ 10。

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 循跡速度 | 1 ~ 10 的整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## 設定循跡增益 {#set_trace_gain}

設定循跡的方向變化量。變化量的範圍是 1 ~ 10。

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 方向變化量 | 1 ~ 10 的整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## 停止循跡 {#stop_trace}

結束 HamsterS 的循跡功能。

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## 設定 LED 顏色 {#set_led_color}

設定 HamsterS 的 LED 顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。(產生的程式碼使用顏色名稱，而不是 R, G, B 的數值。)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | - |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## 用顏色類別的積木設定 LED 顏色 {#set_led_color_with_block}

接受顏色類別的積木 (`[R, G, B]`) 作為輸入來設定 LED 顏色。

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | - |
| data | 輸入值（顏色） | 顏色類別的積木或 `[R, G, B]` 陣列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## 按 RGB 改變 LED 顏色 {#change_by_rgb}

按指定的 R, G, B 值改變 HamsterS 的 LED 顏色。

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | - |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## 關閉 LED {#turn_off}

消除 LED 的顏色。

<BlockImage module="roboids/HamsterS" id="turn_off" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## 設定蜂鳴聲 {#sound_buzz}

以指定的頻率設定 HamsterS 的蜂鳴器聲音。  
可以發聲的頻率範圍是 122.1hz ~ 4186.0hz。  
輸入其他值時不會發出蜂鳴聲。

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 122.1 ~ 4186.0 的實數（其他為 0） | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## 播放音符 {#sound_note}

HamsterS 播放指定的音符。

<BlockImage module="roboids/HamsterS" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

HamsterS 播放特定的音效片段。  
勾選等待後，會一直等到播放完成。

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 HamsterS 的聲音。

<BlockImage module="roboids/HamsterS" id="sound_off" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## 正在播放聲音？ {#sound_playing}

聲音正在播放時回傳 true，沒有播放時回傳 false。

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## 車輪速度值 {#wheel_speed}

特定車輪的速度

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## 接近感測器值 {#proximity}

特定接近感測器的值

<BlockImage module="roboids/HamsterS" id="proximity" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的感測器位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## 地面感測器值 {#floor}

特定地面感測器的值

<BlockImage module="roboids/HamsterS" id="floor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的感測器位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## 重力加速度值 {#acceleration}

特定軸的重力加速度值

<BlockImage module="roboids/HamsterS" id="acceleration" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## 亮度感測器值 {#light}

亮度感測器值

<BlockImage module="roboids/HamsterS" id="light" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## 溫度感測器值 {#temperature}

溫度感測器值

<BlockImage module="roboids/HamsterS" id="temperature" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/HamsterS" id="battery" />

### 參數

（無）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## 狀態是否改變 {#state_change}

機器人的狀態是否發生了改變

<BlockImage module="roboids/HamsterS" id="state_change" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 狀態種類 | 0 ~ 7（參見下表） | - |

| unit | 含義 | Python |
|------|------|--------|
| 0 | 向前傾斜 | `acceleration('x') > 5000` |
| 1 | 向後傾斜 | `acceleration('x') < -5000` |
| 2 | 向左傾斜 | `acceleration('y') > 5000` |
| 3 | 向右傾斜 | `acceleration('y') < -5000` |
| 4 | 倒過來翻轉 | `acceleration('z') > 0` |
| 5 | 沒有翻轉 | `acceleration('z') < -3000` |
| 6 | 偵測到障礙物 / 手 | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | 敲擊 | `tap()` |

### Python
```python
hamster_s = HamsterS(0)

# unit = 0
hamster_s.acceleration('x') > 5000
# unit = 6
hamster_s.proximity('left') > 50 or hamster_s.proximity('right') > 50
# unit = 7
hamster_s.tap()
```

## 設定連接埠的輸入模式 {#io_mode}

設定 IO 連接埠的輸入模式。

<BlockImage module="roboids/HamsterS" id="io_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| option | 下拉選項 | 輸入輸出模式 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## 設定連接埠的輸出值 {#set_output}

設定指定 IO 連接埠的輸出值。

<BlockImage module="roboids/HamsterS" id="set_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| data | 輸入值（積木） | 輸出值 | 0 ~ 180 的整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## 改變連接埠的輸出值 {#change_output}

改變指定 IO 連接埠的輸出值。

<BlockImage module="roboids/HamsterS" id="change_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| data | 輸入值（積木） | 要改變的輸出值差 | 整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## 開啟 / 關閉夾爪 {#gripper}

開啟或關閉 HamsterS 的夾爪。  
根據 unit 的值呼叫兩個方法中的一個。

<BlockImage module="roboids/HamsterS" id="gripper" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 開啟(open), 關閉(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## 設定發射器角度 {#shooter}

透過設定發射器的角度來控制它。角度的範圍是 0 ~ 180。

<BlockImage module="roboids/HamsterS" id="shooter" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 發射器角度 | 0 ~ 180 的整數 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## 連接埠的輸入值 {#input}

回傳 HamsterS 輸入輸出連接埠的輸入值。

<BlockImage module="roboids/HamsterS" id="input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
