---
title: 变量
---

# 变量

我们使用变量这个术语，含义与数学或其他编程语言中的用法相同。  
也就是说，它指的是 **保存值并且可以修改的、带有名称的元素**。  
  
变量可以用多种方法创建。  

- [数到](Loops#controls_for) 和 [遍历列表里的每一项](Loops#controls_forEach) 这样的一些积木会使用变量，并定义该变量的值。  
这类变量传统上称为 **循环变量(loop variables)**。  
- [自定义函数](Functions#procedures_defnoreturn) 也使用变量来定义参数或实参。
- 用户可以随时通过 **赋值** 积木创建变量，创建出来的变量声明为 **全局变量(global variables)**。  
- RobomationLAB 的积木编程环境不支持 **局部变量(local variables)**。  

点击变量积木的下拉菜单，会出现下面这些选项。  

- 显示程序中已定义的所有变量名称。  
- **“重命名变量”**：在整个程序中修改该变量的名称。选择这个选项后，会出现可以输入新名称的窗口。  
- **“删除变量”**：删除程序中引用这个变量的所有积木。 


## 赋值 {#variables_set}

**赋值** 积木把值赋给变量。  
如果代码中还没有声明该变量，会先声明新变量再赋值。   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## 改变值 {#math_change}

**加** 积木的作用是把数字加到变量的值上。

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## 获取值 {#variables_get}

下面的积木提供变量中保存的值，但不会修改这个值。  
不使用赋值积木也可以使用这个积木，但这不是正确的编程方式。

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
