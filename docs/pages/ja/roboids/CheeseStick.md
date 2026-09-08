---
title: Cheese Stick
---

# Cheese Stick

## インスタンスの宣言 {#instance}

Cheese Stick(CheeseStick) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
# 複数のインスタンスがある場合
cheesestick_1 = CheeseStick(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 入力モードを設定 {#set_input_mode}

選んだポートの入力モードを設定します。

<BlockImage module="roboids/CheeseStick" id="set_input_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入力ポート | Sa, Sb, Sc, La, Lb, Lc | - |
| option | ドロップダウンオプション | 入力モード | メイキー(makey), ボタン(button), デジタルプルアップ(digital_pullup), デジタルプルダウン(digital_pulldown), アナログ(analog), アナログ電圧(analog_voltage) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_mode('Sa', 'button')
```

## 入力の範囲を設定 {#set_input_range}

選んだポートの入力値を、指定した最小~最大の範囲に変換します。  
入力値の範囲は 0 ~ 255 です。  
変換できる値の範囲は -100 ~ 100 です。

<BlockImage module="roboids/CheeseStick" id="set_input_range" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入力ポート | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 入力値（フィールド） | もとの最小値 | 0 ~ 255 の整数 | - |
| src_max | 入力値（フィールド） | もとの最大値 | 0 ~ 255 の整数 | - |
| dst_min | 入力値（フィールド） | 変換後の最小値 | -100 ~ 100 の整数 | - |
| dst_max | 入力値（フィールド） | 変換後の最大値 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range('Sa', 0, 255, 0, 100)
```

## 中間値で入力の範囲を設定 {#set_input_range_median}

選んだポートの入力値を、指定した最小~中間~最大の範囲に変換します。  
入力値の範囲は 0 ~ 255 です。  
変換できる値の範囲は -100 ~ 100 です。

<BlockImage module="roboids/CheeseStick" id="set_input_range_median" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入力ポート | Sa, Sb, Sc, La, Lb, Lc | - |
| src_min | 入力値（フィールド） | もとの最小値 | 0 ~ 255 の整数 | - |
| src_median | 入力値（フィールド） | もとの中間値 | 0 ~ 255 の整数 | - |
| src_max | 入力値（フィールド） | もとの最大値 | 0 ~ 255 の整数 | - |
| dst_min | 入力値（フィールド） | 変換後の最小値 | -100 ~ 100 の整数 | - |
| dst_median | 入力値（フィールド） | 変換後の中間値 | -100 ~ 100 の整数 | - |
| dst_max | 入力値（フィールド） | 変換後の最大値 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_input_range_median('Sa', 0, 128, 255, -100, 0, 100)
```

## 入力 {#get_input}

選んだポートの入力の値

<BlockImage module="roboids/CheeseStick" id="get_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 入力ポート | Sa, Sb, Sc, La, Lb, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_input('Sa')
```

## パルス入力モードを設定 {#set_pulse_input_mode}

選んだポートのパルス入力モードを設定します。

<BlockImage module="roboids/CheeseStick" id="set_pulse_input_mode" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | パルス入力ポート | Sc, Lc | - |
| option | ドロップダウンオプション | プルモード | パルス(default), パルス（プルアップ）(pull-up), パルス（プルダウン）(pull-down) | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pulse_input_mode('Sc', 'pull-up')
```

## パルスを検出？ {#get_pulse_input}

選んだポートでパルス入力が検出されたかどうか

<BlockImage module="roboids/CheeseStick" id="get_pulse_input" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | パルス入力ポート | Sc, Lc | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.get_pulse_input('Sc')
```

## デジタル出力を設定 {#set_digital_output}

指定したポートのデジタル出力の値を設定します。  
選べる値は 0 または 1 です。

<BlockImage module="roboids/CheeseStick" id="set_digital_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | デジタル出力ポート | Sa, Sb, Sc, La, Lb, Lc, Mab, Mcd | - |
| value | ドロップダウンオプション | 出力の値 | 0 または 1 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_digital_output('Sa', 1)
```

## PWM出力を設定 {#set_pwm_output}

指定したポートの PWM 出力の値を設定します。  
選べる値の範囲は 0 ~ 100 です。

<BlockImage module="roboids/CheeseStick" id="set_pwm_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | PWM 出力ポート | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 入力値（フィールド） | PWM の値 | 0 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.set_pwm_output('Sa', 50)
```

## PWM出力を変える {#change_pwm_output}

指定したポートの PWM 出力の値を変えます。  
選べる値の範囲は -100 ~ 100 です。

<BlockImage module="roboids/CheeseStick" id="change_pwm_output" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | PWM 出力ポート | Sa, Sb, Sc, La, Lb, Lc | - |
| value | 入力値（フィールド） | 変える PWM の差 | -100 ~ 100 の整数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.change_pwm_output('Sa', 10)
```

## ブザー音を設定 {#sound_buzz}

Cheese Stick のブザー音を設定します。

<BlockImage module="roboids/CheeseStick" id="sound_buzz" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| hz | 入力値（ブロック） | 周波数（Hz） | 0 ~ 6553.5 の実数 | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_buzz(440)
```

## 音を鳴らす {#sound_note}

Cheese Stick が指定した音階を鳴らします。

<BlockImage module="roboids/CheeseStick" id="sound_note" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| note | ドロップダウンオプション | 音階 | ド(C), ド#(C#), レ(D), レ#(D#), ミ(E), ファ(F), ファ#(F#), ソ(G), ソ#(G#), ラ(A), ラ#(A#), シ(B) | - |
| octave | ドロップダウンオプション | オクターブ | 1, 2, 3, 4, 5, 6, 7 | 4 |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_note('D', 5)
```

## 効果音を再生 {#sound_clip}

Cheese Stick が特定のサウンドクリップを再生します。

<BlockImage module="roboids/CheeseStick" id="sound_clip" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| clip | ドロップダウンオプション | サウンドクリップ名 | `'mute'`, `'beep'`, `'siren'`, `'engine'`, `'robot'`, `'happy'`, `'angry'`, `'sad'` など | - |
| wait | チェックボックス | 完了を待つかどうか | TRUE / FALSE | TRUE |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_clip('siren', wait=True)
```

## 音を止める {#sound_off}

Cheese Stick の音を消します。

<BlockImage module="roboids/CheeseStick" id="sound_off" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.sound_off()
```

## 軸の加速度 {#acceleration}

特定の軸の重力加速度の値

<BlockImage module="roboids/CheeseStick" id="acceleration" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 測定する軸 | x, y, z | - |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x')
```

## 温度 {#temperature}

温度センサーの値

<BlockImage module="roboids/CheeseStick" id="temperature" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.temperature()
```

## 信号強度 {#signal_strength}

信号の強さ

<BlockImage module="roboids/CheeseStick" id="signal_strength" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.signal_strength()
```

## バッテリー {#battery}

バッテリーの電圧

<BlockImage module="roboids/CheeseStick" id="battery" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.battery()
```

## 状態が変わったかどうか {#state_change}

ロボットの状態が変わったかどうか

<BlockImage module="roboids/CheeseStick" id="state_change" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 状態の種類 | 0 ~ 7（下の表を参照） | - |

| unit | 条件 |
|------|------|
| 0 | `acceleration('x') > 960` |
| 1 | `acceleration('x') < -960` |
| 2 | `acceleration('y') > 960` |
| 3 | `acceleration('y') < -960` |
| 4 | `acceleration('z') > 960` |
| 5 | `acceleration('z') < -960` |
| 6 | `tap()` (タップイベント) |
| 7 | `fall()` (落下イベント) |

### Python
```python
cheesestick = CheeseStick(0)

cheesestick.acceleration('x') > 960
cheesestick.tap()    # case 6
cheesestick.fall()   # case 7
```
