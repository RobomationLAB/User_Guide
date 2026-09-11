# 용어집

`ko` 문서에서 **반복되는 표현**과, `en` 번역에서 그것을 어떻게 옮겼는지를 모은 것.

> 이 파일은 `srcDir`(`docs/pages/`) 밖에 있어 사이트로 빌드되지 않는다.

## 이 파일이 정하는 것

`TRANSLATION.md` 규칙 2-③ 이 말하는 **"같은 블록은 문서 전체에서 같은 이름으로 부른다"** 를
지키기 위한 목록이다. 45개 문서에서 같은 ko 표현이 서로 다르게 번역되면 문서가 자기
자신과 모순되고, 그게 가장 흔하고 가장 고치기 비싼 실수다.

**`en` 열은 정답이 아니라 참고다.** 새 언어를 번역할 때 할 일은 en 을 베끼는 게 아니라,
**여기 실린 ko 표현이 "용어"임을 알아보고 그 언어에서 하나의 표기를 골라 끝까지 쓰는 것**이다.

번역 금지 대상(파일명 · 앵커 `{#id}` · 링크 경로 · `<BlockImage>` 속성 · `### Python` ·
코드와 API 인자)은 `TRANSLATION.md` 규칙 1 에 있다. 여기서 반복하지 않는다.

---

## 1. 문서 골격 — 수백 번 반복된다

| ko | en | 횟수 |
|---|---|---|
| `### 매개변수` | `### Parameters` | 424 |
| `## 인스턴스 선언` | `## Instance declaration` | 28 |
| 표 헤더 `이름 / 구분 / 설명 / 범위 / 종류 / 기본값` | `Name / Kind / Description / Range / Type / Default` | 모든 표 |
| `(없음)` · `없음.` | `(none)` | 98 |

`ko` 는 `(없음)` 96개와 `없음.` 2개가 섞여 있었다. **`en` 은 `(none)` 하나로 통일했다.**
새 언어도 하나로 통일한다.

## 2. `구분`(Kind) 열 — 11가지뿐이다

| ko | en | 횟수 |
|---|---|---|
| 드롭다운 옵션 | Dropdown option | 315 |
| 입력값 (필드) | Input (field) | 98 |
| 입력값 (블록) | Input (block) | 74 |
| 체크박스 | Checkbox | 48 |
| 색상 | Color | 9 |
| 입력값 (색상) | Input (color) | 7 |
| 입력값 | Input | 6 |
| 입력값 (문자열) | Input (string) | 6 |
| 입력값 (배열) | Input (array) | 4 |
| 드롭다운 | Dropdown | 1 |
| 변수 | Variable | 1 |

`입력값 (필드)` 와 `입력값 (블록)` 의 구분은 **값을 블록 안에 직접 타이핑하는지(필드),
다른 블록을 끼워 넣는지(블록)** 다. 번역할 때 이 구분을 뭉개지 않는다.

## 3. 드롭다운 옵션 표기 — 규칙이 중요하다

`ko` 는 **`라벨(코드값)`** 형태로 쓴다. 라벨은 화면에 보이는 글자, 괄호 안은 Python 에
들어가는 값이다.

```
왼쪽(left), 오른쪽(right), 양쪽(both)
```

`en` 은 라벨과 코드값이 같아지는 경우가 많아 **괄호를 생략**했다.

```
left, right, both
```

**다른 언어는 ko 형태로 돌아간다.** 라벨은 그 언어로 쓰고 코드값은 괄호에 남긴다.
코드값은 API 인자라 절대 번역하지 않는다(규칙 1-⑥).

```
左 (left), 右 (right), 両方 (both)      ← ja 예시
```

라벨과 코드값이 다를 때는 `en` 도 괄호를 남겼다. 이런 항목은 어느 언어에서도 괄호가 필요하다.

| ko | en |
|---|---|
| 왼쪽 펜(left_pen), 오른쪽 바퀴(right_wheel) | left pen (left_pen), right wheel (right_wheel) |
| 좌회전(left), 우회전(right), 전진(forward), 유턴(uturn) | turn left (left), turn right (right), move forward (forward), u-turn (uturn) |
| 모든 관절(-1), 1번(1) | all (-1), 1 (1) |
| 손목(wrist), 말단 장치(end_effector) | wrist, end effector (end_effector) |
| a, b, 양쪽(both) (입출력 포트) | A (`'a'`), B (`'b'`), both |
| 기본(black) (Pio 눈 색) | default (black) |

## 4. 자주 쓰이는 옵션 묶음

| ko | en | 횟수 |
|---|---|---|
| 왼쪽(left), 오른쪽(right), 양쪽(both) | left, right, both | 20 |
| 왼쪽(left), 오른쪽(right) | left, right | 18 |
| cm, mm, 인치(inch) | cm, mm, inch | 10 |
| 시작(start), 중지(stop) | start, stop | 10 |
| 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | distance (omitted or None), horizontal distance (horizontal), vertical distance (vertical) | 9 |
| 표시(on=True), 숨기기(off=False) | show (on=True), hide (off=False) | 9 |
| 시스템 카메라 라벨 | System camera label | 9 |
| 검정(black), 흰색(white) | black, white | 4 |
| 왼쪽(left), 오른쪽(right), 가운데(center) | left, right, center | 3 |
| 사물 클래스 80개 | 80 object classes | 5 |
| 최소 x(min_x) … 폭(width), 높이(height), 넓이(area) | min x position (min_x) … width, height, area | 3 |

## 5. 음계 — 12개 전부

블록의 드롭다운은 **고정도 계명**으로 표시된다(이미지에서 `Do` 확인). 괄호 안이 코드값이다.

| ko | en | | ko | en |
|---|---|---|---|---|
| 도(C) | Do (C) | | 솔(G) | Sol (G) |
| 도#(C#) | Do# (C#) | | 솔#(G#) | Sol# (G#) |
| 레(D) | Re (D) | | 라(A) | La (A) |
| 레#(D#) | Re# (D#) | | 라#(A#) | La# (A#) |
| 미(E) | Mi (E) | | 시(B) | Si (B) |
| 파(F) | Fa (F) | | | |
| 파#(F#) | Fa# (F#) | | | |

`Pio` 만 `ko` 가 이명동음을 병기하므로 `en` 도 따랐다 — `도#/레♭(C#)` → `Do#/Re♭ (C#)`.

## 6. 범위 표기 규칙

| ko | en | 횟수 |
|---|---|---|
| 0 이상 정수 | Integer 0 or greater | 34 |
| 1 이상 정수 | Integer 1 or greater | 27 |
| 0 이상 실수 | Real number 0 or greater | 21 |
| `A ~ B` 정수 | `Integer A to B` | 다수 |
| 정수 / 실수 / 문자열 | Integer / Real number / String | |
| TRUE / FALSE | TRUE / FALSE | 48 |
| -100 ~ 100 정수, 0: 정지 | Integer -100 to 100, 0: stop | 5 |

**`~` 를 그대로 두지 않고 `to` 로 푼다.** 단, `[0~255, 0~255, 0~255]` 나 `a~z, 0~9` 처럼
**값 자체를 압축해 적은 리터럴은 `~` 를 유지**한다. 가운뎃줄(`–`)은 쓰지 않는다.

## 7. 정형 문장 — 문서마다 다시 쓰지 않는다

**인스턴스 선언 (28개 문서)** — 제품명만 바꿔 그대로 쓴다.

```
ko  햄스터 S(HamsterS) 블록을 작업 영역에 추가하면, Python 코드에는 다음과 같은 인스턴스 선언이 자동으로 삽입됩니다:
en  When you add a HamsterS block to the workspace, the following instance declaration is automatically inserted into the Python code:
```

**코드 주석 (17개 문서에서 완전히 동일)**

```
ko  # 여러 인스턴스가 있는 경우
en  # When there are multiple instances
```

| ko | en | 횟수 |
|---|---|---|
| 기다리기를 체크하면, 이동이 완료될 때까지 기다립니다. | If wait is checked, execution waits until the movement is complete. | 12 |
| 기다리기를 체크하면, 회전이 완료될 때까지 기다립니다. | If wait is checked, execution waits until the rotation is complete. | 9 |
| 기다리기를 체크하면, 재생이 완료될 때까지 기다립니다. | If wait is checked, execution waits until playback is complete. | 4 |
| 바퀴 속도를 설정하지 않은 경우, 기본 속도로 앞으로 이동합니다. | If the wheel speed has not been set, it moves forward at the default speed. | 8 |
| 아직 불러오지 않았으면 0, 불러오는 중이면 1, 불러오기를 완료했으면 2를 반환합니다. | It returns 0 if it has not been loaded yet, 1 while it is loading, and 2 once loading is complete. | 6 |
| 현재의 바퀴 속도에 입력한 속도를 더한 값이 새로운 바퀴 속도가 됩니다. | The new wheel speed is the current wheel speed plus the speed you enter. | 5 |
| 새롭게 설정된 바퀴 속도의 범위는 -100 ~ 100으로 설정됩니다. | The newly set wheel speed is clamped to the range -100 to 100. | 3 |
| 소리가 재생 중이면 true, 재생 중이 아니면 false를 반환합니다. | Returns true if a sound is playing, and false if it is not. | 4 |
| 바퀴가 움직이는 중이면 true, 멈춰있으면 false를 반환합니다. | Returns true if the wheel is moving, and false if it is stopped. | 3 |
| 이 외의 값을 입력하면 버저음이 발생하지 않습니다. | If you enter a value outside this range, no buzzer sound is produced. | 3 |
| LED 위치는 x, y 좌표로 표시합니다. | The LED position is given as x, y coordinates. | 5 |
| **⚙️ 참고** / **⚠️ 주의 사항** | **⚙️ Note** / **⚠️ Caution** | 6 / 1 |

## 8. 매개변수 설명

| ko | en | 횟수 |
|---|---|---|
| 완료 대기 여부 | Whether to wait for completion | 40 |
| 로드 완료 대기 여부 | Whether to wait for loading to complete | 6 |
| 인스턴스 번호 (0부터 시작) | Instance number (starting from 0) | 28 |
| 동작 | Action | 13 |
| 회전 방향 | Direction of rotation | 11 |
| 회전 각도 (도) | Angle of rotation (degrees) | 9 |
| 바퀴 종류 | Wheel to control | 10 |
| 대상 바퀴 | Wheel to read | 6 |
| 대상 LED / 대상 눈 | LED to control / Eye to control | 6 / 4 |
| 측정 축 | Axis to measure | 8 |
| 측정 센서 위치 | Sensor position to measure | 4 |
| 거리 종류 | Kind of distance | 9 |
| 상태 종류 | Kind of state | 5 |
| 변경할 속도 차 | Amount of speed change | 7 |
| 빨강 / 초록 / 파랑 변화량 | Amount of red / green / blue change | 7 |
| 표시 ON / OFF | Display ON / OFF | 9 |
| 입출력 포트 | I/O port | 8 |
| 카메라 장치 이름 | Camera device name | 9 |
| 사운드 클립 이름 | Sound clip name | 7 |
| 색깔 이름 | Color name | 7 |
| 음계 / 옥타브 | Note / Octave | 7 / 7 |
| 관절 번호 | Joint number | 5 |
| 기준점 | Origin | 4 |
| 사각형 정보 | Rectangle information | 4 |
| 첫 번째 / 두 번째 부위 | First / Second part | 4 / 4 |
| 원본 최소값 / 최대값 | Source minimum / maximum | 4 / 4 |
| 변환 후 최소값 / 최대값 | Minimum / Maximum after conversion | 4 / 4 |
| 시작 / 끝 픽셀 번호 (1부터 시작) | Start / End pixel number (starting from 1) | 9 / 9 |
| 연결할 포트 / 읽어올 포트 | Port to connect to / Port to read from | 4 / 5 |
| 이동 거리 / 이동 시간 (초) | Distance to move / Time to move (seconds) | 5 / 5 |
| 거리 단위 | Distance unit | 5 |
| 주파수 (Hz) | Frequency (Hz) | 6 |
| 색상 팔레트 선택 → 색 이름(영문)으로 변환 | Pick from the color palette → converted to a color name (English) | 6 |

## 9. 반복 섹션 제목

| ko | en | 횟수 |
|---|---|---|
| 카메라 장치 선택하기 | Select the camera device | 9 |
| 한 번 인식하기 | Detect once | 9 |
| 연속 인식 시작 / 중지 | Start / stop continuous detection | 9 |
| 인식 화면 표시하기 | Show the detection result | 9 |
| 모델 로드하기 / 모델 상태 | Load the model / Model state | 6 / 6 |
| 바퀴 속도 설정하기 / 변경하기 / 값 | Set wheel speed / Change wheel speed / Wheel speed value | 5 / 5 / 5 |
| 거리 이동하기 / 시간 이동하기 | Move a distance / Move for a time | 4 / 5 |
| 제자리 돌기 | Turn in place | 4 |
| 정지하기 | Stop | 5 |
| 바퀴가 움직이는 중인가? | Is the wheel moving? | 4 |
| 버저음 설정하기 | Set sound buzz | 6 |
| 음계 연주하기 | Play a note | 7 |
| 소리 재생하기 (로봇 `sound_clip`) | Play a sound clip | 6 |
| 소리 끄기 / 소리가 재생 중인가? | Sound off / Is a sound playing? | 7 / 4 |
| 온도 센서 값 / 신호 세기 값 / 배터리 전압 | Temperature sensor value / Signal strength value / Battery voltage | 5 / 7 / 7 |
| 중력 가속도 값 | Gravitational acceleration value | 3 |
| 상태 변경 여부 | Whether the state has changed | 5 |
| LED 색 설정하기 / LED 끄기 | Set LED color / Turn off LED | 3 / 4 |
| 센서로 선 따라가기 | Trace a line with the sensor | 3 |
| 선 따라가기 속도 설정 / 멈추기 | Set line trace speed / Stop line tracing | 3 / 3 |
| 교차로 이동 후 다음 교차로에서 멈추기 | Move through an intersection and stop at the next one | 3 |
| 말판에서 한번 돌기 | Turn once on the board | 3 |
| 두 부위 사이 거리 | Distance between two parts | 3 |
| 입력 포트 설정하기 / 버튼 입력 값 | Set the input port / Button input value | 4 / 3 |

`common/Audio` 의 `소리 재생하기`(`Utils.play_sound`)는 로봇의 `sound_clip` 과 **다른
블록**이라 `Play sound` 로 따로 옮겼다. 앵커가 다르면 다른 블록이다.

### AI 9개 모듈의 반복 제목은 **통일형 / 모듈별** 두 갈래다

`ko` 는 9개 모듈 모두 `## 한 번 인식하기` 로 **주어 없이 통일**한다. 번역은 두 갈래로 갈렸고
**둘 다 유효하다** — 다만 한 언어 안에서는 끝까지 한 갈래를 지켜야 한다.

| 갈래 | 언어 | 예 |
|---|---|---|
| 통일형 (ko 처럼 주어 없음, 9개 모듈 동일) | `en` · `fr` · `it` · `sv` · `fi` | `Detect once` · `Détecter une fois` · `Tunnista kerran` |
| 모듈별 (제목이 대상을 명시) | `es` · `de` · `pt` · `ja` · `zh-hans` · `zh-hant` · `nl` · `pl` · `ru` · `tr` · `vi` · `id` | `Farbe einmal erkennen` · `色を1回検出` · `检测一次颜色` |
| 준통일형 (대상은 안 쓰되 동사가 모듈마다 다름) | `da` · `no` | `Registrér én gang` ↔ `Genkend én gang` / `oppdag`·`registrer`·`gjenkjenn` |

**이 갈래가 어디에 속하는지 먼저 확인한다.** 블록 라벨이 바뀌었을 때
제목도 바꿔야 하는지가 여기서 갈린다 — 통일형 언어는 제목에 대상을 안 쓰므로
라벨이 바뀌어도 제목은 그대로다. 모듈별 언어는 제목이 대상을 담으므로 함께 고쳐야 한다.

## 10. 제품 · 모듈 표시명

**이건 번역이나 음차가 아니라, 그 언어의 블록 이미지에 적힌 이름을 그대로 쓴다.**
앱이 21개 언어로 현지화되므로 언어마다 다를 수 있다. 확인 방법은
`docs/public/images/<언어>/<카테고리>/<모듈>/` 의 이미지를 열어보는 것이다.

