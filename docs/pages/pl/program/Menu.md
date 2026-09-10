---
title: Menu górne
---

# Menu górne

W **menu górnym** zebrane są funkcje używane w programie najczęściej: podłączenie adaptera i robota, zapisywanie i otwieranie plików i inne.  
Poniżej opisujemy po kolei działanie poszczególnych pozycji menu. 

## Logo {#logo}

<BlockImage module="program/Menu" id="logo-block" /><br>

To logo programu.  
Kliknięcie logo odświeża stronę. 

Gdy włączony jest **edytor kodu blokowego**, w logo widnieje napis **Block Composer**.  

<BlockImage module="program/Menu" id="logo-python" /><br>

Gdy włączony jest **edytor Pythona**, w logo widnieje napis **Script Composer**.  

<br>

## Adapter USB {#dongle}
<BlockImage module="program/Menu" id="dongle-button" /><br>

Pozwala **wyszukać adapter komunikujący się z robotem i podłączyć go do programu**.

Żeby sterować robotem z programu, trzeba najpierw podłączyć do programu adapter komunikujący się z robotem.  
Ten krok nazywa się **parowaniem**. 

Po kliknięciu przycisku **Adapter USB** pojawia się lista adapterów dostępnych w komputerze.  
Po wybraniu adaptera z listy i kliknięciu przycisku **Połącz** adapter zostaje podłączony do programu.  

### Sprawdzanie stanu połączenia adaptera {#dongle-status}

Adapter raz podłączony do programu przy kolejnych uruchomieniach łączy się automatycznie.

<BlockImage module="program/Menu" id="dongle-status-icon" /><br>


Gdy adapter jest poprawnie podłączony do programu, ikona zmienia kolor na **błękitny**.  

<BlockImage module="program/Menu" id="dongle-status-browser" /><br> 

Ikona widoczna na karcie przeglądarki, taka jak na poniższym obrazku, oznacza, że adapter jest podłączony.  

<br>

**⚠️ Uwaga**  

Jeśli adapter jest już podłączony do innego programu albo innej strony, nie połączy się z tym programem.  
W takiej sytuacji znajdź program, do którego adapter jest podłączony, rozłącz go, wróć na tę stronę i spróbuj połączyć się ponownie.

<br>

## Robot {#robot}
<BlockImage module="program/Menu" id="robot-button" /><br>  

Pozwala **wybrać robota**, którego chcesz używać w programie, oraz **dodać do programu informacje o nim wraz z przeznaczonymi dla niego blokami i kodem skryptowym**. 

Żeby sterować robotem z programu, trzeba najpierw dodać do programu informacje o robocie i jego bloki.

<BlockImage module="program/Menu" id="robot-select" /><br>

Po kliknięciu przycisku **Robot** w oknie wyskakującym pojawia się lista robotów dostępnych w programie.  

Po wybraniu robota i kliknięciu przycisku **Dodaj** informacje o tym robocie oraz przeznaczone dla niego bloki i kod skryptowy trafiają do programu.  

<BlockImage module="program/Menu" id="robot-blocks" />  
<BlockImage module="program/Menu" id="robot-codes" /><br>   

Po dodaniu robota powstają następujące elementy. 


