---
title: Turtle
---

# Turtle

## 宣告實例 {#instance}

把 Turtle 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
turtle = Turtle(0)
# 有多個實例時
turtle_1 = Turtle(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輪速度 {#set_wheel_speed}

決定輪速度。速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 輪速度 | -100 ~ 100 的整數, 0: 停止 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## 移動指定距離 {#move_distance}

設定要移動的距離。  
如果沒有設定輪速度，就不會移動。  
距離值為 0 時，按目前的輪速度持續移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Turtle" id="move_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動距離 | 0 以上的實數 | - |
| unit | 下拉選項 | 距離單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## 移動指定時間 {#move_time}

以目前的輪速度移動指定的時間。  
如果沒有設定輪速度，就以預設速度向前移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Turtle" id="move_time" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動時間（秒） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## 原地轉動 {#turn_degree}

設定原地旋轉的方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/Turtle" id="turn_degree" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左側(left), 右側(right) | - |
| data | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## 改變輪速度 {#change_speed}

改變 Turtle 的輪速度。  
在目前的輪速度上加上輸入的速度，得到新的輪速度。

<BlockImage module="roboids/Turtle" id="change_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## 停止 {#stop}

讓 Turtle 停止移動。

<BlockImage module="roboids/Turtle" id="stop" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## 車輪正在轉動？ {#wheel_moving}

車輪正在轉動時回傳 true，停止時回傳 false。

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## 以車輪為軸旋轉 {#pivot}

設定旋轉的軸、方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/Turtle" id="pivot" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| base | 下拉選項 | 作為旋轉軸的車輪 | 左輪(left_wheel), 右輪(right_wheel) | - |
| direction | 下拉選項 | 旋轉方向 | 前進(forward), 後退(backward) | - |
| data | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## 畫圓弧 {#pivot_circle}

用筆畫圓時，設定旋轉的方向、半徑和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左前方(left_forward), 左後方(left_backward), 右前方(right_forward), 右後方(right_backward) | - |
| degree | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| radius | 輸入值（積木） | 旋轉半徑 | 0 以上的實數 | - |
| unit | 下拉選項 | 半徑單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## 沿線巡線 {#trace_line}

使用底部的顏色感測器，沿着特定顏色的線移動。

<BlockImage module="roboids/Turtle" id="trace_line" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| line | 下拉選項 | 要沿着的線的顏色 | 黑色(black), 紅色(red), 綠色(green), 藍色(blue), 所有顏色(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## 巡線直到特定顏色 {#trace_line_until_color}

使用底部的顏色感測器，沿着 A 顏色的線移動，直到遇到 B 顏色。

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| line | 下拉選項 | 要沿着的線的顏色 | 黑色(black), 紅色(red), 綠色(green), 藍色(blue), 所有顏色(any) | - |
| color | 下拉選項 | 停止的顏色 | 黑色(black), 紅色(red), 綠色(green), 青色(cyan), 藍色(blue), 洋紅色(magenta), 所有顏色(any) | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## 在交叉點行駛 {#intersection}

Turtle 在交叉點按指定的方向移動後，一直行進到遇到下一個交叉點。  
勾選等待後，會一直等到移動完成。  

<BlockImage module="roboids/Turtle" id="intersection" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 在交叉點的移動方向 | 向前行駛(forward), 左側(left), 右側(right), 迴轉(uturn) | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## 設定巡線速度 {#set_trace_speed}

設定巡線的速度。速度的範圍是 1 ~ 10。

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 巡線速度 | 1 ~ 10 的整數 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## 設定巡線增益 {#set_trace_gain}

設定巡線的方向變化量。變化量的範圍是 1 ~ 10。

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 方向變化量 | 1 ~ 10 的整數 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## 停止巡線 {#stop_trace}

結束 Turtle 的巡線功能。

<BlockImage module="roboids/Turtle" id="stop_trace" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## 設定頭部 LED 顏色 {#set_led_color}

設定 Turtle 頭部 LED 的顏色。  
在調色盤中選擇顏色後，會轉換成 **顏色名稱**（英文字串）來呼叫。(產生的程式碼使用顏色名稱，而不是 R, G, B 的數值。)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 顏色 | 調色盤選擇 → 轉換成顏色名稱（英文） | 顏色名稱: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## 用顏色類別的積木設定 LED 顏色 {#set_led_color_with_block}

接受顏色類別積木的輸出 (`[R, G, B]`) 作為輸入來設定頭部 LED 的顏色。

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（顏色） | 顏色類別的積木或 `[R, G, B]` 陣列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## 按 RGB 改變 LED 顏色 {#change_by_rgb}

在目前頭部 LED 顏色上加上輸入的 R, G, B 變化量，設定新的顏色。

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| r | 輸入值（欄位） | 紅的變化量 | -255 ~ 255 的整數 | 0 |
| g | 輸入值（欄位） | 綠的變化量 | -255 ~ 255 的整數 | 0 |
| b | 輸入值（欄位） | 藍的變化量 | -255 ~ 255 的整數 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## 關閉頭部 LED {#turn_off}

消除頭部 LED 的顏色。

<BlockImage module="roboids/Turtle" id="turn_off" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## 設定蜂鳴聲 {#sound_buzz}

以指定的頻率設定 Turtle 的蜂鳴器聲音。

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 0 ~ 6553.5 的實數 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## 播放音符 {#sound_note}

Turtle 播放指定的音符。

<BlockImage module="roboids/Turtle" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

Turtle 播放特定的音效片段。

<BlockImage module="roboids/Turtle" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 Turtle 的聲音。

<BlockImage module="roboids/Turtle" id="sound_off" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## 正在播放聲音？ {#sound_playing}

聲音正在播放時回傳 true，沒有播放時回傳 false。

<BlockImage module="roboids/Turtle" id="sound_playing" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## 車輪速度值 {#wheel_speed}

特定車輪的速度

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左側(left), 右側(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## 地面顏色感測器值 {#floor}

底部顏色感測器的值

<BlockImage module="roboids/Turtle" id="floor" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## 卡片顏色值 {#card_color}

透過底部的顏色感測器讀到的卡片顏色的 **名稱**

<BlockImage module="roboids/Turtle" id="card_color" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## 卡片顏色圖案值 {#card_pattern}

透過底部的顏色感測器讀到的卡片顏色的圖案

<BlockImage module="roboids/Turtle" id="card_pattern" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## 軸加速度值 {#acceleration}

特定軸的重力加速度值

<BlockImage module="roboids/Turtle" id="acceleration" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## 溫度感測器值 {#temperature}

溫度感測器值

<BlockImage module="roboids/Turtle" id="temperature" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/Turtle" id="signal_strength" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/Turtle" id="battery" />

### 參數

（無）

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## 碰到特定顏色？ {#color_read}

透過 Turtle 的顏色感測器測量是否碰到了指定的顏色，回傳 **true(True) / false(False)**。

<BlockImage module="roboids/Turtle" id="color_read" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| color | 下拉選項 | 顏色名稱 | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## 卡片圖案是 ~ ？ {#pattern_read}

回傳顏色感測器識別到的卡片顏色圖案是否匹配，結果為 **true(True) / false(False)**。

<BlockImage module="roboids/Turtle" id="pattern_read" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| pattern | 下拉選項 | 卡片圖案名稱 | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## 背部按鈕狀態 {#button}

背部的按鈕是否被按下或點擊

<BlockImage module="roboids/Turtle" id="button" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| event | 下拉選項 | 按鈕狀態種類 | 按下(pressed), 點擊(click), 長按(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## 狀態是否改變 {#state_change}

機器人的狀態是否發生了改變

<BlockImage module="roboids/Turtle" id="state_change" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 狀態種類 | 0 ~ 5（參見下表） | - |

| unit | 條件 |
|------|------|
| 0 | `acceleration('x') > 50` |
| 1 | `acceleration('x') < -50` |
| 2 | `acceleration('y') > 50` |
| 3 | `acceleration('y') < -50` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -30` |

### Python
```python
turtle = Turtle(0)

# unit = 0
turtle.acceleration('x') > 50
```
