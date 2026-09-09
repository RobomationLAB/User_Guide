---
title: Cheese Stick
---

# Cheese Stick

## 宣告實例 {#instance}

把 Cheese Stick(CheeseStick) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
# 有多個實例時
cheesestick_1 = CheeseStick(1)
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 設定輸入模式 {#set_input_mode}

設定所選連接埠的輸入模式。

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |
| option | 下拉選項 | 輸入模式 | Makey 輸入(makey), 按鈕輸入(button), 數位上拉(digital_pullup), 數位下拉(digital_pulldown), 類比(analog), 類比電壓(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## 設定輸入範圍 {#set_input_range}

把所選連接埠的輸入值轉換到指定的最小 ~ 最大範圍。  
輸入值的範圍是 0 ~ 255。  
可以轉換到的值的範圍是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 輸入值（欄位） | 原始最小值 | 0 ~ 255 的整數 | - |
| src_max | 輸入值（欄位） | 原始最大值 | 0 ~ 255 的整數 | - |
| dst_min | 輸入值（欄位） | 轉換後的最小值 | -100 ~ 100 的整數 | - |
| dst_max | 輸入值（欄位） | 轉換後的最大值 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## 用中間值設定輸入範圍 {#set_input_range_median}

把所選連接埠的輸入值轉換到指定的最小 ~ 中間 ~ 最大範圍。  
輸入值的範圍是 0 ~ 255。  
可以轉換到的值的範圍是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 輸入值（欄位） | 原始最小值 | 0 ~ 255 的整數 | - |
| src_median | 輸入值（欄位） | 原始中間值 | 0 ~ 255 的整數 | - |
| src_max | 輸入值（欄位） | 原始最大值 | 0 ~ 255 的整數 | - |
| dst_min | 輸入值（欄位） | 轉換後的最小值 | -100 ~ 100 的整數 | - |
| dst_median | 輸入值（欄位） | 轉換後的中間值 | -100 ~ 100 的整數 | - |
| dst_max | 輸入值（欄位） | 轉換後的最大值 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 輸入值 {#get_input}

所選連接埠的輸入值

<BlockImage module="roboids/CheeseStick" id="get_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 輸入連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## 設定脈衝輸入模式 {#set_pulse_input_mode}

設定所選連接埠的脈衝輸入模式。

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 脈衝輸入連接埠 | Sc, Lc | - |
| option | 下拉選項 | 上下拉模式 | 脈衝 (default), 脈衝（上拉） (pull-up), 脈衝（下拉） (pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## 脈衝輸入值 {#get_pulse_input}

所選連接埠是否偵測到脈衝輸入

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 脈衝輸入連接埠 | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## 設定數位輸出 {#set_digital_output}

設定指定連接埠的數位輸出值。  
可以選擇的值是 0 或 1。

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 數位輸出連接埠 | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | 下拉選項 | 輸出值 | 0 或 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## 設定 PWM 輸出 {#set_pwm_output}

設定指定連接埠的 PWM 輸出值。  
可以選擇的值的範圍是 0 ~ 100。

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | PWM 輸出連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 輸入值（欄位） | PWM 值 | 0 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## 改變 PWM 輸出 {#change_pwm_output}

改變指定連接埠的 PWM 輸出值。  
可以選擇的值的範圍是 -100 ~ 100。

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | PWM 輸出連接埠 | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 輸入值（欄位） | 要改變的 PWM 差 | -100 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## 設定蜂鳴聲 {#sound_buzz}

設定 Cheese Stick 的蜂鳴器聲音。

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| hz | 輸入值（積木） | 頻率（Hz） | 0 ~ 6553.5 的實數 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## 播放音符 {#sound_note}

Cheese Stick 播放指定的音符。

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| note | 下拉選項 | 音符 | Do(C), Do#(C#), Re(D), Re#(D#), Mi(E), Fa(F), Fa#(F#), Sol(G), Sol#(G#), La(A), La#(A#), Si(B) | - |
| octave | 下拉選項 | 八度 | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## 播放音效片段 {#sound_clip}

Cheese Stick 播放特定的音效片段。

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| clip | 下拉選項 | 音效片段名稱 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` 等 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## 關閉聲音 {#sound_off}

關閉 Cheese Stick 的聲音。

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## 軸加速度值 {#acceleration}

特定軸的重力加速度值

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 測量的軸 | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## 溫度感測器值 {#temperature}

溫度感測器值

<BlockImage module="roboids/CheeseStick" id="temperature" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## 信號強度值 {#signal_strength}

信號強度

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## 電池電壓 {#battery}

電池電壓

<BlockImage module="roboids/CheeseStick" id="battery" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## 狀態是否改變 {#state_change}

機器人的狀態是否發生了改變

<BlockImage module="roboids/CheeseStick" id="state_change" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 狀態種類 | 0 ~ 7（參見下表） | - |

| unit | 條件 |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()`（敲擊事件） |
| 7 | `fall()`（落下事件） |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
