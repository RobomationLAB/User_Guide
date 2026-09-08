---
title: Hamster
---

# Hamster

## インスタンスの宣言 {#instance}

Hamster ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
hamster = Hamster(0)
# 複数のインスタンスがある場合
hamster_1 = Hamster(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## ホイールの速度を設定 {#set_wheel_speed}

車輪の速度を決めます。速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/Hamster" id="set_wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 車輪の速度 | -100 ~ 100 の整数, 0: 停止 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_wheel_speed('both', 50)
```

## 秒間動かす {#move_time}

現在の車輪速度で、指定した時間だけ動かします。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Hamster" id="move_time" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 動かす時間（秒） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

# wait = TRUE
hamster.move_time(5, wait=True)
# wait = FALSE
hamster.move_time(0.5, wait=False)
```

## ホイールの速度を変える {#change_speed}

Hamster の車輪速度を変えます。  
現在の車輪速度に入力した速度を足した値が、新しい車輪速度になります。  
新しく設定された車輪速度の範囲は -100 ~ 100 に収められます。

<BlockImage module="roboids/Hamster" id="change_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_wheel_speed('both', 10)
```

## 停止する {#stop}

Hamster の移動を止めます。  
Hamster の両方の車輪速度がどちらも 0 に初期化されます。

<BlockImage module="roboids/Hamster" id="stop" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.stop()
```

## ボード上を1マス前進する {#grid_move}

ボードの上を、決められたとおりに 1 マスずつ動きます。

<BlockImage module="roboids/Hamster" id="grid_move" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.grid_move()
```

## ボード上で向く {#grid_turn}

ボードの上で、決められた方向に 90 度回転します。

<BlockImage module="roboids/Hamster" id="grid_turn" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.grid_turn('left')
```

## 床センサーで線をたどる {#trace_mode}

Hamster が床センサーを使って、特定の色の線をたどります。

<BlockImage module="roboids/Hamster" id="trace_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| floor | ドロップダウンオプション | たどる床センサー | 左(left), 右(right), 中央(center) | - |
| line | ドロップダウンオプション | 線の色 | 黒(black), 白(white) | black |

### Python
```python
hamster = Hamster(0)

hamster.trace_line('left', 'black')
```

## 次の交差点まで線をたどる {#trace_until_grid}

Hamster が交差点で指定した方向に移動したあと、次の交差点に出会うまで進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Hamster" id="trace_until_grid" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 交差点での移動方向 | 左(left), 右(right), 前(forward), Uターン(uturn) | - |
| line | ドロップダウンオプション | 線の色 | 黒(black), 白(white) | black |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster = Hamster(0)

hamster.trace_intersection('left', 'black', wait=True)
```

## ライントレース速度を設定 {#set_trace_speed}

ライントレースの速度を設定します。速度の範囲は 1 ~ 10 です。

<BlockImage module="roboids/Hamster" id="set_trace_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | ライントレースの速度 | 1 ~ 10 の整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_trace_speed(5)
```

## ライントレースを停止する {#stop_trace}

Hamster のライントレース機能を終了します。

<BlockImage module="roboids/Hamster" id="stop_trace" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.stop_trace()
```

## LEDの色を設定 {#set_led_color}

LEDの色を設定します。

<BlockImage module="roboids/Hamster" id="set_led_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | - |
| color | ドロップダウンオプション | 色 | 黒(black), 青(blue), 緑(green), シアン(cyan), 赤(red), マゼンタ(magenta), 黄(yellow), 白(white) | - |

### Python
```python
hamster = Hamster(0)

hamster.set_led_color('both', 'red')
```

## LEDを消す {#turn_off}

LEDの色を消します。

<BlockImage module="roboids/Hamster" id="turn_off" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | both |

### Python
```python
hamster = Hamster(0)

hamster.turn_off('both')
```

## ブザー音を設定 {#sound_buzz}

指定した周波数で、Hamster のブザー音を設定します。  
音を出せる周波数の範囲は 1.0hz ~ 6553.5hz です。  
これ以外の値を入力すると、ブザー音は鳴りません。

<BlockImage module="roboids/Hamster" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 0 ~ 6553.5 の実数 | - |

### Python
```python
hamster = Hamster(0)

hamster.sound_buzz(440)
```

## 音符を鳴らす {#sound_note}

Hamster が指定した音階を鳴らします。

<BlockImage module="roboids/Hamster" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster = Hamster(0)

hamster.sound_note('D', 5)
```

## 音を消す {#sound_off}

Hamster の音を消します。

<BlockImage module="roboids/Hamster" id="sound_off" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.sound_off()
```

## ホイール速度 {#wheel_speed}

特定の車輪の速度

<BlockImage module="roboids/Hamster" id="wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.wheel_speed('left')
```

## 近接センサー {#proximity}

特定の近接センサーの値

<BlockImage module="roboids/Hamster" id="proximity" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定するセンサーの位置 | 左(left), 右(right) | - |

### Python
```python
hamster = Hamster(0)

hamster.proximity('left')
```

## 床センサー {#floor}

特定の床センサーの値

<BlockImage module="roboids/Hamster" id="floor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定するセンサーの位置 | 左(left), 右(right), 中央(center) | - |

### Python
```python
hamster = Hamster(0)

hamster.floor('left')
```

## 加速度 {#acceleration}

特定の軸の重力加速度の値

<BlockImage module="roboids/Hamster" id="acceleration" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
hamster = Hamster(0)

hamster.acceleration('x')
```

## 明るさ {#light}

明るさセンサーの値

<BlockImage module="roboids/Hamster" id="light" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.light()
```

## 温度 {#temperature}

温度センサーの値

<BlockImage module="roboids/Hamster" id="temperature" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.temperature()
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/Hamster" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/Hamster" id="battery" />

### パラメーター

（なし）

### Python
```python
hamster = Hamster(0)

hamster.battery()
```

## 状態が変わったかどうか {#state_change}

ロボットの状態が変わったかどうか

<BlockImage module="roboids/Hamster" id="state_change" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 状態の種類 | 0 ~ 6（下の表を参照） | - |

| unit | 条件 |
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

## ポートの入力モードを設定 {#io_mode}

IO ポートの入力モードを設定します。

<BlockImage module="roboids/Hamster" id="io_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| option | ドロップダウンオプション | 入出力モード | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster = Hamster(0)

hamster.io_mode('both', 'analog_input')
```

## ポートの出力を設定 {#set_output}

指定した IO ポートの出力の値を設定します。

<BlockImage module="roboids/Hamster" id="set_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| data | 入力値（ブロック） | 出力の値 | 0 ~ 180 の整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.set_output('both', 90)
```

## ポートの出力を変える {#change_output}

指定した IO ポートの出力の値を変えます。

<BlockImage module="roboids/Hamster" id="change_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| data | 入力値（ブロック） | 変える出力の差 | 整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.change_output('a', 10)
```

## グリッパーを開く / 閉じる {#gripper}

Hamster のグリッパーを開いたり閉じたりします。  
unit の値によって、2 つのメソッドのうち 1 つが呼び出されます。

<BlockImage module="roboids/Hamster" id="gripper" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 閉じる(close), 開く(open) | - |

### Python
```python
hamster = Hamster(0)

# unit = "open"
hamster.open_gripper()
# unit = "close"
hamster.close_gripper()
```

## シューターの角度を設定 {#shooter}

シューターの角度を設定して制御します。角度の範囲は 0 ~ 180 です。

<BlockImage module="roboids/Hamster" id="shooter" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | シューターの角度 | 0 ~ 180 の整数 | - |

### Python
```python
hamster = Hamster(0)

hamster.shooter(45)
```

## 入力 {#input}

Hamster の入出力ポートの入力の値を返します。

<BlockImage module="roboids/Hamster" id="input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster = Hamster(0)

hamster.get_input('a')
```
