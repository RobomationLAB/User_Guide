---
title: Beagle
---

# Beagle

## インスタンスの宣言 {#instance}

Beagle ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
beagle = Beagle(0)
# 複数のインスタンスがある場合
beagle_1 = Beagle(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 車輪速度を設定 {#set_wheel_speed}

車輪の速度を決めます。速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/Beagle" id="set_wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 車輪の速度 | -100 ~ 100 の整数, 0: 停止 | - |

### Python
```python
beagle = Beagle(0)

beagle.set_wheel_speed('both', 50)
```

## 移動する {#move_distance}

現在の車輪速度で、指定した距離だけ移動します。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
距離の値が 0 の場合は、現在の車輪速度で進み続けます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Beagle" id="move_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する距離 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 距離の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.move_distance(50, 'cm', wait=True)
```

## 秒間移動する {#move_time}

現在の車輪速度で、指定した時間だけ移動します。  
車輪速度を設定していない場合は、既定の速度で前に進みます。  
待つにチェックを入れると、移動が完了するまで待ちます。

<BlockImage module="roboids/Beagle" id="move_time" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 移動する時間（秒） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

# wait = TRUE
beagle.move_time(5, wait=True)
# wait = FALSE
beagle.move_time(0.5, wait=False)
```

## その場で回転する {#turn_degree}

その場で回転する方向と角度を設定します。  
待つにチェックを入れると、回転が完了するまで待ちます。

<BlockImage module="roboids/Beagle" id="turn_degree" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 回転の方向 | 左(left), 右(right) | - |
| data | 入力値（ブロック） | 回転の角度（度） | 0 以上の実数 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.turn_degree('left', 90, wait=True)
```

## 車輪速度を変える {#change_speed}

Beagle の車輪速度を変えます。  
現在の車輪速度に入力した速度を足した値が、新しい車輪速度になります。  
新しく設定された車輪速度の範囲は -100 ~ 100 に収められます。

<BlockImage module="roboids/Beagle" id="change_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 車輪の種類 | 左(left), 右(right), 両方(both) | - |
| speed | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
beagle = Beagle(0)

beagle.change_wheel_speed('both', 10)
```

## 停止する {#stop}

Beagle の移動を止めます。  
Beagle の両方の車輪速度がどちらも 0 に初期化されます。

<BlockImage module="roboids/Beagle" id="stop" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.stop()
```

## 車輪が動いている？ {#wheel_moving}

車輪が動いていれば true、止まっていれば false を返します。

<BlockImage module="roboids/Beagle" id="wheel_moving" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.wheel_moving()
```

## ブザー音を設定 {#sound_buzz}

指定した周波数で、Beagle のブザー音を設定します。  
音を出せる周波数の範囲は 27.5hz ~ 6553.5hz です。  
これ以外の値を入力すると、ブザー音は鳴りません。

<BlockImage module="roboids/Beagle" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 0, 27.5 ~ 6553.5 の実数（それ以外は 0） | - |

### Python
```python
beagle = Beagle(0)

beagle.sound_buzz(440)
```

## 音符を鳴らす {#sound_note}

Beagle が指定した音階を鳴らします。

<BlockImage module="roboids/Beagle" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
beagle = Beagle(0)

beagle.sound_note('D', 5)
```

## 効果音を再生する {#sound_clip}

Beagle が特定のサウンドクリップを再生します。  
待つにチェックを入れると、再生が完了するまで待ちます。

<BlockImage module="roboids/Beagle" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'dibidibidip'`, `'happy'`, `'angry'`, `'sad'`, `'sleep'`, `'march'`, `'birthday'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.sound_clip('siren', wait=True)
```

## 音を消す {#sound_off}

Beagle の音を消します。

<BlockImage module="roboids/Beagle" id="sound_off" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.sound_off()
```

## 音を再生中？ {#sound_playing}

音を再生中なら true、再生中でなければ false を返します。

<BlockImage module="roboids/Beagle" id="sound_playing" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.sound_playing()
```

## 車輪速度 {#wheel_speed}

特定の車輪の速度

<BlockImage module="roboids/Beagle" id="wheel_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.wheel_speed('left')
```

## エンコーダー {#encoder}

特定の車輪のエンコーダーの値

<BlockImage module="roboids/Beagle" id="encoder" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 対象の車輪 | 左(left), 右(right) | - |

### Python
```python
beagle = Beagle(0)

beagle.encoder('left')
```

## ジャイロスコープ {#gyroscope}

特定の軸のジャイロセンサーの値

<BlockImage module="roboids/Beagle" id="gyroscope" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.gyroscope('x')
```

## 加速度センサー {#accelerometer}

特定の軸の加速度センサーの値

<BlockImage module="roboids/Beagle" id="accelerometer" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.accelerometer('x')
```

## 磁力センサー {#magnetometer}

特定の軸の地磁気センサーの値

<BlockImage module="roboids/Beagle" id="magnetometer" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
beagle = Beagle(0)

beagle.magnetometer('x')
```

## 温度 {#temperature}

温度センサーの値

<BlockImage module="roboids/Beagle" id="temperature" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.temperature()
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/Beagle" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/Beagle" id="battery" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.battery()
```

## 状態が変わったかどうか {#state_change}

ロボットの状態が変わったかどうか

<BlockImage module="roboids/Beagle" id="state_change" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 状態の種類 | 0 ~ 5（下の表を参照） | - |

| unit | 条件 |
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

## LiDARを開始 / 停止 {#lidar_power}

LiDAR センサーを有効または無効にします。

<BlockImage module="roboids/Beagle" id="lidar_power" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| on | ドロップダウンオプション | LiDAR ON / OFF | 開始(on=True), 停止(off=False) | TRUE |

### Python
```python
beagle = Beagle(0)

beagle.lidar_power(True)
```

## LiDARの ~ 番目の物体の距離 {#lidar_value}

LiDAR センサーは、周囲 360 度の物体との距離を測ることができます。  
Beagle の前方（0 番目の値）を基準に、反時計回りに進むほど番号が 1 ずつ大きくなります。

<BlockImage module="roboids/Beagle" id="lidar_value" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | 入力値（フィールド） | 物体の番号（0 から） | 0 以上の整数 | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_value(0)
```

## LiDARの方向別の距離 {#lidar_directions}

LiDAR センサーが測定した、前・後・両側・斜め方向の距離を表します。  
その方向の左右 45 度の距離の値の平均を出力します。

<BlockImage module="roboids/Beagle" id="lidar_directions" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| direction | ドロップダウンオプション | 測定する方向 | 前(front), 左前(left front), 左(left), 左後(left back), 後(back), 右後(right back), 右(right), 右前(right front) | - |

### Python
```python
beagle = Beagle(0)

beagle.lidar_directions('front')
```

## LiDARの準備完了？ {#lidar_state}

LiDAR がオンになっているかどうかを **true(True) / false(False)** で返します。

<BlockImage module="roboids/Beagle" id="lidar_state" />

### パラメーター

（なし）

### Python
```python
beagle = Beagle(0)

beagle.lidar_ready()
```
