---
title: 颜色
---

# 颜色

颜色用在各种图形程序中。 


## 基本颜色 {#color_picker}

获取颜色最简单的方法就是使用 **调色板**。  
点击白色的圆角方块会出现调色板，可以从中选择想要的颜色。

<BlockImage module="common/color" id="color_picker" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 颜色 | 颜色预设 | 黑色(black), 红色(red), 黄色(yellow), 绿色(green),<br>青色(cyan), 蓝色(blue), 洋红色(magenta), 白色(white) | - |

### Python
```python
# 例: 选择红色预设时
Utils.color('red')
```

## 滑块颜色 {#color_slider}

**滑块颜色** 积木可以用圆形 / 条形滑块直接调配颜色。  
点击白色的圆角方块，会出现可以调整 **红(R)、绿(G)、蓝(B)** 值的圆形色轮，以及可以调节 **明度**（亮度）的条形滑块。

<BlockImage module="common/color" id="color_slider" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 颜色 | 色轮 + 明度滑块 | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# 在色轮中选择的颜色 → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB 颜色 {#color_rgb}

**RGB 颜色** 积木分别指定红、绿、蓝的值，生成 RGB 数组。

<BlockImage module="common/color" id="color_rgb" />

### 参数

| 名称 | 类别 | 说明 | 范围 / 种类 | 默认值 |
| --- | --- | --- | --- | --- |
| r | 输入值（积木） | 红的值 | 0 ~ 255 的整数 | - |
| g | 输入值（积木） | 绿的值 | 0 ~ 255 的整数 | - |
| b | 输入值（积木） | 蓝的值 | 0 ~ 255 的整数 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## 随机颜色 {#color_random}

**随机颜色** 积木每次被调用时都会生成随机的 RGB 颜色。

<BlockImage module="common/color" id="color_random" />

### 参数

（无）

### Python
```python
Utils.random_color()
```
