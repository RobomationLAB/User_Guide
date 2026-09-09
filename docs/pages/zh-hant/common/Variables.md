---
title: 變數
---

# 變數

我們使用變數這個術語，含義與數學或其他程式語言中的用法相同。  
也就是說，它指的是 **儲存值並且可以修改的、帶有名稱的元素**。  
  
變數可以用多種方法建立。  

- [迴圈計數](Loops#controls_for) 和 [為列表裡的每一項](Loops#controls_forEach) 這樣的一些積木會使用變數，並定義該變數的值。  
這類變數傳統上稱為 **迴圈變數(loop variables)**。  
- [自訂函式](Functions#procedures_defnoreturn) 也使用變數來定義參數或引數。
- 使用者可以隨時透過 **賦值** 積木建立變數，建立出來的變數宣告為 **全域變數(global variables)**。  
- RobomationLAB 的積木程式設計環境不支援 **區域變數(local variables)**。  

點擊變數積木的下拉選單，會出現下面這些選項。  

- 顯示程式中已定義的所有變數名稱。  
- **「重新命名變數」**：在整個程式中修改該變數的名稱。選擇這個選項後，會出現可以輸入新名稱的視窗。  
- **「刪除變數」**：刪除程式中參照這個變數的所有積木。 


## 賦值 {#variables_set}

**賦值** 積木把值指定給變數。  
如果程式碼中還沒有宣告該變數，會先宣告新變數再賦值。   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## 修改值 {#math_change}

**修改** 積木的作用是把數字加到變數的值上。

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## 取得值 {#variables_get}

下面的積木提供變數中儲存的值，但不會修改這個值。  
不使用賦值積木也可以使用這個積木，但這不是正確的程式設計方式。

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
