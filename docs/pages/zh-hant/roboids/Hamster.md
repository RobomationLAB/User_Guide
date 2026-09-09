---
title: Hamster
---

# Hamster

## 宣告實例 {#instance}

把 Hamster 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
hamster = Hamster(0)
# 有多個實例時
hamster_1 = Hamster(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輪速度 {#set_wheel_speed}

決定輪速度。速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左(left), 右(right), 兩側(both) | - |
| speed | 輸入值（積木） | 輪速度 | -100 ~ 100 的整數, 0: 停止 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## 移動指定時間 {#move_time}

以目前的輪速度移動指定的時間。  
如果沒有設定輪速度，就以預設速度向前移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Hamster" id="move_time" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動時間（秒） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## 改變輪速度 {#change_speed}

改變 Hamster 的輪速度。  
在目前的輪速度上加上輸入的速度，得到新的輪速度。  
新設定的輪速度範圍會限制在 -100 ~ 100。

<BlockImage module="roboids/Hamster" id="change_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左(left), 右(right), 兩側(both) | - |
| speed | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## 停止 {#stop}

讓 Hamster 停止移動。  
Hamster 兩側的輪速度都會初始化為 0。

<BlockImage module="roboids/Hamster" id="stop" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## 在棋盤上向前移動一步 {#grid_move}

在棋盤上按既定的方式一格一格地移動。

<BlockImage module="roboids/Hamster" id="grid_move" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## 在棋盤上轉向 {#grid_turn}

在棋盤上向指定的方向旋轉 90 度。

<BlockImage module="roboids/Hamster" id="grid_turn" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## 用感測器循跡 {#trace_mode}

Hamster 使用地面感測器沿着特定顏色的線行進。

<BlockImage module="roboids/Hamster" id="trace_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| floor | 下拉選項 | 用來循跡的地面感測器 | 左(left), 右(right), 中間(center) | - |
| line | 下拉選項 | 線的顏色 | 黑色(black), 白色(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## 循跡至下一個交叉點 {#trace_until_grid}

Hamster 在交叉點按指定的方向移動後，一直行進到遇到下一個交叉點。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 在交叉點的移動方向 | 左轉(left), 右轉(right), 前進(forward), 迴轉(uturn) | - |
| line | 下拉選項 | 線的顏色 | 黑色(black), 白色(white) | black |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## 設定循跡速度 {#set_trace_speed}

設定循跡的速度。速度的範圍是 1 ~ 10。

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 循跡速度 | 1 ~ 10 的整數 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## 停止循跡 {#stop_trace}

結束 Hamster 的循跡功能。

<BlockImage module="roboids/Hamster" id="stop_trace" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## 設定 LED 顏色 {#set_led_color}

設定 LED 的顏色。

<BlockImage module="roboids/Hamster" id="set_led_color" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | - |
| color | 下拉選項 | 顏色 | 黑色(black), 藍色(blue), 綠色(green), 青色(cyan), 紅色(red), 洋紅色(magenta), 黃色(yellow), 白色(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## 關閉 LED {#turn_off}

消除 LED 的顏色。

<BlockImage module="roboids/Hamster" id="turn_off" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標 LED | 左(left), 右(right), 兩側(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## 設定蜂鳴聲 {#sound_buzz}

以指定的頻率設定 Hamster 的蜂鳴器聲音。  
可以發聲的頻率範圍是 1.0hz ~ 6553.5hz。  
輸入其他值時不會發出蜂鳴聲。

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 0 ~ 6553.5 的實數 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## 播放音符 {#sound_note}

Hamster 播放指定的音符。

<BlockImage module="roboids/Hamster" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## 關閉聲音 {#sound_off}

關閉 Hamster 的聲音。

<BlockImage module="roboids/Hamster" id="sound_off" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## 輪速度值 {#wheel_speed}

特定車輪的速度

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## 接近感測器值 {#proximity}

特定接近感測器的值

<BlockImage module="roboids/Hamster" id="proximity" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的感測器位置 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## 地面感測器值 {#floor}

特定地面感測器的值

<BlockImage module="roboids/Hamster" id="floor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的感測器位置 | 左(left), 右(right), 中間(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## 軸加速度值 {#acceleration}

特定軸的重力加速度值

<BlockImage module="roboids/Hamster" id="acceleration" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## 亮度感測器值 {#light}

亮度感測器值

<BlockImage module="roboids/Hamster" id="light" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## 溫度感測器值 {#temperature}

溫度感測器值

<BlockImage module="roboids/Hamster" id="temperature" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/Hamster" id="signal_strength" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/Hamster" id="battery" />

### 參數

（無）

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## 狀態是否改變 {#state_change}

機器人的狀態是否發生了改變

<BlockImage module="roboids/Hamster" id="state_change" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 狀態種類 | 0 ~ 6（參見下表） | - |

| unit | 條件 |
|------|------|
| 0 | `acceleration('x') > 5000` |
| 1 | `acceleration('x') < -5000` |
| 2 | `acceleration('y') > 5000` |
| 3 | `acceleration('y') < -5000` |
| 4 | `acceleration('z') > 0` |
| 5 | `acceleration('z') < -3000` |
| 6 | `proximity('left') > 50 or proximity('right') > 50` |

### Python
```python
hamster = Hamster(0)

# unit = 0
hamster.acceleration('x') > 5000
# unit = 6
hamster.proximity('left') > 50 or hamster.proximity('right') > 50
```

## 設定連接埠的輸入模式 {#io_mode}

設定 IO 連接埠的輸入模式。

<BlockImage module="roboids/Hamster" id="io_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| option | 下拉選項 | 輸入輸出模式 | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## 設定連接埠的輸出值 {#set_output}

設定指定 IO 連接埠的輸出值。

<BlockImage module="roboids/Hamster" id="set_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| data | 輸入值（積木） | 輸出值 | 0 ~ 180 的整數 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## 改變連接埠的輸出值 {#change_output}

改變指定 IO 連接埠的輸出值。

<BlockImage module="roboids/Hamster" id="change_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b, 兩側(both) | - |
| data | 輸入值（積木） | 要改變的輸出值差 | 整數 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## 開啟 / 關閉夾爪 {#gripper}

開啟或關閉 Hamster 的夾爪。  
根據 unit 的值呼叫兩個方法中的一個。

<BlockImage module="roboids/Hamster" id="gripper" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 關閉(close), 開啟(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## 設定發射器角度 {#shooter}

透過設定發射器的角度來控制它。角度的範圍是 0 ~ 180。

<BlockImage module="roboids/Hamster" id="shooter" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 發射器角度 | 0 ~ 180 的整數 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## 連接埠的輸入值 {#input}

回傳 Hamster 輸入輸出連接埠的輸入值。

<BlockImage module="roboids/Hamster" id="input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入輸出連接埠 | a, b | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