| 파일 | ko | en | 클래스 |
|---|---|---|---|
| `roboids/HamsterS` | 햄스터 S | HamsterS | `HamsterS` |
| `roboids/Hamster` | 햄스터 | Hamster | `Hamster` |
| `roboids/Pio` | 삐오봇 | **Piobot** | `Pio` |
| `roboids/Turtle` | 터틀 | Turtle | `Turtle` |
| `roboids/Beagle` | 비글 | Beagle | `Beagle` |
| `roboids/Raccoon4` | 라쿤봇 | **RaccoonBot** | `RaccoonBot` |
| `roboids/CheeseStick` | 치즈스틱 | **Cheese Stick** (공백 있음) | `CheeseStick` |

**파일명 · 클래스명은 언어와 무관하게 고정**이다. 표시명만 언어별로 바뀐다.
`Pio.md` → `Piobot`, `Raccoon4.md` → `RaccoonBot` 처럼 셋이 다 다른 경우가 있으니 주의한다.

### 로봇 제품명은 현지화되지 않을 수 있다 — 이미지를 열어 확인한다

`ja` 는 처음 촬영분에서 `ハムスターS` · `ピオボット` · `ラクーンボット` · `チーズスティック`
처럼 음차되어 있었는데, **재촬영 후 `en` 과 같은 라틴 제품명으로 바뀌었다** —
`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`.
`CSD-01` 계열도 재촬영분에서 블록 라벨에 모델 번호가 들어왔다.

그래서 **음차된 이름을 보면 그게 확정인지 의심해야 한다.** 확인 지점은 세 곳이고
셋이 일치해야 한다:

| 확인 지점 | 파일 |
|---|---|
| 블록 라벨의 접두어 | `images/<언어>/roboids/<로봇>/*.png` |
| 로봇 선택 팝업 | `images/<언어>/program/Menu/robot-select.png` |
| 코드 팔레트의 로봇 항목 | `images/<언어>/program/Editor/python-codes.png` |

세 곳이 어긋나면 **더 나중에 촬영된 쪽이 맞다.** `ja` 에서 실제로 그랬다 —
블록 이미지가 먼저 갱신되고 `program/` 스크린샷이 구버전으로 남아 있었는데,
`workspace.png` 안의 블록 라벨이 구버전 접두어를 담고 있어서 그것으로 판별했다.
`program/` 스크린샷 안에 블록이 찍혀 있으면 그게 촬영 시점의 증거가 된다.

표시명이 바뀌면 **문서 11개 · 약 106행**이 영향을 받는다
(`roboids/*.md` 7개의 `title`·h1·산문, `index.md`, `guide/CodingGuide.md` 의 클래스 표,
`guide/CodingRules.md`, `program/Editor.md` 의 코드 팔레트 예시).

라틴 제품명이 일본어·중국어 문장에 붙을 때는 **앞뒤에 공백을 넣는다**
(`HamsterS の車輪速度` — `HamsterSの` 로 붙여 쓰지 않는다). 단 `「」`·`。`·`、` 앞뒤에는
넣지 않는다. 표시명이 괄호 안 클래스명과 글자까지 같아지면 괄호를 지운다
(`HamsterS(HamsterS)` → `HamsterS`). 다르면 남긴다 (`Piobot(Pio)`).

| `AI/` 파일 | ko | en |
|---|---|---|
| `ASR` | 음성 인식 | **Speech to Text** |
| `FaceDetection` | 얼굴 찾기 | Face Detection |
| `DetailedFaceDetection` | 상세하게 얼굴 찾기 | Detailed Face Detection |
| `FaceExpression` | 나이, 성별, 표정 | **Face Expression** |
| `HandDetection` | 손 찾기 | Hand Detection |
| `BodyDetection` | 몸 찾기 | Body Detection |
| `ObjectDetection` | 사물 찾기 | Object Detection |
| `ColorDetection` | 색깔 찾기 | Color Detection |
| `ArucoMarker` | ArUco 마커 찾기 | ArUco Marker Detection |
| `SelfDriving` | 카메라 자율주행하기 | Camera Self Driving |

| `CheeseStick/` 파일 | ko | en |
|---|---|---|
| `CSD01` | CSD-01 스위치 | **CSD-01 Tact Switch** |
| `CSD02` | CSD-02 RGB LED | CSD-02 RGB LED |
| `CSD03` | CSD-03 로터리 퍼텐쇼미터 | **CSD-03 Rotary Pot** |
| `CSD07` | CSD-07 소리 센서 | CSD-07 Sound Sensor |
| `CSD09` | CSD-09 모터 | CSD-09 Motor |
| `CSD10` | CSD-10 조도 센서 | **CSD-10 ALS Sensor** |
| `HAT010` | HAT-010 5x5 매트릭스 | HAT-010 5x5 Matrix |
| `HAT022` | HAT-022 터치 피아노 | HAT-022 Touch Piano |
| `PID13` | PID-13 조이스틱과 버튼 | PID-13 Joystick & Button |
| `PID26` | PID-26 환경 센서 | PID-26 Environment Sensor |
| `NeoPixel` | 네오픽셀 | NeoPixel |

## 11. 앱 UI 라벨

`program/` 과 `guide/` 문서는 화면의 글자를 인용한다. **번역하지 말고
그 언어의 스크린샷에 적힌 글자를 옮긴다.**

단, **`ko` 가 인용하지 않은 라벨은 `en` 도 인용하지 않았다.** `ko` 가 화면 글자 대신
설명하는 말을 쓴 자리는 그대로 따라간다 — 문서를 스크린샷에 맞춰 "고치면" `ko` 와
구조가 어긋나 앵커·문장 대응이 깨진다. (§11 마지막 표 참고)

**블록 카테고리** (좌측 팔레트)

| ko | en |
|---|---|
| 논리 · 반복 · 연산 · 문자열 · 리스트 | Logic · Loops · Math · Text · **List** |
| 색상 · 소리 · 제어 · 변수 · 함수 · 기타 | Color · Audio · Control · Variables · Functions · Others |

팔레트의 `리스트` 는 단수 **`List`** 인데 문서 제목은 복수 `Lists` 다. 화면과 문서 제목이
다르므로 각각 맞춰 쓴다.

**최상위 함수 블록**

| ko | en |
|---|---|
| 시작하기 | **`function setup`** |
| 무한 반복하기 | **`function loop`** |

**상단 메뉴**

| ko | en |
|---|---|
| 동글 찾기 · 로봇 선택 · 확장 모듈 선택 · 소리 · 예제 · 편집 · 파일 | Dongle · Robot · Extension · Sound · Example · Edit · File |
| AI 코딩 · 코드 복사 · 설정 · 지원 | AI Coding · Code Copy · Settings · Support |
| 에디터 설정 (블록코딩 / 파이썬) | Block ▾ / Python ▾ |
| 로고 (블록 / 파이썬) | Block Composer / Script Composer |

**메뉴 항목**

| ko | en |
|---|---|
| 복사하기 · 붙여넣기 · 되돌리기 · 다시하기 | Copy · Paste · Undo · Redo |
| 새로 만들기 · 프로젝트 저장하기 · 파이썬 코드 저장하기 · 프로젝트 불러오기 | New · Save Project · **Export Python Code** · **Open Project** |
| 연결 끊기 · 연결 하기 · 프로그램 초기화 | Disconnect · Connect · Program Reset |
| 튜토리얼 · 도움말 · 사용 가이드 · 로보메이션 랩 · 홈페이지 · 유튜브 · 쇼핑몰 · 정보 · 문의하기 | Tutorial · **Help** · User Guide · Robomation Lab · Home · Youtube · Shopping Mall · About · Contact Us |
| 코드 삽입 · 도움말 · 취소 | Insert Code · **Help** · Cancel |
| 추가하기 · 닫기 (로봇 선택 팝업) | Add · Close |

**미리보기 탭**

| ko | en |
|---|---|
| 로봇 연결상태 | **Connections** |
| 파이썬 미리보기 · 카메라 · 콘솔 | Python Preview · Camera · Console |
| 로그 · 스코프 | Log · Scope |
| 실시간 센서 값 확인하기 | **Show Real-time Sensor Value** |

**에디터 패널** (문서가 쓰는 표현)

| ko | en |
|---|---|
| 블록 모음 | block palette |
| 코드 모음 | code palette |
| 코드 에디터 | code editor |
| 기본 코드 | Codes |
| 코딩 영역 | coding area |
| 블록 카테고리 | block categories |

**스크린샷에만 보이고 문서는 인용하지 않는 라벨**

`ko` 가 인용하지 않았으므로 `en` 도 인용하지 않았다. 새 언어도 같다. 스크린샷을
대조할 때 참고용으로만 쓴다.

| 위치 | 실제 화면 라벨 (en) | 문서가 쓰는 표현 |
|---|---|---|
| 로고 이미지 | `BLOCK COMPOSER` / `SCRIPT COMPOSER` (전부 대문자) | Block Composer / Script Composer |
| 좌측 패널 탭 | `Code Palette` | the code palette |
| 에디터 탭 | `Python Editor` | the code editor |
| 로봇 선택 팝업 버튼 | `Add` / `Close` | Add (닫기 버튼은 `ko` 도 언급 없음) |
| 색상 카테고리 블록 | `basic color` | a Color category block |

---

## 12. 직역이 틀렸던 사례 — 이미지를 열어야 잡힌다

`TRANSLATION.md` 규칙 2-③ 의 **"이미지의 라벨이 산문의 용어보다 권위 있다"** 가 실제로
직역을 뒤집은 것들이다. 새 언어에서도 같은 자리에서 같은 실수가 난다.

| ko | 직역했다면 | 실제 라벨 (en) |
|---|---|---|
| 으로 계산 | for loop | **count with** |
| 밝기 센서 값 | light sensor | **brightness** |
| 로봇 연결상태 | robot connection status | **Connections** |
| 실시간 센서 값 확인하기 | View sensor values in real time | **Show Real-time Sensor Value** |
| 기준점 | reference point | **Origin** |
| 앞으로 가기 (Pio 키패드) | forward | **move forward** |
| 기본 (Pio 눈 색) | basic | **default** |
| 기본 (스텝 모터 모드) | basic / default | **normal** (`wave_step`) |
| 라이다 켜기 / 끄기 | on / off | **start** / stop |
| 상태 변경 여부 드롭다운 | state changed | **tilt forward** 등 |
| 시작하기 / 무한 반복하기 (햇 블록) | start / repeat forever | **function setup** / **function loop** |
| 제거하기 (우클릭) | remove from list | **Remove** |
| 스코프 (콘솔 탭 · 블록) | scope | **Scope** — 언어별로 갈린다 |
| 기본 코드 (코드 모음 루트) | basic code | **Codes** |
| 켜기 / 끄기 (카메라) | show / hide | **On** / **Off** |

`ja` 를 하면서 이 표의 자리들이 실제로 다시 갈렸다. 참고할 점 두 가지:

- **햇 블록**은 `ko` 문구(`시작하기`)를 직역하면 틀린다. `ja` 는 `セットアップ関数` /
  `ループ関数` 로, `en` 처럼 **함수 이름을 드러내는 쪽**이다. 이 두 라벨은
  `program/Editor.md` · `guide/CodingGuide.md` · `guide/CodingRules.md` 세 문서에
  걸쳐 나오므로 한 번 정하면 끝까지 같이 써야 한다.
- **스코프**는 언어에 따라 단어가 바뀐다. `ja` 는 콘솔 탭과 블록 모두 `グラフ`(그래프)다.
  `ko` 가 `스코프(Scope)` 라고 병기했다고 해서 그 언어도 'scope' 계열일 것이라고
  가정하지 않는다.

### 툴바 버튼 라벨과 팝업 제목이 다른 단어일 수 있다

`ko` 는 툴바 버튼을 `예제`, 그 팝업 화면을 `예제 선택하기` 라고 부른다. `en` 은 둘 다
`Example` 계열(`Example` / `Select Example`)이지만, **`ja` 는 아예 다른 단어를 쓴다** —
툴바는 `例`, 팝업 제목은 `サンプルを選択` 다.

그래서 `ko` 가 버튼을 인용한 자리에는 **툴바 이미지의 라벨**을, 화면을 인용한 자리에는
**팝업 이미지의 제목**을 넣는다. 한쪽으로 통일하면 학생이 못 찾는 쪽이 생긴다.
`program/Menu/toolbar.png` 와 `program/Menu/example-select.png` 를 둘 다 열어야 한다.

`ja` 만의 특성이 아니다. `de` 는 **소리** 쪽에서 같은 일이 벌어진다 — 툴바 버튼은
`Ton` 인데 팝업 제목은 `Sound auswählen` 이다. 언어마다 어느 항목에서 갈라지는지가
다르므로, 툴바와 팝업을 짝지어 확인하는 것을 습관으로 삼는다.

`pt` 는 **동글** 쪽에서 갈린다 — 툴바 버튼은 `Adaptador` 인데, 연결 실패 안내문은
같은 것을 `dongle` 이라고 부르며 `menu 'Dongle'` 이라고 적는다
(`program/Editor/python-codes.png` 오른쪽 패널). 툴바를 인용하는 자리에는 `Adaptador` 를 쓴다.

### 위 표의 `Remove` 는 `en` 라벨이지 고정 문자열이 아니다

우클릭 컨텍스트 메뉴의 `제거하기` 는 **언어마다 번역된다** —
`ja` `削除` · `zh-hans` `移除` · `de` `Entfernen` · `nl` `Verwijderen` · `es` `Eliminar` ·
`pt` `Remover`. `de`·`nl`·`es` 를 쓸 때 표의 `Remove` 를 그대로 옮겨 세 문서
(`program/Editor.md` 2곳 · `program/Menu.md` 1곳)에 영어가 남았고 나중에 고쳐야 했다.

이 표의 오른쪽 열은 **`en` 이 그 자리에서 직역을 뒤집었다는 증거**일 뿐이다.
다른 언어를 쓸 때는 표의 값을 베끼지 말고 `program/Editor/block-category-remove.png` 를
열어 그 언어의 라벨을 확인한다.

### `it` — 같은 개념을 두 단어로 부르는 자리가 여럿이다

`it` 은 앱 안에서 같은 것을 다른 단어로 부르는 곳이 유독 많다. 문서에는 **그 블록 자신의
이미지 라벨**을 쓰고, 산문에서 개념을 설명할 때는 한 쪽으로 통일한다.

| 자리 | 갈라진 표기 |
|---|---|
| 얼굴 (AI 모듈 제목 ↔ 부위 드롭다운) | `volto` ↔ `viso` |
| 리스트 (`lists_*` 블록 ↔ `lists_replace`) | `nella lista` ↔ `nell'elenco` |
| 선 따라가기 (HamsterS ↔ Hamster) | `inseguimento` ↔ `tracciamento` |
| 교차로 (HamsterS ↔ Hamster) | `intersezione` ↔ `incrocio` |
| 신호 세기 (HamsterS ↔ Hamster) | `potenza del segnale` ↔ `intensità del segnale` |
| 버저 (HamsterS ↔ Hamster ↔ Turtle ↔ Pio) | `suono del buzzer` ↔ `frequenza del buzzer` ↔ `frequenza del cicalino` ↔ `ronzio` |
| 동글 (툴바 ↔ 설정 메뉴) | 툴바도 `Dongle`, 메뉴도 `Dongle` — `it` 은 갈라지지 않는다 |

`Script Composer` 의 왼쪽 패널 탭이 `it` 에서 **`Tavolozza dei blocchi`**(블록 팔레트)로
나온다 — 코드 팔레트인데 블록 팔레트 라벨이 재사용되었다. 앱 쪽 오류로 보고,
문서에는 `tavolozza del codice` 를 쓴다.

~~`AI/ColorDetection` 의 `detect_once` · `detect_continuous` 라벨이 `it` 에서
`rileva l'oggetto` · `rilevamento continuo degli oggetti`(사물)로 나왔다.~~
**(2026-09-10 재촬영에서 고쳐졌다 → §13 참고)** — 이제 `rileva il colore una volta` · `avvia rilevamento continuo dei colori` 다.

### `set_tts` 예시의 로케일 코드는 그 언어의 것으로 쓴다

`ko` 는 `Utils.set_tts('ko-KR', '')` 이고, 바로 위 `<BlockImage>` 는 **그 언어의 기본
로케일**이 선택된 상태를 보여준다 (`de-DE` · `nl-NL` · `es-ES` · `pt-BR` · `it-IT` ·
`zh-CN` · `zh-TW`). `en` 과 `ja` 는 처음부터 자기 로케일로 옮겼고, 나머지는 `ko-KR` 이
남아 있어 나중에 맞췄다. 매개변수 표의 목소리 예시(`'Google italiano'`)와 짝을 맞춘다.

