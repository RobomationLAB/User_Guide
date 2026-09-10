---
title: Wyraz twarzy
---

# Wyraz twarzy

## Deklaracja instancji {#instance}

Po dodaniu bloku Wyraz twarzy(FaceExpression) do obszaru roboczego w kodzie Python automatycznie pojawia się następująca deklaracja instancji:

```python
face_expression = FaceExpression(0)
# Gdy instancji jest więcej
face_expression_1 = FaceExpression(1)
```

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| index | Opcja listy rozwijanej | Numer instancji (licząc od 0) | Liczba całkowita 0 lub większa | 0 |


## Ustaw kamerę {#device}

Ustawia kamerę używaną do rozpoznawania wieku, płci i wyrazu twarzy.

<BlockImage module="AI/FaceExpression" id="device" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Nazwa urządzenia kamery | Nazwa kamery w systemie | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.device('')
```

## Załaduj model wyrazu twarzy {#load_model}

Wczytuje wytrenowany model wieku, płci i wyrazu twarzy. Bez tego kroku nie da się korzystać z funkcji modułu „Wyraz twarzy".

<BlockImage module="AI/FaceExpression" id="load_model" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| wait | Pole wyboru | Czy czekać na zakończenie ładowania | TRUE / FALSE | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.load_model(wait=True)
```

## Rozpoznaj wyraz twarzy raz {#detect_once}

Analizuje twarz obecną teraz na ekranie i tylko raz pokazuje przewidziany wiek, płeć i wyraz twarzy.

<BlockImage module="AI/FaceExpression" id="detect_once" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.detect_once()
```

## Uruchom / zatrzymaj ciągłe rozpoznawanie wyrazu twarzy {#detect_continuous}

Analizuje na bieżąco twarz obecną na ekranie i pokazuje na obrazie przewidziany wiek, płeć i wyraz twarzy.

<BlockImage module="AI/FaceExpression" id="detect_continuous" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Działanie | uruchom(start), zatrzymaj(stop) | - |

### Python
```python
face_expression = FaceExpression(0)

# unit = "start"
face_expression.detect_continuous()
# unit = "stop"
face_expression.stop()
```

## Pokaż wynik {#display}

Decyduje, czy na obrazie z kamery ma być pokazywany wynik rozpoznawania wieku, płci i wyrazu twarzy.

<BlockImage module="AI/FaceExpression" id="display" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| on | Opcja listy rozwijanej | Wyświetlanie ON / OFF | pokaż(on=True), ukryj(off=False) | TRUE |

### Python
```python
face_expression = FaceExpression(0)

face_expression.display(True)
face_expression.display(False)
```

## Wiek {#age}

Wiek

<BlockImage module="AI/FaceExpression" id="age" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.age()
```

## Płeć {#gender}

Płeć

<BlockImage module="AI/FaceExpression" id="gender" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender()
```

## Wyraz twarzy {#expression}

Wyraz twarzy

<BlockImage module="AI/FaceExpression" id="expression" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression()
```

## Czy wykryto płeć {#gender_detected}

Czy płeć została rozpoznana

<BlockImage module="AI/FaceExpression" id="gender_detected" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_detected()
```

## Czy to dana płeć {#gender_check}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy rozpoznana płeć zgadza się z podaną.

<BlockImage module="AI/FaceExpression" id="gender_check" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Płeć | mężczyzna(male), kobieta(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_gender('male')
face_expression.is_gender('female')
```

## Pewność rozpoznania płci {#gender_confidence}

Prawdopodobieństwo (pewność), że to wybrana płeć

<BlockImage module="AI/FaceExpression" id="gender_confidence" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Płeć | mężczyzna(male), kobieta(female) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.gender_confidence('male')
face_expression.gender_confidence('female')
```

## Czy wykryto wyraz twarzy {#expression_detected}

Czy wyraz twarzy został rozpoznany

<BlockImage module="AI/FaceExpression" id="expression_detected" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_detected()
```

## Czy to dany wyraz twarzy {#expression_check}

Zwraca **prawdę (True) lub fałsz (False)** w zależności od tego, czy rozpoznany wyraz twarzy zgadza się z podanym.

<BlockImage module="AI/FaceExpression" id="expression_check" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wyraz twarzy | zły(angry), zniesmaczony(disgusted), przestraszony(fearful), szczęśliwy(happy), neutralny(neutral), smutny(sad), zaskoczony(surprised) | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.is_expression('happy')
face_expression.is_expression('sad')
```

## Pewność rozpoznania wyrazu twarzy {#expression_confidence}

Prawdopodobieństwo (pewność), że to wybrany wyraz twarzy

<BlockImage module="AI/FaceExpression" id="expression_confidence" />

### Parametry

| Nazwa | Rodzaj | Opis | Zakres / Typ | Domyślnie |
| --- | --- | --- | --- | --- |
| unit | Opcja listy rozwijanej | Wyraz twarzy | angry, disgusted, fearful, happy, neutral, sad, surprised | - |

### Python
```python
face_expression = FaceExpression(0)

face_expression.expression_confidence('happy')
face_expression.expression_confidence('angry')
```

## Stan modelu {#model_state}

Zwraca stan ładowania modelu wieku, płci i wyrazu twarzy.  
Zwraca 0, jeśli model nie został jeszcze wczytany, 1 w trakcie wczytywania i 2 po jego zakończeniu.

<BlockImage module="AI/FaceExpression" id="model_state" />

### Parametry

(brak)

### Python
```python
face_expression = FaceExpression(0)

face_expression.model_state()
```
