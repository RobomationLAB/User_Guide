---
title: Tekst
---

# Tekst {#text}

Przykłady tekstów:
- "thing #1"
- "March 12, 2010"
- "" (tekst pusty)

Tekst może zawierać wielkie i małe litery, cyfry, znaki interpunkcyjne, inne symbole oraz spacje między wyrazami.  

<BlockImage module="common/text" id="text" />

## Utwórz tekst {#text_join}

Blok **utwórz tekst z** łączy wartości kilku tekstów w jeden nowy tekst.

<BlockImage module="common/text" id="text_join" />

### Python
```python
'' + str(A) + str(B) + str(C)
```

## Dodaj tekst {#text_append}

Blok **dodaj tekst** dopisuje podany tekst do wskazanej zmiennej.

<BlockImage module="common/text" id="text_append" />

### Python
```python
VAR = str(VAR) + TEXT
```

## Długość tekstu {#text_length}

Blok **długość** liczy znaki, cyfry i pozostałe elementy tekstu i zwraca ich łączną liczbę.  
Poniżej długość tekstu `abc` wynosi 3, a długość tekstu pustego wynosi 0.

<BlockImage module="common/text" id="text_length" />

### Python
```python
len(VALUE)
```

## Sprawdzenie pustego tekstu {#text_isEmpty}

Blok **jest pusty** sprawdza, czy podany tekst jest pusty, czyli czy ma długość 0.

<BlockImage module="common/text" id="text_isEmpty" />

### Python
```python
len(VALUE) == 0
```

## Znajdowanie tekstu {#text_indexOf}

Te bloki sprawdzają, czy dany tekst występuje w innym tekście, i jeśli tak, zwracają jego położenie.

<BlockImage module="common/text" id="text_indexOf" />

### Python
```python
(VALUE.find(FIND) + 1)
(VALUE.rfind(FIND) + 1)
```

## Pobranie pojedynczego znaku {#text_charAt}

Pobiera z tekstu jeden znak ze wskazanego miejsca.  
Do wyboru jest kilka opcji: pierwszy, ostatni, losowy albo N-ty znak.

<BlockImage module="common/text" id="text_charAt" />

### Python
```python
TEXT[N - 1]
TEXT[len(TEXT) - N]
TEXT[0]
TEXT[-1]
TEXT[int(random.random() * len(TEXT))]
```

## Pobranie fragmentu tekstu {#text_getSubstring}

Blok **pobierz podciąg** pozwala wyciąć z tekstu fragment z wybranego zakresu.

<BlockImage module="common/text" id="text_getSubstring" />

### Python
```python
TEXT[at1:at2]
```

## Zmiana wielkości liter {#text_changeCase}

Ten blok zamienia podany tekst na jedną z poniższych postaci:

- **WIELKIE LITERY**: zamienia wszystkie litery na wielkie
- **małe litery**: zamienia wszystkie litery na małe
- **Pierwsze Wielkie Litery**: pierwszą literę każdego wyrazu zamienia na wielką, a pozostałe na małe

<BlockImage module="common/text" id="text_changeCase" />

### Python
```python
TEXT.upper() # wielkie litery
TEXT.lower() # małe litery
TEXT.title() # pierwsze wielkie litery
```

## Usuwanie spacji {#text_trim}

Poniższy blok usuwa spacje z tekstu w wybranym miejscu:
- po obu stronach
- z lewej strony
- z prawej strony

<BlockImage module="common/text" id="text_trim" />

### Python
```python
TEXT.strip()    # po obu stronach
TEXT.lstrip()   # z lewej strony
TEXT.rstrip()   # z prawej strony
```

## Liczenie wystąpień tekstu {#text_count}

Liczy, ile razy dany fragment występuje w podanym tekście, i zwraca tę liczbę.

<BlockImage module="common/text" id="text_count" />

### Python
```python
HAYSTACK.count(NEEDLE)
```

## Zamiana fragmentu tekstu {#text_replace}

Zamienia wszystkie wystąpienia danego fragmentu w tekście na inny tekst.

<BlockImage module="common/text" id="text_replace" />

### Python
```python
HAYSTACK.replace(NEEDLE, REPLACEMENT)
```

## Odwracanie tekstu {#text_reverse}

Zwraca nowy tekst z odwróconą kolejnością znaków.

<BlockImage module="common/text" id="text_reverse" />

### Python
```python
TEXT[::-1]
```

## Wypisanie tekstu {#text_print}

Blok **wydrukuj** pokazuje podaną wartość w oknie wyskakującym.

<BlockImage module="common/text" id="text_print" />

### Python
```python
print(TEXT)
```

## Pobranie danych od użytkownika {#text_prompt_ext}

Poniższy blok otwiera okno, w którym użytkownik wpisuje dane; wpisana wartość zostaje zapisana w zmiennej.  
Można pobrać tekst albo liczbę.

<BlockImage module="common/text" id="text_prompt_ext" />

### Python
```python
input(TEXT)
float(input(TEXT))
```