> `pt` 는 UI 가 유럽 포르투갈어인데 TTS 목록은 `Português (pt-BR)` 이다.
> 이미지가 보여주는 값을 그대로 쓴다.

### `fr` 은 햇 블록에서 `ko` 쪽을 따른다

§12 표의 `시작하기 / 무한 반복하기` 행은 `en`(`function setup` / `function loop`)과
`ja`·`it`·`pt` 계열이 **함수 이름을 드러내는** 쪽이라고 적어 두었지만,
`fr` 은 **`au démarrage` / `répéter indéfiniment`** 로 `ko` 문구 쪽을 따른다.
어느 계열인지 언어마다 다르므로 `program/Editor/block-structure.png` 를 반드시 열어 본다.

이 두 라벨은 `program/Editor.md` · `guide/CodingGuide.md` · `guide/CodingRules.md`
세 문서에 걸쳐 나온다.

### `fr` — 앱 쪽 오번역이 여럿이라 이미지를 그대로 옮기면 안 되는 자리가 있다

| 자리 | 이미지 라벨 | 문제 |
|---|---|---|
| `roboids/*/grid_turn` | `allumer [gauche] sur la carte` | `turn` 을 `allumer`(불을 켜다)로 옮겼다. HamsterS·Hamster·Pio 세 로봇 모두 |
| `CheeseStick/NeoPixel/shift` | `maj` | `shift` 를 키보드 Shift 키(`Majuscule`)로 옮겼다. 실제 동작은 이동이다 |
| `roboids/*/grid_move` ↔ `grid_turn` | `sur le plateau` ↔ `sur la carte` | 같은 말판을 두 단어로 부른다 |
| `AI/FaceExpression` 성별 | 값 블록은 `genre`, 판정·신뢰도 블록은 `sexe` | 같은 개념을 두 단어로 부른다 |

`TRANSLATION.md` 의 "이미지 라벨이 산문의 용어보다 권위 있다"는 **번역 선택**에 대한
규칙이고, **앱 쪽 오번역**에는 적용하지 않는다. 문서에는 올바른 표현
(`tourner` · `déplacer` · `plateau` · `genre`)을 쓰고 여기에 남긴다.

### `sv` — 라틴 제품명, `Graf` 계열 스코프, 함수 이름 햇 블록

`sv` 는 §10·§12 의 갈림길에서 다음 쪽을 택한다. 셋 다 이미지로 확인했다.

| 자리 | `sv` |
|---|---|
| 제품 표시명 | `en` 과 동일한 라틴 이름 (`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`) |
| 햇 블록 | **`funktionen setup` / `funktionen loop`** — `en`·`ja` 처럼 함수 이름을 드러내는 쪽 |
| 스코프 (콘솔 탭 · 블록) | **`Graf`** — `ja` 와 같은 그래프 계열. 블록은 `graf tagg`, 콘솔 탭은 `Logg` / `Graf` |
| 제거하기 (우클릭) | **`Ta bort`** |
| `set_tts` 로케일 | `Svenska (sv-SE)` → `Utils.set_tts('sv-SE', '')` |

**툴바 버튼과 팝업 제목이 갈라지지 않는다.** `Exempel`/`Välj exempel`, `Ljud`/`Välj ljud`,
`Tillägg`/`Välj tillägg`, `Robot`/`Välj robot` 모두 같은 어간이고, 동글은 툴바·설정 메뉴
모두 `Dongel` 이다. (`de`·`ja`·`pt` 와 달리 짝이 어긋나는 자리가 없다.)

#### `sv` — 로봇마다 같은 개념을 다른 단어로 부르는 자리

`it` 과 같은 종류의 갈림이다. 문서에는 **그 블록 자신의 이미지 라벨**을 쓴다.

| 자리 | 갈라진 표기 |
|---|---|
| 근접 센서 (HamsterS ↔ Hamster) | `avståndssensor` ↔ `närhetssensor` |
| 버저음 (HamsterS·Hamster ↔ Turtle·Pio·Beagle·CheeseStick) | `summerfrekvens` ↔ `summerljud` |
| 말판 (HamsterS·Hamster ↔ Pio) | `brädet` ↔ `spelplanen` |
| 선 따라가기 멈추기 (HamsterS ↔ Hamster ↔ Turtle) | `stoppa linjeföljningen` ↔ `stoppa linjeföljning` ↔ `sluta följa linjen` |
| 엔코더 (Beagle ↔ Raccoon4) | `pulsgivare` ↔ `kodare` |
| 모델 상태 (FaceDetection·ObjectDetection ↔ 나머지 AI 8개) | `inläsningsstatus` ↔ `laddningsstatus` |

**음계 드롭다운이 두 계열로 갈린다.** 고정도 계명(`Do` `Re` `Mi` …)을 쓰는 쪽은
HamsterS · Hamster · Turtle · Pio · Raccoon4 · HAT022 이고, **알파벳 음명**(`C` `D` `E` …)을
쓰는 쪽은 **Beagle 과 roboids/CheeseStick** 이다. §5 표를 그대로 베끼면 이 두 문서가 틀린다.

#### `sv` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

`AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는 2026-09-10 재촬영에서
고쳐졌다 (§13 참고). 아래 한 자리만 남았다.

| 자리 | 이미지 라벨 | 문제 |
|---|---|---|
| `AI/SelfDriving/set_lane_color` | `körfälgsfärg` | `körfält`(차선)의 오타로 `körfälg`(휠 림)이 되었다. 같은 모듈의 `lane_data`·`lane_detected` 는 `körfält` 로 맞게 나온다. 문서에는 `körfält` 를 쓴다 |

#### `sv` 에서 새로 정한 문서 용어

| ko | sv |
|---|---|
| `### 매개변수` | `### Parametrar` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 · 종류 / 기본값` | `Namn / Sort / Beskrivning / Intervall · Typ / Standard` |
| `(없음)` · `없음.` | `(ingen)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Instansdeklaration` |
| `블록을 작업 영역에 추가하면 …` | `När du lägger till ett …-block i arbetsytan infogas följande instansdeklaration automatiskt i Python-koden:` |
| `# 여러 인스턴스가 있는 경우` | `# När det finns flera instanser` |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 드롭다운 / 변수 | Rullgardinsalternativ / Inmatning (fält) / Inmatning (block) / Kryssruta / Färg / Inmatning (färg) / Inmatning (sträng) / **Inmatning (array)** / Rullgardinsmeny / Variabel |
| 0 이상 정수 / 1 이상 정수 / 0 이상 실수 | Heltal 0 eller större / Heltal 1 eller större / Reellt tal 0 eller större |
| `A ~ B 정수` | `Heltal A till B` |
| 완료 대기 여부 | Om körningen ska vänta tills det är klart |
| 로드 완료 대기 여부 | Om körningen ska vänta tills inläsningen är klar |
| 인스턴스 번호 (0부터 시작) | Instansnummer (börjar på 0) |
| 왼쪽(left), 오른쪽(right), 양쪽(both) | vänster(left), höger(right), båda(both) |
| cm, mm, 인치(inch) | cm, mm, tum(inch) |
| 시작(start), 중지(stop) | starta(start), stoppa(stop) |
| 표시(on=True), 숨기기(off=False) | visa(on=True), dölj(off=False) |
| 검정(black), 흰색(white) | svart(black), vit(white) |
| 시스템 카메라 라벨 | Systemets kameraetikett |
| 사물 클래스 80개 | 80 objektklasser |
| 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | avstånd (utelämnas eller None), vågrätt avstånd(horizontal), lodrätt avstånd(vertical) |
| 기준점 | Utgångspunkt |

`Inmatning (배열)` 을 `Inmatning (fält)` 로 쓰면 `입력값 (필드)` 와 충돌하므로
**배열만 `array`** 로 남겼다. 단 `common/Math` 의 `math_array` 블록 라벨은 실제로 `fält` 라서,
그 문서 산문에서는 이미지 라벨대로 `fält` 를 쓴다.

**`common` 배치에서 이미지에 한 쪽만 보이는 드롭다운 항목 3곳**은 보이는 라벨에서
같은 계열로 맞췄다 — `upprepa medan` → `upprepa tills`, `avbryt` → `fortsätt`,
`VERSALER` → `gemener` / `Versala Initialer`. 재촬영본이 나오면 확인이 필요한 자리다.

---

## `da` — 덴마크어에서 확인된 것

#### `da` — 제품명과 앱 UI

`sv` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 — `HamsterS` · `Hamster` ·
`Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`. (`Pio.md` 의 표시명은
`Piobot`, `Raccoon4.md` 는 `RaccoonBot` 이다.)

**햇 블록 두 개는 `da` 가 함수 이름까지 번역한 쪽이다.**

| | 햇 블록 라벨 |
|---|---|
| `en` · `sv` | `setup function` / `loop function`, `funktionen setup` / `funktionen loop` |
| **`da`** | **`funktion opsætning`** / **`funktion løkke`** |

`guide/CodingRules` 3·4번 항목과 `program/Editor` 의 블록 기본 구조 설명이 이 라벨을
그대로 인용하므로, `setup`·`loop` 를 노출하면 이미지와 어긋난다.

주요 앱 UI 라벨 (이미지에서 확인):

| 자리 | da |
|---|---|
| 툴바 | `Dongle` · `Robot` · `Udvidelse` · `Lyd` · `Eksempel` · `Rediger` · `Fil` · `Projekt` · `AI-kodning` · `Kopiér kode` · `Indstillinger` · `Support` |
| 블록 카테고리 | `Logik` · `Løkker` · `Matematik` · `Tekst` · `Liste` · `Farve` · `Lyd` · `Styring` · `Variabler` · `Funktioner` · `Andre` |
| 미리보기 탭 | `Forbindelser` · `Python-forhåndsvisning` · `Kamera` · `Konsol` (콘솔 하위 `Log` / `Graf`) |
| 스코프(Scope) | **`Graf`** — 콘솔 하위 탭 이름과 `common/Control` 의 `scope` 블록이 같은 단어다 |
| 우클릭 제거하기 / 도움말 | `Fjern` / `Hjælp` (블록 우클릭은 `Hjælp` · `Gem som billede`) |
| 코드 모음 우클릭 | `Indsæt kode` · `Annuller` (루트는 `Kode`) |
| 편집 메뉴 | `Kopiér` · `Indsæt` · `Fortryd` · `Annuller fortryd` |
| 파일 메뉴 | `Nyt` · `Gem projekt` · `Eksportér Python-kode` · `Åbn projekt` |
| 설정 메뉴 | `Vælg sprog` · `Afbryd forbindelsen` · `Opret forbindelse` · `Nulstil program` |
| 지원 메뉴 | `Introduktion` · `Hjælp` · `Brugervejledning` · `Robomation Lab` · `Hjem` · `YouTube` · `Webshop` · `Om` · `Kontakt os` |
| 팝업 | `Vælg robot`(`Tilføj`/`Luk`) · `Vælg eksempel` · `Vælg lyd` · `Vælg udvidelse`(`Vælg flere moduler`) · `Tilbage` · `Søg` |
| 연결 상태 | `Donglen er tilsluttet.` · `Forbundet` · `Vis sensorværdi i realtid` |

툴바 버튼과 팝업 제목의 어간이 모두 일치한다 (`Udvidelse`/`Vælg udvidelse`,
`Robot`/`Vælg robot`). `de`·`ja`·`pt` 같은 짝 어긋남이 없다.

TTS 로케일은 `Utils.set_tts('da-DK', '')` 이다.

AI 10개 모듈은 모두 **`-registrering`** 계열로 통일되어 있다 —
`Ansigtsregistrering` · `Håndregistrering` · `Kropsregistrering` · `Objektregistrering` ·
`Farveregistrering` · `Registrering af ArUco-markører`. 예외는 `Tale til tekst`(ASR) ·
`Ansigtsudtryk`(FaceExpression) · `Kamerabaseret selvkørsel`(SelfDriving) 세 개다.

#### `da` — 로봇마다 같은 개념을 다른 단어로 부르는 자리

`it`·`sv` 와 같은 종류의 갈림이다. 문서에는 **그 블록 자신의 이미지 라벨**을 쓴다.

| 자리 | 갈라진 표기 |
|---|---|
| 근접 센서 (HamsterS ↔ Hamster) | `afstandssensor` ↔ `nærhedssensor` |
| 버저음 (HamsterS·Hamster·Pio ↔ Turtle·CheeseStick ↔ Beagle) | `summerlyd` ↔ `summelyd` ↔ `summelydens frekvens` |
| 말판 (HamsterS·Pio ↔ Hamster) | `brættet` ↔ `pladen` |
| 바퀴 움직임 (HamsterS·Beagle ↔ Turtle·Pio) | `Kører hjulet?` ↔ `Bevæger hjulet sig?` |
| 슈터 각도 (HamsterS ↔ Hamster) | `skyderens vinkel` ↔ `affyringsvinklen` |

반면 **선 따라가기**(`linjefølgning`)와 **엔코더**(`enkoder`)는 `sv` 와 달리 `da` 에서는
전 로봇이 같은 단어를 쓴다.

**음계 드롭다운은 전 로봇이 고정도 계명(`Do` `Re` `Mi` …) 한 계열이다.**
`sv` 에서 알파벳 음명으로 갈라졌던 **Beagle 과 roboids/CheeseStick 도 `da` 에서는 `Do`** 다.
§5 표를 그대로 쓰면 된다.

#### `da` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

**남은 자리가 없다.** 유일했던 `AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는
2026-09-10 재촬영에서 고쳐졌다 (§13 참고).

`AI/SelfDriving` 은 `sv` 의 `körfälg` 같은 오타가 없다 — `banefarve` · `bane` 로 일관된다.
`da` 에서 이 모듈에 손댈 이유가 없다.

#### `da` 에서 새로 정한 문서 용어

| ko | da |
|---|---|
| `### 매개변수` | `### Parametre` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 · 종류 / 기본값` | `Navn` · `Slags` · `Beskrivelse` · `Interval / Type` · `Standard` |
| `(없음)` · `없음.` | `(ingen)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Instanserklæring` |
| `블록을 작업 영역에 추가하면 …` | `Når du tilføjer en …-blok i arbejdsområdet, indsættes følgende instanserklæring automatisk i Python-koden:` (28개 문서 동일) |
| `# 여러 인스턴스가 있는 경우` | `# Når der er flere instanser` (17개 문서 동일) |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 조건 | Rullemenupunkt / Input (felt) / Input (blok) / Afkrydsningsfelt / Farve / Input (farve) / Input (streng) / **Input (array)** / Betingelse |
| 왼쪽(left), 오른쪽(right), 양쪽(both) | venstre(left), højre(right), begge(both) |
| 모델 상태 | `Modellens tilstand` (AI 6개 문서 동일) |
| 로그 출력하기 / 스코프 출력하기 | `Skriv til loggen` / `Vis i grafen` |
| 기다리기 | `Vent` (`Vent én frame` · `Vent for evigt`) |

`sv` 와 같은 이유로 **배열만 `array`** 로 남겼다 — `Input (felt)` 가 이미 `입력값 (필드)` 다.

---

## `no` — 노르웨이어(보크몰)에서 확인된 것

#### `no` — 제품명과 앱 UI

`sv`·`da` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 — `HamsterS` · `Hamster` ·
`Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`.

**햇 블록은 `da` 와 같이 함수 이름을 번역한 쪽이다** — **`funksjon oppsett`** / **`funksjon løkke`**.

