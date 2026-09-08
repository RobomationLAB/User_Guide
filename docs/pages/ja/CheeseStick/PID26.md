---
title: PID-26 環境センサー
---

# PID-26 環境センサー

## インスタンスの宣言 {#instance}

PID-26 環境センサー(PID26) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 開始 {#start}

PID-26 環境センサーを使います。

<BlockImage module="CheeseStick/PID26" id="start" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.start()
```

## 温度 {#temperature}

PID26 環境センサーで測定した温度の値を返します。 

<BlockImage module="CheeseStick/PID26" id="temperature" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.temperature()
```

## 湿度 {#humidity}

PID26 環境センサーで測定した湿度の値を返します。

<BlockImage module="CheeseStick/PID26" id="humidity" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.humidity()
```

## 気圧 {#pressure}

PID26 環境センサーで測定した気圧の値を返します。  

<BlockImage module="CheeseStick/PID26" id="pressure" />

### パラメーター

（なし）

### Python
```python
cheesestick = CheeseStick(0)
pid26 = cheesestick.PID26()

pid26.pressure()
```
