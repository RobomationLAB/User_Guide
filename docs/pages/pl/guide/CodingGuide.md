---
title: Przewodnik po kodowaniu
---

# Przewodnik po kodowaniu

Ten dokument opisuje RobomationLAB — platformę edukacyjną do programowania robotów, będącą częścią opracowanego przez Robomation „silnika wykonawczego i zintegrowanego środowiska twórczego dla usługi strumieniowania ruchów robota".  

Szczegółowy opis pojawia się w następującej kolejności:
- najważniejsze cechy RobomationLAB
- sposób programowania robotów w RobomationLAB
- podstawy składni programowania robotów w RobomationLAB  

<br>

## Spis treści {#table-of-contents}
1. [RobomationLAB — platforma edukacyjna do programowania robotów](#platform)  
    1-1) [Programy do kodowania robotów](#coding-programs)  
    1-2) [Dwukierunkowy przekład bloki ↔ Python na żywo](#block-python-conversion)  
    1-3) [Najważniejsze cechy programów do kodowania](#features)  
    1-4) [Sterowanie robotem na żywo](#control-method)  

2. [Sposób programowania robotów w RobomationLAB](#programming-method)  
    2-1) [Wykonywanie sekwencyjne i równoległe](#sequential-parallel)  
    2-2) [Funkcja setup](#setup)  
    2-3) [Funkcja loop](#loop)  

3. [Podstawy składni programowania robotów w RobomationLAB](#grammar-syntax)  
    3-1) [Import pakietu robomation](#import-package)  
    3-2) [Tworzenie instancji robota](#create-instance)  
    3-3) [Metody sterowania robotem](#control-methods)  
    3-4) [Odczyt czujników i stanu](#sensor)  
    3-5) [Wykrywanie zdarzeń](#event)  
    3-6) [Czekanie na zakończenie działania (wait)](#wait)  
    3-7) [Funkcje narzędziowe (Utils)](#utils)   

<br><br>

## RobomationLAB — platforma edukacyjna do programowania robotów {#platform}
RobomationLAB to platforma przygotowana pod **edukację w zakresie AI, robotyki i oprogramowania**,  
udostępniająca zintegrowane środowisko twórcze w przeglądarce Chrome, przeznaczone do nauki programowania robotów w szkole podstawowej i średniej.  

RobomationLAB udostępnia programy edukacyjne do kodowania robotów na różne sposoby: **kodowanie blokowe**, **kodowanie skryptowe** i inne.  
Pozwala nie tylko poznać teorię programowania, ale też realnie poruszać robotami Robomation i nimi sterować,  
czyli uczyć się programowania i robotyki naraz.

<br>

### Programy do kodowania robotów {#coding-programs}

#### Block Composer {#block-composer}
**Block Composer to narzędzie, w którym łatwo i szybko sterujesz robotami Robomation za pomocą kodowania blokowego i poznajesz podstawy sterowania robotem.**  

- środowisko twórcze przygotowane pod physical computing

- kodowanie przeciąganiem bloków, proste nawet dla początkujących  
- nauka od podstawowych pojęć, bez błędów składniowych  
- automatyczny przekład na kod skryptowy w Pythonie  
- zestawy bloków z gotowymi funkcjami dla każdego robota i wiele przykładów do wypróbowania
- podgląd wyniku na żywo podczas wykonywania kodu  
- rozwijanie umiejętności rozwiązywania problemów i kreatywności przez układanie bloków  
- dopasowane wskazówki dzięki analizie kodu skryptowego przez AI  

<br>

#### Script Composer {#script-composer}
**Script Composer to narzędzie, w którym łatwo i szybko sterujesz robotami Robomation w Pythonie i poznajesz podstawy składni Pythona oraz programowania robotów.**  

- edytor Pythona

- automatyczne uzupełnianie kodu i wstawianie kodu dla każdego języka
- wiele przykładowych kodów do wypróbowania dla każdego robota
- podgląd wyniku na żywo podczas wykonywania kodu
- dopasowane wskazówki dzięki analizie kodu skryptowego przez AI

<br>

#### Najważniejsze cechy programów do kodowania {#features}
Programy do kodowania robotów w RobomationLAB mają następujące cechy.  
1.	działają w przeglądarce Chrome, więc nie zależą od systemu operacyjnego
2.	dzięki komunikacji Web Serial sterują sprzętem robota bezpośrednio przez adapter USB
3.	obsługują jednoczesne sterowanie wieloma robotami — bez ograniczeń co do rodzaju i liczby robotów
4.	przy zapisie pliku wynik jest przekształcany na tekstowy plik JSON

<br>

### Sterowanie robotem na żywo {#control-method}
Programy do kodowania robotów w RobomationLAB sterują robotem na żywo w następujący sposób.  
1.	W kodowaniu blokowym albo skryptowym
piszesz kod, który ustawia wartości obiektów Effector i Command sterujących robotem
albo korzysta z wartości Sensor i zdarzeń Event robota.
2.	Uruchamiasz kod.
3.	Przez komunikację Web Serial program odbiera od robota pakiety z danymi Sensor i Event
i zapisuje je w obiekcie Device robota.
4.	Kod jest interpretowany na bieżąco:
dane w obiektach Effector i Command są nadpisywane, a wartości obiektów Sensor i Event odczytywane.
5.	Program tworzy pakiet z danymi obiektu Device robota,
wysyła go do robota przez Web Serial i sprawdza, czy robot naprawdę zadziałał.
6.	Przez cały czas wykonywania kodu kroki 3, 4 i 5 powtarzają się mniej więcej co 10-20 ms.  

<br>

### Dwukierunkowy przekład bloki ↔ Python na żywo {#block-python-conversion}
RobomationLAB udostępnia jednocześnie edytor kodu blokowego i edytor kodu Python, a oba są na bieżąco synchronizowane w obie strony.

- Gdy dodasz, zmienisz albo usuniesz blok w edytorze kodu blokowego, zmiana od razu pojawia się w kodzie Python.
- I odwrotnie: gdy zmienisz kod w edytorze Pythona, zmiana od razu pojawia się w blokach.

Ponieważ bloki i kod Python odpowiadają sobie jeden do jednego i są przekładane w obie strony,  
można szybko ułożyć całą strukturę z bloków, a potem dopracować szczegóły w Pythonie albo uczyć się składni Pythona, porównując ją z blokami —  
czyli pracować, swobodnie przechodząc między kodowaniem blokowym a skryptowym.

> Uwaga: przekład Python → bloki działa tylko dla kodu, który da się wyrazić blokami.  
> (Przy błędnej składni albo kodzie, którego nie da się zamienić na bloki, przejście może się nie udać.  
Więcej znajdziesz w dokumencie [Zasady kodowania](CodingRules).)

<br>

<br><br>

## Sposób programowania robotów w RobomationLAB {#programming-method}

### Wykonywanie sekwencyjne i równoległe {#sequential-parallel}
Roboty programuje się na dwa sposoby: sekwencyjnie i równolegle.  
Wykonywanie sekwencyjne to takie, w którym następna czynność zaczyna się po zakończeniu poprzedniej; nadaje się do programowania prostych zachowań.  
Jeśli na przykład robot ma pojechać do przodu, a potem zatrzymać się i zapalić diodę LED, potrzebne jest wykonywanie sekwencyjne, żeby ułożyć kod poszczególnych czynności po kolei i wykonać je w czasie.  

Wykonywanie równoległe to takie, w którym kilka czynności dzieje się naraz; jest potrzebne przy programowaniu bardziej złożonych i zaawansowanych zachowań.  
Jeśli na przykład chcesz zaprogramować chód robota dwunożnego, potrzebne jest kodowanie równoległe, bo chód wymaga jednoczesnego ruchu stóp i nóg robota.

Programy do kodowania robotów w RobomationLAB opierają się na strukturze setup / loop, podobnej do środowiska programowania sprzętu w Arduino,  
i obsługują jednocześnie wykonywanie sekwencyjne i równoległe.

<BlockImage module="program/Editor" id="block-structure" />

Po pierwszym wejściu do Block Composera w obszarze roboczym widać dwa puste bloki funkcji:  
blok „funkcja setup" odpowiada funkcji `setup`, a blok „funkcja loop" — funkcji `loop`.  

Bloki są na bieżąco przekładane na kod Python,  
a kod ma następującą strukturę podstawową.  

```python
# podstawowa struktura kodu Python
from robomation import *

# umieść tutaj kod konfiguracji wykonywany jeden raz:
def setup():
    pass

# umieść tutaj kod sterujący wykonywany cyklicznie:
def loop():
    pass
```

> Żeby sterować robotem, umieść na samej górze kodu `from robomation import *` i zadeklaruj używanego robota jako instancję. (np. `hamster_s = HamsterS(0)`)


<br>

### Funkcja setup {#setup}
Funkcja setup wykonuje się tylko raz, w chwili uruchomienia kodu.  
W funkcji setup umieszcza się przede wszystkim kod, który nadaje zmiennym wartości początkowe albo ustawia tryb i funkcje robota.  
Na przykład sterując robotem jeżdżącym na kołach, można w funkcji setup ustawić początkową prędkość kół.  

Jeśli w funkcji potrzebne jest odczekanie czasu, funkcja `Utils.wait(...)` pozwala pisać kod, który wykonuje się po kolei w czasie, jakby synchronicznie.  
`Utils.wait(...)` czeka podany czas (w sekundach), a potem wykonuje dalszy kod, czyli budzi się po ustalonym czasie albo po zakończeniu czynności i wykonuje kod dalej.  
Połączenie tego z funkcją loop, która działa równolegle, pozwala nie tylko na proste wykonywanie sekwencyjne, ale też na naprawdę rozbudowane programowanie robotów.

Poniżej przykład kodu, w którym robot HamsterS jedzie sekundę do przodu, a potem sekundę do tyłu.  
Zaprogramowanie tego w równolegle działającej funkcji loop wymagałoby mieszania obliczeń czasu z kodem sterującym, przez co kod stałby się bardzo zawiły.  
Zamiast tego wystarczy w funkcji setup użyć funkcji opóźnienia `Utils.wait` i napisać kod, który wykonuje się po kolei w czasie, jakby synchronicznie.  
( Funkcję `Utils.wait` opisujemy jeszcze raz dalej, w części [Funkcje narzędziowe (Utils)](#utils). )

Przykładowy kod (Python)  
```python
from robomation import *

hamster_s = HamsterS(0)

# umieść tutaj kod konfiguracji wykonywany jeden raz:
def setup():
    # jazda do przodu z prędkością obu kół ustawioną na 50
    hamster_s.set_wheel_speed('both', 50)
    Utils.wait(1)   # czekaj sekundę
    # jazda do tyłu z prędkością obu kół ustawioną na -50
    hamster_s.set_wheel_speed('both', -50)
    Utils.wait(1)   # czekaj sekundę
    hamster_s.stop()

# umieść tutaj kod sterujący wykonywany cyklicznie:
def loop():
    pass
```
( Składnię instancji i metod robota opisujemy jeszcze raz dalej, w części [Podstawy składni programowania robotów w RobomationLAB](#grammar-syntax). )


<br>

### Funkcja loop {#loop}
Funkcja loop obsługuje wykonywanie równoległe i powtarza się mniej więcej co 10 ms przez cały czas działania kodu.  
W funkcji loop umieszcza się przede wszystkim kod, który cyklicznie ustawia wartości zmiennych albo wykrywa i obsługuje zdarzenia robota.  

Poniżej przykład kodu, w którym prędkość kół i kolor diod LED robota HamsterS zmieniają się z upływem czasu.  
( Zmienną zadeklarowaną poza funkcjami setup i loop trzeba wewnątrz funkcji zadeklarować słowem kluczowym `global`, żeby dało się ją zmienić. )

```python
from robomation import *

hamster_s = HamsterS(0)
frame = 0

# umieść tutaj kod konfiguracji wykonywany jeden raz:
def setup():
    global frame
    frame = 0

# umieść tutaj kod sterujący wykonywany cyklicznie:
def loop():
    global frame
    frame += 1  # przy każdym wywołaniu funkcji loop wartość zmiennej frame rośnie o 1

    # nowa wartość frame ustawia prędkość obu kół i wartości RGB obu diod LED
    hamster_s.set_wheel_speed('both', frame % 100)
    hamster_s.set_led_color('left', frame % 256, 0, 0)
    hamster_s.set_led_color('right', 0, 0, frame % 256)
```
( Składnię instancji i metod robota opisujemy jeszcze raz dalej, w części [Podstawy składni programowania robotów w RobomationLAB](#grammar-syntax). )  

Poniżej przykład kodu, w którym lekkie stuknięcie w obudowę robota HamsterS (zdarzenie Tap) zapala diody LED na czerwono.  

```python
from robomation import *

hamster_s = HamsterS(0)

# umieść tutaj kod konfiguracji wykonywany jeden raz:
def setup():
    pass

# umieść tutaj kod sterujący wykonywany cyklicznie:
def loop():
    # w chwili stuknięcia wykrywane jest zdarzenie
    if hamster_s.tap():               # przy wykryciu zdarzenia True
        hamster_s.set_led_color('both', 'red')   # zapal obie diody LED na czerwono
    else:
        hamster_s.turn_off('both')               # zgaś obie diody LED
```
( Składnię wykrywania zdarzeń (`tap()`) i pozostałe opisujemy jeszcze raz dalej, w części [Podstawy składni programowania robotów w RobomationLAB](#grammar-syntax). )  

<br><br>

## Podstawy składni programowania robotów w RobomationLAB {#grammar-syntax}
Pisząc kod w programach do kodowania robotów w RobomationLAB, trzeba trzymać się poniższych podstaw składni.  
Robotem steruje się przez pakiet Pythona `robomation`:  
najpierw tworzy się instancję robota, a potem wywołuje jej metody.

### Import pakietu robomation {#import-package}
Żeby korzystać z klas (robotów) i narzędzi (`Utils`) potrzebnych do sterowania robotem, umieść na samej górze kodu ten jeden wiersz.

```python
from robomation import *
```

<br>

### Tworzenie instancji robota {#create-instance}
Zadeklaruj używanego robota jako instancję.  
Nazwa klasy oznacza rodzaj robota, a liczba w nawiasie — indeks instancji (licząc od 0).

```python
hamster_s = HamsterS(0)   # jeden robot HamsterS
```

Nazwy klas i domyślne nazwy zmiennych dla poszczególnych robotów są następujące.

| Robot | Nazwa klasy | Domyślna nazwa zmiennej |
| --- | --- | --- |
| HamsterS | HamsterS | hamster_s |
| Hamster | Hamster | hamster |
| Piobot | Pio | pio |
| Turtle | Turtle | turtle |
| Beagle | Beagle | beagle |
| RaccoonBot | RaccoonBot | raccoon |
| Cheese Stick | CheeseStick | cheesestick |

Używając kilku robotów tego samego rodzaju, zwiększaj indeksy: 0, 1, 2 …

```python
hamster_s = HamsterS(0)
hamster_s_1 = HamsterS(1)
```

<br>

### Metody sterowania robotem {#control-methods}
Robotem steruje się, wywołując metody instancji.  
Metody wykonują czynności robota: ustawiają prędkość kół, jadą, sterują diodami LED, dźwiękiem i tak dalej.

```python
hamster_s.set_wheel_speed('both', 50)    # ustawienie prędkości obu kół
hamster_s.move_distance(10, 'cm')        # jazda 10 cm do przodu
hamster_s.set_led_color('both', 'red')   # obie diody LED na czerwono
```

Listę metod i parametrów dostępnych dla danego robota znajdziesz w jego dokumencie (np. „HamsterS").

<br>

### Odczyt czujników i stanu {#sensor}
Wartości czujników i stan robota też odczytuje się przez metody, które zwracają tę wartość.

```python
left = hamster_s.floor('left')        # odczyt lewego czujnika podłoża
dist = hamster_s.proximity('right')   # odczyt prawego czujnika zbliżeniowego
```

<br>

### Wykrywanie zdarzeń {#event}
Zdarzenia wynikające ze zmiany stanu albo otoczenia wykrywa się tak,  
że odpowiednia metoda zdarzenia zwraca True w chwili jego wystąpienia.

```python
if hamster_s.tap():        # True w chwili wystąpienia zdarzenia stuknięcia (Tap)
    hamster_s.set_led_color('both', 'red')
```

<br>

### Czekanie na zakończenie działania (wait) {#wait}
Metody, których wykonanie trwa — jazda, obrót, odtwarzanie dźwięku — mają parametr `wait`.
- `wait=True` (domyślnie): czeka na zakończenie czynności, a potem wykonuje dalszy kod.
- `wait=False`: rozpoczyna czynność i od razu wykonuje dalszy kod.

```python
hamster_s.move_distance(10, 'cm', wait=True)    # czeka, aż jazda się skończy
hamster_s.move_distance(10, 'cm', wait=False)   # rozpoczyna jazdę i od razu wykonuje dalszy kod
```

<br>

### Funkcje narzędziowe (Utils) {#utils}
Wspólne funkcje niezależne od rodzaju robota — odczekanie czasu, odtworzenie dźwięku, zapis w dzienniku, kolory — wywołuje się przez metody klasy `Utils`.

```python
Utils.wait(1)              # czekaj sekundę
Utils.speak('Dzień dobry') # odtworzenie mowy (TTS)
Utils.log(0, '', '')       # zapis w dzienniku konsoli
```

<br>
