---
title: 编程指南
---

# 编程指南

本文档介绍 RobomationLAB（Robomation 实验室）—— 由 Robomation 开发的「面向机器人动作流服务的执行引擎及集成创作环境」之一，一个用于机器人编程教育的平台。  

按下面的顺序提供详细说明：
- RobomationLAB 的主要特点
- RobomationLAB 的机器人编程方式
- RobomationLAB 的机器人编程基本语法体系  

<br>

## 目录 {#table-of-contents}
1. [RobomationLAB 机器人编程教育平台](#platform)  
    1-1) [机器人编程程序](#coding-programs)  
    1-2) [积木 ↔ Python 实时双向转换](#block-python-conversion)  
    1-3) [编程程序的主要特点](#features)  
    1-4) [实时机器人控制方式](#control-method)  

2. [RobomationLAB 的机器人编程方式](#programming-method)  
    2-1) [顺序执行与并行执行](#sequential-parallel)  
    2-2) [setup 函数](#setup)  
    2-3) [loop 函数](#loop)  

3. [RobomationLAB 的机器人编程基本语法体系](#grammar-syntax)  
    3-1) [导入 robomation 包](#import-package)  
    3-2) [创建机器人实例](#create-instance)  
    3-3) [机器人控制方法](#control-methods)  
    3-4) [读取传感器和状态](#sensor)  
    3-5) [检测事件](#event)  
    3-6) [等待动作完成 (wait)](#wait)  
    3-7) [实用函数 (Utils)](#utils)   

<br><br>

## RobomationLAB 机器人编程教育平台 {#platform}
RobomationLAB 是一个为 **AI 机器人 SW 教育** 优化的平台，  
为面向小学生和初中生的机器人编程教育提供基于 Chrome 浏览器的集成创作环境。  

RobomationLAB 提供 **积木编程**、**脚本编程** 等多种方式的机器人编程教育程序。  
不仅可以学习编程的理论，还可以用 Robomation 的产品实际地移动和控制机器人，  
提供同时学习编程和机器人的机会。

<br>

### 机器人编程程序 {#coding-programs}

#### Block Composer (积木编排器) {#block-composer}
**Block Composer 是通过积木编程简单快速地控制本公司机器人、学习机器人控制基础的工具。**  

- 为实体计算优化的创作环境

- 采用积木的 Drag&Drop 方式，初学者也能轻松编程  
- 从基本概念开始，提供没有语法错误的学习环境  
- 自动转换为 Python 脚本代码  
- 为每种机器人提供带有预设功能的积木面板和各种体验示例
- 通过运行代码可以实时确认结果  
- 通过组合积木提升解决问题的能力和创造力  
- 通过基于 AI 的脚本代码分析提供优化的反馈  

<br>

#### Script Composer (脚本编排器) {#script-composer}
**Script Composer 是通过 Python 编程简单快速地控制本公司机器人、学习 Python 语法和机器人编程基础的工具。**  

- 提供 Python 编辑器

- 提供各语言的代码自动补全和代码插入功能
- 为每种机器人提供各种体验示例代码
- 通过运行代码可以实时确认结果
- 通过基于 AI 的脚本代码分析提供优化的反馈

<br>

#### 编程程序的主要特点 {#features}
RobomationLAB 提供的机器人编程程序的主要特点如下。  
1.	基于 Chrome 浏览器，不受 OS（操作系统）的限制
2.	基于 Web Serial 通信，通过 USB 适配器直接控制机器人硬件
3.	支持多机器人同时控制 - 机器人的种类和数量不受限制
4.	保存文件时，成果物会转换为 JSON 文本文件保存

<br>

### 实时机器人控制方式 {#control-method}
RobomationLAB 提供的机器人编程程序通过下面的过程实时控制机器人。  
1.	通过积木编程或脚本编程，
编写设置用于控制机器人的 Effector, Command 对象的值，
或者利用机器人的 Sensor 值和 Event 发生的代码。
2.	运行代码。
3.	通过 Web Serial 通信从机器人接收包含 Sensor 和 Event 数据的数据包，
并反映到机器人的 Device 对象中。
4.	实时解释代码，
覆写 Effector, Command 对象的数据，或者读取 Sensor, Event 对象的值。
5.	生成反映了机器人 Device 对象数据的数据包，
通过 Web Serial 通信发送到机器人，确认机器人是否实际动作。
6.	代码运行期间，每约 10 ~ 20ms 重复执行 3 ~ 5 的过程。  

<br>

### 积木 ↔ Python 实时双向转换 {#block-python-conversion}
RobomationLAB 同时提供积木编程编辑器和 Python 编程编辑器，两个编辑器实时双向同步。

- 在积木编程编辑器中添加、修改、删除积木时，这些改动会实时反映到 Python 代码中。
- 反过来，在 Python 编程编辑器中修改代码时，这些改动会实时反映到积木中。

由于积木和 Python 代码 1 对 1 对应并双向转换，  
可以先用积木快速搭出整体结构再用 Python 打磨细节代码，或者对照积木学习 Python 语法，  
实现在积木编程和脚本编程之间往来的有机编程。

> 不过，Python → 积木的转换只对能用积木表示的代码进行。  
> (语法错误或无法转换为积木的代码可能无法切换。  
详情请参阅 [编程规则](CodingRules) 文档。)

<br>

<br><br>

## RobomationLAB 的机器人编程方式 {#programming-method}

### 顺序执行与并行执行 {#sequential-parallel}
机器人编程的方式有顺序执行方式和并行执行方式。  
顺序执行是一个动作结束后再执行下一个动作的方式，适合编写简单的行为。  
例如，想让机器人向前移动之后停下来点亮 LED，就需要能按顺序排列各动作对应的代码并按时间顺序执行，也就是需要顺序执行方式。  

并行执行是同时执行多个动作的方式，编写更复杂、更高级的行为时需要它。  
例如，想实现双足机器人走路的动作，必须同时移动机器人的脚和腿才能行走，因此需要并行执行方式的编程。

RobomationLAB 提供的机器人编程程序，  
以类似 Arduino 硬件开发环境的 setup / loop 代码结构为基础，同时支持顺序执行方式和并行执行方式。

<BlockImage module="program/Editor" id="block-structure" />

首次打开 Block Composer 时，工作空间中会显示下面这样两个空的函数积木，  
「setup 函数」积木表示 `setup` 函数，「loop 函数」积木表示 `loop` 函数。  

积木会实时转换为 Python 代码，  
代码具有下面这样的基本结构。  

```python
# Python 代码的基本结构
from robomation import *

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

> 要控制机器人，需要在代码最上方放置 `from robomation import *`，并把要使用的机器人声明为实例。(例: `hamster_s = HamsterS(0)`)


<br>

### setup 函数 {#setup}
setup 函数在「运行代码」的那一刻只执行一次。  
在 setup 函数中主要编写初始化变量，或者初始化机器人的模式、功能等的代码。  
例如，控制靠轮子移动的机器人时，可以在 setup 函数中设置轮子的初始速度。  

如果函数中需要延时，使用 `Utils.wait(...)` 函数就可以编写仿佛同步方式那样按时间顺序动作的代码。  
`Utils.wait(...)` 会等待指定的时间（秒）之后再执行下一段代码，因此会在既定的时间或动作之后醒来，继续执行下一段代码。  
利用这个功能，不仅可以做简单的顺序执行，还可以与承担并行执行的 loop 函数配合，实现强大的机器人编程。

下面是编写 HamsterS 机器人前进 1 秒后后退 1 秒的代码的例子。  
如果在并行执行方式的 loop 函数中实现上面的动作，时间计算和控制代码会混在一起，代码变得非常复杂。  
相反，在 setup 函数中使用 `Utils.wait` 延时函数，就可以编写仿佛同步方式那样按时间顺序动作的代码。  
( 关于 `Utils.wait` 函数，会在后面的 [实用函数 (Utils)](#utils) 中再次说明。 )

示例代码 (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    # 把两侧的轮速度设为 50，向前移动
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # 等待 1 秒
    # 把两侧的轮速度设为 -50，向后移动
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # 等待 1 秒
    hamster_s.stop()

# put control code here, to run repeatedly:
def loop():
    pass
```
( 关于机器人实例和方法的语法，会在后面的 [RobomationLAB 的机器人编程基本语法体系](#grammar-syntax) 中再次说明。 )


<br>

### loop 函数 {#loop}
loop 函数支持并行执行，在代码运行期间每约 10ms 重复执行一次。  
在 loop 函数中主要编写反复设置变量的值，或者检测并处理机器人特定事件的代码。  

下面是编写随时间改变 HamsterS 机器人轮速度和 LED 颜色的代码的例子。  
( 在函数中修改 setup / loop 函数外声明的变量时，要用 `global` 关键字声明。 )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# put setup code here, to run once:
def setup():
    global frame
    frame = 0

# put control code here, to run repeatedly:
def loop():
    global frame
    frame += 1  # 每次调用 loop 函数时，把 frame 变量的值加 1

    # 利用变化后的 frame 值，设置两侧的轮速度和两侧 LED 的 RGB 值
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( 关于机器人实例和方法的语法，会在后面的 [RobomationLAB 的机器人编程基本语法体系](#grammar-syntax) 中再次说明。 )  

下面是编写轻敲 HamsterS 机器人机身发生 Tap 动作时，把 LED 点亮为红色的代码的例子。  

```python
from robomation import *

hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    # Tap 动作发生的那一刻，检测到事件
    if hamster_s.tap():               # 检测到事件时为 True
        hamster_s.set_led_color('both', 'red')   # 把两侧的 LED 点亮为红色
    else:
        hamster_s.turn_off('both')               # 关闭两侧的 LED
```
( 关于检测事件(`tap()`) 等语法，会在后面的 [RobomationLAB 的机器人编程基本语法体系](#grammar-syntax) 中再次说明。 )  

<br><br>

## RobomationLAB 的机器人编程基本语法体系 {#grammar-syntax}
在 RobomationLAB 提供的机器人编程程序中编写代码时应遵守的基本语法体系如下。  
机器人的控制通过 `robomation` Python 包进行，  
先把机器人做成实例，然后以调用该实例方法的方式编写代码。

### 导入 robomation 包 {#import-package}
要使用控制机器人所需的类（机器人）和实用工具(`Utils`)，需要在代码最上方包含下面这一行。

```python
from robomation import *
```

<br>

### 创建机器人实例 {#create-instance}
把要使用的机器人声明为实例。  
类名表示机器人的种类，括号中的数字表示实例的索引（从 0 开始）。

```python
hamster_s = HamsterS(0)   # 1 台 HamsterS
```

各机器人的类名和默认变量名如下。

| 机器人 | 类名 | 默认变量名 |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

使用同一种机器人的多台时，把索引按 0, 1, 2 … 递增来声明。

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### 机器人控制方法 {#control-methods}
控制机器人时，调用实例的方法。  
方法执行机器人的动作，例如设置轮速度、移动、LED、声音等。

```python
hamster_s.set_wheel_speed('both', 50)    # 设置两侧的轮速度
hamster_s.move_distance(10, 'cm')        # 向前移动 10cm
hamster_s.set_led_color('both', 'red')   # 把两侧的 LED 设为红色
```

各机器人可用的方法列表和参数，请参阅各机器人的文档（「HamsterS」等）。

<br>

### 读取传感器和状态 {#sensor}
读取传感器的值或机器人的状态时也调用方法，方法会返回该值。

```python
left = hamster_s.floor('left')        # 读取左侧地面传感器的值
dist = hamster_s.proximity('right')   # 读取右侧接近传感器的值
```

<br>

### 检测事件 {#event}
因状态变化或环境变化而发生的事件，通过对应的事件方法  
在事件发生的那一刻返回 True 的方式来检测。

```python
if hamster_s.tap():        # 敲击(Tap)事件发生的那一刻为 True
    hamster_s.set_led_color('both', 'red')
```

<br>

### 等待动作完成 (wait) {#wait}
像移动、旋转、播放声音那样完成需要时间的方法，都有 `wait` 参数。
- `wait=True` (默认值): 等到动作完成后再执行下一段代码。
- `wait=False`: 开始动作后立即继续执行下一段代码。

```python
hamster_s.move_distance(10, 'cm', wait=True)    # 等到移动结束
hamster_s.move_distance(10, 'cm', wait=False)   # 开始移动后立即执行下一段代码
```

<br>

### 实用函数 (Utils) {#utils}
延时、播放声音、输出日志、颜色等与机器人种类无关的共通功能，通过 `Utils` 类的方法使用。

```python
Utils.wait(1)              # 等待 1 秒
Utils.speak('你好')         # 播放文本语音(TTS)
Utils.log(0, '', '')       # 输出控制台日志
```

<br>
