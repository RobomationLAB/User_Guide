---
title: 编辑器
---

# 编辑器

**编辑器** 是可以用 **积木** 或 **脚本代码** 编写控制机器人代码的区域。  
下面介绍在 **积木编程 / 脚本(Python)编程** 环境中各自的编程方法和需要注意的地方。

## 积木编程编辑器 {#block-editor}

### 积木类别 {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

这是把 RobomationLAB 提供的积木按 **类别** 分类的区域。  
点击类别，就可以看到各个类别对应的 **积木面板**。  

下面是默认提供的积木类别的种类。  

- 逻辑
- 循环
- 数学
- 文本
- 列表
- 颜色
- 音频
- 控制
- 变量
- 函数
- 其他

除此之外，把 [**机器人**](Menu#robot) 或 [**扩展模块**](Menu#extension) 添加到程序后，就可以在程序中使用专用的积木面板。  

<br>

**⚙️ 参考**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

添加到程序的积木中不再使用的类别，可以通过 **鼠标右键 → 移除** 从积木类别中去掉。

<br>

### 积木面板 {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

这是汇集了各个类别所有积木的区域。  
积木面板中的积木可以用 **Drag&Drop** 的方式移到编程区域。  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ 参考**  
想确认积木的使用方法时，可以通过 **鼠标右键 → 帮助** 查看说明每个积木使用方法的帮助。  

<br>

### 编程区域 {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

这是可以组装从积木面板取来的积木的区域。  


组装好的积木会实时转换为 **Python 代码**，  
运行代码时，会解释这些代码来移动和控制机器人。  

<br>

### 积木的基本结构 {#block-structure}

在积木编程编辑器中编程时，必须遵守下面这样的基本结构。

<BlockImage module="program/Editor" id="block-structure" /><br>

积木编程编辑器会解释并运行 **setup 函数** 和 **loop 函数** 这两个函数积木内部的代码。  
因此，必须把积木放进 **setup 函数** 和 **loop 函数** 的函数积木内部来编写代码。  

**setup 函数**  
在 setup 函数积木内部定义代码运行时最先要做的动作。  
可以利用 **等待** 积木，让动作按时间顺序执行。  

**loop 函数**  
在 loop 函数积木内部定义代码运行期间要反复执行的动作。  
所定义的动作每 10ms 重复执行一次。  

**⚙️ 参考**  
(除了通过 **函数类别** 创建的自定义函数以外)  
放在 **setup 函数** 或 **loop 函数** 的函数积木外部的积木，在代码运行时不会产生任何影响。  

<br>

### 积木的使用方法 {#block-usage}

**添加积木**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

把想添加的积木 **从积木面板拖动** 并 **放到编辑器中**，就可以添加该积木。   
<br>

**积木的复制 / 粘贴**  

在编辑器中复制 / 粘贴积木的方法一共有 2 种。  

1. 选中积木后按 **Ctrl+C** 键，就可以 **复制** 所选的积木。  
按 **Ctrl+V** 键，就可以把最后复制的积木 **粘贴** 到编辑器中。  

2. 选中积木后在 **编辑** 菜单中按 **「复制 Ctrl+C」** 按钮，就可以 **复制** 所选的积木。  
在 **编辑** 菜单中按 **「粘贴 Ctrl+V」** 按钮，就可以把最后复制的积木 **粘贴** 到编辑器中。

<br>

**删除积木**  

在编辑器中删除积木的方法一共有 3 种。

1. 选中积木后按 **Backspace** 键，就可以删除所选的积木。<br>  

2. 把想删除的积木 **在编辑器中拖动** 并 **放到积木类别上**，就可以删除该积木。  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. 把想删除的积木 **在编辑器中拖动** 并 **放到垃圾桶上**，就可以删除该积木。  
删除的积木可以在 **垃圾桶** 中再次查看。<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**同时选中多个积木**  

在编辑器中同时选中多个积木的方法一共有 2 种。

1. 按住 **Shift** 键拖动工作区，或者一个一个地点击积木，  
就可以同时选中多个积木。  

2. 点击工作区右下角的 **勾选按钮**，可以打开或关闭「多积木选择」模式。  
按钮填充了颜色，表示模式处于打开状态。  
按钮没有填充颜色，表示模式处于关闭状态。  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

「多积木选择」模式打开期间，只能做选择积木的操作。   
要同时移动或编辑所选的多个积木，必须在完成积木选择后关闭该模式。  

<br>

**附加选项**

除此之外，**用鼠标右键点击** 积木，  
可以看到 **积木的折叠 / 展开、启用 / 禁用、帮助** 等各种附加选项。  

<br>

## Python 编辑器 {#python-editor}

### 代码面板 {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

这是把机器人编程所需的 **基本函数** 和机器人 / 扩展模块专用的 **Python 代码** 按 **类别** 分类的区域。  


下面是基本函数（代码）中提供的代码类别的种类。  

- 逻辑 (logic)
- 循环 (loops)
- 数学 (math)
- 文本 (text)
- 列表 (lists)
- 颜色 (color)
- 音频 (audio)
- 控制 (control)

基本函数中提供的代码，与积木编程编辑器的基本积木起完全相同的作用。  

<br>

**⚙️ 参考**  
利用代码面板在 Python 编辑器中编程的方法，可以在 [**代码面板的使用方法**](#python-codes-usage) 中查看。

<br>

### 代码编辑器 {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

这是可以编写控制机器人代码的区域。  


在 [**编辑器设置**](Menu#editor-settings) 中选择 **Python** 编辑器后，就可以编写 Python 代码。

<br>

### 代码的基本结构 {#python-structure}

在代码编辑器中编程时，必须遵守下面这样的基本结构。

```python
from robomation import *

# (如果有要使用的机器人，就声明为实例，示例)
hamster_s = HamsterS(0)

# put setup code here, to run once:
def setup():
    pass

# put control code here, to run repeatedly:
def loop():
    pass
```

代码编辑器会解释并运行 **setup** 函数和 **loop** 函数内部的代码。  
因此，必须在 **setup** 函数和 **loop** 函数内部编写代码。  
另外，要控制机器人，需要在代码最上方放置 `from robomation import *`，并把要使用的机器人声明为实例。

**setup**  

在 setup 函数内部定义代码运行时最先要做的动作。  
可以利用 **Utils.wait** 函数，让动作按时间顺序执行。  

**loop**  
在 loop 函数内部定义代码运行期间要反复执行的动作。  
所定义的动作每 10ms 重复执行一次。  


<br>

### 代码面板的使用方法 {#python-codes-usage}

下面结合简单的例子说明 **在编程中利用代码面板的方法**。  

### 查找想要的代码 {#python-codes-find}

代码面板提供机器人编程所需的各种函数和代码。  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

查看 **代码** 类别中的菜单，可以看到带有 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 图标的菜单。  

点击一次 **逻辑** 菜单，图标会变成 <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline />，可以展开查看里面的 **下层菜单**。  
这样带有下层菜单的菜单叫做「**类别**」。  

像 **逻辑** 类别中的 **三元运算** 那样，菜单上没有 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> 图标，就意味着菜单里 **没有下层菜单** 了。  
这样不带下层菜单的菜单叫做「**代码**」。  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

再次点击已展开下层菜单的类别，图标会重新变成 <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />，下层菜单会隐藏起来。  

用上面这样的方法沿着类别往下找，就可以在代码面板中找到想要的代码。

<br>

### 把代码插入编辑器 {#python-codes-insert}

把代码插入编辑器的方法如下。  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

菜单名左侧带有 <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> 图标的菜单，意味着没有可选的 **代码选项**。  
带有下层菜单的 **类别** 菜单大多属于这一类。

菜单名左侧带有 <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> 图标的菜单，意味着可以选择 **代码选项**。  
不带下层菜单的 **代码** 菜单大多属于这一类。

用鼠标 **右键点击** 想插入编辑器的代码，就可以看到可选的选项。  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

右键点击 **代码** 菜单时，不论是基本函数还是机器人 / 扩展模块专用的代码，都可以看到下面这些相同的选项。

- **插入代码**: 把所选的代码插入编辑器的光标位置。
- **帮助**: 查看说明该代码使用方法的帮助。
- **取消**: 关闭选项菜单。

对于机器人 / 扩展模块专用的代码，选择 **插入代码** 后，会以调用该机器人实例方法的形式插入。  
( 例. HamsterS 的 `set_wheel_speed` → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ 参考**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

添加到程序的机器人 / 扩展模块专用代码中不再使用的代码类别，  
可以通过 **鼠标右键 → 移除** 从代码面板中去掉。

<br>
