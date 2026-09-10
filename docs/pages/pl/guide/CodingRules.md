---
title: Zasady kodowania
---

# Zasady kodowania

Ten dokument opisuje zasady kodowania, których trzeba przestrzegać przy programowaniu robotów w RobomationLAB.

> **Uwaga**: kodowanie skryptowe działa **wyłącznie w Pythonie**, a bloki są przekładane jeden do jednego na kod Python korzystający z pakietu `robomation`.

> **Kolejność**: najpierw wspólne zasady podstawowe (1~2), potem zasady kodu blokowego (3~5), a na końcu zasady kodu skryptowego w Pythonie (6~11). Zarówno kod blokowy, jak i generowany kod Python trzeba traktować równie poważnie.

<br>

## 1. Ograniczenia przekładu bloki ↔ Python {#1}
Edytor kodu blokowego i edytor kodu Python odpowiadają sobie jeden do jednego i są na bieżąco przekładane w obie strony.

- Bloki → Python: bloki zawsze zamieniają się na poprawny kod Python.
- Python → bloki: przekładany jest tylko **kod, który da się wyrazić blokami**.

Dlatego po napisaniu w edytorze Pythona poniższego kodu przejście z Pythona do edytora kodu blokowego może się nie udać,  
a wtedy wyświetlana jest też przyczyna niepowodzenia.

1) kod z błędem składni Pythona
2) kod używający funkcji, metod albo składni, którym nie odpowiada żaden blok (nieujętych w regułach przekładu)

Żeby przechodzenie do edytora kodu blokowego działało poprawnie,  
kod trzeba pisać w granicach klas, metod, funkcji i obsługiwanej składni opisanych w tym dokumencie oraz w dokumentach poszczególnych robotów.

<br>

## 2. Zasady podawania kodu {#2}
Wolno używać wyłącznie klas, metod i funkcji wymienionych w **podręczniku API Pythona robomation** oraz w **dokumencie reguł przekładu bloki ↔ Python**.  
Przy sterowaniu robotem surowo zabronione jest tworzenie i używanie nowych metod sterowania robotem, których nie ma w powyższych dokumentach.
Wyjątkiem jest sytuacja, w której użytkownik sam poprosi o utworzenie nowej funkcji.

Zmienne pomocnicze, których nie widać w przykładach przekładu z powyższych dokumentów (np. zmienne inne niż ta przechowująca instancję robota), można tworzyć tylko wtedy, gdy użytkownik poprosi o utworzenie zmiennej.  
Poza tym argumenty metod trzeba zapisywać wprost jako wartości.  

```python
# poprawny przykład
hamster_s.set_wheel_speed('both', 100)

# błędny przykład - użycie funkcji, której nie ma w podręczniku API
hamster_s.set_wheel('both', 100)

# błędny przykład - zadeklarowanie własnej zmiennej
SPEED = 100
hamster_s.set_wheel_speed('both', SPEED)
```

<br>

## 3. Podstawowa struktura kodu blokowego {#3}
Podając kod blokowy, zawsze dołączaj jako podstawową strukturę najwyższe bloki funkcji, które są punktem wejścia programu: funkcja setup i funkcja loop.  
Po dodaniu tej zasady każdy kod blokowy ma odtąd poniższą strukturę podstawową.

| Struktura bloków (Block Composer) | Sposób zapisu (tekstowo) |
| --- | --- |
| funkcja setup | funkcja setup |
| (bloki wewnętrzne) | (bloki wewnętrzne) |
| funkcja loop | funkcja loop |
| (bloki wewnętrzne) | (bloki wewnętrzne) |

<br>

## 4. Format kodu blokowego (zasady łamania wierszy i wcięć) {#4}
- Bloki najwyższego poziomu (funkcja setup, funkcja loop i inne) wyrównuj do lewej.
- Każdy blok polecenia trzeba oddzielić znakiem nowego wiersza, tak żeby w jednym wierszu był tylko jeden blok.
- W blokach z własnym obszarem wykonania (jeśli, powtórz, definicja funkcji i inne) bloki podrzędne w środku trzeba wciąć, żeby hierarchia była wyraźnie widoczna.

<br>

## 5. Zasady zapisu bloków wewnętrznych i warunków {#5}
Wartość wybrana z listy rozwijanej albo wpisana wartość jest funkcjonalnym argumentem bloku i zapisuje się ją w nawiasach kwadratowych ([]) dokładnie w tym miejscu tekstu bloku, w którym się znajduje.  
Dzięki temu tekst samego bloku i wartość wybrana lub wpisana przez użytkownika tworzą jedną, czytelną całość.

