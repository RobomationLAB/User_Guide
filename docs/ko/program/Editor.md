---
title: 에디터
outline: [2, 3]
---

# 에디터

**에디터**는 **블록** 또는 **스크립트 코드**를 이용해, 로봇을 제어하기 위한 코드를 작성할 수 있는 영역입니다.  
아래에서는 **블록코딩 / 스크립트(파이썬) 코딩** 환경에서 각각 코딩하는 방법과 주의해야 할 점들을 소개합니다.

## 블록코딩 에디터 {#block-editor}

### 블록 카테고리 {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

RobomationLAB에서 제공하는 블록들을 **카테고리**로 분류한 영역입니다.  
카테고리를 클릭하면, 각 카테고리에 해당하는 **블록 모음**을 확인할 수 있습니다.  

다음은 기본으로 제공되는 블록 카테고리의 종류입니다.  

- 논리
- 반복
- 연산
- 문자열
- 리스트
- 색상
- 소리
- 제어
- 변수
- 함수
- 기타

이외에도, [**로봇**](Menu#robot) 또는 [**확장 모듈**](Menu#extension)을 프로그램에 추가하면, 프로그램에서 전용 블록 모음을 이용할 수 있습니다.  

<br>

**⚙️ 참고**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

프로그램에 추가한 블록 중 더 이상 사용하지 않는 카테고리는, **마우스 우클릭 → 제거하기**를 통해 블록 카테고리에서 제거할 수 있습니다.

<br>

### 블록 모음 {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

각 카테고리의 모든 블록을 모아놓은 영역입니다.  
블록 모음에 있는 블록들은 **Drag&Drop** 방식으로 코딩 영역으로 옮길 수 있습니다.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ 참고**  
블록의 사용 방법을 확인하고 싶다면, **마우스 우클릭 → 도움말**을 통해 각 블록 별로 사용 방법이 설명되어 있는 도움말을 확인할 수 있습니다.  

<br>

### 코딩 영역 {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

블록 모음으로부터 가져온 블록을 조립할 수 있는 영역입니다.  


조립된 블록들은 **파이썬 코드**로 실시간으로 변환되며,  
코드를 실행하면, 이 코드들을 해석해 로봇을 움직이고 제어할 수 있습니다.  

<br>

### 블록 기본 구조 {#block-structure}

블록코딩 에디터에서 코딩을 할 때는, 다음과 같은 기본 구조를 지켜야 합니다.

<BlockImage module="program/Editor" id="block-structure" /><br>

블록코딩 에디터에서는 **시작하기**와 **무한 반복하기** 함수 블록 안에 있는 코드를 해석해 실행합니다.  
따라서, **시작하기**와 **무한 반복하기** 함수 블록 안에 블록을 넣어 코드를 작성해야 합니다.  

**시작하기**  
시작하기 함수 블록 안에는 코드 실행 시 초기에 수행할 동작들을 정의합니다.  
**기다리기** 블록을 활용해, 시간 순서대로 동작이 수행되도록 할 수 있습니다.  

**무한 반복하기**  
무한 반복하기 함수 블록 안에는 코드가 실행되는 동안 반복해서 수행할 동작들을 정의합니다.  
정의한 동작들을 10ms에 한번씩 반복해서 수행됩니다.  

**⚙️ 참고**  
(**함수 카테고리**를 통해 생성한 커스텀 함수를 제외하고)  
**시작하기** 또는 **무한 반복하기** 함수 블록 밖에 있는 블록들은, 코드 실행 시에 아무 영향을 주지 않습니다.  

<br>

### 블록 사용 방법 {#block-usage}

**블록 추가하기**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

추가하고 싶은 블록을 **블록 모음에서 드래그**하여 **에디터에 드롭**하면 해당 블록을 추가할 수 있습니다.   
<br>

**블록 복사/붙여넣기**  

에디터에서 블록을 복사/붙여넣기 하는 방법은 총 2가지가 있습니다.  

1. 블록을 선택한 뒤 **Ctrl+C** 키를 누르면, 선택한 블록을 **복사**할 수 있습니다.  
**Ctrl+V** 키를 누르면, 마지막으로 복사한 블록을 에디터에 **붙여넣기** 할 수 있습니다.  

2. 블록을 선택한 뒤 **편집** 메뉴에서 **'복사하기 Ctrl+C'** 버튼을 누르면, 선택한 블록을 **복사**할 수 있습니다.  
**편집** 메뉴에서 **'붙여넣기 Ctrl+V'** 버튼을 누르면, 마지막으로 복사한 블록을 에디터에 **붙여넣기** 할 수 있습니다.

<br>

**블록 삭제**  

에디터에서 블록을 삭제하는 방법은 총 3가지가 있습니다.

1. 블록을 선택한 뒤 **Backspace** 키를 누르면, 선택한 블록을 삭제할 수 있습니다.<br>  

2. 삭제하고 싶은 블록을 **에디터에서 드래그**하여 **블록 카테고리에 드롭**하면 해당 블록을 삭제할 수 있습니다.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. 삭제하고 싶은 블록을 **에디터에서 드래그**하여 **휴지통에 드롭**하면 해당 블록을 삭제할 수 있습니다.  
삭제한 블록은 **휴지통**에서 다시 확인할 수 있습니다.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**여러 블록 동시에 선택하기**  

에디터에서 여러 블록을 동시에 선택하는 방법은 총 2가지가 있습니다.

1. **Shift** 키를 누른 상태에서 작업영역을 드래그하거나 블록을 하나씩 클릭하면,  
여러 블록을 동시에 선택할 수 있습니다.  

2. 작업영역 우측 하단의 **체크 버튼**을 클릭해 '여러 블록 선택' 모드를 켜거나 끌 수 있습니다.  
버튼에 색이 채워져 있으면, 모드가 켜진 상태입니다.  
버튼에 색이 채워져 있지 않으면, 모드가 꺼져있는 상태입니다.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

'여러 블록 선택' 모드가 켜져 있는 동안에는, 블록을 선택하는 작업만 할 수 있습니다.   
선택한 여러 블록을 동시에 이동하거나 편집하려면, 블록 선택을 완료한 후 모드를 꺼야 합니다.  

<br>

**추가 옵션**

이외에도 블록을 **마우스로 우클릭**하면,  
**블록 축소/확장, 활성화/비활성화, 도움말** 같은 다양한 추가 옵션들을 확인할 수 있습니다.  

<br>

## 파이썬 에디터 {#python-editor}

### 코드 모음 {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

로봇 코딩에 필요한 **기본 함수**들과, 로봇/확장 모듈 전용 **파이썬 코드**들을 **카테고리**로 분류한 영역입니다.  


다음은 기본 함수(Codes) 에서 제공되는 코드 카테고리의 종류입니다.  

- 논리 (logic)
- 반복 (loops)
- 연산 (math)
- 문자열 (text)
- 리스트 (lists)
- 색상 (color)
- 소리 (audio)
- 제어 (control)

기본 함수에서 제공되는 코드들은, 블록코딩 에디터의 기본 블록들과 모두 같은 역할을 수행합니다.  

<br>

**⚙️ 참고**  
코드 모음을 활용해 파이썬 에디터에서 코딩하는 방법은 [**코드 모음 활용 방법**](#python-codes-usage)에서 확인하실 수 있습니다.

<br>

### 코드 에디터 {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

로봇을 제어하기 위한 코드를 작성할 수 있는 영역입니다.  


[**에디터 설정**](Menu#editor-settings) 에서 **파이썬** 에디터를 선택하면, 파이썬 코드를 작성할 수 있습니다.

<br>

### 코드 기본 구조 {#python-structure}

코드 에디터에서 코딩을 할 때는, 다음과 같은 기본 구조를 지켜야 합니다.

```python
from robomation import *

# (사용할 로봇이 있다면 인스턴스로 선언, 예시)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

코드 에디터에서는 **setup** 함수와 **loop** 함수 안에 있는 코드를 해석해 실행합니다.  
따라서, **setup** 함수와 **loop** 함수 안에 코드를 작성해야 합니다.  
또한, 로봇을 제어하려면 코드 최상단에 `from robomation import *` 를 두고, 사용할 로봇을 인스턴스로 선언해야 합니다.

**setup**  

setup 함수 안에는 코드 실행 시 초기에 수행할 동작들을 정의합니다.  
**Utils.wait** 함수를 활용해, 시간 순서대로 동작이 수행되도록 할 수 있습니다.  

**loop**  
loop 함수 안에는 코드가 실행되는 동안 반복해서 수행할 동작들을 정의합니다.  
정의한 동작들을 10ms에 한번씩 반복해서 수행됩니다.  


<br>

### 코드 모음 활용 방법 {#python-codes-usage}

아래에서는 간단한 예시와 함께 **코드 모음을 코딩에 활용하는 방법**에 대해 설명합니다.  

### 원하는 코드 찾기 {#python-codes-find}

코드 모음에서는 로봇 코딩에 필요한 다양한 함수 및 코드들을 제공합니다.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

**기본 코드** 카테고리 안의 메뉴들을 확인해보면, <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 아이콘이 있는 메뉴들을 확인할 수 있습니다.  

**논리** 메뉴를 한 번 클릭하면, 아이콘이 <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline /> 로 바뀌면서 안에 있는 **하위 메뉴**들을 펼쳐서 확인할 수 있습니다.  
이렇게 하위 메뉴를 가지고 있는 메뉴를 '**카테고리**' 라고 합니다.  

**논리** 카테고리 안의  **삼항 연산자** 처럼 메뉴에 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 아이콘이 없다면, 메뉴 안에 더이상 **하위 메뉴가 없다**는 것을 의미합니다.  
이렇게 하위 메뉴를 가지고 있지 않은 메뉴를 '**코드**' 라고 합니다.  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

하위 메뉴가 펼쳐져 있는 카테고리를 다시 클릭하면, 아이콘이 다시 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 로 바뀌면서 하위 메뉴들이 감춰집니다.  

위와 같은 방법으로 카테고리를 따라 가면서, 코드 모음에서 원하는 코드를 찾을 수 있습니다.

<br>

### 에디터에 코드 삽입하기 {#python-codes-insert}

에디터에 코드를 삽입하는 방법은 다음과 같습니다.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

메뉴 이름 왼쪽에 <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> 아이콘이 있는 메뉴의 경우, 선택할 수 있는 **코드 옵션**이 없는 메뉴를 의미합니다.  
하위 메뉴를 가지고 있는 **카테고리** 메뉴가 대부분 이에 해당합니다.

메뉴 이름 왼쪽에 <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> 아이콘이 있는 메뉴의 경우, **코드 옵션**을 선택할 수 있는 메뉴를 의미합니다.  
하위 메뉴를 가지고 있지 않은 **코드** 메뉴가 대부분 이에 해당합니다.

에디터에 삽입하고 싶은 코드를 마우스로 **우클릭**하면, 선택 가능한 옵션들을 확인할 수 있습니다.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

**코드** 메뉴를 우클릭하면, 기본 함수와 로봇/확장 모듈 전용 코드 구분 없이 다음과 같은 동일한 옵션을 확인할 수 있습니다.

- **코드 삽입**: 선택한 코드를 에디터의 커서 위치에 삽입합니다.
- **도움말**: 해당 코드의 사용 방법을 설명하는 도움말을 확인합니다.
- **취소**: 옵션 메뉴를 닫습니다.

로봇/확장 모듈 전용 코드의 경우, **코드 삽입**을 선택하면 해당 로봇 인스턴스의 메서드 호출 형태로 삽입됩니다.  
( 예. 햄스터 S의 `set_wheel_speed` → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ 참고**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

프로그램에 추가한 로봇 / 확장모듈 전용 코드 중 더 이상 사용하지 않는 코드 카테고리는,  
**마우스 우클릭 → 제거하기**를 통해 코드 모음에서 제거할 수 있습니다.

<br>