| 자리 | no |
|---|---|
| 툴바 | `Dongle` · `Robot` · `Utvidelse` · `Lyd` · `Eksempel` · `Rediger` · `Fil` · `Prosjekt` · `AI-koding` · `Kopier kode` · `Blokk ▾`/`Python ▾` · `Innstillinger` · `Brukerstøtte` |
| 블록 카테고리 | `Logikk` · `Løkker` · `Matematikk` · `Tekst` · `Liste` · `Farge` · `Lyd` · `Styring` · `Variabler` · `Funksjoner` · `Annet` |
| 좌측 패널 · 코드 루트 · 에디터 탭 | `Kodepalett` · **`Koder`** · `Python Redigeringsprogram` (`da` 의 `Kodepalet`/`Kode`/`Python Editor` 와 다르다) |
| 미리보기 탭 | `Tilkoblinger` · `Forhåndsvisning av Python` · `Kamera` · `Konsoll` (하위 `Logg` / `Graf`) |
| 스코프(Scope) | **`Graf`** — `ja`·`sv`·`da` 와 같은 그래프 계열 |
| 제거하기 / 도움말 | `Fjern` / `Hjelp` (블록 우클릭은 `Hjelp` · `Lagre som bilde`) |
| 코드 모음 우클릭 | `Sett inn kode` · `Avbryt` |
| 편집 메뉴 | `Kopier` · `Lim inn` · `Angre` · `Gjør om` |
| 파일 메뉴 | `Ny` · `Lagre prosjekt` · `Eksporter Python-kode` · `Åpne prosjekt` |
| 설정 메뉴 | `Velg språk` · `Koble fra` · `Koble til` · `Tilbakestill programmet` |
| 지원 메뉴 | `Opplæring` · `Hjelp` · `Brukerveiledning` · `Robomation Lab` · `Hjem` · `YouTube` · `Nettbutikk` · `Om` · `Kontakt oss` |
| 팝업 | `Velg robot`(`Legg til`/`Lukk`) · `Velg eksempel` · `Velg lyd` · `Velg utvidelse`(`Velg flere moduler`) · `Tilbake` · `Søk` |
| 연결 상태 | `Dongelen er tilkoblet.` · `Tilkoblet` · `Vis sensorverdi i sanntid` |
| 카메라 | `Velg et kamera.` · `På` |

**팝업의 AI 필터 칩이 `KI`** 다 (툴바 버튼은 `AI-koding`). 노르웨이어는 AI 를 `KI` 로도 쓰는데
프로그램이 자리마다 다르게 쓰므로, 툴바를 인용하는 자리에는 `AI-koding` 을 쓴다.

TTS 로케일은 `Utils.set_tts('nb-NO', '')` 이다.

AI 10개 모듈은 **`-gjenkjenning`** 계열이다 — `Ansiktsgjenkjenning` · `Håndgjenkjenning` ·
`Kroppsgjenkjenning` · `Objektgjenkjenning` · `Fargegjenkjenning` · `ArUco-markørgjenkjenning`.
예외는 `Tale til tekst`(ASR) · `Ansiktsuttrykk`(FaceExpression) · `Selvkjøring med kamera`(SelfDriving) 셋이다.

#### `no` — 같은 개념을 다른 단어로 부르는 자리

`it`·`sv`·`da` 와 같은 종류의 갈림인데 **`no` 는 특히 동사에서 많이 갈린다.**
문서에는 **그 블록 자신의 이미지 라벨**을 쓴다.

| 자리 | 갈라진 표기 |
|---|---|
| 한 번 인식하기 (AI 10개) | `oppdag`(FaceDetection·FaceExpression) ↔ `registrer`(BodyDetection·DetailedFaceDetection·HandDetection·ArucoMarker) ↔ `gjenkjenn`(ObjectDetection·ColorDetection·SelfDriving) |
| 모델 상태 | `innlastingstilstand`(FaceDetection·ObjectDetection·FaceExpression) ↔ `innlastingsstatus`(BodyDetection·HandDetection) |
| 감지 여부 | `… oppdaget?` ↔ `… registrert?`(HandDetection·ColorDetection) ↔ `… gjenkjent?`(ObjectDetection) |
| 근접 센서 (HamsterS ↔ Hamster) | `avstandssensor` ↔ `nærhetssensor` |
| LED (HamsterS ↔ Hamster ↔ Turtle ↔ Pio) | `LED-lys` ↔ `LED` ↔ `hodelysdioden` ↔ `øye` |
| 거리 이동하기 (HamsterS·Turtle·Pio ↔ Beagle) | `flytt` ↔ `kjør` |
| 소리 끄기 (HamsterS ↔ Beagle·Raccoon4·CheeseStick) | `slå av lyd` ↔ `lyd av` |
| 말판 한 칸 이동 (HamsterS·Pio ↔ Hamster) | `flytt ett trinn` ↔ `gå ett trinn` |
| 입출력 모드 설정 (HamsterS·CheeseStick ↔ Hamster) | `sett port … som` ↔ `angi port … som` |
| 상태 변경 여부 | `vippet fremover`(HamsterS) ↔ `vipp fremover`(Hamster·Turtle) ↔ `vipp forover`(Beagle) |
| 소리 재생하기 | `spill lydklippet`(HamsterS·Beagle·Raccoon4) ↔ `spill lydklipp`(Turtle·CheeseStick) ↔ `spill av … lydklipp`(Pio) |
| 리스트 (`lists_*` ↔ `lists_replace`) | `i listen` ↔ `i liste` |

**음계 드롭다운은 전 로봇이 고정도 계명(`Do` `Re` `Mi` …) 한 계열이다** — `sv` 에서 갈라졌던
Beagle 과 roboids/CheeseStick 도 `no` 에서는 `Do` 다. §5 표를 그대로 쓰면 된다.

#### `no` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

**남은 자리가 없다.** 유일했던 `AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는
2026-09-10 재촬영에서 고쳐졌다 (§13 참고).

`AI/SelfDriving` 은 `sv` 의 `körfälg` 같은 오타가 없다 (`kjørefeltfarge` · `kjørefelt`).
`CheeseStick/NeoPixel/shift` 도 `fr` 의 `maj` 같은 오역이 없다 — `forskyv`(이동) 로 맞게 나온다.

---

## `setup` / `loop` 주석은 언어마다 다르다 — §7 정형 문장에 추가

`program/Editor` · `guide/CodingGuide` · `guide/CodingRules` 가 인용하는 생성 코드의 주석
두 줄은 **앱이 언어별로 번역해서 내보낸다.** 원래 `ko` 문서를 포함한 14개 언어가 모두
`en` 앱 문구(`# put setup code here, to run once:`)를 그대로 복사하고 있었는데,
`no` 작업 중에 발견해 **15개 언어 전부를 각 언어의 `program/Editor/python-editor.png` 에
찍힌 실제 문구로 맞췄다.**

새 언어를 시작하면 **`ko` 를 그대로 복사하지 말고 그 언어의 `python-editor.png` 를 열어
확인한다.** 세 문서에 걸쳐 언어당 12줄이다 (`CodingGuide` 8 · `CodingRules` 2 · `Editor` 2).

| 언어 | setup 주석 | loop 주석 |
|---|---|---|
| `ko` | `# 코드 시작 시 한 번 실행됩니다:` | `# 코드 시작 시 10ms 간격으로 반복해서 실행됩니다:` |
| `en` | `# put setup code here, to run once:` | `# put control code here, to run repeatedly:` |
| `es` | `# pon aquí el código de inicio, para ejecutarlo una vez:` | `# pon aquí el código de control, para ejecutarlo repetidamente:` |
| `fr` | `# placez le code d'initialisation ici, à exécuter une seule fois :` | `# placez le code de contrôle ici, pour l'exécuter en boucle :` |
| `de` | `# Setup-Code hier einfügen, der einmal ausgeführt wird:` | `# Steuerungscode hier einfügen, der wiederholt ausgeführt wird:` |
| `it` | `# inserisci qui il codice di configurazione, da eseguire una volta:` | `# inserisci qui il codice di controllo, da eseguire ripetutamente:` |
| `pt` | `# coloque aqui o código de configuração, para executar uma vez:` | `# coloque aqui o código de controlo, para executar repetidamente:` |
| `ja` | `# ここに1回だけ実行するセットアップコードを入力します:` | `# ここに繰り返し実行する制御コードを入力します:` |
| `zh-hans` | `# 在此处放置仅运行一次的初始化代码：` | `# 在此处放置重复运行的控制代码：` |
| `zh-hant` | `# 在此放置僅執行一次的設定程式碼：` | `# 在此放置重複執行的控制程式碼：` |
| `nl` | `# plaats hier setupcode die eenmaal wordt uitgevoerd:` | `# plaats hier besturingscode die herhaaldelijk wordt uitgevoerd:` |
| `sv` | `# placera initieringskoden här, för att köra den en gång:` | `# placera styrkoden här, för att köra den upprepade gånger:` |
| `da` | `# indsæt opsætningskode her, som skal køres én gang:` | `# indsæt styringskode her, som skal køres gentagne gange:` |
| `no` | `# legg oppsettskode her, som skal kjøres én gang:` | `# legg kontrollkode her, som skal kjøres gjentatte ganger:` |
| `pl` | `# umieść tutaj kod konfiguracji wykonywany jeden raz:` | `# umieść tutaj kod sterujący wykonywany cyklicznie:` |
| `ru` | `# поместите сюда код настройки, выполняемый один раз:` | `# поместите сюда управляющий код, выполняемый циклически:` |
| `tr` | `# bir kez çalıştırılacak başlangıç kodunu buraya yazın:` | `# tekrar tekrar çalıştırılacak kontrol kodunu buraya yazın:` |
| `vi` | `# đặt mã thiết lập ở đây, để chạy một lần:` | `# đặt mã điều khiển ở đây, để chạy lặp lại:` |
| `id` | `# letakkan kode setup di sini, untuk dijalankan sekali:` | `# letakkan kode kontrol di sini, untuk dijalankan berulang kali:` |

**콜론까지 그대로 옮긴다** — `fr` 은 프랑스어 조판대로 콜론 앞에 공백이 있고(` :`),
`zh-hans`·`zh-hant` 는 전각 콜론(`：`)이다.

`from robomation import *` 과 `def setup():` · `def loop():` · `pass` 는 코드라서
어느 언어에서도 그대로 둔다. 바뀌는 것은 `#` 로 시작하는 두 줄뿐이다.

#### `no` 에서 새로 정한 문서 용어

| ko | no |
|---|---|
| `### 매개변수` | `### Parametere` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 / 종류 / 기본값` | `Navn` · `Slag` · `Beskrivelse` · `Område / Type` · `Standard` |
| `(없음)` · `없음.` | `(ingen)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Instanserklæring` |
| `블록을 작업 영역에 추가하면 …` | `Når du legger til en …-blokk i arbeidsområdet, settes følgende instanserklæring automatisk inn i Python-koden:` (28개 문서 동일) |
| `# 여러 인스턴스가 있는 경우` | `# Når det finnes flere instanser` (17개 문서 동일) |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 드롭다운 / 변수 | Nedtrekksalternativ / Inndata (felt) / Inndata (blokk) / Avmerkingsboks / Farge / Inndata (farge) / Inndata (streng) / **Inndata (tabell)** / Nedtrekksmeny / Variabel |
| 0 이상 정수 / 0 이상 실수 / `A ~ B 정수` | Heltall 0 eller større / Desimaltall 0 eller større / `Heltall A til B` |
| 왼쪽(left), 오른쪽(right), 양쪽(both) | venstre(left), høyre(right), begge(both) |
| cm, mm, 인치(inch) | cm, mm, tomme(inch) |
| 시작(start), 중지(stop) | start(start), stopp(stop) |
| 표시(on=True), 숨기기(off=False) | vis(on=True), skjul(off=False) |
| 완료 대기 여부 / 로드 완료 대기 여부 | Om kjøringen skal vente til det er ferdig / … til innlastingen er ferdig |
| 인스턴스 번호 (0부터 시작) | Instansnummer (starter på 0) |
| 기준점 | Utgangspunkt |
| 사물 클래스 80개 | 80 objektklasser |
| 로그 출력하기 / 스코프 출력하기 | `Skriv til loggen` / `Vis i grafen` |
| 기다리기 | `Vent` (`Vent én bilderamme` · `Vent for alltid`) |

**배열은 `Inndata (tabell)` 로 썼다.** `sv`·`da` 는 배열 블록 라벨이 `fält`/`felt` 와 겹쳐
`array` 로 피했지만, `no` 는 배열 블록이 **`tabell`** 이고 필드는 `felt` 라 충돌이 없다.

---

## `fi` — 핀란드어에서 확인된 것

#### `fi` — 제품명과 앱 UI

`sv`·`da`·`no` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 — `HamsterS` · `Hamster` ·
`Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`.

**햇 블록은 함수 이름을 드러내는 쪽이다** — **`funktio setup`** / **`funktio loop`**
(`en`·`sv`·`ja` 계열. `da`·`no` 처럼 setup/loop 을 번역하지 않는다.)

**동글을 `Sovitin`(어댑터)이라고 부른다.** `pt` 의 `Adaptador` 와 같은 계열인데,
`pt` 가 툴바(`Adaptador`)와 안내문(`dongle`)에서 갈라진 것과 달리 **`fi` 는 세 자리 모두 일관된다** —
툴바 `Sovitin` · 설정 메뉴 머리글 `Sovitin` · 연결 안내 `Sovitin on yhdistetty.`

| 자리 | fi |
|---|---|
| 툴바 | `Sovitin` · `Robotti` · `Laajennus` · `Ääni` · `Esimerkki` · `Muokkaa` · `Tiedosto` · `Projekti` · `Tekoälykoodaus` · `Kopioi koodi` · `Lohkot ▾`/`Python ▾` · `Asetukset` · `Tuki` |
| 블록 카테고리 | `Logiikka` · `Silmukat` · `Matematiikka` · `Teksti` · `Lista` · `Väri` · `Ääni` · `Ohjaus` · `Muuttujat` · `Funktiot` · `Muut` |
| 좌측 패널 · 코드 루트 · 에디터 탭 | `Koodipaletti` · `Koodit` · `Python Editori` |
| 미리보기 탭 | `Yhteydet` · `Python-esikatselu` · `Kamera` · `Konsoli` (하위 `Loki` / `Kuvaaja`) |
| 스코프(Scope) | **`Kuvaaja`** — `ja`·`sv`·`da`·`no` 와 같은 그래프 계열 |
| 제거하기 | `Poista` |
| 코드 모음 우클릭 | `Lisää koodi` · `Peruuta` |
| 편집 메뉴 | `Kopioi` · `Liitä` · `Kumoa` · `Tee uudelleen` |
| 파일 메뉴 | `Uusi` · `Tallenna projekti` · `Vie Python-koodi` · `Avaa projekti` |
| 설정 메뉴 | `Valitse kieli` · `Katkaise yhteys` · `Yhdistä` · `Ohjelman nollaus` |
| 지원 메뉴 | `Ohjevideo` · `Ohje` · `Käyttöopas` · `Robomation Lab` · `Etusivu` · `YouTube` · `Verkkokauppa` · `Tietoja` · `Ota yhteyttä` |
| 팝업 | `Valitse robotti`(`Lisää`/`Sulje`) · `Valitse esimerkki` · `Valitse ääni` · `Valitse laajennus`(`Valitse useita moduuleja`) · `Takaisin` · `Hae` |
| 연결 상태 | `Sovitin on yhdistetty.` · `Yhdistetty` · `Näytä anturin reaaliaikainen arvo` |
| 카메라 | `Valitse kamera.` · `Päällä` |

**팝업의 AI 필터 칩은 `Tekoäly`** 이고 툴바 버튼은 `Tekoälykoodaus` 다 (`no` 의 `KI`/`AI-koding` 처럼
어간이 갈라지지는 않는다).

TTS 로케일은 `Utils.set_tts('fi-FI', '')` 이다.

AI 10개 모듈은 대부분 `-tunnistus` 합성어인데 **두 개만 두 단어로 띄어 쓴다** —
`Kasvojentunnistus` · `Ilmeentunnistus` · `Kohteentunnistus` · `Värintunnistus` ·
`Yksityiskohtainen kasvojentunnistus` · `ArUco-merkkien tunnistus` 는 붙여 쓰고,
**`Käden tunnistus` · `Kehon tunnistus`** 는 띄어 쓴다. `Puhe tekstiksi`(ASR)와
`Kamerapohjainen itseajo`(SelfDriving)는 아예 다른 형태다.

#### `fi` — 같은 개념을 다른 단어로 부르는 자리

**`fi` 는 갈림이 유독 적다.** `sv`·`da`·`no` 에서 갈라졌던 **근접 센서 · 말판 · LED** 가
`fi` 에서는 전 로봇 동일하다 (`läheisyysanturi` · `lauta` · `LED-valo`).
갈라지는 자리는 아래 다섯 곳뿐이다.

