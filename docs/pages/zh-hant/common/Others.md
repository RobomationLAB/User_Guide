---
title: 其他
---

# 其他

在積木程式設計中，**其他積木** 由不影響機器人動作的程式碼組成。  
可以實現加上註解、結束程式碼執行等功能。  

## 單行註解 {#comment}

使用 **單行註解** 積木，可以在不影響程式碼執行的情況下加上 **說明**。  
使用註解可以提高程式碼的可讀性，也更容易維護。

<BlockImage module="common/others" id="comment" />

### Python
```python
# 註解內容
```

## 多行註解 {#long_comment}

使用 **多行註解** 積木，可以一次輸入多行註解。  
每一行會自動加上註解標記，空行保持原樣。

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
第一行
第二行

第四行
"""
```

## 連結 {#link}

使用 **連結** 積木，可以藉助 **註解** 加上想要開啟的 **頁面連結**。  
點擊 **開啟** 按鈕，就可以跳轉到輸入的連結頁面。

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## 結束 {#exit}

**結束** 積木會立即中斷程式中程式碼的執行。  
在需要為特定條件加上強制結束功能時很有用。

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
