---
title: 함수
---

# 함수

**함수(Function)** 는 특정 작업을 수행하는 **명령어(블록)들의 모음**입니다.  
반복적으로 사용되는 동작을 하나의 함수로 정의하면, 코드를 **간결하고 효율적**으로 관리할 수 있습니다.

함수는 다음과 같은 특징을 가집니다.  
- **재사용 가능**: 한 번 정의하면 여러 번 호출하여 사용할 수 있습니다.  
- **입력과 출력**: 매개변수(입력 값)를 받아 처리한 후 결과(출력 값)를 반환할 수 있습니다.  
- **코드의 가독성 향상**: 프로그램의 흐름을 논리적으로 구성할 수 있습니다.


## setup {#setup}

**setup 함수** 는 코드를 실행하는 순간 단 한번만 호출됩니다.  
setup 함수에서는 주로 변수를 초기화하거나 로봇의 모드, 옵션 등을 초기화하는 코드를 작성합니다.  
예를 들어, 바퀴를 통해 움직이는 로봇을 제어할 때 setup 함수에서 바퀴의 초기 속도를 설정할 수 있습니다.  

<BlockImage module="common/functions" id="setup" />
  
`Utils.wait(...)` 함수를 활용하면, 순차 실행을 통해 시간순으로 동작하는 코드를 작성할 수 있습니다. 이 기능을 활용하면 간단한 순차 실행 뿐 아니라 병렬 실행 역할을 하는 **loop 함수** 와의 연계를 통해, 강력한 로봇 프로그래밍이 가능합니다.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**loop 함수** 는 프로그램이 실행되는 동안 10ms 마다 반복해서 호출됩니다.  
loop 함수에서는 주로 변수의 값을 반복해서 설정하거나 로봇의 특정 이벤트 발생을 감지해 처리하는 코드를 작성합니다.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## 함수 정의 {#procedures_defnoreturn}

함수를 정의하는 블록을 사용하면 **새로운 함수**를 만들 수 있습니다.  
반환값이 없는 함수는 특정 동작을 수행하지만 **값을 반환하지는 않습니다**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## 반환값 있는 함수 정의 {#procedures_defreturn}

반환값이 있는 함수는 특정 작업을 수행한 후, 결과 **값을 반환**하여 다른 블록에서 활용할 수 있습니다.  

<BlockImage module="common/functions" id="procedures_defreturn" />

아래의 함수는 **매개변수 x, y를 입력받아 x + y의 결과를 반환**합니다.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## 함수 호출 {#procedures_callnoreturn}

함수를 정의하면, **사용자 정의 함수 블록**이 자동으로 생성됩니다.  
이를 통해 **미리 정의한 함수**를 호출하여 실행할 수 있습니다.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## 만약 다음을 돌려줌 {#procedures_ifreturn}

함수 내에서 **특정 조건을 만족하면 즉시 값을 반환**하고 함수를 종료하는 기능을 수행하는 블록입니다.  
이 블록은 **함수 내부에서만 사용**할 수 있으며, 다른 곳에서는 비활성화됩니다.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
