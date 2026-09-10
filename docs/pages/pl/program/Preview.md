---
title: Podgląd
---

# Podgląd

**Podgląd** to obszar, w którym sprawdzasz **Połączenia** oraz korzystasz z kodu, kamery, konsoli i innych rzeczy pomocnych przy programowaniu robota.  
Poniżej opisujemy funkcje dostępne na poszczególnych kartach.

## Połączenia {#robot-status}

<BlockImage module="program/Preview" id="robot-connected" /><br>

Na karcie Połączenia sprawdzisz informacje o podłączonych w tej chwili robotach.   
Po kliknięciu **Pokaż wartość czujnika w czasie rzeczywistym** możesz na bieżąco śledzić wartości czujników robota na wykresie albo w postaci liczb.  

<BlockImage module="program/Preview" id="robot-sensor" /><br>

1. Wybierasz czujnik do podglądu; każdy robot obsługuje inne rodzaje czujników.  
Wykres i sposób wyświetlania danych dopasowują się automatycznie do wartości wybranego czujnika. 

2. Wybierasz, co ile sekund wartości czujnika mają być odczytywane albo zapisywane.  
Od wybranego odstępu zależy, jak długo najdłużej można zapisywać dane i pokazywać je na wykresie. 
3. Po najechaniu myszą na wykres czujnika zobaczysz też wartość czujnika z tej chwili. 
4. Rozpocznij/zatrzymaj zapis: zapisuje dane czujnika. 
5. Eksport: zapisuje do plików zarejestrowane dane czujnika (.csv) i obraz wykresu (.png).  
Ta funkcja działa dopiero po zapisaniu danych. 
6. Zrzut: zapisuje na bieżąco obraz wykresu (.png).  
Możesz rejestrować zmiany wartości czujnika, a zapisane dane i obraz wykresu zapisać do plików.    

<br>

## Podgląd kodu Python {#python-preview}

<BlockImage module="program/Preview" id="python-preview" /><br>

W podglądzie kodu Python widzisz na bieżąco, jak dodawanie i usuwanie bloków przekłada się na kod w **Pythonie**.  
Obserwując, jak bloki zamieniają się w kod, łatwiej poznasz składnię programowania. 

※ Podgląd kodu Python jest dostępny tylko w **edytorze kodu blokowego**.  
W edytorze Pythona kod pisze sam użytkownik, więc podglądu tam nie ma.

<br>

## Kamera {#camera}

<BlockImage module="program/Preview" id="camera" /><br>

Na karcie Kamera widzisz na żywo obraz z kamery podłączonej do komputera.  

Ta funkcja włącza się tylko wtedy, **gdy do programu dodasz moduł rozszerzenia korzystający z kamery**; wtedy na karcie Kamera pojawia się moduł kamery.  

W każdym module kamery dostępne są następujące funkcje.
- Możesz wybrać jedną z kamer dostępnych w komputerze i wyświetlić jej obraz.
- Przyciskiem **Wł. / Wył.** możesz włączyć albo zatrzymać obraz z kamery.
- Możesz zmienić **rozdzielczość kamery**.

<br>

## Konsola {#console}

Na karcie Konsola widzisz na bieżąco komunikaty dziennika (Log) i wykres (Scope) pojawiające się w trakcie działania programu.  
Ta karta przydaje się przy debugowaniu, śledzeniu wartości czujników i analizie na wykresie.  

### Dziennik {#console-log}
Blok **Zapisz w dzienniku** pozwala wypisać w obszarze dziennika konsoli tekst albo liczbę wraz z podanym znacznikiem.   

<BlockImage module="program/Preview" id="console-log" /><br>


### Wykres {#console-scope}

Blok **Pokaż na wykresie** pozwala pokazać wartości liczbowe jako **wykres na żywo**, osobno dla każdego znacznika.  
Ustawiając wartość minimalną, maksymalną i kolor wykresu, zobaczysz zmiany interesującej cię wartości. 

<BlockImage module="program/Preview" id="console-scope" /><br>

<br>
