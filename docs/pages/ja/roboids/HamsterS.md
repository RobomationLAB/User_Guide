---
title: HamsterS
---

# HamsterS

## インスタンスの宣言 {#instance}

HamsterS ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
hamster_s = HamsterS(0)
# 複数のインスタンスがある場合
hamster_s_1 = HamsterS(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 車輪速度を設定 {#set_wheel_speed}

車輪の速度を決めます。速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/HamsterS" id="set_wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 車輪の速度 | -100 ~ 100 の整数, 0: 停止 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_wheel_speed('both', 50)
```

## 距離だけ進む {#move_distance}

現在の車輪速度で、指定した距離だけ進みます。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
距離の値が 0 の場合は、現在の車輪速度で進み続けます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="move_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 進む距離 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 距離の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.move_distance(50, 'cm', wait=True)
```

## 時間だけ進む {#move_time}

現在の車輪速度で、指定した時間だけ進みます。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="move_time" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 進む時間（秒） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

# wait = TRUE
hamster_s.move_time(5, wait=True)
# wait = FALSE
hamster_s.move_time(5, wait=False)
```

## その場で回転する {#turn_degree}

その場で回転する方向と角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="turn_degree" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |
| data | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_degree('left', 90, wait=True)
```

## 車輪速度を変える {#change_speed}

HamsterS の車輪速度を変えます。  
現在の車輪速度に入力した速度を足した値が、新しい車輪速度になります。

<BlockImage module="roboids/HamsterS" id="change_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_wheel_speed('both', 10)
```

## 止まる {#stop}

HamsterS の移動を止めます。

<BlockImage module="roboids/HamsterS" id="stop" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop()
```

## 車輪が動いている？ {#wheel_moving}

車輪が動いていれば true、止まっていれば false を返します。

<BlockImage module="roboids/HamsterS" id="wheel_moving" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_moving()
```

## ボード上を1マス前進する {#grid_move}

ボードの上を、決められたとおりに 1 マスずつ動きます。

<BlockImage module="roboids/HamsterS" id="grid_move" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_move()
```

## ボード上で回転する {#grid_turn}

ボードの上で、決められた方向に 90 度回転します。

<BlockImage module="roboids/HamsterS" id="grid_turn" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.grid_turn('left')
```

## ペンを中心に旋回する {#pivot}

ペンホルダーを使うとき、旋回の中心と方向、角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="pivot" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| base | ドロップダウンオプション | 旋回の中心 | 左ペン(left_pen), 右ペン(right_pen), 左車輪(left_wheel), 右車輪(right_wheel) | - |
| direction | ドロップダウンオプション | 回転の方向 | 前進(forward), 後進(backward) | - |
| degree | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot('left_pen', 'forward', 90, wait=True)
```

## ペンを中心に円を描く {#pivot_circle}

ペンホルダーで円を描くとき、旋回の中心と方向、半径、角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="pivot_circle" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| base | ドロップダウンオプション | 旋回の中心 | 左ペン(left_pen), 右ペン(right_pen) | - |
| direction | ドロップダウンオプション | 回転の方向 | 左前(left_forward), 左後(left_backward), 右前(right_forward), 右後(right_backward) | - |
| degree | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| radius | 入力値（ブロック） | 回転の半径 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 半径の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.pivot_circle('left_pen', 'left_forward', 90, 1, 'cm', wait=True)
```

## 床センサーで線をたどる {#trace_mode}

HamsterS が床センサーを使って、特定の色の線をたどります。

<BlockImage module="roboids/HamsterS" id="trace_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| floor | ドロップダウンオプション | たどる床センサー | 左(left), 右(right), 中央(center) | - |
| line | ドロップダウンオプション | 線の色 | 黒(black), 白(white) | black |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_line('left', 'black')
```

## 交差点を移動して次の交差点まで進む {#trace_until_grid}

HamsterS が交差点で指定した方向に移動したあと、次の交差点に出会うまで進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。  

<BlockImage module="roboids/HamsterS" id="trace_until_grid" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 交差点での移動方向 | 左折(left), 右折(right), 前進(forward), Uターン(uturn) | - |
| line | ドロップダウンオプション | 線の色 | 黒(black), 白(white) | black |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.trace_intersection('left', 'black', wait=True)
```

## ライントレース速度を設定 {#set_trace_speed}

ライントレースの速度を設定します。速度の範囲は 1 ~ 10 です。

<BlockImage module="roboids/HamsterS" id="set_trace_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | ライントレースの速度 | 1 ~ 10 の整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_speed(5)
```

## ライントレースゲインを設定 {#set_trace_gain}

ライントレースの方向の変化量を設定します。変化量の範囲は 1 ~ 10 です。

<BlockImage module="roboids/HamsterS" id="set_trace_gain" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 方向の変化量 | 1 ~ 10 の整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_trace_gain(5)
```

## ライントレースを停止する {#stop_trace}

HamsterS のライントレース機能を終了します。

<BlockImage module="roboids/HamsterS" id="stop_trace" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.stop_trace()
```

## LEDの色を設定 {#set_led_color}

HamsterS のLEDの色を設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。(R, G, B の数値ではなく色の名前でコードが生成されます。)

<BlockImage module="roboids/HamsterS" id="set_led_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | - |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', 'red')
```

## 色カテゴリーのブロックでLEDの色を設定 {#set_led_color_with_block}

色カテゴリーのブロック (`[R, G, B]`) を入力として受け取り、LEDの色を設定します。

<BlockImage module="roboids/HamsterS" id="set_led_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | - |
| data | 入力値（色） | 色カテゴリーのブロックまたは `[R, G, B]` 配列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_led_color('both', *Utils.color_rgb(255, 128, 0))
```

## RGB の分だけLEDの色を変える {#change_by_rgb}

指定した R, G, B の値の分だけ、HamsterS のLEDの色を変えます。

<BlockImage module="roboids/HamsterS" id="change_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | - |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_led_color('both', 10, 0, 0)
```

## LEDを消す {#turn_off}

LEDの色を消します。

<BlockImage module="roboids/HamsterS" id="turn_off" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象のLED | 左(left), 右(right), 両方(both) | both |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.turn_off('both')
```

## ブザーの周波数を設定 {#sound_buzz}

指定した周波数で、HamsterS のブザー音を設定します。  
音を出せる周波数の範囲は 122.1hz ~ 4186.0hz です。  
これ以外の値を入力すると、ブザー音は鳴りません。

<BlockImage module="roboids/HamsterS" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 122.1 ~ 4186.0 の実数（それ以外は 0） | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_buzz(440)
```

## 音を鳴らす {#sound_note}

HamsterS が指定した音階を鳴らします。

<BlockImage module="roboids/HamsterS" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 3, 4, 5, 6, 7 | 4 |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_note('D', 5)
```

## 効果音を再生 {#sound_clip}

HamsterS が特定のサウンドクリップを再生します。  
待つにチェックを入れると、再生が完了するまで待ちます。

<BlockImage module="roboids/HamsterS" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'happy'`, `'angry'`, `'sad'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_clip('siren', wait=True)
```

## 音を止める {#sound_off}

HamsterS の音を止めます。

<BlockImage module="roboids/HamsterS" id="sound_off" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_off()
```

## 音を再生中？ {#sound_playing}

音を再生中なら true、再生中でなければ false を返します。

<BlockImage module="roboids/HamsterS" id="sound_playing" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.sound_playing()
```

## ホイールの速度 {#wheel_speed}

特定の車輪の速度

<BlockImage module="roboids/HamsterS" id="wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.wheel_speed('left')
```

## 近接センサー {#proximity}

特定の近接センサーの値

<BlockImage module="roboids/HamsterS" id="proximity" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定するセンサーの位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.proximity('left')
```

## 床センサー {#floor}

特定の床センサーの値

<BlockImage module="roboids/HamsterS" id="floor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定するセンサーの位置 | 左(left), 右(right) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.floor('left')
```

## 軸の加速度 {#acceleration}

特定の軸の重力加速度の値

<BlockImage module="roboids/HamsterS" id="acceleration" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.acceleration('x')
```

## 明るさ {#light}

明るさセンサーの値

<BlockImage module="roboids/HamsterS" id="light" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.light()
```

## 温度 {#temperature}

温度センサーの値

<BlockImage module="roboids/HamsterS" id="temperature" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.temperature()
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/HamsterS" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/HamsterS" id="battery" />

### パラメーター

（なし）

### Python
```python
hamster_s = HamsterS(0)

hamster_s.battery()
```

## 状態が変わったかどうか {#state_change}

ロボットの状態が変わったかどうか

<BlockImage module="roboids/HamsterS" id="state_change" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 状態の種類 | 0 ~ 7（下の表を参照） | - |

| unit | 意味 | Python |
|------|------|--------|
| 0 | 前に傾ける | `acceleration('x') > 5000` |
| 1 | 後ろに傾ける | `acceleration('x') < -5000` |
| 2 | 左に傾ける | `acceleration('y') > 5000` |
| 3 | 右に傾ける | `acceleration('y') < -5000` |
| 4 | 逆さまになる | `acceleration('z') > 0` |
| 5 | 逆さまになっていない | `acceleration('z') < -3000` |
| 6 | 障害物/手の検知 | `proximity('left') > 50 or proximity('right') > 50` |
| 7 | 叩く | `tap()` |

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

## ポートの入力モードを設定 {#io_mode}

IO ポートの入力モードを設定します。

<BlockImage module="roboids/HamsterS" id="io_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| option | ドロップダウンオプション | 入出力モード | analog_input, digital_input, digital_input_pullup, digital_input_pulldown, analog_input_voltage, servo_output, pwm_output, digital_output | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.io_mode('both', 'analog_input')
```

## ポートの出力を設定 {#set_output}

指定した IO ポートの出力の値を設定します。

<BlockImage module="roboids/HamsterS" id="set_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| data | 入力値（ブロック） | 出力の値 | 0 ~ 180 の整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.set_output('a', 90)
```

## ポートの出力を変える {#change_output}

指定した IO ポートの出力の値を変えます。

<BlockImage module="roboids/HamsterS" id="change_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`), 両方(both) | - |
| data | 入力値（ブロック） | 変える出力の差 | 整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.change_output('a', 10)
```

## グリッパーを開く / 閉じる {#gripper}

HamsterS のグリッパーを開いたり閉じたりします。  
unit の値によって、2 つのメソッドのうち 1 つが呼び出されます。

<BlockImage module="roboids/HamsterS" id="gripper" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開く(open), 閉じる(close) | - |

### Python
```python
hamster_s = HamsterS(0)

# unit = "open"
hamster_s.open_gripper()
# unit = "close"
hamster_s.close_gripper()
```

## シューターの角度を設定 {#shooter}

シューターの角度を設定して制御します。角度の範囲は 0 ~ 180 です。

<BlockImage module="roboids/HamsterS" id="shooter" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | シューターの角度 | 0 ~ 180 の整数 | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.shooter(45)
```

## 入力 {#input}

HamsterS の入出力ポートの入力の値を返します。

<BlockImage module="roboids/HamsterS" id="input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入出力ポート | A (`'a'`), B (`'b'`) | - |

### Python
```python
hamster_s = HamsterS(0)

hamster_s.get_input('a')
```
