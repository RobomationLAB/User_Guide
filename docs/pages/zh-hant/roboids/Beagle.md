---
title: Beagle
---

# Beagle

## 宣告實例 {#instance}

把 Beagle 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
beagle = Beagle(0)
# 有多個實例時
beagle_1 = Beagle(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輪速度 {#set_wheel_speed}

決定輪速度。速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 輪速度 | -100 ~ 100 的整數, 0: 停止 | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## 移動指定距離 {#move_distance}

以目前的輪速度移動指定的距離。  
如果沒有設定輪速度，就以預設速度向前移動。  
距離值為 0 時，按目前的輪速度持續移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Beagle" id="move_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動距離 | 0 以上的實數 | - |
| unit | 下拉選項 | 距離單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## 移動指定時間 {#move_time}

以目前的輪速度移動指定的時間。  
如果沒有設定輪速度，就以預設速度向前移動。  
勾選等待後，會一直等到移動完成。

<BlockImage module="roboids/Beagle" id="move_time" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動時間（秒） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## 原地轉動 {#turn_degree}

設定原地旋轉的方向和角度。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="roboids/Beagle" id="turn_degree" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 旋轉方向 | 左側(left), 右側(right) | - |
| data | 輸入值（積木） | 旋轉角度（度） | 0 以上的實數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## 改變輪速度 {#change_speed}

改變 Beagle 的輪速度。  
在目前的輪速度上加上輸入的速度，得到新的輪速度。  
新設定的輪速度範圍會限制在 -100 ~ 100。

<BlockImage module="roboids/Beagle" id="change_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 車輪種類 | 左輪(left), 右輪(right), 兩輪(both) | - |
| speed | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## 停止 {#stop}

讓 Beagle 停止移動。  
Beagle 兩輪的速度都會初始化為 0。

<BlockImage module="roboids/Beagle" id="stop" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## 車輪正在移動？ {#wheel_moving}

車輪正在移動時回傳 true，停止時回傳 false。

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## 設定蜂鳴聲 {#sound_buzz}

以指定的頻率設定 Beagle 的蜂鳴器聲音。  
可以發聲的頻率範圍是 27.5hz ~ 6553.5hz。  
輸入其他值時不會發出蜂鳴聲。

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 0, 27.5 ~ 6553.5 的實數（其他為 0） | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## 播放音符 {#sound_note}

Beagle 播放指定的音符。

<BlockImage module="roboids/Beagle" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | 哆(C), 哆#(C#), 來(D), 來#(D#), 咪(E), 發(F), 發#(F#), 索(G), 索#(G#), 拉(A), 拉#(A#), 西(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## 播放音效 {#sound_clip}

Beagle 播放特定的音效片段。  
勾選等待後，會一直等到播放完成。

<BlockImage module="roboids/Beagle" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 Beagle 的聲音。

<BlockImage module="roboids/Beagle" id="sound_off" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## 正在播放聲音？ {#sound_playing}

聲音正在播放時回傳 true，沒有播放時回傳 false。

<BlockImage module="roboids/Beagle" id="sound_playing" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## 輪速度值 {#wheel_speed}

特定車輪的速度

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左側(left), 右側(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## 編碼器值 {#encoder}

特定車輪的編碼器值

<BlockImage module="roboids/Beagle" id="encoder" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 目標車輪 | 左側(left), 右側(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## 陀螺儀值 {#gyroscope}

特定軸的陀螺儀感測器的值

<BlockImage module="roboids/Beagle" id="gyroscope" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## 加速度計值 {#accelerometer}

特定軸的加速度感測器的值

<BlockImage module="roboids/Beagle" id="accelerometer" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## 磁力計值 {#magnetometer}

特定軸的地磁感測器的值

<BlockImage module="roboids/Beagle" id="magnetometer" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## 溫度感測器值 {#temperature}

溫度感測器值

<BlockImage module="roboids/Beagle" id="temperature" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/Beagle" id="signal_strength" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/Beagle" id="battery" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## 狀態是否改變 {#state_change}

機器人的狀態是否發生了改變

<BlockImage module="roboids/Beagle" id="state_change" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 狀態種類 | 0 ~ 5（參見下表） | - |

| unit | 條件 |
|------|------|
| 0 | `accelerometer('x') > 0.8` |
| 1 | `accelerometer('x') < -0.8` |
| 2 | `accelerometer('y') > 0.8` |
| 3 | `accelerometer('y') < -0.8` |
| 4 | `accelerometer('z') > 0` |
| 5 | `accelerometer('z') < 0` |

### Python
```python
beagle = Beagle(0)

# unit = 0
beagle.accelerometer('x') > 0.8
```

## 啟動 / 停止激光雷達 {#lidar_power}

啟用或停用激光雷達感測器。

<BlockImage module="roboids/Beagle" id="lidar_power" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| on | 下拉選項 | 激光雷達 ON / OFF | 啟動(on=True), 停止(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## 激光雷達第 ~ 個值 {#lidar_value}

激光雷達感測器可以測量周圍 360 度範圍內與物體的距離。  
以 Beagle 的前方（第 0 個值）為基准，沿逆時針方向編號每次加 1。

<BlockImage module="roboids/Beagle" id="lidar_value" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 輸入值（欄位） | 物體編號（從 0 開始） | 0 以上的整數 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## 激光雷達各方向的距離值 {#lidar_directions}

表示激光雷達感測器測得的前、後、兩側和斜方向的距離。  
輸出該方向左右各 45 度範圍內距離值的平均值。

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| direction | 下拉選項 | 測量方向 | 前方(front), 左前方(left front), 左側(left), 左後方(left back), 後方(back), 右後方(right back), 右側(right), 右前方(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## 激光雷達已就緒？ {#lidar_state}

回傳激光雷達是否已啟動，結果為 **true(True) / false(False)**。

<BlockImage module="roboids/Beagle" id="lidar_state" />

### 參數

（無）

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
