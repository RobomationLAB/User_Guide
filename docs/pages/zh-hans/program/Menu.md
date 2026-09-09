---
title: 顶部菜单
---

# 顶部菜单

**顶部菜单** 集中了程序中经常使用的功能，例如连接适配器和机器人，或者保存和打开文件。  
下面按顺序说明各个菜单的功能。 

## 徽标 {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

这是程序的徽标。  
点击徽标会重新加载页面。 

**积木编程编辑器** 启用时，徽标的文字显示为 **Block Composer**。  

<BlockImage module="program/Menu" id="logo-python" /><br>

**Python 编辑器** 启用时，徽标的文字显示为 **Script Composer**。  

<br>

## 查找适配器 {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

可以 **搜索与机器人通信的适配器并连接到程序**。

要在程序中控制机器人，必须先把与机器人通信的适配器连接到程序。  
这个过程叫做 **配对**。 

按下 **适配器** 按钮，会显示当前 PC 上可用的适配器列表。  
从列表中选择想要的适配器后点击 **连接** 按钮，适配器就会连接到程序。  

### 确认适配器的连接状态 {#dongle-status}

一旦连接过程序的适配器，之后使用程序时会自动连接。

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


适配器正常连接到程序时，图标会变成 **天蓝色**。  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

如果浏览器标签上有下面图片中那样的图标，就可以确认适配器处于已连接状态。  

<br>

**⚠️ 注意事项**  

如果适配器已经连接到别的程序或别的页面，就无法连接到本程序。  
这时请找到连接着该适配器的程序并断开连接，然后回到本页面重新尝试连接。

<br>

## 选择机器人 {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

可以 **选择程序中要使用的机器人**，并 **注册该机器人的信息和专用的积木 / 脚本代码**。 

要在程序中控制机器人，必须先把要使用的机器人的信息和积木添加到程序。

<BlockImage module="program/Menu" id="robot-select" /><br>

按下 **机器人** 按钮，弹出窗口会显示程序中可用的机器人列表。  

选择想要的机器人后点击 **添加** 按钮，该机器人的信息和专用的积木 / 脚本代码就会注册到程序中。  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

添加机器人后，会生成下面这些项目。 