Każdy kod blokowy trzeba podawać w postaci zawierającej w nawiasach kwadratowych ([]) zarówno własną nazwę bloku, jak i wartości wybrane z list rozwijanych oraz wpisane przez użytkownika,  
odtwarzając tekstem rzeczywisty wygląd bloku w Block Composerze tak wiernie, jak to możliwe.  

| Struktura bloków (Block Composer) | Sposób zapisu (tekstowo) |
| --- | --- |
| jeśli [warunek] wykonaj [polecenie] w przeciwnym razie [polecenie] | jeśli [warunek] wykonaj [polecenie] w przeciwnym razie [polecenie] |
| RaccoonBot: ustaw tryb sterowania na [prędkość] | RaccoonBot: ustaw tryb sterowania na [prędkość] |
| RaccoonBot: ustaw prędkość przegubu [1] na [100] | RaccoonBot: ustaw prędkość przegubu [1] na [100] |

<br>

## 6. Podstawowa struktura kodu skryptowego {#6}
Podając kod skryptowy (Python), zawsze dołączaj jako podstawową strukturę funkcje setup() i loop(), które są punktem wejścia programu.  
Poza tym na samej górze kodu umieść `from robomation import *`, żeby można było korzystać z klas i narzędzi potrzebnych do sterowania robotem, a używanego robota zadeklaruj jako instancję.  
Po dodaniu tej zasady każdy kod skryptowy (Python) ma odtąd poniższą strukturę podstawową.

```python
# podstawowa struktura kodu Python
from robomation import *

# (jeśli używasz robota, zadeklaruj go jako instancję, przykład)
hamster_s = HamsterS(0)

# umieść tutaj kod konfiguracji wykonywany jeden raz:
def setup():
    pass

# umieść tutaj kod sterujący wykonywany cyklicznie:
def loop():
    pass
```

<br>

## 7. Format kodu skryptowego (zasady łamania wierszy i wcięć) {#7}
- Funkcje najwyższego poziomu (setup, loop i inne) wyrównuj do lewej.
- Wcięcie po złamaniu wiersza to zawsze **jeden tabulator (`\t`)**. (tak samo jak wcięcie w edytorze)

<br>

## 8. Zasady sterowania robotem (instancje i metody) {#8}
Sterując robotem, trzeba trzymać się poniższych zasad.  

1) Na samej górze kodu umieść `from robomation import *`.
2) Zadeklaruj używanego robota jako instancję. Użyj domyślnej nazwy zmiennej ustalonej dla danego robota, a indeksy nadawaj od 0.
3) Steruj robotem, wywołując metody zadeklarowanej instancji.

```python
from robomation import *

hamster_s = HamsterS(0)

def setup():
    hamster_s.set_wheel_speed('both', 50)

def loop():
    pass
```

> Używając kilku robotów tego samego rodzaju, zwiększaj indeksy: 0, 1, 2 … (np. `hamster_s = HamsterS(0)`, `hamster_s_1 = HamsterS(1)`)

Ustawianie prędkości kół, jazda i podobne polecenia same wykonują potrzebne przygotowania (np. porządkują poprzednie polecenia ruchu), więc nie trzeba pisać osobnego kodu inicjującego.

<br>

## 9. Zasady wywoływania funkcji narzędziowych {#9}
Wspólne funkcje narzędziowe, takie jak odczekanie czasu, odtworzenie dźwięku, zapis w dzienniku czy kolory, wywołuje się przez metody klasy `Utils`.  

```python
Utils.wait(1)  # (seconds)
Utils.play_sound('', 100, False)
Utils.log(0, '', '')
```

Pełną listę funkcji narzędziowych znajdziesz w poniższych dokumentach.
- [Kolor](../common/Color)
- [Dźwięk](../common/Audio)
- [Sterowanie](../common/Control)

<br>

## 10. Pierwszeństwo metod własnych robota {#10}
Sterując sprzętem robota (prędkością kół, diodami LED, dźwiękiem i tak dalej),  
używaj w pierwszej kolejności metod instancji robota (np. „HamsterS"), a nie wspólnych funkcji narzędziowych.

Na przykład jeśli dźwięk ma wydać robot,  
zamiast funkcji narzędziowej `Utils.play_sound()` użyj metody `sound_clip()` instancji „HamsterS".

```python
# dźwięk wydaje robot HamsterS. (zalecane)
hamster_s.sound_clip('beep')

# dźwięk wydaje komputer, tablet albo telefon. (niezalecane)
Utils.play_sound('beep', 100, False)
```

<br>

## 11. Zasady importowania {#11}
Pisząc kod w Pythonie, importuj tylko te moduły, które są potrzebne do jego wykonania.
- Do sterowania robotem na samej górze kodu standardowo umieszczaj `from robomation import *`.
- Do kodu używającego `math.` automatycznie dodawane jest `import math`, a do kodu używającego `random.` — `import random`.
- Poza tym nie importuj zbędnych modułów.
