---
title: 색상
---

# 색상

색상은 다양한 그래픽 프로그램에서 사용됩니다. 


## 기본 색상 {#color_picker}

가장 간단한 색상을 얻는 방법은 **색상 팔레트**를 사용하는 것입니다.  
흰색의 둥근 사각형을 클릭하면 색상 팔레트가 나타나며, 원하는 색상을 선택할 수 있습니다.

<BlockImage module="common/color" id="color_picker" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| color | 색상 | 색상 프리셋 | 검정색(black), 빨간색(red), 노란색(yellow), 초록색(green),<br>청록색(cyan), 파란색(blue), 자홍색(magenta), 흰색(white) | - |

### Python
```python
# 예: 빨간색 프리셋 선택 시
Utils.color('red')
```

## 슬라이더 색상 {#color_slider}

**슬라이더 색상** 블록은 원형 / 막대 슬라이더를 이용해 색상을 직접 조합할 수 있습니다.  
흰색의 둥근 사각형을 클릭하면, **빨강(R), 초록(G), 파랑(B)** 값을 조정할 수 있는 원형 색상 휠과 **명도**(밝기)를 조절할 수 있는 막대 슬라이더가 나타납니다.

<BlockImage module="common/color" id="color_slider" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| color | 색상 | 색상 휠 + 명도 슬라이더 | r: 0~255, g: 0~255, b: 0~255 | - |

### Python
```python
# 컬러 휠에서 선택한 색상 → [R, G, B]
Utils.color_slider(255, 128, 0)
```

## RGB 색상 {#color_rgb}

**RGB 색상** 블록은 빨강, 초록, 파랑 값을 각각 지정하여 RGB 배열을 만듭니다.

<BlockImage module="common/color" id="color_rgb" />

### 매개변수

| 이름 | 구분 | 설명 | 범위 / 종류 | 기본값 |
| --- | --- | --- | --- | --- |
| r | 입력값 (블록) | 빨강 값 | 0 ~ 255 정수 | - |
| g | 입력값 (블록) | 초록 값 | 0 ~ 255 정수 | - |
| b | 입력값 (블록) | 파랑 값 | 0 ~ 255 정수 | - |

### Python
```python
Utils.color_rgb(red, green, blue)
```

## 무작위 색상 {#color_random}

**무작위 색상** 블록은 호출될 때마다 무작위 RGB 색상을 생성합니다.

<BlockImage module="common/color" id="color_random" />

### 매개변수

(없음)

### Python
```python
Utils.random_color()
```
