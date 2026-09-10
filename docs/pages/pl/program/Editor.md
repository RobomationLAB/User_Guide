---
title: Edytor
---

# Edytor

**Edytor** to obszar, w którym piszesz kod sterujący robotem — **blokami** albo **kodem skryptowym**.  
Poniżej opisujemy, jak programować w **kodowaniu blokowym** i **skryptowym (Python)** oraz na co uważać.

## Edytor kodu blokowego {#block-editor}

### Kategorie bloków {#block-category}

<BlockImage module="program/Editor" id="block-category" /><br>

To obszar, w którym bloki dostępne w RobomationLAB są podzielone na **kategorie**.  
Po kliknięciu kategorii zobaczysz **paletę bloków** należących do niej.  

Standardowo dostępne są następujące kategorie bloków.  

- Logika
- Pętle
- Matematyka
- Tekst
- Lista
- Kolor
- Dźwięk
- Sterowanie
- Zmienne
- Funkcje
- Inne

Poza tym po dodaniu do programu [**robota**](Menu#robot) albo [**modułu rozszerzenia**](Menu#extension) możesz korzystać z przeznaczonej dla nich palety bloków.  

<br>

**⚙️ Uwaga**  

<BlockImage module="program/Editor" id="block-category-remove" /><br>

Kategorię dodaną do programu, z której już nie korzystasz, usuniesz z kategorii bloków przez **kliknięcie prawym przyciskiem myszy → Usuń**.

<br>

### Paleta bloków {#block-flyout}

<BlockImage module="program/Editor" id="block-flyout" /><br>

To obszar, w którym zebrane są wszystkie bloki z danej kategorii.  
Bloki z palety przenosisz do obszaru kodowania metodą **przeciągnij i upuść**.  

<BlockImage module="program/Editor" id="block-flyout-help" /><br>

**⚙️ Uwaga**  
Jeśli chcesz sprawdzić, jak używać danego bloku, przez **kliknięcie prawym przyciskiem myszy → Pomoc** otworzysz opis użycia tego bloku.  

<br>

### Obszar kodowania {#workspace}

<BlockImage module="program/Editor" id="workspace" /><br>

To obszar, w którym składasz bloki wzięte z palety bloków.  


Złożone bloki są na bieżąco przekładane na **kod Python**,  
a po uruchomieniu kodu program przetwarza go i porusza robotem oraz nim steruje.  

<br>

### Podstawowa struktura bloków {#block-structure}

Programując w edytorze kodu blokowego, trzeba trzymać się poniższej struktury podstawowej.

<BlockImage module="program/Editor" id="block-structure" /><br>

Edytor kodu blokowego przetwarza i wykonuje kod znajdujący się wewnątrz bloków funkcji **funkcja setup** i **funkcja loop**.  
Kod trzeba więc pisać, wstawiając bloki do wnętrza bloków funkcji **funkcja setup** i **funkcja loop**.  

**funkcja setup**  
Wewnątrz bloku funkcji setup określasz czynności wykonywane na początku, przy uruchomieniu kodu.  
Blokiem **czekaj** możesz sprawić, żeby czynności wykonywały się po kolei w czasie.  

**funkcja loop**  
Wewnątrz bloku funkcji loop określasz czynności powtarzane przez cały czas działania kodu.  
Określone czynności powtarzają się co 10 ms.  

**⚙️ Uwaga**  
(pomijając funkcje własne utworzone w **kategorii Funkcje**)  
Bloki znajdujące się poza blokami funkcji **funkcja setup** i **funkcja loop** nie mają żadnego wpływu na wykonywanie kodu.  

<br>

### Jak używać bloków {#block-usage}

**Dodawanie bloku**  

<BlockImage module="program/Editor" id="block-add-1" row />
<BlockImage module="program/Editor" id="block-add-2" row />
<BlockImage module="program/Editor" id="block-add-3" row />
<br>

Blok dodasz, **przeciągając go z palety bloków** i **upuszczając w edytorze**.   
<br>

**Kopiowanie i wklejanie bloków**  

Blok w edytorze kopiuje się i wkleja na dwa sposoby.  

1. Po zaznaczeniu bloku naciśnij **Ctrl+C**, żeby go **skopiować**.  
Naciśnięcie **Ctrl+V** **wkleja** do edytora ostatnio skopiowany blok.  

2. Po zaznaczeniu bloku kliknij w menu **Edycja** przycisk **„Kopiuj Ctrl+C"**, żeby blok **skopiować**.  
Kliknięcie w menu **Edycja** przycisku **„Wklej Ctrl+V"** **wkleja** do edytora ostatnio skopiowany blok.

<br>

**Usuwanie bloku**  

Blok w edytorze usuwa się na trzy sposoby.

1. Po zaznaczeniu bloku naciśnij klawisz **Backspace**, żeby go usunąć.<br>  

2. Blok usuniesz też, **przeciągając go w edytorze** i **upuszczając na kategorie bloków**.  
<br>
<BlockImage module="program/Editor" id="block-delete-1" row />
<BlockImage module="program/Editor" id="block-delete-2" row />
<BlockImage module="program/Editor" id="block-delete-3" row />
<br>

3. Blok usuniesz również, **przeciągając go w edytorze** i **upuszczając na kosz**.  
Usunięty blok znajdziesz z powrotem w **koszu**.<br>  
<BlockImage module="program/Editor" id="block-trash" /><br>  

<br>

**Zaznaczanie kilku bloków naraz**  

Kilka bloków w edytorze zaznacza się naraz na dwa sposoby.

1. Trzymając klawisz **Shift**, przeciągnij po obszarze roboczym albo klikaj bloki po kolei,  
a zaznaczysz kilka bloków naraz.  

2. **Przyciskiem zaznaczania** w prawym dolnym rogu obszaru roboczego włączysz i wyłączysz tryb „zaznaczania wielu bloków".  
Wypełniony kolorem przycisk oznacza, że tryb jest włączony.  
Przycisk bez wypełnienia oznacza, że tryb jest wyłączony.  
<br>
<BlockImage module="program/Editor" id="block-mode-on" row />
<BlockImage module="program/Editor" id="block-mode-off" row />
<br>

Przy włączonym trybie „zaznaczania wielu bloków" można tylko zaznaczać bloki.   
Żeby przenieść albo edytować kilka zaznaczonych bloków naraz, po skończonym zaznaczaniu trzeba wyłączyć ten tryb.  

<br>

**Opcje dodatkowe**

Poza tym po **kliknięciu bloku prawym przyciskiem myszy**  
zobaczysz różne opcje dodatkowe: **zwinięcie i rozwinięcie bloku, włączenie i wyłączenie, pomoc** i inne.  

<br>

## Edytor Pythona {#python-editor}

### Paleta kodu {#python-codes}

<BlockImage module="program/Editor" id="python-codes" /><br>

To obszar, w którym **funkcje podstawowe** potrzebne przy programowaniu robota oraz **kod Python** przeznaczony dla robotów i modułów rozszerzeń są podzielone na **kategorie**.  


W funkcjach podstawowych (Kod) dostępne są następujące kategorie kodu.  

- Logika (logic)
- Pętle (loops)
- Matematyka (math)
- Tekst (text)
- Lista (lists)
- Kolor (color)
- Dźwięk (audio)
- Sterowanie (control)

Kod z funkcji podstawowych robi dokładnie to samo co podstawowe bloki z edytora kodu blokowego.  

<br>

**⚙️ Uwaga**  
Jak programować w edytorze Pythona z użyciem palety kodu, przeczytasz w części [**Jak korzystać z palety kodu**](#python-codes-usage).

<br>

### Edytor kodu {#python-code-editor}

<BlockImage module="program/Editor" id="python-editor" /><br>

To obszar, w którym piszesz kod sterujący robotem.  


Po wybraniu edytora **Python** w [**ustawieniach edytora**](Menu#editor-settings) możesz pisać kod w Pythonie.

<br>

### Podstawowa struktura kodu {#python-structure}

Programując w edytorze kodu, trzeba trzymać się poniższej struktury podstawowej.

```python
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

Edytor kodu przetwarza i wykonuje kod znajdujący się wewnątrz funkcji **setup** i **loop**.  
Kod trzeba więc pisać wewnątrz funkcji **setup** i **loop**.  
Poza tym, żeby sterować robotem, na samej górze kodu trzeba umieścić `from robomation import *` i zadeklarować używanego robota jako instancję.

**setup**  

Wewnątrz funkcji setup określasz czynności wykonywane na początku, przy uruchomieniu kodu.  
Funkcją **Utils.wait** możesz sprawić, żeby czynności wykonywały się po kolei w czasie.  

**loop**  
Wewnątrz funkcji loop określasz czynności powtarzane przez cały czas działania kodu.  
Określone czynności powtarzają się co 10 ms.  


<br>

### Jak korzystać z palety kodu {#python-codes-usage}

Poniżej opisujemy na prostych przykładach, **jak korzystać z palety kodu przy programowaniu**.  

### Szukanie kodu {#python-codes-find}

Paleta kodu zawiera wiele funkcji i fragmentów kodu potrzebnych przy programowaniu robota.  

<BlockImage module="program/Editor" id="codes-find-1" /><br>

Wśród pozycji kategorii **Kod** znajdziesz takie, przy których widnieje ikona <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline />.  

Po jednym kliknięciu pozycji **Logika** ikona zmienia się na <BlockImage module="program/Editor" id="arrow-down" ext="svg" inline />, a **pozycje podrzędne** rozwijają się i stają się widoczne.  
Pozycję z pozycjami podrzędnymi nazywamy „**kategorią**".  

Jeśli przy pozycji nie ma ikony <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> — jak przy **operatorze trójargumentowym** w kategorii **Logika** — oznacza to, że **nie ma w niej pozycji podrzędnych**.  
Pozycję bez pozycji podrzędnych nazywamy „**kodem**".  

<BlockImage module="program/Editor" id="codes-find-2" /><br>

Ponowne kliknięcie rozwiniętej kategorii zmienia ikonę z powrotem na <BlockImage module="program/Editor" id="arrow-right" ext="svg" inline /> i chowa pozycje podrzędne.  

Idąc w ten sposób kategoriami, znajdziesz w palecie kodu potrzebny fragment kodu.

<br>

### Wstawianie kodu do edytora {#python-codes-insert}

Kod do edytora wstawia się tak.  

<BlockImage module="program/Editor" id="codes-insert-1" /><br>

Ikona <BlockImage module="program/Editor" id="circle-empty" ext="svg" inline /> po lewej stronie nazwy pozycji oznacza pozycję bez **opcji kodu** do wyboru.  
Są to najczęściej pozycje **kategorii**, czyli te z pozycjami podrzędnymi.

Ikona <BlockImage module="program/Editor" id="circle-fill" ext="svg" inline /> po lewej stronie nazwy pozycji oznacza pozycję, w której można wybrać **opcje kodu**.  
Są to najczęściej pozycje **kodu**, czyli te bez pozycji podrzędnych.

Po **kliknięciu prawym przyciskiem myszy** kodu, który chcesz wstawić do edytora, zobaczysz dostępne opcje.  

<BlockImage module="program/Editor" id="codes-insert-menu" /><br>

Po kliknięciu pozycji **kodu** prawym przyciskiem myszy zobaczysz te same opcje, niezależnie od tego, czy to funkcja podstawowa, czy kod przeznaczony dla robota lub modułu rozszerzenia.

- **Wstaw kod**: wstawia wybrany kod w miejscu kursora w edytorze.
- **Pomoc**: otwiera opis użycia tego kodu.
- **Anuluj**: zamyka menu opcji.

Przy kodzie przeznaczonym dla robota lub modułu rozszerzenia wybranie **Wstaw kod** wstawia wywołanie metody na instancji tego robota.  
( np. `set_wheel_speed` robota HamsterS → `hamster_s.set_wheel_speed('both', 50)` )

<br>

**⚙️ Uwaga**  

<BlockImage module="program/Editor" id="codes-remove-robot" /><br>

Kategorię kodu dodanego do programu wraz z robotem lub modułem rozszerzenia, z której już nie korzystasz,  
usuniesz z palety kodu przez **kliknięcie prawym przyciskiem myszy → Usuń**.

<br>