- **Block Composer**: 在左侧的 [**积木面板**](Editor#block-editor) 中生成该机器人的专用 **积木** 
- **Script Composer**: 在左侧的 [**代码面板**](Editor#python-editor) 中生成该机器人的专用 **脚本代码**

通过它们，可以自由地移动和控制传感器、电机、LED 等实际的机器人硬件。  

<br>

**⚙️ 参考**

在 RobomationLAB 中，不论机器人的种类和数量，都可以连接并使用任意多的机器人。  

不过，如果想同时连接并使用多台机器人，程序中必须连接与想使用的机器人台数相同数量的适配器，并且要把相同台数的机器人添加到程序中。  

<br>

## 选择扩展 {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

扩展模块是提供 **语音识别、图像识别、图像分析等基于 AI 的扩展功能** 的模块。  
可以 **选择程序中要使用的扩展模块**，并 **注册该扩展模块的信息和专用的积木 / 脚本代码**。  

<BlockImage module="program/Menu" id="extension-select" /><br>

按下 **扩展** 按钮，会出现显示程序中可用扩展模块列表的弹出窗口。  
- 语音转文字
- 人脸检测
- 详细人脸检测
- 面部表情
- 手部检测
- 人体检测
- 物体检测
- 颜色检测
- ArUco 标记检测
- 摄像头自动驾驶

点击想要的模块后，和 [**选择机器人**](#robot) 一样，该扩展模块的信息和专用的积木 / 脚本代码就会注册到程序中。 

把 **人脸检测、手部检测** 等使用摄像头的扩展模块添加到程序时，  
[**预览 - 摄像头**](Preview#camera) 标签中会生成摄像头模块，可以把摄像头连接到程序使用。  

如果不再需要所选的扩展模块，可以通过 **右键 → 移除** 把机器人从列表中去掉。

<br>

## 声音 {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

可以选择编程中要使用的声音，也可以把离线的声音自己添加到程序中。

### 选择声音 {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

按下 **声音** 按钮，会出现可以选择程序提供的各种声音的画面。  
可以使用下面这些功能。  
- 搜索声音
- ▶ 试听声音
- 把声音添加到声音列表（左侧面板）

### 扩展功能 {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

点击或把鼠标放到左下角的 **扩展** 按钮（红框）上，会出现 3 个扩展功能选项。  
可以使用下面这些功能。
- 添加本地文件: 添加用户电脑上的音频文件 
- 录制声音: 自己录音来添加声音
- 添加随机声音: 从整个声音列表中随机选择一个声音添加

### 在编程中使用声音 {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

添加到声音列表（左侧面板）的声音可以用在编程中。

- **积木编程** 时，可以从 **播放声音** 积木的下拉菜单中选择想要的声音。  

- **脚本编程** 时，可以从 **代码 - 音频** 类别中 **「播放声音」** 函数的下层选项中选择想要的声音。  

运行代码时，所选的声音会通过用户电脑的扬声器播放。

<br>

## 示例 {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

如果程序中已经添加了机器人，就可以按机器人加载简单的示例来体验。

### 选择示例 {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

按下示例按钮，会出现上面那样的 **选择示例** 画面。   
通过 **类别筛选** 和 **搜索** 功能，可以快速找到想要的示例。 

### 加载示例 {#example-load}
1. 点击 **示例** 菜单打开 **选择示例** 画面，选择想要的示例。 
2. 画面会重新加载，示例出现在编程区域中。   
3. 加载示例后，不用做别的事，按 **运行按钮(▶)** 就可以确认动作。 

<br>

## 编辑 {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


这是可以取消或重做操作的功能。
- 复制 (Ctrl+C): 复制所选的积木或代码。
- 粘贴 (Ctrl+V): 把复制的积木或代码粘贴到工作区。
- 撤销 (Ctrl+Z): 取消上一步操作。
- 重做 (Ctrl+Y): 重新执行撤销的操作。 

<br>

## 文件 {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

可以管理文件，例如新建代码，或者把写好的代码保存为文件再打开。

- 新建  
初始化当前正在编写的代码，创建新的代码。

- 保存项目  
保存当前正在编写的项目文件。  
文件保存在用户电脑的「下载」文件夹中，文件扩展名是「.block」。

- 导出 Python 代码  
提取当前正在编写项目的 Python 代码并保存为文件。  
文件保存在用户电脑的「下载」文件夹中，文件扩展名是「.py」。  
保存的文件可以在 VSCode 等外部 Python 开发环境中打开并运行。

- 打开项目  
打开用户电脑上的项目文件或 Python 代码文件。  
可以打开的文件扩展名是「.block」和「.py」。  
打开「.block」文件会在积木编程编辑器中打开，打开「.py」文件会在 Python 编辑器中打开。  
打开「.py」文件时，如果不符合 BlockComposer 的代码格式或者有语法错误，文件可能无法正常打开，请注意。

<br>

## 运行 / 停止代码 {#run-stop}

### 运行 (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

解释并运行当前启用的编辑器中所写的积木代码或脚本代码。  

根据所写的代码，可以控制连接到程序的机器人。  
代码运行期间，无法修改已写好的代码。

### 停止 (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

停止代码的运行。


<br>

## AI 编程 {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

按下顶部菜单的 **AI 编程** 按钮，画面右侧会打开 AI 聊天机器人面板。  
可以和 RobomationLAB 内置的 **AI 聊天机器人** 对话，与 AI 一起编程。

可以使用下面这些功能。
- 可以自由地询问关于编程的问题，例如代码的写法和改法、语法、概念等。
- **代码运行中发生错误时**，可以询问 AI 错误发生的原因和解决方法，快速解决问题。
- AI 给出的代码可以通过代码块右侧的复制按钮轻松复制。
- 对话内容会保存下来可以继续对话，也可以开始 **新的对话**。
- 拖动面板的左边缘可以调节面板的宽度。

<br>

## 复制代码 {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

可以把当前启用的编辑器中所写的代码复制到剪贴板。  

### Block Composer (积木编程) {#copy-block}

复制 **[Python 预览](Preview#python-preview)** 标签中显示的 Python 代码。

### Script Composer (Python) {#copy-python}
原样复制 Python 编辑器中所写的代码。  

复制的代码可以用 Ctrl+V 粘贴到想要的地方。

<br>

## 编辑器设置 {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

可以在 **积木编程** 和 **Python** 中选择想要的编辑器来编程。  

即使更换编辑器，之前写的代码也会原样保留，随时都可以继续编程。 

**※ 积木编程编辑器和 Python 编辑器 1 对 1 对应，切换编辑器时所写的代码会互相转换并延续。**

### 积木编程编辑器 {#editor-settings-block}
选择积木编程时，徽标会变成 **Block Composer**（积木编排器）。  
在积木编程编辑器中写的积木会实时转换为 Python 代码，可以在 **预览 - Python 预览** 标签中确认转换的结果。  

### Python 编辑器 {#editor-settings-python}
选择 Python 时，徽标会变成 **Script Composer**（脚本编排器）。  
在 Python 编辑器中写的代码，在重新切换到 **积木编程编辑器** 时会转换为积木。  

> 不过，Python → 积木的转换只对能用积木表示的代码进行。  
> 语法错误或无法转换为积木的代码可能无法切换到积木编程编辑器，这时会一起显示切换失败的原因。

<br>

## 设置 {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

可以进行程序的基本设置。

### 语言 {#settings-language}
更改程序中显示的语言（国别）。  
可以从全部 21 种语言中选择想要使用的语言。

### 适配器 {#settings-dongle}
- 断开连接: 断开连接到程序的所有适配器。
- 连接: 重新把适配器连接到程序。

### 重置 {#settings-reset}
- 重置程序: 初始化程序中注册的所有数据（机器人信息、积木 / 脚本代码、设置等）。

<br>

## 支持 {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

可以查看使用程序所需的指南和外部资料。  

- 教程: 为初次使用程序的人提供教程。
- 帮助: 可以在程序中直接查看积木和 Python 代码的使用方法和示例。
- 用户指南: 跳转到 RobomationLAB 用户指南 Wiki 页面。  
提供关于程序的构成要素和使用方法、各积木 / 脚本代码的功能和语法等的详细说明。
- Robomation 实验室: 跳转到 RobomationLAB 主页面。
- 首页: 跳转到 Robomation 公司的官方主页。
- YouTube: 跳转到 Robomation 的 YouTube 页面。
- 网上商城: 跳转到 Robomation 的网上商城页面。
- 关于: 可以查看程序的版本和更新记录、使用条款、隐私政策等。
- 联系我们: 可以咨询使用程序时的疑问或 bug 等。

<br>
