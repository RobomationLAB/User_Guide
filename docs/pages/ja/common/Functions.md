---
title: 関数
---

# 関数

**関数（Function）** は、特定の処理を行う**命令（ブロック）の集まり**です。  
繰り返し使う動作を 1 つの関数として定義すると、コードを**簡潔かつ効率的**に管理できます。

関数には次のような特徴があります。  
- **再利用できる**: 一度定義すれば、何度でも呼び出して使えます。  
- **入力と出力**: パラメーター（入力値）を受け取って処理し、結果（出力値）を返すことができます。  
- **コードの読みやすさが向上する**: プログラムの流れを論理的に構成できます。


## setup {#setup}

**setup 関数** は、コードを実行した瞬間に一度だけ呼び出されます。  
setup 関数では、主に変数を初期化したり、ロボットのモードやオプションを初期化するコードを書きます。  
たとえば、車輪で動くロボットを制御するとき、setup 関数で車輪の初期速度を設定できます。  

<BlockImage module="common/functions" id="setup" />
  
`Utils.wait(...)` 関数を使うと、順次実行によって時間順に動作するコードを書くことができます。この機能を使えば、簡単な順次実行だけでなく、並列実行の役割を果たす **loop 関数** と連携させることで、強力なロボットプログラミングが可能になります。  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**loop 関数** は、プログラムが実行されている間、10ms ごとに繰り返し呼び出されます。  
loop 関数では、主に変数の値を繰り返し設定したり、ロボットの特定のイベントの発生を検知して処理するコードを書きます。

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## 関数の定義 {#procedures_defnoreturn}

関数を定義するブロックを使うと、**新しい関数**を作ることができます。  
戻り値のない関数は、特定の動作を行いますが**値を返しません**。

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## 戻り値のある関数の定義 {#procedures_defreturn}

戻り値のある関数は、特定の処理を行ったあとに結果の**値を返し**、ほかのブロックで活用できるようにします。  

<BlockImage module="common/functions" id="procedures_defreturn" />

次の関数は、**パラメーター x, y を受け取って x + y の結果を返します**。  

### Python
```python
def myFunction(x, y):
    return x + y
```

## 関数の呼び出し {#procedures_callnoreturn}

関数を定義すると、**ユーザー定義関数ブロック**が自動的に作られます。  
これを使って、**あらかじめ定義した関数**を呼び出して実行できます。

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## もし ~ 返す {#procedures_ifreturn}

関数の中で、**特定の条件を満たしたらすぐに値を返して**関数を終了する働きをするブロックです。  
このブロックは**関数の内部でのみ使用**でき、ほかの場所では無効になります。

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