- **Block Composer**: w [**palecie bloków**](Editor#block-editor) po lewej pojawiają się **bloki** przeznaczone dla tego robota 
- **Script Composer**: w [**palecie kodu**](Editor#python-editor) po lewej pojawia się **kod skryptowy** przeznaczony dla tego robota

Dzięki temu możesz swobodnie poruszać prawdziwym sprzętem robota i sterować nim: czujnikami, silnikami, diodami LED i resztą.  

<br>

**⚙️ Uwaga**

W RobomationLAB możesz podłączyć i używać dowolnej liczby robotów, niezależnie od ich rodzaju.  

Chcąc jednak używać kilku robotów naraz, musisz mieć podłączone do programu tyle adapterów, ilu robotów chcesz używać, i dodać do programu tyle robotów, ilu chcesz używać.  

<br>

## Rozszerzenie {#extension}
<BlockImage module="program/Menu" id="extension-button" /><br>   

Moduły rozszerzeń dają **funkcje oparte na AI: rozpoznawanie mowy, rozpoznawanie obrazu, analizę zdjęć i inne**.  
Pozwalają **wybrać moduł rozszerzenia**, którego chcesz używać w programie, oraz **dodać do programu informacje o nim wraz z przeznaczonymi dla niego blokami i kodem skryptowym**.  

<BlockImage module="program/Menu" id="extension-select" /><br>

Po kliknięciu przycisku **Rozszerzenie** pojawia się okno z listą modułów rozszerzeń dostępnych w programie.  
- Mowa na tekst
- Wykrywanie twarzy
- Szczegółowe wykrywanie twarzy
- Wyraz twarzy
- Wykrywanie dłoni
- Wykrywanie ciała
- Wykrywanie obiektów
- Wykrywanie kolorów
- Wykrywanie znaczników ArUco
- Autonomiczna jazda z kamerą

Po kliknięciu wybranego modułu, tak samo jak przy [**wyborze robota**](#robot), informacje o tym module rozszerzenia oraz przeznaczone dla niego bloki i kod skryptowy trafiają do programu. 

Po dodaniu do programu modułu korzystającego z kamery, na przykład **Wykrywanie twarzy** czy **Wykrywanie dłoni**,  
na karcie [**Podgląd - Kamera**](Preview#camera) pojawia się moduł kamery i możesz podłączyć kamerę do programu.  

Gdy wybrany moduł rozszerzenia nie jest już potrzebny, możesz usunąć go z listy przez **kliknięcie prawym przyciskiem → Usuń**.

<br>

## Dźwięk {#sound}

<BlockImage module="program/Menu" id="sound-button" /><br>

Możesz wybrać dźwięk do wykorzystania w kodzie albo dodać do programu własny dźwięk z komputera.

### Wybieranie dźwięku {#sound-select}
<BlockImage module="program/Menu" id="sound-select" /><br>

Po kliknięciu przycisku **Dźwięk** pojawia się okno, w którym wybierzesz jeden z wielu dźwięków dostępnych w programie.  
Dostępne są następujące funkcje.  
- wyszukiwanie dźwięku
- ▶ odsłuchanie dźwięku
- dodanie dźwięku do listy dźwięków (panel po lewej)

### Funkcje dodatkowe {#sound-tools}
<BlockImage module="program/Menu" id="sound-tools" /><br>

Po kliknięciu przycisku dodatkowego w lewym dolnym rogu (czerwona ramka) albo najechaniu na niego myszą pojawiają się trzy opcje dodatkowe.  
Dostępne są następujące funkcje.
- dodanie pliku lokalnego: dodaje plik dźwiękowy z komputera użytkownika 
- nagranie dźwięku: dodaje dźwięk nagrany samodzielnie
- dodanie losowego dźwięku: dodaje dźwięk wylosowany z całej listy dźwięków

### Używanie dźwięku w kodzie {#sound-usage}
<BlockImage module="program/Menu" id="sound-selected" /><br>

Dźwięków dodanych do listy dźwięków (panel po lewej) możesz używać w kodzie.

- W **kodowaniu blokowym** wybierasz dźwięk z listy rozwijanej bloku **odtwórz dźwięk**.  

- W **kodowaniu skryptowym** wybierasz dźwięk wśród opcji podrzędnych funkcji **„odtwórz dźwięk"** w kategorii **Kod - Dźwięk**.  

Podczas wykonywania kodu wybrany dźwięk odtwarza się przez głośniki komputera użytkownika.

<br>

## Przykład {#example}
<BlockImage module="program/Menu" id="example-button" /><br>    

Jeśli do programu dodano robota, możesz wczytać i wypróbować proste przykłady przygotowane dla poszczególnych robotów.

### Wybieranie przykładu {#example-select}
<BlockImage module="program/Menu" id="example-select" /><br>

Po kliknięciu przycisku Przykład pojawia się widoczne powyżej okno **Wybierz przykład**.   
Dzięki **podziałowi na kategorie** i **wyszukiwaniu** szybko znajdziesz interesujący cię przykład. 

### Wczytywanie przykładu {#example-load}
1. Kliknij menu **Przykład**, otwórz okno **Wybierz przykład** i wybierz przykład. 
2. Strona odświeża się, a przykład pojawia się w obszarze kodowania.   
3. Po wczytaniu przykładu wystarczy kliknąć **przycisk uruchomienia (▶)**, żeby zobaczyć, jak działa. 

<br>

## Edycja {#edit}

<BlockImage module="program/Menu" id="edit-button" />   

<BlockImage module="program/Menu" id="edit-menu" /><br>


Funkcje pozwalające cofnąć albo powtórzyć wykonaną czynność.
- Kopiuj (Ctrl+C): kopiuje wybrany blok albo kod.
- Wklej (Ctrl+V): wkleja skopiowany blok albo kod do obszaru roboczego.
- Cofnij (Ctrl+Z): cofa ostatnią czynność.
- Ponów (Ctrl+Y): powtarza cofniętą czynność. 

<br>

## Plik {#file}

<BlockImage module="program/Menu" id="file-button" />  

<BlockImage module="program/Menu" id="file-menu" /><br>

Pozwala zarządzać plikami: utworzyć nowy kod, zapisać napisany kod do pliku, wczytać go i tak dalej.

- Nowy  
Czyści obecnie pisany kod i tworzy nowy.

- Zapisz projekt  
Zapisuje plik obecnie tworzonego projektu.  
Plik trafia do folderu „Pobrane" na komputerze użytkownika i ma rozszerzenie „.block".

- Eksportuj kod Python  
Wyodrębnia kod Python obecnie tworzonego projektu i zapisuje go do pliku.  
Plik trafia do folderu „Pobrane" na komputerze użytkownika i ma rozszerzenie „.py".  
Zapisany plik możesz otworzyć i uruchomić w zewnętrznym środowisku Pythona, na przykład w VSCode.

- Otwórz projekt  
Wczytuje z komputera użytkownika plik projektu albo plik z kodem Python.  
Można wczytywać pliki z rozszerzeniami „.block" i „.py".  
Plik „.block" otwiera się w edytorze kodu blokowego, a plik „.py" — w edytorze Pythona.  
Uwaga: plik „.py" może się nie wczytać poprawnie, jeśli nie pasuje do formatu kodu Block Composera albo zawiera błędy składniowe.

<br>

## Uruchomienie / zatrzymanie kodu {#run-stop}

### Uruchomienie (▶) {#run}
<BlockImage module="program/Menu" id="run-button" /><br>

Przetwarza i wykonuje kod blokowy albo skryptowy napisany we włączonym w danej chwili edytorze.  

W zależności od napisanego kodu możesz sterować robotem podłączonym do programu.  
W trakcie wykonywania kodu nie da się go zmieniać.

### Zatrzymanie (■) {#stop}
<BlockImage module="program/Menu" id="stop-button" /><br>

Zatrzymuje wykonywanie kodu.


<br>

## Programowanie z AI {#ai-coding}
<BlockImage module="program/Menu" id="ai-button" /><br>

Po kliknięciu przycisku **Programowanie z AI** w menu górnym po prawej stronie ekranu otwiera się panel czatu AI.  
Możesz rozmawiać z wbudowanym w RobomationLAB **czatem AI** i programować razem z nim.

Dostępne są następujące funkcje.
- Możesz swobodnie pytać o programowanie: jak napisać albo poprawić kod, o składnię, pojęcia i tak dalej.
- **Gdy w trakcie wykonywania kodu pojawi się błąd**, możesz zapytać AI o jego przyczynę i sposób naprawy i szybko rozwiązać problem.
- Kod podany przez AI łatwo skopiujesz przyciskiem kopiowania po prawej stronie bloku kodu.
- Rozmowa jest zapisywana, więc możesz do niej wrócić, a także rozpocząć **nową rozmowę**.
- Szerokość panelu zmienisz, przeciągając jego lewą krawędź.

<br>

## Kopiuj kod {#copy}
<BlockImage module="program/Menu" id="copy-button" /><br>

Pozwala skopiować do schowka kod napisany we włączonym w danej chwili edytorze.  

### Block Composer (kodowanie blokowe) {#copy-block}

Kopiowany jest kod Python widoczny na karcie **[Podgląd kodu Python](Preview#python-preview)**.

### Script Composer (Python) {#copy-python}
Kopiowany jest kod napisany w edytorze Pythona, bez zmian.  

Skopiowany kod wkleisz w dowolnym miejscu skrótem Ctrl+V.

<br>

## Ustawienia edytora {#editor-settings}
<BlockImage module="program/Menu" id="editor-button" /><br>

Możesz wybrać edytor, w którym chcesz programować: **Bloki** albo **Python**.  

Po zmianie edytora wcześniej napisany kod pozostaje bez zmian i w każdej chwili możesz programować dalej. 

**※ Edytor kodu blokowego i edytor Pythona odpowiadają sobie jeden do jednego, więc przy przełączeniu edytora napisany kod jest przekładany i zachowany.**

### Edytor kodu blokowego {#editor-settings-block}
Po wybraniu Bloków logo zmienia się na **Block Composer**.  
Bloki ułożone w edytorze kodu blokowego są na bieżąco przekładane na kod Python, a wynik przekładu zobaczysz na karcie **Podgląd - Podgląd kodu Python**.  

### Edytor Pythona {#editor-settings-python}
Po wybraniu Pythona logo zmienia się na **Script Composer**.  
Kod napisany w edytorze Pythona przy powrocie do **edytora kodu blokowego** zostaje zamieniony na bloki.  

> Uwaga: przekład Python → bloki działa tylko dla kodu, który da się wyrazić blokami.  
> Przy błędnej składni albo kodzie, którego nie da się zamienić na bloki, przejście do edytora kodu blokowego może się nie udać; wyświetlana jest wtedy przyczyna niepowodzenia.

<br>

## Ustawienia {#settings}
<BlockImage module="program/Menu" id="settings-button" />

<BlockImage module="program/Menu" id="settings-menu" /><br>

Pozwala zmienić podstawowe ustawienia programu.

### Język {#settings-language}
Zmienia język, w którym wyświetlany jest program.  
Do wyboru jest 21 języków.

### Adapter USB {#settings-dongle}
- Rozłącz: rozłącza wszystkie adaptery podłączone do programu.
- Połącz: ponownie podłącza adapter do programu.

### Resetowanie {#settings-reset}
- Resetowanie programu: czyści wszystkie dane zapisane w programie (informacje o robotach, bloki i kod skryptowy, ustawienia i resztę).

<br>

## Pomoc {#support}
<BlockImage module="program/Menu" id="support-button" />  

<BlockImage module="program/Menu" id="support-menu" /><br>

Zbiera przewodniki i materiały zewnętrzne przydatne przy korzystaniu z programu.  

- Samouczek: samouczek dla osób, które używają programu po raz pierwszy.
- Pomoc: pozwala od razu w programie sprawdzić sposób użycia bloków i kodu Python wraz z przykładami.
- Podręcznik użytkownika: otwiera stronę wiki z podręcznikiem użytkownika RobomationLAB.  
Znajdziesz tam szczegółowy opis elementów programu i sposobu korzystania z niego, a także działania i składni poszczególnych bloków i fragmentów kodu skryptowego.
- Laboratorium Robomation: otwiera stronę główną RobomationLAB.
- Strona główna: otwiera oficjalną stronę firmy Robomation.
- YouTube: otwiera kanał Robomation na YouTube.
- Sklep internetowy: otwiera sklep internetowy Robomation.
- Informacje: pokazuje wersję programu i historię aktualizacji, regulamin, politykę prywatności i inne informacje.
- Skontaktuj się z nami: pozwala zadać pytanie o program albo zgłosić błąd.

<br>
