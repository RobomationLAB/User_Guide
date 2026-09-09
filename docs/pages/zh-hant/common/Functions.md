---
title: 函式
---

# 函式

**函式(Function)** 是執行特定任務的 **指令（積木）的集合**。  
把反覆使用的動作定義成一個函式，就可以 **簡潔有效率地** 管理程式碼。

函式具有下面這些特點。  
- **可以重複使用**：定義一次之後可以多次呼叫使用。  
- **輸入與輸出**：可以接受參數（輸入值）進行處理，然後回傳結果（輸出值）。  
- **提高程式碼可讀性**：可以在邏輯上組織程式的流程。


## setup {#setup}

**setup 函式** 在執行程式碼的那一刻只被呼叫一次。  
在 setup 函式中主要撰寫初始化變數，或者初始化機器人的模式、選項等的程式碼。  
例如，控制靠輪子移動的機器人時，可以在 setup 函式中設定輪子的初始速度。  

<BlockImage module="common/functions" id="setup" />
  
使用 `Utils.wait(...)` 函式，可以透過循序執行撰寫按時間順序動作的程式碼。使用這個功能，不僅可以做簡單的循序執行，還可以與承擔平行執行的 **loop 函式** 配合，實現強大的機器人程式設計。  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**loop 函式** 在程式執行期間每 10ms 反覆被呼叫一次。  
在 loop 函式中主要撰寫反覆設定變數的值，或者偵測並處理機器人特定事件的程式碼。

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## 定義函式 {#procedures_defnoreturn}

使用定義函式的積木可以建立 **新的函式**。  
沒有回傳值的函式會執行特定的動作，但 **不回傳值**。

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## 定義有回傳值的函式 {#procedures_defreturn}

有回傳值的函式在執行特定任務之後，會 **回傳結果值**，可以在其他積木中使用。  

<BlockImage module="common/functions" id="procedures_defreturn" />

下面的函式 **接受參數 x、y 並回傳 x + y 的結果**。  

### Python
```python
def myFunction(x, y):
    return x + y
```

## 呼叫函式 {#procedures_callnoreturn}

定義函式之後，會自動產生 **自訂函式積木**。  
透過它可以呼叫並執行 **事先定義的函式**。

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## 如果 ... 返回 {#procedures_ifreturn}

這個積木的功能是在函式中 **滿足特定條件時立即回傳值** 並結束函式。  
這個積木 **只能在函式內部使用**，在其他地方會被停用。

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
