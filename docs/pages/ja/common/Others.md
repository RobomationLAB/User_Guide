---
title: その他
---

# その他

ブロックコーディングにおいて **その他ブロック** は、ロボットの動作に影響を与えないコードで構成されます。  
コメントを付けたり、コードの実行を終了する機能を実行できます。  

## 1行コメント {#comment}

**1行コメント** ブロックを使うと、コードの実行に影響を与えずに **説明** を追加できます。  
コメントを活用するとコードが読みやすくなり、保守がしやすくなります。

<BlockImage module="common/others" id="comment" />

### Python
```python
# コメントの内容
```

## 複数行コメント {#long_comment}

**複数行コメント** ブロックを使うと、複数行のコメントを一度に入力できます。  
各行には自動でコメント記号が付き、空行はそのまま保たれます。

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
1 行目
2 行目

4 行目
"""
```

## リンク {#link}

**リンク** ブロックを使うと、**コメント**を活用して開きたい **ページのリンク** を追加できます。  
**開く** ボタンをクリックすると、入力したリンクのページに移動できます。

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## 終了 {#exit}

**終了** ブロックは、プログラムでのコードの実行を直ちに中断します。  
特定の条件で強制終了する機能を追加したいときに便利です。

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