| 자리 | 갈라진 표기 |
|---|---|
| 입출력 모드 설정 (HamsterS ↔ Hamster ↔ roboids/CheeseStick) | `aseta portin [A] tilaksi` ↔ `aseta portti [A] tilaan` ↔ `aseta portti [Sa] tuloksi` |
| 상태 변경 여부 (HamsterS ↔ Hamster ↔ Beagle) | `kallista eteen` ↔ `kallistuu eteen` ↔ `kallistettu eteen` |
| 버저음 (HamsterS·Hamster·Beagle ↔ Pio·CheeseStick) | `aseta summerin taajuudeksi` ↔ `aseta summerin ääneksi` |
| 도움말 (블록 우클릭 ↔ 지원 메뉴) | `Apua` ↔ `Ohje` |
| 말단 장치 (Raccoon4 `end_effector*`) | `tarttujan (pääte-efektorin)` ↔ `tarttujan (päätetyökalun)` |

`CheeseStick/PID13` 은 **모듈 제목과 블록 라벨이 갈린다** — 제목은 `PID-13 ohjaussauva ja painike`
인데 블록 안의 드롭다운 라벨은 `ohjainsauva` 다. 제목은 제목대로, 블록은 블록대로 쓴다.

**음계 드롭다운은 전 로봇이 고정도 계명(`Do` `Re` `Mi` …) 한 계열이다.** §5 표를 그대로 쓰면 된다.

#### `fi` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

**남은 자리가 없다.** 유일했던 `AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는
2026-09-10 재촬영에서 고쳐졌다 (§13 참고).

`AI/SelfDriving` 은 `sv` 의 `körfälg` 같은 오타가 없다 (`aseta kaistan väri` · `kaista`).
`CheeseStick/NeoPixel/shift` 도 `fr` 의 `maj` 같은 오역이 없다 — `siirrä`(이동) 로 맞게 나온다.

#### `fi` 에서 새로 정한 문서 용어

| ko | fi |
|---|---|
| `### 매개변수` | `### Parametrit` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 / 종류 / 기본값` | `Nimi` · `Laji` · `Kuvaus` · `Alue / Tyyppi` · `Oletus` |
| `(없음)` · `없음.` | `(ei mitään)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Instanssin esittely` |
| `블록을 작업 영역에 추가하면 …` | `Kun lisäät …-lohkon työtilaan, Python-koodiin lisätään automaattisesti seuraava instanssin esittely:` (28개 문서 동일) |
| `# 여러 인스턴스가 있는 경우` | `# Kun instansseja on useita` (17개 문서 동일) |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 드롭다운 / 변수 | Pudotusvalikon vaihtoehto / Syöte (kenttä) / Syöte (lohko) / Valintaruutu / Väri / Syöte (väri) / Syöte (merkkijono) / **Syöte (taulukko)** / Pudotusvalikko / Muuttuja |
| 0 이상 정수 / 0 이상 실수 | Kokonaisluku 0 tai suurempi / Desimaaliluku 0 tai suurempi |
| `A ~ B 정수` | **`Kokonaisluku välillä A ja B`** |
| 왼쪽(left), 오른쪽(right), 양쪽(both) | vasen(left), oikea(right), molemmat(both) |
| cm, mm, 인치(inch) | cm, mm, tuuma(inch) |
| 시작(start), 중지(stop) | käynnistä(start), pysäytä(stop) |
| 표시(on=True), 숨기기(off=False) | näytä(on=True), piilota(off=False) |
| 완료 대기 여부 / 로드 완료 대기 여부 | Odotetaanko, kunnes valmis / … kunnes lataus on valmis |
| 인스턴스 번호 (0부터 시작) | Instanssin numero (alkaa nollasta) |
| 기준점 | Lähtöpiste |
| 사물 클래스 80개 | 80 esineluokkaa |
| 시스템 카메라 라벨 | Järjestelmän kameran nimi |
| 로그 출력하기 / 스코프 출력하기 | `Tulosta lokiin` / `Näytä kuvaajassa` |
| 기다리기 | `Odota` (`Odota yksi ruutu` · `Odota ikuisesti`) |

**배열은 `Syöte (taulukko)` 로 썼다.** `sv`·`da` 는 배열 블록 라벨이 `fält`/`felt` 와 겹쳐
`array` 로 피했지만, `fi` 는 배열 블록이 **`taulukko`** 이고 필드는 `kenttä` 라 충돌이 없다.

**범위는 가운뎃줄(`–`) 대신 `välillä A ja B` 로 풀어 썼다.** §6 이 가운뎃줄을 금지하는데
핀란드어에서 자연스러운 `0–255` 표기가 바로 그것이라, 낱말로 푸는 쪽을 택했다.
산문의 범위(`10-20 ms`)는 붙임표를 쓴다.

---

## `pl` — 폴란드어에서 확인된 것

#### `pl` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 — `HamsterS` · `Hamster` ·
`Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`.

**햇 블록은 함수 이름을 드러내는 쪽이다** — **`funkcja setup`** / **`funkcja loop`**
(`en`·`sv`·`fi`·`ja` 계열. `da`·`no` 처럼 setup/loop 을 번역하지 않는다.)

**동글을 `Adapter USB` 라고 부른다.** `pt` 의 `Adaptador` · `fi` 의 `Sovitin` 과 같은 어댑터 계열인데,
**툴바와 설정 메뉴 머리글은 `Adapter USB` 로 일치하고 안내문에서만 `Adapter` 로 짧아진다** —
연결 실패 안내는 `Nie można połączyć się z adapterem.` 이고 `menu 'Adapter'` 라고 적으며,
연결 성공 표시는 `Adapter jest połączony.` 다. **툴바를 인용하는 자리에는 `Adapter USB` 를 쓴다.**

| 자리 | pl |
|---|---|
| 툴바 | `Adapter USB` · `Robot` · `Rozszerzenie` · `Dźwięk` · `Przykład` · `Edycja` · `Plik` · `Projekt` · `Programowanie z AI` · `Kopiuj kod` · `Bloki ▾`/`Python ▾` · `Ustawienia` · `Pomoc` |
| 블록 카테고리 | `Logika` · `Pętle` · `Matematyka` · `Tekst` · `Lista` · `Kolor` · `Dźwięk` · `Sterowanie` · `Zmienne` · `Funkcje` · `Inne` |
| 좌측 패널 · 코드 루트 · 에디터 탭 | `Paleta kodu` · `Kod` · `Python Edytor` |
| 미리보기 탭 | `Połączenia` · `Podgląd kodu Python` · `Kamera` · `Konsola` (하위 `Dziennik` / `Wykres`) |
| 스코프(Scope) | **`Wykres`** — `ja`·`sv`·`da`·`no`·`fi` 와 같은 그래프 계열 |
| 제거하기 | `Usuń` |
| 코드 모음 우클릭 | `Wstaw kod` · `Anuluj` (블록 우클릭은 `Pomoc` · `Zapisz jako obraz`) |
| 편집 메뉴 | `Kopiuj` · `Wklej` · `Cofnij` · `Ponów` |
| 파일 메뉴 | `Nowy` · `Zapisz projekt` · `Eksportuj kod Python` · `Otwórz projekt` |
| 설정 메뉴 | `Wybierz język` · `Rozłącz` · `Połącz` · `Resetowanie programu` (머리글 `Język` · `Adapter USB`) |
| 지원 메뉴 | `Samouczek` · `Pomoc` · `Podręcznik użytkownika` · `Laboratorium Robomation` · `Strona główna` · `YouTube` · `Sklep internetowy` · `Informacje` · `Skontaktuj się z nami` (머리글 `Przewodnik` · `Robomation`) |
| 팝업 | `Wybierz robota`(`Dodaj`/`Zamknij`) · `Wybierz przykład` · `Wybierz dźwięk` · `Wybierz rozszerzenie`(`Wybierz wiele modułów`) · `Wstecz` · `Szukaj` |
| 연결 상태 | `Adapter jest połączony.` · `Połączono` · `Pokaż wartość czujnika w czasie rzeczywistym` |
| 카메라 | `Wybierz kamerę.` · `Wł.` |

**툴바 버튼 `Pomoc` 은 ko 의 `지원`(Support) 이고, 그 메뉴 안의 `Pomoc` 은 ko 의 `도움말`(Help) 이다.**
같은 낱말이 두 층위에 겹쳐 있으니 인용할 때 어느 쪽인지 확인한다.

**팝업의 AI 필터 칩이 자리마다 갈린다** — 예제 팝업은 `SI`(Sztuczna Inteligencja), 확장 모듈 팝업은 `AI`,
툴바 버튼은 `Programowanie z AI` 다. `no` 의 `KI`/`AI-koding` 과 같은 종류의 갈림이다.
툴바를 인용하는 자리에는 `Programowanie z AI` 를 쓴다.

TTS 로케일은 `Utils.set_tts('pl-PL', '')` 이다.

AI 10개 모듈은 대부분 **`Wykrywanie …`** 계열이다 — `Wykrywanie twarzy` · `Wykrywanie dłoni` ·
`Wykrywanie ciała` · `Wykrywanie obiektów` · `Wykrywanie kolorów` · `Wykrywanie znaczników ArUco` ·
`Szczegółowe wykrywanie twarzy`. 예외는 `Mowa na tekst`(ASR) · `Wyraz twarzy`(FaceExpression) ·
`Autonomiczna jazda z kamerą`(SelfDriving) 셋이다.

#### `pl` — 같은 개념을 다른 단어로 부르는 자리

**`pl` 은 좌우 드롭다운의 성(gender)이 블록마다 갈리는 것이 가장 큰 특징이다.**
문서에는 **그 블록 자신의 이미지 라벨**을 쓴다.

| 자리 | 갈라진 표기 |
|---|---|
| 왼쪽/오른쪽 (바퀴 설정·변경 ↔ 나머지 전부) | `lewe`·`prawe`(set_wheel_speed·change_speed) ↔ `lewa`·`prawa`(turn_degree·grid_turn·LED·센서·wheel_speed) |
| 왼쪽/오른쪽 (선 따라가기 바닥 센서) | `lewy`·`prawy` — 같은 문서 안에서도 `trace_mode` 만 남성형이다 |
| 양쪽 | `oba`(바퀴·포트) ↔ `obie`(LED) |
| 말판 한 칸 이동 (HamsterS·Pio ↔ Hamster) | `jedź … o jedno pole` ↔ `przesuń do przodu o jedno pole` |
| 말판에서 돌기 (HamsterS·Pio ↔ Hamster) | `obróć się … na planszy` ↔ `skręć … na planszy` |
| 상태 변경 여부 | `pochyl do przodu`(HamsterS) ↔ `pochylony do przodu`(Hamster·Beagle) ↔ `przechylony do przodu`(Turtle) |
| 사각형 정보 최소 x (FaceDetection ↔ HandDetection·ArucoMarker) | `min. położenie x` ↔ `min. pozycja x` |
| 부위 좌표 (FaceDetection ↔ DetailedFaceDetection·ObjectDetection) | `pozycja [twarz] [x]` ↔ `[twarz] [x] położenie` |
| 한 번 인식하기 (AI 8개 ↔ ArucoMarker·SelfDriving) | `… raz` ↔ `… jeden raz` |

**음계 드롭다운은 전 로봇이 고정도 계명(`Do` `Re` `Mi` …) 한 계열이다** — `sv` 에서 갈라졌던
Beagle 과 roboids/CheeseStick 도 `pl` 에서는 `Do` 다. §5 표를 그대로 쓰면 된다.

#### `pl` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

