---
title: 音声テキスト変換
---

# 音声テキスト変換

## インスタンスの宣言 {#instance}

音声テキスト変換(ASR) ブロックを作業領域に追加すると、Python コードには次のようなインスタンスの宣言が自動的に挿入されます:

```python
asr = ASR(0)
# 複数のインスタンスがある場合
asr_1 = ASR(1)
```

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| index | ドロップダウンオプション | インスタンス番号（0 から始まる） | 0 以上の整数 | 0 |


## 言語を設定 {#lang}

音声認識の言語を設定します。言語を設定しなくても自動で設定されます。

<BlockImage module="AI/ASR" id="lang" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 認識する言語コード | プログラムが対応する 21 言語のコード（例: `'ja-JP'`, `'en-US'`） | - |

### Python
```python
asr = ASR(0)

asr.lang('ja-JP')
```

## 音声認識を開始 / 停止 {#listen}

音声認識を開始または停止します。

<BlockImage module="AI/ASR" id="listen" />

### パラメーター

| 名前 | 区分 | 説明 | 範囲・種類 | デフォルト値 |
| --- | --- | --- | --- | --- |
| unit | ドロップダウンオプション | 動作 | 開始(start), 停止(stop) | - |

### Python
```python
asr = ASR(0)

# unit = "start"
asr.start()
# unit = "stop"
asr.stop()
```

## 認識結果 {#result}

音声認識の結果

<BlockImage module="AI/ASR" id="result" />

### パラメーター

（なし）

### Python
```python
asr = ASR(0)

asr.result()
```

## 音声認識中？ {#state}

音声認識が有効な状態かどうかを **true(True) / false(False)** で返します。

<BlockImage module="AI/ASR" id="state" />

### パラメーター

（なし）

### Python
```python
asr = ASR(0)

asr.is_active()
```
