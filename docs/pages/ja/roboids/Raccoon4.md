---
title: RaccoonBot
---

# RaccoonBot

## インスタンスの宣言 {#instance}

RaccoonBot ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
raccoon = RaccoonBot(0)
# 複数のインスタンスがある場合
raccoon_1 = RaccoonBot(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 関節のモーターをオン / オフ {#motor}

それぞれの関節モーターにかかっている制御を解除するか、保つかを決めます。  
設定しない場合は、すべての関節のモーター制御がオンの状態で始まります。

<BlockImage module="roboids/Raccoon4" id="motor" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 関節番号 | すべて(-1), 1(1), 2(2), 3(3), 4(4) | -1 |
| on | チェックボックス | モーター制御 ON / OFF | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# すべての関節、モーター制御をオフ
raccoon.motor(-1, False)

# 1 番の関節、モーター制御をオン
raccoon.motor(1, True)
```

## 関節の速度を設定 {#speed_joint}

選んだ関節の速度を設定します。

<BlockImage module="roboids/Raccoon4" id="speed_joint" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| joint | ドロップダウンオプション | 関節番号 | すべて(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 入力値（ブロック） | 関節の速度 | -100 ~ 100 の整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_speed_joint(1, 100)
```

## 関節の速度を変える {#change_speed_joint}

選んだ関節の速度を変えます。

<BlockImage module="roboids/Raccoon4" id="change_speed_joint" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| joint | ドロップダウンオプション | 関節番号 | すべて(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_speed_joint(1, 50)
```

## 関節の速度をまとめて設定 {#speed_joints}

4 つの関節の速度をまとめて設定します。

<BlockImage module="roboids/Raccoon4" id="speed_joints" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（配列） | 4 つの関節の速度の配列 | `[joint1, joint2, joint3, joint4]`, 各 -100~100 | - |

### Python
```python
raccoon = RaccoonBot(0)

# リテラル配列 [10, 20, 30, 40]
raccoon.set_speed_joints(10, 20, 30, 40)

# 変数の配列
raccoon.set_speed_joints(*arr)
```

## 関節角度制御の速度を設定 {#angle_speed}

角度制御モードで関節を制御する速度を設定します。

<BlockImage module="roboids/Raccoon4" id="angle_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 角度制御の最大速度 | 0 ~ 100 の整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.angle_max_speed(100)
```

## 関節の角度を設定 {#angle_joint}

選んだ関節の角度を設定します。

| joint | min | max |
|-------|-----|-----|
| 1 | -120 | 120 |
| 2 | -90 | 30 |
| 3 | -150 | 0 |
| 4 | -105 | 105 |

<BlockImage module="roboids/Raccoon4" id="angle_joint" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| joint | ドロップダウンオプション | 関節番号 | すべて(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 入力値（ブロック） | 関節の角度（度） | 上の表を参照（自動で clamp） | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_angle_joint(1, 90, wait=True)
```

## 関節の角度を変える {#change_angle_joint}

選んだ関節の角度を変えます。

<BlockImage module="roboids/Raccoon4" id="change_angle_joint" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| joint | ドロップダウンオプション | 関節番号 | すべて(-1), 1(1), 2(2), 3(3), 4(4) | - |
| data | 入力値（ブロック） | 変える角度の差（度） | 上の表を参照（自動で clamp） | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_angle_joint(1, 10, wait=True)
```

## 関節角度をまとめて設定 {#angle_joints}

4 つの関節の角度をまとめて設定します。

<BlockImage module="roboids/Raccoon4" id="angle_joints" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（配列） | 4 つの関節の角度の配列または姿勢の名前 | `[j1, j2, j3, j4]` 配列 | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# 明示的な配列
raccoon.set_angle_joints(0, 0, 0, 0, wait=True)
```

## 関節の状態を初期化 {#default_angle_joints}

4 つの関節の角度を、あらかじめ定義された姿勢 (`'zero'`, `'park'`, `'home'`) に設定します。

<BlockImage module="roboids/Raccoon4" id="default_angle_joints" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | ドロップダウン | 姿勢の名前 | `'zero'` / `'park'` / `'home'` | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

姿勢のプリセット:
- `'zero'` → `[0, 0, 0, 0]`
- `'park'` → `[0, 25, -145, -60]`
- `'home'` → `[0, -10, -140, 60]`

### Python
```python
raccoon = RaccoonBot(0)

# 姿勢のプリセット
raccoon.set_angle_joints('home', wait=True)
```

## 関節角度を保存 {#save_encoder}

現在のエンコーダーの値を、好きな変数に保存します。

<BlockImage module="roboids/Raccoon4" id="save_encoder" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| encoder | 変数 | 保存する変数の名前 | 変数 | - |
| data | 入力値（配列） | 保存する初期の配列 | 4 要素の配列または空の配列 | - |

### Python
```python
raccoon = RaccoonBot(0)
encoder = None

encoder = raccoon.save_encoder([3, -6, -73, 60])
```

## 特定の座標を設定 {#set_coordinate}

特定の座標を設定して、ロボットアームを移動させます。  
それぞれの座標の範囲は次のとおりです。  
手首を基準 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
グリッパーを基準 => 接続した機器によって範囲が変わることがあります。  
グリッパーの向きは、地面に対して水平または垂直に固定されます。  
移動できない座標を入力した場合は、その命令をスキップします。

<BlockImage module="roboids/Raccoon4" id="set_coordinate" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| origin | ドロップダウンオプション | 基準点 | 手首(wrist), エンドエフェクター(end_effector) | - |
| pos | ドロップダウンオプション | 軸 | x, y, z | - |
| data | 入力値（ブロック） | 座標の値 | x: -20 ~ 20cm, y: -10 ~ 20cm, z: -2 ~ 28cm | - |
| unit | ドロップダウンオプション | 単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

# x 座標を 10cm に設定
raccoon.set_coordinate('wrist', 'x', 10, 'cm', wait=True)

# end_effector を基準にした z 座標
raccoon.set_coordinate('end_effector', 'z', 15, 'cm', wait=True)
```

## 特定の座標を変える {#change_coordinate}

現在の位置を基準に特定の座標を変えて、ロボットアームを移動させます。  
それぞれの座標の範囲は次のとおりです。  
手首を基準 => x: -20.0cm ~ 20.0cm, y: -10.0cm ~ 20.0cm, z: -2.0mm ~ 28.0cm  
グリッパーを基準 => 接続した機器によって範囲が変わることがあります。  
グリッパーの向きは、地面に対して水平または垂直に固定されます。  
移動できない座標を入力した場合は、その命令をスキップします。

<BlockImage module="roboids/Raccoon4" id="change_coordinate" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| origin | ドロップダウンオプション | 基準点 | 手首(wrist), エンドエフェクター(end_effector) | - |
| pos | ドロップダウンオプション | 軸 | x, y, z | - |
| data | 入力値（ブロック） | 変える座標の差 | 実数 | - |
| unit | ドロップダウンオプション | 単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_coordinate('wrist', 'y', 5, 'cm', wait=True)
```

## xyz 座標に移動 {#set_coordinates}

x, y, z の座標をそれぞれ指定した値にまとめて設定します。  

<BlockImage module="roboids/Raccoon4" id="set_coordinates" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| origin | ドロップダウンオプション | 基準点 | 手首(wrist), エンドエフェクター(end_effector) | - |
| x | 入力値（ブロック） | x 座標 | 実数 | - |
| y | 入力値（ブロック） | y 座標 | 実数 | - |
| z | 入力値（ブロック） | z 座標 | 実数 | - |
| unit | ドロップダウンオプション | 単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_coordinates('wrist', 0, 15, 20, 'cm', wait=True)
```

## エンドエフェクターのロックを設定 {#lock}

グリッパーを固定する向きを設定します。オプションを水平または垂直に設定したあとは、関節 4 の速度や角度を制御できなくなります。

<BlockImage module="roboids/Raccoon4" id="lock" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| mode | ドロップダウンオプション | 固定する向き | なし(none), 水平(horizontal), 垂直(vertical) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.lock('horizontal')
```

## エンドエフェクターでつかむ / 置く {#end_effector}

エンドエフェクターで物をつかんだり置いたりします。  
unit のドロップダウンの値によって、2 つのメソッドのうち 1 つが呼び出されます。

<BlockImage module="roboids/Raccoon4" id="end_effector" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | つかむ（閉じる）(pick), 置く（開く）(place) | - |

### Python
```python
raccoon = RaccoonBot(0)

# unit = "pick"
raccoon.pick()
# unit = "place"
raccoon.place()
```

## エンドエフェクターの機器 {#end_effector_device}

現在接続されているグリッパーの番号  
(1, 3, 4: つかみグリッパー, 2: 真空グリッパー)

<BlockImage module="roboids/Raccoon4" id="end_effector_device" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_device()
```

## エンドエフェクターの状態 {#end_effector_status}

グリッパーが物をつかんでいる状態  
(0: 置いた状態, 1: つかんだ状態)

<BlockImage module="roboids/Raccoon4" id="end_effector_status" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.end_effector_status()
```

## 音を鳴らす {#sound_note}

RaccoonBot が指定した音階を鳴らします。

<BlockImage module="roboids/Raccoon4" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_note('D', 5)
```

## 効果音を再生 {#sound_clip}

RaccoonBot が特定のサウンドクリップを再生します。

<BlockImage module="roboids/Raccoon4" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'siren'`, `'robot'`, `'connect'`, `'wake_up'`, `'start'`, `'bye'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_clip('siren', wait=True)
```

## 音を止める {#sound_off}

RaccoonBot の音を消します。

<BlockImage module="roboids/Raccoon4" id="sound_off" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.sound_off()
```

## エンコーダー {#encoder}

選んだ関節のエンコーダーの値

<BlockImage module="roboids/Raccoon4" id="encoder" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| joint | ドロップダウンオプション | 関節番号（またはすべての関節） | 1, 2, 3, 4, すべて(-1) | -1 |

### Python
```python
raccoon = RaccoonBot(0)

# joint = 1
raccoon.encoder(1)

# すべての関節
raccoon.encoder(-1)
```

## 選んだ要素の座標 {#coordinate}

基準点の現在の xyz 座標を返します。  
`pos` を省略すると `[x, y, z]` の配列全体を、指定するとその軸の値だけを返します。

<BlockImage module="roboids/Raccoon4" id="coordinate" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| origin | ドロップダウンオプション | 基準点 | 手首(wrist), エンドエフェクター(end_effector) | wrist |
| pos | ドロップダウンオプション | 軸（または全体） | x, y, z, xyz（省略すると配列全体を返す） | None（全体） |

### Python
```python
raccoon = RaccoonBot(0)

# 特定の軸
raccoon.get_coordinates('wrist', 'x')

# 全体（3 要素の配列）
raccoon.get_coordinates('wrist')
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/Raccoon4" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/Raccoon4" id="battery" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.battery()
```

## ボタンが押された？ {#button}

選んだボタンが押されているか、クリックイベントが発生したかどうか

<BlockImage module="roboids/Raccoon4" id="button" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | ボタンの名前 | teach, play, power, delete, any | - |
| event | ドロップダウンオプション | イベントの種類 | 押された(pressed), クリック(click), 長くクリック(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.button('teach', 'pressed')
```

## コンベヤーの速度を設定 {#conveyor_speed}

コンベヤーベルトの速度を設定します。速度の範囲は -100 ~ 100 です。

<BlockImage module="roboids/Raccoon4" id="conveyor_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | コンベヤーの速度 | -100 ~ 100 の整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.set_conveyor_speed(100)
```

## コンベヤーを動かす {#conveyor_distance}

コンベヤーで一定の距離だけ動かします。

<BlockImage module="roboids/Raccoon4" id="conveyor_distance" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 動かす距離 | 0 以上の実数 | - |
| unit | ドロップダウンオプション | 距離の単位 | cm, mm, インチ(inch) | cm |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_move(50, 'cm', wait=True)
```

## コンベヤーの速度を変える {#change_conveyor_speed}

コンベヤーベルトの速度を変えます。

<BlockImage module="roboids/Raccoon4" id="change_conveyor_speed" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| data | 入力値（ブロック） | 変える速度の差 | -200 ~ 200 の整数 | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.change_conveyor_speed(10)
```

## コンベヤーを止める {#stop_conveyor}

コンベヤーを止めます。

<BlockImage module="roboids/Raccoon4" id="stop_conveyor" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.stop_conveyor()
```

## コンベヤーが動いている？ {#conveyor_running}

コンベヤーベルトが動いているかどうか

<BlockImage module="roboids/Raccoon4" id="conveyor_running" />

### パラメーター

（なし）

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_running()
```

## コンベヤーのボタンが押された？ {#conveyor_button}

コンベヤーのボタンが押されているか、クリックイベントが発生したかどうか

<BlockImage module="roboids/Raccoon4" id="conveyor_button" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| event | ドロップダウンオプション | イベントの種類 | 押された(pressed), クリック(click), 長くクリック(long_click) | - |

### Python
```python
raccoon = RaccoonBot(0)

raccoon.conveyor_button('pressed')
```