**남은 자리가 없다.** `AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는
2026-09-10 재촬영본으로 받았고 처음부터 색깔 문구로 정상이다 (§13 참고).

`AI/SelfDriving` 은 `sv` 의 `körfälg` 같은 오타가 없다 (`ustaw kolor pasa` · `pas`).
`CheeseStick/NeoPixel/shift` 도 `fr` 의 `maj` 같은 오역이 없다 — `przesuń`(이동) 로 맞게 나온다.
`roboids/*/grid_turn` 도 `fr` 의 `allumer` 같은 오역이 없다 (`obróć się` · `skręć`).

#### `pl` 에서 새로 정한 문서 용어

| ko | pl |
|---|---|
| `### 매개변수` | `### Parametry` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 / 종류 / 기본값` | `Nazwa` · `Rodzaj` · `Opis` · `Zakres / Typ` · `Domyślnie` |
| `(없음)` · `없음.` | `(brak)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Deklaracja instancji` |
| `블록을 작업 영역에 추가하면 …` | `Po dodaniu bloku … do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:` (28개 문서 동일) |
| `# 여러 인스턴스가 있는 경우` | `# Gdy instancji jest więcej` (17개 문서 동일) |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 드롭다운 / 변수 | Opcja listy rozwijanej / Wejście (pole) / Wejście (blok) / Pole wyboru / Kolor / Wejście (kolor) / Wejście (ciąg znaków) / **Wejście (tablica)** / Lista rozwijana / Zmienna |
| 0 이상 정수 / 1 이상 정수 / 0 이상 실수 | Liczba całkowita 0 lub większa / Liczba całkowita 1 lub większa / Liczba rzeczywista 0 lub większa |
| `A ~ B 정수` | `Liczba całkowita od A do B` |
| 완료 대기 여부 / 로드 완료 대기 여부 | Czy czekać na zakończenie / Czy czekać na zakończenie ładowania |
| 인스턴스 번호 (0부터 시작) | Numer instancji (licząc od 0) |
| cm, mm, 인치(inch) | cm, mm, cal(inch) |
| 시작(start), 중지(stop) | uruchom(start), zatrzymaj(stop) |
| 표시(on=True), 숨기기(off=False) | pokaż(on=True), ukryj(off=False) |
| 검정(black), 흰색(white) (선 색) | czarna(black), biała(white) |
| 시스템 카메라 라벨 | Nazwa kamery w systemie |
| 사물 클래스 80개 | 80 klas obiektów |
| 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | odległość (pominięta albo None), odległość pozioma(horizontal), odległość pionowa(vertical) |
| 기준점 | Punkt odniesienia |
| 로그 출력하기 / 스코프 출력하기 | `Zapisz w dzienniku` / `Pokaż na wykresie` |
| 기다리기 | `Czekaj` (`Czekaj jedną klatkę`) |

**배열은 `Wejście (tablica)` 로 썼다.** `sv`·`da` 는 배열 블록 라벨이 `fält`/`felt` 와 겹쳐
`array` 로 피했지만, `pl` 은 배열 블록이 **`tablica`** 이고 필드는 `pole` 라 충돌이 없다.

**소수점은 폴란드어대로 쉼표로 썼다** — `122,1 Hz`, `0,001 sekundy`. 코드 안의 숫자는 건드리지 않는다.

#### `pl` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/loops/controls_while` | `powtarzaj dopóki` | `powtarzaj aż` |
| `common/loops/controls_flow_statements` | `przerwij` | `kontynuuj` |
| `common/text/text_changeCase` | `na WIELKIE LITERY` | `małe litery` · `Pierwsze Wielkie Litery` |
| `CheeseStick/CSD09/set_step_motor_mode` | `normalny`(wave_step) | `wył.`(off) · `mocny`(full_step) |
| 바퀴 `양쪽`(both) | (안 보임) | `oba` — LED 의 `obie` 와 갈린다 |

---

## `ru` — 러시아어에서 확인된 것

#### `ru` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi`·`pl` 과 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 — `HamsterS` · `Hamster` ·
`Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick`. **키릴로 음차하지 않는다.**

**햇 블록은 함수 이름을 드러내는 쪽이다** — **`функция setup`** / **`функция loop`**
(`en`·`sv`·`fi`·`pl`·`ja` 계열).

**동글은 `Адаптер` 하나로 일관된다.** `pt`(`Adaptador`/`dongle`) 처럼 갈라지지 않는다 —
툴바 `Адаптер` · 설정 메뉴 머리글 `Адаптер` · 연결 실패 안내 `Не удалось подключиться к адаптеру.`
(`в меню «Адаптер»`) · 연결 성공 `Адаптер подключён.` 가 모두 같은 낱말이다.

| 자리 | ru |
|---|---|
| 툴바 | `Адаптер` · `Робот` · `Расширение` · `Звук` · `Пример` · `Правка` · `Файл` · `Проект` · `Программирование с ИИ` · `Копировать код` · `Блоки ▾`/`Python ▾` · `Настройки` · `Поддержка` |
| 블록 카테고리 | `Логика` · `Циклы` · `Математика` · `Текст` · `Список` · `Цвет` · **`Аудио`** · `Управление` · `Переменные` · `Функции` · `Другое` |
| 좌측 패널 · 코드 루트 · 에디터 탭 | `Палитра кода` · `Код` · `Python Редактор` |
| 미리보기 탭 | `Подключения` · `Предпросмотр Python` · `Камера` · `Консоль` (하위 `Журнал` / `График`) |
| 스코프(Scope) | **`График`** — `ja`·`sv`·`da`·`no`·`fi`·`pl` 과 같은 그래프 계열 |
| 제거하기 | `Удалить` |
| 코드 모음 우클릭 | `Вставить код` · `Отмена` (블록 우클릭은 `Справка` · `Сохранить как изображение`) |
| 편집 메뉴 | `Копировать` · `Вставить` · `Отменить` · `Повторить` |
| 파일 메뉴 | `Создать` · `Сохранить проект` · `Экспортировать код Python` · `Открыть проект` |
| 설정 메뉴 | `Выберите язык` · `Отключить` · `Подключить` · `Сброс программы` (머리글 `Язык` · `Адаптер`) |
| 지원 메뉴 | `Обучение` · `Справка` · `Руководство пользователя` · `Лаборатория Robomation` · `Главная` · `YouTube` · `Магазин` · `О программе` · `Связаться с нами` (머리글 `Руководство` · `Robomation`) |
| 팝업 | `Выберите робота`(`Добавить`/`Закрыть`) · `Выберите пример` · **`Выбрать звук`** · `Выберите расширение`(`Выбрать несколько модулей`) · `Назад` · `Поиск` |
| 연결 상태 | `Адаптер подключён.` · `Подключено` · `Показать показания датчика в реальном времени` |
| 카메라 | `Выберите камеру.` · `Вкл.` |

**툴바 `Звук` ↔ 블록·코드 카테고리 `Аудио` 가 갈린다.** 같은 소리인데 툴바만 `Звук` 이다.
툴바를 인용하는 자리에는 `Звук`, 카테고리를 인용하는 자리에는 `Аудио` 를 쓴다.

**소리 팝업만 동사가 다르다** — 로봇·예제·확장은 `Выберите …`(명령형 존칭)인데 소리만 `Выбрать звук`(부정형)이다.

**AI 는 `ИИ` 다** — 툴바는 `Программирование с ИИ`, 확장 모듈 팝업의 필터 칩도 `ИИ`, 예제 팝업의 칩도 `ИИ` 로
`pl` 의 `SI`/`AI` 같은 갈림이 없다.

TTS 로케일은 `Utils.set_tts('ru-RU', '')` 이다.

AI 10개 모듈은 대부분 **`Распознавание …`** 계열이다 — `Распознавание речи` · `… лица` ·
`… рук` · `… тела` · `… объектов` · `… цвета` · `… маркеров ArUco` ·
`Детальное распознавание лица`. 예외는 `Выражение лица`(FaceExpression) ·
`Автономное вождение с камерой`(SelfDriving) 둘이다.

#### `ru` — 같은 개념을 다른 단어로 부르는 자리

문서에는 **그 블록 자신의 이미지 라벨**을 쓴다.

| 자리 | 갈라진 표기 |
|---|---|
| 소리 재생하기 (`common/Audio` ↔ 로봇 `sound_clip`) | **둘 다 `воспроизвести звук`** — `en` 은 `Play sound`/`Play a sound clip` 으로 갈랐지만 `ru` 앱은 같은 라벨이다 |
| 바닥 센서 (HamsterS ↔ Hamster) | `датчик поверхности` ↔ `датчик пола` |
| 선 색 (HamsterS ↔ Hamster) | `чёрный`(남성) ↔ `чёрная`(여성) — 같은 `trace_mode` 인데 성이 다르다 |
| 말판 한 칸 이동 (HamsterS ↔ Hamster ↔ Pio) | `переместиться на одну клетку вперёд по полю` ↔ `переместиться вперёд на одну клетку поля` ↔ `переместиться [вперёд] на один шаг по полю` |
| 상태 변경 여부 (HamsterS·Turtle·Beagle ↔ Hamster) | `наклон вперёд` ↔ `наклонён вперёд` |
| 원 그리며 돌기 방향 (HamsterS ↔ Turtle) | `влево-вперёд` ↔ `вперёд-влево` — 낱말 순서가 뒤집힌다 |
| 한 번 인식하기 (AI 9개 ↔ DetailedFaceDetection) | `распознать …` ↔ **`обнаружить лицо один раз`** — 같은 모듈의 `detected` 는 `лицо распознано?` 로 다시 `распозна-` 다 |
| 연속 인식 (AI 대부분 ↔ ColorDetection·DetailedFaceDetection) | `непрерывное распознавание …` ↔ `непрерывное обнаружение …` |

**좌우 드롭다운은 `слева`/`справа`(부사)와 `левый`/`правый`(형용사)로 갈린다.**
바퀴 설정·변경은 `левое`/`правое`(중성 형용사), LED·눈·захват 은 `левый`/`правый`(남성),
회전·센서 값·`wheel_speed` 는 `слева`/`справа` 다. 각 블록 이미지대로 쓴다.

**거리 단위가 키릴로 현지화된다** — `см` · `мм` · `дюйм`. 코드값은 `'cm'`·`'mm'`·`'inch'` 그대로다.
§3 대로 `см(cm), мм(mm), дюйм(inch)` 형태로 적는다.

**음계 드롭다운은 전 로봇이 고정도 계명 한 계열이다** — `До` `Ре` `Ми` `Фа` `Соль` `Ля` `Си`.
Beagle 과 roboids/CheeseStick 도 `До` 다. §5 표를 키릴로 옮겨 쓰면 된다.

#### `ru` — 앱 쪽 오번역이라 이미지를 그대로 옮기면 안 되는 자리

**남은 자리가 없다.** `AI/ColorDetection` 의 `detect_once` · `detect_continuous` 는
2026-09-10 재촬영본으로 받았고 처음부터 색깔 문구로 정상이다 (§13 참고).

`AI/SelfDriving` 은 `sv` 의 `körfälg` 같은 오타가 없다 (`задать цвет полос` · `полоса`).
`CheeseStick/NeoPixel/shift` 도 `fr` 의 `maj` 같은 오역이 없다 — `сдвинуть`(이동) 로 맞게 나온다.
`roboids/*/grid_turn` 도 `fr` 의 `allumer` 같은 오역이 없다 (`повернуть` · `скрёсток` 계열).

#### `ru` 에서 새로 정한 문서 용어

| ko | ru |
|---|---|
| `### 매개변수` | `### Параметры` |
| 표 헤더 `이름 / 구분 / 설명 / 범위 / 종류 / 기본값` | `Название` · `Вид` · `Описание` · `Диапазон / Тип` · `По умолчанию` |
| `(없음)` · `없음.` | `(нет)` — 하나로 통일 |
| `## 인스턴스 선언` | `## Объявление экземпляра` |
| `블록을 작업 영역에 추가하면 …` | `После добавления блока … в рабочую область в код Python автоматически вставляется следующее объявление экземпляра:` (28개 문서 동일) |
| `# 여러 인스턴스가 있는 경우` | `# Когда экземпляров несколько` (17개 문서 동일) |
| 드롭다운 옵션 / 입력값 (필드) / 입력값 (블록) / 체크박스 / 색상 / 입력값 (색상) / 입력값 (문자열) / 입력값 (배열) / 드롭다운 / 변수 | Пункт выпадающего списка / Ввод (поле) / Ввод (блок) / Флажок / Цвет / Ввод (цвет) / Ввод (строка) / **Ввод (массив)** / Выпадающий список / Переменная |
| 0 이상 정수 / 1 이상 정수 / 0 이상 실수 | Целое число 0 или больше / Целое число 1 или больше / Вещественное число 0 или больше |
| `A ~ B 정수` | `Целое число от A до B` |
| 완료 대기 여부 / 로드 완료 대기 여부 | Ждать ли завершения / Ждать ли завершения загрузки |
| 인스턴스 번호 (0부터 시작) | Номер экземпляра (начиная с 0) |
| cm, mm, 인치(inch) | см(cm), мм(mm), дюйм(inch) |
| 시작(start), 중지(stop) | запустить(start), остановить(stop) |
| 표시(on=True), 숨기기(off=False) | показать(on=True), скрыть(off=False) |
| 시스템 카메라 라벨 | Название камеры в системе |
| 사물 클래스 80개 | 80 классов объектов |
| 거리(생략 또는 None), 가로 거리(horizontal), 세로 거리(vertical) | расстояние (пропущено или None), расстояние по горизонтали(horizontal), расстояние по вертикали(vertical) |
| 기준점 | Точка отсчёта |
| 로그 출력하기 / 스코프 출력하기 | `Записать в журнал` / `Показать на графике` |
| 기다리기 | `Ждать` (`Ждать один кадр`) |

**배열은 `Ввод (массив)` 로 썼다.** 배열 블록 라벨이 실제로 `массив` 이고 필드는 `поле` 라 충돌이 없다.

**소수점은 러시아어대로 쉼표로 썼다** — `122,1 Гц`, `0,001 секунды`. 코드 안의 숫자는 건드리지 않는다.

#### `ru` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/loops/controls_while` | `повторять пока` | `повторять до` |
| `common/loops/controls_flow_statements` | `прервать` | `продолжить` |
| `common/text/text_changeCase` | `в ЗАГЛАВНЫЕ БУКВЫ` | `строчные буквы` · `Первые Заглавные Буквы` |
| `CheeseStick/CSD09/set_step_motor_mode` | `обычный`(wave_step) | `выкл.`(off) · `мощный`(full_step) |
| 바퀴 `양쪽`(both) | (안 보임) | `оба` — LED 의 `оба` 와 같은 형태로 맞췄다 |

---

## `tr` — 튀르키예어에서 확인된 것

#### `tr` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi`·`pl`·`ru` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 —
`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick` · `NeoPixel`.
`AI` 모듈명만 튀르키예어로 옮긴다.

| ko | tr | 확인한 이미지 |
|---|---|---|
| 시작하기 / 무한 반복하기 (모자 블록) | `setup fonksiyonu` / `loop fonksiyonu` | `common/functions/setup`·`loop`, `program/Editor/block-structure` |
| 동글 | `Donanım Kilidi` (툴바) · `Donanım kilidi` (설정 소제목) | `program/Menu/dongle-button`, `settings-menu` |
| 로봇 선택 / 확장 모듈 / 소리 / 예제 / 편집 / 파일 | `Robot` / `Uzantı` / `Ses` / `Örnek` / `Düzenle` / `Dosya` | `program/Editor/python-editor` |
| AI 코딩 / 코드 복사 / 설정 / 지원 | `Yapay Zekâ ile Kodlama` / `Kodu Kopyala` / `Ayarlar` / `Destek` | 같은 이미지 |
| 블록 모음 / 코드 모음 | `Blok Paleti`(문서) · `Kod Paleti`(이미지) | `program/Editor/python-editor` |
| 미리보기 탭 | `Bağlantılar` · `Python Önizlemesi` · `Kamera` · `Konsol` | `program/Editor/block-category` |
| 블록 카테고리 11개 | `Mantık` `Döngüler` `Matematik` `Metin` `Liste` `Renk` `Ses` `Kontrol` `Değişkenler` `Fonksiyonlar` `Diğerleri` | `program/Editor/block-category` |
| 제거하기 / 도움말 | `Kaldır` / `Yardım` | `block-category-remove`, `block-flyout-help` |
| 복사/붙여넣기/되돌리기/다시하기 | `Kopyala` / `Yapıştır` / `Geri Al` / `Yinele` | `program/Menu/edit-menu` |
| 새로 만들기 / 프로젝트 저장 / 파이썬 저장 / 불러오기 | `Yeni` / `Projeyi Kaydet` / `Python Kodunu Dışa Aktar` / `Projeyi Aç` | `program/Menu/file-menu` |
| 실시간 센서 값 확인하기 | `Gerçek Zamanlı Sensör Değerini Göster` | `program/Preview/robot-connected` |
| 코드 삽입 / 취소 | `Kod Ekle` / `İptal` | `program/Editor/codes-insert-menu` |

**문서 정형 문장**

| 항목 | tr |
|---|---|
| `### 매개변수` | `### Parametreler` |
| 표 머리 | `| Ad | Tür | Açıklama | Aralık / Tip | Varsayılan |` |
| `(없음)` | `(yok)` |
| `## 인스턴스 선언` | `## Örnek bildirimi` |
| 인스턴스 문장 | `<Ad> bloğunu çalışma alanına eklediğinizde Python koduna aşağıdaki örnek bildirimi kendiliğinden eklenir:` |
| `# 여러 인스턴스가 있는 경우` | `# Birden fazla örnek olduğunda` |
| 구분값 | `Açılır liste seçeneği` / `Giriş (alan)` / `Giriş (blok)` / `Onay kutusu` / `Renk` / `Giriş (renk)` / `Giriş (metin)` / `Giriş (dizi)` / `Değişken` |
| 범위 표현 | `0 veya daha büyük tam sayı` · `A ile B arasında tam sayı` · `0 veya daha büyük gerçel sayı` |
| 완료 대기 여부 | `Tamamlanması beklensin mi` |
| 인스턴스 번호 | `Örnek numarası (0'dan başlar)` |
| TTS | `Utils.set_tts('tr-TR', '')` · `Utils.speak('Merhaba')` |
| 거리 단위 | `cm, mm, inç(inch)` |
| 음계 | `Do(C) … Si(B)` |
| 바퀴 | `sol(left), sağ(right), ikisi(both)` |

#### `tr` — 앱 안에서 갈리는 표기

문서는 아래 갈림을 그대로 두었다. **각 자리의 이미지가 그 자리의 기준이기 때문이다.**

| 자리 | 갈림 |
|---|---|
| 동글 | 툴바·설정은 `Donanım Kilidi` ↔ 연결 메시지는 `Dongle` (`Dongle'a bağlanılamıyor.`, `'Dongle' menüsünden`) |
| 교차점 | `Turtle/intersection` 은 `kavşak` ↔ `HamsterS`·`Hamster` 의 `trace_until_grid` 는 `kesişim` |
| 머리 LED | `Turtle/set_led_color` 는 `baş LED'i` ↔ `turn_off` 는 `kafa LED'i` |
| ArUco 마커 | 모듈명은 `ArUco İşaretçisi Algılama` (işaretçi) ↔ 블록 라벨은 `işaretleyici` |
| 센서 값 어순 | `CSD07` 은 `Sa değeri` (후치) ↔ `CSD10` 은 `değer Sa` (전치) |
| `logic_boolean` | 옵션이 번역되지 않고 영어 `true` / `false` 그대로다 |

**`örnek` 이 두 뜻을 겸한다.** `## Örnek bildirimi` 의 `örnek` 은 instance 이고,
툴바의 `Örnek` 버튼은 example 이다. **한 문서 안에서 같이 나오는 자리가 없어** 둘 다 그대로 두었다 —
`program/Menu` 에는 인스턴스 선언 절이 없고, 로봇 문서에는 예제 메뉴 설명이 없다.

#### `tr` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/loops/controls_while` | `tekrarla iken` | `tekrarla kadar` |
| `common/loops/controls_flow_statements` | `döngüden çık` | `sonraki yinelemeye geç` |
| `common/text/text_changeCase` | `ÜST DURUMA` | `alt duruma` · `Baş Harfleri Büyük` |
| `CheeseStick/CSD09/set_step_motor_mode` | `normal`(wave_step) | `kapalı`(off) · `güç`(full_step) |
| 바퀴 `양쪽`(both) | (안 보임) | `ikisi` — LED 의 `ikisi` 에 맞췄다 (`program/Editor/block-category` 의 `ikisi ▾ LED'i` 로 확인) |

---

## `vi` — 베트남어에서 확인된 것

#### `vi` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi`·`pl`·`ru`·`tr` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 —
`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick` · `NeoPixel`.
`AI` 모듈명만 베트남어로 옮긴다.

