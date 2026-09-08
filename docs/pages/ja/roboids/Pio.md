---
title: Piobot
---

# Piobot

## インスタンスの宣言 {#instance}

Piobot(Pio) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
pio = Pio(0)
# 複数のインスタンスがある場合
pio_1 = Pio(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 車輪速度を設定 {#set_wheel_speed}

車輪の速度を設定します。車輪速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/Pio" id="set_wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 車輪の速度 | -100 ~ 100 の整数, 0: 停止 | - |

### Python
```python
pio = Pio(0)

pio.set_wheel_speed('both', 50)
```

## 距離を移動 {#move_distance}

現在の車輪速度で、指定した距離だけ移動します。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
距離の値が 0 の場合は、現在の車輪速度で進み続けます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Pio" id="move_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する距離 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 距離の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.move_distance(50, 'cm', wait=True)
```

## 秒間移動 {#move_time}

現在の車輪速度で、指定した時間だけ移動します。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Pio" id="move_time" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する時間（秒） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# wait = TRUE
pio.move_time(5, wait=True)
# wait = FALSE
pio.move_time(5, wait=False)
```

## 度回転 {#turn_degree}

その場で回転する方向と角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/Pio" id="turn_degree" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |
| data | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

# direction = "left"
pio.turn_degree('left', 90, wait=True)
# direction = "right"
pio.turn_degree('right', 90, wait=True)
```

## 車輪速度を変える {#change_speed}

Piobot の車輪速度を変えます。  
現在の車輪速度に入力した速度を足した値が、新しい車輪速度になります。  
新しく設定された車輪速度の範囲は -100 ~ 100 に収められます。

<BlockImage module="roboids/Pio" id="change_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
pio = Pio(0)

pio.change_wheel_speed('both', 50)
```

## ターボモード オン / オフ {#turbo}

Piobot のターボモードをオンまたはオフにします。

<BlockImage module="roboids/Pio" id="turbo" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | ターボモード ON / OFF | オン(on=True), オフ(off=False) | TRUE |

### Python
```python
pio = Pio(0)

pio.turbo(True)
```

## 停止する {#stop}

Piobot の移動を止めます。  
Piobot の両方の車輪速度がどちらも 0 に初期化されます。

<BlockImage module="roboids/Pio" id="stop" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.stop()
```

## 車輪が動いている？ {#wheel_moving}

車輪が動いていれば true、止まっていれば false を返します。

<BlockImage module="roboids/Pio" id="wheel_moving" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.wheel_moving()
```

## ボード上で1マス移動 {#grid_move}

ボードの上を、決められたとおりに 1 マスずつ動きます。

<BlockImage module="roboids/Pio" id="grid_move" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 移動の方向 | 前(forward), 後(backward), 左(left), 右(right) | - |

### Python
```python
pio = Pio(0)

pio.grid_move('forward')
```

## ボード上で回転 {#grid_turn}

ボードの上で Piobot が、入力された方向に 90 度回転します。いつでも完了まで待ちます（内部で wait=True に固定）。

<BlockImage module="roboids/Pio" id="grid_turn" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |

### Python
```python
pio = Pio(0)

# unit = "left"
pio.grid_turn('left')
# unit = "right"
pio.grid_turn('right')
```

## 首の速度を設定 {#set_neck_speed}

首の回転速度を設定します。首の速度の範囲は 1 ~ 6 です。

<BlockImage module="roboids/Pio" id="set_neck_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 首の回転速度 | 1 ~ 6 の整数 | 4 |

### Python
```python
pio = Pio(0)

pio.set_neck_speed(4)
```

## 首の角度を設定 {#set_neck_angle}

首を回転させて到達する角度を設定します。首の角度の範囲は -45 ~ 45 です。

<BlockImage module="roboids/Pio" id="set_neck_angle" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 首の角度（度） | -45 ~ 45 の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.set_neck_angle(15, wait=True)
```

## 首が動いている？ {#neck_moving}

首が動いていれば true、止まっていれば false を返します。

<BlockImage module="roboids/Pio" id="neck_moving" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.neck_moving()
```

## 目の色を設定 {#set_eye_color}

Piobot の目のLEDの色を設定します。  
左、右または両方の目のLEDの色を変えることができます。  
色のプリセットから色を選ぶと、**色の名前**（英語の文字列）に変換されて呼び出されます。(R, G, B の数値ではなく色の名前でコードが生成されます。)

<BlockImage module="roboids/Pio" id="set_eye_color" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の目 | 左(left), 右(right), 両方(both) | - |
| color | ドロップダウンオプション | 色のプリセット → 色の名前（英語）に変換 | 黒(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', 'red')
```

## 色カテゴリーのブロックで目の色を設定 {#set_eye_color_with_block}

色カテゴリーにあるブロックで、Piobot の目のLEDの色を設定します。  
左、右または両方の目のLEDの色を変えることができます。

<BlockImage module="roboids/Pio" id="set_eye_color_with_block" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の目 | 左(left), 右(right), 両方(both) | - |
| data | 入力値（色） | [R, G, B] 配列 | 色カテゴリーのブロックまたは `[0~255, 0~255, 0~255]` | - |

### Python
```python
pio = Pio(0)

pio.set_eye_color('both', *Utils.color('red'))
```

## 指定した RGB の分だけ目の色を変える {#change_by_rgb}

指定した R, G, B の値の分だけ、Piobot の目のLEDの色を変えます。  
左、右または両方の色を設定できます。

<BlockImage module="roboids/Pio" id="change_by_rgb" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の目 | 左(left), 右(right), 両方(both) | - |
| r | 入力値（フィールド） | 赤の変化量 | -255 ~ 255 の整数 | 0 |
| g | 入力値（フィールド） | 緑の変化量 | -255 ~ 255 の整数 | 0 |
| b | 入力値（フィールド） | 青の変化量 | -255 ~ 255 の整数 | 0 |

### Python
```python
pio = Pio(0)

pio.change_eye_color('both', 10, 0, 0)
```

## 目のパターンを設定 {#set_eye_pattern}

目のパターンを設定し、パターンが始まるときのそれぞれの目の色を指定します。

<BlockImage module="roboids/Pio" id="set_eye_pattern" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| pattern | ドロップダウンオプション | パターンの種類 | オフ(reset), 点滅(blink), ディミング(dimming), 虹(rainbow) | - |
| left | ドロップダウンオプション | 左目の色 | デフォルト(black), 赤(red), 黄(yellow), 緑(green), シアン(cyan), 青(blue), マゼンタ(magenta), 白(white) | white |
| right | ドロップダウンオプション | 右目の色 | (left と同じ) | white |

### Python
```python
pio = Pio(0)

pio.set_eye_pattern('dimming', 'green', 'red')
```

## 目を消す {#turn_off}

目の色を消します。

<BlockImage module="roboids/Pio" id="turn_off" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の目 | 左(left), 右(right), 両方(both) | both |

### Python
```python
pio = Pio(0)

pio.turn_off('both')
```

## ブザー音を設定 {#sound_buzz}

指定した周波数で、Piobot のブザー音を設定します。  
音を出せる周波数の範囲は 27.5hz ~ 6553.5hz です。  
これ以外の値を入力すると、ブザー音は鳴りません。

<BlockImage module="roboids/Pio" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 27.5 ~ 6553.5 の実数 | - |

### Python
```python
pio = Pio(0)

pio.sound_buzz(440)
```

## 音を鳴らす {#sound_note}

Piobot が指定した音階を鳴らします。

<BlockImage module="roboids/Pio" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#/レ♭(C#), レ(D), レ#/ミ♭(D#), ミ(E), ファ(F), ファ#/ソ♭(F#), ソ(G), ソ#/ラ♭(G#), ラ(A), ラ#/シ♭(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
pio = Pio(0)

pio.sound_note('D', 5)
```

## サウンドクリップを再生 {#sound_clip}

Piobot が特定のサウンドクリップを再生します。  
待つにチェックを入れると、再生が完了するまで待ちます。

<BlockImage module="roboids/Pio" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'beep2'`, `'beep3'`, `'siren'`, `'engine'`, `'robot'`, `'connect'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_clip('siren', wait=True)
```

## メロディーを再生 {#sound_melody}

Piobot が特定のメロディーを再生します。  
待つにチェックを入れると、再生が完了するまで待ちます。

<BlockImage module="roboids/Pio" id="sound_melody" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| melody | ドロップダウンオプション | メロディー名 | `'mute'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'`, `'dibidibidip'`, `'good_job'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
pio = Pio(0)

pio.sound_melody('happy', wait=True)
```

## サウンドをオフ {#sound_off}

Piobot の音を消します。

<BlockImage module="roboids/Pio" id="sound_off" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.sound_off()
```

## サウンドを再生中？ {#sound_playing}

音を再生中なら true、再生中でなければ false を返します。

<BlockImage module="roboids/Pio" id="sound_playing" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.sound_playing()
```

## ホイールの速度 {#wheel_speed}

特定の車輪の速度

<BlockImage module="roboids/Pio" id="wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
pio = Pio(0)

pio.wheel_speed('left')
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/Pio" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/Pio" id="battery" />

### パラメーター

（なし）

### Python
```python
pio = Pio(0)

pio.battery()
```

## キーパッドのボタン {#keypad}

ユーザーが最後に押したキーパッドのボタンを検知します。

<BlockImage module="roboids/Pio" id="keypad" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| button | ドロップダウンオプション | 検知するボタン | 実行(play), 前へ移動(forward), 後ろへ移動(backward), 左へ移動(left), 右へ移動(right), 動作(action), 繰り返し(repeat), 削除(clear) | - |

### Python
```python
pio = Pio(0)

pio.keypad('forward')
```
