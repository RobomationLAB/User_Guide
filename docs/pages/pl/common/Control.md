---
title: Sterowanie
---

# Sterowanie

W programowaniu blokowym **bloki sterujące** wpływają na przebieg programu.  
Pozwalają odczekać określony czas, wykryć naciśnięcie klawisza czy zapisać coś w dzienniku.


## Czekaj {#wait_sec}

Czeka przez podany czas (w sekundach), a potem wykonuje następne polecenie.

<BlockImage module="common/control" id="wait_sec" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| sec | Wejście (pole) | Czas oczekiwania — **liczba wpisana wprost** (np. `Utils.wait(0.5)`) | Liczba rzeczywista 0 lub większa | - |
| sec | Wejście (blok) | Czas oczekiwania — **zmienna lub wyrażenie** (np. `Utils.wait(time)`) | Liczba rzeczywista 0 lub większa | - |

### Python
```python
# pole sec = 2 → bez zmian (w sekundach)
Utils.wait(2)

# wartość ze zmiennej
Utils.wait(myVar)
```

## Czekaj jedną klatkę {#wait_1msec}

Wstrzymuje wykonywanie programu na jedną klatkę (około 0,001 sekundy).

<BlockImage module="common/control" id="wait_1msec" />

### Parametry

(brak — na stałe 0,001 sekundy)

### Python
```python
Utils.wait(0.001)
```

<!--
## Czekaj w nieskończoność {#wait_forever}

Zatrzymuje wykonywanie programu i czeka w nieskończoność.

### Parametry

(brak)

### Python
```python
Utils.wait_forever()
```
-->

## Naciśnięcie klawisza {#key_pressed}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy dany klawisz jest wciśnięty.

<BlockImage module="common/control" id="key_pressed" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| key | Wejście | Nazwa klawisza | space, up, left, right, down, a~z, 0~9,<br>shift, ctrl, alt, enter, tab, esc, backspace | - |

### Python
```python
Utils.keypressed('space')
```

## Zapisz w dzienniku {#log}

Wypisuje na bieżąco wartość wybranej zmiennej lub właściwości w oknie **Konsola**.

<BlockImage module="common/control" id="log" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| data | Wejście | Wypisywana wartość | Dowolna wartość | - |
| tag | Wejście | Znacznik wpisu | Ciąg znaków | - |
| unit | Wejście | Wyświetlana jednostka | Ciąg znaków | - |

### Python
```python
Utils.log(data, '', '')
```

## Pokaż na wykresie {#scope}

Pokazuje zmiany wybranej wartości w oknie **Wykres** w postaci wykresu na żywo.  
Można ustawić kolor wykresu oraz jego wartość minimalną i maksymalną, czyli zakres.

<BlockImage module="common/control" id="scope" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| signal | Wejście (blok) | Wartość sygnału na wykresie | Liczba rzeczywista | - |
| name | Wejście | Nazwa wykresu | Ciąg znaków | - |
| min_val | Wejście (pole) | Wartość minimalna wykresu | Liczba rzeczywista | - |
| max_val | Wejście (pole) | Wartość maksymalna wykresu | Liczba rzeczywista | - |
| color | Kolor | Kolor wykresu (hex) | Ciąg znaków hex | - |

### Python
```python
Utils.scope(signal, '', 0, 100, '#000000')
```
