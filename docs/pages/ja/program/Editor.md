---
title: エディター
---

# エディター

**エディター**は、**ブロック**または**スクリプトコード**を使って、ロボットを制御するためのコードを書ける領域です。  
以下では、**ブロックコーディング / スクリプト(Python)コーディング**の環境でそれぞれコーディングする方法と、注意すべき点を紹介します。

## ブロックコーディングエディター {#block-editor}

### ブロックカテゴリー {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

RobomationLAB が提供するブロックを**カテゴリー**に分類した領域です。  
カテゴリーをクリックすると、それぞれのカテゴリーに当たる**ブロックパレット**を確認できます。  

次は、基本として提供されるブロックカテゴリーの種類です。  

- 論理
- ループ
- 数学
- テキスト
- リスト
- 色
- オーディオ
- 制御
- 変数
- 関数
- その他

このほかにも、[**ロボット**](Menu#robot)または[**拡張モジュール**](Menu#extension)をプログラムに追加すると、プログラムで専用のブロックパレットを使えます。  

<br>

**⚙️ 参考**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

プログラムに追加したブロックのうち、もう使わないカテゴリーは、**マウスの右クリック → 削除**でブロックカテゴリーから外せます。

<br>

### ブロックパレット {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

それぞれのカテゴリーのすべてのブロックを集めた領域です。  
ブロックパレットにあるブロックは、**Drag&Drop** の方式でコーディング領域へ移せます。  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ 参考**  
ブロックの使い方を確認したい場合は、**マウスの右クリック → ヘルプ**で、ブロックごとに使い方が説明されたヘルプを確認できます。  

<br>

### コーディング領域 {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

ブロックパレットから持ってきたブロックを組み立てられる領域です。  


組み立てたブロックはリアルタイムに **Python コード**へ変換され、  
コードを実行すると、そのコードを解釈してロボットを動かして制御できます。  

<br>

### ブロックの基本構造 {#block-structure}

ブロックコーディングエディターでコーディングをするときは、次のような基本構造を守る必要があります。

<BlockImage module="program/Editor" id="block-structure" /><br>

ブロックコーディングエディターでは、**セットアップ関数**と**ループ関数**の関数ブロックの中にあるコードを解釈して実行します。  
そのため、**セットアップ関数**と**ループ関数**の関数ブロックの中にブロックを入れてコードを書く必要があります。  

**セットアップ関数**  
セットアップ関数のブロックの中には、コードの実行時に最初に行う動作を定義します。  
**待つ**ブロックを活用して、時間の順に動作が行われるようにできます。  

**ループ関数**  
ループ関数のブロックの中には、コードが実行されている間、繰り返して行う動作を定義します。  
定義した動作を 10ms に 1 回ずつ繰り返して行います。  

**⚙️ 参考**  
(**関数カテゴリー**で作ったカスタム関数を除いて)  
**セットアップ関数**または**ループ関数**の関数ブロックの外にあるブロックは、コードの実行時に何の影響も与えません。  

<br>

### ブロックの使い方 {#block-usage}

**ブロックを追加する**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

追加したいブロックを**ブロックパレットからドラッグ**して**エディターにドロップ**すると、そのブロックを追加できます。   
<br>

**ブロックのコピー / 貼り付け**  

エディターでブロックをコピー / 貼り付けする方法は、全部で 2 つあります。  

1. ブロックを選んだあと **Ctrl+C** キーを押すと、選んだブロックを**コピー**できます。  
**Ctrl+V** キーを押すと、最後にコピーしたブロックをエディターに**貼り付け**できます。  

2. ブロックを選んだあと**編集**メニューで **「コピー Ctrl+C」**ボタンを押すと、選んだブロックを**コピー**できます。  
**編集**メニューで **「貼り付け Ctrl+V」**ボタンを押すと、最後にコピーしたブロックをエディターに**貼り付け**できます。

<br>

**ブロックの削除**  

エディターでブロックを削除する方法は、全部で 3 つあります。

1. ブロックを選んだあと **Backspace** キーを押すと、選んだブロックを削除できます。<br>  

2. 削除したいブロックを**エディターでドラッグ**して**ブロックカテゴリーにドロップ**すると、そのブロックを削除できます。  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. 削除したいブロックを**エディターでドラッグ**して**ゴミ箱にドロップ**すると、そのブロックを削除できます。  
削除したブロックは**ゴミ箱**でもう一度確認できます。<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**複数のブロックを同時に選ぶ**  

エディターで複数のブロックを同時に選ぶ方法は、全部で 2 つあります。

1. **Shift** キーを押した状態で作業領域をドラッグするか、ブロックを一つずつクリックすると、  
複数のブロックを同時に選べます。  

2. 作業領域の右下の**チェックボタン**をクリックして「複数ブロック選択」のモードをオンまたはオフにできます。  
ボタンに色が付いていれば、モードがオンの状態です。  
ボタンに色が付いていなければ、モードがオフの状態です。  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

「複数ブロック選択」のモードがオンの間は、ブロックを選ぶ作業だけができます。   
選んだ複数のブロックを同時に移動したり編集したりするには、ブロックの選択を終えたあとモードをオフにする必要があります。  

<br>

**追加のオプション**

このほかにも、ブロックを**マウスで右クリック**すると、  
**ブロックの縮小 / 展開、有効化 / 無効化、ヘルプ**のようなさまざまな追加のオプションを確認できます。  

<br>

## Python エディター {#python-editor}

### コードパレット {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

ロボットコーディングに必要な**基本関数**と、ロボット / 拡張モジュール専用の **Python コード**を**カテゴリー**に分類した領域です。  


次は、基本関数（コード）で提供されるコードカテゴリーの種類です。  

- 論理 (logic)
- ループ (loops)
- 数学 (math)
- テキスト (text)
- リスト (lists)
- 色 (color)
- オーディオ (audio)
- 制御 (control)

基本関数で提供されるコードは、ブロックコーディングエディターの基本ブロックとすべて同じ役割を果たします。  

<br>

**⚙️ 参考**  
コードパレットを活用して Python エディターでコーディングする方法は、[**コードパレットの活用方法**](#python-codes-usage)で確認できます。

<br>

### コードエディター {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

ロボットを制御するためのコードを書ける領域です。  


[**エディターの設定**](Menu#editor-settings)で **Python** エディターを選ぶと、Python コードを書けます。

<br>

### コードの基本構造 {#python-structure}

コードエディターでコーディングをするときは、次のような基本構造を守る必要があります。

```python
from robomation import *

# (使うロボットがあればインスタンスとして宣言、例)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

コードエディターでは、**setup** 関数と **loop** 関数の中にあるコードを解釈して実行します。  
そのため、**setup** 関数と **loop** 関数の中にコードを書く必要があります。  
また、ロボットを制御するには、コードの最上部に `from robomation import *` を置き、使うロボットをインスタンスとして宣言する必要があります。

**setup**  

setup 関数の中には、コードの実行時に最初に行う動作を定義します。  
**Utils.wait** 関数を活用して、時間の順に動作が行われるようにできます。  

**loop**  
loop 関数の中には、コードが実行されている間、繰り返して行う動作を定義します。  
定義した動作を 10ms に 1 回ずつ繰り返して行います。  


<br>

### コードパレットの活用方法 {#python-codes-usage}

以下では、簡単な例と一緒に**コードパレットをコーディングに活用する方法**について説明します。  

### 使いたいコードを探す {#python-codes-find}

コードパレットでは、ロボットコーディングに必要なさまざまな関数やコードを提供します。  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

**コード**のカテゴリーの中のメニューを見てみると、<BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> アイコンがあるメニューを確認できます。  

**論理**のメニューを一度クリックすると、アイコンが <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> に変わり、中にある**下位のメニュー**を広げて確認できます。  
このように下位のメニューを持っているメニューを「**カテゴリー**」といいます。  

**論理**のカテゴリーの中の**三項演算**のように、メニューに <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> アイコンがなければ、メニューの中にもう**下位のメニューがない**ことを意味します。  
このように下位のメニューを持っていないメニューを「**コード**」といいます。  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

下位のメニューが広がっているカテゴリーをもう一度クリックすると、アイコンがまた <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> に変わり、下位のメニューが隠れます。  

上のような方法でカテゴリーをたどりながら、コードパレットで使いたいコードを探せます。

<br>

### エディターにコードを挿入する {#python-codes-insert}

エディターにコードを挿入する方法は次のとおりです。  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

メニュー名の左に <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> アイコンがあるメニューの場合、選べる**コードオプション**がないメニューを意味します。  
下位のメニューを持っている**カテゴリー**のメニューが、ほとんどこれに当たります。

メニュー名の左に <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> アイコンがあるメニューの場合、**コードオプション**を選べるメニューを意味します。  
下位のメニューを持っていない**コード**のメニューが、ほとんどこれに当たります。

エディターに挿入したいコードをマウスで**右クリック**すると、選べるオプションを確認できます。  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

**コード**のメニューを右クリックすると、基本関数とロボット / 拡張モジュール専用のコードの区別なく、次のような同じオプションを確認できます。

- **コードを挿入**: 選んだコードをエディターのカーソルの位置に挿入します。
- **ヘルプ**: そのコードの使い方を説明するヘルプを確認します。
- **キャンセル**: オプションのメニューを閉じます。

ロボット / 拡張モジュール専用のコードの場合、**コードを挿入**を選ぶと、そのロボットのインスタンスのメソッド呼び出しの形で挿入されます。  
( 例. HamsterS の `set_wheel_speed` → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ 参考**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

プログラムに追加したロボット / 拡張モジュール専用のコードのうち、もう使わないコードカテゴリーは、  
**マウスの右クリック → 削除**でコードパレットから外せます。

<br>
