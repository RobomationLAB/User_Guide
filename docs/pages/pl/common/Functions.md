---
title: Funkcje
---

# Funkcje

**Funkcja** to **zestaw poleceń (bloków)** wykonujących określone zadanie.  
Jeśli powtarzające się czynności zamkniesz w jednej funkcji, kod będzie **zwięzły i łatwiejszy w utrzymaniu**.

Funkcje mają następujące cechy.  
- **Wielokrotne użycie**: raz zdefiniowaną funkcję można wywoływać wiele razy.  
- **Wejście i wyjście**: funkcja może przyjąć parametry (wartości wejściowe), przetworzyć je i zwrócić wynik (wartość wyjściową).  
- **Lepsza czytelność kodu**: pozwala logicznie uporządkować przebieg programu.


## setup {#setup}

**Funkcja setup** jest wywoływana tylko raz, w chwili uruchomienia kodu.  
W funkcji setup umieszcza się przede wszystkim kod, który nadaje zmiennym wartości początkowe albo ustawia tryb i opcje robota.  
Na przykład sterując robotem jeżdżącym na kołach, można w funkcji setup ustawić początkową prędkość kół.  

<BlockImage module="common/functions" id="setup" />
  
Za pomocą funkcji `Utils.wait(...)` można pisać kod, który wykonuje się po kolei w czasie. Połączenie tego z **funkcją loop**, która działa równolegle, pozwala nie tylko na proste wykonywanie sekwencyjne, ale też na naprawdę rozbudowane programowanie robotów.  

### Python
```python
def setup():
    # ...
    return
```

## loop {#loop}

**Funkcja loop** jest wywoływana wielokrotnie, co 10 ms przez cały czas działania programu.  
W funkcji loop umieszcza się przede wszystkim kod, który cyklicznie ustawia wartości zmiennych albo wykrywa i obsługuje zdarzenia robota.

<BlockImage module="common/functions" id="loop" />

### Python
```python
def loop():
    # ...
    return
```

## Definicja funkcji {#procedures_defnoreturn}

Za pomocą bloku definiującego funkcję można utworzyć **nową funkcję**.  
Funkcja bez wartości zwracanej wykonuje określone czynności, ale **nie zwraca żadnej wartości**.

<BlockImage module="common/functions" id="procedures_defnoreturn" />

### Python
```python
def myFunction(arg1, arg2):
    # ...
```

## Definicja funkcji z wartością zwracaną {#procedures_defreturn}

Funkcja z wartością zwracaną wykonuje określone zadanie, a następnie **zwraca wynik**, którego można użyć w innych blokach.  

<BlockImage module="common/functions" id="procedures_defreturn" />

Poniższa funkcja **przyjmuje parametry x i y i zwraca wynik działania x + y**.  

### Python
```python
def myFunction(x, y):
    return x + y
```

## Wywołanie funkcji {#procedures_callnoreturn}

Po zdefiniowaniu funkcji automatycznie powstaje **blok funkcji użytkownika**.  
Pozwala on wywołać i wykonać **wcześniej zdefiniowaną funkcję**.

<BlockImage module="common/functions" id="procedures_callnoreturn" />

### Python
```python
myFunction(arg1, arg2)
```

## Jeśli zwróć {#procedures_ifreturn}

To blok, który **natychmiast zwraca wartość i kończy funkcję**, gdy w jej wnętrzu zostanie spełniony określony warunek.  
Bloku tego można używać **tylko wewnątrz funkcji**; w innych miejscach jest nieaktywny.

<BlockImage module="common/functions" id="procedures_ifreturn" />

### Python
```python
if condition:
    return value
```
