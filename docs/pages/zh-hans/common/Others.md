---
title: 其他
---

# 其他

在积木编程中，**其他积木** 由不影响机器人动作的代码组成。  
可以实现添加注释、结束代码执行等功能。  

## 单行注释 {#comment}

使用 **单行注释** 积木，可以在不影响代码执行的情况下添加 **说明**。  
使用注释可以提高代码的可读性，也更容易维护。

<BlockImage module="common/others" id="comment" />

### Python
```python
# 注释内容
```

## 多行注释 {#long_comment}

使用 **多行注释** 积木，可以一次输入多行注释。  
每一行会自动加上注释标记，空行保持原样。

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
第一行
第二行

第四行
"""
```

## 链接 {#link}

使用 **链接** 积木，可以借助 **注释** 添加想要打开的 **页面链接**。  
点击 **打开** 按钮，就可以跳转到输入的链接页面。

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## 退出 {#exit}

**退出** 积木会立即中断程序中代码的执行。  
在需要为特定条件添加强制结束功能时很有用。

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
