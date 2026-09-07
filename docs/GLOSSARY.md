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

