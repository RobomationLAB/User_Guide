---
title: RaccoonBot
---

# RaccoonBot

## 宣告實例 {#instance}

把 RaccoonBot 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
raccoon = RaccoonBot(0)
# 有多個實例時
raccoon_1 = RaccoonBot(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 開啟 / 關閉關節馬達 {#motor}

決定是解除還是保持施加在各關節馬達上的控制。  
不進行設定時，所有關節的馬達控制都以開啟的狀態啟動。

<BlockImage module="roboids/Raccoon4" id="motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 關節編號 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | 核取方塊 | 馬達控制 ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 全部關節，關閉馬達控制
raccoon.motor(-1, False)

# 1 號關節，開啟馬達控制
raccoon.motor(1, True)
```

## 設定關節速度 {#speed_joint}

設定所選關節的速度。

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| joint | 下拉選項 | 關節編號 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 輸入值（積木） | 關節速度 | -100 ~ 100 的整數 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## 改變關節速度 {#change_speed_joint}

改變所選關節的速度。

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| joint | 下拉選項 | 關節編號 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## 一次設定各關節速度 {#speed_joints}

一次設定四個關節的速度。

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（陣列） | 4 個關節速度的陣列 | `[joint1, joint2, joint3, joint4]`，各 -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# 字面陣列 [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# 變數陣列
raccoon.set_speed_joints(*arr)
```

## 設定關節角度控制速度 {#angle_speed}

設定在角度控制模式下控制關節的速度。

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 角度控制的最大速度 | 0 ~ 100 的整數 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## 設定關節角度 {#angle_joint}

設定所選關節的角度。

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| joint | 下拉選項 | 關節編號 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 輸入值（積木） | 關節角度（度） | 參見上表（自動 clamp） | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## 改變關節角度 {#change_angle_joint}

改變所選關節的角度。

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| joint | 下拉選項 | 關節編號 | 全部(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 輸入值（積木） | 要改變的角度差（度） | 參見上表（自動 clamp） | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## 一次設定各關節角度 {#angle_joints}

一次設定四個關節的角度。

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（陣列） | 4 個關節角度的陣列或姿態名稱 | `[j1, j2, j3, j4]` 陣列 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 顯式陣列
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## 初始化關節狀態 {#default_angle_joints}

把四個關節的角度設定為預先定義的姿態 (`'zero'`, `'park'`, `'home'`)。

姿態預設：
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 下拉 | 姿態名稱 | `'zero'` / `'park'` / `'home'` | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 姿態預設
raccoon.set_angle_joints('home', wait=True)
```

## 儲存關節角度 {#save_encoder}

把目前的編碼器值儲存到任意變數中。

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| encoder | 變數 | 要儲存到的變數名 | 變數 | - |
| data | 輸入值（陣列） | 要儲存的初始陣列 | 4 個元素的陣列或空陣列 | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## 設定特定坐標值 {#set_coordinate}

透過設定特定的坐標值來移動機械臂。  
各坐標的範圍如下。  
以腕部為基准 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
以夾爪為基准 => 範圍會隨連線的設備而變化。  
夾爪的方向固定為與地面水平或垂直。  
輸入了無法到達的坐標時，會跳過該命令。

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| origin | 下拉選項 | 基准點 | 腕部(wrist), 末端執行器(end_effector) | - |
| pos | 下拉選項 | 軸 | x, y, z | - |
| data | 輸入值（積木） | 坐標值 | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | 下拉選項 | 單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 把 x 坐標設為 10cm
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# 以 end_effector 為基准的 z 坐標
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## 改變特定坐標值 {#change_coordinate}

以目前位置為基准改變特定的坐標值來移動機械臂。  
各坐標的範圍如下。  
以腕部為基准 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
以夾爪為基准 => 範圍會隨連線的設備而變化。  
夾爪的方向固定為與地面水平或垂直。  
輸入了無法到達的坐標時，會跳過該命令。

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| origin | 下拉選項 | 基准點 | 腕部(wrist), 末端執行器(end_effector) | - |
| pos | 下拉選項 | 軸 | x, y, z | - |
| data | 輸入值（積木） | 要改變的坐標差 | 實數 | - |
| unit | 下拉選項 | 單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## 移動到 xyz 坐標 {#set_coordinates}

一次把 x, y, z 坐標分別設定為指定的值。  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| origin | 下拉選項 | 基准點 | 腕部(wrist), 末端執行器(end_effector) | - |
| x | 輸入值（積木） | x 坐標 | 實數 | - |
| y | 輸入值（積木） | y 坐標 | 實數 | - |
| z | 輸入值（積木） | z 坐標 | 實數 | - |
| unit | 下拉選項 | 單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## 設定末端執行器鎖定 {#lock}

設定夾爪要鎖定的方向。選項設定為水平或垂直之後，就無法控制關節 4 的速度或角度。

<BlockImage module="roboids/Raccoon4" id="lock" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| mode | 下拉選項 | 鎖定方向 | 無(none), 水平(horizontal), 垂直(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## 用末端執行器抓取 / 放下物體 {#end_effector}

用末端執行器抓住或放下物體。  
根據 unit 下拉選項的值呼叫兩個方法中的一個。

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 動作 | 抓取（閉合）(pick), 放下（張開）(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## 末端執行器設備 {#end_effector_device}

目前連線的夾爪編號  
(1, 3, 4: 夾鉗式夾爪, 2: 真空夾爪)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## 末端執行器狀態 {#end_effector_status}

夾爪抓住物體的狀態  
(0: 放下的狀態, 1: 抓住的狀態)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## 播放音符 {#sound_note}

RaccoonBot 播放指定的音符。

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## 播放音效片段 {#sound_clip}

RaccoonBot 播放特定的音效片段。

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 RaccoonBot 的聲音。

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## 編碼器值 {#encoder}

所選關節的編碼器值

<BlockImage module="roboids/Raccoon4" id="encoder" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| joint | 下拉選項 | 關節編號（或全部關節） | 1, 2, 3, 4, 全部(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# 全部關節
raccoon.encoder(-1)
```

## 所選元素的坐標 {#coordinate}

回傳基准點目前的 xyz 坐標。  
省略 `pos` 時回傳 `[x, y, z]` 整個陣列，指定時只回傳該軸的值。

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| origin | 下拉選項 | 基准點 | 腕部(wrist), 末端執行器(end_effector) | wrist |
| pos | 下拉選項 | 軸（或全部） | x, y, z, xyz（省略時回傳整個陣列） | None（全部） |

### Python
```python
raccoon = RaccoonBot(0)

# 特定軸
raccoon.get_coordinates('wrist', 'x')

# 全部（3 個元素的陣列）
raccoon.get_coordinates('wrist')
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/Raccoon4" id="battery" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## 按鈕已按下？ {#button}

所選按鈕是否處于按下狀態，或者是否發生了點擊事件

<BlockImage module="roboids/Raccoon4" id="button" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 按鈕名稱 | teach, play, power, delete, 任意按鈕(any) | - |
| event | 下拉選項 | 事件種類 | 按下(pressed), 點擊(click), 長按(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## 設定輸送帶速度 {#conveyor_speed}

設定輸送帶的速度。速度的範圍是 -100 ~ 100。

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 輸送帶速度 | -100 ~ 100 的整數 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## 移動輸送帶指定距離 {#conveyor_distance}

用輸送帶移動一定的距離。

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 移動距離 | 0 以上的實數 | - |
| unit | 下拉選項 | 距離單位 | 公分(cm), 公釐(mm), 英吋(inch) | cm |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## 改變輸送帶速度 {#change_conveyor_speed}

改變輸送帶的速度。

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| data | 輸入值（積木） | 要改變的速度差 | -200 ~ 200 的整數 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## 停止輸送帶 {#stop_conveyor}

停止輸送帶。

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## 輸送帶正在運行？ {#conveyor_running}

輸送帶是否正在運行

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### 參數

（無）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## 輸送帶按鈕已按下？ {#conveyor_button}

輸送帶的按鈕是否處于按下狀態，或者是否發生了點擊事件

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| event | 下拉選項 | 事件種類 | 按下(pressed), 點擊(click), 長按(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
