---
title: CSD-09 馬達
---

# CSD-09 馬達

## 宣告實例 {#instance}

把 CSD-09 馬達(CSD09) 積木新增到工作區後，Python 程式碼中會自動插入下面這樣的實例宣告：

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| index | 下拉選項 | 實例編號（從 0 開始） | 0 以上的整數 | 0 |


## 啟動伺服馬達 {#start_servo_motor}

指定要使用伺服馬達的連接埠。  
不指定連接埠，馬達就不能正常工作。

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 伺服馬達連接埠 | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## 設定伺服馬達角度 {#set_servo_motor}

設定指定連接埠的伺服馬達角度。  
可以選擇的值的範圍是 0 ~ 180。

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 伺服馬達連接埠 | Sa, Sb, Sc | 最後一次 `start_servo_motor` 的連接埠 |
| value | 輸入值（欄位） | 旋轉角度（度） | 0 ~ 180 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## 改變伺服馬達角度 {#change_servo_motor}

改變指定連接埠的伺服馬達角度。  
可以選擇的值的範圍是 -180 ~ 180。

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 伺服馬達連接埠 | Sa, Sb, Sc | 最後一次 `start_servo_motor` 的連接埠 |
| value | 輸入值（欄位） | 要改變的角度差 | 整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## 關閉伺服馬達 {#stop_servo_motor}

關閉指定連接埠伺服馬達的電源。

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 伺服馬達連接埠 | Sa, Sb, Sc | 最後一次 `start_servo_motor` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## 啟動直流馬達 {#start_DC_motor}

讓指定的連接埠可以用來控制直流馬達。
在使用直流馬達相關的其他積木之前，必須先呼叫一次。

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 直流馬達連接埠 | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## 設定直流馬達速度 {#set_DC_motor}

設定直流馬達的 PWM 輸出值。

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 直流馬達連接埠 | Mab, Mcd | 最後一次 `start_dc_motor` 的連接埠 |
| value | 輸入值（欄位） | PWM 輸出值 | 0 ~ 100 的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## 改變直流馬達速度 {#change_DC_motor}

在目前直流馬達的 PWM 輸出值上加上輸入的變化量，設定新的值。

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 直流馬達連接埠 | Mab, Mcd | 最後一次 `start_dc_motor` 的連接埠 |
| value | 輸入值（欄位） | 要改變的 PWM 差 | 整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## 停止直流馬達 {#stop_DC_motor}

停止直流馬達的輸出。

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 直流馬達連接埠 | Mab, Mcd | 最後一次 `start_dc_motor` 的連接埠 |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## 啟動步進馬達 {#start_step_motor}

開始使用步進馬達。

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## 設定步進馬達模式 {#set_step_motor_mode}

設定控制步進馬達的模式。  
如果不單獨設定模式，預設會設為「功率」模式。  
注意！步進馬達正在旋轉的過程中不能更改模式。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 驅動模式 | off(關閉), 一般(wave_step), 功率(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## 設定步進馬達速度 {#set_step_motor_speed}

設定步進馬達的速度。  
可以選擇的值的範圍是 -1000 ~ 1000。  
值為負數時，會朝相反方向旋轉。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| value | 輸入值（欄位） | 旋轉速度（PPS） | 0 以上的整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## 旋轉步進馬達 {#rotate_step_motor}

設定步進馬達旋轉的脈衝數。  
可以選擇的值的範圍是 0 ~ 65535。  
如果沒有選擇步進馬達的速度，就不會旋轉。  
勾選等待後，會一直等到旋轉完成。

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| value | 輸入值（欄位） | 要旋轉的步數 | 整數 | - |
| wait | 核取方塊 | 是否等待完成 | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)
# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## 改變步進馬達速度 {#change_step_motor_speed}

改變步進馬達的速度。  
可以選擇的值的範圍是 -2000 ~ 2000。

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| value | 輸入值（欄位） | 要改變的 PPS 差 | 整數 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## 停止步進馬達 {#stop_step_motor}

停止步進馬達或關閉它的電源。

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### 參數

| 名稱 | 類別 | 說明 | 範圍 / 種類 | 預設值 |
| --- | --- | --- | --- | --- |
| unit | 下拉選項 | 停止方式 | 停止(stop), 關閉電源(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()
# unit = "power"
csd09.turn_off_step_motor()
```

## 步數 {#step_motor_steps}

回傳步進馬達到目前為止累計旋轉的步數。

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### 參數

（無）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
