---
title: Piobot
---

# Piobot

## 宣告實例 {#instance}

把 Piobot(Pio) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
pio = Pio(0)
# 有多個實例時
pio_1 = Pio(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輪速度 {#set_wheel_speed}

設定輪速度。輪速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 輪速度 | -100 ~ 100 的整數, 0: 停止 | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## 移動指定距離 {#move_distance}

以目前的輪速度移動指定的距離。  
如果沒有設定輪速度，就以預設速度向前移動。  
距離值為 0 時，按目前的輪速度持續移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Pio" id="move_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動距離 | 0 以上的實數 | - |
| unit | 下拉選項 | 距離單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## 移動指定時間 {#move_time}

以目前的輪速度移動指定的時間。  
如果沒有設定輪速度，就以預設速度向前移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Pio" id="move_time" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動時間（秒） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## 原地轉動 {#turn_degree}

設定原地旋轉的方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/Pio" id="turn_degree" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左側(left), 右側(right) | - |
| data | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## 改變輪速度 {#change_speed}

改變 Piobot 的輪速度。  
在目前的輪速度上加上輸入的速度，得到新的輪速度。  
新設定的輪速度範圍會限制在 -100 ~ 100。

<BlockImage module="roboids/Pio" id="change_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## 開啟 / 關閉渦輪模式 {#turbo}

開啟或關閉 Piobot 的渦輪模式。

<BlockImage module="roboids/Pio" id="turbo" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 渦輪模式 ON / OFF | 開(on=True), 關(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## 停止 {#stop}

讓 Piobot 停止移動。  
Piobot 兩輪的速度都會初始化為 0。

<BlockImage module="roboids/Pio" id="stop" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.stop()
```

## 輪正在移動？ {#wheel_moving}

車輪正在移動時回傳 true，停止時回傳 false。

<BlockImage module="roboids/Pio" id="wheel_moving" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## 在板上移動一步 {#grid_move}

在板上按既定的方式一格一格地移動。

<BlockImage module="roboids/Pio" id="grid_move" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 移動方向 | 前進(forward), 後退(backward), 向左(left), 向右(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## 在板上轉向 {#grid_turn}

板上的 Piobot 按輸入的方向旋轉 90 度。總是等到完成為止（內部固定為 wait=True）。

<BlockImage module="roboids/Pio" id="grid_turn" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 旋轉方向 | 左側(left), 右側(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## 設定頸部速度 {#set_neck_speed}

設定頸部的旋轉速度。頸部速度的範圍是 1 ~ 6。

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 頸部旋轉速度 | 1 ~ 6 的整數 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## 設定頸部角度 {#set_neck_angle}

設定頸部旋轉後要到達的角度。頸部角度的範圍是 -45 ~ 45。

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 頸部角度（度） | -45 ~ 45 的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## 頸部正在移動？ {#neck_moving}

頸部正在移動時回傳 true，停止時回傳 false。

<BlockImage module="roboids/Pio" id="neck_moving" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## 設定眼睛顏色 {#set_eye_color}

設定 Piobot 的眼睛 LED 顏色。  
可以改變左眼、右眼或兩只眼睛的 LED 顏色。  
在顏色預設中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。(產生的程式碼使用顏色名稱，而不是 R, G, B 的數值。)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標眼睛 | 左眼(left), 右眼(right), 兩眼(both) | - |
| color | 下拉選項 | 顏色預設 → 轉換成顏色名稱（英文） | 黑色(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## 用顏色類別的積木設定眼睛顏色 {#set_eye_color_with_block}

用顏色類別中的積木設定 Piobot 的眼睛 LED 顏色。  
可以改變左眼、右眼或兩只眼睛的 LED 顏色。

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標眼睛 | 左眼(left), 右眼(right), 兩眼(both) | - |
| data | 輸入值（顏色） | [R, G, B] 陣列 | 顏色類別的積木或 `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## 按 RGB 改變眼睛顏色 {#change_by_rgb}

按指定的 R, G, B 值改變 Piobot 的眼睛 LED 顏色。  
可以設定左眼、右眼或兩只眼睛的顏色。

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標眼睛 | 左眼(left), 右眼(right), 兩眼(both) | - |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## 設定眼睛圖案 {#set_eye_pattern}

設定眼睛的圖案，並指定圖案開始時每只眼睛的顏色。

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| pattern | 下拉選項 | 圖案種類 | 關閉(reset), 閃爍(blink), 漸變(dimming), 彩虹(rainbow) | - |
| left | 下拉選項 | 左眼顏色 | 預設(black), 紅色(red), 黃色(yellow), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 白色(white) | white |
| right | 下拉選項 | 右眼顏色 | （與 left 相同） | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## 關閉眼睛 {#turn_off}

消除眼睛的顏色。

<BlockImage module="roboids/Pio" id="turn_off" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標眼睛 | 左眼(left), 右眼(right), 兩眼(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## 設定蜂鳴聲 {#sound_buzz}

以指定的頻率設定 Piobot 的蜂鳴器聲音。  
可以發聲的頻率範圍是 27.5hz ~ 6553.5hz。  
輸入其他值時不會發出蜂鳴聲。

<BlockImage module="roboids/Pio" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 27.5 ~ 6553.5 的實數 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## 播放音符 {#sound_note}

Piobot 播放指定的音符。

<BlockImage module="roboids/Pio" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#/Re♭(C#), Re(D), Re#/Mi♭(D#), Mi(E), Fa(F), Fa#/Sol♭(F#), Sol(G), Sol#/La♭(G#), La(A), La#/Si♭(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## 播放音效片段 {#sound_clip}

Piobot 播放特定的音效片段。  
勾選等待後，會一直等到播放完成。

<BlockImage module="roboids/Pio" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## 播放旋律 {#sound_melody}

Piobot 播放特定的旋律。  
勾選等待後，會一直等到播放完成。

<BlockImage module="roboids/Pio" id="sound_melody" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| melody | 下拉選項 | 旋律名稱 | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 Piobot 的聲音。

<BlockImage module="roboids/Pio" id="sound_off" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## 聲音正在播放？ {#sound_playing}

聲音正在播放時回傳 true，沒有播放時回傳 false。

<BlockImage module="roboids/Pio" id="sound_playing" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## 車輪速度值 {#wheel_speed}

特定車輪的速度

<BlockImage module="roboids/Pio" id="wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左側(left), 右側(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/Pio" id="signal_strength" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/Pio" id="battery" />

### 參數

（無）

### Python
```python
pio = Pio(0)

pio.battery()
```

## 按下的按鈕 {#keypad}

偵測使用者最後按下的鍵盤按鈕。

<BlockImage module="roboids/Pio" id="keypad" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| button | 下拉選項 | 要偵測的按鈕 | 運行(play), 向前移動(forward), 向後移動(backward), 向左移動(left), 向右移動(right), 動作(action), 重複(repeat), 清除(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