| ko | vi | 확인한 이미지 |
|---|---|---|
| 시작하기 / 무한 반복하기 (모자 블록) | `hàm thiết lập` / `hàm lặp` | `common/functions/setup`·`loop`, `program/Editor/block-category` |
| 동글 | `Đầu thu USB` (툴바) ↔ 설정·연결 메시지는 `Dongle` | `program/Menu/dongle-button`, `settings-menu`, `Preview/robot-connected` |
| 로봇 선택 / 확장 모듈 / 소리 / 예제 / 편집 / 파일 | `Robot` / `Tiện ích mở rộng` / `Âm thanh` / `Ví dụ` / `Chỉnh sửa` / `Tệp` | `program/Editor/block-category` |
| AI 코딩 / 코드 복사 / 설정 / 지원 | `Lập trình AI` / `Sao chép mã` / `Cài đặt` / `Hỗ trợ` | 같은 이미지 |
| 블록 모음 / 코드 모음 | `Bảng khối`(문서) · `Mã lệnh`(코드 팔레트 이미지) | `program/Editor/codes-insert-menu` |
| 미리보기 탭 | `Kết nối` · `Xem trước Python` · `Camera` · `Bảng điều khiển` | `program/Editor/block-category` |
| 블록 카테고리 11개 | `Logic` `Vòng lặp` `Toán học` `Văn bản` `Danh sách` `Màu sắc` `Âm thanh` `Điều khiển` `Biến` `Hàm` `Khác` | `program/Editor/block-category` |
| 제거하기 / 도움말 | `Xóa` / `Trợ Giúp` | `block-category-remove`, `block-flyout-help` |
| 복사/붙여넣기/되돌리기/다시하기 | `Sao chép` / `Dán` / `Hoàn tác` / `Làm lại` | `program/Menu/edit-menu` |
| 새로 만들기 / 프로젝트 저장 / 파이썬 저장 / 불러오기 | `Mới` / `Lưu dự án` / `Xuất mã Python` / `Mở dự án` | `program/Menu/file-menu` |
| 실시간 센서 값 확인하기 | `Hiển thị giá trị cảm biến theo thời gian thực` | `program/Preview/robot-connected` |
| 코드 삽입 / 취소 | `Chèn mã` / `Hủy` | `program/Editor/codes-insert-menu` |
| 튜토리얼 / 도움말 / 사용 가이드 | `Hướng dẫn thực hành` / `Trợ giúp` / `Hướng dẫn sử dụng` | `program/Menu/support-menu` |

**문서 정형 문장**

| 항목 | vi |
|---|---|
| `### 매개변수` | `### Tham số` |
| 표 머리 | `| Tên | Loại | Mô tả | Phạm vi / Kiểu | Mặc định |` |
| `(없음)` | `(không có)` |
| `## 인스턴스 선언` | `## Khai báo thực thể` |
| 인스턴스 문장 | `Khi bạn thêm khối <Tên> vào vùng làm việc, phần khai báo thực thể sau đây được tự động chèn vào mã Python:` |
| `# 여러 인스턴스가 있는 경우` | `# Khi có nhiều thực thể` |
| 구분값 | `Tùy chọn danh sách thả xuống` / `Giá trị nhập (ô)` / `Giá trị nhập (khối)` / `Hộp kiểm` / `Màu sắc` / `Giá trị nhập (màu)` / `Giá trị nhập (văn bản)` / `Giá trị nhập (mảng)` / `Biến` / `Giá trị nhập` |
| 범위 표현 | `số nguyên từ 0 trở lên` · `số nguyên từ A đến B` · `số thực từ 0 trở lên` |
| 완료 대기 여부 | `Có chờ hoàn tất hay không` |
| 인스턴스 번호 | `Số hiệu thực thể (bắt đầu từ 0)` |
| TTS | `Utils.set_tts('vi-VN', '')` · `Utils.speak('Xin chào')` |
| 거리 단위 | `cm, mm, inch(inch)` |
| 음계 | `Đô(C) … Si(B)` |
| 바퀴 | `trái(left), phải(right), cả hai(both)` |
| 색 이름 | `đen(black), đỏ(red), cam(orange), vàng(yellow), xanh lá(green), xanh lơ(cyan), xanh dương(blue), tím(violet), đỏ tươi(magenta), trắng(white)` |

**소수점은 베트남어대로 쉼표로 썼다** — `122,1 Hz`, `6553,5`. 코드 안의 숫자는 건드리지 않는다.

#### `vi` — 앱 안에서 갈리는 표기

문서는 아래 갈림을 그대로 두었다. **각 자리의 이미지가 그 자리의 기준이기 때문이다.**

| 자리 | 갈림 |
|---|---|
| 동글 | 툴바는 `Đầu thu USB` ↔ 설정 소제목·연결 메시지는 `Dongle` (`Dongle đã được kết nối.`) |
| 선 따라가기 | `HamsterS`·`Turtle` 은 `vạch` (`dò theo vạch` · `bám theo vạch`) ↔ `Hamster` 는 `đường` (`dò đường màu` · `đặt tốc độ dò đường`) |
| 선 따라가기 동사 | `HamsterS`·`Hamster` 는 `dò` ↔ `Turtle` 은 `bám theo` |
| 말단 장치 | `Raccoon4/end_effector`·`lock` 은 `bộ gắp (cơ cấu chấp hành cuối)` ↔ `end_effector_status` 는 `bộ kẹp (bộ phận chấp hành cuối)` |
| 도움말 | 블록 우클릭은 `Trợ Giúp` (대문자 G) ↔ 지원 메뉴는 `Trợ giúp` |
| 텍스트 `trống` | `text_isEmpty` 는 `trống không` ↔ `lists_isEmpty` 는 `trống rỗng` |

**`ko` 가 로봇마다 갈라 놓은 자리를 `vi` 앱은 갈라 놓지 않았다.**
`trace_until_grid`(HamsterS)와 `trace_until_grid`(Hamster)의 교차로 방향 드롭다운을
`ko` 는 `좌회전/우회전/전진` ↔ `왼쪽/오른쪽/앞` 으로 다르게 쓰는데,
**두 이미지 모두 `rẽ trái` 로 같다.** 이미지를 따라 둘 다 `rẽ trái(left), rẽ phải(right), đi thẳng(forward), quay đầu(uturn)` 로 썼다.

#### `vi` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/logic/logic_operation` | `và` | `hoặc` |
| `common/logic/logic_boolean` | `đúng` | `sai` |
| `common/loops/controls_while` | `lặp lại khi` | `lặp lại cho đến khi` |
| `common/loops/controls_flow_statements` | `thoát` | `lặp tiếp` |
| `common/text/text_changeCase` | `CHỮ IN HOA` | `chữ in thường` · `Viết Hoa Chữ Đầu` |
| `CheeseStick/CSD09/set_step_motor_mode` | `thường`(wave_step) | `tắt`(off) · `mạnh`(full_step) |

---

## `id` — 인도네시아어에서 확인된 것

#### `id` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi`·`pl`·`ru`·`tr`·`vi` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 —
`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick` · `NeoPixel`.
`AI` 모듈명만 인도네시아어로 옮긴다.

| ko | id | 확인한 이미지 |
|---|---|---|
| 시작하기 / 무한 반복하기 (모자 블록) | `fungsi setup` / `fungsi loop` | `common/functions/setup`·`loop`, `program/Editor/block-category` |
| 동글 | `Dongle` (툴바·설정·연결 메시지 모두 동일) | `program/Editor/block-category`, `Menu/settings-menu`, `Preview/robot-connected` |
| 로봇 선택 / 확장 모듈 / 소리 / 예제 / 편집 / 파일 | `Robot` / `Ekstensi` / `Suara` / `Contoh` / `Edit` / `File` | `program/Editor/block-category` |
| AI 코딩 / 코드 복사 / 설정 / 지원 | `Pemrograman AI` / `Salin Kode` / `Pengaturan` / `Dukungan` | 같은 이미지 |
| 블록 모음 / 코드 모음 | `Palet Blok`(문서) · `Palet Kode`(이미지) | `program/Editor/python-editor` |
| 미리보기 탭 | `Koneksi` · `Pratinjau Python` · `Kamera` · `Konsol` | `program/Editor/block-category` |
| 블록 카테고리 11개 | `Logika` `Perulangan` `Matematika` `Teks` `Daftar` `Warna` `Audio` `Kontrol` `Variabel` `Fungsi` `Lainnya` | `program/Editor/block-category` |
| 제거하기 / 도움말 | `Hapus` / `Bantuan` | `block-category-remove`, `block-flyout-help` |
| 복사/붙여넣기/되돌리기/다시하기 | `Salin` / `Tempel` / `Urungkan` / `Ulangi` | `program/Menu/edit-menu` |
| 새로 만들기 / 프로젝트 저장 / 파이썬 저장 / 불러오기 | `Baru` / `Simpan Proyek` / `Ekspor Kode Python` / `Buka Proyek` | `program/Menu/file-menu` |
| 실시간 센서 값 확인하기 | `Tampilkan Nilai Sensor Real-Time` | `program/Preview/robot-connected` |
| 코드 삽입 / 취소 | `Sisipkan Kode` / `Batal` | `program/Editor/codes-insert-menu` |
| 튜토리얼 / 도움말 / 사용 가이드 | `Tutorial` / `Bantuan` / `Panduan Pengguna` | `program/Menu/support-menu` |

**문서 정형 문장**

| 항목 | id |
|---|---|
| `### 매개변수` | `### Parameter` |
| 표 머리 | `| Nama | Jenis | Keterangan | Rentang / Tipe | Bawaan |` |
| `(없음)` | `(tidak ada)` |
| `## 인스턴스 선언` | `## Deklarasi instans` |
| 인스턴스 문장 | `Saat Anda menambahkan blok <Nama> ke area kerja, deklarasi instans berikut otomatis disisipkan ke kode Python:` |
| `# 여러 인스턴스가 있는 경우` | `# Bila ada beberapa instans` |
| 구분값 | `Pilihan daftar turun` / `Nilai masukan (bidang)` / `Nilai masukan (blok)` / `Kotak centang` / `Warna` / `Nilai masukan (warna)` / `Nilai masukan (teks)` / `Nilai masukan (larik)` / `Variabel` / `Nilai masukan` |
| 범위 표현 | `bilangan bulat 0 atau lebih` · `bilangan bulat A sampai B` · `bilangan real 0 atau lebih` |
| 완료 대기 여부 | `Menunggu selesai atau tidak` |
| 인스턴스 번호 | `Nomor instans (mulai dari 0)` |
| TTS | `Utils.set_tts('id-ID', '')` · `Utils.speak('Halo')` |
| 거리 단위 | `cm, mm, inci(inch)` |
| 음계 | `Do(C) … Si(B)` |
| 바퀴 | `kiri(left), kanan(right), keduanya(both)` |
| 색 이름 | `hitam(black), merah(red), jingga(orange), kuning(yellow), hijau(green), sian(cyan), biru(blue), ungu(violet), magenta(magenta), putih(white)` |

**소수점은 인도네시아어대로 쉼표로 썼다** — `122,1 Hz`, `6553,5`. 코드 안의 숫자는 건드리지 않는다.

#### `id` — 앱 안에서 갈리는 표기

문서는 아래 갈림을 그대로 두었다. **각 자리의 이미지가 그 자리의 기준이기 때문이다.**

| 자리 | 갈림 |
|---|---|
| 소리 | 툴바는 `Suara` ↔ 블록/코드 카테고리는 `Audio` |
| 리스트 | 대부분 `dalam list` ↔ `lists_replace` 만 `dalam daftar` (카테고리 이름은 `Daftar`) |
| 텍스트 전치사 | `text_indexOf`·`text_charAt` 은 `dalam teks` ↔ `text_getSubstring` 만 `in teks` (영어 `in` 이 남은 자리) |
| 선 따라가기 | `HamsterS`·`Hamster` 는 `telusuri garis` / `penelusuran garis` ↔ `Turtle` 은 `ikuti garis` / `mengikuti garis` |
| Turtle 안에서도 | `set_trace_speed` 는 `kecepatan mengikuti garis` ↔ `set_trace_gain` 은 `penguatan pelacakan garis` |
| 말단 장치 | `Raccoon4/end_effector`·`lock`·`end_effector_device` 는 `pencengkeram (efektor akhir)` ↔ `end_effector_status` 는 `status gripper (efektor akhir)` |
| 집게 | `HamsterS/gripper` 는 영어 `gripper` 그대로 |

**`ko` 가 로봇마다 갈라 놓은 자리를 `id` 앱은 갈라 놓지 않았다.**
`trace_until_grid`(HamsterS)와 `trace_until_grid`(Hamster)의 교차로 방향 드롭다운을
`ko` 는 `좌회전/우회전/전진` ↔ `왼쪽/오른쪽/앞` 으로 다르게 쓰는데,
**두 이미지 모두 `belok kiri` 로 같다.** 이미지를 따라 둘 다
`belok kiri(left), belok kanan(right), lurus(forward), putar balik(uturn)` 로 썼다. (`vi` 와 같은 상황이다)

#### `id` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/logic/logic_operation` | `dan` | `atau` |
| `common/logic/logic_boolean` | `benar` | `salah` |
| `common/loops/controls_while` | `ulangi selagi` | `ulangi sampai` |
| `common/loops/controls_flow_statements` | `hentikan` | `lanjutkan` |
| `common/text/text_changeCase` | `huruf kapital` | `huruf kecil` · `Huruf Awal Kapital` |
| `CheeseStick/CSD09/set_step_motor_mode` | `normal`(wave_step) | `mati`(off) · `daya`(full_step) |

---

## `th` — 타이어에서 확인된 것

#### `th` — 제품명과 앱 UI

`sv`·`da`·`no`·`fi`·`pl`·`ru`·`tr`·`vi`·`id` 와 마찬가지로 **제품명을 라틴 표기 그대로** 쓴다 —
`HamsterS` · `Hamster` · `Piobot` · `Turtle` · `Beagle` · `RaccoonBot` · `Cheese Stick` · `NeoPixel`.
`AI` 모듈명만 타이어로 옮긴다. 모자 블록은 **함수 이름 쪽**이다 (`en`·`ja`·`it`·`pt`·`sv`·`fi`·`id` 와 같은 부류).

| ko | th | 확인한 이미지 |
|---|---|---|
| 시작하기 / 무한 반복하기 (모자 블록) | `ฟังก์ชัน setup` / `ฟังก์ชัน loop` | `common/functions/setup`·`loop`, `program/Editor/block-category` |
| 동글 | `ดองเกิล` (툴바·설정·연결 메시지 모두 동일) | `program/Editor/python-codes`, `Menu/settings-menu`, `Preview/robot-connected` |
| 로봇 선택 / 확장 모듈 / 소리 / 예제 / 편집 / 파일 | `หุ่นยนต์` / `ส่วนขยาย` / `เสียง` / `ตัวอย่าง` / `แก้ไข` / `ไฟล์` | `program/Editor/python-codes` |
| AI 코딩 / 코드 복사 / 설정 / 지원 | `การเขียนโค้ดด้วย AI` / `คัดลอกโค้ด` / `การตั้งค่า` / `การสนับสนุน` | 같은 이미지 |
| 블록 모음 / 코드 모음 | `ชุดคำสั่ง` (둘 다 같은 낱말) | `program/Editor/python-editor`·`block-category` |
| 코드 루트 노드 | `โค้ด` | `program/Editor/python-codes` |
| 미리보기 탭 | `การเชื่อมต่อ` · `ตัวอย่าง Python` · `กล้อง` · `คอนโซล` | `program/Preview/*` |
| 콘솔 하위 탭 (로그 / 스코프) | `บันทึก` / `กราฟ` | `Preview/console-log`·`console-scope` |
| 블록 카테고리 11개 | `ตรรกะ` `ลูป` `คณิตศาสตร์` `ข้อความ` `รายการ` `สี` `เสียง` `ควบคุม` `ตัวแปร` `ฟังก์ชัน` `อื่น ๆ` | `program/Editor/block-category` |
| 제거하기 / 도움말 | `นำออก` / `ช่วยเหลือ` | `block-category-remove`, `block-flyout-help` |
| 복사/붙여넣기/되돌리기/다시하기 | `คัดลอก` / `วาง` / `เลิกทำ` / `ทำซ้ำ` | `program/Menu/edit-menu` |
| 새로 만들기 / 프로젝트 저장 / 파이썬 저장 / 불러오기 | `สร้างใหม่` / `บันทึกโปรเจกต์` / `ส่งออกโค้ด Python` / `เปิดโปรเจกต์` | `program/Menu/file-menu` |
| 프로젝트 (파일명 입력칸) | `โปรเจกต์` | `program/Menu/file-button` |
| 실시간 센서 값 확인하기 | `แสดงค่าเซ็นเซอร์แบบเรียลไทม์` | `program/Preview/robot-connected` |
| 코드 삽입 / 취소 | `แทรกโค้ด` / `ยกเลิก` | `program/Editor/codes-insert-menu` |
| 튜토리얼 / 도움말 / 사용 가이드 | `บทช่วยสอน` / `ความช่วยเหลือ` / `คู่มือผู้ใช้` | `program/Menu/support-menu` |
| 홈페이지 / 쇼핑몰 / 정보 / 문의하기 | `หน้าหลัก` / `ศูนย์การค้า` / `เกี่ยวกับ` / `ติดต่อเรา` | 같은 이미지 |
| 카메라 선택 / 켜기 | `เลือกกล้อง` / `เปิด` | `program/Preview/camera` |
| 추가하기 / 닫기 (로봇 선택 팝업) | `เพิ่ม` / `ปิด` | `program/Menu/robot-select` |
| 검색 / 전체 / 여러 모듈 선택 | `ค้นหา` / `ทั้งหมด` / `เลือกหลายโมดูล` | `program/Menu/extension-select` |
| 뒤로 (팝업 좌상단) | `ย้อนกลับ`(확장 모듈) ↔ `กลับ`(소리·예제) | `extension-select` ↔ `sound-select`·`example-select` |

