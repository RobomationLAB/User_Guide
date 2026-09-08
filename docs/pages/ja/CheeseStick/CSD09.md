---
title: CSD-09 モーター
---

# CSD-09 モーター

## インスタンスの宣言 {#instance}

CSD-09 モーター(CSD09) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## サーボモーターを開始 {#start_servo_motor}

サーボモーターを使うポートを指定します。  
ポートを指定しないと、モーターは正しく動きません。

<BlockImage module="CheeseStick/CSD09" id="start_servo_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | サーボモーターのポート | Sa, Sb, Sc | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_servo_motor('Sa')
```

## サーボモーターの角度を設定 {#set_servo_motor}

指定したポートのサーボモーターの角度を設定します。  
選べる値の範囲は 0 ~ 180 です。

<BlockImage module="CheeseStick/CSD09" id="set_servo_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | サーボモーターのポート | Sa, Sb, Sc | 最後の `start_servo_motor` のポート |
| value | 入力値（フィールド） | 回転の角度（度） | 0 ~ 180 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_servo_motor('Sa', 90)
```

## サーボモーターの角度を変える {#change_servo_motor}

指定したポートのサーボモーターの角度を変えます。  
選べる値の範囲は -180 ~ 180 です。

<BlockImage module="CheeseStick/CSD09" id="change_servo_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | サーボモーターのポート | Sa, Sb, Sc | 最後の `start_servo_motor` のポート |
| value | 入力値（フィールド） | 変える角度の差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_servo_motor('Sa', 10)
```

## サーボモーターをオフにする {#stop_servo_motor}

指定したポートのサーボモーターの電源を切ります。

<BlockImage module="CheeseStick/CSD09" id="stop_servo_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | サーボモーターのポート | Sa, Sb, Sc | 最後の `start_servo_motor` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_servo_motor('Sa')
```

## DCモーターを起動する {#start_DC_motor}

指定したポートを使って DC モーターを制御できるようにします。
DC モーターに関するほかのブロックを使う前に、一度呼び出す必要があります。

<BlockImage module="CheeseStick/CSD09" id="start_DC_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | DC モーターのポート | Mab, Mcd | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_dc_motor('Mab')
```

## DCモーターの速度を設定 {#set_DC_motor}

DC モーターの PWM 出力の値を設定します。

<BlockImage module="CheeseStick/CSD09" id="set_DC_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | DC モーターのポート | Mab, Mcd | 最後の `start_dc_motor` のポート |
| value | 入力値（フィールド） | PWM 出力の値 | 0 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_dc_motor('Mab', 50)
```

## DCモーターの速度を変える {#change_DC_motor}

現在の DC モーターの PWM 出力の値に、入力した変化量を足して新しい値を設定します。

<BlockImage module="CheeseStick/CSD09" id="change_DC_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | DC モーターのポート | Mab, Mcd | 最後の `start_dc_motor` のポート |
| value | 入力値（フィールド） | 変える PWM の差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_dc_motor('Mab', 10)
```

## DCモーターを停止する {#stop_DC_motor}

DC モーターの出力を止めます。

<BlockImage module="CheeseStick/CSD09" id="stop_DC_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | DC モーターのポート | Mab, Mcd | 最後の `start_dc_motor` のポート |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.stop_dc_motor('Mab')
```

## ステッピングモーターを起動する {#start_step_motor}

ステッピングモーターを使います。

<BlockImage module="CheeseStick/CSD09" id="start_step_motor" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.start_step_motor()
```

## ステッピングモーターのモードを設定 {#set_step_motor_mode}

ステッピングモーターを制御するモードを設定します。  
別にモードを設定しない場合は、既定で「パワー」モードに設定されます。  
注意! ステッピングモーターが回転している間にモードを変えてはいけません。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 駆動モード | off(オフ), 通常(wave_step), パワー(full_step) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_mode('full_step')
```

## ステッピングモーターの速度を設定 {#set_step_motor_speed}

ステッピングモーターの速度を設定します。  
選べる値の範囲は -1000 ~ 1000 です。  
値が負の場合は、反対の方向に回転します。

<BlockImage module="CheeseStick/CSD09" id="set_step_motor_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| value | 入力値（フィールド） | 回転速度（pps） | 0 以上の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.set_step_motor_speed(100)
```

## ステッピングモーターを回転する {#rotate_step_motor}

ステッピングモーターを回転させるパルス数を設定します。  
選べる値の範囲は 0 ~ 65535 です。  
ステッピングモーターの速度を選んでいない場合は、回転しません。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="CheeseStick/CSD09" id="rotate_step_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| value | 入力値（フィールド） | 回転するステップ数 | 整数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# wait = TRUE
csd09.rotate_step_motor(360, wait=True)

# wait = FALSE
csd09.rotate_step_motor(360, wait=False)
```

## ステッピングモーターの速度を変える {#change_step_motor_speed}

ステッピングモーターの速度を変えます。  
選べる値の範囲は -2000 ~ 2000 です。

<BlockImage module="CheeseStick/CSD09" id="change_step_motor_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| value | 入力値（フィールド） | 変える pps の差 | 整数 | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.change_step_motor_speed(10)
```

## ステッピングモーターを停止する {#stop_step_motor}

ステッピングモーターを止めるか、電源を切ります。

<BlockImage module="CheeseStick/CSD09" id="stop_step_motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 停止の方法 | 停止(stop), 電源オフ(power) | - |

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

# unit = "stop"
csd09.stop_step_motor()

# unit = "power"
csd09.turn_off_step_motor()
```

## ステップ数 {#step_motor_steps}

ステッピングモーターがこれまでに回転した累積のステップ数を返します。

<BlockImage module="CheeseStick/CSD09" id="step_motor_steps" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
csd09 = cheesestick.CSD09()

csd09.get_steps()
```
