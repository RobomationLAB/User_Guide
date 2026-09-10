---
title: Zmienne
---

# Zmienne

Terminu „zmienna" używamy w tym samym znaczeniu co w matematyce i w innych językach programowania.  
Oznacza on **nazwany element, który przechowuje wartość i pozwala ją zmieniać**.  
  
Zmienne można tworzyć na kilka sposobów.  

- Niektóre bloki, na przykład [licz z](Loops#controls_for) i [dla każdego elementu](Loops#controls_forEach), używają zmiennej i same nadają jej wartość.  
Takie zmienne tradycyjnie nazywa się **zmiennymi pętli (loop variables)**.  
- [Funkcje definiowane przez użytkownika](Functions#procedures_defnoreturn) również używają zmiennych do określenia parametrów, czyli argumentów.
- Użytkownik może utworzyć zmienną w dowolnej chwili za pomocą bloku **przypisz wartość**; tak utworzona zmienna jest deklarowana jako **zmienna globalna (global variable)**.  
- Środowisko programowania blokowego RobomationLAB nie obsługuje **zmiennych lokalnych (local variables)**.  

Po kliknięciu listy rozwijanej w bloku zmiennej pojawiają się następujące opcje.  

- Nazwy wszystkich zmiennych zdefiniowanych dotąd w programie.  
- **„Zmień nazwę zmiennej"**: zmienia nazwę tej zmiennej w całym programie. Po wybraniu tej opcji pojawia się okno, w którym można wpisać nową nazwę.  
- **„Usuń zmienną"**: usuwa z programu wszystkie bloki odwołujące się do tej zmiennej. 


## Przypisz wartość {#variables_set}

Blok **przypisz wartość** przypisuje zmiennej wartość.  
Jeśli w kodzie nie ma jeszcze takiej zmiennej, najpierw deklaruje nową zmienną, a potem przypisuje jej wartość.   

<BlockImage module="common/variables" id="variables_set" />

### Python
```python
item = VAL
```

## Zmień wartość {#math_change}

Blok **zmień** dodaje liczbę do wartości zmiennej.

<BlockImage module="common/variables" id="math_change" />

### Python
```python
item = item + 1
```



## Pobierz wartość {#variables_get}

Poniższy blok podaje wartość zapisaną w zmiennej, ale jej nie zmienia.  
Można użyć tego bloku bez bloku przypisania, ale nie jest to poprawny sposób programowania.

<BlockImage module="common/variables" id="variables_get" />

### Python
```python
item
```