**문서 정형 문장**

| 항목 | th |
|---|---|
| `### 매개변수` | `### พารามิเตอร์` |
| 표 머리 | `| ชื่อ | ประเภท | คำอธิบาย | ช่วง / ชนิด | ค่าเริ่มต้น |` |
| `(없음)` | `(ไม่มี)` |
| `## 인스턴스 선언` | `## การประกาศอินสแตนซ์` |
| 인스턴스 문장 | `เมื่อเพิ่มบล็อก <ชื่อ> ลงในพื้นที่ทำงาน การประกาศอินสแตนซ์ต่อไปนี้จะถูกแทรกลงในโค้ด Python โดยอัตโนมัติ:` |
| `# 여러 인스턴스가 있는 경우` | `# กรณีที่มีหลายอินสแตนซ์` |
| 구분값 | `ตัวเลือกดรอปดาวน์` / `ค่าป้อนเข้า (ฟิลด์)` / `ค่าป้อนเข้า (บล็อก)` / `ช่องทำเครื่องหมาย` / `สี` / `ค่าป้อนเข้า (สี)` / `ค่าป้อนเข้า (ข้อความ)` / `ค่าป้อนเข้า (อาร์เรย์)` / `ตัวแปร` / `ค่าป้อนเข้า` |
| 범위 표현 | `จำนวนเต็ม 0 ขึ้นไป` · `จำนวนเต็ม A ~ B` · `จำนวนจริง 0 ขึ้นไป` |
| 완료 대기 여부 | `รอจนเสร็จสิ้นหรือไม่` |
| 인스턴스 번호 | `หมายเลขอินสแตนซ์ (เริ่มจาก 0)` |
| TTS | `Utils.set_tts('th-TH', '')` · `Utils.speak('สวัสดี')` |
| 거리 단위 | `ซม.(cm), มม.(mm), นิ้ว(inch)` |
| 음계 | `โด(C) … ที(B)` (고정도) |
| 바퀴 | `ซ้าย(left), ขวา(right), ทั้งคู่(both)` |
| 색 이름 | `ดำ(black), แดง(red), ส้ม(orange), เหลือง(yellow), เขียว(green), ฟ้าอมเขียว(cyan), น้ำเงิน(blue), ม่วง(violet), ม่วงแดง(magenta), ขาว(white)` |
| `setup`/`loop` 주석 | `# ใส่โค้ดตั้งค่าที่นี่ เพื่อให้ทำงานครั้งเดียว:` / `# ใส่โค้ดควบคุมที่นี่ เพื่อให้ทำงานซ้ำ:` |

**타이어에는 띄어쓰기가 없다.** 낱말 사이를 붙여 쓰고 구/절 경계에만 공백을 둔다.
라틴 제품명·API 이름 앞뒤에는 공백을 넣는다 (`ความเร็วล้อของ HamsterS`).
`อื่น ๆ` 처럼 반복 기호 `ๆ` 앞에는 공백을 넣는다 (앱 표기와 동일).

#### `th` — 앱 안에서 갈리는 표기

문서는 아래 갈림을 그대로 두었다. **각 자리의 이미지가 그 자리의 기준이기 때문이다.**

| 자리 | 갈림 |
|---|---|
| 거리 | 대부분 `ระยะห่าง` ↔ `AI/ObjectDetection/object_distance` 와 `AI/SelfDriving/color_to_color` 만 `ระยะทาง` |
| 선 따라가기 | `HamsterS`·`Turtle` 은 `ตามเส้น` ↔ `Hamster` 만 `วิ่งตามเส้น` |
| 근접 센서 | `HamsterS` 는 `เซ็นเซอร์ตรวจจับวัตถุ` ↔ `Hamster` 는 `เซ็นเซอร์ตรวจจับระยะ` |
| 신호 세기 | `HamsterS`·`Turtle` 은 `ความแรงสัญญาณ` ↔ `Hamster`·`Pio`·`Beagle`·`Raccoon4`·`CheeseStick` 은 `ความแรงของสัญญาณ` |
| 말판 회전 | `HamsterS`·`Pio` 는 `หมุน` ↔ `Hamster` 는 `เลี้ยว` |
| 가속도 | `HamsterS`·`Turtle`·`CheeseStick` 은 `ความเร่งแกน` ↔ `Hamster` 는 `ความเร่ง` ↔ `Beagle` 은 `มาตรความเร่ง`(accelerometer) |
| 포트 설정 | `HamsterS` 는 `ตั้งพอร์ต`·`ตั้งเอาต์พุตของพอร์ต` ↔ `Hamster`·`CheeseStick` 은 `ตั้งค่าพอร์ต`·`ตั้งค่าเอาต์พุตของพอร์ต` |
| 슈터 | `HamsterS` 는 `ตั้งมุมตัวยิง` ↔ `Hamster` 는 `ตั้งค่ามุมตัวยิง` |
| 음계 재생 | 대부분 `เล่นโน้ต` ↔ `Pio` 만 `เล่นโน้ตเสียง` |
| 선 따라가기 변화량 | `HamsterS` 는 `เกนการตามเส้น` ↔ `Turtle` 은 `อัตราขยายในการตามเส้น` |
| 자율주행 차선 | 설정·데이터는 `ช่องทาง` ↔ `lane_detected` 만 `เลน` |
| 자율주행 색 이름 | `AI/SelfDriving` 만 `สีแดง/สีเขียว/สีน้ำเงิน` (접두사 `สี` 포함) ↔ `AI/ColorDetection` 은 `แดง/เขียว/น้ำเงิน` |
| 도움말 | 블록 우클릭은 `ช่วยเหลือ` ↔ 지원 메뉴는 `ความช่วยเหลือ` |
| 모델 상태 | `FaceExpression` 만 `สถานะการโหลดโมเดลตรวจจับสีหน้า`(제목은 `การแสดงสีหน้า`) ↔ 나머지는 모듈명 그대로 |

**`ko` 가 로봇마다 갈라 놓은 교차로 방향을 `th` 앱은 갈라 놓지 않았다.**
`trace_until_grid`(HamsterS)와 `trace_until_grid`(Hamster) 를 `ko` 는
`좌회전/우회전/전진` ↔ `왼쪽/오른쪽/앞` 으로 다르게 쓰는데,
**두 이미지 모두 `เลี้ยวซ้าย` 로 같다.** 이미지를 따라 둘 다
`เลี้ยวซ้าย(left), เลี้ยวขวา(right), ตรงไป(forward), กลับรถ(uturn)` 로 썼다. (`id`·`vi` 와 같은 상황이다)

#### `th` 에서 새로 정한 문서 용어

이미지에 라벨이 없어 문서에서 정한 것들이다.

| ko | th |
|---|---|
| 코딩 가이드 / 코딩 규칙 | `คู่มือการเขียนโค้ด` / `กฎการเขียนโค้ด` |
| 상단 메뉴 / 에디터 / 미리보기 | `เมนูด้านบน` / `ตัวแก้ไข` / `ตัวอย่างแสดงผล` |
| 블록코딩 에디터 / 파이썬 에디터 | `ตัวแก้ไขการเขียนโค้ดด้วยบล็อก` / `ตัวแก้ไข Python` |
| 코딩 영역 / 작업 영역 | `พื้นที่เขียนโค้ด` / `พื้นที่ทำงาน` |
| 순차 실행 / 병렬 실행 | `การทำงานตามลำดับ` / `การทำงานแบบขนาน` |
| 페어링 | `การจับคู่ (pairing)` |
| 드래그 앤 드롭 | `ลากและวาง` |
| 사운드 클립 | `คลิปเสียง` |
| 집게 / 말단 장치 | `กริปเปอร์` / `อุปกรณ์ปลายแขน` |
| 엔코더 / 관절 | `เอนโคเดอร์` / `ข้อต่อ` |
| 컨베이어 | `สายพาน` |
| 스텝/서보/DC 모터 | `สเต็ปมอเตอร์` / `เซอร์โวมอเตอร์` / `มอเตอร์ DC` |
| 신뢰도 임계값 | `ขีดแบ่งความมั่นใจ` |
| 사각형 정보 | `ข้อมูลกรอบสี่เหลี่ยม` |
| 모델 로드하기 / 모델 상태 | `โหลดโมเดล` / `สถานะโมเดล` |
| 한 번 인식하기 / 연속 인식 | `ตรวจจับหนึ่งครั้ง` / `การตรวจจับต่อเนื่อง` |
| 카메라 장치 선택하기 | `เลือกอุปกรณ์กล้อง` |
| 인식 화면 표시하기 | `แสดงผลลัพธ์การตรวจจับ` |

**모듈 제목** (이미지에서 확인): `แปลงเสียงพูดเป็นข้อความ`(ASR, 문서 제목은 `การรู้จำเสียงพูด`) ·
`การตรวจจับใบหน้า` · `การตรวจจับใบหน้าแบบละเอียด` · `การแสดงสีหน้า` · `การตรวจจับมือ` ·
`การตรวจจับร่างกาย` · `การตรวจจับวัตถุ` · `การตรวจจับสี` · `การตรวจจับมาร์กเกอร์ ArUco` ·
`การขับเคลื่อนอัตโนมัติด้วยกล้อง`.
**`ASR` 만 블록 라벨(`แปลงเสียงพูดเป็นข้อความ`)과 확장 모듈 목록 표기가 같고, 문서 제목은
`การรู้จำเสียงพูด` 로 썼다** — `index.md`·`Menu.md` 의 목록은 앱 목록 표기를 따른다.

**CheeseStick 모듈 제목**: `CSD-01 สวิตช์กด` · `CSD-02 ไฟ LED RGB` ·
`CSD-03 โพเทนชิออมิเตอร์แบบหมุน` · `CSD-07 เซ็นเซอร์เสียง` · `CSD-09 มอเตอร์` ·
`CSD-10 เซ็นเซอร์วัดแสง ALS` · `HAT-010 เมทริกซ์ 5x5` · `HAT-022 เปียโนสัมผัส` ·
`PID-13 จอยสติ๊กและปุ่ม` · `PID-26 เซ็นเซอร์สภาพแวดล้อม` · `NeoPixel`.

#### `th` — 이미지에 한 쪽만 보여 확인이 필요한 드롭다운

재촬영본이 나오면 확인할 자리다. 나머지는 모두 이미지로 확인했다.

| 자리 | 보인 라벨 | 추정한 나머지 |
|---|---|---|
| `common/logic/logic_operation` | `และ` | `หรือ` |
| `common/logic/logic_boolean` | `จริง` | `เท็จ` |
| `common/loops/controls_while` | `ขณะที่` | `จนกระทั่ง` |
| `common/loops/controls_flow_statements` | `หยุด` | `ทำต่อ` |
| `common/text/text_changeCase` | `ตัวพิมพ์ใหญ่` | `ตัวพิมพ์เล็ก` · `ตัวพิมพ์ใหญ่เฉพาะอักษรแรก` |
| `common/text/text_trim` | `ลบช่องว่างทั้งสองข้างของ` | 왼쪽 · 오른쪽 |
| `CheeseStick/CSD09/set_step_motor_mode` | `ปกติ`(wave_step) | `ปิด`(off) · `กำลัง`(full_step) |
| `CheeseStick/CSD09/stop_step_motor` | `หยุด`(stop) | `ปิดไฟเลี้ยง`(power) |

---

## 13. 재촬영으로 앱 오번역이 고쳐진 자리 — 용어집보다 이미지가 먼저다

§10 의 `ja` 제품명 사례와 같은 종류의 사건이다. **용어집에 "앱 오번역" 이라고 적혀 있어도
새 언어를 시작할 때는 그 이미지를 다시 열어 확인한다.** 이미 고쳐졌을 수 있다.

### 2026-09-10 — `AI/ColorDetection` 의 `detect_once` · `detect_continuous`

색깔 찾기 모듈인데 **사물 찾기 문구가 재사용되던 오번역**이 21개 언어 전부 재촬영으로
고쳐졌다. `it` 에서 처음 발견되어 `fr` · `sv` · `da` · `no` · `fi` 에도 같은 자리로 기록돼 있었다.

재촬영 후 라벨 (번역 완료 16개 언어):

| 언어 | `detect_once` | `detect_continuous` |
|---|---|---|
| `en` | `detect color once` | `[start] continuous color detection` |
| `es` | `detectar color una vez` | `[iniciar] detección continua de colores` |
| `fr` | `détecter la couleur une fois` | `détection continue de couleurs [démarrer]` |
| `de` | `Farbe einmal erkennen` | `[starten] kontinuierliche Farberkennung` |
| `it` | `rileva il colore una volta` | `[avvia] rilevamento continuo dei colori` |
| `pt` | `detetar cor uma vez` | `[iniciar] deteção contínua de cores` |
| `ja` | `色を1回検出する` | `[開始] 色を連続検出` |
| `zh-hans` | `检测一次颜色` | `[开始] 持续检测颜色` |
| `zh-hant` | `偵測色彩一次` | `[開始] 持續偵測色彩` |
| `nl` | `kleur één keer detecteren` | `[starten] continue kleurdetectie` |
| `sv` | `identifiera färg en gång` | `[starta] kontinuerlig färgdetektering` |
| `da` | `registrér farve én gang` | `[start] kontinuerlig farveregistrering` |
| `no` | `gjenkjenn farge én gang` | `[start] kontinuerlig fargegjenkjenning` |
| `fi` | `tunnista väri kerran` | `[käynnistä] jatkuva värintunnistus` |
| `pl` | `wykryj kolor raz` | `[uruchom] ciągłe wykrywanie koloru` |
| `ru` | `распознать цвет один раз` | `[запустить] непрерывное обнаружение цветов` |
| `tr` | `rengi bir kez algıla` | `[başlat] sürekli renk algılama` |
| `vi` | `phát hiện màu một lần` | `[bắt đầu] phát hiện màu liên tục` |
| `id` | `deteksi warna sekali` | `[mulai] deteksi warna berkelanjutan` |

**`fr` 만 드롭다운이 문장 끝에 온다** (`détection continue de couleurs [démarrer]`).
다른 13개 언어는 앞에 온다.

### 문서 쪽 후속 조치에서 배운 것

오번역을 피해 쓴 11개 언어는 **손댈 것이 없었다.** 고쳐야 했던 곳은 세 언어뿐이다:

| 언어 | 고친 내용 | 왜 |
|---|---|---|
| `zh-hans` | `检测一次物体` → `检测一次颜色`, `持续检测物体` → `持续检测颜色` | 모듈별 갈래인데 오번역을 그대로 복사했다 |
| `zh-hant` | `偵測一次物體` → `偵測一次顏色`, `持續偵測物體` → `持續偵測顏色` | 같은 이유 |
| `ja` | `1回検出する` → `色を1回検出` | 모듈별 갈래(8/9 모듈이 `〜を1回検出`)인데 오번역을 피하려 주어를 뺐다 |

**`zh-hant` 는 라벨을 축자로 옮기지 않았다.** 새 라벨은 `偵測色彩一次` 인데
zh-hant 제목 패턴은 `偵測一次〜` 로 **어순부터 다르므로** 제목은 라벨 인용이 아니다.
문서 전체가 `顏色` 로 통일돼 있어(제목 `顏色偵測` · 매개변수 `顏色名稱` ·
`SelfDriving` 의 형제 제목 `偵測一次顏色/車道線`) `顏色` 를 썼다.
**앱은 이 자리만 `色彩` 로 갈린다** — zh-hant 의 새 갈림으로 기록한다.
