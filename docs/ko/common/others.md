---
title: 기타
---

# 기타

블록 코딩에서 **기타 블록**은 로봇의 동작에 영향을 주지 않는 코드들로 구성됩니다.  
주석을 달거나, 코드 실행을 종료하는 기능을 수행할 수 있습니다.  

<br>

## 주석 (한 줄) {#comment}

**주석** 블록을 사용하면 코드의 실행에는 영향을 주지 않으면서 **설명**을 추가할 수 있습니다.  
주석을 활용하면 코드 가독성이 높아지고, 유지보수가 쉬워집니다.

<BlockImage module="common/others" id="comment" />

### Python
```python
# 주석 내용
```

## 주석 (여러 줄) {#long_comment}

여러 줄의 **주석**을 입력할 수 있는 블록입니다.  
각 줄은 자동으로 주석 표기가 붙으며, 빈 줄은 그대로 유지됩니다.

<BlockImage module="common/others" id="long_comment" />

### Python
```python
"""
첫 번째 줄
두 번째 줄

네 번째 줄
"""
```

## 링크 {#link}

**링크** 블록을 사용하면, **주석** 기능을 활용해 열고 싶은 **페이지 링크**를 추가할 수 있습니다.  
**열기** 버튼을 클릭하면, 입력한 링크의 페이지로 이동할 수 있습니다.

<BlockImage module="common/others" id="link" />

### Python
```python
# https://example.com
```

## 종료하기 {#exit}

**종료하기** 블록은 프로그램 실행을 즉시 중단하고 페이지를 새로고침하여 초기 상태로 되돌립니다.  
특정 조건에서 강제 종료 기능을 추가할 때 유용합니다.

<BlockImage module="common/others" id="exit" />

### Python
```python
Utils.exit()
```
