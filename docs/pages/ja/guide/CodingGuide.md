---
title: コーディングガイド
---

# コーディングガイド

この文書では、ロボメーションが開発した「ロボット動作ストリーミングサービスのための実行エンジンおよび統合オーサリング環境」の一つである、ロボットコーディング教育用プラットフォーム RobomationLAB（ロボメーションラボ）について説明します。  

次の順序で詳しく説明します:
- RobomationLAB の主な特徴
- RobomationLAB のロボットプログラミング方式
- RobomationLAB のロボットコーディングの基本文法体系  

<br>

## 目次 {#table-of-contents}
1. [RobomationLAB ロボットコーディング教育プラットフォーム](#platform)  
    1-1) [ロボットコーディングプログラム](#coding-programs)  
    1-2) [ブロック ↔ Python のリアルタイム双方向変換](#block-python-conversion)  
    1-3) [コーディングプログラムの主な特徴](#features)  
    1-4) [リアルタイムのロボット制御方式](#control-method)  

2. [RobomationLAB のロボットプログラミング方式](#programming-method)  
    2-1) [順次実行と並列実行](#sequential-parallel)  
    2-2) [setup 関数](#setup)  
    2-3) [loop 関数](#loop)  

3. [RobomationLAB のロボットコーディングの基本文法体系](#grammar-syntax)  
    3-1) [robomation パッケージの読み込み](#import-package)  
    3-2) [ロボットインスタンスの作成](#create-instance)  
    3-3) [ロボット制御メソッド](#control-methods)  
    3-4) [センサーと状態の読み取り](#sensor)  
    3-5) [イベントの検出](#event)  
    3-6) [動作完了の待機 (wait)](#wait)  
    3-7) [ユーティリティ関数 (Utils)](#utils)   

<br><br>

## RobomationLAB ロボットコーディング教育プラットフォーム {#platform}
RobomationLAB は **AI ロボティクス SW 教育**に最適化されたプラットフォームで、  
小学生・中学生を対象としたロボットコーディング教育のための Chrome ウェブブラウザーベースの統合オーサリング環境を提供します。  

RobomationLAB は **ブロックコーディング**、**スクリプトコーディング** など、さまざまな方式のロボットコーディング教育用プログラムを提供します。  
コーディングの理論を学ぶだけでなく、ロボメーションの製品を使って実際にロボットを動かして制御しながら、  
コーディングとロボットを同時に学べる機会を提供します。

<br>

### ロボットコーディングプログラム {#coding-programs}

#### Block Composer (ブロックコンポーザー) {#block-composer}
**Block Composer は、ブロックコーディングで自社ロボットを簡単かつ素早く制御しながら、ロボット制御の基礎を学べるツールです。**  

- フィジカルコンピューティングに最適化されたオーサリング環境

- ブロックの Drag&Drop 方式で、初心者でも簡単にコーディングできる  
- 基本概念から文法エラーのない学習環境を提供  
- Python スクリプトコードへ自動変換  
- ロボットごとにあらかじめ決められた機能を持つブロックパレットと、さまざまな体験サンプルを提供
- コードの実行によってリアルタイムに結果を確認できる  
- ブロックの組み合わせで問題解決能力と創造力が向上  
- AI によるスクリプトコード分析を通じて最適化されたフィードバックを提供  

<br>

#### Script Composer (スクリプトコンポーザー) {#script-composer}
**Script Composer は、Python コーディングで自社ロボットを簡単かつ素早く制御しながら、Python の文法とロボットコーディングの基礎を学べるツールです。**  

- Python エディターを提供

- 言語別のコード自動補完とコード挿入機能を提供
- ロボットごとにさまざまな体験サンプルコードを提供
- コードの実行によってリアルタイムに結果を確認できる
- AI によるスクリプトコード分析を通じて最適化されたフィードバックを提供

<br>

#### コーディングプログラムの主な特徴 {#features}
RobomationLAB が提供するロボットコーディングプログラムの主な特徴は次のとおりです。  
1.	Chrome ウェブブラウザーベースで、OS（オペレーティングシステム）の制約を受けない
2.	Web Serial 通信ベースで、USB ドングルを通じてロボットのハードウェアを直接制御
3.	複数ロボットの同時制御に対応 - ロボットの種類・台数に制限なし
4.	ファイル保存時、成果物は JSON テキストファイルに変換して保存

<br>

### リアルタイムのロボット制御方式 {#control-method}
RobomationLAB が提供するロボットコーディングプログラムでは、次のような過程を通じてリアルタイムにロボットを制御します。  
1.	ブロックコーディングまたはスクリプトコーディングを通じて、
ロボットを制御するための Effector, Command オブジェクトの値を設定したり、
ロボットの Sensor の値や Event の発生を利用するコードを書きます。
2.	コードを実行します。
3.	Web Serial 通信を通じてロボットから Sensor および Event のデータを含むパケットを受け取り、
ロボットの Device オブジェクトに反映します。
4.	リアルタイムにコードを解釈して、
Effector, Command オブジェクトにデータを上書きしたり、Sensor, Event オブジェクトの値を読み取ります。
5.	ロボットの Device オブジェクトのデータを反映したパケットを生成したうえで、
Web Serial 通信を通じてロボットに送信し、実際にロボットが動作するか確認します。
6.	コードが実行されている間、3 ~ 5 の過程を約 10 ~ 20ms ごとに繰り返し実行します。  

<br>

### ブロック ↔ Python のリアルタイム双方向変換 {#block-python-conversion}
RobomationLAB はブロックコーディングエディターと Python コーディングエディターを一緒に提供し、2 つのエディターはリアルタイムに双方向で同期します。

- ブロックコーディングエディターでブロックを追加・修正・削除すると、その変更がリアルタイムに Python コードへ反映されます。
- 逆に Python コーディングエディターでコードを修正すると、その変更がリアルタイムにブロックへ反映されます。

このようにブロックと Python コードが 1 対 1 で対応して双方向に変換されるため、  
ブロックで全体の構造を素早く作ってから Python で細部のコードを整えたり、ブロックと比べながら Python の文法を学んだりと、  
ブロックコーディングとスクリプトコーディングを行き来する有機的なコーディングができます。

> ただし、Python → ブロックの変換は、ブロックで表現できるコードに限って行われます。  
> (文法が誤っている場合やブロックに変換できないコードの場合は、切り替えができないことがあります。  
詳しくは [コーディング規則](CodingRules) の文書を参照してください。)

<br>

<br><br>

## RobomationLAB のロボットプログラミング方式 {#programming-method}

### 順次実行と並列実行 {#sequential-parallel}
ロボットをプログラミングする方式には、順次実行方式と並列実行方式があります。  
順次実行は、一つの動作が終わったあとに次の動作を行う方式で、単純な行動をコーディングするのに適しています。  
たとえば、ロボットを前に動かしたあとに止まって LED を点灯させたい場合、それぞれの動作に当たるコードを順番に並べて時間順に実行できるよう、順次実行方式が使えなければなりません。  

並列実行は、複数の動作を同時に行う方式で、より複雑で高度な行動をプログラミングするのに必要です。  
たとえば、2 足歩行ロボットが歩く動作を実装しようとする場合、ロボットの足と脚を同時に動かさないと歩行できないため、並列実行方式のコーディングが使えなければなりません。

RobomationLAB が提供するロボットコーディングプログラムは、  
Arduino の H/W 開発環境に似た setup / loop のコード構造をベースに、順次実行方式と並列実行方式を同時にサポートします。

<BlockImage module="program/Editor" id="block-structure" />

Block Composer に初めてアクセスすると、次のように 2 つの空の関数ブロックが作業空間に表示されます。  
「セットアップ関数」ブロックは `setup` 関数を、「ループ関数」ブロックは `loop` 関数を表します。  

ブロックはリアルタイムに Python コードへ変換され、  
コードは次のような基本構造を持ちます。  

```python
# Python コードの基本構造
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> ロボットを制御するには、コードの最上部に `from robomation import *` を置き、使うロボットをインスタンスとして宣言します。(例: `hamster_s = HamsterS(0)`)


<br>

### setup 関数 {#setup}
setup 関数は「コードの実行」をした瞬間に一度だけ実行されます。  
setup 関数では主に、変数を初期化したり、ロボットのモードや機能を初期化するコードを書きます。  
たとえば、車輪で動くロボットを制御するとき、setup 関数では車輪の初期速度を設定できます。  

関数の中で時間の遅延が必要な場合、`Utils.wait(...)` 関数を使うと、まるで同期方式のように時間順に動作するコードを書けます。  
`Utils.wait(...)` は指定した時間（秒）だけ待ってから次のコードを実行するので、決められた時間または動作のあとに目覚めて次のコードを続けて実行します。  
この機能を活用すれば、単純な順次実行だけでなく、並列実行の役割を果たす loop 関数との連携を通じて、強力なロボットプログラミングができるでしょう。

次は、HamsterS ロボットが 1 秒間前進したあと 1 秒間後退するコードを書く例です。  
並列実行方式の loop 関数の中で上の動作を実装しようとすると、時間の計算と制御のコードが混ざってコードが非常に複雑になってしまいます。  
代わりに、setup 関数の中で `Utils.wait` の時間遅延関数を使えば、まるで同期方式のように時間順に動作するコードを書けます。  
( `Utils.wait` 関数については、このあとの [ユーティリティ関数 (Utils)](#utils) で改めて説明します。 )

サンプルコード (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # 両方の車輪速度を 50 に設定して前に動かす
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 1 秒待つ
    # 両方の車輪速度を -50 に設定して後ろに動かす
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 1 秒待つ
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( ロボットのインスタンスとメソッドの文法については、このあとの [RobomationLAB のロボットコーディングの基本文法体系](#grammar-syntax) で改めて説明します。 )


<br>

### loop 関数 {#loop}
loop 関数は並列実行をサポートし、コードが実行されている間、約 10ms ごとに繰り返し実行されます。  
loop 関数では主に、変数の値を繰り返し設定したり、ロボットの特定のイベントの発生を検出して処理するコードを書きます。  

次は、時間に応じて HamsterS ロボットの車輪速度と LED の色が変わるコードを書く例です。  
( setup / loop 関数の外で宣言した変数を関数の中で変更するときは、`global` キーワードで宣言します。 )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # loop 関数が呼ばれるたびに frame 変数の値を 1 ずつ増やす

    # 変わった frame の値を使って、両方の車輪速度と両方の LED の RGB 値を設定
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( ロボットのインスタンスとメソッドの文法については、このあとの [RobomationLAB のロボットコーディングの基本文法体系](#grammar-syntax) で改めて説明します。 )  

次は、HamsterS ロボットの本体を軽くたたく Tap の動作が発生したら、LED を赤色で点灯させるコードを書く例です。  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # Tap の動作が発生した瞬間に、イベントの発生を検出
    if hamster_s.tap():               # イベント検出時に True
        hamster_s.set_led_color('both', 'red')   # 両方の LED を赤色で点灯
    else:
        hamster_s.turn_off('both')               # 両方の LED を消灯
```
( イベントの検出(`tap()`) などの文法については、このあとの [RobomationLAB のロボットコーディングの基本文法体系](#grammar-syntax) で改めて説明します。 )  

<br><br>

## RobomationLAB のロボットコーディングの基本文法体系 {#grammar-syntax}
RobomationLAB が提供するロボットコーディングプログラムでコードを書くときに守るべき基本文法体系は次のとおりです。  
ロボットの制御は `robomation` の Python パッケージを通じて行われ、  
ロボットをインスタンスにしたうえで、そのインスタンスのメソッドを呼び出す方式でコードを書きます。

### robomation パッケージの読み込み {#import-package}
ロボットの制御に必要なクラス（ロボット）とユーティリティ(`Utils`)を使うには、コードの最上部に次の 1 行を含めます。

```python
from robomation import *
```

<br>

### ロボットインスタンスの作成 {#create-instance}
使うロボットをインスタンスとして宣言します。  
クラス名はロボットの種類を、括弧の中の数字はインスタンスのインデックス（0 から始まる）を表します。

```python
hamster_s = HamsterS(0)   # HamsterS 1 台
```

ロボットごとのクラス名とデフォルトの変数名は次のとおりです。

| ロボット | クラス名 | デフォルトの変数名 |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

同じ種類のロボットを複数台使う場合は、インデックスを 0, 1, 2 … と増やして宣言します。

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### ロボット制御メソッド {#control-methods}
ロボットを制御するときは、インスタンスのメソッドを呼び出します。  
メソッドは、車輪速度の設定、移動、LED、音など、ロボットの動作を行います。

```python
hamster_s.set_wheel_speed('both', 50)    # 両方の車輪速度を設定
hamster_s.move_distance(10, 'cm')        # 10cm 前に動かす
hamster_s.set_led_color('both', 'red')   # 両方の LED を赤色に
```

ロボットごとに使えるメソッドの一覧とパラメーターは、それぞれのロボットの文書（「HamsterS」など）を参照してください。

<br>

### センサーと状態の読み取り {#sensor}
センサーの値やロボットの状態を読み取るときもメソッドを呼び出し、メソッドがその値を返します。

```python
left = hamster_s.floor('left')        # 左の床センサーの値を読み取る
dist = hamster_s.proximity('right')   # 右の近接センサーの値を読み取る
```

<br>

### イベントの検出 {#event}
状態の変化や環境の変化で発生するイベントは、そのイベントのメソッドが  
イベントが発生した瞬間に True を返す方式で検出します。

```python
if hamster_s.tap():        # たたく(Tap)イベントが発生した瞬間に True
    hamster_s.set_led_color('both', 'red')
```

<br>

### 動作完了の待機 (wait) {#wait}
移動・回転・音の再生のように完了まで時間がかかるメソッドは、`wait` パラメーターを持ちます。
- `wait=True` (デフォルト値): 動作が完了するまで待ってから次のコードを実行します。
- `wait=False`: 動作を開始してすぐに次のコードを続けて実行します。

```python
hamster_s.move_distance(10, 'cm', wait=True)    # 移動が終わるまで待つ
hamster_s.move_distance(10, 'cm', wait=False)   # 移動を開始してすぐ次のコードを実行
```

<br>

### ユーティリティ関数 (Utils) {#utils}
時間の遅延、音の再生、ログ出力、色など、ロボットの種類に関係のない共通の機能は `Utils` クラスのメソッドを通じて使います。

```python
Utils.wait(1)              # 1 秒待つ
Utils.speak('こんにちは')     # テキスト読み上げ(TTS)を再生
Utils.log(0, '', '')       # コンソールログを出力
```

<br>
