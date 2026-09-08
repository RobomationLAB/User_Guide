---
title: Turtle
---

# Turtle

## インスタンスの宣言 {#instance}

Turtle ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
turtle = Turtle(0)
# 複数のインスタンスがある場合
turtle_1 = Turtle(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 車輪速度を設定 {#set_wheel_speed}

車輪の速度を決めます。速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/Turtle" id="set_wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 車輪の速度 | -100 ~ 100 の整数, 0: 停止 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_wheel_speed('both', 50)
```

## 移動する {#move_distance}

移動する距離を設定します。  
車輪速度を設定していない場合は、移動しません。  
距離の値が 0 の場合は、現在の車輪速度で進み続けます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Turtle" id="move_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する距離 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 距離の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.move_distance(50, 'cm', wait=True)
```

## 秒間移動する {#move_time}

現在の車輪速度で、指定した時間だけ移動します。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Turtle" id="move_time" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する時間（秒） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

# wait = TRUE
turtle.move_time(5, wait=True)
# wait = FALSE
turtle.move_time(0.5, wait=False)
```

## 度回転する {#turn_degree}

その場で回転する方向と角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/Turtle" id="turn_degree" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |
| data | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.turn_degree('left', 90, wait=True)
```

## 車輪速度を変える {#change_speed}

Turtle の車輪速度を変えます。  
現在の車輪速度に入力した速度を足した値が、新しい車輪速度になります。

<BlockImage module="roboids/Turtle" id="change_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.change_wheel_speed('both', 10)
```

## 停止する {#stop}

Turtle の移動を止めます。

<BlockImage module="roboids/Turtle" id="stop" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.stop()
```

## 車輪が動いている？ {#wheel_moving}

車輪が動いていれば true、止まっていれば false を返します。

<BlockImage module="roboids/Turtle" id="wheel_moving" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.wheel_moving()
```

## 車輪を中心に旋回する {#pivot}

旋回の中心と方向、角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/Turtle" id="pivot" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| base | ドロップダウンオプション | 旋回の中心になる車輪 | 左車輪(left_wheel), 右車輪(right_wheel) | - |
| direction | ドロップダウンオプション | 回転の方向 | 前進(forward), 後進(backward) | - |
| data | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot('left_wheel', 'forward', 90, wait=True)
```

## 円を描く {#pivot_circle}

ペンで円を描くとき、回転の方向、半径、角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/Turtle" id="pivot_circle" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左前(left_forward), 左後(left_backward), 右前(right_forward), 右後(right_backward) | - |
| degree | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| radius | 入力値（ブロック） | 回転の半径 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 半径の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.pivot_circle('left_forward', 90, 1, 'cm', wait=True)
```

## 線をたどる {#trace_line}

床のカラーセンサーを使って、特定の色の線をたどって移動します。

<BlockImage module="roboids/Turtle" id="trace_line" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| line | ドロップダウンオプション | たどる線の色 | 黒(black), 赤(red), 緑(green), 青(blue), すべての色(any) | black |

### Python
```python
turtle = Turtle(0)

turtle.trace_line('black')
```

## 特定の色まで線をたどる {#trace_line_until_color}

床のカラーセンサーを使って、B の色に出会うまで A の色の線をたどって移動します。

<BlockImage module="roboids/Turtle" id="trace_line_until_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| line | ドロップダウンオプション | たどる線の色 | 黒(black), 赤(red), 緑(green), 青(blue), すべての色(any) | - |
| color | ドロップダウンオプション | 止まる色 | 黒(black), 赤(red), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), すべての色(any) | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_line_until_color('black', 'red', wait=True)
```

## 交差点を移動して次の交差点まで進む {#intersection}

Turtle が交差点で指定した方向に移動したあと、次の交差点に出会うまで進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。  

<BlockImage module="roboids/Turtle" id="intersection" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 交差点での移動方向 | 前進(forward), 左(left), 右(right), Uターン(uturn) | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.trace_intersection('left', wait=True)
```

## ライントレース速度を設定 {#set_trace_speed}

ライントレースの速度を設定します。速度の範囲は 1 ~ 10 です。

<BlockImage module="roboids/Turtle" id="set_trace_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | ライントレースの速度 | 1 ~ 10 の整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_speed(5)
```

## ライントレースゲインを設定 {#set_trace_gain}

ライントレースの方向の変化量を設定します。変化量の範囲は 1 ~ 10 です。

<BlockImage module="roboids/Turtle" id="set_trace_gain" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 方向の変化量 | 1 ~ 10 の整数 | - |

### Python
```python
turtle = Turtle(0)

turtle.set_trace_gain(5)
```

## ライントレースを停止する {#stop_trace}

Turtle のライントレース機能を終了します。

<BlockImage module="roboids/Turtle" id="stop_trace" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.stop_trace()
```

## ヘッドLEDの色を設定 {#set_led_color}

Turtle のヘッドLEDの色を設定します。  
カラーパレットで色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。(R, G, B の数値ではなく色の名前でコードが生成されます。)

<BlockImage module="roboids/Turtle" id="set_led_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | 色 | カラーパレットの選択 → 色の名前（英語）に変換 | 色の名前: `'black'`, `'red'`, `'yellow'`, `'green'`, `'cyan'`, `'blue'`, `'magenta'`, `'white'` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color('red')
```

## 色カテゴリーのブロックでLEDの色を設定 {#set_led_color_with_block}

色カテゴリーのブロックの出力 (`[R, G, B]`) を入力として受け取り、ヘッドLEDの色を設定します。

<BlockImage module="roboids/Turtle" id="set_led_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（色） | 色カテゴリーのブロックまたは `[R, G, B]` 配列 | `[0~255, 0~255, 0~255]` | - |

### Python
```python
turtle = Turtle(0)

turtle.set_led_color(*Utils.color('red'))
```

## RGB の分だけLEDの色を変える {#change_by_rgb}

現在のヘッドLEDの色に、入力した R, G, B の変化量を足して新しい色を設定します。

<BlockImage module="roboids/Turtle" id="change_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
turtle = Turtle(0)

turtle.change_led_color(10, 0, 0)
```

## ヘッドLEDを消す {#turn_off}

ヘッドLEDの色を消します。

<BlockImage module="roboids/Turtle" id="turn_off" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.turn_off()
```

## ブザー音を設定 {#sound_buzz}

指定した周波数で、Turtle のブザー音を設定します。

<BlockImage module="roboids/Turtle" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 0 ~ 6553.5 の実数 | - |

### Python
```python
turtle = Turtle(0)

turtle.sound_buzz(440)
```

## 音符を鳴らす {#sound_note}

Turtle が指定した音階を鳴らします。

<BlockImage module="roboids/Turtle" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
turtle = Turtle(0)

turtle.sound_note('D', 5)
```

## 効果音を再生 {#sound_clip}

Turtle が特定のサウンドクリップを再生します。

<BlockImage module="roboids/Turtle" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
turtle = Turtle(0)

turtle.sound_clip('siren', wait=True)
```

## 音を消す {#sound_off}

Turtle の音を消します。

<BlockImage module="roboids/Turtle" id="sound_off" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.sound_off()
```

## 音を再生中？ {#sound_playing}

音を再生中なら true、再生中でなければ false を返します。

<BlockImage module="roboids/Turtle" id="sound_playing" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.sound_playing()
```

## ホイールの速度 {#wheel_speed}

特定の車輪の速度

<BlockImage module="roboids/Turtle" id="wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
turtle = Turtle(0)

turtle.wheel_speed('left')
```

## 床面カラーセンサー {#floor}

床のカラーセンサーの値

<BlockImage module="roboids/Turtle" id="floor" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.floor()
```

## カードの色 {#card_color}

床のカラーセンサーで読み取ったカードの色の名前

<BlockImage module="roboids/Turtle" id="card_color" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.card_color()
```

## カードの色パターン {#card_pattern}

床のカラーセンサーで読み取ったカードの色のパターン

<BlockImage module="roboids/Turtle" id="card_pattern" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.card_pattern()
```

## 軸の加速度 {#acceleration}

特定の軸の重力加速度の値

<BlockImage module="roboids/Turtle" id="acceleration" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
turtle = Turtle(0)

turtle.acceleration('x')
```

## 温度 {#temperature}

温度センサーの値

<BlockImage module="roboids/Turtle" id="temperature" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.temperature()
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/Turtle" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/Turtle" id="battery" />

### パラメーター

（なし）

### Python
```python
turtle = Turtle(0)

turtle.battery()
```

## 特定の色に触れている？ {#color_read}

指定した特定の色に触れているかを、Turtle のカラーセンサーで測定して **true(True) / false(False)** で返します。

<BlockImage module="roboids/Turtle" id="color_read" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| color | ドロップダウンオプション | 色の名前 | unknown, red, yellow, green, cyan, blue, magenta, white | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_color('red')
```

## カードパターンが ~ ? {#pattern_read}

カラーセンサーが認識したカードの色のパターンが一致するかを **true(True) / false(False)** で返します。

<BlockImage module="roboids/Turtle" id="pattern_read" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| pattern | ドロップダウンオプション | カードパターン名 | `'red_yellow'`, `'red_green'`, `'blue_red'` | - |

### Python
```python
turtle = Turtle(0)

turtle.is_card_pattern('red_yellow')
```

## 背面ボタンの状態 {#button}

背面にあるボタンが押されているか、クリックされたかどうか

<BlockImage module="roboids/Turtle" id="button" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| event | ドロップダウンオプション | ボタンの状態の種類 | 押された(pressed), クリックされた(click), 長くクリックされた(long_click) | - |  

### Python
```python
turtle = Turtle(0)

turtle.button('pressed')
```

## 状態が変わったかどうか {#state_change}

ロボットの状態が変わったかどうか

<BlockImage module="roboids/Turtle" id="state_change" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 状態の種類 | 0 ~ 5（下の表を参照） | - |

| unit | 条件 |
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
